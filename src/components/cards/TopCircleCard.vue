<script setup>
import {defineProps} from 'vue';

const props = defineProps({
    image: String,
    title: String,
    description: String,
});
</script>
<template>
    <div class="relative">
      <div class="bg-gray-100 p-5 rounded">
        <img
        :src="image"
          class="h-20 w-20 rounded-full shadow absolute  -top-0 left-1/2  -translate-x-1/2 -translate-y-1/2  border-double border-gray-200 border-4"
        />
        <h3 class="text-2xl text-center pt-8 pb-5">{{ props.title }}</h3>
        <p class="text-center text-gray-600">
         {{ props.description }}
        </p>
        <slot></slot>
      </div>
    </div>
</template>