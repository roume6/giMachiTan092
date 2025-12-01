<template>
    <v-main>
        <div v-show="$route.path === '/'">
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

                <!-- <ul class="marginTop">
                    <li>Instagram</li>
                </ul> -->
            </v-navigation-drawer>
            <!-- ハンバーガー END-->
        </div>
        <div class="center">
            <img src="@/assets/image/LOGO_machi.png" class="home-logo" />
        </div>
        <div>
            <p class="concept-balloon" v-text="conceptText"></p>
        </div>
        <!-- 3枚の写真横並び -->
        <div>
            <ul class="home_list">
                <li>
                    <div class="disable">
                        <router-link to="">
                            <img src="@/assets/image/Home/li1.png" height="100px" />
                            <p>
                                ゲストハウス
                                <br />
                                たびのきおく
                            </p>
                        </router-link>
                    </div>
                    <div class="homeCard">
                        <p>計画中</p>
                    </div>
                </li>
                <li>
                    <div class="disable">
                        <router-link to="">
                            <img src="@/assets/image/Home/li2.png" height="100px" />
                            <p>カフェ</p>
                        </router-link>
                    </div>
                    <div class="homeCard">
                        <p>計画中</p>
                    </div>
                </li>
                <li>
                    <div>
                        <router-link to="Consultant" active-class="current">
                            <img src="@/assets/image/Home/li3.png" height="100px" />
                            <p>
                                まちづくり
                                <br />
                                コンサルタント
                            </p>
                        </router-link>
                    </div>
                </li>
            </ul>
        </div>
        <div style="margin-top: 5px">
            <img class="img_pad" src="@/assets/image/Home/homeImg1.png" width="100%" />
        </div>
        <div style="margin: 5px 0px">
            <img class="img_pad" src="@/assets/image/Home/homeImg1_211.png" width="100%" />
        </div>
        <span class="tinydescription">
            <div>
                <p class="center" v-text="philosophyDescription"></p>
            </div>
        </span>
        <v-spacer style="margin: 50px"></v-spacer>
        <!-- イベント -->
        <div ref="events" class="body-title">
            <p>
                イベント・お知らせ
                <br />
                Events・News
            </p>
        </div>
        <v-spacer style="margin: 15px"></v-spacer>
        <div>
            <span v-for="item in news" :key="item.YearMonthDay">
                <div class="about-inline about-inline-left"></div>
                <div class="about-inline about-inline-middle">
                    <p v-text="item.YearMonthDay"></p>
                </div>
                <div class="about-inline about-inline-right">
                    <router-link v-if="item.Detail" to="NewsDetail">
                        <p style="margin-right: 12%" v-text="item.Content" @click="NewsClick(item)"></p>
                    </router-link>
                    <p v-else style="margin-right: 12%" v-text="item.Content"></p>
                </div>
                <v-spacer style="margin: 5px"></v-spacer>
            </span>
        </div>
        <v-spacer style="margin: 40px"></v-spacer>
        <!-- 会社情報 -->
        <div ref="About" class="body-title">
            <p>
                会社情報
                <br />
                About us
            </p>
        </div>
        <span>
            <v-spacer style="margin: 15px"></v-spacer>
            <div class="about-inline about-inline-left"></div>
            <div class="about-inline about-inline-middle">
                <p>会社名</p>
            </div>
            <div class="about-inline about-inline-right">
                <p v-text="companyName"></p>
            </div>
        </span>
        <span>
            <v-spacer style="margin: 15px"></v-spacer>
            <div class="about-inline about-inline-left"></div>
            <div class="about-inline about-inline-middle">
                <p>所在地</p>
            </div>
            <div class="about-inline about-inline-right">
                <p>新潟県新潟市</p>
            </div>
        </span>
        <span>
            <v-spacer style="margin: 15px"></v-spacer>
            <div class="about-inline about-inline-left"></div>
            <div class="about-inline about-inline-middle">
                <p>事業内容</p>
            </div>
            <div class="about-inline about-inline-right">
                <p v-text="businessdetails"></p>
            </div>
        </span>
        <span>
            <v-spacer style="margin: 15px"></v-spacer>
            <div class="about-inline about-inline-left"></div>
            <div class="about-inline about-inline-middle">
                <p>代表者名</p>
            </div>
            <div class="about-inline about-inline-right">
                <p>成川優花</p>
            </div>
        </span>
        <span>
            <v-spacer style="margin: 15px"></v-spacer>
            <div class="about-inline about-inline-left"></div>
            <div class="about-inline about-inline-middle">
                <img src="@/assets/image/Home/yuka.jpg" width="100%" style="padding-right: 10px; max-width: 200px" />
            </div>
            <div class="about-inline about-inline-right">
                <p v-text="profile"></p>
            </div>
        </span>
        <span>
            <v-spacer style="margin: 15px"></v-spacer>
            <div class="about-inline about-inline-left"></div>
            <div class="about-inline about-inline-middle">
                <p>設立年月</p>
            </div>
            <div class="about-inline about-inline-right">
                <p>2024年10月30日</p>
            </div>
        </span>
        <v-spacer style="margin: 50px"></v-spacer>
        <!-- 問い合わせ -->
        <div ref="Contact" class="body-title">
            <p>
                問い合わせ
                <br />
                Contact
            </p>
        </div>
        <span>
            <v-spacer style="margin: 15px"></v-spacer>
            <div class="contact-inline contact-inline-left">
                <p>email：</p>
            </div>
            <div class="contact-inline contact-inline-right">
                <p>machitabi.d(@)gmail.com</p>
            </div>
            <div class="contact-inline contact-inline-left">
                <p>Instagram：</p>
            </div>
            <div class="contact-inline contact-inline-right">
                <p>@yuka2700</p>
            </div>
        </span>
    </v-main>
