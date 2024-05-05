
const { EmbedBuilder } = require('discord.js');
const { getPlayer } = require('./play');

module.exports = {
  name: 'volume',
  description: 'Adjust the volume of the bot',
  execute: async (message, args) => {
    const volume = parseFloat(args[0]);

    if (isNaN(volume) || volume < 0 || volume > 100) {
      return message.reply('❌ Please provide a valid volume level between 0 and 100.');
    }
    const player = getPlayer();

    if (!player) {
      return message.reply('❌ No music is currently playing.');
    }
    const resource = player.state.resource;

    if (!resource) {
      return message.reply('❌ No audio resource found.');
    }
    resource.volume.setVolume(volume / 100);

    const embed = new EmbedBuilder()
      .setColor('#2b71ec')
     .setAuthor({
          name: 'Volume Control!',
          iconURL: 'https://cdn.discordapp.com/attachments/1236617830846300231/1236664209933336656/Black_White_Modern_Concert_Music_Banner_Landscape_20240505_140022_0000.png?ex=6638d4cb&is=6637834b&hm=481c2f4a138bb4e08812ad97c5adfdff2dc340e52173740297beb33db7121016&',
          url: 'https://discord.com/invite/NKZY47ZKj8'
        })
      .setDescription(`**volume engaged to ${volume}%**`);

    message.reply({ embeds: [embed] });
  },
};
