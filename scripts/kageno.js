module.exports = {
	config: {
		name: "cid kageno",
		aliases: ["cid","kageno"],
		version: "1.0",
		author: "ʬɸʬ Shïsûį Dånïęl ʬɸʬ", // do not change this credits
		countDown: 5,
		role: 0,
		shortDescription: "send you pic of Shisui",
		longDescription: "sends u pic of Shisui",
		category: "meme",
		guide: "{pn}"
	},

	onStart: async function ({ message }) {
	 var link = [ 
"https://i.ibb.co/mRfT6ZH/image.jpg",
"https://i.ibb.co/BZx5S7N/image.jpg",
"https://i.ibb.co/PhTXc7x/image.jp",
  ]
let img = link[Math.floor(Math.random()*link.length)]
message.send({
  body: '🎀✨𝐔𝐂𝐇𝐈𝐖𝐀 𝐈𝐓𝐀𝐂𝐇𝐈✨🎀',attachment: await global.utils.getStreamFromURL(img)
})
}
  }
