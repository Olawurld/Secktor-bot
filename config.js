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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_28_07_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNjIsXG4gICAgICAgIDk4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDExLFxuICAgICAgICAxMTQsXG4gICAgICAgIDg4LFxuICAgICAgICAyNSxcbiAgICAgICAgODEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDgwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgOTAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMCxcbiAgICAgICAgNTEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTE5LFxuICAgICAgICAxOCxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQzLFxuICAgICAgICA5MSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDk1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMzksXG4gICAgICAgIDIyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNixcbiAgICAgICAgOTYsXG4gICAgICAgIDk3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDk1LFxuICAgICAgICA1NyxcbiAgICAgICAgODUsXG4gICAgICAgIDg3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDUwLFxuICAgICAgICA4NixcbiAgICAgICAgMTUwLFxuICAgICAgICAxODYsXG4gICAgICAgIDEzLFxuICAgICAgICA0OCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgOSxcbiAgICAgICAgMTUyLFxuICAgICAgICA0NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICA4OSxcbiAgICAgICAgMjExLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjM2LFxuICAgICAgICAzMCxcbiAgICAgICAgNjksXG4gICAgICAgIDIwMixcbiAgICAgICAgMTUyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTYyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDgyLFxuICAgICAgICA2NyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDY5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDYyLFxuICAgICAgICA0MSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjI3LFxuICAgICAgICA3MyxcbiAgICAgICAgMTAyLFxuICAgICAgICA4OCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTczLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTk5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTkxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDU0LFxuICAgICAgICAxMjksXG4gICAgICAgIDQ1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDc4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNzgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNDIsXG4gICAgICAgIDc5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDMxLFxuICAgICAgICAzNyxcbiAgICAgICAgOTksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTkwLFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxODksXG4gICAgICAgIDIzNixcbiAgICAgICAgMjEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMSxcbiAgICAgICAgNzIsXG4gICAgICAgIDY1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMixcbiAgICAgICAgMTI3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDc3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDQxLFxuICAgICAgICAyOSxcbiAgICAgICAgMjI1LFxuICAgICAgICA0NyxcbiAgICAgICAgMTY0LFxuICAgICAgICA1LFxuICAgICAgICA2MyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDk3LFxuICAgICAgICAzMCxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI1LFxuICAgICAgICAyMzksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjI3LFxuICAgICAgICA0OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTI3LFxuICAgICAgICA0NSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTA3LFxuICAgICAgICA3MCxcbiAgICAgICAgMjcsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDg1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTU5LFxuICAgICAgICA3MyxcbiAgICAgICAgMTUxLFxuICAgICAgICA4MyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMixcbiAgICAgICAgMzgsXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTAzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyMixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDY4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzgsXG4gICAgICAgIDc4LFxuICAgICAgICA1MSxcbiAgICAgICAgODEsXG4gICAgICAgIDg4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjI1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTI1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE5MixcbiAgICAgICAgNDYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjI3LFxuICAgICAgICA1LFxuICAgICAgICA4NSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDgwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDcxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDY3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNixcbiAgICAgICAgMTU2LFxuICAgICAgICA1NCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDQyLFxuICAgICAgICA0NCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDY0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTUwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgODMsXG4gICAgICAgIDc2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDI0NixcbiAgICAgICAgNDAsXG4gICAgICAgIDEyOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjAwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIitsR2hSTkRxbFpodHZRc0cvQ1c4Zk41SENlQ1ZzQk4xY2s3TWRDOStaUWc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIi1UTmF6aDRMUjVleEpiMFp0NldVcWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNTU2ZTZlOTQtZmU0MC00ZGZmLThjNmItZGMzMjRkYTM5OTY1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDk5LFxuICAgICAgMTE5LFxuICAgICAgODMsXG4gICAgICA0MSxcbiAgICAgIDczLFxuICAgICAgMTUxLFxuICAgICAgMTkzLFxuICAgICAgMjQsXG4gICAgICAxMjYsXG4gICAgICA4MyxcbiAgICAgIDEyNCxcbiAgICAgIDEwMixcbiAgICAgIDc3LFxuICAgICAgMTMyLFxuICAgICAgMSxcbiAgICAgIDIxMSxcbiAgICAgIDE5MCxcbiAgICAgIDIzMixcbiAgICAgIDI1MyxcbiAgICAgIDIwMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTEsXG4gICAgICA4OSxcbiAgICAgIDI0OSxcbiAgICAgIDI1MyxcbiAgICAgIDE4MixcbiAgICAgIDk0LFxuICAgICAgMTU3LFxuICAgICAgNCxcbiAgICAgIDIwMyxcbiAgICAgIDE1MSxcbiAgICAgIDExMyxcbiAgICAgIDIwLFxuICAgICAgMjQzLFxuICAgICAgNSxcbiAgICAgIDE3NCxcbiAgICAgIDE3MSxcbiAgICAgIDEyLFxuICAgICAgNDUsXG4gICAgICAyNTMsXG4gICAgICAxMjJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMKzFucUFGRU1tOHFyVUdHQWdnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInhORElFRDJ3cjJVQmZZZUt5SFkrZkVBNDc1K3VTTWNvYlNJZEhoRUljQXc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwib0ZEekJ5OXhqbUZWa2x6Rm9yR2RsdFFDUGNNV3ROUG9ubU96ZUFvQ09GOGFSQ01TbGtsWUU5UGU0SkxWQ1YwckF3K3pqNTFxUG1Gak9oSG41ay9EQUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiUE80K0RWblJWREhqN0gxVFFOSmlPY2xLdHFXYjNvbVdWVWs5VEIyWjRDMGcxQ2xpZjU4UzNvWFFqSXI3dm1vOWhKcklybERPZkpCd3VpQVdadE9laVE9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDgwMjcxNDA3OjE1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI0MDkwOTU5NzA2NTM3ODoxNUBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwODAyNzE0MDc6MTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjQ1NzY3N1xufSIKfQ=="  // PUT your SESSION_ID 


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







hi hi













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
