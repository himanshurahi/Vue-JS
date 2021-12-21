<template>
  <div class="row">
    <div class="col-6 mt-4" style="margin: auto">
      <h2>Create New Todo</h2>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="exampleInputEmail1">Title</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Title"
            v-model="title"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Body"
            v-model="body"
          />
        </div>
        <button type="submit" class="btn btn-primary" v-if="!loading">Save Todo</button>
        <button class="btn btn-primary" type="button" disabled v-if="loading">
          <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
          Saving..
        </button>
      </form>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      title: "",
      body: "",
      loading : false
    };
  },
  methods: {
    ...mapActions(["saveTodo"]),
    async handleSubmit() {
      if (this.title != "" && this.body != "") {
        this.loading = true;
        await this.saveTodo({ title: this.title, body: this.body });
        this.loading = false;
        this.$router.push({ name: "Home" });
      }
    },
  },
};
</script>

<style>
</style>