import utilities from '@/components/utilities.js';

describe('utilities', () => {
  it('converts notes to MIDI', () => {
    expect(utilities.noteToMIDI('C')).toBe(60);
  });

  it('checks whether a not is sharp', () => {
    expect(utilities.isSharp(60)).toBe(false);
    expect(utilities.isSharp(61)).toBe(true);
  });
});
