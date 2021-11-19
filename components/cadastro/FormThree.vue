<template>
  <div class="contentContainer padDefault">
    <div class="grow">
      <p class="marginBotDefault marginTopDefault">
        Só Mais Algumas Informações.
      </p>
      <label for="RG">RG</label>
      <input
        id="RG"
        autocomplete="off"
        name="RG"
        type="text"
        spellcheck="false"
      >
      <label for="CPF">CPF</label>
      <input
        id="CPF"
        spellcheck="false"
        autocomplete="off"
        name="CPF"
        type="text"
      >
      <label for="Email">Email</label>
      <input
        id="Email"
        spellcheck="false"
        autocomplete="off"
        name="Email"
        type="text"
      >
      <label for="Usuario">Usuário</label>
      <input
        id="Usuario"
        spellcheck="false"
        autocomplete="off"
        name="Usuario"
        type="text"
      >
      <label for="Senha">Senha</label>
      <input id="Senha" autocomplete="off" name="Senha" type="password">
    </div>
    <nuxt-link to="/login">
      <ForwardButton class="alignBtnContainer" @forward="$emit('forward')" />
    </nuxt-link>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.contentContainer {
  position: relative;
  .TESTE {
    position: relative;
    display: block;
  }
}
</style>
