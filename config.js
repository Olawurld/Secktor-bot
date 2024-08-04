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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349130062942";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_54_08_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICA2NyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDUwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMixcbiAgICAgICAgNDMsXG4gICAgICAgIDMwLFxuICAgICAgICAxODIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDc2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTEwLFxuICAgICAgICAxODAsXG4gICAgICAgIDE0LFxuICAgICAgICA1MixcbiAgICAgICAgMjA4LFxuICAgICAgICAxODIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTM2LFxuICAgICAgICA5NSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMSxcbiAgICAgICAgOTIsXG4gICAgICAgIDM5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDM2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgOSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjEwLFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMTE3LFxuICAgICAgICA5NyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNTYsXG4gICAgICAgIDIzLFxuICAgICAgICA0OSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNDAsXG4gICAgICAgIDcyLFxuICAgICAgICA2MyxcbiAgICAgICAgMTQ0LFxuICAgICAgICA4MCxcbiAgICAgICAgMjgsXG4gICAgICAgIDc1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMzUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIyMixcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc3LFxuICAgICAgICAyOSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNDksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgOSxcbiAgICAgICAgODcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNzYsXG4gICAgICAgIDgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTQxLFxuICAgICAgICA2NSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDQ5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE5NixcbiAgICAgICAgNzEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAzMSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDU2LFxuICAgICAgICAxMixcbiAgICAgICAgMTk1LFxuICAgICAgICA4OSxcbiAgICAgICAgMjU0LFxuICAgICAgICA4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNixcbiAgICAgICAgNDUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjA5LFxuICAgICAgICAzNSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMzcsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNTksXG4gICAgICAgIDc2LFxuICAgICAgICA4MixcbiAgICAgICAgMTE3LFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjM2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDgyLFxuICAgICAgICAxODYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE4LFxuICAgICAgICA5LFxuICAgICAgICAxMyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMTksXG4gICAgICAgIDIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDQ3LFxuICAgICAgICA0MCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTEyLFxuICAgICAgICAxNixcbiAgICAgICAgODgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTE4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA5OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTcsXG4gICAgICAgIDU3LFxuICAgICAgICA4MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDcsXG4gICAgICAgIDIzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTM0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMyxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIxNixcbiAgICAgICAgNjcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjIsXG4gICAgICAgIDg3LFxuICAgICAgICA1NixcbiAgICAgICAgMjAwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDc5LFxuICAgICAgICA4OCxcbiAgICAgICAgMTQxLFxuICAgICAgICAzMCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTE0LFxuICAgICAgICAzNixcbiAgICAgICAgODcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDY0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjQ4LFxuICAgICAgICA0MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNTYsXG4gICAgICAgIDY0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIzNixcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTM5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlF5NUROVWI0STBUT0R5TXJPU1c0NzM2SnFuTDM5Q3dXQ3BQRFJyRS91QWM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTEzMDA2Mjk0MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0FEMUJCMkQ2NzBGODU5Q0Y2NTBcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyNzU4MDQ2XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTEzMDA2Mjk0MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0E0RjdCNEM3NzdBMUM5ODkyQzFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyNzU4MDQ3XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIk9aZ3otX1RiUklLVHN1Q3B1RWEyUndcIixcbiAgXCJwaG9uZUlkXCI6IFwiOTdmZGUzOTYtOGI1My00NTIyLThiOTQtNjNjZTFmY2Q2MjM0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDg0LFxuICAgICAgMjQ0LFxuICAgICAgMTg0LFxuICAgICAgMjQsXG4gICAgICAyNDIsXG4gICAgICA4MyxcbiAgICAgIDU5LFxuICAgICAgMTQwLFxuICAgICAgNzIsXG4gICAgICAxNSxcbiAgICAgIDksXG4gICAgICAxNDMsXG4gICAgICAyMDEsXG4gICAgICAxNzAsXG4gICAgICAzNSxcbiAgICAgIDEyLFxuICAgICAgMTAxLFxuICAgICAgMTQyLFxuICAgICAgMTA3LFxuICAgICAgMTUzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDkzLFxuICAgICAgMTc2LFxuICAgICAgMjI0LFxuICAgICAgNTksXG4gICAgICA4MSxcbiAgICAgIDE0NyxcbiAgICAgIDcxLFxuICAgICAgNzgsXG4gICAgICAxOTQsXG4gICAgICAyMTAsXG4gICAgICAxMjAsXG4gICAgICAxOTgsXG4gICAgICAyMzUsXG4gICAgICA4NixcbiAgICAgIDE2NCxcbiAgICAgIDQ1LFxuICAgICAgMjAwLFxuICAgICAgMTYzLFxuICAgICAgMzUsXG4gICAgICAxOTdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTEtaRlpCOFRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxMzAwNjI5NDI6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTg0MjcxNzk2OTkwMjAzOjZAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiT0xBIFRWXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTW1Wc29FRUVKWG52TFVHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJkVEV4b0hhSlczK3dQWVZCTERMdktoN3dvcTZpNWZuUHVUV3RVazhXeXprPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImRYbDhrNUNFdmZ1SmM5a0c1azZGYWd1RVEzbGg5NGYySFlQUmlwN2I1S0NEMlhVanA3NEowbW80YlFQQWZ5L2NxbG9pdTh0L1lrWHlSdHB6Z25FUER3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImFsTXg3MnJvdlRhVUd0bmxRUjlvcVArVmhUVlZOekYwdkRNL2pwR3JSSUUvUjUzRTY1NHBmQ3doSjVBNXc2V1BhbC8rQTZHRDJKbXVVc2NpU3FnSURRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxMzAwNjI5NDI6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDU3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJpcGhvbmVcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjc1ODA0MSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUVuT1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRW5PLmpzb24iOiAie1wia2V5RGF0YVwiOlwiWE96ZTh1RmRxb1cxN2ZwV0NUazRBN0NFZHFyYXV4WjlkYlBBSDNpMXRpVT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMDc2NjYwOTM3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMSwwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjIwODU4MjMwNTFcIn0iCn0="


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
