<template>
  <v-app id="inspire">
    <v-main>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary darken-4">
                <v-toolbar-title>Identifique-se</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    prepend-icon="person"
                    name="login"
                    label="Login"
                    v-model="credentials.username"
                    type="text"
                  ></v-text-field>
                  <v-text-field
                    id="password"
                    prepend-icon="lock"
                    name="password"
                    label="Password"
                    v-model="credentials.password"
                    type="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary darken-4" @click="sign">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import LoginService from "@/services/LoginService";

@Component({})
export default class Login extends Vue {
  credentials: Login.Credentials = {
    username: "teste",
    password: "teste",
  };

  sign(): void {
    LoginService.login(this.credentials).then((response) => {
      this.$store.commit("LOGIN", response);
      LoginService.isValidToken(this.$store.state.token).then((response) => {
        if (!response) {
          this.$router.push({ name: "Login" }).catch((err) => {
            return err;
          });
        }
        this.$router.push("Dashboard").catch((err) => {
          console.log(err);
        });
      });
    });
  }
}
</script>

<style scoped></style>
