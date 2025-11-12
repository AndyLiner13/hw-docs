Source: https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/noesis-ui/shared-mode-noesis-scripts

Learn

# Shared Mode for Noesis UI Scripts

NoesisUI introduces Shared mode—a new scripting execution mode that simplifies per-player UI interactions by eliminating the need for entity cloning and ownership transfer. Understanding the differences between scripting modes is essential for building performant and responsive UI experiences in your world.

## Scripting modes in CustomUI 1.0

CustomUI 1.0 supports two scripting modes: Default and Local.

### Default mode

In Default mode, a single script instance runs on a Master client and controls CustomUI for all users. Networking operations required to propagate binding values are performed automatically under the hood. While this makes it easier to use, interactions in this mode are laggy (roundtrip time between a Master client and a player client is ~300ms).

### Local mode

In Local mode, the script controlling CustomUI follows entity ownership and can be run locally on a player client. This makes interaction faster but because only one player can own any given CustomUI entity at a time, this mode requires entity pooling (creating a separate clone of a CustomUI entity for each player) and ownership transfer, usually happening when a new player enters the world. Making it fast and reliable is known to be tricky.

## How NoesisUI behaves differently

NoesisUI is designed to avoid the hidden networking complexity and lagginess of bindings (also known as DataContexts). As a result, Noesis only supports local UIs, and the following limitations apply:

* **Default mode scripts won’t work**: An attempt to set Noesis dataContext on a Master client will only result in warnings in the logs with no other visible effects.
* **Local mode scripts work with limitations**: Local mode scripts function for Noesis similarly to CustomUI, but with the same set of drawbacks caused by entity cloning and ownership transfer.

## Shared mode for NoesisUI

The recently introduced Shared mode removes the need for NoesisUI entity cloning and ownership transfer by running an attached script on all clients (including the Master client) at the same time.

### Benefits of Shared mode

* Makes it easy to set DataContexts individually for every player.
* Eliminates the complexity of entity pooling and ownership transfer.
* Provides a simpler approach to managing per-player UI interactions.

### Limitations of Shared mode

An important drawback of the Shared mode approach is that as it’s a single shared NoesisUI entity, its generic properties such as position and size are shared by all players as well, and can’t be modified per-player. This is generally not a problem for stationary panels and HUDs but may become an issue in more dynamic cases.