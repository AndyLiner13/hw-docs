---
source: https://developers.meta.com/horizon-worlds/reference/2.0.0/migration_playermigration
---

# [PlayerMigration Class](#playermigration-class)

Extends *Player*

The base class for all players in the world.

## [Signature](#signature)

```
export
 declare 
class
 
PlayerMigration
 
extends
 
Player
 
```

## [Properties](#properties)

|                       |                                                                             |
| --------------------- | --------------------------------------------------------------------------- |
| **mobileAppPlatform** | Gets the type of mobile app player is using to play Horizon.Signature\`\`\` |
| mobileAppPlatform     |                                                                             |
| :                     |                                                                             |

ReadableHorizonProperty
<
MobileAppPlatform

> ;

````RemarksNew device types may be added in the future, so you should handle this property with a switch statement. |

## [Methods](#methods)

|                                        |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **getMigrationData(autoRewardPlayer)** | Indicates whether the player has graduated from the world on other Mobile App Platforms.Signature```
getMigrationData
(
autoRewardPlayer
?:
 
boolean
):
 
Promise
<
MigrationData
>;
```ParametersautoRewardPlayer: boolean*(Optional)* If true, the player will be tagged as rewarded for this migration flow\.ReturnsPromise<[MigrationData](../Type%20Aliases/MigrationData.md)>`MigrationData` containing the `migrationIdentifier` (if set from ) and `hasMigrated` dictating if the player was from the migration flow.                                                                                                                                                       |
| **migrateToHorizonApp(options)**       | Trigger the migration flow for the player. Should be called from a positive user action (e.g. button press to confirm graduation) This will likely exit the player from the world via the app store or deeplink to Meta Horizon app.Signature```
migrateToHorizonApp
(
options
?:
 
Partial
<
MigrationOptions
>):
 
Promise
<boolean>
;
```Parametersoptions: Partial<[MigrationOptions](../Type%20Aliases/MigrationOptions.md)>*(Optional)* Options to customise the data used to migrate the player. If not provided, the default values will be used.ReturnsPromise\<boolean>A promise that resolves `true` if the migration flow was successfully triggered, `false` otherwise. |
| **setMigrationComplete()**             | Specifies that the player has completed their migration to the Meta Horizon app.Signature```
setMigrationComplete
():
 
Promise
<boolean>
;
```ReturnsPromise\<boolean>A promise that resolves `true` if the migration flow was successfully completed, `false` otherwise.                                                                                                                                                                                                                                                                                                                                                                                                           |
````

