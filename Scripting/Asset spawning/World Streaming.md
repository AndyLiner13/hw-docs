Source: https://developers.meta.com/horizon-worlds/learn/documentation/typescript/asset-spawning/world-streaming

# World Streaming

World streaming is a Meta Horizon Worlds feature that provides an efficient approach to building and running large worlds. It lets you divide a large world (a parent world) into a set of smaller worlds (sublevels). At runtime, you don’t have to load the world all at once. Instead, you can stream each subworld into the parent world programmatically.

This approach provides tooling that lets you preview sublevels and configure them correctly within a parent world. It allows a team of world creators to work independently, where each developer works on a different sublevel. Sublevels are integrated into the parent world as they’re completed.

From a runtime perspective, this approach gives better load times than streaming in parts of the world using asset spawning. Sublevels can load two to three times faster due to leveraging cached global illumination (GI) information, and removing the cost of dynamically computing lighting during load.

This document details the procedure for dividing large Meta Horizon Worlds into multiple sub-levels.

## Benefits and limitations

The following section lists the benefits and limitations of the World Streaming feature.

### Benefits

**Divide a world into smaller sublevels**

Sublevels are separate worlds, which can each contain meshes, gizmos, scripts. You can preview and organize sublevels during world creation, and at runtime. You can dynamically stream sublevels in and out.

**Faster load time**

You’ll experience a two to three times improvement in world load time, versus regular asset spawning for worlds containing only imported meshes. Cached global illumination is leveraged to precompute mesh lighting in the cloud. This speeds up loading at runtime.

**Note** : Meshes are lit based on the environment settings defined in the sublevel world.

**Typescript APIs for setting and retrieving the state of sublevels at runtime**

This allows you to create worlds in which sublevels load and unload according to the player’s actions.

**Improved collaboration for groups of creators**

Groups of creators can work independently on different sublevels, which may then be stitched together into a single large coherent experience.

### Limitations

**Per-player world streaming is not supported**

World streaming is client independent. Loading a sublevel loads it for every player simultaneously.

**Multiple sublevels loaded at the same time will negatively impact performance**

You should be wary of performance considerations when spawning in multiple sublevels at the same time.

**Automated streaming based on player movement is not supported**

You must use Typescript APIs to manually stream sublevels.

## World streaming vs asset spawning

World Streaming or [Asset Spawning](/hw-docs/Scripting/Asset%20spawning/Introduction%20to%20Asset%20Spawning.md) are two approaches that you can use to spawn content into your world at runtime. Which approach you use depends on the following considerations.

**Use world streaming if**

* You want to spawn large chunks of static content.
* The content always spawns in the same location.
* You want to optimize the load time and improve the lighting quality for your content.

**Use asset spawning if**

* You want to spawn smaller chunks of content.
* The content is dynamic, or it spawns at different locations each time.

Meta encourages you to consider these factors when choosing which approach to implement. In many cases, it’s likely that you might want to use both strategies in the same world to spawn different kinds of content. For example, you might use world streaming to spawn static parts of the world as the player traverses it, and then use asset spawning to spawn dynamic content on top of the sublevel.

## Example: Create a world with sublevels

You can learn about the workflow involved in creating a world with sublevels by following the steps in this example scenario.

### Create sublevel worlds.

- In the Horizon Desktop Editor, create two new worlds called Sublevel1 and Sublevel2. Under **Choose how you’ll create**, select **Custom model imports**.
  ![Image shows the world creation window with the 'custom model imports' option selected.](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/462507050_563224309548858_7735022226235344296_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=MFfsicobI-MQ7kNvwF7U0Pg&_nc_oc=AdmeER0-kYaklXvBCXVIQXGO4ZryumZ7iarcN-o2UDxM9nU45tmEW_Lltj9_-FxjFAE&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=5yLVChvXNbOQp-9GK798Lg&oh=00_AfhaQZnSoQsqv_f0v0bjXK8IRKDuivnphx3x2tY-sbOPfg&oe=69313F82)
