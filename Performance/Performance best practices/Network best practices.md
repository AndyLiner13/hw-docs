Source: https://developers.meta.com/horizon-worlds/learn/documentation/performance-best-practices-and-tooling/performance-best-practices/network-best-practices

# Network best practices

All moving (dynamic) objects in the world have their positions synchronized between clients, where updates are sent to every player in the world. If you have many animated objects, especially if they react to physics in the scene (collidable), the network data transfer could take a significant amount of time.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452578842_512520791285877_4917792001588352553_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=zjabmXNlz0wQ7kNvwH7-H89&_nc_oc=AdmsNK_6UmwzAH30hd_YVlqpZIM2xAL-4yDTgWhDzZxtH18meSCRexL2iLxIUPG8cJz4DauebOhzyVqK8gwSCrGU&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=4hEye2ldrqmbGES8Kckw9A&oh=00_AflSXlAORAJSeUt6kIghWyWsa1rf-3bDBUgNrEhnZgUkNQ&oe=6955866E)

*Animated and interactive fish driven by server updates*

## Potential solution

To improve the time it takes to transfer data, consider keeping animated objects to a minimum, reducing the total overhead needed to sync between multiple users in your world.