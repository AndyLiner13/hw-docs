---
source: https://developers.meta.com/horizon-worlds/reference/2.0.0/migration_migrationdata
---

# [MigrationData type](#migrationdata-type)

The data returned from the [PlayerMigration.getMigrationData()](../Classes/PlayerMigration.md#getmigrationdata) method.

## [Signature](#signature)

```
export
 declare type 
MigrationData
 
=
 
{

    migrationIdentifier
:
 
string
 
|
 
null
;

    hasMigrated
:
 
boolean
 
|
 
null
;


};
```

## [Remarks](#remarks)

`migrationIdentifier` - (string) A unique identifier for the migration flow. Set via the [PlayerMigration.migrateToHorizonApp()](../Classes/PlayerMigration.md#migratetohorizonapp) method, can be empty/null if none set during migration. `hasMigrated` - (boolean) Whether the player has migrated to the Meta Horizon app.

