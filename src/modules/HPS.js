import webfft from "webfft";
const SIZE = 4096;

function harmonicProductSpectrum(audioBuffer, harmonics) {
  const channelData = audioBuffer.getChannelData(0);
  const spectrum = preprocess(channelData);
  const freqBins = spectrum.length;

  const hps = new Float32Array(freqBins);
  spectrum.forEach((value, index) => {
    hps[index] = value;
  });

  for (let h = 2; h <= harmonics; h++) {
    for (let i = 0; i < freqBins; i++) {
      const downsampledIndex = Math.floor(i * h);
      if (downsampledIndex < freqBins) {
        hps[i] *= spectrum[downsampledIndex];
      }
    }
  }
  const maxIndex = findMax(hps);
  const frequency = (maxIndex * audioBuffer.sampleRate) / SIZE;
  return frequency;
}

function preprocess(channelData) {
  const fft = new webfft(SIZE / 2);
  const windowed = applyWindow(channelData, SIZE);
  const spectrum = fft.fft(windowed);
  fft.dispose();
  return spectrum;
}

function applyWindow(channelData, windowSize) {
  let windowedSignal = new Float32Array(windowSize);
  for (let n = 0; n < windowSize; n++) {
    let hammingCoeff =
      0.54 - 0.46 * Math.cos((2 * Math.PI * n) / (windowSize - 1));
    windowedSignal[n] = channelData[n] * hammingCoeff;
  }

  return windowedSignal;
}

function findMax(hps) {
  let max = hps[0];
  let maxIndex = 0;
  for (let i = 1; i < hps.length; i++) {
    if (hps[i] > max) {
      max = hps[i];
      maxIndex = i;
    }
  }
  return maxIndex;
}

export default harmonicProductSpectrum;
