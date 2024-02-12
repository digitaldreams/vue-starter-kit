<script setup>
import { defineModel } from 'vue';

const subject = defineModel('subject');
const message = defineModel('message');
const name = defineModel('name');
const email = defineModel('email');
</script>
<template>
  <form class="my-5 p-3">
    <div class="mb-5">
      <label for="subject" class="mb-2 block text-xl">Subject</label>
      <input
        type="text"
        name="Subject"
        id="subject"
        class="bg-gray-100 w-full p-1 rounded border border-gray-200 hover:shadow"
        v-model="subject"
      />
    </div>
    <div class="mb-5">
      <label class="mb-2 block text-xl">Message</label>
      <textarea
        name="Subject"
        v-model="message"
        class="bg-gray-100 w-full p-1 rounded border border-gray-200 hover:shadow"
      ></textarea>
    </div>
    <div class="mb-5">
      <label class="mb-2 block text-xl">Name </label>
      <input
        type="text"
        name="Subject"
        v-model="name"
        class="bg-gray-100 w-full p-1 rounded border border-gray-200 hover:shadow"
      />
    </div>
    <div class="mb-5">
      <label class="mb-2 block text-xl">Email</label>
      <input
        type="text"
        name="Subject"
        v-model="email"
        class="bg-gray-100 w-full p-1 col-span-2 rounded border border-gray-200 hover:shadow"
      />
    </div>
    <div class="text-center">
      <input
        type="submit"
        class="bg-gray-800 text-white w-36 p-3 rounded text-2xl"
        value="Send"
      />
    </div>
  </form>
</template>
