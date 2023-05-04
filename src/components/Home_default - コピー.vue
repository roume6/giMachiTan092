<template>
  <v-main>
    <v-card>
      <v-tabs background-color="deep-purple accent-4" center-active dark grow>
        <v-tab>Home</v-tab>
        <v-tab-item class="text-center justify-center">
          <img src="@/assets/image/moral_logo.png" width="60%" />
        </v-tab-item>
        <v-tab>Two</v-tab>
        <v-tab-item class="text-center justify-center">
          <v-card class="pad_1">
            <v-btn
              v-show="darkFlg"
              id="Button1"
              v-on:mouseover="MouseoverButton"
            >
              Small Button
            </v-btn>
            <v-btn
              v-show="!darkFlg"
              id="Button1"
              dark
              v-on:mouseleave="MouseleaveButton"
            >
              Small Button
            </v-btn>
          </v-card>
        </v-tab-item>
        <v-tab>Three</v-tab>
        <v-tab-item class="text-center justify-center">
          <button
            type="button"
            class="v-btn v-btn--is-elevated v-btn--has-bg theme--light v-size--default white"
            id="Button1"
          >
            <span
              id="span1"
              class="v-btn__content"
              v-on:mouseover="MouseoverButton"
              v-on:mouseleave="MouseleaveButton"
            >
              Small Button
            </span>
          </button>
        </v-tab-item>
        <v-tab>Four</v-tab>
        <v-tab>Five</v-tab>
      </v-tabs>
    </v-card>
  </v-main>
</template>


<script>
export default {
  data: () => ({
    //
    tab: null,
    darkFlg: true,
  }),

  methods: {
    MouseoverButton: function () {
      this.darkFlg = false;
      // var elem1 = document.getElementById("Button1");
      // elem1.addEventListener(
      //   "mouseover",
      //   function (event) {
      //     event.target.style.backgroundColor = "black";
      //     // event.target.style.Color = "white";
      //     setTimeout(function () {
      //       event.target.style.Color = "";
      //     }, 500);
      //   },
      // false
      // );
      // var elem2 = document.getElementById("span1");
      // elem2.addEventListener(
      //   "mouseover",
      //   function (event) {
      //     // event.target.style.backgroundColor = "white";
      //     event.target.style.Color = "white";
      //     setTimeout(function () {
      //       event.target.style.Color = "";
      //     }, 500);
      //   },
      //   false
      // );
    },

    MouseleaveButton: function () {
      this.darkFlg = true;
      // var elem1 = document.getElementById("Button1");
      // elem1.addEventListener(
      //   "mouseleave",
      //   function (event) {
      //     event.target.style.backgroundColor = "blue";
      //     event.target.style.Color = "blue";
      //   },
      //   false
      // );
    },
  },
};
</script>


<style>
.pad_1 {
	padding: 10px 5px;
}
</style>