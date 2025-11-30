Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/ai-conversation-tutorial/module-1-introduction

# Module 1 - Introduction

Welcome, creators!

This example world demonstrates how you can implement AI Speech NPCs (Non-Player Characters) in Horizon Worlds.

![NPC LLM Tutorial world cover image](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/558892193_829681106236509_1582308276938310365_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=ENRds9-aY7UQ7kNvwHRvoyJ&_nc_oc=AdnbtuDsXRzt1DP0LqoSdLgsR7J9tfwXRLcv_nnyH0x99Sf42EXJULtdQjx7FtRGZak&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=BiUs_aDfmIcc0gIWurEyKQ&oh=00_Afg4mtb7pE3ELrRex4ZQiFJUf9TcUGZNvT7aD55yekF5Dw&oe=69465B4B)

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

This world provides examples on how to add an AI Speech NPC. This example world is built on top of the [Sim Tycoon reference world](https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/sim-tycoon-tutorial/module-0-setup). We recommend reviewing the Sim Tycoon world and its associated documentation to better understand the examples in this world.

## Prerequisites

We recommend familiarizing yourself with the “AI Speech NPCs” [documentation](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/npcs/npc-conversations/ai-speech-npcs-overview).

## What you’ll learn

In this tutorial, you will learn how to:

* [Meet and interact with existing AI Speech NPCs](https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/ai-conversation-tutorial/module-2-meet-the-npcs)
* [Understand how NPCs respond to game events](https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/ai-conversation-tutorial/module-3-understanding-npc-implementation)
* [How NPCs interact with players and other NPCs](https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/ai-conversation-tutorial/module-4-player-interaction-and-multiple-npcs)
* [Add and configure your own NPCs](https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/ai-conversation-tutorial/module-5-exercise-add-your-own-ai-npc)
* [Add game events for your world](https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/ai-conversation-tutorial/module-6-exercise-add-game-events)
* [Debug and optimize NPC performance](https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/ai-conversation-tutorial/module-7-debugging-and-best-practices)