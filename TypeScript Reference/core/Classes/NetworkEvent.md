# NetworkEvent Class

Represents an event sent over a network. These events support any type of data that can be serialized through JSON.stringify().

## Signature

```typescript
export declare class NetworkEvent<TPayload extends NetworkEventData = Record<string, never>>
```

## Remarks

When sent over the network, NetworkEvent outperforms [CodeBlockEvent](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_codeblockevent) because it doesn't use the legacy messaging system used by Code Block scripting.

For events sent between event listeners on the same client (locally), you can use [LocalEvent](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_localevent).

## Constructors

| Constructor | Description |
| --- | --- |
| (constructor)(name) | Creates a NetworkEvent with the specified name. Signature constructor(name: string); Parameters name: stringThe name of the event. |

## Properties

| Property | Description |
| --- | --- |
| name | The name of the event. Signature name: string; |

## Additional Links
- [Meta home](https://developers.meta.com/horizon-worlds/)
- [Login](https://developers.meta.com/login/?redirect_uri=https%3A%2F%2Fdevelopers.meta.com%2Fhorizon-worlds%2Freference%2F2.0.0%2Fcore_networkevent%2F)