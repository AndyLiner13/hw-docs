# Quests gizmo

## Access the quests gizmo

 While you can access and configure the gizmos in the [VR tool](https://developers.meta.com/horizon-worlds/learn/documentation/vr-creation/getting-started/create-a-new-world-in-horizon), the following steps show you how to access the quests gizmo from the desktop
editor and add it to the [scene pane](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/getting-started/user-interface/UI-panels-and-tabs#scene-pane).
1. In the desktop editor while in the Build mode, select Build > Gizmos from the menu bar, search for "quests" in the search field.
2. Select the quests gizmo and drag it into the scene.
3. You can now edit the new gizmo properties in the [Properties panel](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/getting-started/user-interface/UI-panels-and-tabs#properties-pane).

  

# Quests gizmo

## Properties

 The quests gizmo is an entity. All objects in a world are represented by
entities. [Entities](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_entity) have their respective properties such as position, rotation, and scale. In the
Properties panel, you can edit the gizmo's transformation fields to configure
its Position, Rotation, and Scale. Additionally, like the transformation, [Color](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_color) can be edited in the UI panel or controlled through scripting. In the Quests section, additional properties are available to customize and manage quests. Displayed Title lets you name the visual display of the quest panel. # of Entries Per Page controls the number of quests you can see per page. Properties such as Panel UI Mode and Use HUI Panel let you configure the gizmo's appearance and style. LOD Radius controls the maximum visibility distance. Visible controls the gizmo's visibility. For more information on the quests gizmo properties, see the [MHCP creator's manual](https://github.com/MHCPCreators/horizonCreatorManual/blob/main/HorizonTechnicalDoc.md#quests).  

# Quests gizmo

## Scripting

 To set up the script that updates quests results for players in the world, use
the APIs: To display player achievements, use the `displayAchievements` method in the [AchievementGizmo](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_achievementsgizmo) class. To set and query if an achievement is complete, use the `setAchievementComplete` and `hasCompletedAchievement` methods in the [Player](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_player) class. Additionally, built-in [CodeBlockEvents](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_codeblockevents) are available to listen for events such as when an achievement has been
completed: `OnAchievementComplete`.  

# Quests gizmo

## What's next?

 Now that you've been introduced to the quests gizmo, continue your learning with
hands-on tutorials, and more related developer guides:
• [Tutorial worlds on variable groups and persistent variables](https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/scripted-avatar-npc-tutorial/module-1-setup)
• [Tutorial worlds on quests](https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/scripted-avatar-npc-tutorial/module-5-quest-manager)
• [Tutorial worlds on persistent variables](https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/custom-ui-examples-tutorial/station-7-persistent-variables)
• [Meta Horizon Creator Program's creator manual on the quests gizmo](https://my-od.developers.meta.com/horizon-worlds/learn/documentation/code-blocks-and-gizmos/quest-gizmo)
• [Quests, leaderboards, and variable groups](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/quests-leaderboards-and-variable-groups/quests-leaderboards-and-variable-groups)
• [Writing for localization on providing description of the quest](https://developers.meta.com/horizon-worlds/learn/documentation/save-optimize-and-publish/internationalization/writing-for-localization)

    ![Nav Logo](https://static.xx.fbcdn.net/rsrc.php/yE/r/3SoBlk8EqOQ.svg)


[Facebook](https://www.facebook.com/MetaHorizon/)
[Threads](https://www.threads.com/@metahorizon)
[X](https://x.com/MetaHorizon/)
[Instagram](https://www.instagram.com/metahorizon/)
[YouTube](https://www.youtube.com/@MetaQuestVR)

 Learn
[Documentation](https://developers.meta.com/horizon-worlds/learn/documentation/)
[Blog](https://developers.meta.com/horizon/blog/)
[Forum](https://communityforums.atmeta.com/t5/Creator-Forum/ct-p/Meta_Horizon_Creator_Forums)

 Programs
[Meta Horizon Creator Program](https://developers.meta.com/horizon-worlds/programs/)

 My Creations
[My Worlds](https://horizon.meta.com/creator/worlds_all/?utm_source=horizon_worlds_creator)
[My Assets](https://horizon.meta.com/creator/assets/?utm_source=horizon_worlds_creator)
[Performance](https://horizon.meta.com/creator/performance/traces/?utm_source=horizon_worlds_creator)

 Privacy & Legal
[Privacy Policy](https://www.meta.com/legal/privacy-policy/)
[Legal](https://www.meta.com/legal/supplemental-terms-of-service/)

 © 2025 Meta

# Quests gizmo

## Additional Links
- [Meta home](https://developers.meta.com/horizon-worlds/)
- [Login](https://developers.meta.com/login/?redirect_uri=https%3A%2F%2Fdevelopers.meta.com%2Fhorizon-worlds%2Flearn%2Fdocumentation%2Fcode-blocks-and-gizmos%2Fquests-gizmo%2F)

# Quests gizmo

 Quests refer to a set of tasks that players can complete to earn rewards. These
quests are designed to engage players and encourage exploration in the virtual
environment. Completing quests can lead to various rewards, and are a way to
drive player interaction and retention. In Worlds, [quests](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/quests-leaderboards-and-variable-groups/quests-overview) is the global system that's used to create and manage a set of objectives or
tasks in a world. The feature provides a way for creators to define the
objectives, rewards, and rules for completing quests. The quests system uses [persistent variables](https://developers.meta.com/horizon-worlds/learn/documentation/typescript/getting-started/persistent-variables-v2) to manage objectives or tasks as they allow creators to store and maintain data
across player sessions. The quest [gizmo](https://developers.meta.com/horizon-worlds/learn/documentation/code-blocks-and-gizmos/about-gizmos) is a helper tool that creators use to display a list of achievable tasks and
track user progress towards completing these tasks. The quests gizmo, the visual
display panel, is linked to quests you set up in [Systems](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/getting-started/user-interface/creator-toolbar#systems-tools-menu) from the menu bar.  

## Access the quests gizmo

## Properties

## Scripting

## What's next?

## Additional Links

      Learn
# Quests gizmo
