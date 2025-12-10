<template>
    <v-app class="GuestHouse">
        <div>
            <img
                class="img_pad"
                src="@/assets/image/guesthouse1.png"
                width="100%"
            />
        </div>
        <div>
            <p class="center" v-text="guestHouseDescription"></p>
        </div>

        <!-- メインのリスト START-->
        <ul class="vertical-menu">
            <li @click="scrollToElement('targetPosBed')">
                <div class="menu-icon-item">
                    <p>部屋<br />Rooms</p>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="#1b465b"
                        width="60%"
                    >
                        <title>bed</title>
                        <path
                            d="M19,7H11V14H3V5H1V20H3V17H21V20H23V11A4,4 0 0,0 19,7M7,13A3,3 0 0,0 10,10A3,3 0 0,0 7,7A3,3 0 0,0 4,10A3,3 0 0,0 7,13Z"
                        />
                    </svg>
                </div>
            </li>
            <li @click="scrollToElement('targetPosCalendar')">
                <div class="menu-icon-item">
                    <p>予約<br />Booking</p>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="#1b465b"
                        width="60%"
                    >
                        <title>calendar-check</title>
                        <path
                            d="M19,19H5V8H19M19,3H18V1H16V3H8V1H6V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M16.53,11.06L15.47,10L10.59,14.88L8.47,12.76L7.41,13.82L10.59,17L16.53,11.06Z"
                        />
                    </svg>
                </div>
            </li>
            <li @click="scrollToElement('targetPosShower')">
                <div class="menu-icon-item">
                    <p>施設・設備<br />Facilities</p>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="#1b465b"
                        width="60%"
                    >
                        <title>shower</title>
                        <path
                            d="M21,14V15C21,16.91 19.93,18.57 18.35,19.41L19,22H17L16.5,20C16.33,20 16.17,20 16,20H8C7.83,20 7.67,20 7.5,20L7,22H5L5.65,19.41C4.07,18.57 3,16.91 3,15V14H2V12H20V5A1,1 0 0,0 19,4C18.5,4 18.12,4.34 18,4.79C18.63,5.33 19,6.13 19,7H13A3,3 0 0,1 16,4C16.06,4 16.11,4 16.17,4C16.58,2.84 17.69,2 19,2A3,3 0 0,1 22,5V14H21V14M19,14H5V15A3,3 0 0,0 8,18H16A3,3 0 0,0 19,15V14Z"
                        />
                    </svg>
                </div>
            </li>
        </ul>
        <ul class="vertical-menu">
            <li @click="scrollToElement('targetPosMap')">
                <div class="menu-icon-item">
                    <p>アクセス<br />Access</p>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="#1b465b"
                        width="60%"
                    >
                        <title>map-marker-radius</title>
                        <path
                            d="M12,2C15.31,2 18,4.66 18,7.95C18,12.41 12,19 12,19C12,19 6,12.41 6,7.95C6,4.66 8.69,2 12,2M12,6A2,2 0 0,0 10,8A2,2 0 0,0 12,10A2,2 0 0,0 14,8A2,2 0 0,0 12,6M20,19C20,21.21 16.42,23 12,23C7.58,23 4,21.21 4,19C4,17.71 5.22,16.56 7.11,15.83L7.75,16.74C6.67,17.19 6,17.81 6,18.5C6,19.88 8.69,21 12,21C15.31,21 18,19.88 18,18.5C18,17.81 17.33,17.19 16.25,16.74L16.89,15.83C18.78,16.56 20,17.71 20,19Z"
                        />
                    </svg>
                </div>
            </li>
            <li @click="scrollToElement('targetPosTicket')">
                <div class="menu-icon-item">
                    <p>イベント<br />Events</p>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="#1b465b"
                        width="60%"
                    >
                        <title>ticket-confirmation-outline</title>
                        <path
                            d="M22 10V6C22 4.89 21.1 4 20 4H4C2.9 4 2 4.89 2 6V10C3.11 10 4 10.9 4 12S3.11 14 2 14V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V14C20.9 14 20 13.1 20 12S20.9 10 22 10M20 8.54C18.81 9.23 18 10.53 18 12S18.81 14.77 20 15.46V18H4V15.46C5.19 14.77 6 13.47 6 12C6 10.5 5.2 9.23 4 8.54L4 6H20V8.54M11 15H13V17H11M11 11H13V13H11M11 7H13V9H11Z"
                        />
                    </svg>
                </div>
            </li>
            <li @click="scrollToElement('targetPosEmail')">
                <div class="menu-icon-item">
                    <p>問い合わせ<br />Contact</p>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="#1b465b"
                        width="60%"
                    >
                        <title>email-outline</title>
                        <path
                            d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6M20 6L12 11L4 6H20M20 18H4V8L12 13L20 8V18Z"
                        />
                    </svg>
                </div>
            </li>
        </ul>
        <!-- メインのリスト END-->

        <!-- 右側のリスト START-->
        <div ref="rightlist" class="right-list hidden">
            <ul class="right-list-svg">
                <li ref="svgbed" @click="scrollToElement('targetPosBed')">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="#1b465b"
                        width="37px"
                    >
                        <title>bed</title>
                        <path
                            d="M19,7H11V14H3V5H1V20H3V17H21V20H23V11A4,4 0 0,0 19,7M7,13A3,3 0 0,0 10,10A3,3 0 0,0 7,7A3,3 0 0,0 4,10A3,3 0 0,0 7,13Z"
                        />
                    </svg>
                </li>
                <li
                    ref="svgcalendar"
                    @click="scrollToElement('targetPosCalendar')"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="#1b465b"
                        width="37px"
                    >
                        <title>calendar-check</title>
                        <path
                            d="M19,19H5V8H19M19,3H18V1H16V3H8V1H6V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M16.53,11.06L15.47,10L10.59,14.88L8.47,12.76L7.41,13.82L10.59,17L16.53,11.06Z"
                        />
                    </svg>
                </li>
                <li ref="svgshower" @click="scrollToElement('targetPosShower')">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="#1b465b"
                        width="37px"
                    >
                        <title>shower</title>
                        <path
                            d="M21,14V15C21,16.91 19.93,18.57 18.35,19.41L19,22H17L16.5,20C16.33,20 16.17,20 16,20H8C7.83,20 7.67,20 7.5,20L7,22H5L5.65,19.41C4.07,18.57 3,16.91 3,15V14H2V12H20V5A1,1 0 0,0 19,4C18.5,4 18.12,4.34 18,4.79C18.63,5.33 19,6.13 19,7H13A3,3 0 0,1 16,4C16.06,4 16.11,4 16.17,4C16.58,2.84 17.69,2 19,2A3,3 0 0,1 22,5V14H21V14M19,14H5V15A3,3 0 0,0 8,18H16A3,3 0 0,0 19,15V14Z"
                        />
                    </svg>
                </li>
                <li ref="svgmap" @click="scrollToElement('targetPosMap')">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="#1b465b"
                        width="37px"
                    >
                        <title>map-marker-radius</title>
                        <path
                            d="M12,2C15.31,2 18,4.66 18,7.95C18,12.41 12,19 12,19C12,19 6,12.41 6,7.95C6,4.66 8.69,2 12,2M12,6A2,2 0 0,0 10,8A2,2 0 0,0 12,10A2,2 0 0,0 14,8A2,2 0 0,0 12,6M20,19C20,21.21 16.42,23 12,23C7.58,23 4,21.21 4,19C4,17.71 5.22,16.56 7.11,15.83L7.75,16.74C6.67,17.19 6,17.81 6,18.5C6,19.88 8.69,21 12,21C15.31,21 18,19.88 18,18.5C18,17.81 17.33,17.19 16.25,16.74L16.89,15.83C18.78,16.56 20,17.71 20,19Z"
                        />
                    </svg>
                </li>
                <li ref="svgticket" @click="scrollToElement('targetPosTicket')">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="#1b465b"
                        width="37px"
                    >
                        <title>ticket-confirmation-outline</title>
                        <path
                            d="M22 10V6C22 4.89 21.1 4 20 4H4C2.9 4 2 4.89 2 6V10C3.11 10 4 10.9 4 12S3.11 14 2 14V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V14C20.9 14 20 13.1 20 12S20.9 10 22 10M20 8.54C18.81 9.23 18 10.53 18 12S18.81 14.77 20 15.46V18H4V15.46C5.19 14.77 6 13.47 6 12C6 10.5 5.2 9.23 4 8.54L4 6H20V8.54M11 15H13V17H11M11 11H13V13H11M11 7H13V9H11Z"
                        />
                    </svg>
                </li>
                <li ref="svgemail" @click="scrollToElement('targetPosEmail')">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="#1b465b"
                        width="37px"
                    >
                        <title>email-outline</title>
                        <path
                            d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6M20 6L12 11L4 6H20M20 18H4V8L12 13L20 8V18Z"
                        />
                    </svg>
                </li>
            </ul>
        </div>
        <!-- 右側のリスト END-->

        <v-spacer style="margin: 250px"></v-spacer>
        <span class="description">
            <div ref="bed">
                <p>部屋<br />Rooms</p>
            </div>
            <div>
                <p>ドミトリー Dormitory</p>
            </div>
            <div>
                <ul class="bullet">
                    <li class="no-margin">6ベッドルーム(男女共用)</li>
                </ul>
            </div>
            <div>
                <p class="no-margin">6 beds mixroom</p>
            </div>
        </span>
        <div class="img_pad">
            <Carousel :items-to-show="hooperSettings.itemsToShow" :wrap-around="hooperSettings.infiniteScroll" :mouse-drag="false">
                <Slide v-for="(item, i) in items" :key="i">
                    <img :src="item.src" width="85%" />
                </Slide>
            </Carousel>
        </div>
        <span class="smalldescription">
            <div>
                <ul class="bullet">
                    <li class="no-margin smallbullet">
                        料金 1ベッド1名様 4000円
                    </li>
                </ul>
            </div>
            <div>
                <p class="no-margin">
                    2段ベッドが3台並ぶ最大6人の相部屋です。いろいろ部屋の説明〜
                </p>
            </div>
        </span>

        <v-spacer style="margin: 30px"></v-spacer>
        <span class="description">
            <div>
                <ul class="bullet">
                    <li class="no-margin">ツインルーム(男女共用)</li>
                </ul>
            </div>
            <div>
                <p class="no-margin">twin beds mixroom</p>
            </div>
        </span>
        <div class="img_pad">
            <Carousel :items-to-show="hooperSettings.itemsToShow" :wrap-around="hooperSettings.infiniteScroll" :mouse-drag="false">
                <Slide v-for="(item, i) in items" :key="i">
                    <img :src="item.src" width="85%" />
                </Slide>
            </Carousel>
        </div>
        <span class="smalldescription">
            <div>
                <ul class="bullet">
                    <li class="no-margin smallbullet">
                        料金 1ベッド1名様 4000円
                    </li>
                </ul>
            </div>
            <div>
                <p class="no-margin">
                    ツインベッドの部屋です。いろいろ部屋の説明〜
                </p>
            </div>
        </span>
        <v-spacer style="margin: 250px"></v-spacer>
        <v-spacer style="margin: 250px"></v-spacer>
        <span class="description">
            <div ref="calendar">
                <p>予約<br />Booking</p>
            </div>
        </span>
        <v-spacer style="margin: 250px"></v-spacer>
        <span class="description">
            <div ref="shower">
                <p>施設・設備<br />Facilities</p>
            </div>
        </span>
        <v-spacer style="margin: 250px"></v-spacer>
        <span class="description">
            <div ref="map">
                <p>アクセス<br />access</p>
            </div>
        </span>
        <v-spacer style="margin: 250px"></v-spacer>
        <span class="description">
            <div ref="ticket">
                <p>イベント<br />Events</p>
            </div>
        </span>
        <v-spacer style="margin: 250px"></v-spacer>
        <span class="description">
            <div ref="email">
                <p>問い合わせ<br />Contact</p>
            </div>
        </span>
        <v-spacer style="margin: 250px"></v-spacer>
    </v-app>
