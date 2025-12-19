Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/feature-samples/simple-shooting-mechanics-tutorial/module-3-simple-gun

# Module 3 - Simple Gun

While its projectiles certainly do, the ProjectileLauncher gizmo has no physical presence in the world. It must be attached to the end of a physical entity. In this example world, it is a simple gun object.

<details>
<summary>Image of the basic Gun assembly in the world</summary>

<p></p>

[Image of the basic Gun assembly in the world](../../../image_data/a458214ab85b98b50ebb0db31e8c12294422f7ec52ca86a192d10a1db39d55fc.md)

### Overview
This image depicts a 3D modeling environment interface, likely from a game development tool such as Unity. The central area displays a 3D scene with objects and a grid floor. The left side shows a hierarchical list of objects, while the right side has a properties panel. The bottom contains a console with messages and system indicators.

### Key Elements
- **Scene View**: Central area showing a 3D scene with a white rectangular object labeled "Gun," a small orange cube, and a blue grid background.
- **Hierarchy Panel**: Left side, displaying a list of objects like "SpawnPoint," "LaserPoint," "Gun," etc.
- **Properties Panel**: Right side, currently empty but designed to show properties of selected objects.
- **Console**: Bottom, showing messages related to script source maps and world reset instructions.

### Visual Flow / Relationships
The most prominent visual is the Scene View in the center. The Hierarchy Panel on the left and the Properties Panel on the right provide contextual information about the objects in the scene. The console at the bottom provides feedback on the current state of the simulation.

</details>

<p></p>



## Concept

In the above image, you can see a set of entities listed underneath the **Gun** entity in the Hierarchy panel. In this case, a “gun” is an aggregate of the following components:

* **White cylinder**: A very simple physical representation of the gun. This object serves as the parent object to the other components of the gun in the Hierarchy panel.
  + When you need to manipulate the gun as a single entity, select the parent object in the Hierarchy panel.
* **ProjectileLauncher**: does most of the job to spawn projectiles and send them on their way
* **LaserSight**: A Raycast gizmo to resolve the potential hit from where the gun is aiming to allow us to place a “laser dot”
* **ClipAmmoText** and **TotalAmmoText** as text gizmos to display ammo status just above the gun
* **GunFireSFX** and **GunReloadSFX** sound gizmos
* **GunSmokeVFX** is a particle FX gizmo for the “smoking gun” effect
* And text labels to indicate that the white cylinder is, in fact, a gun.

### Grabbable properties

Ok, let’s grab a gun! In the case of this simple gun, we must specify some properties on the parent object of the group. Unless overrides are applied to child objects, all objects in the object group receive these property values.

To make the object group grabbable, you must set the following properties:

<details>
<summary>Image of properties in panel that can be used to configure grabbing and interaction</summary>

<p></p>

[Image of properties in panel that can be used to configure grabbing and interaction](../../../image_data/2df07b6b3f4d621a459324040f7dbeb6d321f311c28e57cbb74e5d7cbecf1046.md)

### Overview
This image depicts a settings panel titled "Behavior" with various configuration options listed vertically. The panel has a dark background with light-colored text and toggle switches for some options.

### Key Elements
- **Visible Toggle**: Located at the top right, this toggle switch is blue with a white checkmark indicating it is enabled.
- **Collidable Toggle**: Positioned below the Visible toggle, this toggle switch is also blue with a white checkmark, showing it is enabled.
- **Collision Layer Dropdown**: Situated below the Collidable toggle, this is a gray dropdown menu with the text "Everything" and a downward arrow indicating it can be expanded.
- **Motion Dropdown**: Below the Collision Layer dropdown, this is another gray dropdown menu labeled "Interactive" with a downward arrow.
- **Interaction Dropdown**: At the bottom, this is a third gray dropdown menu labeled "Grabbable" with a downward arrow.

### Visual Flow / Relationships
The elements are arranged in a vertical list, with each option having its own line. The toggles are aligned to the right, while the dropdown menus are aligned to the left. The layout suggests a hierarchical structure where the toggles control basic settings, and the dropdowns provide more specific configurations.

</details>

<p></p>



* **Visible**: Not required, but it’s hard to grab something that you cannot see.
* **Collidable**: Enable it.
* **Collision Layer**: You can set this to Everything.
* **Motion**: Set this value to Interactive.
* **Interaction**: When motion is Interactive, set this value to Grabbable.

