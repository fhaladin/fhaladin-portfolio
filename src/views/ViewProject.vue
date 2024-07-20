<template>
  <div class="project">
    <div class="circle__container">
      <div class="circle">
        <span></span>
        <span>a</span>
        <span>r</span>
        <span>h</span>
        <span>a</span>
        <span>n</span>
        <span>•</span>
        <span>H</span>
        <span>a</span>
        <span>n</span>
        <span>i</span>
        <span>f</span>
        <span>•</span>
        <span>A</span>
        <span>l</span>
        <span>a</span>
        <span>u</span>
        <span>d</span>
        <span>i</span>
        <span>n</span>
        <span>•</span>
      </div>

      <svg class="circle__icon" xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="currentColor" @click="onClickGear()">
        <path d="M433-80q-27 0-46.5-18T363-142l-9-66q-13-5-24.5-12T307-235l-62 26q-25 11-50 2t-39-32l-47-82q-14-23-8-49t27-43l53-40q-1-7-1-13.5v-27q0-6.5 1-13.5l-53-40q-21-17-27-43t8-49l47-82q14-23 39-32t50 2l62 26q11-8 23-15t24-12l9-66q4-26 23.5-44t46.5-18h94q27 0 46.5 18t23.5 44l9 66q13 5 24.5 12t22.5 15l62-26q25-11 50-2t39 32l47 82q14 23 8 49t-27 43l-53 40q1 7 1 13.5v27q0 6.5-2 13.5l53 40q21 17 27 43t-8 49l-48 82q-14 23-39 32t-50-2l-60-26q-11 8-23 15t-24 12l-9 66q-4 26-23.5 44T527-80h-94Zm7-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z"/>
      </svg>
    </div>

    <div class="project__slides">
      <div ref="refSlider" class="project__slider" @mouseenter="onMouseEnterSlider()" @mouseleave="onMouseLeaveSlider()">
        <div v-for="project in projects" :key="project.name" class="project__slide" @click="onClickSlide(project.link)">
          <img class="project__image" :src="project.image" alt="" srcset="">    

          <div class="project__text">
            <h2 class="project__title">{{ project.name }}</h2>
            <p class="project__description">{{ project.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import imageBumaUi from '../assets/image/project/buma-ui.svg'
import imageBspace from '../assets/image/project/bspace.svg'
import imageMahafood from '../assets/image/project/mahafood.svg'
import imageMiniapoly from '../assets/image/project/miniapoly.svg'
import imageTokodi from '../assets/image/project/tokodi.svg'
import imageHisensei from '../assets/image/project/hisensei.svg'
import imageTechdemia from '../assets/image/project/techdemia.svg'
import imageTimedoorAcademyPro from '../assets/image/project/timedoor-academy-pro.svg'
import imageNftMarketplace from '../assets/image/project/nft-marketplace.svg'
import imageCozzal from '../assets/image/project/cozzal.svg'
import imageValtatech from '../assets/image/project/miniapoly.svg'

const projects = [
  {
    name: 'Miniapoly',
    image: imageMiniapoly,
    link: 'https://miniapoly.com/',
    description: 'Marketplace for pregnant moms.'
  },
  {
    name: 'Hisensei',
    image: imageHisensei,
    link: 'https://hisensei.net/',
    description: 'E-learning platform with interactive quizzes for children.'
  },
  {
    name: 'Techdemia',
    image: imageTechdemia,
    link: 'https://techdemia.com/',
    description: 'Interactive coding learning platform for kids with gamification.'
  },
  {
    name: 'Timedoor Academy Pro',
    image: imageTimedoorAcademyPro,
    link: 'https://pro.timedooracademy.com/',
    description: 'E-learning platform for adults with embedded code editor and interactive quizzes.'
  },
  {
    name: 'Company Profile Valtatech',
    image: imageValtatech,
    link: 'https://www.valtatech.com/',
    description: 'Company profile site using Nuxt.js.'
  },
  {
    name: 'Cozzal',
    image: imageCozzal,
    link: '',
    description: 'Property rental management system using Laravel.'
  },
  {
    name: 'Buma-UI',
    image: imageBumaUi,
    link: '',
    description: 'NPM package with reusable Vue components and styling utilities.'
  },
  {
    name: 'Bspace2.0',
    image: imageBspace,
    link: '',
    description: 'Micro FE - Enterprise information system at PT Bukit Makmur Mandiri Utama.'
  },
  {
    name: 'Mahafood',
    image: imageMahafood,
    link: '',
    description: 'Food delivery service platform developed with Nuxt.js.'
  },
  {
    name: 'NFT Marketplace',
    image: imageNftMarketplace,
    link: '',
    description: 'NFT marketplace developed with Nuxt.js.'
  },
  {
    name: 'Tokodi',
    image: imageTokodi,
    link: '',
    description: 'Marketplace for dropshippers and resellers.'
  },
]

const refSlider = ref()

const onClickGear = () => {
  // @ts-ignore
  window.open('https://fhaladin-dev.medium.com', '_blank');
}

const onClickSlide = (link: string) => {
  // @ts-ignore
  window.open(link || '#', '_blank');
}

const onMouseEnterSlider = () => {
  refSlider.value.style.animationPlayState = 'paused'
}

const onMouseLeaveSlider = () => {
  refSlider.value.style.animationPlayState = 'running'
}
</script>

<style lang="scss" scoped>
.project {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  &__slides {
    height: 50vh;
    overflow: hidden;
    background-color: $white;
    z-index: 99;
  }

  &__slider {
    display: flex;
    gap: 60px;
    align-items: center;
    height: 100%;
    animation: sliding 60s linear infinite;
  }

  &__slide {
    position: relative;
    flex-shrink: 0;
    height: 100%;
    width: 25%;
    display: flex;
    flex-direction: column;
    cursor: pointer;

    &:hover {
      background-color: $white;
      
      .project__text {
        margin-top: auto;
        margin-bottom: auto;
        text-align: center;
        transition: all .5s ease;
      }
      
      .project__image {
        opacity: .5;
        transition: opacity .5s ease;
      }
    }
  }

  &__image {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: $white;
  }

  &__text {
    background-color: $white;
    margin-top: auto;
    padding-left: 20px;
    z-index: 10;
    text-align: left;
    padding: 10px 0;
  }
  
  &__title {
    margin-bottom: 4px
  }
}

$number-of-spans: 20;
$angle-step: calc(360deg / $number-of-spans);

.circle {
  position: absolute;
  width: 100%;
  height: 100%;
  animation: rotate 15s linear infinite;
  transform-origin: center;

  &__container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 200px;
    transition: all .5s ease;

    &:hover {
      transform: scale(3);
      transition: all .5s ease;
    }
  }

  &__icon {
    animation: rotate-reverse 15s linear infinite;
    cursor: pointer;
  }

  span {
    position: absolute;
    left: 50%;
    transform-origin: 0 100px;

    @for $i from 1 through $number-of-spans {
      &:nth-child(#{$i}) {
        transform: rotate($angle-step * ($i - 1));
      }
    }
  }
}

@keyframes sliding {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-220%);
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

@keyframes rotate-reverse {
  0% {
    transform: rotate(360deg);
  }
  50% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>