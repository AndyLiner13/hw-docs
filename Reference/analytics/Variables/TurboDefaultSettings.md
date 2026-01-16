Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_turbodefaultsettings

# TurboDefaultSettings Variable

The default [settings](https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_iturbosettings) for a [Turbo](https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_turbo) instance, including the initial Turbo events and data to collect.

## Signature

```
TurboDefaultSettings: ITurboSettings
```

## Remarks

To use these settings, pass this value to `Turbo.register(component, configs)` method. For more information, see the [Turbo](https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_turbo) variable.
Default settings:
[debug](https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_iturbosettings#debug) `false`
[experiments](https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_iturbosettings#experiments) `new Set<string>()`
[frictionNoKOsTimerSeconds](https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_iturbosettings#frictionnokostimerseconds) `120.0`
[gameMode](https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_iturbosettings#gamemode) - game mode is empty
[heartbeatFrequencySeconds](https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_iturbosettings#heartbeatfrequencyseconds) `120`
[maxAFKSecondsBeforeRemove](https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_iturbosettings#maxafksecondsbeforeremove) `180`
[maxFrictionNoKOEvents](https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_iturbosettings#maxfrictionnokoevents) `30`
[playerInitialArea](https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_iturbosettings#playerinitialarea) `lobby_world_enter`
[playerInitialState](https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_iturbosettings#playerinitialstate) `ParticipationEnum.IN_LOBBY`
[turboUpdateSeconds](https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_iturbosettings#turboupdateseconds) `1.0`
These settings are set to true by default, which enables the associated Turbo actions:
[useAFK](https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_iturbosettings#useafk)
[useDiscovery](https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_iturbosettings#usediscovery)
[useFriction](https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_iturbosettings#usefriction)
[useGameMode](https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_iturbosettings#usegamemode)
[useHeartbeats](https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_iturbosettings#useheartbeats)
[useLevelUp](https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_iturbosettings#uselevelup)
[useQuests](https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_iturbosettings#usequests)
[useRewards](https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_iturbosettings#userewards)
These settings are set to false by default, which disables the associated Turbo actions:
[eventsForWearableEquipAndRelease](https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_iturbosettings#eventsforwearableequipandrelease)
[useAbilities](https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_iturbosettings#useabilities)
[useArmor](https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_iturbosettings#usearmor)
[useDamage](https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_iturbosettings#usedamage)
[useForward](https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_iturbosettings#useforward)
[useFrictionNoKOs](https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_iturbosettings#usefrictionnokos)
[useRotation](https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_iturbosettings#userotation)
[useRounds](https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_iturbosettings#userounds)
[useSections](https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_iturbosettings#usesections)
[useStages](https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_iturbosettings#usestages)
[useTasks](https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_iturbosettings#usetasks)
[useTeamAndRole](https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_iturbosettings#useteamandrole)
[useTransforms](https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_iturbosettings#usetransforms)
[useWeaponEquip](https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_iturbosettings#useweaponequip)
[useWeaponGrabAndRelease](https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_iturbosettings#useweapongrabandrelease)
[useWeapons](https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_iturbosettings#useweapons)
[useWearableEquipAndRelease](https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_iturbosettings#usewearableequipandrelease)
[useWearables](https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_iturbosettings#usewearables)

## Examples

This example sets the Turbo settings to the default settings.

```
Turbo.register(this, TurboDefaultSettings);
```