<template>
  <div>
    <router-link :to="{ name: 'Details', params: { id: post.id } }">
      <h3>{{ post.title }}</h3>
    </router-link>
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