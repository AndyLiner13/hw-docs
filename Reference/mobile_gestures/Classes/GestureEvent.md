---
source: https://developers.meta.com/horizon-worlds/reference/2.0.0/mobile_gestures_gestureevent
---

# [GestureEvent Class](#gestureevent-class)

Extends *LocalEvent\<T>*

Generic gesture event

## [Signature](#signature)

```
export
 declare 
class
 
GestureEvent
<
T 
extends
 
TouchEventData
>
 
extends
 
LocalEvent
<
T
>
 
```

## [Methods](#methods)

|                                 |                 |
| ------------------------------- | --------------- |
| **connectLocalEvent(callback)** | Signature\`\`\` |
| connectLocalEvent               |                 |
| (                               |                 |
| callback                        |                 |
| :                               |                 |

(
payload
:
T
)

\=>

void
):

EventSubscription
;

```Parameterscallback: (payload: T) => voidReturnsEventSubscription |
```

