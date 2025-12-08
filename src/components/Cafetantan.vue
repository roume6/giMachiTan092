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

<style scoped>
.Cafetantan {
    top: 100px;
}

.Cafetantan p {
    padding: 0px 50px;
    white-space: pre-wrap;
}

.Cafetantan_list {
    display: flex;
    list-style: none;
    justify-content: space-evenly;
    text-align: center;
    padding: 0px !important;
    margin: 5px 0px 0px 0px;
}

.Cafetantan_list p {
    padding: 0px;
    margin: 5px 0px 0px 0px;
    white-space: pre-wrap;
}
</style>
