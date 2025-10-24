# AudibilityMode Enum

Determines whether sound from an [AudioGizmo](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_audiogizmo) is audible to specific players.

## Signature

```typescript
export declare enum AudibilityMode
```

## Enumeration Members

| Member | Value | Description |
|---------|--------|-------------|
| AudibleTo | 0 | The sound is audible. |
| InaudibleTo | 1 | The sound is inaudible. |

## References

- [AudioGizmo](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_audiogizmo) - The gizmo that uses this enumeration for sound audibility

## Examples

### Setting Audio Audibility

```typescript
// Example usage with AudioGizmo
audioGizmo.setAudibilityForPlayers(players, AudibilityMode.AudibleTo);
audioGizmo.setAudibilityForPlayers(otherPlayers, AudibilityMode.InaudibleTo);
```