Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/simple-shooting-mechanics-tutorial/module-4-laser-gun

# Module 4 - Laser Gun

![Image of the laser gun assembly in the world](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/480672120_676362568235031_2975711562505549488_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=M3wYWh-uCTkQ7kNvwGUF4Q8&_nc_oc=Adk1rLDZTNfRif__Yf8MkBZZKvl21Txn0JXNlwXOC8wt8l7r_NPlTral0ZADtPSV8H8&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=btqibg3thwT5LkvoOC28yQ&oh=00_AfnC1U3V5Juhuumj2zmOsLCJ620HKZ4mvZ0Li9samtpyCg&oe=694BC97A)

## Concept

The laser gun is a cylinder that “fires” a laser beam, which is a separate red cylinder that we scale lengthwise between the weapon and the target. We get the target position by projecting an imaginary point from the gun forward until it hits something. This capability, known as **raycasting**, is managed using the **Raycast gizmo**.

The laser gun is an aggregate of the following:

* LaserShot, the red cylinder we will deform to make the laser beam
* LaserProjector, which is an instance of the Raycast gizmo
* LaserShootingSFX and LaserShotHitSFX sound gizmos
* LaserHitVFX particle FX gizmo
* And labels for the white cylinder

### Raycast Gizmo

Similar to the Projectile Launcher gizmo, the Raycast gizmo emits a projection forward from it. However, there are some key differences:

* The Raycast gizmo does not have a physical object that is emitted from it into the world. Instead, a physical shape (called LaserShot in this world) is added and distorted in z-scale to the maximum distance configured for the laser beam.
  + **Tip**: The Raycast gizmo can be used for purposes other than for shooting. You can use it to determine things like line of sight.
* There is no clip or ammo count to manage. Similarly, there is no cooldown period between shots.
* The gizmo can be configured to have a specific distance. If the beam from the gizmo does not collide with another object within the specified distance, no hit is returned.

In the Hierarchy panel, search for: **LaserProjector**. The gizmo has the following key properties:

* **Collide with**: Select the possible collision targets: Players, Objects Tagged, or Both.
  **Note**: The LaserGun.ts script is configured to handle entity collisions (Objects Tagged) only.
* **Object tag**: If object tagging is enabled above, you must specify the tags for objects that register a hit when the raycast collides with them.
  + For example, if this value is set to **targetable**, then all objects with a gameplay tag of **targetable** can register a hit when contacted by this raycast.
  + In this simple example world, no object tags are specified, which means that the gizmo can hit any object in the world. Since the only relevant objects are the Cube entities, this is ok.
* **Raycast distance**: Maximum distance in meters within which the raycast can register a hit.

### Properties

The grabbable properties for the LaserGun entity should be the same as for the simple gun. For more information, see [Module 3 - Simple Gun](/hw-docs/Tutorials/Simple%20Shooting%20Mechanics%20tutorial/Module%203%20-%20Simple%20Gun.md).

You may need to make some adjustments for aiming for web and mobile. You can explore these options in the desktop editor and previewing your world.

**Tip**: When using the laser gun in desktop or mobile, including the desktop editor, use the right mouse button to aim after you have grabbed it.

By default, the LaserGun entity does not use separate grabbing properties for web and mobile, which results in different aiming experences between the target devices. To fix this issue, please do the following:

- Select the LaserGun entity in the Hierarchy panel.
- In desktop, web, and mobile, you may find the aiming dot to be unhelpful. You can experiment with disabling it. In the Properties panel, locate the Crosshair Type property. From the drop-down, select `None`.
- The grab anchors may need to be configured for web and mobile. In the Properties panel, enable the Use HWXS Grab Anchor property.
- Additional HWXS properties appear.
- Set the HWXS Anchor Position and Rotation properties to match the VR property values above them.
- After you preview the use of the laser gun, you may choose to experiment with the Grab Aim Position and Grab Aim Rotation properties to fine-tune aiming the laser gun in web and mobile.

## The Script: LaserGunScript.ts

This script is attached to the LaserGun parent entity for the laser gun assembly. It follows the same pattern as the gun yet has less functionality.

### Script properties

When the LaserGun entity is selected, the following properties are available in the Properties panel:

