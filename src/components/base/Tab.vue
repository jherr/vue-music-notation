<template>
  <svg
    style="display: inline;"
    width="20"
    :height="(stringCount + 1) * lineHeight"
  >
    <line
      x1="0"
      x2="20"
      :y1="line.y"
      :y2="line.y"
      style="stroke-width: 1; stroke: black;"
      v-for="line in lines"
      :key="`line_${line.y}`"
    />
    <line
      x1="3"
      x2="18"
      :y1="number.y"
      :y2="number.y"
      style="stroke-width: 1; stroke: white;"
      v-for="number in numbers"
      :key="`line_${tabIndex}_${number.number}_${number.y}`"
    />
    <text
      x="16"
      :y="number.y + (lineHeight / 3.5)"
      :style="`font-size: ${lineHeight * 0.8}px;`"
      class="number"
      v-for="number in numbers"
      :key="`chord_${tabIndex}_${number.number}_${number.y}`"
    >
      {{ number.number }}
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
    chord: {
      default: () => [ -1, -1, -1, -1, -1, -1 ],
    },
    tabIndex: {
      default: 0,
    },
  },
  data() {
    const numbers = [];
    this.chord.forEach((number, string) => {
      if (number > -1) {
        numbers.push({
          y: (constants.tabulature.LINE_HEIGHT * (this.stringCount - string)) + (constants.tabulature.LINE_HEIGHT / 2),
          string,
          number,
        });
      }
    });
    const lines = [];
    for (let string = 0; string < this.stringCount; string++) {
      lines.push({
        y: (constants.tabulature.LINE_HEIGHT * (this.stringCount - string)) + (constants.tabulature.LINE_HEIGHT / 2),
      });
    }
    return {
      numbers,
      lines,
      lineHeight: constants.tabulature.LINE_HEIGHT,
    }
  }
}
</script>

<style scoped>
.number {
  color: black;
  background: white;
  padding-left: 2px;
  padding-right: 2px;
  text-anchor: end;
  font-family: Arial, Verdana, Sans-Serif;
}
</style>