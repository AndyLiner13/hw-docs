Source: https://developers.meta.com/horizon-worlds/learn/documentation/typescript/api-references-and-examples/instant-replay

# Instant Replay

Important

 This feature is not available to all creators.

Instant Replay is an experimental feature that allows world creators to add video recording start and stop points to key moments in their world. It records up to 60 seconds of first-person video on behalf of the player who is triggering the moment. This feature enables users to collect and share interesting footage from their gameplay without interrupting the immersive experience.

## How Instant Replay works

- Worlds that have integrated Instant Replay have a disclaimer for users who view or visit them. ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452532415_512510417953581_238544945196466554_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=HjRV_zo2VXoQ7kNvwGaFiRR&_nc_oc=AdkH_X_92ZpDr-OB2OeEWbCEYVmA2NUxJkCOT9MxJciN7yVeTF3cBukmGWeka2BNizQ&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=JdsMP-1_I4kwgaMKrgvzCQ&oh=00_AfkopcbdgnMPU0cgcdcGYKBdKEdwB2aXTC6n-p8i7tTE8w&oe=694BC5E6)![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452751772_512510411286915_8266118339470473699_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=jpaNlrDndqYQ7kNvwH9NvWn&_nc_oc=Adnjhm-ivfYbOZ2sGIHP0fPz2Xl06vSzHkGhOgxJdSQuRBYopF7WrUOc6v8fWKQSi90&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=JdsMP-1_I4kwgaMKrgvzCQ&oh=00_AfnYagLgRkrgo3_dO-zxuMcD5Wbk6pm3m3FsNbBbxDVN-A&oe=694BBC94)
- When the player explores the world and triggers the [START API](/hw-mcp-tools/documentation/hw-docs/Scripting/API%20references%20and%20examples/Instant%20Replay.md#examples), recording begins but the player is not notified yet.
- When the recording finishes, the player receives a pop-up notification inviting them to view the recording.
  ![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452577880_512510407953582_6499547904856135596_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=e6AGOApxPwkQ7kNvwEr49Xu&_nc_oc=AdmWBtFvCD8RklaQaIx55wokfJZXAlkEidj-SX7x4JUSE8YZW4EWv_cS6L65OysbFjw&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=JdsMP-1_I4kwgaMKrgvzCQ&oh=00_AfkeL57EZ-EKemUUUgt2a_M0Y1mliofqA-Z6G87eOCDRDA&oe=694BD15D)
- Once the player reviews the video, it is stored locally and removed from the server. The player will need to “review” the video in order to keep it permanently, otherwise it will be deleted after 7 days.
  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452915624_512510404620249_5991810155414682318_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=-SVdsl-6vhcQ7kNvwGOc-jx&_nc_oc=Adl1sCzfS_BUaLdevvyYkX7QCLztTBYjzECY-b_6HKDksvwa7O73Sxca1_p_SacQmrI&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=JdsMP-1_I4kwgaMKrgvzCQ&oh=00_AflOB1GMggigWWuN2MMNSWsEo8dE1lF8BdbSlqjA6aI6eA&oe=694BC636)![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452933706_512510401286916_5065382560789164018_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=_0UjKP5YqikQ7kNvwG5erK5&_nc_oc=AdlXwwS9ivahPIjScVzqvcTxN5humCd5cxCVDp4bZOAkt2aIq_KsqTun3gS5-GKBHLM&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=JdsMP-1_I4kwgaMKrgvzCQ&oh=00_AflmLy1r4funXTGUoXgmiun2tbWfhod5MI5HWpYpjfyyzQ&oe=694BD818)
- Once the player saves the video, it will be treated like any of their other media and can be shared normally.

## How to Add Instant Replay to your World

- Enable **Generate instant replays** under Player Settings in your world before you publish.
  ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452462864_512510391286917_3548967470848754097_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=_Slnga4PODEQ7kNvwHJkcRX&_nc_oc=AdngV4VqVDtYLnKMYU34-3CAHzwu22N-NyI2KijZBk_SmbJ-Om2kZDGzqAoaZ5y4-10&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=JdsMP-1_I4kwgaMKrgvzCQ&oh=00_AfmkeCh9tufowA98iO1ixq52MqpDVrkdL2noTrm_JgEmRw&oe=694BEDB5)
- Enable the **horizon/capturing** library for TypeScript.

![Screenshot 2024-01-31 at 1.07.49 PM.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/461926311_559110786626877_1925091700043161950_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=_BL1Py4NsJUQ7kNvwEbBu5g&_nc_oc=Adm-vVbtsoTrCZEy5doItUUjIdFMXXNbvWSNHiFL34YUjbJhN7Se9hhSOgQRmdpdKls&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=JdsMP-1_I4kwgaMKrgvzCQ&oh=00_AfnbG4FEVYkHDCWIRZN5okmiXWC7aPTVITNAzny2NKmRzg&oe=694BC621)

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
* You may want to [leverage persistent variables](/hw-mcp-tools/documentation/hw-docs/Scripting/Get%20started%20with%20TypeScript/Persistent%20Variables.md) to keep track of when the player has completed a recording to prevent too much duplication.

## Known Issues and Limitations

- Videos will only record up to 60 seconds.
- Worlds will limit recording a player to 10 times per session.
- Videos will not include name tags.
- While recording, the user may experience a small performance drop due to the extra recording cost. In our testing we noticed about 5 FPS
- Recording only works on Quest devices. Mobile devices do not support Instant Replay recording at this time.
- When enabling **Instant Replay** for the first time if the capture is not successful leave your world and then come back. Your captures should now work as intended.
- World visitors can opt out of Instant Replay in their settings.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452876762_512510384620251_6483094236294034771_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=MkRFoejiF6sQ7kNvwHn6wMH&_nc_oc=Adng4uUr_Ku4-f95skxmsRHCDVgTH09EGYVP1oso4cRPJNSxjckwIX8VNxRZ7Kh_OGA&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=JdsMP-1_I4kwgaMKrgvzCQ&oh=00_Afle6X13amIGpDfdi81dc_sDh5B_h_iS5wT6-fkTCcqy-g&oe=694BDB42)