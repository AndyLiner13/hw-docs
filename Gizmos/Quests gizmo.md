Source: https://developers.meta.com/horizon-worlds/learn/documentation/code-blocks-and-gizmos/quests-gizmo

# Quests gizmo

Quests refer to a set of tasks that players can complete to earn rewards. These quests are designed to engage players and encourage exploration in the virtual environment. Completing quests can lead to various rewards, and are a way to drive player interaction and retention.

In Worlds, [quests](../Desktop%20editor/Quests,%20leaderboards,%20and%20variable%20groups/Quests%20Overview.md) is the global system that’s used to create and manage a set of objectives or tasks in a world. The feature provides a way for creators to define the objectives, rewards, and rules for completing quests. The quests system uses [persistent variables](../Scripting/Get%20started%20with%20TypeScript/Persistent%20Variables.md) to manage objectives or tasks as they allow creators to store and maintain data across player sessions.

The quest [gizmo](About%20gizmos.md) is a helper tool that creators use to display a list of achievable tasks and track user progress towards completing these tasks. The quests gizmo, the visual display panel, is linked to quests you set up in [**Systems**](../Desktop%20editor/Get%20started%20with%20Desktop%20Editor/User%20interface/Creator%20Tools.md#systems-tools-menu) from the menu bar.

## Access the quests gizmo

While you can access and configure the gizmos in the [VR tool](../VR%20tools/Getting%20started/Create%20a%20new%20world%20in%20Meta%20Horizon%20Worlds.md), the following steps show you how to access the quests gizmo from the desktop editor and add it to the [scene pane](../Desktop%20editor/Get%20started%20with%20Desktop%20Editor/User%20interface/Panels%20and%20Tabs%20in%20the%20desktop%20editor.md#scene-pane).

- In the desktop editor while in the Build mode, select **Build** > **Gizmos** from the menu bar, search for “quests” in the search field.
- Select the quests gizmo and drag it into the scene.
- You can now edit the new gizmo properties in the [Properties panel](../Desktop%20editor/Get%20started%20with%20Desktop%20Editor/User%20interface/Panels%20and%20Tabs%20in%20the%20desktop%20editor.md#properties-pane).

## Properties

The quests gizmo is an entity. All objects in a world are represented by entities. [Entities](../Reference/core/Classes/Entity.md) have their respective properties such as position, rotation, and scale. In the Properties panel, you can edit the gizmo’s transformation fields to configure its Position, Rotation, and Scale. Additionally, like the transformation, [Color](../Reference/core/Classes/Color.md) can be edited in the UI panel or controlled through scripting.

In the **Quests** section, additional properties are available to customize and manage quests.

**Displayed Title** lets you name the visual display of the quest panel.

**# of Entries Per Page** controls the number of quests you can see per page.

Properties such as **Panel UI Mode** and **Use HUI Panel** let you configure the gizmo’s appearance and style.

**LOD Radius** controls the maximum visibility distance.

**Visible** controls the gizmo’s visibility.

For more information on the quests gizmo properties, see the [MHCP creator’s manual](https://github.com/MHCPCreators/horizonCreatorManual/blob/main/HorizonTechnicalDoc.md#quests).

## Scripting

To set up the script that updates quests results for players in the world, use the APIs:

To display player achievements, use the `displayAchievements` method in the [AchievementGizmo](../Reference/core/Classes/AchievementsGizmo.md) class.

To set and query if an achievement is complete, use the `setAchievementComplete` and `hasCompletedAchievement` methods in the [Player](../Reference/core/Classes/Player.md) class.

Additionally, built-in [`CodeBlockEvents`](../Reference/core/Variables/CodeBlockEvents.md) are available to listen for events such as when an achievement has been completed: `OnAchievementComplete`.

## What’s next?

Now that you’ve been introduced to the quests gizmo, continue your learning with hands-on tutorials, and more related developer guides:

* [Tutorial worlds on variable groups and persistent variables](../Tutorials/Feature%20samples/Scripted%20Avatar%20NPC%20tutorial/Module%201%20-%20Setup.md)
* [Tutorial worlds on quests](../Tutorials/Feature%20samples/Scripted%20Avatar%20NPC%20tutorial/Module%205%20-%20Quest%20Manager.md)
* [Tutorial worlds on persistent variables](../Tutorials/Feature%20samples/Custom%20UI%20examples%20tutorial/Station%207%20-%20Persistent%20Variables.md)
* [Meta Horizon Creator Program’s creator manual on the quests gizmo](https://my-od.developers.meta.com/horizon-worlds/learn/documentation/code-blocks-and-gizmos/quest-gizmo)
* [Quests, leaderboards, and variable groups](../Desktop%20editor/Quests,%20leaderboards,%20and%20variable%20groups/Quests,%20leaderboards,%20and%20variable%20groups.md)
* [Writing for localization on providing description of the quest](https://developers.meta.com/horizon-worlds/learn/documentation/save-optimize-and-publish/internationalization/writing-for-localization)