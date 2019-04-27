<template>
  <svg
    style="display: inline;"
    width="2"
    :height="(stringCount + 1) * lineHeight"
  >
    <line
      x1="1"
      x2="1"
      :y1="lineHeight * 1.5"
      :y2="(stringCount * lineHeight) + (lineHeight / 2)"
      style="stroke-width: 1; stroke: black;"
    />
  </svg>
</template>

<script>
import constants from '../constants';

export default {
  props: {
    stringCount: {
      default: 6,
    },
  },
  data() {
    return {
      lineHeight: constants.tabulature.LINE_HEIGHT,
    }
  }
}
</script>
