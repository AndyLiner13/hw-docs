Source: https://developers.meta.com/horizon-worlds/learn/documentation/performance-best-practices-and-tooling/performance-best-practices/network-best-practices

Learn

# Network best practices

All moving (dynamic) objects in the world have their positions synchronized between clients, where updates are sent to every player in the world. If you have many animated objects, especially if they react to physics in the scene (collidable), the network data transfer could take a significant amount of time.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452578842_512520791285877_4917792001588352553_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=8BkhPZ9LUhIQ7kNvwFe7N2R&_nc_oc=AdmWl6qFkfuA3dczcmwNjQDpT1FVatudDdZQDzfclM691VnDA-sexI_KXYsPqmOQfho&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=0vdTDXZPL5BDT9r6MTotvQ&oh=00_AfhjYjqXOlCMvc6k7IUPvZjsc1FHMOOI1mj9VJSToXw-5Q&oe=692EA22E)

*Animated and interactive fish driven by server updates*

## Potential solution

To improve the time it takes to transfer data, consider keeping animated objects to a minimum, reducing the total overhead needed to sync between multiple users in your world.