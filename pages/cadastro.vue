<template>
  <div class="contentContainer">
    <Logo />
    <div class="hr" />
    <FormZero
      v-if="formIndex === 0"
      class="grow"
      @choice="setRole($event), increaseFormIndex()"
    />
    <FormOne
      v-else-if="formIndex === 1"
      class="grow"
      :user="role"
      @forward="
        role === 'Motorista' ? increaseFormIndex() : increaseFormIndex(2)
      "
    />
    <FormTwo
      v-else-if="formIndex === 2"
      class="grow"
      @forward="increaseFormIndex()"
    />
    <FormThree
      v-else-if="formIndex === 3"
      class="grow"
    />
  </div>
</template>

<script>
export default {
  data () {
    return {
      role: String,
      formIndex: 0
    }
  },
  methods: {
    increaseFormIndex (i = 1) {
      this.formIndex += i
    },
    setRole (role) {
      this.role = role
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/style/Colors.scss';
.contentContainer {
  background-color: $primary;
}
</style>
