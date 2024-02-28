<script setup>
import { ref, computed, defineModel, onMounted } from 'vue';
import useSearch from '@/composables/useSearch'
import { getPortfolios } from '@/api/portfolio'

const { data, searhableprops, query, filters, filteredData } = useSearch();


onMounted(async () => {
    let list = await getPortfolios();
    searhableprops.value = ["title", "description", "category"];
    data.value = list.data;
});
</script>
<template>
    <div>
        <div class="w-1/2 mx-auto my-5">
            <h1>Projects</h1>
            <input type="search" class="w-full bg-gray-100 py-2 px-1 border-gray-400" v-model="query" />
        </div>
        <div class="grid md:grid-cols-3 sm:grid-cols-2 gap-4">
            <div v-for="project in filteredData">
                <div class="w-full bg-slate-200 p-5">
                    <h3 class="text-2xl">{{ project.title }}</h3>
                    <p>{{ project.description }}</p>
                    <span>{{ project.category }}</span>
                </div>
            </div>
        </div>
    </div>
</template>