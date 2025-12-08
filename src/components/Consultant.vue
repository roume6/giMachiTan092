<template>
    <v-main class="Consultant">
        <v-spacer style="margin: 100px"></v-spacer>
        <!-- メインのリスト START-->
        <ul class="vertical-menu">
            <li @click="scrollToElement('targetPosWorks')">
                <div class="menu-icon-item">
                    <p>実績<br />Works</p>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="#1b465b"
                        width="60%"
                    >
                        <title>pencil-outline</title>
                        <path
                            d="M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z"
                        />
                    </svg>
                </div>
            </li>
            <li @click="scrollToElement('targetPosAbout')">
                <div class="menu-icon-item">
                    <p>事業内容<br />About</p>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="#1b465b"
                        width="60%"
                    >
                        <title>file-document-alert-outline</title>
                        <path
                            d="M20 17H22V15H20V17M20 7V13H22V7M6 16H11V18H6M6 12H14V14H6M4 2C2.89 2 2 2.89 2 4V20C2 21.11 2.89 22 4 22H16C17.11 22 18 21.11 18 20V8L12 2M4 4H11V9H16V20H4Z"
                        />
                    </svg>
                </div>
            </li>
            <li @click="scrollToElement('targetPosContact')">
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

        <v-spacer style="margin: 40px"></v-spacer>
        <span class="description">
            <div ref="works">
                <p>実績<br />Works</p>
            </div>
        </span>
        <v-spacer style="margin: 10px"></v-spacer>

        <div class="center">
            <img
                class="img_pad"
                src="@/assets/image/Consultant/works.jpg"
                width="100%"
                style="margin-bottom: 20px"
            />
        </div>
        <div class="cons-inline works-inline-left"></div>
        <div class="cons-inline works-inline-middle">
            <div class="works-desc">
                <p>
                    &lt;公園・広場&gt; <br />世田谷区玉川野毛町公園の基本計画
                    <br />渋谷区の複数公園のエリアマネジメント計画
                    <br />調布市や杉並区の街区公園の機能再編整備計画
                    <br />墨田区大横川親水公園の民活導入サウンディング調査
                    <br />茅ヶ崎市公園施設長寿命化計画
                    <br />さいたま市大和田駅前広場の基本計画
                    <br />北区滝野川三丁目公園の基本設計
                    <br />市川市ぴあぱーく妙典の公園実施設計
                    <br />川崎市富士見公園のインフラ基本・実施設計
                    <br />千葉市幕張海浜公園の改修設計
                    <br />白山市トレインパーク白山の外構実施設計
                    <br />高松市塩江道の駅外構実施設計
                    <br />東京科学大学の外構設計
                    <br />所沢市狭山湖人道橋橋詰広場の基本・実施設計
                    <br />土浦市りんりんポートの広場計画・設計・工事監理
                    <br />
                    <br />&lt;構造物&gt;
                    <br />所沢市狭山湖人道橋の景観デザイン・模型・VR作成
                    <br />天草市天草未来大橋の景観デザイン・模型・VR作成
                    <br />品川区潮風公園潮風橋の景観デザイン
                    <br />中央区・江東区旧晴海鉄道橋の遊歩道化デザイン
                    <br />下妻市砂沼地区の街路照明デザイン
                    <br />首都高速道路横浜環状南線の換気塔デザイン・模型作成
                    <br />土浦市りんりんポートの建築計画・設計・工事監理
                    <br />
                    <br />&lt;道路&gt;
                    <br />静岡市静清バイパスの道路デザイン・植栽計画
                    <br />高槻市域高速道路の模型・VR作成
                    <br />相模原市林道の整備設計・UAV測量
                    <br />神流町神流川遊歩道の施設保全撤去計画
                    <br />
                    <br />&lt;イベント&gt; <br />平城宮跡歴史公園の木挽祭
                    <br />北区滝野川三丁目公園のワークショップ
                    <br />杉並区公園再編計画のワークショップ
                    <br />世田谷区玉川野毛町公園のワークショップ・見学会
                    <br />調布市公園再編計画のワークショップ・パンフレット作成
                    <br />調布市鉄道跡地の意見聴取オープンハウス
                    <br />天草市天草未来大橋の意見聴取オープンハウス
                    <br />
                    <br />&lt;海外&gt;
                    <br />フィリピン・マニラの鉄道沿線広場設計(JICA)
                    <br />カンボジア・シェムリアップの国立公園インフラ導入検討
                    <br />タイ・プーケットのMaaSアプリ検討(JICA)
                    <br />
                    <br />&lt;その他&gt; <br />観光庁補助金申請の伴走支援
                    <br />建設コンサルタント協会の会誌企画・編集・取材・執筆
                    <br />新名神高速道路しんめちゃんぬいぐるみ制作
                </p>
            </div>
        </div>
        <div class="cons-inline works-inline-right"></div>
        <v-spacer class="spacer"></v-spacer>
        <span class="description">
            <div ref="about">
                <p>事業内容<br />About</p>
            </div>
        </span>
        <div class="cons-inline cons-inline-left"></div>
        <div class="cons-inline cons-inline-middle"></div>
        <div class="cons-inline cons-inline-right">
            <div class="bullet-list">
                <ul class="bullet">
                    <li class="no-margin">
                        <p>公園緑地・植栽の計画・設計</p>
                    </li>
                    <li class="no-margin">
                        <p>駅前広場・歩道・駐車場等の計画・設計</p>
                    </li>
                    <li class="no-margin">
                        <p>公園緑地等のリニューアル</p>
                    </li>
                    <li class="no-margin">
                        <p>公園施設の長寿命化計画</p>
                    </li>
                    <li class="no-margin">
                        <p>住民との合意形成(ワークショップ、見学会等)</p>
                    </li>
                    <li class="no-margin">
                        <p>PFI事業及びエリアマネジメント検討</p>
                    </li>
                    <li class="no-margin">
                        <p>構造物景観デザイン検討</p>
                    </li>
                    <li class="no-margin">
                        <p>防災減災計画</p>
                    </li>
                    <li class="no-margin">
                        <p>パンフレット・チラシ作成</p>
                    </li>
                    <li class="no-margin">
                        <p>事業に関する取材・執筆・特集企画・編集</p>
                    </li>
                    <li class="no-margin">
                        <p>旅行(国内・海外)の相談・アドバイス(無償)</p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="cons-inline cons-inline-right2"></div>
        <v-spacer class="spacer"></v-spacer>
        <span class="description">
            <div ref="contact">
                <p>問い合わせ<br />Contact</p>
            </div>
            <div class="mail">
                <p>MAIL : machitabi.d(@)gmail.com</p>
            </div>
        </span>
    </v-main>
