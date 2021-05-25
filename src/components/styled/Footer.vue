<template>
  <div>
    <v-footer fixed color="primary darken-4" padless>
      <v-row justify="center" no-gutters>
        <v-col class="primary darken-4 py-2 text-center white--text" cols="12">
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-col>
      </v-row>
    </v-footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class extends Vue {}
</script>

<style scoped></style>
