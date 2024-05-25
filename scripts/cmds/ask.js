const axios = require('axios');

const Prefixes = [
  'ephemia'
];

module.exports = {
  config: {
    name: "chatgpt",
    version: 1.0,
    author: "ArYAN",
    role: 0,
    shortDescription: "Ask question to ChatGPT",
    longDescription: "Interact as ChatGPT provided by OpenAi. This command allows users to interact with the AI, asking various questions and receiving detailed answers.",
    category: "ai",
    guide: {
      en: "{p}ai [ question ] - Replace '{p}' with your command prefix and 'question' with your actual query.",
    },
  },
  
  onStart: async function () {},
  onChat: async function ({ api, event, args, message }) {
    try {
      const prefix = Prefixes.find((p) => event.body && event.body.toLowerCase().startsWith(p));
      if (!prefix) {
        return; // Invalid prefix, ignore the command
      }
      const prompt = event.body.substring(prefix.length).trim();
      if (!prompt) {
        await message.reply("𝑬𝑷𝑯𝑬𝑴𝑰𝑨❤\n✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏\n𝑆𝑎𝑙𝑢𝑡 𝑚𝑜𝑛 𝑐ℎ𝑜𝑢💖 𝐴𝑝𝑝𝑟𝑜𝑐ℎ𝑒 𝑒𝑡 𝑝𝑜𝑠𝑒 𝑚𝑜𝑖 𝑡𝑎 𝑞𝑢𝑒𝑠𝑡𝑖𝑜𝑛😏");
        return;
      }
      api.setMessageReaction("⏰", event.messageID, (err) => {}, true);
      const response = await axios.get(`https://himachalwale.onrender.com/api/chatgpt?prompt=${encodeURIComponent(prompt)}&apikey=©himachalwale`);
      const answer = response.data.fullResponse;
      await message.reply(answer);
      api.setMessageReaction("✅", event.messageID, (err) => {}, true);
    } catch (error) {
      console.error("Error:", error.message, error.response?.data);
      api.setMessageReaction("❌", event.messageID, (err) => {}, true);
    }
  }
};
