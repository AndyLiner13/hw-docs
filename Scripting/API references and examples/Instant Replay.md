Source: https://developers.meta.com/horizon-worlds/learn/documentation/typescript/api-references-and-examples/instant-replay

# Instant Replay

Important

 This feature is not available to all creators.

Instant Replay is an experimental feature that allows world creators to add video recording start and stop points to key moments in their world. It records up to 60 seconds of first-person video on behalf of the player who is triggering the moment. This feature enables users to collect and share interesting footage from their gameplay without interrupting the immersive experience.

## How Instant Replay works

- Worlds that have integrated Instant Replay have a disclaimer for users who view or visit them. ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452532415_512510417953581_238544945196466554_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=M-anAqSznDwQ7kNvwElMj5J&_nc_oc=AdkcEmipbwpEQydEqjSfyfyi_yersQyc80MQP-EwMjdy1pSGjyIFZoiUFBZAtw3RwbW20b7wPs7CgFSRLgKgbLqb&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=3Wx90EszSfFgqT52nyBCwQ&oh=00_AfmbfZntglqsrIWyKn3R09gqDoqBfU9ca1OJnJC_lf41WA&oe=695570E6)![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452751772_512510411286915_8266118339470473699_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=inNz52e27ZIQ7kNvwHXbus2&_nc_oc=Adlqu4h3pdCkxq2CE-28y0Q197eNSjzxPywhFo8kOG4ynQmcUcPsHQh4xZP4BIEY2BcocckAWG9vzdgyduCWMI_1&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=3Wx90EszSfFgqT52nyBCwQ&oh=00_AfnBC5z4uKEoVdjXgL0rIBTCXDTPGglfli7n1Kc82Nuw0w&oe=69559FD4)
- When the player explores the world and triggers the [START API](Instant%20Replay.md#examples), recording begins but the player is not notified yet.
- When the recording finishes, the player receives a pop-up notification inviting them to view the recording.
  ![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452577880_512510407953582_6499547904856135596_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=KyDvw57iz2wQ7kNvwGxGm-j&_nc_oc=AdliIqgWgCpJiwUJW7EpDBBP9qwOpkdo25n-u1rlFOETcd6GYWMmTJjJ6cwXGs_go5rsy-nG5Rdt0FQUt79rr8ET&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=3Wx90EszSfFgqT52nyBCwQ&oh=00_AfkyTiYOdcZAsbsd7PQCtk5bJ6xCyzBLoBDnHEDMvvrMbA&oe=69557C5D)
- Once the player reviews the video, it is stored locally and removed from the server. The player will need to “review” the video in order to keep it permanently, otherwise it will be deleted after 7 days.
  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452915624_512510404620249_5991810155414682318_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=8QNWo_UoKgoQ7kNvwHDGBCK&_nc_oc=Admv1PoPGQe0X0rqPU2J-q1gKKs-VRJLepsiTzgyHs2T2oxfaX0QBKH8Kq21kka_XhBhHnyTCYPeOJDj0QjFoG5Q&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=3Wx90EszSfFgqT52nyBCwQ&oh=00_AfmPn7tzR-yVdRWiSIsiIYz3WtF06xQhbiFs3Kaiv3DK0A&oe=69557136)![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452933706_512510401286916_5065382560789164018_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=tE-YUATpZPcQ7kNvwHACNw0&_nc_oc=AdkHY3j_J9Hr783EM63FadLyra_SmPvooXr0lj-Vct4a8RbvGH2Wow0dbIawJ43BdMwxR5JPnOLXu4JGnxP0Zkjq&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=3Wx90EszSfFgqT52nyBCwQ&oh=00_AfmQoFf00OAeY1OHlv6DMMUOtObqhjzKyMMi--NMohIePA&oe=69558318)
- Once the player saves the video, it will be treated like any of their other media and can be shared normally.

## How to Add Instant Replay to your World

- Enable **Generate instant replays** under Player Settings in your world before you publish.
  ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452462864_512510391286917_3548967470848754097_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=UA_cV8AY8YUQ7kNvwF0DLUM&_nc_oc=AdmFtWBXM52RmH_HShZ-am0SJsyUUCMja6m1zpR1jIuuVn5AmIjD1sAnn7Mv6lk4ezpSBUW1o56PkxpcR_SjpNXZ&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=3Wx90EszSfFgqT52nyBCwQ&oh=00_AfnBHoSeG9xW2NNFmrUCu-ebag396tbIAeIj2TJ9AdBZAg&oe=695598B5)
