<template>
  <section class="page-hero">
    <div class="container">
      <RouterLink to="/" class="back-link">← Home</RouterLink>
      <span class="eyebrow">How it works</span>
      <h1>From your idea to finished fabric.</h1>
      <p>
        We keep the ordering process straightforward. Browse our fabrics,
        tell us what you need and work with us to finalise the details.
      </p>
    </div>
  </section>

  <section class="section section-light">
    <div class="container">
      <div class="order-steps">
        <article v-for="step in steps" :key="step.number" class="order-step">
          <span>{{ step.number }}</span>
          <div>
            <h2>{{ step.title }}</h2>
            <p>{{ step.description }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>

  <section class="section section-gold">
    <div class="container cta">
      <div>
        <span class="eyebrow eyebrow-navy">Ready?</span>
        <h2>Start with a conversation.</h2>
        <p>
          There is no checkout or complicated form. Simply message us
          and tell us what you are looking to produce.
        </p>
      </div>

      <RouterLink to="/contact" class="button button-navy">
        Contact Alfowa Saqi
      </RouterLink>
    </div>
  </section>
</template>

<script setup>
const steps = [
  {
    number: '01',
    title: 'Browse',
    description: 'Explore our fabric collection and find a construction that suits your garment or project.'
  },
  {
    number: '02',
    title: 'Message us',
    description: 'Contact us through WhatsApp or Instagram and tell us which fabric you are interested in.'
  },
  {
    number: '03',
    title: 'Discuss specifications',
    description: 'We discuss colour, material, weight, quantity, finish, intended use and any custom requirements.'
  },
  {
    number: '04',
    title: 'Production',
    description: 'Once the specification is agreed, production begins and the fabric moves through its finishing stages.'
  }
]
</script>
