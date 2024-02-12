<script setup>
import { ref } from 'vue';
import Navbar from '@/components/layout/header/Navbar.vue';
</script>
<template>
  <header class="rounded bg-slate-300" id="app_header">
    <div class="container mx-auto">
      <div class="w-full flex justify-between p-5">
        <img
          class="rounded-full"
          src="https://picsum.photos/seed/picsum/80/40"
        />
        <Navbar />
      </div>
    </div>
  </header>
</template>
<style scoped></style>
