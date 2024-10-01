module.exports = {
 config: {
   name: "good morning",
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
 if (event.body && event.body.toLowerCase() === "good morning") {
 return message.reply({
 body: "𝐕𝐄𝐑𝐘 𝐆𝐎𝐎𝐃 𝐌𝐎𝐑𝐍𝐈𝐍𝐆 𝐌𝐀𝐑𝐈 𝐉𝐀𝐀𝐍 😻",
 attachment: await global.utils.getStreamFromURL("https://i.postimg.cc/mZdTByph/MORNING.gif")
 });
 }
 }
}
