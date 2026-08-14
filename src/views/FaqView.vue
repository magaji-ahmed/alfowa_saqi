<script setup>
import { ref } from 'vue'
import { faqs, site } from '../data/site.js'

const openIndex = ref(null)

const toggleFaq = (index) => {
  openIndex.value = openIndex.value === index ? null : index
}
</script>

<template>
  <main>
    <section class="page-hero">
      <div class="container">

        <div class="page-hero-top">
          <RouterLink to="/" class="back-link">← Home</RouterLink>
          <span class="eyebrow">Frequently asked questions</span>
        </div>

        <h1>Questions, answered.</h1>

        <p>
          Find answers to some of the questions we commonly receive about
          our fabrics, production process and custom orders.
        </p>

      </div>
    </section>

    <section class="faq-section">
      <div class="container">
        <div class="faq-list">

          <div
            v-for="(faq, index) in faqs"
            :key="faq.question"
            class="faq-item"
            :class="{ open: openIndex === index }"
          >
            <button
              class="faq-question"
              type="button"
              @click="toggleFaq(index)"
            >
              <span>{{ faq.question }}</span>

              <span class="faq-icon">
                {{ openIndex === index ? '−' : '+' }}
              </span>
            </button>

            <div
              v-if="openIndex === index"
              class="faq-answer"
            >
              <p>{{ faq.answer }}</p>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section class="section contact-cta">
      <div class="container">
        <div class="cta-panel">
          <span class="eyebrow">Still have questions?</span>

          <h2>Let's talk about your fabric.</h2>

          <p>
            If you can't find the answer you're looking for, contact us
            directly and we'll be happy to discuss your requirements.
          </p>

          <div class="cta-actions">
            <a
              :href="site.whatsapp"
              target="_blank"
              rel="noopener"
              class="btn btn-primary"
            >
              WhatsApp
            </a>

            <a
              :href="site.instagram"
              target="_blank"
              rel="noopener"
              class="btn btn-secondary"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>