Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/custom-ui-tutorial-world/zone-7-hud

# Zone 7 - HUD

This zone demonstrates Head-up Display (HUD) implementations that provide persistent UI elements for players.

## Station #17: HUD

You may need a HUD (Head-up Display) customized for your game. A Head- Display is deployed through a Custom UI gizmo that has been configured to be of the `Screen Overlay` type. Use this Custom UI example as a starting point to build your own HUD. The HUD can display a health bar, score, images and buttons to open overlaying windows.

### Script Overview

This demo showcases a dynamic, modular inventory system designed for a HUD. It is built on a component-based architecture with three key scripts:

* **`InventoryHUD.ts`**: This is a UI component that extends the InventoryCore base class. It is specifically designed to be an overlay, handling the presentation and layout of the inventory panel, including a close button.
* **`HUD.ts`**: A separate, dedicated UI component for a HUD. It manages and renders key player information like health, score, and an icon. This component uses UI bindings to automatically update the display when data changes.
* **`HUDDemo.ts`**: This is the main game logic controller for the entire demo. It manages the state for each player’s score, inventory visibility, and icon. It listens for in-world events and calls public methods on both the HUD and InventoryHUD UI components.

### Properties

#### InventoryHUD Properties

* **`theme`**: A number used to select a predefined color theme (blue, green, or yellow) for the UI panel.

#### HUD Properties

* **`showPercentage`**: A boolean that determines whether the health bar should display the percentage text.

#### HUDDemo Properties

* **`trigger1–trigger4`**: Entity properties linked to triggers that change the health bar value.
* **`cuiGizmo`**: An entity that links to the entity holding the HUD UI component.
* **`cuiInventoryGizmo`**: An entity that links to the entity holding the InventoryHUD UI component.
* **`scoreTrigger1 - scoreTrigger2`**: Entity properties linked to triggers that increase or decrease the player’s score.
* **`iconTrigger1–iconTrigger3`**: Entity properties linked to triggers that change the HUD icon.
* **`icon1–icon3`**: Asset properties that hold the image assets for the icons.

### Network Events

This system uses standard, built-in network events to manage player state and synchronize the UI.

* **`hz.CodeBlock events.OnPlayerEnterWorld`**: Fired when a player joins the world. This event is used to initialize a player’s score, inventory, and HUD visibility.
* **`hz.CodeBlock events.OnPlayerExitWorld`**: Fired when a player leaves the world. This event is used for cleanup.
* **`hz.CodeBlock events.OnPlayerEnterTrigger`**: Fired when a player steps into a trigger zone. This is the primary event used to drive updates to the HUD’s health bar, score, and icon.

### Methods

#### HUD.ts Methods

* **`updateHealthBar(newPercentHealth, player)`**: A public method to change the health value and trigger the animation of the health bar.
* **`updateScore(newScore, player)`**: A public method to update the player’s score text.
* **`updateIcon(newIcon, player)`**: A public method to change the displayed icon.