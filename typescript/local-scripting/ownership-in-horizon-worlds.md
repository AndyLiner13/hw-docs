Source: https://developers.meta.com/horizon-worlds/learn/documentation/typescript/local-scripting/ownership-in-horizon-worlds

# Ownership in Meta Horizon Worlds

In Meta Horizon Worlds, the concept of ownership is based on the Meta Horizon Worlds networking model. Ownership is a mechanism used to determine which client (either the server or a user’s device) is the authority for a particular entity’s state.

A script component is attached to a particular entity, and that entity is owned by a particular client. So in effect, ownership determines where the script executes. By default, entities are owned by the server, and scripts therefore execute on the server. But entity ownership can change. When it does, the script then executes on another client.

## Where scripts execute

When scripts execute on the server, the resulting perceived experience is adequate for most users, but it’s not optimal. This is because of the latency incurred in transmitting rendered scenes to players. Latency increases (gets worse) with:

* The distance the signal travels.
* A decrease in the quality of the network connection.
* The amount of traffic on the network.

The higher the latency, the worse the user experience—as users experience more and more jitter in their video image. But there are no latency problems when scripts execute locally (that is, on a user’s VR headset, mobile device, or desktop computer). Here, physics renders more faithfully, object properties update immediately, and the resulting user experience is greatly improved.

High fidelity of the perceived experience becomes essential whenever a player becomes the center of the action; for example when they take possession of the ball, or when they collide with an object in the scene. If all players in a game were merely observers throughout the game, then there’d never be a need for any one user to experience high fidelity graphics. There’d never be a need to transfer script execution from the server to any client device. It’s the transfer of entity ownership that causes script execution to change to another client.

## Entity ownership

Ownership is about owning the entity that the script component is attached to. Script components are always attached to an entity, and that entity is always owned by either the server or a client. By default, entities are owned by the server. This maintains a common experience for all players in the world. Also, script components attached to entities owned by the server can’t be modified by malicious clients, which prevents cheating. In terms of overall performance, servers are the best choice for running scripts because resource-expensive processes run more smoothly on them since they have more processing power and more memory than typical user devices.

By default, the server owns everything. It updates all of the properties in the world. But to maintain the maximum game fidelity from a player’s perspective, entity ownership is transferred on a game interaction, and the script then runs locally, if able. For a script to be able to run locally, you must:

- Set its execution mode to *local*.
- Transfer ownership of the entity that it’s attached to, to the player.
  * This happens automatically when there’s a collision.
  * Or you can force it manually in your script code.

**Note**: When a script runs locally, there’s lower latency for the player that owns the entity that the script component is attached to. But scene updates appear slower for the other players.

## Script execution mode

Scripts have an execution mode property that specifies whether the script can run locally. Execution mode can be either *default* or *local*.

**Default**

* The script always runs on the server—regardless of the owner of the entity that the script component is attached to.
* This is the default execution mode.

**Local**

* The script will run on the client that owns the entity that the script component is attached to.
* You must select this execution mode.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452532429_512524664618823_2690924150930112816_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=NQYxXjnxPD4Q7kNvwFdNyAD&_nc_oc=AdnOyJ-xAKu6wobI7fbIXpaV33EIhXQ99eTvuUthBFqX2QRJZCvYd8Od-J5VaFV6ico&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=qLuGsoVzkG5z74fsF_DWYA&oh=00_AfgBCpREsBeYgLrPmqFTEsc98V38B68w_Z4PkvnVKnpOYA&oe=692C07F3)

**Note** : Entity ownership is its own construct, separate from scripting. Local execution uses this property to determine which client a script runs on (it’s always the client that owns the entity that a script component is attached to).

## Ownership transfer

Transferring ownership of an entity is about maintaining the source of truth for entity states. States are things like the entity’s color, position, and momentum. Because the owner client is the source of truth, entity state changes on the owner client propagate to the same entity on other clients.

In regard to scripting, you can think of entity ownership transfer as a way of reducing latency. It does this by having a script run on the local client so that state changes to its associated entity occur immediately on that client.

**Note:** When ownership transfers, state details are actually lost. The script shuts down on the old owner client, and then restarts on the new owner client. So you must package the state data and repopulate the properties, which are on the same entity. For details, see [Ownership transfer between clients](/horizon-worlds/learn/documentation/typescript/local-scripting/ownership-in-horizon-worlds#ownership-transfer-between-clients).

## Automatic ownership transfer

Automatic transfer of entity ownership has more to do with simulation than with scripting. Entity ownership automatically transfers from one client to another whenever a player in the game grabs something (for example, a gun), or when a player collides with something. In general, grabbing an entity transfers ownership from the prior client to the one that grabbed it.

## Manual ownership transfer

If you set your script execution mode to *local* , then you can add a statement to your script that forces the transfer of entity ownership to the client. You might want to do this for example, when an object follows the player, and you want the object’s motion to look more realistic from the player’s perspective. In your script, you’d add the following statement:

```vs
this.entity.owner.set(player);
```

**Note** : The terms *player* and *client* are sometimes used interchangeably. In the Meta Horizon Worlds API, when you set the owner of an entity to a player, you’re actually setting the owner of the entity to that player’s client.

## Ownership transfer between clients

The following list shows the order of operations involved in an ownership transfer. Assume that calls are made on a script component called MyScriptComponent, and that ClientA and ClientB are of type [`Player`](https://horizon.meta.com/resources/scripting-api/core.player.md/?api_version=2.0.0).

- **ClientA** calls `this.entity.owner.set(clientB);`. This triggers a manual transfer of ownership from ClientA to ClientB.
- **ClientA** calls [`transferOwnership()`](https://horizon.meta.com/resources/scripting-api/core.component.transferownership.md/?api_version=2.0.0). You can implement this optional method in your script to return state details that are sent to the instance of the script component that will run on ClientB.
- **ClientA** calls [`dispose()`](https://horizon.meta.com/resources/scripting-api/core.component.dispose.md/?api_version=2.0.0). All of your cleanup details are run in the script.
- **ClientB** creates a new instance of **MyScriptComponent**.
- **ClientB** calls [`start()`](https://horizon.meta.com/resources/scripting-api/core.component.start.md/?api_version=2.0.0).
- **ClientB** calls [`receiveOwnership()`](https://horizon.meta.com/resources/scripting-api/core.component.receiveownership.md/?api_version=2.0.0). All of the states that you send from ClientA are received by ClientB. You can use it to persist state between clients.

## When to prevent ownership transfer

You can use the property **Keep ownership on collision** to prevent collision-based transfer of ownership of an entity.

There are scenarios where you might not want ownership automatically transferred on collision. Consider a bowling game in which the player’s bowling ball collides with ten pins, which in turn collide with one another. When you bowl the ball, each collision would transfer entity ownership to the client. This would result in hitches (latency) as pin ownership transfers to your client, and you’d therefore begin to lose more and more fidelity. In this case, to make the end state of the game as accurate as possible, you might decide that the bowling ball isn’t owned by the player.

Consider the game Drive Time. In this game, you might have eight cars, with eight players. For someone driving a particular car, you’d want their experience to be in the highest fidelity. But if someone hits their car, you wouldn’t want their car executing on another player’s client. In that case, you’d want to maintain ownership. It would result in lower fidelity collisions, but at least each player’s fidelity would be maintained.