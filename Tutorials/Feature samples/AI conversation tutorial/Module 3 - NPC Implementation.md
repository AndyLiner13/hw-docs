Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/feature-samples/ai-conversation-tutorial/module-3-understanding-npc-implementation

# Module 3 - NPC Implementation

This module explains the technical details of how AI Speech NPCs are implemented using TypeScript code and the Conversation API.

## Overview of NPC architecture

Configuring what NPCs become aware of and respond to is done using TypeScript code, specifically the central `NpcManager` class and the associated `NpcComponent`. Implementing NPCs using TypeScript will be very specific to your world. You will need to experiment with various combinations of the conversation functions to get your desired results.

## Key Components

### NpcManager class

The `NpcManager` class is a simple component that primarily handles the string instructions and descriptions from the Sim Tycoon game code, which is then handed to the NPC conversation API.

### NpcComponent script

The `NpcComponent` script attaches to individual NPCs and controls their specific behaviors and event responses.

## Conversation API functions

Show your creativity when crafting your AI NPCs by deciding which calls and instructions to give to the AI NPC for conversation generation. Here are the key functions:

### setDynamicContext

Used to notify the LLM of a state change. For example, when the player swaps pickaxes, this function updates the NPC’s understanding of the current situation.

### elicitResponse

Immediately generates a conversational response if the AI NPC is not otherwise busy. This is often used in combination with `setDynamicContext`.

### addEventPerception

Notifies the AI NPC of an event it may want to “remember”; however, it does not immediately generate a response. For example, when the player swings the pickaxe, this function logs the event but doesn’t force the NPC to respond immediately.

## Dynamic data integration

The `NpcManager` functions `setStoreData` and `setPlayerResource` are notable examples of giving the LLM a significant amount of interrelated information about the world to which it belongs. These two functions utilize `setDynamicContext` to inform the LLMs about both the items available for sale in the stores in the world as well as the amount of currency the player carries. With corresponding guardrails, the LLM is able to utilize this data in conversations with players, such as informing them about real prices in the store, or real upgrade paths for pickaxe.

## Performance considerations

Both Shady and Harmony have the Swing events toggled off. This is due to high frequency of these events having potential performance impacts.

How often specific world systems call Conversation functions can significantly impact overall NPC performance. In this example world, you can see this in `NpcManager` by the swing toggle. You may need to refine the AI NPC’s backstories, instructions, timers, and interaction logic to improve performance.