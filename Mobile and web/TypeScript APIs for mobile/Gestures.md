Source: https://developers.meta.com/horizon-worlds/learn/documentation/create-for-web-and-mobile/typescript-apis-for-mobile/gestures

# Gestures

The `mobile_gestures` API allows you to detect and respond to common touch gestures on mobile devices within Horizon Worlds. This tutorial covers how to set up gesture detection, listen for gesture events, and customize gesture behavior.

The API provides detection for the following gestures:

* Tap
* Long Tap
* Swipe (with direction)
* Pan (drag)
* Pinch (scale and rotate)

You use the [Gestures](https://developers.meta.com/horizon-worlds/reference/2.0.0/mobile_gestures_gestures) class to listen for these gesture events on a component owned by the local player.

## Step 1: Setup and initialization

To use the gestures API, you need to:

* Import the [Gestures](https://developers.meta.com/horizon-worlds/reference/2.0.0/mobile_gestures_gestures) class from `horizon/mobile_gestures`.
* Create an instance of `Gestures` attached to your component.
* Call `enterFocusedInteractionMode()` on the player to start processing gesture events.

### Example: Initialization

```
import { Component } from 'horizon/core';
import { Gestures } from 'horizon/mobile_gestures';
class MyComponent extends Component {
  // Create a Gestures instance attached to this component
  gestures = new Gestures(this);
  start() {
    // Get the player who owns this entity
    const player = this.entity.owner.get();
    // Enter focused interaction mode to enable gesture event processing
    player.enterFocusedInteractionMode();
    // Now you can connect to gesture events (see next section)
  }
}
```

## Step 2: Listening for gesture events

The `Gestures` instance exposes the following events you can subscribe to:

* `onTap`
* `onLongTap`
* `onSwipe`
* `onPan`
* `onPinch`

Each event is a [GestureEvent](https://developers.meta.com/horizon-worlds/reference/2.0.0/mobile_gestures_gestureevent) that you connect to with a callback function receiving gesture data.

### Example: Connecting to gesture events

This example detects various types of gestures performed on the component and logs the gesture data to the console:

```
// Connect to tap gesture event
this.gestures.onTap.connectLocalEvent(({ touches }) => {
  // Log the screen position of the first touch in the tap gesture
  console.log('Tap detected at:', touches[0].current.screenPosition);
});
// Connect to long tap gesture event
this.gestures.onLongTap.connectLocalEvent(({ touches }) => {
  // Log the screen position of the first touch in the long tap gesture
  console.log('Long tap detected at:', touches[0].current.screenPosition);
});
// Connect to swipe gesture event
this.gestures.onSwipe.connectLocalEvent(({ swipeDirection }) => {
  // Log the direction of the swipe gesture
  console.log('Swipe detected in direction:', swipeDirection);
});
// Connect to pan gesture event
this.gestures.onPan.connectLocalEvent(({ pan }) => {
  // Log the pan delta vector representing movement in screen space
  console.log('Pan detected with delta:', pan);
});
// Connect to pinch gesture event
this.gestures.onPinch.connectLocalEvent(({ scale, rotate }) => {
  // Log the scale factor and rotation (in radians) of the pinch gesture
  console.log('Pinch detected with scale:', scale, 'and rotation:', rotate);
});
```

### Gesture event payloads

Each gesture event provides specific data:

| Gesture | Payload Type | Key Data |
| --- | --- | --- |
| Tap | [TapEventData](https://developers.meta.com/horizon-worlds/reference/2.0.0/mobile_gestures_tapeventdata) | `touches` array containing [TouchState](https://developers.meta.com/horizon-worlds/reference/2.0.0/mobile_gestures_touchstate) objects |
| Long Tap | [LongTapEventData](https://developers.meta.com/horizon-worlds/reference/2.0.0/mobile_gestures_longtapeventdata) | `touches` array containing [TouchState](https://developers.meta.com/horizon-worlds/reference/2.0.0/mobile_gestures_touchstate) objects |
| Swipe | [SwipeEventData](https://developers.meta.com/horizon-worlds/reference/2.0.0/mobile_gestures_swipeeventdata) | `touches` array, `swipeDirection` enum indicating direction of the swipe (`up`, `down`, `left`, `right`, or `none`) |
| Pan | [PanEventData](https://developers.meta.com/horizon-worlds/reference/2.0.0/mobile_gestures_paneventdata) | `touches` array, `pan` vector (`Vec3`) reperesenting the movement delta in screen space |
| Pinch | [PinchEventData](https://developers.meta.com/horizon-worlds/reference/2.0.0/mobile_gestures_pincheventdata) | `touches` array, `scale` (number), `rotate` (radians) |

#### Touch state details

Each touch in a `touches` array has the following [state information](https://developers.meta.com/horizon-worlds/reference/2.0.0/mobile_gestures_touchstate):

| Propert Name | Data Type | Description |
| --- | --- | --- |
| `phase` | [TouchPhase](https://developers.meta.com/horizon-worlds/reference/2.0.0/mobile_gestures_touchphase) | The current phase of the touch: `'start'`, `'move'`, or `'end'`. Indicates if the touch just began, is moving, or ended. |
| `start` | [TouchInfo](https://developers.meta.com/horizon-worlds/reference/2.0.0/mobile_gestures_touchinfo) | The state of the touch when it first started. Includes position and timestamp. |
| `previous` | [TouchInfo](https://developers.meta.com/horizon-worlds/reference/2.0.0/mobile_gestures_touchinfo) | The state of the touch during the previous frame. Useful for calculating movement deltas. |
| `current` | [TouchInfo](https://developers.meta.com/horizon-worlds/reference/2.0.0/mobile_gestures_touchinfo) | The state of the touch during the current frame. Contains the latest position and timestamp. |
| `screenDelta` | [Vec3](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_vec3) | The vector representing how far the touch has moved since the previous frame, in screen space. |
| `screenTraveled` | `number` | The total distance the touch has moved since it started, accumulated over all frames. |

## Step 3 (Optional): Setting custom gesture detection thresholds

You can customize gesture detection thresholds by passing [options](https://developers.meta.com/horizon-worlds/reference/2.0.0/mobile_gestures_gesturesoptions) to the `Gestures` constructor:

| Option | Description | Default |
| --- | --- | --- |
| `tapScreenThreshold` | How far a tap must move before it is cancelled or becomes a swipe (screen space) | 0.05 |
| `tapTimeThresholdMs` | How long a tap must be held before it is cancelled (milliseconds) | 200 |
| `swipeTimeThresholdMs` | How long a swipe must be held before it is cancelled (milliseconds) | 600 |
| `longTapTimeThresholdMs` | How long a touch must be held to trigger a long tap (milliseconds) | 800 |

### Example: Customizing gesture options

```
// Define custom gesture detection options
const options = {
  // Maximum movement allowed for a tap gesture before it is cancelled or becomes a swipe
  tapScreenThreshold: 0.1,
  // Maximum duration (in milliseconds) for a tap gesture
  tapTimeThresholdMs: 300,
  // Minimum duration (in milliseconds) to trigger a long tap gesture
  longTapTimeThresholdMs: 1000,
};
// Create a Gestures instance with custom options
this.gestures = new Gestures(this, options);
```

## Step 4: Lifecycle and cleanup

If you want to stop processing gesture events, call the `dispose()` method on your `Gestures` instance to disconnect internal event listeners:

```
// Call dispose to stop processing gesture events and clean up listeners
this.gestures.dispose();
```

## Full example

Here is the full example code from this tutorial, incorporating all the concepts discussed:

```
import { Component } from 'horizon/core';
import { Gestures, SwipeDirection } from 'horizon/mobile_gestures';
class MyComponent extends Component {
  // Declare a Gestures instance variable
  gestures: Gestures;
  start() {
    // Get the player who owns this entity
    const player = this.entity.owner.get();
    // Enter focused interaction mode to enable gesture processing
    player.enterFocusedInteractionMode();
    // Create a new Gestures instance attached to this component
    this.gestures = new Gestures(this);
    // Listen for tap gestures
    this.gestures.onTap.connectLocalEvent(({ touches }) => {
      // Log the screen position of the first touch in the tap
      console.log('Tap at:', touches[0].current.screenPosition);
    });
    // Listen for long tap gestures
    this.gestures.onLongTap.connectLocalEvent(({ touches }) => {
      // Log the screen position of the first touch in the long tap
      console.log('Long tap at:', touches[0].current.screenPosition);
    });
    // Listen for swipe gestures
    this.gestures.onSwipe.connectLocalEvent(({ swipeDirection }) => {
      // Handle different swipe directions
      switch (swipeDirection) {
        case SwipeDirection.Up:
          console.log('Swipe up detected');
          break;
        case SwipeDirection.Down:
          console.log('Swipe down detected');
          break;
        case SwipeDirection.Left:
          console.log('Swipe left detected');
          break;
        case SwipeDirection.Right:
          console.log('Swipe right detected');
          break;
        default:
          console.log('No swipe direction detected');
      }
    });
    // Listen for pan (drag) gestures
    this.gestures.onPan.connectLocalEvent(({ pan }) => {
      // Log the pan delta vector representing movement in screen space
      console.log('Pan delta:', pan);
    });
    // Listen for pinch gestures (scale and rotate)
    this.gestures.onPinch.connectLocalEvent(({ scale, rotate }) => {
      // Log the scale factor and rotation in radians
      console.log('Pinch scale:', scale, 'rotation:', rotate);
    });
  }
  // Clean up gesture event listeners when the component is destroyed
  onDestroy() {
    this.gestures.dispose();
  }
}
```

## Example worlds

To see the Gestures API in action, checkout these example worlds:

* [Match3 Example](https://horizon.meta.com/world/10161854210994093/) - Demonstrates the use of tap, long tap, and swipe gestures.
* [Maps Example](https://horizon.meta.com/world/10161873353124093/) - Demonstrates the pan and pinch gestures.