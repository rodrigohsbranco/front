<template>
  <div>
    <v-app>
      <v-container fluid>
        <v-toolbar-title>Usuários</v-toolbar-title>

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
