<script setup>
import {defineProps} from 'vue';

const data = defineProps({
    id: Number,
    image: String,
    title:String,
    description: String,
    link: String
})

</script>
<template>
    <div class="bg-gray-100 rounded shadow relative ">
            <div class="absolute right-0 mr-2 mt-2 backdrop-blur z-10">
                <button @click="$emit('edit',data.id)" class="text-white text-xs px-2 rounded-full pr-2 background-blur">Edit</button>
                <button @click="$emit('delete',data.id)" class=" text-white text-xs px-2 rounded-full">Delete</button>

            </div>
            <img class="rounded-t object-cover" :src="data.image" />
        <div class="p-3">
        <h3 class="text-xl pb-2 text-center">
          <a :href="data.link">  {{ data.title }}</a>
        </h3>
        <p class="text-center text-sm">{{ data.description }}</p>
        <div class="text-center mt-3 hover:animate-pulse">
             <a class="bg-white px-3 p-2 text-xs rounded shadow " :href="data.link">Learn More</a>
        </div>
         <slot></slot>   
    </div>
    </div>
</template>