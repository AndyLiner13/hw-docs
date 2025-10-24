# Module 2 - Implement Object Spawning

In this tutorial, we introduce the Object Spawning assets and mechanisms that are present in the world:
• When a player steps into the trigger zone, we spawn objects into the spawn area.

Note: There are some lags in spawning all objects into the world. We are intentionally NOT spacing those spawns across multiple frames or using any async timer.
• Upon stepping out of the trigger zone, we despawn all objects that have been spawned, which makes them disappear and removes them from the world.
• To restart the experience, step into the trigger zone again.

## Spawning Assets

To spawn assets in your world, you need the following details available for your script:
• The asset for the asset you'd like to spawn
• The position for the spawned object as a value of Vec3 data type
• The rotation for the spawned object as a value of Quaternion data type (optional parameter)
• The scale of the spawned object as a value of Vec3 data type (optional parameter)

## The Spawning Script

The script that spawn objects is called `SimpleSpawn.ts`, and looks like the following:

## Attach SimpleSpawn Script

This script must be attached to an object in the world. In this example world, the SimpleSpawn script is attached to an empty object named, SimpleSpawnManager. Tip: In the Build menu of the desktop editor, you can add an Empty Object type. These objects have no physical presence in the game but are useful for attaching scripts applicable to the world (e.g. "Manager" scripts) or organizing entities in the Hierarchy panel.

## Triggering Spawn and Despawn

To trigger the spawning of assets, we have added a trigger zone gizmo. When a player steps into the zone, the linked asset is spawned and then despawned on exit of the trigger zone.
• Since trigger zones are invisible during gameplay, we provided a marker on the ground beneath the trigger zone.

This trigger zone has a script attached: `SimpleSpawnTrigger`. This script includes:
1. Importing the two events we defined in the `SimpleSpawn.ts` script, so that we can reference them here:
  1. spawnTriggerEvent
  2. despawnTriggerEvent
2. Listeners for two CodeBlock events:
  1. CodeBlockEvents.OnPlayerEnterTrigger
  2. CodeBlockEvents.OnPlayerExitTrigger
3. When those CodeBlockEvents occur, one of the following events, which is listened for in the `SimpleSpawn.ts` script, is issued (`sendLocalEvent`):
  1. spawnTriggerEvent
  2. despawnTriggerEvent

We then use `sendLocalEvent` to deliver the relevant trigger event to the `SimpleSpawn.ts` script, including the spawn position of the object.

## Performance

This spawning method is workable for simple spawning use cases, in which you are bringing in a few, relatively simple assets. In this example, however, we are spawning in 100 instances of an asset. As you use the trigger zone, the spawning or despawning can get interrupted and fail to complete. Note: Simple spawning is resource-intensive at runtime, when the players may be actively doing things to interfere with spawning. Use the simple spawning technique for small sets of assets in less dynamic environments.

## Checkpoint

In the desktop editor, press the Play button to launch the scripts. Then, explore the world to observe Object Spawning behavior. Test:
• Hit the trigger zone to trigger the onPlayerEnterTrigger event in the `SimpleSpawnTrigger.ts` script, which emits the spawnTriggerEvent event, spawning the assets through the SimpleSpawn manager script.
• Note that this spawning action is creating individual instances of the asset in the world from storage (known as the Asset Library). You may notice individual assets appearing one after another; that's the required time to spawn at runtime for a simple asset in a simple world.
• Exit the trigger zone to trigger the onPlayerExitTrigger event, which emits the despawnTriggerEvent event, triggering deletion of all spawned assets.

With the combination of `SimpleSpawn.ts` and `SimpleSpawnTrigger.ts` scripts, a trigger zone from the gizmo, you now have a working world where it demonstrates a simple spawning behavior.
• In your own world, you can replace the trigger logic with other supported triggers in Meta Horizon Worlds. See the documentation for details.
• The `objList[]` array is important to keep track of the spawned objects, so that you can remove/delete the unused objects and free up resources when necessary. In a more dynamic world, this list of entities must be maintained throughout the gameplay experience.

## Extending the Module

Here are a couple of ideas that you can implement to provide more performance and capability to the example.

### Externalize number of assets to spawn

In this example, the number of assets to spawn is fixed at 100. For non-engineers, it may be helpful to externalize the number of assets to spawn as a property in the Properties panel.
• This value must be read to a local variable.
• That variable must be compared to limits defined in the code. For example, negative values are accepted as Number type in the Properties panel. However, they are invalid for this exercise and should generate a console error.
• Additionally, you may also want to put an upper bound on the number of assets to spawn.

### Spawn via timer

To smooth out the performance of spawning:
1. You can spawn in assets asynchronously, which allows for further code execution while the spawning process finishes.
2. You can trigger spawning of individual assets based on the world.onUpdate event, which fires every frame.
