<template>
  <div>
    <v-app>
      <v-main>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </v-main>
      <Footer />
    </v-app>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import vuetify from "@/plugins/vuetify";
import Footer from "@/components/styled/Footer.vue";

@Component({
  vuetify,
  components: {
    Footer,
  },
})
export default class extends Vue {}
</script>
