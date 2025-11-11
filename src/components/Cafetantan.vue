<template>
  <v-app class="Cafetantan">
    <div>
      <img class="img_pad" src="@/assets/image/guesthouse1.png" width="100%" />
    </div>
    <div>
      <p class="center" v-text="cafeDescription"></p>
    </div>

    <v-spacer style="margin: 250px"></v-spacer>
  </v-app>
</template>

<script>


export default {
  name: "my-component",
  components: {
  },
  data: () => ({
    cafeDescription:
      "カフェ説明文 〜〜〜〜〜〜〜〜〜",

  }),

  mounted() {

  },
  // destroyed() {
  //   window.removeEventListener("scroll", this.handleScroll);
  // },

  methods: {

  },
};
</script>


