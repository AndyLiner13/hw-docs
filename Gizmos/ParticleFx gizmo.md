Source: https://developers.meta.com/horizon-worlds/learn/documentation/code-blocks-and-gizmos/particlefx-gizmo

# ParticleFx gizmo

The ParticleFX [gizmo](About%20gizmos.md) is a helper tool that allows you to easily add visual effects such as smoke, sparks, and confetti, making worlds more dynamic and visually engaging. Some use cases of particle effects include adding game event feedback with explosions and hit sparks, or enhance immersion with confetti bursts and water splashes.

The following image is taken from the [sample world](../Tutorials/Getting%20started/Getting%20started%20with%20tutorials/Tutorial%20Prerequisites.md) called [Chop-n-pop](https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/chop-n-pop-sample-world/module-1-setup) where the ParticleFX gizmos provide the sparkles around the loot.

<details>
<summary>the ParticleFx gizmo is at work in the sample world</summary>

<p></p>

[the ParticleFx gizmo is at work in the sample world](../image_data/45f10e2dd72ee2675e14039eb925d520c7d83d83b4cfe808b789fd5b8bcb2532.md)

### Overview
This image depicts a scene from a video game or animated environment. It features a character from behind, looking at a wooden chest with glowing magical effects emanating from it. The setting appears to be a dimly lit, possibly abandoned stone structure with a mystical atmosphere.

### Key Elements
- **Character**: A figure with pink hair tied up in a bun, wearing a pink hoodie. Positioned in the bottom left, facing away from the viewer towards the chest.
- **Chest**: A large wooden chest with a dark handle, located centrally in the foreground. It has a rustic appearance with visible wood grain and wear.
- **Glowing Effects**: Sparkling magical effects appear above and around the chest, suggesting some form of enchantment or magic.
- **Background**: The setting is a stone structure with arches and a purple-hued sky, giving a mystical or eerie ambiance.

### Visual Flow / Relationships
The most prominent visual element is the glowing effect above the chest, drawing attention to it as the focal point. The character is positioned to look at the chest, indicating interaction or interest. The background elements provide context but do not compete for attention.

</details>

<p></p>



## Limitations

[Performance](../Performance/Performance%20best%20practices/CPU%20and%20TypeScript%20optimization%20and%20best%20practices.md) can be impacted if too many complex effects are used at once.

## Access the ParticleFx gizmo

