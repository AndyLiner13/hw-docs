Source: https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/quests-leaderboards-and-variable-groups/quests-overview

# Quests Overview

Quests provide you with tools to create rich and engaging progression experiences in your worlds. You can access the Quests pane, which displays a list of a world’s quests, in the Desktop Editor by selecting **Quests** under the **Systems** button.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../../../images/output/img_20251211_090223_20251211_090223.md)

### Overview
This image depicts a user interface from a game development environment, likely a scene editor or level builder. The interface includes a hierarchy view on the left, a preview window in the center, and various toolbars at the top and bottom. The preview window shows a 3D environment with a focus on a corridor and a staircase.

### Key Elements
- **Hierarchy View**: Located on the left side, it displays a tree-like structure of objects and assets within the project. Elements include folders labeled "LOBBY," "[ARENA-CORE]," "BROADSIDE," and others. Some elements have lock icons next to them, indicating locked assets.
- **Search Bar**: Below the hierarchy view, there is a search bar labeled "Search hierarchy."
- **Preview Window**: Occupies the central area of the screen, showing a 3D environment with a corridor and a staircase. The environment has a muted color palette with beige, brown, and gray tones.
- **Toolbars**: At the top, there are several toolbars with icons and dropdown menus. These include navigation options ("Navigation," "Quests," "Variable Groups," "Leaderboards"), system-related options ("Build," "Systems," "Preview," "Scripts"), and a Gen AI button. On the right side, there are additional toolbars with camera controls, zoom settings, and other editing tools.
- **Bottom Toolbars**: At the very bottom, there are tabs labeled "Asset Library," "Console," "Tests," "NPC Debugger," and "Performance." There is also a search bar for the Asset Library and a dropdown menu for sorting assets.

### Visual Flow / Relationships
The hierarchy view is the most prominent element on the left, guiding the viewer's attention to the assets and objects within the project. The preview window in the center provides a visual representation of the 3D environment being worked on. The toolbars at the top and bottom offer various functionalities and settings that can be adjusted during the editing process. The layout suggests a workflow where users navigate through the hierarchy, select assets, and then view and edit them in the preview window.

</details>

<p></p>



Quests are automatically displayed to the player in two ways: a Quests gizmo object placed in the world, and by short-lived popups that appear in front of the player when the quest is completed.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../../../images/output/img_20251211_090318_20251211_090318.md)

### Overview
This image depicts a user interface element labeled "Quests." It appears to be part of a game or application where quests can be created or managed. The interface includes a title, quest details, and navigation controls at the bottom.

### Key Elements
- **Title**: Located at the top-center of the interface. Contains the word "Quests" in bold black font.
- **Quest Card**: Positioned centrally below the title. Contains the following elements:
  - **Quest Name**: "Example Quest" written in a smaller font above a description.
  - **Description**: "This is an example of creating a Simple quest." Written in a smaller font beneath the quest name.
  - **Progress Bar**: A horizontal bar indicating progress, showing "0/1" next to a star icon.
- **Navigation Controls**: At the bottom of the interface, there are two circular icons with arrow symbols pointing left and right, likely for navigating through quests.

### Visual Flow / Relationships
The most prominent visual element is the quest card, which draws attention due to its central placement and larger size compared to the navigation controls. The navigation arrows are positioned symmetrically at the bottom corners, suggesting a way to move forward or backward through quests.

</details>

<p></p>



## Quests pane

The Quests pane in Desktop Editor displays all existing quests configured for the current world. The Quests pane has the following features:

* Create up to 100 quests per world by clicking the plus-shaped **Create Quest button**.
* Edit an existing quest by clicking on the **Edit button** next to its name when highlighted with the mouse cursor.
* Delete a quest by clicking the **Trash can button** to the right of its name when highlighted by the mouse cursor. Remember, once a quest is deleted, it can’t be restored.
* The order of quests in the Quests pane determines their default order in the Quests Panel gizmo.

## Creating and editing quests

As a world owner, there are two kinds of quests that you can create: Simple quests and persistent tracked quests. Create a new quest by clicking the plus-shaped **Create Quest** button in the Quests pane, or edit an existing quest by clicking the **Edit** button next to the quest’s name in the list.

### Simple Quests

