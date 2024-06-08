"use strict";(self.webpackChunkbotwithuswiki=self.webpackChunkbotwithuswiki||[]).push([[716],{102:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>x,contentTitle:()=>d,default:()=>j,frontMatter:()=>a,metadata:()=>h,toc:()=>u});var s=i(7624),l=i(2172),r=(i(1504),i(3940)),t=i(9188),o=i(9510);i(9080);const c=JSON.parse('[{"date":"2024-03-04","title":"v1.0.0","items":["Release"]},{"date":"2024-04-26","title":"v2.0.0","items":["Attempt to fix the pathing issues happening with the script","Added support for Presets 1 - 18 (instead of the old 1 - 10)","Added support for Action bar 1 - 18 (instead of the old 1 - 10)","Prayer flask support"]},{"date":"2024-06-06","title":"v2.1.0","items":["Fixed stats tab when lobbying","Fixed pathing errors when using afk spot 2","Added multiple Bank locations (War\'s retreat, Max guild, Grand Exchange)","Added support to recharge blood amulet of fury","Added support for scrimshaw of sacrifice","Added Torstol & Lantadyme incense stick support"]}]'),a={title:"AbyssKiller",description:"Kill creatures in the Abyss.",slug:"/AbyssKiller"},d=void 0,h={id:"Scripts/Combat/AbyssKiller/index",title:"AbyssKiller",description:"Kill creatures in the Abyss.",source:"@site/docs/Scripts/Combat/AbyssKiller/index.md",sourceDirName:"Scripts/Combat/AbyssKiller",slug:"/AbyssKiller",permalink:"/AbyssKiller",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"AbyssKiller",description:"Kill creatures in the Abyss.",slug:"/AbyssKiller"},sidebar:"mainSidebar",previous:{title:"ArchWithUs",permalink:"/ArchWithUs"},next:{title:"Aggro ArchGlacor",permalink:"/Aggro-ArchGlacor"}},x={},u=[{value:"Cost",id:"cost",level:2},{value:"Features",id:"features",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Setup",id:"setup",level:2},{value:"Changelog",id:"changelog",level:2}];function p(e){const n={admonition:"admonition",blockquote:"blockquote",h2:"h2",li:"li",p:"p",ul:"ul",...(0,l.M)(),...e.components},{Details:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.c,{title:"AbyssKiller",author:"louisdnb",version:"v2.1.0",skill:"Attack"}),"\n",(0,s.jsx)(n.admonition,{type:"hidden",children:(0,s.jsx)(n.h2,{id:"cost",children:"Cost"})}),"\n",(0,s.jsx)(t.c,{title:"Cost",children:(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"FREE / month (not including client access)"}),"\n"]}),"\n"]})}),"\n",(0,s.jsx)(n.admonition,{type:"hidden",children:(0,s.jsx)(n.h2,{id:"features",children:"Features"})}),"\n",(0,s.jsx)(t.c,{title:"Features",children:(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Walks to Abyss and checks for a free spot"}),"\n",(0,s.jsx)(n.li,{children:"Auto hopping worlds when spots are taken"}),"\n",(0,s.jsx)(n.li,{children:"PVP safety check"}),"\n",(0,s.jsx)(n.li,{children:"Logout on script error"}),"\n",(0,s.jsx)(n.li,{children:"Support any food item"}),"\n",(0,s.jsx)(n.li,{children:"Optimal AFK spot"}),"\n",(0,s.jsx)(n.li,{children:"Automatically set Main Action Bar"}),"\n",(0,s.jsxs)(n.li,{children:["Banking:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Bank locations: War's Retreat, Max guild, Grand Exchange"}),"\n",(0,s.jsx)(n.li,{children:"Load preset"}),"\n",(0,s.jsx)(n.li,{children:"Recharge Divine charges"}),"\n",(0,s.jsx)(n.li,{children:"Recharge Blood amulet of fury"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Prayer Support:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Soul Split, Deflect Magic, Deflect Ranged, Deflect Melee, Protect from Magic, Protect from Ranged, Protect from melee"}),"\n",(0,s.jsx)(n.li,{children:"Super restore, Prayer potion, Prayer flask, Blessed flask"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Stat boosting potions:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Overload, Super Warmaster's potion, Super Melee potion, Grand Ranging potion, Grand Magic potion, Extreme Magic, Extreme Ranging, Extreme Necromancy"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"Looting: currently will click loot all in area loot interface"}),"\n",(0,s.jsxs)(n.li,{children:["Misc Support:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Scrimshaw of Sacrifice"}),"\n",(0,s.jsx)(n.li,{children:"Torstol incense sticks"}),"\n",(0,s.jsx)(n.li,{children:"Lantadyme incense sticks"}),"\n"]}),"\n"]}),"\n"]}),"\n"]})}),"\n",(0,s.jsx)(n.admonition,{type:"hidden",children:(0,s.jsx)(n.h2,{id:"requirements",children:"Requirements"})}),"\n",(0,s.jsx)(t.c,{title:"Requirements",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Edgeville lodestone unlocked"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Opted out of PVP"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Correct Prayer book (when Use Prayer enabled)"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Area Loot enabled (when Use Looting System enabled)"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Action bar should contain the following:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Bank teleport:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"War's Retreat: War's Retreat Teleport"}),"\n",(0,s.jsx)(n.li,{children:"Max guild: Max guild Teleport"}),"\n",(0,s.jsx)(n.li,{children:"Grand Exchange: Ring of Fortune or Luck of the Dwarves"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"Selected Prayer"}),"\n",(0,s.jsx)(n.li,{children:"Scrimshaw of Sacrifice (optional)"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"A preset containing the following:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Stat boosting potion (optional)"}),"\n",(0,s.jsx)(n.li,{children:"Food (optional)"}),"\n",(0,s.jsx)(n.li,{children:"Prayer restore item (optional)"}),"\n",(0,s.jsx)(n.li,{children:"Torstol incense sticks (optional)"}),"\n",(0,s.jsx)(n.li,{children:"Lantadyme incense sticks (optional)"}),"\n",(0,s.jsx)(n.li,{children:"Scrimshaw of Sacrifice (Equipped) (optional)"}),"\n",(0,s.jsx)(n.li,{children:"Ring of Fortune or Luck of the Dwarves (Equipped) (when using Grand Exchange banking)"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Bank should contain the following:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Recharge Divine Charges: Divine Charges"}),"\n",(0,s.jsx)(n.li,{children:"Recharge Blood Fury: Atleast 1000 Blood runes"}),"\n",(0,s.jsx)(n.li,{children:"Food (optional)"}),"\n",(0,s.jsx)(n.li,{children:"Prayer restore item (optional)"}),"\n",(0,s.jsxs)(n.li,{children:["Scrimshaw of Sacrifice (inactive)","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"This is incase the scrimshaw in your preset runs out"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})}),"\n",(0,s.jsx)(n.admonition,{type:"hidden",children:(0,s.jsx)(n.h2,{id:"setup",children:"Setup"})}),"\n",(0,s.jsxs)(t.c,{title:"Setup",children:[(0,s.jsxs)(i,{children:[(0,s.jsx)("summary",{children:"Before starting the script"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Make a preset containing:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Stat boosting potion (optional)"}),"\n",(0,s.jsx)(n.li,{children:"Food (optional)"}),"\n",(0,s.jsx)(n.li,{children:"Prayer restore item (optional)"}),"\n",(0,s.jsx)(n.li,{children:"Torstol incense sticks (optional)"}),"\n",(0,s.jsx)(n.li,{children:"Lantadyme incense sticks (optional)"}),"\n",(0,s.jsx)(n.li,{children:"Scrimshaw of Sacrifice (Equipped) (optional)"}),"\n",(0,s.jsx)(n.li,{children:"Ring of Fortune or Luck of the Dwarves (Equipped) (when using Grand Exchange banking)"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"Select the settings you want to use."}),"\n",(0,s.jsx)(n.li,{children:"Start the script."}),"\n"]})]}),(0,s.jsxs)(i,{children:[(0,s.jsx)("summary",{children:"UI Settings Guide"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Combat:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Main Action Bar: Main Action Bar you want to use"}),"\n",(0,s.jsx)(n.li,{children:"Use Optimal AFK Spot: stand in the optimal AFK spot"}),"\n",(0,s.jsxs)(n.li,{children:["Use Stat Boosting Potion","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Stat Boosting Potion: select the potion you want to use"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Eat Food","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Heal Percent: when lifepoints hit below this percent, script will eat food"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Use Prayer","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Prayer: select the Prayer you want to use"}),"\n",(0,s.jsx)(n.li,{children:"Min Prayer Points: the minimum Prayer points before using a Prayer restore item"}),"\n",(0,s.jsx)(n.li,{children:"Prayer Restore: select the Prayer restore item you want to use"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Bank:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Preset Number: Bank preset number that should be loaded"}),"\n",(0,s.jsx)(n.li,{children:"Bank Location: bank teleport location"}),"\n",(0,s.jsx)(n.li,{children:"Recharge Divine Charges: recharge divine charges when they run out"}),"\n",(0,s.jsx)(n.li,{children:"Recharge Blood fury: recharge Blood amulet of fury when charge percent is under 5.0%"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Looting:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Use Looting System: this will click loot all button in the area loot interface"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Misc:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Use Scrimshaw of Sacrifice: Activate/Deactivate Scrimshaw in combat and equip a new one from the bank when it runs out"}),"\n",(0,s.jsx)(n.li,{children:"Use Torstol Sticks: keeps Torstol sticks at max potency and the timer above 1 minute"}),"\n",(0,s.jsx)(n.li,{children:"Use Lantadyme Sticks: keeps Lantadyme sticks at max potency and the timer above 1 minute"}),"\n"]}),"\n"]}),"\n"]})]})]}),"\n",(0,s.jsx)(n.admonition,{type:"hidden",children:(0,s.jsx)(n.h2,{id:"changelog",children:"Changelog"})}),"\n",(0,s.jsx)(o.c,{changes:c})]})}function j(e={}){const{wrapper:n}={...(0,l.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}}}]);