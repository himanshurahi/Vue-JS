<template>
  <div>
    <FilterNav @filterChange="changeFilter($event)" />
    <ul class="list-group">
      <li
        class="list-group-item"
        :class="{ 'list-group-item-success': project.complete }"
        v-for="project in filteredData"
        :key="project.id"
      >
        {{ project.title }}
        <div class="icons">
          <router-link
            :to="{ name: 'EditProject', params: { id: project.id } }"
          >
            <i class="fa fa-pencil m-2" aria-hidden="true"></i
          ></router-link>

          <i
            @click="deleteProject(project.id)"
            class="fa fa-trash m-2"
            aria-hidden="true"
          ></i>
          <i
            @click="toggleComplete(project)"
            class="m-2"
            :class="[project.complete ? 'fa fa-check' : 'fa fa-times']"
            aria-hidden="true"
          ></i>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import SingleProject from "../components/SIngleProject.vue";
import FilterNav from "../components/FilterNav.vue";
export default {
  name: "Home",
  components: { SingleProject, FilterNav },
  data() {
    return {
      projects: [],
      current: "all",
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

    changeFilter(event) {
      this.current = event;
      console.log(event);
    },

    toggleComplete(project) {
      fetch("http://localhost:3000/projects/" + project.id, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ complete: !project.complete }),
      }).then(() => {
        let p = this.projects.find((fetchid) => {
          return fetchid.id == project.id;
        });
        p.complete = !p.complete;
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
  updated() {
    console.log(this.current);
  },
  computed: {
    filteredData() {
      if (this.current == "ongoing") {
        return this.projects.filter((project) => (project.completed = false));
      }
      if (this.current == "completed") {
        return this.projects.filter((project) => (project.completed = true));
      }
      return this.projects;
    },
  },
};
</script>

<style scoped>
i {
  cursor: pointer;
}
</style>
