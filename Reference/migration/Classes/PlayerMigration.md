---
source: https://developers.meta.com/horizon-worlds/reference/2.0.0/migration_playermigration
---

# [PlayerMigration Class](#playermigration-class)

Extends *Player*

The base class for all players in the world.

## [Signature](#signature)

```ts
export declare class PlayerMigration extends Player 
```

## [Properties](#properties)

### [mobileAppPlatform](#mobileappplatform)

Gets the type of mobile app player is using to play Horizon.

**Signature**

```ts
mobileAppPlatform: ReadableHorizonProperty<MobileAppPlatform>;
```

**Remarks**

New device types may be added in the future, so you should handle this property with a switch statement.

## [Methods](#methods)

### [getMigrationData(autoRewardPlayer)](#getmigrationdataautorewardplayer)

Indicates whether the player has graduated from the world on other Mobile App Platforms.

**Signature**

```ts
getMigrationData(autoRewardPlayer?: boolean): Promise<MigrationData>;
```

**Parameters**

autoRewardPlayer: boolean

*(Optional)* If true, the player will be tagged as rewarded for this migration flow.

**Returns**

Promise<[MigrationData](../Type%20Aliases/MigrationData.md)>

`MigrationData` containing the `migrationIdentifier` (if set from ) and `hasMigrated` dictating if the player was from the migration flow.

### [migrateToHorizonApp(options)](#migratetohorizonappoptions)

Trigger the migration flow for the player. Should be called from a positive user action (e.g. button press to confirm graduation) This will likely exit the player from the world via the app store or deeplink to Meta Horizon app.

**Signature**

```ts
migrateToHorizonApp(options?: Partial<MigrationOptions>): Promise<boolean>;
```

**Parameters**

options: Partial<[MigrationOptions](../Type%20Aliases/MigrationOptions.md)>

*(Optional)* Options to customise the data used to migrate the player. If not provided, the default values will be used.

**Returns**

Promise\<boolean>

A promise that resolves `true` if the migration flow was successfully triggered, `false` otherwise.

### [setMigrationComplete()](#setmigrationcomplete)

Specifies that the player has completed their migration to the Meta Horizon app.

**Signature**

```ts
setMigrationComplete(): Promise<boolean>;
```

**Returns**

Promise\<boolean>

A promise that resolves `true` if the migration flow was successfully completed, `false` otherwise.

