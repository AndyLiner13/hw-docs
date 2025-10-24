# Instant Replay

## How Instant Replay works


1.  Worlds that have integrated Instant Replay have a disclaimer for users who view
or visit them. ![Image](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452532415_512510417953581_238544945196466554_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=zYVgkM4RMS8Q7kNvwGHsLeu&_nc_oc=AdmWRopinjLjQMzCtdAi2LyyqfhWRZ04vUR2oWUqPBWqmXYqOGvZ0SldSmEqkOKpYvU&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=oRFzG1OzepUqlSECoyqfaw&oh=00_Afc77d43Nh9XqfZ1nEf5NkzPez3f0ag...
2.  When the player explores the world and triggers the START API, recording begins but the player is not notified yet.
3. When the recording finishes, the player receives a pop-up notification inviting
them to view the recording. ![Image](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452577880_512510407953582_6499547904856135596_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=yD6xvLDKvpwQ7kNvwELXI7Z&_nc_oc=Adm9r6e59xt_m6W6ky2nBYi3m4XwOG80mE80gza-usVswHwaopy-RgNs_aplEKAwMbw&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=oRFzG1OzepUqlSECoyqfaw&oh=00_AffM7Xb7QBLpXrE6eAHY_OiJxDU_ZwEy...
4. Once the player reviews the video, it is stored locally and removed from the
server. The player will need to "review" the video in order to keep it permanently,
otherwise it will be deleted after 7 days. ![Image](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452915624_512510404620249_5991810155414682318_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=9cEgRSnpCCQQ7kNvwFwBTxU&_nc_oc=AdnZMxLS-ETrI_ZHgPnFnVQfw5_Z6AfeZaaEPYpSLzo2p2RtRhdaMDAlXY71o9ICGB0&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=oRFzG1OzepUqlSECoyqfaw&oh=00_AfdMEYM6AE4OnDa4UjcJWE0e5HI7...
5. Once the player saves the video, it will be treated like any of their other
media and can be shared normally.
## How to Add Instant Replay to your World


1. Enable Generate instant replays under Player Settings in your world before you publish. ![Image](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452462864_512510391286917_3548967470848754097_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=upNesBtMZZwQ7kNvwFhthRp&_nc_oc=AdlwGNL4KEXxadrox8-t4QZLIR0KyCsdpriS--KPDXMiqaxhfdIsb00SSaX7zVSeoTI&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=oRFzG1OzepUqlSECoyqfaw&oh=00_AfdytkB_WdFpcu7S_JED...
2. Enable the horizon/capturing library for TypeScript.
 ![Screenshot 2024-01-31 at 1.07.49 PM.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/461926311_559110786626877_1925091700043161950_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=5DJzQr5yf0cQ7kNvwE5ldCE&_nc_oc=AdkTll78GONCEc7_eLSXcI2b0WXs_Y5shXEFpqR2mIav4Evp-bPzdmRsO_djqU_Lb0&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=oRFzG1OzepUqlSECoyqfaw&oh=00_AffFxHS...
## Experimental camera angles

 The instant replay feature records from the avatar's first person point of view
by default. Meta Horizon Worlds is running an experiment where creators can
choose from the existing first person or two new angle options. For Instant Replays set up with one of the two experimental angles, world
visitors in the experiment will trigger Instant Replays with the experimental angle.
Visitors not in the experiment won't trigger Instant Replays. Recording angle options:
• Default - First person: `FirstPersonMovementCameraMovementPreset`
• Experimental - Third person over the shoulder: `ThirdPersonOverShoulderCameraMovementPreset`
• Experimental - Avatar fixed in center of frame: `FixedPositionTrackingPlayerCameraMovementPreset`

  
## Examples

  
### Starting a capture


1. You must specify a unique moment name; we use this for logging and analysis. The
moment name must contain only alphanumeric characters and spaces.
2. Duration can be up to 60 seconds.
3. When the duration is reached, you can choose to either save or discard the
video, based on the outcome of an action in-game.
  •  Potential scenario: You have a fishing mechanic and you start recording once a fish is on the hook. If the fish breaks loose you end the recording and discard. If the fish is reeled in, you end the recording and save.
4. You can specify an optional [CameraMovementPreset](https://horizon.meta.com/resources/scripting-api/capturing.cameramovementpreset.md/?api_version=2.0.0) to configure the camera angle.

  
```
import * as cap from 'horizon/capturing'

let capture = new cap.PlayerCapturing(player.id);
...
let result = await capture.startVideoCapture("Trigger Test World Moment", {CameraMovementPreset: FirstPersonMovementCameraMovementPreset, duration: 15, saveOnDurationReached: false});
```
  
### Ending a capture

  
```
let capture = new cap.PlayerCapturing(player.id);
let result = awaitcapture.stopVideoCapture({save: true});
```
  
## Tips & Best Practices


• Identify fun or exciting moments in your world that you may want to record for
the player. We recommend around one to three spots. Ideally, the spots should be
a core part of the gameplay so that players will encounter it naturally. At
least one spot should be commonly encountered, while the others could be more rare.
• Sometimes you may want to delay the stop API call a few seconds after the moment
"concluded" in order to capture the player reaction.
• You may want to [leverage persistent variables](https://developers.meta.com/horizon-worlds/learn/documentation/typescript/getting-started/persistent-variables-v2) to keep track of when the player has completed a recording to prevent too much
duplication.

  
## Known Issues and Limitations


1. Videos will only record up to 60 seconds.
2. Worlds will limit recording a player to 10 times per session.
3. Videos will not include name tags.
4. While recording, the user may experience a small performance drop due to the
extra recording cost. In our testing we noticed about 5 FPS
5. Recording only works on Quest devices. Mobile devices do not support Instant
Replay recording at this time.
6. When enabling Instant Replay for the first time if the capture is not successful leave your world and then
come back. Your captures should now work as intended.
7. World visitors can opt out of Instant Replay in their settings.
 ![Image](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452876762_512510384620251_6483094236294034771_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=WRVAXpkiyDkQ7kNvwHctOt7&_nc_oc=AdniwEwjQWrDJIaIxJwaN3khCM0lDX7k-AjfqlZ4m0JF1EMcVxq2TuXh2H2flFxHxE&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=oRFzG1OzepUqlSECoyqfaw&oh=00_Afdq61UbrwI1jB4WgxJ8ULLrKa6IVQj6LoX-UBSIkX...
    ![Nav Logo](https://static.xx.fbcdn.net/rsrc.php/yE/r/3SoBlk8EqOQ.svg)


[Facebook](https://www.facebook.com/MetaHorizon/)
[Threads](https://www.threads.com/@metahorizon)
[X](https://x.com/MetaHorizon)
[Instagram](https://www.instagram.com/metahorizon/)
[YouTube](https://www.youtube.com/@MetaQuestVR)

 Learn
[Documentation](https://developers.meta.com/horizon-worlds/learn/documentation/)
[Blog](https://developers.meta.com/horizon/blog/)
[Forum](https://communityforums.atmeta.com/t5/Creator-Forum/ct-p/Meta_Horizon_Creator_Forums)

 Programs
[Meta Horizon Creator Program](https://developers.meta.com/horizon-worlds/programs/)

 My Creations
[My Worlds](https://horizon.meta.com/creator/worlds_all/?utm_source=horizon_worlds_creator)
[My Assets](https://horizon.meta.com/creator/assets/?utm_source=horizon_worlds_creator)
[Performance](https://horizon.meta.com/creator/performance/traces/?utm_source=horizon_worlds_creator)

 Privacy & Legal
[Privacy Policy](https://www.meta.com/legal/privacy-policy/)
[Legal](https://www.meta.com/legal/supplemental-terms-of-service/)

 © 2025 Meta
