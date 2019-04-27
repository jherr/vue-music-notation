<template>
  <div id="app">
      <Notation>
      <Staff
        :showTrebleClef="true"
        :showBassClef="true"
        :notes="firstChord"
      />
      <Staff
        :showTrebleClef="true"
        :showBassClef="true"
        :notes="secondChord"
      />
    </Notation>

    <Notation>
      <Staff
        :showTrebleClef="true"
        :showBassClef="true"
        :notes="[note]"
        v-for="note in trebleNotes"
        :key="note"
      />
    </Notation>

    <Notation>
      <Staff
        :showTrebleClef="true"
        :showBassClef="true"
        :notes="[note]"
        :active="index % 2 === 0"
        v-for="(note, index) in bassNotes"
        :key="note"
      />
    </Notation>
  </div>
</template>

<script>
import Notation from './components/Notation.vue'
import Staff from './components/Staff.vue'
import utilities from './components/utilities';

export default {
  name: 'app',
  components: {
    Notation,
    Staff,
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
