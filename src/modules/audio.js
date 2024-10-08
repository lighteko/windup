const audioContext = new (window.AudioContext || window.webkitAudioContext)();

async function loadAudioFile(url) {
  const response = await fetch(url);
  const arrayBuffer = await response.arrayBuffer();
  const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
  return audioBuffer;
}

function playAudioWithFrequency(audioBuffer, frequency) {
  const source = audioContext.createBufferSource();
  console.log("Playing Audio");
  source.buffer = audioBuffer;
  source.playbackRate.setValueAtTime(
    frequency / 261.63,
    audioContext.currentTime
  );
  source.connect(audioContext.destination);
  source.start();
}

export { loadAudioFile, playAudioWithFrequency };
