Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/migration_migrationoptions

# MigrationOptions type

Options for customising the effect of calling the [PlayerMigration.migrateToHorizonApp()](/hw-docs/Reference/migration/Classes/PlayerMigration.md) method.

## Signature

```
export declare type MigrationOptions = {
    migrationIdentifier?: string | null;
    destinationWorldId?: string | null;
};
```

## Remarks

`migrationIdentifier` - (string) A unique identifier for the migration flow. If a player is tagged with an identifier, it will be returned as part of the [PlayerMigration.getMigrationData()](/hw-docs/Reference/migration/Classes/PlayerMigration.md) method call. Default = '' `destinationWorldId` - (string) The ID of the world the player should be migrated to. If not specified, the player will be migrated to the same world this was called from. Default = ''