Source: https://developers.meta.com/horizon-worlds/learn/documentation/typescript/api-references-and-examples/instant-replay

# Instant Replay

Important

 This feature is not available to all creators.

Instant Replay is an experimental feature that allows world creators to add video recording start and stop points to key moments in their world. It records up to 60 seconds of first-person video on behalf of the player who is triggering the moment. This feature enables users to collect and share interesting footage from their gameplay without interrupting the immersive experience.

## How Instant Replay works

- Worlds that have integrated Instant Replay have a disclaimer for users who view or visit them. ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452532415_512510417953581_238544945196466554_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=42LCtOw1278Q7kNvwFQ_pLW&_nc_oc=AdlCWQOIav751OYSbOHJdp18A5y2R_qGFiE6VovbtBBY6hZKDiD__kn8_NL8qPVGvhc&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=hPSj5Pwxs4tC0P1yQ5Nzsg&oh=00_AfigxPNFMxzCcU1uyJ5JoVRreowpLxKULIQxMXY1splk9g&oe=69312FA6)![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452751772_512510411286915_8266118339470473699_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=o2lY1CcEdrUQ7kNvwHsw5XZ&_nc_oc=AdnBJzibA5EB9ZRSxhfEFRRakkODcJHC8T5o8YCdCG8XImccBywMU_9LQWfu2qYfEac&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=hPSj5Pwxs4tC0P1yQ5Nzsg&oh=00_AfhUbi8EbMTSZxWMn6ago8E-3l6HTM1fsTTFsIYK-9DIYA&oe=69312654)
- When the player explores the world and triggers the [START API](#examples), recording begins but the player is not notified yet.
- When the recording finishes, the player receives a pop-up notification inviting them to view the recording.
  ![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452577880_512510407953582_6499547904856135596_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=4Bsop0KKR18Q7kNvwEgcxSC&_nc_oc=Adl2Wv2KVepk16pNifzOvdGZvWDUgVzcbD8jDENM6Yu72NKPDi-iumg6ThB3c5lv5yc&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=hPSj5Pwxs4tC0P1yQ5Nzsg&oh=00_Afj0EquUmDCbH3e9xZFafIhFmtlv7kU_2WuW3LBEvtGRBQ&oe=69313B1D)
- Once the player reviews the video, it is stored locally and removed from the server. The player will need to “review” the video in order to keep it permanently, otherwise it will be deleted after 7 days.
  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452915624_512510404620249_5991810155414682318_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=QCi6aajeSJAQ7kNvwFe5NH1&_nc_oc=AdkB9c4p7E4iAaqYqC_q2theK57DCpcIj3PwbklPmFg8Mr3ltRuoJRnS9b0pZdpAAIs&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=hPSj5Pwxs4tC0P1yQ5Nzsg&oh=00_AfheUMiC823LaM94AuV4a9msa4YQnStu4pGEHL401lGn5w&oe=69312FF6)![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452933706_512510401286916_5065382560789164018_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=2Dxa8SaG6ngQ7kNvwFf2MQN&_nc_oc=AdkXMour1Z2P9iPfATlohLQ2xkwW1zghQqznFsO3W8Muu-u2D4dawnjYtAsklDr97ng&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=hPSj5Pwxs4tC0P1yQ5Nzsg&oh=00_AfjccrkuqTx_Zst7ZHRXtnyVDZSMRtZNhHfivAPLq9qSsA&oe=693141D8)
- Once the player saves the video, it will be treated like any of their other media and can be shared normally.

## How to Add Instant Replay to your World

- Enable **Generate instant replays** under Player Settings in your world before you publish.
  ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452462864_512510391286917_3548967470848754097_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=lpvKbzf0rvEQ7kNvwGg8i48&_nc_oc=Adm3zdaDW-Wzm8uDiA2_Spvl7teQbRd-c6EP9AGtG0X83sL8vGizhgBYTJgdXDNEvdg&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=hPSj5Pwxs4tC0P1yQ5Nzsg&oh=00_Afi1hrIMRCD3T2tzYSwPSlrCFvTMwT_TAgXbpRrVqwmsuw&oe=69311F35)
- Enable the **horizon/capturing** library for TypeScript.

![Screenshot 2024-01-31 at 1.07.49 PM.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/461926311_559110786626877_1925091700043161950_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=grZH8Xb5lDUQ7kNvwFhVRbS&_nc_oc=Adn-rPrOVafYf0cw-TXAAGP72yzIeJTaTLgtE_qAnbH80X02HWZJ1cRlGe4zDR-aR9s&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=hPSj5Pwxs4tC0P1yQ5Nzsg&oh=00_AfgNqVcHKH0ywchq8bvxarxjFmDiK9ilBJopTbwkDP79ig&oe=69312FE1)

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
- You can specify an optional [`CameraMovementPreset`](/hw-docs/Reference/capturing/Type Aliases/CameraMovementPreset.md) to configure the camera angle.

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
* You may want to [leverage persistent variables](/hw-docs/Scripting/Get%20started%20with%20TypeScript/Persistent%20Variables.md) to keep track of when the player has completed a recording to prevent too much duplication.

## Known Issues and Limitations

- Videos will only record up to 60 seconds.
- Worlds will limit recording a player to 10 times per session.
- Videos will not include name tags.
- While recording, the user may experience a small performance drop due to the extra recording cost. In our testing we noticed about 5 FPS
- Recording only works on Quest devices. Mobile devices do not support Instant Replay recording at this time.
- When enabling **Instant Replay** for the first time if the capture is not successful leave your world and then come back. Your captures should now work as intended.
- World visitors can opt out of Instant Replay in their settings.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452876762_512510384620251_6483094236294034771_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=L2ca64a7W_IQ7kNvwHK9yeE&_nc_oc=AdmwaeT4ggqNF5vz6cBJDvCQJwRrI8L66w1IAyV-nozDolvB8avD5XEk7d2QovDT-LA&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=hPSj5Pwxs4tC0P1yQ5Nzsg&oh=00_Afgok-RAR-6gbOQ-uU5zNctgFOMVYK6b1mv2tF9_61PjqQ&oe=69314502)