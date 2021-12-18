<template>
  <div>
    <h1>Reaction Timer</h1>
    <button @click="start" :disabled = "isPlaying">Play</button>
    <Block v-if="isPlaying" :delay="delay" />
  </div>
</template>

<script>
import Block from './components/Block.vue';
export default {
  components: { Block },
  name: "App",
  data() {
    return {
      isPlaying: false,
      delay: null,
    };
  },
  methods: {
    start() {
      this.isPlaying = true,
      this.delay = 2000 + Math.random() * 5000
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
