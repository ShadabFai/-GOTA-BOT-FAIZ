module.exports = {
  config: {
    name: "inf",
    version: "1.0",
    author: "joshua sy & kshitiz",
    countDown: 0, // Set countDown to 0 to trigger manually
    role: 0,
    shortDescription: "",
    longDescription: "Get user information based on UID.",
    category: "inf2",
    guide: "{pn}getinfo uid"
  },
  onStart: async function ({ api, event, args }) {
    try {
      const axios = require('axios');
      const fs = require("fs-extra");
      const request = require("request");
      const messageBody = event.body; // Get the message body

      // Check if the message body contains the command trigger
      if (messageBody.startsWith('{your_prefix}getinfo')) {
        const juswa = messageBody.replace('{your_prefix}getinfo', '').trim(); // Extract the UID

        if (!juswa) {
          return api.sendMessage("Please provide a UID as an argument.", event.threadID);
        }

        const res = await api.getUserInfo(juswa);

        if (!res || !res.name) {
          return api.sendMessage("User information not found.", event.threadID);
        }

        const gender = res.gender == 'male' ? "Male" : res.gender == 'female' ? "Female" : "Not found";
        const birthday = res.birthday == 'Không Có Dữ Liệu' ? "Not found" : "Not Found";
        const follow = res.follow == 'Không Có Dữ Liệu' ? "Not found" : "Not Found";
        const location = res.location.name == 'Không Có Dữ Liệu' ? "Not Found" : "Not Found";
        const hometown = res.hometown == 'Không Có Dữ Liệu' ? "Not found" : "Not Found";

        const callback = function() {
          return api.sendMessage({
            body: `╭•┄┅═══❁🌺❁═══┅┄•╮\n       !!आरिफ-बाबू!!🖤\n╰•┄┅═══❁🌺❁═══┅┄•╯ \n 🌺  [ 1 ]  𒁍 BOT NAME  → ${res.name}\n🌺  [ 2 ]  𒁍 FACEBOOK URL  → ${res.link}\n🌺  [ 3 ]  𒁍 BIRTHDAY  → ${birthday}\n🌺  [ 4 ]  𒁍 FOLLOWERS  → ${follow}\n🌺  [ 5 ]  𒁍 GENDER  → ${gender}\n🌺  [ 6 ]  𒁍 UID  → ${juswa}\n🌺  [ 7 ]  𒁍 LOCATION  → ${location}\n🌺  [ 4 ]  𒁍 HOMETOWN  → ${hometown}\n╭•┄┅═══❁🌺❁═══┅┄•╮\n  🌸   𝐀𝐑𝐈𝐅 𝐁𝐀𝐁𝐔  🌸\n╰•┄┅═══❁🌺❁═══┅┄•╯`,
            attachment: fs.createReadStream(__dirname + `/cache/2.jpg`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/2.jpg`), event.messageID);
        };

        return request(encodeURI(res.avatar)).pipe(fs.createWriteStream(__dirname + `/cache/2.jpg`)).on("close", callback);
      }
    } catch (err) {
      console.log(err);
      return api.sendMessage(`Error`, event.threadID);
    }
  }
};
