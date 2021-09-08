<template>
  <div class="characteristics">
    <div class="characteristics__item">
      <img class="characteristics__img" :src="`images/${image}`" alt="" />
      <div class="characteristics__btn-box">
        <button
          class="characteristics__switch-btn"
          v-for="(variant, index) in variants"
          :key="variant.variantId"
          :style="{ backgroundColor: variant.variantColor }"
          @click="updateProduct(index)"
        ></button>
        <p class="characteristics__btn-title">{{ title }}</p>
      </div>
      <p class="characteristics__price">{{ price.toLocaleString() }} ₽</p>
      <div class="characteristics__buy-box">
        <button class="characteristics__btn">посмотреть наличие</button>
        <a class="characteristics__link">в кредит от {{ credit.toFixed().toLocaleString() }} ₽/месяц</a>
      </div>
    </div>
    <div class="characteristics__item">
      характеристичные характеристики, прям супер подробные вот что бы тупых вопросов совсем не осталось. ну ни капелюшечки. вот прямо подумал какое плетение ткани на сидухе и тут даже это есть.
    </div>
  </div>
</template>

<script>
export default {
  name: "CharacteristicsApp",
  data: function () {
    return {
      selectedVariant: 0,
      variants: [
        {
          variantImage: "main.jpg",
          variantPrice: 100000,
          variantColor: "red",
          variantTitle: "one",
        },
        {
          variantImage: "new.jpg",
          variantPrice: 200000,
          variantColor: "orange",
          variantTitle: "two",
        },
      ],
    };
  },
  methods: {
    updateProduct(index) {
      this.selectedVariant = index;
    },
  },
  computed: {
    title() {
      return this.variants[this.selectedVariant].variantTitle;
    },
    image() {
      return this.variants[this.selectedVariant].variantImage;
    },
    price() {
      return this.variants[this.selectedVariant].variantPrice;
    },
    credit() {
      return this.variants[this.selectedVariant].variantPrice / 12;
    },
  },
};
</script>

<style lang="scss">
.characteristics {
  display: flex;

  &__item {
    width: 50%;
  }

  &__item + &__item {
    margin-left: 40px;
  }

  &__img {
    width: 100%;
  }

  &__btn-box {
    display: flex;
    align-items: baseline;
    justify-content: center;
  }

  &__switch-btn {
    width: 20px;
    height: 20px;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    margin-right: 10px;
    margin-bottom: 15px;
  }

  &__btn-title {
    color: rgb(0, 0, 0, 0.5)
  }

  &__price {
    color: red;
    font-size: 40px;
    text-align: center;
    margin-bottom: 15px;
  }

  &__buy-box {
    display: flex;
    justify-content: center;
    align-items: baseline;
  }

  &__btn {
    background-color: red;
    padding: 15px;
    cursor: pointer;
    border: none;
    text-transform: uppercase;
    color: #fff;
    border-radius: 3px;
    margin-right: 15px;
  }

  &__link {
    text-transform: uppercase;
  }
}
</style>
