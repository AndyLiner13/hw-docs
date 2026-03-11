---
source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_audiogizmo
---

# [AudioGizmo Class](#audiogizmo-class)

Extends *[Entity](Entity.md)*

Represents an audio gizmo you can use to add music and sound effects to a world and control audio settings.

## [Signature](#signature)

```ts
export declare class AudioGizmo extends Entity 
```

## [Examples](#examples)

```ts
const soundGizmo = this.props.sfx.as(AudioGizmo);
// Plays audio for all players immediately.
soundGizmo.play();

// Pauses audio for all players after fading out for 1 second.
var pauseOptions: AudioOptions = {fade: 1};
soundGizmo.pause(pauseOptions);

// Stops the audio for the specified player after 0.2 seconds.
soundGizmo.play();
var stopOptions: AudioOptions = {fade: 0.2, players: [this.props.mainPlayer]};
soundGizmo.stop(stopOptions);
```

## [Remarks](#remarks)

If you have actions to perform after playback of an audio source completes, you can listen for the `OnAudioCompleted` [CodeBlockEvent](../Variables/CodeBlockEvents.md).

## [Properties](#properties)

### [pitch](#pitch)

The audio pitch in semitones, which ranges from -24 to 24. Overrides the pitch level set on the Audio gizmo's Object Property Panel.

**Signature**

```ts
pitch: WritableHorizonProperty<number>;
```

**Examples**

```ts
const soundGizmo = this.props.sfx.as(AudioGizmo);
const volOptions: AudioOptions = {fade: 0.5};
soundGizmo.volume.set(0.8, volOptions);
soundGizmo.pitch.set(12);
```

**Remarks**

When configuring the pitch of an Audio gizmo, the following pitch and speed calculations apply:12 semitones = 1 octave.An increase in 1 octave makes the audio 2x as fast.A decrease in 1 octave makes the audio 1/2 as fast.

### [volume](#volume)

The audio volume of the gizmo, which ranges from 0 (no sound) to 1 (full volume). Decimal fractions are allowed (for example, 0.3). Overrides the volume level set on the Property panel of the Audio gizmo.

**Signature**

```ts
volume: WritableHorizonProperty<number, AudioOptions>;
```

## [Methods](#methods)

### [pause(audioOptions)](#pauseaudiooptions)

Pauses an AudioGizmo sound.

**Signature**

```ts
pause(audioOptions?: AudioOptions): void;
```

**Parameters**

audioOptions: [AudioOptions](../Type%20Aliases/AudioOptions.md)

*(Optional)* Controls how the audio is paused.

**Returns**

void

**Examples**

```ts
const soundGizmo = this.props.sfx.as(hz.AudioGizmo);
const audioOptions: AudioOptions = {fade: 1, players: [player1, player2]};
soundGizmo.pause(audioOptions);
```

### [play(audioOptions)](#playaudiooptions)

Plays an AudioGizmo sound.

**Signature**

```ts
play(audioOptions?: AudioOptions): void;
```

**Parameters**

audioOptions: [AudioOptions](../Type%20Aliases/AudioOptions.md)

*(Optional)* Controls how the audio is played.

**Returns**

void

**Examples**

```ts
const soundGizmo = this.props.sfx.as(hz.AudioGizmo);
const audioOptions: AudioOptions = {fade: 1, players: [player1, player2]};
soundGizmo.play(audioOptions);
```

### [stop(audioOptions)](#stopaudiooptions)

Stops an AudioGizmo sound.

**Signature**

```ts
stop(audioOptions?: AudioOptions): void;
```

**Parameters**

audioOptions: [AudioOptions](../Type%20Aliases/AudioOptions.md)

*(Optional)* Controls how the audio is played.

**Returns**

void

**Examples**

```ts
const soundGizmo = this.props.sfx.as(hz.AudioGizmo);
const audioOptions: AudioOptions = {fade: 1, players: [player1, player2]};
soundGizmo.stop(audioOptions);
```

### [toString()](#tostring)

Creates a human-readable representation of the audio gizmo.

**Signature**

```ts
toString(): string;
```

**Returns**

string

A string representation of the audio gizmo.

