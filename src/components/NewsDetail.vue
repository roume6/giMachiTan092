<template>
    <v-main>
        <v-spacer style="margin: 100px"></v-spacer>
        <!-- お知らせタイトル -->
        <div class="newsDetailDescription">
            <div class="newsDetail-inline newsDetail-inline-left"></div>
            <div class="newsDetail-inline newsDetail-inline-middle">
                <p v-text="newsItem.YearMonthDay"></p>
            </div>
            <div class="newsDetail-inline newsDetail-inline-right">
                <p  v-text="newsItem.Content"></p>
            </div>
            <v-spacer style="margin: 5px"></v-spacer>
        </div>
        <!-- 内容 -->
        <div class="newsDetailDescription">
            <p class="newsDetail" v-text="newsItem.Detail"></p>
        </div>

        <!-- 写真 -->
        <div v-if="newsItem.Pictures && !newsItem.PicturesMode">
            <ul class="newsDetail-list">
                <li v-for="picture in newsItem.Pictures" :key="picture.Path">
                    <div>
                        <img v-bind:src="picture.Path" width="100%" />
                        <p v-text="picture.Label"></p>
                    </div>
                </li>
            </ul>
        </div>
        <div v-if="newsItem.Pictures && newsItem.PicturesMode === '2'">
            <ul class="newsDetail-list-mode2">
                <li
                    v-for="(picture, index) in newsItem.Pictures"
                    :key="picture.Path"
                    :class="{ 'newsDetail-list-mode2-last': index === newsItem.Pictures.length - 1 }"
                >
                    <div>
                        <img v-bind:src="picture.Path" width="100%" />
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
            <div v-for="link in newsItem.Link" :key="link.Url">
                <a class="newsDetail" :href="link.Url" target="_blank">
                    {{ link.Label }}
                </a>
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
    }),

    created() {
        this.newsItem = JSON.parse(sessionStorage.getItem('NewsItem'))
    },

    mounted() {
        window.scrollTo({
            top: 0,
        })
    },

    methods: {},
}
</script>
