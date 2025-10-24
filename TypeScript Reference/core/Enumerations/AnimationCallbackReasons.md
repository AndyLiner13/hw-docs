# AnimationCallbackReasons Enum

The possible reasons for the [AnimationCallbackReason](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_animationcallbackreason) type that is provided when an [animation callback](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_animationcallbackreason) triggers.

## Signature

```typescript
export declare enum AnimationCallbackReasons
```

## Enumeration Members

| Member | Value | Description |
|---------|--------|-------------|
| Starting | 0 | The animation is starting to play. |
| Stopping | 1 | The animation is stopping. |

## References

- [AnimationCallbackReason](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_animationcallbackreason) - The type that uses this enumeration for callback reasons

## Examples

### Handling Animation Callbacks

```typescript
// Example usage with animation callbacks
someAnimationGizmo.onAnimationChanged.add((reason: AnimationCallbackReasons) => {
    if (reason === AnimationCallbackReasons.Starting) {
        console.log("Animation is starting");
    } else if (reason === AnimationCallbackReasons.Stopping) {
        console.log("Animation is stopping");
    }
});
```