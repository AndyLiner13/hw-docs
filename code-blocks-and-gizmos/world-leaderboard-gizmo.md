Source: https://developers.meta.com/horizon-worlds/learn/documentation/code-blocks-and-gizmos/world-leaderboard-gizmo

# World leaderboard gizmo

[Leaderboards](/hw-docs/desktop-editor/quests-leaderboards-and-variable-groups/quests-leaderboards-and-variable-groups) is the global system that tracks and displays player rankings based on various criteria such as scores, time spent, or other metrics. The leaderboard feature is key for creating achievement-based experiences in Worlds. The leaderboard system uses [persistent variables](/hw-docs/typescript/getting-started/persistent-variables-v2) to maintain player progress across sessions.

The world leaderboard [gizmo](/hw-docs/code-blocks-and-gizmos/about-gizmos) is a helper tool that allows creators to place a visual panel, an interface for the leaderboard, to display rankings in the world. In worlds, each leaderboard features a **Share your top score** CTA (call to action) button that allows players to share their score with their friends to drive social competition. This button is automatically added to the leaderboard and cannot be disabled. Shared leaderboard scores render as a media rich asset that features the world name, the user’s score and avatar. Recipients of these shared scores can tap the asset and will be automatically sent into the world.

In summary, [leaderboards](/hw-docs/desktop-editor/getting-started/user-interface/creator-toolbar#systems-tools-menu) use persistent variables to track and display player rankings. The leaderboard gizmo, which is the visual representation, displays this data, while the actual data and logic are managed by the leaderboard system. Persistent variables ensure that the data shown is accurate and up-to-date, reflecting the player’s performance over time.

## Limitations

The number of leaderboards per world that’s allowed is [limited](https://github.com/MHCPCreators/horizonCreatorManual/blob/main/HorizonTechnicalDoc.md#leaderboards). There’s also limitation to the data type that can be displayed.

Additionally, for asset spawning, the leaderboard gizmo is not included. See [Asset spawning reference’s current limitations](/hw-docs/desktop-editor/assets/asset-spawning-reference#current-limitations-as-of-june-2022).

## Access the world leaderboard gizmo

While you can access and configure the gizmos in the [VR tool](/hw-docs/vr-creation/getting-started/create-a-new-world-in-horizon), the following steps show you how to access the world leaderboard gizmo from the desktop editor and add it to the [scene pane](/hw-docs/desktop-editor/getting-started/user-interface/UI-panels-and-tabs#scene-pane).

- In the desktop editor while in the Build mode, select **Build** > **Gizmos** from the menu bar, search for “leaderboard” in the search field.
- Select the world leaderboard gizmo and drag it into the scene.
- You can now edit the new gizmo properties in the [Properties panel](/hw-docs/desktop-editor/getting-started/user-interface/UI-panels-and-tabs#properties-pane).

## Properties

The world leaderboard gizmo is an entity. All objects in a world are represented by entities. [Entities](/horizon-worlds/reference/2.0.0/core_entity) have their respective properties such as position, rotation, and scale. In the Properties panel, you can edit the gizmo’s transformation fields to configure its **Position**, **Rotation**, and **Scale**. Additionally, like the transformation, [Color](/horizon-worlds/reference/2.0.0/core_color) can be edited in the UI panel or controlled through scripting.

In the **Behavior** section, additional properties are available to customize and manage the leaderboard.

The **Leaderboard** dropdown menu lets you select the [leaderboard](/hw-docs/desktop-editor/quests-leaderboards-and-variable-groups/creating-quests-leaderboard-variable-groups) that you create under **Systems** in the menu bar. This links the leaderboard to the visual display, represented by the gizmo.

**Displayed Title** lets you name the visual display panel.

**# of Entries Per Page** controls the number of scores you can see per page.

Properties such as **UI Anchor Style** and **Panel UI Mode** let you configure the gizmo’s appearance and style.

**Entry Display Mode** controls how you’d like the scores to be displayed, raw value or time in seconds.

For more information on the world leaderboard gizmo properties, see the [MHCP creator’s manual](https://github.com/MHCPCreators/horizonCreatorManual/blob/main/HorizonTechnicalDoc.md#leaderboards).

## Scripting

To set up the script that updates leaderboard results for players in the world, use [ILeaderboards interface](/horizon-worlds/reference/2.0.0/core_ileaderboards), which is part of the [World class](/horizon-worlds/reference/2.0.0/core_world).

## What’s next?

Now that you’ve been introduced to the world leaderboards gizmo, continue your learning with hands-on tutorials, and more related developer guides:

* [Meta Horizon Creator Program’s creator manual on the world leaderboard gizmo](https://github.com/MHCPCreators/horizonCreatorManual/blob/main/HorizonTechnicalDoc.md#world-leaderboard-gizmo)
* [Meta Horizon Creator Program’s creator manual on the leaderboards](https://github.com/MHCPCreators/horizonCreatorManual/blob/main/HorizonTechnicalDoc.md#leaderboards)
* [Meta Horizon Creator Program’s creator manual on using persistent variables with leaderboards](https://github.com/MHCPCreators/horizonCreatorManual/blob/main/HorizonTechnicalDoc.md#using-a-leaderboard-with-a-player-persistent-variable)
* [Tutorial worlds on variable groups and persistent variables](/hw-docs/tutorial-worlds/scripted-avatar-npc-tutorial/module-1-setup)
* [Tutorial worlds on persistent variables](/hw-docs/tutorial-worlds/custom-ui-examples-tutorial/station-7-persistent-variables)
* [Quests, leaderboards, and variable groups](/hw-docs/desktop-editor/quests-leaderboards-and-variable-groups/quests-leaderboards-and-variable-groups)
* [Using in-world analytics](/hw-docs/performance-best-practices-and-tooling/analytics/using-in-world-analytics#levelup)
* [Meta Horizon Worlds: kudos panel instructions](/hw-docs/mhcp-program/monetization/meta-horizon-worlds-kudos-panel-instructions)