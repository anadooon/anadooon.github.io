// Web Audio API Synthesizer & Distortion Engine for Guitarist & DAW Portfolio

class AudioService {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false;

  private getContext(): AudioContext | null {
    if (typeof window === 'undefined') return null;
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    return this.ctx;
  }

  // Distortion curve generator for guitar drive effect
  private makeDistortionCurve(amount: number = 50): Float32Array {
    const k = typeof amount === 'number' ? amount : 50;
    const nSamples = 44100;
    const curve = new Float32Array(nSamples);
    const deg = Math.PI / 180;
    for (let i = 0; i < nSamples; ++i) {
      const x = (i * 2) / nSamples - 1;
      curve[i] = ((3 + k) * x * 20 * deg) / (Math.PI + k * Math.abs(x));
    }
    return curve;
  }

  // Play subtle metallic tactile click (for buttons & switches)
  public playClick(freq = 1200, type: OscillatorType = 'sine', duration = 0.04) {
    if (this.isMuted) return;
    try {
      const ctx = this.getContext();
      if (!ctx) return;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(120, ctx.currentTime + duration);

      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch {
      // Audio autoplay policy fallback
    }
  }

  // Play Guitar Power Chord with custom waveshaper & cabinet low-pass filter
  public playPowerChord(rootFreq = 164.81 /* E3 */, isDistorted = true) {
    if (this.isMuted) return;
    try {
      const ctx = this.getContext();
      if (!ctx) return;

      const now = ctx.currentTime;
      const duration = 1.6;

      // Root, 5th (root * 1.498), Octave (root * 2)
      const freqs = [rootFreq, rootFreq * 1.4983, rootFreq * 2];

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.18, now);
      masterGain.gain.exponentialRampToValueAtTime(0.001, now + duration);

      // Low pass cabinet speaker filter
      const cabinet = ctx.createBiquadFilter();
      cabinet.type = 'lowpass';
      cabinet.frequency.value = isDistorted ? 3600 : 5000;

      // Distortion wave shaper
      const distortion = ctx.createWaveShaper();
      if (isDistorted) {
        distortion.curve = this.makeDistortionCurve(180) as unknown as Float32Array<ArrayBuffer>;
        distortion.oversample = '4x';
      }

      freqs.forEach((f, idx) => {
        const osc = ctx.createOscillator();
        osc.type = isDistorted ? 'sawtooth' : 'triangle';
        osc.frequency.setValueAtTime(f + (idx * 0.4), now); // slight detune for warmth

        const oscGain = ctx.createGain();
        oscGain.gain.setValueAtTime(0.3, now);

        osc.connect(oscGain);
        if (isDistorted) {
          oscGain.connect(distortion);
        } else {
          oscGain.connect(cabinet);
        }

        osc.start(now + (idx * 0.015)); // strum offset
        osc.stop(now + duration);
      });

      if (isDistorted) {
        distortion.connect(cabinet);
      }
      cabinet.connect(masterGain);
      masterGain.connect(ctx.destination);
    } catch {
      // Audio context handling
    }
  }

  // Synthesizer note for interactive SoundCraft preview
  public playSynthNote(freq: number, waveform: OscillatorType = 'sawtooth') {
    if (this.isMuted) return;
    try {
      const ctx = this.getContext();
      if (!ctx) return;

      const now = ctx.currentTime;
      const duration = 0.5;

      const osc = ctx.createOscillator();
      const filter = ctx.createBiquadFilter();
      const gain = ctx.createGain();

      osc.type = waveform;
      osc.frequency.setValueAtTime(freq, now);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(1800, now);
      filter.frequency.exponentialRampToValueAtTime(300, now + duration);

      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + duration);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + duration);
    } catch {
      // Audio context handling
    }
  }

  public toggleMute(): boolean {
    this.isMuted = !this.isMuted;
    return this.isMuted;
  }

  public getMutedStatus(): boolean {
    return this.isMuted;
  }
}

export const audioEngine = new AudioService();
