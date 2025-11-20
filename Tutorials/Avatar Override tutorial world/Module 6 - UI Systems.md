Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/avatar-override-tutorial-world/module-6-ui-systems

# Module 6 - UI Systems

Note

You will need to be a member of MHCP and have accepted the terms in the Developer Dashboard in order to create in-world items and currency. Find out more about monetization [here](/hw-docs/MHCP%20program/Monetization/Monetization%20opportunities.md).

The UI Systems module provides reusable components for player interaction and feedback, including timers, voting, outfit management, and avatar reset. Each UI script is attached to a corresponding UI entity in the Hierarchy panel.

## System Components

### ClearOverridesButton.ts

The `ClearOverridesButton.ts` script is a UI component that allows players to reset their avatar’s outfit to default.

![Clear Overrides Button UI](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/556824981_828614583009828_1193433809143308403_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=qTwy_XOGOCwQ7kNvwEpBa4l&_nc_oc=AdltIqmfeOSRMsZKBEyKG-S1OUQ-alfc8DenV_O_KPxOf_L2lvjCsOH9M3eoxycJZX0&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=DCI37KC_HzGBobxLrJGH6w&oh=00_Afgd_IAMk-Ca5M7aubfxLi4t1-j-t-Bem-qLe25iTxFSvQ&oe=6938995C)

### OutfitUI.ts

The `OutfitUI.ts` script allows players to apply custom outfits to their avatar through a simple UI panel. It manages the button state, loading feedback, and outfit item IDs, updating the button text and color automatically based on user interaction.

When the button is clicked, the component sends network events to request and apply the selected outfit, providing visual feedback during the process.

Note

SKUs within the UI gizmos will need to be replaced with SKUs created by the world owner.

![Outfit Button UI](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/558902051_828614586343161_6885234896188587474_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=8pN3eavE5cwQ7kNvwG9o3s7&_nc_oc=Adnokm6rDNDU-8_M9Jh_mr9Iq6sgd01hYCze3FFWkAuKZev7qG1Xv-PwxmFClWYBUJQ&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=DCI37KC_HzGBobxLrJGH6w&oh=00_Afh5-cQMbFgcBhAAELWPa21N0bZnZr7fwIGWC7Lo5o2m2A&oe=6938B6D3)

**Modifications:**

* `categoryLabel` – Label for outfit category (default: “Custom Outfit”)
* `previewIcon` – Emoji preview for outfit
* `itemDisplaySize` – Size of the preview area
* `panelWidth` – Panel width
* `panelHeight` – Panel height
* Outfit item IDs – `shirtID`, `pantsID`, `shoesID`, `headwearID`

### TimerHUD.ts

The `TimerHUD.ts` script displays the current game state and a countdown timer on the player’s HUD. It tracks the game state and remaining time, updating the UI text automatically using Bindings.

The component listens for the onTimerInfoUpdated event to update the timer and state, as well as the onGameStateChanged event to reflect changes in game state.

![Timer HUD display](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/558611979_828614576343162_7998351573325002101_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=rJU4HiR5RbgQ7kNvwGBlkfC&_nc_oc=AdkE3PkffOIxQpkdCerkOkstkWJ8pC3Q3uRo-D9XSJ3oR9dDnO9akroAi9q-cAOys2Y&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=DCI37KC_HzGBobxLrJGH6w&oh=00_AfiyrJYiFsM4J0MkITMM007VLXXcBlms5rED6s6lgvg4dQ&oe=6938C201)

### VoteButton.ts

The `VoteButton.ts` script enables players to cast votes in-game, providing immediate visual feedback and enforcing vote limits per player.

It manages the vote count, maximum allowed votes, and button state, while listening for events such as voteCountUpdate to track voting progress, as well as events to show, hide, or reset the button.

![Vote Button interface](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/558515952_828614599676493_6885104476074074772_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=BUJIsBTHRWYQ7kNvwFrBXOz&_nc_oc=Adk-P9zk5kYE2TVD3-UXBZnAXtVnQEQRSKEGMfObLxiWVzdbV4Jp9xHC3W9uirtTI8k&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=DCI37KC_HzGBobxLrJGH6w&oh=00_Afi261Mk04Sdn163hITofQdtnGXlrMHPzvueg5vrBHN-CA&oe=6938ABE4)