Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/migration_playermigration

# PlayerMigration Class

Extends *Player*

The base class for all players in the world.

## Signature

```
export declare class PlayerMigration extends Player
```

## Properties

|  |  |
| --- | --- |
| **mobileAppPlatform** | Gets the type of mobile app player is using to play Horizon.      Signature  ``` mobileAppPlatform: ReadableHorizonProperty<MobileAppPlatform>; ```  Remarks  New device types may be added in the future, so you should handle this property with a switch statement. |

## Methods

|  |  |
| --- | --- |
| **getMigrationData(autoRewardPlayer)** | Indicates whether the player has graduated from the world on other Mobile App Platforms.      Signature  ``` getMigrationData(autoRewardPlayer?: boolean): Promise<MigrationData>; ```  Parameters  autoRewardPlayer: boolean  *(Optional)* If true, the player will be tagged as rewarded for this migration flow.  Returns  Promise<[MigrationData](/hw-mcp-tools/documentation/hw-docs/Reference/migration/Type%20Aliases/MigrationData.md)>  `MigrationData` containing the `migrationIdentifier` (if set from ) and `hasMigrated` dictating if the player was from the migration flow. |
| **migrateToHorizonApp(options)** | Trigger the migration flow for the player. Should be called from a positive user action (e.g. button press to confirm graduation) This will likely exit the player from the world via the app store or deeplink to Meta Horizon app.      Signature  ``` migrateToHorizonApp(options?: Partial<MigrationOptions>): Promise<boolean>; ```  Parameters  options: Partial<[MigrationOptions](/hw-mcp-tools/documentation/hw-docs/Reference/migration/Type%20Aliases/MigrationOptions.md)>  *(Optional)* Options to customise the data used to migrate the player. If not provided, the default values will be used.  Returns  Promise<boolean>  A promise that resolves `true` if the migration flow was successfully triggered, `false` otherwise. |
| **setMigrationComplete()** | Specifies that the player has completed their migration to the Meta Horizon app.      Signature  ``` setMigrationComplete(): Promise<boolean>; ```  Returns  Promise<boolean>  A promise that resolves `true` if the migration flow was successfully completed, `false` otherwise. |