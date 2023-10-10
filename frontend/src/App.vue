<!-- App.vue -->
<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'  
import Hero from './components/Hero.vue' 
import Features from './components/Features.vue' 
import Cards from './components/Cards.vue' 
import JobCards from './components/JobCards.vue' 
import StaticsViewer from './components/StaticsViewer.vue'
import DescriptionCards from './components/DescriptionCards.vue'
import MasonryGallery from './components/MasonryGallery.vue'
import TailwindPricingTables from './components/TailwindPricingTables.vue'
import FAQ from './components/FAQ.vue'
import Banner from './components/Banner.vue'
import Team from './components/Team.vue'
import TimeLine from './components/TimeLine.vue'
import Stats from './components/Stats.vue'
</script>

<template>
  <div>
    <Navbar />
    <Hero />
    <Banner />
    <Features />  <!-- Add the Features component below Hero -->
    <JobCards />
    <MasonryGallery />
    <DescriptionCards />
    <Cards />
    
    <FAQ />
    <TailwindPricingTables />
    <StaticsViewer />
    <TimeLine />
    <Stats />
    <Team />
    <Footer />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
