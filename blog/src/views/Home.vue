<template>
  <div class="home">
    <p>my name is {{ name }} and {{ age }}</p>
    <button @click="handleClick">Click Me</button>
  </div>
</template>

<script>
export default {
  name: "Home",
  setup() {
    console.log("setup");
    let name = "himanshrahi";
    let age = 30;
    const handleClick = () => {
      console.log('clicked');
    }
    return { name, age, handleClick };
  },
};
</script>
