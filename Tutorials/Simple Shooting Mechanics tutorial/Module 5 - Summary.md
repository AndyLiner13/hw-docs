Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/simple-shooting-mechanics-tutorial/module-5-summary

# Module 5 - Summary

Thanks for checking out the tutorial! You have learned the basic mechanics for how to build grabbable weapons, fire them, and determine if they have hit anything in the world. If so, force is applied to the targeted entity.

**Extending the tutorial**:

Below are some ideas for how you can use the basic functionality in the tutorial to build worlds of your own:

* You can assign object tags to entities in your world, each of which may have different outcomes.
  + Example: from the Interactive section of the Asset Library, add the skeleton and tag it. What should happen when the laser beam hits the skeleton?
* For each weapon, you can add Player-related outcomes. The hooks are already present in the code.
* You can replace the primitive cylinder weapons with more realistic weapons from the Asset Library.
* Use the gun example to build a more robust target shooting experience.
  + How will you handle scoring? How will you calculate the distance of the hit from the center of the target?
* In the simple gun example, you could convert the two ammo counters to a non-interactive screen overlay (HUD) display. For more information, see [Custom UI Examples - Station 10 - Timer and Build Overlays](/hw-docs/Tutorials/Custom%20UI%20Examples%20tutorial/Station%2010%20-%20Timer%20and%20Build%20Info%20Overlays.md).