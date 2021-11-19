<template>
  <div class="contentContainer" @keyup.enter.stop.prevent="logIn()">
    <div class="bgContainer">
      <div class="bg" />
      <img src="~/static/bgLogin.png" alt="bg">
    </div>
    <Logo class="logo" color="white" />
    <div class="hr" />
    <div class="grow padDefault">
      <label class="marginTopDefault" for="usuario">Usuário</label>
      <input
        id="usuario"
        v-model="name"
        spellcheck="false"
        autocomplete="off"
        name="usuario"
        type="text"
      >
      <label for="senha">Senha</label>
      <input
        id="senha"
        spellcheck="false"
        autocomplete="off"
        name="senha"
        type="password"
      >
      <div class="icons">
        <i class="fab fa-google" hidden="" />
        <i class="fab fa-facebook" />
      </div>
    </div>
    <div>
      <div class="btn primary alignBtnContainer" @click.stop.prevent="logIn()">
        ENTRAR
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: ''
    }
  },
  watch: {
    name () {
      this.$store.commit('setUserName', this.name.trim())
    }
  },
  methods: {
    logIn () {
      if (this.name.trim() !== '') {
        this.$router.push('/home')
      } else {
        window.document.querySelector('#usuario').classList.add('error')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/style/Colors.scss';
.contentContainer {
  background-color: $white;
  .logo {
    z-index: 1;
  }
  .bgContainer {
    position: absolute;
    box-sizing: border-box;
    max-height: 100%;
    .bg {
      background-color: $primary;
      height: 15vh;
      width: 100%;
    }
    img {
      position: relative;
      width: 100%;
    }
  }
  .hr {
    background-color: $white;
    z-index: 1;
  }
  .grow {
    margin-top: 20vh;
    .error {
      border-color: red;
    }
    .icons {
      display: flex;
      justify-content: space-evenly;
      margin-top: 3%;
      i {
        font-size: 30px;
        color: $primary;
        text-shadow: 0px 3px $darkPrimary;
        padding-bottom: 3px;
        transition: all 0.3s ease;
        &:hover {
          color: $darkPrimary;
          text-shadow: 0 3px darken($darkPrimary, 15%);
        }
        &:active {
          transform: translateY(3px);
          text-shadow: 0 0 darken($darkPrimary, 15%);
        }
      }
    }
    label {
      color: $primary;
    }
    input {
      border-color: $primary;
      color: $black;
    }
  }
}
</style>
