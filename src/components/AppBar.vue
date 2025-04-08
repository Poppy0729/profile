<template>
    <!-- <v-navigation-drawer 
    v-if="isShowSideBar"
    v-model="drawer" class="tw-border-transparent tw-shadow-lg" permanent :rail="rail"
        @click="rail = false">
        <v-list-item prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg" title="John Leider" nav>
            <template v-slot:append>
                <v-btn icon="mdi-chevron-left" variant="text" @click.stop="rail = !rail"></v-btn>
            </template>
</v-list-item>

<v-divider></v-divider>
<v-list density="compact" nav>
    <template v-for="(item, i) in menuList" :key="i">
                <v-list-item v-if="!item.children" @click="menuActionClick(item)" :value="item"
                    active-class="tw-rounded" :ripple="false" :prepend-icon="menuIcon[item.menu]" :title="item.menu"
                    :active="item.categories.includes(router.currentRoute.value.name as string)">
                </v-list-item>
                <v-list-group v-else>
                    <template v-slot:activator="{ props }">
                        <v-list-item v-bind="props" @click="menuActionClick(item)" :value="item"
                            active-class="tw-rounded" :ripple="false" :prepend-icon="menuIcon[item.menu]"
                            :title="item.menu" :active="false"></v-list-item>
                    </template>
    <template v-for="(child, j) in item.children" :key="j">
                        <v-list-item @click="menuActionClick(child)" :value="child" :ripple="false"
                            :prepend-icon="menuIcon[item.menu]"
                            :active="child.categories.includes(router.currentRoute.value.name as string)">
                            <v-list-item-title>{{ child.menu }}</v-list-item-title>
                        </v-list-item>
                    </template>
    </v-list-group>
    </template>
</v-list>
</v-navigation-drawer> -->
    <v-app-bar :elevation="10" style="color: #4a148c;" class="px-4">
        <template v-slot:prepend>
            <v-btn density="compact" @click="router.push({ name: RouterName.Dashboard })">Portfolio</v-btn>
        </template>
        <template v-slot:append>
            <v-btn density="compact" @click="router.push({ name: RouterName.About })">About Me</v-btn>
            <v-btn density="compact" @click="router.push({ name: RouterName.Experience })">Experience</v-btn>
        </template>
    </v-app-bar>
    <template>
        <v-footer class="text-center d-flex flex-column ga-2 py-4" color="indigo-lighten-1">
            <div class="d-flex ga-3">
                <v-btn v-for="icon in icons" :key="icon" :icon="icon" density="comfortable" variant="text"></v-btn>
            </div>

            <v-divider class="my-2" thickness="2" width="50"></v-divider>

            <div class="text-caption font-weight-regular opacity-60">
                Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum.
                Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur
                dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla
                placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam
                elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur
                ridiculus mus.
            </div>

            <v-divider></v-divider>

            <div>
                {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
            </div>
        </v-footer>
    </template>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { computed, onMounted, ref } from 'vue'
import '@/styles/main.scss'
import type { Appbar } from '@/types/common';
import { menuList } from '@/constants/menu_list';
import { menuRouteName, menuIcon } from '@/types/enum/menu';
import { RouterName } from '@/types/enum/router_name';
const isShowSideBar = computed(() => RouterName.Dashboard !== router.currentRoute.value.name);

const router = useRouter()
const drawer = ref(true)
const rail = ref(true)

const scrollInvoked = ref(0)
function onScroll() {
    scrollInvoked.value++
}

const menuActionClick = (item: Appbar) => {
    router.push({
        name: menuRouteName[item.menu]
    })
}

const icons = [
    'mdi-facebook',
    'mdi-twitter',
    'mdi-linkedin',
    'mdi-instagram',
]

onMounted(() => {
})

</script>

<style scoped lang="scss">
@use '@/styles/main' as v;

.v-app-bar,
.v-main {
    background: white !important;
    box-shadow: none !important;
}
</style>
