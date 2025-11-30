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

[](https://video-dfw5-2.xx.fbcdn.net/v/t42.1790-2/454625098_525172449847222_7619475324568209763_n.mp4?_nc_cat=100&ccb=1-7&_nc_sid=6500a6&_nc_ohc=htK-FsaU0uAQ7kNvwGbzUT9&_nc_oc=Adku5_0mmfeKYFBFNnGZmISY64Ygk2iKK2ZqXybRaBQ7edm2Tg7Cv2cz3FROc3jh7AE&_nc_zt=28&_nc_ht=video-dfw5-2.xx&_nc_gid=gh0_LV2zr269hT09mU2jwg&oh=00_AfgoyvfY4jikVQySD0YCIuU1w27N77SuO3I7UA-Ss6ukAg&oe=6931D4A1)[](https://video-dfw5-1.xx.fbcdn.net/v/t42.1790-2/454274926_1151980102549357_4859686483120040852_n.mp4?_nc_cat=103&ccb=1-7&_nc_sid=6500a6&_nc_ohc=CLk-E0cLDj8Q7kNvwGxOr9R&_nc_oc=Adk7bFvCBiCR4_rRpgcZHVv3oofgyVoWmK4vmyDfM3LEp0hkD82vvkc_XTh5_tg5BzA&_nc_zt=28&_nc_ht=video-dfw5-1.xx&_nc_gid=gh0_LV2zr269hT09mU2jwg&oh=00_AfhhZNYIz-Ra3jkTmvUsAniOR1aPwZxGW6fDh43iKLfTvg&oe=6931C69E)[](https://video-dfw5-2.xx.fbcdn.net/v/t42.1790-2/454244739_2050320535364350_6219556487709852247_n.mp4?_nc_cat=104&ccb=1-7&_nc_sid=6500a6&_nc_ohc=b-o4OESA0OEQ7kNvwFdS6uE&_nc_oc=Adm6IsNYBu3khWJkosyOsdpHcP22VSMx0xvON5FOhAHnZlV_0ZZCqKdc6Co3qjZcFuI&_nc_zt=28&_nc_ht=video-dfw5-2.xx&_nc_gid=gh0_LV2zr269hT09mU2jwg&oh=00_AfjWozrZy-ZMN2pvzDAAYtFcDE4Bky_qHXx9DaUQk_X9ew&oe=6931BD65)[](https://video-dfw5-2.xx.fbcdn.net/v/t42.1790-2/451319372_989989559275368_4170406713538348357_n.mp4?_nc_cat=102&ccb=1-7&_nc_sid=6500a6&_nc_ohc=Zewp2v3fPW0Q7kNvwHAcVlk&_nc_oc=AdnhU1B6WoHqFIgU8YQGeOEwAHS0lHGo4DbXV2TEar0rwqvA1p6ebExB9jI5DfGpRgs&_nc_zt=28&_nc_ht=video-dfw5-2.xx&_nc_gid=gh0_LV2zr269hT09mU2jwg&oh=00_AfgLIDMZKCv25E1N6_augbqskK8aEOInJrerlzCGmgCyRg&oe=6931E42C)[](https://video-dfw5-1.xx.fbcdn.net/v/t42.1790-2/454405796_377567492026558_8151453533446260643_n.mp4?_nc_cat=111&ccb=1-7&_nc_sid=6500a6&_nc_ohc=_VPjRl0MGUEQ7kNvwHDXWju&_nc_oc=Adn74vbOPsI0YVxYh6w5FwAlmmR1SWSzRerPNdXeckeZllNn-rwlvPGtbqFXNAsd-5E&_nc_zt=28&_nc_ht=video-dfw5-1.xx&_nc_gid=gh0_LV2zr269hT09mU2jwg&oh=00_AfiqWmFTDftbmzXYX7KjbFev2G-tNG2j0CuE-5zkczTf1Q&oe=6931D178)[](https://video-dfw5-2.xx.fbcdn.net/v/t42.1790-2/454626198_1602447903655093_312442498833889511_n.mp4?_nc_cat=102&ccb=1-7&_nc_sid=6500a6&_nc_ohc=LW2RrNv77kEQ7kNvwEiWaik&_nc_oc=AdkG2ftMURVlyNvFkMxJr7Bxg2cTZSKINdSbrVbmIrj6kyo9z-mee5px5ZK27uN08Ns&_nc_zt=28&_nc_ht=video-dfw5-2.xx&_nc_gid=gh0_LV2zr269hT09mU2jwg&oh=00_Afh9NNdVpadAW6lhwS1FVp26HSWHYfvUkyNjzVLT0eBKnA&oe=6931E2F2)[](https://video-dfw5-1.xx.fbcdn.net/v/t42.1790-2/454120645_8042193235840270_5179259546763933243_n.mp4?_nc_cat=101&ccb=1-7&_nc_sid=6500a6&_nc_ohc=sxDKKLLVEIQQ7kNvwHN7Kmd&_nc_oc=AdnN250KaPxP2PmGhzr-IUvSj98bTxGchODjWsgWPCvViewWKA4mgycMOG4AVrRmTsc&_nc_zt=28&_nc_ht=video-dfw5-1.xx&_nc_gid=gh0_LV2zr269hT09mU2jwg&oh=00_Afj6eIBA8YLp05OxRSJ7h4wssXi2VEsxv4vERSA3ZhhKOA&oe=6931C811)[](https://video-dfw5-2.xx.fbcdn.net/v/t42.1790-2/451294272_293144313856163_470763553571906717_n.mp4?_nc_cat=107&ccb=1-7&_nc_sid=6500a6&_nc_ohc=SMV_PDVbt2sQ7kNvwEIF790&_nc_oc=AdmidPJSCneQ86o8C-eybOI6QvHMU6Xj7McbQ-RZEA1goT76SpkIQ3f79w8l7oxdB40&_nc_zt=28&_nc_ht=video-dfw5-2.xx&_nc_gid=gh0_LV2zr269hT09mU2jwg&oh=00_AfiTCCEz4z1M4tAZLJ0muBmn815583zGIk2VU0Wyvqx6wg&oe=6931D0F6)[](https://video-dfw5-1.xx.fbcdn.net/v/t42.1790-2/454439511_987009966558097_1719114283944511261_n.mp4?_nc_cat=105&ccb=1-7&_nc_sid=6500a6&_nc_ohc=Ue4SdWPahpIQ7kNvwEAFf4M&_nc_oc=Adk0pThyewfHt70OWgmvCG02cHrx1n3igTP1OFHmKUHMX3zMvjsBf7Nxi-57PpyAMJs&_nc_zt=28&_nc_ht=video-dfw5-1.xx&_nc_gid=gh0_LV2zr269hT09mU2jwg&oh=00_AfiBlgjlhoH62jVUx0whgtGNtO_wd-RivHb7wqdw5FYSmw&oe=6931ED97)

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