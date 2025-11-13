Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/chop-n-pop-sample-world/module-9-enemy-wave-manager

# Module 9 - Enemy Wave Manager

The Enemy Wave Manager system controls the release of each wave of monsters, which can be skeletons, zombies, or combinations of both. Each wave is spawned at one of the available spawn points. When the final wave is completed,

Each wave is defined within an EnemyWaveConfig script instance and is spawned through the `spawnEnemyWave()` function defined in the script. In the Enemy Wave Manager, you can define the sequence of enemy waves and their timing for release.

**Tip**: In Chop ‘N Pop: Graveyard Bash, there are three waves of enemies. You can modify the code to enable more waves. Details are below.

## System Components

The Enemy Wave Manager system is composed of the following entities. These entities are available under the **World Instances node** in the Hierarchy panel.

* Enemy Wave Manager reference object hosts `EnemyWaveManager.ts`
  + Script dependencies:
    - `Behavior.ts`
    - `Events.ts`
    - `NPCAgent.ts`
    - `PlayerManager.ts`
* Three instances of EnemyWaveConfig reference objects hosting `EnemyWaveConfig.ts`.
  + Script dependencies:
    - `Behaviour.ts`
* ZombieSpawnPoints and child reference objects:
  + This parent reference object is specified in the Properties panel of each EnemyWaveConfig entity.
  + Each enemy wave is spawned within the vicinity of one of the underlying ZombieSpawnPoint entities, which are just empty reference objects whose positional data is used for spawning.

### Events

In the `Events.ts` script, the WaveManagerNetworkEvents class contains the following event definitions:

```
export const WaveManagerNetworkEvents = {
  StartWaveGroup: new NetworkEvent<{waveGroupName : string}>('StartWaveGroup'),
  StopWaveGroup: new NetworkEvent<{waveGroupName : string}>('StopWaveGroup'),
  NextWave: new NetworkEvent<{waveGroupName : string}>('NextWave'),
  StartingWave: new NetworkEvent<{waveGroupName: string, waveNumber : number}>('StartingWave'),
  WaveComplete: new NetworkEvent<{waveGroupName: string, waveNumber : number}>('WaveComplete'),
  FightStarted: new NetworkEvent<{waveGroupName: string}>('FightStarted'),
  FightEnded: new NetworkEvent<{waveGroupName: string}>('FightEnded'),
};
```

These events are used for messaging to and from the EnemyWaveManager and EnemyWaveConfig scripts when enemy-related events occur.

**Tip**: Each event sends the WaveGroupName, which corresponds to a property on the EnemyWaveManager script. If you create multiple EnemyWaveManagers, the event system should support it.

## How to Deploy

- Deploy listed scripts and their script dependencies into your world.
- Attach `EnemyWaveManager.ts` to empty reference object.
- Create an EnemyWaveConfig reference object for each enemy wave in your game. Attach `EnemyWaveConfig.ts` to each reference object.
- Create ZombieSpawnPoints reference object. Beneath it, create separate empty reference objects as spawn points for enemies. You can choose the number to include.

## How to Use

### Configure individual enemy waves

Define the Script properties for each EnemyWaveConfig reference object.

| Property | Description |
| --- | --- |
| spawnPoints | Select the ZombieSpawnPoints parent reference entity in your world. |
| spawnSquareSize | Set the maximum distance in meters from the position of the randomly chosen ZombieSpawnPoint for an enemy to be spawned. The actual spawning position is randomly calculated based on the position of the spawning point and this maximum distance. |
| waveSize | The total number of enemies in the wave. |
| enemy1 | Select the animated asset that corresponds to the enemy to spawn. In Chop ‘N Pop: Graveyard Bash, these assets are the NPC Skeleton and NPC Zombie that were created from the library assets and to which a Brain script was attached. |
| enemy1Odds | The probability from 0.0 to 1.0 that this enemy type is included in the wave. The actual enemy NPC that is spawned is determined randomly based on these probability factors. All EnemyOdds probabilities should sum to 1.0. |

### Configure wave sequence

