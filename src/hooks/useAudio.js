import { useState, useEffect } from "react";
import { loadAudioFile, playAudioWithFrequency } from "../modules/audio";
import { note2Freq } from "../modules/notes";

function useAudio(url) {
  const [audio, setAudio] = useState(null);

  useEffect(() => {
    loadAudioFile(url)
      .then((audioBuffer) => {
        setAudio(audioBuffer);
      });
  }, [url]);

  const playNote = (note) => {
    const freq = note2Freq(note);
    playAudioWithFrequency(audio, freq);
  };

  return { audio, playNote };
}

export default useAudio;
