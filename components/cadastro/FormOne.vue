<template>
  <div class="contentContainer padDefault">
    <div class="picture">
      <i class="fas fa-camera" />
      <i class="far fa-user" />
    </div>
    <div class="grow">
      <p class="marginBotDefault">
        Bem Vindo, {{ user }}.
      </p>
      <label for="nome">Nome Completo</label>
      <input
        id="nome"
        autocomplete="off"
        name="nome"
        type="text"
        spellcheck="false"
      >
      <label for="nascimento">Data de Nascimento</label>
      <input id="data" name="nascimento" type="date">
      <label>Gênero</label>
      <form>
        <input
          id="masculino"
          name="genero"
          type="radio"
          value="Masculino"
          checked
        >
        <label class="radio lmasculino" for="masculino">Masculino</label>
        <input id="feminino" name="genero" type="radio" value="Feminino">
        <label class="radio" for="feminino">Feminino</label>
      </form>
      <label for="telefone">Telefone</label>
      <input
        id="telefone"
        autocomplete="off"
        name="telefone"
        type="tel"
        spellcheck="false"
      >
    </div>
    <ForwardButton class="alignBtnContainer" @forward="$emit('forward')" />
  </div>
</template>

<script>
export default {
  props: {
    user: String
  }
}
</script>

<style lang="scss" scoped>
@import '~/style/Colors.scss';
.contentContainer {
  position: relative;
  .picture {
    position: relative;
    width: 60px;
    height: 60px;
    border-radius: 25%;
    border: 5px solid $black;
    margin: 10px auto;
    overflow: visible;
    i.fa-user {
      font-size: 60px;
      padding-top: 25%;
      line-height: 80%;
      color: $black;
    }
    i.fa-camera {
      position: absolute;
      font-size: 2rem;
      top: 100%;
      left: 100%;
      transform: translate(-40%, -50%);
      border: 5px solid $primary;
      border-top: 2px solid $primary;
      border-radius: 25%;
      background-color: $primary;
      color: $black;
    }
  }
  form {
    .lmasculino {
      margin-right: 30%;
    }
  }
}
</style>
