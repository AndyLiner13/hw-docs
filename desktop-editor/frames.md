Source: https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/frames

# Frame Update Cycle

A frame update cycle in a VR world is the repeating process that updates and renders a graphical snapshot (frame) of an animated scene based on the constantly updating state of the world. The process is repeated many times per second to produce an interactive animated environment from the local player’s perspective. In Meta Horizon Worlds, the cycle includes simulation, scripting, synchronization, and for clients, rendering the world in a frame that includes images targeting both lenses on a VR headset.

Every action in a world is performed within a frame consisting of phases that execute in the following order:

- **[Simulation](#simulation-phase)**:
  * Updates player movement and recorded animations.
  * Runs code before physics calculations.
  * Computes physics updates and detects collisions.
  * Runs code after physics calculations.
- **[Scripting](#script-phase)**:
  * Handles CodeBlockEvents, LocalEvents, and NetworkEvents.
  * Processes player input.
  * Runs async callbacks.
  * Commits scene graph updates.
- **[Synchronization](#synchronization-phase)**:
  * Processes received network information.
  * Sends network updates.
- **[Rendering](#rendering)**: This process is only performed on player’s devices and not the server.
  * Calculates views of the finalized frame for both eyes.
  * Performs post-processing effects on the images.
  * Displays the images on the player’s headset.

### Simulation

Simulation is the process of calculating the world state at a specific moment in time. Simulation runs at the start of the frame and includes physics calculations, player movement, and animation updates, as well as the ability to run code right before or after physics updates.

Simulation includes the following tasks.

- **Pre-physics updates**
  * Broadcasts the [World.onPrePhysicsUpdate](reference/2.0.0/core_world#onprephysicsupdate) event [locally](/horizon-worlds/learn/documentation/typescript/local-scripting/getting-started-with-local-scripting), which activates all local event listeners. In your scripts, you typically implement callbacks for this event to update the player’s position so physics can react to the movement; however, you don’t typically use this event to move entities.
- **Physics updates**
  * Updates the player’s position and pose based on locomotion input.
  * Updates animation playback.
  * Runs physics calculations, applying force and torque to entities that have [simulation enabled](/horizon-worlds/learn/documentation/desktop-editor/physics#physical-entities).
  * Detects collisions with objects, players, and [triggers](/horizon-worlds/learn/documentation/code-blocks-and-gizmos/use-the-trigger-zone), and queues the associated [CodeBlockEvents](/horizon-worlds/learn/documentation/typescript/events/codeblock-events) to run in the [scripting phase](#scripting).
- **Post-physics updates**
  * Broadcasts the [World.onUpdate](reference/2.0.0/core_world#onupdate) event [locally](/horizon-worlds/learn/documentation/typescript/local-scripting/getting-started-with-local-scripting), which activates all local event listeners. In your scripts, you typically implement callbacks for this event to update the position of entities, or to update the player’s position as a result of physics interactions.

For more information about physics simulation, see the [physics overview](/horizon-worlds/learn/documentation/desktop-editor/physics).

### Scripting

The scripting phase initializes components, handles event processing, applies pending scene graph changes, and initiates [entity ownership](/horizon-worlds/learn/documentation/typescript/local-scripting/ownership-in-horizon-worlds) transfer. A scene graph is a collection of all of entities, their attributes, and relationships in the world.

The scripting phase includes the following tasks.

- **Scene graph preparation**
  * Buffers the current [scene graph mutations](#scene-graph-mutations) performed throughout the frame. Mutations performed after this step aren’t committed to the scene graph for this frame.
- **Component initialization**
  * Executes script files due to the world instance starting, [asset spawning](/horizon-worlds/learn/documentation/typescript/asset-spawning/introduction-to-asset-spawning), or [world streaming](/horizon-worlds/learn/documentation/typescript/asset-spawning/world-streaming). In this step the script is only run in the top-level scope.
  * Instantiates and starts new components due to the world instance starting, asset spawning, world streaming, or due to [ownership transferring](/horizon-worlds/learn/documentation/typescript/local-scripting/ownership-in-horizon-worlds) to the current client. For more information about instantiating components, see the [component lifecycle](/horizon-worlds/learn/documentation/typescript/typescript-script-lifecycle#typescript-component-lifecycle) guide.
- **Event processing**
  * Runs [NetworkEvent](/horizon-worlds/reference/2.0.0/core_networkevent) listeners.
  * Runs [PlayerInput](/horizon-worlds/reference/2.0.0/core_playerinput) callbacks.
  * Runs [CodeBlockEvent](/horizon-worlds/learn/documentation/typescript/events/codeblock-events) listeners including [built-in](/horizon-worlds/reference/2.0.0/core_codeblockevents) code block events, such as those prepared in the [physics update](#simulation-phase) step.
- **Scene graph updates**
  * Applies the scene graph mutations prepared at the beginning of the scripting phase.
- **Final Callbacks**
  * Runs any overdue asynchronous callbacks until too much time elapses, and then delays any remaining callbacks until the next frame. This does not apply to events, such as code block events and network events.
  * Calls the [transferOwnership()](/horizon-worlds/reference/2.0.0/core_component#transferownership) and [receiveOwnership()](/horizon-worlds/reference/2.0.0/core_component#receiveownership) callbacks.
  * Disconnects event subscriptions from components marked for disposal and calls the [Component.dispose()](/horizon-worlds/reference/2.0.0/core_component#dispose) callback on them.

For more information about scripts, see [Scripting using TypeScript](/horizon-worlds/learn/documentation/typescript/typescript).

#### Scene graph mutations

A scene graph mutation is a property update on an entity in a scene graph. The change isn’t applied to a frame until it is committed to the scene graph of that frame. Some scene graph mutations are committed in the current frame while others are committed up to 2 frames later based on the type of change performed.

The timing for committing scene graphs is based on these conditions:

* Scene graph mutations run in event handlers for the [World.onPrePhysicsUpdate](/horizon-worlds/reference/2.0.0/core_world#onprephysicsupdate) and [World.onUpdate](/horizon-worlds/reference/2.0.0/core_world#onupdate) events are seen in the next frame unless they update the player’s position.
* When the player’s position is updated in the [World.onPrePhysicsUpdate](/horizon-worlds/reference/2.0.0/core_world#onprephysicsupdate) event, the change is available immediately for physics calculations. The [World.onPrePhysicsUpdate](/horizon-worlds/reference/2.0.0/core_world#onprephysicsupdate) event is useful for moving players but not other entities.
* Scene graph mutations performed outside the `World.onPrePhysicsUpdate` and `World.onUpdate` events are committed to the scene graph 2 frames after being performed.

At the start of the script phase, all pending mutations are buffered, then the frame continues with component initialization and event callbacks. Any new modifications during those callbacks are buffered until the next frame. When it’s time to commit the mutations, only the ones that were prepared at the start of the script phase are applied to the current frame; newer modifications wait for the next frame. This buffering system means that modifications made during the script phase aren’t visible in the same frame.

For example, when you call `set()` on an entity [property](/horizon-worlds/reference/2.0.0/core_writablehorizonproperty), the changes are not immediately written to the scene graph. This means that if you call the `get()` method on the property, you will not get the new value you just set. Instead, the change is buffered (stored and applied later).

In this example, the `get()` method retrieves the old position of the entity instead of the new one that was just set.

```vs
entity.position.set(newPos);
const pos = entity.position.get();  // Still the old position
```

### Synchronization

Synchronization is the process of synchronizing the state of the world over the network between clients and the server. Synchronization includes the following tasks.

- Prepare received network events for processing during the next frame.
- Network events created in this frame are broadcast to other clients.

[Network synchronization](/horizon-worlds/learn/documentation/desktop-editor/network-model#synchronization) and ownership is optimized to improve performance of entities that have physics simulation enabled. For details about physics simulation and synchronization, see the [Physics overview](/horizon-worlds/learn/documentation/desktop-editor/physics#ownership-and-synchronization).

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

The frame time is useful for running physics simulations and animations, but the time can vary with each frame. As a result, in your code, you shouldn’t rely on a specific frame rate or frame time. Instead, use the delta time provided by the [world update events](/horizon-worlds/learn/documentation/typescript/events/world-update-events) to get the time that elapsed from the start of the previous frame to the start of the current frame, in milliseconds.

There is no separate physics simulation rate. In many game engines, physics simulation runs at a different rate than rendering does. The physics simulation rate is often referred to as a fixed update. In Meta Horizon Worlds, every client executes the same cycle every frame, which includes both physics simulation and rendering.