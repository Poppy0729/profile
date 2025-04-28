<template>
    <div id="main">
        <container class="px-6 mt-n2" fluid>
            <h1 class="text-center pt-5 pb-5 font-weight-bold" style="font-size: 30px; color: #4a148c;">
                {{categoriesType?.title}}
            </h1>
            <p class="list-description">
            {{ categoriesType?.description }}
        </p>
            <GridItem :articles="items"></GridItem>
        </container>
    </div>
</template>

<script setup lang="ts">
import GridItem from '@/components/GridItem.vue';
import { appDetails } from '@/types/app';
import { categories } from '@/types/enum/categories';
import { onMounted, ref } from 'vue';

const categoriesType = ref();
const items = ref();

onMounted(() => {
    getCategories();
})

function getCategories() {
    const id = window.history.state?.id || null;
    categoriesType.value = categories.find((item) => item.id === id);
    console.log(categoriesType.value)
    items.value = appDetails.filter((item) => item.categories.includes(categoriesType.value.type)) || [];
    console.log(items.value)
}
</script>