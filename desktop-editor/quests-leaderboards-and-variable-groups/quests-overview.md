Source: https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/quests-leaderboards-and-variable-groups/quests-overview

# Quests Overview

Quests provide you with tools to create rich and engaging progression experiences in your worlds. You can access the Quests pane, which displays a list of a world’s quests, in the Desktop Editor by selecting **Quests** under the **Systems** button.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452701819_512527177951905_977449343255919239_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=vogxPERJHGEQ7kNvwFVSMS-&_nc_oc=Adm-EKtWbUbBf6hHbn4KDl35K6ADLHJ7wbtaLg2oX-c9pM7deyAP3wSCRaoxXuJBwW8&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=UoyPoYiuX-kMELWT8gDjxg&oh=00_AfhKRO2_POHu2Bh9HOVeMQzqCF2cCit5TtPPUsM_Y7ZLbw&oe=692BE5E1)

Quests are automatically displayed to the player in two ways: a Quests gizmo object placed in the world, and by short-lived popups that appear in front of the player when the quest is completed.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452751771_512527237951899_4210170058283152757_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=rPhd-nkybLwQ7kNvwEnFgsR&_nc_oc=AdmPJUCgcmGgRkC96tqOEYksesogRA2QQQ-fPide4TqnDqSP106FnQjDJ7Ondl9ZqQM&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=UoyPoYiuX-kMELWT8gDjxg&oh=00_AfjCArGwxA_bU1K4wf8Xu0pqZkxbJOtwk6OMZjv8NjhIZA&oe=692BFA53)

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

![Screenshot 2024-05-14 at 3.34.37 PM.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452653624_512527144618575_2951338986895663304_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=KCVEvFBXyzkQ7kNvwHBZdIb&_nc_oc=AdnxCFWysdSb8DRUk2RLTX08zYKktbWXE8nhDkjsVDxeYWa3sroa_bCmIvLNKD_ZdPI&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=UoyPoYiuX-kMELWT8gDjxg&oh=00_AfjMHk9mm2KfUdA2z5KKftmv-8qYPok7vjVp_ZBcVKhjfw&oe=692C0B0B)

* **Quest Type:** Changing to the type to **Tracked** unlocks the following two fields:

  + **Activation Criteria**
  + **Success Criteria**
* **Activation Criteria:** This is the criteria that will be used to determine if the quest is active. You can define the criteria by clicking ‘Define’ and adding an objective, which is a persistent variable from a variable group attached to the world, with its completion threshold. You must set up the persistent variables and variable groups before you create the Tracked Persistent quest. You can add multiple objectives by clicking **Add objective** or remove objectives by clicking the **trash bin** on the right side of the objective. Objectives can be evaluated with either an “AND” or “OR” condition, which is set for *all* criteria and not individually.
* **Success Criteria:** This is the criteria that will be used to determine completion of this quest. The criteria can be defined in the same way as the Activation Criteria. The threshold for the Success Criteria is the threshold value for the persistent variables at which you want this quest to be automatically marked complete. Note that if one or more objectives later drop below the threshold, the quest will *not* automatically revert to incomplete.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/453002677_512527141285242_4410578538436637672_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=e-LLPdsQPFsQ7kNvwFP02jh&_nc_oc=AdmBwZK8vbaH3fS4p2L4yktmG56UKfM8ZoH_zKQddUfImH30MxaM0AsOPnx8KmFFavQ&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=UoyPoYiuX-kMELWT8gDjxg&oh=00_AfigmvapP2Gjl5dpZlsiiHFJEDv-32i4AcP5CtStwpfccA&oe=692BE2DF)

### Edit/Reset My Quests

The **Debug Quests** button in the upper right of the Quests pane opens the Debug Quests pane, which allows you to edit the completion state of individual quests or reset all quests to the incomplete state. This can be used while testing and debugging your quests by either “rewinding” the quests in the world to an earlier state, or “fast forwarding” the world past the completion of certain quests without having to spend time actually completing the objectives while debugging.

Note that while setting simple quests to complete or incomplete is straightforward, tracked persistent quests can have unexpected interactions with their corresponding persistent variables. It is always possible to mark a tracked persistent quest “complete” using the Debug Quest panel, but you cannot mark a tracked persistent quest incomplete if the underlying variable has a value that meets the configured threshold for the quest. To mark such tracked persistent quests incomplete, you must first set the persistent variable to a value below the threshold for the quest. You can also reset a tracked persistent quest to be in a partially completed state by setting the persistent variable to a nonzero value (but below the threshold), and then setting the quest as incomplete.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/453002677_512527141285242_4410578538436637672_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=e-LLPdsQPFsQ7kNvwFP02jh&_nc_oc=AdmBwZK8vbaH3fS4p2L4yktmG56UKfM8ZoH_zKQddUfImH30MxaM0AsOPnx8KmFFavQ&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=UoyPoYiuX-kMELWT8gDjxg&oh=00_AfigmvapP2Gjl5dpZlsiiHFJEDv-32i4AcP5CtStwpfccA&oe=692BE2DF)

## TypeScript support

The TypeScript API includes several functions that help track and manage quests. An overview of this functionality can be found in the [CodeBlocks Achievements doc](/horizon-worlds/learn/documentation/typescript/api-references-and-examples/codeblock-achievements/).

> **Note:** “Achievements” is a legacy name for quests, and the TypeScript API reflects this. The Achievements TypeScript functions still work as intended for quests.