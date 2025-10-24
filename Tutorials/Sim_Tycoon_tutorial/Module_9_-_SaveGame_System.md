# Module 9 - SaveGame System

## System components

  
### SaveGame.ts

 The SaveGame script manages all aspects of data persistence for individual
players. It interfaces with Horizon’s player variable system to store and retrieve
player data. Key features:
• Data Serialization: Converts player state into storable format
• Cross-Session Persistence: Maintains data between world visits
• Automatic Saving: Periodically saves player progress without manual intervention
• Data Validation: Ensures save data integrity and handles corruption
• Version Management: Handles save file format updates and migration

  
### SaveGame properties

 The SaveGame system tracks the following player data:
• equippedTools: Currently equipped grabbable and attachable tools
• playerStats: Currency amounts, scores, and progression metrics
• inventoryData: Current resource inventory and capacity
• progressFlags: Tutorial completion, achievement unlocks, milestones
• playTime: Total time spent in the world
• lastSaveTime: Timestamp of most recent save operation

  
...
...
# Module 9 - SaveGame System
...
## Configuration setup

  
### Required setup steps

 Before the SaveGame system can function, you must complete this setup in the
Desktop Editor:
1. Create VariableGroup:
  • Navigate to Systems > VariableGroups
  • Create a new variable group (name it descriptively, e.g., “PlayerData”).
2. Add Player Variable:
  • Inside the variable group, add a new player variable called `SaveGame`
  • This variable will store the serialized player data
3. Update Script Configuration:
  • Open the `SaveGame.ts` script
  • Find the `pvarsBaseName` property
  • Change the value to match your VariableGroup name followed by a colon (e.g.,
“PlayerData:”)
  • If you named the variable something other than `SaveGame`, update the `saveGameKey` property accordingly.

  
...
...
# Module 9 - SaveGame System
...
## Configuration setup
...
### Example configuration

  
```
// In SaveGame.ts
const pvarsBaseName = "PlayerData:";  // Match your VariableGroup name
const saveGameKey = "SaveGame";       // Match your player variable name
```
  
...
...
# Module 9 - SaveGame System
...
## Save data structure

  
### Data organization

 The save system organizes player data into logical sections:  
#### Tool data

  
```
equippedTools: {
  grabbable: "tier3_pickaxe",
  attachable: "tier2_backpack"
}
```
  
#### Player statistics

  
```
playerStats: {
  greenCurrency: 150,
  blueCurrency: 75,
  purpleCurrency: 25,
  redCurrency: 5,
  totalScore: 2500
}
```
  
#### Progress tracking

  
```
progressFlags: {
  tutorialCompleted: true,
  firstUpgrade: true,
  maxTierReached: 3
}
```
  
...
...
# Module 9 - SaveGame System
...
## Save operations

  
### Automatic saving

 The system automatically saves player data in several situations:
• Tool Changes: When players equip new tools or upgrades
• Currency Updates: After resource conversion or purchases
• Progress Milestones: When completing achievements or reaching new tiers
• Periodic Saves: Regular intervals to prevent data loss
• Session End: When players leave the world

  
### Manual save triggers

 The system also supports manual save operations:
• Store purchases trigger immediate saves
• Major progression events force save operations
• Administrative save commands for testing

  
...
...
# Module 9 - SaveGame System
...
## Data loading

  
### Player join process

 When a player joins the world:
1. Detection: World.ts detects the new player entity.
2. Data Retrieval: Loads saved data from player variables.
3. Validation: Verifies data integrity and format compatibility.
4. State Restoration: Applies saved data to SimPlayer instance.
5. Tool Assignment: Equips saved tools through ToolGroup system.
6. UI Updates: Refreshes HUD to reflect loaded state.

  
### New player handling

 For players without existing save data:
• Default starting state is applied
• Initial tools are assigned
• Starting currency amounts are set
• Tutorial flags are initialized
• First save is created immediately

  
...
...
# Module 9 - SaveGame System
...
## Error handling

  
### Data corruption recovery

 The save system includes robust error handling:
• Validation Checks: Data integrity verification before loading
• Fallback Defaults: Safe default values if save data is corrupted
• Version Migration: Automatic updates for older save formats
• Error Logging: Comprehensive logging for debugging save issues
• Recovery Procedures: Automatic or manual save data restoration

  
### Common issues and solutions

  
#### Save data not persisting


• Verify VariableGroup and player variable are correctly configured
• Check that `pvarsBaseName` matches exactly (including colon)
• Ensure variable name matches `saveGameKey` setting

  
#### Tool equipment not saved


• Confirm tool assignment occurs after save data loading
• Verify ToolGroup initialization happens before player join
• Check that tool names match between save data and ToolGroups

  
...
...
# Module 9 - SaveGame System
...
## Integration with other systems

  
### SimPlayer integration


• Save system is tightly coupled with SimPlayer state management
• All SimPlayer state changes trigger save operations
• Load operations directly update SimPlayer properties

  
### Tool system integration


