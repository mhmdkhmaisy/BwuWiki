"use strict";(self.webpackChunkbotwithuswiki=self.webpackChunkbotwithuswiki||[]).push([[3296],{48320:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>h,contentTitle:()=>t,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var s=r(17624),i=r(4552);const o={},t="Script Submission Workflow",a={id:"Guides/ScriptSubmissionWorkflow",title:"Script Submission Workflow",description:"This document outlines the process for submitting changes to your scripts using feature branches and squashing commits. This ensures that your script reviewers can review all changes in a single, consolidated commit, improving the review process.",source:"@site/docs/Guides/ScriptSubmissionWorkflow.md",sourceDirName:"Guides",slug:"/Guides/ScriptSubmissionWorkflow",permalink:"/Guides/ScriptSubmissionWorkflow",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Bot Monitoring",permalink:"/Bot-Monitoring"},next:{title:"Open Source",permalink:"/single-docs/Open Source"}},h={},c=[{value:"Step-by-Step Workflow using Github Desktop (Recommended)",id:"step-by-step-workflow-using-github-desktop-recommended",level:2},{value:"Clone the Repository",id:"clone-the-repository",level:3},{value:"Create a Feature Branch",id:"create-a-feature-branch",level:3},{value:"Make Your Changes",id:"make-your-changes",level:3},{value:"Commit Your Changes",id:"commit-your-changes",level:3},{value:"Squash Your Commits",id:"squash-your-commits",level:3},{value:"Push the Main Branch",id:"push-the-main-branch",level:3},{value:"Delete the Feature Branch (Optional)",id:"delete-the-feature-branch-optional",level:3},{value:"Step-by-Step Workflow using Git CLI",id:"step-by-step-workflow-using-git-cli",level:2},{value:"Clone the Repository",id:"clone-the-repository-1",level:3},{value:"Create a Feature Branch",id:"create-a-feature-branch-1",level:3},{value:"Make Your Changes",id:"make-your-changes-1",level:3},{value:"Squash Commits into One",id:"squash-commits-into-one",level:3},{value:"Push the Feature Branch",id:"push-the-feature-branch",level:3},{value:"Merge the Feature Branch into <code>main</code>",id:"merge-the-feature-branch-into-main",level:3},{value:"Delete the Feature Branch (Optional)",id:"delete-the-feature-branch-optional-1",level:3},{value:"Summary of Commands",id:"summary-of-commands",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"script-submission-workflow",children:"Script Submission Workflow"}),"\n",(0,s.jsx)(n.p,{children:"This document outlines the process for submitting changes to your scripts using feature branches and squashing commits. This ensures that your script reviewers can review all changes in a single, consolidated commit, improving the review process."}),"\n",(0,s.jsx)(n.h2,{id:"step-by-step-workflow-using-github-desktop-recommended",children:"Step-by-Step Workflow using Github Desktop (Recommended)"}),"\n",(0,s.jsx)(n.h3,{id:"clone-the-repository",children:"Clone the Repository"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Open ",(0,s.jsx)(n.strong,{children:"GitHub Desktop"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Go to ",(0,s.jsx)(n.strong,{children:"File > Clone Repository"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["In the new window, select your repository from the list or enter the URL of the repository, then click ",(0,s.jsx)(n.strong,{children:"Clone"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"This will create a local copy of the repository on your computer."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"create-a-feature-branch",children:"Create a Feature Branch"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["In ",(0,s.jsx)(n.strong,{children:"GitHub Desktop"}),", go to the branch dropdown in the top middle of the window."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Click ",(0,s.jsx)(n.strong,{children:"New Branch"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Give your branch a meaningful name that describes what you\u2019re working on (e.g., ",(0,s.jsx)(n.code,{children:"feature/your-feature-name"}),")."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Click ",(0,s.jsx)(n.strong,{children:"Create Branch"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["You\u2019ve now created and switched to a new branch, isolating your changes from the ",(0,s.jsx)(n.code,{children:"main"})," branch."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"make-your-changes",children:"Make Your Changes"}),"\n",(0,s.jsx)(n.p,{children:"Make the necessary changes to your scripts using your preferred editor or IDE. GitHub Desktop will automatically detect the changes."}),"\n",(0,s.jsx)(n.h3,{id:"commit-your-changes",children:"Commit Your Changes"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Once you\u2019ve made changes, go back to ",(0,s.jsx)(n.strong,{children:"GitHub Desktop"})," and select your repo."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"In the bottom left corner, you\u2019ll see a list of modified files. You can review the changes here."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Write a descriptive commit message in the ",(0,s.jsx)(n.strong,{children:"Summary"})," field, explaining what changes you made."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Click ",(0,s.jsx)(n.strong,{children:"Commit to feature/your-feature-name"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"If you make additional changes, repeat this step to commit them incrementally."})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"squash-your-commits",children:"Squash Your Commits"}),"\n",(0,s.jsx)(n.p,{children:"Once you\u2019ve completed all your changes and committed them, it\u2019s time to squash your commits into a single commit."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["In ",(0,s.jsx)(n.strong,{children:"GitHub Desktop"})," with your ",(0,s.jsx)(n.code,{children:"main"})," branch selected, click ",(0,s.jsx)(n.strong,{children:"Branch"})," in the top menu and choose ",(0,s.jsx)(n.strong,{children:"Squash and Merge into current branch..."}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Select the ",(0,s.jsx)(n.code,{children:"feature/your-feature-name"}),' branch as the branch you want to "Squash and Merge into ',(0,s.jsx)(n.code,{children:"main"}),'".']}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["GitHub Desktop will prompt you with an option to squash your commits. Choose ",(0,s.jsx)(n.strong,{children:"Squash and Merge"})," or a similar option (depending on your version)."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Confirm the squash and complete the process."}),"\n",(0,s.jsx)(n.p,{children:"This will combine all your commits into a single commit, making it easier for the reviewer to see all your changes at once."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"push-the-main-branch",children:"Push the Main Branch"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["In ",(0,s.jsx)(n.strong,{children:"GitHub Desktop"}),", click ",(0,s.jsx)(n.strong,{children:"Push Origin"})," in the top toolbar to push your feature branch and squashed commit to the remote repository."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"delete-the-feature-branch-optional",children:"Delete the Feature Branch (Optional)"}),"\n",(0,s.jsx)(n.p,{children:"Once your feature has been merged, you can delete the feature branch:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["In ",(0,s.jsx)(n.strong,{children:"GitHub Desktop"}),", go to the branch dropdown and select ",(0,s.jsx)(n.strong,{children:"Delete Branch"})," from the options for your feature branch."]}),"\n",(0,s.jsxs)(n.li,{children:["If you also want to delete the branch from the remote repository, open GitHub in your browser and go to the ",(0,s.jsx)(n.strong,{children:"Branches"})," section of your repository, then delete the feature branch there as well."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Following this workflow helps ensure that your reviewers can see all your changes in a single commit, making the review process smoother and more efficient."}),"\n",(0,s.jsx)(n.p,{children:"If you have any questions or run into any issues, please reach out!"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"step-by-step-workflow-using-git-cli",children:"Step-by-Step Workflow using Git CLI"}),"\n",(0,s.jsx)(n.h3,{id:"clone-the-repository-1",children:"Clone the Repository"}),"\n",(0,s.jsx)(n.p,{children:"If you haven't already cloned your repository, you can do so using the following command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/your-username/your-repo.git\n"})}),"\n",(0,s.jsx)(n.p,{children:"Navigate into your project directory:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd your-repo\n"})}),"\n",(0,s.jsx)(n.h3,{id:"create-a-feature-branch-1",children:"Create a Feature Branch"}),"\n",(0,s.jsx)(n.p,{children:"Before making any changes, create a new branch. This branch will house your changes while you work on them. Use a meaningful name that describes what you're working on:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"git checkout -b feature/your-feature-name\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This ensures your changes are isolated from the ",(0,s.jsx)(n.code,{children:"main"})," branch until they are ready to be reviewed."]}),"\n",(0,s.jsx)(n.h3,{id:"make-your-changes-1",children:"Make Your Changes"}),"\n",(0,s.jsx)(n.p,{children:"Now that you're on your feature branch, make the necessary changes to your scripts. You can commit your work incrementally as you go:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'git add .\ngit commit -m "A descriptive commit message"\n'})}),"\n",(0,s.jsx)(n.p,{children:"Feel free to commit as often as needed while working on your feature."}),"\n",(0,s.jsx)(n.h3,{id:"squash-commits-into-one",children:"Squash Commits into One"}),"\n",(0,s.jsx)(n.p,{children:"Once you\u2019ve completed your feature, you should squash your commits into a single commit to make it easier for the reviewer to see all the changes at once. To do this, follow these steps:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Start an interactive rebase from the first commit on your feature branch:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"git rebase -i main\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["This will open an editor with a list of your commits. For all commits except the first one, change the word ",(0,s.jsx)(n.code,{children:"pick"})," to ",(0,s.jsx)(n.code,{children:"squash"})," (or just ",(0,s.jsx)(n.code,{children:"s"}),")."]}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pick 1234567 First commit message\nsquash 89abcdef Second commit message\nsquash 0fedcba Third commit message\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Save and close the editor. Git will squash the commits into one."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Another editor will open, allowing you to combine the commit messages into one. Write a clear message describing the changes you've made in the single commit."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Save and close the editor to complete the process."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"push-the-feature-branch",children:"Push the Feature Branch"}),"\n",(0,s.jsx)(n.p,{children:"Push your squashed feature branch to your remote repository:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"git push origin feature/your-feature-name\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"merge-the-feature-branch-into-main",children:["Merge the Feature Branch into ",(0,s.jsx)(n.code,{children:"main"})]}),"\n",(0,s.jsxs)(n.p,{children:["Once you have reviewed the changes yourself and are happy with them, merge the feature branch into ",(0,s.jsx)(n.code,{children:"main"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"git checkout main\ngit pull origin main\ngit merge feature/your-feature-name\n"})}),"\n",(0,s.jsxs)(n.p,{children:["After merging, push the updated ",(0,s.jsx)(n.code,{children:"main"})," branch:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"git push origin main\n"})}),"\n",(0,s.jsx)(n.h3,{id:"delete-the-feature-branch-optional-1",children:"Delete the Feature Branch (Optional)"}),"\n",(0,s.jsx)(n.p,{children:"If you\u2019re done with the feature branch, you can delete it to keep your repository clean:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"git branch -d feature/your-feature-name\ngit push origin --delete feature/your-feature-name\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"summary-of-commands",children:"Summary of Commands"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Create and switch to a new branch:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"git checkout -b feature/your-feature-name\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Add and commit your changes:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'git add .\ngit commit -m "A descriptive commit message"\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Squash your commits:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"git rebase -i main\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Push your feature branch:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"git push origin feature/your-feature-name\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Merge your branch into ",(0,s.jsx)(n.code,{children:"main"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"git checkout main\ngit pull origin main\ngit merge feature/your-feature-name\ngit push origin main\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Delete the feature branch (optional):"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"git branch -d feature/your-feature-name\ngit push origin --delete feature/your-feature-name\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.p,{children:"Following this workflow helps ensure that your reviewers can see all your changes in a single commit, making the review process smoother and more efficient."}),"\n",(0,s.jsx)(n.p,{children:"If you have any questions or run into any issues, please reach out!"})]})}function d(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}}}]);