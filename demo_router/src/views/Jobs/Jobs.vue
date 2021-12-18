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
      jobs: [
        { id: 1, title: "title 1" },
        { id: 2, title: "title 2" },
        { id: 3, title: "title 3" },
      ],
    };
  },
};
</script>

<style>
</style>