<template>
    <div id="main" class="tw-h-screen tw-w-screen">
      <container>
        <h2 class="featured-title">Featured Articles</h2>
      </container>
      
      <GridItem></GridItem>
      <h2 class="featured-title">Featured Articles</h2>
    </div>
</template>

<script setup lang="ts">
import GridItem from '../components/GridItem.vue';

</script>

<style scoped>  
  .featured-title {
    font-size: 2rem;
    color: #4a148c;
    text-align: center;
    margin-bottom: 20px;
  }
</style>