- Place several pieces of recognizable geometry inside each world. For example, you could use green objects in Sublevel1, and red objects in Sublevel2.
  ![Image shows an example of two worlds, one with green furniture and one with red furniture.](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/462629009_563224286215527_7331852403028520582_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=DtuX7TRdeLkQ7kNvwHOcAUJ&_nc_oc=AdnqiyZwiSo4qmkdtcq6LytchW-HcXG74bTg5GJS29XzgCFGT_2CRgjmqsqERf-35Ss&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=5yLVChvXNbOQp-9GK798Lg&oh=00_AfgUU8w-WUWEvHUB0M5DYTvdg3u6p65Pb9ALHm4ctNyeZA&oe=69313F67)
- In each world, create a new sublevel entity.
  ![Image shows a dropdown menu with the 'Sublevel' option selected.](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/462369543_563224319548857_5410471249327829752_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=2IFPQI5lNhsQ7kNvwGlcqQ3&_nc_oc=AdlknTEt8wit3yBYhLpkr7NEbOXif75cIIHbFdUd56kvnZExv6RM_59rNrMQ3j1uhU8&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=5yLVChvXNbOQp-9GK798Lg&oh=00_AfiiyDk4YgkajoqlsuEL9O4tEvxfM6JES7Uj0psQ-D6ekg&oe=69314156)
- Set the type of the sublevels to **Exclude**, and rename it to “Testing Only”.

  This informs the world that any entities that are children to this sublevel should be ignored when loading it into the parent world. Note that they still exist when you load the sublevel world directly. This allows you to add content that you can use to test sublevels in isolation, without worrying about it being included in the integrated version.
  ![Image shows a Properties menu with the type set to Exclude.](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/462454490_563224282882194_1061395988203076613_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=10ucR1pGwv0Q7kNvwH3sGoT&_nc_oc=AdmvAkLjMI7yxXZt30GAisxse9U9dRpI__1QMF4gn7ffwwrh4sW4jPMSlQTZlvh7afY&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=5yLVChvXNbOQp-9GK798Lg&oh=00_Afg3-b8IxplPXHXBnK8TXUrt_CFi1bDOr_m_KbxTlKw5bw&oe=69313B96)
- Drag the default spawn point under this new sublevel entity in the hierarchy so it won’t be included when you load this sublevel into the parent world.
- Publish both worlds, and be sure to turn off the setting **Visible to the public**.

### Create a parent world.

* Create a new world called “Overworld”. Under **Choose how you’ll create**, select **Custom model imports**.

![Image shows the 'Create a World' window with the 'Custom Model Import' option selected.](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/462492910_563224332882189_5157749398908009325_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=u76JdrxG6PsQ7kNvwGZHJgJ&_nc_oc=Adm1ZEKL6fFpbc5dwSofP0It79h_jfOTe2WRzDrt3_6oMgBnqaYQ-hlKE8zk1zFsYqg&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=5yLVChvXNbOQp-9GK798Lg&oh=00_AfhqWvutPnKVqvw4vJL9kqR70_Hcwc8Ctv-zBxvB1kFTYg&oe=693139A2)

### Add the sublevels.

* Using the drop-down list, add the two sublevel worlds to the overworld.

![Image shows a drop-down menu with the 'Sublevel' option selected.](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/462463696_563224326215523_8369992740494252695_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=gaWA5H72oZcQ7kNvwFi52U-&_nc_oc=AdknH7NvrB-XObodLzIzFLfIxNYmFXgRJLM2eXjPvZ0D8T4r_QFh-dvskUEYWHuUuCQ&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=5yLVChvXNbOQp-9GK798Lg&oh=00_Afi71XWTMXD60RG3iiAJV9tkVgPwj-o713fUXUgrtsvrEg&oe=693136E7)

### Link the sublevels.

* Select a sublevel object from the hierarchy.
* In the property panel, ensure that the **Sublevel Type** is set to Deeplink.