</template>

<script>
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

export default {
    name: "my-component",
    components: {
        Carousel,
        Slide,
    },
    data: () => ({
        guestHouseDescription:
            "〇〇にある〇〇のゲストハウス\r\n世界一周を経験したオーナーのあったらいいなを詰め込んだゲストハウスです。説明文 〜〜〜〜〜〜〜〜〜",

        items: [
            {
                src: require("@/assets/image/guesthouse2.png"),
            },
            {
                src: require("@/assets/image/guesthouse1.png"),
            },
            {
                src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
            },
            {
                src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
            },
        ],
        hooperSettings: {
            itemsToShow: 1,
            infiniteScroll: true,
            centerMode: true,
            wheelControl: false,
        },

        targetPosBed: null,
        targetPosCalendar: null,
        targetPosShower: null,
        targetPosMap: null,
        targetPosTicket: null,
        targetPosEmail: null,
        scrollheight: null,
        scrollheightNew: null,
        scrollheightOld: null,
        loading: true,
    }),
    watch: {
        scrollheight: function (scrollheightNew, scrollheightOld) {
            // データが変化した時に行いたい処理
            //スクロール量 > ターゲット要素の位置
            if (
                scrollheightNew <= this.targetPosBed &&
                scrollheightOld > this.targetPosBed
            ) {
                this.$refs.rightlist.classList.add("hiddenout"); //hiddenクラスを追加
                this.$refs.rightlist.classList.remove("visible"); //visibleクラスを削除
            } else if (
                scrollheightNew >= this.targetPosBed &&
                scrollheightOld < this.targetPosBed
            ) {
                this.$refs.rightlist.classList.remove("hidden"); //hiddenクラスを削除
                this.$refs.rightlist.classList.add("visible"); //visibleクラスを追加

                this.opacityChange("bed");
            } else if (
                scrollheightNew >= this.targetPosCalendar &&
                scrollheightOld < this.targetPosCalendar
            ) {
                this.opacityChange("calendar");
            } else if (
                scrollheightNew <= this.targetPosCalendar &&
                scrollheightOld > this.targetPosCalendar
            ) {
                this.opacityChange("bed");
            } else if (
                scrollheightNew >= this.targetPosShower &&
                scrollheightOld < this.targetPosShower
            ) {
                this.opacityChange("shower");
            } else if (
                scrollheightNew <= this.targetPosShower &&
                scrollheightOld > this.targetPosShower
            ) {
                this.opacityChange("calendar");
            } else if (
                scrollheightNew >= this.targetPosMap &&
                scrollheightOld < this.targetPosMap
            ) {
                this.opacityChange("map");
            } else if (
                scrollheightNew <= this.targetPosMap &&
                scrollheightOld > this.targetPosMap
            ) {
                this.opacityChange("shower");
            } else if (
                scrollheightNew >= this.targetPosTicket &&
                scrollheightOld < this.targetPosTicket
            ) {
                this.opacityChange("ticket");
            } else if (
                scrollheightNew <= this.targetPosTicket &&
                scrollheightOld > this.targetPosTicket
            ) {
                this.opacityChange("map");
            } else if (
                scrollheightNew >= this.targetPosEmail &&
                scrollheightOld < this.targetPosEmail
            ) {
                this.opacityChange("email");
            } else if (
                scrollheightNew <= this.targetPosEmail &&
                scrollheightOld > this.targetPosEmail
            ) {
                this.opacityChange("ticket");
            }
        },
    },
    mounted() {
        setTimeout(() => {
            this.loading = false;
            this.initializeTargetPositions();
            window.addEventListener("scroll", this.handleScroll);
            window.addEventListener("resize", this.handleResize);
        }, 400);
    },
    destroyed() {
        window.removeEventListener("scroll", this.handleScroll);
        window.removeEventListener("resize", this.handleResize);
    },

    methods: {
        // スクロール位置を初期化・更新
        initializeTargetPositions() {
            this.scrollheight = window.scrollY;
            this.targetPosBed =
                this.$refs.bed.getBoundingClientRect().top +
                this.scrollheight -
                window.innerHeight / 2;
            this.targetPosCalendar =
                this.$refs.calendar.getBoundingClientRect().top +
                this.scrollheight -
                window.innerHeight / 2;
            this.targetPosShower =
                this.$refs.shower.getBoundingClientRect().top +
                this.scrollheight -
                window.innerHeight / 2;
            this.targetPosMap =
                this.$refs.map.getBoundingClientRect().top +
                this.scrollheight -
                window.innerHeight / 2;
            this.targetPosTicket =
                this.$refs.ticket.getBoundingClientRect().top +
                this.scrollheight -
                window.innerHeight / 2;
            this.targetPosEmail =
                this.$refs.email.getBoundingClientRect().top +
                this.scrollheight -
                window.innerHeight / 2;
        },

        // スクロールイベント
        async handleScroll() {
            this.scrollheight = window.scrollY;
        },

        // ウィンドウリサイズイベント
        handleResize() {
            this.initializeTargetPositions();
        },

        // 特定の位置までスクロール
        scrollToElement(position) {
            window.scrollTo({
                top: this[position] - 70 + window.innerHeight / 2,
                behavior: "smooth",
            });
        },
        // opacityのクラスを変更
        opacityChange(activeSvgname) {
            const svgRefs = [
                "svgbed",
                "svgcalendar",
                "svgshower",
                "svgmap",
                "svgticket",
                "svgemail",
            ];
            svgRefs.forEach((ref) => {
                if (ref === `svg${activeSvgname}`) {
                    this.$refs[ref].classList.add("right-list-svg");
                    this.$refs[ref].classList.remove("right-list-svg-op");
                } else {
                    this.$refs[ref].classList.add("right-list-svg-op");
                    this.$refs[ref].classList.remove("right-list-svg");
                }
            });
        },
    },
};
</script>

