<template>
    <v-container class="text-center">
        <p class="list-description">
            I am a versatile software developer specializing in Mobile App Development (iOS and Flutter), 
            Web Applications, System Integration, and Backend Development. With a strong foundation 
            across multiple platforms and technologies, I design, build, and maintain scalable, 
            high-performance solutions tailored to business needs.
        </p>
        <v-row>
            <v-col v-for="item in items" :key="item.id" cols="12" sm="6" md="4" class="d-flex justify-center">
                <v-card class="item-card" flat color="transparent" @click="router.push({ name: RouterName.Mobile, state: { id: item.id }})">
                    <v-avatar size="100">
                        <v-img :src="item.image"></v-img>
                    </v-avatar>
                    <v-card-text>
                        <h3 class="item-title">{{ item.title }}</h3>
                        <p class="item-description">{{ item.description }}</p>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup lang="ts">
import router from '@/router';
import { categories } from '@/types/enum/categories';
import { RouterName } from '@/types/enum/router_name';
import { ref } from 'vue';

const items = ref(categories);
</script>

<style scoped>
.item-card {
  text-align: center;
  padding: 10px;
  max-width: 200px;
  max-height: 250px;
  color: red;
}

.item-title {
  font-size: 1.2rem;
  font-weight: bold;
  color: #4a148c;
  margin-top: 10px;
}

.item-description {
  font-size: 0.9rem;
  color: #4a148c;
  line-break: auto;
  overflow: hidden;
}
</style>