• Tool assignments are saved and restored automatically
• Tool upgrade purchases are immediately persisted
• Tool durability and condition are maintained across sessions

  
### Store system integration


• All purchases trigger immediate save operations
• Currency balances are preserved accurately
• Purchase history tracking for analytics

  
...
...
# Module 9 - SaveGame System
...
## Customization guide

  
### Adding new save data

 To save additional player information:
1. Extend Data Structure: Add new fields to the save data interface.
2. Update Serialization: Include new data in save operations.
3. Update Deserialization: Handle new data during load operations.
4. Provide Defaults: Set appropriate default values for new players.
5. Test Migration: Ensure existing saves work with new format.

  
### Modifying save frequency


1. Locate save trigger conditions in SaveGame.ts
2. Adjust automatic save intervals
3. Add or remove manual save triggers
4. Balance save frequency with performance considerations

  
### Custom save validation


1. Implement custom validation functions
2. Add data integrity checks for specific fields
3. Create recovery procedures for specific corruption types
4. Implement version-specific migration logic

  
...
...
# Module 9 - SaveGame System
...
## Performance considerations

  
### Save operation optimization


• Batch Operations: Group multiple changes into single save
• Selective Saving: Only save changed data to reduce overhead
• Compression: Use efficient data serialization formats
• Throttling: Limit save frequency to prevent performance issues

  
### Memory management


• Data Cleanup: Remove unnecessary save data over time
• Size Limits: Implement reasonable limits on save data size
• Garbage Collection: Properly dispose of temporary save objects

  
## Testing and debugging

  
### Save system testing


• New Player Flow: Test first-time player experience
• Return Player Flow: Verify existing save data loading
• Data Migration: Test save format updates
• Error Conditions: Test corruption and recovery scenarios

  
### Debugging tools


• Save Data Inspector: View and edit save data for testing
• Manual Save/Load: Force save and load operations
• Data Validation Reports: Detailed validation failure information
• Performance Monitoring: Track save operation timing and frequency

  
...
...
# Module 9 - SaveGame System
...
## Best practices

  
### Data design


• Keep save data as compact as possible
• Use meaningful names for save data fields
• Implement proper versioning for future updates
• Provide comprehensive default values

  
### Error handling


• Always validate data before using it
• Implement graceful degradation for missing data
• Log errors thoroughly for debugging
• Provide clear error messages for configuration issues

  
...
...
# Module 9 - SaveGame System
...
## Best practices
...
### Performance


• Minimize save frequency while ensuring data safety
• Use efficient serialization methods
• Batch related save operations together
• Monitor save system performance in production

    ![Nav Logo](https://static.xx.fbcdn.net/rsrc.php/yE/r/3SoBlk8EqOQ.svg)


[Facebook](https://www.facebook.com/MetaHorizon/)
[Threads](https://www.threads.com/@metahorizon)
[X](https://x.com/MetaHorizon)
[Instagram](https://www.instagram.com/metahorizon/)
[YouTube](https://www.youtube.com/@MetaQuestVR)

 Learn
[Documentation](https://developers.meta.com/horizon-worlds/learn/documentation/)
[Blog](https://developers.meta.com/horizon/blog/)
[Forum](https://communityforums.atmeta.com/t5/Creator-Forum/ct-p/Meta_Horizon_Creator_Forums)

 Programs
...
...
# Module 9 - SaveGame System
...
## Best practices
...
### Performance
...
[Meta Horizon Creator Program](https://developers.meta.com/horizon-worlds/programs/)

 My Creations
[My Worlds](https://horizon.meta.com/creator/worlds_all/?utm_source=horizon_worlds_creator)
[My Assets](https://horizon.meta.com/creator/assets/?utm_source=horizon_worlds_creator)
[Performance](https://horizon.meta.com/creator/performance/traces/?utm_source=horizon_worlds_creator)

 Privacy & Legal
[Privacy Policy](https://www.meta.com/legal/privacy/policy/)
[Legal](https://www.meta.com/legal/supplemental-terms-of-service/)

 © 2025 Meta
...
...
# Module 9 - SaveGame System
...
## Best practices

  
### Data design
...
### Error handling
...
### Performance
...
...
# Module 9 - SaveGame System
...
## Additional Links
- [Meta home](https://developers.meta.com/horizon-worlds/)
- [Login](https://developers.meta.com/login/?redirect_uri=https%3A%2F%2Fdevelopers.meta.com%2Fhorizon-worlds%2Flearn%2Fdocumentation%2Ftutorial-worlds%2Fsim-tycoon-tutorial%2Fmodule-9-savegame-system%2F)
...
# Module 9 - SaveGame System

 The SaveGame system handles persistence of player progress between play
sessions. It ensures that tools, resources, currency, and progression are maintained
when players leave and return to the world.  
## System components
...
## Configuration setup
...
## Save data structure
...
## Save operations
...
## Data loading
...
## Error handling
...
## Integration with other systems
...
## Customization guide
...
## Performance considerations
...
## Testing and debugging
...
## Best practices
...
## Additional Links
...
      Learn
# Module 9 - SaveGame System
...
