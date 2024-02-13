<script setup>
import {ref,onMounted} from 'vue'
import Card from '@/components/Card.vue';

const services = ref([
    {
        id:1,
        image: 'https://picsum.photos/id/1/400/300',
        title: 'Web Development',
        description: 'Best web development service guranteed',
        link: 'https://youtue.com'
    }
]);

function edit(id){
console.log('Edit clicked on '+id);

}

function remove(id) {
console.log('Delete clickd on '+id);
}

onMounted(()=>{

});

</script>
<template>
    <div class="container mx-auto px-10">
    <h1 class="text-3xl py-10 text-center">Services</h1>
    <div class="flex">
        <Card class="md:w-1/3 sm:w-1/2" v-for="service in services"
        v-bind="service"
        @edit="edit" @delete="remove"
        ></Card>
    </div>
</div>
</template>