Source: https://developers.meta.com/horizon-worlds/learn/documentation/mhcp-program/community-tutorials/version-control-video-tutorial-with-pigeonno12

# Version Control Video Tutorial with PigeonNo12

[](https://video-dfw5-3.xx.fbcdn.net/v/t42.1790-2/453528678_8721657244517529_5214271437231748372_n.mp4?_nc_cat=109&ccb=1-7&_nc_sid=6500a6&_nc_ohc=zt_mpFsi6LAQ7kNvwEEkI98&_nc_oc=AdnJzjh1U5jERxYzbbmH_PgqMEWNhQq75rGDgGeufgb0qhdvEYrOdi6zmchzC5Nos2A&_nc_zt=28&_nc_ht=video-dfw5-3.xx&_nc_gid=mcbWAG367heP56QUetXCaw&oh=00_AfgeaXjBo45CFP0QsSNx30p_2-ycjfbRLy1qoWS-8nCPfA&oe=691788A0)

If you’re coding in TypeScript, Version Control is crucial to properly track edits, manage versioning, access code backups, and more.

Thankfully, PigeonNo12 has created an introductory TypeScript Version Control Guide that covers everything you need to get started and safeguard your coding progress.

Timestamps:

[00:04] Introduction

[00:13] What Is Source Control

[00:33] What You Will Learn

[00:54] Software Prerequisites

[01:08] Skills Prerequisites

[01:24] Importance Of Source Control

[01:56] Initializing A Repository

[02:37] Staging A Change

[04:06] Committing A Change

[05:32] Comparing And Restoring Versions

[07:24] Next Steps

[07:44] Wrap Up

## Introduction

## Video time code [00:04]

### Creator Skill Level

Beginner/Entry Level Creators

### Recommended Prerequisite Background Knowledge

This guide is recommended for creators who use TypeScript, either fully or partially, to script interactions within a world.

Readers should have a basic understanding of TypeScript, as this guide does not cover the basics of how TypeScript works.

### Required Equipment

* Meta Horizon Desktop Editor
* Visual Studio Code (VSC) connected to the Meta Horizon Desktop Editor
* Git

### Description

Source control, also known as version control, is a system that records changes to a set of files over time. This enables creators to track edits, compare different versions, and revert to earlier versions as necessary, functioning like a time machine for file management.

Please use the companion video and the timestamps provided to follow along with MHCP Mentor, PigeonNo12, for additional assistance.

### Learning Objectives

* Understand the fundamentals of source control in the context of Typescript development in Meta Horizon Worlds.
* Evaluate basic features and workflows of Git + Visual Studio Code to determine the best fit for world creation projects in Horizon Words.

*------------------------------------------------------*

## What Is Source Control?

## Video Time Code [00:11]

Source control, also known as version control or revision control, is a system that manages changes to the content of a collection of files over time. It enables creators to track edits, compare different versions, and revert to earlier versions as necessary. Essentially, source control functions like a time machine for file management.

### The Importance of Source Control

Source control is crucial for several reasons:

* **Version Tracking** : Source control enables creators to track changes made to TypeScript files over time. This allows them to understand the evolution of the code, and when those changes were made.
* **Collaboration** : Source control provides mechanisms for managing concurrent changes, preventing conflicts, and facilitating collaboration among multiple creators.
* **Risk Mitigation** : By maintaining a history of changes, source control provides a safety net for creators. If an error is introduced or a feature breaks, creators can easily revert to a previous working version.
* **Experimentation** : Source control systems allow developers to create “branches”, which are separate versions of the code. This enables experimentation with new features or fixes without impacting the main code.
* **Code Integrity and Quality** : Source control encourages best practices such as code review, and testing.

## Prerequisite Installation and Configuration

## Video Time Code [00:56]

### Installing Git

In order to follow along with this guide, it’s required to have Git installed. Git can be downloaded from [Git - Downloading Package (git-scm.com)](https://git-scm.com/download/win). After downloading the version that matches your operating system, install it by following the default installation steps.

### Configuring Git in VS Code

After successfully installing Git on your machine, no additional steps are required to use source control in Visual Studio Code.

## Initializing a Repository

## Video Time Code [02:00]

Visual Studio Code provides easy integration of Source Control in your TypeScript projects. To initialize a repository simply follow the steps below:

- In Visual Code Studio, navigate to the “View” menu. From there, select the “Source Control” option to begin the process.
  ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452995707_512537577950865_8390463397834706074_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=I2aYv8qYx3UQ7kNvwEuE19X&_nc_oc=AdmMlLN48gMaQflF7TFMwj9AyupZ_LFTXitsmGufvrBB2HO-RNRrvEt8yNukQBVI8oU&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=mcbWAG367heP56QUetXCaw&oh=00_AfhWXLAY978WGEKchpZ-xZogc5rbEkW-DG89EDl4oNRf3A&oe=692BF4A1)
- Once in the “Source Control” tab, click on the “Initialize Repository” button. Git will then detect all files in your project and display them for your review. You can then stage the files you want to include in your repository by selecting them. Staging files prepares them for commitment to your backup or source control repository. ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/453000757_512537447950878_4010954102108811180_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=jVMTMC6Y4IwQ7kNvwEkb7NL&_nc_oc=Admo6IUPL7wkfEDgMr6eAz6jz_HhDvaw2mTk4h35oOvPZ5HCu9XRZuHbKB3rl2G6Aoc&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=mcbWAG367heP56QUetXCaw&oh=00_Afgp7YrFHn-PBm6X6IGAWYHq7rPYXkpDPGZ3267JQBneWw&oe=692BF818)![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452635830_512537441284212_5829106462267404284_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=ybm9ioqr2MMQ7kNvwGc9RY_&_nc_oc=Adl3-beHlZyl79NMCmh4aOd5u1Xo8kqcfh1lVN62QKPTLQmRJxildhZcseuhscvLvAQ&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=mcbWAG367heP56QUetXCaw&oh=00_Afg1kYQEPAZ8grEayp7hlVSjiyplx8NQMXY3raUCnD3rqQ&oe=692BF014)

