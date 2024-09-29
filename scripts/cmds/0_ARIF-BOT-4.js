const fs = require("fs-extra");

module.exports = {
config: {
    name: "goibot-4",
    version: "1.0",
    author: "Samir",
    countDown: 5,
    role: 0,
    shortDescription: "no-prefix",
    longDescription: "Bot Will Reply You In Engish/Bangla Language",
    category: "no prefix",
    guide: {
      en: "{p}{n}",
    }
  },

 onStart: async function ({  }) { },
  onChat: async function ({ api, event, args, Threads, userData }) {

  var { threadID, messageID, senderID } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Kolkata").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;

  var Messages = ["जी सर 🥺", "हा बॉस बोलो 🤗", "बॉस क्या हुआ 🤔", "बॉस में मस्ती कर रहा हूँ 🙂", "बॉस खान हुआ 🙄","बॉस मुझे छोड़ कर मत जाओ 🥺", "बॉस मुझे लड़कियां परेशान कर रही हैं 🥺", "जी बॉस 🙂♥️", "मेरा बॉस आ गया 🥺" ] ;

    var rand = Messages[Math.floor(Math.random() * Messages.length)]

         if ((event.body.toLowerCase() == "❤️") || (event.body.toLowerCase() == "🧡") || (event.body.toLowerCase() == "💛") || (event.body.toLowerCase() == "💚")) {
     return api.sendMessage("आपको मुझमें पर दिल आ गया क्या 🥺", threadID);
   };

 if ((event.body.toLowerCase() == "💙") || (event.body.toLowerCase() == "💜") || (event.body.toLowerCase() == "♥️") || (event.body.toLowerCase() == "🖤")) {
     return api.sendMessage("आपको मुझमें पर दिल आ गया क्या 🥺", 
     threadID);
           };

  if (event.body.indexOf("🙂") == 0 || (event.body.toLowerCase() == "🫣🫣") || (event.body.indexOf("🫣") == 0)) {
    var msg = {
      body: ` ${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  }
}
};
