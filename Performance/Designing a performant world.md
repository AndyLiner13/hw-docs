Source: https://developers.meta.com/horizon-worlds/learn/documentation/performance-best-practices-and-tooling/unity-performance-designing-a-performant-world

# Designing a performant world

This document provides a guide for world creators to design a world that allows for the best possible performance. This document should be read by artists and designers before creating the look and layout of the world.

## Meshes

### Art style has tradeoffs

A modern art style will use much less vertices than a streamline moderne from 1933. This is not to say you can’t choose a curvy art style, however, if you choose one you may have to compromise in other areas, such as gameplay or avatar count.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452521523_512536554617634_2696271712653898402_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=DGPB5clZeZgQ7kNvwGYrNH1&_nc_oc=Adm1sOqIN6-P8JGQE807RfBa0uEkfLMjKIRdDXyr39D629bpKzly7pX6tgbuQLsqrYQ&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=vTKL2GH0sA0dJ3r1v9a6Yw&oh=00_AfnlfPIZNFTnyaJZPp30cdsAGGxhyxE9PBpTrKOqp1tBIg&oe=694BDB56)

*Example of building style with an extreme amount of curves.*
*This kind of building will have a high vertex count.*

### Use Trimesh instead of SubD

Trimesh is the best solution for overall world performance as it provides more control over the geometry of your objects and the ability to use Cached GI to bake any static lighting. Determining the type of meshes used is a decision you should make early when creating the world. Trying to swap Trimesh into a SubD world would be a large undertaking.

### Do not mix Mesh types

Avoid mixing Trimesh and SubD because doing this will add an unwanted CPU performance penalty. This is because SubD forces an unwanted dynamic lighting calculation every frame.

### Merge meshes to reduce draw call count

For best performance, you will want to merge world meshes to reduce draw calls. Read the [GPU Best Practices](/hw-mcp-tools/documentation/hw-docs/Performance/Performance%20best%20practices/GPU%20best%20practices.md) section before deciding which world meshes to merge. Please see the [Horizon World Creator: GPU Performance Best Practices](/hw-mcp-tools/documentation/hw-docs/Performance/Performance%20best%20practices/GPU%20best%20practices.md) document for more information on merging meshes.

## Technical art choices

### Masked materials

We recommend modeling details rather than creating them using an alpha cutout texture and masked material for any larger objects that cause a lot of pixels to be drawn on screen.

See the example below. The green tree leaves take up a lot of pixels and should be modeled. The red flowers are too small to have a large effect and may be easier to create using masked materials.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452652319_512536571284299_6517807564455528126_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=WPaIvFagHMkQ7kNvwHmwrEG&_nc_oc=AdlVAIIl_tY6YAmcYCU2iyTfKcUl8QXwv9ADmGDZb5BkETXiMkJMHW49GWW1eaIxESk&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=vTKL2GH0sA0dJ3r1v9a6Yw&oh=00_AfmNTbHzw9ihRgTGJmHb6JZHHecUQ6doMaQxutnUgINCzQ&oe=694BBF80)

Decades ago, there was an art workflow for creating plants where the mesh is simple but a texture with an alpha mask combined with an alpha cutout shader is used to create the detailed shape of the leaves. At that time we were much more limited in bandwidth to process polygons. Screen resolutions are now higher than those times in the past, meaning there are many more pixels passing through the pixel shader.

Using this old workflow may actually hinder performance. This is because with an alpha cutout shader, it is impossible to know if a pixel will need to be drawn until the pixel shader is run. This breaks early depth test rejection and adds a performance penalty for every pixel drawn.

In the example below, the leaf was modeled using simple geometry and uses an alpha cutout texture and shader to create the detailed shape of the leaf. The areas in red still have to run the per pixel shader.

Every pixel on the rendered polygon has to run the shader first and determine if a pixel is to be discarded before the depth check can be run. This means all of the math of the shader will happen even for pixels that are covered by other objects.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452415075_512536541284302_1852434138106423061_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=2SqM8v8QqMgQ7kNvwEpigzl&_nc_oc=AdmUj3OiEBLyJHJA7f5T60T0rGHm9WS8C63SYkf_P4cKQpmnNEqyvHCGbzMKghD_UHQ&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=vTKL2GH0sA0dJ3r1v9a6Yw&oh=00_AfnTIOhvHFazqO4WoUzvdIejNNYcEqZZ5SWuKhL0Ao-1UA&oe=694BB4D2)

