<template>
  <div id="main">
    <v-container style="width: 80%;" fluid>
      <h1 class="featured-title">Work Experience</h1>
      <v-timeline align="start">
        <v-timeline-item v-for="(experience, i) in experiences" :key="i" :dot-color="experience.color" size="small">
          <template v-slot:opposite>
            <span>{{ experience.company }}</span>
            <div :class="`pt-1 headline font-weight-bold text-${experience.color}`" v-text="experience.year"></div>
          </template>
          <v-card class="tw-shadow-lg custom-card">
            <v-card-title class="text-h5">
              {{ experience.jobRole }}
            </v-card-title>
            <v-card-text>
              <p class="pb-5" style="color:gray; font-size: 15px;" v-text="experience.headline"></p>
              <ui >
                <template v-for="(item, i) in experience.description" :key="i">
                  <li>{{ item }}</li>
                </template>
              </ui>
            </v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-container>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { allExperience } from '@/types/experience';

const experiences = ref(allExperience);
</script>

<style scoped>
.custom-card {
  border-radius: 16px;
}
</style>