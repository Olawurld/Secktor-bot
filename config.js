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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347080271407";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_01_07_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICA3MSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgOTUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDUzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNTEsXG4gICAgICAgIDUyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTAsXG4gICAgICAgIDIsXG4gICAgICAgIDgwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNDQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNyxcbiAgICAgICAgMjUsXG4gICAgICAgIDU2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjIyLFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTIsXG4gICAgICAgIDYyLFxuICAgICAgICAyMzksXG4gICAgICAgIDY2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDExNixcbiAgICAgICAgMjM1LFxuICAgICAgICA2OCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDY0LFxuICAgICAgICAyMCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTY5LFxuICAgICAgICAxMTksXG4gICAgICAgIDkwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTU1LFxuICAgICAgICAzNixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNjgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjA0LFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTc4LFxuICAgICAgICA4NSxcbiAgICAgICAgMTU1LFxuICAgICAgICAzOSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNDksXG4gICAgICAgIDIzMCxcbiAgICAgICAgODksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjA1LFxuICAgICAgICA5OSxcbiAgICAgICAgMTE4LFxuICAgICAgICA4NCxcbiAgICAgICAgODUsXG4gICAgICAgIDQ2LFxuICAgICAgICA2MSxcbiAgICAgICAgMCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDYwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDc4LFxuICAgICAgICAxNyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTgyLFxuICAgICAgICA0MixcbiAgICAgICAgMjA3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNDYsXG4gICAgICAgIDY0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMjksXG4gICAgICAgIDQ5LFxuICAgICAgICAxMSxcbiAgICAgICAgMTIwLFxuICAgICAgICA4MyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTY1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNjMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTUwLFxuICAgICAgICA5MixcbiAgICAgICAgMTgzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDc5LFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxODIsXG4gICAgICAgIDgzLFxuICAgICAgICA1OCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDQyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNzksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjMyLFxuICAgICAgICAwLFxuICAgICAgICA4MixcbiAgICAgICAgMTQzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDkyLFxuICAgICAgICA5LFxuICAgICAgICAyNDksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjAzLFxuICAgICAgICAzNSxcbiAgICAgICAgNDUsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MixcbiAgICAgICAgMTQwLFxuICAgICAgICA0OCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTgxLFxuICAgICAgICA1MixcbiAgICAgICAgNDcsXG4gICAgICAgIDE0MixcbiAgICAgICAgOTUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgODgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDUyLFxuICAgICAgICA0NyxcbiAgICAgICAgMTQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNjMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA4NSxcbiAgICAgICAgOSxcbiAgICAgICAgMjIyLFxuICAgICAgICAzOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDkxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1NixcbiAgICAgICAgICA3MixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA4NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTkxLFxuICAgICAgICA5NyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDEsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTMwLFxuICAgICAgICA3MSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjEsXG4gICAgICAgIDEsXG4gICAgICAgIDc1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDk5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTM1LFxuICAgICAgICA1NCxcbiAgICAgICAgMTAsXG4gICAgICAgIDM0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDQsXG4gICAgICAgIDkwLFxuICAgICAgICAxMDksXG4gICAgICAgIDE5LFxuICAgICAgICA0LFxuICAgICAgICA5MyxcbiAgICAgICAgODIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNjksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTE2LFxuICAgICAgICA3LFxuICAgICAgICAyNyxcbiAgICAgICAgNjEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTAyLFxuICAgICAgICA3OCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE1MixcbiAgICAgICAgOSxcbiAgICAgICAgMTIyLFxuICAgICAgICA4LFxuICAgICAgICA0NixcbiAgICAgICAgOTMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNDksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiTEJhbG5zYkl4czk2eTZrd3I5czBrVUJFU2xuME5OSC85K0VWU20xS1dpYz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSUdVMWE0SUtSZ0djRnZqRDVvclF0Z1wiLFxuICBcInBob25lSWRcIjogXCI2YTc5Mjk1MS1iNjBjLTQzM2MtYTYwYi0wZjY4ZmJmNmQ4ZGRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTczLFxuICAgICAgMTgwLFxuICAgICAgMTAzLFxuICAgICAgMTUyLFxuICAgICAgNDIsXG4gICAgICA2MCxcbiAgICAgIDI0NyxcbiAgICAgIDkzLFxuICAgICAgMjEwLFxuICAgICAgNTQsXG4gICAgICAyMDEsXG4gICAgICA4OSxcbiAgICAgIDIzOCxcbiAgICAgIDQ1LFxuICAgICAgMTM4LFxuICAgICAgMTQsXG4gICAgICA4NSxcbiAgICAgIDE2NSxcbiAgICAgIDEyMSxcbiAgICAgIDU1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTQsXG4gICAgICAyNTEsXG4gICAgICA4NixcbiAgICAgIDE3MCxcbiAgICAgIDI1LFxuICAgICAgMTAwLFxuICAgICAgNDcsXG4gICAgICAyMjgsXG4gICAgICA2NixcbiAgICAgIDE5MixcbiAgICAgIDU5LFxuICAgICAgMjM4LFxuICAgICAgMjI0LFxuICAgICAgMjA1LFxuICAgICAgNjUsXG4gICAgICAxMjUsXG4gICAgICA1NyxcbiAgICAgIDY0LFxuICAgICAgMTQzLFxuICAgICAgMjJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMKzFucUFGRU83ZXhiUUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInhORElFRDJ3cjJVQmZZZUt5SFkrZkVBNDc1K3VTTWNvYlNJZEhoRUljQXc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiRnArWmlvOXdmL2dWRFVYYXp0UXJhTkw2OWI4aTU2U2x6SXpkelR0dk95V2lhbVBUMXVSNjhlcjE4cUtKclRtNGhYd0tRK3c0d05kdXJiR2tnbGsyQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiOXRIMUpLd2h1Uzdya0hORFUxdUtLWGc5THZuajcvcGhha2RDcVc3YnlUb0lIM2E3TE9Zcy9MMVhOOTJBMUxkaW9wbG1VOVZaZGx2OUFQY0RDeWw0Q1E9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDgwMjcxNDA3OjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjQwOTA5NTk3MDY1Mzc4OjlAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDgwMjcxNDA3OjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDgwNzI4MSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUw0NlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTDQ1Lmpzb24iOiAie1wia2V5RGF0YVwiOlwieTAxSzVRVUl0d1pNSVdZMUIzaU52RHJzazVieDBnb1FXRTB5L1drT01FOD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNDA5Nzg0NTEwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTc1MjQ5NjUyMjRcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMNDYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJVZzhkZTRiOHh1QjhLTm1LZjhhWnFUT0lYZTBHVHdkenA1d05vY0RGWHc0PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0MDk3ODQ1MTAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDExODU0MjAxOFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUw0Ny5qc29uIjogIntcImtleURhdGFcIjpcIm5FUTlrdDBtMmFKWlRKY2xCelFsdVVMT1lmeEp2WlZMSmtubUVBV3pXUkk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQwOTc4NDUxMCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDczNjQ3MzExMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUw0OC5qc29uIjogIntcImtleURhdGFcIjpcInQ3cEpPRmdTZGtQOXFHNng0eTM3dW5yU1QwNUZrK0dVRlh5VW92RVBsYkE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQwOTc4NDUxMSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIwODA3MTc4NzE2XCJ9Igp9"  // PUT your SESSION_ID 


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
