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
  <button @click.prevent="router.push('/')">Click Me</button>
  <h3>Hi {{ username }}</h3>
  <h3>Hi {{ full }}</h3>
</template>
