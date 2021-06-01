<template>
  <div>
    <v-app>
      <v-container fluid>
        <v-row justify="space-around">
        <v-toolbar-title class="text-center">Usuários</v-toolbar-title>

  <v-col md="4">
   <v-autocomplete
      v-model="select"
      :loading="loading"
      :items="items"
      :search-input.sync="search"
      cache-items
      class="mx-4"
      flat
      hide-no-data
      hide-details
      label="O que vamos encontrar?"
      solo-inverted
      filter
    ></v-autocomplete>
</v-col>

    <v-btn
    elevation="2"
    color="primary"
    justify="flex-end"
    right
    @click="dialog = !dialog">Inserir
    <v-icon>mdi-plus</v-icon>
    </v-btn>

        <v-dialog
        v-model="dialog"
        width="800px"
      >
        <v-card>
          <v-card-title class="grey darken-2">
            Criar novo Usuário
          </v-card-title>
          <v-container>
            <v-row class="mx-2">
              <v-col
                class="align-center justify-space-between"
                cols="12"
              >
                <v-row
                  align="center"
                  class="mr-0"
                >
                  <v-avatar
                    size="40px"
                    class="mx-3"
                  >
                    <img
                      src="//ssl.gstatic.com/s2/oz/images/sge/grey_silhouette.png"
                      alt=""
                    >
                  </v-avatar>
                  <v-text-field
                    placeholder="Nome do funcionário"
                  ></v-text-field>
                </v-row>
              </v-col>

              <v-col cols="6">
                <v-text-field
                  prepend-icon="mdi-account-card-details-outline"
                  placeholder="CPF"
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  placeholder="RG"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  prepend-icon="mdi-mail"
                  placeholder="Email"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  type="tel"
                  prepend-icon="mdi-phone"
                  placeholder="(000) 000 - 0000"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  prepend-icon="mdi-text"
                  placeholder="Setor do funcionário"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <v-card-actions>
            <!--<v-btn
              text
              color="primary"
            >More</v-btn>-->
            <v-spacer></v-spacer>
            
            <v-btn
              color="error"
              @click="dialog = false"
            >Cancel</v-btn>
            <v-btn
              color="info"
              @click="dialog = false"
            >Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

 


        <v-data-table
          :headers="headers"
          :items="dados"
          :items-per-page="5"
          class="elevation-1"
        >
          <template v-slot:item.services="{ item }">
            <span v-for="serviceItem in item.services" :key="serviceItem.name">
              {{ serviceItem.name }}
            </span>
          </template>
        </v-data-table>
         </v-row>
      </v-container>
    </v-app>
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class extends Vue {
  dialog = false;
  pageTitle = "Employees";
  headers = [
    {
      text: "First Name",
      align: "start",
      sortable: false,
      value: "firstName",
    },
    { text: "Last Name", value: "lastName" },
    { text: "Email", value: "email" },
    { text: "Phone", value: "phone" },
    { text: "Mobile Phone", value: "mobilePhone" },
    { text: "Gender", value: "gender.name" },
    { text: "Status", value: "status.name" },
    { text: "Services", value: "services" },
    { text: "Actions", value: "action", sortable: false },
  ];
  search = "";
  genders = [];
  status = [];
  services = [];
  editedIndex = -1;
  editedItem = {};
  defaultItem = {};

  dados = [
    {
      id: 1,
      firstName: "Ana",
      lastName: "Lucia",
      phone: "(11)99989-8989",
      mobilePhone: "(11)99989-8989",
      email: "aninha@gmail.com",
      gender: {
        name: "feminino",
      },
      status: {
        name: "inativo",
      },
      services: [
        {
          name: "progressiva",
        },
        {
          name: "Manicure",
        },
      ],
    },
    {
      id: 2,
      firstName: "Maria",
      lastName: "Luiza",
      phone: "(12)32333-3333",
      mobilePhone: "(43)45555-5555",
      email: "marialu@gmail.com",
      gender: {
        name: "feminino",
      },
      status: {
        name: "pendente",
      },
      services: [
        {
          name: "progressiva",
        },
      ],
    },
    {
      id: 3,
      firstName: "Mario",
      lastName: "Braz",
      phone: "(11)23232-3222",
      mobilePhone: "(11)23232-3222",
      email: "mariobraz@gmail.com",
      gender: {
        name: "masculino",
      },
      status: {
        name: "ativo",
      },
      services: [
        {
          name: "progressiva",
        },
      ],
    },
  ];
}
</script>

<style scoped></style>
