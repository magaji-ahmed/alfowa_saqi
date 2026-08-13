<template>
  <section class="page-hero">
    <div class="container">
      <RouterLink to="/" class="back-link">← Home</RouterLink>
      <span class="eyebrow">Our collection</span>
      <h1>Fabrics for distinctive garments.</h1>
      <p>
        Explore the fabrics we manufacture and learn about their
        construction, materials, production process and pricing.
      </p>
    </div>
  </section>

  <section class="section section-light">
    <div class="container">
      <div class="fabric-grid fabric-grid-light">
        <FabricCard
          v-for="(fabric, index) in fabrics"
          :key="fabric.slug"
          :fabric="fabric"
          :number="String(index + 1).padStart(2, '0')"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import FabricCard from '../components/FabricCard.vue'
import { fabrics } from '../data/site'
</script>
