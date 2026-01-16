Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/capturing_playercapturing

# PlayerCapturing Class

Extends *Player*

> Warning: This API is now obsolete.
> This module is deprecated and will be removed in a future version.

The video recording capabilities from the players point of view.

## Signature

```
export declare class PlayerCapturing extends Player
```

## Remarks

This class contains methods for recording in-game footage from the players point of view at key moments during game play. For details, see the [Instant Replay](https://developers.meta.com/horizon-worlds/learn/documentation/typescript/api-references-and-examples/instant-replay) guide.

## Methods

|  |  |
| --- | --- |
| **startVideoCapture(\_momentName, \_options)** | Warning: This API is now obsolete. This module is deprecated and will be removed in a future version. Starts recording a video from the player's point of view.      Signature  ``` startVideoCapture(_momentName: string, _options?: Partial<StartVideoCaptureOptions>): Promise<VideoCaptureResponseCode>; ```  Parameters  \_momentName: string  \_options: Partial<[StartVideoCaptureOptions](https://developers.meta.com/horizon-worlds/reference/2.0.0/capturing_startvideocaptureoptions)>  *(Optional)*  Returns  Promise<[VideoCaptureResponseCode](https://developers.meta.com/horizon-worlds/reference/2.0.0/capturing_videocaptureresponsecode)>  Remarks  Call the method to end the recording. |
| **stopVideoCapture(\_options)** | Warning: This API is now obsolete. This module is deprecated and will be removed in a future version. Stops recording a video from the player's point of view.      Signature  ``` stopVideoCapture(_options?: Partial<StopVideoCaptureOptions>): Promise<VideoCaptureResponseCode>; ```  Parameters  \_options: Partial<[StopVideoCaptureOptions](https://developers.meta.com/horizon-worlds/reference/2.0.0/capturing_stopvideocaptureoptions)>  *(Optional)*  Returns  Promise<[VideoCaptureResponseCode](https://developers.meta.com/horizon-worlds/reference/2.0.0/capturing_videocaptureresponsecode)>  Remarks  To start recording, call the method. |