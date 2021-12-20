<template>
  <div class="row">
    <div class="col-6" style="margin: auto">
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="exampleInputEmail1">Title</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Project Title"
            v-model="title"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Details</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Project Details"
            v-model="details"
          />
        </div>
        <button type="submit" class="btn btn-primary">Save</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      details: "",
      id: this.$route.params.id,
    };
  },
  methods: {
    handleSubmit() {
      fetch("http://localhost:3000/projects/" + this.id, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: this.title, details: this.details }),
      })
        .then((res) => res.json())
        .then((data) => {
         this.$router.push("/");
        });
    },
  },
  mounted() {
    fetch("http://localhost:3000/projects/" + this.id)
      .then((res) => res.json())
      .then((data) => {
        (this.title = data.title), (this.details = data.details);
      });
  },
};
</script>

<style>
</style>