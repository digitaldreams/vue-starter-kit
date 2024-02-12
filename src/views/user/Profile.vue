<script setup>
import { watch, ref, onMounted, onUnmounted } from 'vue';
import {
  useRoute,
  onBeforeRouteLeave,
  onBeforeRouteUpdate,
  useRouter,
} from 'vue-router';

const route = useRoute();
const username = ref(route.params.username);
const full = ref(route.query.full);
const router = useRouter();
watch(
  () => route.params.username,
  (newValue) => {
    username.value = newValue;
    console.log('I am changing from ' + newValue);
  }
);
watch(
  () => route.query.full,
  (newValue) => {
    full.value = newValue;
    console.log('I am changing to ' + newValue);
  }
);
onMounted(() => {
  console.log('I am mounted');
});
onUnmounted(() => {
  console.log('I am unmounted');
});
onBeforeRouteUpdate((to, from) => {
  console.log(to);
  console.log(from);
  return false;
});
</script>
<template>
  <div class="container mx-auto mt-10">
    <div class="md:w-1/3 relative">
      <div class="bg-gray-100 p-5 rounded">
        <img
          src="https://avatars.githubusercontent.com/u/6059541?v=4"
          class="h-20 w-20 rounded-full shadow absolute -top-10 inset-x-32 hover:animate-bounce border-double border-gray-200 border-4"
        />
        <h3 class="text-2xl text-center pt-8 pb-5">Senior Web developer</h3>
        <p class="text-center text-gray-600">
          Software Developer with 10 years progressive experience in the design,
          development, testing of web based software application.
        </p>
        <div class="flex mt-5 justify-between">
          <div class="bg-white py-1 px-3 rounded-full drop-shadow text-sm">
            Symfony
          </div>
          <div class="bg-white py-1 px-3 rounded-full drop-shadow text-sm">
            Laravel
          </div>
          <div class="bg-white py-1 px-3 rounded-full drop-shadow text-sm">
            React
          </div>
          <div class="bg-white py-1 px-3 rounded-full drop-shadow text-sm">
            Vue
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
