<template>
  <svg
    :width="width"
    :height="height"
    style="shape-rendering: crispEdges;"
  >
    <path
      :d="path.path"
      :class="{ [path.className]: true, active: path.active }"
      :key="path.note"
      v-for="path in keys"
    />
  </svg>
</template>

<script>
const KEYSHAPES = [
  { type: 0, right: 1 },          // C
  { type: 1 },                    // C#
  { type: 0, right: 1, left: 1 }, // D
  { type: 1 },                    // D#
  { type: 0, left: 1 },           // E
  { type: 0, right: 1 },          // F
  { type: 1 },                    // F#
  { type: 0, right: 1, left: 1 }, // G
  { type: 1 },                    // G#
  { type: 0, right: 1, left: 1 }, // A
  { type: 1 },                    // A#
  { type: 0, left: 1 },           // B
];
const NATURAL_WIDTH = 13;
const NATURAL_HEIGHT = NATURAL_WIDTH * 5.5;
const SHARP_WIDTH = NATURAL_WIDTH / 2;
const SHARP_HEIGHT = NATURAL_HEIGHT / 2;

export default {
  props: {
    length: {
      default: 88,
    },
    start: {
      default: 21,
    },
    notes: {
      default: [],
    },
  },
  data() {
    const isActive = {};
    this.notes.forEach(n => isActive[n] = true);

    const keys = [];

    let position = -NATURAL_WIDTH;
    position += 1;
    let wasSharp = false;
    for (let note = this.start; note < this.start + this.length; note++) {
      const shape = { ...KEYSHAPES[note % 12] };
      if (note === this.start) {
        delete shape.left;
      }
      if (note === (this.start + this.length) -1) {
        delete shape.right;
      }

      let path = '';
      let className = '';
      if (shape.type === 0) {
        position += wasSharp ? (SHARP_WIDTH / 2) : NATURAL_WIDTH;
        wasSharp = false;

        if (shape.right && shape.left) {
          path = `M ${position} ${NATURAL_HEIGHT + 1} v ${-SHARP_HEIGHT} `;
          path += `h ${(SHARP_WIDTH / 2)} v ${-SHARP_HEIGHT} `;
          path += `h ${NATURAL_WIDTH - SHARP_WIDTH} v ${SHARP_HEIGHT} h ${SHARP_WIDTH / 2} `;
          path += `v ${SHARP_HEIGHT} h ${-NATURAL_WIDTH}`;
        } else if (shape.right) {
          path = `M ${position} ${NATURAL_HEIGHT + 1} v ${-NATURAL_HEIGHT} `;
          path += `h ${NATURAL_WIDTH - (SHARP_WIDTH / 2)} v ${SHARP_HEIGHT} `;
          path += `h ${SHARP_WIDTH / 2} v ${SHARP_HEIGHT} h ${-NATURAL_WIDTH}`;
        } else if (shape.left) {
          path = `M ${position} ${NATURAL_HEIGHT + 1} v ${-SHARP_HEIGHT} `;
          path += `h ${SHARP_WIDTH / 2} v ${-SHARP_HEIGHT} `;
          path += `h ${NATURAL_WIDTH - (SHARP_WIDTH / 2)} v ${NATURAL_HEIGHT} h ${-NATURAL_WIDTH}`;
        } else {
          path = `M ${position} ${NATURAL_HEIGHT + 1} v ${-NATURAL_HEIGHT} `;
          path += `h ${NATURAL_WIDTH} v ${NATURAL_HEIGHT} h ${-NATURAL_WIDTH}`;
        }
        className = 'natural';
      } else {
        position += NATURAL_WIDTH - (SHARP_WIDTH / 2);

        path = `M ${position} ${SHARP_HEIGHT + 1} v ${-SHARP_HEIGHT} `;
        path += `h ${SHARP_WIDTH} v ${SHARP_HEIGHT} h ${-SHARP_WIDTH}`;

        wasSharp = true;
        className = 'sharp';
      }

      keys.push({
        path,
        className,
        note,
        active: isActive[note] !== undefined,
      });
    }

    return {
      keys,
      height: NATURAL_HEIGHT + 2,
      width: position + NATURAL_WIDTH + 2,
    };
  }
}
</script>

<style scoped>
.natural {
  fill: white;
  stroke-width: 1;
  stroke: black;
}

.sharp {
  fill: black;
  stroke-width: 1;
  stroke: black;
}

.active {
  fill: lightblue;
}
</style>