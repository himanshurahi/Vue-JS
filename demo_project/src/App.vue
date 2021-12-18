<template>
  <div>
    <h1>This First APP {{ title }}</h1>
    <Modal header = "This is Header 123" />
  </div>
</template>

<script>
import Modal from './components/Modal.vue'
export default {
  name: "App",
  components : {Modal},
  data() {
    return {
      title: "himanshurahi",
    };
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
