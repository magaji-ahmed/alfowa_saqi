<template>
  <header class="site-header">
    <div class="container nav-wrap">

      <!-- Text brand only. The supplied logo is intentionally NOT used. -->
      <RouterLink to="/" class="brand">
        {{ site.name }}
      </RouterLink>

      <button
        class="menu-button"
        type="button"
        aria-label="Open navigation"
        @click="menuOpen = !menuOpen"
      >
        {{ menuOpen ? '×' : '☰' }}
      </button>

      <nav class="nav" :class="{ 'nav-open': menuOpen }">
        <RouterLink to="/" @click="closeMenu">Home</RouterLink>
        <RouterLink to="/fabrics" @click="closeMenu">Fabrics</RouterLink>
        <RouterLink to="/order-process" @click="closeMenu">Order Process</RouterLink>
        <RouterLink to="/about" @click="closeMenu">About</RouterLink>
        <RouterLink to="/contact" @click="closeMenu">Contact</RouterLink>

        <button class="theme-button" type="button" @click="toggleTheme">
          <span>{{ isDark ? '☼' : '☾' }}</span>
          {{ isDark ? 'Light' : 'Dark' }}
        </button>

        <a
          class="nav-whatsapp"
          :href="site.whatsapp"
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp
        </a>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { onMounted, ref, onBeforeUnmount } from 'vue'
import { site } from '../data/site'

const menuOpen = ref(false)
const isDark = ref(false)

function closeMenu() {
  menuOpen.value = false
}

const handlePageClick = (event) => {
  const nav = event.target.closest('.site-header')

  if (!nav) {
    closeMenu()
  }
}

onMounted(() => {
  document.addEventListener('click', handlePageClick)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handlePageClick)
})

function applyTheme(theme) {
  isDark.value = theme === 'dark'
  document.documentElement.dataset.theme = theme
  localStorage.setItem('alfowa-theme', theme)
}

function toggleTheme() {
  applyTheme(isDark.value ? 'light' : 'dark')
}

onMounted(() => {
  const saved = localStorage.getItem('alfowa-theme')
  applyTheme(saved || 'light')
})
</script>
