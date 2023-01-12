<template>
    <section>
        <div class="menu h-full absolute left-0 top-0 border-r"
             :class="{
                'w-[var(--left-menu-normal-width)]': !appStore.getCollapse,
                'w-[var(--left-menu-min-width)]': appStore.getCollapse,
             }"
        >
            <Logo class="border-solid border-b"/>
            <Menu class="h-[calc(100%-var(--logo-height))]" style="transition: width var(--transition-time-02);"/>
        </div>
        <div class="h-full absolute  top-0"
             :class="{
                'w-[calc(100%-var(--left-menu-normal-width))] left-[var(--left-menu-normal-width)]': !appStore.getCollapse,
                'w-[calc(100%-var(--left-menu-min-width))] left-[var(--left-menu-min-width)]': appStore.getCollapse,
             }"
             style="transition: all var(--transition-time-02);"
        >
            <ToolHeader class="border-b-1 border-solid"/>
            <TagsView />
            <AppView />
        </div>
    </section>
</template>

<script setup lang="ts">
import Logo from '@/components/Logo.vue'
import Menu from '@/components/Menu/index.vue'
import TagsView from '@/components/TagsView.vue'
import ToolHeader from './ToolHeader.vue'
import AppView from './AppView.vue'

import { useAppStore } from '@/store/app';

const appStore = useAppStore()

</script>
