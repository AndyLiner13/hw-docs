# AvatarPoseGizmo Class

Extends [Entity](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_entity). Controls player interaction with the Avatar Pose gizmo, which allows players to enter an avatar pose on an entity. The gizmo is typically used to enter a player into a sitting pose on a specific entity.

## Signature

```typescript
export declare class AvatarPoseGizmo extends Entity
```

## Properties

| Property | Description |
| --- | --- |
| `exitAllowed` | Indicates whether to allow players to exit the Avatar Pose gizmo. True allows players to exit the gizmo; false does not. The default value is true.<br/>**Signature:** `exitAllowed: HorizonProperty<boolean>;`<br/>**Examples:** In this example, the exitAllowed property is set false, preventing players from exiting the avatar pose. `this.entity.as(AvatarPoseGizmo).exitAllowed.set(false);` |
| `player` | The player to add to the Avatar Pose gizmo.<br/>**Signature:** `player: HorizonProperty<Player \| null>;`<br/>**Examples:** In this example, a player is added to the Avatar Pose gizmo, which will teleport the player to the gizmo. `this.entity.as(AvatarPoseGizmo).player.set(player);`<br/>**Remarks:** When a player is added to the gizmo, they teleport to the gizmo and then the avatar pose is applied to them. If another player is already on the gizmo when this property is set, they will be removed. Setting this property to null just removes any existing player from the gizmo. |

## Methods

| Method | Description |
| --- | --- |
| `canPlayerUse(player)` | Indicates whether the given player can use the avatar pose on the entity.<br/>**Signature:** `canPlayerUse(player: Player): boolean;`<br/>**Parameters:** player: Player - The player to check permissions for.<br/>**Returns:** boolean - true if the player has permission to use the avatar pose on the entity, false otherwise.<br/>**Examples:** In this example, the canPlayerUse is used to check if a certain player can use the Avatar Pose entity. As a result, this API returns true or false. `this.entity.as(AvatarPoseGizmo).canPlayerUse(player);` |
| `resetCanUseForPlayers()` | Removes all players from the list set by the AvatarPoseGizmo.setCanUseForPlayers() method, either allowing or blocking all players from using the avatar pose on the entity depending on the mode.<br/>**Signature:** `resetCanUseForPlayers(): void;`<br/>**Returns:** void<br/>**Examples:** In this example, the mode for setCanUseForPlayers is set to block all players in the list from using the avatar pose on the entity. As a result, the call to resetCanUseForPlayers blocks all players from using the avatar pose on the entity. `this.entity.as(AvatarPoseGizmo).setCanUseForPlayers([player1, player2], AvatarPoseUseMode.DisallowUse); this.entity.as(AvatarPoseGizmo).resetCanUseForPlayers();`<br/>**Remarks:** If the mode parameter of the AvatarPoseGizmo.setCanUseForPlayers() method is set to AvatarPoseUseMode.DisallowUse, then calling the resetCanUseForPlayers method blocks all players from using the avatar pose on the entity. |
| `setCanUseForPlayers(players, mode)` | Sets the players that are allowed to use the avatar pose on the entity, and the players that are blocked from using the pose.<br/>**Signature:** `setCanUseForPlayers(players: Array<Player>, mode: AvatarPoseUseMode): void;`<br/>**Parameters:** players: Array<Player> - The list of players to allow or block from using the avatar pose. The mode parameter determines how the list is operates. mode: AvatarPoseUseMode - Indicates whether to allow players in the list to use the avatar pose and block the remaining players, or block players in the list and allow the remaining players.<br/>**Returns:** void<br/>**Examples:** In this example, the mode is set to block two specified players from using the avatar pose. `this.entity.as(AvatarPoseGizmo).setCanUseForPlayers([player1, player2], AvatarPoseUseMode.DisallowUse);`<br/>**Remarks:** This method sets the list that determines the players that have permission to use the avatar pose on the entity associated with the Avatar Pose gizmo. |
| `toString()` | Creates a human-readable representation of the AvatarPoseGizmo object.<br/>**Signature:** `toString(): string;`<br/>**Returns:** string - A string representation of the AvatarPoseGizmo object. |