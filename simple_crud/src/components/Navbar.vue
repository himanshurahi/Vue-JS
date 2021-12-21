<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Simple Todo</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <!-- <li class="nav-item active">
          <a class="nav-link" href="#"
            >Home <span class="sr-only">(current)</span></a
          >
        </li> -->
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'Home' }">
            Home
          </router-link>
        </li>
        <li class="nav-item" v-if="!getUser">
          <router-link class="nav-link" :to="{ name: 'Register' }">
            Register
          </router-link>
        </li>
        <li class="nav-item" v-if="!getUser">
          <router-link class="nav-link" :to="{ name: 'Login' }">
            Login
          </router-link>
        </li>
        <li class="nav-item" v-if="getUser">
          <router-link class="nav-link" :to="{ name: 'Create' }">
            Add Todo
          </router-link>
        </li>
        <li class="nav-item" v-if="getUser">
          <a class="nav-link" @click.prevent="logout_" href="#">Logout </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: mapGetters(["getUser"]),

  methods: {
    ...mapActions(["logout"]),
    logout_() {
      this.logout();
    },
  },
};
</script>

<style>
</style>