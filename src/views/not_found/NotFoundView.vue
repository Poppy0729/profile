<template>
    <v-container fill-height fluid>
      <v-row align="center" justify="center" style="color: #4a148c; padding-top: 15%;">
        <v-col class="text-center d-flex flex-column align-center" justify="center">
            <span class="text-h1 font-weight-bold" style="letter-spacing: 44px !important; max-width: 260px; ">404</span>
            <p class="text-h3 mt-3" style="letter-spacing: 4px !important;">Not Found</p>
            <p class="mt-5 description">
                The page you are looking for might have been removed had its name changed or is temporarily unavailable.
            </p>
        </v-col>
      </v-row> 
    </v-container>
  </template>
  
<script setup lang="ts">
// Additional logic if needed
</script>

<style scoped>
.description {
  display: block; 
  line-height: 1.6;
  text-align: left; 
  max-width: 360px; 
  margin: 0 auto;
  font-size: 12px;
}
</style>