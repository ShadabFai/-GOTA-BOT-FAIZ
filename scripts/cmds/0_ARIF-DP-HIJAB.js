module.exports = {
  config: {
    name: "hijabdp",
    aliases: ["hijab dp"],
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
"https://i.imgur.com/tPvqrVH.jpg","https://i.imgur.com/1M123yS.jpg","https://i.imgur.com/okpdmFt.jpg","https://i.imgur.com/VY08K5y.jpg","https://i.imgur.com/An91n1s.jpg","https://i.imgur.com/ENb9RAp.jpg","https://i.imgur.com/aAUBos2.jpg","https://i.imgur.com/GZRyD6t.jpg","https://i.imgur.com/aVOY30b.jpg","https://i.imgur.com/lh0EtJx.jpg","https://i.imgur.com/qajIAts.jpg","https://i.imgur.com/IiOJVjq.jpg","https://i.imgur.com/W8M7aML.jpg","https://i.imgur.com/EPgAZYe.jpg","https://i.imgur.com/bSVVkv4.jpg","https://i.imgur.com/pKqztui.jpg","https://i.imgur.com/p2Jhu2W.jpg","https://i.imgur.com/a0VKSjy.jpg","https://i.imgur.com/8LX1VuZ.jpg","https://i.imgur.com/7wcCIjZ.jpg","https://i.imgur.com/dRvwevs.jpg","https://i.imgur.com/zR3O2jc.jpg","https://i.imgur.com/AcUos3J.jpg","https://i.imgur.com/4VwjQvh.jpg","https://i.imgur.com/6h7BRr9.jpg",
]

let img =
link[Math.floor(Math.random()*link.length)]
message.send({
  body: '♥️ 𝐌𝐀𝐃𝐄 𝐁𝐘 𝐀𝐑𝐈𝐅 ♥️',attachment: await global.utils.getStreamFromURL(img)
})
}
     }

