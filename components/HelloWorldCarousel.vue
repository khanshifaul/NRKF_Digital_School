<template>
    <div class="carousel">
        <swiper :spaceBetween="30" :effect="'fade'" :navigation="true" :pagination="{ cickable: true }"
            :autoplay="{ delay: 1500, disableOnInteraction: true }" :modules="modules" class="mySwiper">
            <swiper-slide><img
                    src="https://ik.imagekit.io/khanshifaul/wallpaper-_4__78PkeQiju.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1662840108586" /></swiper-slide>
            <swiper-slide><img
                    src="https://ik.imagekit.io/khanshifaul/wallpaper-_3__pNGJs5u_F.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1662840116131" /></swiper-slide>
            <swiper-slide><img
                    src="https://ik.imagekit.io/khanshifaul/wallpaper-_12__FjBu0EFfH.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1662840115207" /></swiper-slide>
            <swiper-slide><img
                    src="https://ik.imagekit.io/khanshifaul/wallpaper-_6__NUvftHpxI.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1662840082540" /></swiper-slide>
        </swiper>
    </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Autoplay, EffectFade, Navigation, Pagination],
        };
    },
};
</script>

<style scoped>
.carousel {
    display: contents;
}


.swiper {
    width: 100%;
    height: 100%;
}

.swiper-slide {
    background-position: center;
    background-size: cover;
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
}
</style>