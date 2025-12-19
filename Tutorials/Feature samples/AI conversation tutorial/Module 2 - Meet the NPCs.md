Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/feature-samples/ai-conversation-tutorial/module-2-meet-the-npcs

# Module 2 - Meet the NPCs

This module introduces you to the two AI Speech NPCs in this example world and shows you how to interact with them.

## AI Speech NPCs

The first thing to notice when you enter this world are the two AI Speech NPCs, Shady Riley and Harmony Bloom.

### Shady Riley

Located on the green platform, Shady Riley is an unscrupulous salesman whose main focus is on making money by any means possible.

<details>
<summary>Shady Riley NPC</summary>

<p></p>

[Shady Riley NPC](../../../image_data/00e6bbf7843519245e43bc34dc53cdb88d8818edb6eeb94193a4fe5c24b92363.md)

### Overview
This image depicts a virtual environment within a game or simulation. It features a shop area with a character named "Shady Riley," identified as a bot, standing near a counter. The scene includes various interactive elements and a signboard providing information about Shady Riley.

### Key Elements
- **Shop Counter**: Located on the left side, with a wooden counter and a cash register labeled "T."
- **Character**: A bot named "Shady Riley" is positioned near the counter, wearing a red hat and blue outfit.
- **Signboard**: Positioned to the right of the character, displaying information about Shady Riley, including his role as an NPC and instructions for interacting with him.
- **Background**: Features a yellow tiled wall and a staircase leading upwards.
- **Foreground**: Includes a green ramp and a blue figure pointing towards the shop entrance.

### Visual Flow / Relationships
- **Most Prominent Element**: The bot "Shady Riley" is the focal point of the image.
- **Arrows/Connectors**: None explicitly shown, but the positioning of the character and signboard suggests a reading order from the bot to the signboard.
- **Spatial Relationships**: The character is adjacent to the counter, while the signboard is further to the right, indicating a secondary focus area.

</details>

<p></p>



### Harmony Bloom

Located on the blue platform, Harmony Bloom is an environmental activist who is convinced that mining these nodes hurts them.

<details>
<summary>Harmony Bloom NPC</summary>

<p></p>

[Harmony Bloom NPC](../../../image_data/a85559a1da2907bdafc723714be0e237d4707faa1920d45466406305b559c403.md)

### Overview
This image depicts a virtual environment with a character named "Harmony Bloom" standing near a shop. The scene includes a large blue crystal-like object, a wooden shop structure, and a tiled wall in the background.

### Key Elements
- **Character**: A figure wearing a yellow plaid shirt, green pants, and a red hat. The name "Harmony Bloom" is displayed above the character in a speech bubble.
- **Blue Crystal**: A large, translucent blue crystal occupies the left side of the image, partially obscuring the character.
- **Shop Structure**: A wooden structure resembling a shop with a sign that reads "SHOP" in bold letters. The shop has a brown roof with blue fabric hanging down, and a brown door with a logo featuring two stylized faces.
- **Background Wall**: A tiled wall with a yellowish hue forms the backdrop of the scene.

### Visual Flow / Relationships
The most prominent visual element is the blue crystal, which draws attention due to its size and translucency. The character is positioned to the left of the shop, suggesting interaction or observation. The shop is situated on the right side of the image, with the tiled wall behind it providing a sense of depth.

</details>

<p></p>



## Interacting with the NPCs

Interact with the AI NPCs by stepping on the trigger zones, which are the large purple squares on the green and blue platforms. This will initiate conversations with the AI NPCs. You need to be close enough and face the AI NPCs to chat with them. You can tell the AI NPC is listening to you if your avatar has an interaction bubble.

<details>
<summary>Interaction Bubble</summary>

<p></p>

[Interaction Bubble](../../../image_data/52a9ec9a8c73ecffdc57fd5dd2e3ac8d55528ab51f4dbac5d6fa936af7283230.md)

### Overview
This image depicts a scene from a video game interface, likely a chat or interaction screen within a virtual environment. The central focus is on a character holding a large green gem, with another character standing nearby. The interface includes various controls and indicators typical of a mobile game.

