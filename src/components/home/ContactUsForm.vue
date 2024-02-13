<script setup>
import { defineModel } from 'vue';
import Input from '../form/Input.vue';
const subject = defineModel('subject');
const message = defineModel('message');
const name = defineModel('name');
const email = defineModel('email');


</script>

<template>
  <form class="my-5 p-3">
    <Input type="text" v-model="subject" id="subject" name="subject" label="Subject"/>
    <div class="mb-5">
      <label class="mb-2 block text-xl">Message</label>
      <textarea
        name="message"
        v-model="message"
        class="bg-gray-100 w-full p-1 rounded border border-gray-200 hover:shadow"
      ></textarea>
    </div>
    <Input type="text" v-model="name" id="name" name="name" label="Name"/>

    <Input type="email" v-model="email" id="email" name="email" label="Email Address"/>

    <div class="text-center">
      <input
        type="submit"
        class="bg-gray-800 text-white w-36 p-3 rounded text-2xl"
        value="Send"
      />
    </div>
  </form>
</template>
