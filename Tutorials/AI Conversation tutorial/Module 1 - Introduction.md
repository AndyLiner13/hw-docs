Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/ai-conversation-tutorial/module-1-introduction

Learn

# Module 1 - Introduction

Welcome, creators!

This example world demonstrates how you can implement AI Speech NPCs (Non-Player Characters) in Horizon Worlds.

![NPC LLM Tutorial world cover image](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/558892193_829681106236509_1582308276938310365_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=78VSTA1E3kUQ7kNvwF-uQbe&_nc_oc=AdmqZ9IVbr4fW8C4FO7qBPTA75GJfaG3HPERpG9HsCzpBd3qf1YpI2Mi3emBXpZZv5Q&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=FAx-NH77V_-NlK5V_ymgjA&oh=00_AfjTY2I2vPOzsNekrACh9oKlQiDWDTz55Dwl77rfhqoojQ&oe=692EA04B)

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

This world provides examples on how to add an AI Speech NPC. This example world is built on top of the [Sim Tycoon reference world](/hw-docs/Tutorials/Sim%20Tycoon%20tutorial/Module%200%20-%20Setup.md). We recommend reviewing the Sim Tycoon world and its associated documentation to better understand the examples in this world.

## Prerequisites

We recommend familiarizing yourself with the “AI Speech NPCs” [documentation](/hw-docs/Desktop%20editor/NPCs/NPC%20Conversation/AI%20Speech%20NPCs.md).

## What you’ll learn

In this tutorial, you will learn how to:

* [Meet and interact with existing AI Speech NPCs](/hw-docs/Tutorials/AI%20Conversation%20tutorial/Module%202%20-%20Meet%20the%20NPCs.md)
* [Understand how NPCs respond to game events](/hw-docs/Tutorials/AI%20Conversation%20tutorial/Module%203%20-%20NPC%20Implementation.md)
* [How NPCs interact with players and other NPCs](/hw-docs/Tutorials/AI%20Conversation%20tutorial/Module%204%20-%20Introduction.md)
* [Add and configure your own NPCs](/hw-docs/Tutorials/AI%20Conversation%20tutorial/Module%205%20-%20Exercise%20-%20Add%20Your%20Own%20AI%20NPC.md)
* [Add game events for your world](/hw-docs/Tutorials/AI%20Conversation%20tutorial/Module%206%20-%20Exercise%20-%20Add%20Game%20Events.md)
* [Debug and optimize NPC performance](/hw-docs/Tutorials/AI%20Conversation%20tutorial/Module%207%20-%20Debugging%20and%20Best%20Practices.md)