</template>

<script>
export default {
    components: {},
    data: () => ({
        consultantDescription: "",
        targetPosWorks: null,
        targetPosAbout: null,
        targetPosContact: null,
    }),

    mounted() {
        window.scrollTo({
            top: 0,
        });

        setTimeout(() => {
            this.loading = false;
            this.scrollheight = window.scrollY;
            // + window.scrollYがない場合、読み込み時のスクロール状態によりずれが発生する
            this.targetPosWorks =
                this.$refs.works.getBoundingClientRect().top +
                this.scrollheight -
                window.innerHeight / 2;
            this.targetPosAbout =
                this.$refs.about.getBoundingClientRect().top +
                this.scrollheight -
                window.innerHeight / 2;
            this.targetPosContact =
                this.$refs.contact.getBoundingClientRect().top +
                this.scrollheight -
                window.innerHeight / 2;
            window.addEventListener("scroll", this.handleScroll);
        }, 400);
    },
    destroyed() {
        window.removeEventListener("scroll", this.handleScroll);
    },

    methods: {
        // スクロールイベント
        async handleScroll() {
            this.scrollheight = window.scrollY;
        },

        // 特定の位置までスクロール
        scrollToElement(position) {
            window.scrollTo({
                top: this[position] - 70 + window.innerHeight / 2,
                behavior: "smooth",
            });
        },
    },
};
</script>

<style scoped>
/* Shared styles from common.css: .vertical-menu, .menu-icon-item */

.Consultant {
    top: 100px;
}

.Consultant p {
    padding: 0px 16px;
    white-space: pre-wrap;
}

.cons-img {
    position: relative;
}

.img-desc {
    position: absolute;
    top: -30px;
    left: 15px;
    font-size: 18px;
}

.workslist li {
    margin-bottom: 40px;
}

.works-desc {
    font-size: 13px;
}

.mail {
    font-size: 18px;
}

.bullet-list {
    font-size: 15px;
}

.bullet-list ul li p {
    margin: 0;
    padding: 0;
    display: flex;
}

.cons-inline {
    position: relative;
    display: inline-block;
    white-space: pre-wrap;
    font-size: 13px;
}

.cons-inline p {
    margin: 0;
}

.cons-inline-left {
    width: 5%;
}

.cons-inline-middle {
    width: 5%;
    text-align: left;
    vertical-align: top;
}

.cons-inline-right {
    width: 85%;
    text-align: left;
    vertical-align: top;
}

.cons-inline-right2 {
    width: 2%;
}

.works-inline-left {
    width: 1%;
}

.works-inline-middle {
    width: 97%;
    text-align: left;
    vertical-align: top;
}

.works-inline-right {
    width: 7%;
}

.spacer {
    margin: 50px;
}

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

.center {
    display: flex;
    justify-content: center;
    text-align: center;
}

.img_pad {
    padding: 0px 15px;
}

.no-margin {
    margin: 0px !important;
}

.bullet {
    list-style-type: square;
    list-style-position: outside;
}

.bullet li::marker {
    color: #000000;
}

@media screen and (min-width: 760px) {
    .GuestHouse_list li {
        font-size: 20px;
        color: #1b465b;
        text-align: center;
        border-radius: 5px;
        display: flex;
        justify-content: center;
    }

    .cons-inline-left {
        width: 20%;
    }

    .cons-inline-middle {
        width: 10%;
        text-align: left;
        vertical-align: top;
    }

    .cons-inline-right {
        width: 60%;
        text-align: left;
        vertical-align: top;
    }

    .cons-inline-right2 {
        width: 10%;
    }

    .bullet-list {
        font-size: 20px;
    }

    .works-inline-left {
        width: 15%;
    }

    .works-inline-middle {
        width: 75%;
        text-align: left;
        vertical-align: top;
    }

    .works-desc {
        font-size: 20px;
    }

    .works-inline-right {
        width: 10%;
    }

    .mail {
        font-size: 20px;
    }

    .spacer {
        margin: 100px;
    }

    .description {
        padding: 0px;
        margin: 0px;
        font-size: 22px;
        white-space: pre-wrap;
    }
}
</style>
