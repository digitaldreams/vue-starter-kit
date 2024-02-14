<script setup>
import { ref } from 'vue';
import Navbar from '@/components/layout/header/Navbar.vue';
</script>
<template>
  <header class="rounded bg-slate-300" id="app_header">
    <div class="container mx-auto">
      <div class="w-full flex justify-between p-3">
        <router-link to="/"><img
          class="rounded-full"
          src="https://picsum.photos/seed/picsum/80/40"
        />
      </router-link>
        <Navbar />
        <router-link to="/profile/tuhinbepari"><img class="w-10 h-10 rounded-full mr-3" src="https://avatars.githubusercontent.com/u/6059541?v=4"/></router-link>
      </div>
    </div>
  </header>
</template>
<style scoped></style>
