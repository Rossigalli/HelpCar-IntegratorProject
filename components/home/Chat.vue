<template>
  <div id="ChatsContainer" class="padDefault">
    <div v-if="chats.length === 0" class="alignCenter">
      Você Não Tem <br>Mensagens.
    </div>
    <div v-else class="chats marginTopDefault">
      <div
        v-for="(chat, index) in chats"
        :key="index"
        class="authorContainer marginBotDefault"
        @click="indexMessageActive = index"
      >
        <div class="picture">
          <i class="far fa-user" />
        </div>
        <p class="author">
          {{ chat.name }}
        </p>
        <p class="lastMessage">
          {{ chat.messages[chat.messages.length - 1].content | reduce() }}
        </p>
      </div>
    </div>
    <Message
      v-if="indexMessageActive !== -1"
      :index="indexMessageActive"
      @return="indexMessageActive = -1"
    />
  </div>
</template>

<script>
export default {
  filters: {
    reduce (text) {
      if (text.length > 30) {
        return text.substring(0, 30) + '...'
      }
      return text
    }
  },
  data () {
    return {
      indexMessageActive: -1
    }
  },
  computed: {
    chats: {
      get () {
        return this.$store.state.chats
      }
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
@import '~/style/Colors.scss';
#ChatsContainer {
  position: relative;
  background-color: $white;
  overflow-y: scroll;
  box-sizing: border-box;
  height: 100%;
  .chats {
    padding-top: 5%;
    .authorContainer {
      display: grid;
      grid-template:
        'ft nm'
        'ft lmsg';
      grid-template-columns: 55px auto;
      border-bottom: 1px solid $black;
      padding-bottom: 2%;
      align-items: center;
      border-radius: 12px 12px 0 0;
      transition: all 0.3s ease;
      cursor: pointer;
      &:hover {
        background-color: transparentize($darkWhite, 0.8%);
      }
      &:active {
        background-color: transparentize($darkWhite, 0.5%);
      }
      .author {
        grid-area: nm;
      }
      .lastMessage {
        position: relative;
        grid-area: lmsg;
        font-size: 1rem;
        color: $lightBlack;
      }
      .picture {
        grid-area: ft;
        width: 40px;
        height: 40px;
        border-radius: 25%;
        border: 3px solid $black;
        text-align: center;
        i.fa-user {
          font-size: 4rem;
          color: $black;
          padding-top: 10%;
        }
      }
    }
  }
}
</style>
