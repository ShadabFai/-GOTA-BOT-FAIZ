module.exports = {
  config: {
    name: "catdp",
    aliases: ["cat dp"],
    version: "1.0",
    author: "AceGun",
    countDown: 5,
    role: 0,
    shortDescription: "send you a girl photos",
    longDescription: "",
    category: "media",
    guide: "{pn}"
  },

  onStart: async function ({ message }) {
   var link = [
"https://i.imgur.com/bOQqdIr.jpg","https://i.imgur.com/Umq74II.jpg","https://i.imgur.com/bfEgTqB.jpg","https://i.imgur.com/0PhjK7L.jpg","https://i.imgur.com/GR2KvL7.jpg","https://i.imgur.com/hvwzCww.jpg","https://i.imgur.com/iNBCDOK.jpg","https://i.imgur.com/3BYioFN.jpg","https://i.imgur.com/zejRjZY.jpg","https://i.imgur.com/JnF919x.jpg","https://i.imgur.com/ljkj5L5.jpg","https://i.imgur.com/Ug2sZzn.jpg","https://i.imgur.com/JMhp1m3.jpg","https://i.imgur.com/PBVwm9R.jpg","https://i.imgur.com/9CwFF86.jpg","https://i.imgur.com/fxpITsu.jpg","https://i.imgur.com/iqgmoD9.jpg","https://i.imgur.com/DNRwvd9.jpg","https://i.imgur.com/8EwSfzv.jpg","https://i.imgur.com/fzpSQJ0.jpg","https://i.imgur.com/TTOmdkt.jpg","https://i.imgur.com/DZydVnQ.jpg","https://i.imgur.com/fTBg09P.jpg","https://i.imgur.com/siFOe2A.jpg","https://i.imgur.com/b2gj9OR.jpg","https://i.imgur.com/lFlzOiX.jpg","https://i.imgur.com/uYUYGG4.jpg","https://i.imgur.com/1AGB66N.jpg","https://i.imgur.com/LpFIQ0n.jpg",
]

let img =
link[Math.floor(Math.random()*link.length)]
message.send({
  body: '♥️ 𝐌𝐀𝐃𝐄 𝐁𝐘 𝐀𝐑𝐈𝐅 ♥️',attachment: await global.utils.getStreamFromURL(img)
})
}
     }

