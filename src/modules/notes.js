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
  let res = note.replace("S", "#");
  res = res.replace("N", "");
  return res;
}

function keyDifference(key, inputPitch) {
  const freq = note2Freq(key);
  return inputPitch - freq;
}
/**
 * 
 * @param {float} diff 
 * @returns {Object} [diff, bool(IDLE)]
 */
function diffNormalizer(diff) {
  if (diff < -1000) {
    return {
      diff: 0,
      isIdle: true,
    };
  } else if (diff >= 1000) {
    return {
      diff: 500,
      isIdle: false,
    }
  } else {
    return {
      diff: diff / 2,
      isIdle: false
    };
  }
}

export { note2Freq, cleanNoteName, keyDifference, diffNormalizer };
