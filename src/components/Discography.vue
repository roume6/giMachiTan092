<template>
  <div class="container">
    <!-- width="1195"
      height="672" -->
    <div class="box">
      <yt-video videoId="7RYjMsE7J3Y" :width="598" :height="336" />
    </div>
    <div class="box">
      <yt-video videoId="L630ovwVVqM" :width="598" :height="336" />
    </div>
  </div>
</template>

<script>
import YtVideo from "./YtVideo.vue";
export default {
  components: {
    YtVideo,
  },
};
</script>

<style scoped>
.container {
  display: table;
  border-collapse: separate;
  border-spacing: 10px 0px;
  /* width: 600px;
  height: 200px; */
}
.box {
  display: table-cell;
  text-align: center;
  /* color: #fff; */
}
.col_center {
  display: flex;
  justify-content: center;
}
</style>