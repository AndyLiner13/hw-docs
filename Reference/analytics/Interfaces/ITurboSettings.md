---
source: https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_iturbosettings
---

# [ITurboSettings Interface](#iturbosettings-interface)

The available settings for a [Turbo](../Variables/Turbo.md) instance including the ability to enable and disable specific types of analytics tracking. Many of these settings configure a corresponding set of Turbo [actions](../Enumerations/Action.md) and [TurboEvents](../Variables/TurboEvents.md).

## [Signature](#signature)

```
export
 
interface
 
ITurboSettings
 
```

## [Remarks](#remarks)

The [TurboDefaultSettings](../Variables/TurboDefaultSettings.md) variable defines the default settings.\
To apply your Turbo settings, populate your `ITurboSettings` object and pass it to the `Turbo.register(component, configs)` method. For details, see the [Turbo](../Variables/Turbo.md) variable.

## [Examples](#examples)

This example demonstrates how to disable several Turbo settings when calling the Turbo.register() method.

```
start
()
 
{

   
const
 turboSettings
:
 
ITurboSettings
 
=
 
{

    useAFK
:
 
false
,

    useFriction
:
 
false
,

    useHeartBeats
  
};

   
Turbo
.
register
(
this
,
 turboSettings
);

   
AnalyticsManager
.
s_instance 
=
 
this
;

   
this
.
subscribeToEvents
();

  
}
```

## [Properties](#properties)

|           |                                                                                                               |
| --------- | ------------------------------------------------------------------------------------------------------------- |
| **debug** | `true` to enable Turbo debugging functionality, such as logs and tools; `false` to disable it.Signature\`\`\` |
| debug     |                                                                                                               |
| :         |                                                                                                               |

boolean
;

````|
| **eventsForWeaponGrabAndRelease**    | `true` to enable logging for weapon equip and release events on the backend server; `false` to disable it.Signature```
eventsForWeaponGrabAndRelease
:
 
boolean
;
```RemarksTo use this setting, you must enable the property. Player state updates can still reflect current the weapon and timers without logging the actual events.                                                                                                                                                                                                                                                                                         |
| **eventsForWearableEquipAndRelease** | `true` to enable logging for wearable equip and release events on the backend server; `false` to disable it.Signature```
eventsForWearableEquipAndRelease
:
 
boolean
;
```RemarksTo use this setting, you must enable the [ITurboSettings.useWearableEquipAndRelease](ITurboSettings.md#usewearableequipandrelease) property. Player state updates can still reflect current the wearables and timers without logging the actual events.                                                                                                                                                                                       |
| **experiments**                      | A method that enables a set of experiments for the player.Signature```
experiments
:
 
Set
<string>
;
```                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| **frictionNoKOsTimerSeconds**        | A timer that creates a friction event whenever no player kills occur within the specified duration during gameplay. The timer specified in seconds.Signature```
frictionNoKOsTimerSeconds
:
 number
;
```RemarksThe property must be `true`; otherwise, this timer is ignored.                                                                                                                                                                                                                                                                                                                                                  |
| **gameMode**                         | The name of a custom game mode, such as arena, or adventure.Signature```
gameMode
:
 
string
;
```RemarksThe property must be enabled to track game mode events and data.                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| **heartbeatFrequencySeconds**        | The frequency, in seconds, for capturing a heartbeat event for each active player.Signature```
heartbeatFrequencySeconds
:
 number
;
```RemarksThe setting must be enabled to track heartbeat events.                                                                                                                                                                                                                                                                                                                                                                                                                           |
| **maxAFKSecondsBeforeRemove**        | The number of seconds before deleting an AFK player.Signature```
maxAFKSecondsBeforeRemove
:
 number
;
```RemarksDeleting AFK players after the specified duration can help avoid memory leak issues.                                                                                                                                                                                                                                                                                                                                                                                                                           |
| **maxFrictionNoKOEvents**            | The maximum number of times to send friction events due to no player kills occuring within the timer.Signature```
maxFrictionNoKOEvents
:
 number
;
```RemarksThe setting must be enabled in order to track this event type.                                                                                                                                                                                                                                                                                                                                                                                                    |
| **playerInitialArea**                | The name of the initial area where a player first enters a world.Signature```
playerInitialArea
:
 
string
;
```                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| **playerInitialState**               | The player's initial participation state when a player first enters a world.Signature```
playerInitialState
:
 
ParticipationEnum
;
```                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| **turboUpdateSeconds**               | The frequency, in seconds, for Turbo Manger to update the game state.Signature```
turboUpdateSeconds
:
 number
