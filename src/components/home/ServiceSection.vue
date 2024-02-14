<script setup>
import {ref,onMounted,defineProps} from 'vue';
import {getServices} from '@/api/service.js';
import TopCircleCard from '@/components/cards/TopCircleCard.vue';

const services = ref([]);
const props = defineProps({
    title: String,
    description: String
})
onMounted(async()=>{
    let serviceList = await getServices();
    services.value = serviceList.data
});
</script>
<template>
    <div class="container mx-auto">
        <slot></slot>
        <div class="grid lg:grid-cols-4 md:grid-cols-2 gap-10">
            <TopCircleCard v-for="service in services" v-bind="service"></TopCircleCard>
        </div>
        <slot name="action"></slot>
    </div>
</template>