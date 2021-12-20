<template>
  <div v-if="job">
    <div>Job Detail</div>
    <p>The job is {{ id }}</p>
    <p>{{ job.body }}</p>
  </div>
  <div v-else>
    <p>Loading Please Wait.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      job: null,
    };
  },

  mounted() {
    fetch("https://jsonplaceholder.typicode.com/posts/" + this.id)
      .then((res) => res.json())
      .then((data) => {
        this.job = data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style>
</style>