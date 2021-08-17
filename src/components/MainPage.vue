<template>
  <div class="main-page">
    <div class="container">
      <div><h1 class="main-page__tittle">Met Allroad C21</h1></div>
      <div class="main-page__box">
        <div>
          <p class="main-page__subtitle">Стоимость</p>
          <p class="main-page__price">от 1 415 000 ₽</p>
        </div>
        <div>
          <div class="main-page__credit-box">
            <p class="main-page__subtitle">Кредит</p>
            <p class="main-page__price">от 31 500 ₽/мес.</p>
            <a class="main-page__link" href="#">Рассчитать кредит</a>
          </div>
          <button class="main-page__btn">Запросить предложение</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainPage",

  components: {},

  data() {
    return {};
  },
};
</script>

<style lang="scss">
.main-page {
  background-image: url('/images/main.jpg');
  background-size: cover;
  background-position: center;
  height: 535px;
  color: #fff;
  padding-bottom: 50px;

  & .container {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: flex-end;
  }

  &__tittle {
    font-size: 40px;
    padding-bottom: 15px;
    margin-bottom: 30px;
    border-bottom: 1px solid rgba(255, 255, 255, .3);
  }

  &__box {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
  }

  &__box div + div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__credit-box {
    margin-right: 20px;
  }

  &__subtitle {
    margin-bottom: 5px;
  }

  &__link {
    font-size: 13px;
    text-decoration: underline;
  }

  &__btn {
    background-color: red;
    padding: 15px;
    height: fit-content;
    border: none;
    cursor: pointer;
    text-transform: uppercase;
    color: #fff;
    border-radius: 3px;
  }
}
</style>
