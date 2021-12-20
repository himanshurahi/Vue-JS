<template>
  <div class="home">
    <input type="text" name="" id="" v-model="search" />
    <p>{{ search }}</p>
    <p v-for="name in matchingName" :key="name">{{ name }}</p>
  </div>
</template>

<script>
import { computed, ref, watch, watchEffect } from "vue";
export default {
  name: "Home",
  setup() {
    const search = ref(" ");
    const names = ref(["rahi", "himasnhrahi"]);

    watch(search, () => {
      console.log("watch run");
    });

    watchEffect(() => {
      console.log("watch effect rn");
    });

    const matchingName = computed(() => {
      return names.value.filter((name) => name.includes(search.value));
    });
    return { names, search, matchingName };
  },
};
</script>
