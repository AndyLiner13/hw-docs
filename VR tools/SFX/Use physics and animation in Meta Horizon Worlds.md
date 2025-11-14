Source: https://developers.meta.com/horizon-worlds/learn/documentation/vr-creation/sfx/adding-physics-and-animation-in-horizon

# Use physics and animation in Meta Horizon Worlds

## Using the Properties Panel

Physics and animation can be added to a world from a shape’s Properties Panel.

To open a shape’s Properties Panel:

- Highlight or grab the shape.
- Select icon Properties on your controller.

The Properties Panel for shapes has 3 separate tabs:

* General
* Animation
* Simulation

Like other panels and the Creator Menu, you can select options by tapping on them with your cursor. The Properties Panel can also be grabbed, moved and resized.

## General Properties

General properties are static and don’t involve any motion or physics. They can be used in global or local space (like when the object is a child of a group).

* **Name**: An object’s name is how it will be referenced in scripts. Objects can only have one name, but multiple objects can share the same name.
* **Visible**: When off, players won’t be able to see the object, but any other properties will still be enabled. It will also have an outline in Build Mode.
* **Collidable**: Turn on to add a collider to the object. Objects with colliders will not be able to pass through other objects.
* **Position**: The position of an object, defined by X, Y and Z coordinates.
* **Rotation**: The rotation of an object, defined by X, Y and Z coordinates.
* **Scale**: The size of an object, defined by X, Y and Z coordinates.

## Animation Properties

Animation properties involve motion, but not physics. Like general properties, they can also be used in global or local space. In local space however, if the parent object has simulation properties on, the animated child object must have the **Collidable** property off (found in the **General** tab).

* **Animation Control**: This lets you record an animation by hand. Tap **Record** to start recording, grab the object and move it around, and tap **Stop** to stop recording. To preview your animation, tap **Play**. Only actual movement can be recorded, so if the object is stationary at any point, that time won’t be included in the recording. Animations can be up to 20 seconds long.
* **Loop**: Select whether or how the animation should repeat after it’s finished. **Once** will play the animation only once, **Loop** will continuously play the animation by teleporting the object back to its starting point each time, and Yoyo will continuously play the animation forward and then in reverse.
* **Play on Start**: When on, the animation will play as soon as a player enters the world. To move an object with this property, first turn **Play on Start** off to avoid triggering the animation.
* **Animate Group**: Plays the animation on all objects within the same group.
* **Speed**: The speed of the animation in FPS (frames per second).

If an object has animation properties on, any simulation properties or scripted motion (motion due to a script) will be canceled out.

## Simulation Properties

Simulation properties involve motion due to physics. They can only be used in global space, meaning that if a child object is simulated, it will ignore the parent object’s motion.

* **Gravity**: By default, objects will stay wherever they’re placed in the world. When Gravity is on (along with Simulated), objects will fall until they hit another object or the floor. If an object continues to fall and gets lost, you can reset the world by going to Settings in your Creator Menu and tapping the reset icon on the left side.
* **Physics Material**: Physics materials have preset values for density, drag (air resistance), bounciness and friction, and do not affect an object’s appearance or any sound it may make.
* **Grabbable**: Allows players to grab the object.
* **Simulated**: Turns on physics.

## Physics Materials

Available physics materials include:

* **Default**: The density, bounciness, and drag are the average (mean) of the values of the other materials with some friction.
* **Feather**: The only material with a different drag value than the others, and the least dense. When dropped or thrown, objects will rapidly slow down and seem to float.
* **Hardwood**: The material with the highest friction values, and the third densest. Objects will be heavy and hard to push.
* **Ice**: Objects will slide with little effort, slide for quite a while when pushed, and bounce very little.
* **Metal**: The densest material (about 3 times denser that the Default material). Unlike Hardwood, it has lower than average friction values while still being harder to move than either Ice or Superice materials.
* **Rubberball**: A material with high bounciness and less than average density. When an object is dropped, it will bounce up to 80% of the initial drop height as opposed to the 10–20% of most other materials.
* **Softwood**: A material that’s less than half as dense as Hardwood and somewhat bouncier (similar to the Rubberball and Superball materials). Objects will be hard to move but slightly easier to start moving than objects with a Hardwood material.
* **Superball**: A material with nearly the same values as Rubberball, except it loses none of its energy in a collision. Objects that are dropped will bounce up to the same height they were dropped at.
* **Superice**: A material with nearly the same values as Ice, but with zero friction. Objects that start sliding won’t stop until they hit something.

