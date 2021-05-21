<template>
  <div>
    <v-list>
      <v-list-item>
        <v-list-item-avatar>
          <v-img :src="`${user.avatar}`"></v-img>
        </v-list-item-avatar>
      </v-list-item>

      <v-list-item link>
        <v-list-item-content>
          <v-list-item-title class="title">
            {{ user.name }}
          </v-list-item-title>
          <v-list-item-subtitle>{{ user.email }}</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action>
          <v-icon>mdi-menu-down</v-icon>
        </v-list-item-action>
      </v-list-item>
    </v-list>
    <v-divider></v-divider>

    <v-list>
      <v-list-item>
        <v-list-item-icon>
          <v-icon>mdi-home</v-icon>
        </v-list-item-icon>

        <v-list-item-title link>Home</v-list-item-title>
      </v-list-item>

      <v-list-group :value="true" prepend-icon="mdi-account-circle">
        <template v-slot:activator>
          <v-list-item-title>Users</v-list-item-title>
        </template>

        <v-list-group :value="true" no-action sub-group>
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Admin</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item v-for="(item, i) in items" :key="i" :to="item.link" link>
            <v-list-item-title v-text="item.text"></v-list-item-title>

            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list-group>
      </v-list-group>
    </v-list>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import userService from "@/services/UserService";
import IuserInfo from "@/@types/user";

@Component({})
export default class extends Vue {
  user: IuserInfo = {
    username: "",
    email: "",
    avatar: "",
  };

  async created() {
    const dados = await userService
      .getInfo(this.$store.state.token)
      .then((response) => {
        return response;
      });

    this.user.username = dados.data.username;
    this.user.email = dados.data.email;
    this.user.avatar = dados.data.avatar;
  }

  // async getData(): Promise<any> {}
  items = [
    { text: "My Files", icon: "mdi-folder", link: "/Teste" },
    { text: "Shared with me", icon: "mdi-account-multiple" },
    { text: "Starred", icon: "mdi-star" },
    { text: "Recent", icon: "mdi-history" },
    { text: "Offline", icon: "mdi-check-circle" },
    { text: "Uploads", icon: "mdi-upload" },
    { text: "Backups", icon: "mdi-cloud-upload" },
  ];
}
</script>

<style scoped></style>
