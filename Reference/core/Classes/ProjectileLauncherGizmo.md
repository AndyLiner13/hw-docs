Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_projectilelaunchergizmo

# ProjectileLauncherGizmo Class

Extends *[Entity](Entity.md)*

Represents a projectile launcher in the world.

## Signature

```
export declare class ProjectileLauncherGizmo extends Entity
```

## Remarks

For information about usage, see [The Magic Wand](../../../Tutorials/Feature%20samples/Developing%20for%20web%20and%20mobile%20players%20tutorial/Module%206%20-%20Room%20A-%20The%20Magic%20Wand.md) tutorial.

## Properties

|  |  |
| --- | --- |
| **projectileGravity** | The gravity applied to the projectile.      Signature  ``` projectileGravity: WritableHorizonProperty<number>; ``` |

## Methods

|  |  |
| --- | --- |
| **launch(options)** | Launches a projectile with options.      Signature  ``` launch(options?: LaunchProjectileOptions): void; ```  Parameters  options: [LaunchProjectileOptions](../Type%20Aliases/LaunchProjectileOptions.md)  *(Optional)* Optional options for launching projectile. See [LaunchProjectileOptions](../Type%20Aliases/LaunchProjectileOptions.md)  Returns  void  Examples  Launch a projectile with 20m/s speed, a duration of 1 second, from (1, 0, 10) along the x=-1, y=0, z=0 vector.  ``` projectileLauncher.as(ProjectileLauncherGizmo).launch({   speed: 20,   duration: 1,   overrideStartPositionAndDirection: {     start: new Vec3(1, 0, 10),     direction: new Vec3(-1, 0, 0)   } }) ``` |
| **launchProjectile(speed)** | Warning: This API is now obsolete. use `launch` instead. Launches a projectile.      Signature  ``` launchProjectile(speed?: number): void; ```  Parameters  speed: number  *(Optional)* Optional. The speed at which the projectile will launch from the launcher.  Returns  void |
| **toString()** | Creates a human-readable representation of the entity.      Signature  ``` toString(): string; ```  Returns  string  A string representation of the entity. |