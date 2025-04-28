<template>
  <div id="main" style="background-color: white;">
    <v-parallax :src="backgroundImage" height="600">
      <v-row justify="start">
        <v-col >
          <div class="center-area">
            <h2 class="top-title pt-6">Hello, I'm</h2>
            <h1 class="top-title" style="font-size: 55px;">{{'Saowalak Rungrat'.toUpperCase()}}</h1>
            <div style="margin-top: 20px; width: 50%;">
              <h2 class="desc">
                Enthusiastic and fast-learning developer with over 5 years of experience in application 
                design and development. Skilled at collaborating closely with Designers, Business Analysts (BA), 
                Project Managers (PM), and Backend teams to deliver high-quality solutions. 
                Focused on building performant applications with excellent UX/UI, driving revenue growth, 
                enhancing user engagement, and optimizing overall app performance.
              </h2>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-parallax>
    <h2 class="featured-title pt-5">Development Categories</h2>
    <ListItem />
    <h2 class="featured-title">Application Development</h2>
    <GridItem :articles="items"></GridItem>
  </div>
</template>

<script setup lang="ts">
import { appDetails } from '@/types/app';
import GridItem from '../components/GridItem.vue';
import ListItem from '../components/ListItem.vue';
import backgroundImage from '@/assets/images/bg.jpg'

const items = appDetails
</script>

<style scoped>
.desc {
  font-size: 15px;
  font-weight: normal;
  color: #4a148c;
  text-align: left;
}

.center-area {
  position: absolute;
  top: 60%;
  bottom: 0;
  left: 25%;
  right: 0;
  margin: auto;
  height: 600px;
}
</style>