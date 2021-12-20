<template>
  <div class="home">
    <h3>Home</h3>
    
    <ul v-if="posts.length">
      <li v-for="post in posts" :key="post.id">
        {{ post.title }}
      </li>
    </ul>
    <h4 v-else>Loading...</h4>
  </div>
</template>

<script>
import { query, getDocs, orderBy, collection } from "firebase/firestore";
// @ is an alias to /src
import { firestore } from "../firebase/config";
export default {
  name: "Home",
  data() {
    return {
      posts: [],
    };
  },

  methods: {
    async getData() {
      const PostRef = collection(firestore, "posts");
      // const q = query(PostRef, orderBy('createdAt', 'desc'))
      const snapshot = await getDocs(PostRef);

      this.posts = snapshot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
        // console.log({ data : doc.data(), id: doc.id });
      });

    },
  },

  mounted() {
    this.getData();
  },
};
</script>
