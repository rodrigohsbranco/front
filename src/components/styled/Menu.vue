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

    <v-list nav dense>
      <div v-for="item in items" :key="item.name">
        <v-list-item v-if="!item.children" :to="item.name" class="v-list-item">
          <v-list-item-icon>
            <v-icon>{{ item.meta.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-title v-text="item.meta.desc" />
        </v-list-item>

        <v-list-group
          v-else
          :key="item.name"
          no-action
          :prepend-icon="item.meta.icon"
          :value="false"
        >
          <template v-slot:activator>
            <v-list-item-title>{{ item.meta.desc }}</v-list-item-title>
          </template>

          <v-list-item
            v-for="children in item.children"
            :to="children.name"
            :key="children.name"
          >
            <v-list-item-icon>
              <v-icon>{{ children.meta.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ children.meta.desc }}</v-list-item-title>
          </v-list-item>
        </v-list-group>
      </div>
    </v-list>
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
  items: RouteConfig[] = [];

  async mounted(): Promise<any> {
    try {
      await userService.getInfo(this.$store.state.token).then((response) => {
        if (response) {
          this.user.username = response.user.username;
          this.user.email = response.user.email;
          this.user.avatar = response.user.avatar;

          this.$router.options.routes?.map((item) =>
            item.meta.menu ? this.items.push(item) : null
          );
          // debugger;
          // this.$router.push("dashboard");
        }
      });
    } catch (error) {
      console.log("User info not found", error);
      this.$store.commit("LOGOUT");
      this.$router.push("Login");
    }
  }

  primeiraEmMaiuscula(elemento: string): string {
    return elemento.charAt(0).toUpperCase() + elemento.slice(1);
  }
}
</script>

<style scoped>
.v-application--is-ltr
  .v-list--dense.v-list--nav
  .v-list-group--no-action
  > .v-list-group__items
  > .v-list-item {
  padding: 0 8px;
}
selected {
  color: white;
}
</style>
