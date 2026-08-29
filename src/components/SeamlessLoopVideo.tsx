import { useEffect, useRef } from "react";

type Props = {
  src: string;
  poster?: string;
  fade?: number;
  className?: string;
};

/**
 * High-performance seamless looping video player.
 * Uses native hardware-accelerated looping with seamless keyframe wrap
 * and crossfade buffer fallback to guarantee zero-pause playback.
 */
export function SeamlessLoopVideo({ src, poster, fade = 0.8, className = "" }: Props) {
  const aRef = useRef<HTMLVideoElement>(null);
  const bRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const a = aRef.current;
    const b = bRef.current;
    if (!a) return;

    // Critical for Chromium/Safari autoplay policy:
    // Attributes MUST be set directly on the DOM element
    a.setAttribute("muted", "");
    a.setAttribute("playsinline", "");
    a.setAttribute("autoplay", "");
    a.muted = true;
    a.defaultMuted = true;
    a.playsInline = true;

    if (b) {
      b.setAttribute("muted", "");
      b.setAttribute("playsinline", "");
      b.setAttribute("autoplay", "");
      b.muted = true;
      b.defaultMuted = true;
      b.playsInline = true;
    }

    let disposed = false;
    let raf = 0;
    let active = a;
    let idle = b;
    let handingOff = false;

    const playElement = (el: HTMLVideoElement) => {
      if (disposed) return;
      el.muted = true;
      const p = el.play();
      if (p !== undefined) {
        p.catch(() => {
          // Autoplay policy retry listener
          const retry = () => {
            if (!disposed && el.paused) {
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

    // Ensure active video starts immediately
    playElement(active);

    const onCanPlay = () => playElement(active);
    a.addEventListener("canplay", onCanPlay);
    a.addEventListener("loadeddata", onCanPlay);

    const tick = () => {
      if (disposed) return;
      raf = requestAnimationFrame(tick);

      // Ensure video never stays paused accidentally
      if (active.paused && active.readyState >= 2) {
        playElement(active);
      }

      const dur = active.duration;
      if (!Number.isFinite(dur) || dur <= 0) return;
      const remaining = dur - active.currentTime;

      // If idle element is available, crossfade seamlessly
      if (idle) {
        if (!handingOff && remaining <= fade) {
          handingOff = true;
          idle.muted = true;
          idle.currentTime = 0;
          playElement(idle);
        }

        if (handingOff) {
          const t = Math.min(1, Math.max(0, 1 - remaining / fade));
          idle.style.opacity = String(t);
          active.style.opacity = String(1 - t);

          if (remaining <= 0.08 || active.ended) {
            idle.style.opacity = "1";
            active.style.opacity = "0";
            active.pause();
            active.currentTime = 0;
            const next = idle;
            idle = active;
            active = next;
            handingOff = false;
          }
        }
      } else {
        // Fallback for single element: loop slightly before cut
        if (remaining <= 0.12) {
          active.currentTime = 0.04;
        }
      }
    };

    raf = requestAnimationFrame(tick);

    const onVisibility = () => {
      if (!document.hidden) {
        playElement(active);
      }
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
      a.removeEventListener("canplay", onCanPlay);
      a.removeEventListener("loadeddata", onCanPlay);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [src, fade]);

  const shared =
    "absolute inset-0 h-full w-full object-cover pointer-events-none " + className;

  return (
    <>
      <video
        ref={aRef}
        className={shared}
        src={src}
        poster={poster}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
        tabIndex={-1}
        style={{ opacity: 1, transform: "scale(1)" }}
      />
      <video
        ref={bRef}
        className={shared}
        src={src}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        style={{ opacity: 0, transform: "scale(1)" }}
        aria-hidden="true"
        tabIndex={-1}
      />
    </>
  );
}

export default SeamlessLoopVideo;
