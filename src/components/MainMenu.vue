<template>
  <ul class="main-menu">
    <li
      class="main-menu__item"
      v-for="(category, idx) in сategories"
      :key="category"
    >
      <a class="main-menu__link" :href="`#menu${idx}`">{{ category }}</a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "MainMenu",
  data: function () {
    return {
      сategories: ["Обзор", "Комплектации", "Особенности", "Как купить"],
    };
  },
};
</script>

<style lang="scss">
.main-menu {
  background-color: black;
  display: flex;
  font-weight: 400;
  min-height: 53px;
  align-items: center;
  color: #fff;

  &__item + &__item {
    margin-left: 15px;
  }

  &__link {
    position: relative;
    transition: all 0.3s;
    font-weight: 400;
    padding: 15px 0 14px;
  }

  &__link::before {
    content: "";
    position: absolute;
    width: 0;
    right: 0;
    left: auto;
    background-color: red;
    height: 3px;
    bottom: 0;
    transition: all 0.3s;
  }

  &__link:hover {
    color: #fff;
    text-shadow: 0 0 0.65px #fff, 0 0 0.65px #fff;
  }

  &__link:hover::before {
    width: 100%;
    left: 0;
    right: auto;
  }
}
</style>
