/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue';
import Staff from '@/components/Staff.vue'
import Notation from '@/components/Notation.vue'
import Tabulature from '@/components/Tabulature.vue'
import Keyboard from '@/components/Keyboard.vue'

storiesOf('Notation', module)
  .add('chord', () => ({
    components: { Staff, Notation },
    template: 
`<Notation
  :showTrebleClef="true"
  :showBassClef="true"
>
  <Staff
    :notes="[60,64,67]"
  />
</Notation>`
  }))
  .add('scale and active note', () => ({
    components: { Staff, Notation },
    template:
`<Notation
  :showTrebleClef="true"
  :showBassClef="true"
>
  <Staff :notes="[60]" />
  <Staff :notes="[64]" :active="true" />
  <Staff :notes="[64]" />
  <Staff :notes="[67]" />
</Notation>`
  }));

storiesOf('Tabulature', module)
  .add('chords', () => ({
    components: { Tabulature },
    template: 
`<Tabulature
  :chords="[ [ 0, 2, 2, 1, 0, 0 ], [ -1, -1, -1, 1, 2, 1 ] ]"
/>`
  }));

storiesOf('Keyboard', module)
  .add('chord', () => ({
    components: { Keyboard },
    template: 
`<Keyboard
  :notes="[60,64,67]"
/>`
  }));
