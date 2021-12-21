<template>
  <div class="home">
    <!-- {{ allUsers }} -->
    <h3>Counter : {{ counter }}</h3>
    <button @click="addCounter()">Incrase Counter</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Home",
  components: {},
  computed: mapGetters(["allUsers", "counter"]),
  methods: {
    ...mapActions(["getUsers", "addCounter"]),
  },
  mounted() {
    this.getUsers();
  },
};
</script>
