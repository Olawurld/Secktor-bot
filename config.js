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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348125593435";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_29_07_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAwLFxuICAgICAgICA2MixcbiAgICAgICAgMTMwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTUxLFxuICAgICAgICAzMCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDU2LFxuICAgICAgICA2OSxcbiAgICAgICAgMTE0LFxuICAgICAgICA4NCxcbiAgICAgICAgMjIzLFxuICAgICAgICA1OCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjAwLFxuICAgICAgICA5NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTczLFxuICAgICAgICA5OSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDY5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDk2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDUyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDExNyxcbiAgICAgICAgNTIsXG4gICAgICAgIDYyLFxuICAgICAgICA5NixcbiAgICAgICAgMjAxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDg2LFxuICAgICAgICAxODYsXG4gICAgICAgIDMsXG4gICAgICAgIDU5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE0LFxuICAgICAgICAyMDksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMzksXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNTcsXG4gICAgICAgIDI5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDYyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTMyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNDksXG4gICAgICAgIDgyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTc2LFxuICAgICAgICAzOSxcbiAgICAgICAgMTU3LFxuICAgICAgICAzNyxcbiAgICAgICAgNzUsXG4gICAgICAgIDg3LFxuICAgICAgICA1NixcbiAgICAgICAgMTQyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyNSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxOTksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjEzLFxuICAgICAgICA4NCxcbiAgICAgICAgMTQzLFxuICAgICAgICA4NSxcbiAgICAgICAgMTA1LFxuICAgICAgICAzMSxcbiAgICAgICAgMTksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDc0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjM3LFxuICAgICAgICAzMyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDY3LFxuICAgICAgICAzNSxcbiAgICAgICAgMTI5LFxuICAgICAgICA1MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICA2MixcbiAgICAgICAgMzcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDkyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDkzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDExMixcbiAgICAgICAgODMsXG4gICAgICAgIDU2LFxuICAgICAgICAyNyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDcsXG4gICAgICAgIDcyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDI0LFxuICAgICAgICA1MCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDYxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDYzLFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTczLFxuICAgICAgICAxODcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDgyLFxuICAgICAgICAyNDksXG4gICAgICAgIDUwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMzBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgOThcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA4NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNDksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNixcbiAgICAgICAgMjQzLFxuICAgICAgICAxODcsXG4gICAgICAgIDcwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjIsXG4gICAgICAgIDI5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDY4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjQyLFxuICAgICAgICA1MSxcbiAgICAgICAgMjksXG4gICAgICAgIDI0LFxuICAgICAgICAyMCxcbiAgICAgICAgMzksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMSxcbiAgICAgICAgNDUsXG4gICAgICAgIDIwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTc5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDI0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMjksXG4gICAgICAgIDE5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDM4LFxuICAgICAgICAxODYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNzAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTYsXG4gICAgICAgIDcxLFxuICAgICAgICA0MyxcbiAgICAgICAgODMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgOSxcbiAgICAgICAgMTcyLFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNzQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSGE4VnBjUVFtdUMrR0x2QVpCWXpSb1dPSncwOVR4REZXeG80Qi8rSDNYTT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MTI1NTkzNDM1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzQThGNUFEMjIxNERDMjExRDJBNFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjEwNjgxODJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MTI1NTkzNDM1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzQTE5MTc3RkI2NjMxMTg3NkM0MlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjEwNjgxODVcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiMWp1Y0pUUUVRMUdJdmEzZ2x1Wm9lUVwiLFxuICBcInBob25lSWRcIjogXCIwMTgyNmJkMi1iOTBhLTQ4YjMtYjY4My02ZTQ5Njc4ZmFhNjBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjIzLFxuICAgICAgMTU3LFxuICAgICAgMzMsXG4gICAgICAxNjQsXG4gICAgICAzNyxcbiAgICAgIDI3LFxuICAgICAgMTAwLFxuICAgICAgMjksXG4gICAgICAxMzYsXG4gICAgICAyMDQsXG4gICAgICAxMDMsXG4gICAgICAxNzIsXG4gICAgICAyMDIsXG4gICAgICAzNixcbiAgICAgIDE5OCxcbiAgICAgIDEzMyxcbiAgICAgIDE5MixcbiAgICAgIDcxLFxuICAgICAgMTQzLFxuICAgICAgMjIxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1LFxuICAgICAgMzYsXG4gICAgICAxNCxcbiAgICAgIDEwNCxcbiAgICAgIDksXG4gICAgICAyMzIsXG4gICAgICAxODEsXG4gICAgICAxNzcsXG4gICAgICAxMjQsXG4gICAgICAyMzksXG4gICAgICAxNTgsXG4gICAgICAxMDEsXG4gICAgICAyMzEsXG4gICAgICAxMTAsXG4gICAgICAxNjEsXG4gICAgICAxOTIsXG4gICAgICAxMDIsXG4gICAgICAyNSxcbiAgICAgIDIwMyxcbiAgICAgIDIzNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09ERTlORUhFSS9WMWJRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNU9Henh2OHFYNUhaVWRrMzZXL3N2VTJCRkhJeUJkYjFBeDQ3Y1R4WXBtTT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJrTFhnd2V5OHMyc3pDanVacFBjVGNEeDJiRDBFVnVjRWRhK2o2emQyK3dUNHAwUm9FaDlnTDlhZVpKNW93TjJkb3dsT2FGUThuWnpJZWMyNVFPNG5CZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ0MUgwSTVremppQTlkdDNNQ2lidXF1YWR2Nk1vcW9KdElUUXVaRmtZc2pDT3ZhZXM2bTNPTHZpcWF6dG9iRE1kck8xZTg5RWVDb2RCeGlMZW9WZnhDdz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxMjU1OTM0MzU6MTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjcxMTMzMzQ5MDQ4NTA1OjE1QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIlggIPCfkajigI3wn46k8J+nkeKAjfCfkrtcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxMjU1OTM0MzU6MTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgOTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImlwaG9uZVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxMDY4MTc5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSWFDXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJYUMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJKblVCVnVXN1lQejR6UWlOSlZXb1J6NDNTV0VTSU1teHJlYWNmY0FBMFowPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIwNTA4MjY4NDgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlsxLDBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTA2ODE3OTU4NVwifSIKfQ=="  // PUT your SESSION_ID 


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
