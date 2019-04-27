<template>
  <div id="app">
    <Notation
      :showTrebleClef="true"
      :showBassClef="true"
    >
      <Staff
        :notes="firstChord"
      />
      <Staff
        :notes="secondChord"
      />
    </Notation>

    <Notation
      :showTrebleClef="true"
      :showBassClef="true"
    >
      <Staff
        :notes="[note]"
        v-for="note in trebleNotes"
        :key="note"
      />
    </Notation>

    <Notation
      :showTrebleClef="true"
      :showBassClef="true"
    >
      <Staff
        :notes="[note]"
        :active="index % 2 === 0"
        v-for="(note, index) in bassNotes"
        :key="note"
      />
    </Notation>

    <Keyboard
      :notes="cMajor"
    />

    <Tabulature
      :chords="tabChords"
    />
  </div>
</template>

<script>
import Notation from './components/Notation.vue'
import Staff from './components/Staff.vue'
import Keyboard from './components/Keyboard.vue'
import Tabulature from './components/Tabulature.vue'

import utilities from './components/utilities';

export default {
  name: 'app',
  components: {
    Notation,
    Staff,
    Keyboard,
    Tabulature,
  },
  data() {
    const trebleNotes = [];
    for (let note = 60; note < 84; note++) {
      if (!utilities.isSharp(note)) {
        trebleNotes.push(note);
      }
    }

    const bassNotes = [];
    for (let note = 30; note < 60; note++) {
      if (!utilities.isSharp(note)) {
        bassNotes.push(note);
      }
    }

    return {
      tabChords: [
        [ 0, 2, 2, 1, 0, 0 ],
        [ -1, -1, -1, 1, 2, 1 ],
      ],
      cMajor: [
        utilities.noteToMIDI('C'),
        utilities.noteToMIDI('E'),
        utilities.noteToMIDI('G'),
      ],
      firstChord: [
        utilities.noteToMIDI('C'),
        utilities.noteToMIDI('D'),
        utilities.noteToMIDI('E'),
        utilities.noteToMIDI('F'),
        utilities.noteToMIDI('G'),
        utilities.noteToMIDI('A'),
        utilities.noteToMIDI('B'),
        utilities.noteToMIDI('C', 1),
      ],
      secondChord: [
        utilities.noteToMIDI('C#'),
        utilities.noteToMIDI('D#'),
      ],
      trebleNotes,
      bassNotes,
    };
  }
}
</script>
