<template>
  <Main />
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import vuetify from "@/plugins/vuetify";
import Main from "@/components/Main.vue";

@Component({
  vuetify,
  components: {
    Main,
  },
})
export default class extends Vue {}
</script>

<style></style>
