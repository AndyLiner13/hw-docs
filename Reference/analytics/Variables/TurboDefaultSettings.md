Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_turbodefaultsettings

# TurboDefaultSettings Variable

The default [settings](../Interfaces/ITurboSettings.md) for a [Turbo](Turbo.md) instance, including the initial Turbo events and data to collect.

## Signature

```
TurboDefaultSettings: ITurboSettings
```

## Remarks

To use these settings, pass this value to `Turbo.register(component, configs)` method. For more information, see the [Turbo](Turbo.md) variable.
Default settings:
[debug](../Interfaces/ITurboSettings.md#debug) `false`
[experiments](../Interfaces/ITurboSettings.md#experiments) `new Set<string>()`
[frictionNoKOsTimerSeconds](../Interfaces/ITurboSettings.md#frictionnokostimerseconds) `120.0`
[gameMode](../Interfaces/ITurboSettings.md#gamemode) - game mode is empty
[heartbeatFrequencySeconds](../Interfaces/ITurboSettings.md#heartbeatfrequencyseconds) `120`
[maxAFKSecondsBeforeRemove](../Interfaces/ITurboSettings.md#maxafksecondsbeforeremove) `180`
[maxFrictionNoKOEvents](../Interfaces/ITurboSettings.md#maxfrictionnokoevents) `30`
[playerInitialArea](../Interfaces/ITurboSettings.md#playerinitialarea) `lobby_world_enter`
[playerInitialState](../Interfaces/ITurboSettings.md#playerinitialstate) `ParticipationEnum.IN_LOBBY`
[turboUpdateSeconds](../Interfaces/ITurboSettings.md#turboupdateseconds) `1.0`
These settings are set to true by default, which enables the associated Turbo actions:
[useAFK](../Interfaces/ITurboSettings.md#useafk)
[useDiscovery](../Interfaces/ITurboSettings.md#usediscovery)
[useFriction](../Interfaces/ITurboSettings.md#usefriction)
[useGameMode](../Interfaces/ITurboSettings.md#usegamemode)
[useHeartbeats](../Interfaces/ITurboSettings.md#useheartbeats)
[useLevelUp](../Interfaces/ITurboSettings.md#uselevelup)
[useQuests](../Interfaces/ITurboSettings.md#usequests)
[useRewards](../Interfaces/ITurboSettings.md#userewards)
These settings are set to false by default, which disables the associated Turbo actions:
[eventsForWearableEquipAndRelease](../Interfaces/ITurboSettings.md#eventsforwearableequipandrelease)
[useAbilities](../Interfaces/ITurboSettings.md#useabilities)
[useArmor](../Interfaces/ITurboSettings.md#usearmor)
[useDamage](../Interfaces/ITurboSettings.md#usedamage)
[useForward](../Interfaces/ITurboSettings.md#useforward)
[useFrictionNoKOs](../Interfaces/ITurboSettings.md#usefrictionnokos)
[useRotation](../Interfaces/ITurboSettings.md#userotation)
[useRounds](../Interfaces/ITurboSettings.md#userounds)
[useSections](../Interfaces/ITurboSettings.md#usesections)
[useStages](../Interfaces/ITurboSettings.md#usestages)
[useTasks](../Interfaces/ITurboSettings.md#usetasks)
[useTeamAndRole](../Interfaces/ITurboSettings.md#useteamandrole)
[useTransforms](../Interfaces/ITurboSettings.md#usetransforms)
[useWeaponEquip](../Interfaces/ITurboSettings.md#useweaponequip)
[useWeaponGrabAndRelease](../Interfaces/ITurboSettings.md#useweapongrabandrelease)
[useWeapons](../Interfaces/ITurboSettings.md#useweapons)
[useWearableEquipAndRelease](../Interfaces/ITurboSettings.md#usewearableequipandrelease)
[useWearables](../Interfaces/ITurboSettings.md#usewearables)

## Examples

This example sets the Turbo settings to the default settings.

```
Turbo.register(this, TurboDefaultSettings);
```