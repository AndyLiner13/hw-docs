Source: https://developers.meta.com/horizon-worlds/learn/documentation/code-blocks-and-gizmos/trailfx-gizmo

# TrailFx gizmo

The TrailFx [gizmo](About%20gizmos.md) is a tool designed to simplify the addition of visual effects, specifically trailing effects to moving objects in a virtual world. When the TrailFX gizmo is active, it creates a visual trail that follows the gizmo as it moves. This gizmo is intended to enhance the visual effects, making worlds more immersive and engaging.

## Limitations

There are [limitations](https://github.com/MHCPCreators/horizonCreatorManual/blob/main/HorizonTechnicalDoc.md#trailfx-gizmo) to the TrailFx gizmo. Using it sparingly to avoid [performance](../Performance/Performance%20best%20practices/CPU%20and%20TypeScript%20optimization%20and%20best%20practices.md) issues is recommended.

## Access the TrailFx gizmo

While you can access and configure the gizmos in the [VR tool](../VR%20tools/Getting%20started/Create%20a%20new%20world%20in%20Meta%20Horizon%20Worlds.md), the following steps show you how to access the TrailFx gizmo from the desktop editor and add it to the [scene pane](../Desktop%20editor/Get%20started%20with%20Desktop%20Editor/User%20interface/Panels%20and%20Tabs%20in%20the%20desktop%20editor.md#scene-pane).

- In the desktop editor while in the Build mode, select **Build** > **Gizmos** from the menu bar, search for “trailfx” in the search field.
- Select the TrailFx gizmo and drag it into the scene.
- You can now edit the new gizmo properties in the [**Properties panel**](../Desktop%20editor/Get%20started%20with%20Desktop%20Editor/User%20interface/Panels%20and%20Tabs%20in%20the%20desktop%20editor.md#properties-pane).

## Properties

The TrailFx gizmo is an entity. All objects in a world are represented by entities. [Entities](../Reference/core/Classes/Entity.md) have their respective properties such as position, rotation, and scale. In the **Properties** panel, you can edit the gizmo’s transformation fields to configure its **Position**, **Rotation**, and **Scale**.

In the **Visual** section, additional properties are available to customize the TrailFx gizmo.

**Play on Start** controls whether the TrailFx gizmo auto-starts the effect when the world starts.

**Length**, **Width**, **Start Color**, **End Color** and **Preset** control the appearance and style of the TrailFx gizmo. The **Preset** dropdown menu allows you to select from three types of trails: **Default**, **Simple** or **Tapered**.

**Preview** allows creators to see how the trail effect while still in the [Build Mode](../Desktop%20editor/Get%20started%20with%20Desktop%20Editor/User%20interface/Build%20and%20Preview%20Modes.md). This feature is particularly useful for fine-tuning the visual aspects of the trail effect during the building phase. Click **Play** to start the preview. Click **Stop** to stop the preview.

**Note**: For more information on the TrailFx gizmo properties, see the [MHCP creator’s manual](https://github.com/MHCPCreators/horizonCreatorManual/blob/main/HorizonTechnicalDoc.md#trailfx-gizmo).

The following image shows how the **Preview** property works while you’re in the [Build mode](../Desktop%20editor/Get%20started%20with%20Desktop%20Editor/User%20interface/Build%20and%20Preview%20Modes.md). Once the TrailFx gizmo is configured with a simple trail in colors of purple and green, click **Play** next to **Preview**. You can [move](../Desktop%20editor/Get%20started%20with%20Desktop%20Editor/User%20interface/Object%20tools.md#move) the gizmo manually to see the trailing effect.

<details>
<summary>The TrailFx gizmo configured with a simple trail in colors of purple and green in the Build mode</summary>

<p></p>

[The TrailFx gizmo configured with a simple trail in colors of purple and green in the Build mode](../image_data/05b341cf1f4245f0a8d0b3184494734562ae7fdeae002e0a8735689f65a63b9a.md)

### Overview
This image depicts a 3D modeling environment with a large rectangular object and a smaller cube-like object. The scene includes a grid floor and a small human figure for scale. There are also directional arrows and a coordinate indicator.

### Key Elements
- **Rectangular Object**: A large, elongated object with a gradient from purple to green at one end. It has a smooth surface and is positioned horizontally across the scene.
- **Cube Object**: A smaller, cube-shaped object with a red face featuring white markings. It is located to the left of the rectangular object and is oriented slightly tilted.
- **Directional Arrows**: Green upward arrow near the cube and a yellow arrow pointing towards the rectangular object.
- **Coordinate Indicator**: A black oval with white text indicating "X:-10.77" near the yellow arrow.
- **Human Figure**: A small blue figure with a head and limbs, positioned below the rectangular object, serving as a scale reference.
- **Grid Floor**: A dark gray grid covering the entire floor, providing a structured background.

### Visual Flow / Relationships
The most prominent visual elements are the rectangular object and the cube. The arrows indicate movement or direction towards the rectangular object. The human figure provides a sense of scale, emphasizing the size of the objects. The coordinate indicator suggests a focus on the X-axis measurement.

</details>

<p></p>



The following images show the TrailFx gizmo at work while you’re in the [Preview mode](../Desktop%20editor/Get%20started%20with%20Desktop%20Editor/User%20interface/Build%20and%20Preview%20Modes.md) with **Play on Start** turned on. The shape and the color of the trail are configured as **Tapered** with colors of purple and pink.

**Note**: To reproduce what you see in the image below, create a world by first following the [Batting cage tutorial](../Tutorials/Adding%20and%20manipulating%20objects%20tutorial.md) and then add a TrailFx gizmo as a [child object](../Desktop%20editor/Objects/Object%20hierarchy%20and%20groups.md) of the ball in the [**Hierarchy** panel](../Desktop%20editor/Hierarchy%20window/Hierarchy%20panel%20overview.md). [Adjust the position](../Desktop%20editor/Get%20started%20with%20Desktop%20Editor/User%20interface/Object%20tools.md#move) of the TrailFx gizmo so that it appears to be trailing the ball.

<details>
<summary>The TrailFx gizmo configured as the child of the ball in Hierarchy</summary>

<p></p>

[The TrailFx gizmo configured as the child of the ball in Hierarchy](../image_data/9253b51d87c31aa5884ce34d9ae6ae2f126330f7a0a94f66d7d36df4cb063420.md)

### Overview
This image displays a list of items with corresponding icons next to them against a dark background. The items appear to be part of a menu or interface, possibly related to game development or asset management.

### Key Elements
- **Visual description**: Icons and text labels.
- **Location**: Top-left corner of the image.
- **Contents**: 
    - Icon: A person figure.
      > SpawnPoint
    - Icon: A cube.
      > Bat
    - Icon: Another cube.
      > Ball
    - Icon: A gear with a lightning bolt.
      > PrototypeTrailFx
- **Visual styling**: Dark background, white text, and icons with a subtle glow effect.

### Visual Flow / Relationships
The elements are arranged vertically, with each item having its own line. There are no arrows or lines connecting the elements, indicating a simple list structure without hierarchical relationships.

</details>

<p></p>



<details>
<summary>The TrailFx gizmo in the Preview mode</summary>

<p></p>

[The TrailFx gizmo in the Preview mode](../image_data/e98b328543c9b5292fe1055fe4dccbc28d5788188f7edb5778c61bae820ac9c3.md)

### Overview
The image depicts a 3D-rendered character standing outdoors on a stone-paved area under a clear sky. The character has a distinctive hairstyle split into pink and blue sections, wearing a pink hoodie, light blue jeans, and white sneakers. Above the character, there is a floating object resembling a cone with a gradient from purple at the top to white at the base.

### Key Elements
- **Character**: Located centrally in the image, facing away from the viewer. The character has a split hairstyle with pink on one side and blue on the other. They are wearing a pink hoodie with a small emblem on the chest, light blue jeans, and white sneakers.
- **Floating Object**: Positioned above the character's head, resembling a cone with a gradient from purple at the top to white at the bottom.
- **Background**: A clear blue sky occupies the upper portion of the image, transitioning to a lighter shade near the horizon line. Below the horizon, there is a flat expanse of water, and the ground is covered with large, irregularly shaped stones forming a paved surface.

### Visual Flow / Relationships
The most prominent visual element is the character, as they occupy the central focus of the image. The floating object is secondary but draws attention due to its unusual shape and color contrast against the sky. There are no arrows or lines connecting elements, and the reading order is implied by the character's position and the floating object's placement above them.

</details>

<p></p>



## Scripting

To customize the TrailFx gizmo through scripting, see the [TrailGizmo](../Reference/core/Classes/TrailGizmo.md) API.

## What’s next?

Now that you’ve been introduced to the TrailFx gizmo, further your learning with related developer guides:

* [Meta Horizon Creator Program’s creator manual on the TrailFx gizmo](https://github.com/MHCPCreators/horizonCreatorManual/blob/main/HorizonTechnicalDoc.md#trailfx-gizmo)
* [Batting cage](../Tutorials/Adding%20and%20manipulating%20objects%20tutorial.md)