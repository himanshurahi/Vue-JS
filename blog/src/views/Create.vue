<template>
  <div class="create">
    <form action="">
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
export default {
  setup() {
    const title = ref("");
    const body = ref("");
    const tag = ref("");
    const tags = ref([]);

    const handleKeyDown = () => {
      if (!tags.value.includes(tag.value)) {
        // tag.value = tag.value.replace("/s/", "");
        tags.value.push(tag.value);
      }

      tag.value = "";
    };

    return { title, body, tag, handleKeyDown, tags };
  },
};
</script>

<style>
</style>