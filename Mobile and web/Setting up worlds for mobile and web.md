Source: https://developers.meta.com/horizon-worlds/learn/documentation/create-for-web-and-mobile/setting-up-worlds-for-web-and-mobile-compatibility

Learn

# Setting up worlds for mobile and web

## Overview

Setting worlds up to work on web and mobile requires some extra considerations. This page gives an overview of:

* [Common areas for content improvement](/hw-docs/Mobile%20and%20web/Setting%20up%20worlds%20for%20mobile%20and%20web.md#common-areas-for-content-improvement)
* [Feature references and examples](/hw-docs/Mobile%20and%20web/Setting%20up%20worlds%20for%20mobile%20and%20web.md#feature-references-and-examples)

## Common areas for content improvement

### Testing

The best way to ensure your world offers a great experience on mobile and web is to test it on these devices throughout the development lifecycle.

You can configure your preview mode in the Desktop Editor to emulate a mobile experience, or you can select a Preview Action to test directly within the Meta Horizon App.

Further reading: [*Preview Device*](/hw-docs/Desktop%20editor/Get%20started%20with%20Desktop%20Editor/Preview%20mode.md#preview-device)

### Inputs and HUD buttons

Avoid unnecessary HUD button clutter.

Set the actions per grabbable (turning them off where unneeded), or if most grabbables in your world have no interaction logic you can turn it off and turn it back on on a per item basis.

Further reading: [*Action buttons*](/hw-docs/Mobile%20and%20web/Grabbable%20entities/Action%20Buttons.md)

Prefer displaying custom-bound inputs only when contextually relevant.

Use Custom Input API to bind and unbind custom inputs as required.

Further reading: [*Custom Input API Example*](/hw-docs/Mobile%20and%20web/TypeScript%20APIs%20for%20mobile/Custom%20Input%20API.md)

Communicate what action pressing a button will perform.

Select a button icon that closely represents the action pressing a button will perform. Select an icon to represent the grabbable item when holstered. Upload and use custom images for held item actions in the HUD (or for use in holstering).

Further reading: [*Action buttons*](/hw-docs/Mobile%20and%20web/Grabbable%20entities/Action%20Buttons.md), [*Holster button icons*](/hw-docs/Mobile%20and%20web/Grabbable%20entities/Holster%20Icon%20Menu.md)

### Optimization

If your world is targeting mobile players, invest time in optimising as you go.

Loading time is a key factor for mobile users, we are working to improve this at the platform level but there is a lot that you can do yourselves when building. Think carefully about the assets that you include and the complexity of the environment and look into the debugging and testing tools available.

Further reading: [*Using performance tools from web and mobile*](/hw-docs/Performance/Performance%20tools/Using%20performance%20tools%20from%20web%20and%20mobile.md)

### Design

Design for mobile from the start.

Retrofitting a VR world to work on web & mobile can often take more work. The work to do varies depending on the world but here are some examples of the different methods that can be used:

* Emulate: Enable players to interact in the same way they would in VR. For example, pressing a button in the world.
* Adapt: Give mobile players the same experience as VR players, but adapt the mechanic to leverage the different inputs for mobile players. For example, a button to reload a gun rather than physically reloading the weapon, or using Focused Interaction to throw a paper aeroplane.
* Bifurcate: Offer mobile players a different experience from VR players, but in the same world by using focused interaction and camera API to produce standard modern mobile game type interactions.

Ensure you have quests covering both early game (to aid initial onboarding and generate investment in the world) and long play (to give players depth and reasons to continue to engage over time).

### Metadata

Present your world in an attractive and representative fashion.

Ensure your world’s name and description display correctly on all surfaces and are clear and concise.

Provide images - either through your Meta Producer or via MHCP submission - that are attractive and representative, and that conform to the technical specs.

Further reading: [*Image technical specifications*](/hw-docs/Mobile%20and%20web/Publishing%20worlds%20on%20mobile.md#image-technical-specifications)

### Player Acquisition

Consider link sharing and social promotion.

The ability to share a direct link to your world (which will open in the mobile app if the person who clicks it has it installed) is a critical advantage, enabling single-click low-friction play. Use this to your advantage to drive players into your world from anywhere!

## Feature references and examples

| Creation Tool | Description | Example world and function |
| --- | --- | --- |
| Selectable on screens  [Guide](/hw-docs/create-for-web-and-mobile/references-and-guides/push-button-interactions-for-web-and-mobile) | *Editor Property* Set trigger volumes as “interactable” in screens, such that web and mobile players can interact with buttons (that MR players would physically push). | [Horizon Central](https://horizon.meta.com/world/10161451989024108) Used to interact with various gizmos and toys (e.g. making a drink in the plaza). |
| Aim direction  [Guide](/hw-docs/Mobile%20and%20web/Grabbable%20entities/Aim%20Direction.md) | *Editor Property* Set the “forwards” direction for a grabbable, ensuring that it looks correct & that any projectiles travel in the right direction. | [Citadel](https://horizon.meta.com/world/279976781332952) Used to set up the weapon launchers used heavily throughout the world. |
| Action icons  [Guide](/hw-docs/Mobile%20and%20web/Grabbable%20entities/Action%20Buttons.md) | *Editor Property* Choose from a pre-defined set of icons for the on-screen “action” buttons. | [Horizon Central](https://horizon.meta.com/world/10161451989024108) Changes the use icon when picking up items e.g. drink icon for a drink. |
| Multi holstering  [Guide](/hw-docs/Mobile%20and%20web/Grabbable%20entities/Holster%20Icon%20Menu.md) | *Editor Property*  Set the icon to use in the “holster” system UI (allowing mobile players to switch between several attached-to-avatar grabbables with on-screen buttons). | [Citadel](https://horizon.meta.com/world/279976781332952) Required to set up the weapon launchers used heavily throughout the world. |
| Attach to Screen  [Guide](/hw-docs/create-for-web-and-mobile/references-and-guides/2d-ui-for-web-and-mobile) | *Editor Property* Enables (pre-Custom UI) UI to be attached to the screen to provide a pseudo-HUD (UI still exists in world & can clip with environment). | [Citadel](https://horizon.meta.com/world/279976781332952) Used to inform users about game progression (e.g. weapons being unlocked). |
| Grip pose  [Guide](/hw-docs/Mobile%20and%20web/Grabbable%20entities/Avatar%20Poses.md) | *Editor Property* Set how the player’s avatar should hold a grabbable entity. |  |
| Crosshair selection  [Guide](/hw-docs/Mobile%20and%20web/Grabbable%20entities/Crosshair.md) | *Editor Property* Enables creators to select from a predefined list of crosshairs, enhancing player aiming. | [Super Rumble](https://horizon.meta.com/world/10230277629074528) Used to select different crosshairs for the weapons (e.g. pistol vs rifle). |
| Spawn point camera  [Guide](/hw-docs/create-for-web-and-mobile/define-camera-web-mobile-meta-horizon-worlds) | *Editor property* Set the player camera (1st or 3rd person) on spawning the player (e.g. at start of experience, or when moving between sections like lobby/arena). |  |
| Device branching  [API Docs](https://horizon.meta.com/resources/scripting-api/core.playerdevicetype.md) [Guide](/hw-docs/Mobile%20and%20web/TypeScript%20APIs%20for%20mobile/Per%20Platform%20Scripting.md) | *TypeScript* | *CodeBlocks* Enables script to respond to player’s device and branch based on device type (mobile, PC, VR). | [Super Rumble](https://horizon.meta.com/world/10230277629074528) Tailoring the instructional content in the lobby to the user’s device. |
| Avatar animations  [API Docs](https://horizon.meta.com/resources/scripting-api/core.player.playavataranimation.md) [Guide](/hw-docs/Mobile%20and%20web/TypeScript%20APIs%20for%20mobile/Player%20Animations.md) | *TypeScript* | *CodeBlocks* Enables creators to play avatar animations appropriate to their grip pose, as well as death and respawn animations. Using TypeScript, creators can override grip poses (i.e. how grabbable entities are held). | [Super Rumble](https://horizon.meta.com/world/10230277629074528) Hold weapons in different grips as well as trigger the death animation when killed. |
| Custom UI  [Guide](/hw-docs/Desktop%20editor/Custom%20UI/Create%20a%20custom%20UI%20panel.md) | *TypeScript* Enables rich interactive and non-interactive UI, both world (in-environment) and screenspace (HUD). | [Citadel](https://horizon.meta.com/world/279976781332952) Allows selecting a difficulty in the lobby area as well as upgrading your equipment. |
| Custom input  [Guide](/hw-docs/Mobile%20and%20web/TypeScript%20APIs%20for%20mobile/Custom%20Input%20API.md) | *TypeScript* Bind inputs for actions that do not depend on holding a grabbable (e.g. to trigger a special ability). | [Super Rumble](https://horizon.meta.com/world/10230277629074528) Used for the special ability and moved to the “tray” location. |
| Focused interaction  [API Docs](https://horizon.meta.com/resources/scripting-api/core.focusedinteraction.md) [Guide](/hw-docs/Mobile%20and%20web/TypeScript%20APIs%20for%20mobile/Focused%20Interaction.md) | *TypeScript* Enables players to directly interact with the world using touch (tap, swipe) or mouse input. Provides (customisable by the creator) visual feedback to the player. | [Puzzle Paradise](https://horizon.meta.com/world/10159399877996502) Used for positioning puzzle pieces. |
| Unfocus | *TypeScript* Enables creators to programmatically unfocus a focused element such as custom UI or SUI (e.g. leaderboards) | [Citadel](https://horizon.meta.com/world/279976781332952) Used to close the selection UI after selecting a difficulty at the start. |
| Throwing  [API Docs](https://horizon.meta.com/resources/scripting-api/core.player.throwhelditem.md) [Guide](/hw-docs/Mobile%20and%20web/TypeScript%20APIs%20for%20mobile/Throwing.md) | *TypeScript* Enables triggering throwing the currently-held item through TypeScript, providing greater control over how the item is thrown (e.g. speed, pitch, handedness) |  |
| Aim assist  [Guide](/hw-docs/Mobile%20and%20web/TypeScript%20APIs%20for%20mobile/Aim%20Assist.md) | *TypeScript* Enables creators to add aim assist to their world, generating a force to pull the camera towards a particular entity, player, or vector |  |

## Publishing your world on mobile and web

Any world you create is available on web and mobile by default. To inform mobile players of a world’s level of mobile compatibility, worlds are tagged as Unsupported, Playable or Optimized for mobile in the Meta Horizon App, and in the Horizon menu when playing on mobile.

For more information on the world review and tagging process visit [*Publishing worlds on mobile*](/hw-docs/create-for-web-and-mobile/).