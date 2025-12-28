Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/genre-samples/match-3-tutorial/module-5-customize

# Module 5 - Customize your own Match 3 game

This module covers common questions about customizing your Match 3 game into a fully functioning, personalized experience.

## How do I add in my own tile assets?

Swapping the default tile and sound assets with your own designs are some of the most impactful ways to customize your Match 3 game. This guide walks you through those complete processes.

### Step 1: Creating Your Custom Tile Asset

First, you’ll need to create or find the asset you want to use as a tile. For this example, we’ll use a pumpkin asset from Horizon Worlds’ Public Assets library.

- In your Horizon Worlds editor, open the **Asset Library**.
- Navigate to **Public Assets**.
- Search for the asset you want to use (e.g., “pumpkin”).
- Select the asset and add it to your world.

<details>
<summary>Selecting a custom asset</summary>

<p></p>

[Selecting a custom asset](../../../image_data/80b7ed3d6620cf1fe1643ee077fed69e162da569c6626c4cb56c93557f8ea2ba.md)

### Overview
The image depicts a user interface from a game development or asset management tool. The main focus is on a 3D model of a pumpkin pie placed within a virtual environment, alongside a search bar and a list of assets. The interface includes a sidebar with a hierarchical structure and a central workspace displaying the 3D model and asset library.

### Key Elements
- **Sidebar (Left Panel)**: Contains a hierarchical structure with categories such as SpawnPoint, FxPool, TutorialPool, etc. The highlighted item is "pumpkin_pie".
- **Workspace (Center)**: Displays a 3D model of a pumpkin pie in a virtual environment. The pie is positioned centrally, with a small rectangular box above it showing a graph-like line.
- **Search Bar (Top Center)**: Located at the top of the workspace, contains the text "pumpkin".
- **Asset Library (Bottom Center)**: Lists various assets under "My Assets". The highlighted asset is "pumpkin_pie", which is a small icon resembling a pie slice.
- **Highlighted Asset**: A red bounding box highlights the "pumpkin_pie" asset in the asset library.

### Visual Flow / Relationships
- **Most Prominent Element**: The 3D model of the pumpkin pie in the workspace.
- **Arrows/Connectors**: There are no explicit arrows or connectors in the image.
- **Spatial Relationships**: The 3D model is in the center, with the search bar above it and the asset library below. The highlighted asset is within the asset library.

</details>

<p></p>



Once you’ve added your asset to the world, you’ll need to configure it properly before it can work with the Match 3 system.

### Step 2: Configuring Your Asset

For your custom asset to work correctly with the Match 3 system, you need to configure several important settings:

#### CRITICAL: Set Motion to “Animated”

<details>
<summary>The motion behavior entry of a custom asset</summary>

<p></p>

[The motion behavior entry of a custom asset](../../../image_data/b3e6e9d896e5cbfe3e3f8171638080a9e8a7014f3c39c80ff2ad36962414078b.md)

### Overview
This image depicts a 3D modeling software interface, specifically showing a scene with a pie model in the center. The interface includes a hierarchy panel on the left, a properties panel on the right, and a central viewport displaying the 3D model. There are various tools and settings available within the interface.

### Key Elements
- **Hierarchy Panel**: Located on the left side, it lists assets such as "SpawnPoint," "FxPool," and others. The "pumpkin_pie" asset is highlighted.
- **Viewport**: Central area showing a 3D model of a pie with a small cube placed on top of it. The pie is textured with a pumpkin-like pattern.
- **Properties Panel**: On the right, it contains attributes like position, rotation, scale, tint color, and behavior settings. The "Motion" setting is highlighted with a red box.
- **Search Bar**: At the bottom of the viewport, there is a search bar with the word "pumpkin" entered.
- **Toolbars**: At the very top, there are toolbars with icons for file operations, view options, and zoom controls.

### Visual Flow / Relationships
The most prominent visual element is the 3D pie model in the viewport. The hierarchy panel on the left lists assets, while the properties panel on the right provides detailed settings for the selected asset. The search bar at the bottom suggests functionality for searching through assets.

</details>

<p></p>



This is the most important step. If you skip this, you’ll encounter errors when the game tries to move your tiles.

- Select your custom asset (e.g., the pumpkin)
- Open the **Behavior** properties panel
- Find the **Motion** dropdown
- Change it from “None” to **“Animated”**

**Why this matters:** By default, objects in Horizon Worlds are set to “Static” (Motion: None), which means they cannot be moved by scripts. Since the Match 3 system needs to move tiles around the board during gameplay, static objects will cause an error: **“Unable to manipulate static entity (moveto)”**. Setting Motion to “Animated” allows the system to move your tile.

