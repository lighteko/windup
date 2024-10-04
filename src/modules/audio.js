const audioContext = new (window.AudioContext || window.webkitAudioContext)();

async function loadAudioFile(url) {
  const response = await fetch(url);
  const arrayBuffer = await response.arrayBuffer();
  const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
  return audioBuffer;
}

function playAudioWithFrequency(audioBuffer, frequency) {
  const source = audioContext.createBufferSource();
  source.buffer = audioBuffer;
  // Set the playback rate (1.0 is normal speed, <1.0 is slower, >1.0 is faster)
  source.playbackRate.setValueAtTime(
    frequency / 261.63,
    audioContext.currentTime
  );

  // Connect to the destination (speakers)
  source.connect(audioContext.destination);

  // Start playing the audio
  source.start();
}

export { loadAudioFile, playAudioWithFrequency };
