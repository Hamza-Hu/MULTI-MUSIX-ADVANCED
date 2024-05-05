const { joinVoiceChannel, VoiceConnectionStatus } = require('@discordjs/voice');
const { EmbedBuilder } = require('discord.js');
const { dequeue, playNextSong, playSong } = require('./play');
const { queue } = require('./play');

module.exports = {
  name: 'skip',
  description: 'Skip the current song',
  async execute(message, args) {
    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel) {
      const embed = new EmbedBuilder()
        .setColor('#FF0000')
        .setDescription('🐼 You need to be in a voice channel to use this command!');
      return message.reply({ embeds: [embed] });
    }

    const connection = joinVoiceChannel({
      channelId: voiceChannel.id,
      guildId: message.guild.id,
      adapterCreator: message.guild.voiceAdapterCreator,
    });

    if (connection.state.status === VoiceConnectionStatus.Ready) {
      if (queue.length > 0) {
        const nextSong = dequeue();
        await playSong(connection, nextSong.searchQuery, nextSong.message);

        const embed = new EmbedBuilder()
           .setColor('#2b71ec')
     .setAuthor({
          name: 'Skipped Song!',
          iconURL: 'https://cdn.discordapp.com/attachments/1236617830846300231/1236664209933336656/Black_White_Modern_Concert_Music_Banner_Landscape_20240505_140022_0000.png?ex=6638d4cb&is=6637834b&hm=481c2f4a138bb4e08812ad97c5adfdff2dc340e52173740297beb33db7121016&',
          url: 'https://discord.com/invite/NKZY47ZKj8'
        })
          .setDescription('**Let\'s move on to the next beat...**');
        return message.reply({ embeds: [embed] });
      } else {
        const embed = new EmbedBuilder()
          .setColor('#FFFF00')
          .setDescription('**❌ No songs in the queue to skip.**');
        return message.reply({ embeds: [embed] });
      }
    } else {
      const embed = new EmbedBuilder()
        .setColor('#FF0000')
        .setDescription('**❌ There is no song to skip. Queue is empty.**');
      return message.reply({ embeds: [embed] });
    }
  },
};
