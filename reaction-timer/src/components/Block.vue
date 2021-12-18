<template>
  <div class="block" v-if="showBlock">Click Me</div>
</template>

<script>
export default {
  props: ["delay"],
  data() {
    return {
      showBlock: false,
    };
  },
  mounted() {
    console.log("Componenet Mounted");
    setTimeout(() => {
      this.showBlock = true;
    }, this.delay);
  },
  updated() {
    console.log("Component Updated");
  },
  unmounted() {
    console.log("Component Unmounted");
  },
};
</script>

<style>
.block {
  width: 400px;
  border-radius: 30px;
  background-color: purple;
  color: white;
  text-align: center;
  padding: 80px 10px;
  margin: auto;
}
</style>