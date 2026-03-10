---
source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_animationonendbehavior
---

# [AnimationOnEndBehavior Enum](#animationonendbehavior-enum)

What animations do once they finish playing their full duration.

## [Signature](#signature)

```
export
 declare 
enum
 
AnimationOnEndBehavior
 
```

## [Enumeration Members](#enumeration-members)

| Member | Value | Description                                                                    |
| ------ | ----- | ------------------------------------------------------------------------------ |
| Finish | `0`   | Finish the animation and return to playing the current non-scripted animation. |
| Loop   | `1`   | Animation will restart and loop until stopped or interrupted.                  |
| Pause  | `2`   | Animation will pause on the final frame until stopped or interrupted.          |

