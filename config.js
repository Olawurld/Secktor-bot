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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349165796019";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_51_07_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDc4LFxuICAgICAgICAxMSxcbiAgICAgICAgMjM4LFxuICAgICAgICA4NyxcbiAgICAgICAgMTE3LFxuICAgICAgICA0NSxcbiAgICAgICAgMTUyLFxuICAgICAgICA1MixcbiAgICAgICAgMjcsXG4gICAgICAgIDQxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDQsXG4gICAgICAgIDE4MixcbiAgICAgICAgNzQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjM5LFxuICAgICAgICA5MixcbiAgICAgICAgOTksXG4gICAgICAgIDI0NCxcbiAgICAgICAgNixcbiAgICAgICAgNCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDYyLFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE0LFxuICAgICAgICA2MixcbiAgICAgICAgMTIzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyOSxcbiAgICAgICAgMjExLFxuICAgICAgICAxMjcsXG4gICAgICAgIDMxLFxuICAgICAgICAxNTksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjE2LFxuICAgICAgICA0MSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjQxLFxuICAgICAgICA5NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjQ1LFxuICAgICAgICA3LFxuICAgICAgICA3NyxcbiAgICAgICAgMTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMjMxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDExOCxcbiAgICAgICAgODksXG4gICAgICAgIDMzLFxuICAgICAgICA0NixcbiAgICAgICAgMjM0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTg1LFxuICAgICAgICA3OCxcbiAgICAgICAgMTgxLFxuICAgICAgICAzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTI1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDk5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDUwLFxuICAgICAgICAxNTksXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNixcbiAgICAgICAgODUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTAwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTg3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTAwLFxuICAgICAgICAzNSxcbiAgICAgICAgMjM4LFxuICAgICAgICA0OSxcbiAgICAgICAgOTIsXG4gICAgICAgIDIzLFxuICAgICAgICA4NSxcbiAgICAgICAgODksXG4gICAgICAgIDI1MixcbiAgICAgICAgMjM4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNzcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTQsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNixcbiAgICAgICAgMzcsXG4gICAgICAgIDI2LFxuICAgICAgICAxODEsXG4gICAgICAgIDQzLFxuICAgICAgICAxNCxcbiAgICAgICAgNDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgODAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxODIsXG4gICAgICAgIDYwLFxuICAgICAgICAxODMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNTcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTM3LFxuICAgICAgICA0MSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMTksXG4gICAgICAgIDEzNixcbiAgICAgICAgODMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgOTcsXG4gICAgICAgIDUxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDc2LFxuICAgICAgICA4NyxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc5LFxuICAgICAgICAxNSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTYwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTY3LFxuICAgICAgICA4NyxcbiAgICAgICAgODksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDI3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgOTQsXG4gICAgICAgIDM4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDk2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDg3LFxuICAgICAgICAxOCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjMyLFxuICAgICAgICA1N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTE3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA2MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDksXG4gICAgICAgIDEwMixcbiAgICAgICAgMTAwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEwLFxuICAgICAgICA3MyxcbiAgICAgICAgNTksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMCxcbiAgICAgICAgMTk4LFxuICAgICAgICA4OSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDg3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDk2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDcyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDQyLFxuICAgICAgICA5OCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjEyLFxuICAgICAgICA4NSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNTMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgODYsXG4gICAgICAgIDg5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDY3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMyxcbiAgICAgICAgMTE3LFxuICAgICAgICA0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDM1LFxuICAgICAgICAzOCxcbiAgICAgICAgNTUsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDk1LFxuICAgICAgICAxNTksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTczLFxuICAgICAgICAxNDgsXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEwOCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJKVktmellUMm9sUG5uQ0U1QmZmZFVDWTdoT0Z2TEhZbGlBcjZkWHlJS2FnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI4T1pySWNQRVJTLXZ2dUNLaF8yQkNnXCIsXG4gIFwicGhvbmVJZFwiOiBcImFjOWM4MDdkLWFiZDItNDdjMy04ODg2LTExNWZiMDdlZTZlMlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTQsXG4gICAgICAxMDIsXG4gICAgICA0OCxcbiAgICAgIDEwNSxcbiAgICAgIDMzLFxuICAgICAgMTUsXG4gICAgICAxMjksXG4gICAgICAyMTcsXG4gICAgICAxMjksXG4gICAgICAxMCxcbiAgICAgIDIxOCxcbiAgICAgIDc1LFxuICAgICAgMjQ5LFxuICAgICAgODksXG4gICAgICAxMzcsXG4gICAgICA0MixcbiAgICAgIDIxNyxcbiAgICAgIDIwNixcbiAgICAgIDExMCxcbiAgICAgIDIyOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTc1LFxuICAgICAgMTg0LFxuICAgICAgODUsXG4gICAgICAxNDIsXG4gICAgICAyMDQsXG4gICAgICAyNDQsXG4gICAgICAxNzIsXG4gICAgICA3OCxcbiAgICAgIDk5LFxuICAgICAgMjI0LFxuICAgICAgNDAsXG4gICAgICAxMDMsXG4gICAgICAxMDEsXG4gICAgICAxNSxcbiAgICAgIDc0LFxuICAgICAgNzcsXG4gICAgICAxMzAsXG4gICAgICAyMDAsXG4gICAgICA1NyxcbiAgICAgIDgzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUEh1cDlvRUVPM3YzYlFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJuMzBMU2VXeEIzdVA1MTRlU3FtZ2g5bE4xZDlrc0NvamJtTTQzdnFzMmlrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlRjZnFuSVZqYmhIYzBWV1NtcWlKRzdJZ00wTGxhUWR5SFlzd0h1UzVZb0VlRlIvbkxuODhndHBPNkhybmJuMllPd0JzNnd2blQ0Q3JnazRqV3BaNWh3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjk5UTEzNTdlUXBiMnR5d09ZRytFYnVSNkdzWlhkSlViclZqSWpGV1VRMmk1eU9vejlVSGtFcmlxOExXcC81Q1l0NCtldEpJcFRzajhscFQxVlNscUNBPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTE2NTc5NjAxOToxN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTQ0MDYxODkzNzQ2NzM0OjE3QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTE2NTc5NjAxOToxN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA0MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjEyMDI2NzJcbn0iCn0="  // PUT your SESSION_ID 


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