- Enable the **horizon/capturing** library for TypeScript.

![Screenshot 2024-01-31 at 1.07.49 PM.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/461926311_559110786626877_1925091700043161950_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=BHXp8i5XRfMQ7kNvwHa6fYb&_nc_oc=Adm4OfnQ_1UBeD0iBwg4nR8cumnDELpDV7giORr7JkuhLxEIBkOSjlxB2C5BlQkzVVgqOhys_CUhnVI17LnvcU3F&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=3Wx90EszSfFgqT52nyBCwQ&oh=00_AfkDV5DbQeRtraDQCeTs-1ZTH5U2Vfv71RiglT4SpeGM2Q&oe=69557121)

## Experimental camera angles

The instant replay feature records from the avatar’s first person point of view by default. Meta Horizon Worlds is running an experiment where creators can choose from the existing first person or two new angle options.

For Instant Replays set up with one of the two experimental angles, world visitors in the experiment will trigger Instant Replays with the experimental angle. Visitors not in the experiment won’t trigger Instant Replays.

Recording angle options:

* Default - First person: `FirstPersonMovementCameraMovementPreset`
* Experimental - Third person over the shoulder: `ThirdPersonOverShoulderCameraMovementPreset`
* Experimental - Avatar fixed in center of frame: `FixedPositionTrackingPlayerCameraMovementPreset`

## Examples

### Starting a capture

- You must specify a unique moment name; we use this for logging and analysis. The moment name must contain only alphanumeric characters and spaces.
- Duration can be up to 60 seconds.
- When the duration is reached, you can choose to either save or discard the video, based on the outcome of an action in-game.
  * **Potential scenario:**

    You have a fishing mechanic and you start recording once a fish is on the hook. **If the fish breaks loose** you end the recording and discard. **If the fish is reeled in**, you end the recording and save.
- You can specify an optional [`CameraMovementPreset`](https://horizon.meta.com/resources/scripting-api/capturing.cameramovementpreset.md/?api_version=2.0.0) to configure the camera angle.

```
import * as cap from 'horizon/capturing'

let capture = new cap.PlayerCapturing(player.id);
let result = await capture.startVideoCapture("Trigger Test World Moment", {CameraMovementPreset: FirstPersonMovementCameraMovementPreset, duration: 15, saveOnDurationReached: false});
```

### Ending a capture

```
let capture = new cap.PlayerCapturing(player.id);
let result = awaitcapture.stopVideoCapture({save: true});
```

## Tips & Best Practices

* Identify fun or exciting moments in your world that you may want to record for the player. We recommend around one to three spots. Ideally, the spots should be a core part of the gameplay so that players will encounter it naturally. At least one spot should be commonly encountered, while the others could be more rare.
* Sometimes you may want to delay the stop API call a few seconds after the moment “concluded” in order to capture the player reaction.
* You may want to [leverage persistent variables](../Get%20started%20with%20TypeScript/Persistent%20Variables.md) to keep track of when the player has completed a recording to prevent too much duplication.

## Known Issues and Limitations

- Videos will only record up to 60 seconds.
- Worlds will limit recording a player to 10 times per session.
- Videos will not include name tags.
- While recording, the user may experience a small performance drop due to the extra recording cost. In our testing we noticed about 5 FPS
- Recording only works on Quest devices. Mobile devices do not support Instant Replay recording at this time.
- When enabling **Instant Replay** for the first time if the capture is not successful leave your world and then come back. Your captures should now work as intended.
- World visitors can opt out of Instant Replay in their settings.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452876762_512510384620251_6483094236294034771_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=eFU3YBVwb4QQ7kNvwFxIag0&_nc_oc=AdnXK8edZwxmlEu_8knvXAvhETDu8dvbV6GELKc-4UQ5HJFkRq4LnodbAhiFG9zWv05BU8NYRFyJwNdocsxl_VwX&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=3Wx90EszSfFgqT52nyBCwQ&oh=00_Afk4x4Jm16XP4tiyKgzsOQ84drjOMByXNcoBxmOt4FJwsA&oe=69558642)