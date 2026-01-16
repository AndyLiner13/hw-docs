Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_aimassistoptions

# AimAssistOptions type

The available options for enabling Aim Assist with the [Player.setAimAssistTarget()](../Classes/Player.md#setaimassisttarget) method.

## Signature

```
export declare type AimAssistOptions = {
    assistanceStrength?: number;
    targetSize?: number;
    noInputGracePeriod?: number;
};
```

## Remarks

assistanceStrength - The intensity of the pulling force towards the Aim Assist target, in degrees of camera rotation per second. The default value is 10.
targetSize - The size of the target used to determine whether the assistance forces apply, in meters. A bigger target causes the assistance to apply when the aiming reticle (center of the screen) is farther away from the center of the target. The default value is 4.
noInputGracePeriod - The duration in seconds after which the aim assistance stops being applied when no input is received. 0 = infinite. The default value is 1.