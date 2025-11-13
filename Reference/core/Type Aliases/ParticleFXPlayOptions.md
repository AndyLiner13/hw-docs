Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_particlefxplayoptions

# ParticleFXPlayOptions type

The settings for [playing](/hw-docs/Reference/core/Classes/ParticleGizmo.md#play) a particle effect.

## Signature

```
export declare type ParticleFXPlayOptions = {
    fromStart?: boolean;
    oneShot?: boolean;
    players?: Array<Player>;
};
```

## References

[Player](/hw-docs/Reference/core/Classes/Player.md)

## Remarks

`fromStart` - true to play the effect from the beginning even if already playing. Otherwise, the effect doesn't play if already playing.
`players` - The array of players to apply the change to.
`oneShot` - If true, the effect emits a new particle that plays until its full duration completes. This does not interfere with other play interactions.