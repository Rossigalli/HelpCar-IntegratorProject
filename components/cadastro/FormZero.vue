<template>
  <div class="contentContainer padDefault">
    <p class="alignCenter grow">
      Como deseja se <br>cadastrar?
    </p>
    <div class="alignBtnContainer">
      <div class="btn lg black" @click="$emit('choice', 'Motorista')">
        MOTORISTA
      </div>
      <div class="btn lg black" @click="$emit('choice', 'Passageiro')">
        PASSAGEIRO
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '~/style/Colors.scss';
.contentContainer {
  position: relative;
  background-color: $primary;
  p {
    color: $white;
  }
}
</style>
