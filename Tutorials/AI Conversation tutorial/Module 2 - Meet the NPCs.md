Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/ai-conversation-tutorial/module-2-meet-the-npcs

# Module 2 - Meet the NPCs

This module introduces you to the two AI Speech NPCs in this example world and shows you how to interact with them.

## AI Speech NPCs

The first thing to notice when you enter this world are the two AI Speech NPCs, Shady Riley and Harmony Bloom.

### Shady Riley

Located on the green platform, Shady Riley is an unscrupulous salesman whose main focus is on making money by any means possible.

![Shady Riley NPC](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/556958983_829681089569844_8380526143911977220_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=mDT8LNsWwhYQ7kNvwE2wzL6&_nc_oc=AdmsGTzBuFpV8JoiyzkDd1UndznD69OXBRVRvSJZEPA0-WcJoxJuNZUb6pUW5gqVNI8&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=949kSv-dWnOhayAc3LQioQ&oh=00_AfiFT5YArKDLdfES_GQmUTlYeNBxgWiTLx_CIBSy7bmNnw&oe=6946578F)

### Harmony Bloom

Located on the blue platform, Harmony Bloom is an environmental activist who is convinced that mining these nodes hurts them.

![Harmony Bloom NPC](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/560158475_829681126236507_6940815205957341705_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=H-sBDlpgCs0Q7kNvwFDkkJ-&_nc_oc=AdlhRTee-GszIa4nRVEUzLOdQ1nGNPX99OYsTQIV7ENjQe4dslA5kD4CybxQe026AEY&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=949kSv-dWnOhayAc3LQioQ&oh=00_Afi3_pxolvCTqj8BT6DcoN0_S0xY1PveX8EghqFdb0k1pA&oe=69463E3E)

## Interacting with the NPCs

Interact with the AI NPCs by stepping on the trigger zones, which are the large purple squares on the green and blue platforms. This will initiate conversations with the AI NPCs. You need to be close enough and face the AI NPCs to chat with them. You can tell the AI NPC is listening to you if your avatar has an interaction bubble.

![Interaction Bubble](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/557556907_829681096236510_585729429445193802_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=aU6rXfwXxPgQ7kNvwHqFih0&_nc_oc=Admb-d6cSoLCsMaR15VFfZJbI5bdaR2fIc15Mp_dmsma8lzgrjs52_ytdOidYh450L0&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=949kSv-dWnOhayAc3LQioQ&oh=00_AfhhhxSeLM78T6CKcE7leN94notGT19J92jCJz63C8Asmg&oe=69465320)

![Interaction Bubble](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/556913928_829681109569842_1425376538166400780_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=DixhPxgzCREQ7kNvwEAUa0x&_nc_oc=AdkxIhtoG1mS38Vh1c2rT-SG4UBjlgX81kKeTZ1eK38D2DFmxWOMSuEN54Sq0A3Qwqk&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=949kSv-dWnOhayAc3LQioQ&oh=00_Afi1itvN-3Su-NSjBd-W7c2IAqH7TA_khHtKHP5PTAnjTg&oe=69464AAE)

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