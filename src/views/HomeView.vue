<template>
  <section class="hero">
    <div class="container hero-grid">
      <div class="hero-copy">
        <span class="eyebrow">Alfowa Saqi · Custom Textiles</span>

        <h1>
          Fabrics made with
          <em>intention.</em>
        </h1>

        <p class="hero-lead">
          We manufacture distinctive fabrics to order, working with you
          to develop the colour, texture, construction and finish your
          garment or collection requires.
        </p>

        <div class="actions">
          <RouterLink to="/fabrics" class="button button-gold">
            Explore Fabrics
          </RouterLink>

          <RouterLink to="/contact" class="button button-outline">
            Start a Conversation
          </RouterLink>
        </div>

        <div class="hero-meta">
          <span>Custom Production</span>
          <i></i>
          <span>Made to Order</span>
          <i></i>
          <span>Direct Contact</span>
        </div>
      </div>

      <div class="hero-image-wrap">
        <img
          src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=1600&q=85"
          alt="Close-up of premium woven fabric"
        />

        <div class="hero-badge">
          <span>Alfowa</span>
          <small>Custom fabrics</small>
        </div>
      </div>
    </div>
  </section>

  <section class="section section-light">
    <div class="container split-grid">
      <div>
        <span class="eyebrow eyebrow-dark">Who we are</span>
        <h2>From thread to finished textile.</h2>
      </div>

      <div>
        <p class="large-copy">
          Alfowa Saqi creates fabrics for people who care about how
          something looks, feels and lasts. We combine thoughtful
          material selection with careful production to create textiles
          around real requirements.
        </p>

        <RouterLink to="/about" class="text-link text-link-dark">
          Discover our story <b>→</b>
        </RouterLink>
      </div>
    </div>
  </section>

  <section class="section section-navy">
    <div class="container">
      <div class="section-heading">
        <div>
          <span class="eyebrow">Selected fabrics</span>
          <h2>Made for the garment.</h2>
        </div>

        <RouterLink to="/fabrics" class="text-link text-link-gold">
          View all fabrics <b>→</b>
        </RouterLink>
      </div>

      <div class="fabric-grid">
        <FabricCard
          v-for="(fabric, index) in featuredFabrics"
          :key="fabric.slug"
          :fabric="fabric"
          :number="String(index + 1).padStart(2, '0')"
        />
      </div>
    </div>
  </section>

  <section class="section section-gold">
    <div class="container cta">
      <div>
        <span class="eyebrow eyebrow-navy">Custom orders</span>
        <h2>Have a particular fabric in mind?</h2>
        <p>
          Tell us what you are looking to create and we can discuss
          materials, colours, specifications, quantities and production.
        </p>
      </div>

      <RouterLink to="/contact" class="button button-navy">
        Talk to Alfowa Saqi
      </RouterLink>
    </div>
  </section>
</template>

<script setup>
import FabricCard from '../components/FabricCard.vue'
import { fabrics } from '../data/site'

const featuredFabrics = fabrics.slice(0, 3)
</script>
