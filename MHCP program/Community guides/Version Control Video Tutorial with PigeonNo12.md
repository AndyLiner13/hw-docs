Source: https://developers.meta.com/horizon-worlds/learn/documentation/mhcp-program/community-tutorials/version-control-video-tutorial-with-pigeonno12

# Version Control Video Tutorial with PigeonNo12

[](https://video-dfw5-3.xx.fbcdn.net/v/t42.1790-2/453528678_8721657244517529_5214271437231748372_n.mp4?_nc_cat=109&ccb=1-7&_nc_sid=6500a6&_nc_ohc=2iJdHk_cE_YQ7kNvwFjaMHX&_nc_oc=AdkA-TIv1sYXeMolGfZuahLHVyZg9D4WkGmdPJhpUNzs3fqXyZHR-_2xzOvNSLHd4KJUoMXopwS9ienBFcIC6UtU&_nc_zt=28&_nc_ht=video-dfw5-3.xx&_nc_gid=QrFAlAqjdMBhljdoWT9W9g&oh=00_AfmCq1f1eNHjta31kcTsQOsWa_EdzAgneY3DhSiqF2nXaw&oe=69410FE0)

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
  <details>
  <summary>Image Content</summary>
  
  <p></p>
  
  [All image details and metadata](../../image_data/3ad43b25c2a9cede3b31b028e5360653b2b0091198b6a142640b98737389aec5.md)
  
  ### Overview
  This image depicts a screenshot of the Visual Studio Code interface, specifically showing the "View" menu expanded. The menu contains various options related to the editor's functionality, such as command palette, open view, appearance settings, and source control integration.
  
  ### Key Elements
  - **Menu Header**: Located at the top, the "View" menu header is highlighted.
  - **Menu Items**: Below the header, there are several menu items listed vertically:
    - Command Palette...
    - Open View...
    - Appearance
    - Editor Layout
    - Explorer
    - Search
    - Source Control
    - Run
    - Extensions
    - Problems
    - Output
    - Debug Console
    - Terminal
    - Word Wrap
  - **Shortcut Keys**: Each menu item has associated shortcut keys displayed next to them.
  - **Menu Background**: The menu has a dark gray background with white text.
  - **Menu Border**: The menu has a thin light gray border around its edges.
  - **Menu Position**: The menu is positioned centrally over the main editor area.
  
  ### Visual Flow / Relationships
  - **Most Prominent Element**: The "Source Control" option is highlighted, indicating it is currently selected.
  - **Reading Order**: The menu items are arranged in a vertical list, with no specific directional flow indicated by arrows or lines.
  - **Spatial Relationships**: All menu items are aligned vertically within the menu, with no overlapping or nested elements.
  
  </details>
  
  <p></p>
  
  
- Once in the “Source Control” tab, click on the “Initialize Repository” button. Git will then detect all files in your project and display them for your review. You can then stage the files you want to include in your repository by selecting them. Staging files prepares them for commitment to your backup or source control repository. <details>
                                                                                                                                                                                                                                                                                                                                                 <summary>Image Content</summary>
                                                                                                                                                                                                                                                                                                                                                 
                                                                                                                                                                                                                                                                                                                                                 <p></p>
                                                                                                                                                                                                                                                                                                                                                 
                                                                                                                                                                                                                                                                                                                                                 [All image details and metadata](../../image_data/5849930645eaf503d627a23fd0f5ec80039494b5f492253a19de81f82a0f1abe.md)
                                                                                                                                                                                                                                                                                                                                                 
                                                                                                                                                                                                                                                                                                                                                 ### Overview
                                                                                                                                                                                                                                                                                                                                                 This image depicts the welcome screen of Visual Studio Code (VS Code), a popular code editor. The screen is divided into two main sections: a sidebar on the left and the main content area on the right. The sidebar contains a message about source control and options related to Git repositories. The main content area displays a welcome message and a list of recent files.
                                                                                                                                                                                                                                                                                                                                                 
                                                                                                                                                                                                                                                                                                                                                 ### Key Elements
                                                                                                                                                                                                                                                                                                                                                 - **Sidebar (Left Panel)**:
                                                                                                                                                                                                                                                                                                                                                   - **Visual description**: A vertical sidebar with icons and text.
                                                                                                                                                                                                                                                                                                                                                   - **Location**: Left side of the screen.
                                                                                                                                                                                                                                                                                                                                                   - **Contents**: Icons for various functions like file management, search, and more.
                                                                                                                                                                                                                                                                                                                                                   - **Visual styling**: Dark theme with white icons and light-colored text.
                                                                                                                                                                                                                                                                                                                                                   
                                                                                                                                                                                                                                                                                                                                                 - **Message Box**:
                                                                                                                                                                                                                                                                                                                                                   - **Visual description**: A rectangular box with a blue header and white text.
                                                                                                                                                                                                                                                                                                                                                   - **Location**: Top-left corner of the sidebar.
                                                                                                                                                                                                                                                                                                                                                   - **Contents**: Text explaining that the folder currently open doesn't have a Git repository and providing options to initialize a repository or publish to GitHub.
                                                                                                                                                                                                                                                                                                                                                   - **Visual styling**: Blue background with white text.
                                                                                                                                                                                                                                                                                                                                                 
                                                                                                                                                                                                                                                                                                                                                 - **Buttons**:
                                                                                                                                                                                                                                                                                                                                                   - **Initialize Repository**: A blue button with white text.
                                                                                                                                                                                                                                                                                                                                                   - **Publish to GitHub**: Another blue button with white text.
                                                                                                                                                                                                                                                                                                                                                   - **Location**: Below the message box.
                                                                                                                                                                                                                                                                                                                                                   - **Visual styling**: Blue background with white text.
                                                                                                                                                                                                                                                                                                                                                 
                                                                                                                                                                                                                                                                                                                                                 - **Main Content Area (Right Panel)**:
                                                                                                                                                                                                                                                                                                                                                   - **Visual description**: A large area displaying the VS Code logo and welcome message.
                                                                                                                                                                                                                                                                                                                                                   - **Location**: Right side of the screen.
                                                                                                                                                                                                                                                                                                                                                   - **Contents**: Text saying "Visual Studio Code Editing evolved" and a list of start options like "New File...", "Open File...", "Open Folder...", and "Connect to...".
                                                                                                                                                                                                                                                                                                                                                   - **Visual styling**: Dark background with white text.
                                                                                                                                                                                                                                                                                                                                                 
                                                                                                                                                                                                                                                                                                                                                 - **Recent Files List**:
                                                                                                                                                                                                                                                                                                                                                   - **Visual description**: A list of recent files with paths displayed.
                                                                                                                                                                                                                                                                                                                                                   - **Location**: Bottom-right corner of the main content area.
                                                                                                                                                                                                                                                                                                                                                   - **Contents**: Paths to recent files starting with "scripts" and ending with a "More..." option.
                                                                                                                                                                                                                                                                                                                                                   - **Visual styling**: Dark background with white text.
                                                                                                                                                                                                                                                                                                                                                 
                                                                                                                                                                                                                                                                                                                                                 ### Visual Flow / Relationships
                                                                                                                                                                                                                                                                                                                                                 - **Most prominent visually**: The welcome message and the recent files list.
                                                                                                                                                                                                                                                                                                                                                 - **Arrows/lines/connectors**: None.
                                                                                                                                                                                                                                                                                                                                                 - **Spatial relationships**: The sidebar is on the left, the welcome message is at the top-left of the sidebar, and the main content area occupies the right side of the screen. The recent files list is at the bottom-right of the main content area.
                                                                                                                                                                                                                                                                                                                                                 
                                                                                                                                                                                                                                                                                                                                                 </details>
                                                                                                                                                                                                                                                                                                                                                 
                                                                                                                                                                                                                                                                                                                                                 <p></p>
                                                                                                                                                                                                                                                                                                                                                 
                                                                                                                                                                                                                                                                                                                                                 <details>
                                                                                                                                                                                                                                                                                                                                                 <summary>Image Content</summary>
                                                                                                                                                                                                                                                                                                                                                 
                                                                                                                                                                                                                                                                                                                                                 <p></p>
                                                                                                                                                                                                                                                                                                                                                 
                                                                                                                                                                                                                                                                                                                                                 [All image details and metadata](../../image_data/db065eabbd240bb05ddb4c993f8288fff47c2b22c376505fd09a1df65354a016.md)
                                                                                                                                                                                                                                                                                                                                                 
                                                                                                                                                                                                                                                                                                                                                 ### Overview
                                                                                                                                                                                                                                                                                                                                                 This image depicts a screenshot of a source control interface within a code editor, likely Visual Studio Code, showing a file explorer and commit options. The interface includes a sidebar with various icons representing different actions, a main content area displaying files, and a commit message field at the top.
                                                                                                                                                                                                                                                                                                                                                 
                                                                                                                                                                                                                                                                                                                                                 ### Key Elements
                                                                                                                                                                                                                                                                                                                                                 - **Sidebar Icons**: Located on the left side, these icons represent different functionalities such as file operations, version control, and more. The icon for changes is highlighted with a blue circle indicating 34 changes.
                                                                                                                                                                                                                                                                                                                                                 - **Main Content Area**: This occupies the central part of the screen, showing a list of files under `.editor` and `.gitignore`. The `.gitignore` file is highlighted with a cursor, suggesting it is the current selection.
                                                                                                                                                                                                                                                                                                                                                 - **Commit Message Field**: At the top, there is a field labeled "Message (Ctrl+Enter to commit on 'main')" with a placeholder text indicating how to commit changes.
                                                                                                                                                                                                                                                                                                                                                 - **Commit Button**: Below the commit message field, there is a blue button labeled "Commit" with a checkmark icon.
                                                                                                                                                                                                                                                                                                                                                 - **Changes Counter**: To the right of the commit button, there is a counter showing "34" next to a small icon, indicating the number of changes.
                                                                                                                                                                                                                                                                                                                                                 
                                                                                                                                                                                                                                                                                                                                                 ### Visual Flow / Relationships
                                                                                                                                                                                                                                                                                                                                                 The most prominent visual element is the `.gitignore` file in the main content area, as indicated by the cursor. The commit button is the secondary focal point, suggesting the user can commit changes. The commit message field is positioned above the commit button, guiding the user to provide a message before committing. The sidebar icons are arranged vertically, providing quick access to different functionalities.
                                                                                                                                                                                                                                                                                                                                                 
                                                                                                                                                                                                                                                                                                                                                 </details>
                                                                                                                                                                                                                                                                                                                                                 
                                                                                                                                                                                                                                                                                                                                                 <p></p>
                                                                                                                                                                                                                                                                                                                                                 
                                                                                                                                                                                                                                                                                                                                                 

## Staging a Change

## Video Time Code [02:38]

Staging a change allows you to select which scripts to include in your next snapshot of your world before saving them in your repository. This process helps you organize your changes before officially saving them, ensuring you only save what you need and nothing extra.

To stage a change in Visual Studio Code, click on the plus (+) sign next to the file that you want to modify. For example, if you wanted to stage a file called “TeleportManager.ts,” you would click on the + icon next to it. This action moves the file to the section called “Staged Changes.”

You can repeat this process for each file individually, or if you want to stage all files within the repository at once, you can click on the plus (+) sign next to the header that says “Changes.” This will move all files to the “Staged Changes” section of the panel.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/dfc0c6b1fc27fd9d852f0d14f3e20d3ea726893344ad61f25da1c2ece7b5d2c1.md)