A simple quest is a boolean value: It is either complete or incomplete. Simple quests are marked complete or incomplete by the execution of [Player.setAchievementComplete](https://horizon.meta.com/resources/scripting-api/core.player.setachievementcomplete.md/) in TypeScript.

When configuring a Simple quest, you must provide the following information in the Create Quest pane:

* **Script ID:** This is an identifier used by some TypeScript functions and code blocks to identify this quest using string fields. Not all code blocks use the Script ID; some use the Name in a dropdown list. This ID is unrelated to the name of the scripts that will reference the quest. Generally, this ID should be unique across all quests in the world so that each quest can be individually identified by scripts. If you use the same ID for multiple quests they can be addressed as a group, but you will no longer be able to differentiate them in scripts.
* **Name:** This is the name of the quest that will be displayed to the player on the top line of the UI. It is also used in some code blocks to select the quest using a dropdown list. It should be short but descriptive, such as a few words or a phrase.
* **Description:** This is a longer block of text that describes the quest. It might provide hints to the player on how to complete the quest, or other info for the player about why this quest is desirable. It is displayed in small text below the name of the quest.
* **Quest Type:** For simple quests, select **Simple** from this dropdown.

### Tracked persistent quests

A tracked persistent quest has all the capabilities of a simple quest, plus the ability to be marked complete automatically when a tracked persistent variable reaches a pre-configured threshold. Note that persistent quests are *not* automatically marked as incomplete if the variable later drops below this threshold. Tracked persistent quests can also be marked complete or incomplete by using [Player.setAchievementComplete](https://horizon.meta.com/resources/scripting-api/core.player.setachievementcomplete.md/) in TypeScript.

Because tracked persistent quests have one or more persistent variables attached, they can be in a partially completed state. The ring around the quest’s thumbnail image is colored in proportion to the progress of the tracked variable against the threshold value. The Completion line in the UI contains the current value of the persistent variable relative to the threshold value (for example,  “4/15” for a PPV with the current value of 4, and a configured threshold of 15).

Tracked Persistent quests have all the configuration parameters of Simple quests as described above (**Script ID**, **Name**, **Description**, **Who can see this quest?**), plus the following:

<details>
<summary>Screenshot 2024-05-14 at 3.34.37 PM.png</summary>

<p></p>

[Screenshot 2024-05-14 at 3.34.37 PM.png](../../../../images/output/img_20251211_090423_20251211_090423.md)

### Overview
This image depicts a modal window titled "Edit Quest" with various fields and options for editing quest details. The layout includes input fields, dropdown menus, and buttons for canceling or saving changes.

### Key Elements
- **Title**: "Edit Quest" located at the top-left corner.
- **Script ID**: A text input field labeled "Script ID" with placeholder text "Example ID" and a counter indicating "13/40".
- **Name**: A text input field labeled "Name" with placeholder text "Example Quest".
- **Description**: A text area labeled "Description" containing the text "This is an example of creating a Simple quest." with a counter indicating "46/100".
- **Quest Type**: A dropdown menu labeled "Tracked" with a downward arrow indicating a dropdown option.
- **Activation criteria**: A "Define" button located to the right of this section.
- **Success criteria**: Another "Define" button located below the previous one.
- **Buttons**: Two buttons at the bottom, "Cancel" and "Save".

### Visual Flow / Relationships
The most prominent visual elements are the input fields and the "Save" button. The form is structured in a linear fashion, moving from top to bottom and left to right. There are no arrows or lines connecting elements, but the placement suggests a sequential process from inputting details to saving them.

</details>

<p></p>



* **Quest Type:** Changing to the type to **Tracked** unlocks the following two fields:

  + **Activation Criteria**
  + **Success Criteria**
* **Activation Criteria:** This is the criteria that will be used to determine if the quest is active. You can define the criteria by clicking ‘Define’ and adding an objective, which is a persistent variable from a variable group attached to the world, with its completion threshold. You must set up the persistent variables and variable groups before you create the Tracked Persistent quest. You can add multiple objectives by clicking **Add objective** or remove objectives by clicking the **trash bin** on the right side of the objective. Objectives can be evaluated with either an “AND” or “OR” condition, which is set for *all* criteria and not individually.
* **Success Criteria:** This is the criteria that will be used to determine completion of this quest. The criteria can be defined in the same way as the Activation Criteria. The threshold for the Success Criteria is the threshold value for the persistent variables at which you want this quest to be automatically marked complete. Note that if one or more objectives later drop below the threshold, the quest will *not* automatically revert to incomplete.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../../../images/output/img_20251211_090538_20251211_090538.md)

### Overview
This image depicts a user interface screen titled "Define success criteria." It is part of a quest management system where users can set conditions for quest completion. The screen includes two objectives, each with conditional statements involving persistent variables.

### Key Elements
- **Title**: "Define success criteria" located at the top-center.
- **Objective 1**: 
  - **Visual description**: A rectangular box containing a conditional statement.
  - **Location**: Top section of the screen.
  - **Contents**: "If persistent variable Example PPV is at least 2"
  - **Visual styling**: Dark gray background, white text, blue dropdown arrow for the variable selection.
- **Objective 2**: 
  - **Visual description**: Another rectangular box similar to Objective 1 but with a different condition.
  - **Location**: Below Objective 1.
  - **Contents**: "If persistent variable Example2 PPV is at least 100"
  - **Visual styling**: Same as Objective 1.
- **Actions Section**: Located above the objectives.
  - **Visual description**: A heading labeled "Actions."
  - **Location**: Top-left corner.
  - **Contents**: "Add objective" button.
- **Buttons**: 
  - **Back**: Located at the bottom-left corner.
  - **Save**: Located at the bottom-right corner, highlighted in blue.
- **Dropdowns**: 
  - **Example PPV**: Located within Objective 1.
  - **Example2 PPV**: Located within Objective 2.
- **Trash Icons**: Small trash icons next to each objective for deletion.

### Visual Flow / Relationships
- **Most prominent visually**: The two objectives are the focal points of the screen.
- **Arrows/Connectors**: No arrows or connectors are present.
- **Spatial relationships**: Objectives are stacked vertically, with the "AND" connector linking them horizontally.

</details>

<p></p>



### Edit/Reset My Quests

The **Debug Quests** button in the upper right of the Quests pane opens the Debug Quests pane, which allows you to edit the completion state of individual quests or reset all quests to the incomplete state. This can be used while testing and debugging your quests by either “rewinding” the quests in the world to an earlier state, or “fast forwarding” the world past the completion of certain quests without having to spend time actually completing the objectives while debugging.

Note that while setting simple quests to complete or incomplete is straightforward, tracked persistent quests can have unexpected interactions with their corresponding persistent variables. It is always possible to mark a tracked persistent quest “complete” using the Debug Quest panel, but you cannot mark a tracked persistent quest incomplete if the underlying variable has a value that meets the configured threshold for the quest. To mark such tracked persistent quests incomplete, you must first set the persistent variable to a value below the threshold for the quest. You can also reset a tracked persistent quest to be in a partially completed state by setting the persistent variable to a nonzero value (but below the threshold), and then setting the quest as incomplete.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../../../images/output/img_20251211_090652_20251211_090652.md)