To avoid this performance penalty, it can make sense to model the details using actual geometry and an opaque shader for best performance and only on objects that take up a large amount of pixels on screen. We recommend keeping the mesh detail as low as possible when modeling and this can be enforced through an art style decision.

In the example below, the leaf details were modeled as part of the mesh. The texture and shader are opaque. If any portion of this leaf is covered by opaque objects, the pixels can be rejected early without processing the shader. There are no wasted pixels processed around the fringes.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452665735_512536564617633_255494625181766698_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=GleUlHFQ43wQ7kNvwEqJkGh&_nc_oc=Adl3rxCeduA98zhxtdy-vREb6x5gv0dQEYTaGfkXxTxbfHcz4Z9bog3j_rl7QkrIJ6M&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=vTKL2GH0sA0dJ3r1v9a6Yw&oh=00_AfnU7qk50966uAxOPWBwc16Ifejxfn9u-FccU28Btk7eAQ&oe=694BE56D)

## World rendering limitations

Meta Horizon Worlds does not currently support occlusion culling to avoid drawing objects hidden behind other larger objects. This makes world layout, mesh merging, and visibility control the main tools available to us for keeping the number of vertices sent through the graphics pipeline as low as possible.

## Designing world layouts for performance

It is easy for a world to have its performance hindered by non-performant layouts. Designing from a “blue sky” perspective can be fun, but it may be detrimental to rendering times. This section will show you how to design your world layout for best performance.

### Avoid making large amounts of a world visible from one position

In this scenario the player can stand in one spot and the entire world is in view. This is something we absolutely want to avoid if possible. In this arrangement, every single object will pass through the render pipeline. Because everything is visible, view frustum culling simply does not happen.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452665546_512536544617635_8474799145111336672_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=gWAc_EWcNxUQ7kNvwGjAGiT&_nc_oc=Adm2h0NtyDM4I9FwKLqYO0h3YMtro_8-uhU6-cUK4EgsA_kWTiI55LZTfUI5mRn0Eew&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=vTKL2GH0sA0dJ3r1v9a6Yw&oh=00_AfljQTU5Tal3bfG_J9bZZgHEcLSXoewq5g9ESnGdI2MewQ&oe=694BE12B)

*Every object in the world is visible, using significant resources.*

### Add twists and turns

By adding twists and turns to your world, you can limit the amount of objects visible at once. This is because objects outside the view frustum will be culled out.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452615363_512536561284300_2590624683490971616_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=9rWjWcJLzJsQ7kNvwGVH1Ri&_nc_oc=AdlZFXI32BtfKgRiqCKJuKaz0CWXKq9SCMYbCjppXIqduCe7Kqd6YYrL8YBfI5QxcOw&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=vTKL2GH0sA0dJ3r1v9a6Yw&oh=00_AfnWQWNzmIl-Bkyw7T1qVNroJt6_ERryiAnNNC6A3AEqVA&oe=694BEA6A)

*With all objects unmerged, only some objects are visible while others*
*are frustum culled.*

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452968584_512536537950969_2074123939149396057_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=t8TII5y7sy0Q7kNvwGLFaP8&_nc_oc=Adk-CQCQJCQnQxWSnOLTmMjiXerinIaLbMhUmqk61w-QrgVC6gFlO0K0rXv4DHVeVwg&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=vTKL2GH0sA0dJ3r1v9a6Yw&oh=00_Afn8ezYHtwu7Wccd5mxd8AbusgKEJW-y2lMuSQBHlUKpBw&oe=694BDE84)

*As you progress through the world, previously hidden objects appear*
*within the frustum and previously drawn objects are frustum culled.*

### Merging meshes

Each object when rendered will generate its own draw call which can be expensive. Merging meshes allows for a single draw call to render multiple objects and is a very common practice in Meta Horizon Worlds to increase performance.

It is important to merge meshes in such a way to take advantage of frustum culling which ensures that only objects the player is currently seeing are rendered. Please see the [Horizon World Creator: GPU Performance Best Practices](/hw-mcp-tools/documentation/hw-docs/Performance/Performance%20best%20practices/GPU%20best%20practices.md) document for more information on merging meshes.

### Avoid creating overly large merged meshes

