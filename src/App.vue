<template>
    <v-app>
        <div class="hamburger">
            <!-- ハンバーガー START-->
            <v-icon large @click.stop="drawer = !drawer">mdi-menu</v-icon>
        </div>
        <v-navigation-drawer class="nav_list" v-model="drawer" location="right" temporary :width="drawerWidth"
            style="position: fixed">
            <v-icon style="float: right; margin: 7px 10px 0px 0px" large @click.stop="drawer = !drawer">
                mdi-close
            </v-icon>
            <div class="nav_logo">
                <router-link to="/">
                    <img src="@/assets/image/LOGO_machi.png" width="80px" @click="logoClick()" />
                </router-link>
            </div>
            <ul>
                <li class="disable">
                    <router-link to="/" active-class="current">
                        <div @click.stop="drawer = !drawer">
                            ゲストハウス たびのきおく
                            <br />
                            GUEST HOUSE Tabi no Kioku
                        </div>
                    </router-link>
                </li>
                <li class="disable">
                    <router-link to="/" active-class="current">
                        <div @click.stop="drawer = !drawer">
                            カフェ
                            <br />
                            CAFE
                        </div>
                    </router-link>
                </li>
                <li>
                    <router-link to="Consultant" active-class="current">
                        <div @click.stop="drawer = !drawer">
                            まちづくり・コンサルタント
                            <br />
                            Urban design・Consulting
                        </div>
                    </router-link>
                </li>
                <li>
                    <a>
                        <div @click="closeAndScroll('targetPosEvents')">
                            イベント・お知らせ
                            <br />
                            Events・News
                        </div>
                    </a>
                </li>
                <li>
                    <a>
                        <div @click="closeAndScroll('targetPosAbout')">
                            会社情報
                            <br />
                            About us
                        </div>
                    </a>
                </li>
                <li class="disable">
                    <router-link to="/" active-class="current">
                        <div @click.stop="drawer = !drawer">
                            予約
                            <br />
                            Reservation
                        </div>
                    </router-link>
                </li>
                <li>
                    <a>
                        <div @click="closeAndScroll('targetPosContact')">
                            問い合わせ
                            <br />
                            Contact
                        </div>
                    </a>
                </li>
            </ul>
        </v-navigation-drawer>
        <!-- ハンバーガー END-->

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
        drawerWidth: 500,
        targetPosEvents: null,
        targetPosAbout: null,
        targetPosContact: null,
    }),

    async mounted() {
        // Set drawer width to window width
        this.drawerWidth = window.innerWidth

        // Listen to window resize and update drawer width
        window.addEventListener('resize', this.handleResize)

        // Initialize scroll positions on home page
        this.initializeScrollPositions()
    },

    unmounted() {
        window.removeEventListener('resize', this.handleResize)
        window.removeEventListener('scroll', this.handleScroll)
    },

    methods: {
        // Handle window resize event
        handleResize() {
            this.drawerWidth = window.innerWidth
            // Re-initialize scroll positions when window is resized
            this.initializeScrollPositions()
        },

        // Initialize scroll positions for home page sections
        initializeScrollPositions() {
            setTimeout(() => {
                if (this.$route.path === '/') {
                    const scrollheight = window.scrollY
                    const eventsEl = document.querySelector('[data-scroll-target="events"]')
                    const aboutEl = document.querySelector('[data-scroll-target="about"]')
                    const contactEl = document.querySelector('[data-scroll-target="contact"]')

                    if (eventsEl) {
                        this.targetPosEvents =
                            eventsEl.getBoundingClientRect().top +
                            scrollheight -
                            window.innerHeight / 2
                    }
                    if (aboutEl) {
                        this.targetPosAbout =
                            aboutEl.getBoundingClientRect().top +
                            scrollheight -
                            window.innerHeight / 2
                    }
                    if (contactEl) {
                        this.targetPosContact =
                            contactEl.getBoundingClientRect().top +
                            scrollheight -
                            window.innerHeight / 2
                    }

                    // Check if we need to scroll to a specific position
                    const scrollToName = JSON.parse(
                        sessionStorage.getItem('ScrollToName')
                    )
                    if (scrollToName != null && scrollToName != undefined) {
                        this.scrollToElement(scrollToName)
                        sessionStorage.removeItem('ScrollToName')
                    }
                }
            }, 400)
        },

        // Scroll to specific element position
        scrollToElement(position) {
            if (this[position] !== null) {
                window.scrollTo({
                    top: this[position] - 30 + window.innerHeight / 2,
                    behavior: 'smooth',
                })
            }
        },

        closeAndScroll(name) {
            if (this.$route.path === '/') {
                // Already on home page, just scroll
                this.scrollToElement(name)
            } else {
                // Navigate to home page first, then scroll
                sessionStorage.setItem("ScrollToName", JSON.stringify(name))
                this.$router.push('/')
            }
            this.drawer = false
        },

        logoClick(){
            sessionStorage.removeItem("ScrollToName")
            this.drawer = false
        }
    },

    watch: {
        '$route.path': function(newPath) {
            if (newPath === '/') {
                this.initializeScrollPositions()
            }
        }
    }

};
</script>
