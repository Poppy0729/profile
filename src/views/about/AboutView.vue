<template>
  <v-container>
    <h1 class="featured-title">About Me</h1>
    <p class="text-center sub-title pb-10">Get to know more about me, my background, and what I do.</p>
    <v-row align="center" justify="center">
      <v-col cols="12" md="3" class="text-center mb-4">
        <v-avatar size="160" class="elevation-3" style="border: 4px solid #00AEEF;">
          <v-img :src="img" alt="Profile" />
        </v-avatar>
      </v-col>
      <v-col cols="12" md="8">
        <h2 class="text-h5 font-weight-bold mb-2">Saowalak Rungrat</h2>
        <h3 class="text-body-1 mb-4" style="color: #00AEEF;">Senior Mobile Developer</h3>
        <p class="text-body-1 mb-4">
          I am a passionate mobile developer with over 5 years of experience creating innovative applications for iOS
          and Android platforms. With a strong foundation in both design and development, I strive to create seamless
          and intuitive user experiences that solve real-world problems.
        </p>
      </v-col>
    </v-row>
    <h1 class="font-weight-bold mt-10" style="font-size: 25px;">Education</h1>
    <v-col cols="12" md="12">
      <v-card variant="outlined" class="pa-4 custom-card">
        <h3 class="text-body-1 font-weight-bold mb-1">Master of Computer Science</h3>
        <div class="text-blue mb-1">Naresuan University</div>
        <div class="text-body-2 mb-2">2017 - 2019</div>
        <!-- <div class="text-body-2">
          Specialized in Mobile Computing and Human-Computer Interaction. Graduated with honors and completed thesis on
          mobile app performance optimization.
        </div> -->
      </v-card>
    </v-col>
    <v-col cols="12" md="12">
      <v-card variant="outlined" class="pa-4 custom-card">
        <h3 class="text-body-1 font-weight-bold mb-1">Bachelor of Computer Science</h3>
        <div class="text-blue mb-1">Naresuan University</div>
        <div class="text-body-2 mb-2">2013 - 2016</div>
        <!-- <div class="text-body-2">
          Focused on software development methodologies and mobile application development. Participated in several
          hackathons and won Best Mobile App award.
        </div> -->
      </v-card>
    </v-col>
    <v-col cols="12" md="12">
      <v-card variant="outlined" class="pa-4 custom-card">
        <h3 class="text-body-1 font-weight-bold mb-1">High School</h3>
        <div class="text-blue mb-1">Nakhonsawan School</div>
        <div class="text-body-2 mb-2">2010 - 2012</div>
      </v-card>
    </v-col>

    <!-- Tags -->
    <h1 class="font-weight-bold mt-10" style="font-size: 25px;">Skills</h1>
    <div class="d-flex flex-wrap gap-2">
      <template v-for="skill in skills" :key="skill">
        <v-chip color="primary" variant="tonal">
          {{ skill }}
        </v-chip>
      </template>
    </div>

    <div>
      <h1 class="font-weight-bold mt-10" style="font-size: 25px;">Speaker</h1>
      <ui>
        <li>The 11th International Conference On Knowledge And Smart Technology
          (KST), Jan 23 - 26, 2019</li>
        <li>Tech Together on 30 Oct 2018 about develop application Thai language
          skill for primary school</li>
        <li>Ratchasuda International Conference on Disability, Jul 26 2017</li>
        <li>The 9th National Science Research Conference, May 25-26 2017</li>
      </ui>
    </div>

    <h1 class="font-weight-bold mt-10" style="font-size: 25px;">Honers and Awards</h1>
    <ui>
      <li>Women Hackathon (Unesco-Microsoft Hack for Asian culture of Peace):
        2018</li>
      <li>Semi Final Round the nineteen National Software Contest: NSC 2017</li>
    </ui>

    <div class="tw-text-center">
      <h1 class="font-weight-bold mt-10" style="font-size: 25px;">My Approach</h1>

      <div class="tw-text-center">
        <v-row align="center" justify="center">
          <v-col v-for="item in approaches" :key="item.title" cols="12" md="4" class="text-center mb-4">
            <div class="tw-bg-white tw-rounded-2xl tw-shadow-md tw-p-8 tw-border tw-border-gray-100">
              <div class="tw-flex tw-justify-center tw-items-center tw-mb-4">
                <div class="tw-w-16 tw-h-16 tw-rounded-full tw-bg-purple-100 tw-flex tw-items-center tw-justify-center">
                  <i :class="`mdi ${item.icon} tw-text-purple-600 tw-text-2xl`"></i>
                </div>
              </div>
              <h3 class="tw-font-semibold tw-text-xl tw-text-gray-900 tw-mb-2">{{ item.title }}</h3>
              <p class="tw-text-gray-600">
                {{ item.description }}
              </p>
            </div>
          </v-col>
        </v-row>
      </div>
    </div>
  </v-container>
</template>

<script setup lang="ts">
import img from "@/assets/images/profile.jpg";
const skills = [
'Swift', 'RxSwift', 'Bitbucket', 'Kanban', 'CocoaPods', 'Fastlane',
'Flutter', 'Python',
  'JavaScript', 
  'TypeScript', 'Vue',
  'PHP Laravel', 'HTML','Core Animation','Firebase', 'Realm', 'Third-party login'
] 
const approaches = [
  {
    icon: 'mdi-lightbulb-outline',
    title: 'User-Centered Design',
    description: 'I believe that great apps start with understanding user needs and expectations.',
  },
  {
    icon: 'mdi-chart-line',
    title: 'Performance Optimization',
    description: 'I focus on creating fast, responsive apps that work smoothly on all devices.',
  },
  {
    icon: 'mdi-clock-outline',
    title: 'Agile Development',
    description: 'I embrace iterative development to deliver value quickly and adapt to changing requirements.',
  },
]
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