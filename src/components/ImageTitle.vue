<template>
  <div class="image-title">
    <div class="image-title__item">
      <p class="image-title__descr">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
    <div class="image-title__item">
      <p class="image-title__title">Внедорожный характер</p>
    </div>
    <div class="image-title__item">
      <span class="image-title__decor"></span>
    </div>
    <div class="image-title__item">
       <p class="image-title__subtitle">Новый стильный характер</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageTitle",
  data: function () {
    return {
    };
  },
};
</script>

<style lang="scss">
.image-title {
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  align-items: center;

  &__descr {
    font-size: 14px;
    text-align: right;
    margin-right: 30px;
  }

  &__title {
    font-size: 40px;
    font-weight: bold;
  }

  &__decor {
    display: block;
    width: 70px;
    height: 2px;
    background-color: red;
    position: relative;
  }

  &__decor::before {
    content: '';
    position: absolute;
    width: 25px;
    height: 25px;
    padding: 3px;
    top: -11px;
    left: -15px;
    background: radial-gradient(
      circle,
      rgba(255, 0, 0, 1) 0%,
      rgba(255, 0, 0, 1) 40%,
      rgba(249, 249, 249, 0) 50%
    );
    border: 1px dashed red;
    border-radius: 50%;
  } 

   &__decor::after {
    content: '';
    position: absolute;
    width: 13px;
    height: 13px;
    padding: 3px;
    top: -5px;
    right: -10px;
    background-color: red;
    border-radius: 50%;
  } 

  &__subtitle {
    text-align: right;
    font-weight: bold;
    color: rgb(0, 0, 0, 0.5);
  }
}
</style>
