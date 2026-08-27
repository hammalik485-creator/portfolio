HAMMAD MALIK — PORTFOLIO
========================

The site is just index.html — you can open it directly to preview everything.
BUT the "Leave a Message" form only sends email when the small server is running.

TO RUN THE CONTACT FORM (one-time setup)
----------------------------------------
1. Install Node.js if you don't have it:  https://nodejs.org  (LTS version)
2. Open PowerShell in this folder and run:
       npm install
3. Start the site:
       npm start
4. Open your browser at:
       http://localhost:3000
   Now the "Leave a Message" form will email you at hammalik485@gmail.com.

NOTES
-----
- Your Gmail App Password is stored in the .env file (server-side only).
  It is NEVER inside index.html, so visitors can't see it.
- Keep .env private. Do not upload it to GitHub or share it.
- If you ever change your email or app password, edit .env only.
- To go live on a real domain, deploy this folder to a Node host
  (Render, Railway, Vercel serverless, etc.) and set the same .env values there.
- Without the server, the form falls back to opening the visitor's email app.

FILES
-----
index.html      the website
server.js       contact-form backend (Node + nodemailer)
.env            private email credentials
logo.png        your logo (header)
hammad.jpg      your hero photo
yt.jpg          YTJobs logo
azul/jeff/josten.jpg   client profile pictures (from YouTube)
Azul test.mp4 / Jeff test.mov   video testimonials
