Source: https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/quests-leaderboards-and-variable-groups/quests-overview

# Quests Overview

Quests provide you with tools to create rich and engaging progression experiences in your worlds. You can access the Quests pane, which displays a list of a world’s quests, in the Desktop Editor by selecting **Quests** under the **Systems** button.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/b76cc167252c85cb2bf4bd475712dae3c9784d05fb89a629e8c00ddf55da0b7e.md)

### Overview
The image depicts a user interface of a game development environment, specifically showing a scene preview within a 3D editor. The left side displays a hierarchical structure of assets and scenes, while the central area shows a 3D model of a room or corridor. A small dialogue box is visible in the bottom right, indicating some form of interaction or feedback related to the scene.

### Key Elements
- **Left Panel**: Hierarchical structure labeled as "Hierarchy". Contains folders and assets such as "LOBBY", "BROADSIDE", "Strike_Broadside", and others. Each folder has a lock icon next to it, suggesting locked assets.
- **Scene Preview**: Central area showing a 3D model of a corridor or room with a metallic ceiling and walls. The perspective suggests the viewer is looking down a hallway.
- **Dialogue Box**: Located at the bottom right, displaying text that seems to be related to object selection or interaction ("Selection of an object...").
- **Navigation Bar**: At the top, includes options like "Navigation", "Quests", "Variable Groups", and "Leaderboards".
- **Toolbars**: Below the navigation bar, there are toolbars with icons for actions like play, pause, and settings.
- **Tabs**: At the bottom, tabs labeled "Asset Library", "Console", "Tests", "NPC Debugger", and "Performance".

### Visual Flow / Relationships
- **Most Prominent Element**: The scene preview in the central area.
- **Arrows/Connectors**: None visibly present.
- **Reading Order**: The hierarchy on the left is read vertically, while the scene preview and dialogue box are read horizontally across the screen.

</details>

<p></p>



Quests are automatically displayed to the player in two ways: a Quests gizmo object placed in the world, and by short-lived popups that appear in front of the player when the quest is completed.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/f2e7109f37edb686bc6ec0d42e801f6e282e7683901ed0f8ae6a286cd89e58c0.md)

### Overview
The image depicts a user interface element labeled "Quests." It appears to be part of a game or application interface, showing a quest titled "Example Quest" with a description underneath. The layout includes navigation controls at the bottom and a circular icon at the top.

### Key Elements
- **Title**: "Quests" located at the top-center of the interface.
- **Quest Card**: Positioned centrally, containing the quest title "Example Quest" and a description "This is an example of creating a Simple quest." Below the description, there is a progress indicator showing "0/1," indicating the completion status of the quest.
- **Circular Icon**: Located at the top-left corner, featuring a star symbol within a circle.
- **Navigation Buttons**: Two buttons are present at the bottom-left and bottom-right corners, likely for previous and next actions respectively.
- **Progress Indicator**: Positioned to the right of the quest card, showing "0/1."

### Visual Flow / Relationships
- **Most Prominent Element**: The quest card is the most prominent visual element as it contains the core information.
- **Arrows/Connections**: There are no arrows or lines connecting elements, but the navigation buttons suggest a sequential flow.
- **Spatial Relationships**: The circular icon is separate from the quest card, while the navigation buttons are positioned symmetrically at the bottom.

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

[Screenshot 2024-05-14 at 3.34.37 PM.png](../../image_data/7d1010de6a156c1c5a9e306129f28507212a4e2c4a01ae6d88b1afcad8f91052.md)

### Overview
This image depicts a form interface titled "Edit Quest." It includes various fields and buttons for editing quest details such as Script ID, Name, Description, Quest Type, Activation criteria, and Success criteria. There are also buttons labeled "Cancel" and "Save."

### Key Elements
- **Script ID**: Located at the top left, with a placeholder text "Example ID."
- **Name**: Positioned below the Script ID field, showing "Example Ques" with a counter "13/40" indicating character limit.
- **Description**: A text area containing the text "This is an example of creating a Simple quest." with a counter "46/100" indicating remaining characters.
- **Quest Type**: A dropdown menu currently set to "Tracked."
- **Activation criteria**: Below the Quest Type, with a "Define" button to its right.
- **Success criteria**: Below the Activation criteria, with another "Define" button to its right.
- **Cancel**: A button located at the bottom left.
- **Save**: A blue button located at the bottom right.

### Visual Flow / Relationships
The form is structured vertically with clear labels above each input field. The "Cancel" and "Save" buttons are positioned at the bottom, with the "Save" button highlighted in blue, suggesting it is the primary action button. The form elements are arranged in a linear fashion, with no overlapping or complex relationships indicated.

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