#### Scripts

* Your custom assets do **NOT** need any scripts attached to them
* The existing Match 3 system handles all the logic and will work with any visual asset you provide

Once you’re happy with the configuration, simply right-click on the object in the Hierarchy and select “Create Asset”.

<details>
<summary>Where to create a custom asset</summary>

<p></p>

[Where to create a custom asset](../../../image_data/bcb5ca3d447a378fcc98994b94fb0d9b1d590da389da5d5a719b0258035aea40.md)

### Overview
This image depicts a right-click contextual menu in a software interface, specifically within a file explorer or asset management tool. The menu is displayed over a folder named "pumpkin_pie," which contains an icon resembling a pumpkin pie slice. The menu items are arranged vertically, with some commands having keyboard shortcuts indicated next to them.

### Key Elements
- **Visual description**: The menu has a dark theme with light-colored text and a red highlight.
- **Location**: The menu is located at the bottom of the screen, extending downward from the folder name "pumpkin_pie."
- **Contents**:
  - **Copy**: `Ctrl + C`
  - **Cut**: `Ctrl + X`
  - **Paste**: `Ctrl + V`
  - **Paste as child**
  - **Rename**
  - **Duplicate selection**: `Ctrl + D`
  - **Create Asset**: Highlighted in red
  - **Delete selection**: `Del`
  - **Create parent object**: `Ctrl + G`
  - **Insert empty object**
  - **Focus on selection**
- **Visual styling**: The menu has a dark background with white text. The highlighted item "Create Asset" is bordered in red.

### Visual Flow / Relationships
The most prominent visual element is the "Create Asset" option, which is highlighted in red. The menu items are arranged in a vertical list, with no arrows or lines connecting them. The spatial relationship is linear, following the natural reading order from top to bottom.

</details>

<p></p>



Select a location into your own Asset Library folder (in this case, named “My Assets”) to place the assets into, then select “Create”.

<details>
<summary>The menu for creating a custom asset</summary>

<p></p>

[The menu for creating a custom asset](../../../image_data/baf0ef9ea783a5e424de3e297bdce970376d173edcaf67a62022de611359785b.md)

### Overview
This image depicts a user interface for creating a new asset within a digital asset management system. The form includes fields for entering the asset name, description, and selecting the asset type and folder.

### Key Elements
- **Asset Name**: Located at the top left, this field contains the text "pumpkin_pie". It has a placeholder indicating the remaining characters allowed (11/40).
- **Description**: Positioned below the Asset Name field, this area is empty but has a placeholder text "Enter Description" and a counter showing the maximum allowed characters (0/2500).
- **Asset Type**: Situated below the Description field, this section displays "Asset template" as the selected option.
- **Folder**: Below the Asset Type, this section shows a hierarchical folder structure under "My Folders". The folder "My Assets" is highlighted, suggesting it is the selected folder.
- **Buttons**: At the bottom, there are two buttons labeled "Cancel" and "Create".

### Visual Flow / Relationships
The form is structured hierarchically, with the Asset Name field being the most prominent due to its placement at the top. The Description field follows, and the Asset Type and Folder sections provide additional context. The buttons at the bottom offer options to either cancel the action or create the asset.

</details>

<p></p>



Scale your asset down to be about the size of a 1x1 grid. As an easy reference point, you can click on the **Build** menu in the top left of the editor, choose a Cube from the **Shapes** sub-menu, put it in your world, and scale your new asset to be approximately the same size.

Now that your asset is created, you should be able to use it in the next step.

### Step 3: Swapping Your Asset Into the Game

Now that your custom asset is configured, you need to tell the Match 3 system to use it instead of the default tiles.

- Navigate to **BasicsPool** in your Horizon Worlds hierarchy
- Select **CoreApi**
- Look at the attached component called `BasicsCoreAPI`.
- In the inspector, locate the section where default tile assets are referenced
- Replace the default tile asset reference with your newly created custom asset

<details>
<summary>Where to find the custom asset ID</summary>

<p></p>

[Where to find the custom asset ID](../../../image_data/d35b38a7ba6234eb1415ac7a14bd3f12822ad83e241f00170fae6da2528bb41b.md)

### Overview
This image depicts a 3D modeling software interface, specifically showing a scene with a pie model placed within a virtual environment. The interface includes a sidebar with asset management, a central workspace displaying the 3D model, and a properties panel on the right side.

