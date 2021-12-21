<template>
  <LoginForm @switchPage="switchPage($event)" v-if="form == 'login'" />
  <SignupForm @switchPage="switchPage($event)" v-if="form == 'register'" />
  <router-view />
</template>


<script>
import LoginForm from "./components/LoginForm.vue";
import SignupForm from "./components/SignupForm.vue";
export default {
  components: { LoginForm, SignupForm },
  data() {
    return {
      form: "login",
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
  },
};
</script>
<style>
</style>
