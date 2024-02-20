<script setup>
import Input from '../form/Input.vue';
import useFormStore from '@/stores/formStore'

const {data,handleValidation}= useFormStore();


const handleSubmit=()=>{
  console.log(handleValidation());

  return false;
}

</script>

<template>
  <form class="my-5 p-3"  @submit.prevent="handleSubmit">
    <Input type="text"  id="subject" name="subject" :rules={required:true,max:250} label="Subject"/>
    <div class="mb-5">
      <label class="mb-2 block text-xl">Message</label>
      <textarea
        name="message"
        class="bg-gray-100 w-full p-1 rounded border border-gray-200 hover:shadow"
      ></textarea>
    </div>
    <Input type="text" :rules={required:true,min:8,max:100} id="name" name="name" label="Name"/>

    <Input type="email" id="email" :rules={required:true,email:true,max:250} name="email" label="Email Address"/>

    <div class="text-center">
      <input
        type="submit"
        class="bg-gray-800 text-white w-36 p-3 rounded text-2xl"
        value="Send"
       
      />
    </div>
  </form>
  {{ data }}
</template>
