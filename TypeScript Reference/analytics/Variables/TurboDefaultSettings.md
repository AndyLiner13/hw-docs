# TurboDefaultSettings Variable

The default [settings](https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_iturbosettings) for a [Turbo](https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_turbo) instance, including the initial Turbo events and data to collect.

## Signature

```typescript
TurboDefaultSettings: ITurboSettings
```

## Remarks

To use these settings, pass this value to `Turbo.register(component, configs)` method. For more information, see the [Turbo](https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_turbo) variable.

### Default settings:

- [debug](https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_iturbosettings#debug) `false`
- [experiments](https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_iturbosettings#experiments) `new Set<string>()`
- [frictionNoKOsTimerSeconds](https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_iturbosettings#frictionnokostimerseconds) `120.0`
- [gameMode](https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_iturbosettings#gamemode) - game mode is empty
- [heartbeatSeconds](https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_iturbosettings#heartbeatseconds) `10.0`

### Heartbeat actions:

- [useAFK](https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_iturbosettings#useafk)
- [useDiscovery](https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_iturbosettings#usediscovery)
- [useFriction](https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_iturbosettings#usefriction)
- [useGameMode](https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_iturbosettings#usegamemode)
- [useHeartbeats](https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_iturbosettings#useheartbeats)
- [useLevelUp](https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_iturbosettings#uselevelup)
- [useQuests](https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_iturbosettings#usequests)
- [useRewards](https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_iturbosettings#userewards)

### Event actions:

- [eventsForWearableEquipAndRelease](https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_iturbosettings#eventsforwearableequipandrelease)
- [useAbilities](https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_iturbosettings#useabilities)
- [useArmor](https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_iturbosettings#usearmor)
- [useDamage](https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_iturbosettings#usedamage)
- [useForward](https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_iturbosettings#useforward)
- [useFrictionNoKOs](https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_iturbosettings#usefrictionnokos)
- [useRotation](https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_iturbosettings#userotation)

## Examples

This example sets the Turbo settings to the default settings.

```typescript
Turbo.register(this, TurboDefaultSettings);
```