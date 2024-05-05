const { getHistory } = require('./historyUtils');
const { EmbedBuilder } = require('discord.js');
const db = require("../mongodb");
module.exports = {
  name: 'history',
  description: 'Show the history of played songs',
  execute(message) {
    const history = getHistory();

    if (history.length === 0) {
      return message.reply('The song history is empty.');
    }

    const embed = new EmbedBuilder()
      .setColor('#2b71ec')
     .setAuthor({
          name: 'History!',
          iconURL: 'https://cdn.discordapp.com/attachments/1236617830846300231/1236664209933336656/Black_White_Modern_Concert_Music_Banner_Landscape_20240505_140022_0000.png?ex=6638d4cb&is=6637834b&hm=481c2f4a138bb4e08812ad97c5adfdff2dc340e52173740297beb33db7121016&',
          url: 'https://discord.com/invite/NKZY47ZKj8'
        })
      .setDescription(history.map((song, index) => `${index + 1}. ${song.title} - \n[${song.link}]`).join('\n'));

    message.reply({ embeds: [embed] });
  },
};


/*

  ________.__                        _____.___.___________
 /  _____/|  | _____    ____  ____   \__  |   |\__    ___/
/   \  ___|  | \__  \ _/ ___\/ __ \   /   |   |  |    |   
\    \_\  \  |__/ __ \\  \__\  ___/   \____   |  |    |   
 \______  /____(____  /\___  >___  >  / ______|  |____|   
        \/          \/     \/    \/   \/                  

╔════════════════════════════════════════════════════════════════════════╗
║                                                                        ║
║  ## Created by GlaceYT!                                                ║
║  ## Feel free to utilize any portion of the code                       ║
║  ## DISCORD :  https://discord.com/invite/xQF9f9yUEM                   ║
║  ## YouTube : https://www.youtube.com/@GlaceYt                         ║
║                                                                        ║
╚════════════════════════════════════════════════════════════════════════╝


*/