;
```RemarksSetting this proprety lower affects performance; higher impacts accuracy.                                                                                                                                                                                                                                                                                                                                                                                                                            |
| **useAFK**                           | `true` to track AFK enter and AFK exit events and data; `false` otherwise.Signature```
useAFK
:
 
boolean
;
```RemarksThis setting enables the `AFK_ENTER` and `AFK_EXIT` [actions](../Enumerations/Action.md).                                                                                                                                                                                                                                                                                                                                                                                                                 |
| **useAbilities**                     | `true` to track abilities events and data; `false` otherwise.Signature```
useAbilities
:
 
boolean
;
```                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| **useArmor**                         | `true` to track armor events and data; `false` otherwise.Signature```
useArmor
:
 
boolean
;
```RemarksThis setting enables the `ARMOR_EQUIP` and `ARMOR_DEQUIP` [actions](../Enumerations/Action.md).                                                                                                                                                                                                                                                                                                                                                                                                                          |
| **useDamage**                        | `true` to track damage events and data; `false` otherwise.Signature```
useDamage
:
 
boolean
;
```RemarksThis setting enables the `DAMAGE_ENEMY` and `DAMAGE_PLAYER` [actions](../Enumerations/Action.md).                                                                                                                                                                                                                                                                                                                                                                                                                      |
| **useDiscovery**                     | `true` to track events and data for player discoveries; `false` otherwise.Signature```
useDiscovery
:
 
boolean
;
```RemarksThis setting enables the `DISCOVERY_MADE` [action](../Enumerations/Action.md).                                                                                                                                                                                                                                                                                                                                                                                                                      |
| **useForward**                       | `true` to log forward vectors with each player action; `false` otherwise.Signature```
useForward
:
 
boolean
;
```                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| **useFriction**                      | `true` to track friction events and data; `false` otherwise.Signature```
useFriction
:
 
boolean
;
```RemarksThis setting enables the `FRICTION_HIT` and `FRICTION_CAUSED` [actions](../Enumerations/Action.md). Friction events can be derived or deliberate, and slow player pogression.                                                                                                                                                                                                                                                                                                                                      |
| **useFrictionNoKOs**                 | `true` to track friction events and data caused when no player kills occur within a specified duration; `false` otherwise.Signature```
useFrictionNoKOs
:
 
boolean
;
```RemarksThis setting enables events and data tracking based on the the [ITurboSettings.frictionNoKOsTimerSeconds](ITurboSettings.md#frictionnokostimerseconds) property.                                                                                                                                                                                                                                                                                |
| **useGameMode**                      | `true` to track custom game mode events and data; `false` otherwise.Signature```
useGameMode
:
 
boolean
;
```RemarksThis setting enables the [ITurboSettings.gameMode](ITurboSettings.md#gamemode) property. Game modes are custom variations of the game, such as arena and guild wars.                                                                                                                                                                                                                                                                                                                                       |
| **useHeartbeats**                    | `true` to track track heartbeat events and data at the specified duration; `false` otherwise.Signature```
useHeartbeats
:
 
boolean
;
```RemarksThe [ITurboSettings.heartbeatFrequencySeconds](ITurboSettings.md#heartbeatfrequencyseconds) property specifies the tracking duration.                                                                                                                                                                                                                                                                                                                                           |
| **useLevelUp**                       | `true` to track player level and level up events and data; `false` otherwise.Signature```
useLevelUp
:
 
boolean
;
```RemarksThis setting enables the `LEVEL_UP` [action](../Enumerations/Action.md).                                                                                                                                                                                                                                                                                                                                                                                                                           |
| **useQuests**                        | `true` to enable quest and achievement analytics; `false` otherwise.Signature```
useQuests
:
 
boolean
;
```                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| **useRewards**                       | `true` to track rewards events and data; `false` otherwise.Signature```
useRewards
:
 
boolean
;
```RemarksThis setting can track data such as collectibles, XP, points, and bonuses. Reward tracking ensures rewards are being received and provide insight into how, when, and why those rewards are earned or missed.                                                                                                                                                                                                                                                                                                        |
| **useRotation**                      | `true` to log rotation using Eurler angles with each player action; `false` otherwise.Signature```
useRotation
:
 
boolean
;
```                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| **useRounds**                        | `true` to track events and data for rounds; `false` otherwise.Signature```
useRounds
:
 
boolean
;
```RemarksA round is a full completion of a game and represent the overall loop of funnel progression analytics, which consists of rounds, stages, and sections. This setting enables the `ROUND_ABANDONED`, `ROUND_END`, `ROUND_LOST`, `ROUND_REJOINED`, `ROUND_START`, `ROUND_STATS`, and `ROUND_WIN` [actions](../Enumerations/Action.md).                                                                                                                                                                                |
| **useSections**                      | `true` to track events and data for sections; `false` otherwise.Signature```
useSections
:
 
