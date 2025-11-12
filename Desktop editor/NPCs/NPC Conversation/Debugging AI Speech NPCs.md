Source: https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/npcs/npc-conversations/debugging-ai-speech-npcs

Learn

# Debugging AI Speech NPCs

After creating an AI Speech NPC, you can debug it using the NPC Debugger. The NPC Debugger can be found in a tab in the bottom panel of the Horizon Desktop Editor.

The debugger helps you test your NPC’s behavior and speech and its reaction to players in real-time. It can help you understand how Dynamic Context and Event Perceptions are influencing your NPC’s responses. If the NPC character isn’t responding as expected, you can use the debugger to figure out what’s been sent into the LLM’s prompt resulting in the AI speech NPC’s output.

This process allows you to quickly iterate on your NPC’s behavior and speech without having to recreate the NPC while also allowing you to strengthen your prompt to get the desired output.

The NPC Debugger displays a history of inputs and responses for the selected NPC. Selecting an NPC response will display additional details and information about the selected response. The message details will show the Dynamic Context and Event Perceptions that influenced that particular response.

## Event Perceptions

Event Perceptions inform the AI NPC about events in the world that are happening right now (or that just happened) that impact the current conversational turn. Some examples of Event Perceptions for AI NPCs could be:

* A cannon ball just flew overhead
* Your distraction for the dinosaur works and now the entrance to the cave is unguarded
* A strong gust of wind blew open the door to the abandoned mansion
* A group of bandits entered the tavern looking for trouble
* The fire you started to signal for help is now spreading rapidly and getting out of conversational

```
npc.conversation.addEventPerception(“A group of bandits just entered the tavern, looking for trouble”);
...
// Player speaks: “Anyway, I was thinking that we could talk to everyone here and see what we can find out about the stone of destiny”
// NPC responds: “Hark, good fellow, a sudden shift in our design doth necessitate a swift egress through yonder rear door. Lest those ruffians lay eyes on me within this hallowed hall, we shall invite a tempest of woe upon ourselves.”
```

## Dynamic Context

Like Event Perceptions, Dynamic Context is information about what’s happening in the game that affects what your AI speech NPC says. However unlike Event Perceptions, Dynamic Context is not immediate - these are conditions that remain consistent until changed. Some examples of Dynamic Context for AI NPCs include:

* The sky is blue, the birds are singing and there isn’t a cloud in the sky
* There is a war raging across the continent, and only the Chosen One can stop it
* This is your 100th day undercover in enemy territory
* This is the night of the annual Harvest Festival, and the town is filled with revelers
* You have a limited amount of time to complete your mission before the timer runs out

```
npc.conversation.setDynamicContext(“duration_in_enemy_territory”, “This is your 100th day undercover in enemy territory”);
...
// Player speaks: “Are you sure that’s a good idea? What if somebody discovers us?”
// NPC responds: “Listen kid, this isn’t my first rodeo. Just keep your head down and follow my lead.”
```

## Elicitations

Elicitations are highly influential direct cues and information about the NPC’s “state of mind” and what they want to accomplish. They are added right before an AI NPCs response, and then removed as soon as the response has been generated. Some examples of Elicit Responses for AI NPCs could be:

* What just happened made you very upset. Make sure you cry in your next response.
* The arrow pierced your armor, and you’re in pain. Show your distress in your next response.
* The player has been flirting with you, and you’re starting to feel uncomfortable. Show your unease in your next response.

```
npc.conversation.elicitResponse(“The laser blast pierced your armor, and you're in terrible pain.”);
...
// NPC responds: “Aghh. I’m hurt badly. I’ll stay here and hold them off. Go!!!”
```

## Static Responses

NPCs have the ability to vocalize static responses. Generally, these will happen much faster than an LLM based response and are great for things like quick actions. They’re also optimal if you have a set dialog for your NPC since the responses can generally be longer.

Here is an example of triggering an NPC to speak a specified sentence:

```
npc.conversation.speak("Hi, I'm Bob the NPC. Welcome to my world")
```

## Combining NPC Contexts

These types of character context can each be used independently, or in concert. The following is an example of all 3 used together and how it might impact an AI NPC’s output:

```
npc.conversation.addEventPerception(“A group of guards just stormed into the room, looking for you”);
setDynamicContext(“identity”, “You are currently undercover as a noble in the kingdom, and your true identity must remain hidden”);
elicitResponse(“Comment on the guards and tell the player what to do next”);
...
// NPC responds: “I'm sure it's just a routine inspection. Yes, that's it. Routine. I'm sure we have nothing to worry about…just in case though, let’s hide behind this curtain.”
```