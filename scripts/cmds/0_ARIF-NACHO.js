module.exports = {
 config: {
   name: "Nacho",
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
 if (event.body && event.body.toLowerCase() === "Nacho") {
 return message.reply({
 body: "𝐍𝐀𝐂𝐇𝐎 𝐌𝐄𝐑𝐈 𝐉𝐀𝐀𝐍 𝐍𝐀𝐂𝐇𝐎 🙂🤟 ❜",
 attachment: await global.utils.getStreamFromURL("https://i.postimg.cc/sg9vsZkX/DANCE.gif")
 });
 }
 }
}