</template>

<script>
// path=JSONファイルのパス
const url = new URL('..\\assets\\News.json', import.meta.url).href
// const path = url.searchParams.get("@\\assets\\static\\News.json");

// import newsJson from "../assets/News.json";

export default {
    data: () => ({
        conceptText: 'まち×たびで世界を広げるサポートを。',
        companyName: '合同会社まちたびデザイン\r\nMachitabi Design LLC.',
        businessdetails:
            'ゲストハウス(計画中)\r\nカフェ(計画中)\r\nまちづくりコンサルタント',
        philosophyDescription:
            '合同会社まちたびデザインは\r\n代表が世界一周をして感じた世界の魅力を\r\n子どもたちに身近に感じて世界へ興味を持ってもらいたい\r\n旅人たちの交流の場となり世界中を旅するきっかけを作りたい\r\nそして、改めて知った日本・新潟の魅力(食・文化・景色等)を\r\n世界中を旅する人にもっと知ってもらいたい\r\n新潟の魅力を知った人たちが帰国後に\r\n世界に羽ばたき発信する側となってもらいたい\r\n地元の人にももっと魅力を知ってもらいたい\r\nまちの魅力を高めもっと新潟を元気にしたい\r\nそんな壮大な想いから\r\nゲストハウス×カフェ×まちづくりコンサルタント\r\nの3つの軸で活動できるように立ち上げました。\r\n\r\n新潟でのまちづくりを通じて旅人・地元の人の交流ができ\r\n暮らす人も旅をしているような\r\nわくわくする感覚で地元の魅力を発見できる\r\nそんな世界を広げるサポートをしたいと考えています。\r\n\r\nゲストハウス、カフェは物件を探し中です。\r\nご興味のある方はぜひ一度ご連絡ください。',
        news: null,

        profile:
            '岐阜県多治見市出身 \r\n新卒で建設コンサルタント会社に就職\r\n7年間公園や公共空間の計画設計をメインに\r\n住民主体のまちづくりを実施\r\n技術士(建設部門・都市及び地方計画)を取得\r\n退社後に7ヶ月間の世界一周ひとり旅を経験\r\n帰国後に合同会社まちたびデザインを設立',
        targetPosEvents: null,
        targetPosAbout: null,
        targetPosContact: null,
        scrollheight: null,
        drawer: false,
        scrollToName: null,
        drawerWidth: 500,

        newsDetailDialog: false,
    }),

    async mounted() {
        // Set drawer width to window width
        this.drawerWidth = window.innerWidth
        
        // Listen to window resize and update drawer width
        window.addEventListener('resize', this.handleResize)
        
        // const response =
        await fetch(url)
            .then((res) => res.json())
            .then((res) => (this.news = res))
        // console.log(response);
        // console.log(this.news);
        setTimeout(() => {}, 100)

        setTimeout(() => {
            this.scrollheight = window.scrollY
            // + window.scrollYがない場合、読み込み時のスクロール状態によりずれが発生する
            this.targetPosEvents =
                this.$refs.events.getBoundingClientRect().top +
                this.scrollheight -
                window.innerHeight / 2
            this.targetPosAbout =
                this.$refs.About.getBoundingClientRect().top +
                this.scrollheight -
                window.innerHeight / 2
            this.targetPosContact =
                this.$refs.Contact.getBoundingClientRect().top +
                this.scrollheight -
                window.innerHeight / 2

            this.scrollToName = JSON.parse(
                sessionStorage.getItem('ScrollToName')
            )
            if (this.scrollToName != null && this.scrollToName != undefined) {
                this.scrollToElement(this.scrollToName)
                sessionStorage.removeItem('ScrollToName')
            }
        }, 400)
    },

    unmounted() {
        window.removeEventListener('resize', this.handleResize)
        window.removeEventListener('scroll', this.handleScroll)
    },

    methods: {
        // Handle window resize event
        handleResize() {
            this.drawerWidth = window.innerWidth
        },

        // 特定の位置までスクロール
        scrollToElement(position) {
            // console.log(this.targetPosEvents);
            window.scrollTo({
                top: this[position] - 30 + window.innerHeight / 2,
                behavior: 'smooth',
            })
        },

        // ハンバーガーメニュー内押下時のスクロール（お知らせ、会社情報、問い合わせ）
        closeAndScroll(name) {
            this.drawer = false
            this.scrollToElement(name)
        },

        // ロゴクリック時のセッション削除・スクロール
        logoClick() {
            sessionStorage.removeItem('ScrollToName')
            this.drawer = false
            window.scrollTo({
                top: 0,
            })
        },

        // お知らせの詳細をセッションストレージに保存
        NewsClick(item) {
            sessionStorage.removeItem('NewsItem')
            sessionStorage.setItem('NewsItem', JSON.stringify(item))
        },
    },
}
</script>
