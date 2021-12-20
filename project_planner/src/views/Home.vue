<template>
  <div>
    <ul class="list-group">
      <li class="list-group-item" v-for="project in projects" :key="project.id">
        {{ project.title }}
        <div class="icons">
          <i class="fa fa-pencil m-2" aria-hidden="true"></i>
          <i
            @click="deleteProject(project.id)"
            class="fa fa-trash m-2"
            aria-hidden="true"
          ></i>
          <i class="fa fa-check m-2" aria-hidden="true"></i>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import SingleProject from "../components/SIngleProject.vue";
export default {
  name: "Home",
  components: { SingleProject },
  data() {
    return {
      projects: [],
    };
  },
  methods: {
    deleteProject(id) {
      fetch("http://localhost:3000/projects/" + id, {
        method: "DELETE",
      }).then(() => {
        this.projects = this.projects.filter((project) => project.id != id);
      });
    },
  },
  mounted() {
    fetch("http://localhost:3000/projects")
      .then((res) => res.json())
      .then((data) => (this.projects = data))
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped>
i {
  cursor: pointer;
}
</style>
