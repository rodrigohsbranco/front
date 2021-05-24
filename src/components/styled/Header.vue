<template>
  <div>
    <v-navigation-drawer
      dark
      color="primary lighten-1"
      dense
      app
      v-model="drawer"
    >
      <Menu />
    </v-navigation-drawer>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>{{ title }}</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-account</v-icon>
      </v-btn>

      <v-btn to="logout" icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Menu from "@/components/styled/Menu.vue";
import MenuUser from "@/components/styled/MenuUser.vue";

@Component({
  components: {
    Menu,
    MenuUser,
  },
})
export default class Header extends Vue {
  drawer = true;
  title = "Next";
}
</script>

<style scoped></style>
