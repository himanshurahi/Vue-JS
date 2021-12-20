<template>
  <div>
    <h3>Post Details</h3>
    <h2 v-if="error">{{ error }}</h2>
    <div v-if="post">
      <h4>{{ post.title }}</h4>
      <p>{{ post.content }}</p>
    </div>
    <h2 v-if="!post && !error">Loading..</h2>
  </div>
</template>

<script>
import { doc, getDoc } from "@firebase/firestore";
import { firestore } from "../firebase/config";
export default {
  data() {
    return {
      post: "",
      error: "",
    };
  },
  methods: {
    async loadPost() {
      try {
        const postRef = doc(firestore, "posts", this.$route.params.id);
        let snapshot = await getDoc(postRef);
        if (!snapshot.exists()) {
          throw Error("Post Not Exist");
        }
        this.post = { ...snapshot.data(), id: snapshot.id };
      } catch (error) {
        this.error = error.message;
      }
    },
  },

  mounted() {
    this.loadPost();
  },
};
</script>

<style>
</style>