Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_turbodefaultsettings

# TurboDefaultSettings Variable

The default [settings](/hw-mcp-tools/documentation/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md) for a [Turbo](/hw-mcp-tools/documentation/hw-docs/Reference/analytics/Variables/Turbo.md) instance, including the initial Turbo events and data to collect.

## Signature

```
TurboDefaultSettings: ITurboSettings
```

## Remarks

To use these settings, pass this value to `Turbo.register(component, configs)` method. For more information, see the [Turbo](/hw-mcp-tools/documentation/hw-docs/Reference/analytics/Variables/Turbo.md) variable.
Default settings:
[debug](/hw-mcp-tools/documentation/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md) `false`
[experiments](/hw-mcp-tools/documentation/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md) `new Set<string>()`
[frictionNoKOsTimerSeconds](/hw-mcp-tools/documentation/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md) `120.0`
[gameMode](/hw-mcp-tools/documentation/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md) - game mode is empty
[heartbeatFrequencySeconds](/hw-mcp-tools/documentation/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md) `120`
[maxAFKSecondsBeforeRemove](/hw-mcp-tools/documentation/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md) `180`
[maxFrictionNoKOEvents](/hw-mcp-tools/documentation/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md) `30`
[playerInitialArea](/hw-mcp-tools/documentation/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md) `lobby_world_enter`
[playerInitialState](/hw-mcp-tools/documentation/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md) `ParticipationEnum.IN_LOBBY`
[turboUpdateSeconds](/hw-mcp-tools/documentation/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md) `1.0`
These settings are set to true by default, which enables the associated Turbo actions:
[useAFK](/hw-mcp-tools/documentation/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md)
[useDiscovery](/hw-mcp-tools/documentation/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md)
[useFriction](/hw-mcp-tools/documentation/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md)
[useGameMode](/hw-mcp-tools/documentation/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md)
[useHeartbeats](/hw-mcp-tools/documentation/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md)
[useLevelUp](/hw-mcp-tools/documentation/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md)
[useQuests](/hw-mcp-tools/documentation/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md)
[useRewards](/hw-mcp-tools/documentation/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md)
These settings are set to false by default, which disables the associated Turbo actions:
[eventsForWearableEquipAndRelease](/hw-mcp-tools/documentation/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md)
[useAbilities](/hw-mcp-tools/documentation/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md)
[useArmor](/hw-mcp-tools/documentation/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md)
[useDamage](/hw-mcp-tools/documentation/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md)
[useForward](/hw-mcp-tools/documentation/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md)
[useFrictionNoKOs](/hw-mcp-tools/documentation/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md)
[useRotation](/hw-mcp-tools/documentation/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md)
[useRounds](/hw-mcp-tools/documentation/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md)
[useSections](/hw-mcp-tools/documentation/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md)
[useStages](/hw-mcp-tools/documentation/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md)
[useTasks](/hw-mcp-tools/documentation/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md)
[useTeamAndRole](/hw-mcp-tools/documentation/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md)
[useTransforms](/hw-mcp-tools/documentation/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md)
[useWeaponEquip](/hw-mcp-tools/documentation/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md)
[useWeaponGrabAndRelease](/hw-mcp-tools/documentation/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md)
[useWeapons](/hw-mcp-tools/documentation/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md)
[useWearableEquipAndRelease](/hw-mcp-tools/documentation/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md)
[useWearables](/hw-mcp-tools/documentation/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md)

## Examples

This example sets the Turbo settings to the default settings.

```
Turbo.register(this, TurboDefaultSettings);
```