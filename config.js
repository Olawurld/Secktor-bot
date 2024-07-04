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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349035319505";




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
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,2349035319505";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2349035319505,2349035319505";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_03_44_07_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDk3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDExLFxuICAgICAgICAyMDAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgOCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDg0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMzAsXG4gICAgICAgIDEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNCxcbiAgICAgICAgMTczLFxuICAgICAgICAyNDksXG4gICAgICAgIDEwMixcbiAgICAgICAgMTUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDUzLFxuICAgICAgICA1OCxcbiAgICAgICAgMzIsXG4gICAgICAgIDg0LFxuICAgICAgICA4NSxcbiAgICAgICAgMTczLFxuICAgICAgICAxNCxcbiAgICAgICAgNTYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTYzLFxuICAgICAgICA5MyxcbiAgICAgICAgMjksXG4gICAgICAgIDE0OSxcbiAgICAgICAgOSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjQ5LFxuICAgICAgICA0NixcbiAgICAgICAgNzksXG4gICAgICAgIDQ5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDI0NixcbiAgICAgICAgNjIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTU4LFxuICAgICAgICA0NSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMSxcbiAgICAgICAgMzksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE3NixcbiAgICAgICAgOTMsXG4gICAgICAgIDQyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTM1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNTgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgODMsXG4gICAgICAgIDU3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDYxLFxuICAgICAgICA0OSxcbiAgICAgICAgMTIwLFxuICAgICAgICA0NCxcbiAgICAgICAgOTcsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMyxcbiAgICAgICAgNjUsXG4gICAgICAgIDExNSxcbiAgICAgICAgOTksXG4gICAgICAgIDQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxODIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjIxLFxuICAgICAgICA1LFxuICAgICAgICA2NCxcbiAgICAgICAgMjQyLFxuICAgICAgICA0NCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMzksXG4gICAgICAgIDUsXG4gICAgICAgIDIwLFxuICAgICAgICAxMjksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTU3LFxuICAgICAgICA2NyxcbiAgICAgICAgMTgzLFxuICAgICAgICA2MCxcbiAgICAgICAgNTksXG4gICAgICAgIDExNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgOTAsXG4gICAgICAgIDgxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDYyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTM2LFxuICAgICAgICA5NyxcbiAgICAgICAgNCxcbiAgICAgICAgMjEwLFxuICAgICAgICAzMyxcbiAgICAgICAgMTA5LFxuICAgICAgICA2NSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxODEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyOSxcbiAgICAgICAgNjEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjM4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDI0LFxuICAgICAgICA4NyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMSxcbiAgICAgICAgMjE4LFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDMsXG4gICAgICAgIDE4LFxuICAgICAgICAyNSxcbiAgICAgICAgOTgsXG4gICAgICAgIDc1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNzYsXG4gICAgICAgIDIxNixcbiAgICAgICAgNTcsXG4gICAgICAgIDI0NixcbiAgICAgICAgNTMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgOCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMCxcbiAgICAgICAgMTgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjM3LFxuICAgICAgICA2MyxcbiAgICAgICAgMTAzLFxuICAgICAgICA3MyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMDksXG4gICAgICAgIDUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDEyNVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTEwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNTQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTIsXG4gICAgICAgIDEyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDI2LFxuICAgICAgICA5OSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDY0LFxuICAgICAgICAyMSxcbiAgICAgICAgNTMsXG4gICAgICAgIDk3LFxuICAgICAgICAxNTksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTc2LFxuICAgICAgICA0OCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDc4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjU1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMzQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNzIsXG4gICAgICAgIDY4LFxuICAgICAgICA3NCxcbiAgICAgICAgMTc4LFxuICAgICAgICA4MCxcbiAgICAgICAgMTU4LFxuICAgICAgICA2NyxcbiAgICAgICAgNzEsXG4gICAgICAgIDE4MixcbiAgICAgICAgNTQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgOTAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjAzLFxuICAgICAgICA5MCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIxOSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ1Q3AzMW1BUlZLQzA5bElSZUhsMGdLdnRtcDQrSFRwb1c0NVdTSUlrczlBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogNjEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogNjEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCItYVQtZTI3MlQ5bXdrUGJ0TmRma2t3XCIsXG4gIFwicGhvbmVJZFwiOiBcImUzODEzNTAzLTBlMGItNDM0NC05NmFlLTIxMjNiYjQ3OWE1OVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzYsXG4gICAgICA5NyxcbiAgICAgIDE4LFxuICAgICAgOTIsXG4gICAgICAyMDEsXG4gICAgICA5OCxcbiAgICAgIDMwLFxuICAgICAgMTEzLFxuICAgICAgMTE5LFxuICAgICAgMjA0LFxuICAgICAgMjE1LFxuICAgICAgNjIsXG4gICAgICAxMTIsXG4gICAgICAxOTAsXG4gICAgICAxNDgsXG4gICAgICA4NyxcbiAgICAgIDI0OCxcbiAgICAgIDEwMixcbiAgICAgIDE1NCxcbiAgICAgIDEzN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDksXG4gICAgICAxOTMsXG4gICAgICA1MSxcbiAgICAgIDk5LFxuICAgICAgMjI3LFxuICAgICAgMTgzLFxuICAgICAgMzQsXG4gICAgICAxMzcsXG4gICAgICAyNDgsXG4gICAgICAxMTYsXG4gICAgICAyNDcsXG4gICAgICA1MixcbiAgICAgIDExNixcbiAgICAgIDEyOCxcbiAgICAgIDExNSxcbiAgICAgIDE3MixcbiAgICAgIDEzMyxcbiAgICAgIDExMyxcbiAgICAgIDUwLFxuICAgICAgMjM4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjFLSDVYVE1SXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDM1MzE5NTA1OjE0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiRGEgRG9uIDAxIEV4Y2hhbmdlXCIsXG4gICAgXCJsaWRcIjogXCI2NDMwNDM4NDU5Mzk2NjoxNEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPR2o4Tm9ERUk2MW1MUUdHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkJYL2ZjcGR1MjE0V3BPQkRIbUttTGNFZm5MdVUyOWp4My9PR3YxWEZHaEE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwidWRTcFpmRHU0S3N0WU00b2RNc2lGdDVJcWtzNVR0TGEySnhnTmJjMFFHWnJiRndCeHpvdnE2QUlzV0dTUEhvdmoxRHJiTmVic2FGTWZjemJMT3F6aXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwib1BiSU9rVjloRmdOa3lKM0dKSzFWMndUOWFvdmtvVm9CbzFXTldCWDZtWmdLMkFJZ2FNZENWZ0tvVFpDVnZ6R0NDMStKRmp0aHhMMmlScnI2M1dxQVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTAzNTMxOTUwNToxNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmlcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDA2NDY1NyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUpmQVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSmZBLmpzb24iOiAie1wia2V5RGF0YVwiOlwicjFMcWl6b3JEM2gyM3NpbnAwZ1dGOTJYUUt3VG5xOURuMWJqQmFjNEdYND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo5OTU4ODk2MzMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxNzUwMDcwMDY2M1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "suhail",
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
