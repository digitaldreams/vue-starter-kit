<script setup>
import {defineProps} from 'vue';
import useFormStore from '@/stores/formStore';

const props= defineProps({
  id:String,
  name: String,
  label: String,
  type: String,
  rules: Object
});

const {data, hasError,errors, handleValidation} = useFormStore();

const validation=(event)=>{
  handleValidation(props.rules,props.name);

}
</script>
<template>
    <div class="mb-5">
      <label :for="id" class="mb-2 block text-xl">{{props.label ?? props.name }}</label>
      <input
        :type="type"
        :id="id"
        :name="name"
        v-model="data[name]"
        class="bg-gray-100 w-full p-1 rounded border border-gray-200 hover:shadow"
        @blur="validation"
      />
      <p v-if="hasError(props.name)">{{ errors[name] }}</p>
      {{ props.rules }}
    </div>
    
</template>