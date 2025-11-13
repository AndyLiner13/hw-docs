Source: https://developers.meta.com/horizon-worlds/learn/documentation/save-optimize-and-publish/capacity-limits-in-horizon

# Creator capacity limits

For a world to be published, it has to stay below 100% capacity in four areas:

* **Objects**: This represents the total number of shapes, gizmos and non-recorded sounds in your world.
* **Geometric complexity**: This is the number of vertices in your world. To reduce geometric complexity, try to use smaller and non-rounded shapes.
* **Simulation and animation**: This is defined by the amount of interactivity and motion in your world, separated in five sub-areas:
  + Dynamics: The amount of animation, scripted motion and objects with the Grabbable property.
  + Physics: Objects that use the Simulated property.
  + Colliders: Objects with the Collidable property enabled. When objects are first created, Collidable is on by default.
  + Triggers: Trigger gizmos
  + Text: Text gizmos
* **Sounds complexity**: This is the number of recorded sounds in your world.

## To check capacity levels:

- In Build mode, open your Creator Menu by pressing the menu button on your left controller.
- Select **World**.
- Select **Capacity**.

You can also check capacity without opening your Creator Menu by looking at the blue ring on your primary controller. The blue ring represents the area with the highest percentage.

Maintaining capacity lets you publish your world and ensures the best possible performance.