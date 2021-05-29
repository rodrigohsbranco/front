<template>
  <div>
    <v-container>
      <v-row>
        <h1>Funcionários</h1>
        <router-view />
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class extends Vue {}
</script>

<style scoped></style>
