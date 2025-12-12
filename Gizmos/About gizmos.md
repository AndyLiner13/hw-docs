Source: https://developers.meta.com/horizon-worlds/learn/documentation/code-blocks-and-gizmos/about-gizmos

# About gizmos

In Meta Horizon Worlds, gizmos are helper tools that you, as a creator, can use to enhance the creation and interactivity of worlds. These gizmos feature a range of functionalities such as controlling player spawn points, adding dynamic lights, creating custom skyboxes, and more. Additionally, gizmos can be used to implement interactive elements like raycasts, particle effects, and doors.

In the desktop editor, gizmos are self-contained modules that you can place in your world to create actions or functions. Their respective properties can be configured in the [Properties](../Desktop%20editor/Get%20started%20with%20Desktop%20Editor/User%20interface/Panels%20and%20Tabs%20in%20the%20desktop%20editor.md#properties-pane) panel. You can also define gizmo properties through scripting. Gizmos are extended classes of [Entities](../Reference/core/Classes/Entity.md).

**Note**: While you can access and use gizmos in the Meta Horizon Worlds [VR tool](../VR%20tools/Getting%20started/Create%20a%20new%20world%20in%20Meta%20Horizon%20Worlds.md), the gizmos documentation presented in this section focuses on the creator user experience in the [Meta Horizon Worlds desktop editor](../Get%20started/Install%20the%20desktop%20editor.md). The image below shows you how to access gizmos in the desktop editor.

<details>
<summary>How to access gizmos in the desktop editor</summary>

<p></p>

[How to access gizmos in the desktop editor](../image_data/0b9d8930cf4352a16d0a998ffae1ca9d6873a9822afdf8acea3894a3ecc6685e.md)

### Overview
This image depicts a user interface element within a software application, specifically a menu or dropdown list titled "Gizmos." The menu is part of a larger interface that includes tabs labeled "Build," "Systems," and "Scripts."

### Key Elements
- **Menu Title**: "Gizmos" located at the top of the dropdown menu.
- **Search Bar**: Positioned below the title, with a magnifying glass icon indicating a search functionality.
- **Icons and Labels**: A grid of icons, each accompanied by a label describing its function.
    - **Trigger Zone**: Green hexagon icon with a white symbol.
    - **Mirror**: Pink square with a white mirror icon.
    - **Text**: Purple square with a white "Aa" icon.
    - **Spawn Point**: Blue square with a white figure icon.
    - **Door**: Pink square with a white door icon.
    - **Environment**: Light blue square with a sun and cloud icon.
    - **Dynamic Light**: Yellow square with a light bulb icon.
    - **Static Light**: White cube icon.
    - **TrailFx**: Orange square with a white trail icon.
    - **ParticleFx**: Orange square with a white particle icon.
    - **Sound Recorder**: Teal square with a white microphone icon.
    - **Quests**: Gold square with a white star icon.
    - **World**: Orange square with a white trophy icon.
    - **Projectile**: Blue square with a white rocket icon.
    - **Snap**: Blue square with a white gear icon.
    - **Raycast**: Blue square with a white target icon.

### Visual Flow / Relationships
The icons are arranged in a grid layout, with four rows and three columns. Each icon is evenly spaced, and the labels are positioned directly beneath their respective icons. The search bar is above the grid, and the menu closes with an "X" icon at the top right corner.

</details>

<p></p>



Much of the dynamic and interactive functionalities of gizmos are achieved through [scripting](https://developers.meta.com/horizon-worlds/reference/2.0.0/). If you’re new to scripting using TypeScript, start with [Build your first game](https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/build-your-first-game/module-1-build-your-first-game). To further your understanding of gizmos, learn from the completed and annotated samples that are part of [tutorial worlds](../Tutorials/Getting%20started/Getting%20started%20with%20tutorials/Tutorial%20Prerequisites.md), which can be accessed from the [Creation Home page of the desktop editor](../Tutorials/Getting%20started/Getting%20started%20with%20tutorials/Access%20Tutorial%20Worlds.md#in-the-desktop-editor).

Tutorial worlds are finished worlds with fully functional compiled scripts. After you create a copy of the tutorial world, the content, including the script, is stored on your local desktop in a folder. Additionally, code assets that are referenced in these tutorials may also be retrieved from [Meta Horizon Worlds sample scripts](https://github.com/meta-quest/meta-horizon-worlds-sample-scripts).

As you explore the tutorial worlds, use the [companion documentation of these tutorial worlds](../Tutorials/Getting%20started/Getting%20started%20with%20tutorials/Tutorial%20Prerequisites.md) for a more in-depth explanation.

## What’s next?

Try the following topics:

* [Use TypeScript in Meta Horizon Worlds](../Scripting/Get%20started%20with%20TypeScript/Using%20TypeScript%20in%20Meta%20Horizon%20Worlds.md)
* [Text gizmos](Text%20gizmo.md)