### Overview
This image depicts a screenshot of a source control interface within a code editor, likely Visual Studio Code. The interface includes a sidebar with file changes, a commit message input field, and a commit button. There's also a welcome panel on the right side.

### Key Elements
- **Source Control Panel**: Located at the top-left, showing a list of files with their status (U for untracked, T for tracked).
    - **Visual description**: A vertical list of files with icons indicating their status.
    - **Location**: Top-left corner.
    - **Contents**: Files listed include `GameController.ts`, `PlayerManager.ts`, and `TeleportManager.ts`.
    - **Visual styling**: Dark background with light text, icons in white.
- **Commit Message Input Field**: Positioned above the file list.
    - **Visual description**: A rectangular input field with placeholder text.
    - **Location**: Above the file list.
    - **Contents**: Placeholder text reads "Message (Ctrl+Enter to commit on 'main'...)".
    - **Visual styling**: Light background with dark text, bordered by a thin line.
- **Commit Button**: A blue button labeled "Commit" with a checkmark icon.
    - **Visual description**: A rectangular button with rounded corners.
    - **Location**: Below the commit message field.
    - **Contents**: Text "Commit" with a checkmark icon.
    - **Visual styling**: Blue background with white text and icon.
- **Changes Section**: A section under the file list showing the number of changes.
    - **Visual description**: A small icon and a number indicating changes.
    - **Location**: Below the file list.
    - **Contents**: An icon resembling a folder with a plus sign and the number "3".
    - **Visual styling**: White icon on a dark background.
