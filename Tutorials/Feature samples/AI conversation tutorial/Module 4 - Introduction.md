Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/feature-samples/ai-conversation-tutorial/module-4-player-interaction-and-multiple-npcs

# Module 4 - Introduction

This module covers how players interact with AI NPCs and the challenges of coordinating multiple NPCs in your world.

## Player interaction with AI NPCs

One of the coolest things about AI NPCs is being able to talk to them. This is enabled via the `gizmo.conversation.registerParticipant` call which takes a player object. The `NpcManager` example does this when players walk into its `talkTrigger` volume.

### Making NPCs look natural

To make talking to the NPCs feel more natural, we recommend having NPCs look at players while conversing with them. This is done via the `addAttentionTarget` call; in `NpcManager` this is done along with `registerParticipant`. You may want to implement more complicated logic in your world.

To prevent the AI NPC heads from swiveling to unnatural positions, the `NpcPlayer` object also exposes a `rotateTo` function to rotate the NPC’s entire body. This is called periodically for the closest player in `NpcManager`.

## Managing multiple AI NPCs

Implementing multiple AI NPCs in your world can be challenging to coordinate. You will need to experiment with various Conversation APIs and instructions to the AI NPCs. Having more AI NPCs in your world requires more complicated management of which AI NPCs are talking when as well as the general audio mix.

### Round-robin timer system

`NpcManager` shows a simple round-robin timer in its update loop to poll idle NPCs and one at a time, to call `elicitResponse`. Use `NpcEngagementPhase` to more finely control specific NPC behaviors.

### Performance optimization

How often specific world systems call Conversation functions can significantly impact overall NPC performance. In this example world, you can see this in `NpcManager` by the swing toggle. You may need to refine the AI NPC’s backstories, instructions, timers, and interaction logic to improve performance.

The frequency which specific World systems call various Conversation functions can have a significant impact on overall NPC performance, and is demonstrated in NpcManager by the swing toggle. As creators may discover when completing the exercise below, adjusting backstories, guardrails, instructions, timers, and interaction logic is an iterative process.

## Key integration points

A simple search for `NpcManager` will reveal where game code hooks to this `NpcManager` code. Understanding these integration points is crucial for implementing your own NPC behaviors.