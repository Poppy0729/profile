<template>
  <div id="main" class="tw-h-screen tw-w-screen" style="background-color: white;">
    <v-parallax :src="backgroundImage" height="600">
      <v-row justify="start">
        <v-col >
          <div class="center-area">
            <h2 class="top-title pt-6">Hello, I'm</h2>
            <h1 class="top-title" style="font-size: 55px;">{{'Saowalak Rungrat'.toUpperCase()}}</h1>
            <div style="margin-top: 20px; width: 50%;">
              <h2 class="desc">Enthusiastic and fast learning developer with 5+ years of experience in app design and implementation. Working collaboratively with the design, BA, PM, Backend teams to achieve goals, increase revenue gains, increase performance app and UX/UI.</h2>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-parallax>
    <h2 class="featured-title pt-5">Development Categories</h2>
    <ListItem />
    <h2 class="featured-title">Application Development</h2>
    <GridItem />
  </div>
</template>

<script setup lang="ts">
import GridItem from '../components/GridItem.vue';
import ListItem from '../components/ListItem.vue';
import backgroundImage from '@/assets/images/bg.jpg'
</script>

<style scoped>
.featured-title {
  font-size: 2rem;
  font-weight: bold;
  color: #4a148c;
  text-align: center;
  margin-bottom: 20px;
}

.top-title {
  font-size: 2rem;
  font-weight: bold;
  color: #4a148c;
  text-align: left;
}

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