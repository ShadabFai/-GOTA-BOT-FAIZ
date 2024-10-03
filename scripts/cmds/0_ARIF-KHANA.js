module.exports = {
 config: {
   name: "khana",
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
 if (event.body && event.body.toLowerCase() === "khana") {
 return message.reply({
 body: "𝐘𝐀 𝐋𝐎 𝐁𝐀𝐁𝐔 𝐊𝐇𝐀𝐍𝐀 𝐊𝐇𝐀 𝐋𝐎 😁",
 attachment: await global.utils.getStreamFromURL("https://i.postimg.cc/qvrtCL00/KHANA.gif")
 });
 }
 }
}
