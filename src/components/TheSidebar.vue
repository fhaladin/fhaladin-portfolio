<template>
  <nav class="sidebar">
    <RouterLink class="sidebar__item" activeClass="active" to="/about">
      <span>
        About
      </span>
    </RouterLink>
    <RouterLink class="sidebar__item" activeClass="active" to="/project">
      <span>
        Project
      </span>
    </RouterLink>
    <a class="sidebar__item" href="mailto:farhan.nif.alaudin@gmail.com">
      <span>
        Contact
      </span>
    </a> 
  </nav>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 85px;
  height: 100vh;
  background-color: $neutral;
  border-right: 1px solid $primary;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  z-index: 99;

  &__item {
    position: relative;
    text-decoration: none;
    transform: rotate(270deg);
    color: $primary;
    font-size: 20px;
    font-weight: 600;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 85px;
    transition: all .5s ease;
    
    &::before {
      content: '';
      width: 100%;
      height: 0px;
      position: absolute;
      bottom: 0;
      left: 0;
      background-color: $green;
    }
    
    &:hover {
      &::before {
        background-color: $secondary;
        height: 85px;
        opacity: .2;
        transition: all .5s ease;
      }
      
      &:not(.active) {
        span {
          transform: translateY(-10px);
          transition: all .5s ease;
        }
      }

      &.active {
        &::before {
          background-color: $green;
          opacity: 1;
        }
      }
    }

    &.active {
      &::before {
        height: 5px;
      }
    }
  }
}
</style>