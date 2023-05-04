<template>
  <v-container>
    <h1>一覧画面画面</h1>
    <v-col cols="2">
      <p class="btn btn-category btn_mouseover">NEWS</p>
    </v-col>
    <!--  -->
    <v-col cols="2">
      <v-btn v-show="darkFlg" id="Button1" v-on:mouseover="MouseoverButton">
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
    </v-col>
  </v-container>
</template>

<script>
export default {
  components: {},

  data: () => ({
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

<style scoped>
.btn {
  display: inline-block;
  margin-bottom: 0;
  font-weight: normal;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  background-image: none;
  border: 1px solid transparent;
  white-space: nowrap;
  padding: 6px 12px;
  font-size: 13px;
  line-height: 1.428571429;
  border-radius: 2px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.btn:focus,
.btn:active:focus,
.btn.active:focus {
  outline: thin dotted;
  outline: 5px auto -webkit-focus-ring-color;
  outline-offset: -2px;
}

.btn:hover,
.btn:focus {
  color: #3f3b3a;
  text-decoration: none;
}

.btn:active,
.btn.active {
  outline: 0;
  background-image: none;
  -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
}

.btn.disabled,
.btn[disabled],
fieldset[disabled] .btn {
  cursor: not-allowed;
  pointer-events: none;
  opacity: 0.65;
  filter: alpha(opacity=65);
  -webkit-box-shadow: none;
  box-shadow: none;
}

.btn_mouseover {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-text-size-adjust: 100%;
  list-style: none;
  box-sizing: border-box;
  margin: 0 0 9px;
  display: inline-block;
  margin-bottom: 0;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  background-image: none;
  border: 1px solid transparent;
  padding: 6px 12px;
  line-height: 1.428571429;
  user-select: none;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-decoration: none;
  width: 100%;
  font-size: 16px;
  font-style: inherit;
  font-family: "Cinzel", serif;
  font-weight: 400;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  zoom: 1;
  background-color: #00244e;
  border-color: #00244e;
  color: #fff;
  border-radius: 0;
}
.btn-category {
  background-color: #fff;
  border-color: #00244e;
  color: #00244e;
  width: 100%;
  font-size: 16px;
  font-style: inherit;
  font-family: "Cinzel", serif;
  font-weight: 400;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  zoom: 1;
}

.btn-category:hover {
  background-color: #00244e;
  border-color: #00244e;
  color: #fff;
}

.theme-blue .tag-list li .btn-category.btn {
  border-radius: 0;
}

.theme-blue .tag-list li.active .btn-category {
  background-color: #00244e;
  border-color: #00244e;
  color: #fff;
}
</style>>

