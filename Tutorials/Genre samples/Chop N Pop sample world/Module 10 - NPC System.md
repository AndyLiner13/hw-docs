---
source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/genre-samples/chop-n-pop-sample-world/module-10-npc-system
---

# [Module 10 - NPC System](#module-10---npc-system)

Chop ‘N Pop: Graveyard Bash utilizes two Non-Player Character (NPC) entities that are available through the desktop editor. In this world, the Skeleton and Zombie NPCs have been deployed and provided separate sets of configurable behaviors.

The NPC system in Chop ‘N Pop: Graveyard Bash world enhances available NPCs with game-specific behaviors and methods for tuning the attributes of these NPCs.

In the world, two NPC types have been deployed: Skeleton and Zombie.

## [System Components](#system-components)

### [NPC assets](#npc-assets)

- NPC Zombie and NPC Skeleton assets pulled from Asset Library in the desktop editor menu: **Asset Library menu > Interactive**.
- Scripts attached to each asset:
  - `ZombieBrain.ts`
    - **Note**: Supports specification of four separate groan sounds. In the game, these assets are created through the Gen AI menu in the desktop editor. You can modify the properties as needed to reference your own audio assets.
  - `SkeletonBrain.ts`
  - Script dependencies for the above:
    - `Events.ts`
    - `LootSystem.ts`
    - `NPCAgent.ts`
    - `StateMachine.ts`
- Asset template created for each one.
- Asset template is spawned in at runtime.
- See “Create NPC Assets” below.

### [NPC Navigation](#npc-navigation)

Navigation for an NPC requires the following entities:

- A **NavMesh** defines the navigable areas for an NPC.
- An **Agent Profile** is a role assignment, which connects an NPC entity to a set of one or more NavMeshes.
- Scripts to drive behaviors of the NPC across its assigned NavMesh. Scripts are described below.

For more information on navigation meshes (NavMesh) and agent profiles, see [Navigation Mesh Generation](../../../Desktop%20editor/NPCs/Navigation%20mesh%20generation.md).

### [NPC Behavior](#npc-behavior)

- `NPCAgent.ts`:
  - Core methods for managing individual NPCs
  - Assigns NPC entity to a navigation profile and navmesh object.
  - Reads state machine and updates navigation, animation and state machine with each frame
    - Retargets NPC entity to nearest point on the assigned NavMesh
    - Switch animation based on states
    - Send events based on combat activities for the NPC
- `SkeletonBrain.ts` and `ZombieBrain.ts`:
  - Interacts with `StateMachine.ts` to define and prioritize current behaviors for individual entities of each NPC type.
  - `StateMachine.ts`:
    - Set of enums and classes for managing the behavior state machine for an NPC.

### [NPC Configuration](#npc-configuration)

Chop ‘N Pop: Graveyard Bash features a separate set of scripts for configuring the NPCs.

- NPCConfigStore reference object hosts `NPCConfigStore.ts`:
  - Class for managing NPC configuration instances, which are mapped to NPC identifiers.
  - An NPC configuration instance is the set of configuration properties for a type of NPC. NPC configuration instances provide access to the tuning properties described below.
- SkeletonTuning and ZombieTuning host `NPCTuner.ts`:
  - These empty reference objects each have the `NPCTuner.ts` script attached.
  - This script contains a list of configuration properties that can be applied to each type of NPC (Skeleton or Zombie), including hit points, min and max attack damage, and AI-related parameters such as visionDistance.
  - Includes references to:
    - The type of NPC
    - The Loot Table entity, which connects an NPC entity to loot that appears when it is destroyed.

## [How to Deploy](#how-to-deploy)

To deploy this system, you must do the following:

**Assets**:

- Create your own NPC assets from the NPCs available through the Asset Library. See “Create NPC Assets” below.
- Create one or more Navigation Volumes (NavMeshes)
- Create at least one Navigation Profile

**Scripts**:

The following scripts must be deployed in your world:

- `ZombieBrain.ts` and/or `SkeletonBrain.ts`
  - If you are using more or different NPCs, these will likely need modification.
