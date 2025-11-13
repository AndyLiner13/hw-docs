Source: https://developers.meta.com/horizon-worlds/learn/documentation/create-for-web-and-mobile/typescript-apis-for-mobile/focused-interaction

# Focused Interaction

**Note**: This feature requires [local scripting](/hw-docs/Scripting/Local%20scripting/Getting%20Started%20with%20Local%20Scripting.md).

Focused Interaction is an interaction mode for users of the web and mobile version of Meta Horizon Worlds. This mode replaces the default input, such as the on-screen joysticks and buttons, with touch and click events on the screen. You use Focused Interaction to provide user interactions that feel more intuitive to desktop and mobile users. It gives them the ability to interact directly with objects within the world by clicking, tapping, swiping or dragging.

When in this Focused Interaction mode, the following functionality is disabled and enabled:

**Disabled**

* Avatar motion controls (left joystick on mobile, and WASD keys on desktop).
* Controls for held items.
* On-screen action buttons like jump (mobile), and keyboard inputs (desktop).
* The default camera, and the ability to look around (right joystick on mobile, mouse movement on desktop).

**Enabled**

* Direct touch on the mobile device screen.
* Mouse input on the desktop computer screen.
* Can use a fixed camera. For more information, see the [camera API documentation](/hw-docs/Reference/camera/Classes/Camera.md).

In Focused Interaction mode, you can listen for the following events to get user input data:

* [PlayerControls.onFocusedInteractionInputStarted](/hw-docs/Reference/core/Classes/PlayerControls.md)
* [PlayerControls.onFocusedInteractionInputMoved](/hw-docs/Reference/core/Classes/PlayerControls.md)
* [PlayerControls.onFocusedInteractionInputEnded](/hw-docs/Reference/core/Classes/PlayerControls.md)

> **Note** : These events are triggered within a local script, on an object owned by the player, when the player touches the screen on a mobile device, or when they click on the screen on the desktop.

## Enter Focused Interaction mode

To enter Focused Interaction mode, call `player.enterFocusedInteractionMode()` from a script in default execution mode, passing a reference to the player. You might want to do this in response to a player input, or an interaction with a button, or when the player enters a trigger zone.

> **Note** : Only custom input controls displayed via the `PlayerControls.connectLocalInput` API remain visible.

Here’s an example that demonstrates how to connect a custom input handler that enters Focused Interaction mode when pressed:

```
// Register the "E" button as a custom input.
this.enterFocusInput = hz.PlayerControls.connectLocalInput(
  hz.PlayerInputAction.RightGrip,
  hz.ButtonIcon.Interact,
  this,
);

// Add a callback handler that enters Focused Interaction mode
// when the button is pressed.

this.enterFocusInput.registerCallback(
  (action: hz.PlayerInputAction, pressed: boolean) => {
    if (pressed) {
      this.entity.owner.get().enterFocusedInteractionMode();
    }
  },
);
```

When a player enters Focused Interaction mode, an `OnPlayerEnteredFocusedInteraction` Codeblock event is broadcast on the server. You can handle this event with a script that runs in default execution mode, The event passes a parameter that contains details about which player entered Focused Interaction mode.

```
this.connectCodeBlockEvent(
  this.entity,
  CodeBlockEvents.OnPlayerEnteredFocusedInteraction,
  (player: hz.Player) => {
    // Logic to handle a player entering Focused Interaction mode.
    // You can activate an entity in the world, or you can change
    // the player's camera position.
  },
);
```

## Handle touch and click input

Input events are dispatched every frame while the player touches the screen. The touch is broken into three events that represent the three stages of a touch input.

| **Event** | **Description** |
| --- | --- |
| `PlayerControls.onFocusedInteractionInputStarted` | Fires on the first frame of a touch. This is the frame in which the player starts to touch the screen. |
| `PlayerControls.onFocusedInteractionInputEnded` | Fires on the frame when a touch ends. This is the frame in which the player stops touching the screen. |
| `PlayerControls.onFocusedInteractionInputMoved` | Fires on every frame between the started and ended events. This event doesn’t fire on the first or final frame of the touch. |

These events provide an array of the type `InteractionInfo`, which is defined as follows:

```
InteractionInfo = {
  // An index for differentiating between simultaneous inputs.
  // The first input is 0.
  interactionIndex: number;

  // The screen position of the input normalized to the range
  // (0,0) to (1,1).
  screenPosition: Vec3;

  // The origin point of a ray into the world generated from
  // the touch.
  worldRayOrigin: Vec3;

  // The direction vector of a ray into the world generated from
  // the touch.
  worldRayDirection: Vec3;
};
```

The `interactionInfo` parameter is an array of interactions. This contains **upto 5 unique touches** (Id 0-4).

> **Note** : please check the `interactionIndex` to ensure that you handle the touches that you intend.

You can connect listeners to the events, and handle the interactions using the following code:

