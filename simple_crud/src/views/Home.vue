<template>
  <div class="home">
    <div
      v-if="loading"
      class="loader"
      style="
        width: 100%;
        justify-content: center;
        display: flex;
        margin-top: 60px;
      "
    >
      <div class="spinner-border"></div>
    </div>
    <div class="row mt-4" v-if="allTodos.length && !loading">
      <div
        class="col-12  col-md-12 col-sm-6 mt-3"
        style="margin: auto"
        v-for="todo in allTodos"
        :key="todo.id"
      >
        <div class="card">
          <div class="card-body">
            <h5 class="card-title" style="text-transform: capitalize">
              {{ todo.title }}
            </h5>
            <p class="card-text">
              {{ todo.body }}
            </p>
          </div>
          <div class="card-footer">
            <span>Edit</span>&nbsp;
            <span @click="handleDelete(todo.id)">Delete</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  components: {},
  name: "Home",
  computed: mapGetters(["allTodos", "error", "loading", "getUser"]),
  data() {
    return {};
  },
  methods: {
    ...mapActions(["getTodos", "deleteTodo"]),
    handleDelete(id) {
      this.deleteTodo(id);
    },
  },

  mounted() {
    this.getTodos();
  },
};
</script>

<style scoped>
.card-footer span {
  cursor: pointer;
}
</style>
