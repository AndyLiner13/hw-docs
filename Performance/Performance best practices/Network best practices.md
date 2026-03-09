---
source: https://developers.meta.com/horizon-worlds/learn/documentation/performance-best-practices-and-tooling/performance-best-practices/network-best-practices
---

# Network best practices

All moving (dynamic) objects in the world have their positions synchronized between clients, where updates are sent to every player in the world. If you have many animated objects, especially if they react to physics in the scene (collidable), the network data transfer could take a significant amount of time.

![](../../_assets/images/6605d0df769d41a17d7fc5b5271695751c1426c7c3f34955c9360746133ed6cf.png)

*Animated and interactive fish driven by server updates*

## Potential solution

To improve the time it takes to transfer data, consider keeping animated objects to a minimum, reducing the total overhead needed to sync between multiple users in your world.