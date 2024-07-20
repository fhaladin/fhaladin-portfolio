<template>
  <TheSidebar />
  
  <div class="container">
    <RouterView v-slot="{ Component }">
      <Transition name="fade" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </div>

  <div class="hero">
    <div class="hero__content">
      <h1 class="hero__name">FARHAN HANIF .A</h1>

      <div class="hero__alias-wrapper">
        <h2 class="hero__alias">FRONTEND DEVELOPER</h2>
        <p class="hero__portfolio">Portfolio</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheSidebar from './components/TheSidebar.vue'
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.container {
  margin-left: 85px;
  padding: 20px;
  height: 100vh;
}

.hero {
  position: absolute;
  top: 40px;
  right: 40px;
  display: flex;

  &__name {
    font-size: 65px;
    text-align: right;
  }

  &__alias-wrapper {
    display: flex;
    gap: 8px;
  }

  &__alias {
    font-size: 65px;
    text-align: right;
  }

  &__portfolio {
    margin-top: auto;
    font-size: 20px;
  }
}
</style>
