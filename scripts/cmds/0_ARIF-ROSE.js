module.exports = {
 config: {
   name: "rose",
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
 if (event.body && event.body.toLowerCase() === "rose") {
 return message.reply({
 body: "🌹𝐘𝐄 𝐋𝐎 𝐁𝐀𝐁𝐘 𝐑𝐎𝐒𝐄 𝐋𝐎🌹",
 attachment: await global.utils.getStreamFromURL("https://i.postimg.cc/fTZq2Gf9/ROSE.gif")
 });
 }
 }
}
