<template>
  <v-main>
      <div style="display: flex; justify-content: center; justify-items: center">
        <img src="@/assets/image/LOGO_alpha_222222.png" width="40%" />
      </div>

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