<template>
    <div id="main" class="tw-h-screen tw-w-screen">
      <div class="pt-6 pb-6" style="background-color: white; height:500px;">
        <h2 class="featured-title">Hello, I'm</h2>
        <h1 class="featured-title">Saowalak Rungrat</h1>
      </div>
      <h2 class="featured-title">Development Categories</h2>
      <ListItem/>
      <h2 class="featured-title">Application Development</h2>
      <GridItem/>
    </div>
</template>

<script setup lang="ts">
import GridItem from '../components/GridItem.vue';
import ListItem from '../components/ListItem.vue';

</script>

<style scoped>  
  .featured-title {
    font-size: 2rem;
    font-weight: bold;
    color: #4a148c;
    text-align: center;
    margin-bottom: 20px;
  }
</style>