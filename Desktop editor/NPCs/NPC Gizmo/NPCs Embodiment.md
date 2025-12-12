Source: https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/npcs/npc-gizmo/npc-embodiment

# NPCs Embodiment

# Embodiment Options

When creating an NPC there are two embodiment options to choose from: **None** and **Horizon Avatar**. You can set your NPC’s embodiment using the **Body Type** property drop-down after adding an NPC to your world.

While **None** AI embodied and **Horizon Avatar** both leverage the core NPC Gizmo as their foundation, they provide distinct functionalities and use cases for populating your virtual world with interactive characters. The choice between them depends on whether or not you want to attach the NPC gizmo to an entity in your world, or make use of a Horizon Avatar as an NPC character.

<details>
<summary>Horizon Avatar and None embodied NPC</summary>

<p></p>

[Horizon Avatar and None embodied NPC](../../../image_data/a3a23ef07ddda8c929296890ba4b79dd9dac36d0cd4f5d3435440b21362418ce.md)

### Overview
The image depicts a virtual environment with three distinct characters and a cube with symbols. The scene is set against a gradient blue sky and a tiled floor grid.

### Key Elements
1. **Top Left Character**
   - **Visual description**: A stylized humanoid figure with a red body and black hair.
   - **Location**: Top-left quadrant.
   - **Contents**: The character is standing with one hand on their hip and the other raised near their head.
   - **Visual styling**: Red body, black hair, simple design.

2. **Bottom Left Character**
   - **Visual description**: A human-like figure wearing a dark gray T-shirt and blue jeans.
   - **Location**: Bottom-left quadrant.
   - **Contents**: The character has short brown hair and is standing upright with a neutral expression.
   - **Visual styling**: Dark gray T-shirt, blue jeans, light skin tone.

3. **Cube with Symbols**
   - **Visual description**: A purple cube with white symbols resembling people and stars.
   - **Location**: Right side, bottom-right quadrant.
   - **Contents**: The cube features four white symbols arranged in a pattern.
   - **Visual styling**: Purple cube, white symbols.

4. **Floating Text Box**
   - **Visual description**: A rectangular box with rounded corners.
   - **Location**: Above the top-left character.
   - **Contents**: Contains the text "Test Bot" with "Test" in white and "Bot" in gray.
   - **Visual styling**: White background with a gray bottom section.

### Visual Flow / Relationships
- **Most prominent visually**: The top-left character due to its central placement and larger size.
- **Arrows, lines, connectors**: None present.
- **Spatial relationships**: Characters are spaced apart, with the cube positioned further right than the human-like figure.

</details>

<p></p>



## Non-AI Embodied NPCs

These NPCs will appear as a gizmo in your world. They are useful for creating static characters that don’t require a Horizon Avatar. These NPCs can still be AI empowered to respond to player interactions, but they will not have a physical embodiment in the world.

## Horizon Avatar Embodied NPCs

Horizon Avatar embodied NPCs are NPCs whose behaviors are predefined and entirely controlled by TypeScript. Horizon Avatar embodied NPCs are useful where you require deterministic, predictable, non-conversational behaviors with a prebuilt model that can animate and be customized.

Some common use cases for a Horizon Avatar embodied NPC include:

* **Providing Information or Quests**: A character standing in a fixed spot that delivers exposition or quest objectives when a player approaches.
* **Act as a stand in for a player**: **Horizon Avatars** can act as a stand-in for a player when your world requires more players.
* **Enemies or Obstacles**: A monster patrolling a hallway that reacts to player contact, or a guard with a set patrol path.
* **Selling Goods/Services**: A shopkeeper with a predefined dialogue flow for transactions.
* **Atmospheric Elements**: Characters that perform routine tasks or wander an area to make the world feel more alive.

