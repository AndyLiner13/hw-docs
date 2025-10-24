# LocalEvent Class

Represents an event sent between TypeScript event listeners on the same client in Meta Horizon Worlds. These events support arbitrary data.

## Signature

```typescript
export declare class LocalEvent<TPayload extends LocalEventData = Record<string, never>>
```

## Remarks

When sent between event listeners on the same client (locally), LocalEvent outperforms [CodeBlockEvent](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_codeblockevent) because it doesn't use the legacy messaging system used by Code Block scripting.

For events sent over a network, you can use [NetworkEvent](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_networkevent).

## Constructors

### (constructor)(name)

Creates a local event with the specified name.

**Signature:**
```typescript
constructor(name?: string);
```

**Parameters:**
- `name: string` (Optional) - The name of the event.

**Remarks:**
If a name is not provided, the event becomes unique and must be referenced by its object instance. This is useful if your event is used in an asset to avoid collision in a world.

## Properties

### name

The name of the event. If a name is not provided, a randomly generated name is assigned.

**Signature:**
```typescript
name: string;
```