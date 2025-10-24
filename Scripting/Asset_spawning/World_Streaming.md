# World Streaming

 World streaming is a Meta Horizon Worlds feature that provides an efficient
approach to building and running large worlds. It lets you divide a large world (a
parent world) into a set of smaller worlds (sublevels). At runtime, you don’t
have to load the world all at once. Instead, you can stream each subworld into the
parent world programmatically. This approach provides tooling that lets you preview sublevels and configure
them correctly within a parent world. It allows a team of world creators to work
independently, where each developer works on a different sublevel. Sublevels are
integrated into the parent world as they’re completed. From a runtime perspective, this approach gives better load times than streaming
in parts of the world using asset spawning. Sublevels can load two to three
times faster due to leveraging cached global illumination (GI) information, and
removing the cost of dynamically computing lighting during load. This document details the procedure for dividing large Meta Horizon Worlds into
multiple sub-levels.  
## Benefits and limitations

 The following section lists the benefits and limitations of the World Streaming
feature.  
### Benefits

 Divide a world into smaller sublevels Sublevels are separate worlds, which can each contain meshes, gizmos, scripts.
You can preview and organize sublevels during world creation, and at runtime. You
can dynamically stream sublevels in and out. Faster load time You’ll experience a two to three times improvement in world load time, versus
regular asset spawning for worlds containing only imported meshes. Cached global
illumination is leveraged to precompute mesh lighting in the cloud. This speeds
up loading at runtime. Note : Meshes are lit based on the environment settings defined in the sublevel
world. Typescript APIs for setting and retrieving the state of sublevels at runtime This allows you to create worlds in which sublevels load and unload according to
the player’s actions. Improved collaboration for groups of creators Groups of creators can work independently on different sublevels, which may then
be stitched together into a single large coherent experience.  
### Limitations

 Per-player world streaming is not supported World streaming is client independent. Loading a sublevel loads it for every