### Physics materials comparison

[](https://video-dfw5-2.xx.fbcdn.net/v/t42.1790-2/454625098_525172449847222_7619475324568209763_n.mp4?_nc_cat=100&ccb=1-7&_nc_sid=6500a6&_nc_ohc=Cqm8hrodUJ4Q7kNvwFoplbJ&_nc_oc=AdlSsJ2kxpZ4RxHLbLwgs-8gKuaOL1tB96QtAdFs8lADRe0uBe5VygF1QhIEbb_71aA&_nc_zt=28&_nc_ht=video-dfw5-2.xx&_nc_gid=aVXAXSZsUk9hEBSWQVXUYA&oh=00_AfimcckkE25uWuweDIZiiqZYv2mrbEjMXzMECO_6AssZbA&oe=691CBCA1)[](https://video-dfw5-1.xx.fbcdn.net/v/t42.1790-2/454274926_1151980102549357_4859686483120040852_n.mp4?_nc_cat=103&ccb=1-7&_nc_sid=6500a6&_nc_ohc=WcnVAyvKYb8Q7kNvwGFnBEt&_nc_oc=Admh2xfyOWjkQO5pm2Li6xVIUxkZNA8cu-jCFN3qGbkwPP_Vz_Kf_nPygD2uvDxM3Ao&_nc_zt=28&_nc_ht=video-dfw5-1.xx&_nc_gid=aVXAXSZsUk9hEBSWQVXUYA&oh=00_Afi5JslYhEwChov8OyhluXsir4vOqCV3SmW9f0_5oCxetA&oe=691CAE9E)[](https://video-dfw5-2.xx.fbcdn.net/v/t42.1790-2/454244739_2050320535364350_6219556487709852247_n.mp4?_nc_cat=104&ccb=1-7&_nc_sid=6500a6&_nc_ohc=eOU5IMMfSUIQ7kNvwEi-s0a&_nc_oc=AdkOKrpv_YPelgdSLzZFjvUKbpDyrLbIK1Xfd-SEF59VGAN7ATHu9uQggLxDbyDZcBs&_nc_zt=28&_nc_ht=video-dfw5-2.xx&_nc_gid=aVXAXSZsUk9hEBSWQVXUYA&oh=00_AfjreEkm46H83R8iDjECoZxcfs3HnDy3ybgvAt_FwrdeQg&oe=691CDDA5)[](https://video-dfw5-2.xx.fbcdn.net/v/t42.1790-2/451319372_989989559275368_4170406713538348357_n.mp4?_nc_cat=102&ccb=1-7&_nc_sid=6500a6&_nc_ohc=lmjhdVefMRIQ7kNvwHCttIp&_nc_oc=AdnwPGwhDR1IhPYytjStuvuCa-tfMI9xRNu7Sm-d0FOwQbH8BUV1DlsYpgsdmfGnKVc&_nc_zt=28&_nc_ht=video-dfw5-2.xx&_nc_gid=aVXAXSZsUk9hEBSWQVXUYA&oh=00_AfjoFFGYyrVlW76U7wMrtOUvxPBI3Ix3j-NSaRZmuSAwMw&oe=691CCC2C)[](https://video-dfw5-1.xx.fbcdn.net/v/t42.1790-2/454405796_377567492026558_8151453533446260643_n.mp4?_nc_cat=111&ccb=1-7&_nc_sid=6500a6&_nc_ohc=3eYHM_HgNXAQ7kNvwHltV5u&_nc_oc=AdnqymlsfrgU9e5hqiXVpQEdmE4u6WmpVWEHxIyn1K6t85wQEtPhTB6wfnygQhXnEQI&_nc_zt=28&_nc_ht=video-dfw5-1.xx&_nc_gid=aVXAXSZsUk9hEBSWQVXUYA&oh=00_AfhreClsb2aWZt6zzFnOio8OH0yUiGEtMqcrV9NVqbrGLg&oe=691CB978)[](https://video-dfw5-2.xx.fbcdn.net/v/t42.1790-2/454626198_1602447903655093_312442498833889511_n.mp4?_nc_cat=102&ccb=1-7&_nc_sid=6500a6&_nc_ohc=0ZZoZyMYuf0Q7kNvwGHNfwf&_nc_oc=Admi_Ou5xcybFJjo7izjwSq-KFajGFhdvBxU3nnN56SvUpNzBmYMIfetw78KGClHdXM&_nc_zt=28&_nc_ht=video-dfw5-2.xx&_nc_gid=aVXAXSZsUk9hEBSWQVXUYA&oh=00_AfjSyOJhHpCnfkyqzn5BpPmyCF28aeGxtThfhtu-2MYJQA&oe=691CCAF2)[](https://video-dfw5-1.xx.fbcdn.net/v/t42.1790-2/454120645_8042193235840270_5179259546763933243_n.mp4?_nc_cat=101&ccb=1-7&_nc_sid=6500a6&_nc_ohc=IruwcV9vuuAQ7kNvwG52Tcq&_nc_oc=Adm4uiHP4jrWxVRW7bPPMwy5-3a_KV7TEYN9gD8FNAfCEs9RPgJ7Jt21JCxLRJmGw5k&_nc_zt=28&_nc_ht=video-dfw5-1.xx&_nc_gid=aVXAXSZsUk9hEBSWQVXUYA&oh=00_Afj_ztDSv4KkYHKRIcvp93py9lEGIPO_ZQTSFX-HoswSEQ&oe=691CB011)[](https://video-dfw5-2.xx.fbcdn.net/v/t42.1790-2/451294272_293144313856163_470763553571906717_n.mp4?_nc_cat=107&ccb=1-7&_nc_sid=6500a6&_nc_ohc=b6y2Ao-z-vUQ7kNvwGRm1V9&_nc_oc=AdnNhVtEyoEjzCby4w1qlJP2uoAT3Vie6gdVFw6nKsPV42otWO2X3nWv5kJC7qoXPbM&_nc_zt=28&_nc_ht=video-dfw5-2.xx&_nc_gid=aVXAXSZsUk9hEBSWQVXUYA&oh=00_Afjux-we-3Kn0h8Ml0v-ImuD9YNIrCPf-1Kz5cNjW23-zA&oe=691CB8F6)[](https://video-dfw5-1.xx.fbcdn.net/v/t42.1790-2/454439511_987009966558097_1719114283944511261_n.mp4?_nc_cat=105&ccb=1-7&_nc_sid=6500a6&_nc_ohc=KpfmAi4y9pIQ7kNvwF8duf5&_nc_oc=AdmmQGz8O9M_yfVCLdtbVkxwVlTexmGQ9AYrVAC_ojnQKuY7kTXQk_VfK6mtgrcYStM&_nc_zt=28&_nc_ht=video-dfw5-1.xx&_nc_gid=aVXAXSZsUk9hEBSWQVXUYA&oh=00_AfjVxW49_YkfTTbe-jDAf4N5OJNq8hDwa_I7mJo40sJ37g&oe=691CD597)

## Physics Basics

You can add physics to your world by turning certain properties for objects on or off. Here are some examples of how to make:

* An invisible lightbulb
  + Visibility is off
  + Collidable is off
* An invisible wall
  + Visibility is off
  + Collidable is on
* A visible ghost you can walk through
  + Collidable is off
* An immovable wall
  + Collidable is on
  + Simulated is off
  + Grabbable is off
* A falling tree
  + Collidable is on
  + Simulated is on
  + Gravity is on
  + Grabbable is off
* A grabbable ball that can fall
  + Collidable is on
  + Simulated is on
  + Grabbable is on
* A ball that will quickly slide over surfaces
  + Collidable is on
  + Simulated is on
  + Physics Material set to “Ice” or “SuperIce”
* A ball that won’t roll forever
  + Collidable is on
  + Simulated is on
  + Scale — one axis is scaled slightly (like 1.0, 1.0, 0.8)
* A weightless asteroid
  + Collidable is on
  + Simulated is on
  + Gravity is off

## General Tips

If the object is visible but collision is disabled, players will be able to walk and move freely through it. This is useful for things like fluids or grass on the ground that should be visible but don’t need to be interacted with.

Making an object both invisible and not collidable may seem pointless, but it can actually be really useful. You can use scripting to make the object reappear and become solid after a certain action occurs — a great way to make things appear from thin air.

Making walls out of hidden objects is a great way to prevent players from getting to places you don’t want them to, without changing the appearance of your world or making a script for a respawn barrier.