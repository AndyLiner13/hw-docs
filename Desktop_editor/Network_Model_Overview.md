# Network Model Overview

## Server

 The server for a world instance runs game logic and scripts by default, but
doesn’t render the world or receive local input from a human player. The server also
facilitates synchronization of state changes between clients.  

## Clients

 Clients are instances of Meta Horizon Worlds that run on the devices of human
players. The devices include smartphones, tablets, PCs, and VR headsets. Clients
render the world, receive user input, run local scripts, and synchronize data
with other clients across the network. All clients have a full scene graph, which is a collection of all entities,
their attributes, and their relationships.  

### Players

 Meta Horizon Worlds is designed for multiplayer experiences where human players
interact with each other, AI players, and numerous entities in the world. All
human players are associated with a client and have an avatar that provides them
with a physical presence in the world. Clients prioritize processing state
changes that impact the local player while receiving the remaining data from remote
clients. For example, a client doesn’t process physics for every entity in a scene; some of that data is processed on remote clients
and then synchronized over the network.  

## Synchronization

 Network synchronization is performed on each client near the end of each frame.
During synchronization, each client processes received network data and
broadcasts updates from [network events](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_networkevent) to other clients. Once network synchronization completes on a client, it renders the game world
for the local player.  

### Physics

 The physics engine on each client focuses on simulating local entities and
treats non-local entities as kinematic, so clients can synchronize the position and
velocity of entities over the network without including detailed physics data.
The server resynchronizes physics data periodically to prevent the movement of
non-local entities from diverging from local physics simulations. For more information, see the [Physics overview](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/physics).  

### Entity ownership

 Entity ownership identifies the client that is the current authority for an
