import { useEffect, useRef, useState } from "react";

type Clip = {
  mp4Src: string;
  webmSrc?: string;
};

type Props = {
  clips: Clip[];
  poster?: string;
  className?: string;
  crossfadeSeconds?: number;
  playbackRate?: number;
};

/**
 * Alternates multiple synchronized layers so the sequence loops continuously without hard cuts or blank frames.
 * Respects prefers-reduced-motion by holding a single paused first frame.
 */
export function SeamlessLoopVideo({
  clips,
  poster,
  className = "",
  crossfadeSeconds = 1.0,
  playbackRate = 1.0,
}: Props) {
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const videos = videoRefs.current.filter(
      (video): video is HTMLVideoElement => video !== null
    );
    if (videos.length !== clips.length || videos.length === 0) return;

    videos.forEach((video) => {
      video.setAttribute("muted", "");
      video.setAttribute("playsinline", "");
      video.setAttribute("autoplay", "");
      video.muted = true;
      video.defaultMuted = true;
      video.playsInline = true;
    });

    const first = videos[0];
    if (!first) return;

    if (videos.length === 1) {
      first.loop = true;
      first.play().catch(() => {});
      return;
    }

    let activeIndex = 0;
    let transitioning = false;
    let animationFrame = 0;
    let transitionTimer: ReturnType<typeof setTimeout> | undefined;

    const waitForDecodedFrame = (video: HTMLVideoElement) =>
      new Promise<void>((resolve) => {
        if ("requestVideoFrameCallback" in video) {
          video.requestVideoFrameCallback(() => resolve());
          return;
        }
        requestAnimationFrame(() => requestAnimationFrame(() => resolve()));
      });

    const resetLayers = () => {
      videos.forEach((video, index) => {
        video.pause();
        video.playbackRate = playbackRate;
        video.currentTime = 0;
        video.style.transition = "none";
        video.style.opacity = index === 0 ? "1" : "0";
        video.style.zIndex = "0";
      });
      activeIndex = 0;
      transitioning = false;
    };

    if (reduced) {
      resetLayers();
      return;
    }

    const playElement = (el: HTMLVideoElement) => {
      el.muted = true;
      const p = el.play();
      if (p !== undefined) {
        p.catch(() => {
          const retry = () => {
            if (el.paused) {
              el.muted = true;
              void el.play().catch(() => {});
            }
          };
          window.addEventListener("click", retry, { once: true });
          window.addEventListener("touchstart", retry, { once: true });
          window.addEventListener("scroll", retry, { once: true });
          window.addEventListener("mousemove", retry, { once: true });
        });
      }
    };

    const tick = () => {
      const active = videos[activeIndex];
      if (
        active &&
        !transitioning &&
        Number.isFinite(active.duration) &&
        active.duration > 0 &&
        active.duration - active.currentTime <= crossfadeSeconds
      ) {
        transitioning = true;
        const nextIndex = (activeIndex + 1) % videos.length;
        const next = videos[nextIndex];
        if (next) {
          next.pause();
          next.style.transition = "none";
          next.style.opacity = "0";
          next.style.zIndex = "1";
          active.style.opacity = "1";
          active.style.zIndex = "0";
          next.currentTime = 0;
          next.playbackRate = playbackRate;
          next.muted = true;

          const p = next.play();
          const startTransition = () => {
            waitForDecodedFrame(next).then(() => {
              next.style.transition = `opacity ${crossfadeSeconds}s linear`;
              void next.offsetWidth;
              next.style.opacity = "1";

              transitionTimer = setTimeout(() => {
                active.pause();
                active.currentTime = 0;
                active.style.transition = "none";
                active.style.opacity = "0";
                active.style.zIndex = "0";
                next.style.transition = "none";
                next.style.opacity = "1";
                next.style.zIndex = "0";
                activeIndex = nextIndex;
                transitioning = false;
              }, crossfadeSeconds * 1000);
            });
          };

          if (p !== undefined) {
            p.then(startTransition).catch(() => {
              transitioning = false;
            });
          } else {
            startTransition();
          }
        }
      }
      animationFrame = requestAnimationFrame(tick);
    };

    resetLayers();
    playElement(first);
    animationFrame = requestAnimationFrame(tick);

    const onVisibility = () => {
      if (document.hidden) {
        videos.forEach((video) => video.pause());
      } else {
        const active = videos[activeIndex];
        if (active) playElement(active);
      }
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      document.removeEventListener("visibilitychange", onVisibility);
      cancelAnimationFrame(animationFrame);
      if (transitionTimer) clearTimeout(transitionTimer);
      videos.forEach((video) => video.pause());
    };
  }, [clips, crossfadeSeconds, playbackRate, reduced]);

  const shared =
    "absolute inset-0 h-full w-full object-cover " + (className ?? "");

  return (
    <>
      {clips.map((clip, index) => (
        <video
          key={`${clip.mp4Src}-${index}`}
          ref={(node) => {
            videoRefs.current[index] = node;
          }}
          className={shared}
          style={{
            opacity: index === 0 ? 1 : 0,
          }}
          poster={index === 0 ? poster : undefined}
          autoPlay={index === 0}
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
          tabIndex={-1}
        >
          {clip.webmSrc ? <source src={clip.webmSrc} type="video/webm" /> : null}
          <source src={clip.mp4Src} type="video/mp4" />
        </video>
      ))}
    </>
  );
}

export default SeamlessLoopVideo;
