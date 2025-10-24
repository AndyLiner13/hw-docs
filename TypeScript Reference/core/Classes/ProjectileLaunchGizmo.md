# ProjectileLauncherGizmo Class

Extends [Entity](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_entity) Represents a projectile launcher in the world.

## Signature

```typescript
export declare class ProjectileLauncherGizmo extends Entity
```

## Remarks

For information about usage, see [The Magic Wand](https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/developing-for-web-and-mobile-players-tutorial/module-6-room-a-the-magic-wand) tutorial.

## Properties

| Property | Description |
| --- | --- |
| projectileGravity | The gravity applied to the projectile. Signature projectileGravity: WritableHorizonProperty<number>; |

## Methods

| Method | Description |
| --- | --- |
| launch(options) | Launches a projectile with options. Signature launch(options?: LaunchProjectileOptions): void; Parameters options: LaunchProjectileOptions (Optional) Optional options for launching projectile Returns void |
| launchProjectile(speed) | Launches a projectile. Signature launchProjectile(speed?: number): void; Parameters speed: number(Optional) Optional. The speed at which the projectile will launch from the launcher. Returns void |
| toString() | Creates a human-readable representation of the entity. Signature toString(): string; Returns stringA string representation of the entity. |

## Additional Links
- [Meta home](https://developers.meta.com/horizon-worlds/)
- [Login](https://developers.meta.com/login/?redirect_uri=https%3A%2F%2Fdevelopers.meta.com%2Fhorizon-worlds%2Freference%2F2.0.0%2Fcore_projectilelaunchergizmo%2F)