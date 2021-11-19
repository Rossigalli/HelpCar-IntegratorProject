<template>
  <div
    id="MessageContainer"
    @keyup.enter="
      sendMessage({
        author: 'eu',
        time: new Date(),
        content: newMessage,
        index: index
      }),
      (newMessage = '')
    "
  >
    <div class="topBar padDefault">
      <i class="fas fa-arrow-left backBtn" @click="$emit('return')" />
      <div class="picture">
        <i class="far fa-user" />
      </div>
      <p class="authorName">
        {{ chats[index].name }}
      </p>
      <p class="status">
        Offline
      </p>
    </div>
    <div class="padDefault contentArea">
      <div
        v-for="(message, id) in chats[index].messages"
        :key="id"
        class="message"
        :class="{ myMessage: message.author === 'eu' }"
      >
        <p class="content">
          {{ message.content }}
        </p>
        <p class="time">
          {{ message.time.getHours() }}:{{ message.time.getMinutes() }}
        </p>
      </div>
    </div>
    <div class="sendMessage padDefault">
      <input
        id="newMessage"
        v-model="newMessage"
        type="text"
        name="newMessage"
        placeholder="Nova Mensagem"
        autocomplete="off"
        spellcheck="false"
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    index: {
      type: Number,
      default: 0,
      require: true
    }
  },
  data () {
    return {
      newMessage: ''
    }
  },
  computed: {
    chats: {
      get () {
        return this.$store.state.chats
      }
    }
  },
  methods: {
    sendMessage (message) {
      if (message.content.trim() !== '') {
        this.$store.dispatch('addMessage', message)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/style/Colors.scss';
#MessageContainer {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: $white;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  .topBar {
    display: grid;
    grid-template:
      'back pf nm'
      'back pf sts';
    grid-template-columns: 25px 55px auto;
    align-items: center;
    background-color: $primary;
    padding-top: 10%;
    padding-bottom: 5%;
    .backBtn {
      grid-area: back;
      font-size: 2rem;
      margin-right: 5%;
    }
    .picture {
      grid-area: pf;
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
    .authorName {
      grid-area: nm;
      line-height: 15px;
    }
    .status {
      grid-area: sts;
      font-size: 1.2rem;
    }
  }
  .contentArea {
    overflow-y: scroll;
    box-sizing: border-box;
    height: 100%;
    .message {
      width: fit-content;
      max-width: 80%;
      background: transparentize($primary, 0.8%);
      margin-top: 5%;
      word-wrap: break-word;
      padding: 10px;
      overflow: visible;
      border-radius: 12px;
      &.myMessage {
        background: transparentize($black, 0.8%);
        margin-left: 100%;
        transform: translateX(-100%);
      }
      .content {
        font-size: 1.3rem;
      }
      .time {
        position: relative;
        text-align: right;
        transform: translateY(50%);
        font-size: 1.1rem;
      }
    }
  }
  .sendMessage {
    input {
      color: $black;
      height: 30px;
    }
  }
}
</style>
