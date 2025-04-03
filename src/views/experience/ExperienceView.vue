<template>
    <div id="main">
        <v-container style="width: 80%;" fluid>
            <h1 class="text-center pt-5 pb-5 font-weight-bold"
            style="font-size: 30px; color: #4a148c;"
            >Work Experience</h1>
            <v-timeline align="start">
      <v-timeline-item
        v-for="(year, i) in years"
        :key="i"
        :dot-color="year.color"
        size="small"
      >
        <template v-slot:opposite>
            <span>Buzzebees</span>
          <div
            :class="`pt-1 headline font-weight-bold text-${year.color}`"
            v-text="year.year"
          ></div>
        </template>
        <v-card class="elevation-2">
        <v-card-title class="text-h5">
          Senior iOS Developer
        </v-card-title>
        <v-card-text>
            <ui>
                <li>Implement a new Tablet project using Flutter base on Android. Already config environment dev, qa, and production </li>
                <li>Experience setup pipeline CI/CD with GOCD</li>
                <li>Config and prepare necessary security for Pentest</li>
                <li>Setup and writing functional E2E automation tests via Flutter.</li>
                <li>Writing API with Python able to features get/update data from DynamoDB, SQS, CloudWatch and connect the internal system etc.</li>
            </ui>
        </v-card-text>
      </v-card>
      </v-timeline-item>
    </v-timeline>
        </v-container>
    </div>
  </template>

<script setup>
  const years = [
    {
      color: 'cyan',
      year: '2024 - Currently',
    },
    {
      color: 'green',
      year: '2022 - 2024',
    },
    {
      color: 'pink',
      year: '1980',
    },
    {
      color: 'amber',
      year: '1990',
    },
    {
      color: 'orange',
      year: '2000',
    },
  ]
</script>