<template>
  <div>
    <v-app id="app">
      <Header v-if="tokenExists" />
      <v-main>
        <v-container class="pa-10" fluid>
          <v-fade-transition>
            <router-view />
          </v-fade-transition>
        </v-container>
        <Footer />
      </v-main>
      <alert-message :attributes="alert" />
    </v-app>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/styled/Header.vue";
import Footer from "@/components/styled/Footer.vue";
import IMessageAlert from "@/@types/alert";
import AlertMessage from "@/components/global/Alert.vue";

@Component({
  components: {
    Header,
    Footer,
    AlertMessage,
  },
})
export default class extends Vue {
  alert: IMessageAlert = {
    open: false,
    color: "",
    title: "",
    text: "",
  };
  loading = false;
  get tokenExists(): boolean {
    return this.$store.state.token ? true : false;
  }
}
</script>

<style>
.v-btn {
  text-transform: none !important;
}
</style>
