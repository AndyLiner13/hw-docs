Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_audiooptions

API reference

# AudioOptions type

Provides [AudioGizmo](/hw-docs/Reference/core/Classes/AudioGizmo.md) playback options for a set of players.

## Signature

```
export declare type AudioOptions = {
    fade: number;
    players?: Array<Player>;
    audibilityMode?: AudibilityMode;
};
```

## References

[Player](/hw-docs/Reference/core/Classes/Player.md), [AudibilityMode](/hw-docs/Reference/core/Enumerations/AudibilityMode.md)

## Remarks

fade - The duration, in seconds, that it takes for the audio to fade in or fade out.
players - Only plays the audio for the specified players.
audibilityMode - Indicates whether the audio is audible to the specified players. See [AudibilityMode](/hw-docs/Reference/core/Enumerations/AudibilityMode.md) for more information.