<template>
    <v-main>
        <v-spacer style="margin: 100px"></v-spacer>
        <!-- お知らせタイトル -->
        <div v-if="newsItem" class="newsDetailDescription">
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
        <div v-if="newsItem" class="newsDetailDescription">
            <p class="newsDetail" v-text="newsItem.Detail"></p>
        </div>

        <!-- 写真 -->
        <div v-if="newsItem && newsItem.Pictures && !newsItem.PicturesMode">
            <ul class="newsDetail-list">
                <li v-for="picture in newsItem.Pictures" :key="picture.Path">
                    <div>
                        <img v-bind:src="picture.Path" width="100%" />
                        <p v-text="picture.Label"></p>
                    </div>
                </li>
            </ul>
        </div>
        <div v-if="newsItem && newsItem.Pictures && newsItem.PicturesMode === '2'">
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
        <div v-if="newsItem && newsItem.Detail2" class="newsDetailDescription">
            <p class="newsDetail" v-text="newsItem.Detail2"></p>
        </div>

        <!-- リンク -->
        <div v-if="newsItem && newsItem.Link" class="newsDetailDescription">
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
const url = './assets/News.json'

export default {
    components: {},
    data: () => ({
        newsItem: null,
    }),

    async created() {
        // Try to get from sessionStorage first (same tab navigation)
        const sessionItem = JSON.parse(sessionStorage.getItem('NewsItem'))
        if (sessionItem) {
            this.newsItem = sessionItem
        } else {
            // If not in sessionStorage, fetch from News.json and find matching item
            const dateParam = this.$route.query.date
            if (dateParam) {
                try {
                    const response = await fetch(url)
                    const news = await response.json()
                    this.newsItem = news.find(item => item.YearMonthDay === dateParam)
                } catch (error) {
                    console.error('Error fetching News.json:', error)
                }
            }
        }
    },

    mounted() {
        window.scrollTo({
            top: 0,
        })
    },

    methods: {},
}
</script>
