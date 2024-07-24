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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347054619564";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_19_07_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDQ0LFxuICAgICAgICA4NCxcbiAgICAgICAgODcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDcyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDUyLFxuICAgICAgICA1MyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDkyLFxuICAgICAgICAxMjksXG4gICAgICAgIDQ5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDExLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjQwLFxuICAgICAgICA0MCxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyOCxcbiAgICAgICAgOTIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDM1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNzgsXG4gICAgICAgIDM2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA2OCxcbiAgICAgICAgMjExLFxuICAgICAgICA0OSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE5LFxuICAgICAgICAyNCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDg2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDQ1LFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDgsXG4gICAgICAgIDEzMixcbiAgICAgICAgNzIsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE3MixcbiAgICAgICAgNDEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNSxcbiAgICAgICAgMjUyLFxuICAgICAgICA5NSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDY5LFxuICAgICAgICAxODAsXG4gICAgICAgIDkzLFxuICAgICAgICAzNyxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMTksXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMSxcbiAgICAgICAgMTY4LFxuICAgICAgICAzNCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNzksXG4gICAgICAgIDI1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjUwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDk4LFxuICAgICAgICA3MixcbiAgICAgICAgMzUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNixcbiAgICAgICAgNzEsXG4gICAgICAgIDYzLFxuICAgICAgICAxNyxcbiAgICAgICAgNjEsXG4gICAgICAgIDE1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDY4LFxuICAgICAgICA4OSxcbiAgICAgICAgMjU0LFxuICAgICAgICA4NyxcbiAgICAgICAgMTc1LFxuICAgICAgICA5NSxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgMTgwLFxuICAgICAgICA5MixcbiAgICAgICAgMTk2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDMyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDEsXG4gICAgICAgIDk0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDYyLFxuICAgICAgICA5OCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDk1LFxuICAgICAgICA2MixcbiAgICAgICAgNyxcbiAgICAgICAgMTcwLFxuICAgICAgICAzLFxuICAgICAgICA5MyxcbiAgICAgICAgMTU3LFxuICAgICAgICA4MixcbiAgICAgICAgMTUxLFxuICAgICAgICAzMixcbiAgICAgICAgMTgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMzcsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTIzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMTlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNzNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTc5LFxuICAgICAgICA0NSxcbiAgICAgICAgMjQxLFxuICAgICAgICA4MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTYwLFxuICAgICAgICA3OCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTc3LFxuICAgICAgICA4OCxcbiAgICAgICAgOTcsXG4gICAgICAgIDg2LFxuICAgICAgICA1MSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDg4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDgwLFxuICAgICAgICAxMTksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTAyLFxuICAgICAgICA1OSxcbiAgICAgICAgNzAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNjEsXG4gICAgICAgIDIzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDk0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDkzLFxuICAgICAgICAxNjksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTcsXG4gICAgICAgIDUxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDEwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE3MixcbiAgICAgICAgNjYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTg5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDQ2LFxuICAgICAgICA1NyxcbiAgICAgICAgMTYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMyxcbiAgICAgICAgNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNjYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiQ1dzSHcxNkdNUkRUaExJVU5XZElUdm9KTDU0S2tvbysrL0JBTExtdko5OD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ3MDU0NjE5NTY0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI1NjQ5MzAxRjA4MzMzRjFCNUQzNERFMUREQ0JFRjFGOFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjE3NDQzNzlcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiY0lIS2dLTUJSOUdRaWVZeTY5OE9HZ1wiLFxuICBcInBob25lSWRcIjogXCI5NGZkNGIwNi05OTBlLTRiOGUtOTNlZi03MGFkZTY0ZDBhMWVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTkyLFxuICAgICAgMTUzLFxuICAgICAgOTYsXG4gICAgICAyMTksXG4gICAgICAxMDMsXG4gICAgICAxNjYsXG4gICAgICA5MyxcbiAgICAgIDI0MixcbiAgICAgIDc5LFxuICAgICAgMzQsXG4gICAgICAxOTcsXG4gICAgICAxNjYsXG4gICAgICAyNDcsXG4gICAgICAyNDIsXG4gICAgICAyMDYsXG4gICAgICA4LFxuICAgICAgMTc2LFxuICAgICAgMzcsXG4gICAgICAxODEsXG4gICAgICAxODBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTA0LFxuICAgICAgMzMsXG4gICAgICA3MixcbiAgICAgIDE1MSxcbiAgICAgIDY1LFxuICAgICAgNDcsXG4gICAgICAxOSxcbiAgICAgIDM1LFxuICAgICAgMjA3LFxuICAgICAgMjEsXG4gICAgICA5MyxcbiAgICAgIDI1MCxcbiAgICAgIDIwLFxuICAgICAgMjQwLFxuICAgICAgMTk0LFxuICAgICAgMjUyLFxuICAgICAgMTk3LFxuICAgICAgMjQ2LFxuICAgICAgNzUsXG4gICAgICAxODdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQTNDSjRNTUJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwNTQ2MTk1NjQ6MThAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJCYWRib3ljZWVcIixcbiAgICBcImxpZFwiOiBcIjI4MDg5NTU1ODc5MTM5ODoxOEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLK3JyUGNCRVBIMy9yUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInlEMGlqNkNCOFptMlhmblZyRlVMOU5DTEJ3UmJuT005Q3F3dGdwZ3hMWHc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiNFlmeHpkZVJkWW1obUhXUDR4ejJvY1kwRm9oQ0N0Mm1TTWpvd1NLcVpyaHQyWHFtN0xBOHN0U1VSTUJYc2JUYVMvc2tNU2VET3JndkVkT0tsZ1F5Qnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiR21FWFRtZ1IzRncyN0FMTWw4NENBNm5qbDNyTndzbWVmb3RuTWk0aTJXNS9zejRYQWR5WXpMZHFSVHRjS0pzNU1hQ1lHZ2FWS1JnL3dTZFhnK0EzREE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzA1NDYxOTU2NDoxOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMjRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTc0NDM3MyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUVHYlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRUdiLmpzb24iOiAie1wia2V5RGF0YVwiOlwiU0ptak5LN0xVaSs3NUQ4OTlDYVN2eUVFclROakJiTHlvZDdVeGJIdTVmdz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo1MTg3MjI5OTEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTc0NDM3NjYxOFwifSIKfQ=="  // PUT your SESSION_ID 


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
