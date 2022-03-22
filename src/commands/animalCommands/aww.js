module.exports = {
  name: 'aww',
  permissions: ['sendMessages', 'embedLinks'],
  cooldown: 3,
  async execute(Yui, message, args) {
    const { KSoftClient } = require('@ksoft/api')
    const ksoft = new KSoftClient(require('../../../config.json').KSOFT_API_KEY)
    const aww = await ksoft.images.aww()
    message.channel.createMessage({
      embed: {
        author: {
          name: aww.post.title,
          url: aww.url
        },
        image: {
          url: aww.url
        },
        color: Yui.misc.getColor(null, 'default')
      }
    })
  }
}