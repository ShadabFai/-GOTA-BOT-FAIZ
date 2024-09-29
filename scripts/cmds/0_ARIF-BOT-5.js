const fs = require("fs-extra");

module.exports = {
config: {
    name: "goibot-5",
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

  var Messages = [ ];

  var rand = tl[Math.floor(Math.random() * tl.length)];
  let yan = event.body ? event.body.toLowerCase() : '';

  if (yan.indexOf("bot") === 0 ||
     (yan.indexOf("Bot") === 0 )) {
    api.setMessageReaction("♥️", event.messageID, (err) => {}, true);
    api.sendTypingIndicator(event.threadID, true);

    let userH = event.senderID;
    const userInfo = global.data.userName.get(userH) || await Users.getUserInfo(userH);
    if (event.senderID == api.getCurrentUserID()) return;

    var msg = {
      body: rand, 
      mentions: [{
        tag: userInfo,
        id: userH
      }]
    };

    setTimeout(function() {
      return api.sendMessage(msg, threadID, messageID);
    }, 2000);
  }

  if (
    yan.includes("haha") ||
    yan.includes("lmao") ||
    yan.includes("lol") ||
    yan.includes("yahoo") ||
    yan.includes("yahuu") ||
    yan.includes("agoy") ||
    yan.includes("aguy") ||
    yan.includes("😄") ||
    yan.includes("🤣") ||
    yan.includes("😆") ||
    yan.includes("😄") ||
    yan.includes("😅") ||
    yan.includes("xd")
  ) {
    return api.setMessageReaction("😆", event.messageID, (err) => {}, true);
  } 

  if (
    yan.includes("kawawa") ||
    yan.includes("sad") ||
    yan.includes("agoi") ||
    yan.includes("sakit") ||
    yan.includes("skit") ||
    yan.includes("pain") ||
    yan.includes("pighati")
  ) {
    return api.setMessageReaction("🥲", event.messageID, (err) => {}, true);
  }
};

    return api.sendMessage(msg, threadID, messageID);
  }
}
};
