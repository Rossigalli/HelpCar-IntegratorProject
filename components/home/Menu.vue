<template>
  <div id="MenuContainer">
    <div class="picture">
      <i class="far fa-user" />
    </div>
    <p class="nome">
      {{ $store.state.userName }}
    </p>
    <div class="stars">
      <i
        v-for="index in 5"
        :key="index"
        :class="{ 'fas fa-star': stars >= index }"
        class="far fa-star"
        @mouseover="stars = index"
      />
    </div>
    <div class="menuItens padDefault">
      <p>
        <nuxt-link to="/home" @click.native.stop="showAlert()">
          Viagens
        </nuxt-link>
      </p>
      <p>
        <nuxt-link to="" @click.native.stop="showAlert()">
          Pagamento
        </nuxt-link>
      </p>
      <p>
        <nuxt-link to="" @click.native.stop="showAlert()">
          Configurações
        </nuxt-link>
      </p>
      <p>
        <nuxt-link to="" @click.native.stop="showAlert()">
          Ajuda
        </nuxt-link>
      </p>
      <p id="alert">
        Tela em desenvolvimento.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      stars: 1
    }
  },
  methods: {
    showAlert () {
      window.document.querySelector('#alert').classList.add('show')
      setTimeout(function () {
        window.document.querySelector('#alert').classList.remove('show')
      }, 500)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/style/Colors.scss';
#MenuContainer {
  background-color: $white;
  text-align: center;
  .picture {
    position: relative;
    width: 80px;
    height: 80px;
    border-radius: 25%;
    border: 4px solid $black;
    margin: 10% auto 5% auto;
    i.fa-user {
      font-size: 8rem;
      color: $black;
      padding-top: 10%;
    }
  }
  p {
    font-size: 1.8rem;
  }
  .menuItens {
    text-align: left;
    margin-top: 20%;
    p {
      margin-bottom: 10%;
    }
    #alert {
      opacity: 0;
      color: rgb(209, 114, 114);
      &.show {
        opacity: 1;
      }
    }
  }
  .stars {
    font-size: 30px;
    cursor: pointer;
  }
}
</style>
