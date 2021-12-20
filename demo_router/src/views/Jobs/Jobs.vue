<template>
  <div>
    <h1>Jobs</h1>
    <ul>
      <li v-for="job in jobs" :key="job">
        <router-link :to="{ name: 'JobsDetails', params: { id: job.id } }">
          {{ job.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobs: [],
    };
  },
  mounted() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        this.jobs = data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style>
</style>