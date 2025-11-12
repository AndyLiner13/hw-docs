Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/ai-conversation-tutorial/module-2-meet-the-npcs

Learn

# Module 2 - Meet the NPCs

This module introduces you to the two AI Speech NPCs in this example world and shows you how to interact with them.

## AI Speech NPCs

The first thing to notice when you enter this world are the two AI Speech NPCs, Shady Riley and Harmony Bloom.

### Shady Riley

Located on the green platform, Shady Riley is an unscrupulous salesman whose main focus is on making money by any means possible.

![Shady Riley NPC](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/556958983_829681089569844_8380526143911977220_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=K_QwIkna_C8Q7kNvwEtsj99&_nc_oc=AdkCe9x0SRUAqduayXo46Jqts94NdSspJn7wE5GyZZZftwG5UKwYyBS8McG1hFpWOJk&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=-f2uqASY0ZcTetGCz99pxQ&oh=00_AfhcqHGppaogYEDE7FAJ01G88eXEW24Y42lFZGr0KeM2tw&oe=692E9C8F)

### Harmony Bloom

Located on the blue platform, Harmony Bloom is an environmental activist who is convinced that mining these nodes hurts them.

![Harmony Bloom NPC](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/560158475_829681126236507_6940815205957341705_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=dY4BtVU8IU4Q7kNvwF3WSv0&_nc_oc=AdlflKAfUFgv49Umbm-14UO802VVXL9dQ2vx5PL_-Y34fahd_vQqFwm53MrzSbE5Dxw&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=-f2uqASY0ZcTetGCz99pxQ&oh=00_AfjCCoI7s6NxoRbYKhdGU1BbuZ10-d_LDH4ifO9dBLKTPQ&oe=692EBB7E)

## Interacting with the NPCs

Interact with the AI NPCs by stepping on the trigger zones, which are the large purple squares on the green and blue platforms. This will initiate conversations with the AI NPCs. You need to be close enough and face the AI NPCs to chat with them. You can tell the AI NPC is listening to you if your avatar has an interaction bubble.

![Interaction Bubble](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/557556907_829681096236510_585729429445193802_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=gJTP95B_dZEQ7kNvwF1dZ4J&_nc_oc=AdmfKzPwuAAYowMPTDq9O-DRmlt4Dz-Y5qOlzIjk17kbUF6BvYeAICgs74SlPsv_DfA&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=-f2uqASY0ZcTetGCz99pxQ&oh=00_Afj6rzUSncV0TCvIDE-8dsGyNEjx5GoNV_FI3aX1XIRX2A&oe=692E9820)

![Interaction Bubble](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/556913928_829681109569842_1425376538166400780_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=Pd_-gYmD40cQ7kNvwGCifMV&_nc_oc=Adnk34ntJLMcgtw1dteMYX-6ph0t8xufgCbN5uT1D0div7m55sWYMFV3OANbQS7SKgM&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=-f2uqASY0ZcTetGCz99pxQ&oh=00_AfiXg1WYGPFzMt9CfvH98LwZzuCd6gViSW0x5rY1veszqw&oe=692EC7EE)

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