<template>
  <div id="AppContainer">
    <nuxt-child />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '~/style/Colors.scss';
@media only screen and (min-width: 501px) {
  #AppContainer {
    position: relative;
    margin: 10px auto;
    max-width: 280px;
    min-height: 575px;
    border: 2px solid $black;
    box-shadow: 0 0 5px rgb(89, 112, 93);
    border-radius: 32px;
    &::before {
      content: '';
      position: absolute;
      width: 150px;
      height: 20px;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 8px;
      background-color: $black;
      z-index: 99;
    }
  }
}
@media only screen and (max-width: 500px) {
  #AppContainer {
    max-width: 100vw;
    min-height: calc(100vh - 56px);
  }
}
</style>
