# Npc Class

**Extends Entity**

Represents an NPC with LLM-powered conversation capabilities that support audio and transcription.

## Signature

```typescript
export declare class Npc extends Entity
```

## Remarks

Conversation functionality must be enabled before using conversation capabilities.

## Properties

| Property | Description |
| --- | --- |
| conversation [readonly] | The object that manages the conversation of the NPC. <br/> **Signature:** `readonly conversation: NpcConversation;` |

## Methods

| Method | Description |
| --- | --- |
| isConversationEnabled() | Indicates whether conversation capabilities are enabled for the Npc object. True if conversation is enabled; false otherwise. <br/> **Signature:** `isConversationEnabled(): boolean;` <br/> **Returns:** `boolean` |
| toString() | A string representation of the Npc object in the format [Npc] id where id is the identifier of the object. <br/> **Signature:** `toString(): string;` <br/> **Returns:** `string` |