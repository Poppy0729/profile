<template>
    <v-footer class="d-flex flex-column" color="indigo-lighten-1">
        <div class="d-flex w-100 align-center px-4 py-2">
            <strong>Saowalak Rungrat — © 2025 All Rights Reserved</strong>
            <div class="d-flex ga-2 ms-auto">
                <v-btn v-for="icon in icons" :key="icon" :icon="icon" size="small" variant="plain"></v-btn>
            </div>
        </div>
    </v-footer>
</template>

<script setup lang="ts">
const icons = [
    'mdi-github',
    'mdi-linkedin',
    'mdi-email',
]
</script>