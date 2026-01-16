Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/mobile_gestures_gestures

# Gestures Class

Detects gestures

## Signature

```
export declare class Gestures
```

## Examples

```
import { Gestures } from 'horizon/mobile_gestures';

class MyComponent extends Component {
  gestures = new Gestures(this);

  start() {
    const player = this.entity.owner.get();
    player.enterFocusedInteractionMode();

    this.gestures.onTap.connectLocalEvent(({ touches }) => {
      console.log('tap', touches[0].current.screenPosition);
    });
    this.gestures.onLongTap.connectLocalEvent(({ touches }) => {
      console.log('long tap', touches[0].current.screenPosition);
    });
    this.gestures.onSwipe.connectLocalEvent(({ swipeDirection }) => {
      console.log('swipe', swipeDirection);
    });
    this.gestures.onPinch.connectLocalEvent(({ scale, rotate }) => {
      console.log('pinch', scale, rotate);
    });
  }
}
```

## Constructors

|  |  |
| --- | --- |
| **(constructor)(component, options)** | Creates a Gestures helper  ---  Signature  ``` constructor(component: Component, options?: Partial<GesturesOptions>); ```  Parameters  component: Component  the component to attach to, must be owned by the local player  options: Partial<[GesturesOptions](GesturesOptions.md)>  *(Optional)*  Remarks  Requires to start processing events. |

## Properties

|  |  |
| --- | --- |
| **onLongTap** | Connect to this event for long tap gestures. See [Gestures](Gestures.md) for example usage.      Signature  ``` onLongTap: GestureEvent<LongTapEventData>; ``` |
| **onPan** | Connect to this event for pan gestures. See [Gestures](Gestures.md) for example usage.      Signature  ``` onPan: GestureEvent<PanEventData>; ``` |
| **onPinch** | Connect to this event for pinch gestures. See [Gestures](Gestures.md) for example usage.      Signature  ``` onPinch: GestureEvent<PinchEventData>; ``` |
| **onSwipe** | Connect to this event for swipe gestures. See [Gestures](Gestures.md) for example usage.      Signature  ``` onSwipe: GestureEvent<SwipeEventData>; ``` |
| **onTap** | Connect to this event for tap gestures. See [Gestures](Gestures.md) for example usage.      Signature  ``` onTap: GestureEvent<TapEventData>; ``` |

## Methods

|  |  |
| --- | --- |
| **dispose()** | Call this to stop processing events, optional.      Signature  ``` dispose(): void; ```  Returns  void |