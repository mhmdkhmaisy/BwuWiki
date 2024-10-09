"use strict";(self.webpackChunkbotwithuswiki=self.webpackChunkbotwithuswiki||[]).push([[3452],{94452:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>h,default:()=>p,frontMatter:()=>l,metadata:()=>a,toc:()=>d});var i=n(17624),s=n(4552),o=(n(11504),n(23940)),r=n(99188);n(61462);const l={title:"Bot Monitoring",description:"How to setup an automated bot monitoring on own discord server.",slug:"/Bot-Monitoring"},h="Creating a Discord Server",a={id:"Guides/Bot Monitoring/index",title:"Bot Monitoring",description:"How to setup an automated bot monitoring on own discord server.",source:"@site/docs/Guides/Bot Monitoring/index.md",sourceDirName:"Guides/Bot Monitoring",slug:"/Bot-Monitoring",permalink:"/Bot-Monitoring",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Bot Monitoring",description:"How to setup an automated bot monitoring on own discord server.",slug:"/Bot-Monitoring"},sidebar:"mainSidebar",previous:{title:"Wiki Contributions",permalink:"/contributing-to-wiki"},next:{title:"Script Submission Workflow",permalink:"/Guides/ScriptSubmissionWorkflow"}},c={},d=[{value:"Step 1: Create a Server",id:"step-1-create-a-server",level:2},{value:"(Optional) Step 2: Customize a Server",id:"optional-step-2-customize-a-server",level:3},{value:"Setting Up Auto Screenshot Software",id:"setting-up-auto-screenshot-software",level:2},{value:"Step 1: Download the Software",id:"step-1-download-the-software",level:3},{value:"Step 2: Configure Auto Screenshot",id:"step-2-configure-auto-screenshot",level:3},{value:"Step 3: Start Taking Screenshots",id:"step-3-start-taking-screenshots",level:3},{value:"Setting Up Auto Upload to Discord Server",id:"setting-up-auto-upload-to-discord-server",level:2},{value:"Step 1: Download the Software",id:"step-1-download-the-software-1",level:3},{value:"Step 2: DAU Config",id:"step-2-dau-config",level:3},{value:"Step 3: Finishing up",id:"step-3-finishing-up",level:3}];function u(e){const t={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.M)(),...e.components},{Details:l}=t;return l||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.c,{title:"Bot Monitoring",version:"v1.0",author:"1464"}),"\n",(0,i.jsx)(t.admonition,{type:"hidden",children:(0,i.jsx)(t.h1,{id:"creating-a-discord-server",children:"Creating a Discord Server"})}),"\n",(0,i.jsx)(r.c,{title:"Creating a Discord Server"}),"\n",(0,i.jsx)(t.h2,{id:"step-1-create-a-server",children:"Step 1: Create a Server"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Open Discord"}),": Log in to your Discord account."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:'Click on the "+" button'}),": This is located on the bottom left of the sidebar."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Create a Server"}),":","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:'Choose the option "Create My Own" or use a template.'}),"\n",(0,i.jsx)(t.li,{children:"Enter a server name."}),"\n",(0,i.jsx)(t.li,{children:"Optionally, upload an icon for your server."}),"\n",(0,i.jsx)(t.li,{children:'Click "Create".'}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"optional-step-2-customize-a-server",children:"(Optional) Step 2: Customize a Server"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Create Channels"}),":"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Text Channels"}),': Click the "+" next to "Text Channels" to add channels (e.g., #general, #announcements).']}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Voice Channels"}),': Click the "+" next to "Voice Channels" to add channels (e.g., General).']}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Categories"}),': Organize channels into categories by clicking the "+" next to the server name and selecting "Create Category".']}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Set Up Roles"}),":"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:'Go to "Server Settings" (click on your server name at the top and select "Server Settings").'}),"\n",(0,i.jsx)(t.li,{children:'Click on "Roles" and then the "+" button to create new roles.'}),"\n",(0,i.jsx)(t.li,{children:"Customize permissions for each role (e.g., Admin, Moderator, Member)."}),"\n",(0,i.jsx)(t.li,{children:'Assign roles to members by right-clicking on their username and selecting "Roles".'}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"--"}),"\n",(0,i.jsx)(t.admonition,{type:"hidden",children:(0,i.jsx)(t.h2,{id:"setting-up-auto-screenshot-software",children:"Setting Up Auto Screenshot Software"})}),"\n",(0,i.jsx)(r.c,{title:"Setting Up Auto Screenshot Software"}),"\n",(0,i.jsx)(t.h3,{id:"step-1-download-the-software",children:"Step 1: Download the Software"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Visit the Official GitHub repo"}),": Go to the ",(0,i.jsx)(t.a,{href:"https://github.com/artem78/AutoScreenshot",children:"Auto Screenshot"})," GitHub page."]}),"\n"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["All credits to ",(0,i.jsx)(t.a,{href:"https://github.com/artem78",children:(0,i.jsx)("i",{children:"artem78"})}),", support him if you like the software!"]}),"\n"]}),"\n",(0,i.jsxs)(t.ol,{start:"3",children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Download the Installer"}),": Scroll to the bottom and download either the Windows portable version or installer."]}),"\n"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)("i",{children:"AutoScreenshot_v1.16_Windows_portable.zip"})," or ",(0,i.jsx)("i",{children:"AutoScreenshot_v1.16_Windows_setup.exe"})]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"step-2-configure-auto-screenshot",children:"Step 2: Configure Auto Screenshot"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Choose Save Location and Filename template"}),": Select the output directory folder where the screenshots will be saved together with Filename template which will be used to name the files."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Set Screenshot Intervals"}),": In the application settings, configure the intervals at which screenshots should be taken."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Adjust Capture Settings"}),": Configure additional settings like image format, compression and various checkboxes."]}),"\n"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)("b",{children:"DO NOT"})," check the ",(0,i.jsx)("i",{children:'"Do not make screenshots when no user activity"'})," option!"]}),"\n"]}),"\n",(0,i.jsxs)(t.ol,{start:"4",children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Set Deletion Intervals"}),": To prevent cluttering space, set a reason able time interval in which the taken screenshots will be automatically deleted."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"step-3-start-taking-screenshots",children:"Step 3: Start Taking Screenshots"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Start the Service"}),': Click on the "Start" button within the application to begin automatic screenshot capture.']}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Monitor Activity"}),": Ensure the application is running in the background to continuously capture screenshots at the set intervals."]}),"\n"]}),"\n",(0,i.jsx)(l,{children:(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Preview",src:n(18840).c+"",width:"562",height:"507"})})}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.admonition,{type:"hidden",children:(0,i.jsx)(t.h2,{id:"setting-up-auto-upload-to-discord-server",children:"Setting Up Auto Upload to Discord Server"})}),"\n",(0,i.jsx)(r.c,{title:"Setting Up Auto Upload to Discord Server"}),"\n",(0,i.jsx)(t.h3,{id:"step-1-download-the-software-1",children:"Step 1: Download the Software"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Visit the Official GitHub repo"}),": Go to the ",(0,i.jsx)(t.a,{href:"https://github.com/tardisx/discord-auto-upload",children:"DAU"})," GitHub page."]}),"\n"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["All credits to ",(0,i.jsx)(t.a,{href:"https://github.com/tardisx",children:(0,i.jsx)("i",{children:"tardisx"})}),", support him if you like the software!"]}),"\n"]}),"\n",(0,i.jsxs)(t.ol,{start:"2",children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Download the Installer"}),": Scroll to the bottom and download binaries for Windows."]}),"\n"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)("i",{children:"dau-win-v0.12.4.zip"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"step-2-dau-config",children:"Step 2: DAU Config"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Unzip the downloaded file and open the DAU app"}),": This should automatically open your browser windows and land you on the localhost:9090 page."]}),"\n"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Go to Config tab at the top menu."}),"\n"]}),"\n",(0,i.jsxs)(t.ol,{start:"2",children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Global configuration"}),": Lets you setup server ports and general startup settings."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Watcher configuration"}),": This is where you setup a webhook to your discord server. Multiple watchets can be setup to upload to multiple servers."]}),"\n"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Firstly, check this ",(0,i.jsx)(t.a,{href:"https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks",children:"link"})," for a step by step guide on how to get your Discord server Webhook URL."]}),"\n",(0,i.jsx)(t.li,{children:"After you have everything ready, simply copy and paste the directory path for where your screenshots folder is located."}),"\n",(0,i.jsx)(t.li,{children:"Then paste the Webhook URL you just created."}),"\n",(0,i.jsx)(t.li,{children:"Lasty, save the settings at the bottom of the page."}),"\n"]}),"\n",(0,i.jsx)(l,{children:(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Preview",src:n(51592).c+"",width:"863",height:"455"})})}),"\n",(0,i.jsx)(t.h3,{id:"step-3-finishing-up",children:"Step 3: Finishing up"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Monitor Uploads"}),": Ensure that the script is running and check the Discord channel to confirm that the screenshots are being uploaded automatically."]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"You can set both app to start on startup or open them manually whenever you restard your computer."}),"\n"]}),"\n",(0,i.jsx)("b",{children:"Happy botting!"})]})}function p(e={}){const{wrapper:t}={...(0,s.M)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},18840:(e,t,n)=>{n.d(t,{c:()=>i});const i=n.p+"assets/images/AutoScreenshotSetup-652b353ce3f3240bb804ddc51276aa73.png"},51592:(e,t,n)=>{n.d(t,{c:()=>i});const i=n.p+"assets/images/dauConfig-fa37bb8555ae01fa92e8dca981070e8b.png"}}]);