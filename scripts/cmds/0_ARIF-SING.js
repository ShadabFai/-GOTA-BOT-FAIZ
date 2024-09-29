 module.exports = {
  config: {
    name: "sing",
    aliases: ["music", "song"],
    version: "1.0.3",
    role: 0,
    author: "Shikaki | Base code: AceGun",
    cooldowns: 5,
    description: "Download music from Youtube",
    guide: { en: "{pn}music name" },
    category: "media",
  },
 
  onStart: async ({ event, message }) => {
    const input = event.body;
    const data = input.split(" ");
 
    if (data.length < 2) {
      return message.reply("Please specify a music name!");
    }
 
    data.shift();
    const musicName = data.join(" ");
 
    try {
      message.reply(`Searching music "${musicName}", please wait...`);
 
      const searchResult = await searchYouTubeVideo(musicName);
 
      if (!searchResult) {
        return message.reply("No music found.");
      }
 
      const musicUrl = searchResult.url;
      const musicTitle = searchResult.title;
 
      let downloadUrl;
      try {
        downloadUrl = await OutputUrl(musicUrl);
      } catch (error) {
        console.error(`Error processing ${musicUrl}:`, error);
        return message.reply("Sorry, an error occurred while processing the command.");
      }
 
      if (!downloadUrl) {
        return message.reply("No working music links found.");
      }
 
      const ytaudioDir = path.join(__dirname, '..', '..', 'ytaudio');
      fs.ensureDirSync(ytaudioDir);
      const fileName = `${Date.now()}.mp3`;
      const filePath = path.join(ytaudioDir, fileName);
 
      const file = fs.createWriteStream(filePath);
      https.get(downloadUrl, function(response) {
        response.pipe(file);
        file.on('finish', function() {
          file.close(() => {
            console.info("[DOWNLOADER] Downloaded");
 
            fs.stat(filePath, (err, stats) => {
              if (err) {
                console.error("[ERROR] File stat error:", err);
                message.reply("Sorry, an error occurred while processing the command.");
                fs.unlink(filePath, () => {});
                return;
              }
 
              if (stats.size > 26214400) {
                fs.unlink(filePath, () => {});
                message.reply("❌ | The file could not be sent because it is larger than 25MB.");
                return;
              }
 
              message.reply({
                body: `💁🏻‍♂ • Here's your music!\n\n♥ • Title: ${musicTitle}`,
                attachment: createReadStream(filePath),
              }, () => {
                fs.unlink(filePath, () => {});
              });
            });
          });
        });
      }).on('error', function(err) { 
        console.error("[ERROR]", err);
        message.reply("Sorry, an error occurred while processing the command.");
      });
    } catch (error) {
      console.error("[ERROR]", error);
      message.reply("Sorry, an error occurred while processing the command.");
    }
  },
};
Advertisement


Add Comment
Please, Sign In to add comment
Advertisement

create new paste  /  syntax languages  /  archive  /  faq  /  tools  /  night mode  /  api  /  scraping api  /  news  /  pro
privacy statement  /  cookies policy  /  terms of service /  security disclosure  /  dmca  /  report abuse  /  contact

We use cookies for various purposes including analytics. By continuing to use Pastebin, you agree to our use of cookies as described in the Cookies Policy.  OK, I Understand
Not a member of Pastebin yet?
Sign Up, it unlocks many cool features! 
