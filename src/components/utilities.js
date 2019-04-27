const NOTES = {
  C: { value: 0 },
  'C#': { value: 1, sharp: 1 },
  D: { value: 2 },
  'D#': { value: 3, sharp: 1 },
  E: { value: 4 },
  F: { value: 5 },
  'F#': { value: 6, sharp: 1 },
  G: { value: 7 },
  'G#': { value: 8, sharp: 1 },
  A: { value: 9 },
  'A#': { value: 10, sharp: 1 },
  B: { value: 11 }
};
const SHARPS = [ 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0];

const MIDDLE_C = 60;

export default {
  noteToMIDI: (noteName, octave = 0) => (MIDDLE_C + NOTES[noteName.toUpperCase()].value) + (octave * 12),
  isSharp: (note) => SHARPS[note % 12] === 1,
};
