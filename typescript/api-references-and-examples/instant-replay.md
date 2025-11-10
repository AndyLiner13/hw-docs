Source: https://developers.meta.com/horizon-worlds/learn/documentation/typescript/api-references-and-examples/instant-replay

# Instant Replay

Important

 This feature is not available to all creators.

Instant Replay is an experimental feature that allows world creators to add video recording start and stop points to key moments in their world. It records up to 60 seconds of first-person video on behalf of the player who is triggering the moment. This feature enables users to collect and share interesting footage from their gameplay without interrupting the immersive experience.

## How Instant Replay works

- Worlds that have integrated Instant Replay have a disclaimer for users who view or visit them. ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452532415_512510417953581_238544945196466554_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=G3A-fLu6Ku8Q7kNvwG8KQCK&_nc_oc=AdmacjWjdJWVD6uPEpKozVRbKdflziGTV3Tjid416c69ySFmOvHvag1i97RYNmU7H1s&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=9HZ2bmAfhRHcPwmd1OH5JA&oh=00_Afg5CzXivq6Lkar6ALy_YCd-Xlkfj3PD5DUnELDGanvJTQ&oe=692BE9A6)![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452751772_512510411286915_8266118339470473699_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=0MFPN4NgzAgQ7kNvwH04KT0&_nc_oc=AdnZtZW--mzN7DnxVaxD9qRg8dw6nozxacPUeIBZyeWxsUrA3sKQL_CXh0cANkpzsQ4&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=9HZ2bmAfhRHcPwmd1OH5JA&oh=00_AfgfoMeLvTfmW4Zgu-XNl_qPu2DFk-ejmlACcNvPUsqC2A&oe=692BE054)
- When the player explores the world and triggers the [START API](/horizon-worlds/learn/documentation/typescript/api-references-and-examples/instant-replay#examples), recording begins but the player is not notified yet.
- When the recording finishes, the player receives a pop-up notification inviting them to view the recording.
  ![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452577880_512510407953582_6499547904856135596_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=356haInYCskQ7kNvwFy3ma4&_nc_oc=AdmSxAZrJt8Z2CZkEezEKM1TWwRyfVJE-_38GgieYpx3Kq4qrkN4NYMFgoLxJxya2j4&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=9HZ2bmAfhRHcPwmd1OH5JA&oh=00_AfgH1_MhoY_0n12X1JrsMwC_UJjOeOxH-WkDsLaCrr4FcA&oe=692BF51D)
- Once the player reviews the video, it is stored locally and removed from the server. The player will need to “review” the video in order to keep it permanently, otherwise it will be deleted after 7 days.
  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452915624_512510404620249_5991810155414682318_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=qQ4mz8lAM4UQ7kNvwG39Mgu&_nc_oc=Adn3PWz9tsEgeDEdc-D-scNyouJWCGKp11rZe8fv8BKitwi2LmIRf_yXkfGQtDZ_Oqk&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=9HZ2bmAfhRHcPwmd1OH5JA&oh=00_AfitUL7lDBn8A8KaMlE9OhCJx7Zo4ej-mJN2Etr5_OCk3w&oe=692BE9F6)![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452933706_512510401286916_5065382560789164018_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=O_btBAjN0GAQ7kNvwGmLmku&_nc_oc=AdlgiaGEo6edt0cMQmPBDrNqsUGyWN0xdNpNWUl886AVjhndnlbfj6Kr9LWqOrGfIrQ&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=9HZ2bmAfhRHcPwmd1OH5JA&oh=00_AfjkAPqdXQKb0CvbZzacZezkvCaMnU7NAACFfPLx87a6ig&oe=692BFBD8)
- Once the player saves the video, it will be treated like any of their other media and can be shared normally.

## How to Add Instant Replay to your World

- Enable **Generate instant replays** under Player Settings in your world before you publish.
  ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452462864_512510391286917_3548967470848754097_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=PV34tbJwKgcQ7kNvwEO6HQJ&_nc_oc=AdkZ7PjA4i_RZwOh0770K6yooXnQ_360dFRHjGcAkVKDrapQpyNtPaixdS-sqBNsv44&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=9HZ2bmAfhRHcPwmd1OH5JA&oh=00_AfjpdSRG-HHEToTop23-iJYfMhN4xUMPM59ECQo-EX1jUw&oe=692C1175)
- Enable the **horizon/capturing** library for TypeScript.

![Screenshot 2024-01-31 at 1.07.49 PM.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/461926311_559110786626877_1925091700043161950_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=YfHZabPEbdgQ7kNvwHbwdjp&_nc_oc=AdmXtMG0JpGtl5QnZNxMVhZRdXl2-YrCFaAKBQEgHFZ_hj_GNfpSp2G1TjbcLeYkxvw&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=9HZ2bmAfhRHcPwmd1OH5JA&oh=00_AfiylLDuRIPRCTI39_9PoIKAidJCxKzrfI9BOhPePsw7NQ&oe=692BE9E1)

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

```vs
import * as cap from 'horizon/capturing'

let capture = new cap.PlayerCapturing(player.id);
let result = await capture.startVideoCapture("Trigger Test World Moment", {CameraMovementPreset: FirstPersonMovementCameraMovementPreset, duration: 15, saveOnDurationReached: false});
```

### Ending a capture

```vs
let capture = new cap.PlayerCapturing(player.id);
let result = awaitcapture.stopVideoCapture({save: true});
```

## Tips & Best Practices

* Identify fun or exciting moments in your world that you may want to record for the player. We recommend around one to three spots. Ideally, the spots should be a core part of the gameplay so that players will encounter it naturally. At least one spot should be commonly encountered, while the others could be more rare.
* Sometimes you may want to delay the stop API call a few seconds after the moment “concluded” in order to capture the player reaction.
* You may want to [leverage persistent variables](/horizon-worlds/learn/documentation/typescript/getting-started/persistent-variables-v2) to keep track of when the player has completed a recording to prevent too much duplication.

## Known Issues and Limitations

- Videos will only record up to 60 seconds.
- Worlds will limit recording a player to 10 times per session.
- Videos will not include name tags.
- While recording, the user may experience a small performance drop due to the extra recording cost. In our testing we noticed about 5 FPS
- Recording only works on Quest devices. Mobile devices do not support Instant Replay recording at this time.
- When enabling **Instant Replay** for the first time if the capture is not successful leave your world and then come back. Your captures should now work as intended.
- World visitors can opt out of Instant Replay in their settings.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452876762_512510384620251_6483094236294034771_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=dFb53cXcDIsQ7kNvwEXtv8r&_nc_oc=AdmSRZ1AjXb1NO7-xTLARmNLDdGZhaHHMIvEOrb16fhZ9Fmwrw-HTBRbD0Jijp-_CII&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=9HZ2bmAfhRHcPwmd1OH5JA&oh=00_AfgLesbhXSbkzkHvLa9ozEaV2P2FLa_18n3RDxDM-9xFsg&oe=692BFF02)