<template>
    <div class="image-title">
        <div class="image-title__item" v-if="active == true">
            <p class="image-title__descr image-title__descr--left">
                Мы знаем, что в нашей среде от кресла-коляски требуется чуть
                больше. Неприхотливость, впечатляющая проходимость и надежность
                - вот то, что делает MET ALLROAD действительно внедорожной
                коляской. Твердый характер и практичность, воплощенная в каждой
                детали.
            </p>
        </div>
        <div class="image-title__item" @click="active = true">
            <p
                class="image-title__title image-title__title--left"
                :class="active ? 'image-title__title--active' : ''"
            >
                Любая среда
            </p>
            <p
                class="image-title__title image-title__title--left"
                :class="active ? 'image-title__title--active' : ''"
            >
                становится доступной
            </p>
        </div>
        <div class="image-title__item">
            <div class="image-title__decor-box" @click="active = !active">
                <span
                    class="image-title__decor"
                    :class="active ? '' : 'image-title__decor--right'"
                ></span>
                <span
                    class="image-title__arrow"
                    :class="active ? 'image-title__arrow--right' : ''"
                ></span>
            </div>
        </div>
        <div class="image-title__item" @click="active = false">
            <p
                class="image-title__title image-title__title--right"
                :class="active ? '' : 'image-title__title--active'"
            >
                Сочный дизайн
            </p>
            <p
                class="image-title__title image-title__title--right"
                :class="active ? '' : 'image-title__title--active'"
            >
                и новый уровень комфорта
            </p>
        </div>
        <div class="image-title__item" v-if="active == false">
            <p class="image-title__descr image-title__descr--right">
                Максимально удобная посадка и легкое управление задают новый уровень комфорта на рынке электрических колясок. Яркий дизайн и прогрессивные технологии превращают MET ALLROAD в полноценного городского жителя.
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ImageTitle",
        data: function () {
            return {
                active: true,
            };
        },

        methods: {},
    };
</script>

<style lang="scss">
    .image-title {
        display: flex;
        justify-content: space-between;
        margin-bottom: 36px;
        line-height: 36px;
        align-items: center;

        &__descr {
            font-size: 14px;

            &--left {
                text-align: right;
                margin-right: 30px;
            }

            &--right {
                text-align: left;
                margin-left: 30px;
            }
        }

        &__title {
            font-size: 24px;
            font-weight: bold;
            color: rgb(0, 0, 0, 0.5);
            white-space: nowrap;
            cursor: pointer;
            transition: 0.5s;

            &--left {
                padding-right: 40px;
            }

            &--right {
                text-align: right;
                padding-left: 40px;
            }

            &--active {
                font-size: 36px;
                color: rgb(0, 0, 0, 1);
            }
        }

        &__decor-box {
            display: block;
            width: 70px;
            height: 2px;
            background-color: red;
            position: relative;
            cursor: pointer;
        }

        &__decor {
            display: block;
            width: 25px;
            height: 25px;
            background-color: red;
            padding: 3px;
            background: radial-gradient(
                circle,
                rgba(255, 0, 0, 1) 0%,
                rgba(255, 0, 0, 1) 40%,
                rgba(249, 249, 249, 0) 50%
            );
            border: 1px dashed red;
            border-radius: 50%;
            position: absolute;
            top: -11px;
            left: -18px;
            transition: 0.3s;

            &--right {
                left: 62px;
            }
        }

        &__arrow {
            position: absolute;
            width: 7px;
            height: 2px;
            top: -2px;
            left: 0;
            background-color: red;
            transform: rotate(-45deg);

            &::before {
                content: "";
                position: absolute;
                width: 7px;
                height: 2px;
                top: 3px;
                left: -3px;
                background-color: red;
                transform: rotate(-90deg);
            }

            &--right {
                top: 2px;
                left: 66px;
                transform: rotate(138deg);
            }
        }
    }
</style>