[All image details and metadata](../../image_data/987edf634b7b573051033d5b34ddb0c2f8f73dae2c809b2f54d287edb9fe0eef.md)

### Overview
This image depicts a user interface for defining success criteria in a quest management system. It includes two objectives with conditions based on persistent variables, along with buttons for navigation and saving changes.

### Key Elements
- **Title**: "Define success criteria" located at the top-center.
- **Header**: "Determines when your quest shows as complete, and what players have to do in order to complete it." Positioned just below the title.
- **Actions Section**: Contains two objectives labeled "Objective 1" and "Objective 2."
  - **Objective 1**: 
    - **Persistent Variable**: "Example PPV"
    - **Condition**: "is at least 2"
  - **Objective 2**: 
    - **Persistent Variable**: "Example2 PPV"
    - **Condition**: "is at least 100"
- **Buttons**: 
  - "Add objective" button located to the right of Objective 1.
  - "Back" button located at the bottom-left.
  - "Save" button located at the bottom-right.
- **Dropdown Menu**: Located within Objective 1 and Objective 2, showing "Example PPV" and "Example2 PPV" respectively.
- **Trash Icons**: Small trash icons next to each objective for deleting them.
- **Input Fields**: Numeric inputs for setting thresholds ("2" and "100").
- **AND Connector**: A connector labeled "AND" between the two objectives.

### Visual Flow / Relationships
- **Most Prominent Element**: The objectives and their conditions.
- **Arrows/Connectors**: The "AND" connector implies a logical relationship between the two objectives.
- **Spatial Relationships**: Objectives are stacked vertically, with the "AND" connector connecting them horizontally.

</details>

<p></p>



### Edit/Reset My Quests

The **Debug Quests** button in the upper right of the Quests pane opens the Debug Quests pane, which allows you to edit the completion state of individual quests or reset all quests to the incomplete state. This can be used while testing and debugging your quests by either “rewinding” the quests in the world to an earlier state, or “fast forwarding” the world past the completion of certain quests without having to spend time actually completing the objectives while debugging.

Note that while setting simple quests to complete or incomplete is straightforward, tracked persistent quests can have unexpected interactions with their corresponding persistent variables. It is always possible to mark a tracked persistent quest “complete” using the Debug Quest panel, but you cannot mark a tracked persistent quest incomplete if the underlying variable has a value that meets the configured threshold for the quest. To mark such tracked persistent quests incomplete, you must first set the persistent variable to a value below the threshold for the quest. You can also reset a tracked persistent quest to be in a partially completed state by setting the persistent variable to a nonzero value (but below the threshold), and then setting the quest as incomplete.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/987edf634b7b573051033d5b34ddb0c2f8f73dae2c809b2f54d287edb9fe0eef.md)

### Overview
This image depicts a user interface for defining success criteria in a quest management system. It includes two objectives with conditions based on persistent variables, along with buttons for navigation and saving changes.

### Key Elements
- **Title**: "Define success criteria" located at the top-center.
- **Header**: "Determines when your quest shows as complete, and what players have to do in order to complete it." Positioned just below the title.
- **Actions Section**: Contains two objectives labeled "Objective 1" and "Objective 2."
  - **Objective 1**: 
    - **Persistent Variable**: "Example PPV"
    - **Condition**: "is at least 2"
  - **Objective 2**: 
    - **Persistent Variable**: "Example2 PPV"
    - **Condition**: "is at least 100"
- **Buttons**: 
  - "Add objective" button located to the right of Objective 1.
  - "Back" button located at the bottom-left.
  - "Save" button located at the bottom-right.
- **Dropdown Menu**: Located within Objective 1 and Objective 2, showing "Example PPV" and "Example2 PPV" respectively.
- **Trash Icons**: Small trash icons next to each objective for deleting them.
- **Input Fields**: Numeric inputs for setting thresholds ("2" and "100").
- **AND Connector**: A connector labeled "AND" between the two objectives.

### Visual Flow / Relationships
- **Most Prominent Element**: The objectives and their conditions.
- **Arrows/Connectors**: The "AND" connector implies a logical relationship between the two objectives.
- **Spatial Relationships**: Objectives are stacked vertically, with the "AND" connector connecting them horizontally.

</details>

<p></p>



## TypeScript support

The TypeScript API includes several functions that help track and manage quests. An overview of this functionality can be found in the [CodeBlocks Achievements doc](../../Scripting/API%20references%20and%20examples/CodeBlock%20Achievements.md).

> **Note:** “Achievements” is a legacy name for quests, and the TypeScript API reflects this. The Achievements TypeScript functions still work as intended for quests.