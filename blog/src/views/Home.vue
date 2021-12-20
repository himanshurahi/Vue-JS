<template>
  <div class="home">
    <p ref="p">my name is {{ nameOne.name }} and {{ nameOne.age }}</p>
    <button @click="updateName">Click Me</button>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Home",
  setup() {
    const nameOne = ref({ name: "himanshirahi", age: 35 });

    const updateName = () => {
      nameOne.value.name = "yah";
    };
    return { nameOne, updateName };
  },
};
</script>