### Key Elements
- **Sidebar (Left Panel)**: Contains a hierarchical list of assets under categories such as "SpawnPoint," "FxPool," "CoreApi," etc. The "pumpkin_pie" asset is highlighted.
- **Central Workspace**: Displays a 3D model of a pie floating in a virtual environment with a grid floor and a blue arrow indicating rotation axes.
- **Properties Panel (Right Panel)**: Shows various parameters related to the selected asset, including fields like "redTileAssetId," "pumpkin_pie," and others related to tile scaling and rotation.
- **Asset Library**: Located at the bottom left, with tabs for "Asset Library" and "My Assets." The "pumpkin_pie" asset is also shown here with a thumbnail image of the pie.

### Visual Flow / Relationships
The most prominent visual element is the 3D pie model in the central workspace. The properties panel on the right is connected to the selected asset in the Asset Library, indicated by a red arrow pointing towards the "pumpkin_pie" field. The sidebar provides context for the assets being managed.

</details>

<p></p>



You can also configure both the rotation and scale underneath each of the different color tiles if you desire.

<details>
<summary>The model positioning attributes of a custom asset</summary>

<p></p>

[The model positioning attributes of a custom asset](../../../image_data/06eb5f3c88c2d23283180c39d21803c1183c0066db73e3bdb1d3ef233ca877df.md)

### Overview
This image displays a user interface element resembling a settings or configuration panel. It consists of a series of parameter fields, each containing a label, a value field, and a small icon next to the label. The parameters are organized in rows, and the entire panel has a dark background with red highlights around certain elements.

### Key Elements
- **Parameter Labels**: These are the text labels such as "redTileAssetId," "redTileRotation," "redTileScale," etc.
- **Value Fields**: These are the input fields where numerical values can be entered, e.g., "0.5," "X 0 Y 0 Z 0," etc.
- **Icons**: Small icons next to the labels, likely representing the type of asset being configured.
- **Red Highlights**: Red rectangles highlight specific parts of the interface, possibly indicating errors, warnings, or selections.

### Visual Flow / Relationships
The parameters are arranged in a grid-like structure with labels on the left and corresponding value fields on the right. There are no arrows or lines connecting elements, but the layout suggests a sequential reading order from left to right within each row.

</details>

<p></p>



### Troubleshooting: “Unable to manipulate static entity” Error

If you encounter the error message **“Unable to manipulate static entity (moveto)”** when testing your game, this is because the object’s Motion setting is incorrect.

**The problem**: By default, objects in Horizon Worlds are set to “Static” (Motion: None), which means they cannot be moved by scripts or game logic. Since the Match 3 system needs to move tiles around the board during gameplay, static objects will cause errors.

**The solution**:

<details>
<summary>Where to find the motion property drop down in a custom asset</summary>

<p></p>

[Where to find the motion property drop down in a custom asset](../../../image_data/7be91dd18562b12041decfa147e9487a4763a65c87dfe80af31d758986315a2c.md)

### Overview
This image depicts a user interface element within a software application, specifically a settings or configuration panel. The focus is on a dropdown menu labeled "Motion" which has been expanded to reveal options. The interface includes toggle switches, dropdown menus, and buttons.

### Key Elements
- **Dropdown Menu**: Located in the center-right area, it is a dropdown menu under the "Motion" label. It is currently set to "Animated" and has a dropdown arrow indicating more options are available.
- **Toggle Switches**: Located at the top right, there are two toggle switches labeled "Visible" and "Collidable." Both are in the 'on' position as indicated by the blue fill.
- **Buttons**: Two buttons labeled "Play" and "Record" are located beneath the dropdown menu. They appear to be interactive elements.
- **Dropdown Options**: The dropdown menu under "Motion" shows two options: "Everything" and "Animated," with "Animated" being highlighted.
- **Toggle Switch Labels**: Positioned above the toggle switches, the labels are clearly visible.
- **Dropdown Arrow**: A red arrow points towards the dropdown menu, likely highlighting its interaction point.

### Visual Flow / Relationships
The most prominent visual element is the expanded dropdown menu under "Motion." The red arrow draws attention to this specific area. The toggle switches and buttons are arranged vertically below the dropdown menu, creating a clear hierarchical layout. The layout suggests that users can interact with the dropdown menu first before engaging with the toggle switches or buttons.

</details>

<p></p>



You must set the object’s **Motion** property to **“Animated”** instead of “None”:

- Select your custom tile asset
- Open the **Behavior** properties panel
- Find the **Motion** dropdown
- Change it from “None” to **“Animated”**

This allows the Match 3 system to move the tile object around the game board during gameplay.

### Tips for Success

