Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_codeblockevents

# CodeBlockEvents Variable

A collection of all built-in [CodeBlock](/hw-docs/Reference/core/Classes/CodeBlockEvent.md) events that you can subscribe to using the [Component.connectCodeBlockEvent()](/hw-docs/Reference/core/Abstract%20Classes/Component.md) method.

## Signature

```
CodeBlockEvents: {
    OnPlayerEnterTrigger: CodeBlockEvent<[enteredBy: Player]>;
    OnPlayerExitTrigger: CodeBlockEvent<[exitedBy: Player]>;
    OnEntityEnterTrigger: CodeBlockEvent<[enteredBy: Entity]>;
    OnEntityExitTrigger: CodeBlockEvent<[enteredBy: Entity]>;
    OnPlayerCollision: CodeBlockEvent<[collidedWith: Player, collisionAt: Vec3, normal: Vec3, relativeVelocity: Vec3, localColliderName: string, OtherColliderName: string]>;
    OnEntityCollision: CodeBlockEvent<[collidedWith: Entity, collisionAt: Vec3, normal: Vec3, relativeVelocity: Vec3, localColliderName: string, OtherColliderName: string]>;
    OnPlayerEnterWorld: CodeBlockEvent<[player: Player]>;
    OnPlayerExitWorld: CodeBlockEvent<[player: Player]>;
    OnPassiveInstanceCameraCreated: CodeBlockEvent<[sessionId: Player, cameraMode: string]>;
    OnWorldBroadcastCameraJoined: CodeBlockEvent<[cameraPlayer: Player]>;
    OnGrabStart: CodeBlockEvent<[isRightHand: boolean, player: Player]>;
    OnGrabEnd: CodeBlockEvent<[player: Player]>;
    OnMultiGrabStart: CodeBlockEvent<[player: Player]>;
    OnMultiGrabEnd: CodeBlockEvent<[player: Player]>;
    OnIndexTriggerDown: CodeBlockEvent<[player: Player]>;
    OnIndexTriggerUp: CodeBlockEvent<[player: Player]>;
    OnButton1Down: CodeBlockEvent<[player: Player]>;
    OnButton1Up: CodeBlockEvent<[player: Player]>;
    OnButton2Down: CodeBlockEvent<[player: Player]>;
    OnButton2Up: CodeBlockEvent<[player: Player]>;
    OnAttachStart: CodeBlockEvent<[player: Player]>;
    OnAttachEnd: CodeBlockEvent<[player: Player]>;
    OnProjectileLaunched: CodeBlockEvent<[launcher: Entity]>;
    OnProjectileHitPlayer: CodeBlockEvent<[playerHit: Player, position: Vec3, normal: Vec3, headshot: boolean]>;
    OnProjectileHitEntity: CodeBlockEvent<[entityHit: Entity, position: Vec3, normal: Vec3, isStaticHit: boolean]>;
    OnProjectileHitObject: CodeBlockEvent<[objectHit: Entity, position: Vec3, normal: Vec3]>;
    OnProjectileHitWorld: CodeBlockEvent<[position: Vec3, normal: Vec3]>;
    OnProjectileExpired: CodeBlockEvent<[position: Vec3, rotation: Quaternion, velocity: Vec3]>;
    OnAchievementComplete: CodeBlockEvent<[player: Player, scriptId: string]>;
    OnCameraPhotoTaken: CodeBlockEvent<[player: Player, isSelfie: boolean]>;
    OnItemPurchaseStart: CodeBlockEvent<[player: Player, item: string]>;
    OnItemPurchaseComplete: CodeBlockEvent<[player: Player, item: string, success: boolean]>;
    OnItemConsumeStart: CodeBlockEvent<[player: Player, item: string]>;
    OnItemConsumeComplete: CodeBlockEvent<[player: Player, item: string, success: boolean]>;
    OnItemPurchaseSucceeded: CodeBlockEvent<[player: Player, item: string]>;
    OnItemPurchaseFailed: CodeBlockEvent<[player: Player, item: string]>;
    OnPlayerConsumeSucceeded: CodeBlockEvent<[player: Player, item: string]>;
    OnPlayerConsumeFailed: CodeBlockEvent<[player: Player, item: string]>;
    OnPlayerSpawnedItem: CodeBlockEvent<[player: Player, item: Entity]>;
    OnAssetSpawned: CodeBlockEvent<[entity: Entity, asset: Asset]>;
    OnAssetDespawned: CodeBlockEvent<[entity: Entity, asset: Asset]>;
    OnAssetSpawnFailed: CodeBlockEvent<[asset: Asset]>;
    OnAudioCompleted: CodeBlockEvent<[]>;
    OnPlayerEnterAFK: CodeBlockEvent<[player: Player]>;
    OnPlayerExitAFK: CodeBlockEvent<[player: Player]>;
    OnPlayerEnteredFocusedInteraction: CodeBlockEvent<[player: Player]>;
    OnPlayerExitedFocusedInteraction: CodeBlockEvent<[player: Player]>;
    OnPlayerEnterAvatarPoseGizmo: CodeBlockEvent<[player: Player]>;
    OnPlayerExitAvatarPoseGizmo: CodeBlockEvent<[player: Player]>;
    OnPlayerChangedTeam: CodeBlockEvent<[player: Player, teamName: string, teamGroupName: string]>;
    OnAvatarTraitsChanged: CodeBlockEvent<[player: Player, traits: string]>;
    OnPlayerFocusUI: CodeBlockEvent<[player: Player, focusedOn: Entity]>;
    OnPlayerUnfocusUI: CodeBlockEvent<[player: Player, unfocusedFrom: Entity]>;
}
```

