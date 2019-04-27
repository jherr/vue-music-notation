<template>
  <svg
    style="display: inline;"
    width="20"
    :height="(stringCount + 1) * lineHeight"
  >
    <line
      x1="15"
      x2="15"
      :y1="lines[0].y"
      :y2="lines[this.stringCount - 1].y"
      style="stroke-width: 1; stroke: black;"
    />
    <line
      x1="15"
      x2="20"
      :y1="line.y"
      :y2="line.y"
      style="stroke-width: 1; stroke: black;"
      v-for="line in lines"
      :key="`line_${line.y}`"
    />
    <text
      x="0"
      :y="line.y + (lineHeight / 4)"
      :style="`font-size: ${lineHeight * 0.8}px; font-family: Arial, Verdana, Sans-Serif;`"
      v-for="line in lines"
      :key="`tuning_${line.y}`"
    >
      {{ line.tuning }}
    </text>
  </svg>
</template>

<script>
import constants from '../constants';

export default {
  props: {
    stringCount: {
      default: 6,
    },
    tuning: {
      default: () => [ 'E', 'A', 'D', 'G', 'B', 'E' ],
    },
  },
  data() {
    const lines = [];
    for (let string = 0; string < this.stringCount; string++) {
      lines.push({
        y: (constants.tabulature.LINE_HEIGHT * (this.stringCount - string)) + (constants.tabulature.LINE_HEIGHT / 2),
        string,
        tuning: this.tuning[string],
      });
    }
    return {
      lines,
      lineHeight: constants.tabulature.LINE_HEIGHT,
    }
  }
}
</script>