### Overview
This image depicts a user interface screen titled "Define success criteria." It is part of a quest management system where users can set conditions for quest completion. The screen includes two objectives, each with conditional statements involving persistent variables.

### Key Elements
- **Title**: "Define success criteria" located at the top-center.
- **Objective 1**: 
  - **Visual description**: A rectangular box containing a conditional statement.
  - **Location**: Top section of the screen.
  - **Contents**: "If persistent variable Example PPV is at least 2"
  - **Visual styling**: Dark gray background, white text, blue dropdown arrow for the variable selection.
- **Objective 2**: 
  - **Visual description**: Another rectangular box similar to Objective 1 but with a different condition.
  - **Location**: Below Objective 1.
  - **Contents**: "If persistent variable Example2 PPV is at least 100"
  - **Visual styling**: Same as Objective 1.
- **Actions Section**: Located above the objectives.
  - **Visual description**: A heading labeled "Actions."
  - **Location**: Top-left corner.
  - **Contents**: "Add objective" button.
- **Buttons**: 
  - **Back**: Located at the bottom-left corner.
  - **Save**: Located at the bottom-right corner, highlighted in blue.
- **Dropdowns**: 
  - **Example PPV**: Located within Objective 1.
  - **Example2 PPV**: Located within Objective 2.
- **Trash Icons**: Small trash icons next to each objective for deletion.

### Visual Flow / Relationships
- **Most prominent visually**: The two objectives are the focal points.
- **Arrows/Connectors**: No arrows or connectors are present.
- **Spatial relationships**: Objectives are stacked vertically, with the "AND" connector linking them horizontally.

</details>

<p></p>



## TypeScript support

The TypeScript API includes several functions that help track and manage quests. An overview of this functionality can be found in the [CodeBlocks Achievements doc](../../Scripting/API%20references%20and%20examples/CodeBlock%20Achievements.md).

> **Note:** “Achievements” is a legacy name for quests, and the TypeScript API reflects this. The Achievements TypeScript functions still work as intended for quests.