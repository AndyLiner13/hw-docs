Source: https://developers.meta.com/horizon-worlds/learn/documentation/typescript/api-references-and-examples/audio-apis

# Audio APIs

The `AudioGizmo` class enables creators to use TypeScript to add music and sound effects to their worlds. The **AudioGizmo** API provides control of the gizmo’s audio playback, volume, and pitch settings. This enables you to programmatically enhance your world’s audio capabilities.

## Audio playback APIs

The **AudioGizmo** class includes mathods that play, pause, and stop audio playback. Each method can provide an `AudioOptions` object that configures fade-in and fade-out timing and a list of users to deliver the audio to.

Here’s an example that demonstrates how to configure, play, pause, and stop audio playback.

```
const soundGizmo = this.props.sfx.as(AudioGizmo);
soundGizmo.play(); // Plays for all players immediately.

var pauseOptions: AudioOptions = {fade: 1};
soundGizmo.pause(pauseOptions); // Pauses for all players after fading out for 1 second.

soundGizmo.play();
var stopOptions: AudioOptions = {fade: 0.2, players: [this.props.mainPlayer]};
soundGizmo.stop(stopOptions); // Stops the audio for the specified player after 0.2 seconds.
```

## Audio volume and pitch APIs

The `AudioGizmo` class also includes the `volume` and `pitch` properties.

Here’s an example that demonstrates how to set the volume and pitch for audio playback.

```
const soundGizmo = this.props.sfx.as(AudioGizmo);
const volOptions: AudioOptions = {fade: 0.5};
soundGizmo.volume.set(0.8, volOptions);
soundGizmo.pitch.set(12);
```

## Audio clip completion APIs

If you have actions to perform when playback of an audio source completes, you can listen for the `OnAudioCompleted` CodeBlockEvent in your TypeScript code. For full details on listening for CodeBlockEvents, see the [Built-In CodeBlock Events section](/hw-docs/Scripting/Events/CodeBlock%20Events.md#built-in-codeblock-events).

This examples demonstrates how to trigger the [CodeBlockEvents.OnAudioCompleted](/hw-docs/Reference/core/Variables/CodeBlockEvents.md) event.

```
this.connectCodeBlockEvent(
  this.entity, // Make sure this Entity is an AudioGizmo.
  () => {
    // Perform an action upon completion of the audio clip.
  });
```