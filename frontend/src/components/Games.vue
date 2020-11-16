<template>
  <div></div>
</template>

<script>
export default {
  name: "Games",
  data() {
    return {};
  },
  mounted() {
    this.initCanvas();
  },
  methods: {
    initCanvas() {
      let canvas = document.getElementById("canvas");
      let ctx = canvas.getContext("2d");
    },
  },
};
</script>

<style scoped>
</style>