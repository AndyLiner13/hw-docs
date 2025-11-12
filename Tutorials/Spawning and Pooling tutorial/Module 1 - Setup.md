Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/spawning-and-pooling-in-typescript/module-1-setup

Learn

# Module 1 - Setup

![Title image of an in-headset view with lettering displaying 'Spawning and Pooling in Typescript'](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452932895_512509671286989_8255540828797393157_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=CJ97A2Wb_2cQ7kNvwGFM0oI&_nc_oc=Adn9TLudkrlXnVVgnexmkC8DTceJeMsdg6agRC8C5UWCtWR-7XHFWUCFM7eK8TDwA_0&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=52ypYH9LzC-9A5yt6wXiWQ&oh=00_AfhwZFIn6QnXho2c5s6AS0S5cYSQ35bTC-6EsJ5CPWExtg&oe=692EB045)

Important

 This content is intended as a companion to the tutorial world of the same name, which you can access through the desktop editor. When you open the tutorial world, a copy is created for you to explore, and this page is opened so that you can follow along. For more information, see [Access Tutorial Worlds](/hw-docs/Tutorials/Getting%20started%20with%20tutorial%20worlds/Access%20Tutorial%20Worlds.md).

When building in Meta Horizon Worlds, you can introduce objects into your world by adding them from your set of assets or spawning them into your world during gameplay. This tutorial covers different techniques of spawning and pooling of objects.

**Spawning** refers to adding in assets to the world experience at runtime. Spawning is supported through multiple methods. Each method has trade-offs in terms of performance and resources. For more general information on asset spawning, see [Introduction to Asset Spawning](/hw-docs/Scripting/Asset%20spawning/Introduction%20to%20Asset%20Spawning.md).

This world provides specific examples of asset spawning and also includes an example of **object pooling**, which allows you to pre-load instances of assets in the world and then deploy them into the space as needed.

**Note**: Included in the code is a useful Pool class, which can be extracted from the script files and adapted for your own use.

TypeScript v2.0.0 introduced a dedicated container object for managing spawning and pooling. The Spawn Controller object is covered in the third station in the world.

## Before You Begin

If you haven’t done so, please review the Getting Started section for tutorials, which includes information on:

* Tutorial prerequisites and assumptions
* How to use tutorial worlds and assets in your own worlds
* Developer tools and testing for your worlds

**Note**: All tutorials are created using TypeScript 2.0.0.

See [Getting Started with Tutorials](/hw-docs/Tutorials/Getting%20started%20with%20tutorial%20worlds/Tutorial%20Prerequisites.md).

## Access Tutorial World

To explore the world described in this tutorial, you must make a personal copy of the **Spawning and Pooling in TypeScript** tutorial world.

**In desktop editor**:

When you create a new world in the desktop editor, you can create it based on the Spawning and Pooling in TypeScript tutorial world. For more information, see [Access Tutorial Worlds](/hw-docs/Tutorials/Getting%20started%20with%20tutorial%20worlds/Access%20Tutorial%20Worlds.md).

**In headset**:

![Screenshot of opening the Spawning and Pooling tutorial world in headset](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452590061_512509667953656_3628551193697361467_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=Ze8wSMSnAX4Q7kNvwHXh85l&_nc_oc=AdlF4B-EmqIhUHTWKl_v1qHsgif_2zZJFX5z12_6T8quN3Ttr6HrzGS4LOjz2TQ90RE&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=52ypYH9LzC-9A5yt6wXiWQ&oh=00_Afg23A5SP7PWxrigSRDyBw76Je-5oHGzFFz54QERRWs4Tw&oe=692EC489)

- In the Create menu in your headset, click the **Tutorials tab**.
- Locate the Spawning and Pooling in TypeScript world. Click **Start**.
- A clone is made of the source world, titled **My Spawning and Pooling in TypeScript**. The world is launched.

### Use in your world

For more information on how to apply assets or scripts from this world to yours, see [Use Assets from Tutorials](/hw-docs/Tutorials/Getting%20started%20with%20tutorial%20worlds/Use%20Assets%20from%20Tutorials.md).

## Prerequisites

**Note**: This world is not a beginner’s world. This world requires understanding of TypeScript.

Before you begin this tutorial, you should have already completed a worldbuilding tutorial or have begun building your own worlds.

For more information, see [Tutorial Worlds](/hw-docs/Tutorials/Getting%20started%20with%20tutorial%20worlds/Tutorial%20Prerequisites.md).

## Key Learning Objectives

* Learn the differences between **Object Spawning** and **Object Pooling,** and the trade-offs involved with each.
* Learn how to integrate spawning and pooling objects under the SpawnController object class.

## Introduction to Object Spawning and Object Pooling

### Managing World Assets

In theory, you can add every asset that your world needs as entities in the world. It’s possible to add in each sound, gizmo, enemy, visual effect that is needed for each part of the overall world experience. However, you can quickly run into problems:

* Loading all of these entities at startup can take time, and assets that aren’t needed until the latter parts of the experience may never be used.
* These entities occupy memory and world real estate. If your world occupies excessive memory on the headset, it can suffer from performance issues and may fail to work properly.
* Entities added to the world can clutter up the Hierarchy panel in your development work area.
* Execution of the scripts associated with these entities must be managed, as any attached script with a `start()` method is executed as soon as it is active.

For optimal resource management in worlds of sufficient complexity, it’s best to implement object spawning and object pooling, which enable you to bring in entities when needed and to discard them when they are not.

### World Overview

This world contains three separate stations, each of which is described in the following modules. Each station demonstrates a separate method for handling spawning and despawning, listed below in order of increasing complexity and efficiency of use.

**Station 1 - Object spawning**: Spawn/despawn each instance of an asset as it is needed.

