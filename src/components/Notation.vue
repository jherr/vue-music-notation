<template>
  <div
    class="container"
  >
    <Staff
      :showTrebleClef="showTrebleClef"
      :showBassClef="showBassClef"
      :showBrace="true"
    />
    <slot />
  </div>
</template>

<script>
import Staff from './Staff';
export default {
  props: {
    showTrebleClef: {
      default: true,
    },
    showBassClef: {
      default: true,
    },
  },
  components: {
    Staff,
  }
}
</script>

<style scoped>
.container {
  overflow-x: clip;
}
</style>
