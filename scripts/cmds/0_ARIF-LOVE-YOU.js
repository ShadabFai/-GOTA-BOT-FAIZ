module.exports = {
 config: {
   name: "love you",
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
 if (event.body && event.body.toLowerCase() === "love you") {
 return message.reply({
 body: "𝑰 𝑳𝑶𝑽𝑬 𝒀𝑶𝑼 𝑻𝑶𝑶 𝑴𝑬𝑹𝑰 𝑱𝑨𝑨𝑵 🙈",
 attachment: await global.utils.getStreamFromURL("https://i.postimg.cc/x8hKfDBn/LOVE-YOU.gif")
 });
 }
 }
}
