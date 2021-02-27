let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
╠═〘 INFO BOT 〙 ═
╠➥ Dibuat dengan bahasa javascript via NodeJs
╠➥ Rec: Dani
╠➥ Script: @Nurotomo
║
╠➥ Github: https://github.com/Arya274/Arya-DN
╠➥ Instagram: @jessdanijr_
╠➥ YouTube: Dani FM
║
╠═〘 Thanks To 〙 ═
╠➥ Nurotomo
╠➥ MfarelS
╠➥ ST4RZ
╠➥ Dani
╠➥ Dan kawan yang lain :')
║
╠═〘 DONASI 〙 ═
╠➥ Indosat: 0858 - 7557 - 9007
║
║>Request? Wa.me/6285875579007
║
╠═〘 NfQ BOT 〙 ═
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['info']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

