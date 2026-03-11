---
source: https://developers.meta.com/horizon-worlds/reference/2.0.0/mobile_gestures_gestures
---

# [Gestures Class](#gestures-class)

Detects gestures

## [Signature](#signature)

```ts
export declare class Gestures 
```

## [Examples](#examples)

```ts
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

## [Constructors](#constructors)

### [(constructor)(component, options)](#constructorcomponent-options)

Creates a Gestures helper

**Signature**

```ts
constructor(component: Component, options?: Partial<GesturesOptions>);
```

**Parameters**

component: Component

the component to attach to, must be owned by the local player

options: Partial<[GesturesOptions](GesturesOptions.md)>

*(Optional)*

**Remarks**

Requires to start processing events.

## [Properties](#properties)

### [onLongTap](#onlongtap)

Connect to this event for long tap gestures. See [Gestures](Gestures.md) for example usage.

**Signature**

```ts
onLongTap: GestureEvent<LongTapEventData>;
```

### [onPan](#onpan)

Connect to this event for pan gestures. See [Gestures](Gestures.md) for example usage.

**Signature**

```ts
onPan: GestureEvent<PanEventData>;
```

### [onPinch](#onpinch)

Connect to this event for pinch gestures. See [Gestures](Gestures.md) for example usage.

**Signature**

```ts
onPinch: GestureEvent<PinchEventData>;
```

### [onSwipe](#onswipe)

Connect to this event for swipe gestures. See [Gestures](Gestures.md) for example usage.

**Signature**

```ts
onSwipe: GestureEvent<SwipeEventData>;
```

### [onTap](#ontap)

Connect to this event for tap gestures. See [Gestures](Gestures.md) for example usage.

**Signature**

```ts
onTap: GestureEvent<TapEventData>;
```

## [Methods](#methods)

### [dispose()](#dispose)

Call this to stop processing events, optional.

**Signature**

```ts
dispose(): void;
```

**Returns**

void

