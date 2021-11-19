<template>
  <div id="AppContainer">
    <nuxt-child/>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '~/style/Colors.scss';
@media only screen and (min-width: 501px) {
  div#AppContainer {
    position: relative;
    margin: 10px auto;
    width: 280px;
    height: 575px;
    display: flex;
    justify-content: center;
    justify-items: center;
    border: 2px solid $black;
    box-shadow: 0 0 5px rgb(89, 112, 93);
    border-radius: 35px;
    transition: none;
    &::before {
      content: '';
      position: absolute;
      width: 150px;
      height: 20px;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 10px;
      background-color: $black;
    }
  }
}
@media only screen and (max-width: 500px) {
  div#AppContainer {
    width: 100vw;
    height: calc(100vh - 56px);
  }
}
</style>
