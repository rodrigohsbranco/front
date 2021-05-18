<template>
  <div>
    <v-app>
      <v-main>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import vuetify from "@/plugins/vuetify";

@Component({
  vuetify,
})
export default class extends Vue {}
</script>
