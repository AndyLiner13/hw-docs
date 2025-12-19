Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/genre-samples/chop-n-pop-sample-world/module-3-core-system-scripts

# Module 3 - Core System Scripts

In Chop ‘N Pop: Graveyard Bash, a set of scripts drives core gameplay functionality, behaviors, eventing and provides supporting utilities for other scripts.

## Script Descriptions

### AnimUtils.ts

The `AnimUtils.ts` set of classes, types, and functions support the animation of entities locally and globally. In the Chop ‘N Pop: Graveyard Bash world, it is used for animating the gun on the local client, so that the player who fires the gun sees relevant animation. `AnimUtils.ts` exposes the AnimationParameters class.

### Behaviour.ts

`Behaviour.ts` and its related BehaviourFinder static container enable the finding and execution from one script of behaviors that have been registered with BehaviourFinder and are contained in another. For more information, see [Module 2 - Design Patterns](Module%202%20-%20Design%20Patterns.md).

### Events.ts

The `Events.ts` script contains two separate sets of event definitions, which are used in the game.

**Events**:

Events contains definitions for events related to gameplay, such as weapon hits, enemy proximity, and player-related events.

**WaveManagerNetworkEvents**:

These network events are specific to the management of enemy waves in Chop ‘N Pop: Graveyard Bash. The basic unit of combat is the enemy wave, which contains one or more zombies and/or skeletons spawned into the world. The WaveManagerNetworkEvents are issued based on starting and completion of each of the three enemy waves, as well as initialization and completion of all combat in the world.

### Intro.ts

When a new player enters the world, this simple script adds an epitaph personalized with the player’s username to one of the tombstones in the Lobby.

### ObjectPool.ts

This script contains the ObjectPool class and its interface for managing sets of objects in the game. In Chop ‘N Pop: Graveyard Bash, object pools are created for players, player HUDs, and loot that are present in the game. For example, there are two types of loot: ammo and potions. Each loot type has a separate reference object that hosts an instance of `ObjectPool.ts`, which is used for managing the entities of the type in the pool.

All pool items exist as entities in the world. For more information, see [Module 11 - Loot System](Module%2011%20-%20Loot%20System.md).

### StageHand.ts

This script is used for setting and resetting positions of entities in the world. In Chop ‘N Pop: Graveyard Bash, the StageHand class is applied to managing the cue positions for guns and axes.

### Throttler.ts

Throttler provides a general mechanism for throttling actions in the world. Any subscribing activity is passed to Throttler, which maintains a list of the last time the entity called a function. If the parameterized delay in milliseconds has not yet been met, then nothing is done. Else, the passed-in function is executed by Throttler, and the new timestamp of its execution is inserted in the list.

## How to Deploy

You can deploy scripts in either of the following ways:

#### Copy and paste

TypeScript files are stored as text files on the server. When you load the script file in your external editor, you can copy and paste or save a local copy of the file.

**Tip**: This method is useful if you anticipate needing to make modifications of the file for your own purposes.

#### Asset templates

Since this world is created using File Backed Scripts, you can attach any of these scripts to an asset, such as an empty reference object, and then create an asset template from the object and the script together.

Whenever that asset template is deployed, a reference to the script is deployed as well. This reference points to a single, server-maintained version of the script.

**Note**: Asset templates created in a File Backed Scripts world can only be used in an FBS world.

For more information, see [Asset Templates](../../../Desktop%20editor/Assets/Asset%20Templates.md).

For more information, see “Deploying Systems” in [Module 1 - Setup](https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/chop-n-pop-sample-world/module-1-setup).