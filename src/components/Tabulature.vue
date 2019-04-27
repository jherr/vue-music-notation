<template>
  <div>
    <TabStart
      :stringCount="stringCount"
      :tuning="tuning"
    />
    <Tab
      :chord="chord"
      v-for="(chord, index) in chords"
      :tabIndex="index"
      :key="index"
    />
    <TabEnd
      :stringCount="stringCount"
    />
  </div>
</template>

<script>
import TabStart from './base/TabStart';
import TabEnd from './base/TabEnd';
import Tab from './base/Tab';

export default {
  props: {
    stringCount: {
      default: 6,
    },
    tuning: {
      default: () => [ 'E', 'A', 'D', 'G', 'B', 'E' ],
    },
    chords: {
      default: () => [],
    },
  },
  components: {
    TabStart,
    TabEnd,
    Tab,
  },
}
</script>
