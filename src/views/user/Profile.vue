<script setup>
import { ref, onMounted } from 'vue';
import {getProfile} from '@/api/profile';
import {useRoute} from 'vue-router';
import TopCircleCard from '@/components/cards/TopCircleCard.vue';

const route = useRoute();
const user = ref();

onMounted(async()=>{
  let profile=await getProfile(route.params.username);
  user.value = profile.data;
})

</script>
<template>
  <div class="container mx-auto mt-10">

    <TopCircleCard v-bind="user">
      <div class="flex mt-5 justify-between">
          <div v-for="skill in user?.skills" class="bg-white py-1 px-3 rounded-full drop-shadow text-sm">
            {{ skill }}
          </div>
        </div>
    </TopCircleCard>
  </div>
</template>
