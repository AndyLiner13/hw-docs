# PlayerInput Class

A customizable player input that is bound to an [input action](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_playerinputaction) on a player's input device, such as a VR controller, gamepad, or on-screen button.

## Signature

```typescript
export declare class PlayerInput
```

## Remarks

You can create a `PlayerInput` instance by calling the [PlayerControls.connectLocalInput()](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_playercontrols#connectlocalinput) method.

For more information about binding player input, see the [Custom Input API](https://developers.meta.com/horizon-worlds/learn/documentation/create-for-web-and-mobile/typescript-apis-for-mobile/custom-input-api) guide.

## Properties

| Property | Description |
| --- | --- |
| action | The action this input is bound to. For analog inputs, a pressed state corresponds to an axis value greater than 0.5 or lesser than -0.5. Signature action: ReadableHorizonProperty<PlayerInputAction>; |
| axisValue | Gets the axis value, between -1 and 1. If the input is digital, 0 or 1 is returned. Signature axisValue: ReadableHorizonProperty<number>; |
| connected | Indicates whether the input is currently connected and active. Signature connected: ReadableHorizonProperty<boolean>; |
| held | Indicates whether the input is being held active. For analog inputs, a pressed state corresponds to an axis value greater than 0.5 or lesser than -0.5. Signature held: ReadableHorizonProperty<boolean>; |
| pressed | Indicates whether the input was pressed this frame. Signature pressed: ReadableHorizonProperty<boolean>; |
| released | Indicates whether the input was released this frame. Signature released: ReadableHorizonProperty<boolean>; |

## Methods

| Method | Description |
| --- | --- |
| disconnect() | Disconnects the input. On platforms that display on-screen buttons for actions, the button will be removed. Any callbacks registered to this instance will stop being called. Signature disconnect(): void; Returns void |
| registerCallback(callback) | Registers a callback that is called when the input is pressed or released. For analog inputs, a pressed state corresponds to an axis value greater than 0.5 or lesser than -0.5. Signature registerCallback(callback: PlayerInputStateChangeCallback): void; Parameters callback: PlayerInputStateChangeCallback The callback that is called when the pressed state changes. Returns void |
| unregisterCallback() | Unregisters the currently registered callback, if any. Signature unregisterCallback(): void; Returns void |

## Additional Links
- [Meta home](https://developers.meta.com/horizon-worlds/)
- [Login](https://developers.meta.com/login/?redirect_uri=https%3A%2F%2Fdevelopers.meta.com%2Fhorizon-worlds%2Freference%2F2.0.0%2Fcore_playerinput%2F)