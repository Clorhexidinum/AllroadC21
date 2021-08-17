<template>
  <div class="feature-box">
    <div class="feature-box__item">
      <img :src="`images/${image}`" alt="" />
    </div>
    <div class="feature-box__item">
      <h3 class="feature-box__title">{{ title }}</h3>
      <p class="feature-box__descr">{{ descr }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "FeatureApp",

  props: {
    image: {
      type: String,
      default: "main.jpg",
    },
    title: {
      type: String,
      default: "Еще больше комфорта",
    },
    descr: {
      type: String,
      default:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  },
};
</script>

<style lang="scss">
.feature-box {
  display: flex;
  justify-content: space-between;

  &__item {
    width: 45%;
  }

  &__item img{
    width: 100%;
  }

  &__title {
    font-size: 25px;
    margin-bottom: 20px;
  }
}
</style>