- **Stage Changes Button**: A button located near the bottom-right of the screen.
    - **Visual description**: A rectangular button with text.
    - **Location**: Bottom-right corner.
    - **Contents**: Text "Stage Changes".
    - **Visual styling**: Light background with dark text.
- **Welcome Panel**: On the far right.
    - **Visual description**: A panel with a title and a close button.
    - **Location**: Far right.
    - **Contents**: Title "Welcome" with a close button next to it.
    - **Visual styling**: Light background with dark text and a dark border.

### Visual Flow / Relationships
- **Most Prominent Element**: The commit button due to its central placement and prominent color.
- **Arrows/Connections**: No arrows or connections are visible.
- **Spatial Relationships**: The commit button is below the commit message field, and the changes section is below the file list. The stage changes button is positioned at the bottom-right corner. The welcome panel is on the far right.

</details>

<p></p>

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/77762b0f6d9640854f5373914ddbd8123690da60382a77347890a9351e5692a2.md)

### Overview
This image depicts a screenshot of a source control interface within a code editor, likely Visual Studio Code, showing staged changes and commit options. The interface includes a message field for committing changes, a commit button, and a list of files with their respective statuses.

### Key Elements
- **Message Field**: Located at the top, it has a placeholder text "> Message (Ctrl+Enter to commit on "main")". It is a rectangular input field with a dark gray background.
- **Commit Button**: Positioned below the message field, it is a blue button labeled "Commit" with a checkmark icon.
- **Staged Changes Section**: This section lists files that have been staged for commit. Files include "Collectibles.ts", "HUD.ts", and "LoadingUI.ts", each with a small icon next to them indicating their status.
- **Changes Section**: Below the Staged Changes, this section lists additional files with a plus sign icon next to them, suggesting new additions to the changeset.
- **File List**: Contains a vertical list of TypeScript (.ts) files such as "AnimationController.ts", "Blaster.ts", "CustomLogger.ts", etc., each with a small icon indicating their status.
- **Icons**: Small icons next to file names represent different statuses or actions related to the files.
- **Counters**: Numbers next to some icons indicate the count of changes or pending actions.

