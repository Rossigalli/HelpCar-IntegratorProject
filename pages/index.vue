<template>
  <div class="contentContainer">
    <Sticker />
    <p class="grow alignCenter">
      Boas viagens trazem <br>
      boas histórias
    </p>

    <div class="alignBtnContainer">
      <nuxt-link to="/login">
        <div class="btn">
          ENTRAR
        </div>
      </nuxt-link>
      <p class="createAccount">
        <nuxt-link to="/cadastro">
          Criar conta
        </nuxt-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '~/style/Colors.scss';
.contentContainer {
  background-color: $white;
  .createAccount {
    padding-top: 5%;
    line-height: 40px;
  }
}
</style>
