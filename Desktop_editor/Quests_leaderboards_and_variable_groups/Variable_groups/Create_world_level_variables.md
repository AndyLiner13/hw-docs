# Create world level variables

## Set up world level variables

 Use the following process to create a world level variable:
1. Select Systems > Variable Groups from the menu bar.
2. In the Variable Groups panel, click the Create Variable Group button, then name your created variable group.
3. After creating the variable group, click the Create Variable button. In the Create Persistent Variable panel, use the Variable Type dropdown to select World Persistent Variable. ![Create Persistent Variable panel](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/517447534_760611476476806_2459560139301980966_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=6-n9tjaO3ZcQ7kNvwGiw4m9&_nc_oc=AdkUVC0viF04QiTn2eM59VSne3vY-Kn17bpyZCvnV43xxm3qkNvkHsLvTKVfWfTMiBI&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=ZG...
4. Next, name your created variable and select the Data Type. You can choose from the following data types:
  • Number - used by world counter APIS to save community activity counters
  • Object - used by world variable APIs to save complex world states
5. After selecting the Data Type input a value for the Initial Value.
## Use world level variables

 After setting up world level variables, you can use them in your scripts.
Reference the following sample scripts to use world level variables in your scripts:  
### Import required modules

  `import` `*` `as` hz `from` `'horizon/core'`;`  
### Get a world level variable

  
```
const value = this.world.persistentStorageWorld.getWorldVariable<string>(
 "VG:WPVar"
);
console.log("World Variable Value: " + value);
```
  
### Fetch a world variable

  
```
await this.world.persistentStorageWorld.fetchWorldVariableAsync(
 "VG:WPVar"
).then((value) => {
 console.log("World Variable Value: " + value);
});
```
  
### Set a world variable

  
```
await this.world.persistentStorageWorld.setWorldVariableAcrossAllInstancesAsync(
 "VG:WPVar",
 { "key": "value" }
).then((value) => {
 console.log("World Variable Set: " + value);
});
```
  
## Set world-level counters

 After creating a world level variable of type number, you can use it to set
world-level counters. The counter APIs can be used to bump certain logic in the game
such as `make_wish` or `catch_butteryfly` etc. Reference the following sample scripts to use world level counters in your
scripts:  
### Get world counter

  
```
const value = this.world.persistentStorageWorld.getWorldCounter<string>(
 "VG:WPVar"
);
console.log("World Variable Value: " + value);
```
  
### Increment a world counter

  
```
await this.world.persistentStorageWorld.incrementWorldCounter(
 "VG:WPVar",
 10
).then((value) => {
 console.log("World Counter: " + value);
});
```
    ![Nav Logo](https://static.xx.fbcdn.net/rsrc.php/yE/r/3SoBlk8EqOQ.svg)


[Facebook](https://www.facebook.com/MetaHorizon/)
[Threads](https://www.threads.com/@metahorizon)
[X](https://x.com/MetaHorizon)
[Instagram](https://www.instagram.com/metahorizon/)
[YouTube](https://www.youtube.com/@MetaQuestVR)

 Learn
[Documentation](https://developers.meta.com/horizon-worlds/learn/documentation/)
[Blog](https://developers.meta.com/horizon/blog/)
[Forum](https://communityforums.atmeta.com/t5/Creator-Forum/ct-p/Meta_Horizon_Creator_Forums)

 Programs
[Meta Horizon Creator Program](https://developers.meta.com/horizon-worlds/programs/)

 My Creations
[My Worlds](https://horizon.meta.com/creator/worlds_all/?utm_source=horizon_worlds_creator)
[My Assets](https://horizon.meta.com/creator/assets/?utm_source=horizon_worlds_creator)
[Performance](https://horizon.meta.com/creator/performance/traces/?utm_source=horizon_worlds_creator)

 Privacy & Legal
[Privacy Policy](https://www.meta.com/legal/privacy-policy/)
[Legal](https://www.meta.com/legal/supplemental-terms-of-service/)

 © 2025 Meta
