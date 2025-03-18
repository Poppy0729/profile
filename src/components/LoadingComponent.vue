<template>
    <v-dialog
      v-model="isLoading"
      style="text-align: center;"
      opacity="0.25" 
      persistent
    >
    <div class="text-center">
      <v-progress-circular
      size="44"
      width="4"
      color="#6F5F5E"
      bg-color="#A99F9E"
      intermediate-svg-transition="all 1.5s ease-in-out"
      indeterminate
    ></v-progress-circular>
    </div>
  </v-dialog>
</template>

<script setup lang="ts">
import { useLoadingStore } from '@/stores/loading_store'
import { computed } from 'vue';

const loadingStore = useLoadingStore();
const isLoading = computed(() => loadingStore.isVisible);

</script>

<style scoped lang="scss">
  ::deep(.v-dialog > .v-overlay__content)  {
    display: block !important
  }
</style>