* This incurs loading from storage and transferring to the player’s client, which can induce lagging behavior.
* This method is not suitable for spawning in large numbers of complex assets.

**Station 2 - Object pooling**: Spawn assets at world start into an off-screen pool, from which entities can be moved into the play area to “spawn” them and moved back to the pool for “despawning.”

* This method pre-loads assets at world start, where disruptions are less impactful for the gameplay experience.
* However, you must manage multiple states for each entity, as all of its behaviors, sounds, and animations must be disabled when in the pool and activated when in the gameplay area.

**Station 3 - SpawnController**: This innovation of TypeScript v2.0.0 allows you to preload assets into an array of SpawnController objects.

* These objects are loaded into the runtime memory of the world, but they do not have any physical representation or involvement in the world.
* When they are needed in the world, they are spawned in, which occurs very quickly. When they are no longer needed, they are unloaded, which is also a quick process.

**Tip**: SpawnController is the recommended method for managing spawned assets.

Each method spawns in 100 instances of the same small asset.

* Object Spawning and Object Pooling stations define the number of instances as a constant. Please see the code.
* Spawn Controller surfaces the number of instances as a script property.

### Station 1: Object Spawning

**Object spawning** and despawning allow creators to instantiate and destroy objects at runtime through scripts. These objects are tied to assets pulled from assets to which the world owner has access, and enables you to spawn various objects for users to interact with, to perform actions in-world, and then remove them when they are no longer needed.

#### A note on permissions

* The assets to spawn in must be available to the Owner of the world.

**Tip**: For best results, you should create a shared folder for storing spawned assets or assets that are to be used across a multi-person team. See [Shared Folders](/hw-docs/desktop-editor/assets/shared-folders/).

#### Considerations

Before adding object spawning to a world, here are a few questions you should consider:

* How often are objects to be created/removed for the experience?
* How many object variations does the world require?
* Do some objects need to exist for the entire world experience?

The answers to these questions can inform a decision if object spawning and despawning benefits or detracts from your world’s experience.

**Note**: Spawning and despawning has a performance cost at runtime, especially when objects are spawned in succession. Ideally, spawned assets are managed outside of core gameplay periods.

### Station 2: Object Pooling

To address the costs of spawning and despawning, object pooling is a design pattern in which objects needed during gameplay are pre-instantiated before gameplay begins. Object pooling enables you to optimize your worlds and reduce the CPU costs when having to regularly create/destroy objects during gameplay, resulting in smoother gameplay experience.

#### Considerations

* If an object should be created and destroyed frequently during gameplay, you might consider proactively spawning objects that are hidden in an off-screen pool when the world instance is created.
* You can then move objects in and out of this pool as needed during gameplay. Object pooling saves time from spawning/despawning objects.

### Station 3: Spawn Controller

TypeScript API v2.0.0 introduced the `SpawnController` object, which is a container for spawned assets. Using SpawnControllers, you can pre-load a pool of assets into runtime memory at world start. These loaded objects are not immediately part of the world, and you do not have to manage them within the runtime world experience until they are needed.

When they are needed, the `spawn()` method makes the entities part of the world experience. When they are no longer needed, you use the `unload()` method to move them out of the world yet retain them in runtime memory. After they have been loaded, they can be quickly flipped in and out of the runtime experience, for faster and smoother gameplay.

Considerations:

* Where possible, use the `SpawnController` method.
* `SpawnController` also provides enumerated return values for `CurrentState` and `SpawnError`, which facilitate debugging errors. These are covered later.

### Asset Pool gizmo

If you are assigning an instance of an asset to each player who enters the world, you can deploy the Asset Pool gizmo.

* When a player enters the world, an instance of the asset linked to the Asset Pool gizmo is spawned in for the player. For example, if your world contains a HUD asset, you can use the Asset Pool gizmo to spawn in an instance of the HUD for each player.
* When the player exits the world, the instance of the asset is despawned.

**Notes**:

* The Asset Pool gizmo auto-assigns the asset to the player who enters the world. It may not be possible to use the gimzo to assign assets at runtime through TypeScript.
* In a non-FBS world, avoid deploying assets that contain scripts through the Asset Pool gizmo. Each instance of the asset spawns a separate instance of the attached script.

The Asset Pool gizmo is not covered in this tutorial. For more information, see [Asset pool gizmo](/hw-docs/Gizmos/Asset%20pool%20gizmo.md).

### Notes on Assets

#### Permissions

* The assets to spawn in must be available to the Owner of the world.

**Tip**: For best results, you should create a shared folder for storing spawned assets or assets that are to be used across a multi-person team. See [Shared Folders](/hw-docs/desktop-editor/assets/shared-folders).

#### Motion property

* Assets that are relocated from an off-screen pool, as in the Object Pooling station, must have their Motion property to set to a value other than None.
* If you set Motion to None, you receive an “Unable to move static entity” error in the console.
* You can set Motion to Animated if it has no animations associated with it, and you do not want it to be grabbable or have physics applied to it.

### Logging

Each station features robust logging to the console. When the world is first started, the numerous logging messages allow you to track the loading and spawning processes of each one; you can see that initialization is not fast and immediate and is not synchronous.

However, you may decide that you want to disable the extensive logging. You can disable logging for individual stations by setting the following variables to `FALSE` in the appropriate script:

| Station | Script | Variable |
| --- | --- | --- |
| Object Spawning | `SimpleSpawn.ts` | `DISPLAY_CONSOLE_SIMPLESPAWN` |
| Object Pooling | `ObjectPooling.ts` | `DISPLAY_CONSOLE_OBJECTPOOLING` |
| Spawn Controller | `SpawnControllerManager.ts` | `DISPLAY_CONSOLE_SPAWNCONTROLLER` |