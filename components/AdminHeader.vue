<script setup>
import { Icon } from '@iconify/vue';
</script>

<template>
    <div class="grid grid-cols-[1fr_6fr] items-center">
        <div class="bg-blue-400 flex items-center space-x-3 px-3 lg:px-6 h-12 min-w-[10rem]">
            <Icon class="text-2xl cursor-pointer" icon="mdi:menu" @click="toggleNav()" />
            <div class="text-2xl font-extrabold">Glitch</div>
        </div>
        <div class="bg-orange-300 flex justify-end items-center space-x-3 px-6 h-12">
            <NuxtLink to="/">
                <Icon class="text-2xl" icon="mdi:bell" />
            </NuxtLink>
            <NuxtLink to="/">
                <Icon class="text-2xl" icon="mdi:email" />
            </NuxtLink>
            <div class="flex justify-center items-center cursor-pointer">
                <img class="h-6 mx-2 border-2 rounded-full" src="@/assets/sample-img.png">
                <p class="font-semibold">Admin</p>
                <Icon class="text-2xl" icon="mdi:chevron-down" />
            </div>
        </div>
        <!-- </div> -->
    </div>
</template>