<template>
  <div>
    <Home />
    <router-view />
  </div>
</template>

<script>
import LoginForm from "./components/LoginForm.vue";
import SignupForm from "./components/SignupForm.vue";
import Auth from "./views/Auth.vue";
import Home from "./views/Home.vue";

export default {
  components: { LoginForm, SignupForm, Auth, Home },
  data() {
    return {
      form: "login",
      isLoggedIn: true,
    };
  },
  methods: {
    switchPage(event) {
      if (event == "register") {
        this.form = "register";
      }
      if (event == "login") {
        this.form = "login";
      }
    },
    checkLoggedIn(event) {
      this.isLoggedIn = true;
    },
  },

  mounted() {
    console.log("Mounted");
  },
};
</script>
<style>
</style>
