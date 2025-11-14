Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_turbodefaultsettings

# TurboDefaultSettings Variable

The default [settings](/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md) for a [Turbo](/hw-docs/Reference/analytics/Variables/Turbo.md) instance, including the initial Turbo events and data to collect.

## Signature

```
TurboDefaultSettings: ITurboSettings
```

## Remarks

To use these settings, pass this value to `Turbo.register(component, configs)` method. For more information, see the [Turbo](/hw-docs/Reference/analytics/Variables/Turbo.md) variable.
Default settings:
[debug](/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md) `false`
[experiments](/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md) `new Set<string>()`
[frictionNoKOsTimerSeconds](/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md) `120.0`
[gameMode](/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md) - game mode is empty
[heartbeatFrequencySeconds](/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md) `120`
[maxAFKSecondsBeforeRemove](/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md) `180`
[maxFrictionNoKOEvents](/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md) `30`
[playerInitialArea](/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md) `lobby_world_enter`
[playerInitialState](/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md) `ParticipationEnum.IN_LOBBY`
[turboUpdateSeconds](/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md) `1.0`
These settings are set to true by default, which enables the associated Turbo actions:
[useAFK](/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md)
[useDiscovery](/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md)
[useFriction](/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md)
[useGameMode](/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md)
[useHeartbeats](/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md)
[useLevelUp](/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md)
[useQuests](/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md)
[useRewards](/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md)
These settings are set to false by default, which disables the associated Turbo actions:
[eventsForWearableEquipAndRelease](/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md)
[useAbilities](/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md)
[useArmor](/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md)
[useDamage](/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md)
[useForward](/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md)
[useFrictionNoKOs](/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md)
[useRotation](/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md)
[useRounds](/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md)
[useSections](/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md)
[useStages](/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md)
[useTasks](/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md)
[useTeamAndRole](/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md)
[useTransforms](/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md)
[useWeaponEquip](/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md)
[useWeaponGrabAndRelease](/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md)
[useWeapons](/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md)
[useWearableEquipAndRelease](/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md)
[useWearables](/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md)

## Examples

This example sets the Turbo settings to the default settings.

```
Turbo.register(this, TurboDefaultSettings);
```