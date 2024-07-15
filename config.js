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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349038608039";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_06_07_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMDksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjAyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTIzLFxuICAgICAgICA5MyxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMCxcbiAgICAgICAgMjAwLFxuICAgICAgICA2NCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgOTcsXG4gICAgICAgIDIwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDcwLFxuICAgICAgICAxMyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgODIsXG4gICAgICAgIDExOSxcbiAgICAgICAgOCxcbiAgICAgICAgODQsXG4gICAgICAgIDEsXG4gICAgICAgIDUwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDkwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMzAsXG4gICAgICAgIDAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMzksXG4gICAgICAgIDk1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNjIsXG4gICAgICAgIDkzLFxuICAgICAgICA1OSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMDksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTExLFxuICAgICAgICAxODIsXG4gICAgICAgIDU1LFxuICAgICAgICA5MSxcbiAgICAgICAgMixcbiAgICAgICAgMTY5LFxuICAgICAgICA4MyxcbiAgICAgICAgNzUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMyxcbiAgICAgICAgMjU0LFxuICAgICAgICAzLFxuICAgICAgICA1OSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTgzLFxuICAgICAgICA3MyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDI0NixcbiAgICAgICAgNDksXG4gICAgICAgIDI2LFxuICAgICAgICAxODAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTUxLFxuICAgICAgICA0OCxcbiAgICAgICAgMTIwLFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxODUsXG4gICAgICAgIDQxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDkzLFxuICAgICAgICA4LFxuICAgICAgICAxMzksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMzIsXG4gICAgICAgIDI5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNjgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTkyLFxuICAgICAgICA3OSxcbiAgICAgICAgMSxcbiAgICAgICAgNTUsXG4gICAgICAgIDc3LFxuICAgICAgICA0MCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDU5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDM0LFxuICAgICAgICAxODYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTA3LFxuICAgICAgICA1MCxcbiAgICAgICAgMThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDksXG4gICAgICAgIDYzLFxuICAgICAgICA1OCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDQwLFxuICAgICAgICAyOSxcbiAgICAgICAgMTczLFxuICAgICAgICA5NCxcbiAgICAgICAgMjIwLFxuICAgICAgICA4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDI0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjAxLFxuICAgICAgICA4MyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDM4LFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY5LFxuICAgICAgICA4MixcbiAgICAgICAgMTczLFxuICAgICAgICAxNDcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTExLFxuICAgICAgICAyNyxcbiAgICAgICAgMSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNzksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTY5LFxuICAgICAgICA1NCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxODcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDUyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDM5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDI2LFxuICAgICAgICA4MixcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgODdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDQ2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTcxLFxuICAgICAgICAyNSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTksXG4gICAgICAgIDE2MixcbiAgICAgICAgMTAwLFxuICAgICAgICA5OSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTY5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDg2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDYsXG4gICAgICAgIDMxLFxuICAgICAgICA1NyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxODQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDM5LFxuICAgICAgICAyNixcbiAgICAgICAgODcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMyxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjUxLFxuICAgICAgICA0MCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgOSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDMyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDkzLFxuICAgICAgICA1MyxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMSxcbiAgICAgICAgNjMsXG4gICAgICAgIDgsXG4gICAgICAgIDUsXG4gICAgICAgIDQyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDI2LFxuICAgICAgICAxNDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEzMSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJoRDVzdFlGWVB6QXhYeHdOYkJUL2RIeG12R3M2elludlNrK3ZXSUlYSGNVPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIycGdhNkFBWVNPeU5xSlJFWkNxM3h3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjQ3OTBkNzAxLWNlNzQtNDBkNS1iYWZmLTliYTBkMjI4MjI4N1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3MSxcbiAgICAgIDU4LFxuICAgICAgMTEwLFxuICAgICAgMjE1LFxuICAgICAgNSxcbiAgICAgIDY2LFxuICAgICAgNTAsXG4gICAgICAxNzMsXG4gICAgICAyMTAsXG4gICAgICAxNDUsXG4gICAgICAyMDYsXG4gICAgICAxODcsXG4gICAgICA5MCxcbiAgICAgIDEyNyxcbiAgICAgIDQyLFxuICAgICAgMTQ4LFxuICAgICAgNSxcbiAgICAgIDEzMSxcbiAgICAgIDE1OSxcbiAgICAgIDE3NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjMxLFxuICAgICAgMTExLFxuICAgICAgMTg1LFxuICAgICAgODgsXG4gICAgICAxNCxcbiAgICAgIDE3MyxcbiAgICAgIDExNCxcbiAgICAgIDExMixcbiAgICAgIDE3NixcbiAgICAgIDE1NixcbiAgICAgIDIxMyxcbiAgICAgIDE2NSxcbiAgICAgIDE2MCxcbiAgICAgIDI0MixcbiAgICAgIDE2MixcbiAgICAgIDIwNCxcbiAgICAgIDkxLFxuICAgICAgNjUsXG4gICAgICA1LFxuICAgICAgMTU3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS3phc3RBQ0VORDcwTFFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ2NzRoMThGaUdxZjdWbzAyWFk4K21CQlJFbnQ2eTlmMmdEa24zR0g1SnhnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIi9NbGpkUjJpeUFtZDVQb3I2d1RXR2FWSFNIRk9XT0tYNzlJWWRqWjNFdEVlZjlhNW5OTGJVQTEwRmJQVGJiVzFDRlVZRUVuUXhBWWhuZUhuTGRTZkF3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjJiSTlqcjFkNC9SWXZOU3BpZExmb240K1RWV2ZkbUtJeVJyTzI1ZUR0L2RTUVVLa3o1MjAreW0xVkVmT29RdHNFZkNQcDFCOFozd0hkMDB6dWE1emdRPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTAzODYwODAzOTo4MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjAzMjUwODA0NDg2MjQyOjgyQGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTAzODYwODAzOTo4MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImlwaG9uZVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwOTkxMTg3XG59Igp9"  // PUT your SESSION_ID 


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
