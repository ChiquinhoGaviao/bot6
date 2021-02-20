let handler = function (m) {
  this.sendContact(m.chat, '4184537851', 'Chiquinho', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
