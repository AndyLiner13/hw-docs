---
source: https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_turbodebug
---

# [TurboDebug Class](#turbodebug-class)

A set of tools for debugging and testing Turbo implementations.

## [Signature](#signature)

```
export
 declare 
class
 
TurboDebug
 
```

## [Remarks](#remarks)

To use Turbo debugging, you must enable it by setting the [ITurboSettings.debug](../Interfaces/ITurboSettings.md#debug) property to `true`.

## [Properties](#properties)

|                  |                                                                                                    |
| ---------------- | -------------------------------------------------------------------------------------------------- |
| **events**static | An event subscription that delivers enriched analytics payloads to event listeners.Signature\`\`\` |
| static           |                                                                                                    |
| events           |                                                                                                    |
| :                |                                                                                                    |

{

```
    onDebugTurboPlayerEvent
```

:
hz
.
LocalEvent
<{

```
        player
```

:
hz
.
Player
;

```
        eventData
```

:

EventData
;

```
        action
```

:

Action
;

}>;

};

```|
```

