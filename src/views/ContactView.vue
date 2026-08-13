<template>
  <section class="page-hero">
    <div class="container">
      <div class="page-hero-top">
        <RouterLink to="/" class="back-link">← Home</RouterLink>
        <span class="eyebrow">Let's Talk</span>
      </div>
      <h1>Tell us what you want to make.</h1>
      <p>
        For fabric enquiries, custom orders, pricing and production
        discussions, contact us directly on WhatsApp or Instagram.
      </p>
    </div>
  </section>

  <section class="section section-light">
    <div class="container contact-grid">

      <a
        :href="site.whatsapp"
        target="_blank"
        rel="noopener noreferrer"
        class="contact-card contact-whatsapp"
      >
        <span class="contact-icon">WA</span>
        <span class="eyebrow eyebrow-dark">Direct enquiry</span>
        <h2>WhatsApp</h2>
        <p>
          The fastest way to discuss a fabric, request pricing or
          talk through a custom order.
        </p>
        <strong>Message us →</strong>
      </a>

      <a
        :href="site.instagram"
        target="_blank"
        rel="noopener noreferrer"
        class="contact-card contact-instagram"
      >
        <span class="contact-icon">IG</span>
        <span class="eyebrow">Visual collection</span>
        <h2>Instagram</h2>
        <p>
          See our work, discover new fabrics and send us a message
          directly through Instagram.
        </p>
        <strong>Visit Instagram →</strong>
      </a>

    </div>
  </section>

  <section class="section section-gold">
    <div class="container centered-cta">
      <span class="eyebrow eyebrow-navy">Custom production</span>
      <h2>Have a specific textile requirement?</h2>
      <p>
        Tell us about the garment, material, quantity, colour or finish
        you have in mind. We can take it from there.
      </p>

      <div class="actions centered">
        <a
          :href="site.whatsapp"
          target="_blank"
          rel="noopener noreferrer"
          class="button button-navy"
        >
          WhatsApp Us
        </a>

        <a
          :href="site.instagram"
          target="_blank"
          rel="noopener noreferrer"
          class="button button-outline-navy"
        >
          Instagram
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { site } from '../data/site'
</script>
