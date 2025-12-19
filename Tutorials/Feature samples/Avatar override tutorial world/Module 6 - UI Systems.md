Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/feature-samples/avatar-override-tutorial-world/module-6-ui-systems

# Module 6 - UI Systems

Note

You will need to be a member of MHCP and have accepted the terms in the Developer Dashboard in order to create in-world items and currency. Find out more about monetization [here](../../../MHCP%20program/Monetization/Monetization%20opportunities.md).

The UI Systems module provides reusable components for player interaction and feedback, including timers, voting, outfit management, and avatar reset. Each UI script is attached to a corresponding UI entity in the Hierarchy panel.

## System Components

### ClearOverridesButton.ts

The `ClearOverridesButton.ts` script is a UI component that allows players to reset their avatar’s outfit to default.

<details>
<summary>Clear Overrides Button UI</summary>

<p></p>

[Clear Overrides Button UI](../../../image_data/64f64d15d9905b114b4745ee3b554cb504a5da30049d411c36e9b3edf7311566.md)

### Overview
This image depicts a virtual environment viewed through a rectangular frame resembling a window or screen. The scene within the frame is a simple, grid-like room with yellow walls and a tiled floor. The room has a blue sky visible at the top. There are several small icons and a button labeled "Clear Overrides" at the bottom right.

### Key Elements
- **Visual Description**: The room is enclosed by yellow walls with a grid pattern, and the floor is tiled gray. The walls have a slight texture that resembles tiles or blocks.
- **Location**: The room is centered within the frame.
- **Contents**: 
    - At the top of the room, there is a blue sky.
    - In the middle of the room, there are four small icons arranged horizontally. These icons appear to represent different objects or tools, but their specific functions are not discernible from the image.
    - Below the icons, there is a black bar with white text that reads "Open Closet."
    - At the bottom right of the frame, there is a red button with white text that says "Clear Overrides."
- **Visual Styling**: The room has a flat, two-dimensional appearance typical of a 3D modeling software interface. The colors are bright and distinct, with a clear contrast between the yellow walls, gray floor, and blue sky.

### Visual Flow / Relationships
- **Most Prominent Visually**: The room itself is the most prominent feature due to its central placement and larger size compared to the icons and button.
- **Arrows, Lines, Connectors**: There are no arrows, lines, or connectors visible in the image.
- **Spatial Relationships**: The icons are positioned horizontally below the blue sky, and the "Open Closet" bar is directly beneath them. The "Clear Overrides" button is placed at the bottom right corner of the frame.

</details>

<p></p>



### OutfitUI.ts

The `OutfitUI.ts` script allows players to apply custom outfits to their avatar through a simple UI panel. It manages the button state, loading feedback, and outfit item IDs, updating the button text and color automatically based on user interaction.

When the button is clicked, the component sends network events to request and apply the selected outfit, providing visual feedback during the process.

Note

SKUs within the UI gizmos will need to be replaced with SKUs created by the world owner.

<details>
<summary>Outfit Button UI</summary>

<p></p>

[Outfit Button UI](../../../image_data/320906bf8d26a052ff559a50a64b8e30a610cb8998c1f684002b23c42ddd793c.md)

### Overview
This image displays a user interface with three distinct sections, each representing a category ("Food," "Sci-Fi," and "Nature") for applying outfits. The layout is arranged horizontally against a tiled wall background.

### Key Elements
1. **Food Section**
   - **Visual description**: A rectangular card with rounded corners.
   - **Location**: Leftmost section.
   - **Contents**: Contains an icon of a donut and the text "Apply Outfit."
   - **Visual styling**: Light purple background, white border, and a small shadow effect.

2. **Sci-Fi Section**
   - **Visual description**: A rectangular card with rounded corners.
   - **Location**: Center section.
   - **Contents**: Contains an icon of a flying saucer and the text "Apply Outfit."
   - **Visual styling**: Light purple background, white border, and a small shadow effect.

3. **Nature Section**
   - **Visual description**: A rectangular card with rounded corners.
   - **Location**: Rightmost section.
   - **Contents**: Contains an icon of a red flower and the text "Apply Outfit."
   - **Visual styling**: Light purple background, white border, and a small shadow effect.

### Visual Flow / Relationships
- **Most prominent visually**: Each section is equally prominent due to their identical design and placement.
- **Arrows, lines, connectors**: None present.
- **Spatial relationships**: Sections are evenly spaced horizontally, with no overlap or adjacency between them.

</details>

<p></p>



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

<details>
<summary>Timer HUD display</summary>

<p></p>

[Timer HUD display](../../../image_data/bbf6592757aceb01dcc31c3dd6c5415daedb665dab651cc41c9dc342be6b2a13.md)

### Overview
This image depicts a simple interface element with a light blue background and a white rounded rectangular box containing text information. The layout is minimalistic, focusing on displaying a state and a timer.

### Key Elements
- **Visual description**: The background is a light blue rectangle.
- **Location**: The entire image is the background.
- **Contents**: The text "State: Intermission | Time Remaining: 0:07" is displayed within a white rounded rectangular box.
- **Visual styling**: The text is black, and the box has a subtle shadow effect, giving it a slight elevation.

### Visual Flow / Relationships
The most prominent visual element is the white rounded rectangular box containing the text. There are no arrows, lines, or connectors, and the reading order is straightforward, starting from the top left corner and moving right to the end of the line.

</details>

<p></p>



### VoteButton.ts

The `VoteButton.ts` script enables players to cast votes in-game, providing immediate visual feedback and enforcing vote limits per player.

It manages the vote count, maximum allowed votes, and button state, while listening for events such as voteCountUpdate to track voting progress, as well as events to show, hide, or reset the button.

<details>
<summary>Vote Button interface</summary>

<p></p>

[Vote Button interface](../../../image_data/0dde4b970da8dc215a4011ad68ab06d4a3152321354bc19991dec32dcd10f967.md)

### Overview
This image depicts a virtual environment resembling a room with a character standing in the center. The room has yellow tiled walls and a gray tiled floor. There are blue crates on either side of the character, and a red platform with a white symbol underneath the character. A green button labeled "Vote [3 left]" is located at the bottom of the screen. Above the character, there is a small rectangular box displaying "NPC: 109013 Bot."

### Key Elements
- **Character**: A figure wearing a dark shirt and jeans stands on a red platform with a white symbol. The character is centrally positioned.
- **NPC Identifier**: Located above the character, the identifier reads "NPC: 109013 Bot."
- **Blue Crates**: Two blue crates with diagonal white stripes are placed on the floor, one on each side of the character.
- **Red Platform**: A red platform with a white symbol is situated beneath the character.
- **Green Button**: A green button with the text "Vote [3 left]" is positioned at the bottom of the screen.
- **Background**: The room has yellow tiled walls and a gray tiled floor.

### Visual Flow / Relationships
The most prominent visual element is the NPC identifier above the character. The blue crates flank the character symmetrically. The red platform under the character draws attention due to its contrasting color. The green button at the bottom suggests an interactive element, likely related to voting. The spatial relationship is linear, with the NPC identifier leading the viewer's eye upwards, followed by the character, then the crates, and finally the button at the bottom.

</details>

<p></p>

