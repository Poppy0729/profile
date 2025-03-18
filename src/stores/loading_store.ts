import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useLoadingStore = defineStore('loadingStore', () => {
  const isVisible = ref(false);
  const isCallApi = ref(false)
  function showLoading() {
    isCallApi.value = true;
    isVisible.value = true;
  }

  function closeLoading() {
    isCallApi.value = false;
    isVisible.value = false;
  }

  return { isCallApi, isVisible, showLoading, closeLoading};
});
