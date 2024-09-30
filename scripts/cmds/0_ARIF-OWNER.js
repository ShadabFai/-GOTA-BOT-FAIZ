const axios = require('axios');
const fs = require('fs');
const path = require('path');

module.exports = {
  config: {
    name: "owner",
    aliases: ["inf","inf2"],
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
          name: 'ARIF BABU',
          gender: 'BOY ♥️🙂',
          hobby: 'HAPPY LIFE',
          relationship: 'SINGLE LIFE 🥺',
          facebookLink: '[ +91 9336xxxx36 ]',
          bio: 'TO MAKE FUN'
        };

        const videoUrl = 
["https://imgur.com/a/b42TynO.mp4",
"https://imgur.com/a/0z9I1gp.mp4",
"https://imgur.com/a/fZb9654.mp4",
"https://imgur.com/a/mEGnMIT.mp4",
"https://imgur.com/a/jrDqhby.mp4",
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
       आरिफ़-बाबू!!🖤
      ╰•┄┅═══❁🌺  ❁═══┅┄•╯      
🌺  [ 1 ]  𒁍 OWNER NAME → ${ownerInfo.name}          
🌺  [ 2 ]  𒁍 GENDER → ${ownerInfo.gender}
🌺  [ 3 ]  𒁍 HOBBY → ${ownerInfo.hobby}
🌺  [ 4 ]  𒁍 RELATIONSHIP → ${ownerInfo.relationship}
🌺  [ 5 ]  𒁍 OWNER NUMBER →${ownerInfo.facebookLink}
         ╭•┄┅═══❁🌺❁═══┅┄•╮
          🌸 𝐀𝐑𝐈𝐅-𝐁𝐀𝐁𝐔 🌸
         ╰•┄┅═══❁🌺❁═══┅┄•╯
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
