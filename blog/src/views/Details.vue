<template>
  <div v-if="post">
    <h3>Post Detail</h3>
    <h4>{{ post.title }}</h4>
    <p>{{ post.body }}</p>
  </div>
</template>

<script>
import { onMounted } from "@vue/runtime-core";
import getPost from "../Composables/getPost";
import { useRoute } from "vue-router";
export default {
  setup(props) {
    const route = useRoute();
    const { post, error, load } = getPost(route.params.id);
    load();
    return { post, error };
  },
};
</script>

<style>
</style>