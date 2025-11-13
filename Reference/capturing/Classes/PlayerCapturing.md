Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/capturing_playercapturing

# PlayerCapturing Class

Extends *Player*

The video recording capabilities from the players point of view.

## Signature

```
export declare class PlayerCapturing extends Player
```

## Remarks

This class contains methods for recording in-game footage from the players point of view at key moments during game play. For details, see the [Instant Replay](/hw-docs/Scripting/API%20references%20and%20examples/Instant%20Replay.md) guide.

## Methods

|  |  |
| --- | --- |
| **startVideoCapture(momentName, options)** | Starts recording a video from the player's point of view.      Signature  ``` startVideoCapture(momentName: string, options?: Partial<StartVideoCaptureOptions>): Promise<VideoCaptureResponseCode>; ```  Parameters  momentName: string  The name of the period of time when the recording takes place. Special characters are not allowed.  options: Partial<[StartVideoCaptureOptions](/hw-docs/Reference/capturing/Type%20Aliases/StartVideoCaptureOptions.md)>  *(Optional)* The options for how to record the video. [DefaultStartVideoCaptureOptions](/hw-docs/Reference/capturing/Variables/DefaultStartVideoCaptureOptions.md) specifies the default options.  Returns  Promise<[VideoCaptureResponseCode](/hw-docs/Reference/capturing/Enumerations/VideoCaptureResponseCode.md)>  Remarks  Call the method to end the recording. |
| **stopVideoCapture(options)** | Stops recording a video from the player's point of view.      Signature  ``` stopVideoCapture(options?: Partial<StopVideoCaptureOptions>): Promise<VideoCaptureResponseCode>; ```  Parameters  options: Partial<[StopVideoCaptureOptions](/hw-docs/Reference/capturing/Type%20Aliases/StopVideoCaptureOptions.md)>  *(Optional)* The options for how to record the video. [DefaultStopVideoCaptureOptions](/hw-docs/Reference/capturing/Variables/DefaultStopVideoCaptureOptions.md) specifies the default options.  Returns  Promise<[VideoCaptureResponseCode](/hw-docs/Reference/capturing/Enumerations/VideoCaptureResponseCode.md)>  Remarks  To start recording, call the method. |