- `NPCAgent.ts`
- `StateMachine.ts`
- `NPCConfigStore.ts` and `NPCTuner.ts` are required if you want to expose configurable parameters for your NPCs.
  - If you do not, you must create hard-coded parameters inside the appropriate consuming scripts.
- Dependencies:
  - `Behaviour.ts`
  - `Events.ts`
  - `LootSystem.ts`
  - `NPCAgent.ts`
  - `StateMachine.ts`
  - These scripts may have additional dependencies.

### [Create NPC Assets](#create-npc-assets)

The provided NPCs require additional scripted behaviors to make them come to life. In Chop ‘N Pop: Graveyard Bash, the Skeleton and Zombie NPCs have been added to the world, assigned scripts, and then saved as an asset template for spawning.

**Tip**: These NPC assets are available for FBS and non-FBS worlds.

**Note**: These NPC assets are referenced from a restricted Oculus account. If you wish to use these assets and their systems in your world, please complete the following steps.

1. In the desktop editor, add a zombie or skeleton:
   1. Click the **Asset Library tab**.
   2. From the category drop-down, select **Interactive**.
   3. Search for: `NPC`.
   4. Drag in the NPC into the world.
2. Attach a script to the NPC. In this world, the two attached scripts are the following:
   1. `SkeletonBrain.ts`
   2. `ZombieBrain.ts`
3. You may wish to repair the NPC and the script under a single empty reference object.
4. Select the NPC and its script. Right-click and select **Create Asset**.
5. Specify the asset name and description.
6. Save the asset into your Asset Library tab.
7. The asset and its behavior script are now available for you to use the world of your choice.

**Note**: In a non-FBS world, whenever you spawn or deploy an instance of an asset template in your world, a separate instance of any attached script is also created. These scripts must be managed.

## [How to Use](#how-to-use)

In Chop ‘N Pop: Graveyard Bash, NPCs are deployed in the world based on spawning waves. It’s the Enemy Wave Manager system that contains the configuration of individual waves and manages the spawning of individual entities based on those configurations. If you are not using the Enemy Wave Manager, NPC assets can be spawned or deployed as entities in the world. For more information, see [Module 9 - Enemy Wave Manager](Module%209%20-%20Enemy%20Wave%20Manager.md).

- Create your own NPC assets.
  - See “previous”.
  - Make sure you attach a “Brain” script to the NPC asset and configure the exposed script properties before you save it to your own assets.
  - Note that these Brain scripts have script dependencies.
- Build navmesh and navigation profile.
  - NPCAgent: `NPCAgent.ts`
  - Brain scripts reference `NPCAgent.ts` and its script properties.
- Create the following reference objects with attached scripts. Names of the reference objects are not essential:
  - SkeletonTuning: `NPCTuner.ts`
    - Configure properties for the skeleton NPC
  - ZombieTuning: `NPCTuner.ts`
    - Configure properties for the zombie NPC
- Other scripts must be included in the world, preferably attached to reference objects.

## [Modifications](#modifications)

- Modify properties on SkeletonTuning and ZombieTuning objects to change properties on each spawned entity.
- Create separate navmesh and navigation profile objects for each NPC type.
- Explorer SkeletonBrain and ZombieBrain. Modify the probabilities and actions for each StateConfigRecord, which maps to a specific enumerated state for the NPC entity.
- The NPCs are Unity Asset Bundles with named animation states. You can import your own Unity Asset Bundles and manage your animation state machine from within the provided NPC scripts.

## [Summary](#summary)

The NPC system in Chop ‘N Pop: Graveyard Bash can be deployed into your world to provide challenging opposition. Much of the configuration for individual NPC types is externalized through configuration parameters, allowing you to tune NPC behavior through Script properties, instead of code. This architecture allows designers to change behaviors without having to modify code.

This module introduces the NavMesh and navigation profile concepts, which are significant topics by themselves. See [Navigation Mesh Generation](../../../Desktop%20editor/NPCs/Navigation%20mesh%20generation.md).

For additional exploration of what NPCs can do, please see the NPC tutorial world, which can be opened as a new world through the desktop editor. For more information, see [NPC Scripts](../../../Desktop%20editor/NPCs/NPC%20Scripts.md).