The object group (a gun) can now be grabbed. Additional grab-related properties are now listed in the Properties panel:

* **Grab lock**: Enable this property to retain the grabbed entity in the hand after it is grabbed.
* **Grab anchor**: If you want for the avatar to grab the object from a position other than the group’s origin, you can set a “grab anchor” to the relative coordinates of that grab point.
  + These values are relative to the origin of the object or object group.
  + You can set them to be different per hand, even select a specific grab point while the character is aiming.
* **Avatar pose**: This property sets the avatar’s arm position while holding the group.

<details>
<summary>Images of properties that are specific to grabbing</summary>

<p></p>

[Images of properties that are specific to grabbing](../../../image_data/14e2133ff44f113091cfda04c09b1d457b2e03ed9ddab3cf0f8efa4b20c57171.md)

### Overview
This image depicts a settings or configuration interface with various toggles and input fields related to VR interaction settings. The layout is structured with labels on the left and corresponding controls on the right.

### Key Elements
- **Use Grab Lock**: Toggle switch located at the top-right, turned on.
- **Use VR Grab Anchor**: Toggle switch located below the first toggle, turned on.
- **Grab Anchor... X/Y/Z**: Input fields showing coordinates (X: 0, Y: 0, Z: 0) for grab anchor settings.
- **Grab Anchor... X/Y/Z**: Input fields showing coordinates (X: -90, Y: 0, Z: 0) for another set of grab anchor settings.
- **Use Per Hand Grab Anchors**: Toggle switch located below the second set of grab anchor settings, turned off.
- **Use HWXS Grab Anchor**: Toggle switch located below the third set of grab anchor settings, turned on.
- **HWXS Anc... X/Y/Z**: Input fields showing coordinates (X: 0, Y: 0, Z: 0) for HWXS grab anchor settings.
- **HWXS Anc... X/Y/Z**: Input fields showing coordinates (X: -90, Y: 0, Z: 0) for another set of HWXS grab anchor settings.
- **Grab Aim P... X/Y/Z**: Input fields showing coordinates (X: 0, Y: 0, Z: 0) for grab aim position settings.
- **Grab Aim R... X/Y/Z**: Input fields showing coordinates (X: 0, Y: 0, Z: 0) for grab aim rotation settings.
- **Avatar Pose**: Dropdown menu located at the bottom-right, currently set to "Pistol".

### Visual Flow / Relationships
The interface is organized in a vertical list with labels on the left and corresponding controls on the right. Each control has a clear relationship with its respective label. The toggles are visually distinct from the input fields due to their different shapes and colors. The input fields are grouped together under labels indicating their purpose.

</details>

<p></p>



## The Script: GunScript.ts

GunScript.ts is attached to the parent object of the gun assembly.

**Note**: This script must be set to run in Local execution mode only, which means it runs on the local client only.

- In the desktop editor, open the **Scripts panel**.
- Locate the GunScript.ts script. From its context menu, select **Execution mode > Local**.

### Script properties

Select the white cylinder gun, to which the GunScript.ts script is attached. The following properties are available in the Properties panel:

* **projectileLauncher**: Reference to the projectile launcher entity
* **ammoPerClip**: Number of shots to fire before reload
* **clipAmmoDisplay**: Reference to the text gizmo that displays ammo left in clip
* **totalAmmo**: Total ammo for the gun
* **totalAmmoDisplay**: Reference to the text gizmo that displays total ammo left
* **laserGizmo**: Reference to the raycast gizmo to enable the “laser dot” sight
* **laserPointer**: Reference to the sphere used as a laser dot
* **smokeFX**: Reference to the particle fx gizmo that will show smoke when shooting
* **gunFireSFX**: Reference to the gun shot sound
* **gunReloadSFX**: Reference to the gun reload sound
* **projectileLauncherCooldownMs**: Number of seconds of cooldown between shots (in milliseconds)
* **projectileSpeed**: Initial speed in meters/second of the projectile
  **Note**: This property value overrides the corresponding property value on the Projectile Launcher, so that all configuration for the gun object is in one location.
* **projectileGravity**: Acceleration due to gravity on the projectile
  **Note**: This property value overrides the corresponding property value on the Projectile Launcher, so that all configuration for the gun object is in one location.
