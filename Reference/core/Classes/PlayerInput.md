---
source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_playerinput
---

# [PlayerInput Class](#playerinput-class)

A customizable player input that is bound to an [input action](../Enumerations/PlayerInputAction.md) on a player's input device, such as a VR controller, gamepad, or on-screen button.

## [Signature](#signature)

```ts
export declare class PlayerInput 
```

## [Remarks](#remarks)

You can create a `PlayerInput` instance by calling the [PlayerControls.connectLocalInput()](PlayerControls.md#connectlocalinput) method.\
For more information about binding player input, see the [Custom Input API](../../../Mobile%20and%20web/TypeScript%20APIs%20for%20mobile/Custom%20Input%20API.md) guide.

## [Properties](#properties)

### [action](#action)

The action this input is bound to. For analog inputs, a pressed state corresponds to an axis value greater than 0.5 or lesser than -0.5.

**Signature**

```ts
action: ReadableHorizonProperty<PlayerInputAction>;
```

### [axisValue](#axisvalue)

Gets the axis value, between -1 and 1. If the input is digital, 0 or 1 is returned.

**Signature**

```ts
axisValue: ReadableHorizonProperty<number>;
```

### [connected](#connected)

Indicates whether the input is currently connected and active.

**Signature**

```ts
connected: ReadableHorizonProperty<boolean>;
```

### [held](#held)

Indicates whether the input is being held active. For analog inputs, a pressed state corresponds to an axis value greater than 0.5 or lesser than -0.5.

**Signature**

```ts
held: ReadableHorizonProperty<boolean>;
```

### [pressed](#pressed)

Indicates whether the input was pressed this frame.

**Signature**

```ts
pressed: ReadableHorizonProperty<boolean>;
```

### [released](#released)

Indicates whether the input was released this frame.

**Signature**

```ts
released: ReadableHorizonProperty<boolean>;
```

## [Methods](#methods)

### [disconnect()](#disconnect)

Disconnects the input. On platforms that display on-screen buttons for actions, the button will be removed. Any callbacks registered to this instance will stop being called.

**Signature**

```ts
disconnect(): void;
```

**Returns**

void

### [registerCallback(callback)](#registercallbackcallback)

Registers a callback that is called when the input is pressed or released. For analog inputs, a pressed state corresponds to an axis value greater than 0.5 or lesser than -0.5.

**Signature**

```ts
registerCallback(callback: PlayerInputStateChangeCallback): void;
```

**Parameters**

callback: [PlayerInputStateChangeCallback](../Type%20Aliases/PlayerInputStateChangeCallback.md)

The callback that is called when the pressed state changes.

**Returns**

void

### [unregisterCallback()](#unregistercallback)

Unregisters the currently registered callback, if any.

**Signature**

```ts
unregisterCallback(): void;
```

**Returns**

void

