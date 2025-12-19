Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/feature-samples/ai-conversation-tutorial/module-1-introduction

# Module 1 - Introduction

Welcome, creators!

This example world demonstrates how you can implement AI Speech NPCs (Non-Player Characters) in Horizon Worlds.

<details>
<summary>NPC LLM Tutorial world cover image</summary>

<p></p>

[NPC LLM Tutorial world cover image](../../../image_data/90e4aa71135a205fe76fc1ea525cd622b32a37970fdc2d0359d077183cdcfb92.md)

### Overview
The image depicts a digital interface featuring a character named "Shady Riley," identified as a bot, with a speech bubble above him. The background consists of a yellow wall with a grid pattern, and there is a wooden railing at the bottom right corner. The overall composition suggests a virtual environment, possibly a chatbot or interactive dialogue system.

### Key Elements
- **Character**: A male figure wearing a dark suit, white shirt, and tie. He has short dark hair and is positioned centrally in the lower part of the image.
- **Speech Bubble**: Located above the character, it is a brown rectangular shape with rounded edges. Inside the bubble, the text reads: "Shady Riley: 'Want me to 'explain' how it works?'" 
- **Name Tag**: Below the speech bubble, a smaller white rectangular tag with rounded corners displays the name "Shady Riley Bot" in black text.
- **Background**: The wall behind the character is a solid yellow with a light blue grid overlaying it. The wooden railing is located at the bottom right corner of the image.

### Visual Flow / Relationships
The most prominent visual element is the speech bubble, which draws attention upward. The character is positioned below the speech bubble, and the name tag is situated directly beneath the speech bubble. The wooden railing at the bottom right acts as a boundary within the scene.

</details>

<p></p>



The AI NPCs respond to players with dynamic LLM (Large Language Model) speech output by reacting to game events and player voice input. This example world contains two AI NPCs, Shady Riley and Harmony Bloom, each with their own backstory and personality.

## Before you start

After creating a new copy of this template world, you need to do the following in the Desktop Editor:

- Navigate to **Systems** > **VariableGroups** > click the plus sign, “Create Variable Group”
- Inside the variable group, click the plus sign to add a new Player Pesistent Variable called `SaveGame`
- To link the new player variable to the code, open the `SaveGame.ts` script and find `pvarsBaseName`
  - Change the value of this to match your VariableGroup name
  - Make sure that `:` (colon) is at the end
  - If you did not name the variable `SaveGame`, you need to update the next line `saveGameKey` with the corresponding variable name

## Example world overview

This world provides examples on how to add an AI Speech NPC. This example world is built on top of the [Sim Tycoon reference world](../../Genre%20samples/Sim%20tycoon%20tutorial/Module%200%20-%20Setup.md). We recommend reviewing the Sim Tycoon world and its associated documentation to better understand the examples in this world.

## Prerequisites

We recommend familiarizing yourself with the “AI Speech NPCs” [documentation](../../../Desktop%20editor/NPCs/NPC%20Conversation/AI%20Speech%20NPCs.md).

## What you’ll learn

In this tutorial, you will learn how to:

* [Meet and interact with existing AI Speech NPCs](Module%202%20-%20Meet%20the%20NPCs.md)
* [Understand how NPCs respond to game events](Module%203%20-%20NPC%20Implementation.md)
* [How NPCs interact with players and other NPCs](Module%204%20-%20Introduction.md)
* [Add and configure your own NPCs](Module%205%20-%20Exercise%20-%20Add%20Your%20Own%20AI%20NPC.md)
* [Add game events for your world](Module%206%20-%20Exercise%20-%20Add%20Game%20Events.md)
* [Debug and optimize NPC performance](Module%207%20-%20Debugging%20and%20Best%20Practices.md)