* **useLaserTargeting**: Toggle usage of the “laser dot” sight

These properties are used as input for the functions in the script.

### Start method

During runtime execution, the start() method is called in this order:

- First on the server instance
- Second on any local instance of a player (client) who grabs it

#### Event subscriptions

As part of the script, we create **event subscriptions**, which are listeners for platform-generated events.

In the code, we check to see if the server or the player (local) is running the script. If it’s the player, we register to be notified when there’s a grab (grab start) and a drop (grab stop) event. Each of these subscriptions then calls a local handler to manage the specifics of the events.

```
private grabbingEventSub!: EventSubscription;
private droppingEventSub!: EventSubscription;
private ammoLeft!: number;
private totalAmmo!: number;

public start() {
  const owner = this.entity.owner.get();
  //When the server owns the weapon, ignore the script
  if (owner === this.world.getServerPlayer()) {
    console.log("Script owned by Server Player");
  }  else {
    // Connect to the grab event to cleanup when the weapon is dropped
    this.grabbingEventSub = this.connectCodeBlockEvent(
      this.entity,
      CodeBlockEvents.OnGrabStart,
      this.onWeaponGrabbed.bind(this)
    );

    // Connect to the grab event to cleanup when the weapon is dropped
    this.droppingEventSub = this.connectCodeBlockEvent(
      this.entity,
      CodeBlockEvents.OnGrabEnd,
      this.onWeaponDropped.bind(this)
    );
  }
```

### When a player grabs the gun

Function **onWeaponGrabbed()** does two things:

* Assign the projectile launcher gizmo to the gun owner manually as ownership is not applied to child objects automatically.
* Set up the input listeners for aim, shoot, and reload actions

### When a player drops the gun

Function **onWeaponDropped()** resets the actions performed when the weapon was grabbed:

* Reassign the projectile launcher to the server (AKA server player)
* Stop listening to input events

### When a player aims

Function **onPlayerAiming()** handles when the player is interacting with the aiming button. When a player is holding the aiming button, we subscribe to the update broadcast event to update the position of the dot on every frame. Otherwise, we disconnect from that event and hide the aiming sphere.

The Aiming pointer is different in VR, Desktop and Mobile:

* VR: laser dot
* Desktop: reticle
* Mobile: reticle

### When a player shoots

When the player is either pressing or letting go of the firing trigger, the **onPlayerFire()** function is called.

**Tip**: One technique used to debounce inputs is to respond only when the trigger is released. This seems counterintuitive for a pistol, but in practice it works.

* First, we check:
  + Is there ammo left remaining in the gun?
  + Is the elapsed time since the last shot longer than the cooldown time?
* If yes to both:
  + Current time is our new last shot time.
  + We trigger all shooting-related actions:
    - launch the projectile
    - play the gun fire SFX and VFX
    - decrement ammo

### When a player reloads

Again, the function **onPlayerReload()** debounces the input by acting only on button up.

Taking ammo from the total ammo pool, we add as much ammo as the available space in the clip permits, decrementing the total ammo pool by the same amount. Also the “reload” SFX is played.

### Every frame when the player is aiming

The function **onUpdateAim()** is where we move the sphere to “project a laser dot” while the aiming button is held down.

Using the Raycast gizmo, we see if projecting an invisible line in front of the gun “hits” a player, entity, or the world. If it does, we reposition the sphere and make it visible to the local player only.

The gizmo returns a “hit” object. The “hit” object contains data about what type of object it is hitting. On this, we can change the color of the sphere to green for entities and red for players.

**Note**: Things happening during the “Update” phase can end up slowing down your update loop and making us lose a frame (or many). If you notice that your game is “hitching” two ways you could mitigate the problems are:

* Detect what you need to detect (i.e. the player moved) and fire a custom event to handle it asynchronously, and/or
* Only do something after a certain amount of time has elapsed. Update provides how much time elapsed since last time it was called, keep accumulating until you reached a threshold (let’s say 0.5 seconds) and do something then. That will prevent calculations being performed every frame
* Since onUpdate executes every frame, you can also choose to execute code every N frames, which is fairly simple to manage and tune. However, the elapsed time for N frames may vary depending on many factors.

### Update ammo display

When the reload or firing actions are executed, a call is made to **updateAmmoDisplay()**, which updates the script properties for 1) current ammo in the clip and 2) total available ammo.