![Image shows the 'Properties' menu with the 'Sublevel Type' set to Deeplink.](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/462466842_563224302882192_512977330414403837_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=WtfPPUc7bHsQ7kNvwHb8h_8&_nc_oc=AdnwYO1GtRR8smHxB5KI9kV7yKQoElvDHSQFl3K4QSjEftGldWYhZHbvKU2cDiR-0-c&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=5yLVChvXNbOQp-9GK798Lg&oh=00_AfhqItCOQfwhMj5af56X3m3vPdECGNXybo2MpkyZwBPyLA&oe=69313920)

* Click on the thumbnail square.
* Select one of the sublevels from the world picker dialog box.

![Image shows an example window where sublevels may be chosen.](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/462531591_563224366215519_3816575801335575806_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=PhWYAHl72SYQ7kNvwGEjYYD&_nc_oc=AdndZef0vMEnGoWuPIiED8kkTIq5F5-0binhd0tdP1CneF_doz9cTCBEQ1vDcL_gkHo&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=5yLVChvXNbOQp-9GK798Lg&oh=00_AfjFbxtG4eglCGgnNUnBo_ktl0k6_8sULM9oAf0ThoygKQ&oe=693125F3)

### Position the sublevels.

* Select a sublevel in the scene hierarchy.
* Using the transform handles, position the sublevel so you can easily see it turn on and off.

![Image shows a sublevel being placed into a scene.](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/462395401_563224316215524_2125350969875732958_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=Cav30kbwvtIQ7kNvwFBxhDo&_nc_oc=Adn-B3DN-i2Z1LX8A8uc_x39R3aiSdWuKVWsWg9fNvdSp2VGDkcpkSuKyLBMqsQeXd0&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=5yLVChvXNbOQp-9GK798Lg&oh=00_AfiLZdJwHixGHj4nO8swq3m4aFZDi9b9uN4tP9hafSQk4A&oe=693129C5)

* Repeat the preceding two steps for the other sublevel.

### Set the initial state on the sublevels.

* In the **Properties** dialog, under **Sublevel Initial State** , try setting each of the initial sublevel states.

  + Select **Active**, and the entities are loaded and become active.
  + Select **Loaded**, and the entities are loaded, but are neither active nor visible.
  + Select **Unloaded**, and no entities are loaded.

As you change the states, you’ll see the sublevel load and become active, and unload.

![Image shows the properties menu with the 'Sublevel Initial State' field highlighted.](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/462525127_563224322882190_3387601690689725349_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=nsWuTKzMtpUQ7kNvwFmn21t&_nc_oc=AdnFwD5y8mTwd8IL0YSq3ww95osslAmd1OdvduL0XmEfV_cBrKmVKL--SEL4jYJv42E&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=5yLVChvXNbOQp-9GK798Lg&oh=00_Afg1V9q9lyFJfgCVGAo7zcZeBkqhXPoBuB_Kqsm8N1M6Vw&oe=693145BF)

## Programmatically spawn and despawn the sublevels

Follow this procedure to configure the Desktop Editor to run the sample script. You can run the script to see the SublevelEntity API in action. The sample code demonstrates how to:

* Get the current state of the sublevel (for example, loading).
* Get the target state of the sublevel (for example, loaded).
* Set the target state of the sublevel by using the following functions:

[activate()](/hw-docs/Reference/world_streaming/Classes/SublevelEntity.md) Make the sublevel visible to users and start running scripts.

[hide()](/hw-docs/Reference/world_streaming/Classes/SublevelEntity.md) Return an active sublevel back to the loaded state.

[load()](/hw-docs/Reference/world_streaming/Classes/SublevelEntity.md) Begin the process of loading a sublevel into memory, but don’t activate it yet.

[pause()](/hw-docs/Reference/world_streaming/Classes/SublevelEntity.md) Temporarily pause the load of a sublevel. Loading a sublevel has an impact on performance, so you might want to temporarily pause a load at performance-critical times. Resume the load by calling load() again.

[unload()](/hw-docs/Reference/world_streaming/Classes/SublevelEntity.md) Completely remove a sublevel from memory.

You can find the SublevelEntity class API in the [v2.0.0 world\_streaming package](/hw-docs/Reference/world_streaming/Classes/SublevelEntity.md). This API is not supported in v1.0.0 of the Meta Horizon Worlds API.

### Preconditions

