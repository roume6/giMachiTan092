<template>
  <v-app>
    <!-- <v-app-bar app color="primary" dark> </v-app-bar> -->
    <header class="header" id="pagetop">
      <nav class="header-nav">
        <a class="header-open" href="#menu"><span>メニューを開く</span></a>
        <a class="header-close" href="#"><span>メニューを閉じる</span></a>
        <v-row>
          <v-col cols="2"></v-col>
          <v-col cols="1">
            <h1 class="header-logo">
              <a class="header-logo-main" href="/">
                <img src="@/assets/image/LOGO_alpha_222222.png" width="100%" />
              </a>
              <a class="header-logo-hidden" href="/staffonly/"></a>
            </h1>
          </v-col>
          <v-col cols="6" style="display: flex; align-self: center;">
            <ul id="menu">
              <li><a href="/News/">News</a></li>
              <li><a href="/Profile/">Profile</a></li>
              <li><a href="/Discography/">Discography</a></li>
              <li><a href="/Access/">Access</a></li>
              <li><a href="/Contact/">Contact</a></li>
            </ul>
          </v-col>
          <v-col cols="3"></v-col>
        </v-row>
      </nav>
    </header>

    <!-- <router-link to="/" active-class="active" exact>  </router-link> -->
    <router-view></router-view>
  </v-app>
</template>

<script>
// import Home_default from "./components/Home_default";

export default {
  name: "App",

  components: {
    // Home_default,
  },

  data: () => ({
    //
    tab: null,
    darkFlg: true,
  }),
};
</script>

<style scoped>

</style>