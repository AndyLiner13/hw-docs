# AimAssistOptions type

The available options for enabling Aim Assist with the [Player.setAimAssistTarget()](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_player#setaimassisttarget) method.

## Signature

```typescript
export declare type AimAssistOptions = {
    assistanceStrength?: number;
    targetSize?: number;
    noInputGracePeriod?: number;
};
```

## References

[Player.setAimAssistTarget()](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_player#setaimassisttarget)

## Remarks

- `assistanceStrength` - The intensity of the pulling force towards the Aim Assist target, in degrees of camera rotation per second. The default value is 10.
- `targetSize` - The size of the target used to determine whether the assistance forces apply, in meters. A bigger target causes the assistance to apply when the aiming reticle (center of the screen) is farther away from the center of the target. The default value is 4.
- `noInputGracePeriod` - The duration in seconds after which the aim assistance stops being applied when no input is received. 0 = infinite. The default value is 1.