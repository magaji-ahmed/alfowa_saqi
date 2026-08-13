<template>
  <div v-if="fabric">

    <section class="detail-hero">
      <div class="container detail-grid">
        <div class="detail-copy">
          <div class="page-hero-top">
            <RouterLink to="/" class="back-link">← Home</RouterLink>
            <span class="eyebrow">{{ fabric.category }}</span>
          </div>

          <h1>{{ fabric.name }}</h1>

          <p class="detail-overview">
            {{ fabric.overview }}
          </p>

          <div class="price">
            <span>Starting price</span>
            <strong>{{ fabric.price }}</strong>
          </div>

          <div class="actions">
            <a
              :href="whatsappLink"
              target="_blank"
              rel="noopener noreferrer"
              class="button button-gold"
            >
              Ask about this fabric
            </a>

            <a
              :href="site.instagram"
              target="_blank"
              rel="noopener noreferrer"
              class="button button-outline"
            >
              Instagram
            </a>
          </div>
        </div>

        <div class="detail-image">
          <img :src="fabric.image" :alt="fabric.name" />
          <span>{{ fabric.category }}</span>
        </div>
      </div>
    </section>

    <section class="section section-light">
      <div class="container">
        <div class="section-intro">
          <span class="eyebrow eyebrow-dark">Production</span>
          <h2>How this fabric is made.</h2>
          <p>
            Every custom order begins with a clear specification and
            moves through preparation, production and finishing.
          </p>
        </div>

        <div class="process-grid">
          <article
            v-for="step in fabric.process"
            :key="step.number"
            class="process-card"
          >
            <span class="process-number">{{ step.number }}</span>
            <h3>{{ step.title }}</h3>
            <p>{{ step.description }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section section-cream">
      <div class="container split-grid">
        <div>
          <span class="eyebrow eyebrow-dark">Materials</span>
          <h2>The threads behind the fabric.</h2>
        </div>

        <div class="thread-list">
          <article
            v-for="(thread, index) in fabric.threads"
            :key="thread.name"
            class="thread-item"
          >
            <div class="thread-swatch" :class="`swatch-${index + 1}`"></div>

            <div>
              <h3>{{ thread.name }}</h3>
              <strong>{{ thread.material }}</strong>
              <p>{{ thread.description }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="section section-light">
      <div class="container">
        <div class="section-heading">
          <div>
            <span class="eyebrow eyebrow-dark">Examples</span>
            <h2>Finished fabric.</h2>
          </div>
        </div>

        <div class="gallery-grid">
          <figure
            v-for="item in fabric.gallery"
            :key="item.title"
            class="gallery-item"
          >
            <img :src="item.image" :alt="`${fabric.name} — ${item.title}`" loading="lazy" />
            <figcaption>{{ item.title }}</figcaption>
          </figure>
        </div>
      </div>
    </section>

    <section class="section section-gold">
      <div class="container cta">
        <div>
          <span class="eyebrow eyebrow-navy">Interested in {{ fabric.name }}?</span>
          <h2>Let's discuss your requirements.</h2>
          <p>
            Message us with your desired colour, quantity, application
            and any other specifications.
          </p>
        </div>

        <a
          :href="whatsappLink"
          target="_blank"
          rel="noopener noreferrer"
          class="button button-navy"
        >
          Message on WhatsApp
        </a>
      </div>
    </section>

  </div>

  <section v-else class="section section-light">
    <div class="container empty-state">
      <h1>Fabric not found.</h1>
      <RouterLink to="/fabrics" class="button button-gold">
        Browse fabrics
      </RouterLink>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { fabrics, site } from '../data/site'

const route = useRoute()

const fabric = computed(() =>
  fabrics.find(item => item.slug === route.params.slug)
)

const whatsappLink = computed(() => {
  if (!fabric.value) return site.whatsapp

  const message = encodeURIComponent(
    `Hello Alfowa Saqi, I am interested in ${fabric.value.name}. I would like to discuss the fabric, pricing and custom order options.`
  )

  return `${site.whatsapp}?text=${message}`
})
</script>
