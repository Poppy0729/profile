<template>
  <v-container style="max-width: 1000px;">
    <v-row>
      <v-col v-for="article in props.articles" :key="article.id" cols="12" sm="6" md="4">
        <v-card class="article-card" @click="router.push({ name: RouterName.AppDetail, params: { id: article.id }})">
          <v-img :src="article.image" height="200px" cover></v-img>
          <v-card-text>
            <h3 class="title">{{ article.title }}</h3>
            <p class="description">{{ article.description }}</p>
          </v-card-text>
          <v-card-actions>
            <div class="d-flex justify-center ga-2">
              <v-chip color="primary" variant="tonal">Swift</v-chip>
              <v-chip color="primary" variant="tonal">Flutter</v-chip>
            </div>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import router from '@/router';
import { appDetails, type AppDetail } from '@/types/app';
import { RouterName } from '@/types/enum/router_name';

const props = defineProps<{ 
  articles: AppDetail[] 
}>()
</script>

<style scoped>
.article-card {
  border: 1px solid rgb(197, 194, 194);
  border-radius: 10px;
  transition: transform 0.3s;
  /* max-width: 300px; */
  min-height: 100%;
}

.article-card:hover {
  transform: scale(1.02);
}

.author {
  color: #4a148c;
  font-weight: bold;
  margin-bottom: 8px;
}

.title {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 8px;
}

.description {
  font-size: 0.9rem;
  color: #555;
}
</style>