If you merge all objects in the world, then it will break view frustum culling. See the following image where all the objects have been merged into one mesh. All objects highlighted in green will render, despite the view frustum not touching many of them.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452714917_512536547950968_5962150732882164843_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=-ZIkTg6n1wAQ7kNvwEIyg8g&_nc_oc=Admpz-FtwxCsEPBj_QanLAKqE4mKQ5ldoB_b1WeSdXs2hPTg63Q-6kEuSVemwPVEjH4&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=vTKL2GH0sA0dJ3r1v9a6Yw&oh=00_AflYyND4xs3RRkvDe9NtL1-6soYGEoUeadotmVxjwout7g&oe=694BC3D6)

*All mesh objects are grouped into one mesh causing frustum culling*
*to do nothing.*

### Create smaller localized clusters

See this next example where the objects have been merged into smaller localized clusters. The ones in Group A are drawn but the ones in Group B are not. By making use of typical views and the geometry of your world you can create groupings to maximize the impact of merging meshes on frustum culling.

![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452677911_512536557950967_3435113445092476895_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=FWFH8isosA0Q7kNvwHf_yCR&_nc_oc=AdlauBbN3jlA8MystZ4VFLvA5lIUTbOe5CgyJ6bVsjy8k3ggYLDFRr-Zq26bQSYAkuc&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=vTKL2GH0sA0dJ3r1v9a6Yw&oh=00_AfnUhEpWXfevkT1IZqtY9oC6e9OgmrgNpPwo3QHWpmNOuA&oe=694BE3BF)

*Group B is frustum culled but Group A is not.*

### Use verticality for more space with better frustum culling

By placing rooms on top of each other, you can add more space to a world while benefiting from improved view frustum culling. In the diagram below, green objects are in view while all the red objects in the room below or not. All the red objects are culled out and performance is improved.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452653026_512536551284301_6433487313962794823_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=5Rlrr-LN2ZUQ7kNvwGG_hj-&_nc_oc=AdlJzz1pka44t1wowg6Tj7aBs4EleIb3HpBZz4IDJl4SU3sR2f9a9Vflw3yY2rGAU2w&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=vTKL2GH0sA0dJ3r1v9a6Yw&oh=00_Afkd0vz1k8kwjqANzBNXwbsSRoE-741Qep8SKjNNnshOYg&oe=694BB680)

However, if the player looks down at an angle, all of the objects will still be drawn as they are all within the camera frustum. That is why you want to [set visibility](/hw-mcp-tools/documentation/hw-docs/Performance/Designing%20a%20performant%20world.md#use-set-visibility-to-hide-objects) to hide objects in rooms that you cannot see.

![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452578170_512536594617630_1672393260791108194_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=12AFtXrrng0Q7kNvwFcI-vz&_nc_oc=AdmUmqKbAl5iRmS_YKMu6-Sc_HZk6gdxwKqE7zEAwhSBEvtEnbFpJVMNhElpnA3YeqM&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=vTKL2GH0sA0dJ3r1v9a6Yw&oh=00_AflZR2-YUmhWllp6XQGfFtLCBMPNVydcA8a_IDxT7D7-Yg&oe=694BD399)

### Axis aligned bounding boxes

In reality, each group will be surrounded by a tight axis aligned bounding box (AABB). An AABB is a box with its shape lined up perfectly with the world X,Y and Z axes. The AABBs may overlap based on how you merge your mesh objects.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452934355_512536591284297_5562694496699702285_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=K1mYZie_F74Q7kNvwFTxCUl&_nc_oc=AdlUk-I_cPlpliRJaLmpqiEhkjyZ3HPFB6G_NWPQIPRf47sDXaH72SxC04iP7heNLGc&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=vTKL2GH0sA0dJ3r1v9a6Yw&oh=00_AfnqI1fALgP7t-QexNzOb_pQc-v3PeBThz5opMxzByRECA&oe=694BD310)

*Two AABBs overlap due to mesh object grouping.*

If any AABB intersects with the view frustum, they will be drawn and go through the entire graphics pipeline. In the following example, all objects are drawn even though it looks like Group B should not be drawn. This is because the AABB for Group B intersects with the camera frustum.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452814653_512536584617631_6645312895410632076_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=0Gm8fJzJY30Q7kNvwECdLf7&_nc_oc=AdlKz6YEDwrnVDjPFwHrOOPE_SasvajuV9Tic5lqkc_KWCZkYXBlyu8GX2LgDLCmlkA&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=vTKL2GH0sA0dJ3r1v9a6Yw&oh=00_AfkYgbGJaRB9IFjz9YeCJUyHxH74ycVISEhG1lDhQNynmw&oe=694BCF64)

