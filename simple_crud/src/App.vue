<template>
  <Navbar />
  <router-view />
</template>

<script>
import Navbar from "./components/Navbar.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  components: { Navbar },
  methods : {
    ...mapActions(['fetchUser'])
  },
  mounted(){
    this.fetchUser();
  }

};
</script>

<style>
.row {
  margin: 0px;
}
</style>
