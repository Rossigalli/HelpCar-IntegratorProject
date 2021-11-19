<template>
  <div class="contentContainer padDefault">
    <div class="grow">
      <p class="marginBotDefault marginTopDefault">
        DIGA SOBRE SEU CARRO
      </p>
      <label for="cnh">Nº CNH</label>
      <input
        id="cnh"
        autocomplete="off"
        type="text"
        name="cnh"
        spellcheck="false"
      >
      <div class="duplo">
        <label id="lplaca" for="placa">Placa</label>
        <input
          id="placa"
          autocomplete="off"
          type="text"
          name="placa"
          spellcheck="false"
        >
      </div>
      <div class="duplo">
        <label id="lcor" for="cor">Cor</label>
        <input
          id="cor"
          autocomplete="off"
          type="text"
          name="cor"
          spellcheck="false"
        >
      </div>
      <label for="modelo"> Modelo</label>
      <input
        id="modelo"
        autocomplete="off"
        type="text"
        name="modelo"
        spellcheck="false"
      >
    </div>
      <ForwardButton class="alignBtnContainer" @forward="$emit('forward')" />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '~/style/Colors.scss';
.contentContainer {
  position: relative;
  .duplo {
    display: flex;
    flex-wrap: wrap;
    max-width: 40%;
    float: left;
    margin-bottom: 5%;
    &:first-of-type {
      margin-right: 20%;
    }
  }
}
</style>
