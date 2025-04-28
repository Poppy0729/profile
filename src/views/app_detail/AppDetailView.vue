<template>
    <v-container v-if ="article">
        <v-btn variant="outlined" prepend-icon="mdi-arrow-left" class="mb-6" @click="goBack"
            style="border-color: #e2e8f0;">
            Back to Projects
        </v-btn>
        <v-row >
            <v-col cols="12" md="7">
                <v-img :src="article.image"
                    alt="Project Screenshot" class="rounded-lg" cover height="400" />
            </v-col>
            <v-col cols="12" md="5" class="d-flex flex-column justify-start">
                <h2 class="top-title pb-4">{{ article.title }}</h2>
                <div class="d-flex flex-wrap gap-2 mb-4">
                    <v-chip  v-for="tag in article.tags" color="primary" variant="tonal">{{ tag }}</v-chip>
                </div>

                <div class="d-flex gap-4">
                    <v-btn color="primary" prepend-icon="mdi-open-in-new" @click="openLive">
                        View Live
                    </v-btn>
                    <v-btn variant="outlined" prepend-icon="mdi-github" @click="openRepo">
                        Repository
                    </v-btn>
                </div>
            </v-col>
        </v-row>
        <v-row class="mt-10">
            <v-col>
                <h3 class="text-h5 font-weight-bold mb-2">Overview</h3>
                <p class="text-body-1">{{ article.detail }}</p>
            </v-col>
        </v-row>
        <v-row class="mt-10">
            <v-col>
                <h3 class="text-h5 font-weight-bold mb-2">Key Features</h3>
                <ul>
                    <li>Restaurant discovery</li>
                    <li>Real-time order tracking</li>
                    <li>Multiple payment methods</li>
                    <li>Customer support</li>
                    <li>Delivery scheduling</li>
                </ul>
            </v-col>
        </v-row>
        <v-row class="mt-10">
            <v-col>
                <h3 class="text-h5 font-weight-bold mb-2">Technology Stack</h3>
                <p class="text-body-1">React Native, Firebase, HealthKit</p>
            </v-col>
        </v-row>
        <v-row class="mt-10">
            <v-col>
                <h3 class="text-h5 font-weight-bold mb-2">App Screenshots</h3>
                    <v-carousel hide-delimiters>
                        <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src" cover></v-carousel-item>
                    </v-carousel>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup lang="ts">
import { appDetails, type AppDetail } from '@/types/app';
import { computed, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router'

const route = useRoute()
const articles = appDetails;
const article = computed(() => articles.find((item) => item.id === parseInt(route.params.id as string)));

onMounted(() => {
    const id = route.params.id;
    // article = articles.find((item) => item.id === parseInt(id as string));
    console.log(article.value)
})
const items = [
    {
        src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
    },
    {
        src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
    },
    {
        src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
    },
    {
        src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
    },
]
const goBack = () => {
    // navigate back to project list
    window.history.back();
};

const openLive = () => {
    window.open('https://your-live-project-link.com', '_blank');
};

const openRepo = () => {
    window.open('https://github.com/your-repo', '_blank');
};
</script>

<style scoped>
.gap-2 {
    gap: 0.5rem;
}

.gap-4 {
    gap: 1rem;
}
</style>