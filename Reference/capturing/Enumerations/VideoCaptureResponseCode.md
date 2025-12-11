Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/capturing_videocaptureresponsecode

# VideoCaptureResponseCode Enum

> Warning: This API is now obsolete.
> This module is deprecated and will be removed in a future version.

The response codes for [PlayerCapturing](../Classes/PlayerCapturing.md) functions.

## Signature

```
export declare enum VideoCaptureResponseCode
```

## Enumeration Members

| Member | Value | Description |
| --- | --- | --- |
| FeatureDisabled | `5` | Auto capture is disabled by the user. |
| InternalError | `1` | An exception that produced an internal code occured. It was not caused by the caller. |
| InvalidParameter | `6` | The parameters are invalid. The string may include special characters. |
| InvalidParamter | `6` | The parameters are invalid. The string may include special characters. |
| MaxRecordingReachedFailure | `7` | The call failed due to the user reaching the maximum number of saved recordings per session (10 videos). |
| RecordingAlreadyInProgress | `3` | The call failed because another recording is already in progress. |
| RecordingNotInProgress | `4` | The call failed because no recording was in progress. |
| StoragePermissionDenied | `2` | The user turned off storage permission on the device so the device can't save video files. |
| Success | `0` | The operation completed without an error. |