<template>
  <TheSidebar />
  
  <div class="container">
    <RouterView v-slot="{ Component }">
      <Transition name="fade" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </div>

  <div class="cursor"></div>

  <div class="hero-page">
    <div class="hero-page__content">
      <h1 class="hero-page__name">FARHAN HANIF .A</h1>

      <div class="hero-page__alias-wrapper">
        <h2 class="hero-page__alias">FRONTEND DEVELOPER</h2>
        <p class="hero-page__portfolio">Portfolio</p>
      </div>
    </div>
  </div>

  <Transition name="slide-fade">
    <div v-if="showHero" class="hero">
      <div class="hero__content">
        <h1 class="hero__name">FARHAN HANIF .A</h1>

        <div class="hero__alias-wrapper">
          <h2 class="hero__alias">FRONTEND DEVELOPER</h2>
          <p class="hero__portfolio">Portfolio</p>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { RouterView } from 'vue-router'
import TheSidebar from './components/TheSidebar.vue'

const showHero = ref<boolean>(true)

onMounted(() => {
  setTimeout(() => {
    showHero.value = false
  }, 700)

  document.addEventListener('mousemove', (e: MouseEvent) => {
    const cursor = document.querySelector('.cursor') as HTMLElement
    
    if (cursor) {
      cursor.style.left = `${e.pageX-8}px`
      cursor.style.top = `${e.pageY-8}px`
    }
  })
})
</script>

<style lang="scss" scoped>
.slide-fade-enter-active {
  transition: all 2s ease;
}
.slide-fade-leave-active {
  transition: all 2s ease;
}
.slide-fade-enter, .slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-70%); /* Adjust the value as needed */
}

.blur-enter-active, .blur-leave-active {
  transition: filter 0.5s, opacity 0.5s;
}
.blur-enter, .blur-leave-to /* .blur-leave-active in <2.1.8 */ {
  filter: blur(100px);
  opacity: 0;
}

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

.hero-page {
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

.hero {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  background-color: $secondary;
  color: $white;
  width: 100vw;
  height: 100vh;
  display: flex;

  &__content {
    margin: auto 40px 20px auto;
  }

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

.cursor {
  position: fixed;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: $green;
  pointer-events: none;
  transform: translate(-50%, -50%);
  transition: top 0.1s ease, left 0.1s ease;
  opacity: 0.4;
  z-index: 99;
}

.cursor.animate {
  width: 200px;
  height: 200px;
  opacity: 0;
  transition: all 1s ease;
}
</style>