## Staging a Change

## Video Time Code [02:38]

Staging a change allows you to select which scripts to include in your next snapshot of your world before saving them in your repository. This process helps you organize your changes before officially saving them, ensuring you only save what you need and nothing extra.

To stage a change in Visual Studio Code, click on the plus (+) sign next to the file that you want to modify. For example, if you wanted to stage a file called “TeleportManager.ts,” you would click on the + icon next to it. This action moves the file to the section called “Staged Changes.”

You can repeat this process for each file individually, or if you want to stage all files within the repository at once, you can click on the plus (+) sign next to the header that says “Changes.” This will move all files to the “Staged Changes” section of the panel.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452677911_512537494617540_6078825956406230297_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=He69hDBw80UQ7kNvwGlrRQN&_nc_oc=AdnP_a24UGJD54dafQtSahtYuKpY21KLUmXfa4s-obXOCbcsd-K_Aj_ifX90oF18oH0&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=mcbWAG367heP56QUetXCaw&oh=00_AfiOuCzF85impiGkHa-8JlIZkEIZj8cByvYmt74ILGPGVg&oe=692C0A19)![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452845714_512537514617538_6658451868732766575_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=_Yj4_sV2u7YQ7kNvwE41CC3&_nc_oc=Adm_VOzN8QFPL-SQTQVHrUBNsv4c1lbQmBevFDNcP6d1n2VR47IJZ7WUVySHH0NwPAU&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=mcbWAG367heP56QUetXCaw&oh=00_Afh3KLVWASDgnpNcOPHBJlYMOqOwEvXaHuT6v4thh1H5EA&oe=692BDAFC)

To remove the files from the staging state, select the subtraction (-) symbol next to the name of the files that you don’t want to stage. This will move the file back to the “Changes” section of the panel.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452916333_512537431284213_6812551739992151224_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=wLa6d7Np2uEQ7kNvwG72Moq&_nc_oc=AdmEI3W1F1NtB32ca4bBtTaAI10qK6J447uxWb7spMXMkRpYbyBg0JAVoNZqsZv0Xpw&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=mcbWAG367heP56QUetXCaw&oh=00_AfiTrEhQMybPfMcbCVh64JDHrZz-RnYyOxy0JrFdwT5HHA&oe=692C0333)