* **maxLaserLength**: Maximum length of the laser beam, in meters.
  **Note**: This value is used in the code differently from the Raycast distance property on the Raycast gizmo. This value should be less than the other property value.
* **laserProjector**: Select the Raycast gizmo entity in the world that projects the laser beam.
* **laserBeam**: The laser shot entity which is distorted to the maximum laser length when the laser is fired.
* **laserBeamWidth**: The width of the laser shot entity.
* **laserBeamPushPower**: The push power applied by the laser beam to objects when it collides with them.
* **laserBeamSFX**: Select the entity in the world that is the sound effect to play when the laser is fired.
* **laserBeamHitSFX**: Select the entity in the world that is the sound effect to play when the laser beam collides with something.
* **laserBeamHitVFX**: Select the entity in the world that is the visual effect to play at the position where the laser beam has collided.

### start method

Similar to the simple gun, the start() method for the laser gun script:

* Determines if the server or a local player is running the script
* If it’s a local player, the script creates event subscriptions to listen for CodeBlockEvents for grabbing and dropping the weapon.

**Note**: This script includes event subscriptions for other local and CodeBlockEvents.

### When a player grabs the laser gun

The function **onWeaponGrabbed()** executes:

* The firing code is connected to the right trigger on the player input controls.
  + Connects to the local input control
    **Note**: For web and mobile, the button assignment is displayed on-screen.
  + Registers a callback on that local input control to a function **onPlayerFire()**.
* Connect to audio end events for firing and hitting sounds, so that they can be looped as needed.

### When a player drops the laser gun

In this script, when the weapon is dropped, we only need to disconnect from the related event subscriptions through the **CleanupSubscriptions()** function.

### When a player shoots the laser gun

The **onPlayerFire()** method is called when the player fires the weapon. When the right trigger is pressed down, the **onPlayerFire()** function executes:

* The laser beam entity (a red cylinder) has its visibility set to **true**.
* The laser firing sounds selected in the Properties panel is played through **PlayLaserSound()**.
* The firing event subscription ( **FiringEventSub** ) maps the **world.OnUpdate()** function to the local **onLaserUpdate()** function. See below.

**Note**: This function also executes when the laser stops firing. In this case, the **pressed** parameter is set to **false**, and the event subscription for the **world.OnUpdate()** event is disconnected.

**Note**: There are no commands or events for reloading or aiming for the laser gun.

### Every frame when the laser is firing

The **onLaserUpdate()** method is called every frame while the weapon is being fired.

**Note**: world.onUpdate event fires on every frame, which may be expensive in terms of processing resources. For more information, see Module 3.

The **onLaserUpdate()** function uses raycasting to determine if the laser beam hits anything during the current frame:

```
const raycastPosition = this.props.laserProjector.position.get();
const raycastForward = this.props.laserProjector.forward.get();
const laserGizmo = this.props.laserProjector.as(RaycastGizmo);
var raycastHit = laserGizmo?.raycast(raycastPosition, raycastForward, {
  layerType: LayerType.Both,
});
```

If the laserProjector property has been set to a Raycast gizmo entity in the world, the **raycast()** method on it is executed, with a maximum distance set on the gizmo. The results are captured to the **raycastHit** object.

If raycastHit is non-null and its distance property is less than the maximum laser distance defined in the Properties panel, then code for a hit is executed:

* Property-based sound and vfx are played
* If the raycast hit collides with another entity in the world, then physical force is applied to the targeted object according to the following formula:

```
hitEntity.applyForce(
  raycastHit.normal.mulInPlace(-data.deltaTime * this.props.laserBeamPushPower),
  PhysicsForceMode.VelocityChange,
);
```

**Note**: The function currently does not support collisions with Player objects, although the code contains a placeholder for these types of raycastHit outcomes.

* On each **onLaserUpdate()** execution, the z-scale of the laser beam red cylinder is adjusted based on the time since the previous update, and it is then repositioned:

```
laserBeamScale.z = this.props.laserBeamWidth;
this.props.laserBeam.scale.set(laserBeamScale);

this.props.laserBeam.moveRelativeTo(
  this.entity,
  new Vec3(0, laserLength / (2 * thisEntityScaleY), 0),
);
```