* **Test frequently:** After swapping an asset, test your world to ensure the tile appears correctly and moves properly during gameplay
* **Consistent sizing:** Make sure all your tile assets are roughly the same size so they fit properly on the game board
* **Visual clarity:** Choose assets that are visually distinct from each other so players can easily identify different tile types
* **Performance:** Keep your asset poly counts reasonable to maintain good performance, especially if you plan to have many tiles on screen at once

## How do I change the audio?

The game uses a centralized audio system that lets you swap sound effects without modifying any code. All audio is organized into **banks** (folders) in the Horizon Worlds editor, and each sound file has a **tag** that scripts use to play the correct sound.

### Understanding the Audio System

The game has three main audio components:

- **FxFiles Entity** - The parent container in your world hierarchy that holds all audio banks
- **Audio Banks** - Folders that group related sounds together (e.g., TileAudio, ObjectiveAudio)
- **Audio Graph Items** - Individual sound files within each bank, each with a unique tag

### Audio Banks in Your Game

The game includes the following audio banks:

| **Bank Name** | **Bank ID** | **Description** |
| --- | --- | --- |
| **TileAudio** | `Tile_Bank` | Match sounds, tile swaps, combos, and obstacle sounds |
| **ObjectiveAudio** | `Objective_Bank` | Win/lose sounds, star ratings, round end |
| **AbilitiesAudio** | `Abilities_Bank` | Booster and power-up sounds |
| **UIAudio** | `UI_Bank` | Button clicks and UI feedback sounds |
| **Music** | `Music_Bank` | Background music tracks for gameplay and menus |

### How to Change Audio Files

<details>
<summary>adding a custom sound</summary>

<p></p>

[adding a custom sound](../../../image_data/6376832e300c3140d822a38b4f95cd2a2920efce57b186f3f13729f700821c3f.md)

### Overview
This image depicts a hierarchical file explorer interface with a tree-like structure showing nested folders and audio graph files. The interface includes a search bar at the top and a sidebar with a menu icon.

### Key Elements
- **Sidebar Menu Icon**: Located in the top-left corner, a simple icon resembling a menu or hamburger symbol.
- **Search Bar**: Positioned below the sidebar menu icon, spanning across the width of the interface. Contains placeholder text: "Search hierarchy".
- **Tree Structure**: A nested folder structure is displayed below the search bar. It includes:
  - **SpawnPoint**
  - **FxPool**
    - **Fx Files**
      - **Music**
        - **[Audio Graph] HW_M3_Game_Music_v1**
        - **[Audio Graph] HW_M3_Menu_Music_v1**
    - **TileAudio**
      - **[Audio Graph] SFX_TileMatch_Small**
      - **[Audio Graph] SFX_TileSwapFail**
      - **[Audio Graph] SFX_TileSwapSuccess**

### Visual Flow / Relationships
The most prominent visual element is the **[Audio Graph] HW_M3_Game_Music_v1**, as it is highlighted in blue, indicating selection or focus. The tree structure flows downward, with nested folders and files arranged hierarchically. Arrows next to folder names suggest expandable/collapsible functionality.

</details>

<p></p>



#### Step 1: Locate the Audio in Hierarchy

- Open your world in Horizon Worlds Editor
- In the Hierarchy panel, expand **FxPool**
- Expand **Fx Files** to see all audio banks

#### Step 2: Find the Sound You Want to Replace

- Expand the relevant audio bank (e.g., **TileAudio** for match sounds)
- You’ll see a list of [Audio Graph] items with descriptive names
- Select the [Audio Graph] item you want to replace

#### Step 3: Replace the Audio Asset

- From your asset library, add the new audio asset to the appropriate bank
- With the new [Audio Graph] item selected, add the **tag** from the sound you’re replacing
- Delete the old audio asset

**IMPORTANT**: Do NOT change the **tag** name! The tag is what the code uses to find the correct sound. Only replace the audio asset itself.

### Common Sound Tags Reference

Here are the key sound tags you’ll see in each bank:

#### TileAudio Bank

|Tag Name|When It Plays|
| --- | --- |
|`SFX_TileMatch_Small`|When 3 tiles match|
|`SFX_TileMatch_Big`|When 4+ tiles match|
|`SFX_TileSwapSuccess`|When a valid swap is made|
|`SFX_TileSwapFail`|When an invalid swap is attempted|
|`SFX_Obstacle_Damage`|When an obstacle is damaged|
|`SFX_Obstacle_Break_Single`|When a single obstacle breaks|
|`SFX_Obstacle_Break_Multiple`|When multiple obstacles break|
|`SFX_Combo_01` through `SFX_Combo_05`|Combo sounds (currently unused in code)|
|`SFX_Combo_Swish_01` through `SFX_Combo_Swish_04`|Swish sounds (currently unused in code)|

