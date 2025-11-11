<template>
  <v-app class="GuestHouse">
    <div>
      <img
        class="img_pad"
        src="@/assets/image/consultant/consultant1.png"
        width="100%"
      />
    </div>
    <div>
      <p class="center" v-text="consultantDescription"></p>
    </div>
    <!-- メインのリスト START-->
    <ul class="GuestHouse_list">
      <li>
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
      </li>
      <li>
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
      </li>
      <li>
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
      </li>
    </ul>
    <!-- メインのリスト END-->

    <v-spacer style="margin: 100px"></v-spacer>
    <span class="description">
      <div>
        <p>実績<br />Works</p>
      </div>
      <v-spacer style="margin: 10px"></v-spacer>
      <ul class="workslist">
        <li>
          <div class="cons-img">
            <img
              class="img_pad"
              src="@/assets/image/consultant/consultant1.png"
              width="100%"
            />
            <div class="img-desc">◯◯市◯◯</div>
          </div>
        </li>
        <li>
          <div class="cons-img">
            <img
              class="img_pad"
              src="@/assets/image/consultant/consultant1.png"
              width="100%"
            />
            <div class="img-desc">◯◯市◯◯</div>
          </div>
        </li>
      </ul>
      <v-spacer style="margin: 100px"></v-spacer>
      <div>
        <p>事業内容<br />About</p>
      </div>
      <div class="bullet-list">
        <ul class="bullet">
          <li class="no-margin"><p>公園緑地の計画・設計</p></li>
          <li class="no-margin"><p>植栽計画</p></li>
          <li class="no-margin"><p>駅前広場・歩道・駐車場等の計画・設計</p></li>
          <li class="no-margin"><p>公園緑地等のリニューアル</p></li>
          <li class="no-margin"><p>公園施設の長寿命化計画</p></li>
          <li class="no-margin"><p>住民との合意形成</p></li>
          <li class="no-margin"><p>PFI事業及びエリアマネジメント検討</p></li>
          <li class="no-margin"><p>構造物色彩検討</p></li>
          <li class="no-margin"><p>防災減災計画</p></li>
        </ul>
      </div>
      <v-spacer style="margin: 30px"></v-spacer>
      <div>
        <p>問い合わせ<br />Contact</p>
      </div>
      <div class="mail">
        <p>MAIL : abcdefg0001@gmail.com</p>
      </div>
    </span>
  </v-app>
</template>

<script>
export default {
  components: {},
  data: () => ({
    consultantDescription: "",
  }),

  mounted() {},
  // destroyed() {
  //   window.removeEventListener("scroll", this.handleScroll);
  // },

  methods: {},
};
</script>


