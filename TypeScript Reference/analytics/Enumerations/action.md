# Action Enum

The Turbo actions that trigger Turbo [events](https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_turboevents). Turbo actions are contexts for Turbo events, and represent the trigger or player action for an associated event.

## Signature

```typescript
export declare enum Action
```

## Enumeration Members

| Member | Value | Description |
| --- | --- | --- |
| `ABILITY_DEQUIP` | 1 | Triggered when a player unequips an ability. The `ITurboSettings.useAbilities` property enables ability analytics. |
| `ABILITY_EQUIP` | 2 | Triggered when a player equips an ability. The `ITurboSettings.useAbilities` property enables ability analytics. |
| `ABILITY_USED` | 3 | Triggered when a player uses an ability. The `ITurboSettings.useAbilities` property enables ability analytics. |
| `ACHIEVEMENT_UNLOCKED` | 4 | Triggered when a player unlocks an achievement. The `ITurboSettings.useQuests` property enables achievement analytics. |
| `AFK_ENTER` | 5 | Triggered when a player enters the AFK (away from keyboard) state. The `ITurboSettings.useAFK` property enables AFK analytics. |
| `AFK_EXIT` | 6 | Triggered when a player exits the AFK (away from keyboard) state. The `ITurboSettings.useAFK` property enables AFK analytics. |
| `AREA_CHANGE` | 7 | Triggered when a player transitions from one specific area to another. |
| `AREA_ENTER` | 8 | Triggered when a player enters an area. |
| `AREA_EXIT` | 9 | Triggered when a player exits an area. |
| `ARMOR_DEQUIP` | 11 | Triggered when a player unequips an armor item. The `ITurboSettings.useArmor` property enables armor analytics. |
| `ARMOR_EQUIP` | 10 | Triggered when a player equips and armor item. The `ITurboSettings.useArmor` property enables armor analytics. |
| `CAMERA_CLOSE` | 13 | Triggered when a player closes their camera. |
| `CAMERA_OPEN` | 12 | Triggered when a player opens their camera. |
| `CAMERA_PHOTO_TAKEN` | 14 | Triggered when a player captures image in the game. |
| `CUSTOM_ACTION` | 15 | Triggered for a custom action. |
| `DAMAGE_ENEMY` | 16 | Triggered when an enemy takes damage. The `ITurboSettings.useDamage` property enables damage analytics. |
| `DAMAGE_PLAYER` | 17 | Triggered when a player takes damage. The `ITurboSettings.useDamage` property enables damage analytics. |
| `DEATH` | 18 | Triggered when a player character dies. |
| `DISCOVERY_MADE` | 19 | Triggered when a player activates a discovery event. The `ITurboSettings.useDiscovery` property enables discovery analytics. |
| `FRICTION_CAUSED` | 20 | Triggered when a player causes a friction event. The `ITurboSettings.useFriction` property enables friction analytics. |
| `FRICTION_HIT` | 21 | Triggered when an event that causes friction occurs. |
| `KILL` | 22 | Triggered when a player kills an enemy controlled by the game or a player character. |
| `KILL_ENEMY` | 23 | Triggered when a player kills an enemy controlled by the game. |
| `KILL_PLAYER` | 24 | Triggered when a player kills another player character. |
| `LEVEL_UP` | 25 | Triggered when a player levels up. |
| `LOBBY_PROGRESS` | 26 | Triggered when a player in a lobby area progresses through a matchmaking queue. |
| `LOBBY_SECTION_ENTER` | 27 | Triggered when a player enters a lobby area. |
| `LOBBY_SECTION_EXIT` | 28 | Triggered when a player exits a lobby area. |
| `MINI_GAME_END` | 30 | Triggered when a mini game ends. |
| `MINI_GAME_START` | 29 | Triggered when a mini game starts. |
| `MINI_GAME_STATS` | 31 | Triggered when the stats of a mini game are updated. |
| `PLAYER_READY_ENTER` | 32 | Triggered when a player enters an area that implies their intent to play. |
| `PLAYER_READY_EXIT` | 33 | Triggered when a player exits an area that implies their intent to play. |
| `REJOINED_INSTANCE` | 34 | Triggered when a player rejoins the instance. |
| `REVIVE` | 35 | Triggered when a player is revived. |
| `REVIVED_BY_PLAYER` | 36 | Triggered when the player is revived by another player. |
| `REWARDS_EARNED` | 37 | Triggered when a player earns rewards. |
| `ROUND_ABANDONED` | 39 | Triggered when a player abandons a round. |
| `ROUND_END` | 38 | Triggered for all players that were participating when the round ends (one event per player). |
| `ROUND_LOST` | 41 | Triggered when a player loses a round. |
| `ROUND_REJOINED` | 40 | Triggered when a player rejoins a round. |
| `ROUND_START` | 42 | Triggered for all participating players when the round starts, or for players that join during an existing round. |
| `ROUND_STATS` | 43 | Triggered when the stats for a round are updated. |
| `ROUND_WIN` | 44 | Triggered when a player wins the round. |
| `SECTION_ABANDONED` | 45 | Triggered when a player quits a section. |
| `SECTION_END` | 46 | Triggered when the section ends. |
| `SECTION_RESTART` | 47 | Triggered when a player restarts a section. |
| `SECTION_START` | 48 | Triggered when a player starts playing a section. |
| `SECTION_STATS` | 49 | Triggered when the stats for a section are updated. |
| `STAGE_ABANDONED` | 50 | Triggered when a player quits a stage. |
| `STAGE_END` | 51 | Triggered when a stage ends. |
| `STAGE_PROGRESS` | 52 | Triggered when a player progresses through a stage. |
| `STAGE_RESTART` | 53 | Triggered when a player restarts a stage. |
| `STAGE_START` | 54 | Triggered when a player begins a stage. |
| `STAGE_STATS` | 55 | Triggered when stats are collected for a stage. |
| `TASK_ABANDONED` | 56 | Triggered when a task is abandoned. |
| `TASK_END` | 57 | Triggered when a task ends. |
| `TASK_FAIL` | 58 | Triggered when task fails. |
| `TASK_START` | 59 | Triggered when begins. |
| `TASK_STEP_END` | 60 | Triggered when a task step ends. |
| `TASK_STEP_FAIL` | 61 | Triggered when a task step fails. |
| `TASK_STEP_START` | 62 | Triggered when task step begins. |
| `TASK_STEP_SUCCESS` | 63 | Triggered when the step of a task succeeds. |
| `TASK_SUCCESS` | 64 | Triggered when a task succeeds. |
| `TURBO_GAME_STATE_SNAPSHOT` | 65 | Triggered when an intermittent snapshot is taken of the game state. |
| `TURBO_HEARTBEAT` | 67 | Triggered every interval defined by the `ITurboSettings.heartbeatFrequencySeconds` property. |
| `TURBO_PLAYER_STATE_SNAPSHOT` | 66 | Triggered when an intermittent snapshot is taken of the player state. |
| `UNKNOWN` | -1 | Triggered for an unknown action. |
| `WEAPON_EQUIP` | 68 | Triggered when a player equips a weapon. |
| `WEAPON_FIRED` | 69 | Triggered when a player fires a weapon. |
| `WEAPON_GRAB` | 70 | Triggered when a player grabs a weapon. |
| `WEAPON_HELD` | 71 | Triggered while a player is holding a weapon. |
| `WEAPON_RELEASE` | 72 | Triggered when a player unequips a weapon. |
| `WEARABLE_EQUIP` | 73 | Triggered when a player equips a wearable item. |
| `WEARABLE_RELEASE` | 74 | Triggered when a player removes a wearable item. |
| `WORLD_ENTER` | 75 | Triggered when a player enters the world. |
| `WORLD_EXIT` | 76 | Triggered when a player exits the world. |

## Remarks

The [ITurboSettings](https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_iturbosettings) interface defines properties that enable and disable analytics tracking for each Turbo action.