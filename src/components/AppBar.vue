<template>
    <v-navigation-drawer v-model="drawer" class="tw-border-transparent tw-shadow-lg" permanent :rail="rail"
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
    </v-navigation-drawer>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { onMounted, reactive, ref } from 'vue'
import '@/styles/main.scss'
import { VERSION } from '@/constants/constant';
import type { Appbar } from '@/types/common';
import { menuList } from '@/constants/menu_list';
import { menuRouteName, menuIcon } from '@/types/enum/menu';

const router = useRouter()
const drawer = ref(true)
const rail = ref(true)

const menuActionClick = (item: Appbar) => {
    router.push({
        name: menuRouteName[item.menu]
    })
}

onMounted(() => {
})

</script>

<style scoped lang="scss">
@use '@/styles/main' as v;

.v-app-bar,
.v-main {
    background: v.$background-color !important;
    box-shadow: none !important;
}
</style>
