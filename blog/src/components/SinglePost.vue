<template>
  <div>
    <h3>{{ post.title }}</h3>
    <p>{{ snippt }}</p>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
export default {
  props: ["post"],

  setup(props) {
    const snippt = computed(() => {
      return props.post.body.substring(0, 3);
    });
    return { snippt };
  },
};
</script>

<style>
</style>