<template>
  <RouterLink :to="`/fabrics/${fabric.slug}`" class="fabric-card">
    <div class="fabric-card-image">
      <img :src="fabric.image" :alt="fabric.name" loading="lazy" />
      <span>{{ fabric.category }}</span>
    </div>

    <div class="fabric-card-content">
      <span class="card-number">{{ number }}</span>
      <h3>{{ fabric.name }}</h3>
      <p>{{ fabric.shortDescription }}</p>
      <span class="card-link">View fabric <b>→</b></span>
    </div>
  </RouterLink>
</template>

<script setup>
defineProps({
  fabric: {
    type: Object,
    required: true
  },
  number: {
    type: String,
    default: '01'
  }
})
</script>
