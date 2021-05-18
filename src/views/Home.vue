<template>
  <div>
    <v-app>
      <Header />
      <div class="home">
        <Dashboard />
      </div>
      <Footer />
    </v-app>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Dashboard from "@/components/Dashboard.vue"; // @ is an alias to /src
import Header from "@/components/styled/Header.vue"; // @ is an alias to /src
import Footer from "@/components/styled/Footer.vue";

@Component({
  components: {
    Dashboard,
    Header,
    Footer,
  },
})
export default class extends Vue {}
</script>

<style scoped>
.home {
  display: flex;
  justify-content: center;
}
</style>
