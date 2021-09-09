/* eslint-disable vue/no-deprecated-slot-attribute */ /* eslint-disable
vue/no-deprecated-slot-attribute */ /* eslint-disable prettier/prettier */
<template>
  <section class="main">
    <main-page />
    <div class="container">
      <breadcrumbs />
      <main-menu />
    </div>
  </section>
  <div class="container">
    <section class="page-section">
      <image-title />
      <img-comparison-slider
        style="width: 100%; margin: 0 auto; display: block">
        <div class="img-box" slot="first">
          <img src="images/main.jpg" style="width: 100%"/>
          <span class="img-box__btn one">+</span>
          <span class="img-box__btn two">+</span>
          <span class="img-box__btn three">+</span>
        </div>
        <div class="img-box" slot="second">
          <img src="images/new.jpg" style="width: 100%"/>
          <span class="img-box__btn four">+</span>
          <span class="img-box__btn five">+</span>
          <span class="img-box__btn six">+</span>
        </div>
      </img-comparison-slider>
    </section>
    <section class="page-section line" id="menu0">
      <h2 class="title">Обзор</h2>
      <p class="descr">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <tabs-app
        :tabs="['галерея', 'видео', '360']"
        @clicked="clickGalleryTab"
      />
      <splide v-if="activeGalleryTab === 'галерея'" :options="options">
        <splide-slide v-for="slide in slides" :key="slide">
          <img :src="`images/${slide}`" />
        </splide-slide>
      </splide>
      <iframe
        v-if="activeGalleryTab === 'видео'"
        width="1200"
        height="315"
        src="https://www.youtube.com/embed/_VwPbCMjUr4"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </section>
    <section class="page-section line" id="menu1">
      <h2 class="title">Комплектации</h2>
      <characteristics-app />
    </section>
    <section class="page-section line" id="menu2">
      <h2 class="title">Особенности</h2>
      <tabs-app
        :tabs="[
          'безопасность',
          'комфорт',
          'проходимость',
          'удобство',
          'экстерьер',
        ]"
        @clicked="clickFeaturesTab"
      />
      <splide
        v-if="activeFeaturesTab === 'безопасность'"
        :options="optionsFeatures"
      >
        <splide-slide v-for="(item, idx) in safety" :key="idx">
          <feature-app :title="'еще больше преимуществ'" :image="`${item}`" />
        </splide-slide>
      </splide>

      <splide v-if="activeFeaturesTab === 'комфорт'" :options="optionsFeatures">
        <splide-slide v-for="(item, idx) in comfort" :key="idx">
          <feature-app :title="'еще больше технологий'" :image="`${item}`" />
        </splide-slide>
      </splide>

      <splide
        v-if="activeFeaturesTab === 'проходимость'"
        :options="optionsFeatures"
      >
        <splide-slide v-for="(item, idx) in passability" :key="idx">
          <feature-app :title="'еще больше технологий'" :image="`${item}`" />
        </splide-slide>
      </splide>

      <splide
        v-if="activeFeaturesTab === 'удобство'"
        :options="optionsFeatures"
      >
        <splide-slide v-for="(item, idx) in convenience" :key="idx">
          <feature-app :title="'еще больше технологий'" :image="`${item}`" />
        </splide-slide>
      </splide>

      <splide
        v-if="activeFeaturesTab === 'экстерьер'"
        :options="optionsFeatures"
      >
        <splide-slide v-for="(item, idx) in exterior" :key="idx">
          <feature-app :title="'еще больше технологий'" :image="`${item}`" />
        </splide-slide>
      </splide>
    </section>
    <section class="page-section line" id="menu3">
      <h2 class="title">Как купить</h2>
      <p class="descr">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </section>
  </div>
</template>

<script>
import MainPage from "./components/MainPage.vue";
import Breadcrumbs from "./components/Breadcrumbs.vue";
import MainMenu from "./components/MainMenu.vue";
import TabsApp from "./components/TabsApp.vue";
import FeatureApp from "./components/FeatureApp.vue";
import ImageTitle from "./components/ImageTitle.vue";
import CharacteristicsApp from "./components/CharacteristicsApp.vue";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import "img-comparison-slider";

export default {
  name: "AllroadApp",

  components: {
    MainPage,
    Breadcrumbs,
    MainMenu,
    TabsApp,
    FeatureApp,
    Splide,
    SplideSlide,
    ImageTitle,
    CharacteristicsApp,
  },

  data() {
    return {
      activeFeaturesTab: "безопасность",
      activeGalleryTab: "галерея",
      slides: ["main.jpg", "main.jpg", "main.jpg"],
      safety: ["2159.jpg", "2192.jpg", "2240.jpg"],
      comfort: ["2159.jpg", "2196.jpg", "2241.jpg"],
      passability: ["2161.jpg", "2173.jpg"],
      convenience: [
        "2172.jpg",
        "2178.jpg",
        "2181.jpg",
        "2200.jpg",
        "2206.jpg",
        "2221.jpg",
        "2252.jpg",
      ],
      exterior: ["2159.jpg", "2165.jpg", "DSC_3100.jpg"],
      options: {
        type: "loop",
        perPage: 2,
        height: 300,
        autoplay: true,
        gap: 50,
        arrows: false,
        pagination: false,
        cover: true,
        speed: 500,
        rewindSpeed: 2000,
      },
      optionsFeatures: {
        type: "loop",
        perPage: 1,
        height: 300,
        autoplay: true,
        gap: 50,
        arrows: true,
        pagination: true,
        cover: true,
        speed: 500,
        rewindSpeed: 2000,
      },
    };
  },

  methods: {
    clickFeaturesTab(tab) {
      this.activeFeaturesTab = tab.tab;
    },

    clickGalleryTab(tab) {
      this.activeGalleryTab = tab.tab;
    },
  },
};
</script>

<style lang="scss">
html {
  box-sizing: border-box;
  scroll-behavior: smooth;
  font-family: "Roboto", sans-serif;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

a {
  text-decoration: none;
  color: inherit;
  display: inline-block;
  width: max-content;
}

ul,
li {
  list-style: none;
  padding: 0;
  margin: 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  font-size: inherit;
}

p {
  margin: 0;
}

body {
  background-color: #ffffff;
  color: #2f3035;
  font-size: 18px;
  line-height: 24px;
  overflow-x: hidden;
  min-width: 320px;
  margin: 0;
}

.container {
  max-width: 1200px;
  padding: 0 30px;
  margin: 0 auto;
}

.page-section {
  margin-bottom: 80px;
  position: relative;
}

.line::before {
  content: "";
  position: absolute;
  width: 250px;
  height: 2px;
  background-color: red;
  left: -300px;
  top: 10px;
}

.title {
  font-size: 25px;
  padding-left: 80px;
  margin-bottom: 40px;
}

.descr {
  display: inline-block;
  max-width: 65%;
  margin-bottom: 40px;
}

.main {
  background-color: black;
  margin-bottom: 80px;
}

.splide__slide {
  filter: opacity(0.2);
}

.splide__slide + .is-active {
  filter: opacity(1);
}

.splide__pagination__page.is-active {
  background: red;
}

.splide__pagination {
  bottom: -1.5em;
}

.splide__arrow--prev {
  left: -2.6em;
}

.splide__arrow--next {
  right: -2.6em;
}

.divider:after,
.handle {
  cursor: col-resize;
}

.img-box {
  position: relative;

  &__btn {
    color: #ffffff;
    position: absolute;
    width: 15px;
    height: 15px;
    background-color: red;
    top: 0;
    left: 0;
    cursor: pointer;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

</style>
