<template>
  <div class="row">
    <div class="col-6 mt-4" style="margin: auto">
      <div class="alert alert-danger" role="alert" v-if="error">
        {{ error }}
      </div>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            v-model="email"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            v-model="password"
          />
        </div>
        <button type="submit" class="btn btn-primary" v-if="!loading">
          Sign Up
        </button>
        <button class="btn btn-primary" type="button" disabled v-if="loading">
          <span
            class="spinner-border spinner-border-sm"
            role="status"
            aria-hidden="true"
          ></span>
          Please Wait..
        </button>
      </form>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: mapGetters(["error", "loading"]),
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    ...mapActions(["signup"]),
    handleSubmit() {
      this.signup({ email: this.email, password: this.password });
    },
  },
};
</script>

<style>
</style>