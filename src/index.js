import Notation from './components/Notation.vue'
import Staff from './components/Staff.vue'
import Keyboard from './components/Keyboard.vue'
import Tabulature from './components/Tabulature.vue'
import BassClef from './components/base/BassClef.vue'
import Flat from './components/base/Flat.vue'
import Note from './components/base/Note.vue'
import Sharp from './components/base/Sharp.vue'
import Tab from './components/base/Tab.vue'
import TabEnd from './components/base/TabEnd.vue'
import TabStart from './components/base/TabStart.vue'
import TrebleClef from './components/base/TrebleClef.vue'

import utilities from './components/utilities';

export default {
  Notation,
  Staff,
  Keyboard,
  Tabulature,

  BassClef,
  Flat,
  Note,
  Sharp,
  Tab,
  TabEnd,
  TabStart,
  TrebleClef,

  utilities,

  install: (Vue) => {
    Vue.component('Notation', Notation);
    Vue.component('Staff', Staff);
    Vue.component('Keyboard', Keyboard);
    Vue.component('Tabulature', Tabulature);

    Vue.component('BassClef', BassClef);
    Vue.component('Flat', Flat);
    Vue.component('Note', Note);
    Vue.component('Sharp', Sharp);
    Vue.component('Tab', Tab);
    Vue.component('TabEnd', TabEnd);
    Vue.component('TabStart', TabStart);
    Vue.component('TrebleClef', TrebleClef);
  },
};