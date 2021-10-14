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
                <a class="characteristics__link"
                    >в кредит от
                    {{ credit.toFixed().toLocaleString() }} ₽/месяц</a
                >
            </div>
        </div>
        <div class="characteristics__item">
            <ul class="characteristics__list">
                <li class="characteristics__list-item">
                    <div>Ширина сиденья</div>
                    <div>45 см</div>
                </li>
                <li class="characteristics__list-item">
                    <div>Ширина коляски</div>
                    <div>{{ width }} см</div>
                </li>
                <li class="characteristics__list-item">
                    <div>Дальность хода</div>
                    <div>35 км</div>
                </li>
                <li class="characteristics__list-item">
                    <div>Максимальная скорость</div>
                    <div>{{ maxSpeed }} км/ч</div>
                </li>
                <li class="characteristics__list-item">
                    <div>Преодолеваемый угол</div>
                    <div>12°</div>
                </li>
                <li class="characteristics__list-item">
                    <div>Диаметр передних колес</div>
                    <div>{{ diameterFront }} мм</div>
                </li>
                <li class="characteristics__list-item">
                    <div>Диаметр задних колес</div>
                    <div>{{ diameterBack }} мм</div>
                </li>
                <li class="characteristics__list-item">
                    <div>Вес</div>
                    <div>118 кг</div>
                </li>
                <li class="characteristics__list-item">
                    <div>Нагрузка</div>
                    <div>180</div>
                </li>
                <li class="characteristics__list-item">
                    <div>Гарантия</div>
                    <div>12 месяцев</div>
                </li>
                <li class="characteristics__list-item">
                    <div>Материал рамы</div>
                    <div>Сталь</div>
                </li>
                <li class="characteristics__list-item">
                    <div>Тип батарей</div>
                    <div>Свинцовые</div>
                </li>
                <li class="characteristics__list-item">
                    <div>Задние колеса</div>
                    <div>Пневмо</div>
                </li>
                <li class="characteristics__list-item">
                    <div>Передние колеса</div>
                    <div>Пневмо</div>
                </li>
                <li class="characteristics__list-item">
                    <div>Регулировка наклона спинки</div>
                    <div>Есть</div>
                </li>
            </ul>
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
                        variantImage: "DSC_3100.jpg",
                        variantPrice: 210000,
                        variantColor: "red",
                        variantTitle: "one",
                        variantWidth: 62,
                        variantMaxSpeed: 10,
                        variantDiameterFront: 260,
                        variantDiameterBack: 350,
                    },
                    {
                        variantImage: "1_0003_3.jpg",
                        variantPrice: 229000,
                        variantColor: "orange",
                        variantTitle: "two",
                        variantWidth: 64,
                        variantMaxSpeed: 12,
                        variantDiameterFront: 254,
                        variantDiameterBack: 405,
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
            width() {
                return this.variants[this.selectedVariant].variantWidth;
            },
            maxSpeed() {
                return this.variants[this.selectedVariant].variantMaxSpeed;
            },
            diameterFront() {
                return this.variants[this.selectedVariant].variantDiameterFront;
            },
            diameterBack() {
                return this.variants[this.selectedVariant].variantDiameterBack;
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
            color: rgb(0, 0, 0, 0.5);
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

        &__list-item {
            display: flex;
            justify-content: space-between;
            margin-bottom: 10px;
        }
    }
</style>
