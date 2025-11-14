Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/scripted-avatar-npc-tutorial/module-4-adding-voice-over

# Module 4 - Adding Voice-Over

Voice-over is an excellent means of enhancing the NPCs of your worlds into being perceived as dynamic characters in the experience. In this world, voice-over has been added for each of the NPCs, triggered off of gameplay events to enhance the experience.

## Record and import audio

Audio can be recorded outside of Meta Horizon Worlds in the prescribed format(s). Through the desktop editor, you can then import audio files into your Asset Library. For more information, see [Meta Horizon Worlds Audio Ingestion](https://developers.meta.com/horizon-worlds/learn/documentation/sounds-physics-and-automation/horizon-worlds-audio-ingestion).

## Set up audio assets

In the example world, all audio assets are imported into the world and retained as entities.

**Note**: You can stream in audio if preferred. However, for a smaller world with fewer audio assets, it may be best to add them as entities into the world to avoid the potential overhead of loading from storage.

**Locations in the world**:

Audio assets are co-located for easy access.

* In the hierarchy, an NPC’s voice-over assets are stored beneath the NPC entity.
* In the world, the audio assets for an NPC’s voice-over is stored next to the spawn point for each avatar.

**Tip**: To select and playback any audio asset, locate it in the hierarchy.

## Organize audio assets

In the hierarchy, locate the `SoundBank` entity. Attached to this entity is the `NPCAudioPlayback.ts` script.

The `NPCAudioPlayback.ts` contains a lengthy set of script properties, most of which correspond to specific audio entities. These assets are typically named as follows:

```
<ID><event><Num>
```

Where:

* `<ID>` = character identifier: `VE` or `TM`
* `<event>` = gameplay event like `Intro`
* `<Num>` = index number of the sound entity.

For a particular character-event combination, there may be 1 or more sound entities, from which the code can select. For example, when the player collects all of the gems in the world, the Village Elder may say one of the following lines:

* “Oh, thank you! The Village is happy again. Please accept this gift of a few coins.”
* “Our gems have been returned. Many thanks, kind stranger!”
* “You have done us a great favor. In thanks, we offer you this gold.”

In TypeScript, this selection process and playback is managed through the `NPCAudioPlayback.ts` script, where the script properties corresponding to each voice-over asset are grouped into arrays of AudioGizmo objects:

```
this.VEWelcome = [ this.props.VEWelcome01, this.props.VEWelcome02, this.props.VEWelcome03 ].map((e) => e?.as(hz.AudioGizmo));
this.VEThanks = [ this.props.VEThanks01, this.props.VEThanks02, this.props.VEThanks03 ].map((e) => e?.as(hz.AudioGizmo));
```

When one of the states corresponding to these audio elements has been achieved in the game, other scripts can invoke the playback of these assets through calls to the following public functions:

```
public playVEIntro() { this.PlayRandomAudio(this.VEIntro) ; }
public playVEWelcome() { this.PlayRandomAudio(this.VEWelcome) ; }
```

These functions pass their corresponding array of sounds into the `PlayRandomAudio` function, which randomly selects one of the array elements for playback.

```
private PlayRandomAudio(from : (hz.AudioGizmo|undefined)[]): void {
  let index: number = Math.floor(Math.random() * from.length);
  from[index]?.play();
}
```

## Invoke voice-over

Based on states that are achieved for each NPC in `NPCManager.ts`, playback of the corresponding set of voice-over is invoked.

In `NPCManager.ts`, the following statements import the audio class (`NPCAudioPlayback`) and define `this.audio` to reference the `NPCAudioPlayback` components that are stored under the `SoundBank` entity. These components are the references to the sound assets.

```
import { NPCAudioPlayback } from 'NPCAudioPlayback';

public audio? : NPCAudioPlayback;

this.audio = this.props.audioBank?.getComponents<NPCAudioPlayback>()[0];
```

Based on the above declarations, the following code invokes playback of the `playVEIntro` set of assets:

```
this.audio?.playVEIntro();  // Get some attention and then start the game
```

## A note about sound effects

Through the desktop editor, you can add sound effects in multiple ways:

- In the menubar, select **Build menu > Sounds**. Search and explore assets. Drag in an asset into the world. In the Properties panel, click **Play** to preview the asset.
- Use the desktop editor’s integrated Generative AI tools. In the menubar, click **GenAI**.

![Image of GenAI panel in desktop editor](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/488258850_686408213897133_9130477228299144595_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=e2NecmftzE8Q7kNvwG3puXs&_nc_oc=AdlS7DDP-jHQImJNPPd3mN5sUcVYmTQpOiN5ffifHGdaJ0altJXRZVPcaD5zgW87_rc&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=1hO5bkp_P7jE4dQGrUjL3A&oh=00_AfiwGXo7UNiSCn4geIJy0NC3Sv1f-Ns4Y-bZvX4Wlan-Ew&oe=6930AAD6)

**Note**: At this time, this feature is in Beta release.

Several of the sound effects used in this world were generated using the GenAI tools. Below, you can see the entity names in the world and the search strings used to generate them:

| Entity Name | GenAI prompt |
| --- | --- |
| `[Audio Graph] Rooster makes loud noises` | `rooster crows` |
| `[Audio Graph] Trumpet plays loudly` | `trumpet reveille` |
| `[Audio Graph] CollectAGem` | `marbles` |
| `[Audio Graph] Large explosion occurs` | `explosion` |

For more information on Generative AI tools in the desktop editor:

* [Code Creation Tool](/hw-docs/Desktop%20editor/Generative%20AI%20tools/Generative%20AI%20Assistant%20Tool.md)
* [Audio Creation Tool](/hw-docs/Desktop%20editor/Generative%20AI%20tools/Generative%20AI%20Creation%20Audio%20Tool.md)
* [Texture Creation Tool](/hw-docs/Desktop%20editor/Generative%20AI%20tools/Generative%20AI%20Texture%20Generation%20Tool.md)