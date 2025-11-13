Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/scripted-avatar-npc-tutorial/module-3-npc-manager

# Module 3 - NPC Manager

The NPC Manager script adds a layer on top of the existing gem collecting game to manage NPC behaviors based on game events. As the game progresses, the NPC Manager drives behaviors of the two NPCs in the game:

* **Village Elder**: This NPC delivers the call to action to the player through voice-over. Then, the Village Elder assists in the collection of gems. When all 5 gems have been collected, the Village Elder thanks the player.
* **Traveling Merchant**: This NPC performs the following:
  + During gameplay, the Traveling Merchant stirs things up by grabbing gems that you’ve collected and moving them back to their original locations. Collect your gems quickly!
  + When all 5 gems have been collected, the Traveling Merchant runs to the Reset button to place the reset the game.
  + When the player approaches the gem trading kiosk in between games, the Traveling Merchant’s voice is used to comment on the transaction. If the player trades away all their coins or gems, the Traveling Merchant runs to the Start button to start a new gem game.

The NPC Manager handles these actions, including the issuance of the voice-over playback.

## preStart() setup

The `preStart()` method sets up the following:

* `onPlayerEnterWorld` and `onPlayerExitWorld` listeners.
  + Note that these listeners fire for both NPC and human players. The handler functions determine the code to execute.
  + If the entering player is determined to be a human player, then the player is assigned a new PlayerState, which is added to the player map based on the player’s ID.
  + When a player exits, the player is removed from the player map.
* When the `villageElder` and `merchant` script properties are specified with entities in the world, the `preStart()` method spawns them into the world.
  **Note**: Spawning in NPCs can take a few seconds, so it’s good to begin that process as part of the `preStart()` method.
* NavMesh:
  + Acquire the `NPC` nav mesh.
  + Perform a `bake()` of the nav mesh, so that it’s ready to go for the NPCs to use.

### PlayerState

The PlayerState object is locally maintained to track the state of human players in the world. This object contains a reference to the player definition (`hz.Player`) and stats on gem and coin collection.

```
export class PlayerState {
  public player!: hz.Player;
  public gemsCollected : number = 0;
  public coins : number = 0;
  public gemQuestCompleted : boolean = false;
  // public updateNPCsForPlayerId : number = 0;

  public constructor(init?:Partial<PlayerState>) {
    Object.assign(this, init);
  }
}
```

### spawnAgentPlayer()

To spawn in NPCs, you must define the entity or asset as an `AvatarAIAgent` gizmo and then use the `spawnAgentPlayer()` method to bring them into the world. In the following code, the result is passed to the `onSpawnResult()` function, which currently does not do anything.

```
if (this.props.villageElder) {
  const ve: AvatarAIAgent = this.props.villageElder?.as(AvatarAIAgent);
  ve.spawnAgentPlayer().then((spawnResult) => this.onSpawnResult(spawnResult, ve));
}
if (this.props.merchant) {
  const merch: AvatarAIAgent = this.props.merchant?.as(AvatarAIAgent);
  merch.spawnAgentPlayer().then((spawnResult) => this.onSpawnResult(spawnResult, merch));
}
```

## Event listeners

The `start()` method defines listeners for the following events from the gem game:

```
this.connectLocalBroadcastEvent(
  gameStateChanged,
  (payload: {state : GameState}) => this.onGameStateChanged(payload.state));

this.connectLocalBroadcastEvent(
  collectGem,
  (payload: {gem: hz.Entity, collector: hz.Player}) => this.onGemCollected(payload.gem, payload.collector));
```

Each of these event listeners maps to a local function, which performs updates for the NPCs when the game state has changed (`Ready`, `Playing`, or `Finished`).

Start also sets up the update loop to be called on a 10 second interval via `onUpdate()`. The initial delay of 10 seconds allows other Horizon World systems to initialize in the background.

**Tip**: Create listeners for these system events to perform updating relevant to your current script.

## NPCBehavior Class and Extensions

The base class for the module is the `NPCBehavior` abstract class, which includes the following methods:

| NPCBehavior Method | Description |
| --- | --- |
| `UpdateForPlayer` | Updates NPC behaviors for the specified player. This method is unused in the base class. Derivative classes script behaviors for NPCs based on game state. |
| `onTransactionDone` | Performs completion of a trading transaction for a specified player, with values for the number of gems and coins trading hands as parameters. This method is unused in the base class. Some of the extensions use it for performing player-specific updates. |
| `GetPathTo` | From a Vec3 point to a Vec3 point in the world, this method returns an array of waypoints along the navmesh to move between the specified points. This method makes 20 attempts to find a set of waypoints. It is called from `moveToPosition()`. |
| `moveToPosition` | This method is a basic example of NavMesh API usage, and calculates for the NPC (AvatarAIAgent) the nearest points on the NavMesh for its current position (as a starting point) and a specified destination (as an end point). These Vec3 points are passed to `GetPathTo()` to calculate the specific waypoints on the NavMesh for the NPC to use. Then, the returned waypoints are fed into the AvatarAIAgent methods: `rotateTo()` which rotates the agent in the direction of the `destination`. `moveToPosition()`, which moves the agent in the direction of the `destination`. |
| `calcTargetPos` | This function calculates the target position of a specified entity. If the entity is an `hz.Player` entity, then the target is defined by the position of the foot of the avatar. This method is called from `MoveToEntity()`. |
| `moveToEntity` | This method is used to move the agent in front of an entity. For the sake of simplicity of pathfinding demonstration, the agent does *not* continually update its target position for moving entities. More advanced implementations could implement hierarchical state machines to manage non-trivial pathfinding scenarios, such as continuous target following. |

### Extensions of NPCBehavior

The NPCBehavior base class is extended to create the following classes, each of which addresses one of the distinct game states in a rudimentary state machine to orchestrate and coordinate NPCs. More advanced behaviors may benefit from using abstractions such as hierarchical finite state machines or behavior trees.

| Class Name | Game State | Description |
| --- | --- | --- |
| `NPCBehaviorGameReady` | `Ready` | This class defines setting up the game for players and NPCs. Methods: `updateforPlayer()` |
| `NPCBehaviorGamePlaying` | `Playing` | When the game is being played, this class defines behaviors for the NPCs based on the state of collected gems. Methods: `updateforPlayer()``shouldBennyHill()` - periodically, if the number of collected gems is not all of them, the Traveling Merchant may start grabbing gems and putting them back in their original spots, just to annoy the Village Elder and the player. |
| `NPCBehaviorGameFinished` | `Finished` | When all gems have been collected, this class defines what happens next. In this case, the Traveling Merchant NPC runs to the Reset Game area, and the game is reset to Ready status. Methods: `updateforPlayer()``getWinningPlayer()` - walks through the set of human players to determine the one that has gathered the most gems, returning that player as the winning one. |