## Committing a Change

## Video Time Code [04:05]

When you commit a change in source control, you’re saving the changes you’ve made to your project. This creates a new checkpoint or snapshot of your work, making sure that your progress is safely stored and allowing you to track the history of your project over time.

To commit a change in Visual Studio Code, enter a brief description of the changes that you are saving in the field that says “Message” above the “Commit” button. Then, select “Commit” to save the changes.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452714379_512537571284199_8935988249060385698_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=VPy21bXxpXEQ7kNvwHd3ToR&_nc_oc=AdlnsETgMCPydEtyqDyr-T1wxWeqKOyTrRWMdfkgq9L9bH9HTXVDALiEkVXTqhAOlq0&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=mcbWAG367heP56QUetXCaw&oh=00_Afg6Tx4Aj7sFozM9aqwVqKh0y4fF4AkdfJwKw84Z_27bww&oe=692BE715)

## Comparing and Restoring Versions

## Video Time Code [05:32]

The importance of source control is the ability to revert to a prior state of your project, allowing you to compare your current files with earlier versions. To compare and restore versions, follow the steps below:

Go to the “View” menu and select “Explorer,” or click the icon that looks like a sheet of paper on the left side of the panel.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452588229_512537491284207_1788830861911557850_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=DK045SqKTJEQ7kNvwEo0SnV&_nc_oc=Adm7Bxlmd0Pm9LO2Do9YmRlLYsX5F90vFCu1DdgyttK3CRjxas-bWjQJVUCjt_jHidk&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=mcbWAG367heP56QUetXCaw&oh=00_AfgbYmRluO8INZ5604l980_i552ikBY3w9jabis7lcRnOw&oe=692C0AEA)

## Comparing Versions

To compare a file to a previous version in Visual Studio Code (VSC), follow these steps:

- Select the file you want to restore.
- In the bottom panel, you’ll find a section labeled “Timeline.” Here, you can choose the commit you wish to review or the desired checkpoint you want to restore.
- Each commit is displayed with its associated comment, helping you identify specific versions.
- When you select a checkpoint, VSC displays the changes made at that point. Additions to the code are highlighted in green, while deletions are marked in red.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452875322_512537487950874_5027238636395676812_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=8CJ-8Yyk2z4Q7kNvwH_TJ27&_nc_oc=Adn-vmVSpgPwiyKCLPhgCK1pr17EW1fLQ-wKqCcV9PeWHahLOOWocEBlmLCrGAxlyfU&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=mcbWAG367heP56QUetXCaw&oh=00_AfgpL27HnlzVKWupaH2nlBjAy8skS3EZfUbsR1m4fVpFvA&oe=692BF60E)

## Restoring Versions

To restore a previous version in Visual Studio Code (VSC), follow these steps:

- Select the desired commit, then highlight all the code (use Ctrl+A), copy it (Ctrl+C), return to your current file, select all existing code (Ctrl+A again), and paste the copied code (Ctrl+V).
- Save the file to complete the restoration. For instance, if you want to revert to the original version of a file without any added comments, locate that commit in the Timeline, follow the same copy-paste process, and save. This will restore the file to its original state without the added comments.
- After saving the file, make sure to commit the changes to git, to keep the repository updated with these changes

## Out-of-Scope World Changes Not Covered with Source Control

## Video Time Code [07:24]

At this time (June 2024), Source Control only covers changes made to the TypeScript scripts. It doesn’t cover changes made in the world such as attaching scripts to objects or world design. For these changes, Meta Horizon has a backup system that creators can leverage to restore a prior state of the world.

## Next Steps

Visual Code Studio has some extensions/add-ins that could make the Source Control Workflow easier. We encourage you to explore these and evaluate which ones could benefit your process. Some examples are [Git Graph](https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph) and [Git History](https://marketplace.visualstudio.com/items?itemName=donjayamanne.githistory) .

## Further Assistance

For any questions or further assistance, creators are encouraged to join the discussion on the [Discord server](https://discord.com/channels/1033100463500963931/1033102315613343876) or to schedule a [mentor session](https://meta-horizon-creators.com/3Z2gRFH) for personalized guidance.