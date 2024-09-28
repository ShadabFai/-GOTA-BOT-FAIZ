module.exports = {
  config: {
    name: "cutedp",
    aliases: ["cute dp"],
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
"https://i.imgur.com/9lidHFg.jpg","https://i.imgur.com/qrairnJ.jpg","https://i.imgur.com/VHjp32X.jpg","https://i.imgur.com/OzGaHPf.jpg","https://i.imgur.com/VSaGosg.jpg","https://i.imgur.com/YGbFYAj.jpg","https://i.imgur.com/Rwf3mjD.jpg","https://i.imgur.com/hrs30UR.jpg","https://i.imgur.com/k6HIZGe.jpg","https://i.imgur.com/myXdpx3.jpg","https://i.imgur.com/Z5ycqK5.jpg","https://i.imgur.com/llGEE3b.jpg","https://i.imgur.com/xjXbvsO.jpg","https://i.imgur.com/o1pKJC5.jpg ",
]

let img =
link[Math.floor(Math.random()*link.length)]
message.send({
  body: '♥️ 𝐌𝐀𝐃𝐄 𝐁𝐘 𝐀𝐑𝐈𝐅 ♥️',attachment: await global.utils.getStreamFromURL(img)
})
}
     }