### Visual Flow / Relationships
The most prominent visual elements are the message field and the commit button. The interface flows from the top-down, starting with the message field, followed by the commit button, then the Staged Changes section, and finally the Changes section. There are no arrows or lines connecting elements, but the layout suggests a linear reading order from top to bottom.

</details>

<p></p>



To remove the files from the staging state, select the subtraction (-) symbol next to the name of the files that you don’t want to stage. This will move the file back to the “Changes” section of the panel.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/58c0808f8a98514fc57f2ed9c37269adb8645882dd91778a9338a5d2f38fcaf6.md)

### Overview
This image depicts a screenshot of a Source Control interface within a code editor, likely Visual Studio Code. The interface includes a sidebar with file listings and a commit message input field at the top. There are also buttons for committing changes and unstaging changes.

### Key Elements
- **Source Control Panel**: Located on the left side, showing a tree view of files with TypeScript files (`GameController.ts`, `PlayerManager.ts`, `TeleportManager.ts`) listed under `Staged Changes`.
- **Commit Button**: A blue button labeled `Commit` with a checkmark icon, located above the file list.
- **Unstage Changes Button**: A button labeled `Unstage Changes` in a dropdown menu that appears when hovering over the `GameController.ts` file.
- **Message Input Field**: A text input field at the top with placeholder text indicating how to commit changes.
- **Sidebar Icons**: Various icons representing different actions such as file operations and project management, located on the far left.
- **Welcome Panel**: A small panel on the right side displaying the word "Welcome" with a close button.

### Visual Flow / Relationships
The most prominent visual elements are the `Commit` button and the `Unstage Changes` button, which are interactive elements. The `Commit` button is larger and more central compared to the `Unstage Changes` button, which is smaller and located within a dropdown menu. The `Message` input field is positioned above the file list, and the `Welcome` panel is on the far right. The file list is hierarchical, with folders and files nested under `Staged Changes`.

</details>

<p></p>



## Committing a Change

## Video Time Code [04:05]

When you commit a change in source control, you’re saving the changes you’ve made to your project. This creates a new checkpoint or snapshot of your work, making sure that your progress is safely stored and allowing you to track the history of your project over time.

