# ITurboSettings Interface

The available settings for a [Turbo](https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_turbo) instance including the ability to enable and disable specific types of analytics tracking. Many of these settings configure a corresponding set of Turbo [actions](https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_action) and [TurboEvents](https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_turboevents).

## Signature

```typescript
export interface ITurboSettings
```

## Remarks

The [TurboDefaultSettings](https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_turbodefaultsettings) variable defines the default settings.

To apply your Turbo settings, populate your `ITurboSettings` object and pass it to the `Turbo.register(component, configs)` method. For details, see the [Turbo](https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_turbo) variable.

## Examples

This example demonstrates how to disable several Turbo settings when calling the Turbo.register() method.

```typescript
start() {
   const turboSettings: ITurboSettings = {
    useAFK: false,
    useFriction: false,
    useHeartbeats: false
  };
   Turbo.register(this, turboSettings);
   AnalyticsManager.s_instance = this;
   this.subscribeToEvents();
}
```

## Properties

| Property | Description |
| --- | --- |
| `debug` | `true` to enable Turbo debugging functionality, such as logs and tools; `false` to disable it.<br/>**Signature:** `debug: boolean;` |
| `eventsForWeaponGrabAndRelease` | `true` to enable logging for weapon equip and release events on the backend server; `false` to disable it.<br/>**Signature:** `eventsForWeaponGrabAndRelease: boolean;`<br/>**Remarks:** To use this setting, you must enable the property. Player state updates can still reflect current the weapon and timers without logging the actual events. |
| `eventsForWearableEquipAndRelease` | `true` to enable logging for wearable equip and release events on the backend server; `false` to disable it.<br/>**Signature:** `eventsForWearableEquipAndRelease: boolean;`<br/>**Remarks:** To use this setting, you must enable the `ITurboSettings.useWearableEquipAndRelease` property. Player state updates can still reflect current the wearables and timers without logging the actual events. |
| `experiments` | A method that enables a set of experiments for the player.<br/>**Signature:** `experiments: Set<string>;` |
| `frictionNoKOsTimerSeconds` | A timer that creates a friction event whenever no player kills occur within the specified duration during gameplay. The timer specified in seconds.<br/>**Signature:** `frictionNoKOsTimerSeconds: number;`<br/>**Remarks:** The property must be true; otherwise, this timer is ignored. |
| `gameMode` | The name of a custom game mode, such as arena, or adventure.<br/>**Signature:** `gameMode: string;`<br/>**Remarks:** The property must be enabled to track game mode events and data. |
| `heartbeatFrequencySeconds` | The frequency, in seconds, for capturing a heartbeat event for each active player.<br/>**Signature:** `heartbeatFrequencySeconds: number;`<br/>**Remarks:** The setting must be enabled to track heartbeat events. |
| `maxAFKSecondsBeforeRemove` | The number of seconds before deleting an AFK player.<br/>**Signature:** `maxAFKSecondsBeforeRemove: number;`<br/>**Remarks:** Deleting AFK players after the specified duration can help avoid memory leak issues. |
| `maxFrictionNoKOEvents` | The maximum number of times to send friction events due to no player kills occurring within the timer.<br/>**Signature:** `maxFrictionNoKOEvents: number;`<br/>**Remarks:** The setting must be enabled in order to track this event type. |
| `playerInitialArea` | The name of the initial area where a player first enters a world.<br/>**Signature:** `playerInitialArea: string;` |
| `playerInitialState` | The player's initial participation state when a player first enters a world.<br/>**Signature:** `playerInitialState: ParticipationEnum;` |
| `turboUpdateSeconds` | The frequency, in seconds, for Turbo Manager to update the game state.<br/>**Signature:** `turboUpdateSeconds: number;`<br/>**Remarks:** Setting this property lower affects performance; higher impacts accuracy. |
| `useAFK` | `true` to track AFK enter and AFK exit events and data; `false` otherwise.<br/>**Signature:** `useAFK: boolean;`<br/>**Remarks:** This setting enables the `AFK_ENTER` and `AFK_EXIT` actions. |
| `useAbilities` | `true` to track abilities events and data; `false` otherwise.<br/>**Signature:** `useAbilities: boolean;` |
| `useArmor` | `true` to track armor events and data; `false` otherwise.<br/>**Signature:** `useArmor: boolean;`<br/>**Remarks:** This setting enables the `ARMOR_EQUIP` and `ARMOR_DEQUIP` actions. |
| `useDamage` | `true` to track damage events and data; `false` otherwise.<br/>**Signature:** `useDamage: boolean;`<br/>**Remarks:** This setting enables the `DAMAGE_ENEMY` and `DAMAGE_PLAYER` actions. |
| `useDiscovery` | `true` to track events and data for player discoveries; `false` otherwise.<br/>**Signature:** `useDiscovery: boolean;`<br/>**Remarks:** This setting enables the `DISCOVERY_MADE` action. |
| `useForward` | `true` to log forward vectors with each player action; `false` otherwise.<br/>**Signature:** `useForward: boolean;` |
| `useFriction` | `true` to track friction events and data; `false` otherwise.<br/>**Signature:** `useFriction: boolean;`<br/>**Remarks:** This setting enables the `FRICTION_HIT` and `FRICTION_CAUSED` actions. Friction events can be derived or deliberate, and slow player progression. |
| `useFrictionNoKOs` | `true` to track friction events and data caused when no player kills occur within a specified duration; `false` otherwise.<br/>**Signature:** `useFrictionNoKOs: boolean;`<br/>**Remarks:** This setting enables events and data tracking based on the `ITurboSettings.frictionNoKOsTimerSeconds` property. |
| `useGameMode` | `true` to track custom game mode events and data; `false` otherwise.<br/>**Signature:** `useGameMode: boolean;`<br/>**Remarks:** This setting enables the `ITurboSettings.gameMode` property. Game modes are custom variations of the game, such as arena and guild wars. |
| `useHeartbeats` | `true` to track heartbeat events and data at the specified duration; `false` otherwise.<br/>**Signature:** `useHeartbeats: boolean;`<br/>**Remarks:** The `ITurboSettings.heartbeatFrequencySeconds` property specifies the tracking duration. |
| `useLevelUp` | `true` to track player level and level up events and data; `false` otherwise.<br/>**Signature:** `useLevelUp: boolean;`<br/>**Remarks:** This setting enables the `LEVEL_UP` action. |
| `useQuests` | `true` to enable quest and achievement analytics; `false` otherwise.<br/>**Signature:** `useQuests: boolean;` |
| `useRewards` | `true` to track rewards events and data; `false` otherwise.<br/>**Signature:** `useRewards: boolean;`<br/>**Remarks:** This setting can track data such as collectibles, XP, points, and bonuses. Reward tracking ensures rewards are being received and provide insight into how, when, and why those rewards are earned or missed. |
| `useRotation` | `true` to log rotation using Euler angles with each player action; `false` otherwise.<br/>**Signature:** `useRotation: boolean;` |
| `useRounds` | `true` to track events and data for rounds; `false` otherwise.<br/>**Signature:** `useRounds: boolean;`<br/>**Remarks:** A round is a full completion of a game and represent the overall loop of funnel progression analytics, which consists of rounds, stages, and sections. This setting enables the `ROUND_ABANDONED`, `ROUND_END`, `ROUND_LOST`, `ROUND_REJOINED`, `ROUND_START`, `ROUND_STATS`, and `ROUND_WIN` actions. |
| `useSections` | `true` to track events and data for sections; `false` otherwise.<br/>**Signature:** `useSections: boolean;`<br/>**Remarks:** Sections are subdivisions of in funnel progression analytics. Sections track progression when a player starts, completes, or enters a subsection of a stage, wave, or level. The purpose of this setting is to track more granular portions of the areas where an event occurs or a player is navigating. This setting enables the `SECTION_ABANDONED`, `SECTION_END`, `SECTION_RESTART`, `SECTION_START`, and `SECTION_STATS` actions. |
| `useStages` | `true` to track events and data for stages; `false` otherwise.<br/>**Signature:** `useStages: boolean;`<br/>**Remarks:** Stages are subdivisions of in funnel progression analytics. This setting enables the `STAGE_ABANDONED`, `STAGE_END`, `STAGE_PROGRESS`, `STAGE_RESTART`, `STAGE_START`, and `STAGE_STATS` actions. |
| `useTasks` | `true` to track events and data for tasks and task steps, such as activities, challenges, and puzzles. Otherwise, `false`.<br/>**Signature:** `useTasks: boolean;`<br/>**Remarks:** Tasks and task steps were designed to measure specific activities where a player has a series of steps to follow. In comparison to rounds, stages, and sections, tasks are more discrete units that can occur within those items. This setting enables the `TASK_ABANDONED`, `TASK_END`, `TASK_FAIL`, `TASK_START`, `TASK_STEP_END`, `TASK_STEP_FAIL`, `TASK_STEP_START`, `TASK_STEP_SUCCESS`, and `TASK_SUCCESS` actions. |
| `useTeamAndRole` | `true` to track team and role based data using the player state; `false` otherwise.<br/>**Signature:** `useTeamAndRole: boolean;` |
| `useTransforms` | `true` to continuously track player position, rotation, distances, and other player transforms. `false` to only calculate player transforms for each action.<br/>**Signature:** `useTransforms: boolean;` |
| `useWeaponEquip` | `true` to track when a player equips a weapon; `false` otherwise.<br/>**Signature:** `useWeaponEquip: boolean;`<br/>**Remarks:** This setting enables the `WEARABLE_EQUIP` action. Weapon grab and release analytics are enabled with the `ITurboSettings.useWeaponGrabAndRelease` property. Weapon use analytics are enabled with the `ITurboSettings.useWeapons` property. |
| `useWeaponGrabAndRelease` | `true` to enable tracking for weapon grab and release events and data. `false` to disable it.<br/>**Signature:** `useWeaponGrabAndRelease: boolean;`<br/>**Remarks:** This setting enables the `WEAPON_GRAB` and `WEAPON_RELEASE` actions. When players grab and release weapons, it updates weapon utilization timers and the current weapons data. The property enables logging the individual grab and release events to the backend server. |
| `useWeapons` | `true` to track weapon use events and data; `false` otherwise.<br/>**Signature:** `useWeapons: boolean;`<br/>**Remarks:** This settings enables the `WEAPON_FIRED` action. Weapon grab and release analytics are enabled with the `ITurboSettings.useWeaponGrabAndRelease` property. Weapon equip analytics are enabled with the `ITurboSettings.useWeaponEquip` property. |
| `useWearableEquipAndRelease` | `true` to track equip and release events and data for wearables; `false` otherwise.<br/>**Signature:** `useWearableEquipAndRelease: boolean;`<br/>**Remarks:** This setting enables the `WEARABLE_EQUIP` and `WEARABLE_RELEASE` actions. The `ITurboSettings.eventsForWearableEquipAndRelease` property enables logging the individual grab and release events to the backend server. |
| `useWearables` | `true` to track events and data for a wearables that are currently equipped by a player. `false` to disable it.<br/>**Signature:** `useWearables: boolean;`<br/>**Remarks:** The `ITurboSettings.useWearableEquipAndRelease` property enables tracking of equip and release events for wearables. |