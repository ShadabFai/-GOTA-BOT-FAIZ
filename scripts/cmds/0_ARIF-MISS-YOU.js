module.exports = {
 config: {
   name: "miss you",
   version: "1.0",
   author: "MR.ARIF",
   countDown: 5,
   role: 0,
   shortDescription: "no prefix",
   longDescription: "no prefix",
   category: "no prefix",
 },

 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "miss you") {
 return message.reply({
 body: "𝐈 𝐌𝐈𝐒𝐒 𝐘𝐎𝐔 𝐓𝐎 𝐌𝐀𝐑𝐈 𝐉𝐀𝐀𝐍 😇",
 attachment: await global.utils.getStreamFromURL("https://i.postimg.cc/G34p5fzq/MISS-YOU.gif")
 });
 }
 }
}
