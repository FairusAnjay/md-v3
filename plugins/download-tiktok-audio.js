import fetch from 'node-fetch'
import axios from "axios"
let handler = async (m, { conn, args }) => {
  if (!args[0]) throw 'Uhm...url nya mana?'
 let chat = global.db.data.chats[m.chat]
    let url = `https://api.lolhuman.xyz/api/tiktokwm?apikey=${global.lolkey}&url=${args[0]}`
let txt = `🚀 *Link:* ${await(await axios.get(`https://tinyurl.com/api-create.php?url=${args[0]}`)).data}` 
    await conn.sendFile(m.chat, `https://api.lolhuman.xyz/api/tiktokwm?apikey=${global.lolkey}&url=${args[0]}`, 'tiktokaudio.mp3', `*「 🇹 ɪ ᴋ ᴛ ᴏ ᴋ  A u d i o 」*
    ████████▀▀▀████
    ████████────▀██
    ████████──█▄──█
    ███▀▀▀██──█████
    █▀──▄▄██──█████
    █──█████──█████
    █▄──▀▀▀──▄█████
    ███▄▄▄▄▄███████
────────── ⇆ㅤ◁ㅤ ❚❚ㅤ ▷ㅤ↻ ──────────

*Judul:* 
*Type:* MP3
*📥 Ukuran File:* 
`.trim(), m, null, {
   document: { url: `https://api.lolhuman.xyz/api/tiktokwm?apikey=${global.lolkey}&url=${args[0]}`}, mimetype: 'audio/mpeg', fileName: 'tiktok.mp3', conntextInfo: {
        externalAdReply: {
            title: '▶︎ ━━━━━━━•────────────────── ', 
            body: 'Now Playing...',
            description: 'Now Playing...',
            mediaType: 2,
          thumbnail: await (await fetch('https://telegra.ph/file/dacfee004f86f482f9082.jpg')).buffer(),
         mediaUrl: sgc
        }
     }
  })
}

handler.help = ['ttmp3', 'ttmusik', 'tiktokaudio', 'tta'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(ttmp3|ttmusik|tiktokaudio|tta)$/i

export default handler
