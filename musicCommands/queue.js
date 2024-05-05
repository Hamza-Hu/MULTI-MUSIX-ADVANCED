
const { EmbedBuilder } = require('discord.js'); 
const { queue } = require('./play');

module.exports = {
  name: 'queue',
  description: 'Show the songs in the queue.',
  execute(message) {
    if (queue.length === 0) {
      const embed = new EmbedBuilder()
      .setAuthor({
          name: 'Attention',
          iconURL: 'https://cdn.discordapp.com/attachments/1236617830846300231/1236664209933336656/Black_White_Modern_Concert_Music_Banner_Landscape_20240505_140022_0000.png?ex=6638d4cb&is=6637834b&hm=481c2f4a138bb4e08812ad97c5adfdff2dc340e52173740297beb33db7121016&',
          url: 'https://discord.com/invite/NKZY47ZKj8'
        })
      .setDescription('**The Queue is currently empty consider adding songs.**')
      .setColor('#ff0000');
    return message.reply({ embeds: [embed] });
    }

    const embed = new EmbedBuilder()
      .setColor('#2b71ec')
     .setAuthor({
          name: 'Queue',
          iconURL: 'https://cdn.discordapp.com/attachments/1236617830846300231/1236664209933336656/Black_White_Modern_Concert_Music_Banner_Landscape_20240505_140022_0000.png?ex=6638d4cb&is=6637834b&hm=481c2f4a138bb4e08812ad97c5adfdff2dc340e52173740297beb33db7121016&',
          url: 'https://discord.com/invite/NKZY47ZKj8'
        })
      .setDescription(queue.map((song, index) => `**${index + 1}.** ${song.searchQuery}`).join('\n'));

    message.reply({ embeds: [embed] });
  },
};
