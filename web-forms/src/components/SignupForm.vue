<template>
  <div>
    <h1>Web Forms</h1>
    <div class="row" style="justify-content: center">
      <div class="col-6">
        <form @submit.prevent="handleSubmit">
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
              placeholder="Enter Password"
              v-model="password"
            />
            <div v-if="passwordError">{{ passwordError }}</div>
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

          <div class="form-group">
            <input
              type="text"
              class="form-control"
              name=""
              id=""
              v-model="tempSkill"
              @keyup="addSkill"
            />
          </div>
          <div class="form-group">
            <ul>
              <li
                v-for="skill in skills"
                :key="skill"
                @click="deleteSkill(skill)"
              >
                {{ skill }}
              </li>
            </ul>
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
      tempSkill: "",
      skills: [],
      passwordError: "",
    };
  },
  methods: {
    addSkill(e) {
      if (e.key == "," && this.tempSkill) {
        this.tempSkill = this.tempSkill.split(",")[0];
        this.skills.push(this.tempSkill);
        this.tempSkill = "";
      }
    },

    deleteSkill(skill) {
      this.skills = this.skills.filter((skilla) => skilla != skill);
    },

    handleSubmit() {
      //check password
      this.passwordError =
        this.password.length > 5
          ? ""
          : "Password must be at least 6 chars long";
    },
  },
};
</script>

<style>
</style>