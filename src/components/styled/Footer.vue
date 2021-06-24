<template>
  <div>
    <v-footer bg-footer fixed padless>
      <v-row justify="center" no-gutters>
        <v-col class="py-2 text-center primary light--text" cols="12">
          Copyright &copy; {{ new Date().getFullYear() }} — <strong>STR</strong>
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

<style scoped>
.bg-footer {
  background-color: primary;
}
</style>
