<template>
  <div>
    <div class="sidenav">
      <div class="login-main-text">
        <h2>Login Page</h2>
        <p
          style="cursor: pointer"
          @click="this.$emit('switchPage', 'register')"
        >
          Click Here for register
        </p>
      </div>
    </div>
    <div class="main">
      <div class="col-md-6 col-sm-12">
        <div class="login-form">
          <div class="alert alert-danger" v-if="error" role="alert">
            {{ error }}
          </div>
          <form @submit.prevent="handleSubmit">
            <div class="form-group">
              <label>Email</label>
              <input
                type="text"
                class="form-control"
                placeholder="Email"
                v-model="email"
              />
            </div>
            <div class="form-group">
              <label>Password</label>
              <input
                type="password"
                class="form-control"
                placeholder="Password"
                v-model="password"
              />
            </div>
            <!-- <button type="submit" class="btn btn-black m-2">Login</button> -->
            <button
              type="submit"
              class="btn btn-secondary m-2"
              :disabled="loading"
            >
              {{ loading ? "Please Wait.." : "Login" }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
export default {
  data() {
    return {
      email: "",
      password: "",
      error: "",
      loading: false,
    };
  },

  methods: {
    async handleSubmit() {
      this.loading = true;
      this.error = null;
      try {
        const res = await signInWithEmailAndPassword(
          auth,
          this.email,
          this.password
        );
        if (!res) {
          throw new Error("Something went wrong..");
        }
        console.log(res);
        this.$emit("loggedIn", res.user);
        this.$router.push({ name: "Chatroom" });
        this.loading = false;
      } catch (e) {
        this.error = e.message;
        this.loading = false;
      }
    },
  },
};
</script>

<style>
body {
  font-family: "Lato", sans-serif;
}

.main-head {
  height: 150px;
  background: #fff;
}

.sidenav {
  height: 100%;
  background-color: #000;
  overflow-x: hidden;
  padding-top: 20px;
}

.main {
  padding: 0px 10px;
}

@media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 15px;
  }
}

@media screen and (max-width: 450px) {
  .login-form {
    margin-top: 10%;
  }

  .register-form {
    margin-top: 10%;
  }
}

@media screen and (min-width: 768px) {
  .main {
    margin-left: 40%;
  }

  .sidenav {
    width: 40%;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
  }

  .login-form {
    margin-top: 80%;
  }

  .register-form {
    margin-top: 20%;
  }
}

.login-main-text {
  margin-top: 20%;
  padding: 60px;
  color: #fff;
}

.login-main-text h2 {
  font-weight: 300;
}

.btn-black {
  background-color: #000 !important;
  color: #fff;
}
</style>