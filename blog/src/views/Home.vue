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
  </div>
</template>

<script>
import { computed, ref, watch, watchEffect } from "vue";
import PostList from "../components/PostList.vue";
export default {
  name: "Home",
  components: { PostList },
  setup() {
    const posts = ref([]);
    const error = ref(null);
    const showPosts = ref(true);

    const load = async () => {
      try {
        let data = await fetch("http://localhost:3000/posts");
        if (!data.ok) {
          throw Error("No Data");
        }

        posts.value = await data.json();
      } catch (e) {
        error.value = e.message;
        console.log(error.value);
      }
    };

    load();

    return { posts, showPosts, error };
  },
};
</script>