player simultaneously. Multiple sublevels loaded at the same time will negatively impact performance You should be wary of performance considerations when spawning in multiple
sublevels at the same time. Automated streaming based on player movement is not supported You must use Typescript APIs to manually stream sublevels.  
## World streaming vs asset spawning

 World Streaming or [Asset Spawning](https://developers.meta.com/horizon-worlds/learn/documentation/typescript/asset-spawning/introduction-to-asset-spawning/) are two approaches that you can use to spawn content into your world at
runtime. Which approach you use depends on the following considerations. Use world streaming if
• You want to spawn large chunks of static content.
• The content always spawns in the same location.
• You want to optimize the load time and improve the lighting quality for your
content.

 Use asset spawning if
• You want to spawn smaller chunks of content.
• The content is dynamic, or it spawns at different locations each time.

 Meta encourages you to consider these factors when choosing which approach to
implement. In many cases, it’s likely that you might want to use both strategies
in the same world to spawn different kinds of content. For example, you might use
world streaming to spawn static parts of the world as the player traverses it,
and then use asset spawning to spawn dynamic content on top of the sublevel.  
## Example: Create a world with sublevels

 You can learn about the workflow involved in creating a world with sublevels by
following the steps in this example scenario.  
### Create sublevel worlds.

1. In the Horizon Desktop Editor, create two new worlds called Sublevel1 and
Sublevel2. Under Choose how you’ll create, select Custom model imports. ![Image shows the world creation window with the 'custom model imports' option
selected.](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/462507050_563224309548858_7735022226235344296_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=6zA2OCrXyCwQ7kNvwGHJjLM&_nc_oc=Adk2b_YY22EWkidT06ftaRlyePLTP-0hjCnSPgQxy34-TavuZpSFxPXPBFE-KCEBLpU&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=BOOF3agDzuqe2X6MvZjJcg&oh=00_AffVClyDS85qju0PULG_RLNMVYtD...
2. Place several pieces of recognizable geometry inside each world. For example,
you could use green objects in Sublevel1, and red objects in Sublevel2. ![Image shows an example of two worlds, one with green furniture and one with red
furniture.](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/462629009_563224286215527_7331852403028520582_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=cxFJqKA1c6QQ7kNvwFsBDRe&_nc_oc=Adl9YM89YJd4lP2KvDeZPb4-yt-OlttyeMt-8h999P4HUjraQ-7TywwyAEmafguoX2g&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=BOOF3agDzuqe2X6MvZjJcg&oh=00_AfeNwXiHYpff6KWUcTBWw2keNo5MI...
3. In each world, create a new sublevel entity. ![Image shows a dropdown menu with the 'Sublevel' option selected.](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/462369543_563224319548857_5410471249327829752_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=plu18T2Y2BwQ7kNvwF1UOdw&_nc_oc=AdnfmAsWKh61mLWmE-Rgv4e5f7icQGUrn9-PZ_4VcYIj6zFiePvNzYQJ18oNnde4AuU&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=BOOF3agDzuqe2X6MvZjJcg&oh=00_Afe...
4.  Set the type of the sublevels to Exclude, and rename it to “Testing Only”.This informs the world that any entities that are children to this sublevel
should be ignored when loading it into the parent world. Note that they still exist
when you load the sublevel world directly. This allows you to add content that
you can use to test sublevels in isolation, without worrying about it being
included in the integrated version. ![Image shows a Properties menu with the type set to Exclude.](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/462454490_563224282882194_1061395988203076613_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=RIVHyYgU_vkQ7kNvwGDmKcz&_nc_oc=AdnIYROQL9NNN_aP_73Pn9ioRC1R6O27DrOFP-gyNWY9tM9WOs0Qf0sYGJEa8-1axQc&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=BOOF3agDzuqe2X6MvZjJcg&oh=00_Afe...
5. Drag the default spawn point under this new sublevel entity in the hierarchy so
it won’t be included when you load this sublevel into the parent world.
6. Publish both worlds, and be sure to turn off the setting Visible to the public.
### Create a parent world.

• Create a new world called “Overworld”. Under Choose how you’ll create, select Custom model imports.

 ![Image shows the 'Create a World' window with the 'Custom Model Import' option
selected.](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/462492910_563224332882189_5157749398908009325_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=JNxyxNR7LJgQ7kNvwFtf4qg&_nc_oc=AdllTyM1BYLqg6fbRdaHQdhmfuN9EQ8Q4n6tXY4H0ZhrluxMrtO6pPGPkBLhEhJ4ZtE&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=BOOF3agDzuqe2X6MvZjJcg&oh=00_AfdgpBUhYtkl167XiWbPH5MSko...
### Add the sublevels.

• Using the drop-down list, add the two sublevel worlds to the overworld.
 ![Image shows a drop-down menu with the 'Sublevel' option selected.](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/462463696_563224326215523_8369992740494252695_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=nbto0lN2jAQQ7kNvwGfeWz_&_nc_oc=AdlXbACbFku_3oV7ufR_p6FVeZ0Nk1fJ8FfasUYKD6HiPNRqrP7Cs799qiHAOa_3LlY&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=BOOF3agDzuqe2X6MvZjJcg&oh=00_Afd...
### Link the sublevels.

• Select a sublevel object from the hierarchy.
• In the property panel, ensure that the Sublevel Type is set to Deeplink.
 ![Image shows the 'Properties' menu with the 'Sublevel Type' set to Deeplink.](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/462466842_563224302882192_512977330414403837_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=tDPm_qHtBUIQ7kNvwHHIP3H&_nc_oc=AdnVf4qdSg_wdx2PAX7vrxJOdoLZFwNKIIBnC-hRZoR2Bv9X2n8f3Qdz7Lf9LTLA5uw&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=BOOF3agDzuqe2X6MvZjJcg&oh...
• Click on the thumbnail square.
• Select one of the sublevels from the world picker dialog box.
 ![Image shows an example window where sublevels may be chosen.](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/462531591_563224366215519_3816575801335575806_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=h2IZN9Mw0zoQ7kNvwFh8xXu&_nc_oc=AdlD5tsJA9ILdv0YO92AJpTz2cnFQWXf00HicrobBYkXPf0eureHXkJ5LcC8SqCZ6Ig&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=BOOF3agDzuqe2X6MvZjJcg&oh=00_AffCO-L6Fby...
### Position the sublevels.

• Select a sublevel in the scene hierarchy.
• Using the transform handles, position the sublevel so you can easily see it turn
on and off.
 ![Image shows a sublevel being placed into a scene.](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/462395401_563224316215524_2125350969875732958_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=QRw-F5oK0rkQ7kNvwGao9Km&_nc_oc=AdlMSACdYI3M7gEuZVXxlRJ29B89ZPLrnxuZWIGLHvEyrvDpkDgA8JbqD0gU5cS6EMI&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=BOOF3agDzuqe2X6MvZjJcg&oh=00_AfcgkjIk...
• Repeat the preceding two steps for the other sublevel.
### Set the initial state on the sublevels.

•  In the Properties dialog, under Sublevel Initial State , try setting each of the initial sublevel states.
  • Select Active, and the entities are loaded and become active.
  • Select Loaded, and the entities are loaded, but are neither active nor visible.
  • Select Unloaded, and no entities are loaded.

 As you change the states, you’ll see the sublevel load and become active, and
unload. ![Image shows the properties menu with the 'Sublevel Initial State' field
highlighted.](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/462525127_563224322882190_3387601690689725349_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=5_QcBfuyk_8Q7kNvwEE44mJ&_nc_oc=AdnIjW0yA4_ekpHPJEBkUbp-vSlcYbUsinDJoWqDskBLGkkhIEAhzycSTb9HdmGAO5g&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=BOOF3agDzuqe2X6MvZjJcg&oh=00_Afe2_DvLwowsqG87...
## Programmatically spawn and despawn the sublevels

 Follow this procedure to configure the Desktop Editor to run the sample script.
You can run the script to see the SublevelEntity API in action. The sample code
demonstrates how to:
• Get the current state of the sublevel (for example, loading).
• Get the target state of the sublevel (for example, loaded).
• Set the target state of the sublevel by using the following functions:
 [activate()](https://horizon.meta.com/resources/scripting-api/world_streaming.sublevelentity.activate.md/?api_version=2.0.0) Make the sublevel visible to users and start running scripts. [hide()](https://horizon.meta.com/resources/scripting-api/world_streaming.sublevelentity.hide.md/?api_version=2.0.0) Return an active sublevel back to the loaded state. [load()](https://horizon.meta.com/resources/scripting-api/world_streaming.sublevelentity.load.md/?api_version=2.0.0) Begin the process of loading a sublevel into memory, but don’t activate it yet. [pause()](https://horizon.meta.com/resources/scripting-api/world_streaming.sublevelentity.pause.md/?api_version=2.0.0) Temporarily pause the load of a sublevel. Loading a sublevel has an impact on
performance, so you might want to temporarily pause a load at
performance-critical times. Resume the load by calling load() again. [unload()](https://horizon.meta.com/resources/scripting-api/world_streaming.sublevelentity.unload.md/?api_version=2.0.0) Completely remove a sublevel from memory. You can find the SublevelEntity class API in the [v2.0.0 world_streaming package](https://horizon.meta.com/resources/scripting-api/world_streaming.sublevelentity.md/?api_version=2.0.0). This API is not supported in v1.0.0 of the Meta Horizon Worlds API.  
### Preconditions

 Follow these steps to configure the Desktop Editor for running the example
script.
1. In the Desktop Editor, click the Scripts panel dropdown. ![Image shows the icon for the dropdown menu.](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/462463689_563224329548856_8861115945399082503_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=KE_56dDciMUQ7kNvwFBuCfz&_nc_oc=AdlO14NeZwzpfbiWZLFQIO5ChLAqnSRNz2Xjz-QyE6xdQo96M-4Yk0bRFvWFSosA6Sw&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=BOOF3agDzuqe2X6MvZjJcg&oh=...
2. When the Scripts panel appears, select the Settings icon. ![Image shows a close-up of the settings icon.](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/462596018_563224369548852_1254548336609362418_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=mRmOYP4QMg8Q7kNvwGEsqQ6&_nc_oc=Admns44aa4GiUY17u0HG4O1u0LmsWY3y0tAqrGie-dP2mOgH1s0PzbPgeIL6e0Tnkno&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=BOOF3agDzuqe2X6MvZjJcg...
3. Enable the horizon/world_streaming module. ![Image shows the script settings menu with the 'horizon/world streaming' option
enabled.](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/462429142_563224362882186_9097024643678864104_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=OFhVComd1x8Q7kNvwGpccv2&_nc_oc=AdnV7GU02dAZlxrIHRLjFppvQcPY2FIqBREnSM_xRVgNV2sgKuKI88Z6D5ZtFl4xIyQ&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=BOOF3agDzuqe2X6MvZjJcg&oh=00_Afe-qMC_dky1SLuPFKCoLwpNqdzyQvTh...
 Note : You must have at least one script to enable a module.  
### Example script

 The following code demonstrates how to spawn and despawn sublevels at runtime.  
```
import { Component, PropTypes, Entity, CodeBlockEvents } from 'horizon/core';
import { SublevelEntity } from 'horizon/world_streaming';


class TestSublevelAPI extends Component<typeof TestSublevelAPI> {
  static propsDefinition = {
    sublevel: {type: PropTypes.Entity},
    state: {type: 'number', default: 0}, // States 0 to 4 are:
                                         // Unloaded, Loaded, Active,
                                         // Pause, and Hide (Loaded).
  };


  start() {
    this.connectCodeBlockEvent(this.entity, CodeBlockEvents.OnPlayerEnterTrigger, async (player) => {
      var sublevel = this.props.sublevel?.as(SublevelEntity);
      var state = this.props.state;


      if (sublevel == null \|\| sublevel == undefined) {
        console.log("The sublevel entity was either null or invalid.")
        return;
      }

      console.log("Sublevel Trigger entered. Trying to set sublevel " + sublevel.toString() + " to " + state + ", current sublevel state is " + sublevel.currentState.get() + ", previous target sublevel state is " + sublevel.targetState.get());
      switch(state) {
        case 0: {
          sublevel.unload().then(() => {
            console.log("Sublevel " + sublevel?.toString() + " is now unloaded!");
          });
          break;
        }
        case 1: {
          sublevel.load().then(() => {
            console.log("Sublevel " + sublevel?.toString() + " is now loaded!");
          });
          break;
        }
        case 2: {
          sublevel.activate().then(() => {
            console.log("Sublevel " + sublevel?.toString() + " is now activated!");
          });
          break;
        }
        case 3: {
          sublevel.pause().then(() => {
            console.log("Sublevel " + sublevel?.toString() + " is now paused!");
          });
          break;
        }
        case 4: {
          sublevel.hide().then(() => {
            console.log("Sublevel " + sublevel?.toString() + " is now hidden!");
          });
          break;
        }
        default: {
          console.log("Invalid/Unexpected sublevel state # given: " + state);
          // unexpected state
          break;
        }
      }
    });
  }
}
Component.register(TestSublevelAPI);
```    ![Nav Logo](https://static.xx.fbcdn.net/rsrc.php/yE/r/3SoBlk8EqOQ.svg)


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
