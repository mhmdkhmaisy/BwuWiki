"use strict";(self.webpackChunkbotwithuswiki=self.webpackChunkbotwithuswiki||[]).push([[6810],{9398:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>u,contentTitle:()=>c,default:()=>f,frontMatter:()=>d,metadata:()=>h,toc:()=>m});var s=t(7624),n=t(2172),r=(t(1504),t(3940)),o=t(9188),a=t(9510);t(9080);const l=JSON.parse('[{"date":"2024-02-14","title":"v1.0.6","items":["Added support for eof/conjur necklace switching when summoning conjures in the fight lobby","Fixed a rare post-fight death scenario where fight logic had stopped processing but Rasial fired one more explosion.","Fixed health buff conflicts between bonfire/valentines/thermal bath/other health boosts, now always interacting the bonfire only if health is not boosted by any means (instead of just boosted by bonfire)","Fixed a rare scenario where certain abilities would occasionally not activate for an unlucky user","Added an additional check at wars retreat that turns off your prayer if it was still on."]},{"date":"2024-02-06","title":"v1.0.5","items":["Greatly improved effectiveness of p4 walking mechanics","Fixed a bug that could cause guthix/sara brews to not be sipped depending on dosage","Increased reliability of death reclaim feature","Added a safety check for lack of death touched bracelet charge"]},{"date":"2024-02-03","title":"v1.0.4","items":["Randomized war\'s retreat activity: More random altar -> bank times, with a small chance of a short afk","Bot will surge toward the crystal the majority of the time now, but sometimes still walk","Optimized prism of restoration timing for better coverage during the kill and less waste on the 2nd prism","Optimized start of fight to get an extra tick out of command skeleton warrior","In the rare event of death, the bot will now reclaim its items and continue on fighting rasial. Safeguard for failed death reclaim is added at war\'s retreat (checks for missing equipment) in order to prevent dying again with items in death storage should a reclaim go wrong.","Bot will no longer re-summon undead army at the very end of fight in rare circumstances","General bot statistics like kills, drops, etc will now be tracked centrally (and anonymously)","Dashboards coming :soon~1:"]},{"date":"2024-02-01","title":"v1.0.3","items":["Remove checkbox for super brews, bot now drinks liquids in this order of priority: Super Guthix brews, Guthix rest, Super sara brews, sara brews","Fixed a scenario where adren pot could fail to activate after living death for t90 rotation","Added a safeguard for praying too many times at wars altar","Script will lobby if player is out of ectoplasm or runes.","Added support for prism of restoration spell to be cast for better reaver healing"]},{"date":"2024-01-30","title":"v1.0.2","items":["Drinks super restore if low prayer","Added imbued HSR/LOTD support for luck ring switch","Added option to ring of vigour switch for death skulls (for those without passive vigour effect)","Added safeguard to logout bot when your scripture of Jas runs out of charge","If you run out of reaver scrolls, bot will continue but print a warning to the console.","Bot will lobby if you happen to find yourself at death\'s office","Fixed super saradomin brew drinking"]},{"date":"2024-01-28","title":"v1.0.1","items":["Added option to utilize lantadyme incense sticks in your preset","Added option to throw a 2nd vuln bomb for slower t90/unlucky t95 kills","Bot will activate bonfire buff if its not active","Added option to drink super sara brews instead of normal ones","Fixed area loot support"]},{"date":"2024-01-26","title":"v1.0.0","items":["Release"]}]'),d={title:"RasialWithUs",description:"Fights Rasial, the First Necromancer using T90 or T95 gear.",slug:"/rasial-with-us"},c=void 0,h={id:"Scripts/Combat/Boss Scripts/RasialWithUs/index",title:"RasialWithUs",description:"Fights Rasial, the First Necromancer using T90 or T95 gear.",source:"@site/docs/Scripts/Combat/Boss Scripts/RasialWithUs/index.md",sourceDirName:"Scripts/Combat/Boss Scripts/RasialWithUs",slug:"/rasial-with-us",permalink:"/rasial-with-us",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"RasialWithUs",description:"Fights Rasial, the First Necromancer using T90 or T95 gear.",slug:"/rasial-with-us"},sidebar:"mainSidebar",previous:{title:"Pizzas Vorkath",permalink:"/Pizzas-Vorkath"},next:{title:"SanctumWithUs [Normal]",permalink:"/SanctumWithUs-Normal"}},u={},m=[{value:"Cost",id:"cost",level:2},{value:"Features",id:"features",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Setup",id:"setup",level:2},{value:"Changelog",id:"changelog",level:2}];function p(e){const i={admonition:"admonition",blockquote:"blockquote",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,n.M)(),...e.components},{Details:d}=i;return d||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.c,{title:"RasialWithUs",version:"v1.0.6",author:"BotWithUs",offical:"OFFICAL SCRIPT",skill:"Necromancy"}),"\n",(0,s.jsx)(i.admonition,{type:"hidden",children:(0,s.jsx)(i.h2,{id:"cost",children:"Cost"})}),"\n",(0,s.jsxs)(o.c,{title:"Cost",children:[(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"$150 USD / month (not including client access)"}),"\n"]}),"\n"]}),(0,s.jsx)(i.admonition,{title:"Limitations",type:"danger",children:(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.strong,{children:"In order to preserve the viability of the method and item prices, sessions are currently strictly limited to 2 per rasial sub."})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.strong,{children:"Additionally, there are limited seats sold for this script. You will not always be able to purchase it depending on capacity."})}),"\n"]})})]}),"\n",(0,s.jsx)(i.admonition,{type:"hidden",children:(0,s.jsx)(i.h2,{id:"features",children:"Features"})}),"\n",(0,s.jsx)(o.c,{title:"Features",children:(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Fights Rasial, averaging 1:10 - 1:30 killtimes using BIS gear, or 1:30-2:00 using T90 gear."}),"\n",(0,s.jsx)(i.li,{children:"Picks up drops, rinse and repeat."}),"\n",(0,s.jsx)(i.li,{children:"Has a number of safety mechanisms to lobby when the player is out of critical resources like item charge, runes, etc."}),"\n",(0,s.jsx)(i.li,{children:"Makes you a TON of gp!"}),"\n",(0,s.jsx)(i.li,{children:"Currently ~95m / hr on average"}),"\n"]}),"\n"]})}),"\n",(0,s.jsx)(i.admonition,{type:"hidden",children:(0,s.jsx)(i.h2,{id:"requirements",children:"Requirements"})}),"\n",(0,s.jsx)(o.c,{title:"Requirements",children:(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Ancient summoning unlocked for blood reaver"}),"\n",(0,s.jsx)(i.li,{children:"99+ Necromancy and all necromancy abilities and incantations unlocked from the well of Souls"}),"\n",(0,s.jsx)(i.li,{children:"Igneous Kal-Mor cape (Necromancy Zuk cape) or Igneous Kal-Ket cape"}),"\n",(0,s.jsx)(i.li,{children:"Level 115 herblore for adrenaline renewal potions"}),"\n",(0,s.jsx)(i.li,{children:"Haunted mine Quest + enchanted salve amulet"}),"\n",(0,s.jsx)(i.li,{children:"Alpha vs Omega quest complete to fight Rasial"}),"\n",(0,s.jsx)(i.li,{children:"Ring of vigour unlocked, and ideally made passive via Extinction request (not required, bot can vigour switch)"}),"\n",(0,s.jsx)(i.li,{children:"118 archaeology for Conservation of Energy (or boost from 110) OR Supreme Invigorate aura (+ resets to run it 24/7)"}),"\n",(0,s.jsx)(i.li,{children:"Guildmaster certification recommended"}),"\n",(0,s.jsx)(i.li,{children:"(Strongly Recommended): 300-400m+ to buy sufficient supplies for running all day"}),"\n"]}),"\n"]})}),"\n",(0,s.jsx)(i.admonition,{type:"hidden",children:(0,s.jsx)(i.h2,{id:"setup",children:"Setup"})}),"\n",(0,s.jsxs)(o.c,{title:"Setup",children:[(0,s.jsxs)(d,{children:[(0,s.jsx)("summary",{children:"T90 Preset Setup example"}),(0,s.jsx)(i.p,{children:"Brews flasks can be replaced with:"}),(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:'Super Guthix Brew flasks (BIS - "Best in slot")'}),"\n",(0,s.jsx)(i.li,{children:"Super Guthix rest flasks"}),"\n",(0,s.jsx)(i.li,{children:"Super Saradomin Brew Flasks"}),"\n"]}),(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"T90 Preset Example",src:t(1012).c+"",width:"427",height:"292"})})]}),(0,s.jsxs)(d,{children:[(0,s.jsx)("summary",{children:"T95 Preset Setup example"}),(0,s.jsx)(i.p,{children:"Brews flasks can be replaced with:"}),(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:'Super Guthix Brew flasks (BIS - "Best in slot")'}),"\n",(0,s.jsx)(i.li,{children:"Super Guthix rest flasks"}),"\n",(0,s.jsx)(i.li,{children:"Super Saradomin Brew Flasks"}),"\n"]}),(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"T95 Preset Example",src:t(3956).c+"",width:"524",height:"305"})})]}),(0,s.jsxs)(d,{children:[(0,s.jsx)("summary",{children:"UI Settings Guide"}),(0,s.jsx)(i.p,{children:"This is an example of a possible T90 UI setup."}),(0,s.jsx)(i.p,{children:"All recommended settings are optional, but lead to dps increase or qol increase. Use them if you can."}),(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsx)(i.li,{children:"If you have T90 weapon/lantern, use this option. The bot will do the T90 dps rotation."}),"\n",(0,s.jsx)(i.li,{children:"(Recommended) If you have the limitless ability codex unlocked, check this and the bot will use limitless for reflect in P4."}),"\n",(0,s.jsx)(i.li,{children:"(Highly Recommended) If you have the undead slayer codex unlocked, the bot will incorporate it into its rotation."}),"\n",(0,s.jsx)(i.li,{children:"(Highly Recommended) Enable this option to cast the Invoke death incantation. If you are wearing t90 deathdealer robes, this effect will apply automatically. If not, check the box to apply it so Rasial dies with 30k health left."}),"\n",(0,s.jsx)(i.li,{children:"(Recommended) Use the ingenuity of the humans codex (Required for smoke cloud to hit, if using smoke cloud)"}),"\n",(0,s.jsx)(i.li,{children:"(Recommended) Use smoke cloud at the start of fight for increased crit chance (Requires ingenuity of humans codex)"}),"\n",(0,s.jsx)(i.li,{children:"(Recommended) Throw a 2nd vulnerability bomb after the first one runs out. Will increase kill times marginally."}),"\n",(0,s.jsx)(i.li,{children:"(Recommended) Lantadyme sticks will mean your overload doses are 2minutes longer each!"}),"\n",(0,s.jsx)(i.li,{children:"Enable this if you don't have passive ring of vigour effect unlocked. You need a ring of vigour in your preset in this case. Passive effect recommended."}),"\n",(0,s.jsx)(i.li,{children:"(Highly recommended) Cast prism of restoration ancient magic spell. Heals familiar + restores their special points, meaning the reaver heals you more often."}),"\n",(0,s.jsx)(i.li,{children:"Enable this if for some reason your character isn't making it to the wall for the fight, or you dont want to surge at War's."}),"\n",(0,s.jsx)(i.li,{children:"(Recommended) Requires EOF or conjurer's necklace, swap to it when summoning conjures. Equates to 4%+ dps increase for the fight.\n13 (Recommended) Use the conjurer's necklace for the necklace swap. Only appears if 12 is checked."}),"\n"]}),(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"UI Settings",src:t(2108).c+"",width:"577",height:"435"})})]})]}),"\n",(0,s.jsx)(i.admonition,{type:"hidden",children:(0,s.jsx)(i.h2,{id:"changelog",children:"Changelog"})}),"\n",(0,s.jsx)(a.c,{changes:l})]})}function f(e={}){const{wrapper:i}={...(0,n.M)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},1012:(e,i,t)=>{t.d(i,{c:()=>s});const s=t.p+"assets/images/t90preset-725f188b68b5c57149e0a68a5116516b.png"},3956:(e,i,t)=>{t.d(i,{c:()=>s});const s=t.p+"assets/images/t95preset-bd32c9d99f9411f5d371239bb36b7b8c.png"},2108:(e,i,t)=>{t.d(i,{c:()=>s});const s=t.p+"assets/images/uisettings-faafc12d3a568e9c03c21587ddbbf9b1.png"}}]);