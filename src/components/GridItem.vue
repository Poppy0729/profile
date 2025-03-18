<template>
    <v-container>
      <v-row>
        <v-col v-for="article in articles" :key="article.id" cols="12" sm="6" md="4">
          <v-card class="article-card">
            <v-img :src="article.image" height="200px" cover></v-img>
            <v-card-text>
              <p class="author">{{ article.author }}</p>
              <h3 class="title">{{ article.title }}</h3>
              <p class="description">{{ article.description }}</p>
            </v-card-text>
            <v-card-actions>
              <v-icon>mdi-eye</v-icon>
              <span>{{ article.views }}</span>
              <v-spacer></v-spacer>
              <v-icon>mdi-heart-outline</v-icon>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup lang="ts">  
    const articles = [
      {
        id: 1,
        image: 'https://cdn.mos.cms.futurecdn.net/JNJTcXfPoYrQFP6m38gkPn-1200-80.jpg',
        author: 'Poppy Shutter',
        title: 'Mastering iOS Development: Top Tips and Tricks',
        description: 'Are you looking to enhance your iOS development skills and take your app...',
        views: 0,
      },
      {
        id: 2,
        image: 'https://i.ytimg.com/vi/o5RiYHW-nlU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDGzPdJqLMxHkr8Qh2JBnrGRL-fxA',
        author: 'Poppy Shutter',
        title: 'Backend Solutions: Enhancing Performance and Security',
        description: 'In the world of web development, the backend is a crucial component that powers the...',
        views: 0,
      },
      {
        id: 3,
        image: 'https://static.thairath.co.th/media/4DQpjUtzLUwmJZZSGobM7YeCaqJHhpQqFyZsnmrp3JNC.jpg',
        author: 'Poppy Shutter',
        title: 'Exploring the World of Cross-Platform Development',
        description: 'Are you interested in delving into the exciting realm of cross-platform development? If so...',
        views: 0,
      },
      {
        id: 4,
        image: 'https://www.proalley.com/blog/content/images/2022/11/web-design-concept-with-drawings.jpg',
        author: 'Poppy Shutter',
        title: 'Mastering iOS Development: Top Tips and Tricks',
        description: 'Are you looking to enhance your iOS development skills and take your app...',
        views: 0,
      },
      {
        id: 5,
        image: 'https://conmigomedia.com/wp-content/uploads/2024/09/How-to-Become-a-Web-Designer.png',
        author: 'Poppy Shutter',
        title: 'Backend Solutions: Enhancing Performance and Security',
        description: 'In the world of web development, the backend is a crucial component that powers the...',
        views: 0,
      },
      {
        id: 6,
        image: 'https://cdn.mos.cms.futurecdn.net/JNJTcXfPoYrQFP6m38gkPn-1200-80.jpg',
        author: 'Poppy Shutter',
        title: 'Exploring the World of Cross-Platform Development',
        description: 'Are you interested in delving into the exciting realm of cross-platform development? If so...',
        views: 0,
      },
    ]
  </script>
  
<style scoped>

  .article-card {
    border: 1px solid #4a148c;
    border-radius: 10px;
    transition: transform 0.3s;
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
  