# VoipSettingValues Variable

The VoIP (Voice over Internet Protocol) settings for the player.

## Signature

```typescript
VoipSettingValues: {
    readonly Default: "Default";
    readonly Global: "Global";
    readonly Nearby: "Nearby";
    readonly Extended: "Extended";
    readonly Whisper: "Whisper";
    readonly Mute: "Mute";
    readonly Environment: "Environment";
}
```

## Remarks

- **Default**: Players can hear normally.
- **Global**: All players can hear.
- **Nearby**: Only nearby players can hear.
- **Extended**: Players who are further away than normal can hear.
- **Whisper**: Only players next to the current player (closer than nearby) can hear.
- **Mute**: Only the current player can hear.
- **Environment**: The default VoIP settings for the world.