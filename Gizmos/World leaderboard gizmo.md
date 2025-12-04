Source: https://developers.meta.com/horizon-worlds/learn/documentation/code-blocks-and-gizmos/world-leaderboard-gizmo

# World leaderboard gizmo

[Leaderboards](/hw-docs/Desktop%20editor/Quests,%20leaderboards,%20and%20variable%20groups/Quests,%20leaderboards,%20and%20variable%20groups.md) is the global system that tracks and displays player rankings based on various criteria such as scores, time spent, or other metrics. The leaderboard feature is key for creating achievement-based experiences in Worlds. The leaderboard system uses [persistent variables](/hw-docs/Scripting/Get%20started%20with%20TypeScript/Persistent%20Variables.md) to maintain player progress across sessions.

The world leaderboard [gizmo](/hw-docs/Gizmos/About%20gizmos.md) is a helper tool that allows creators to place a visual panel, an interface for the leaderboard, to display rankings in the world. In worlds, each leaderboard features a **Share your top score** CTA (call to action) button that allows players to share their score with their friends to drive social competition. This button is automatically added to the leaderboard and cannot be disabled. Shared leaderboard scores render as a media rich asset that features the world name, the user’s score and avatar. Recipients of these shared scores can tap the asset and will be automatically sent into the world.

In summary, [leaderboards](/hw-docs/Desktop%20editor/Get%20started%20with%20Desktop%20Editor/User%20interface/Creator%20Tools.md#systems-tools-menu) use persistent variables to track and display player rankings. The leaderboard gizmo, which is the visual representation, displays this data, while the actual data and logic are managed by the leaderboard system. Persistent variables ensure that the data shown is accurate and up-to-date, reflecting the player’s performance over time.

## Limitations

The number of leaderboards per world that’s allowed is [limited](https://github.com/MHCPCreators/horizonCreatorManual/blob/main/HorizonTechnicalDoc.md#leaderboards). There’s also limitation to the data type that can be displayed.

Additionally, for asset spawning, the leaderboard gizmo is not included. See [Asset spawning reference’s current limitations](/hw-docs/Desktop%20editor/Assets/Asset%20Spawning%20Reference.md#current-limitations-as-of-june-2022).

## Access the world leaderboard gizmo

While you can access and configure the gizmos in the [VR tool](/hw-docs/VR%20tools/Getting%20started/Create%20a%20new%20world%20in%20Meta%20Horizon%20Worlds.md), the following steps show you how to access the world leaderboard gizmo from the desktop editor and add it to the [scene pane](/hw-docs/Desktop%20editor/Get%20started%20with%20Desktop%20Editor/User%20interface/Panels%20and%20Tabs%20in%20the%20desktop%20editor.md#scene-pane).

- In the desktop editor while in the Build mode, select **Build** > **Gizmos** from the menu bar, search for “leaderboard” in the search field.
- Select the world leaderboard gizmo and drag it into the scene.
- You can now edit the new gizmo properties in the [Properties panel](/hw-docs/Desktop%20editor/Get%20started%20with%20Desktop%20Editor/User%20interface/Panels%20and%20Tabs%20in%20the%20desktop%20editor.md#properties-pane).

## Properties

The world leaderboard gizmo is an entity. All objects in a world are represented by entities. [Entities](/hw-docs/Reference/core/Classes/Entity.md) have their respective properties such as position, rotation, and scale. In the Properties panel, you can edit the gizmo’s transformation fields to configure its **Position**, **Rotation**, and **Scale**. Additionally, like the transformation, [Color](/hw-docs/Reference/core/Classes/Color.md) can be edited in the UI panel or controlled through scripting.

In the **Behavior** section, additional properties are available to customize and manage the leaderboard.

The **Leaderboard** dropdown menu lets you select the [leaderboard](/hw-docs/Desktop%20editor/Quests,%20leaderboards,%20and%20variable%20groups/Creating%20Quests-Leaderboard-Variable%20Groups.md) that you create under **Systems** in the menu bar. This links the leaderboard to the visual display, represented by the gizmo.

**Displayed Title** lets you name the visual display panel.

**# of Entries Per Page** controls the number of scores you can see per page.

Properties such as **UI Anchor Style** and **Panel UI Mode** let you configure the gizmo’s appearance and style.

**Entry Display Mode** controls how you’d like the scores to be displayed, raw value or time in seconds.

For more information on the world leaderboard gizmo properties, see the [MHCP creator’s manual](https://github.com/MHCPCreators/horizonCreatorManual/blob/main/HorizonTechnicalDoc.md#leaderboards).

## Scripting

To set up the script that updates leaderboard results for players in the world, use [ILeaderboards interface](/hw-docs/Reference/core/Interfaces/ILeaderboards.md), which is part of the [World class](/hw-docs/Reference/core/Classes/World.md).

## What’s next?

Now that you’ve been introduced to the world leaderboards gizmo, continue your learning with hands-on tutorials, and more related developer guides:

* [Meta Horizon Creator Program’s creator manual on the world leaderboard gizmo](https://github.com/MHCPCreators/horizonCreatorManual/blob/main/HorizonTechnicalDoc.md#world-leaderboard-gizmo)
* [Meta Horizon Creator Program’s creator manual on the leaderboards](https://github.com/MHCPCreators/horizonCreatorManual/blob/main/HorizonTechnicalDoc.md#leaderboards)
* [Meta Horizon Creator Program’s creator manual on using persistent variables with leaderboards](https://github.com/MHCPCreators/horizonCreatorManual/blob/main/HorizonTechnicalDoc.md#using-a-leaderboard-with-a-player-persistent-variable)
* [Tutorial worlds on variable groups and persistent variables](/hw-docs/Tutorials/Scripted%20Avatar%20NPC%20tutorial/Module%201%20-%20Setup.md)
* [Tutorial worlds on persistent variables](/hw-docs/Tutorials/Custom%20UI%20Examples%20tutorial/Station%207%20-%20Persistent%20Variables.md)
* [Quests, leaderboards, and variable groups](/hw-docs/Desktop%20editor/Quests,%20leaderboards,%20and%20variable%20groups/Quests,%20leaderboards,%20and%20variable%20groups.md)
* [Using in-world analytics](https://developers.meta.com/horizon-worlds/learn/documentation/performance-best-practices-and-tooling/analytics/using-in-world-analytics#levelup)
* [Meta Horizon Worlds: kudos panel instructions](/hw-docs/MHCP%20program/Monetization/Meta%20Horizon%20Worlds-%20Kudos%20Panel%20Instructions.md)