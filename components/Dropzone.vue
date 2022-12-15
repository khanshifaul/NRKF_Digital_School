
<template>
    <div @dragenter.prevent="toggle_active()" @dragleave.prevent="toggle_active()" @dragover.prevent
        @drop.prevent="drop" :class="{ 'bg-green-400 border-green-100': dragActive }"
        class="flex items-center justify-center w-full px-12 py-8 border-4 border-gray-500 border-dashed rounded dark:border-2">
        <div class="flex flex-col items-center justify-center gap-2 text-gray-500">
            <Icon class="text-6xl" icon="mdi:cloud-upload" />
            <p class="text-base md:text-xl font-semibold">Drag a file here</p>
            <p class="text-xs md:text-sm font-semibold dark:text-gray-400">Or if you prefer</p>
            <!-- File input -->
            <label for="file"
                class="p-2 text-xs md:text-sm font-semibold leading-tight text-gray-600 bg-purple-100 border rounded cursor-pointer dark:bg-purple-600 dark:border-none hover:bg-purple-200 dark:hover:bg-purple-700 hover:shadow-sm">
                <span class="text-purple-500 dark:text-gray-100">Select a file from your device</span>
                <input @change="selectedFile" type="file" name="file" class="hidden" accept=".pdf" />
            </label>
            <!-- Dropped file info -->
            <div v-if="droppedFile !== null"
                class="flex flex-wrap items-center justify-center gap-2 text-base font-semibold text-gray-500">
                <span class=" text-xs md:text-sm">File: {{ droppedFile.name }}</span>
                <button @click="clearDropped()" class="inline-flex items-center justify-center">
                    <Icon class="w-6 h-6 text-red-500" icon="mdi:close-circle" />
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';
import useDropZone from '@/composables/dropzone';
const { dragActive, droppedFile, toggle_active, drop, clearDropped, selectedFile } = useDropZone();
</script>