<script setup>
import { Icon } from '@iconify/vue';
import { ref } from 'vue'

const show = ref(true)
</script>

<template>
    <Teleport to="body">
        <Transition name="slide-fade">
            <div id="Modal" v-if="show"
                class="fixed top-1/2 bottom-1/2 left-1/2 right-1/2 grid place-content-center z-10">
                <div class="relative text-white flex flex-col">
                    <div class="grid place-content-center w-screen h-screen p-6 backdrop-blur">
                        <div class="relative w-full">
                            <Icon class="text-4xl text-white bg-blue-300 rounded-full absolute -top-3 -right-3"
                                icon="mdi:close-circle" @click="show = !show" />
                        </div>
                        <div class="grid grid-rows-[1fr_auto] gap-2 p-3 bg-blue-300 rounded h-fit w-80 md:w-fit">
                            <div class="flex flex-col items-center justify-center">
                                <img class="object-cover max-h-[80vh]" src="@/assets/img/admission_leaflet.jpg" alt="">
                            </div>
                            <div class="flex items-end justify-center">
                                <router-link class="bg-[#FB2576] p-3 rounded font-semibold"
                                    :to="{ name: 'admission' }">Apply Now</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>

<style scoped>
.slide-fade-enter-active {
    transition: all 0.8s ease-out 1500s;
}

.slide-fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateY(20px);
    opacity: 0;
}
</style>