export function playClickSound() {
  const AudioContextClass =
    window.AudioContext ||
    (window as Window & typeof globalThis & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  const audioContext = AudioContextClass ? new AudioContextClass() : null;

  if (!audioContext) return;

  if (audioContext.state === "suspended") {
    void audioContext.resume();
  }

  const now = audioContext.currentTime;

  const masterGain = audioContext.createGain();
  masterGain.gain.setValueAtTime(0.85, now);
  masterGain.connect(audioContext.destination);

  const osc = audioContext.createOscillator();
  const gain = audioContext.createGain();
  osc.type = "sine";
  osc.frequency.setValueAtTime(1600, now);
  osc.frequency.exponentialRampToValueAtTime(400, now + 0.015);

  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(0.38, now + 0.001);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.018);

  osc.connect(gain);
  gain.connect(masterGain);

  const bufferSize = Math.floor(audioContext.sampleRate * 0.006);
  const noiseBuffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
  const noiseData = noiseBuffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i += 1) {
    noiseData[i] = (Math.random() * 2 - 1) * (1 - i / bufferSize);
  }

  const noiseSource = audioContext.createBufferSource();
  const noiseGain = audioContext.createGain();
  const noiseFilter = audioContext.createBiquadFilter();

  noiseSource.buffer = noiseBuffer;
  noiseFilter.type = "highpass";
  noiseFilter.frequency.setValueAtTime(4500, now);

  noiseGain.gain.setValueAtTime(0.0001, now);
  noiseGain.gain.exponentialRampToValueAtTime(0.22, now + 0.001);
  noiseGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.006);

  noiseSource.connect(noiseFilter);
  noiseFilter.connect(noiseGain);
  noiseGain.connect(masterGain);

  osc.start(now);
  osc.stop(now + 0.02);
  noiseSource.start(now);
  noiseSource.stop(now + 0.008);
}

export function playCopySound() {
  const AudioContextClass =
    window.AudioContext ||
    (window as Window & typeof globalThis & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  const audioContext = AudioContextClass ? new AudioContextClass() : null;

  if (!audioContext) return;

  if (audioContext.state === "suspended") {
    void audioContext.resume();
  }

  const now = audioContext.currentTime;

  const clickOscillator = audioContext.createOscillator();
  const clickGain = audioContext.createGain();
  const clickFilter = audioContext.createBiquadFilter();

  clickOscillator.type = "square";
  clickOscillator.frequency.setValueAtTime(2400, now);
  clickOscillator.frequency.exponentialRampToValueAtTime(1400, now + 0.012);

  clickFilter.type = "highpass";
  clickFilter.frequency.setValueAtTime(1800, now);

  clickGain.gain.setValueAtTime(0.0001, now);
  clickGain.gain.exponentialRampToValueAtTime(0.14, now + 0.002);
  clickGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.022);

  clickOscillator.connect(clickFilter);
  clickFilter.connect(clickGain);
  clickGain.connect(audioContext.destination);

  const bufferSize = Math.floor(audioContext.sampleRate * 0.015);
  const noiseBuffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
  const noiseData = noiseBuffer.getChannelData(0);

  for (let i = 0; i < bufferSize; i += 1) {
    noiseData[i] = (Math.random() * 2 - 1) * (1 - i / bufferSize);
  }

  const noiseSource = audioContext.createBufferSource();
  const noiseGain = audioContext.createGain();
  const noiseFilter = audioContext.createBiquadFilter();

  noiseSource.buffer = noiseBuffer;
  noiseFilter.type = "highpass";
  noiseFilter.frequency.setValueAtTime(2500, now);
  noiseGain.gain.setValueAtTime(0.0001, now);
  noiseGain.gain.exponentialRampToValueAtTime(0.08, now + 0.001);
  noiseGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.018);

  noiseSource.connect(noiseFilter);
  noiseFilter.connect(noiseGain);
  noiseGain.connect(audioContext.destination);

  clickOscillator.start(now);
  clickOscillator.stop(now + 0.025);
  noiseSource.start(now);
  noiseSource.stop(now + 0.018);
}
