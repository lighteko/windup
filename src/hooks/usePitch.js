import { useState, useEffect, useRef } from "react";
import { PitchDetector } from "pitchy";

function usePitch() {
  const [pitch, setPitch] = useState(null);
  const detector = useRef(null);
  const audioContext = useRef(null);
  const analyserNode = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    audioContext.current = new (window.AudioContext || window.webkitAudioContext)();
    analyserNode.current = audioContext.current.createAnalyser();
    analyserNode.current.fftSize = 2048; 
    const inputBuffer = new Float32Array(analyserNode.current.fftSize);

    const updatePitch = () => {
      analyserNode.current.getFloatTimeDomainData(inputBuffer);
      const [detectedPitch] = detector.current.findPitch(inputBuffer, audioContext.current.sampleRate);
      setPitch(detectedPitch);
    };

    navigator.mediaDevices.getUserMedia({ audio: true })
      .then((stream) => {
        const source = audioContext.current.createMediaStreamSource(stream);
        source.connect(analyserNode.current);
        detector.current = PitchDetector.forFloat32Array(analyserNode.current.fftSize);
        detector.current.minVolumeDecibels = -20;
        intervalRef.current = setInterval(updatePitch, 100); 
      })
      .catch((err) => {
        console.error("Error accessing audio stream: ", err);
      });

    return () => {
      clearInterval(intervalRef.current); 
      if (audioContext.current) {
        audioContext.current.close(); 
      }
    };
  }, []); 

  return pitch;
}

export default usePitch;