### Key Elements
- **Central Character**: A character wearing a red and white outfit with a backpack, holding a blue pickaxe. Positioned slightly to the right of the center.
- **Green Gem**: A large, bright green gem hovering above the central character. It has a smooth, gem-like texture.
- **Another Character**: A character dressed in a formal suit, standing behind the central character. This character is labeled as "Shady Riley Bot."
- **Chat Interface**: Located at the top of the screen, showing a conversation thread with a message from "marisaong:".
- **UI Controls**: Various icons and buttons are visible around the edges of the screen, including a camera icon, settings gear, and a speech bubble.
- **Health Bar**: Partially visible at the bottom left, showing a number "474".

### Visual Flow / Relationships
The most prominent visual elements are the green gem and the characters. The green gem is the focal point, drawing attention due to its size and bright color. The characters are positioned to interact with the gem, suggesting a gameplay mechanic involving the gem. The chat interface at the top indicates ongoing communication, adding context to the scene.

</details>

<p></p>



<details>
<summary>Interaction Bubble</summary>

<p></p>

[Interaction Bubble](../../../image_data/e12921ffdc0019d0a23ae744b3866dc13e2e99096c57e69e4cb805120f098418.md)

### Overview
This image depicts a scene from a virtual environment, likely within a game or simulation. The central focus is on two characters engaged in conversation, with speech bubbles indicating dialogue. The interface includes various controls and indicators typical of mobile games.

### Key Elements
- **Characters**: Two avatars are present. One character is dressed in a suit and is facing away from the viewer, while the other character is wearing a red and black outfit and holding a pickaxe. The character in the suit appears to be a NPC named "Shady Riley," as indicated by the text bubble.
- **Speech Bubbles**: Two green speech bubbles are floating above the characters, containing text. One bubble says "marisaong: 'Yes I am interested'" and the other says "Shady Riley Bot."
- **UI Elements**: The top of the screen features a menu bar with icons for settings, chat, and other functions. There are also icons for camera, microphone, and other utilities. On the right side, there are numerical indicators and a small profile picture.
- **Game Controls**: At the bottom, there are circular icons representing movement controls and possibly actions like mining or running.

### Visual Flow / Relationships
The most prominent visual elements are the characters and their speech bubbles. The characters are positioned centrally, with the NPC slightly ahead and to the left. The speech bubbles are aligned with the characters, suggesting a conversation is taking place. The game controls at the bottom provide interactive options for the player.

</details>

<p></p>



Be sure both your sound and microphone are turned on. You may need to grant permission for Horizon Worlds to access your microphone.

## NPC Reactions to Game Events

The two AI NPCs, Shady Riley and Harmony Bloom, respond to a slightly different set of events based on what the player is doing. These are controllable by toggles, discussed in later modules.

| **Game event** | **Event description** | **Shady Riley** | **Harmony Bloom** |
| --- | --- | --- | --- |
| Pickaxe: PlayerEquipped | Player equips a pickaxe | Yes | Yes |
| Pickaxe: PlayerAttached | Player swaps backpacks | Yes | Yes |
| Swing: PlayerAxeMissed | Pickaxe misses | No | No |
| Swing: PlayerAxeHitOre | Pickaxe hits mining node | No | No |
| Pickaxe: PlayerAxeDull | Pickaxe color doesn’t match mining node | Yes | Yes |
| Inventory: PlayerCollectedResource | Player collects resource (gem) | Yes | Yes |
| Inventory: PlayerInventoryFull | Player’s backpack is full | Yes | Yes |
| PlayerTeleport | Player teleports after falling into a ditch | Yes | Yes |
| PlayerResourceConverter | Player converts a gem into currency | Yes | Yes |
| Store: PlayerPurchase | Player purchases an item from the store | Yes | Yes |

## Try it yourself

- **Start a conversation**: Step onto one of the purple trigger zones near either Shady Riley or Harmony Bloom
- **Talk to the NPC**: Speak into your microphone while facing the NPC
- **Listen to their response**: The AI NPC will respond based on their personality and backstory
- **Perform game actions**: Try equipping a pickaxe, mining some resources, or purchasing items from the store to see how the NPCs react