<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">
      <h1>{{ error }}</h1>
    </div>
    <div v-if="posts.length">
      <PostList :posts="posts" v-if="showPosts" />
    </div>
    <h3 v-else>Loading..</h3>
    <button @click="showPosts = !showPosts">Toggle Posts</button>

    {{count}}
    <button @click="count++">Increase Count</button>
  </div>
</template>

<script>
import { computed, ref, watch, watchEffect } from "vue";
import PostList from "../components/PostList.vue";
import getPosts from "../Composables/getPosts";
export default {
  name: "Home",
  components: { PostList },
  setup() {
    const count = ref(0);
    const { posts, error, load, showPosts } = getPosts();
    load();
    return { posts, showPosts, error, count };
  },
};
</script>
