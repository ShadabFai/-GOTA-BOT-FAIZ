module.exports = {
        config: {
                name: "autoreact2",
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
                        event.body.indexOf("good morning") == 0 ||
                        event.body.indexOf("Good morning") == 0 ||
                        event.body.indexOf("good night") == 0 ||
                        event.body.indexOf("Good night") == 0 ||
                        event.body.indexOf("love you") == 0 ||
                        event.body.indexOf("kiss you") == 0 ||
                        event.body.indexOf("Kiss you") == 0 ||
                        event.body.indexOf("hello") == 0 ||
                        event.body.indexOf("Hello") == 0 ||
                        event.body.indexOf("bye") == 0 ||
                        event.body.indexOf("Bye") == 0 ||
                        event.body.indexOf("khana") == 0 ||
                        event.body.indexOf("Khana") == 0 ||
                        event.body.indexOf("nasta") == 0 ||
                        event.body.indexOf("kya") == 0 ||
                        event.body.indexOf("Kya") == 0 ||
                        event.body.indexOf("🫣") == 0 ||
                        event.body.indexOf("😘") == 0 ||
                        event.body.indexOf("Sadvidos") == 0 ||
                        event.body.indexOf("🥰") == 0 ||
                        event.body.indexOf("😍") == 0 ||
                        event.body.indexOf("🥳") == 0 ||
                        event.body.indexOf("😅") == 0 ||
                        event.body.indexOf("😆") == 0 ||
                        event.body.indexOf("😁") == 0 ||
                        event.body.indexOf("😏") == 0 ||
                        event.body.indexOf("🤬") == 0 ||
                        event.body.indexOf("🧐") == 0 ||
                        event.body.indexOf("😑") == 0 ||
                        event.body.indexOf("😩") == 0 ||
                        event.body.indexOf("😱") == 0 ||
                        event.body.indexOf("🥱") == 0 ||
                        event.body.indexOf("😮") == 0 ||
                        event.body.indexOf("😈") == 0 ||
                        event.body.indexOf("😺") == 0 ||
                        event.body.indexOf("😹") == 0 ||
                        event.body.indexOf("😾") == 0 ||
                        event.body.indexOf("a") == 0 ||
                        event.body.indexOf("b") == 0 ||
                        event.body.indexOf("c") == 0 ||
                        event.body.indexOf("d") == 0 ||
                        event.body.indexOf("e") == 0 ||
                        event.body.indexOf("f") == 0 ||
                        event.body.indexOf("g") == 0 ||
                        event.body.indexOf("h") == 0 ||
                        event.body.indexOf("i") == 0 && !bot.includes(event.senderID)
                ) {
                        var msg = {
                                body: "",
                        };
                        api.sendMessage(msg, threadID, messageID);
                        api.setMessageReaction("♥️", event.messageID, (err) => {}, true);
                }
        },
};
