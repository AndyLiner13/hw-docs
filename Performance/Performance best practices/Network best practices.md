Source: https://developers.meta.com/horizon-worlds/learn/documentation/performance-best-practices-and-tooling/performance-best-practices/network-best-practices

# Network best practices

All moving (dynamic) objects in the world have their positions synchronized between clients, where updates are sent to every player in the world. If you have many animated objects, especially if they react to physics in the scene (collidable), the network data transfer could take a significant amount of time.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452578842_512520791285877_4917792001588352553_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=V5R7j5Zh1EgQ7kNvwFQpet7&_nc_oc=AdlG-OGCCHyl2lfqjltpTyxGxFsE1JPP8kui51w1uz8aBucRDoaF87jKLx5_7mdLM8k&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=qV6b8bwpdnW4B7RMmZJvTg&oh=00_AfmhL-SFyn7VS1N3SrScUiDxFWuAJWwYHcQ8vDXWoqU3Rw&oe=694BDB6E)

*Animated and interactive fish driven by server updates*

## Potential solution

To improve the time it takes to transfer data, consider keeping animated objects to a minimum, reducing the total overhead needed to sync between multiple users in your world.