In the Script properties for the EnemyWaveManager, you define the sequence of waves.

| Property | Description |
| --- | --- |
| activeFromStart | When set to TRUE, the first wave is launched when the game begins. In Chop ‘N Pop: Graveyard Bash, this value is set to FALSE. The first wave is triggered when a player crosses into the trigger zone just outside of the graveyard area, allowing players to safely assemble and arm themselves in the lobby first. |
| waveGroupName | A named reference to this set of waves. **Tip**: You can define multiple instances of EnemyWaveManager entities in your world and use them, as long as they have unique WaveGroupName values. Additional configuration is required. More information is provided below. |
| initialWaveTimeDelay | Time in seconds after the wave is triggered before the enemies are spawned. |
| wavePlayerMultiplier | This multiplier is applied to the number of enemies spawned in a wave for each additional player in the game. For example, if there are 3 players in the game, then the specified number of enemies is multiplied by (1.5 x 1.5).  **Tip**: The maximum permitted number of enemies in a wave is fixed at 20. To change, search for “20” in `EnemyWaveConfig.ts`. Be aware that adding more enemies per wave can degrade overall performance. |
| wave1Config | Select the EnemyWaveConfig reference object that hosts the script where the Enemy Wave #1 is defined. |
| wave2TimeDelay | If desired, you can insert a time delay in seconds after all enemies of Enemy Wave #1 are destroyed, before spawning Enemy Wave #2. |

## Modifications

### Add more enemies

Change the numbers in each EnemyWaveConfig to ramp up the opposition.

### Set waves on timer

When the WaveXTimeDelay property for the wave in the EnemyWaveManager is set to -1, each wave is set to launch after the previous one has been defeated. You can change these properties to non-negative values to introduce delays (in seconds) between waves.

### Change WaveMultiplier

In the Script properties for `EnemyWaveManager.ts`, you can change the multiplying factor for each additional player.

Currently, the value is set to 1.5, which means that when a second player is added, players can expect to encounter 1.5 times the number of enemies. A third player multiplies each enemy wave by another 1.5.

### Add more waves

- If you want to add additional waves of skeletons, zombies or both, right-click the EnemyWave3Config entity in the Hierarchy panel and select **Duplicate**.
- Select and rename the duplicated asset.
- Specify the properties of the enemy wave in the Script properties.
- Modify the EnemyWaveManager script:
  - Add in new properties for wave4TimeDelay and wave4Config.
  - Locate the following:

    ```
    if (this.props.wave3Config != null) {
      this.waveConfigs.push({config: this.props.wave3Config, timeDelay: -1});
    }
    ```
  - Copy it and paste a version of it just below. Change “3” to “4” in the copied version.
  - Modify the wave3 version above it to reference the wave4TimeDelay property.

Test it.

### Add more managers

The basic structure of the game is to send a wave of enemies, wait for them to be defeated, and then send the next wave.

Suppose you wanted to have that capability, as well as sending enemies based on other criteria. For example, you could create and deploy a second EnemyWaveManager that triggers the sending of waves based on receipt of an event. When the SendNextWave event is received, the next listed wave is spawned and sent.

This involves:

* Duplicate the EnemyWaveManager reference object. Rename it to EnemyWaveManager2 or similar.
* Modify EnemyWaveManager2:
  + Define your enemy waves.
  + Make sure that you provide a unique name to the waveGroupName property.
* Modify `GameTriggers.ts`:
  + Add a new property to hold the EnemyWaveManager2 entity.
  + Modify the onPlayerEnterTrigger code to trigger via event the EnemyWaveManager2 entity.
* If you are triggering waves off of different criteria then time delays and enemy wave completion, you may need to perform more significant code modifications to EnemyWaveManager2 script.

## Summary

In this module, you learned how to deploy the Enemy Wave Manager system, which allows you to design waves of NPC enemies and to sequence their spawning.

Using the exposed parameters, you can experiment with modifying these waves to see different behaviors.

You can also bring this system into your world, deploy it with your own assets, and even make changes to the criteria for executing these waves.