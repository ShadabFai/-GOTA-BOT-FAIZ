module.exports = {
 config: {
   name: "good night",
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
 if (event.body && event.body.toLowerCase() === "good night") {
 return message.reply({
 body: "𝐆𝐎𝐎𝐃 𝐍𝐈𝐆𝐇𝐓 😴 𝐒𝐖𝐄𝐄𝐓 𝐃𝐑𝐄𝐀𝐌 😇",
 attachment: await global.utils.getStreamFromURL("https://i.postimg.cc/QMbcMzWR/NIGHT.gif")
 });
 }
 }
}
