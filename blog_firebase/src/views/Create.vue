<template>
  <div>
    <h2>Create</h2>
    <form v-on:submit.prevent="handleSubmit">
      <input type="text" name="" id="" placeholder="title" v-model="title" />
      <br />
      <br />
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder="Content"
        v-model="content"
      ></textarea>
      <br />
      <button type="sumit">{{ loading ? "Saving..." : "Save" }}</button>
    </form>
  </div>
</template>

<script>
import { addDoc, collection } from "@firebase/firestore";
import { firestore } from "../firebase/config";
export default {
  data() {
    return {
      title: "",
      content: "",
      loading: false,
    };
  },

  methods: {
    async handleSubmit() {
      this.loading = true;
      let post = { title: this.title, content: this.content };
      const postRef = collection(firestore, "posts");
      const res = await addDoc(postRef, post);
      this.loading = false;
      this.$router.push({ name: "Home" });
    },
  },
};
</script>

<style>
</style>