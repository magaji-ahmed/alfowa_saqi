<template>
  <footer class="footer">
    <div class="container footer-grid">

      <div>
        <RouterLink to="/" class="footer-brand">
          {{ site.name }}
        </RouterLink>
        <p class="footer-description">
          {{ site.tagline }}
        </p>
      </div>

      <div class="footer-column">
        <span class="footer-heading">Explore</span>
        <RouterLink to="/fabrics">Fabrics</RouterLink>
        <RouterLink to="/order-process">Order Process</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
      </div>

      <div class="footer-column">
        <span class="footer-heading">Connect</span>
        <a :href="site.whatsapp" target="_blank" rel="noopener noreferrer">WhatsApp</a>
        <a :href="site.instagram" target="_blank" rel="noopener noreferrer">Instagram</a>
      </div>

    </div>

    <div class="container footer-bottom">
      <span>© {{ year }} {{ site.name }}</span>
      <span>Made to order.</span>
    </div>
  </footer>
</template>

<script setup>
import { site } from '../data/site'

const year = new Date().getFullYear()
</script>
