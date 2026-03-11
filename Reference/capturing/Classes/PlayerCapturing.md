---
source: https://developers.meta.com/horizon-worlds/reference/2.0.0/capturing_playercapturing
---

# [PlayerCapturing Class](#playercapturing-class)

Extends *Player*

> [!Warning]
>
> This API is now obsolete.\
> This module is deprecated and will be removed in a future version.

The video recording capabilities from the players point of view.

## [Signature](#signature)

```ts
export declare class PlayerCapturing extends Player 
```

## [Remarks](#remarks)

This class contains methods for recording in-game footage from the players point of view at key moments during game play. For details, see the [Instant Replay](../../../Scripting/API%20references%20and%20examples/Instant%20Replay.md) guide.

## [Methods](#methods)

### [startVideoCapture(\_momentName, \_options)](#startvideocapture_momentname-_options)

Warning: This API is now obsolete.This module is deprecated and will be removed in a future version.Starts recording a video from the player's point of view.

**Signature**

```ts
startVideoCapture(_momentName: string, _options?: Partial<StartVideoCaptureOptions>): Promise<VideoCaptureResponseCode>;
```

**Parameters**

\_momentName: string

\_options: Partial<[StartVideoCaptureOptions](../Type%20Aliases/StartVideoCaptureOptions.md)>

*(Optional)*

**Returns**

Promise<[VideoCaptureResponseCode](../Enumerations/VideoCaptureResponseCode.md)>

**Remarks**

Call the method to end the recording.

### [stopVideoCapture(\_options)](#stopvideocapture_options)

Warning: This API is now obsolete.This module is deprecated and will be removed in a future version.Stops recording a video from the player's point of view.

**Signature**

```ts
stopVideoCapture(_options?: Partial<StopVideoCaptureOptions>): Promise<VideoCaptureResponseCode>;
```

**Parameters**

\_options: Partial<[StopVideoCaptureOptions](../Type%20Aliases/StopVideoCaptureOptions.md)>

*(Optional)*

**Returns**

Promise<[VideoCaptureResponseCode](../Enumerations/VideoCaptureResponseCode.md)>

**Remarks**

To start recording, call the method.

