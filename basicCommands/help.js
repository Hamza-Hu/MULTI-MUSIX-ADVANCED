const { EmbedBuilder, ActionRowBuilder, ButtonBuilder } = require('discord.js');
const { ButtonStyle } = require('discord.js');
const db = require("../mongodb");
module.exports = {
  name: 'help',
  aliases: ['hlp', 'h'],
  description: 'Shows a list of available commands',
  execute(message, args) {
    const botUser = message.client.user;
    const botPing = Date.now() - message.createdTimestamp;
    const serverCount = message.client.guilds.cache.size;
    const embed = new EmbedBuilder()
      .setColor('#2b71ec')
      .setAuthor({
        name: 'Im here to Help!',
        iconURL: 'https://cdn.discordapp.com/attachments/1236617830846300231/1236664209933336656/Black_White_Modern_Concert_Music_Banner_Landscape_20240505_140022_0000.png?ex=6638d4cb&is=6637834b&hm=481c2f4a138bb4e08812ad97c5adfdff2dc340e52173740297beb33db7121016&', 
        url: 'https://discord.gg/NKZY47ZKj8'
    })
     
      .setDescription(`__**STATS :**__\n\n> **📊 Bot in servers:** ${serverCount}\n> **🟢 Bot Ping:** ${botPing}ms\n> **👑 Dev By [MRAKCHI](https://discord.com/invite/NKZY47ZKj8)**\n\n__**COMMANDS :**__ `)
      .addFields(
        // Basic commands category
        {
          name: '▶️  Basic',
          value: '`avatar`, `owner`, `support`, `invite`, `userinfo`',
          inline: true,
        },
        // Music commands category
        {
          name: '▶️  Music',
          value: '`play`, `stop`, `history`,`volume`,`pause`,`resume`,`247`',
          inline: true,
        },
        //fun category
//        {
   //       name: '▶️  Fun',
  //        value: ' `ascii`, `joke`, `meme`, `roll`',
     //     inline: true,
  //      },
        //image category
    //    {
  //        name: '▶️  Image',
    //      value: '`cat`, `dog`',
   //       inline: true,
    //    },
        //anime category
       // {
     //     name: '▶️  Anime',
      //    value: '`<prefix>animecommands for more info`',
      //    inline: true,
     //   },
        // Utility commands category
        {
          name: '▶️  Utility',
          value: '`kick`, `ban`, `serverinfo`,`userinfo`, `clear`',
          inline: true,
        }
      )
      .setThumbnail(botUser.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
      .setImage(`https://cdn.discordapp.com/attachments/1170652474563117138/1224660177039396876/MULTI_MUSIC_v1.5.png?ex=661e4cab&is=660bd7ab&hm=f7a542462fabaf9c1530ece5aa72597cff3ac032876bba46df5ddba7e122ea99&`);

    const button1 = new ButtonBuilder()
      .setLabel('YouTube')
      .setURL('https://youtube.com/@mrakchi26?si=XmXo98E28ibZt9m1')
      .setStyle(ButtonStyle.Link);

    const button2 = new ButtonBuilder()
      .setLabel('Discord')
      .setURL('https://discord.com/invite/NKZY47ZKj8')
      .setStyle(ButtonStyle.Link);

   // const button3 = new ButtonBuilder()
   //   .setLabel('Code')
   //   .setURL('https://replit.com/@BEASTGAMERS1/MULTI-MUSIC-BOT-v200?v=1')
  //    .setStyle(ButtonStyle.Link);
      
    const row = new ActionRowBuilder()
      .addComponents(button1, button2);
    
    message.reply({ embeds: [embed], components: [row] });
  },
};
