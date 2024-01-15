const Discord = require("discord.js");

module.exports = async (client, interaction, args) => {
  client.embed(
    {
      title: `📘・Owner information`,
      desc: `____________________________`,
      thumbnail: client.user.avatarURL({ dynamic: true, size: 1024 }),
      fields: [
        {
          name: "👑┆Owner name",
          value: `AmiRobin`,
          inline: true,
        },
        {
          name: "🏷┆Discord tag",
          value: `</amirobin>`,
          inline: true,
        },
        {
          name: "🏢┆Organization",
          value: `AmiRobin Development`,
          inline: true,
        },
      ],
      type: "editreply",
    },
    interaction
  );
};
