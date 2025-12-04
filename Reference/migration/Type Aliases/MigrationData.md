Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/migration_migrationdata

# MigrationData type

The data returned from the [PlayerMigration.getMigrationData()](/hw-mcp-tools/documentation/hw-docs/Reference/migration/Classes/PlayerMigration.md#getmigrationdata) method.

## Signature

```
export declare type MigrationData = {
    migrationIdentifier: string | null;
    hasMigrated: boolean | null;
};
```

## Remarks

`migrationIdentifier` - (string) A unique identifier for the migration flow. Set via the [PlayerMigration.migrateToHorizonApp()](/hw-mcp-tools/documentation/hw-docs/Reference/migration/Classes/PlayerMigration.md#migratetohorizonapp) method, can be empty/null if none set during migration. `hasMigrated` - (boolean) Whether the player has migrated to the Meta Horizon app.