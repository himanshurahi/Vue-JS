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
    let name = "himanshrahi";
    let age = 30;
    const p = ref(null);
    const handleClick = () => {
      console.log(p.value);
    };
    return { name, age, handleClick, p };
  },
};
</script>
