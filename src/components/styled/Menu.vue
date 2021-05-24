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
            {{ user.username }}
          </v-list-item-title>
          <v-list-item-subtitle>{{ user.email }}</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action>
          <v-icon>mdi-menu-down</v-icon>
        </v-list-item-action>
      </v-list-item>
    </v-list>
    <v-divider></v-divider>

    <v-treeview
      v-model="tree"
      :items="items"
      activatable
      item-key="name"
      open-on-click
    >
      <template v-slot:prepend="{ item, open }">
        <v-icon v-if="!item.icon">
          {{ open ? "mdi-folder-open" : "mdi-folder" }}
          {{ item.icon }}
        </v-icon>
        <v-icon v-else>
          {{ files[item] }}
        </v-icon>
      </template>
    </v-treeview>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import userService from "@/services/UserService";
import IuserInfo from "@/@types/user";
import router from "@/router";
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

  files: any = {
    html: "mdi-language-html5",
    js: "mdi-nodejs",
    json: "mdi-code-json",
    md: "mdi-language-markdown",
    pdf: "mdi-file-pdf",
    png: "mdi-file-image",
    txt: "mdi-file-document-outline",
    xls: "mdi-file-excel",
  };
  tree: [] = [];
  // items: [] = [
  //   {
  //     name: ".git",
  //   },
  //   {
  //     name: "node_modules",
  //   },
  //   {
  //     name: "public",
  //     children: [
  //       {
  //         name: "static",
  //         children: [
  //           {
  //             name: "logo.png",
  //             file: "png",
  //           },
  //         ],
  //       },
  //       {
  //         name: "favicon.ico",
  //         file: "png",
  //       },
  //       {
  //         name: "index.html",
  //         file: "html",
  //       },
  //     ],
  //   },
  //   {
  //     name: ".gitignore",
  //     file: "txt",
  //   },
  //   {
  //     name: "babel.config.js",
  //     file: "js",
  //   },
  //   {
  //     name: "package.json",
  //     file: "json",
  //   },
  //   {
  //     name: "README.md",
  //     file: "md",
  //   },
  //   {
  //     name: "vue.config.js",
  //     file: "js",
  //   },
  //   {
  //     name: "yarn.lock",
  //     file: "txt",
  //   },
  // ];

  // montaMenu(dados: Array): [] {
  //   dados.reduce((unico, item) => {
  //     return unico.includes(item) ? unico : [...unico, item];
  //   }, []);
  // }
  async mounted(): Promise<void> {
    await userService.getInfo(this.$store.state.token).then((response) => {
      this.user.username = response.data.user.username;
      this.user.email = response.data.user.email;
      this.user.avatar = response.data.user.avatar;

      // this.dados = response.data.menus;
      // this.dados.push(this.$router.options.routes);
      this.$router.options.routes?.map((item) =>
        item.meta.menu ? this.items.push(item) : null
      );
      // console.log(this.items);
    });
  }

  primeiraEmMaiuscula(elemento: string): string {
    return elemento.charAt(0).toUpperCase() + elemento.slice(1);
  }
}
</script>

<style scoped></style>