entity’s state, as well as the potential to update the entity locally before
broadcasting the change to other clients. Only one client can own an entity at a time. When a new world instance starts ([world.onUpdate](https://developers.meta.com/horizon-worlds/learn/documentation/typescript/events/world-update-events)), the server owns all entities; however, ownership of most entities is
eventually transferred to clients. Ownership typically transfers to another client when
a player grabs an entity, an entity collides with an entity owned by another
client, or a script initiates the [transfer](https://developers.meta.com/horizon-worlds/learn/documentation/typescript/local-scripting/ownership-in-horizon-worlds#ownership-transfer). Note: For information about the lifecycle of scripts and components, see [TypeScript Script Lifecycle](https://developers.meta.com/horizon-worlds/learn/documentation/typescript/typescript-script-lifecycle). By default, all scripts run on the server. If local execution mode is enabled on
a script, the script can run on the client that owns the entity the script is
attached to. This can improve latency for the local player making some actions in
a world feel immediate because it can bypass two or more client-server
interactions. However, running scripts locally limits their interaction with events and
assets. For details, see [Getting Started with Local Scripting](https://developers.meta.com/horizon-worlds/learn/documentation/typescript/local-scripting/getting-started-with-local-scripting). Here’s a comparison of the client server interactions needed for a client to
update the state of an entity based on ownership:
• A client modifies an entity owned by the server:
  1. The update is sent to the server
  2. The server applies the update
  3. The update is sent to all clients
  4. The clients apply the update
• A client modifies an entity it owns:
  1. The owner applies the update at the end of the current frame
  2. The update is sent to the server
  3. The update is sent to the other clients
  4. The clients apply the update
• A client modifies an entity owned by another device:
  1. The update is sent to the server
  2. The update is sent to the owner
  3. The owner applies the update
  4. The update is sent to the server
  5. The update is sent to other clients
  6. The other clients apply the update

 For details about entity ownership, see [Ownership in Meta Horizon Worlds](https://developers.meta.com/horizon-worlds/learn/documentation/typescript/local-scripting/ownership-in-horizon-worlds).  

## Performance considerations

 The following recommendation can improve the network performance of your world.
•  Ownership optimization:
  •  You should run most scripts in default execution mode. However, for scripts that
require lower latency, you should enable local execution mode. For details, see
[Getting Started with Local Scripting](https://developers.meta.com/horizon-worlds/learn/documentation/typescript/local-scripting/getting-started-with-local-scripting).
  •  Use [local events](https://developers.meta.com/horizon-worlds/learn/documentation/typescript/events/local-events) instead of [network events](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_networkevent) for updates that are only relevant and visible to the local player.
  •  Use [local execution mode for custom UI scripts](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/custom-ui/local-mode-custom-ui-scripts) to avoid unecessary network calls in custom UIs.
•  Reducing the number of animations and entities in the world also reduces the
amount of data synchronized between clients, which improves network performance.
•  Use [file backed scripts](https://developers.meta.com/horizon-worlds/learn/documentation/typescript/filebacked-scripts) instead of [legacy script storage](https://developers.meta.com/horizon-worlds/learn/documentation/typescript/legacy-script-storage) to reduce the delivery time of scripts across the network.
•  Measure performance:
  •  When capturing performance data, enable [server tracing options](https://developers.meta.com/horizon-worlds/learn/documentation/performance-best-practices-and-tooling/performance-tools/tracing#tracing-options) so you can analyze world performance, network calls, and script updates.
  •  [Profile your UI](https://developers.meta.com/horizon-worlds/learn/documentation/performance-best-practices-and-tooling/performance-best-practices/custom-ui-optimization) to analyze network RPC events associated with UI binding in custom UIs.
    

    ![Nav Logo](https://static.xx.fbcdn.net/rsrc.php/yE/r/3SoBlk8EqOQ.svg)


[Facebook](https://www.facebook.com/MetaHorizon/)
[Threads](https://www.threads.com/@metahorizon)
[X](https://x.com/MetaHorizon/)
[Instagram](https://www.instagram.com/metahorizon/)
[YouTube](https://www.youtube.com/@MetaQuestVR)

 Learn
[Documentation](https://developers.meta.com/horizon-worlds/learn/documentation/)
[Blog](https://developers.meta.com/horizon/blog/)
[Forum](https://communityforums.atmeta.com/t5/Creator-Forum/ct-p/Meta_Horizon_Creator_Forums)

 Programs
[Meta Horizon Creator Program](https://developers.meta.com/horizon-worlds/programs/)

 My Creations
[My Worlds](https://horizon.meta.com/creator/worlds_all/?utm_source=horizon_worlds_creator)
[My Assets](https://horizon.meta.com/creator/assets/?utm_source=horizon_worlds_creator)
[Performance](https://horizon.meta.com/creator/performance/traces/?utm_source=horizon_worlds_creator)

 Privacy & Legal
[Privacy Policy](https://www.meta.com/legal/privacy-policy/)
[Legal](https://www.meta.com/legal/supplemental-terms-of-service/)

 © 2025 Meta

## Additional Links
- [Meta home](https://developers.meta.com/horizon-worlds/)
- [Login](https://developers.meta.com/login/?redirect_uri=https%3A%2F%2Fdevelopers.meta.com%2Fhorizon-worlds%2Flearn%2Fdocumentation%2Fdesktop-editor%2Fnetwork-model%2F)

# Network Model Overview

 In Meta Horizon Worlds, each virtual world uses a distributed client-server
architecture where a server and multiple clients synchronize state changes across
the network using an entity-component system (ECS). In this approach, each entity
(object) in the world is owned by a client giving it authority to modify the
entity and broadcast the updates to other clients on the network. Entity ownership determines where code runs and what tasks are performed on a
local client before state changes are synchronized with remote clients. Ownership
is transferred between clients to lower latency, reduce consumption of computing
resources, and reduce the amount of physics data synchronized over the network.
When using scripts to update entities in real-time, you can set the execution
mode to improve the latency of specific entities while they are owned by the
local client.  

## Server
## Clients
## Synchronization
## Performance considerations
## Additional Links
      Learn
# Network Model Overview