boolean
;
```RemarksSections are subdivisions of in funnel progression analytics. Sections track progression when a player starts, completes, or enters a subsection of a stage, wave, or level. The purpose of this setting is to track more granular portions of the areas where an event occurs or a player is navigating. This setting enables the `SECTION_ABANDONED`, `SECTION_END`, `SECTION_RESTART`, `SECTION_START`, and `SECTION_STATS` [actions](../Enumerations/Action.md).                                           |
| **useStages**                        | `true` to track events and data for stages; `false` otherwise.Signature```
useStages
:
 
boolean
;
```RemarksStages are subdivisions of in funnel progression analytics. This setting enables the `STAGE_ABANDONED`, `STAGE_END`, `STAGE_PROGRESS`, `STAGE_RESTART`, `STAGE_START`, and `STAGE_STATS` [actions](../Enumerations/Action.md).                                                                                                                                                                                                                                                                                     |
| **useTasks**                         | `true` to track events and data for tasks and task steps, such as activities, challenges, and puzzles. Otherwise, `false`.Signature```
useTasks
:
 
boolean
;
```RemarksTasks and task steps were designed to measure specific activities where a player has a series of steps to follow. In comparison to rounds, stages, and sections, tasks are more discrete units that can occur within those items. This setting enables the `TASK_ABANDONED`, `TASK_END`, `TASK_FAIL`, `TASK_START`, `TASK_STEP_END`, `TASK_STEP_FAIL`, `TASK_STEP_START`, `TASK_STEP_SUCCESS`, and `TASK_SUCCESS` [actions](../Enumerations/Action.md). |
| **useTeamAndRole**                   | `true` to track team and role based data using the player state; `false` otherwise.Signature```
useTeamAndRole
:
 
boolean
;
```                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| **useTransforms**                    | `true` to continuously track player position, rotation, distances, and other player transforms. `false` to only calculate player transforms for each action.Signature```
useTransforms
:
 
boolean
;
```                                                                                                                                                                                                                                                                                                                                                                                                                        |
| **useWeaponEquip**                   | `true` to track when a player equips a weapon; `false` otherwise.Signature```
useWeaponEquip
:
 
boolean
;
```RemarksThis setting enables the `WEARABLE_EQUIP` [action](../Enumerations/Action.md). Weapon grab and release analytics are enabled with the [ITurboSettings.useWeaponGrabAndRelease](ITurboSettings.md#useweapongrabandrelease) property. Weapon usr analytics are enabled with the [ITurboSettings.useWeapons](ITurboSettings.md#useweapons) property.                                                                                                                                                          |
| **useWeaponGrabAndRelease**          | `true` to enable tracking for weapon grab and release events and data. `false` to disable it.Signature```
useWeaponGrabAndRelease
:
 
boolean
;
```RemarksThis setting enables the `WEAPON_GRAB` and `WEAPON_RELEASE` [actions](../Enumerations/Action.md). When players grab and release weapons, it updates weapon utilization timers and the current weapons data. The property enables logging the individual grab and release events to the backend server.                                                                                                                                                                |
| **useWeapons**                       | `true` to track weapon use events and data; `false` otherwise.Signature```
useWeapons
:
 
boolean
;
```RemarksThis settings enables the `WEAPON_FIRED` [action](../Enumerations/Action.md). Weapon grab and release analytics are enabled with the [ITurboSettings.useWeaponGrabAndRelease](ITurboSettings.md#useweapongrabandrelease) property. Weapon equip analytics are enabled with the [ITurboSettings.useWeaponEquip](ITurboSettings.md#useweaponequip) property.                                                                                                                                                        |
| **useWearableEquipAndRelease**       | `true` to track equip and release events and data for wearables; `false` otherwise.Signature```
useWearableEquipAndRelease
:
 
boolean
;
```RemarksThis setting enables the `WEARABLE_EQUIP` and `WEARABLE_RELEASE` [actions](../Enumerations/Action.md). The [ITurboSettings.eventsForWearableEquipAndRelease](ITurboSettings.md#eventsforwearableequipandrelease) property enables logging the individual grab and release events to the backend server.                                                                                                                                                                      |
| **useWearables**                     | `true` to track events and data for a wearables that are currently eqquiped by a player. `false` to disable it.Signature```
useWearables
:
 
boolean
;
```RemarksThe [ITurboSettings.useWearableEquipAndRelease](ITurboSettings.md#usewearableequipandrelease) property enables tracking of equip and release events for wearables.                                                                                                                                                                                                                                                                                             |
````

