<script setup>
const title = defineProps({ name: String, slogan: String });
</script>
<template>
  <div class="p-10 text-center" id="app_hero">
    <h1 class="text-6xl">{{ name }}</h1>
    <p class="text-center text-2xl">{{ slogan }}</p>
    <button
      @click="$emit('get-quote', 55)"
      class="m-10 p-3 bg-slate-300 rounded-full px-6 text-xl hover:shadow"
    >
      Get a Quote
    </button>
  </div>
</template>