## Remarks

This variable contains interfaces to every built-in CodeBlock event, which you can pass to the the `Component.connectCodeBlockEvent` method.
In contrast to custom CodeBlock events, you can't [send](/hw-docs/Reference/core/Abstract%20Classes/Component.md) built-in CodeBlock events manually. Built-in CodeBlock events are broadcast automatically.
Available events:
OnPlayerEnterTrigger: Invoked when the player enters a trigger zone.
OnPlayerExitTrigger: Invoked when the player exits a trigger zone.
OnEntityEnterTrigger: Invoked when an entity enters a trigger zone.
OnEntityExitTrigger: Invoked when an entity exits a trigger zone.
OnPlayerCollision: Invoked when a player collides with something.
OnEntityCollision: Invoked when an entity collides with something.
OnPlayerEnterWorld: Invoked when a player enters the world. Broadcasted from the server.
OnPlayerExitWorld: Invoked when a player exits the world. Broadcasted from the server.
OnPassiveInstanceCameraCreated: Invoked when a passive instance camera is created. A passive instance camera is a service-based player camera that doesn't use the processing power of the device running Meta Horizon Worlds.
OnGrabStart: Invoked when a player starts to grab an entity.
OnGrabEnd: Invoked when a player releases an entity.
OnMultiGrabStart: Invoked when a player grabs multiple entities.
OnMultiGrabEnd: Invoked when a player releases multiple entities.
OnIndexTriggerDown: Invoked when the index finger button is pressed.
OnIndexTriggerUp: Invoked when the index finger button is released.
OnButton1Down: Invoked when button 1 is pressed.
OnButton1Up: Invoked when button 1 is released.
OnButton2Down: Invoked when button 2 is pressed.
OnButton2Up: Invoked when button 2 is released.
OnAttachStart: Invoked when an attachment is attached.
OnAttachEnd: Invoked when an attachment is detached.
OnProjectileLaunched: Invoked when a projectile is launched.
OnProjectileHitPlayer: Invoked when a projectile hits a player.
OnProjectileHitEntity: Invoked when a projectile hits an entity.
OnProjectileHitObject: Invoked when a projectile hits an object. This event is deprecated. Use `OnProjectileHitEntity` instead.
OnProjectileHitWorld: Invoked when a projectile hits something in the world. This event is deprecated. Use `OnProjectileHitEntity` instead.
OnProjectileExpired: Invoked when a projectile expires without hitting anything.
OnAchievementComplete: Invoked when a player completes an achievement. Broadcasted from the server.
OnCameraPhotoTaken: Invoked when the camera captures a photo. Broadcasted from the server.
OnItemPurchaseSucceeded: Invoked when an item is successfully purchased. Broadcasted from the server. This event is deprecated. Use `OnItemPurchaseComplete` instead.
OnItemPurchaseFailed: Invoked when an item purchase fails. Broadcasted from the server. This event is deprecated. Use `OnItemPurchaseComplete` instead.
OnPlayerConsumeSucceeded: Invoked when an item is successfully consumed. Broadcasted from the server.
OnPlayerConsumeFailed: Invoked when an item fails to be consumed. Broadcasted from the server.
OnPlayerSpawnedItem: Invoked when an item spawns from the inventory.
OnAssetSpawned: Invoked when an asset spawns. Broadcasted from the server.
OnAssetDespawned: Invoked when an asset despawns. Broadcasted from the server.
OnAssetSpawnFailed: Invoked when an asset fails to spawn. Broadcasted from the server.
OnAudioCompleted: Invoked when audio playback completes.
OnPlayerEnterAFK: Invoked when a player goes AFK, such as when they open the Oculus menu or remove their headset. Broadcasted from the server.
OnPlayerExitAFK: Invoked when a players returns from being AFK. Broadcasted from the server.
OnPlayerEnteredFocusedInteraction: Invoked when a player enters Focused Interaction mode. Broadcasted from the client of the current player.
OnPlayerExitedFocusedInteraction: Invoked when a player exits Focused Interaction mode. Broadcasted from the client of the current player.
OnPlayerEnterAvatarPoseGizmo: Invoked when a player enters an Avatar Pose Gizmo.
OnPlayerExitAvatarPoseGizmo: Invoked when a player exits an Avatar Pose Gizmo.
OnPlayerFocusUI: Invoked when a player focuses on a Custom UI entity. Broadcasted from the client of the current player.
OnPlayerUnfocusUI: Invoked when a player unfocuses from a Custom UI entity. Broadcasted from the client of the current player.