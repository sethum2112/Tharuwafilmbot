const os = require("os");
const packageJson = require("./package.json"); // Get package details

module.exports = {
    BOTNAME:"© 𝚃𝙷𝙰𝚁𝚁𝚄𝚆𝙰 𝙱𝙾𝚈 💚",
    OWNERNAME:"MR.𝚃𝙷𝙰𝚁𝚄𝚂𝙷𝙰",
    OWNERNUMBER:"94762862143",
    FOOTER:`
> 𝙵𝙸𝙻𝙼 𝚆𝙾𝚁𝙻𝙳
> 𝙵𝙸𝙻𝙼 𝚆𝙾𝚁𝙻𝙳 | 𝚄𝙿𝙻𝙾𝙰𝙳 𝙱𝚈 𝚃𝙷𝙰𝚁𝚄𝚂𝙷𝙰.
    `.trim(),
//====================menu=================================
    MENUMSG: function (pushname, runtime,config) {
        return `
🧚‍♂️⃟🩵 © 𝙏𝙃𝘼𝙍𝙐𝙒𝘼 𝘽𝙊𝙏 ❤️⚜.

┏━━━━❮ 📆 ᴛᴏ ᴅᴀʏ 📆❯━━━━
┃
┃ 📅 Date Today : ${new Date().toLocaleDateString("en-GB", {
        timeZone: "Asia/Colombo",
      })}
┃ ⌚ Time Now : ${new Date().toLocaleTimeString("en-GB", {
        timeZone: "Asia/Colombo",
      })}
┃
┗━━━━━━━━━━━━━━━
┏━━━━❮📝 ᴅᴇᴛᴇʟᴇꜱ 📝❯━━━
┃🗣️ 𝚄𝚜𝚎𝚛 : ${pushname}
┃🤖 𝙱𝚘𝚝 : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ V${packageJson.version}
┃📜 𝙿𝚛𝚎𝚏𝚒𝚡 : ${config.PREFIX}
┃📚 𝚅𝚎𝚛𝚜𝚒𝚘𝚗 : ${packageJson.version}
┃📝 𝙿𝚕𝚊𝚝𝚏𝚘𝚛𝚖 : ${os.platform()}
┃📟 𝙷𝚘𝚜𝚝 : ${os.hostname()}
┃🤴𝙾𝚠𝚗𝚎𝚛 : ✭𝗧𝗛𝗔𝗥𝗨𝗦𝗛𝗔✭
┃🔊 𝙼𝚘𝚍𝚎 : ${config.MODE}
┃🍁 𝚄𝚙𝚝𝚒𝚖𝚎 : ${runtime(process.uptime())}
┃✨𝙼𝚎𝚖 : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(
        2
      )}MB / ${Math.round(os.totalmem() / 1024 / 1024)}MB
┗━━━━━━━━━━━━━━━
> Qᴜᴇᴇɴ ᴀɴᴊᴜ ᴍᴅ ᴄᴛᴇᴀᴛᴇ ʙʏ ᴍʀ ʀᴀꜱʜᴍɪᴋᴀ .....
> © 𝐌𝐑 𝙏𝙃𝘼𝙍𝙐𝙒𝘼 𝐎𝐅𝐂 𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐌𝐄𝐍𝐓. 💗
        `.trim();
    },
    REACTMENU:"🧚‍♂️⃟🩵 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 𝗥𝗘𝗔𝗖𝗧𝗜𝗢𝗡 𝗠𝗘𝗡𝗨 🧚‍♂️⃟🩵",
    SEARCHMENU:"🧚‍♂️⃟🩵 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 𝗦𝗘𝗔𝗥𝗖𝗛 𝗠𝗘𝗡𝗨 🧚‍♂️⃟🩵",
    HENTAIMENU:"🧚‍♂️⃟🩵 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 𝗛𝗘𝗡𝗧𝗔𝗜 𝗠𝗘𝗡𝗨 🧚‍♂️⃟🩵",
    DOWNLOADMENU:"🧚‍♂️⃟🩵 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 𝗠𝗘𝗡𝗨 🧚‍♂️⃟🩵",
    MOVIEMENU:"🧚‍♂️⃟🩵 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 𝗠𝗢𝗩𝗜𝗘 𝗠𝗘𝗡𝗨 🧚‍♂️⃟🩵",
    GROUPMENU:"🧚‍♂️⃟🩵 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 𝗚𝗥𝗢𝗨𝗣 𝗠𝗘𝗡𝗨 🧚‍♂️⃟🩵",
    OWNERMENU:"🧚‍♂️⃟🩵 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 𝗢𝗪𝗡𝗘𝗥 𝗠𝗘𝗡𝗨 🧚‍♂️⃟🩵",
    CONVERTMENU:"🧚‍♂️⃟🩵 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 𝗖𝗢𝗡𝗩𝗘𝗥𝗧 𝗠𝗘𝗡𝗨 🧚‍♂️⃟🩵",
    SETTINGSMENU:"🧚‍♂️⃟🩵 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 𝗦𝗘𝗧𝗧𝗜𝗡𝗚𝗦 𝗠𝗘𝗡𝗨 🧚‍♂️⃟🩵",
    NSFWMENU:"🧚‍♂️⃟🩵 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 𝗡𝗦𝗙𝗪 𝗠𝗘𝗡𝗨 🧚‍♂️⃟🩵",
    MAINMENU:"🧚‍♂️⃟🩵 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 𝗠𝗔𝗜𝗡 𝗛𝗨𝗕 🧚‍♂️⃟🩵",
    FUNMENU:"🧚‍♂️⃟🩵 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 𝗙𝗨𝗡 𝗠𝗘𝗡𝗨 🧚‍♂️⃟🩵",
    AIMENU:"🧚‍♂️⃟🩵 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 𝗔𝗜 𝗠𝗘𝗡𝗨 🧚‍♂️⃟🩵",
    LOGOMENU:"🧚‍♂️⃟🩵 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 𝗟𝗢𝗚𝗢 𝗠𝗘𝗡𝗨 🧚‍♂️⃟🩵",
    USEFULLMENU:"🧚‍♂️⃟🩵 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 𝗧𝗢𝗢𝗟𝗦 𝗠𝗘𝗡𝗨 🧚‍♂️⃟🩵",
//=====================menu-img's================================
    ALLMENUIMG:"./src/media/LOGOS/allmenu.jpg",
    REACTMENUIMG:"./src/media/LOGOS/react.jpg",
    SEARCHMENUIMG:"./src/media/LOGOS/search.jpg",
    HENTAIMENUIMG:"./src/media/LOGOS/hentaimenu.jpg",
    DOWNLOADMENUIMG:"./src/media/LOGOS/dl.jpg",
    MOVIEMENUIMG:"./src/media/LOGOS/movie.jpg",
    GROUPMENUIMG:"./src/media/LOGOS/group.jpg",
    OWNERMENUIMG:"./src/media/LOGOS/owner.jpg",
    CONVERTMENUIMG:"./src/media/LOGOS/convert.jpg",
    SETTINGSMENUIMG:"./src/media/LOGOS/settings.jpg",
    NSFWMENUIMG:"./src/media/LOGOS/nsfw.jpg",
    MAINMENUIMG:"./src/media/LOGOS/main.jpg",
    FUNMENUIMG:"./src/media/LOGOS/aifun.jpg",
    AIMENUIMG:"./src/media/LOGOS/ai.jpg",
    LOGOMENUIMG:"./src/media/LOGOS/mokak.jpg",
    USEFULLMENUIMG:"./src/media/LOGOS/useful.jpg",
//======================download============================
    TIKTOK: function (title, author,q) {
        return `
🎟️ *QUEEN ANJU-MD TIKTOK DOWNLOADER* 🎟️

🔢 *Please reply with the number you want to select:*

Title  * ${title}
Author * ${author}
URL    * ${q}
        `.trim();
    },
    FACEBOOK: function (title,q) {
        return `
💢 QUEEN ANJU-MD FB DOWNLOADER 💢
    
🎞 TITLE 🎞 ${title}

Fb-Url: -=-${q} 
        `.trim();
    },
    TWITTER: function (desc,q) {
        return `
💢 QUEEN ANJU-MD TWITTER DOWNLOADER 💢

📝 Description: ${desc || "No description"}

Twitter URL: ${q}
        `.trim();
    },
//=================main==================================
    ALIVEIMG:"./src/media/LOGOS/alive.jpg",
    ALIVEVOICE:"./src/media/Auto_voice/alive.aac",
    ALIVEMSG: function (hostname,config,pushname,runtime) {
        return `
🧚‍♂️⃟🩵 𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐀𝐋𝐈𝐕𝐄 𝐒𝐓𝐀𝐓𝐔𝐒 🧚‍♂️⃟🩵

✘◍ 𝗜'𝗺 𝗔𝗹𝗶𝘃𝗲, 𝗧𝗵𝗮𝗻𝗸𝘀 𝗳𝗼𝗿 𝗔𝘀𝗸𝗶𝗻𝗴!

┏━━━━❮ 📅 𝑻𝑶𝑫𝑎𝒚 📅❯━━━━
┃
┃ 📅 Date Today: ${new Date().toLocaleDateString("en-GB", {
          timeZone: "Asia/Colombo",
        })}
┃ ⌚ Time Now: ${new Date().toLocaleTimeString("en-GB", {
          timeZone: "Asia/Colombo",
        })}
┃
┗━━━━━━━━━━━━━━━
┏━━━━❮📝 𝗦𝘁𝗮𝘁𝘂𝘀 𝗗𝗲𝘁𝗮𝗶𝗹𝘀 📝❯━━━
┃🗣️ 𝚄𝚜𝚎𝚛 : ${pushname}
┃🤖 𝙱𝚘𝚝 : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ V${packageJson.version}
┃📜 𝙿𝚛𝚎𝚏𝚒𝚡 : ${config.PREFIX}
┃📚 𝚅𝚎𝚛𝚜𝚒𝚘𝚗 : ${packageJson.version}
┃📝 𝙿𝚕𝚊𝚝𝚏𝚘𝚛𝚖 : ${hostname}
┃📟 𝙷𝚘𝚜𝚝 : ${os.hostname()}
┃⚙️ 𝙼𝚘𝚍𝚎 : ${config.MODE}
┃💻 𝚄𝚙𝚝𝚒𝚖𝚎 : ${runtime(process.uptime())}
┃✨𝙼𝚎𝚖 : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(
          2
        )}MB / ${Math.round(require("os").totalmem / 1024 / 1024)}MB
┗━━━━━━━━━━━━━━━

💬 ᴇɴᴏʏ ᴛʜᴇ 𝗯𝗼𝘁 ᴏ𝗳 𝚚𝚞𝚎𝚎𝚗 𝗮𝗻𝗷𝘂! ✨
        `.trim();
    },
//====================movie======================================
    GROUP:function (groupName,conf) {
        return `
📤 𝗙𝗥𝗢𝗠: ${groupName}  
👤 𝗔𝗗𝗠𝗜𝗡: ${conf.MNAME}  
        `.trim();
    },
    SINHALASUB: function (title,imdb,date,country,runtime) {
        return `
🎬 𝙵𝙸𝙻𝙼 𝚆𝙾𝚁𝙻𝙳 🎥  
            
✨  ${title}  
⭐ 𝗜𝗠𝗗𝗕 𝗥𝗮𝘁𝗶𝗻𝗴: ${imdb}  
📅 𝗥𝗲𝗹𝗲𝗮𝘀𝗲 𝗗𝗮𝘁𝗲: ${date}  
🌍 𝗖𝗼𝘂𝗻𝘁𝗿𝘆: ${country}  
⏳ 𝗗𝘂𝗿𝗮𝘁𝗶𝗼𝗻: ${runtime}  
        `.trim();
    },
    CINESUBZ:function (title,imdbRate,date,country,duration) {
        return `
🎬 𝙵𝙸𝙻𝙼 𝚆𝙾𝚁𝙻𝙳 🎥  

✨ ${title}  
⭐ 𝗜𝗠𝗗𝗕 𝗥𝗮𝘁𝗶𝗻𝗴:${imdbRate}  
📅 𝗥𝗲𝗹𝗲𝗮𝘀𝗲 𝗗𝗮𝘁𝗲:${date}  
🌍 𝗖𝗼𝘂𝗻𝘁𝗿𝘆:${country}  
⏳ 𝗗𝘂𝗿𝗮𝘁𝗶𝗼𝗻:${duration}
        `.trim();
    },
    CINETVSHOW: function (filename) {
        return `
🎬 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗫ᴾᴿᴼ 𝗖𝗜𝗡𝗘𝗠𝗔 🎥  

✨ 🎞 TV SHOW:${filename}
        `.trim();
    },
    CINETVSHOWALLDL: function (title,releaseDate,network) {
        return `
🎬 𝙵𝙸𝙻𝙼 𝚆𝙾𝚁𝙻𝙳 🎥 

✨TITLE: ${title}
✨RELESE DATA: ${releaseDate}
✨NETWORK: ${network}
        `.trim();
    },
    SIMNHALAMOVIE: function (title) {
        return`
🎬 𝙵𝙸𝙻𝙼 𝚆𝙾𝚁𝙻𝙳 🎥  

✨ 🎥  ${title}     
        `.trim();
    },
    AWAMOVIE: function (title,releaseDate,country,language){
        return`
🎬 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗫ᴾᴿᴼ 𝗖𝗜𝗡𝗘𝗠𝗔 🎥  

✨ 🎥  ${title}  
📅 𝗥𝗲𝗹𝗲𝗮𝘀𝗲 𝗗𝗮𝘁𝗲: ${releaseDate}  
🌍 𝗖𝗼𝘂𝗻𝘁𝗿𝘆: ${country} 
🗣️ 𝗟𝗮𝗻𝗴𝘂𝗮𝗴𝗲: ${language}  
        `.trim();
    },
    ANIMEMOVIE: function (title,releaseDate,country,duration){
        return`
🎬 𝙵𝙸𝙻𝙼 𝚆𝙾𝚁𝙻𝙳 🎥  
    
✨ ${title} 
📅 𝗥𝗲𝗹𝗲𝗮𝘀𝗲 𝗗𝗮𝘁𝗲:${releaseDate}  
🌍 𝗖𝗼𝘂𝗻𝘁𝗿𝘆:${country}  
⏳ 𝗗𝘂𝗿𝗮𝘁𝗶𝗼𝗻:${duration}  
        `.trim();
    },
    BAISCOMOVIE: function (title,year,rating,duration){
        return`
🎬 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗫ᴾᴿᴼ 𝗖𝗜𝗡𝗘𝗠𝗔 🎥  
    
✨ ${title} 
📅 𝗥𝗲𝗹𝗲𝗮𝘀𝗲 𝗗𝗮𝘁𝗲:${year}  
🌍 RATINGS:${rating}  
⏳ 𝗗𝘂𝗿𝗮𝘁𝗶𝗼𝗻:${duration}  
        `.trim();
    },
    ADULTMOVIE: function (title,rating,description){
        return`
🎬 *𝙵𝙸𝙻𝙼 𝚆𝙾𝚁𝙻𝙳* 🎥
──────────────────
✨ *Title:* ${title}
⭐ *Rating:* ${rating}

🌍 *Description:*  
${description}
──────────────────
📥 *Downloading...*
        `.trim();
    },
    ANIMOMOVIE: function (title,description,plot){
        return`
🎬 𝙵𝙸𝙻𝙼 𝚆𝙾𝚁𝙻𝙳🎥  
      
✨ ${title}  
⭐ Description:${description} 

🌍  ${plot} 
        `.trim();
    },
//=====================youtube===========================================
    SONG: function (data){
        return`
⫷⦁[ * '-'_꩜ 𝗧𝗛𝗔𝗥𝗨𝗪𝗔 𝙎𝙊𝙉𝙂 𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿𝙀𝙍 ꩜_'-' * ]⦁⫸
    
🎵 *Song Found!* 
    
➥ *Title:* ${data.title} 
➥ *Duration:* ${data.timestamp} 
➥ *Views:* ${data.views} 
➥ *Uploaded On:* ${data.ago} 
➥ *Link:* ${data.url} 
    
🎧 *Enjoy the music brought to you by* *Queen Anju Bot*! 
    
> *Created with ❤️ by THARUWA* 
        `.trim();
    },
    YTMP3: function (data){
        return`
🎥 *MP3 Download Found!* 

➥ *Title:* ${data.title} 
➥ *Duration:* ${data.timestamp} 
➥ *Views:* ${data.views} 
➥ *Uploaded On:* ${data.ago} 
➥ *Link:* ${data.url}

🎬 *Enjoy the video brought to you by Queen Anju Bot!* 
        `.trim();
    },
    VIDEO: function (data){
        return`
⫷⦁[ * '-'_꩜ 𝗧𝗛𝗔𝗥𝗨𝗪𝗔 𝙑𝙄𝘿𝙀𝙊 𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿𝙀𝙍 ꩜_'-' * ]⦁⫸ 

🎥 *Video Found!* 
    
➥ *Title:* ${data.title} 
➥ *Duration:* ${data.timestamp} 
➥ *Views:* ${data.views} 
➥ *Uploaded On:* ${data.ago} 
➥ *Link:* ${data.url} 
    
🎬 *Enjoy the video brought to you by* *Queen Anju Bot*! 
    
> *Created with ❤️ by THARUSHA* 
        `.trim();
    },
    YTMP4: function (data){
        return`
🎥 *MP4 Download Found!* 

➥ *Title:* ${data.title} 
➥ *Duration:* ${data.timestamp} 
➥ *Views:* ${data.views} 
➥ *Uploaded On:* ${data.ago} 
➥ *Link:* ${data.url} 

🎬 *Enjoy the video brought to you by 𝚃𝙷𝙰𝚁𝚄𝚆𝙰 Bot!* 
        `.trim();
    },
};
