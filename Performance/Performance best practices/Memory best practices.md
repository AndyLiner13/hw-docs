Source: https://developers.meta.com/horizon-worlds/learn/documentation/performance-best-practices-and-tooling/performance-best-practices/memory-best-practices

# Memory best practices

Keeping RAM usage under 6GB is important to prevent your world from crashing due to out of memory errors. By keeping RAM usage from assets such as textures and meshes low, you can also improve load times.

## Sounds

Make sure longer sounds like ambience, songs, and voiceovers are set to stream rather than load all at one into RAM.

## Textures

### Avoid NPOT (non power of two textures)

If you use a NPOT texture, Unity will introduce padding to make them become power of 2 which can cause the texture to become larger than if they were created as power of 2 from the start. If you need oddly specific pixel dimensions, a common solution is to place it together with other textures in a power of 2 texture atlas.

### Make textures as small as possible

Unless it is a texture atlas, most textures should probably be 1024x1024 or smaller. A rule of thumb can be to shrink the diffuse texture by half until it looks very bad visually, then go back up one level. I don’t recommend picking a resolution that looks “perfect” because the difference between perfect and good can often be very small. Some kinds of maps (normal maps, MEO, etc.) can often be set to half the resolution of the diffuse texture with little visual difference.

### Use single-texture materials

By using single texture materials, you can reduce the overall number of textures in the world and keep texture RAM usage to a minimum.

## Meshes

Try to keep mesh detail to only what is needed, favoring styles that work better with less vertices. A style with tons of smooth curves and bumps may cause your world to use more mesh memory.

## Spawning/Despawning objects

Make sure there is a limit to your dynamically spawned objects. For instance, if you can pull a rabbit out of a hat you will want to set a max limit on rabbits that can be out at once and consider vanishing the oldest rabbit in a puff of smoke. This will avoid bad performance and a crash from running out of memory for a user that has decided to pull out 1000 rabbits.

Ensure that dynamically spawned objects are despawned when no longer needed. Memory fragmentation occurs when objects of different sizes are randomly added and removed. To combat this, try to spawn groups of objects at the same time, then despawn them as a group. If possible, despawn groups in the reverse order that they were spawned.

### Use object pooling to avoid spawning and despawning objects

If you plan to spawn and despawn a set number of objects repeatedly, consider using an object pool to save memory. An object pool is a group of objects that is available to be used, but hidden and disabled until they are needed. When you would normally spawn one of the objects, you can instead activate and un-hide an available object from the pool and remove it from the pool.  If no object is available, you would spawn it as usual.. Instead of despawning one of the pooled objects, hide and deactivate it and then add it back to the pool. This approach is much more efficient and leads to better performance than frequent spawning and despawning.  You can reduce the performance impact by pre-populating the pool with as many objects as you think you are likely to need without using asset spawning at all.   Be careful to ensure your pool doesn’t grow too large - you may wish to put a limit on how many objects you allow back into the pool and despawn the rest.

## Animation

Consider the number of keyframes your animations use for things like NPCs. If it is extremely high, it may use up more RAM than necessary.