<style scoped>
.hidden {
    visibility: hidden;
}
.hiddenout {
    animation-duration: 0.7s;
    animation-name: fadeout;
    animation-fill-mode: forwards;
    animation: fadeout 700ms forwards;
}
.visible {
    visibility: visible;
    opacity: 1;
    animation-duration: 0.7s;
    animation-name: fadeIn;
    animation-fill-mode: forwards;
    animation: fadeIn 500ms forwards;
}

/* GuestHouse Page Styles */
.GuestHouse {
    top: 100px;
}

.GuestHouse p {
    padding: 0px 50px;
    white-space: pre-wrap;
}

/* Shared styles from common.css: .vertical-menu */

.description {
    padding: 0px;
    margin: 0px;
    font-size: 22px;
    white-space: pre-wrap;
}

.description div {
    display: flex;
    justify-content: center;
    text-align: center;
}

.description p {
    padding: 0 50px;
    margin-bottom: 16px;
    white-space: pre-wrap;
}

.smalldescription {
    padding: 0px;
    margin: 0px;
    font-size: 16px;
    white-space: pre-wrap;
}

.smalldescription div {
    display: flex;
    justify-content: center;
    text-align: center;
}

.smalldescription p {
    padding: 0 50px;
    margin: 0 !important;
    white-space: pre-wrap;
}

