<script setup>
import Header from '@/components/layout/header/Header.vue';
import Hero from '@/components/home/Hero.vue';
import ContactUs from '@/components/home/ContactUs.vue';
import Footer from '@/components/layout/footer/Footer.vue';

const quotationCallBack = (number) => {
  console.log('Get a Quote clicked!' + number);
  console.log(event);
};
</script>
<template>
  <Header />
  <Hero
    @get-quote="quotationCallBack"
    name="Vite + Vue"
    slogan="Lets build a digital community together"
  />
  <ContactUs />
  
  <Footer />
</template>
