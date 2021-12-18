<template>
  <div>
    <h1>Web Forms</h1>
    <div class="row" style="justify-content: center">
      <div class="col-6">
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1" style="float: left"
              >Email address</label
            >
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
            <label for="exampleInputEmail1" style="float: left">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              v-model="password"
            />
          </div>

          <button type="submit" class="btn btn-primary">Submit</button>
          <p>Email : {{ email }}</p>
          <p>Password : {{ password }}</p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
};
</script>

<style>
</style>