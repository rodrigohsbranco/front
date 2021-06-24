<template>
  <div>
    <v-container fluid>
      <v-row>
        <v-col md-6>
          <v-card class="mt-4" max-width="800">
            <v-sheet
              class="v-sheet--offset mx-auto"
              color="cyan"
              elevation="12"
              max-width="calc(100% - 32px)"
            >
              <v-sparkline
                :labels="labels"
                :value="value"
                color="white"
                line-width="2"
                padding="16"
              ></v-sparkline>
            </v-sheet>

            <v-card-text class="pt-0">
              <div class="text-h6 font-weight-light mb-2">EXEMPLO 1</div>
              <div class="subheading font-weight-light grey--text">
                Last Campaign Performance
              </div>
              <v-divider class="my-2"></v-divider>
              <v-icon class="mr-2" small> mdi-clock </v-icon>
              <span class="text-caption grey--text font-weight-light"
                >last registration 26 minutes ago</span
              >
            </v-card-text>
          </v-card>
        </v-col>

        <v-col md-6>
          <v-card class="mt-4" max-width="800">
            <v-sheet
              class="v-sheet--offset mx-auto"
              color="black"
              elevation="12"
              max-width="calc(100% - 32px)"
            >
              <v-sparkline
                :labels="labels"
                :value="value"
                color="white"
                line-width="2"
                padding="16"
              ></v-sparkline>
            </v-sheet>

            <v-card-text class="pt-0">
              <div class="text-h6 font-weight-light mb-2">EXEMPLO 2</div>
              <div class="subheading font-weight-light grey--text">
                Last Campaign Performance
              </div>
              <v-divider class="my-2"></v-divider>
              <v-icon class="mr-2" small> mdi-clock </v-icon>
              <span class="text-caption grey--text font-weight-light"
                >last registration 26 minutes ago</span
              >
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col md-6>
          <v-card class="mt-4" max-width="800">
            <v-sheet
              class="v-sheet--offset mx-auto"
              color="orange"
              elevation="12"
              max-width="calc(100% - 32px)"
            >
              <v-sparkline
                :labels="labels"
                :value="value"
                color="primary"
                line-width="2"
                padding="16"
              ></v-sparkline>
            </v-sheet>

            <v-card-text class="pt-0">
              <div class="text-h6 font-weight-light mb-2">EXEMPLO 3</div>
              <div class="subheading font-weight-light grey--text">
                Last Campaign Performance
              </div>
              <v-divider class="my-2"></v-divider>
              <v-icon class="mr-2" small> mdi-clock </v-icon>
              <span class="text-caption grey--text font-weight-light"
                >last registration 26 minutes ago</span
              >
            </v-card-text>
          </v-card>
        </v-col>

        <v-col md-6>
          <v-card class="mt-4" max-width="800">
            <v-sheet
              class="v-sheet--offset mx-auto"
              color="light-blue"
              elevation="12"
              max-width="calc(100% - 32px)"
            >
              <v-sparkline
                :labels="labels"
                :value="value"
                color="white"
                line-width="2"
                padding="16"
              ></v-sparkline>
            </v-sheet>

            <v-card-text class="pt-0">
              <div class="text-h6 font-weight-light mb-2">EXEMPLO 4</div>
              <div class="subheading font-weight-light grey--text">
                Last Campaign Performance
              </div>
              <v-divider class="my-2"></v-divider>
              <v-icon class="mr-2" small> mdi-clock </v-icon>
              <span class="text-caption grey--text font-weight-light"
                >last registration 26 minutes ago</span
              >
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class extends Vue {
  labels = ["12am", "3am", "6am", "9am", "12pm", "3pm", "6pm", "9pm"];
  value = [200, 675, 410, 390, 310, 460, 250, 240];
}
</script>

<style scoped>
.v-sheet--offset {
  top: -24px;
  position: relative;
}
</style>
