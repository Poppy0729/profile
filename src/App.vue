<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import { VERSION } from './constants/constant';
import LoadingComponent from './components/LoadingComponent.vue';

onMounted(() => {
  console.log(import.meta.env.MODE)
  console.log(VERSION)
})
</script>

<template>
  <v-app id="app" theme='light'>
    <v-main>
      <!-- <SideBar v-if="isShowSideBar"></SideBar> -->
      <LoadingComponent />
      <router-view />
    </v-main>
  </v-app>
</template>

<style lang="scss"></style>