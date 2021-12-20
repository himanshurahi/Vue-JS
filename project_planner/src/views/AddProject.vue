<template>
  <div class="row">
    <div class="col-lg-6" style="margin: auto">
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
    };
  },
  methods: {
    handleSubmit() {
      let project = {
        title: this.title,
        details: this.details,
        complete: false,
      };
      fetch("http://localhost:3000/projects/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(project),
      })
        .then((res) => {
          this.$router.push("/");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
</style>