module.exports = {
 config: {
   name: "chocolate",
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
 if (event.body && event.body.toLowerCase() === "chocolate") {
 return message.reply({
 body: "𝐁𝐀𝐁𝐔 𝐂𝐇𝐎𝐂𝐎𝐋𝐀𝐓𝐄 𝐊𝐇𝐀 𝐋𝐎 🍫",
 attachment: await global.utils.getStreamFromURL("https://i.postimg.cc/MHYPg3vW/CHOCOLATE.jpg")
 });
 }
 }
}
