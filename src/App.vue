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
      <image-title/>
      <img-comparison-slider style="width: 100%; margin: 0 auto; display: block;">
        <img slot="first" src="images/main.jpg" style="width: 100%"/>
        <img slot="second" src="images/new.jpg" style="width: 100%"/>
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
      <tabs-app :tabs="['галерея', 'видео']" @clicked="clickGalleryTab" />
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
      <characteristics-app/>
    </section>
    <section class="page-section line" id="menu2">
      <h2 class="title">Особенности</h2>
      <tabs-app
        :tabs="['преимущества', 'технологии', 'комфорт']"
        @clicked="clickFeaturesTab"
      />
      <feature-app
        v-if="activeFeaturesTab === 'преимущества'"
        :title="'еще больше преимуществ'"
      />
      <feature-app
        v-if="activeFeaturesTab === 'технологии'"
        :title="'еще больше технологий'"
      />
      <feature-app
        v-if="activeFeaturesTab === 'комфорт'"
        :title="'больше комфорта богу комфорта!!!'"
      />
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
import 'img-comparison-slider';

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
      activeFeaturesTab: "преимущества",
      activeGalleryTab: "галерея",
      slides: ["main.jpg", "main.jpg", "main.jpg"],
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
  font-family: 'Roboto', sans-serif;
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
  padding: 0 15px;
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
</style>
