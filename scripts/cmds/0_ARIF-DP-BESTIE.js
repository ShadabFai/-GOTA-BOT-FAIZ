module.exports = {
  config: {
    name: "bestiedp",
    aliases: ["bestie dp"],
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
"https://i.imgur.com/8hXcECM.jpg","https://i.imgur.com/NjphF0h.jpg","https://i.imgur.com/EASfhma.jpg","https://i.imgur.com/yNk3exJ.jpg","https://i.imgur.com/BdK6B9z.jpg","https://i.imgur.com/V5BqbAY.jpg","https://i.imgur.com/G1Lq3lz.jpg","https://i.imgur.com/YyvzVNj.jpg","https://i.imgur.com/wxwxPdH.jpg","https://i.imgur.com/RyjvCQa.jpg","https://i.imgur.com/zRxQYeE.jpg","https://i.imgur.com/kAQlHXb.jpg","https://i.imgur.com/RfpAG5G.jpg","https://i.imgur.com/SsSN3pq.jpg","https://i.imgur.com/kSfiHkX.jpg","https://i.imgur.com/UFDKTO4.jpg","https://i.imgur.com/atG5oPm.jpg","https://i.imgur.com/uan61PD.jpg","https://i.imgur.com/gpxJvFD.jpg","https://i.imgur.com/82wLpEz.jpg","https://i.imgur.com/MoHOxww.jpg","https://i.imgur.com/H6z4tLC.jpg","https://i.imgur.com/TV4JJhk.jpg","https://i.imgur.com/JaT2WJ8.jpg","https://i.imgur.com/u44c981.jpg",
]

let img =
link[Math.floor(Math.random()*link.length)]
message.send({
  body: '「┏━━━━━┓\n  आरिफ-बाबू  ✧═══•❁😛❁•═══✧\n┗━━━━━┛\n\n♥️ 」',attachment: await global.utils.getStreamFromURL(img)
})
}
     }
