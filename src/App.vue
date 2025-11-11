<template>
    <v-app>
        <!-- <div v-show="this.$route.path == '/'"> -->
        <div v-show="this.$route.path !== '/'">
            <div class="hamburger">
                <!-- ハンバーガー START-->
                <v-icon large @click.stop="drawer = !drawer">mdi-menu</v-icon>
            </div>
            <v-navigation-drawer
                class="nav_list"
                v-model="drawer"
                right
                absolute
                temporary
                width="100%"
                style="position: fixed"
            >
                <v-icon
                    style="float: right; margin: 7px 10px 0px 0px"
                    large
                    @click.stop="drawer = !drawer"
                    >mdi-close</v-icon
                >
                <div class="nav_logo">
                    <router-link to="/">
                        <img
                            src="@/assets/image/LOGO_machi.png"
                            width="80px"
                            @click="logoClick()"
                        />
                    </router-link>
                </div>
                <ul>
                    <li class="disable">
                        <router-link to="GuestHouse" active-class="current">
                            <div @click.stop="drawer = !drawer">
                                ゲストハウス たびのきおく<br />GUEST HOUSE Tabi
                                no Kioku
                            </div>
                        </router-link>
                    </li>
                    <li class="disable">
                        <router-link to="Cafetantan" active-class="current">
                            <div @click.stop="drawer = !drawer">
                                カフェ<br />CAFE
                            </div>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="Consultant" active-class="current">
                            <div @click.stop="drawer = !drawer">
                                まちづくり・コンサルタント<br />Urban
                                design・Consulting
                            </div>
                        </router-link>
                    </li>
                    <li>
                        <a>
                            <div @click="closeAndScroll('targetPosEvents')">
                                イベント・お知らせ<br />Events・News
                            </div>
                        </a>
                    </li>
                    <li>
                        <router-link to="/" active-class="current">
                            <div @click="closeAndScroll('targetPosAbout')">
                                会社情報<br />About us
                            </div>
                        </router-link>
                    </li>
                    <li class="disable">
                        <router-link to="" active-class="current">
                            <div @click.stop="drawer = !drawer">
                                予約<br />Reservation
                            </div>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/" active-class="current">
                            <div @click="closeAndScroll('targetPosContact')">
                                問い合わせ<br />Contact
                            </div>
                        </router-link>
                    </li>
                </ul>

                <!-- <ul class="marginTop">
                    <li>Instagram</li>
                </ul> -->
            </v-navigation-drawer>
            <!-- ハンバーガー END-->
        </div>

        <!-- ヘッダー -->
        <div v-show="this.$route.path !== '/'">
            <!-- ヘッダーのロゴとタイトル -->
            <div class="header-line">
                <div class="nav_logo">
                    <router-link to="/">
                        <img src="@/assets/image/LOGO_machi.png" />
                    </router-link>
                </div>

                <div class="header-title">
                    <p v-text="this.title[this.$route.path.substr(1)]"></p>
                </div>
            </div>
        </div>

        <!-- router-viewでルーターの機能を使ってページ表示 -->
        <div>
            <router-view></router-view>
            <!-- コピーライト -->
            <p style="font-size: 14px; margin: 50px 0px 5px 5px; z-index: 10">
                © Machitabi Design LLC.
            </p>
        </div>
    </v-app>
</template>

<script>
export default {
    name: "App",
    components: {},
    data: () => ({
        drawer: false,
        title: {
            GuestHouse:
                "ゲストハウス\r\nたびのきおく\r\nGUEST HOUSE Tabi no Kioku",
            Cafetantan: "カフェ\r\nCAFE",
            Consultant:
                "まちづくり\r\nコンサルタント\r\nUrban design・Consulting",
            NewsDetail:
                "お知らせ・イベント詳細",
        },
    }),

    methods: {
        closeAndScroll(name) {
            sessionStorage.setItem("ScrollToName", JSON.stringify(name));
            // setTimeout(() => {
                // this.$router.go({
                //     path: this.$router.currentRoute.path,
                //     force: true,
                // });
                // this.$router.go(0);
                this.$router.push('/');
            // }, 100);
                this.drawer = false;
        },

        logoClick(){
            sessionStorage.removeItem("ScrollToName");
            this.drawer = false;
        }
    },

};
</script>
