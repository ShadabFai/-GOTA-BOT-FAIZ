const axios = require('axios');
const fs = require('fs');
const path = require('path');

module.exports = {
  config: {
    name: "inf",
    aliases: ["inf2","MR ARIF"],
    author: " Mr perfect ", 
    version: "2.0",
    cooldowns: 0,
    role: 0,
    shortDescription: {
      en: ""
    },
    longDescription: {
      en: "get bot owner info"
    },
    category: "owner",
    guide: {
      en: "{p}{n}"
    }
  },
  onStart: async function ({ api, event }) {
      try {
        const loadingMessage = "𝙇𝙤𝙖𝙙𝙞𝙣𝙜......";
        await api.sendMessage(loadingMessage, event.threadID);

        const ownerInfo = {
          name: '🌺  [ 1 ]  𒁍 BOT NAME → BOT BABU
🌺  [ 2 ]  𒁍 BOT ADMIN → ARIF BABU
🌺  [ 3 ]  𒁍 BOT  PREFIX → #
🌺  [ 5 ]  𒁍  BOT RUNNING TIME → 1H
@ARIF-BABU\n🌺THANKYOU FOR USING ♥️🙂'
        };

        const videoUrl = 
["https://i.imgur.com/kSVZkHH.mp4",
"https://i.imgur.com/Ebj77tA.mp4",
"https://i.imgur.com/5y3yaQQ.mp4",
"https://i.imgur.com/kDKmrsw.mp4",
"https://i.imgur.com/gYGp3WW.mp4",
"https://i.imgur.com/qqT3YRF.mp4",
 ];
        const tmpFolderPath = path.join(__dirname, 'tmp');

        if (!fs.existsSync(tmpFolderPath)) {
          fs.mkdirSync(tmpFolderPath);
        }

        const videoResponse = await axios.get(videoUrl, { responseType: 'arraybuffer' });
        const videoPath = path.join(tmpFolderPath, 'owner_video.mp4');

        fs.writeFileSync(videoPath, Buffer.from(videoResponse.data, 'binary'));

        const response = `
╭•┄┅═══❁🌺❁═══┅┄•╮
   आरिफ़-बाबू-!!🖤
╰•┄┅═══❁🌺❁═══┅┄•╯       
𝙉𝙖𝙢𝙚♥️:${ownerInfo.name}          
𝙂𝙚𝙣𝙙𝙚𝙧♥️:${ownerInfo.gender}
𝙃𝙤𝙗𝙗𝙮♥️:${ownerInfo.hobby}
𝙍𝙚𝙡𝙚𝙖𝙩𝙞𝙤𝙣𝙨𝙝𝙞𝙥♥️:${ownerInfo.relationship}
𝙁𝙖𝙘𝙚𝙗𝙤𝙤𝙠 𝙡𝙞𝙣𝙠♥️:${ownerInfo.facebookLink}
𝙂𝙤𝙖𝙡𝙨♥️:${ownerInfo.bio} 
        `;

        await api.sendMessage({
          body: response,
          attachment: fs.createReadStream(videoPath)
        }, event.threadID);
      } catch (error) {
        console.error('Error in owner command:', error);
        api.sendMessage('An error occurred while processing the command.', event.threadID);
      }
    },
    onChat: async function({ api, event }) {
      try {
        const lowerCaseBody = event.body.toLowerCase();

        if (lowerCaseBody === "owner" || lowerCaseBody.startsWith("{p}owner")) {
          await this.onStart({ api, event });
        }
      } catch (error) {
        console.error('Error in onChat function:', error);
      }
    }
  };
