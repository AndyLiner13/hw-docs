# NpcConversation Class

Manages the ability of conversation output of an AI-powered NPC, such as an [Npc](https://developers.meta.com/horizon-worlds/reference/2.0.0/npc_npc) entity.

## Signature

```typescript
export declare class NpcConversation
```

## Remarks

With this class, you can design NPCs that use an LLM to provide context-aware interactions with players based on parameters such as storylines, and the state of the world instance.

## Constructors

| Constructor | Description |
| --- | --- |
| (constructor)(entity) | Constructs a new instance of the NpcConversation class <br/> **Signature:** `constructor(entity: Npc);` <br/> **Parameters:** `entity: Npc` |

## Properties

| Property | Description |
| --- | --- |
| audioSettings | The audio settings for speech capabilities of NPC. This setting will take effect on every player in the world. It can be overridden by setAudioSettingsForPlayer below. <br/> **Signature:** `audioSettings: HorizonProperty<NpcAudioSettings>;` |
| entity [readonly] | **Signature:** `protected readonly entity: Npc;` |

## Methods

| Method | Description |
| --- | --- |
| addEventPerception(eventDescription) | Inform the model of events that happened around it. The event itself should be a fact that can't be undone. The NPC won't keep track of the time sequence of what happened here. There's no removeEventPerception because once the event being added, it's persisted in NPC memory and it's not possible to remove one particular event. can be used to clear all the previous memory of the NPC. <br/> **Signature:** `addEventPerception(eventDescription: string): Promise<void>;` <br/> **Parameters:** `eventDescription: string` - The detailed description of what happened. Good example, "The vase is broken.", "A plane has landed in the airport", or "an earthquake just happened". A BAD example of the usage of this event would be some transient events. You should use setDynamicContext to track the state of a certain player, like "Player A has entered the shop with a ball in his hand". <br/> **Returns:** `Promise<void>` |
| clearDynamicContext() | Remove all existing dynamic context being added in setDynamicContext. <br/> **Signature:** `clearDynamicContext(): Promise<void>;` <br/> **Returns:** `Promise<void>` |
| elicitResponse(instruction) | Specifies instructions triggering an audio response from the NPC. NPC will speak using the instruction provided together with the existing event and dynamic context. <br/> **Signature:** `elicitResponse(instruction?: string): Promise<void>;` <br/> **Parameters:** `instruction: string` (Optional) The instruction for the model to follow. If the instruction is missing, there will be response generated with previous context. <br/> **Returns:** `Promise<void>` |
| removeDynamicContext(key) | Remove an existing dynamic context of a given key. <br/> **Signature:** `removeDynamicContext(key: string): Promise<void>;` <br/> **Parameters:** `key: string` - The key to the entry. <br/> **Returns:** `Promise<void>` |
| resetMemory() | Resets all current session memory of NPC without long term memory. Calling this method will result in NPC forgetting all previous interactions within the current world instance. If this method is called while Long Term Memory is enabled within the NPC's configuration, it will override the previous long term memory id until the end of the session. Note: resetMemory also prevents the AI model response from degrading over time so please use this to reset in the logic to have a good response quality. <br/> **Signature:** `resetMemory(): Promise<void>;` <br/> **Returns:** `Promise<void>` |
| setAudioSettingsForPlayer(audioSettings, player) | Overrides audio settings for a specific player. Setting the global audio settings will clear all previous per player settings. <br/> **Signature:** `setAudioSettingsForPlayer(audioSettings: NpcAudioSettings, player: Player): Promise<void>;` <br/> **Parameters:** `audioSettings: NpcAudioSettings`, `player: Player` - The player the setting will take effect on. <br/> **Returns:** `Promise<void>` |
| setDynamicContext(key, value) | Updates the model with dynamically changing states, such as environmental conditions or state changing events. This method will be used to track the status of the things around the NPC. NOTE: These should be human readable and descriptive. They help the NPC understand what is going on. A single word descriptor like "winter" or "summer" is not enough. The NPC will have no context about the purpose of the word and it will likely be ignored entirely. A better descriptor for a season might be "The season is currently winter". <br/> **Signature:** `setDynamicContext(key: string, value: string): Promise<void>;` <br/> **Parameters:** `key: string` - The key to the entry on the client-side. `value: string` - The value to set for the key. For example, use setDynamicContext(key="playerX_relation", value="You are angry at player X because he interrupts other players") to keep track of NPC's relationship with a certain player. Or Use setDynamicContext(key="soda_status", value="The soda in the store is sold out") <br/> **Returns:** `Promise<void>` |
| speak(script) | Makes the NPC generate audio output that follows a script. <br/> **Signature:** `speak(script: string): Promise<void>;` <br/> **Parameters:** `script: string` - The script used to generate the audio output. <br/> **Returns:** `Promise<void>` |
| stop() | Forces the NPC to immediately stop listening, speaking and performing any additional requests <br/> **Signature:** `stop(): Promise<void>;` <br/> **Returns:** `Promise<void>` |
| stopSpeaking() | Forces the NPC to immediately stop speaking. <br/> **Signature:** `stopSpeaking(): Promise<void>;` <br/> **Returns:** `Promise<void>` |