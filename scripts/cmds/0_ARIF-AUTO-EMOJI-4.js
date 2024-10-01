module.exports = {
        config: {
                name: "autoreact4",
                version: "1.0",
                author: "jvb",
                countDown: 5,
                role: 0,
                shortDescription: "sarcasm",
                longDescription: "sarcasm",
                category: "reply",
        },
        onStart: async function () {},
        onChat: async function ({ api, event, client, __GLOBAL }) {
                var { threadID, messageID } = event;
                let react = event.body.toLowerCase();
                if (
                        event.body.indexOf("pair") == 0 ||
                        event.body.indexOf("Pair") == 0 ||
                        event.body.indexOf("girldp") == 0 ||
                        event.body.indexOf("Girldp") == 0 ||
                        event.body.indexOf("boydp") == 0 ||
                        event.body.indexOf("Boydp") == 0 ||
                        event.body.indexOf("meme") == 0 ||
                        event.body.indexOf("Meme") == 0 ||
                        event.body.indexOf("hijabdp") == 0 ||
                        event.body.indexOf("Hijabdp") == 0 ||
                        event.body.indexOf("cpldp") == 0 ||
                        event.body.indexOf("Cpldp") == 0 ||
                        event.body.indexOf("hotdp") == 0 ||
                        event.body.indexOf("Hotdp") == 0 ||
                        event.body.indexOf("dp") == 0 ||
                        event.body.indexOf("https") == 0 ||
                        event.body.indexOf("girlvidos") == 0 ||
                        event.body.indexOf("Shtvidos") == 0 ||
                        event.body.indexOf("Sadvidos") == 0 ||
                        event.body.indexOf("bot") == 0 ||
                        event.body.indexOf("Bot") == 0 ||
                        event.body.indexOf("jaau") == 0 ||
                        event.body.indexOf("Jaau") == 0 ||
                        event.body.indexOf("babu") == 0 ||
                        event.body.indexOf("Babu") == 0 ||
                        event.body.indexOf("arif") == 0 ||
                        event.body.indexOf("Arif") == 0 ||
                        event.body.indexOf("🥺") == 0 ||
                        event.body.indexOf("🙄") == 0 ||
                        event.body.indexOf("😴") == 0 ||
                        event.body.indexOf("😁") == 0 ||
                        event.body.indexOf("🤦") == 0 ||
                        event.body.indexOf("👍") == 0 ||
                        event.body.indexOf("♥️") == 0 ||
                        event.body.indexOf("❤️") == 0 ||
                        event.body.indexOf("🙂") == 0 ||
                        event.body.indexOf("🤗") == 0 ||
                        event.body.indexOf("😒") == 0 ||
                        event.body.indexOf("😘") == 0 ||
                        event.body.indexOf("🤔") == 0 ||
                        event.body.indexOf("😐") == 0 ||
                        event.body.indexOf("🤣") == 0 ||
                        event.body.indexOf("😂") == 0 ||
                        event.body.indexOf("🥵") == 0 ||
                        event.body.indexOf("😡") == 0 ||
                        event.body.indexOf("😈") == 0 && !bot.includes(event.senderID)
                ) {
                        var msg = {
                                body: "",
                        };
                        api.sendMessage(msg, threadID, messageID);
                        api.setMessageReaction("♥️", event.messageID, (err) => {}, true);
                }
        },
};
