# Designing a performant world

## Meshes

  
### Art style has tradeoffs

 A modern art style will use much less vertices than a streamline moderne from
1933. This is not to say you can't choose a curvy art style, however, if you
choose one you may have to compromise in other areas, such as gameplay or avatar
count. ![Image](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452521523_512536554617634_2696271712653898402_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=nbZslYFaTvoQ7kNvwHYE-CX&_nc_oc=Adkh1LNKHC1OttF-GFMD3cm9GCPaE6qSmlOsUe8SUsHu5TJqHadUcXyoDb1g9mrFBa4&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=ARO--0ZoBDvLoBNcKZtrCg&oh=00_AffXuuVy43ShQ9...
 Example of building style with an extreme amount of curves.This kind of building will have a high vertex count.  

### Use Trimesh instead of SubD

 Trimesh is the best solution for overall world performance as it provides more
control over the geometry of your objects and the ability to use Cached GI to
bake any static lighting. Determining the type of meshes used is a decision you
should make early when creating the world. Trying to swap Trimesh into a SubD world
would be a large undertaking.  
### Do not mix Mesh types

 Avoid mixing Trimesh and SubD because doing this will add an unwanted CPU
performance penalty. This is because SubD forces an unwanted dynamic lighting
calculation every frame.  

### Merge meshes to reduce draw call count

 For best performance, you will want to merge world meshes to reduce draw calls.
Read the [GPU Best Practices](https://developers.meta.com/horizon-worlds/learn/documentation/performance-best-practices-and-tooling/performance-best-practices/gpu-best-practices/) section before deciding which world meshes to merge. Please see the [Horizon World Creator: GPU Performance Best Practices](https://developers.meta.com/horizon-worlds/learn/documentation/performance-best-practices-and-tooling/performance-best-practices/gpu-best-practices) document for more information on merging meshes.  

  

# Designing a performant world

## Technical art choices

  
### Masked materials

 We recommend modeling details rather than creating them using an alpha cutout
texture and masked material for any larger objects that cause a lot of pixels to
be drawn on screen. See the example below. The green tree leaves take up a lot of pixels and should
be modeled. The red flowers are too small to have a large effect and may be
easier to create using masked materials. ![Image](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452652319_512536571284299_6517807564455528126_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=q1_t3k5LayYQ7kNvwHYBDNN&_nc_oc=Adneb9NnYDyVcdLExW-wEkem4mi6oKekjtqrJlu8XBQxo1RxoHUZYxY6RYXeD2T3C1E&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=ARO--0ZoBDvLoBNcKZtrCg&oh=00_Affx...
 Decades ago, there was an art workflow for creating plants where the mesh is
simple but a texture with an alpha mask combined with an alpha cutout shader is
used to create the detailed shape of the leaves. At that time we were much more
limited in bandwidth to process polygons. Screen resolutions are now higher than
those times in the past, meaning there are many more pixels passing through the
pixel shader. Using this old workflow may actually hinder performance. This is because with an
alpha cutout shader, it is impossible to know if a pixel will need to be drawn
until the pixel shader is run. This breaks early depth test rejection and adds a
performance penalty for every pixel drawn. In the example below, the leaf was modeled using simple geometry and uses an
alpha cutout texture and shader to create the detailed shape of the leaf. The areas
in red still have to run the per pixel shader. Every pixel on the rendered polygon has to run the shader first and determine if
a pixel is to be discarded before the depth check can be run. This means all of
the math of the shader will happen even for pixels that are covered by other
objects. ![Image](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452415075_512536541284302_1852434138106423061_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=kSxNBSxXN4wQ7kNvwGX1Jua&_nc_oc=Adl42u9rX4qpJyNQsloAIjwFC1uLyC7S7z0xzb91a17ZEqskjlfLigvNRvSWFzcSTeY&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=ARO--0ZoBDvLoBNcKZtrCg&oh=00_AffqaabAH0mN...
 To avoid this performance penalty, it can make sense to model the details using
actual geometry and an opaque shader for best performance and only on objects
that take up a large amount of pixels on screen. We recommend keeping the mesh
detail as low as possible when modeling and this can be enforced through an art
style decision. In the example below, the leaf details were modeled as part of the mesh. The
texture and shader are opaque. If any portion of this leaf is covered by opaque
objects, the pixels can be rejected early without processing the shader. There are
no wasted pixels processed around the fringes. ![Image](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452665735_512536564617633_255494625181766698_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=mz-r9DjtRPIQ7kNvwHzvXZa&_nc_oc=AdkoEeE3fZP4LDQmdnJGgdlKT568QXV2WJ5Tw1_ucRNyIZikfEzdNezVCre72EPCeNs&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=ARO--0ZoBDvLoBNcKZtrCg&oh=00_Afcv1iU...

# Designing a performant world

## World rendering limitations

 Meta Horizon Worlds does not currently support occlusion culling to avoid
drawing objects hidden behind other larger objects. This makes world layout, mesh
merging, and visibility control the main tools available to us for keeping the
number of vertices sent through the graphics pipeline as low as possible.  

# Designing a performant world

## Designing world layouts for performance

 It is easy for a world to have its performance hindered by non-performant
layouts. Designing from a "blue sky" perspective can be fun, but it may be detrimental
to rendering times. This section will show you how to design your world layout
for best performance.  
### Avoid making large amounts of a world visible from one position

 In this scenario the player can stand in one spot and the entire world is in
view. This is something we absolutely want to avoid if possible. In this
arrangement, every single object will pass through the render pipeline. Because everything
is visible, view frustum culling simply does not happen. ![Image](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452665546_512536544617635_8474799145111336672_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=swBFMpeYsJQQ7kNvwFR2RRz&_nc_oc=Adlj4iYOi0T5qzMjPsqTkSv-TIwuRNvZz-k0JHFCbtNuuP1s85mVAAfpLTxCFwjGCCs&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=ARO--0ZoBDvLoBNcKZ...
 Every object in the world is visible, using significant resources.  

### Add twists and turns

 By adding twists and turns to your world, you can limit the amount of objects
visible at once. This is because objects outside the view frustum will be culled
out. ![Image](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452615363_512536561284300_2590624683490971616_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=u77UgG1jFV0Q7kNvwFmQkLC&_nc_oc=Adl9kV6qlMSsk-bA3Jn4xBeVrcdSY0eprVqmF74QnkzeA2lko0LE1W1d9O9O6DqS7B0&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=ARO--0ZoBDvLoBNcKZtrCg&oh=...
 With all objects unmerged, only some objects are visible while othersare frustum culled. ![Image](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452968584_512536537950969_2074123939149396057_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=ugsGXTv0KGQQ7kNvwGccNXk&_nc_oc=AdmdhDS7Xj27CNf9bOkxxEWSfJMwdXX1fCYgSeSTFR3Kziznh3Y-TSokMmkjD6yK1l8&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=ARO--0ZoBDvLoBN...
 As you progress through the world, previously hidden objects appearwithin the frustum and previously drawn objects are frustum culled.  

### Merging meshes

 Each object when rendered will generate its own draw call which can be
expensive. Merging meshes allows for a single draw call to render multiple objects and is
a very common practice in Meta Horizon Worlds to increase performance. It is important to merge meshes in such a way to take advantage of frustum
culling which ensures that only objects the player is currently seeing are rendered.
Please see the [Horizon World Creator: GPU Performance Best Practices](https://developers.meta.com/horizon-worlds/learn/documentation/performance-best-practices-and-tooling/performance-best-practices/gpu-best-practices) document for more information on merging meshes.  

### Avoid creating overly large merged meshes

 If you merge all objects in the world, then it will break view frustum culling.
See the following image where all the objects have been merged into one mesh.
All objects highlighted in green will render, despite the view frustum not
touching many of them. ![Image](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452714917_512536547950968_5962150732882164843_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=6RRQ_cDP0LoQ7kNvwEx3-iv&_nc_oc=AdkfHPIoLOiRKfEL1vOT06NLCfnfMJF77eAuET657nhAWbvoTVrDyJ7UoO4770XtB0M&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=ARO--0ZoBDvLoBNcKZtrCg&oh=00_Afd_4...
 All mesh objects are grouped into one mesh causing frustum cullingto do nothing.  

### Create smaller localized clusters

 See this next example where the objects have been merged into smaller localized
clusters. The ones in Group A are drawn but the ones in Group B are not. By
making use of typical views and the geometry of your world you can create groupings
to maximize the impact of merging meshes on frustum culling. ![Image](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452677911_512536557950967_3435113445092476895_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=7sPGbrzwSywQ7kNvwGKQ77Y&_nc_oc=AdkhlGNslq0hifCCJoxMhmq_IVsd7wNuQ7ijpCMqhtsUVKQWWz9Z7mQOIu6n7AI2lyA&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=ARO--0ZoBDvLoBNcKZtrC...
 Group B is frustum culled but Group A is not.  

### Use verticality for more space with better frustum culling

 By placing rooms on top of each other, you can add more space to a world while
benefiting from improved view frustum culling. In the diagram below, green
objects are in view while all the red objects in the room below or not. All the red
objects are culled out and performance is improved. ![Image](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452653026_512536551284301_6433487313962794823_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=DIJAO_Todl4Q7kNvwGegJku&_nc_oc=AdkDbj6oEejskzVBsuEWNCiXHAszV2oVBsTCHGpP73krIYCfJ6Obt5hvCUi0KZW0ISo&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=ARO--0ZoBDvLoBN...
 However, if the player looks down at an angle, all of the objects will still be
drawn as they are all within the camera frustum. That is why you want to set visibility to hide objects in rooms that you cannot see. ![Image](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452578170_512536594617630_1672393260791108194_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=auMzLVdj9SsQ7kNvwFWKASN&_nc_oc=AdmLrZ_fkshjxC_Z0SKmNzbMcKmffN6KH2rp_FjwzwdDC5QjDMMHhZ2NrAFKPQNP_8E&_nc_zt=14&_nc_ht=scontent-dfw...

### Axis aligned bounding boxes

 In reality, each group will be surrounded by a tight axis aligned bounding box
(AABB). An AABB is a box with its shape lined up perfectly with the world X,Y and
Z axes. The AABBs may overlap based on how you merge your mesh objects. ![Image](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452934355_512536591284297_5562694496699702285_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=wIoz3R3yv0MQ7kNvwGYs1jW&_nc_oc=Adkvk18M3ytnWprbHmZuPdxYmKgaZ3pfijZM1yn67HrTjxeaMpeuXmBsM9E3TqUIIjQ&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=ARO--0ZoBDvLoBN...
 Two AABBs overlap due to mesh object grouping. If any AABB intersects with the view frustum, they will be drawn and go through
the entire graphics pipeline. In the following example, all objects are drawn
even though it looks like Group B should not be drawn. This is because the AABB
for Group B intersects with the camera frustum. ![Image](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452814653_512536584617631_6645312895410632076_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=59uQpnOeze0Q7kNvwF6-t3O&_nc_oc=AdllCgDTvwt599l4J9EShzGuW3pCYM0hXdPNgsofQ6jXfLiqSH_TepipMLwPVtrera0&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=ARO--0ZoBDvLoBNcKZtrCg&oh=00_A...
 Looks like only Group A visible, but Group B isrendered because AABB is within the frustum.  

# Designing a performant world

## Use set visibility to hide objects

 Long hallways are a design layout we have seen in some worlds. However, when at
one side of a hallway and facing the other side, all objects are in the frustum.
This is another version of the entire world visible all at once. However, there
is something you can do to reduce the number of objects rendered. Use the [Entity API](https://horizon.meta.com/resources/scripting-api/core.entity.visible.md/?api_version=2.0.0) to set visibility on or off. ![Image](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452756647_512536567950966_2643662129032564579_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=3aMZc_suc-YQ7kNvwEGwJeu&_nc_oc=AdmlreS5R54wZ1SYAIffbrUmVCbaG0oVWQgiRE76dTh1oLstbmSIy1G-QPmGvpCQ_sI&_nc_zt=14&_nc_ht=sc...
 Separate rooms but all objects are inside the frustum. Meta Horizon Worlds has the ability to set visibility on objects. You can design
your world in a way that you can't see the objects in the room you previously
came from. As mentioned before, this can be done with twists and turns , but another method is to add doors that close behind you. Using a trigger, you can determine the moment you can no longer see the previous
room and set visibility off for those objects. That way, even if the user turns
around, these objects will not go through the render pipeline. Similarly, you
can avoid having objects visible that you can't see yet because they are blocked.
You can block the line of sight vertically by using elevators or shafts that go either up or down. ![Image](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452592371_512536577950965_9036878834909609726_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=3946NK0EBokQ7kNvwFls5Wp&_nc_oc=AdmAapDFjZWhs8OADJHE-u5SJ5TSPw_cPmrvN0G5KRHusvE7Wq1rgmKJiFA-lHawc48&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=ARO--0ZoBDvLoBNcKZtrC...
 Door blocks visibility to second room ![Image](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452672307_512536574617632_1491438558323672026_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=I7q9BEopZfwQ7kNvwFHiVQe&_nc_oc=Adkiu82xNQ819VbKr8H8qvbvBiKBFiB-7i2j37s4S1oxFSCEh4GBErzgXxIDuzo8QgY&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=ARO--0ZoBDvLoBNcKZtrCg&oh=00_AfePS4Dsm...
 90 degree turn blocks line of sight to second room  

# Designing a performant world

## Streaming content in worlds

 Due to memory constraints, it is sometimes necessary to stream in parts of a
world. Sometimes the world is large and spans a vast area, or sometimes the same
part of the world is re-used for vastly different mini-games. There are some
things to keep in mind when streaming your world to keep players feeling immersed.  
### Hiding CPU spikes

 Nothing reminds you that you are playing a VR game quite like experiencing a
large CPU spike causing a drop in frame rate. Spikes can often occur when loading
new parts of a world due to things like loading assets into memory, compiling
shaders, or scripts initializing. As a world creator you can incorporate tactics
into your design to hide the spikes.  

### Create Transitions

 The overall easiest way to hide the spikes is to create a moment where the
player can't see anything moving. The easiest way to do that is to fade to white or
black, start the loading, then un-fade when the loading or at least the CPU
spikes have likely stopped. Remember, if the player can look around and see any
movement, they will see the spikes.  

### Reducing CPU spikes

 If you can't hide the CPU spikes, they can be reduced  by controlling the amount
of assets loading at once, trickling them in bit by bit.  
#### Waiting room

 The easiest way to do this is utilizing a waiting room with a progress display,
that way there is not much limit to how slowly you can trickle. Ideally there is
something interesting to do in the room while waiting. You can use the [SpawnController API](https://horizon.meta.com/resources/scripting-api/core.spawncontrollerbase.md/?api_version=2.0.0) to check "currentState" and see if the assets have completely loaded or not,
but it does not provide a percentage complete. If you want to show a countdown timer, it is necessary to fake it by using a
stopwatch to see how long it takes to actually load the content. Keep in mind
loading on Quest 3 may be faster than Quest 2, so you would want to time using Quest
2.  

#### Twisting hallways

 You can create a long hallway and load assets as you traverse it, ideally using
some method to prevent backtracking such as adding a door. Make sure the hallway
is long enough to load everything by the time the player reaches the end and
consider making use of twists and turns to prolong the amount of time needed to
traverse.  

# Designing a performant world

## Creating a world budget

 Before beginning building a world it is important to determine key aspects which
will impact the overall performance. As an example, multiplayer worlds will
have greater limitations in terms of complexity as resources need to be conserved
to account for the additional avatars. Understanding what makes your world unique and the critical gameplay components
will allow you to prioritize these aspects when it comes to making performance
tradeoffs.  
### Build a gameplay only MVP first

 The gameplay of your world will impact the resources available for your world. 
For instance, first person shooters often use a reticle that consumes
considerable CPU time. This in turn will cut into your budget for rendering the
environment and particle systems. It is recommended to build your world as a gameplay only MVP first, avoiding
detailed art and environmental effects in order to understand your base
performance. Then you can see how much room you have left to layer in detailed graphics,
particle effects, and other details.  

### Capacity Settings

 Meta Horizon Worlds has a built in way to view the complexity of your world.
Check this to see where your current world may be using too many resources. See the
[Capacity Settings](https://www.oculus.com/horizon-worlds/learn/tutorial/capacity-settings/) documentation on the Oculus website for info on how to see the capacity
settings. See the [Creator capacity limits in Meta Horizon Worlds](https://developers.meta.com/horizon-worlds/learn/documentation/save-optimize-and-publish/capacity-limits-in-horizon) for how to interpret the various information presented on that screen.  

### Consider avatar count

 A world that supports 1 avatar and a world that supports 15 avatars have vastly
different limitations. The world with 15 avatars may use up to 6 ms more per
frame than the world with 1 avatar. This will eat into your world's time budget
(CPU and GPU). This means the more avatars your world supports the less detailed
graphically your world will need to be to remain performant. The [Performance Limits for a World](https://developers.meta.com/horizon-worlds/learn/documentation/performance-best-practices-and-tooling/performance-limits-for-a-world/) document will help you decide the parameters of your world budget. Even though
the document says a more static world may be able to have 1 million polygons, it
does not take into account the avatar count, world layout, or which meshes you
merge which can impact this number dramatically.  

# Designing a performant world

## Spawning prefabs causes asset duplication

 Some worlds spawn prefabs. For example, using gun prefabs to allow for many
different skins for each gun. Spawning prefabs in Meta Horizon Worlds causes a new
copy of each texture, material, and mesh to go into RAM for each object spawned. This means if you have 16 players and they all use the same weapon with the same
skin, there will be 16 copies of the same meshes, textures, and shaders they
use in memory. This can add up, potentially causing your world to use too much RAM
overall. This is not to say don't do it, but more of a warning of what will
happen if you do.  

# Designing a performant world

## Use the simplest materials possible

 Choosing the simplest materials will yield the best performance. The [Materials Guidance and Reference for Custom Models](https://developers.meta.com/horizon-worlds/learn/documentation/custom-model-import/creating-custom-models-for-horizon-worlds/materials-guidance-and-reference-for-custom-models/) document has a list of materials to choose from. Generally, a material that
samples less textures is more performant. Materials using vertex colors only or
textures only will perform better than materials with advanced metalness
calculations. The differences between materials becomes the most obvious on objects that
either take up a large portion of the screen visually or have an extreme amount
of vertices.  

# Designing a performant world

## Follow best practices

 As you can see, there are many things that will use up the limited CPU and GPU
time available to your world. Because of this, it is important to squeeze every
ounce of performance from every feature of your world. To that end, you will want
to read the [Horizon World Creator Performance Best Practices](https://developers.meta.com/horizon-worlds/learn/documentation/custom-model-import/creating-custom-models-for-horizon-worlds/best-practices) document which shows how to avoid all of those common performance issues we
have found across many worlds that we have reviewed.    ![Nav Logo](https://static.xx.fbcdn.net/rsrc.php/yE/r/3SoBlk8EqOQ.svg)


[Facebook](https://www.facebook.com/MetaHorizon/)
[Threads](https://www.threads.com/@metahorizon)
[X](https://x.com/MetaHorizon/)
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
[Privacy Policy](https://www.meta.com/legal/privacy/policy/)
[Legal](https://www.meta.com/legal/supplemental-terms-of-service/)

 © 2025 Meta

# Designing a performant world

## Additional Links
- [Meta home](https://developers.meta.com/horizon-worlds/)
- [Login](https://developers.meta.com/login/?redirect_uri=https%3A%2F%2Fdevelopers.meta.com%2Fhorizon-worlds%2Flearn%2Fdocumentation%2Fperformance-best-practices-and-tooling%2Funity-performance-designing-a-performant-world%2F)

# Designing a performant world

 This document provides a guide for world creators to design a world that allows
for the best possible performance. This document should be read by artists and
designers before creating the look and layout of the world.  
## Meshes

## Technical art choices

## World rendering limitations

## Designing world layouts for performance

## Use set visibility to hide objects

## Streaming content in worlds

## Creating a world budget

## Spawning prefabs causes asset duplication

## Use the simplest materials possible

## Follow best practices

## Additional Links

      Learn
# Designing a performant world
