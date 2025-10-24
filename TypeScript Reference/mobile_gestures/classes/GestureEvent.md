# GestureEvent Class

Generic gesture event that extends LocalEvent<T>

## Signature

```typescript
export declare class GestureEvent<T extends TouchEventData> extends LocalEvent<T>
```

## Methods

| Method | Description |
| --- | --- |
| `connectLocalEvent(callback)` | Connects a callback function to handle the gesture event<br/>**Signature:** `connectLocalEvent(callback: (payload: T) => void): EventSubscription;`<br/><br/>**Parameters:**<br/>- `callback: (payload: T) => void` - The callback function to handle the event<br/><br/>**Returns:** `EventSubscription` |