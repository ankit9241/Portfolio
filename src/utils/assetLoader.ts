export const CRITICAL_VIDEOS = [
  "/videos/tech_bg.mp4",
  "/videos/project_bg.mp4",
  "/videos/footer_bg.mp4",
];

export const CRITICAL_IMAGES = [
  "/assets/profile-ankit.png",
  "/assets/hero-frame.jpg",
  "/assets/tech_frame.jpg",
  "/assets/footer_frame.jpg",
  "/experience/thrive-wellness.png",
  "/experience/stc-logo.png",
  "/experience/iitp-logo.png",
  "/assets/certificates/tenure-certificate-2.jpeg",
  "/assets/certificates/Hack-N-Tech-3.0.jpeg",
  "/assets/certificates/code-kshetra.jpeg",
  "/assets/certificates/tenure-certificate-1.png",
  "/assets/certificates/Hack-N-Tech-2.0.jpeg",
  "/assets/certificates/Hack-N-Tech-1.0.png",
  "/assets/projects/basera/basera.svg",
  "/assets/projects/cvpilot/cvpilot-1.png",
  "/assets/projects/podsnap/podsnap-1.png",
  "/assets/projects/stc/stc-1.svg",
  "/assets/projects/examifai/examifai.svg",
  "/assets/projects/envora/envora-1.png",
  "/assets/projects/trackflow/trackflow-1.svg",
  "/assets/projects/kiran/kiran-v1.svg",
  "/assets/projects/kiran/kiran-v2.svg",
  "/assets/projects/crazyone/crazy-one.svg",
  "/assets/projects/planit/planit.svg",
  "/assets/projects/gokulbhandar/gokul-bhandar-1.svg",
];

let vimeoHeroReadyResolvers: Array<(value: boolean) => void> = [];
let isVimeoHeroReadyState = false;

export function notifyVimeoHeroReady(): void {
  if (isVimeoHeroReadyState) return;
  isVimeoHeroReadyState = true;
  vimeoHeroReadyResolvers.forEach((resolve) => resolve(true));
  vimeoHeroReadyResolvers = [];
}

export function isVimeoHeroReady(): boolean {
  return isVimeoHeroReadyState;
}

export function waitForVimeoHeroReady(): Promise<boolean> {
  if (isVimeoHeroReadyState) return Promise.resolve(true);
  return new Promise((resolve) => {
    vimeoHeroReadyResolvers.push(resolve);
    // Timeout fallback (12s) so the loader never hangs indefinitely if Vimeo fails or is blocked
    setTimeout(() => {
      resolve(true);
    }, 12000);
  });
}

export function preloadImage(url: string): Promise<boolean> {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = url;
    if (img.complete) {
      resolve(true);
      return;
    }
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    setTimeout(() => resolve(false), 6000);
  });
}

export function preloadVideo(url: string): Promise<boolean> {
  return new Promise((resolve) => {
    if (typeof document === "undefined") {
      resolve(true);
      return;
    }

    const video = document.createElement("video");
    video.preload = "auto";
    video.muted = true;
    video.playsInline = true;
    video.src = url;

    let isDone = false;
    const finish = () => {
      if (!isDone) {
        isDone = true;
        cleanup();
        resolve(true);
      }
    };

    const cleanup = () => {
      video.removeEventListener("canplaythrough", finish);
      video.removeEventListener("canplay", finish);
      video.removeEventListener("loadeddata", finish);
      video.removeEventListener("error", finish);
    };

    if (video.readyState >= 2) {
      finish();
      return;
    }

    video.addEventListener("canplaythrough", finish, { once: true });
    video.addEventListener("canplay", finish, { once: true });
    video.addEventListener("loadeddata", finish, { once: true });
    video.addEventListener("error", finish, { once: true });

    setTimeout(finish, 8000);
    video.load();
  });
}

export function waitForFonts(): Promise<boolean> {
  if (typeof document !== "undefined" && document.fonts && document.fonts.ready) {
    return document.fonts.ready.then(() => true).catch(() => false);
  }
  return Promise.resolve(true);
}

export function waitForDOM(): Promise<boolean> {
  if (typeof document === "undefined") return Promise.resolve(true);
  if (document.readyState === "complete") return Promise.resolve(true);
  return new Promise((resolve) => {
    window.addEventListener("load", () => resolve(true), { once: true });
    setTimeout(() => resolve(true), 4000);
  });
}

export function trackAllAssets(onProgress: (ratio: number) => void): Promise<void> {
  return new Promise((resolve) => {
    const allTasks: Promise<any>[] = [];
    const totalCount = CRITICAL_VIDEOS.length + CRITICAL_IMAGES.length + 3;
    let completedCount = 0;

    const handleItemComplete = () => {
      completedCount++;
      const ratio = Math.min(completedCount / totalCount, 1);
      onProgress(ratio);
    };

    CRITICAL_VIDEOS.forEach((videoUrl) => {
      allTasks.push(preloadVideo(videoUrl).then(handleItemComplete));
    });

    CRITICAL_IMAGES.forEach((imageUrl) => {
      allTasks.push(preloadImage(imageUrl).then(handleItemComplete));
    });

    allTasks.push(waitForFonts().then(handleItemComplete));
    allTasks.push(waitForDOM().then(handleItemComplete));
    allTasks.push(waitForVimeoHeroReady().then(handleItemComplete));

    Promise.allSettled(allTasks).then(() => {
      onProgress(1);
      resolve();
    });

    setTimeout(() => {
      onProgress(1);
      resolve();
    }, 14000);
  });
}