#### ObjectiveAudio Bank

|**Tag Name**|**When It Plays**|
|---|---|
|`SFX_Objective_Success`|When completing a level successfully|
|`SFX_Objective_Failed`|When failing a level|
|`SFX_Objective_StarRating`|When star ratings are shown|
|`SFX_Objective_RoundEnd`|When a round ends|

#### AbilitiesAudio Bank

|**Tag Name**|**When It Plays**|
|---|---|
|`SFX_Abilities_Rocket`|When rocket booster is used|
|`SFX_Abilities_Anvil`|When anvil booster is used|
|`SFX_Abilities_Shuffle`|When shuffle booster is used|
|`SFX_Abilities_UIButton`|When booster UI buttons are clicked|
|`SFX_Abilities_Row`|When row-clear power-up is used|
|`SFX_Abilities_Column`|When column-clear power-up is used|

### Tips for Custom Audio

* Keep your audio files short and crisp for the best player experience
* Match the volume levels of the original sounds so nothing is too loud or quiet
* Use audio file formats supported by Horizon Worlds (typically .wav or .mp3)
* Test your sounds in-game after replacing them to ensure they play at the right moments
* Remember: you can change the audio files as many times as you want without affecting the game code!

## How do I design a good Match 3 game?

Creating a compelling Match 3 game requires thoughtful design, balanced difficulty, and engaging obstacles. This guide helps you optimize your game and deliver the best player experience.

### Taking Your Game to the Next Level

#### New Obstacle Types

Having multiple types of obstacles is a key component of creating a fun and varied match-3 experience.

The Wooden Box Obstacle creates interesting gameplay, but you can also design obstacles that introduce new mechanics and challenges.

#### Integrating Obstacles into Stages

When creating a new obstacle, it’s important to consider the player’s gameplay experience when placing them.

**Remember**:

* The more obstacles you have in your stages, the less likely players will have space to make matches.
* Adding multiple obstacle types to a stage can provide the player with a varied experience. However, avoid having too many obstacles in one stage; otherwise, the player may feel overwhelmed by the decisions they need to make.

#### New Obstacle Examples

Here are some examples you could use to create some fun new obstacles:

**Flowers**

* Tiles can travel underneath this obstacle, making it difficult for players to plan their next move.
* This obstacle can be removed by making a match next to it
* Has multiple layers, making its difficulty variable.

**Concrete Block**

* It can only be damaged by hitting it with power-ups or boosters.
* Has multiple layers, making its difficulty variable.

**Apple Basket**

* Contains ‘apples’ which players need to collect to complete an objective (E.g. Collect 20 Apples)
* Making a match next to an Apple Basket or hitting it with a power-up or booster obstacle rewards the player with an apple.
* Apple Baskets are indestructible and cannot be removed from the board.

#### Slowly Introduce Obstacles

* Allow the player to understand the core fundamentals of the game before introducing new obstacles.
* When you introduce a new obstacle, make sure players understand its functionality.
* You can do this by creating a level with an easy set of objectives and a high number of moves, so they are unlikely to fail.
* Let the players use a new obstacle for a significant amount of time before introducing a new one.
* It will allow the player to become comfortable with the mechanics of the game and increase the length of their experience.

### Balancing Your Game

Here are a couple of things to keep in mind when tailoring your gameplay experience for other players.

#### Aim for Multiple Difficulties

Having levels of varying difficulties is good for the player’s gameplay experience, as it makes completing stages feel rewarding.

Consider using the ‘Peaks and Valleys’ philosophy when balancing your stages:

- Start the player with some easy levels (Valley)
- Slowly increase the difficulty
- Have a difficult level that players can eventually overcome (Peak)
- Reward them with an easier level (Valley)

This allows players to have a varied difficulty experience, fostering a sense of growth and achievement.

You can also use this technique for testing a player’s understanding of new obstacles while also making them feel rewarded.

#### Modify Player Moves

Move count will be your strongest tool in determining the difficulty of the stages you create.

* Test your stages after creating them to make sure they can be completed.
* Take note of how many moves it takes to complete and modify the move total to make it easier or harder.

#### Gameplay Length

* Try to keep each stage’s gameplay between 1 - 3 minutes in duration
* This will allow the player to win/lose quickly and move on to the next stage
* If a stage can be completed too quickly, players won’t find it challenging.