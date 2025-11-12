Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_animationonendbehavior

API reference

# AnimationOnEndBehavior Enum

What animations do once they finish playing their full duration.

## Signature

```
export declare enum AnimationOnEndBehavior
```

## Enumeration Members

| Member | Value | Description |
| --- | --- | --- |
| Finish | `0` | Finish the animation and return to playing the current non-scripted animation. |
| Loop | `1` | Animation will restart and loop until stopped or interrupted. |
| Pause | `2` | Animation will pause on the final frame until stopped or interrupted. |