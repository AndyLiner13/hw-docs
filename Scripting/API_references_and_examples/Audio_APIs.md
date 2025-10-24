# Audio APIs

## Audio playback APIs

 The AudioGizmo class includes mathods that play, pause, and stop audio playback. Each method
can provide an `AudioOptions` object that configures fade-in and fade-out timing and a list of users to
deliver the audio to. Here’s an example that demonstrates how to configure, play, pause, and stop
audio playback.  
```
const soundGizmo = this.props.sfx.as(AudioGizmo);
soundGizmo.play(); // Plays for all players immediately.

var pauseOptions: AudioOptions = {fade: 1};
soundGizmo.pause(pauseOptions); // Pauses for all players after fading out for 1 second.

soundGizmo.play();
var stopOptions: AudioOptions = {fade: 0.2, players: [this.props.mainPlayer]};
soundGizmo.stop(stopOptions); // Stops the audio for the specified player after 0.2 seconds.
```
  
## Audio volume and pitch APIs

 The `AudioGizmo` class also includes the `volume` and `pitch` properties. Here’s an example that demonstrates how to set the volume and pitch for audio
playback.  
```
const soundGizmo = this.props.sfx.as(AudioGizmo);
const volOptions: AudioOptions = {fade: 0.5};
soundGizmo.volume.set(0.8, volOptions);
soundGizmo.pitch.set(12);
```
  
## Audio clip completion APIs

 If you have actions to perform when playback of an audio source completes, you
can listen for the `OnAudioCompleted` CodeBlockEvent in your TypeScript code. For full details on listening for
CodeBlockEvents, see the [Built-In CodeBlock Events section](https://developers.meta.com/horizon-worlds/learn/documentation/typescript/events/codeblock-events#built-in-codeblock-events). This examples demonstrates how to trigger the [CodeBlockEvents.OnAudioCompleted](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_codeblockevents) event.  
```
this.connectCodeBlockEvent(
  this.entity, // Make sure this Entity is an AudioGizmo.
  () => {
    // Perform an action upon completion of the audio clip.
  });
```
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
