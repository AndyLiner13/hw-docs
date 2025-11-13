Source: https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/npcs/npc-gizmo/npc-animations

# NPCs Animation

This guide covers essential animation APIs for NPCs in Horizon Worlds. Focus on these core systems to bring your NPCs to life with personality and responsive behavior.

**Note: \*\*The `NpcPlayer` API and all animation features described in this guide and are only available when the NPC’s \*\*Body type** is set to **Horizon Avatar**. If the body type is set to none, or using a UAB NPC, these APIs are not supported.

To begin using these features:

- Select the **NPC** icon from the toolbar and drag an NPC into your world scene.
- Set your NPC’s **Body Type** to **Horizon Avatar**.

`NpcPlayer` will then be available via `npc.tryGetPlayer()`.

## Core Animation Systems

The Horizon NPC system provides three main animation capabilities for Horizon Avatar NPCs:

* **Emotes** - Pre-built expressive animation with particle effect and sounds
* **Look-At Control** - Dynamic eye and head tracking for natural interactions
* **Viseme Events** - Automatic mouth shape animation during speech

### Emotes

Emotes can add personality and emotional expression to NPCs.

Available Emotes include:

`enum EmoteName` {
`HeartHands` = 0, // Love/appreciation gesture
`Like`, // Thumbs up approval
`Laugh`, // Animated laughter
`Wave`, // Greeting or goodbye
`Dislike`, // Thumbs down disapproval
`Cheer`, // Victory celebration
}

### Basic Emote Implementation

The following sample demonstrate a basic implementation of emotes for a Horizon Avatar NPC:

```
import * as hz from 'horizon/core';
import {Npc, NpcPlayer, EmoteName} from 'horizon/npc';

class NPCEmoteExample extends hz.Component<typeof NPCEmoteExample> {
 static propsDefinition = {
   npcEntity: {type: hz.PropTypes.Entity},
 };

 private npcPlayer: NpcPlayer | undefined;

 async start() {
   const npc = this.props.npcEntity?.as(Npc);
   if (npc) {
     this.npcPlayer = await npc.tryGetPlayer();
   }
 }

 // Play a specific emote
 async playEmote(emote: EmoteName): Promise<boolean> {
   if (!this.npcPlayer) return false;

   try {
     const success = await this.npcPlayer.playEmote(emote);
     console.log(`Emote ${EmoteName[emote]} played: ${success}`);
     return success;
   } catch (error) {
     console.error('Failed to play emote:', error);
     return false;
   }
 }

 // Example: Greet a player
 async greetPlayer() {
   return await this.playEmote(EmoteName.Wave);
 }

 // Example: Show approval
 async showApproval() {
   return await this.playEmote(EmoteName.Like);
 }

 // Example: Celebrate success
 async celebrate() {
   return await this.playEmote(EmoteName.Cheer);
 }
}

hz.Component.register(NPCEmoteExample);
```

**What this sample does:**

* Gets the `NpcPlayer` from a Horizon Avatar NPC and provides methods to play specific emotes
* Uses `await` with `playEmote()` to ensure the animation completes before continuing execution
* Includes error handling to prevent crashes when emote playback fails

### Basic Look-At Setup

The following sample demonstrates a basic implementation of a look-at setup

```
import * as hz from 'horizon/core';
import {Npc, NpcPlayer, NpcAttentionTarget} from 'horizon/npc';

class NPCLookAtExample extends hz.Component<typeof NPCLookAtExample> {
 static propsDefinition = {
   npcEntity: {type: hz.PropTypes.Entity},
 };

 private npcPlayer: NpcPlayer | undefined;

 async start() {
   const npc = this.props.npcEntity?.as(Npc);
   if (npc) {
     this.npcPlayer = await npc.tryGetPlayer();
   }
 }

 // Look at a specific position
 setLookAtPosition(target: hz.Vec3) {
   if (this.npcPlayer) {
     this.npcPlayer.setLookAtTarget(target);
   }
 }

 // Clear look target (look forward)
 clearLookAt() {
   if (this.npcPlayer) {
     this.npcPlayer.clearLookAtTarget();
   }
 }

 // Add attention targets (players/entities NPC can look at)
 addAttentionTarget(target: hz.Player | hz.Entity) {
   if (this.npcPlayer) {
     this.npcPlayer.addAttentionTarget(target);
   }
 }

 // Remove attention target
 removeAttentionTarget(target: hz.Player | hz.Entity) {
   if (this.npcPlayer) {
     this.npcPlayer.removeAttentionTarget(target);
   }
 }

 // Example: Look at player during conversation
 focusOnPlayer(player: hz.Player) {
   const playerPosition = player.position.get();
   this.setLookAtPosition(playerPosition);
 }

 // Example: Look at object of interest
 examineObject(object: hz.Entity) {
   const objectPosition = object.position.get();
   this.setLookAtPosition(objectPosition);
 }
}

hz.Component.register(NPCLookAtExample);
```

**What this sample does:**

* Controls where the NPC looks using `setLookAtTarget()` for specific positions or `addAttentionTarget()` for dynamic targets
* Manages the attention system that lets NPCs automatically look at nearby players or objects of interest
* Provides methods to clear look targets and clean up attention when interactions end

### Basic Viseme Event Implementation

The following sample demonstrates a basic implementation of visemes for automatic lip-sync when Horizon Avatar NPCs speak.

```
import * as hz from 'horizon/core';
import {Npc, NpcEvents, Viseme} from 'horizon/npc';

class NPCVisemeExample extends hz.Component<typeof NPCVisemeExample> {
 static propsDefinition = {
   npcEntity: {type: hz.PropTypes.Entity},
   debugVisemes: {type: hz.PropTypes.Boolean},
 };

 start() {
   const npc = this.props.npcEntity?.as(Npc);
   if (npc) {
     this.connectNetworkEvent(
       npc,
       NpcEvents.OnNpcVisemeChanged,
       this.handleViseme.bind(this),
     );
   }
 }

 private handleViseme(eventData: {viseme: Viseme}) {
   if (this.props.debugVisemes) {
     console.log(`NPC viseme: ${Viseme[eventData.viseme]}`);
   }

   // Custom logic based on speech sounds
   switch (eventData.viseme) {
     case Viseme.sil:
       // Mouth closed - speech pause
       this.onSpeechPause();
       break;
     case Viseme.aa:
     case Viseme.oh:
       // Wide mouth sounds - dramatic speech
       this.onEmphasisSound();
       break;
     default:
       // Other speech sounds
       this.onNormalSpeech();
       break;
   }
 }

 private onSpeechPause() {
   // NPC is not speaking - good time for gestures
   console.log('Speech pause detected');
 }

 private onEmphasisSound() {
   // Dramatic speech detected
   console.log('Emphasis in speech');
 }

 private onNormalSpeech() {
   // Regular speech continuing
 }
}

hz.Component.register(NPCVisemeExample);
```

**What this sample does:**

* Listens for the automatic viseme events when NPCs speak and reacts to different mouth shapes
* Detects speech patterns like pauses (`Viseme.sil`) and emphasis sounds for triggering additional animations
* Provides debugging output to help understand speech timing and animation opportunities