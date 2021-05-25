<template>
  <div>
    <v-list>
      <v-list-item>
        <v-list-item-avatar>
          <v-img :src="`${user.avatar}`"></v-img>
        </v-list-item-avatar>
      </v-list-item>

      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            {{ user.username }}
          </v-list-item-title>
          <v-list-item-subtitle>{{ user.email }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-divider></v-divider>

    <v-treeview
      v-model="tree"
      :items="items"
      activatable
      item-key="name"
      open-on-click
      dense
      transition
    >
      <template sm v-slot:prepend="{ item, open }">
        <v-icon v-if="!item.meta.icon">
          {{ open ? "mdi-folder-open" : "mdi-folder" }}
        </v-icon>
        <v-icon :to="item.path" v-else>
          {{ item.meta.icon }}
        </v-icon>
      </template>
    </v-treeview>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import userService from "@/services/UserService";
import IuserInfo from "@/@types/user";
import { RouteConfig } from "vue-router/types/router";

@Component({})
export default class extends Vue {
  user: IuserInfo = {
    username: "",
    email: "",
    avatar: "",
  };
  homeLink = "/home";
  items: RouteConfig[] = [];

  tree: [] = [];

  async mounted(): Promise<void> {
    await userService.getInfo(this.$store.state.token).then((response) => {
      this.user.username = response.data.user.username;
      this.user.email = response.data.user.email;
      this.user.avatar = response.data.user.avatar;

      this.$router.options.routes?.map((item) =>
        item.meta.menu ? this.items.push(item) : null
      );
    });
  }

  primeiraEmMaiuscula(elemento: string): string {
    return elemento.charAt(0).toUpperCase() + elemento.slice(1);
  }
}
</script>

<style scoped></style>
