import { useState, useEffect, useRef } from 'react';

export function useAudioBuffer() {
  const [audioBuffer, setAudioBuffer] = useState(null);
  const audioContextRef = useRef(null);
  const mediaStreamRef = useRef(null);
  const sourceNodeRef = useRef(null);
  const chunksRef = useRef([]);

  useEffect(() => {
    const initAudio = async () => {
      try {
        // Request permission to access the microphone
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        mediaStreamRef.current = stream;

        // Create the AudioContext
        audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();

        // Create a media stream source from the microphone input
        const source = audioContextRef.current.createMediaStreamSource(stream);
        sourceNodeRef.current = source;

        // Create a script processor node to capture the audio data
        const scriptProcessor = audioContextRef.current.createScriptProcessor(4096, 1, 1);
        source.connect(scriptProcessor);
        scriptProcessor.connect(audioContextRef.current.destination);

        scriptProcessor.onaudioprocess = (event) => {
          const inputBuffer = event.inputBuffer;
          const channelData = inputBuffer.getChannelData(0);
          
          // Collect chunks of audio data
          chunksRef.current.push(new Float32Array(channelData));

          // Optionally, combine them into an audio buffer periodically or at a specific trigger
          if (chunksRef.current.length >= 10) { // Example: combine every 10 chunks
            const bufferLength = chunksRef.current.reduce((acc, chunk) => acc + chunk.length, 0);
            const combinedBuffer = audioContextRef.current.createBuffer(1, bufferLength, audioContextRef.current.sampleRate);

            let offset = 0;
            chunksRef.current.forEach((chunk) => {
              combinedBuffer.getChannelData(0).set(chunk, offset);
              offset += chunk.length;
            });

            // Update the state with the combined audio buffer
            setAudioBuffer(combinedBuffer);
            chunksRef.current = []; // Reset chunks after combining
          }
        };
      } catch (err) {
        console.error('Error accessing microphone:', err);
      }
    };

    initAudio();

    return () => {
      // Cleanup on component unmount
      if (mediaStreamRef.current) {
        mediaStreamRef.current.getTracks().forEach((track) => track.stop());
      }
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, []);

  return audioBuffer;
}

export default useAudioBuffer;
