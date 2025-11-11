<template>
    <v-main>
        <v-spacer style="margin: 100px"></v-spacer>
        <!-- お知らせタイトル -->
        <div class="newsDetailDescription">
            <div class="about-inline about-inline-left"></div>
            <div class="about-inline about-inline-middle">
                <p v-text="newsItem.YearMonthDay"></p>
            </div>
            <div class="about-inline about-inline-right">
                <p style="margin-right: 12%" v-text="newsItem.Content"></p>
            </div>
            <v-spacer style="margin: 5px"></v-spacer>
        </div>
        <!-- 詳細内容 -->
        <div class="newsDetailDescription">
            <p class="newsDetail" v-text="newsItem.Detail"></p>
        </div>

        <!-- 写真 -->
        <div v-if="newsItem.Pictures">
            <ul class="newsDetail-list">
                <li v-for="picture in pictures" :key="picture">
                    <div>
                        <img :src="picture" height="100px" />
                        <p v-text="picture.Label"></p>
                    </div>
                </li>
            </ul>
        </div>

        <!-- 詳細内容２ -->
        <div v-if="newsItem.Detail2" class="newsDetailDescription">
            <p class="newsDetail" v-text="newsItem.Detail2"></p>
        </div>

        <!-- リンク -->
        <div v-if="newsItem.Link" class="newsDetailDescription">
            <div v-for="link in newsItem.Link" :key="link">
                <a class="newsDetail" :href="link.Url" target="_blank">{{
                    link.Label
                }}</a>
                <v-spacer style="margin: 10px"></v-spacer>
            </div>
        </div>
    </v-main>
</template>

<script>
export default {
    components: {},
    data: () => ({
        newsItem: null,
        pictures: [],
    }),

    created() {
        this.newsItem = JSON.parse(sessionStorage.getItem("NewsItem"));

        for (let i = 0; i < this.newsItem.Pictures.length; i++) {
            this.pictures.push(
                require("@/assets/image/NewsDetail/" +
                    this.newsItem.Pictures[i].Path)
            );
        }
    },

    mounted() {},

    methods: {},
};
</script>
