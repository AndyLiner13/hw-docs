Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/avatar-override-tutorial-world/module-6-ui-systems

# Module 6 - UI Systems

Note

You will need to be a member of MHCP and have accepted the terms in the Developer Dashboard in order to create in-world items and currency. Find out more about monetization [here](https://developers.meta.com/horizon-worlds/learn/documentation/mhcp-program/monetization/creator-monetization-partner-program).

The UI Systems module provides reusable components for player interaction and feedback, including timers, voting, outfit management, and avatar reset. Each UI script is attached to a corresponding UI entity in the Hierarchy panel.

## System Components

### ClearOverridesButton.ts

The `ClearOverridesButton.ts` script is a UI component that allows players to reset their avatar’s outfit to default.

![Clear Overrides Button UI](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/556824981_828614583009828_1193433809143308403_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=4-3Nfg76-hIQ7kNvwGecLR6&_nc_oc=Adk0xIOWn1bmR6SjvcKrfLtIW-HBtGL0EvQK6RSo4Se4fhkADEPHVCHFc8KLM24Ly1o&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=v-JV1aAFID33oo22f2msxQ&oh=00_AfhPHalXi3AcRq58qAGg-OPNQMI4zsPECC1NY8GbUfrzrw&oe=694638DC)

### OutfitUI.ts

The `OutfitUI.ts` script allows players to apply custom outfits to their avatar through a simple UI panel. It manages the button state, loading feedback, and outfit item IDs, updating the button text and color automatically based on user interaction.

When the button is clicked, the component sends network events to request and apply the selected outfit, providing visual feedback during the process.

Note

SKUs within the UI gizmos will need to be replaced with SKUs created by the world owner.

![Outfit Button UI](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/558902051_828614586343161_6885234896188587474_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=n5ZCU1jG4ocQ7kNvwFqvcMR&_nc_oc=AdmlEMrX436dhGNbYrmYjsV4zo5t_U0cG2FCTqwFBTGuRrCsPZ3ZWqCuHpEbJFnwqRA&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=v-JV1aAFID33oo22f2msxQ&oh=00_Afg2YPBCWiLwXV9BkAR-Q8m-qRSDFJDa6_xaNjt52qwwRg&oe=69465653)

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

![Timer HUD display](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/558611979_828614576343162_7998351573325002101_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=a_pbr-_DIsEQ7kNvwExvi3s&_nc_oc=AdlI9XutqME_5KYGrfPVVq0ynDOPE5xyxHAGqFaiEhTKigwWduk_c0bihI4EuXITjcg&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=v-JV1aAFID33oo22f2msxQ&oh=00_Afhny4yof_GMyHcxwaWPDmNCp5kps6d0-QsWOJNJoHW-HQ&oe=69466181)

### VoteButton.ts

The `VoteButton.ts` script enables players to cast votes in-game, providing immediate visual feedback and enforcing vote limits per player.

It manages the vote count, maximum allowed votes, and button state, while listening for events such as voteCountUpdate to track voting progress, as well as events to show, hide, or reset the button.

![Vote Button interface](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/558515952_828614599676493_6885104476074074772_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=vc_kqRXjOKEQ7kNvwGR-5ET&_nc_oc=Adl6fUqgay_MpySEbybGLDMRz9lLKdYFkNVlW0flV0Q52fzcMkgcTw1CHtHMqMI2awg&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=v-JV1aAFID33oo22f2msxQ&oh=00_AfivIr3G8066R3-mMQVHMTS7S75ypfYuUqEFpbnMhp8xjg&oe=69464B64)