<template>
  <div v-if="isDone" class="container">
    <Menu v-if="appArea === 1" class="grow" />
    <Map v-show="appArea === 2" class="grow" />
    <Chat v-if="appArea === 3" class="grow" />
    <div class="menu">
      <i
        class="fas fa-bars"
        :class="{ active: appArea === 1 }"
        @click.stop.prevent="setAppArea(1)"
      />
      <i
        class="fas fa-car"
        :class="{ active: appArea === 2 }"
        @click.stop.prevent="setAppArea(2)"
      />
      <i
        class="fas fa-comments"
        :class="{ active: appArea === 3 }"
        @click.stop.prevent="setAppArea(3)"
      />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      appArea: 1,
      isDone: false
    }
  },
  created () {
    if (this.$store.state.userName === '') {
      this.$router.push('/login')
    } else {
      this.isDone = true
    }
  },
  methods: {
    setAppArea (index) {
      this.appArea = index
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/style/Colors.scss';
.container {
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  .menu {
    height: 10%;
    width: 100%;
    background-color: $primary;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: visible;
    i {
      font-size: 2.6rem;
      color: $white;
      text-shadow: 0px 3px $darkWhite;
      padding-bottom: 3px;
      transition: all 0.3s ease;
      margin: 0 10%;
      cursor: pointer;
      &:hover {
        color: $darkWhite;
        text-shadow: 0 3px darken($darkWhite, 15%);
      }
      &.active {
        color: $darkWhite;
        transform: translateY(3px);
        text-shadow: 0 0 darken($darkWhite, 15%);
      }
    }
  }
}
</style>
