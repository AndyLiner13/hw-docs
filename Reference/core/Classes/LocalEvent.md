Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_localevent

API reference

# LocalEvent Class

Represents an event sent between TypeScript event listeners on the same client in Meta Horizon Worlds. These events support arbitrary data.

## Signature

```
export declare class LocalEvent<TPayload extends LocalEventData = Record<string, never>>
```

## Remarks

When sent between event listeners on the same client (locally), LocalEvent outperforms [CodeBlockEvent](/hw-docs/Reference/core/Classes/CodeBlockEvent.md) because it doesn't use the legacy messaging system used by Code Block scripting.
For events sent over a network, you can use [NetworkEvent](/hw-docs/Reference/core/Classes/NetworkEvent.md).

## Constructors

|  |  |
| --- | --- |
| **(constructor)(name)** | Creates a local event with the specified name.  ---  Signature  ``` constructor(name?: string); ```  Parameters  name: string  *(Optional)* The name of the event.  Remarks  If a name is not provided, the event becomes unique and must be referenced by its object instance. This is useful if your event is used in an asset to avoid collision in a world. |

## Properties

|  |  |
| --- | --- |
| **name** | The name of the event. If a name is not provided, a randomly generated name is assigned.      Signature  ``` name: string; ``` |