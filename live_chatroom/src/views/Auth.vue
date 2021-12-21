<template>
  <div>
    <div v-if="!isLoggedIn">
      <LoginForm
        @switchPage="switchPage($event)"
        @loggedIn="checkLoggedIn($event)"
        v-if="form == 'login'"
      />
      <SignupForm @switchPage="switchPage($event)" v-if="form == 'register'" />
    </div>
    <router-view />
  </div>
</template>

<script>
import LoginForm from "../components/LoginForm.vue";
import SignupForm from "../components/SignupForm.vue";
export default {
  components: { LoginForm, SignupForm },
  data() {
    return {
      form: "login",
      isLoggedIn: false,
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
