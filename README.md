# Shad-Codings
Shad's open source codings

# Coding-Language
node.js

# Install-Packages
discord.js 12.5.3
express 4.17.1

# Coding-Place
https://replit.com

# Making-A-Bot
- Go to this website https://discord.com/developers/applications
- Click "New Application"
- Give your application a name
- Click "Create"
- After that, go to "Bot"
- Enable "Public Bot" button
- Enable all "Privileged Gateway Intents" buttons except "Message Content Intent" button
- After that, go to "OAuth 2", "URL Generator"
- At "Scopes" click "bot" button
- Scroll down to "Bot Permissions", click any permissions button you like
- After that, at the bottom of the page find "Generated URL", copy the URL link
- Paste the URL link and search it
- Invite your bot to your server

# Notes
i. If you choose to use replit.com for coding then please take these notes
- Sign up a replit account
- Create a replit
- Choose Node.js as coding language
- Give your replit a name
- In your replit, go to "packages"
- Search for discord.js and then click "+"
- Search for express and then click "+"
- After done installing packages, go to files
- Click "package.json" 
- At "dependencies"..., find "discord.js": "^13.3.1", and change the 13.3.1 to 12.5.3
- Next go to this github's index.js file, copy all the codings in this github's index.js
- Paste what you copied to your replit's index.js file
- After pasting the codings, scroll down to the last line which says client.login("paste your bot token here")
- Change client.login("paste your bot token here") to client.login(process.env.token)
- Now go to Discord Developer Portal to copy your bot's token
- Go to your replit, find this icon "🔒"
- At key, type in token
- At value, paste your bot token there
- After that, click "Add new secret"
- Go back to index.js file, and then click "Run" button
- If you meet any error/ have questions, dm my Discord: TheMightyItzme#3297

ii. Hosting your bot 24/7
- Go to this link https://uptimerobot.com
- Create an account to sign in
- Go back to your replit, at "Web"
- Copy the https://... at the above of this text "Hello hell."
- Go back to uptimerobot, click "Dashboard"
- At Dashboard, click "+Monitor"
- Give your monitor a name
- Paste the link you copied at the below of "HTTP"
- Click the "Create Monitor" button, and then click "Confirm"
- If you think you did something wrong, dm my Discord: TheMightyItzme#3297
