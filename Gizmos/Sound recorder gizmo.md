Source: https://developers.meta.com/horizon-worlds/learn/documentation/code-blocks-and-gizmos/use-the-sound-recorder-gizmo

# Sound recorder gizmo

The sound recorder [gizmo](About%20gizmos.md) allows you, the creator, to record custom sounds from the microphone on your desktop (if present) or headset. Each recording can be up to 20 minutes long.

## Access the sound recorder gizmo and record a sound

While you can access and configure the gizmos in the [VR tool](../VR%20tools/Getting%20started/Create%20a%20new%20world%20in%20Meta%20Horizon%20Worlds.md), the following steps show you how to access the sound recorder gizmo from the desktop editor and add it to the [scene pane](../Desktop%20editor/Get%20started%20with%20Desktop%20Editor/User%20interface/Panels%20and%20Tabs%20in%20the%20desktop%20editor.md#scene-pane).

- In the desktop editor while in the Build mode, select **Build** > **Gizmos** from the menu bar, search for “sound” in the search field.
- Select the sound recorder gizmo and drag it into the scene.
- You can now edit the new gizmo properties in the [**Properties** panel](../Desktop%20editor/Get%20started%20with%20Desktop%20Editor/User%20interface/Panels%20and%20Tabs%20in%20the%20desktop%20editor.md#properties-pane).

  For example, to record a sound, click **Record**; make a sound, then select **Stop** to stop recording, or select **Play** to preview the recording.

## Properties

The sound recorder gizmo is an entity. All objects in a world are represented by entities. [Entities](../Reference/core/Classes/Entity.md) have their respective properties such as position, rotation, and scale. In the Properties panel, you can edit the gizmo’s transformation fields to configure its **Position**, **Rotation**, and **Scale**.

The following table lists the sound properties that you can configure in the Properties panel.

| Property | Description |
| --- | --- |
| **Sound** | Click **Play** to play any audio on the sound recorder gizmo. Click **Record** to record any sounds coming through your desktop microphone (if present) or headset microphone. |
| **Loop** | Sets the sound to loop continuously. |
| **Volume** | Sets the volume of the sound recorder gizmo. Values are between 0.0 and 1.0. |
| **Pitch** | Sets the pitch of the sound recorder gizmo. Values are between -24 and 24. |
| **Play on Start** | Turn this on to start playing the sound as soon as a player enters the world. |
| **Global** | Determines whether the sound recorder gizmo will play where everyone in the world can hear it. |
| **Minimum Distance** | The distance (in meters) at which a sound will be heard at maximum volume. |
| **Maximum Distance** | The distance (in meters) at which a sound will no longer be heard. |
| **Send Audio Complete** | Determines whether the sound recorder gizmo sends an event when the audio is finished. |

## Scripting

You can control the properties and functionalities of the sound recorder gizmo through scripting. See the [AudioGizmo](../Reference/core/Classes/AudioGizmo.md) API for details and examples.

## Rights management in the sound recorder gizmo

* **Information banners**: The sound recorder properties panel provides information banners in VR for the following cases:

  **Note**: The information banners may only be available in the [VR tool](../VR%20tools/Getting%20started/Create%20a%20new%20world%20in%20Meta%20Horizon%20Worlds.md).

  + Before a sound is recorded, a purple banner informs you that any sound recorded will be scanned for copyrighted content. The purple banner remains while the scan is in progress.
  + A green banner is shown when the review is completed and successful.
  + The banner turns red if a sound has been muted entirely or partially.
  + The [World Publish](../Save,%20optimize,%20and%20publish/Publish%20your%20world.md) menu provides a warning banner whenever the world contains a sound recorder gizmo that is in review or is muted.
* **Full or partial mutes trigger in-app notifications, emails, and a gizmo flash**: When a sound in your world is muted (either in full or partially), you’ll receive in-app notifications and emails alerting you. The emails provide a link for disputes to [Using audio recording in Worlds](../Safety%20and%20privacy/Using%20music%20in%20audio%20recordings%20in%20Meta%20Horizon%20Worlds.md). Gizmos with any mute flash red.
* **Appeal support**: If you believe that you have the rights to use blocked or muted content, follow the process outlined at [Using audio recording in Worlds](../Safety%20and%20privacy/Using%20music%20in%20audio%20recordings%20in%20Meta%20Horizon%20Worlds.md). In addition to notification emails, this link is also provided in the banner on the sound recorder that alerts when mutes occur.
* **Muting in both Build and Visit modes**: When sound recorders are muted, they are muted in both [Build](../Desktop%20editor/Get%20started%20with%20Desktop%20Editor/User%20interface/Build%20and%20Preview%20Modes.md) and [Visit](https://github.com/MHCPCreators/horizonCreatorManual/blob/main/HorizonTechnicalDoc.md#visitation-modes-edit-preview-and-publish) modes.
* **Mutes from retroactive scans will also trigger notifications**: See [Using audio recording in Worlds](../Safety%20and%20privacy/Using%20music%20in%20audio%20recordings%20in%20Meta%20Horizon%20Worlds.md) for more detail on retroactive scans and associated mutes. When these mutes happen, you will be alerted through the same mute mechanism described above—over email, through in-app notifications, and through the banner within the sound recorder.

## What’s next?

Now you’ve been introduced to the sound recorder gizmo, here are some related resources to help you continue to learn and create with Worlds.

* [Meta Horizon Creator Program creators manual on the sound recorder gizmo](https://github.com/MHCPCreators/horizonCreatorManual/blob/main/HorizonTechnicalDoc.md#sound-gizmo)
* [Pre-made sound](../VR%20tools/SFX/Add%20sound%20to%20your%20world%20in%20Meta%20Horizon%20Worlds.md)

  **Note**: In the desktop editor, pre-made sounds can be found by navigating to the menu bar, and select **Build** > **Sounds**.
* [Generative AI creation audio tool](../Desktop%20editor/Generative%20AI%20tools/Generative%20AI%20Creation%20Audio%20Tool.md)
* [How audio affects performance](../Performance/Performance%20tools/Analyzing%20trace%20data%20with%20Perfetto.md#audio)