Follow these steps to configure the Desktop Editor for running the example script.

- In the Desktop Editor, click the Scripts panel dropdown.
  ![Image shows the icon for the dropdown menu.](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/462463689_563224329548856_8861115945399082503_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=SBNcWarDn_cQ7kNvwFH8etg&_nc_oc=Adngic1G8COXSBF6I4XcyMGajzhzt_3KHJx-rJlzeda28cZqKQ_QCdAq77xPYrSKnkQ&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=5yLVChvXNbOQp-9GK798Lg&oh=00_Afhmg_7uEJLC6xskRy_3oTLbHLaRlDRZNP31i7aYSrmCUA&oe=693147B9)
- When the Scripts panel appears, select the **Settings** icon.
  ![Image shows a close-up of the settings icon.](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/462596018_563224369548852_1254548336609362418_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=uVeuajBwW7EQ7kNvwGXmcfV&_nc_oc=AdnXHq9qWlmIzyswwdLXx_kPDGrypv7AM_dNvGvQYunCKlQog9hg_P0cqohApm_JNaI&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=5yLVChvXNbOQp-9GK798Lg&oh=00_AfhUrSupIrq6CEbPD7yAc8ilvuBp3BEjdKk6l6yb7T6EDA&oe=69314098)
- Enable the **horizon/world\_streaming** module.
  ![Image shows the script settings menu with the 'horizon/world streaming' option enabled.](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/462429142_563224362882186_9097024643678864104_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=6dgG2Hchfr8Q7kNvwF3mcwo&_nc_oc=AdktHU1e7PFgjWPPgxSLmcn_Sr3G2gw12JvUs1OBSAFglMrLJDbJKE8D4p-MuOyIFmk&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=5yLVChvXNbOQp-9GK798Lg&oh=00_AfiQIvQDvgRe-eysIW3aDm1Om9ISrHou4bx4wWB7zKLeLQ&oe=69311D2A)

**Note** : You must have at least one script to enable a module.

### Example script

The following code demonstrates how to spawn and despawn sublevels at runtime.

```
import { Component, PropTypes, Entity, CodeBlockEvents } from 'horizon/core';
import { SublevelEntity } from 'horizon/world_streaming';

class TestSublevelAPI extends Component {
  static propsDefinition = {
    sublevel: {type: PropTypes.Entity},
    state: {type: 'number', default: 0}, // States 0 to 4 are:
                                         // Unloaded, Loaded, Active,
                                         // Pause, and Hide (Loaded).
  };

  start() {
    this.connectCodeBlockEvent(this.entity, CodeBlockEvents.OnPlayerEnterTrigger, async (player) => {
      var sublevel = this.props.sublevel?.as(SublevelEntity);
      var state = this.props.state;

      if (sublevel == null \|\| sublevel == undefined) {
        console.log("The sublevel entity was either null or invalid.")
        return;
      }

      console.log("Sublevel Trigger entered. Trying to set sublevel " + sublevel.toString() + " to " + state + ", current sublevel state is " + sublevel.currentState.get() + ", previous target sublevel state is " + sublevel.targetState.get());
      switch(state) {
        case 0: {
          sublevel.unload().then(() => {
            console.log("Sublevel " + sublevel?.toString() + " is now unloaded!");
          });
          break;
        }
        case 1: {
          sublevel.load().then(() => {
            console.log("Sublevel " + sublevel?.toString() + " is now loaded!");
          });
          break;
        }
        case 2: {
          sublevel.activate().then(() => {
            console.log("Sublevel " + sublevel?.toString() + " is now activated!");
          });
          break;
        }
        case 3: {
          sublevel.pause().then(() => {
            console.log("Sublevel " + sublevel?.toString() + " is now paused!");
          });
          break;
        }
        case 4: {
          sublevel.hide().then(() => {
            console.log("Sublevel " + sublevel?.toString() + " is now hidden!");
          });
          break;
        }
        default: {
          console.log("Invalid/Unexpected sublevel state # given: " + state);
          // unexpected state
          break;
        }
      }
    });
  }
}
Component.register(TestSublevelAPI);
```