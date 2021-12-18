<template>
  <div>
    <h1>This First APP {{ title }}</h1>
    <input type="text" ref="name" />
    <input type="text" ref="password" />
    <button @click="handleClick">Click me</button>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      title: "himanshurahi",
    };
  },

  methods: {
    handleClick() {
      console.log(this.$refs);
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
