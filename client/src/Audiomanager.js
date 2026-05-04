// ─── audioManager.js ───
// Place this file in: src/audioManager.js
// Controls intro audio and background music globally across all pages

const introAudio = new Audio("/intro.mp3");
introAudio.volume = 1;
introAudio.preload = "auto";

const bgAudio = new Audio("/bg.mp3");
bgAudio.volume = 0.5;
bgAudio.loop = true;
bgAudio.preload = "auto";

export const playIntro = () => {
  introAudio.currentTime = 0;
  introAudio.play().catch(() => {});
};

export const stopIntro = () => {
  introAudio.pause();
  introAudio.currentTime = 0;
};

export const startBgMusic = () => {
  bgAudio.currentTime = 0;
  bgAudio.play().catch(() => {});
};

export const stopBgMusic = () => {
  bgAudio.pause();
  bgAudio.currentTime = 0;
};