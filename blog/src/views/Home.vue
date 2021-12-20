<template>
  <div class="home">
    <p ref="p">my name is {{ name }} and {{ age }}</p>
    <button @click="handleClick">Click Me</button>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Home",
  setup() {
    // this.$refs
    //this keyword not available here
    console.log("setup");
    let name = ref("himanshrahi"); //this value is not reactive
    let age = ref(10);
    const p = ref(null);
    const handleClick = () => {
      (name.value = "rahi"), (age.value = 25);
    };
    return { name, age, handleClick, p };
  },
};
</script>
