# HapticStrength Enum

The strength of a haptic pulse.

## Signature

```typescript
export declare enum HapticStrength
```

## Enumeration Members

| Member | Value | Description |
|---------|--------|-------------|
| Light | 1 | The player is touching the controller and should fire a light haptic. |
| Medium | 2 | The player is touching the controller and should fire a medium haptic. |
| Strong | 3 | The player is touching the controller and should fire a strong haptic. |
| VeryLight | 0 | The player is not touching the controller, so no haptic pulse will be fired. |

## Examples

### Using Different Haptic Strength Levels

```typescript
// Very light haptic for subtle feedback
player.sendHaptic(HapticStrength.VeryLight, HapticSharpness.Soft);

// Light haptic for gentle interactions
player.sendHaptic(HapticStrength.Light, HapticSharpness.Sharp);

// Medium haptic for standard feedback
player.sendHaptic(HapticStrength.Medium, HapticSharpness.Coarse);

// Strong haptic for important notifications
player.sendHaptic(HapticStrength.Strong, HapticSharpness.Sharp);

// Progressive haptic feedback
function escalateHapticFeedback(intensity: number) {
    if (intensity < 0.25) {
        player.sendHaptic(HapticStrength.VeryLight, HapticSharpness.Soft);
    } else if (intensity < 0.5) {
        player.sendHaptic(HapticStrength.Light, HapticSharpness.Soft);
    } else if (intensity < 0.75) {
        player.sendHaptic(HapticStrength.Medium, HapticSharpness.Coarse);
    } else {
        player.sendHaptic(HapticStrength.Strong, HapticSharpness.Sharp);
    }
}
```