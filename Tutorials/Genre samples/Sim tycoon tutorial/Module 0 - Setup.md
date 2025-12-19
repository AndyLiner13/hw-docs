Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/genre-samples/sim-tycoon-tutorial/module-0-setup

# Module 0 - Setup

Welcome, creators!

This documentation serves as a companion guide to the **Sim Tycoon** template world, one of the tutorial worlds available in the **Home** section of the Horizon Desktop Editor.

<details>
<summary>Custom UI Tutorial World Cover Image</summary>

<p></p>

[Custom UI Tutorial World Cover Image](../../../image_data/7bf5aa9313e704c31bcb182127ba7154de3939a005a6747aba4342732c0c60f9.md)

### Overview
This image depicts a shop interface within a game environment. The shop is designed with a wooden frame and green awning, situated against a yellow-tiled wall. The interface includes various items for purchase, each with its own description and price tag. To the right, there's a sign providing information about the shop's purpose and functionality.

### Key Elements
- **Shop Header**: Located at the top-center, the word "SHOP" is prominently displayed in a playful font with a green outline.
- **Wooden Frame**: Surrounding the shop, the frame is made of wood with a rustic appearance.
- **Green Awning**: Positioned above the shop, the awning is green with a textured pattern.
- **Item Listings**: There are four items listed under the "GREEN SHOP" section:
  - **Pickaxe**: A pickaxe icon with the text "Speed Pickaxe" and a price of "100".
  - **Small Backpack**: An icon of a backpack with the text "Small Backpack" and a price of "10".
  - **Green Conversion**: An icon of a green cube with the text "Upgrade Green Conversion" and a price of "10".
  - **Green Package**: An icon of a package with the text "Green Package" and a price of "10".
- **Purchase Button**: Below the item listings, there's a green button labeled "PURCHASE" with a price of "10" next to it.
- **Signboard**: On the right side, there's a black signboard with white text explaining the shop's role in the game. It reads: "THE SHOP: The Shop is the main resource sink for the game. Players can purchase new tools, upgrades, and more from stores like these. See the Store.ts file to learn more."

### Visual Flow / Relationships
The most prominent visual element is the shop itself, which is centrally located. The items are arranged in a grid-like fashion beneath the header, with the purchase button positioned below them. The signboard on the right provides additional context and information about the shop's purpose. Arrows or lines are not present, but the layout suggests a logical reading order from left to right and then down the columns.

</details>

<p></p>



## Finding and opening the template world

To access the Custom UI Tutorial World:

- Open the Horizon Desktop Editor to be taken to the **Creation Home** page.
- Select **Tutorials** from the left navigation options.
- Look for **Sim Tycoon Template** in the list of available tutorial worlds and click to open and explore the world.

## Before you start

After creating a new copy of this template world, you need to do the following in the Desktop Editor:

- Navigate to **Systems** > **VariableGroups**, then create a new variable group.
- Inside the variable group, add a new player variable called `SaveGame`.
- To link the new player variable to the code, open the `SaveGame.ts` file and find `pvarsBaseName` variable.
  - Change the value of this to match your VariableGroup name.
  - Make sure that the `:` (colon) is on the end of the line.
  - If you did not name the variable `SaveGame`, you need to update the next line `saveGameKey` with the corresponding variable name.

## Reference world overview

This reference world provides you with the foundational systems, components, and project setup to quickly create a mobile-only multiplayer sim tycoon game. The reference world is limited to a maximum of eight players, but you can change that number.

This game genre goes by many different names such as Tycoon Simulator, Progression Simulator, Incremental Tycoon, or Incremental Sim game.

Popular Horizon World games in this genre include Samurai Tycoon, Saber, and Plants.

The key characteristics of this style of game are:

* Players use tools to gather resources
* Players exchange or convert those resources for currency
* Players use that currency to buy and upgrade tools to gather resources faster
* The cycle repeats.

The core gameplay loop (gather, exchange, upgrade) is repeatable which drives player progression and engagement.

The core game components are:

* Tools
* Collectable items (resources)
* Conversions (stores and converter)

## Explore the reference world

To learn how this reference world works, start by playing the game. New players start in the FTUE (First-Time User Experience) zone.

<details>
<summary>Reference World #1</summary>

<p></p>

