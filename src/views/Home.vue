<template>
  <div>
    <v-app>
      <Header />
      <Dashboard />
    </v-app>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Dashboard from "@/components/Dashboard.vue"; // @ is an alias to /src
import Header from "@/components/styled/Header.vue"; // @ is an alias to /src

@Component({
  components: {
    Dashboard,
    Header,
  },
})
export default class extends Vue {}
</script>

<style scoped></style>
