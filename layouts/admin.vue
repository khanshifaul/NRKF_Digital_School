<template>
  <div class="h-screen lg:grid grid-rows-[auto_1fr] gap-0">
    <AdminHeader />
    <div class="h-full lg:grid grid-cols-[1fr_6fr]">
      <AdminSideNav />
      <div class="m-2">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()

useHead({
  title: ''
})
</script>
