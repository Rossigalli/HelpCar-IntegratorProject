export { default as Sticker } from '../..\\components\\welcome\\Sticker.vue'
export { default as FormOne } from '../..\\components\\cadastro\\FormOne.vue'
export { default as FormThree } from '../..\\components\\cadastro\\FormThree.vue'
export { default as FormTwo } from '../..\\components\\cadastro\\FormTwo.vue'
export { default as FormZero } from '../..\\components\\cadastro\\FormZero.vue'
export { default as ForwardButton } from '../..\\components\\cadastro\\ForwardButton.vue'
export { default as Chat } from '../..\\components\\home\\Chat.vue'
export { default as Map } from '../..\\components\\home\\Map.vue'
export { default as Menu } from '../..\\components\\home\\Menu.vue'
export { default as Message } from '../..\\components\\home\\Message.vue'
export { default as Logo } from '../..\\components\\Logo.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
