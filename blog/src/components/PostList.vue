<template>
  <ul>
    <li v-for="post in posts" :key="post.id">
      <SinglePost :post="post" />
    </li>
  </ul>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from "@vue/runtime-core";
import SinglePost from "./SinglePost.vue";
export default {
  props: ["posts"],
  components: { SinglePost },
  setup({ posts }) {
    onMounted(() => console.log("Component Mounted"));
    onUnmounted(() => console.log("Component Unmounted"));
    onUpdated(() => console.log("Component Updated"));
  },
};
</script>

<style>
</style>