To commit a change in Visual Studio Code, enter a brief description of the changes that you are saving in the field that says “Message” above the “Commit” button. Then, select “Commit” to save the changes.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/c4829c28c18b10abc8d904ef1c773f709c1d912686a42dd776fef29f2164a98b.md)

### Overview
This image depicts a screenshot of a source control interface within a code editor, likely Visual Studio Code, showing a commit process. The interface includes a sidebar with file changes and a commit button.

### Key Elements
- **Source Control Header**: Located at the top-left, labeled "SOURCE CONTROL". Contains a search bar with the text "> Implemented game managers".
- **Commit Button**: A blue button with a checkmark icon and the text "> Commit" below it.
- **File List**: On the left side, under "Staged Changes", there are several TypeScript files listed:
  - PlayerManager.ts
  - TeleportManager.ts
  - GameController.ts
- **Changes Section**: Below the file list, there's a section labeled "Changes" with a count of 1 next to it.
- **Sidebar Icons**: On the far left, there are icons representing different functionalities such as file management and version control.
- **Welcome Panel**: On the right side, there's a "Welcome" panel with a blue icon and text.

### Visual Flow / Relationships
The most prominent visual element is the commit button, which is centrally located and highlighted. The file list is organized vertically under the "Staged Changes" heading. The Welcome panel is positioned on the far right, providing a contrast to the darker theme of the main interface.

</details>

<p></p>



## Comparing and Restoring Versions

## Video Time Code [05:32]

The importance of source control is the ability to revert to a prior state of your project, allowing you to compare your current files with earlier versions. To compare and restore versions, follow the steps below:

Go to the “View” menu and select “Explorer,” or click the icon that looks like a sheet of paper on the left side of the panel.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/efb585d4c2abf8b41304e76dc8c5ae787d4d546d038702351509496ffb21a378.md)

### Overview
This image depicts a screenshot of a Visual Studio Code interface, specifically showing the "View" menu expanded under the "Window" menu. The menu items are listed vertically, with some shortcuts provided next to them.

### Key Elements
- **Visual description**: The menu items are listed in a vertical column.
- **Location**: Located in the right panel of the screen.
- **Contents**: 
    - "Command Palette..."
    - "Open View..."
    - "Appearance"
    - "Editor Layout"
    - "Explorer" (highlighted)
    - "Search"
    - "Source Control"
    - "Run"
    - "Extensions"
    - "Problems"
    - "Output"
    - "Debug Console"
    - "Terminal"
- **Visual styling**: The menu has a dark theme with white text and light gray separators between items.

### Visual Flow / Relationships
- **Most prominent visually**: The "Explorer" item is highlighted, indicating it is currently selected or active.
- **Arrows/lines/connectors**: There are no arrows or lines connecting the items.
- **Spatial relationships**: Items are arranged in a vertical list, with each item aligned to the left.

</details>

<p></p>



## Comparing Versions

To compare a file to a previous version in Visual Studio Code (VSC), follow these steps:

- Select the file you want to restore.
- In the bottom panel, you’ll find a section labeled “Timeline.” Here, you can choose the commit you wish to review or the desired checkpoint you want to restore.
- Each commit is displayed with its associated comment, helping you identify specific versions.
- When you select a checkpoint, VSC displays the changes made at that point. Additions to the code are highlighted in green, while deletions are marked in red.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/66958702c0b8d6b41132686aa7fcfbbf2363fd2f9cbcc321c579abcf6fe4f19e.md)

### Overview
This image depicts a screenshot of a code editor interface, specifically showing a TypeScript file named `PhysicsVehicle.ts`. The editor displays code related to a class `PhysicsVehicle`, which extends another class `hz.Component`. The code includes methods such as `start()` and `delayedStart()`, along with conditional checks for various properties like `playerCamera`, `visibleCar`, `playerFloor`, `carBigWheel`, and `carBigWheelZAxis`.

### Key Elements
- **Visual description**: Code editor window with syntax highlighting.
- **Location**: Center of the image.
- **Contents**: Code snippet with TypeScript syntax.
- **Visual styling**: Dark theme with syntax highlighting for keywords, comments, and strings.

### Visual Flow / Relationships
- Most prominent visually: The code editor window.
- Arrows, lines, or connectors: None.
- Spatial relationships: The code is organized into methods and conditional statements, with logical flow indicated by indentation and line breaks.

</details>

<p></p>



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