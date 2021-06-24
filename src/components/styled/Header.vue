<template>
  <div>
    <v-navigation-drawer dark color="primary" dense app v-model="drawer">
      <Menu />
    </v-navigation-drawer>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-bottom-navigation v-model="value" color="teal" grow>
        <v-btn>
          <span>Recents</span>
          <v-icon>mdi-history</v-icon>
        </v-btn>

        <v-btn>
          <span>Favorites</span>
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn>
          <span>Nearby</span>
          <v-icon>mdi-map-marker</v-icon>
        </v-btn>
      </v-bottom-navigation>
      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-account</v-icon>
      </v-btn>

      <v-btn to="logout" icon>
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>
    <!-- <menu-user /> -->
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
  title1 = "Baixa1";
  title2 = "Baixa2";
  value = 1;
}
</script>

<style scoped>
.meutema {
  background: red;
}
</style>
