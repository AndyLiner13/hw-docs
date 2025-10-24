# Sound recorder gizmo

## Access the sound recorder gizmo and record a sound

 While you can access and configure the gizmos in the [VR tool](https://developers.meta.com/horizon-worlds/learn/documentation/vr-creation/getting-started/create-a-new-world-in-horizon), the following steps show you how to access the sound recorder gizmo from the
desktop editor and add it to the [scene pane](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/getting-started/user-interface/UI-panels-and-tabs#scene-pane).
1.  In the desktop editor while in the Build mode, select Build > Gizmos from the menu bar, search for "sound" in the search field.
2.  Select the sound recorder gizmo and drag it into the scene.
3.  You can now edit the new gizmo properties in the [Properties panel](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/getting-started/user-interface/UI-panels-and-tabs#properties-pane). For example, to record a sound, click Record; make a sound, then select Stop to stop recording, or select Play to preview the recording.

# Sound recorder gizmo

## Properties

 The sound recorder gizmo is an entity. All objects in a world are represented by
entities. [Entities](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_entity) have their respective properties such as position, rotation, and scale. In the
Properties panel, you can edit the gizmo's transformation fields to configure
its Position, Rotation, and Scale. The following table lists the sound properties that you can configure in the
Properties panel.
|  |
|  |
| Sound | Click Play to play any audio on the sound recorder gizmo. Click Record to record any sounds coming through your desktop microphone (if present) or headset microphone. |
| Loop | Sets the sound to loop continuously. |
| Volume | Sets the volume of the sound recorder gizmo. Values are between 0.0 and 1.0. |
| Pitch | Sets the pitch of the sound recorder gizmo. Values are between -24 and 24. |
| Play on Start | Turn this on to start playing the sound as soon as a player enters the world. |
| Global | Determines whether the sound recorder gizmo will play where everyone in the world can hear it. |
| Minimum Distance | The distance (in meters) at which a sound will be heard at maximum volume. |
| Maximum Distance | The distance (in meters) at which a sound will no longer be heard. |
| Send Audio Complete | Determines whether the sound recorder gizmo sends an event when the audio is finished. |

# Sound recorder gizmo

## Scripting

 You can control the properties and functionalities of the sound recorder gizmo
through scripting. See the [AudioGizmo](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_audiogizmo) API for details and examples.  

# Sound recorder gizmo

## Rights management in the sound recorder gizmo


•  Information banners: The sound recorder properties panel provides information banners in VR for the
following cases: Note: The information banners may only be available in the [VR tool](https://developers.meta.com/horizon-worlds/learn/documentation/vr-creation/getting-started/create-a-new-world-in-horizon).
  • Before a sound is recorded, a purple banner informs you that any sound recorded
will be scanned for copyrighted content. The purple banner remains while the
scan is in progress.
  • A green banner is shown when the review is completed and successful.
  • The banner turns red if a sound has been muted entirely or partially.
  • The [World Publish](https://developers.meta.com/horizon-worlds/learn/documentation/save-optimize-and-publish/publish-your-world) menu provides a warning banner whenever the world contains a sound recorder
gizmo that is in review or is muted.

• Full or partial mutes trigger in-app notifications, emails, and a gizmo flash: When a sound in your world is muted (either in full or partially), you'll
receive in-app notifications and emails alerting you. The emails provide a link for
disputes to [Using audio recording in Worlds](https://developers.meta.com/horizon-worlds/learn/documentation/sounds-physics-and-automation/using-music-audio-recordings-horizon-worlds). Gizmos with any mute flash red.

• Appeal support: If you believe that you have the rights to use blocked or muted content,
follow the process outlined at [Using audio recording in Worlds](https://developers.meta.com/horizon-worlds/learn/documentation/sounds-physics-and-automation/using-music-audio-recordings-horizon-worlds). In addition to notification emails, this link is also provided in the banner
on the sound recorder that alerts when mutes occur.

• Muting in both Build and Visit modes: When sound recorders are muted, they are muted in both [Build](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/getting-started/user-interface/operational-modes) and [Visit](https://github.com/MHCPCreators/horizonCreatorManual/blob/main/HorizonTechnicalDoc.md#visitation-modes-edit-preview-and-publish) modes.

• Mutes from retroactive scans will also trigger notifications: See [Using audio recording in Worlds](https://developers.meta.com/horizon-worlds/learn/documentation/sounds-physics-and-automation/using-music-audio-recordings-horizon-worlds) for more detail on retroactive scans and associated mutes. When these mutes
happen, you will be alerted through the same mute mechanism described above—over
email, through in-app notifications, and through the banner within the sound
recorder.

# Sound recorder gizmo

## What's next?

 Now you've been introduced to the sound recorder gizmo, here are some related
resources to help you continue to learn and create with Worlds.
• [Meta Horizon Creator Program creators manual on the sound recorder gizmo](https://github.com/MHCPCreators/horizonCreatorManual/blob/main/HorizonTechnicalDoc.md#sound-gizmo)
•  [Pre-made sound](https://developers.meta.com/horizon-worlds/learn/documentation/vr-creation/sfx/adding-sound-in-horizon) Note: In the desktop editor, pre-made sounds can be found by navigating to the menu
bar, and select Build > Sounds.
• [Generative AI creation audio tool](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/generative-ai-creation-tools/generative-ai-creation-audio-tool)
• [How audio affects performance](https://developers.meta.com/horizon-worlds/learn/documentation/performance-best-practices-and-tooling/performance-tools/analyzing-trace-data-with-perfetto#audio)

    ![Nav Logo](https://static.xx.fbcdn.net/rsrc.php/yE/r/3SoBlk8EqOQ.svg)


[Facebook](https://www.facebook.com/MetaHorizon/)
[Threads](https://www.threads.com/@metahorizon)
[X](https://x.com/MetaHorizon/)
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

# Sound recorder gizmo

## Additional Links
- [Meta home](https://developers.meta.com/horizon-worlds/)
- [Login](https://developers.meta.com/login/?redirect_uri=https%3A%2F%2Fdevelopers.meta.com%2Fhorizon-worlds%2Flearn%2Fdocumentation%2Fcode-blocks-and-gizmos%2Fuse-the-sound-recorder-gizmo%2F)

# Sound recorder gizmo

 The sound recorder [gizmo](https://developers.meta.com/horizon-worlds/learn/documentation/code-blocks-and-gizmos/about-gizmos) allows you, the creator, to record custom sounds from the microphone on your
desktop (if present) or headset. Each recording can be up to 20 minutes long.  

## Access the sound recorder gizmo and record a sound

## Properties

## Scripting

## Rights management in the sound recorder gizmo

## What's next?

## Additional Links

      Learn
# Sound recorder gizmo
