<script setup>
import {defineModel,defineProps} from 'vue';
const model = defineModel();
const props= defineProps({
  id:String,
  name: String,
  label: String,
  type: String
})

</script>
<template>
    <div class="mb-5">
      <label :for="id" class="mb-2 block text-xl">{{props.label ?? props.name }}</label>
      <input
        :type="type"
        :id="id"
        :name="name"
        class="bg-gray-100 w-full p-1 rounded border border-gray-200 hover:shadow"
        v-model="model"
      />
    </div>
</template>