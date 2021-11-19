<template>
  <img
    v-if="color === 'black'"
    src="~/static/logoBlack.png"
    alt="Logo Help Car"
  >
  <img v-else src="~/static/logoWhite.png" alt="Logo Help Car">
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: 'black'
    }
  }
}
</script>

<style lang="scss" scoped>
img {
  max-height: 15vh;
  margin: 0 auto;
  margin-top: 15%;
}
</style>
