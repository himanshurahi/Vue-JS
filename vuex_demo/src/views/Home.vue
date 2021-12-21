<template>
  <div class="home">
    <!-- {{ allUsers }} -->
    <ul>
      <li v-for="user in allUsers" v-bind:key="user.id">
        Name : {{ user.name }} Email : {{ user.email }} ---
        <span style="color: red; cursor: pointer" @click="deleteUser(user.id)"
          >Delete</span
        >
      </li>
    </ul>

    <form action="" @submit.prevent="handleSubmit">
      <input type="text" name="" id="" placeholder="name" v-model="name" />
      <input type="text" name="" id="" placeholder="Email" v-model="email" />
      <button type="submit">Save</button>
    </form>
    <h3>Counter : {{ counter }}</h3>
    <button @click="addCounter()">Incrase Counter</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Home",
  components: {},
  data() {
    return {
      name: "",
      email: "",
    };
  },
  computed: mapGetters(["allUsers", "counter"]),
  methods: {
    ...mapActions(["getUsers", "addCounter", "addUser", 'deleteUser']),

    handleSubmit() {
      let user = { name: this.name, email: this.email };
      this.addUser(user);
    },
  },
  mounted() {
    this.getUsers();
  },
};
</script>
