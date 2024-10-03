const fs = require("fs-extra");
const axios = require("axios");

// Function to generate random message
function generateRandomMessage(messages) {
  const randomIndex = Math.floor(Math.random() * messages.length);
  return messages[randomIndex];
}

module.exports = {
  config: {
    name: "good morning",
    version: "1.0",
    author: "FAIZ ANSARI",
    countDown: 5,
    role: 0,
    shortDescription: "no-prefix",
    longDescription: "Bot aapko hindi mein jawab dega",
    category: "non-prefix",
    guide: {
      en: "{p}{n}",
    }
  },

  onStart: async function ({ }) { },

  onChat: async function ({ api, event, args, Threads, userData }) {
    const { threadID, senderID } = event;
    // Fetch sender details
    const senderInfo = await api.getUserInfo(senderID);
    // Get sender name from sender details
    const senderName = senderInfo[senderID].name;

    // Trigger words and their corresponding replies and GIF links
    const triggers = {
      "good morning": {
        options: ["gm", "GM", "good morning", "gud morning"],
        gifLinks: [
          "https://i.ibb.co/hD1J9Zd/image.gif",
          "https://i.ibb.co/0GqpG3N/image.gif",
          "https://i.ibb.co/f2BBxcP/image.gif",

"https://i.ibb.co/8mDJWgS/image.gif",

"https://i.ibb.co/dGfbFyQ/image.gif",

"https://i.ibb.co/pRqb3Y5/image.gif",          
          // Add more GIF links here as per your requirement
        ],
        replies: ["शुभ प्रभात, " + senderName + " बाबू", "VERY GOOD MORNING, " + senderName + " बाबू", "गुड मॉर्निंग, " + senderName + " बाबू"]
      }
    };

    // Check if message body contains any trigger words
    for (const trigger in triggers) {
      if (triggers[trigger].options.some(option => new RegExp(`\\b${option}\\b`, 'i').test(event.body))) {
        const { gifLinks, replies } = triggers[trigger];

        // Generate random GIF link
        const gifLink = gifLinks[Math.floor(Math.random() * gifLinks.length)];
        // Generate random message
        const replyMessage = generateRandomMessage(replies);

        try {
          // Fetch GIF data
          const gifData = await axios.get(gifLink, { responseType: "stream" });
          // Send GIF and message as attachments
          api.sendMessage({
            attachment: gifData.data,
            body: replyMessage,
            mentions: [{ tag: senderID, id: senderID }]
          }, threadID);
        } catch (error) {
          console.error("GIF fetch karne mein error:", error);
        }

        return; // Message bhejne ke baad loop se bahar nikalna
      }
    }

    // Agar koi trigger word nahi milta, to kuch nahi karna
  }
};
