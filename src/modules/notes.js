function note2Freq(note) {
  const middleNotes = {
    CN: 261.63,
    CS: 277.18,
    DN: 293.66,
    DS: 311.13,
    EN: 329.63,
    FN: 349.23,
    FS: 369.99,
    GN: 392.0,
    GS: 415.3,
    AN: 440.0,
    AS: 466.16,
    BN: 493.88,
  };
  const [key, sign, octave] = note.split("");
  return middleNotes[key + sign] * Math.pow(2, Number.parseInt(octave) - 4);
}

function cleanNoteName(note) {
  note.replace("[0-9]", "");
  return note.replace("N", "");
}

function keyDifference(key, inputPitch) {
  const freq = note2Freq(key);
  return freq - inputPitch;
}
/**
 * 
 * @param {float} diff 
 * @returns {Object} [diff, bool(IDLE)]
 */
function diffNormalizer(diff) {
  if (diff < -500) {
    return {
      diff: 0,
      status: true,
    };
  } else if (diff >= 500) {
    return {
      diff: 500,
      status: false,
    }
  } else {
    return {
      diff: diff,
      status: false
    };
  }
}

export { note2Freq, cleanNoteName, keyDifference, diffNormalizer };