*Looks like only Group A visible, but Group B is*
*rendered because AABB is within the frustum.*

## Use set visibility to hide objects

Long hallways are a design layout we have seen in some worlds. However, when at one side of a hallway and facing the other side, all objects are in the frustum. This is another version of the entire world visible all at once. However, there is something you can do to reduce the number of objects rendered. Use the [Entity API](https://horizon.meta.com/resources/scripting-api/core.entity.visible.md/?api_version=2.0.0) to set visibility on or off.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452756647_512536567950966_2643662129032564579_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=FCYJeqeLh8MQ7kNvwGUownu&_nc_oc=AdnQ5Hc-QpImWeNbqucdGWCAnnhDazsmtFo4eUGDOgF2uUSSNk3MWa69B5gzGXqc9RE&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=vTKL2GH0sA0dJ3r1v9a6Yw&oh=00_Afk8zLC_2jxeCAy6HaqruxYFVddSAvmSrSIEPx1UonPDqw&oe=694BD214)

*Separate rooms but all objects are inside the frustum.*

Meta Horizon Worlds has the ability to set visibility on objects. You can design your world in a way that you can’t see the objects in the room you previously came from. As mentioned before, this can be done with [twists and turns](/hw-mcp-tools/documentation/hw-docs/Performance/Designing%20a%20performant%20world.md#designing-world-layouts-for-performance) , but another method is to add doors that close behind you.

Using a trigger, you can determine the moment you can no longer see the previous room and set visibility off for those objects. That way, even if the user turns around, these objects will not go through the render pipeline. Similarly, you can avoid having objects visible that you can’t see yet because they are blocked. You can block the line of sight [vertically](/hw-mcp-tools/documentation/hw-docs/Performance/Designing%20a%20performant%20world.md#technical-art-choices) by using elevators or shafts that go either up or down.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452592371_512536577950965_9036878834909609726_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=k2YS5PuK0bMQ7kNvwEeqalX&_nc_oc=AdmmoMizThclNe2fDtcQIGlckPMvgLG68v0IUmDBW9G4osL8T8hWGiygjoX3p7EZR5g&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=vTKL2GH0sA0dJ3r1v9a6Yw&oh=00_Afk55ZxZwJ_xyJoXMxi5OHHRRraYjSCq2bpovUWanhCdHg&oe=694BE85F)

*Door blocks visibility to second room*

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452672307_512536574617632_1491438558323672026_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=WtO8JHCeWtwQ7kNvwEcoY8-&_nc_oc=AdmIHQMRYIBHBFdQ8SwLwoyqU0Cbr5NeOHImNUUN_bI5131c-wLe7B4GxMQ-r7do66k&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=vTKL2GH0sA0dJ3r1v9a6Yw&oh=00_Afk_9MTwZoZJJtGHdbDrTFLm4--i3ITWu26gB2omVznMnA&oe=694BC19B)

*90 degree turn blocks line of sight to second room*

## Streaming content in worlds

Due to memory constraints, it is sometimes necessary to stream in parts of a world. Sometimes the world is large and spans a vast area, or sometimes the same part of the world is re-used for vastly different mini-games. There are some things to keep in mind when streaming your world to keep players feeling immersed.

### Hiding CPU spikes

Nothing reminds you that you are playing a VR game quite like experiencing a large CPU spike causing a drop in frame rate. Spikes can often occur when loading new parts of a world due to things like loading assets into memory, compiling shaders, or scripts initializing. As a world creator you can incorporate tactics into your design to hide the spikes.

### Create Transitions

The overall easiest way to hide the spikes is to create a moment where the player can’t see anything moving. The easiest way to do that is to fade to white or black, start the loading, then un-fade when the loading or at least the CPU spikes have likely stopped. Remember, if the player can look around and see any movement, they will see the spikes.

### Reducing CPU spikes

If you can’t hide the CPU spikes, they can be reduced  by controlling the amount of assets loading at once, trickling them in bit by bit.

#### Waiting room

The easiest way to do this is utilizing a waiting room with a progress display, that way there is not much limit to how slowly you can trickle. Ideally there is something interesting to do in the room while waiting. You can use the [SpawnController API](https://horizon.meta.com/resources/scripting-api/core.spawncontrollerbase.md/?api_version=2.0.0) to check “currentState” and see if the assets have completely loaded or not, but it does not provide a percentage complete.

If you want to show a countdown timer, it is necessary to fake it by using a stopwatch to see how long it takes to actually load the content. Keep in mind loading on Quest 3 may be faster than Quest 2, so you would want to time using Quest 2.

#### Twisting hallways

You can create a long hallway and load assets as you traverse it, ideally using some method to prevent backtracking such as adding a door. Make sure the hallway is long enough to load everything by the time the player reaches the end and consider making use of twists and turns to prolong the amount of time needed to traverse.

## Creating a world budget

Before beginning building a world it is important to determine key aspects which will impact the overall performance. As an example, multiplayer worlds will have greater limitations in terms of complexity as resources need to be conserved to account for the additional avatars.

Understanding what makes your world unique and the critical gameplay components will allow you to prioritize these aspects when it comes to making performance tradeoffs.

### Build a gameplay only MVP first

The gameplay of your world will impact the resources available for your world.  For instance, first person shooters often use a reticle that consumes considerable CPU time. This in turn will cut into your budget for rendering the environment and particle systems.

It is recommended to build your world as a gameplay only MVP first, avoiding detailed art and environmental effects in order to understand your base performance. Then you can see how much room you have left to layer in detailed graphics, particle effects, and other details.

### Capacity Settings

Meta Horizon Worlds has a built in way to view the complexity of your world. Check this to see where your current world may be using too many resources. See the [Capacity Settings](https://www.oculus.com/horizon-worlds/learn/tutorial/capacity-settings/) documentation on the Oculus website for info on how to see the capacity settings. See the [Creator capacity limits in Meta Horizon Worlds](/hw-mcp-tools/documentation/hw-docs/Save,%20optimize,%20and%20publish/Creator%20capacity%20limits.md) for how to interpret the various information presented on that screen.

### Consider avatar count

A world that supports 1 avatar and a world that supports 15 avatars have vastly different limitations. The world with 15 avatars may use up to 6 ms more per frame than the world with 1 avatar. This will eat into your world’s time budget (CPU and GPU). This means the more avatars your world supports the less detailed graphically your world will need to be to remain performant.

The [Performance Limits for a World](/hw-mcp-tools/documentation/hw-docs/Performance/Performance%20limits%20for%20a%20World.md)

document will help you decide the parameters of your world budget. Even though the document says a more static world may be able to have 1 million polygons, it does not take into account the avatar count, world layout, or which meshes you merge which can impact this number dramatically.

## Spawning prefabs causes asset duplication

Some worlds spawn prefabs. For example, using gun prefabs to allow for many different skins for each gun. Spawning prefabs in Meta Horizon Worlds causes a new copy of each texture, material, and mesh to go into RAM for each object spawned.

This means if you have 16 players and they all use the same weapon with the same skin, there will be 16 copies of the same meshes, textures, and shaders they use in memory. This can add up, potentially causing your world to use too much RAM overall. This is not to say don’t do it, but more of a warning of what will happen if you do.

## Use the simplest materials possible

Choosing the simplest materials will yield the best performance. The [Materials Guidance and Reference for Custom Models](/hw-mcp-tools/documentation/hw-docs/Custom%20models%20(FBX)/Creating%20custom%20models%20for%20Horizon%20Worlds/Materials%20Guidance%20and%20Reference%20for%20Custom%20Models.md) document has a list of materials to choose from. Generally, a material that samples less textures is more performant. Materials using vertex colors only or textures only will perform better than materials with advanced metalness calculations. The differences between materials becomes the most obvious on objects that either take up a large portion of the screen visually or have an extreme amount of vertices.

## Follow best practices

As you can see, there are many things that will use up the limited CPU and GPU time available to your world. Because of this, it is important to squeeze every ounce of performance from every feature of your world. To that end, you will want to read the [Horizon World Creator Performance Best Practices](/hw-mcp-tools/documentation/hw-docs/Custom%20models%20(FBX)/Creating%20custom%20models%20for%20Horizon%20Worlds/Best%20practices%20for%20custom%20models.md) document which shows how to avoid all of those common performance issues we have found across many worlds that we have reviewed.