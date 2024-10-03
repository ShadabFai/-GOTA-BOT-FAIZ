module.exports = {
 config: {
   name: "kiss",
   version: "1.0",
   author: "MR.FAIZ",
   countDown: 5,
   role: 0,
   shortDescription: "no prefix",
   longDescription: "no prefix",
   category: "no prefix",
 },

 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "kiss") {
 return message.reply({
 body: "𝑰 𝑲𝑰𝑺𝑺 𝒀𝑶𝑼 𝑻𝑶𝑶 𝑩𝑨𝑩𝒀 💋🙊💞",
 attachment: await global.utils.getStreamFromURL("https://i.postimg.cc/65GftY6h/KISS-YOU.gif")
 });
 }
 }
}
