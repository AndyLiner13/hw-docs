# Gestures Class

Detects gestures

## Signature

```typescript
export declare class Gestures
```

## Examples

```typescript
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

| Constructor | Description |
| --- | --- |
| `(constructor)(component, options)` | Creates a Gestures helper<br/><br/>**Signature:** `constructor(component: Component, options?: Partial<GesturesOptions>);`<br/><br/>**Parameters:**<br/>- `component: Component` - the component to attach to, must be owned by the local player<br/>- `options: Partial<GesturesOptions>` (Optional)<br/><br/>**Remarks:** Requires to start processing events. |

## Properties

| Property | Description |
| --- | --- |
| `onLongTap` | Connect to this event for long tap gestures. See Gestures for example usage.<br/>**Signature:** `onLongTap: GestureEvent<LongTapEventData>;` |
| `onPan` | Connect to this event for pan gestures. See Gestures for example usage.<br/>**Signature:** `onPan: GestureEvent<PanEventData>;` |
| `onPinch` | Connect to this event for pinch gestures. See Gestures for example usage.<br/>**Signature:** `onPinch: GestureEvent<PinchEventData>;` |
| `onSwipe` | Connect to this event for swipe gestures. See Gestures for example usage.<br/>**Signature:** `onSwipe: GestureEvent<SwipeEventData>;` |
| `onTap` | Connect to this event for tap gestures. See Gestures for example usage.<br/>**Signature:** `onTap: GestureEvent<TapEventData>;` |

## Methods

| Method | Description |
| --- | --- |
| `dispose()` | Call this to stop processing events, optional.<br/>**Signature:** `dispose(): void;`<br/>**Returns:** `void` |