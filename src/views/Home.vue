<script setup>
import Header from '@/components/layout/header/Header.vue';
import Hero from '@/components/home/Hero.vue';
import ContactUs from '@/components/home/ContactUs.vue';
import Footer from '@/components/layout/footer/Footer.vue';
import ServiceSection from '@/components/home/ServiceSection.vue';

const quotationCallBack = (number) => {
  console.log('Get a Quote clicked!' + number);
  console.log(event);
};
</script>
<template>
  <div>
    <Header />
    <Hero
      @get-quote="quotationCallBack"
      name="Vite + Vue"
      slogan="Lets build a digital community together"
    />
    <ServiceSection>
      <h3 class="text-3xl text-center py-10"> Services We Provide </h3>
        <p class="pb-20 text-center"> Animations using Vue's transition class conventions and want to switch between them.

</p>
    </ServiceSection>
    <ContactUs />
  
    <Footer />
</div>
</template>
