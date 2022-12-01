<script setup>
import { Icon } from '@iconify/vue';
function closeModal() {
    let Modal = document.getElementById('Modal')
    Modal?.classList.add('hidden')
}
</script>

<template>
    <Teleport to="body">
        <div id="Modal" class="absolute top-[50%] bottom-[50%] left-[50%] right-[50%] grid place-content-center z-10">
            <div class="relative text-white flex flex-col">
                <div class="grid place-content-center w-screen h-screen p-6 backdrop-blur">
                    <div class="relative w-full">
                        <Icon class="text-4xl text-white absolute -top-3 -right-3" icon="mdi:close-circle"
                            @click="closeModal()" />
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
    </Teleport>
</template>
