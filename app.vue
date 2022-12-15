<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
const route = useRoute()

useHead({
  titleTemplate: '%s - N.R.K.F DIGITAL SCHOOL'
})
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(10rem);
}
</style>