---
source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/feature-samples/avatar-override-tutorial-world/module-6-ui-systems
---

# [Module 6 - UI Systems](#module-6---ui-systems)

> [!Note]
>
> You will need to be a member of MHCP and have accepted the terms in the Developer Dashboard in order to create in-world items and currency. Find out more about monetization [here](../../../MHCP%20program/Monetization/Monetization%20opportunities.md).

The UI Systems module provides reusable components for player interaction and feedback, including timers, voting, outfit management, and avatar reset. Each UI script is attached to a corresponding UI entity in the Hierarchy panel.

## [System Components](#system-components)

### [ClearOverridesButton.ts](#clearoverridesbuttonts)

The `ClearOverridesButton.ts` script is a UI component that allows players to reset their avatar’s outfit to default.

![Clear Overrides Button UI](../../../.assets/image/8fb8fea3b6311f290211baae74bb45f276b297b7751d671e3a4fafa73a4a9fdd.png)

### [OutfitUI.ts](#outfituits)

The `OutfitUI.ts` script allows players to apply custom outfits to their avatar through a simple UI panel. It manages the button state, loading feedback, and outfit item IDs, updating the button text and color automatically based on user interaction.

When the button is clicked, the component sends network events to request and apply the selected outfit, providing visual feedback during the process.

> [!Note]
>
> SKUs within the UI gizmos will need to be replaced with SKUs created by the world owner.

![Outfit Button UI](../../../.assets/image/bfeaa2367d88d678aec162aba9ab5e5db9404ed224a227c81e64bba2cabb80aa.png)

**Modifications:**

- `categoryLabel` – Label for outfit category (default: “Custom Outfit”)
- `previewIcon` – Emoji preview for outfit
- `itemDisplaySize` – Size of the preview area
- `panelWidth` – Panel width
- `panelHeight` – Panel height
- Outfit item IDs – `shirtID`, `pantsID`, `shoesID`, `headwearID`

### [TimerHUD.ts](#timerhudts)

The `TimerHUD.ts` script displays the current game state and a countdown timer on the player’s HUD. It tracks the game state and remaining time, updating the UI text automatically using Bindings.

The component listens for the onTimerInfoUpdated event to update the timer and state, as well as the onGameStateChanged event to reflect changes in game state.

![Timer HUD display](../../../.assets/image/b2ffc8cf59595ad587d5e7e591a34fcd1918c7d0ec9921b3c749c499d3dbcc92.png)

### [VoteButton.ts](#votebuttonts)

The `VoteButton.ts` script enables players to cast votes in-game, providing immediate visual feedback and enforcing vote limits per player.

It manages the vote count, maximum allowed votes, and button state, while listening for events such as voteCountUpdate to track voting progress, as well as events to show, hide, or reset the button.

![Vote Button interface](../../../.assets/image/165d2cc7db5619e2c18ea5b5602d2e9978ef343c0bc6ac2268426754b0ce89dd.png)

