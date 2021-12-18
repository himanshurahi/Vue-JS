<template>
  <div>
    <div>Job Detail</div>
    <p>The job is {{ id }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
    };
  },
};
</script>

<style>
</style>