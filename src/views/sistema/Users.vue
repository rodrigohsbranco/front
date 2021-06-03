<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="dados"
      :options.sync="options"
      :server-items-length="totalItems"
      class="elevation-1"
      :loading="loading"
      loading-text="Carregando... Por favor aguarde"
      :search="search"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>{{ title }}</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>

          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Buscar"
            solo
            single-line
            hide-details
          ></v-text-field>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="500px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                small
                color="primary"
                dark
                v-bind="attrs"
                v-on="on"
                class="ma-1"
              >
                <v-icon>add</v-icon> Novo
              </v-btn>

              <v-btn
                small
                color="green darken-3"
                dark
                v-bind="attrs"
                v-on="on"
                class="ma-1"
              >
                <v-icon>file_download</v-icon> CSV
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="text-h5">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.name"
                        label="Dessert name"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.calories"
                        label="Calories"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.fat"
                        label="Fat (g)"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.carbs"
                        label="Carbs (g)"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.protein"
                        label="Protein (g)"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="close">
                  Cancel
                </v-btn>
                <v-btn color="blue darken-1" text @click="save"> Save </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="text-h5"
                >Tem certeza que deseja excluir este item?</v-card-title
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeDelete"
                  >Cancel</v-btn
                >
                <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                  >OK</v-btn
                >
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-btn
          x-small
          outlined
          @click="editItem(item)"
          class="ma-1"
          color="blue darken-3"
        >
          <v-icon small>mdi-pencil </v-icon>
        </v-btn>

        <v-btn
          x-small
          outlined
          @click="deleteItem(item)"
          class="ma-1"
          color="red light-1"
        >
          <v-icon small> mdi-delete </v-icon>
        </v-btn>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="getDataFromApi"> Atualizar </v-btn>
      </template>
    </v-data-table>
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import UserService from "@/services/UserService";

@Component
export default class extends Vue {
  loading = false;
  title = "Usuários";
  dialog = false;
  dialogDelete = false;
  search = "";
  totalItems = 0;
  options = {
    sorDesc: true,
    page: 1,
    itemsPerPage: 10,
    sortBy: "name",
  };
  headers = [
    { text: "Nome", align: "start", value: "name" },
    { text: "Usuário", value: "username" },
    { text: "E-mail", value: "email" },
    { text: "Avatar", value: "avatar" },
    { text: "Role", value: "role" },
    { text: "Criado em", value: "created_at" },
    { text: "Ações", value: "actions", sortable: false },
  ];
  dados = [];
  editedIndex = -1;
  editedItem = {
    name: "",
    username: "",
    email: "",
    avatar: "",
    role: "",
    created_at: "",
  };
  defaultItem = {
    name: "",
    username: "",
    email: "",
    avatar: "",
    role: "",
    created_at: "",
  };

  mounted() {
    this.getDataFromApi();
  }

  get formTitle() {
    return this.editedIndex === -1 ? "Cadastrar Usuário" : "Editar Usuário";
  }

  getDataFromApi() {
    this.loading = true;
    this.getAllUser().then((data) => {
      this.dados = data.items;
      this.totalItems = data.total;
      this.loading = false;
    });
  }
  async getAllUser() {
    const { itemsPerPage, page, sortBy, sorDesc } = this.options;

    // debugger;
    let items = await UserService.getDadosPaginated(
      this.options.page,
      this.options.itemsPerPage
    );
    const total = items.length;

    // if (sortBy.length === 1 && sorDesc) {
    //   items = items.sort((a: { [x: string]: any }, b: { [x: string]: any }) => {
    //     const sortA = a[sortBy[0]];
    //     const sortB = b[sortBy[0]];

    //     if (sorDesc[0]) {
    //       if (sortA < sortB) return 1;
    //       if (sortA > sortB) return -1;
    //       return 0;
    //     } else {
    //       if (sortA < sortB) return -1;
    //       if (sortA > sortB) return 1;
    //       return 0;
    //     }
    //   });
    // }

    if (itemsPerPage > 0) {
      items = items.slice((page - 1) * itemsPerPage, page * itemsPerPage);
    }

    return { items, total };
  }

  editItem(item: any) {
    this.editedIndex = this.dados.indexOf(item);
    this.editedItem = Object.assign({}, item);
    this.dialog = true;
  }

  deleteItem(item: any) {
    this.editedIndex = this.dados.indexOf(item);
    this.editedItem = Object.assign({}, item);
    this.dialogDelete = true;
  }

  deleteItemConfirm() {
    this.dados.splice(this.editedIndex, 1);
    this.closeDelete();
  }

  close() {
    this.dialog = false;
    this.$nextTick(() => {
      this.editedItem = Object.assign({}, this.defaultItem);
      this.editedIndex = -1;
    });
  }

  closeDelete() {
    this.dialogDelete = false;
    this.$nextTick(() => {
      this.editedItem = Object.assign({}, this.defaultItem);
      this.editedIndex = -1;
    });
  }

  save() {
    if (this.editedIndex > -1) {
      Object.assign(this.dados[this.editedIndex], this.editedItem);
    } else {
      this.dados.push(this.editedItem);
    }
    this.close();
  }

  @Watch("dialog")
  dialogChange(val: any) {
    val || this.close();
  }

  @Watch("dialogDelete")
  dialogDel(val: any) {
    val || this.closeDelete();
  }

  @Watch("options", {
    deep: true,
  })
  handler() {
    this.getDataFromApi();
  }
}
</script>

<style scoped></style>
