# AudioOptions type

Provides [AudioGizmo](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_audiogizmo) playback options for a set of players.

## Signature

```typescript
export declare type AudioOptions = {
    fade: number;
    players?: Array<Player>;
    audibilityMode?: AudibilityMode;
};
```

## References

[Player](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_player), [AudibilityMode](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_audibilitymode)

## Remarks

- `fade` - The duration, in seconds, that it takes for the audio to fade in or fade out.
- `players` - Only plays the audio for the specified players.
- `audibilityMode` - Indicates whether the audio is audible to the specified players. See [AudibilityMode](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_audibilitymode) for more information.