While you can access and configure the gizmos in the [VR tool](../VR%20tools/Getting%20started/Create%20a%20new%20world%20in%20Meta%20Horizon%20Worlds.md), the following steps show you how to access the ParticleFx gizmo from the desktop editor and add it to the [scene pane](../Desktop%20editor/Get%20started%20with%20Desktop%20Editor/User%20interface/Panels%20and%20Tabs%20in%20the%20desktop%20editor.md#scene-pane).

- In the desktop editor while in the Build mode, select **Build** > **Gizmos** from the menu bar, search for “particle” in the search field.
- Select the ParticleFx gizmo and drag it into the scene.
- You can now edit the new gizmo properties in the [**Properties panel**](../Desktop%20editor/Get%20started%20with%20Desktop%20Editor/User%20interface/Panels%20and%20Tabs%20in%20the%20desktop%20editor.md#properties-pane).

## Properties

The ParticleFx gizmo is an entity. All objects in a world are represented by entities. [Entities](../Reference/core/Classes/Entity.md) have their respective properties such as position, rotation, and scale. In the **Properties** panel, you can edit the gizmo’s transformation fields to configure its **Position**, **Rotation**, and **Scale**.

In the **Emission** section, additional properties are available to customize the ParticleFx gizmo.

**Play on Start** controls whether the ParticleFx gizmo auto-starts the effect when the world starts.

**Looping** sets the effect to loop or play once.

**Preset** allows you to select from an array of particle effects in its dropdown menu.

**Preview** allows creators to see how the effect will look while still in the [Build Mode](../Desktop%20editor/Get%20started%20with%20Desktop%20Editor/User%20interface/Build%20and%20Preview%20Modes.md). This feature is particularly useful for fine-tuning the particle effect during the building phase. Click **Play** to start the preview. Click **Stop** to stop the preview.

For more information on the ParticleFx gizmo properties, see the [MHCP creator’s manual](https://github.com/MHCPCreators/horizonCreatorManual/blob/main/HorizonTechnicalDoc.md#particlefx-gizmo).

The following image shows the ParticleFx gizmo is at work in the [Build mode](../Desktop%20editor/Get%20started%20with%20Desktop%20Editor/User%20interface/Build%20and%20Preview%20Modes.md).

**Note**: Once the configuration is complete in the **Properties** panel, you can immediately see the effect in either the [Build Mode](../Desktop%20editor/Get%20started%20with%20Desktop%20Editor/User%20interface/Build%20and%20Preview%20Modes.md) by clicking **Play** next to **Preview** or enter the [Preview mode](../Desktop%20editor/Get%20started%20with%20Desktop%20Editor/Preview%20mode.md).

<details>
<summary>the ParticleFx gizmo is at work in the Build mode</summary>

<p></p>

[the ParticleFx gizmo is at work in the Build mode](../image_data/18faa6b7b0c5fdef9e9d16dc687cf35e4daa4c9b9ea77a20c71f347cf85dbe7f.md)

### Overview
The image depicts a 3D scene with a character and a floating cube. The character is standing on a grid floor, facing towards the cube. The cube has a bright orange color with white symbols and sparkles around it.

### Key Elements
- **Character**: A blue humanoid figure with a simplistic design, standing on the ground. The character is facing forward, with one hand raised as if waving.
- **Cube**: An orange cube with white symbols resembling a diamond and a stylized 'i'. Sparkles are emanating from the cube, giving it a glowing effect.
- **Background**: A light gray grid floor with a light blue ceiling.

### Visual Flow / Relationships
- The most prominent visual element is the cube, which is centrally located above the character.
- There are no arrows or lines connecting elements, but the character's raised hand suggests interaction with the cube.
- Spatially, the cube is above the character, and the character is positioned below the cube.

</details>

<p></p>



The following image shows the ParticleFx gizmo is at work in the [Preview mode](../Desktop%20editor/Get%20started%20with%20Desktop%20Editor/Preview%20mode.md).

<details>
<summary>the ParticleFx gizmo is at work in the Preview mode</summary>

<p></p>

[the ParticleFx gizmo is at work in the Preview mode](../image_data/1fcf75eb2d31f3228ed375ef88ed8f457a759b99e64aa4e0131db4a2ade5d94d.md)

### Overview
The image depicts a rear view of a character standing in a minimalist environment with a gradient sky background. The character has a colorful hairstyle split into pink and blue sections tied up in buns. Sparkling yellow star shapes are scattered across the sky above the character. The ground is a simple tiled floor.

### Key Elements
- **Character**: A person viewed from behind, wearing a pink hoodie and light-colored pants. The hair is styled in two buns, one pink and one blue.
- **Stars**: Multiple yellow star shapes of varying sizes are floating in the sky. They appear to be sparkles or decorative elements.
- **Background**: A gradient sky transitioning from light blue at the bottom to a lighter, almost white hue at the top. The ground is a tiled floor with a light gray color.

### Visual Flow / Relationships
The stars are distributed across the sky, creating a sense of depth and focus towards the upper part of the image. The character stands still, looking upwards, which draws attention to the stars above.

</details>

<p></p>



## Scripting

The ParticleFX Gizmo can also be controlled using [ParticleGizmo](../Reference/core/Classes/ParticleGizmo.md) API, allowing you to play, stop, and configure effects programmatically. For additional resources, see the [sample world](../Tutorials/Getting%20started/Getting%20started%20with%20tutorials/Tutorial%20Prerequisites.md) called [Chop-n-pop module 11 loot system](../Tutorials/Genre%20samples/Chop%20N%20Pop%20sample%20world/Module%2011%20-%20Loot%20System.md). You can find this world in [**Creation Home**](../Desktop%20editor/Get%20started%20with%20Desktop%20Editor/Create%20a%20New%20World.md).

## What’s next?

Now that you’ve been introduced to the ParticleFx gizmo, further your learning with hands-on tutorials and related developer guides:

* [Chop-n-pop module 11 loot system](../Tutorials/Genre%20samples/Chop%20N%20Pop%20sample%20world/Module%2011%20-%20Loot%20System.md)
* [Meta Horizon Creator Program’s creator manual on the ParticleFx gizmo](https://github.com/MHCPCreators/horizonCreatorManual/blob/main/HorizonTechnicalDoc.md#particlefx-gizmo)
* [Example scripts library](../Scripting/API%20references%20and%20examples/Example%20scripts%20library.md#particlefx-gizmo-example-script)
* [Scripting using TypeScript](../Scripting/Scripting%20using%20TypeScript.md)