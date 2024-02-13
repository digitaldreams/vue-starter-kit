<script setup>
import {ref,onMounted} from 'vue'
import Card from '@/components/Card.vue';
import ContactUsFrom from '@/components/home/ContactUsForm.vue'
import {getServices} from '@/api/service';
const services = ref([
    
]);
const loading =ref(true);

function edit(id){
console.log('Edit clicked on '+id);

}

function remove(id) {
console.log('Delete clickd on '+id);
}

onMounted(async()=>{
    let data = await getServices();
    services.value = data.data;
});



</script>
<template>
    <div class="container mx-auto px-5">
        <h1 class="text-3xl py-5 text-center">Services</h1>
        <div class="grid md:grid-cols-4 sm:grid-cols-2 gap-4">
            <Card class="" v-for="service in services"
            v-bind="service"
            @edit="edit" @delete="remove"></Card>
        </div>

    </div>
    <div class=" bg-cyan-300">
        <div class="container mx-auto">
            <p class="p-20  text-3xl text-center">Working closely with us</p>
    </div>
</div>
<ContactUsFrom/>

</template>