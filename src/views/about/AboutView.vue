<template>
  <v-container >
    <h1 class="featured-title">About Me</h1>
    <p class="text-center sub-title pb-10">Get to know more about me, my background, and what I do.</p>
    <v-row align="center" justify="center">
      <v-col cols="12" md="3" class="text-center mb-4">
        <v-avatar size="160" class="elevation-3" style="border: 4px solid #00AEEF;">
          <v-img src="@/assets/images/profile.jpg" alt="Profile" />
        </v-avatar>
      </v-col>
      <v-col cols="12" md="8">
        <h2 class="text-h5 font-weight-bold mb-2">Saowalak Rungrat</h2>
        <h3 class="text-body-1 mb-4" style="color: #00AEEF;">Senior Mobile Developer</h3>
        <p class="text-body-1 mb-4">
          I am a passionate mobile developer with over 5 years of experience creating innovative applications for iOS and Android platforms. With a strong foundation in both design and development, I strive to create seamless and intuitive user experiences that solve real-world problems.
        </p>
      </v-col>
    </v-row>
    <h1 class="font-weight-bold mt-10" style="font-size: 25px;">Education</h1>
    <v-col cols="12" md="12">
        <v-card variant="outlined" class="pa-4 custom-card">
          <h3 class="text-body-1 font-weight-bold mb-1">Master of Computer Science</h3>
          <div class="text-blue mb-1">Naresuan University</div>
          <div class="text-body-2 mb-2">2015 - 2017</div>
          <div class="text-body-2">
            Specialized in Mobile Computing and Human-Computer Interaction. Graduated with honors and completed thesis on mobile app performance optimization.
          </div>
        </v-card>
      </v-col>
      <v-col cols="12" md="12">
        <v-card variant="outlined" class="pa-4 custom-card">
          <h3 class="text-body-1 font-weight-bold mb-1">Bachelor of Computer Science</h3>
          <div class="text-blue mb-1">Naresuan University</div>
          <div class="text-body-2 mb-2">2011 - 2015</div>
          <div class="text-body-2">
            Focused on software development methodologies and mobile application development. Participated in several hackathons and won Best Mobile App award.
          </div>
        </v-card>
      </v-col>
      <v-col cols="12" md="12">
        <v-card variant="outlined" class="pa-4 custom-card">
          <h3 class="text-body-1 font-weight-bold mb-1">High School</h3>
          <div class="text-blue mb-1">Nakhonsawan School</div>
          <div class="text-body-2 mb-2">2011 - 2015</div>
          <div class="text-body-2">
            Focused on software development methodologies and mobile application development. Participated in several hackathons and won Best Mobile App award.
          </div>
        </v-card>
      </v-col>

    <!-- Tags -->
    <h1 class="font-weight-bold mt-10" style="font-size: 25px;">Skills</h1>
    <div class="d-flex flex-wrap gap-2">
      <v-chip color="primary" variant="tonal">React Native</v-chip>
      <v-chip color="primary" variant="tonal">Flutter</v-chip>
      <v-chip color="primary" variant="tonal">Swift</v-chip>
      <v-chip color="primary" variant="tonal">Kotlin</v-chip>
      <v-chip color="primary" variant="tonal">JavaScript</v-chip>
      <v-chip color="primary" variant="tonal">TypeScript</v-chip>
    </div>

    <h1 class="font-weight-bold mt-10" style="font-size: 25px;">Honers and Awards</h1>
  </v-container>
</template>

<script setup lang="ts">
</script>

<style scoped>
.custom-card {
  border-radius: 8px;
  border-color: #e2e8f0;
}
.gap-2 {
  gap: 0.5rem;
}
</style>