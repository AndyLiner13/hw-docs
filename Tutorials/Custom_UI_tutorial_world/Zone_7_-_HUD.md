# Zone 7 - HUD
...
## Station #17: HUD
...
### Script Overview

 This demo showcases a dynamic, modular inventory system designed for a HUD. It
is built on a component-based architecture with three key scripts:
• `InventoryHUD.ts`: This is a UI component that extends the InventoryCore base class. It is
specifically designed to be an overlay, handling the presentation and layout of the
inventory panel, including a close button.
• `HUD.ts`: A separate, dedicated UI component for a HUD. It manages and renders key
player information like health, score, and an icon. This component uses UI bindings
to automatically update the display when data changes.
• `HUDDemo.ts`: This is the main game logic controller for the entire demo. It manages the
state for each player’s score, inventory visibility, and icon. It listens for
in-world events and calls public methods on both the HUD and InventoryHUD UI
components.

  
...
...
# Zone 7 - HUD
...
## Station #17: HUD
...
### Properties

  
#### InventoryHUD Properties


• `theme`: A number used to select a predefined color theme (blue, green, or yellow) for
the UI panel.

  
#### HUD Properties


• `showPercentage`: A boolean that determines whether the health bar should display the percentage
text.

  
#### HUDDemo Properties


• `trigger1–trigger4`: Entity properties linked to triggers that change the health bar value.
• `cuiGizmo`: An entity that links to the entity holding the HUD UI component.
• `cuiInventoryGizmo`: An entity that links to the entity holding the InventoryHUD UI component.
• `scoreTrigger1 - scoreTrigger2`: Entity properties linked to triggers that increase or decrease the player’s
score.
• `iconTrigger1–iconTrigger3`: Entity properties linked to triggers that change the HUD icon.
• `icon1–icon3`: Asset properties that hold the image assets for the icons.

  
...
...
# Zone 7 - HUD
...
## Station #17: HUD
...
### Network Events

 This system uses standard, built-in network events to manage player state and
synchronize the UI.
• `hz.CodeBlock events.OnPlayerEnterWorld`: Fired when a player joins the world. This event is used to initialize a
player’s score, inventory, and HUD visibility.
• `hz.CodeBlock events.OnPlayerExitWorld`: Fired when a player leaves the world. This event is used for cleanup.
• `hz.CodeBlock events.OnPlayerEnterTrigger`: Fired when a player steps into a trigger zone. This is the primary event used
to drive updates to the HUD’s health bar, score, and icon.

  
...
...
# Zone 7 - HUD
...
## Station #17: HUD
...
### Methods

  
#### HUD.ts Methods


• `updateHealthBar(newPercentHealth, player)`: A public method to change the health value and trigger the animation of the
health bar.
• `updateScore(newScore, player)`: A public method to update the player’s score text.
• `updateIcon(newIcon, player)`: A public method to change the displayed icon.

    ![Nav Logo](https://static.xx.fbcdn.net/rsrc.php/yE/r/3SoBlk8EqOQ.svg)


[Facebook](https://www.facebook.com/MetaHorizon/)
[Threads](https://www.threads.com/@metahorizon)
[X](https://x.com/MetaHorizon)
[Instagram](https://www.instagram.com/metahorizon/)
[YouTube](https://www.youtube.com/@MetaQuestVR)

 Learn
[Documentation](https://developers.meta.com/horizon-worlds/learn/documentation/)
...
...
# Zone 7 - HUD
...
## Station #17: HUD
...
### Methods

  
#### HUD.ts Methods
...
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
...
...
# Zone 7 - HUD
...
## Station #17: HUD

 You may need a HUD (Head-up Display) customized for your game. A Head- Display
is deployed through a Custom UI gizmo that has been configured to be of the `Screen Overlay` type. Use this Custom UI example as a starting point to build your own HUD. The
HUD can display a health bar, score, images and buttons to open overlaying
windows.  
### Script Overview
...
### Properties
...
### Network Events
...
### Methods
...
...
# Zone 7 - HUD
...
## Additional Links
- [Meta home](https://developers.meta.com/horizon-worlds/)
- [Login](https://developers.meta.com/login/?redirect_uri=https%3A%2F%2Fdevelopers.meta.com%2Fhorizon-worlds%2Flearn%2Fdocumentation%2Ftutorial-worlds%2Fcustom-ui-tutorial-world%2Fzone-7-hud%2F)
...
# Zone 7 - HUD

 This zone demonstrates Head-up Display (HUD) implementations that provide
persistent UI elements for players.  
## Station #17: HUD
...
## Additional Links
...
      Learn
# Zone 7 - HUD
...
