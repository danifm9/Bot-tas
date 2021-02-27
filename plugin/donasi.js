let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Indosat [085875579007]
│ • Dana [085875579007]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6285875579007
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
