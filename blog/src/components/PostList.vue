<template>
  <ul>
    <li v-for="post in posts" :key="post.id">
      <SinglePost :post="post" />
    </li>
  </ul>
</template>

<script>
import SinglePost from "./SinglePost.vue";
export default {
  props: ["posts"],
  components: { SinglePost },
  setup({ posts }) {
    console.log(posts);
  },
};
</script>

<style>
</style>