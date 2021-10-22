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
            <image-title />
            <img-comparison-slider
                style="width: 100%; margin: 0 auto; display: block"
            >
                <div class="img-box" slot="first">
                    <img src="images/main.jpg" style="width: 100%" />
                    <span class="img-box__btn one">+</span>
                    <span class="img-box__btn two">+</span>
                    <span class="img-box__btn three">+</span>
                </div>
                <div class="img-box" slot="second">
                    <img src="images/new.jpg" style="width: 100%" />
                    <span class="img-box__btn four">+</span>
                    <span class="img-box__btn five">+</span>
                    <span class="img-box__btn six">+</span>
                </div>
            </img-comparison-slider>
        </section>
        <section class="page-section line" id="menu0">
            <h2 class="title">Обзор</h2>
            <p class="descr">
                Новое внедорожное электрическое кресло-коляска MET ALLROAD
                рассчитано как на короткие передвижения по городу или в
                помещении, так и на длительные путешествия в любой время года.
                Удобное сиденье с откидной спинкой, откидные регулируемые
                подлокотники и подножки, интуитивно понятный пульт управления
                гарантируют комфортную посадку. Два мощных 500W мотора и два
                современных тяговых аккумулятора ёмкостью 55AH говорит об
                уникальной проходимости. При этом электрическое кресло-коляска
                уверенно развивает скорость до 13 км/ч, а дальность хода на
                одной зарядке составляет 35 км. Выразительный дизайн алюминиевых
                дисков, впечатляющая LED-оптика и яркий цвет рамы из стальных
                труб различного диаметра и сечения добавляют непередаваемые
                эмоции от управления коляской.
            </p>
            <tabs-app
                :tabs="['галерея', 'видео', '360']"
                @clicked="clickGalleryTab"
            />
            <splide v-if="activeGalleryTab === 'галерея'" :options="options">
                <splide-slide v-for="slide in slides" :key="slide">
                    <img :src="`images/${slide}`" />
                </splide-slide>
            </splide>
            <iframe
                v-if="activeGalleryTab === 'видео'"
                width="1200"
                height="315"
                src="https://www.youtube.com/embed/9QMT_Uy9D1Y"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            ></iframe>
            
        </section>
        <section class="page-section line" id="menu1">
            <h2 class="title">Комплектации</h2>
            <characteristics-app />
        </section>
        <section class="page-section line" id="menu2">
            <h2 class="title">Особенности</h2>
            <tabs-app
                :tabs="[
                    'проходимость',
                    'безопасность',
                    'удобство',
                    'внешний вид',
                    'комфорт',
                ]"
                @clicked="clickFeaturesTab"
            />
            <splide
                v-if="activeFeaturesTab === 'проходимость'"
                :options="optionsFeatures"
            >
                <splide-slide v-for="(item, idx) in passability" :key="idx">
                    <feature-app
                        :title="`${item.title }`"
                        :image="`${item.img}`"
                        :descr="`${item.descr}`"
                    />
                </splide-slide>
            </splide>

            <splide
                v-if="activeFeaturesTab === 'безопасность'"
                :options="optionsFeatures"
            >
                <splide-slide v-for="(item, idx) in safety" :key="idx">
                    <feature-app
                        :title="`${item.title }`"
                        :image="`${item.img}`"
                        :descr="`${item.descr}`"
                    />
                </splide-slide>
            </splide>

            <splide
                v-if="activeFeaturesTab === 'удобство'"
                :options="optionsFeatures"
            >
                <splide-slide v-for="(item, idx) in convenience" :key="idx">
                    <feature-app
                        :title="`${item.title }`"
                        :image="`${item.img}`"
                        :descr="`${item.descr}`"
                    />
                </splide-slide>
            </splide>

            <splide
                v-if="activeFeaturesTab === 'внешний вид'"
                :options="optionsFeatures"
            >
                <splide-slide v-for="(item, idx) in exterior" :key="idx">
                    <feature-app
                        :title="`${item.title }`"
                        :image="`${item.img}`"
                        :descr="`${item.descr}`"
                    />
                </splide-slide>
            </splide>

            <splide
                v-if="activeFeaturesTab === 'комфорт'"
                :options="optionsFeatures"
            >
                <splide-slide v-for="(item, idx) in comfort" :key="idx">
                    <feature-app
                        :title="`${item.title }`"
                        :image="`${item.img}`"
                        :descr="`${item.descr}`"
                    />
                </splide-slide>
            </splide>
        </section>
        <section class="page-section line" id="menu3">
            <h2 class="title">Как купить</h2>
            <p class="descr">
                Закажите MET ALLROAD в официальном интернет-магазине <a href="https://www.met.ru/goods/16230/">MET</a>
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
    import "img-comparison-slider";

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
                activeFeaturesTab: "проходимость",
                activeGalleryTab: "галерея",
                slides: ["main.jpg", "main.jpg", "main.jpg"],
                passability: [
                    {
                        img: "2161.jpg",
                        title: "Динамический антиопрокидыватель",
                        descr: "Динамический антиопрокидыватель позволяет преодолевать больший угол пандуса, а также не дает коляске повиснуть на амортизаторах, оставшийся без движения, при съезде с бордюра, Он представляют собой подвижный рычаг с роликом, установленный на раму через амортизатор. В момент упора амортизатор кратковременно прожимается, давая большую геометрическую проходимость, после чего возвращается в исходное положение, надежно защищая от переворота коляски.",
                    },
                    {
                        img: "21599.jpg",
                        title: "Мощные моторы",
                        descr: "Два независимых мотора - по 500 Ватт каждый позволяют преодолевать угол наклона до 15 градусов без разгона, а также развивать скорость до 13 км/час. Кресло-коляска не теряет мощность на дорогах любого качества: на рыхлом грунте, при преодолении бордюров или возможных препятствий, въезде на пандус и т.д.Питается коляска от современного 55 АH тягового аккумулятора в защищенном толстостенном стальном кофре.",
                    },
                    {
                        img: "2173.jpg",
                        title: "Высокий профиль резины и ярко выраженный протектор",
                        descr: "Развитый внедорожный протектор обеспечивает коляску отличными сцепными свойствами на дороге с любым покрытием как в городе, так и на пересеченной местности. Вы будете уверенно преодолевать ямы и заезжать на бордюры.",
                    },
                    {
                        img: "2255.jpg",
                        title: "Усиленные шасси и рама",
                        descr: "Шасси и рама из массивных стальных труб отличается прочностью и выдерживает нагрузку до 180 кг. Кресло-коляска MET Allroad создана для пересеченной местности, постоянных длительных поездок и повышенных нагрузок. ",
                    },
                ],
                safety: [
                    {
                        img: "2159.jpg",
                        title: "Полноценная LED-оптика",
                        descr: "Кресло-коляска оборудована полноценными световыми приборами: поворотники, передние и задние габаритные огни и аварийная сигнализация. Такой набор техники позволяет передвигаться на коляске по дорогам, а также комфортно себя чувствовать в темное время суток",
                    },
                    {
                        img: "2192.jpg",
                        title: "Дополнительные энергонезависимые механические стояночные тормоза",
                        descr: "Механический тормоз обеспечивает надежную фиксацию коляски на любом уклоне при отключенных редукторах моторов. При ручном толкании они необходимы, поскольку это позволит зафиксировать коляску и она никуда не укатится.",
                    },
                    {
                        img: "2240.jpg",
                        title: "Полноценный автомобильный ремень безопасности",
                        descr: "Мы заботимся о Вашей безопасности и оснастили кресло-коляску надежным и простым в использовании ремнем безопасности - застежкой автомобильного типа.",
                    },
                    {
                        img: "2157.jpg",
                        title: "Зеркало заднего вида на ручке",
                        descr: "Зеркало заднего вида, расположенное на ручке, легко настраивается без посторонней помощи и позволяет чувствовать себя в безопасности  при передвижении на кресле по городу, делает маневрирование более уверенным за счет улучшенного обзора.",
                    },
                    ],
                comfort: [
                    {
                        img: "2178.jpg",
                        title: "Удобная бесступенчатая регулировка спинной секции",
                        descr: "Бесступенчатая регулировка спинной секции позволяет пользователю подобрать максимально удобное положение тела, что в свою очередь позволяет проводить в коляске более значительные промежутки времени, например, совершая длительные прогулки в парке.",
                    },
                    {
                        img: "2241.jpg",
                        title: "Регулировка подлокотника по высоте",
                        descr: "Подлокотники регулируется по высоте, а это значит, что вне зависимости от роста и особенностей состояния здоровья, Вы всегда сможете настроить для себя удобное положение так, чтобы посадка в коляске была максимально комфортной.",
                    },
                    {
                        img: "2196.jpg",
                        title: "Внедорожный протектор",
                        descr: "Передние и задние колеса имеют высокий профиль резины и развитый внедорожный протектор. Благодаря этому коляска обладает отличными сцепными свойствами как на асфальтированных дорогах, так и на грунтовых поверхностях. Пользователю инвалидной коляски не нужно бояться ям или пасовать перед бордюрами. Ход коляски остается уверенным и мягким в любых условиях.",
                    },
                    {
                        img: "2259.jpg",
                        title: "Откидная многоступенчатая спинка.",
                        descr: "Вы оцените, насколько комфортно Вы можете разместиться в кресле-коляске MET Allroad. Благодаря многоступенчатой регулировке угла наклона спинки Вы легко сможете подобрать для себя максимально комфортное положение.",
                    },
                    {
                        img: "2149.jpg",
                        title: "Пульт с LCD-дисплеем.",
                        descr: "Пульт с LCD-дисплеем оснащен классическим электромагнитным джойстиком, который обеспечивает четкое и отточенное управление. Индикация на пульте крупная, легко читаемая, а управление интуитивно понятное. Наши клиенты отмечают хороший отклик на джойстик, а легко дозированные усилия позволяют уверенно маневрировать внутри ограниченного пространства.",
                    },
                ],
                exterior: [
                    {
                        img: "2159.jpg",
                        title: "Впечатляющая LED-оптика",
                        descr: "Современный дизайн световых приборов придает креслу-коляски яркий и запоминающийся вид.",
                    },
                    {
                        img: "2165.jpg",
                        title: "Стильные алюминиевые диски",
                        descr: "Выразительный дизайн алюминиевых дисков подчеркивают брутальный характер кресла-коляски, ее неприхотливость к любым самым неблагоприятным условиям эксплуатации. Насыщенный цвет не теряет изначальной яркости на протяжении всего срока эксплуатации.  ",
                    },
                    {
                        img: "2255.jpg",
                        title: "Яркая стальная рама ",
                        descr: "Тщательно выверенная геометрия рамы выглядит брутально и транслирует мощный внедорожный характер MET ALLROAD. Яркая цвет стальной рамы будет отлично выглядеть на улицах Вашего города.",
                    },
                ],
                convenience: [
                    {
                        img: "2178.jpg",
                        title: "Удобное расположение ручки регулировки наклона спинной секции",
                        descr: "Спинка коляски регулируется механическим способом. Особенностью MET Allroad является то, что ручка регулировки наклона спинной секции расположена таким образом, что пользователь может сам без посторонней помощи непосредственно из сидячего положения настраивать ее наклон в соответствии со своими потребностями.",
                    },
                    {
                        img: "2208.jpg",
                        title: "Съемные и откидные в сторону подножки",
                        descr: "Пересаживание из коляски Met Allroad осуществляется без лишних проблем благодаря съемным и откидным в сторону подножкам.",
                    },
                    {
                        img: "2169.jpg",
                        title: "Откидные подлокотники",
                        descr: "Подлокотники легко откидываются, что позволяет максимально быстро и безопасно пересаживаться в коляску и из нее.",
                    },
                    {
                        img: "2206.jpg",
                        title: "Бампер на пульте",
                        descr: "Пульт управления электрическим креслом-коляской является выступающей частью коляски и часто подвержен механическому воздействию. Именно для того, чтобы снизить вероятность его повреждения мы предусмотрели в конструкции коляски стальной бампер у пульта управления.",
                    },
                    {
                        img: "2217.jpg",
                        title: "Откидные подножки под ступню",
                        descr: "Благодаря откидным подножкам в кресло-коляску удобнее садиться, просто откинув подножки в сторону.",
                    },
                    {
                        img: "2200.jpg",
                        title: "Фиксации ступней и опора для пятки",
                        descr: "MET Allroad оборудовано дополнительными ремнями для фиксации ступней и опорой для пятки, что не позволит стопе завалиться назад и защитит от травмирования.",
                    },
                    {
                        img: "2181.jpg",
                        title: "Петля для подъема и фиксации при транспортировке",
                        descr: "Для удобства погрузки и фиксации при транспортировке на корпусе кресла-коляски предусмотрена петля. Например, с помощью петли коляску удобно зафиксировать в багажнике тросом.",
                    },
                    {
                        img: "2253.jpg",
                        title: "Откидной подлокотник",
                        descr: "Подлокотники полноценно откидываются и не мешают пересаживаться.",
                    },
                ],
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
                optionsFeatures: {
                    type: "loop",
                    perPage: 1,
                    height: 300,
                    autoplay: true,
                    gap: 50,
                    arrows: true,
                    pagination: true,
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
        font-family: "Roboto", sans-serif;
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
        padding: 0 30px;
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
        margin-bottom: 40px;
    }

    .descr a {
        color: #f5a408;
    }

    .main {
        background-color: black;
        margin-bottom: 80px;
    }

    .splide .splide--loop .splide--ltr .splide--draggable .is-active {
      margin-left: 85px;
    }

    .splide__slide {
        filter: opacity(0.2);
    }

    .splide__slide + .is-active {
        filter: opacity(1);
    }

    .splide__pagination__page.is-active {
        background: red;
    }

    .splide__pagination {
        bottom: -1.5em;
    }

    .splide__arrow--prev {
        left: -2.6em;
    }

    .splide__arrow--next {
        right: -2.6em;
    }

    .divider:after,
    .handle {
        cursor: col-resize;
    }

    .img-box {
        position: relative;

        &__btn {
            color: #ffffff;
            position: absolute;
            width: 15px;
            height: 15px;
            background-color: red;
            top: 0;
            left: 0;
            cursor: pointer;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
</style>
