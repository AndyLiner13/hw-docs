Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/feature-samples/ai-conversation-tutorial/module-7-debugging-and-best-practices

# Module 7 - Debugging and Best Practices

This final module covers debugging techniques and best practices for creating effective AI Speech NPCs.

## Debugging Your AI NPCs

### Using the NPC debugger

Use the NPC Debugger tab in the Desktop Editor to determine which events and world states the Conversation is responding to. Below is a screenshot showing which game events Shady Riley is responding to in the world. You can also use the NPC Debugger to debug user voice inputs.

<details>
<summary>NPC Debugger tab</summary>

<p></p>

[NPC Debugger tab](../../../image_data/5a05d4ee892093dfb9d53b608b7d788c6e1ccaf003235c1b78d7d3c1c2768b3b.md)

### Overview
This image depicts a chat interface with a conversation taking place in a messaging application. The interface includes a sidebar with user messages and a main content area displaying a response from a user named "Shady Riley." The layout suggests a focus on communication and interaction within a game or community platform.

### Key Elements
- **Sidebar Messages**: Located on the left side, these contain messages from users. Each message has a sender's name, a timestamp, and the message content enclosed in a rounded rectangle with a light blue background.
  - **Visual description**: Rounded rectangles with light blue backgrounds.
  - **Location**: Left side of the interface.
  - **Contents**: Text messages from various users.
  - **Visual styling**: Light blue background, white text, and a subtle shadow effect.
- **Main Content Area**: On the right side, this area displays Shady Riley's response to a query about pickaxe upgrades.
  - **Visual description**: A rectangular box with a dark gray background.
  - **Location**: Right side of the interface.
  - **Contents**: Spoken message, directions, dynamic context, and timed events.
  - **Visual styling**: Dark gray background, white text, and a thin black border.
- **Spoken Message**: Located above the directions, this section contains Shady Riley's spoken message.
  - **Visual description**: A small rectangular box with a dark gray background.
  - **Location**: Above the directions.
  - **Contents**: Neutral message about pickaxe upgrades.
  - **Visual styling**: Dark gray background, white text, and a thin black border.
- **Directions**: Below the spoken message, this section contains a single line of text.
  - **Visual description**: A small rectangular box with a dark gray background.
  - **Location**: Below the spoken message.
  - **Contents**: "Advertise pickaxes for sale."
  - **Visual styling**: Dark gray background, white text, and a thin black border.
- **Dynamic Context**: Below the directions, this section lists item names, levels, costs, and descriptions related to pickaxe upgrades.
  - **Visual description**: A table-like structure with alternating light gray and dark gray rows.
  - **Location**: Below the directions.
  - **Contents**: Item names, levels, costs, and descriptions.
  - **Visual styling**: Alternating light gray and dark gray rows, white text, and thin black borders.
- **Timed Events**: Below the dynamic context, this section lists player actions and currency conversions.
  - **Visual description**: A table-like structure with alternating light gray and dark gray rows.
  - **Location**: Below the dynamic context.
  - **Contents**: Player actions and currency conversions.
  - **Visual styling**: Alternating light gray and dark gray rows, white text, and thin black borders.

### Visual Flow / Relationships
- **Most Prominent Visually**: The main content area displaying Shady Riley's response.
- **Arrows, Lines, Connectors**: None.
- **Implied Reading Order**: From left to right, then top to bottom.
- **Spatial Relationships**: Items are arranged in a grid-like structure with clear separation between sections.

</details>

<p></p>



### Common debug scenarios

* **NPC not responding**: Check if the conversation is properly registered and the trigger zones are working
* **Unexpected responses**: Review the backstory and instructions for clarity
* **Performance issues**: Monitor how frequently events are being called
* **Audio problems**: Verify microphone permissions and audio settings

## Best practices

### Take time to refine

Take the time to refine your AI NPCs to maximize the experience. Small changes can have large effects.

### Expect variability

Do not expect the same conversational responses from the AI NPCs each time. Their responses will vary as their backstories and strings are processed via the conversation API.

### Configure speaking style

Write several sentences in the instructions to configure how your AI NPCs will talk (e.g., length, word choice, topic).

### Performance optimization

* Monitor the frequency of event calls to prevent performance issues
* Use toggles to control which events NPCs respond to
* Implement timers and throttling for high-frequency events
* Test with multiple players to ensure good performance under load

### Iterative development

As Creators may discover when completing the exercises in this tutorial, adjusting backstories, guardrails, instructions, timers, and interaction logic is an iterative process. Plan to spend time experimenting and refining your NPCs.

## VR compatibility notes

Compared to the original Sim Tycoon world, some minor changes were made to allow play in VR:

* Grab anchors were added to the pickaxes
* Some minor modifications were made to [Pickaxe.ts](https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/feature-samples/ai-conversation-tutorial/Pickaxe.ts)

## Summary

You’ve now learned how to:

- ✅ Understand AI Speech NPC basics and setup requirements
- ✅ Interact with existing NPCs and understand their behaviors
- ✅ Implement NPCs using TypeScript and the Conversation API
- ✅ Manage player interactions and coordinate multiple NPCs
- ✅ Create your own AI NPC from scratch
- ✅ Add custom game events to trigger NPC responses
- ✅ Debug issues and follow best practices

## Next steps

Now that you’ve completed this tutorial, you can:

* Experiment with different NPC personalities and backstories
* Create more complex interaction systems
* Integrate NPCs into your own world designs
* Explore advanced Conversation API features
* Share your creations with the community