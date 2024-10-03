module.exports = {
  config: {
    name: "shtvidos",
    aliases: ["Shtvidos"],
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
"https://drive.google.com/uc?id=17P7ECocV2NL0x8IxGlq-IBU7A5uKqXdF",
    "https://drive.google.com/uc?id=18N94lbJ6Qy0AZq3GqE34uR1Y1qkOfscO",
    "https://drive.google.com/uc?id=176WOlo68ZeCg-bmPhrbMLRd4leJIHsX5",
    "https://drive.google.com/uc?id=17dmJIY7oIW4eAfC4J9n8F2paDb__tfGM",
    "https://drive.google.com/uc?id=187g1TeB8-XI2CF7SDHPsCyCBAHwoV0Tk",
    "https://drive.google.com/uc?id=17l74M8Ggk1FKUWuzIlS2lOjTayoLl81N",
    "https://drive.google.com/uc?id=17XqS9tXP1MRmHnO8rIVDUp4qXRNO9SOQ",
    "https://drive.google.com/uc?id=17YohbaTJGTF6FWPOp9aggErLONqy7PPm",
    "https://drive.google.com/uc?id=18FcBD5KB_4jLkvU191q-_2S3n33zdGxJ",
    "https://drive.google.com/uc?id=182o97bU8v5q606zLN9X9zofRn3XRFvlf",
    "https://drive.google.com/uc?id=18NXfCyUMGs5TfBBEG6ecLnbP4thU2Hzx",
    "https://drive.google.com/uc?id=17_RkxM3SNyd_scC40JKqM82bOYx4SU0W",
    "https://drive.google.com/uc?id=17kfvz6nEvUamKjOOC_d7oPEcTTRIqIrk",
    "https://drive.google.com/uc?id=178AwM_bd_SNXXNwctopfHbRfnSXzMa3N",
    "https://drive.google.com/uc?id=18J9RO4II9ls-kRTF-ZYGykz5bTCNBHar",
    "https://drive.google.com/uc?id=17rPG9fxtHzlAUNktWq4P2y0gkFUQN4t0",
    "https://drive.google.com/uc?id=18ERhO63_MuddxhGpojMFLOT4EiKF7qhN",
    "https://drive.google.com/uc?id=185k3xZQmascUHwmWpVFi4zK6MVImnuN2",
    "https://drive.google.com/uc?id=181DIeY17BXscDy0d5vuWHfqDDcDzMk5j",
    "https://drive.google.com/uc?id=18JETLEMAOS1S4cs1oG08sZb7UNcBq_Gx",
    "https://drive.google.com/uc?id=182Ne-mp4Df4bjoHSSkTroHmbOnLZkFRz",
    "https://drive.google.com/uc?id=18E7L8Kf_O0odUJA2DDWrQAe012F6a4YY",
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
        body: '♥️ 𝐌𝐀𝐃𝐄 𝐁𝐘 𝐅𝐀𝐈𝐙 ♥️',
        attachment: await global.utils.getStreamFromURL(randomVideo),
      });

      setTimeout(() => {
        api.unsendMessage(loadingMessage.messageID);
      }, 5000);
    }
  },
};
