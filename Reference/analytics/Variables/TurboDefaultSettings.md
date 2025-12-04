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
[debug](/hw-mcp-tools/documentation/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md#debug) `false`
[experiments](/hw-mcp-tools/documentation/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md#experiments) `new Set<string>()`
[frictionNoKOsTimerSeconds](/hw-mcp-tools/documentation/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md#frictionnokostimerseconds) `120.0`
[gameMode](/hw-mcp-tools/documentation/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md#gamemode) - game mode is empty
[heartbeatFrequencySeconds](/hw-mcp-tools/documentation/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md#heartbeatfrequencyseconds) `120`
[maxAFKSecondsBeforeRemove](/hw-mcp-tools/documentation/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md#maxafksecondsbeforeremove) `180`
[maxFrictionNoKOEvents](/hw-mcp-tools/documentation/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md#maxfrictionnokoevents) `30`
[playerInitialArea](/hw-mcp-tools/documentation/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md#playerinitialarea) `lobby_world_enter`
[playerInitialState](/hw-mcp-tools/documentation/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md#playerinitialstate) `ParticipationEnum.IN_LOBBY`
[turboUpdateSeconds](/hw-mcp-tools/documentation/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md#turboupdateseconds) `1.0`
These settings are set to true by default, which enables the associated Turbo actions:
[useAFK](/hw-mcp-tools/documentation/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md#useafk)
[useDiscovery](/hw-mcp-tools/documentation/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md#usediscovery)
[useFriction](/hw-mcp-tools/documentation/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md#usefriction)
[useGameMode](/hw-mcp-tools/documentation/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md#usegamemode)
[useHeartbeats](/hw-mcp-tools/documentation/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md#useheartbeats)
[useLevelUp](/hw-mcp-tools/documentation/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md#uselevelup)
[useQuests](/hw-mcp-tools/documentation/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md#usequests)
[useRewards](/hw-mcp-tools/documentation/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md#userewards)
These settings are set to false by default, which disables the associated Turbo actions:
[eventsForWearableEquipAndRelease](/hw-mcp-tools/documentation/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md#eventsforwearableequipandrelease)
[useAbilities](/hw-mcp-tools/documentation/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md#useabilities)
[useArmor](/hw-mcp-tools/documentation/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md#usearmor)
[useDamage](/hw-mcp-tools/documentation/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md#usedamage)
[useForward](/hw-mcp-tools/documentation/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md#useforward)
[useFrictionNoKOs](/hw-mcp-tools/documentation/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md#usefrictionnokos)
[useRotation](/hw-mcp-tools/documentation/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md#userotation)
[useRounds](/hw-mcp-tools/documentation/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md#userounds)
[useSections](/hw-mcp-tools/documentation/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md#usesections)
[useStages](/hw-mcp-tools/documentation/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md#usestages)
[useTasks](/hw-mcp-tools/documentation/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md#usetasks)
[useTeamAndRole](/hw-mcp-tools/documentation/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md#useteamandrole)
[useTransforms](/hw-mcp-tools/documentation/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md#usetransforms)
[useWeaponEquip](/hw-mcp-tools/documentation/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md#useweaponequip)
[useWeaponGrabAndRelease](/hw-mcp-tools/documentation/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md#useweapongrabandrelease)
[useWeapons](/hw-mcp-tools/documentation/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md#useweapons)
[useWearableEquipAndRelease](/hw-mcp-tools/documentation/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md#usewearableequipandrelease)
[useWearables](/hw-mcp-tools/documentation/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md#usewearables)

## Examples

This example sets the Turbo settings to the default settings.

```
Turbo.register(this, TurboDefaultSettings);
```