const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349131079033";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_07_07_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIwMixcbiAgICAgICAgOTMsXG4gICAgICAgIDExMixcbiAgICAgICAgMjUxLFxuICAgICAgICA5MCxcbiAgICAgICAgMjQyLFxuICAgICAgICA1OCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxODMsXG4gICAgICAgIDYyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDkxLFxuICAgICAgICA1NCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTY5LFxuICAgICAgICA0MCxcbiAgICAgICAgNDUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTcsXG4gICAgICAgIDE0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDQ5LFxuICAgICAgICAxODEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDExNixcbiAgICAgICAgMTQzLFxuICAgICAgICA1MixcbiAgICAgICAgMjMsXG4gICAgICAgIDQzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDI4LFxuICAgICAgICA5NSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDY2LFxuICAgICAgICA0LFxuICAgICAgICAxODEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMzgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTAzLFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDg3LFxuICAgICAgICAxNyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDgxLFxuICAgICAgICAxODQsXG4gICAgICAgIDUsXG4gICAgICAgIDk1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE4MixcbiAgICAgICAgNDYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTYsXG4gICAgICAgIDg3LFxuICAgICAgICAyNixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjUzLFxuICAgICAgICA0OCxcbiAgICAgICAgNjMsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDg1LFxuICAgICAgICAxOTksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDI0LFxuICAgICAgICAyNCxcbiAgICAgICAgMTQzLFxuICAgICAgICA4MSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDU2LFxuICAgICAgICAxOTksXG4gICAgICAgIDk4LFxuICAgICAgICA1NyxcbiAgICAgICAgMTg0LFxuICAgICAgICAzOCxcbiAgICAgICAgNjMsXG4gICAgICAgIDc4LFxuICAgICAgICAyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTgyLFxuICAgICAgICA5LFxuICAgICAgICA5NCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTgzLFxuICAgICAgICA4OSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNCxcbiAgICAgICAgMTMsXG4gICAgICAgIDkzLFxuICAgICAgICAxNixcbiAgICAgICAgMjI4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjM4LFxuICAgICAgICAzMCxcbiAgICAgICAgMzAsXG4gICAgICAgIDgyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjM3LFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTczLFxuICAgICAgICAyNSxcbiAgICAgICAgNDIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDI0LFxuICAgICAgICA0NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNjEsXG4gICAgICAgIDY4LFxuICAgICAgICA4NCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE4LFxuICAgICAgICAzNSxcbiAgICAgICAgMTkyLFxuICAgICAgICA0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA2N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgODJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjgsXG4gICAgICAgIDE1LFxuICAgICAgICAyMSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA2MyxcbiAgICAgICAgNzksXG4gICAgICAgIDMyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDM3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTk3LFxuICAgICAgICA4NyxcbiAgICAgICAgODYsXG4gICAgICAgIDEzLFxuICAgICAgICA1OCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMyxcbiAgICAgICAgNjAsXG4gICAgICAgIDMxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDI5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNjAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMzcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTU5LFxuICAgICAgICA0NyxcbiAgICAgICAgMTY5LFxuICAgICAgICA3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEyMixcbiAgICAgICAgNTMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNDIsXG4gICAgICAgIDgxLFxuICAgICAgICA4NixcbiAgICAgICAgMjM4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTEwLFxuICAgICAgICA0NyxcbiAgICAgICAgNjEsXG4gICAgICAgIDExMCxcbiAgICAgICAgOTgsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTM2LFxuICAgICAgICAzNixcbiAgICAgICAgMTc5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgODEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIwNyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJhUXNFcksrY3RLTnpMbVRrUjVEenR5ZStkdEkyN1hCN2NjbFVpRC8wRmpZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkxMzEwNzkwMzNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNBNEZDN0VCN0NFODZBNTkxQkFFXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDQ2OTIxNVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkxMzEwNzkwMzNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNBNDVGMTYwOUIzOTQ4OTFCMjFGXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDQ2OTIxOVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ2SnBpV2xOVVE4Mm9BWllENmU5YlJnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjZiYTQxMjQ0LWY2Y2ItNGE2NC05NDBjLWQwYmVhZTdhYzQzMlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzOSxcbiAgICAgIDEyLFxuICAgICAgMTM4LFxuICAgICAgNTMsXG4gICAgICA3MSxcbiAgICAgIDI1MixcbiAgICAgIDE5OCxcbiAgICAgIDg2LFxuICAgICAgODMsXG4gICAgICAzLFxuICAgICAgMjQ2LFxuICAgICAgMTUwLFxuICAgICAgMzUsXG4gICAgICAxMSxcbiAgICAgIDY3LFxuICAgICAgMjI0LFxuICAgICAgNyxcbiAgICAgIDI0LFxuICAgICAgMTM1LFxuICAgICAgMjAzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxNCxcbiAgICAgIDY3LFxuICAgICAgMTYzLFxuICAgICAgMjA2LFxuICAgICAgMjQ4LFxuICAgICAgMjM0LFxuICAgICAgNjQsXG4gICAgICA1NCxcbiAgICAgIDE3MCxcbiAgICAgIDE5OCxcbiAgICAgIDI1LFxuICAgICAgMTQ2LFxuICAgICAgOTQsXG4gICAgICAyNDEsXG4gICAgICAxNTAsXG4gICAgICAyNDcsXG4gICAgICA5OCxcbiAgICAgIDIyOCxcbiAgICAgIDE4LFxuICAgICAgMTg5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlg4UkY2M0RaXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTMxMDc5MDMzOjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE1NTM2MjI4ODIwNTgzNjo1QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIlJpY2hhcmTinaTvuI/igI3wn5SlXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTkxrck1JQkVOaU5zYlFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJQZDRMeEdZMDJiMFQ3RDRYU0VEWU9aM21wMDlyRDk0SnpGZFA1R3dzdEcwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkp5SThtQWFOT0ovRWFUS1ZpYkVObGJ4bFJlMWtuUUNTK21hZUpnVWR5MmVKaFhlNUZVUEQyYWVyMTdqTU5aaktCb0xmMzRRTjU3OWhQa2ZhRGNPNENnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkdVcjRHSmxKKzd1dWE0WmR2dHBNWTZSVWhaM0d1VlcxaTdjMGtYSE14M0dCdDJNK3RKTi9pZGw3NUlvQWxkUFF2a1FWUndpKzZmZTJVU09RUTF2NkF3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxMzEwNzkwMzM6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDEwOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA0NjkyMTEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNTHFcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1McS5qc29uIjogIntcImtleURhdGFcIjpcInBMSjR3bTlnUlZDVHh2clpaa2pLTDcwKzFKZ1JCZUxRc2xHcHNPUmNSUW89XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NDA3NTgxMjY2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjA0NjkyMTI5MTNcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
