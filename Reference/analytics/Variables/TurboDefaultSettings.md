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
[debug](/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md#debug) `false`
[experiments](/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md#experiments) `new Set<string>()`
[frictionNoKOsTimerSeconds](/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md#frictionnokostimerseconds) `120.0`
[gameMode](/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md#gamemode) - game mode is empty
[heartbeatFrequencySeconds](/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md#heartbeatfrequencyseconds) `120`
[maxAFKSecondsBeforeRemove](/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md#maxafksecondsbeforeremove) `180`
[maxFrictionNoKOEvents](/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md#maxfrictionnokoevents) `30`
[playerInitialArea](/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md#playerinitialarea) `lobby_world_enter`
[playerInitialState](/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md#playerinitialstate) `ParticipationEnum.IN_LOBBY`
[turboUpdateSeconds](/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md#turboupdateseconds) `1.0`
These settings are set to true by default, which enables the associated Turbo actions:
[useAFK](/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md#useafk)
[useDiscovery](/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md#usediscovery)
[useFriction](/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md#usefriction)
[useGameMode](/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md#usegamemode)
[useHeartbeats](/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md#useheartbeats)
[useLevelUp](/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md#uselevelup)
[useQuests](/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md#usequests)
[useRewards](/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md#userewards)
These settings are set to false by default, which disables the associated Turbo actions:
[eventsForWearableEquipAndRelease](/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md#eventsforwearableequipandrelease)
[useAbilities](/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md#useabilities)
[useArmor](/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md#usearmor)
[useDamage](/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md#usedamage)
[useForward](/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md#useforward)
[useFrictionNoKOs](/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md#usefrictionnokos)
[useRotation](/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md#userotation)
[useRounds](/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md#userounds)
[useSections](/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md#usesections)
[useStages](/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md#usestages)
[useTasks](/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md#usetasks)
[useTeamAndRole](/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md#useteamandrole)
[useTransforms](/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md#usetransforms)
[useWeaponEquip](/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md#useweaponequip)
[useWeaponGrabAndRelease](/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md#useweapongrabandrelease)
[useWeapons](/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md#useweapons)
[useWearableEquipAndRelease](/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md#usewearableequipandrelease)
[useWearables](/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md#usewearables)

## Examples

This example sets the Turbo settings to the default settings.

```
Turbo.register(this, TurboDefaultSettings);
```