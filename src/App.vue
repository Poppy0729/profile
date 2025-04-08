<script setup lang="ts">
import SideBar from './components/AppBar.vue';
import Footer from './components/Footer.vue';
import { computed, onMounted, onUnmounted, ref } from 'vue';
import { VERSION } from './constants/constant';
import LoadingComponent from './components/LoadingComponent.vue';
import { RouterName } from './types/enum/router_name';
import router from './router';

const isShowSideBar = computed(() => RouterName.NotFound !== router.currentRoute.value.name);

onMounted(() => {
  console.log(import.meta.env.MODE)
  console.log(VERSION)
})
</script>

<template>
  <v-app id="app" theme='light'>
    <v-main>
      <SideBar v-if="isShowSideBar"></SideBar>
      <LoadingComponent />
      <router-view />
    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<style lang="scss"></style>