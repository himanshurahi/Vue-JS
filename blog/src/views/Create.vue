<template>
  <div class="create">
    <form @submit.prevent="handleSubmit">
      <label for="">Title</label>
      <input type="text" name="" id="" v-model="title" />
      <label for="">Content</label>
      <textarea v-model="body"></textarea>
      <label for="">Tags (Hit Enter to add Tags)</label>
      <input
        v-model="tag"
        @keydown.enter.prevent="handleKeyDown"
        type="text"
        name=""
        id=""
      />
      <ul>
        <li v-for="tag in tags" :key="tag">
          {{ tag }}
        </li>
      </ul>
      <button>Save</button>
    </form>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useRouter } from "vue-router";
export default {
  setup() {
    const title = ref("");
    const body = ref("");
    const tag = ref("");
    const tags = ref([]);
    const router = useRouter();
    const handleKeyDown = () => {
      if (!tags.value.includes(tag.value)) {
        // tag.value = tag.value.replace("/s/", "");
        tags.value.push(tag.value);
      }
      tag.value = "";
    };

    const handleSubmit = async () => {
      const post = {
        title: title.value,
        body: body.value,
        tags: tags.value,
      };
      await fetch("http://localhost:3000/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(post),
      });
      router.push({ name: "Home" });
    };

    return { title, body, tag, handleKeyDown, tags, handleSubmit };
  },
};
</script>

<style>
</style>