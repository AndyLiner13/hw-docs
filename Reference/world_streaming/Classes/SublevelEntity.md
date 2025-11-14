Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/world_streaming_sublevelentity

# SublevelEntity Class

Extends *Entity*

A sublevel of a world that you can stream independentaly from the rest of the world at runtime.

## Signature

```
export declare class SublevelEntity extends Entity
```

## Examples

This example demonstrates how to spawn and despawn sublevels at runtime.

```
import { Component, PropTypes, Entity, CodeBlockEvents } from 'horizon/core';
import { SublevelEntity } from 'horizon/world_streaming';

class TestSublevelAPI extends Component {
  static propsDefinition = {
    sublevel: {type: PropTypes.Entity},
    state: {type: 'number', default: 0}, // States 0 to 4 are:
                                         // Unloaded, Loaded, Active,
                                         // Pause, and Hide (Loaded).
  };

  start() {
    this.connectCodeBlockEvent(this.entity, CodeBlockEvents.OnPlayerEnterTrigger, async (player) = {
      var sublevel = this.props.sublevel?.as(SublevelEntity);
      var state = this.props.state;

      if (sublevel == null || sublevel == undefined) {
        console.log("The sublevel entity was either null or invalid.")
        return;
      }

      console.log("Sublevel Trigger entered. Trying to set sublevel " + sublevel.toString() + " to " + state + ", current sublevel state is " + sublevel.currentState.get() + ", previous target sublevel state is " + sublevel.targetState.get());
      switch(state) {
        case 0: {
          sublevel.unload().then(() = {
            console.log("Sublevel " + sublevel?.toString() + " is now unloaded!");
          });
          break;
        }
        case 1: {
          sublevel.load().then(() = {
            console.log("Sublevel " + sublevel?.toString() + " is now loaded!");
          });
          break;
        }
        case 2: {
          sublevel.activate().then(() = {
            console.log("Sublevel " + sublevel?.toString() + " is now activated!");
          });
          break;
        }
        case 3: {
          sublevel.pause().then(() = {
            console.log("Sublevel " + sublevel?.toString() + " is now paused!");
          });
          break;
        }
        case 4: {
          sublevel.hide().then(() = {
            console.log("Sublevel " + sublevel?.toString() + " is now hidden!");
          });
          break;
        }
        default: {
          console.log("Invalid/Unexpected sublevel state # given: " + state);
          // unexpected state
          break;
        }
      }
    });
  }
}
Component.register(TestSublevelAPI);
```

## Remarks

Sublevels are a way to break up a world into smaller pieces that you can stream separately from other portions of the world. Streaming sublevels can have performance benefits when spawning large amounts of static content that is always spawned at the same location.
For more information about world streaming, see the [World Streaming](/hw-docs/Scripting/Asset%20spawning/World%20Streaming.md) guide.
To spawn smaller sets of dynamic content at runtime, you should use a [SpawnController](/hw-docs/Reference/core/Classes/SpawnController.md) object to spawn and despawn [assets](/hw-docs/Reference/core/Classes/Asset.md). For more information about asset spawning, see the [Introduction to Asset Spawning](/hw-docs/Scripting/Asset%20spawning/Introduction%20to%20Asset%20Spawning.md) guide.

## Properties

|  |  |
| --- | --- |
| **currentState**  [readonly] | Gets the current state of the sublevel.      Signature  ``` readonly currentState: ReadableHorizonProperty<SublevelStates>; ``` |
| **targetState**  [readonly] | Gets the state the sublevel is attempting to reach.      Signature  ``` readonly targetState: ReadableHorizonProperty<SublevelStates>; ``` |

## Methods

|  |  |
| --- | --- |
| **activate()** | Loads the sublevel's asset data if not already loaded and makes it active in the world.      Signature  ``` activate(): Promise<void>; ```  Returns  Promise<void>  A promise that resolves when the sublevel is active. |
| **hide()** | Despawns the sublevel and preloads the sublevel's asset data so it can be re-activated later.      Signature  ``` hide(): Promise<void>; ```  Returns  Promise<void>  A promise that resolves when the sublevel is loaded. |
| **load()** | Preloads the sublevel's asset data so it can be activated later.      Signature  ``` load(): Promise<void>; ```  Returns  Promise<void>  A promise that resolves when the sublevel is loaded. |
| **pause()** | Pauses the sublevel's asset data loading.      Signature  ``` pause(): Promise<void>; ```  Returns  Promise<void>  A promise that resolves when the sublevel is paused. |
| **toString()** | Creates a human-readable representation of the SublevelEntity.      Signature  ``` toString(): string; ```  Returns  string  A string representation of the SublevelEntity. |
| **unload()** | Despawns the sublevel's asset data.      Signature  ``` unload(): Promise<void>; ```  Returns  Promise<void>  A promise that resolves when the sublevel is unloaded. |