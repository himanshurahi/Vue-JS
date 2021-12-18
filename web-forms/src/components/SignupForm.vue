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

          <div class="form-group">
            <select
              class="form-control"
              id="exampleFormControlSelect1"
              v-model="role"
            >
              <option value="">Select Role</option>
              <option value="developer">Web Developer</option>
              <option value="tester">Tester</option>
            </select>
          </div>

          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="defaultCheck1"
              v-model="terms"
            />
            <label class="form-check-label" for="defaultCheck1">
              Terms & Conditions
            </label>
          </div>

          <button type="submit" class="btn btn-primary">Submit</button>
          <p>Email : {{ email }}</p>
          <p>Password : {{ password }}</p>
          <p>Role : {{ role }}</p>
          <p>Terms : {{ terms }}</p>
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
      role: "",
      terms: false,
    };
  },
};
</script>

<style>
</style>