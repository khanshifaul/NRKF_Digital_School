<template>
    <section class="text-black">
        <div class="grid gap-3">
            <div class="bg-blue-200 p-3 grid gap-3">
                <div class="grid gap-3 lg:grid-cols-2">
                    <div class="grid gap-3">
                        <input v-model="noticeTitle" class="p-3" type="text" placeholder="Enter Title">
                        <Dropzone />
                    </div>
                    <div class="bg-red-100 p-3 lg:block">
                        <p class="w-full">{{ noticeTitle }}</p>
                    </div>
                </div>
                <div class="grid grid-cols-2 gap-3 text-lg font-semibold">
                    <input class="p-3 border-green-600 border-2" type="submit" value="Save as Draft">
                    <input class="p-3 bg-green-600" type="submit" value="Post">
                </div>
            </div>
            <div class="bg-lime-500 p-3">
                <div>posts drafts</div>
                <div>
                    checkbox
                    title
                    postdate
                    view
                    edit
                    delete
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import Dropzone from '~~/components/Dropzone.vue';
import { ref } from 'vue';
definePageMeta({
    layout: 'admin',
    // middleware: 'auth',
})
useHead({
    title: 'Notice',
})

const noticeTitle = ref("")

</script>