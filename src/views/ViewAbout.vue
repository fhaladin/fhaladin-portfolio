<template>
  <div class="about">
    <img class="about__image" src="..//assets/image/profile.jpg" alt="" srcset="">    

    <div class="about__content">
      <p class="about__description">
        I am a <strong>Lead Web Frontend Developer</strong> with extensive experience in developing enterprise information systems using Vue.js. Currently, I am working at PT Bukit Makmur Mandiri Utama, where I am responsible for developing and migrating frontend projects from monolithic to micro frontend architecture. I also create reusable UI components, establish code standardization rules for the frontend team, and conduct frontend code quality control.
      </p>

      <div class="about__footer">

        <div class="exp">
          <p class="exp__number">7</p>
          <p class="exp__text">YEARS OF WORK</p>
        </div>

        <a class="about__link" href="https://www.linkedin.com/in/farhan-hanif-alaudin-11412a139/" target="_blank">Linkedin</a>
        <a class="about__link" href="https://fhaladin-dev.medium.com/" target="_blank">Medium</a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about {
  display: flex;
  height: calc(100vh - 40px);
  gap: 24px;

  &__image {
    flex-shrink: 0;
    width: 35%;
    margin-top: auto;
  }

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 20%;
    font-size: 24px;
    padding: 0 40px
  }

  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: end;
  }

  &__link {
    color: $secondary;
  }
}

.exp {
  display: flex;
  align-items: center;
  
  &__number {
    font-size: 100px;
    font-weight: 800;
  }

  &__text {
    margin-top: auto;
    margin-bottom: 30px
  }
}
</style>