[Reference World #1](../../../image_data/3a3bdcc876dc7a6fc30a28fca3d5ea2aa99ced441595d824147f0969ebf27294.md)

### Overview
This image depicts a first-person view within a virtual environment, likely a game interface. The scene includes a character standing in a room with tiled walls and floor, facing a signboard that provides information about the game. There are various UI elements overlaid on the screen, suggesting this is a screenshot from a mobile game.

### Key Elements
- **Character**: A male avatar wearing a green shirt, gray pants, and a brown backpack stands facing away from the viewer towards a signboard.
- **Signboard**: Located on the right side of the image, it has a wooden frame and displays text titled "FIRST-TIME USER EXPERIENCE." The text explains the FTUE process and advises purchasing a Green Pickaxe before stepping into the teleporter.
- **UI Elements**:
  - **Top Left**: Two circular icons, one with a microphone symbol and another with three dots.
  - **Top Right**: A menu icon and a resource counter showing 40 units of a green item, 0 units of a blue item, 0 units of a purple item, and 0 units of a red item.
  - **Bottom Left**: A circular control pad with a white circle in the center.
  - **Bottom Right**: An icon of a running figure with a pickaxe, possibly indicating movement controls or an action button.

### Visual Flow / Relationships
The character is the focal point, positioned centrally but slightly to the left. The signboard is the most prominent visual element, drawing attention due to its size and the instructional text. The UI elements are distributed around the edges, providing contextual information without obstructing the central focus.

</details>

<p></p>



New players must buy a green pickaxe to activate the teleporter. The teleporter transports players to the main gameplay zone. Once you complete the FTUE, you will spawn at the main zone’s spawn point.

<details>
<summary>Reference World #2</summary>

<p></p>

[Reference World #2](../../../image_data/6fd88c0945dc4e683a536e000346da41292ae2590a38d100f575602bfadfabd8.md)

### Overview
This image depicts a virtual environment within a game or simulation. The scene includes a character standing near a resource node, with a sign providing information about the node. The environment has a grid-like floor and walls made of blocks, suggesting a modular or constructed setting. There are also some decorative elements like rocks and a ramp.

### Key Elements
- **Character**: A male avatar wearing a brown shirt, blue jeans, and a backpack, facing away from the viewer towards the resource node.
- **Resource Node**: A green, cube-shaped object with a sign attached to it. The sign reads: "RESOURCE NODE. Resource Nodes are the source of all currency. When the progress bar for the node is filled, the player receives [insert amount] (or whatever). See the ResourceNode.ts file to learn more."
- **Sign**: Located on the green cube, providing information about the resource node.
- **Background**: Walls made of yellowish blocks, with a ramp leading up to a higher platform area.
- **Foreground**: A tiled floor with a grid pattern.
- **UI Elements**: On the right side, there is a mini-map and inventory slots showing various items with their respective quantities.
- **Left Side**: A ramp leading up to a higher platform area, with some purple rock formations.

### Visual Flow / Relationships
The most prominent visual element is the character facing the resource node. The sign on the resource node provides key information about its function. The layout suggests a progression path, with the ramp leading to another area. The UI elements on the right provide contextual information about the player's resources and status.

</details>

<p></p>



When you spawn in, you’ll be placed on the green platform which contains green resource nodes. Resource nodes are the source of all currencies in the game. Mine the green node by hitting it with your pickaxe. The HUD displays your progress in collecting green gems.

<details>
<summary>Reference World #3</summary>

<p></p>

[Reference World #3](../../../image_data/557ab46818c6d09b523bcaa490b4157eeebe12572820316523dca64c2fce6047.md)

### Overview
This image depicts a scene from a video game, likely a mining or resource gathering game, given the presence of large green crystals and a character holding a pickaxe. The environment suggests an indoor setting with tiled floors and yellow walls. There is a user interface overlay providing various controls and information.

### Key Elements
- **Character**: A player character wearing a backpack and holding a pickaxe, positioned near a large green crystal.
- **Pickaxe**: A green pickaxe held in the right hand of the character.
- **Green Crystal**: A large, green, gem-like object that the character is interacting with.
- **Shop Counter**: Located in the background, labeled "SHOP," with three blue screens displaying items.
- **User Interface**: 
  - **Top Left**: Contains control buttons labeled "TAB," "ESCAPE," "[Internal]," and "O."
  - **Top Right**: Displays a progress bar indicating "4/10" and a green highlighted area.
  - **Right Side**: Shows inventory slots with icons representing different resources ("v," "0," "0," "0," "0").
  - **Bottom Right**: Contains a circular icon with a white arrow pointing left and another with a white arrow pointing right, labeled "LMB" and "R."

### Visual Flow / Relationships
The character is the focal point, standing in front of the green crystal. The shop counter in the background serves as secondary information, while the user interface elements provide contextual information about the game mechanics. The green highlighted area in the top right corner draws attention to a specific action or selection within the game.

</details>

<p></p>



Each time the progress bar is completed, you gain gems and the bar of your backpack UI fills up. Walk towards the center of the world to step on the trigger for the converter. Converting gems turns this resource into currency.

Spend currency at the shops to purchase new items. The top row of the shop sells pickaxes and backpacks. The bottom row offers upgrades to your pickaxe and improved conversion rates.

<details>
<summary>Reference World #4</summary>

<p></p>

[Reference World #4](../../../image_data/d850582cfe4512fd64c1455c6134d1747ce98e668aa97c97920bb0a6b51e10d8.md)

### Overview
This image depicts a shop interface within a video game. The central focus is a shop kiosk with various items displayed for purchase. The player character is standing in front of the shop, facing away from the camera. The shop has a wooden frame with green awnings, and the background features a tiled wall. The interface includes various controls and indicators at the top and bottom of the screen.

### Key Elements
- **Shop Kiosk**: Located centrally, with a wooden frame and green awnings. Contains multiple items for sale, each with a label and price.
    - **Green Pickaxe**: Owned, priced at 10.
    - **Small Backpack**: Owned, priced at 10.
    - **Upgrade Green Pickaxe**: Level 1, priced at 25.
    - **Upgrade Green Comb**: Level 1, priced at 25.
- **Player Character**: Positioned in front of the shop, wearing a gray t-shirt, blue jeans, and a brown backpack.
- **Signboard**: To the right of the shop kiosk, with text explaining the shop's purpose.
- **UI Controls**: At the top left, there are icons for menu, pause, and other functions. At the bottom right, there are movement controls.
- **Inventory Display**: On the right side, there are icons representing different resources or items, such as gems and cubes.

### Visual Flow / Relationships
The most prominent visual element is the shop kiosk. The player character is positioned in front of it, indicating interaction. The signboard to the right provides information about the shop's role. The UI controls at the top and movement controls at the bottom suggest interactive elements within the game.

</details>

<p></p>



Cross the bridge to the next platform where you will find new colored resource nodes (blue) and items for sale.

## Creating your own world

### Editing properties

Many of the gameplay systems include properties that can dramatically affect gameplay. Use these designer tools to tune gameplay interactions. For example, look at the tools hidden under the world and the resource nodes.

### Editing code

Some changes will require you to modify scripts. Data sections have been implemented for you to modify. We recommend you have a basic understanding of using TypeScript in Horizon Worlds before making changes to scripts.

### Adding your own art

One critical aspect of making your own game is the artwork. Most of the artwork in the sample world can be completely changed. Certain aspects that relate to gameplay, however, will require scripts to be attached. Examples include changing the artwork for tools and resource nodes.

## Tutorial Modules

This tutorial is organized into comprehensive modules that build upon each other. Each module focuses on a specific system or component within the sim tycoon game. Work through them in order for the best learning experience:

### Core Systems

* **Module 1 - SimPlayer**: Learn about player state management, tool equipping, and resource tracking that forms the foundation of player interactions.
* **Module 2 - Resource Nodes**: Understand the interactive mining objects that players use to gather resources and materials.
* **Module 3 - Tools and ToolGroups**: Explore the tool management system that handles player equipment and tool distribution.

### Player Equipment

* **Module 4 - Pickaxe**: Deep dive into the primary mining tool that players use to extract resources from nodes.
* **Module 5 - Backpack**: Discover the inventory system that manages player storage capacity and resource collection.

### Economy Systems

* **Module 6 - Resource Converter**: Learn how raw resources are converted into currency for purchasing upgrades.
* **Module 7 - Store System**: Understand the shop mechanics that allow players to purchase tools and upgrades.

### Game Management

* **Module 8 - World Management**: Explore the central game coordination system that ties all components together.
* **Module 9 - SaveGame System**: Implement persistent player data that maintains progress across sessions.

### User Interface

* **Module 10 - HUD System**: Create the user interface elements that display player progress and game information.
* **Module 11 - FTUE System**: Build the first-time user experience that introduces new players to the game.

### Advanced Features

* **Module 12 - Global Resource Nodes**: Implement shared resource nodes that multiple players can interact with simultaneously.
* **Module 13 - Teleporter System**: Add transportation mechanics that move players between different game areas.
* **Module 14 - Particle VFX System**: Enhance the visual experience with particle effects and visual feedback.
* **Module 15 - Audio System**: Integrate sound effects and audio feedback to create an immersive experience.
* **Module 16 - Achievement Quest System**: Add progression tracking and achievement systems to increase player engagement.
* **Module 17 - Configuration and Customization**: Learn advanced techniques for customizing and extending the game systems.