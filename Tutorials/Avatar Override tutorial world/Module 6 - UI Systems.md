Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/avatar-override-tutorial-world/module-6-ui-systems

# Module 6 - UI Systems

Note

You will need to be a member of MHCP and have accepted the terms in the Developer Dashboard in order to create in-world items and currency. Find out more about monetization [here](/hw-docs/MHCP%20program/Monetization/Monetization%20opportunities.md).

The UI Systems module provides reusable components for player interaction and feedback, including timers, voting, outfit management, and avatar reset. Each UI script is attached to a corresponding UI entity in the Hierarchy panel.

## System Components

### ClearOverridesButton.ts

The `ClearOverridesButton.ts` script is a UI component that allows players to reset their avatar’s outfit to default.

![Clear Overrides Button UI](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/556824981_828614583009828_1193433809143308403_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=nDit0N0k80sQ7kNvwEMT0Gw&_nc_oc=AdkmzOh3McGWMWYu1wA8-JS35W6tGfrTGP0GaSWVxlxUa5oFFnG4ZP4LLOGf68gfkRM&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=8qRa5z6XBg3HrkbaSQMR8w&oh=00_Afmi4xOtcbBXSWDAffhNuikO-ollyQfjdJ2pekmPZSjPvw&oe=694BB71C)

### OutfitUI.ts

The `OutfitUI.ts` script allows players to apply custom outfits to their avatar through a simple UI panel. It manages the button state, loading feedback, and outfit item IDs, updating the button text and color automatically based on user interaction.

When the button is clicked, the component sends network events to request and apply the selected outfit, providing visual feedback during the process.

Note

SKUs within the UI gizmos will need to be replaced with SKUs created by the world owner.

![Outfit Button UI](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/558902051_828614586343161_6885234896188587474_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=Lu6pPNsctisQ7kNvwG_mTAF&_nc_oc=AdkQT8isy5I-d5ZLXEKWgxFPNfPw6XQFvpLIbBlQLmcV4xtrRgckpPYZFWzpN9dUTbk&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=8qRa5z6XBg3HrkbaSQMR8w&oh=00_AfmkjfodfOr8cj3sr6_20OqT9iHIw3z7JoQPiT5zHDMNEw&oe=694BD493)

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

![Timer HUD display](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/558611979_828614576343162_7998351573325002101_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=GBlVgSaNcfwQ7kNvwFn2RAV&_nc_oc=AdmzAWrNTF0S9h_Cr_BOwTo_qolco-ZbIGYTtjyh1JUs-J6JoM7IzH2C7WbIb-WbP4w&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=8qRa5z6XBg3HrkbaSQMR8w&oh=00_Afn-Qah59Y5w0V5BBc2Yc3QLkSkKJSE_eL8UxphcystWUw&oe=694BDFC1)

### VoteButton.ts

The `VoteButton.ts` script enables players to cast votes in-game, providing immediate visual feedback and enforcing vote limits per player.

It manages the vote count, maximum allowed votes, and button state, while listening for events such as voteCountUpdate to track voting progress, as well as events to show, hide, or reset the button.

![Vote Button interface](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/558515952_828614599676493_6885104476074074772_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=LKrGBQd1OjkQ7kNvwGU8nYR&_nc_oc=Admv3TzHNGE2j-itfoEJfuPwDHxDwhylMw10HJi1zXCuQ6lHLM2mhsQjXEtjflixDdc&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=8qRa5z6XBg3HrkbaSQMR8w&oh=00_Afm2uIbeh8rl44xEVo4HbFSo54bZhHQgqOyqEBqT3t7n9A&oe=694BC9A4)