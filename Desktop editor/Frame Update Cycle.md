Source: https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/frames

# Frame Update Cycle

A frame update cycle in a VR world is the repeating process that updates and renders a graphical snapshot (frame) of an animated scene based on the constantly updating state of the world. The process is repeated many times per second to produce an interactive animated environment from the local player’s perspective. In Meta Horizon Worlds, the cycle includes simulation, scripting, synchronization, and for clients, rendering the world in a frame that includes images targeting both lenses on a VR headset.

Every action in a world is performed within a frame consisting of phases that execute in the following order:

- **[Simulation](Frame%20Update%20Cycle.md#simulation-phase)**:
  * Updates player movement and recorded animations.
  * Runs code before physics calculations.
  * Computes physics updates and detects collisions.
  * Runs code after physics calculations.
- **[Scripting](Frame%20Update%20Cycle.md#script-phase)**:
  * Handles CodeBlockEvents, LocalEvents, and NetworkEvents.
  * Processes player input.
  * Runs async callbacks.
  * Commits scene graph updates.
- **[Synchronization](Frame%20Update%20Cycle.md#synchronization-phase)**:
  * Processes received network information.
  * Sends network updates.
- **[Rendering](Frame%20Update%20Cycle.md#rendering)**: This process is only performed on player’s devices and not the server.
  * Calculates views of the finalized frame for both eyes.
  * Performs post-processing effects on the images.
  * Displays the images on the player’s headset.

### Simulation

Simulation is the process of calculating the world state at a specific moment in time. Simulation runs at the start of the frame and includes physics calculations, player movement, and animation updates, as well as the ability to run code right before or after physics updates.

Simulation includes the following tasks.

- **Pre-physics updates**
  * Broadcasts the [World.onPrePhysicsUpdate](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/reference/2.0.0/core_world#onprephysicsupdate) event [locally](../Scripting/Local%20scripting/Getting%20Started%20with%20Local%20Scripting.md), which activates all local event listeners. In your scripts, you typically implement callbacks for this event to update the player’s position so physics can react to the movement; however, you don’t typically use this event to move entities.
- **Physics updates**
  * Updates the player’s position and pose based on locomotion input.
  * Updates animation playback.
  * Runs physics calculations, applying force and torque to entities that have [simulation enabled](Physics%20Overview.md#physical-entities).
  * Detects collisions with objects, players, and [triggers](../Gizmos/Trigger%20zone%20gizmo.md), and queues the associated [CodeBlockEvents](../Scripting/Events/CodeBlock%20Events.md) to run in the [scripting phase](Frame%20Update%20Cycle.md#scripting).
- **Post-physics updates**
  * Broadcasts the [World.onUpdate](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/reference/2.0.0/core_world#onupdate) event [locally](../Scripting/Local%20scripting/Getting%20Started%20with%20Local%20Scripting.md), which activates all local event listeners. In your scripts, you typically implement callbacks for this event to update the position of entities, or to update the player’s position as a result of physics interactions.

For more information about physics simulation, see the [physics overview](Physics%20Overview.md).

### Scripting

The scripting phase initializes components, handles event processing, applies pending scene graph changes, and initiates [entity ownership](../Scripting/Local%20scripting/Ownership%20in%20Meta%20Horizon%20Worlds.md) transfer. A scene graph is a collection of all of entities, their attributes, and relationships in the world.

The scripting phase includes the following tasks.

- **Scene graph preparation**
  * Buffers the current [scene graph mutations](Frame%20Update%20Cycle.md#scene-graph-mutations) performed throughout the frame. Mutations performed after this step aren’t committed to the scene graph for this frame.
- **Component initialization**
  * Executes script files due to the world instance starting, [asset spawning](../Scripting/Asset%20spawning/Introduction%20to%20Asset%20Spawning.md), or [world streaming](../Scripting/Asset%20spawning/World%20Streaming.md). In this step the script is only run in the top-level scope.
  * Instantiates and starts new components due to the world instance starting, asset spawning, world streaming, or due to [ownership transferring](../Scripting/Local%20scripting/Ownership%20in%20Meta%20Horizon%20Worlds.md) to the current client. For more information about instantiating components, see the [component lifecycle](../Scripting/TypeScript%20Script%20Lifecycle.md#typescript-component-lifecycle) guide.
- **Event processing**
  * Runs [NetworkEvent](../Reference/core/Classes/NetworkEvent.md) listeners.
  * Runs [PlayerInput](../Reference/core/Classes/PlayerInput.md) callbacks.
  * Runs [CodeBlockEvent](../Scripting/Events/CodeBlock%20Events.md) listeners including [built-in](../Reference/core/Variables/CodeBlockEvents.md) code block events, such as those prepared in the [physics update](Frame%20Update%20Cycle.md#simulation-phase) step.
- **Scene graph updates**
  * Applies the scene graph mutations prepared at the beginning of the scripting phase.
- **Final Callbacks**
  * Runs any overdue asynchronous callbacks until too much time elapses, and then delays any remaining callbacks until the next frame. This does not apply to events, such as code block events and network events.
  * Calls the [transferOwnership()](../Reference/core/Abstract%20Classes/Component.md#transferownership) and [receiveOwnership()](../Reference/core/Abstract%20Classes/Component.md#receiveownership) callbacks.
  * Disconnects event subscriptions from components marked for disposal and calls the [Component.dispose()](../Reference/core/Abstract%20Classes/Component.md#dispose) callback on them.

For more information about scripts, see [Scripting using TypeScript](../Scripting/Scripting%20using%20TypeScript.md).

#### Scene graph mutations

A scene graph mutation is a property update on an entity in a scene graph. The change isn’t applied to a frame until it is committed to the scene graph of that frame. Some scene graph mutations are committed in the current frame while others are committed up to 2 frames later based on the type of change performed.

The timing for committing scene graphs is based on these conditions:

* Scene graph mutations run in event handlers for the [World.onPrePhysicsUpdate](../Reference/core/Classes/World.md#onprephysicsupdate) and [World.onUpdate](../Reference/core/Classes/World.md#onupdate) events are seen in the next frame unless they update the player’s position.
* When the player’s position is updated in the [World.onPrePhysicsUpdate](../Reference/core/Classes/World.md#onprephysicsupdate) event, the change is available immediately for physics calculations. The [World.onPrePhysicsUpdate](../Reference/core/Classes/World.md#onprephysicsupdate) event is useful for moving players but not other entities.
* Scene graph mutations performed outside the `World.onPrePhysicsUpdate` and `World.onUpdate` events are committed to the scene graph 2 frames after being performed.

At the start of the script phase, all pending mutations are buffered, then the frame continues with component initialization and event callbacks. Any new modifications during those callbacks are buffered until the next frame. When it’s time to commit the mutations, only the ones that were prepared at the start of the script phase are applied to the current frame; newer modifications wait for the next frame. This buffering system means that modifications made during the script phase aren’t visible in the same frame.

For example, when you call `set()` on an entity [property](../Reference/core/Interfaces/WritableHorizonProperty.md), the changes are not immediately written to the scene graph. This means that if you call the `get()` method on the property, you will not get the new value you just set. Instead, the change is buffered (stored and applied later).

In this example, the `get()` method retrieves the old position of the entity instead of the new one that was just set.

```
entity.position.set(newPos);
const pos = entity.position.get();  // Still the old position
```

### Synchronization

Synchronization is the process of synchronizing the state of the world over the network between clients and the server. Synchronization includes the following tasks.

- Prepare received network events for processing during the next frame.
- Network events created in this frame are broadcast to other clients.

[Network synchronization](Network%20Model%20Overview.md#synchronization) and ownership is optimized to improve performance of entities that have physics simulation enabled. For details about physics simulation and synchronization, see the [Physics overview](Physics%20Overview.md#ownership-and-synchronization).

### Rendering

**Note**: The server does not perform rendering. The rendering process is only performed by clients on players’ devices.

In the rendering process, the client generates separate images for both lenses on the player’s VR headset based on the finalized frame that represents the state of the world from the player’s viewpoint.

Rendering includes the following tasks.

- Calculates the view of the finalized frame for both of the player’s eyes based on the position of the player’s head. This involves determining which objects are visible from the player’s perspective, applying lighting, materials, and shaders, and then producing two slightly offset images that create depth perception.
- Performs post-processing effects and lens distortion correction to enhance comfort and realism.
- Display the images for both eyes in the player’s headset.

## Frame timing metrics

The amount of time it takes for a client or server to complete a frame update cycle, and the rate frames run over time can vary. The following metrics are used when describing the timing of frame update cycles:

* **Frame rate (FPS):** The number of frames run every second.
* **Frame time:** The amount of time it takes to render a frame.
* **Delta time:** The time elapsed between the start of the previous frame and the start of the current frame.

The frame rate for clients is the number of frames rendered; for the server, because the server doesn’t render frames, this is the number of completed frame cycles. Clients can have different frame rates. For example, the server typically cycles through frames at 60 FPS, while many VR headsets run at 72 FPS. As a result, scripts often run more frequently on clients than on the server.

The frame time is useful for running physics simulations and animations, but the time can vary with each frame. As a result, in your code, you shouldn’t rely on a specific frame rate or frame time. Instead, use the delta time provided by the [world update events](../Scripting/Events/World%20Update%20Events.md) to get the time that elapsed from the start of the previous frame to the start of the current frame, in milliseconds.

There is no separate physics simulation rate. In many game engines, physics simulation runs at a different rate than rendering does. The physics simulation rate is often referred to as a fixed update. In Meta Horizon Worlds, every client executes the same cycle every frame, which includes both physics simulation and rendering.