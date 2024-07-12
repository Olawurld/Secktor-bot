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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348118547701";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_12_07_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDExLFxuICAgICAgICAzNixcbiAgICAgICAgMTMzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTIyLFxuICAgICAgICA4LFxuICAgICAgICAxODUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTg4LFxuICAgICAgICA1LFxuICAgICAgICAyMDksXG4gICAgICAgIDExOCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxODAsXG4gICAgICAgIDI2LFxuICAgICAgICA5MCxcbiAgICAgICAgNTYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTAxLFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NSxcbiAgICAgICAgMTk3LFxuICAgICAgICA3NixcbiAgICAgICAgMTA1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDk5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDgxLFxuICAgICAgICAzMyxcbiAgICAgICAgMTMzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTksXG4gICAgICAgIDgwLFxuICAgICAgICAyOSxcbiAgICAgICAgMTkzLFxuICAgICAgICA2LFxuICAgICAgICA2NyxcbiAgICAgICAgMzksXG4gICAgICAgIDQyLFxuICAgICAgICAxNzksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTEsXG4gICAgICAgIDQyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjE3LFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDkwLFxuICAgICAgICAxNCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDM3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTQzLFxuICAgICAgICAzMSxcbiAgICAgICAgNTksXG4gICAgICAgIDUyLFxuICAgICAgICA5NyxcbiAgICAgICAgMjgsXG4gICAgICAgIDY3LFxuICAgICAgICA1NSxcbiAgICAgICAgMyxcbiAgICAgICAgMTEyLFxuICAgICAgICA2NCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMjgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTgwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTA2LFxuICAgICAgICA4NCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDM1LFxuICAgICAgICA0NCxcbiAgICAgICAgOTIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDU3LFxuICAgICAgICA1LFxuICAgICAgICA2OCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTk5LFxuICAgICAgICAzMyxcbiAgICAgICAgMTU4LFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA1OCxcbiAgICAgICAgMjksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjgsXG4gICAgICAgIDIzMixcbiAgICAgICAgODEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDEzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDI4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDczLFxuICAgICAgICA1NixcbiAgICAgICAgMjksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjA5LFxuICAgICAgICA4NixcbiAgICAgICAgNDksXG4gICAgICAgIDgsXG4gICAgICAgIDY1LFxuICAgICAgICA4OSxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMzQsXG4gICAgICAgIDQwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDEwMixcbiAgICAgICAgNjEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDg2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNzEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMzEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjA4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgODUsXG4gICAgICAgIDcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTgsXG4gICAgICAgIDM4LFxuICAgICAgICA4MyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTEzLFxuICAgICAgICA0M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMjdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDg5LFxuICAgICAgICA2MSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjMzLFxuICAgICAgICA0NSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDcsXG4gICAgICAgIDE1LFxuICAgICAgICA2NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDExLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxODgsXG4gICAgICAgIDM1LFxuICAgICAgICA2LFxuICAgICAgICA0LFxuICAgICAgICAxOTksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNDksXG4gICAgICAgIDIzMixcbiAgICAgICAgMTkxLFxuICAgICAgICAyMTksXG4gICAgICAgIDIxNixcbiAgICAgICAgNjUsXG4gICAgICAgIDM0LFxuICAgICAgICAxNTksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgODQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTIsXG4gICAgICAgIDI4LFxuICAgICAgICA3MCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMSxcbiAgICAgICAgMTYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjIwLFxuICAgICAgICAxNixcbiAgICAgICAgMTgyLFxuICAgICAgICAxOCxcbiAgICAgICAgMjAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDExMixcbiAgICAgICAgMjAwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDkwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTQwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMjIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwic1hndWpRbjJBaGt0YVNkRmdoWllkcDYrZFpQcXVLaFdHQndFUDBoZ05NRT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MTE4NTQ3NzAxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzQTIxNzBFMTYzMDk2Rjc4NjZDRVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA2OTYzNDNcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiY1JPZzE5QjdUSy1rNmJNUHNQWXBBQVwiLFxuICBcInBob25lSWRcIjogXCI2MWM3MWU1Zi1mNzk3LTRkZjYtOTI5NC03N2RmZGY3N2E4OGFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjM3LFxuICAgICAgMjI0LFxuICAgICAgMjM3LFxuICAgICAgMTY5LFxuICAgICAgMjEsXG4gICAgICA0NyxcbiAgICAgIDIyMixcbiAgICAgIDEyMSxcbiAgICAgIDE2MixcbiAgICAgIDIzLFxuICAgICAgMTE0LFxuICAgICAgMzMsXG4gICAgICA3NCxcbiAgICAgIDIzMSxcbiAgICAgIDEwLFxuICAgICAgMTgzLFxuICAgICAgMTQsXG4gICAgICAyNTQsXG4gICAgICA4NyxcbiAgICAgIDEwN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTIsXG4gICAgICA5OCxcbiAgICAgIDgxLFxuICAgICAgNzQsXG4gICAgICA1LFxuICAgICAgMTE4LFxuICAgICAgNDIsXG4gICAgICAxODQsXG4gICAgICAyMTYsXG4gICAgICA0NyxcbiAgICAgIDE4OSxcbiAgICAgIDE4MCxcbiAgICAgIDk0LFxuICAgICAgMTcsXG4gICAgICA0NCxcbiAgICAgIDQ3LFxuICAgICAgMjE3LFxuICAgICAgMTgwLFxuICAgICAgMTAxLFxuICAgICAgMTkwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS3Vpams0UWl2eSt0QVlZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJSam0zZnIvSGhONW9qaEtHUENUS3EzUVo4c253Um1tUDQwK0FDYXZtdmk4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIm80RU80dTgrcnQ2Qkd0Tno2b1dndG9neEYyMUs4a3hkQ0tjOXVsQkcxS2hpMXZESDJXZmc1eGEybXd4dVNRUVRHZ1dVb3k0MXQ1cGxNRUhhN3Rwa0NBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlpsVXcvYWkrVFpTbTQwaTl2Z1BiUndEQ041VHN2d3B1WUNaRHFVemtVNFpncnVmWE9lbUZpV2krcDhySEpDMmhpWlJBV2lETTNFdVBVSHJKK0NCMGlnPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODExODU0NzcwMToxMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMzIzMzI3MTUxNTk2NzM6MTFAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiU3BlbmNlclwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODExODU0NzcwMToxMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDQ3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJpXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA2OTYzMzgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFBcHlcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUFweS5qc29uIjogIntcImtleURhdGFcIjpcImh1L1NiZHdFd2F6ejQrQzJiMzAzMldmd1hBaGlRM04zREJTUUF2OFQ4Y289XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTYzODExNjI3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjA2OTYzNDAxMTdcIn0iCn0="  // PUT your SESSION_ID 


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
