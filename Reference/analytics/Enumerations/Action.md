Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_action

# Action Enum

The Turbo actions that trigger Turbo [events](/hw-docs/Reference/analytics/Variables/TurboEvents.md). Turbo actions are contexts for Turbo events, and represent the trigger or player action for an associated event.

## Signature

```
export declare enum Action
```

## Enumeration Members

| Member | Value | Description |
| --- | --- | --- |
| ABILITY\_DEQUIP | `1` | Triggered when a player unequips an ability.  The [ITurboSettings.useAbilities](/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md#useabilities) property enables ability analytics. |
| ABILITY\_EQUIP | `2` | Triggered when a player equips an ability.  The [ITurboSettings.useAbilities](/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md#useabilities) property enables ability analytics. |
| ABILITY\_USED | `3` | Triggered when a player uses an ability.  The [ITurboSettings.useAbilities](/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md#useabilities) property enables ability analytics. |
| ACHIEVEMENT\_UNLOCKED | `4` | Triggered when a player unlocks an achievement.  The [ITurboSettings.useQuests](/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md#usequests) property enables achievement analytics. |
| AFK\_ENTER | `5` | Triggered when a player enters the AFK (away from keyboard) state.  The [ITurboSettings.useAFK](/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md#useafk) property enables AFK analytics. |
| AFK\_EXIT | `6` | Triggered when a player exits the AFK (away from keyboard) state.  The [ITurboSettings.useAFK](/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md#useafk) property enables AFK analytics. |
| AREA\_CHANGE | `7` | Triggered when a player transitions from one specific area to another. |
| AREA\_ENTER | `8` | Triggered when a player enters an area. |
| AREA\_EXIT | `9` | Triggered when a player exits an area. |
| ARMOR\_DEQUIP | `11` | Triggered when a player unequips an armor item.  The [ITurboSettings.useArmor](/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md#usearmor) property enables armor analytics. |
| ARMOR\_EQUIP | `10` | Triggered when a player equips and armor item.  The [ITurboSettings.useArmor](/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md#usearmor) property enables armor analytics. |
| CAMERA\_CLOSE | `13` | Triggered when a player closes their camera. |
| CAMERA\_OPEN | `12` | Triggered when a player opens their camera. |
| CAMERA\_PHOTO\_TAKEN | `14` | Triggered when a player captures image in the game. |
| CUSTOM\_ACTION | `15` | Triggered for a custom action. |
| DAMAGE\_ENEMY | `16` | Triggered when an enemy takes damage.  The [ITurboSettings.useDamage](/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md#usedamage) property enables damage analytics. |
| DAMAGE\_PLAYER | `17` | Triggered when a player takes damage.  The [ITurboSettings.useDamage](/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md#usedamage) property enables damage analytics. |
| DEATH | `18` | Triggered when a player character dies. |
| DISCOVERY\_MADE | `19` | Triggered when a player activates a discovery event.  The [ITurboSettings.useDiscovery](/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md#usediscovery) property enables discovery analytics. |
| FRICTION\_CAUSED | `20` | Triggered when a player causes a friction event.  The [ITurboSettings.useFriction](/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md#usefriction) property enables friction analytics. |
| FRICTION\_HIT | `21` | Triggered when an event that causes friction occurs. |
| KILL | `22` | Triggered when a player kills an enemy controlled by the game or a player character. |
| KILL\_ENEMY | `23` | Triggered when a player kills an enemy controlled by the game. |
| KILL\_PLAYER | `24` | Triggered when a player kills another player character. |
| LEVEL\_UP | `25` | Triggered when a player levels up. |
| LOBBY\_PROGRESS | `26` | Triggered when a player in a lobby area pogresses through a matchmaking queue. |
| LOBBY\_SECTION\_ENTER | `27` | Triggered when a player enters a lobby area. |
| LOBBY\_SECTION\_EXIT | `28` | Triggered when a player exits a lobby area. |
| MINI\_GAME\_END | `30` | Triggered when a mini game ends. |
| MINI\_GAME\_START | `29` | Triggered when a mini game starts. |
| MINI\_GAME\_STATS | `31` | Triggered when the stats of a mini game are updated. |
| PLAYER\_READY\_ENTER | `32` | Triggered when a player enters an area that implies their intent to play. |
| PLAYER\_READY\_EXIT | `33` | Triggered when a player exits an area that implies their intent to play. |
| REJOINED\_INSTANCE | `34` | Triggered when a player rejoins the instance. |
| REVIVE | `35` | Triggered when a player is revived. |
| REVIVED\_BY\_PLAYER | `36` | Triggered when the player is revived by another player. |
| REWARDS\_EARNED | `37` | Triggered when a player earns rewards. |
| ROUND\_ABANDONED | `39` | Triggered when a player abandons a round. |
| ROUND\_END | `38` | Triggered for all players that were participating when the round ends (one event per player). |
| ROUND\_LOST | `41` | Triggered when a player loses a round. |
| ROUND\_REJOINED | `40` | Triggered when a player rejoins a round. |
| ROUND\_START | `42` | Triggered for all participating players when the round starts, or for players that join during an existing round. |
| ROUND\_STATS | `43` | Triggered when the stats for a round are updated. |
| ROUND\_WIN | `44` | Triggered when a player wins the round. |
| SECTION\_ABANDONED | `45` | Triggered when a player quits a section. |
| SECTION\_END | `46` | Triggered when the section ends. |
| SECTION\_RESTART | `47` | Triggered when a player restarts a section. |
| SECTION\_START | `48` | Triggered when a player starts playing a section. |
| SECTION\_STATS | `49` | Triggered when the stats for a section are updated. |
| STAGE\_ABANDONED | `50` | Triggered when a player quits a stage. |
| STAGE\_END | `51` | Triggered when a stage ends. |
| STAGE\_PROGRESS | `52` | Triggered when a player progresses through a stage. |
| STAGE\_RESTART | `53` | Triggered when a player restarts a stage. |
| STAGE\_START | `54` | Triggered when a player begins a stage. |
| STAGE\_STATS | `55` | Triggered when stats are collected for a stage. |
| TASK\_ABANDONED | `56` | Triggered when a task is abondoned. |
| TASK\_END | `57` | Triggered when a tesk ends. |
| TASK\_FAIL | `58` | Triggered when task fails. |
| TASK\_START | `59` | Triggered when begins. |
| TASK\_STEP\_END | `60` | Triggered when a task step ends. |
| TASK\_STEP\_FAIL | `61` | Triggered when a task step fails. |
| TASK\_STEP\_START | `62` | Triggered when task step begins. |
| TASK\_STEP\_SUCCESS | `63` | Triggered when the step of a task succeeds. |
| TASK\_SUCCESS | `64` | Triggered when a task succeeds. |
| TURBO\_GAME\_STATE\_SNAPSHOT | `65` | Triggered when an intermittent snapshot is taken of the game state. |
| TURBO\_HEARTBEAT | `67` | Triggered every interval defined by the [ITurboSettings.heartbeatFrequencySeconds](/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md#heartbeatfrequencyseconds) property. |
| TURBO\_PLAYER\_STATE\_SNAPSHOT | `66` | Triggered when an intermittent snapshot is taken of the player state. |
| UNKNOWN | `-1` | Triggered for an unknown action. |
| WEAPON\_EQUIP | `68` | Triggered when a player equips a weapon. |
| WEAPON\_FIRED | `69` | Triggered when a player fires a weapon. |
| WEAPON\_GRAB | `70` | Triggered when a player grabs a weapon. |
| WEAPON\_HELD | `71` | Triggered while a player is holding a weapon. |
| WEAPON\_RELEASE | `72` | Triggered when a player unequips a weapon. |
| WEARABLE\_EQUIP | `73` | Triggered when a player equips a wearable item. |
| WEARABLE\_RELEASE | `74` | Triggered when a player removes a wearable item. |
| WORLD\_ENTER | `75` | Triggered when a player enters the world. |
| WORLD\_EXIT | `76` | Triggered when a player exits the world. |

## Remarks

The [ITurboSettings](/hw-docs/Reference/analytics/Interfaces/ITurboSettings.md) interface defines properties that enable and disable analytics tracking for each Turbo action.