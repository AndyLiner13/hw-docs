# HapticSharpness Enum

The sharpness of the haptic pulse.

## Signature

```typescript
export declare enum HapticSharpness
```

## Enumeration Members

| Member | Value | Description |
|---------|--------|-------------|
| Coarse | 1 | The pulse is medium. |
| Sharp | 0 | The pulse is sharp. |
| Soft | 2 | The pulse is soft. |

## Examples

### Using Different Haptic Sharpness Levels

```typescript
// Sharp haptic for precise feedback
player.sendHaptic(HapticStrength.Medium, HapticSharpness.Sharp);

// Soft haptic for gentle feedback
player.sendHaptic(HapticStrength.Light, HapticSharpness.Soft);

// Medium coarse haptic for general feedback
player.sendHaptic(HapticStrength.Medium, HapticSharpness.Coarse);

// Function to provide contextual haptic feedback
function provideHapticFeedback(action: string) {
    switch (action) {
        case "button_press":
            player.sendHaptic(HapticStrength.Light, HapticSharpness.Sharp);
            break;
        case "object_touch":
            player.sendHaptic(HapticStrength.VeryLight, HapticSharpness.Soft);
            break;
        case "collision":
            player.sendHaptic(HapticStrength.Strong, HapticSharpness.Coarse);
            break;
    }
}
```