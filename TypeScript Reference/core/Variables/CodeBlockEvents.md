# CodeBlockEvents variable

A collection of all built-in [CodeBlock](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_codeblockevent) events that you can subscribe to using the [Component.connectCodeBlockEvent()](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_component#connectcodeblockevent) method.

## Signature

```typescript
CodeBlockEvents: {
    OnPlayerEnterTrigger: CodeBlockEvent<[enteredBy: Player]>;
    OnPlayerExitTrigger: CodeBlockEvent<[exitedBy: Player]>;
    OnEntityEnterTrigger: CodeBlockEvent<[enteredBy: Entity]>;
    OnEntityExitTrigger: CodeBlockEvent<[enteredBy: Entity]>;
    OnPlayerCollision: CodeBlockEvent<[collidedWith: Player, collisionAt: Vec3, normal: Vec3, relativeVelocity: Vec3, localColliderName: string, OtherColliderName: string]>;
    OnEntityCollision: CodeBlockEvent<[collidedWith: Entity, collisionAt: Vec3, normal: Vec3, relativeVelocity: Vec3, localColliderName: string, OtherColliderName: string]>;
    OnPlayerEnterWorld: CodeBlockEvent<[player: Player]>;
    OnPlayerExitWorld: CodeBlockEvent<[player: Player]>;
    OnGrabStart: CodeBlockEvent<[isRightHand: boolean, player: Player]>;
    OnGrabEnd: CodeBlockEvent<[player: Player]>;
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
    OnProjectileExpired: CodeBlockEvent<[position: Vec3, rotation: Quaternion, velocity: Vec3]>;
    OnAchievementComplete: CodeBlockEvent<[player: Player, scriptId: string]>;
    OnCameraPhotoTaken: CodeBlockEvent<[player: Player, isSelfie: boolean]>;
    OnItemPurchaseStart: CodeBlockEvent<[player: Player, item: string]>;
    OnItemPurchaseComplete: CodeBlockEvent<[player: Player, item: string, success: boolean]>;
    OnItemConsumeStart: CodeBlockEvent<[player: Player, item: string]>;
    OnItemConsumeComplete: CodeBlockEvent<[player: Player, item: string, success: boolean]>;
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
}
```

## References

[CodeBlock](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_codeblockevent), [Component.connectCodeBlockEvent()](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_component#connectcodeblockevent)

## Remarks

This variable contains interfaces to every built-in CodeBlock event, which you can pass to the [Component.connectCodeBlockEvent](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_component#connectcodeblockevent) method. In contrast to custom CodeBlock events, you can't [send](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_component#sendcodeblockevent) built-in CodeBlock events manually. Built-in CodeBlock events are broadcast automatically.

Available events include trigger events, collision events, player lifecycle events, input events, projectile events, purchase events, asset events, and more.