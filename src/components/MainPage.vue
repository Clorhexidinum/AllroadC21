<template>
    <div class="main-page">
        <div class="container">
            <div class="main-page__overlay"></div>
            <div class="main-page__tittle-box">
                <h1 class="main-page__tittle">Met Allroad C21</h1>
                <p class="main-page__descr">
                        Для тех, кто не готов отступать перед препятствиями
                    </p>
            </div>
            <div class="main-page__box">
                <div>
                    
                    <p class="main-page__subtitle">Стоимость</p>
                    <p class="main-page__price">
                        от {{ this.price.toLocaleString() }} ₽
                    </p>
                </div>
                <div>
                    <div class="main-page__credit-box">
                        <p class="main-page__subtitle">Рассрочка</p>
                        <p class="main-page__price">
                            от {{ credit.toLocaleString() }} ₽/мес.
                        </p>
                    </div>
                    <a class="main-page__btn" href="#"
                        ><img src="images/pokupay_button.png" alt=""
                    /></a>
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
            return {
                price: 210000,
            };
        },

        computed: {
            credit() {
                return this.price / 12;
            },
        },
    };
</script>

<style lang="scss">
    .main-page {
        background-image: url("/images/DSC_3371 copy.jpg");
        background-size: cover;
        background-position: center;
        height: 100vh;
        color: #fff;

        & .container {
            display: flex;
            flex-direction: column;
            height: 100%;
            justify-content: flex-end;
            padding-bottom: 20px;
            position: relative;
        }

        &__overlay {
            position: absolute;
            background: linear-gradient(
                0deg,
                rgba(0, 0, 0, 1) 0%,
                rgba(255, 255, 255, 0) 100%
            );
            height: 240px;
            width: 200%;
            left: -500px;
            bottom: 0;
        }

        &__tittle-box {
            z-index: 10;
            margin-bottom: 22px;
        }

        &__tittle {
            font-size: 40px;
            padding-bottom: 13px;
            margin-bottom: 3px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.3);
        }

        &__box {
            display: flex;
            justify-content: space-between;
            margin-bottom: 15px;
            z-index: 10;
        }

        &__box div + div {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        &__credit-box {
            margin-right: 20px;
        }

        &__descr {
            margin-bottom: 5px;
            font-size: 27px;
        }

        &__btn img {
            width: 171px;
        }
    }
</style>
