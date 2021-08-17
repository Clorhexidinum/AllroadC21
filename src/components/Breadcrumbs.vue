<template>
  <div class="breadcrumbs">
    <ul class="breadcrumbs__list">
      <li class="breadcrumbs__item" v-for="item in items" :key="item">
        <a href="#">{{ item }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Breadcrumbs",
  data() {
    return {
      items: [
        "1",
        "2",
        "3",
      ],
    };
  },
};
</script>

<style lang="scss">
.breadcrumbs {
  background-color: black;
  padding: 15px 0;
  border-bottom: 1px solid rgba(255, 255, 255, .3);

  &__list {
    display: flex;
    overflow-x: auto;
  }

  &__item {
    display: inline-block;
    padding-right: 16px;
    margin-right: 10px;
    position: relative;
    // font-size: $fs-smaller;
    // line-height: $lh-extra-small;
    color: #fff;
  }

  &__item::after {
    content: "";
    position: absolute;
    right: 0;
    background-image: url("/images/link-arrow.svg");
    width: 6px;
    height: 9px;
    bottom: 7px;
  }

  &__item:last-child::after {
    display: none;
  }
}

@media (max-width: 968px) {
  .breadcrumbs__inner {
    overflow-x: scroll;
    overflow-y: hidden;
  }
}
</style>
