<template>
  <div class="home">
    <p>my name is {{ name }} and {{ age }}</p>
  </div>
</template>

<script>
export default {
  name: "Home",
  setup() {
    console.log("setup");
    let name = "himanshrahi";
    let age = 30;
    return { name, age };
  },
};
</script>
