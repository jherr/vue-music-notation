<template>
  <div id="app">
    <svg
      width="500"
      height="500"
    >
      <TrebleClef :x="10" :y="10" />
      <BassClef :x="10" :y="70" :width="36" :height="40" />
      <Flat :x="50" :y="10" />
      <Sharp :x="70" :y="30" />
      <Note :x="100" :y="10" />
    </svg>
  </div>
</template>

<script>
import TrebleClef from './components/TrebleClef.vue'
import BassClef from './components/BassClef.vue'
import Flat from './components/Flat.vue'
import Sharp from './components/Sharp.vue'
import Note from './components/Note.vue'

export default {
  name: 'app',
  components: {
    TrebleClef,
    BassClef,
    Flat,
    Sharp,
    Note,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