.hooper-list {
    height: auto !important;
    background-color: #e4d8d3;
}

.right-list {
    padding: 0px 0px 0px 0px !important;
    display: flex;
    position: fixed;
    top: 80px;
    right: 5px;
    z-index: 2;
}

.right-list-svg {
    opacity: 1;
}

.right-list-svg-op {
    opacity: 0.3;
}

.vertical-menu li {
    font-size: inherit !important;
    color: #1b465b;
    text-align: center;
}

.vertical-menu li p {
    padding: 0px;
    margin: 5px 0px 0px 0px;
    white-space: pre-wrap;
}

.bullet {
    list-style-type: square;
    list-style-position: outside;
}

.bullet li::marker {
    color: #000000;
}

.no-margin {
    margin: 0px !important;
}

.img_pad {
    padding: 0px 15px;
}

@media screen and (min-width: 760px) {
    .description {
        padding: 0px;
        margin: 0px;
        font-size: 22px;
        white-space: pre-wrap;
    }

    .smalldescription {
        padding: 0px;
        margin: 0px;
        font-size: 20px;
        white-space: pre-wrap;
    }
}

@keyframes fadeIn {
    0% {
        transform: translateX(150px);
    }

    100% {
        transform: translateX(0px);
    }
}

@keyframes fadeout {
    0% {
        transform: translateX(0px);
    }

    100% {
        transform: translateX(150px);
    }
}
</style>
