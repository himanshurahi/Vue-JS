<template>
  <div>
    <h1>This First APP {{ title }}</h1>
    <div v-if="showModal">
      <Modal :header="['this is data', 4]" @close = 'toggleModal' />
    </div>
    <button @click="toggleModal">Open Modal</button>
  </div>
</template>

<script>
import Modal from "./components/Modal.vue";
export default {
  name: "App",
  components: { Modal },
  data() {
    return {
      title: "himanshurahi",
      showModal: false,
    };
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
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