```
this.connectLocalBroadcastEvent(hz.PlayerControls.onFocusedInteractionInputStarted, (data: {interactionInfo: hz.InteractionInfo[]}) => {
  // Select the first item in the array, and check to ensure
  // that it's the first touch.
  var firstInteraction = data.interactionInfo[0
  if (firstInteraction.interactionIndex != 0) {
    return;

  // Use the data in firstInteraction to execute gameplay logic.
  // You could raycast into the world, or use screenPosition to
  // calculate a per frame delta, and track swipe gestures.
});

this.connectLocalBroadcastEvent(hz.PlayerControls.onFocusedInteractionInputMoved, (data: {interactionInfo: hz.InteractionInfo[]}) => {
  // Select the first item in the array, and check to ensure that
  // it's the first touch.
  var firstInteraction = data.interactionInfo[0];

  if (firstInteraction.interactionIndex != 0) {
    return;
  }
  // Use the data in firstInteraction to execute gameplay logic.
  // You could raycast into the world, or use screenPosition to
  // calculate a per frame delta and track swipe gestures.
});

this.connectLocalBroadcastEvent(hz.PlayerControls.onFocusedInteractionInputEnded, (data: {interactionInfo: hz.InteractionInfo[]}) => {
  // Select the first item in the array, and check to
  // ensure that it's the first touch.
  var firstInteraction = data.interactionInfo[0];

  if (firstInteraction.interactionIndex != 0) {
    return;
  }

  // Use the data in firstInteraction to execute gameplay logic.
  // You could raycast into the world, or use screenPosition to
  // calculate a per frame delta and track swipe gestures.
});
```

## Exit Focused Interaction mode

When Focused Interaction mode is active for a player, they may have an on-screen control for exiting Focused Interaction mode.

To exit the Focused Interaction mode programmatically, call `player.exitFocusedInteractionMode()`, passing a reference to the local player.

```
this.connectCodeBlockEvent(
  this.entity,
  CodeBlockEvents.OnPlayerExitedFocusedInteraction,
  (player: hz.Player) => {
    // Handle the player exiting Focused Interaction mode.
    // You can reset their camera, or change world state.
  },
);

// Register the "F" button as a custom input.
this.exitFocusInput = hz.PlayerControls.connectLocalInput(
  hz.PlayerInputAction.RightSecondary,
  hz.ButtonIcon.Drop,
  this,
);

// Add a callback handler that exits Focused Interaction mode when
// the player presses the Exit button. Perform your cleanup when
// you receive the Exit event.
this.exitFocusInput.registerCallback(
  (action: hz.PlayerInputAction, pressed: boolean) => {
    if (this.isInFIMode) {
      this.entity.owner.get().exitFocusedInteractionMode();
      this.isInFIMode = false;
    }
  },
);
```

The `OnPlayerExitedFocusedInteraction` CodeBlock event fires either when you directly call the exit method, or when the player presses the dedicated exit button. You can handle this event to call any cleanup code (like resetting the player’s camera).

## Disable the exit button in Focused Interaction mode

For worlds or small instances where you would want to keep the player in Focused Interaction, you can now disable the system bar exit button.

To do this you can trigger the `player.enterFocusedInteractionMode()` with the new [FocusedInteractionOptions](/hw-docs/Reference/core/Type%20Aliases/FocusedInteractionOptions.md). These options enable you to disable the exit button for that Focused Interaction instance.

```
player.enterFocusedInteractionMode({disableFocusExitButton: true});
```

This is an optional parameter and will be `false` by default, causing the back button to be typically present.

You can still cause players to exit the Focused Interaction mode programmatically, by calling `player.exitFocusedInteractionMode()`.

## Customize visual feedback

When a player interacts with the wold in Focused Interaction mode, they see visual feedback about where they’ve tapped and dragged on the screen.

To customize the visual feedback on tap, use the [FocusedInteraction.setTapOptions()](/hw-docs/Reference/core/Classes/FocusedInteraction.md) method. You can change the tap duration, color, scale, opacity, and rotation as well as enabling/disabling trail feedack overall:

```
let newTapOptions = {
  ...hz.DefaultFocusedInteractionTapOptions,
  duration: 0.25,
  startColor: hz.Color.blue,
  endColor: hz.Color.white,
  startScale: 0.5,
  endScale: 1.2,
  startOpacity: 0.8,
  endOpacity: 0,
  startRotation: 180,
  endRotation: 0,
};

player.focusedInteraction.setTapOptions(true /*isEnabled*/, newTapOptions);
```

To customize the visual feedback on drag, use the [FocusedInteraction.setTrailOptions()](/hw-docs/Reference/core/Classes/FocusedInteraction.md) method. You can change the trail length, color, width and opacity as well as enabling/disabling trail feedack overall:

```
let newTrailOptions = {
  ...hz.DefaultFocusedInteractionTrailOptions,
  length: 0.5,
  startColor: hz.Color.blue,
  endColor: hz.Color.white,
  startWidth: 0.8,
  endWidth: 0.1,
  startOpacity: 0.8,
  endOpacity: 0,
};

player.focusedInteraction.setTrailOptions(true  /*isEnabled*/, newTrailOptions);
```

## Focus the camera on a custom UI

You can use [player.focusUI()](/hw-docs/Reference/core/Classes/Player.md#focusui) to focus the player’s camera on a selectable entity in the world, such as a custom UI:

```
 player.focusUI(selectableEntity, {
        duration: 0.75,            // Duration of the camera transition in seconds
        horizontalOffset: 0,       // Horizontal offset of the camera relative to the entity
        verticalOffset: 0.5,       // Vertical offset of the camera relative to the entity
      });
```

To remove focus from any in-world UI the player’s camera is currently focused on, you use [player.unfocusUI()](/hw-docs/Reference/core/Classes/Player.md#unfocusui):

```
player.unfocusUI();
```