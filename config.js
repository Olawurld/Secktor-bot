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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "256789925334";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_52_06_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTI5LFxuICAgICAgICAzOSxcbiAgICAgICAgNDIsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDQ2LFxuICAgICAgICAyOCxcbiAgICAgICAgNTAsXG4gICAgICAgIDg4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTc1LFxuICAgICAgICA3MSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE0NixcbiAgICAgICAgOTksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgNjAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTM0LFxuICAgICAgICAzMyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxODQsXG4gICAgICAgIDYyLFxuICAgICAgICA0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDkwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNjksXG4gICAgICAgIDU4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDgsXG4gICAgICAgIDk3LFxuICAgICAgICA0NSxcbiAgICAgICAgMjIwLFxuICAgICAgICA3MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA0MyxcbiAgICAgICAgOTMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTI5LFxuICAgICAgICAxODgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICA4NSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxODIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMzEsXG4gICAgICAgIDIsXG4gICAgICAgIDk4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDI5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjIzLFxuICAgICAgICA4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDM0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjE5LFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NyxcbiAgICAgICAgMSxcbiAgICAgICAgMjI0LFxuICAgICAgICA0MyxcbiAgICAgICAgODcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgOTAsXG4gICAgICAgIDM2LFxuICAgICAgICA1NyxcbiAgICAgICAgMjE0LFxuICAgICAgICA4NSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDkwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDMyLFxuICAgICAgICAxODcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTY0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDgyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDU3LFxuICAgICAgICA2MyxcbiAgICAgICAgMjAzLFxuICAgICAgICA1LFxuICAgICAgICAyNCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNzYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgODAsXG4gICAgICAgIDIzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTg2LFxuICAgICAgICAzLFxuICAgICAgICAxNDksXG4gICAgICAgIDExNCxcbiAgICAgICAgNjksXG4gICAgICAgIDEwNCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDMyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjQyLFxuICAgICAgICA1MCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNDksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDc1LFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzksXG4gICAgICAgIDUwLFxuICAgICAgICAxNjksXG4gICAgICAgIDg3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTEsXG4gICAgICAgIDcyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDQsXG4gICAgICAgIDEwMixcbiAgICAgICAgNjgsXG4gICAgICAgIDk1LFxuICAgICAgICAxMixcbiAgICAgICAgMTU1LFxuICAgICAgICA2NCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDgxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTgxLFxuICAgICAgICA3NSxcbiAgICAgICAgMTIzLFxuICAgICAgICA5OSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxODUsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDExNFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTIyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDUsXG4gICAgICAgIDUxLFxuICAgICAgICAxODQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDYwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNzMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjI3LFxuICAgICAgICAxNDksXG4gICAgICAgIDc5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDI4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTQwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDMwLFxuICAgICAgICA0MixcbiAgICAgICAgMjA4LFxuICAgICAgICAzNyxcbiAgICAgICAgMTI5LFxuICAgICAgICA1NSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDY0LFxuICAgICAgICAxMSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDkzLFxuICAgICAgICAzMSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMTksXG4gICAgICAgIDQsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTU4LFxuICAgICAgICA5OCxcbiAgICAgICAgNyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxOCxcbiAgICAgICAgMTM5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMTEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiUE55ZmVxcEpHZXU5V1MxQzNqaHl0aHpBOTJSV3dISkRieCtHZmdrSmJLcz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTY3ODk5MjUzMzRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjk5MTI2QzdENjU4OTVEOTNGOTU1NzQ1RDNENTY3QkQ2XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxOTUxMDc1OFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIyWkhodUVxaFQ4QzdLMDl6X1lNVkhBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjExMzIzNzIwLTA0YTctNDc5Zi04ODJhLWFlNzU3MDliZGIyNlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTgsXG4gICAgICAyNCxcbiAgICAgIDIzMixcbiAgICAgIDIxNixcbiAgICAgIDgwLFxuICAgICAgNjcsXG4gICAgICAxMDUsXG4gICAgICAyNDksXG4gICAgICAxNzEsXG4gICAgICA3MCxcbiAgICAgIDE1MCxcbiAgICAgIDEyOSxcbiAgICAgIDIyNixcbiAgICAgIDE1OCxcbiAgICAgIDI1MixcbiAgICAgIDI5LFxuICAgICAgMTgxLFxuICAgICAgMjgsXG4gICAgICA1NCxcbiAgICAgIDE4N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTIwLFxuICAgICAgMTcwLFxuICAgICAgMTAyLFxuICAgICAgMjUyLFxuICAgICAgMjMxLFxuICAgICAgMTIwLFxuICAgICAgODMsXG4gICAgICAyNDUsXG4gICAgICA1NixcbiAgICAgIDE3NixcbiAgICAgIDI3LFxuICAgICAgMTE5LFxuICAgICAgMTc0LFxuICAgICAgMjUsXG4gICAgICAxOCxcbiAgICAgIDIxLFxuICAgICAgOTQsXG4gICAgICAxODEsXG4gICAgICA1NixcbiAgICAgIDIyNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01XcnE4QUdFTi9OOXJNR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwid04yYisyVTFiOWxXQ0pRTUtQVWZJeTBWVW83QUZFcmtiR1FoaWw1cC9uRT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ3WjZ1S2FKWCtNODJrZ2dySjRZbWZOWnplMnBVQjRmaWpDd09xbVNqYVY5bmVUSUxSVy8rRE1QWFQya3FyNEl0bjdGU2MyV3FrRWJGV21KdzNLaTdEZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI3MTdZOUdmNXlQZjVNcnhlOW9CTTVuQmlNT0hpTVdWdXdNT3BaNGZqUDEzWXFZejlDUHpNcmhUVzE2TnlNa1RQUnh5TjFwWXVmREV1VnQxVTJjbnVoUT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1Njc4OTkyNTMzNDozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI2NTQwNDAxMzY5MDkxODozQGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU2Nzg5OTI1MzM0OjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTEzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTk1MTA3NTQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQMEpcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVAwSS5qc29uIjogIntcImtleURhdGFcIjpcIkxHdjZZdDZLMDByL28xNXp6RjlyNmNwWHpmOElpRnMyMEMzRlU4U2ZLT2c9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTc0NTU0MDU0OSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE0MTIwMTIyNTAxXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUDBKLmpzb24iOiAie1wia2V5RGF0YVwiOlwiaitiTTExQjUyM3BFU1RUOTBvWEhTVSthODh6UFNkODZaenJmWlBLSU9Baz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNzQ1NTQwNTQ5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTY3MTM2MjEwNjNcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQMEsuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIzZXZ5TUljMktvR2JqWTFGN2l0OHZVZjBQelBoUVlqR3lpSlRsZ0RGRUhJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE3NDU1NDA1NDksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxOTMwOTI2ODY5MlwifSIKfQ=="  // PUT your SESSION_ID 


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
