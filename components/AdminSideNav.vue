<script setup>
import { Icon } from '@iconify/vue';
</script>

<template>
    <aside class="bg-blue-300 hidden lg:grid grid-rows-[auto_1fr] h-full min-w-[10rem]">
        <div class="font-semibold">
            <div class="grid gap-2 px-6 py-2 text-lg">
                <div class="text-xs uppercase py-2">Navigations</div>
                <NuxtLink class="flex flex-nowrap items-center" to="/">
                    <Icon class="mr-2" icon="mdi:view-dashboard" />Dashboard
                </NuxtLink>
                <NuxtLink class="flex flex-nowrap items-center" to="/">
                    <Icon class="mr-2" icon="mdi:email" />Mailbox
                </NuxtLink>
            </div>
            <div class="grid gap-2 px-6 py-2 text-lg">
                <div class="text-xs uppercase py-2">Pages</div>
                <NuxtLink class="flex flex-nowrap items-center" to="/">
                    <Icon class="mr-2" icon="mdi:information" />About
                </NuxtLink>
                <NuxtLink class="flex flex-nowrap items-center" to="/">
                    <Icon class="mr-2" icon="mdi:school" />Academic
                </NuxtLink>
                <NuxtLink class="flex flex-nowrap items-center" to="/">
                    <Icon class="mr-2" icon="material-symbols:other-admission" />Admission
                </NuxtLink>
                <NuxtLink class="flex flex-nowrap items-center" to="/">
                    <Icon class="mr-2" icon="mdi:account-school" />Student
                </NuxtLink>
                <NuxtLink class="flex flex-nowrap items-center" to="/">
                    <Icon class="mr-2" icon="mdi:human-male-board" />Teacher
                </NuxtLink>
                <NuxtLink class="flex flex-nowrap items-center" to="/">
                    <Icon class="mr-2" icon="mdi:check-decagram" />Facilities
                </NuxtLink>
                <NuxtLink class="flex flex-nowrap items-center" to="/admin/notice">
                    <Icon class="mr-2" icon="mdi:bulletin-board" />Notice
                </NuxtLink>
                <NuxtLink class="flex flex-nowrap items-center" to="/">
                    <Icon class="mr-2" icon="mdi:contacts" />Contact
                </NuxtLink>
                <NuxtLink class="flex flex-nowrap items-center" to="/">
                    <Icon class="mr-2" icon="mdi:comment-question" />Help
                </NuxtLink>
            </div>
        </div>
    </aside>
</template>