module.exports = {
  config: {
    name: "funny",
    aliases: ["Funny"],
    version: "1.0",
    author: "kshitiz",
    countDown: 20,
    role: 0,
    shortDescription: "",
    longDescription: "get video to increase your sadness",
    category: "fun",
    guide: "{p}{n}",
  },

  sentVideos: [],

  onStart: async function ({ api, event, message }) {
    const senderID = event.senderID;

    const loadingMessage = await message.reply({
      body: "𝐥𝐨𝐚𝐝𝐢𝐧𝐠... 😈",
    });

    const link = [ 
"https://docs.google.com/uc?export=download&id=1MOxlzCFZmdpB9_ASBRC2u6qK4cJm6SSq","https://docs.google.com/uc?export=download&id=1Le21c01Nf4KvvVkmUDUXHjlvoE5klLuF","https://docs.google.com/uc?export=download&id=1LftH1XAeQ-go45loLGucpl24ohiERb5F","https://docs.google.com/uc?export=download&id=1Lg4JrLsYrazgZVIulaL7SGXFQRz5pFHo","https://docs.google.com/uc?export=download&id=1Lh9n6fY4CJe9BqD-Fr4Ciez_-kaImDOr","https://docs.google.com/uc?export=download&id=1LmTs9XboyC4-UJWCc0gQBJx0xK_yKqhE","https://docs.google.com/uc?export=download&id=1LnH_AZv9sv4MK7wpSwYGkTV5_PY1wmtL","https://docs.google.com/uc?export=download&id=1Ls9gi_xgZBHoM479iZTJyOiyeaVY6SE3","https://docs.google.com/uc?export=download&id=1LvvUQ4nRFs4YMCavsnfjJGfMzuv5Rk99","https://docs.google.com/uc?export=download&id=1LzTjZ0d-UDo-fFM7RnngGBclkJXUXr6W","https://docs.google.com/uc?export=download&id=1M5mt9JuBlARvg0V2ybnvOfhKlBhjPUL1","https://docs.google.com/uc?export=download&id=1M78rDkMe8nFyZY57l6rvAjiS-PffPcz4","https://docs.google.com/uc?export=download&id=1MEmPnEl8sn0HOfdHaGpgMgNy0e61AACy","https://docs.google.com/uc?export=download&id=1MLNy3TtvSFJuWqH15OerN8UP_5fHYqVu","https://docs.google.com/uc?export=download&id=1MOpx20NAxIaelGhQsbH_2PfRdBW3wEQp","https://docs.google.com/uc?export=download&id=1MVIPwHn-JoOTCEaVZeUhO1qDvyl6l-80","https://docs.google.com/uc?export=download&id=1MVZJEsI_mnnIasl-4F8Sb7BkcmI3uli_","https://docs.google.com/uc?export=download&id=1MaecrQRj_OrvWi-wYKPrDRzhBwD7ubvp",
];

    const availableVideos = link.filter(video => !this.sentVideos.includes(video));

    if (availableVideos.length === 0) {
      this.sentVideos = [ ];
    }

    const randomIndex = Math.floor(Math.random() * availableVideos.length);
    const randomVideo = availableVideos[randomIndex];

    this.sentVideos.push(randomVideo);

    if (senderID !== null) {
      message.reply({
        body: '♥️ 𝐌𝐀𝐃𝐄 𝐁𝐘 𝐀𝐑𝐈𝐅 ♥️',
        attachment: await global.utils.getStreamFromURL(randomVideo),
      });

      setTimeout(() => {
        api.unsendMessage(loadingMessage.messageID);
      }, 5000);
    }
  },
};
