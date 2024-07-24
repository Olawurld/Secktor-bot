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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348074603801";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 4
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_01_07_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDE2LFxuICAgICAgICA1NCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyLFxuICAgICAgICAxNjksXG4gICAgICAgIDEwNixcbiAgICAgICAgNzgsXG4gICAgICAgIDc1LFxuICAgICAgICA5NixcbiAgICAgICAgMTc1LFxuICAgICAgICAzMCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTksXG4gICAgICAgIDk1LFxuICAgICAgICAxNzksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMixcbiAgICAgICAgMjU0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDU2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDI1MixcbiAgICAgICAgNixcbiAgICAgICAgMTg2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTkyLFxuICAgICAgICA3MyxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDQyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDI2LFxuICAgICAgICA5MSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNzgsXG4gICAgICAgIDk1LFxuICAgICAgICA5MSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDgwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTI1LFxuICAgICAgICA2NixcbiAgICAgICAgMjU0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMixcbiAgICAgICAgMTMxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTYxLFxuICAgICAgICAxODAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICAyMDksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTk4LFxuICAgICAgICAzMSxcbiAgICAgICAgMTM2LFxuICAgICAgICA2NSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDExNixcbiAgICAgICAgODEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIwMixcbiAgICAgICAgODEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTg5LFxuICAgICAgICA4NCxcbiAgICAgICAgMTE4LFxuICAgICAgICA5NCxcbiAgICAgICAgNTMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTU4LFxuICAgICAgICA4NixcbiAgICAgICAgMTI1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjE4LFxuICAgICAgICAzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTE4LFxuICAgICAgICAyNyxcbiAgICAgICAgNTIsXG4gICAgICAgIDUyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgODgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDMsXG4gICAgICAgIDkzLFxuICAgICAgICA5MixcbiAgICAgICAgMTksXG4gICAgICAgIDc1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDQ4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgODMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTY0LFxuICAgICAgICA2LFxuICAgICAgICAzMixcbiAgICAgICAgMTM4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDgyLFxuICAgICAgICAzOCxcbiAgICAgICAgMTUyLFxuICAgICAgICA3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDI0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEyLFxuICAgICAgICA5NCxcbiAgICAgICAgMjUzLFxuICAgICAgICA4NixcbiAgICAgICAgNTgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxODEsXG4gICAgICAgIDMxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNjEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDc5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNDUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTIzLFxuICAgICAgICA2MixcbiAgICAgICAgMTU2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDExNixcbiAgICAgICAgMTgzLFxuICAgICAgICA5NCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNDIsXG4gICAgICAgIDc1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxODEsXG4gICAgICAgIDMwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDUzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgOCxcbiAgICAgICAgMTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNzJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTE5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDM1LFxuICAgICAgICA4OSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTk5LFxuICAgICAgICA4MSxcbiAgICAgICAgMzQsXG4gICAgICAgIDU3LFxuICAgICAgICA2NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE1NixcbiAgICAgICAgNTEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMzQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTMwLFxuICAgICAgICA3OCxcbiAgICAgICAgMzgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNTcsXG4gICAgICAgIDcxLFxuICAgICAgICA5MixcbiAgICAgICAgMjI4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDM2LFxuICAgICAgICAxMzksXG4gICAgICAgIDEwMSxcbiAgICAgICAgNTEsXG4gICAgICAgIDY3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTI3LFxuICAgICAgICA4MCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMzksXG4gICAgICAgIDk0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTMsXG4gICAgICAgIDE1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTExLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNjksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjEwLFxuICBcImFkdlNlY3JldEtleVwiOiBcInlZdEk0ZzZwT0hBSkZQbUw5L3BlM0VyQzdFSm01OGFsaWlaNDdHSjljaVU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODA3NDYwMzgwMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0E0MTlBRkQyODBBQUI3QkNFQjhcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxODI2MDcxXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODA3NDYwMzgwMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0E1NDgyNDIxMzFERkYzRjEzODJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxODI2MDc1XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjNCd0FiUzBHU2kyUmdmU1RUWWRuM3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiZDAxNTRjMDQtNTU1Zi00MzUxLTgzN2UtYTVlMjIxMGU3N2VlXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0NSxcbiAgICAgIDcsXG4gICAgICAxNzgsXG4gICAgICAyNDEsXG4gICAgICAxMjksXG4gICAgICA4NixcbiAgICAgIDMxLFxuICAgICAgMjI3LFxuICAgICAgNjIsXG4gICAgICAxNTksXG4gICAgICAxODAsXG4gICAgICAzMCxcbiAgICAgIDkzLFxuICAgICAgMzUsXG4gICAgICAyNTAsXG4gICAgICA5NixcbiAgICAgIDE5NyxcbiAgICAgIDQxLFxuICAgICAgMTg1LFxuICAgICAgOTdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzNSxcbiAgICAgIDQ0LFxuICAgICAgNDksXG4gICAgICA0OSxcbiAgICAgIDE3MyxcbiAgICAgIDIzNyxcbiAgICAgIDEzMCxcbiAgICAgIDU1LFxuICAgICAgMTc3LFxuICAgICAgMTMsXG4gICAgICAyNDMsXG4gICAgICAxNDgsXG4gICAgICA1MixcbiAgICAgIDIzNCxcbiAgICAgIDIyLFxuICAgICAgNTEsXG4gICAgICAyMTcsXG4gICAgICA3NCxcbiAgICAgIDE4LFxuICAgICAgOTdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKSENrZE1CRUpMMmc3VUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlZaMjJseWxmM1pkYnlzWTQ0K1J4ZU1pSlJvYjBMSkVPNmJNZjV6RFFRVzQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiRHZ4WWJtVjdsSllsdGtxa0s5YXZSVlo2V1dZZ0hWNFh1d1o5MnFvVUJWS2NEZ3VMODQxbmdUNENnR1hZSG1jSzAybGhWZTIrQ1BMRzhTaGtPcWtJaWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwidGhabU52enhWNUVGUW0zd211MmpURmZQSy9CaGk2RHdpazlFSUp0MWdIS0tKMVNkZUFwemJXckZiMWdSZXF2QjMyc09iSDFpTnJtVEhJM211eGZ6QWc9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MDc0NjAzODAxOjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJBbm9ueW1vdXNcIixcbiAgICBcImxpZFwiOiBcIjI3NDIzODE5MjAyNTc1OjJAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MDc0NjAzODAxOjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDExMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iaVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxODI2MDY5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBT1VMXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPVUwuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJWK2MrbVJIVnNyUlFSNE53cEdkSExIYUs2Q2p0QVNHRFhreGVWcG9vNWxFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQ0Mjc4NjA2NSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIxODI2MDY5MDY0XCJ9Igp9"  // PUT your SESSION_ID 


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
