<template>
  <div class="home">
    <h1>Home</h1>
    <PostList :posts="posts" v-if="showPosts" />
    <button @click="showPosts = !showPosts">Toggle Posts</button>
  </div>
</template>

<script>
import { computed, ref, watch, watchEffect } from "vue";
import PostList from "../components/PostList.vue";
export default {
  name: "Home",
  components: { PostList },
  setup() {
    const posts = ref([
      { title: "this is blog title 1", body: "Blog Body 1", id: 1 },
      { title: "this is blog title 2", body: "Blog Body 2", id: 2 },
    ]);

    const showPosts = ref(true);

    return { posts, showPosts };
  },
};
</script>
