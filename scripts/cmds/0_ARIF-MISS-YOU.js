module.exports = {
 config: {
   name: "miss you",
   version: "1.0",
   author: "MR.AYAN",
   countDown: 5,
   role: 0,
   shortDescription: "no prefix",
   longDescription: "no prefix",
   category: "no prefix",
 },

 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "miss you") ||
event.body.toLowerCase() === "MISS YOU") ||
event.body.toLowerCase() === "MISS") ||
event.body.toLowerCase() === "Miss") ||event.body.toLowerCase() === "miss") {
 return message.reply({
 body: "𝐈 𝐌𝐈𝐒𝐒 𝐘𝐎𝐔 𝐓𝐎 𝐌𝐀𝐑𝐈 𝐉𝐀𝐀𝐍 😇",
attachment: await global.utils.getStreamFromURL("https://i.postimg.cc/4yjb0dqG/6341768ed4023a1d6dae3c8a8ed60aea.gif")
 });
 }
 }
}
