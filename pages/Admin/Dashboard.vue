<template>
  <section class="text-black p-3 md:p-0">
    <div class="container mx-auto">
      <div class="grid">
        <AdminDashboard />
      </div>
    </div>
  </section>
</template>

<script setup>
definePageMeta({
  layout: 'admin',
  // middleware: 'auth',
})
useHead({
  title: 'Dashboard',
})
</script>