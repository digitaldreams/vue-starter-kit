<script setup>
import { ref } from 'vue';
const count = ref(0);
</script>

<template>
  <main class="bg-slate-100 p-8">
    Your current count is {{ count }}
    <button
      class="bg-slate-600 text-white p-2 px-5 rounded shadow shadow-slate-200"
      @click="count++"
    >
      Increase it
    </button>
  </main>
</template>