By default, NPCs can **`Spawn on Start`** by togging the corresponding property on in the **Properties** pane. For dynamic spawning of an NPC (i.e. a quest giver suddenly appearing) you can use the [spawnPlayer() method](../../../Reference/avatar_ai_agent/Classes/AvatarAIAgent.md#methods).

Similarly, NPCs can be **despawned** using [despawnPlayer()](../../../Reference/avatar_ai_agent/Classes/AvatarAIAgent.md#methods), which destroys the entity and removes it from the world.

Below is a TypeScript example script, typically attached to a **Trigger Zone gizmo**, which causes a **Scripted Avatar NPC** (like a quest giver) to appear when a player enters the zone and disappear when the player exits.

Below is a Typescript example of an Horizon Avatar NPC grabbing an item and bringing it to a player.

**TypeScript Sample for controlling an Avatar NPC via the NpcPlayer API:**

```
import * as hz from 'horizon/core';
import { Npc, NpcPlayer, NpcLocomotionOptions, NpcLocomotionResult, EmoteName } from 'horizon/npc';

// This is an example of how to control an Avatar embodied NPC through the NpcPlayer API.

class NpcPlayerExample extends hz.Component<typeof NpcPlayerExample> {
 static propsDefinition = {
   npc: {type: hz.PropTypes.Entity},
   banana: {type: hz.PropTypes.Entity},
   bananaTrigger: {type: hz.PropTypes.Entity}
 };

 private npcGizmo: Npc | undefined;
 // NPC Player is how we control the Avatar embodied NPCs. NpcPlayer derives from Player, so the full Player API is available.
 private npcPlayer: NpcPlayer | undefined;
 private player: hz.Player | undefined;
 private hasBanana: boolean = false;

 // Create locomotion options - we can use this to customize NPC locomotion.
 private moveOptions: NpcLocomotionOptions = {
   movementSpeed: 3, // Control how fast the NPC moves.
   faceMovementDirection: true // Force the NPC to face the direction of movement.
 };

 async start(): Promise<void> {
   this.npcGizmo = this.props.npc?.as(Npc);
   if(this.npcGizmo == undefined) {
     console.error("NPC Gizmo is undefined!");
     return;
   }

   // We await to be sure the NPC is fully initialized and the NpcPlayer is available.
   this.npcPlayer = await this.npcGizmo.tryGetPlayer();
   if(this.npcPlayer == undefined) {
     console.error("NPC Player is undefined!");
     return;
   }

   // When a player interacts with the trigger, we move the NPC to the Banana.
   this.connectCodeBlockEvent(
     this.props.bananaTrigger!,
     hz.CodeBlockEvents.OnPlayerEnterTrigger,
     (player: hz.Player) => {
       this.player = player;
       this.moveToBanana();
     }
   );

   // We run bringBananaToPlayer every frame, but nothing will happen if the NPC doesn't have the Banana.
   this.connectLocalBroadcastEvent(
     hz.World.onUpdate,
     (data: {deltaTime: number}) => {
       this.bringBananaToPlayer();
     }
   );
 }

 // We move the NPC to a position close to the Banana and then grab it.
 async moveToBanana(): Promise<void> {
   // Calculate a position that is 1 meter away from the banana.
   const bananaPosition: hz.Vec3 = this.props.banana!.position.get();
   const npcPostion = this.npcPlayer!.position.get();
   const delta = npcPostion.sub(bananaPosition).normalize();
   const targetPosition = bananaPosition.add(delta);

   // Move to our target position with our locomotion options and await comepletion.
   const result: NpcLocomotionResult = await this.npcPlayer!.moveToPosition(targetPosition, this.moveOptions);

   // Check that moveToPostion was successful.

   if(result != NpcLocomotionResult.Complete) {
     console.error("Something went wrong trying to go to the Banana!");
     return;
   }

   this.grabBanana();
 }

 // As long as the NPC has the banana, it will follow the Player but once the NPC is with 2 metes of the Player, it will drop the Banana.
 bringBananaToPlayer(): void {
   if(!this.hasBanana || this.player === undefined) {
     return;
   }

   const playerPosition: hz.Vec3 = this.player!.position.get();
   const npcPostion: hz.Vec3 = this.npcPlayer!.position.get();
   const delta: hz.Vec3 = npcPostion.sub(playerPosition);

   // Check if the NPC is close enough to drop off the Banana.

   if(delta.magnitudeSquared() <= 4) {
     // Force stop the NPC from moving.
     this.npcPlayer!.stopMovement();
     this.dropBanana();

     // Clear the look at target so the NPC will return to looking straight ahead.
     this.npcPlayer!.clearLookAtTarget();

     // Celebrate our successful Banana delivery with an emote.
     this.npcPlayer!.playEmote(EmoteName.Cheer);
     console.log("Banana Delivered!");
     return;
   }

   // Tell the NPC to look at the Player.
   this.npcPlayer!.setLookAtTarget(playerPosition);

   // The NPC needs to move closer to the player.
   const targetPosition: hz.Vec3 = playerPosition.add(delta.normalize());
   this.npcPlayer?.moveToPosition(targetPosition, this.moveOptions);
 }

 // Check if the NPC isn't currently holding anything and if not, grab the Banana.
 grabBanana(): void {

   // getGrabbedEntity returns undefined if the NPC isn't holding anything.
   if(this.npcPlayer!.getGrabbedEntity(hz.Handedness.Right) == undefined) {
     // Pick up the banana.
     this.npcPlayer!.grab(hz.Handedness.Right ,this.props.banana!);
     this.hasBanana = true;
     console.log("Banana Acquired!");
   }
 }

 dropBanana(): void {
   if(this.npcPlayer!.getGrabbedEntity(hz.Handedness.Right) == undefined) {
     console.error("NPC isn't holding the Banana!");
     return;

   }

   // Drop the banana.
   this.npcPlayer!.drop(hz.Handedness.Right);
   this.hasBanana = false;
 }
}

hz.Component.register(NpcPlayerExample);
```

**Explanation and Use Cases:**

**Core Components**

* NpcPlayerExample Class: A component attached to an entity that controls an NPC player.
* Props: The script expects three entities:
  + `npc`: The NPC entity to control.
  + `banana`: The banana entity the NPC will interact with.
  + `bananaTrigger`: A trigger entity that detects when a player enters a specific area.
* `NpcPlayer`: Represents the player controller for the NPC, providing movement, grabbing, and emote APIs.
* Locomotion Options: Configures NPC movement speed and orientation behavior.

Key Methods and Flow

- `start()`
  * Initializes references to the NPC and its player controller.
  * Sets up event listeners:
    * When a player enters the banana trigger, the NPC starts moving toward the banana.
    * On every frame update, the NPC checks if it should bring the banana to the player.
- `moveToBanana()`
  * Calculates a position 1 meter away from the banana.
  * Moves the NPC to that position.
  * Upon arrival, calls `grabBanana()` to pick up the banana.
- `grabBanana()`
  * Checks if the NPC is not already holding something.
  * Commands the NPC to grab the banana with its right hand.
  * Sets a flag indicating the NPC has the banana.
- `bringBananaToPlayer()`
  * If the NPC has the banana and a player is present:
    * Checks the distance between the NPC and the player.
    * If within 2 meters, stops movement, drops the banana, clears the look target, and plays a cheer emote.
    * Otherwise, the NPC looks at the player and moves closer.
- `dropBanana()`
  * Checks if the NPC is holding the banana.
  * Commands the NPC to drop the banana.
  * Updates the flag to indicate the banana is no longer held.