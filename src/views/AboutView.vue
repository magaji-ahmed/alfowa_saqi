<template>
  <section class="page-hero">
    <div class="container">
      <RouterLink to="/" class="back-link">← Home</RouterLink>
      <span class="eyebrow">About Alfowa Saqi</span>
      <h1>A fabric house built around craft and intention.</h1>
      <p>
        We believe the right textile gives a garment its character.
        Our work begins with the material and ends with something made
        for a specific purpose.
      </p>
    </div>
  </section>

  <section class="section section-light">
    <div class="container split-grid">
      <div>
        <span class="eyebrow eyebrow-dark">Our story</span>
        <h2>Built around the fabric itself.</h2>
      </div>

      <div class="prose">
        <p>
          Alfowa Saqi is focused on custom textile production — creating
          fabrics for designers, garment makers, businesses and individuals
          who need something beyond an off-the-shelf textile.
        </p>
        <p>
          We work from the practical requirements of each project:
          how the fabric should feel, how it should fall, how it should
          perform and how it should look.
        </p>
      </div>
    </div>
  </section>

  <section class="section section-cream">
    <div class="container">
      <div class="section-heading">
        <div>
          <span class="eyebrow eyebrow-dark">Our values</span>
          <h2>What guides the work.</h2>
        </div>
      </div>

      <div class="values-grid">
        <article v-for="value in values" :key="value.number">
          <span>{{ value.number }}</span>
          <h3>{{ value.title }}</h3>
          <p>{{ value.description }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
const values = [
  {
    number: '01',
    title: 'Craft',
    description: 'We care about construction, texture, finishing and the small details that make a textile feel considered.'
  },
  {
    number: '02',
    title: 'Purpose',
    description: 'Every fabric should serve its intended garment, collection or application rather than simply look good in isolation.'
  },
  {
    number: '03',
    title: 'Flexibility',
    description: 'Custom production gives us room to discuss materials, colour, weight and finishing around your requirements.'
  },
  {
    number: '04',
    title: 'Trust',
    description: 'We aim for clear conversations, realistic specifications and a straightforward production relationship.'
  }
]
</script>
