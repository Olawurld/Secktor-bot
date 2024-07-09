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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "23437274134";




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
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_02_06_07_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA5MixcbiAgICAgICAgMTYzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjUsXG4gICAgICAgIDk0LFxuICAgICAgICAxNyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIxNixcbiAgICAgICAgOTYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDgwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTQsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNjksXG4gICAgICAgIDc2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIyLFxuICAgICAgICAzOSxcbiAgICAgICAgMTQwLFxuICAgICAgICAzNixcbiAgICAgICAgMzgsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNSxcbiAgICAgICAgMixcbiAgICAgICAgNjgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTUsXG4gICAgICAgIDIyNixcbiAgICAgICAgNDIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEzLFxuICAgICAgICA5MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDg4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDUzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDExMixcbiAgICAgICAgOSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDY1LFxuICAgICAgICAyMDksXG4gICAgICAgIDk0LFxuICAgICAgICAxNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICA4OSxcbiAgICAgICAgMTIzLFxuICAgICAgICA4OSxcbiAgICAgICAgNTMsXG4gICAgICAgIDAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTUzLFxuICAgICAgICA2MSxcbiAgICAgICAgMzMsXG4gICAgICAgIDIxMixcbiAgICAgICAgOCxcbiAgICAgICAgNTgsXG4gICAgICAgIDk1LFxuICAgICAgICAyMyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDk4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNDMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjQ2LFxuICAgICAgICA1NCxcbiAgICAgICAgNzgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgODEsXG4gICAgICAgIDE4NixcbiAgICAgICAgOTMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDUxLFxuICAgICAgICA4MyxcbiAgICAgICAgMTEwLFxuICAgICAgICAzNCxcbiAgICAgICAgNDEsXG4gICAgICAgIDMsXG4gICAgICAgIDk2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTQ2LFxuICAgICAgICA3MyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTEsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDc1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA5MSxcbiAgICAgICAgMjI4LFxuICAgICAgICAzMSxcbiAgICAgICAgOTEsXG4gICAgICAgIDY3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDk3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDQxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNDksXG4gICAgICAgIDU5LFxuICAgICAgICA0MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTQxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDQxLFxuICAgICAgICAyMzksXG4gICAgICAgIDE1NCxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDExMixcbiAgICAgICAgNzgsXG4gICAgICAgIDY3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxODgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgODAsXG4gICAgICAgIDc0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxODYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjEwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTg0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDI0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTAwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgOTMsXG4gICAgICAgIDI2LFxuICAgICAgICA3MCxcbiAgICAgICAgMjE3LFxuICAgICAgICAzLFxuICAgICAgICA1MixcbiAgICAgICAgMTg4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDg5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDU4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxODIsXG4gICAgICAgIDcsXG4gICAgICAgIDYzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNjMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTEzLFxuICAgICAgICA0OSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDMzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDY2LFxuICAgICAgICA5MCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjAwLFxuICAgICAgICA0MixcbiAgICAgICAgMTE4LFxuICAgICAgICA5NixcbiAgICAgICAgMzcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjMsXG4gICAgICAgIDEzOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjUwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlNkdjdsL09jbVpaQ0FUWm5HdGdzejdrazl6bTdHejl4N0dEK0l5TTFwV289XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTAzNzI3NDEzNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiOTY1NzVFNzBENTNENkFFMzFDQTIzREExOEU1OTU0RkRcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwNDkwNzU1XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIklNT3pGOVVFUzQyVXpkbC1fcUdyMlFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZTYxMmM4OGMtNzE1MS00ZWIzLThjOWQtNWYxMGQ1Y2YwMDU5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzNyxcbiAgICAgIDEwNSxcbiAgICAgIDEzLFxuICAgICAgMTM0LFxuICAgICAgMTE0LFxuICAgICAgMTcsXG4gICAgICA2NixcbiAgICAgIDEyNyxcbiAgICAgIDYxLFxuICAgICAgMTg4LFxuICAgICAgMzEsXG4gICAgICAyNDEsXG4gICAgICAyMTAsXG4gICAgICA5MyxcbiAgICAgIDQ3LFxuICAgICAgMTkwLFxuICAgICAgNDgsXG4gICAgICAxODYsXG4gICAgICAyMjksXG4gICAgICAyMTdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODIsXG4gICAgICAyMDgsXG4gICAgICA0MyxcbiAgICAgIDM1LFxuICAgICAgNjIsXG4gICAgICAxMzcsXG4gICAgICAyNDUsXG4gICAgICA1OCxcbiAgICAgIDY1LFxuICAgICAgNzQsXG4gICAgICAxNjIsXG4gICAgICA0MSxcbiAgICAgIDE5MixcbiAgICAgIDIwNSxcbiAgICAgIDIzNixcbiAgICAgIDE5NyxcbiAgICAgIDEzNixcbiAgICAgIDExNixcbiAgICAgIDE3MyxcbiAgICAgIDEwN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJLUVBHQ1ZBWVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTAzNzI3NDEzNDo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQURWRVJUIEhPTUUgKEFETUlOKVwiLFxuICAgIFwibGlkXCI6IFwiMjA0NzI0NDE0NDUxNzc5OjhAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSWpIZ2ZZREVQMjFzclFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJQdkZuTkZJdVZGSjFsaWhnRkhzb21mYUhkcG5tcERBOHFkQnliUnZoaWdnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkVYY0hKZXVKT3E4UTNYU1dZMEZvaFF2MS9BNVJrVFRQQnVOYnJyckhib2ZHUWNDMGVVdFdiUlpkTWVsY29XWHZXSWFhSTFFd3R0VTQ2c0tXOGVlaUJBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkpXN3pLU2ZkN1NHMXJucC8xNzdCSEg2a0FWZ2x4Tk1OZ0V6L2g2bmdQdXlVK3Y1dUZjY0VxNnpzM3Vldmo2ektGNHQvSkZjMDBydUc5ZVlFeVl0MmpRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwMzcyNzQxMzQ6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDQ5MDc1MyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUNSOFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQ1I4Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiYTNSMzMxNkdqREZVbjZRVXJydUZGOWFIMGlwQ2RqSkRBbEdOUmxtVjlUND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMDUyNzk1NzgzLFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMCwyLDNdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
