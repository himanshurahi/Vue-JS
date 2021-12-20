<template>
  <div>
    <h3>tags Page</h3>
    <h2 v-if="error">{{ error }}</h2>
    <div v-if="postWithTags.length">
      <PostList :posts="postWithTags" />
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { useRoute } from "vue-router";
import PostList from "../components/PostList.vue";
import getPosts from "../Composables/getPosts";
export default {
  components: { PostList },
  setup() {
    const { posts, error, load } = getPosts();
    const routes = useRoute();
    console.log(routes.params)
    load();
    const postWithTags = computed(() => {
      return posts.value.filter((p) => p.tags.includes(routes.params.tag));
    });

    return { postWithTags, error };
  },
};
</script>

<style>
</style>