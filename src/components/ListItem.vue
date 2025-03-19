<template>
    <v-container class="text-center">
        <p class="list-description">
            Add a general description of the items listed below. You can introduce the list
            and include any relevant information you want to share. Double click to edit
            the text.
        </p>
        <v-row>
            <v-col v-for="item in items" :key="item.id" cols="12" sm="6" md="4" class="d-flex justify-center">
                <v-card class="item-card" flat color="transparent">
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
import { ref } from 'vue';

const items = ref([
    { id: 1, image: 'https://developer.apple.com/swift/images/swift-og.png', title: 'Mobile', description: 'Mobile native iOS development framework that allows you to build apps for iOS and publish them to the App Store.' },
    { id: 2, image: 'https://static-00.iconduck.com/assets.00/flutter-icon-2048x2048-ufx4idi8.png', title: 'Flutter', description: 'Cross-platform mobile development framework that allows you to build apps for multiple platforms using a single codebase.' },
    { id: 3, image: 'https://source.unsplash.com/100x100/?building', title: 'Backend', description: 'Describe the item and include any relevant details. Click to edit the text.' },
    { id: 4, image: 'https://source.unsplash.com/100x100/?design', title: 'Interagation', description: 'Describe the item and include any relevant details. Click to edit the text.' },
    { id: 5, image: 'https://source.unsplash.com/100x100/?minimal', title: 'Web', description: 'Describe the item and include any relevant details. Click to edit the text.' },
]);
</script>

<style scoped>
.list-description {
  font-size: 1rem;
  color: #555;
  text-align: center;
  margin-bottom: 30px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.item-card {
  text-align: center;
  padding: 10px;
  max-width: 200px;
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
}
</style>
