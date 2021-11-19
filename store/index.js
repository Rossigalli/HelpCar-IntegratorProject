export const state = () => ({
  userName: '',
  chats: [
    {
      name: 'Daiane',
      messages: [
        {
          author: 'Daiane',
          time: new Date(),
          content: 'Oi, amanhã você vai fazer a mesma tragetória? '
        },
        {
          author: 'Daiane',
          time: new Date(),
          content: 'tenho trabalho por lá'
        }
      ]
    },
    {
      name: 'Jaine',
      messages: [
        {
          author: 'Jaine',
          time: new Date(),
          content: 'Foi muito divertido viajar com você :)'
        },
        {
          author: 'Jaine',
          time: new Date(),
          content: 'Depois te pago um açai :P'
        }
      ]
    },
    {
      name: 'Marcos',
      messages: [
        {
          author: 'Marcos',
          time: new Date(),
          content:
            'Nossa cara, a gasolina estáva um absurdo, da proxima vez vou de avião'
        }
      ]
    },
    {
      name: 'Matheus',
      messages: [
        {
          author: 'Matheus',
          time: new Date(),
          content: 'Vou passar lá umas 09h'
        },
        {
          author: 'Matheus',
          time: new Date(),
          content: 'Te espero na frente da praça, beleza?'
        }
      ]
    }
  ]
})

export const mutations = {
  setUserName (state, name) {
    state.userName = name
  },
  //
  //
  // //
  addMessage (state, message) {
    state.chats[message.index].messages.push({
      author: message.author,
      time: message.time,
      content: message.content
    })
  }
}

export const actions = {
  addMessage (context, message) {
    context.commit('addMessage', message)
  }
}
