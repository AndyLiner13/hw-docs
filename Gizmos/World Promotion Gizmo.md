Source: https://developers.meta.com/horizon-worlds/learn/documentation/code-blocks-and-gizmos/world-promotion-gizmo

# World Promotion Gizmo

## Feature Overview

You can place the World Promotion Gizmo in your worlds to make it easier for visitors to save a world, especially contextually when the visitor is in the world. Visitors to the world can save the world and later return to it using the **saved worlds icon** in their **Player User Interface** (PUI).

<details>
<summary>Screenshot shows the in-world option to save a world.</summary>

<p></p>

[Screenshot shows the in-world option to save a world.](../image_data/b0c6b8131e6e97aebe2e99135832ee9e1bce530c8eeafae004de3fd5e19a380c.md)

### Overview
This image depicts a floating dialog box with a gradient background featuring geometric shapes, placed over a grid-like floor and sky background. The dialog box contains text and a button.

### Key Elements
- **Dialog Box**: A rectangular box with rounded corners, positioned centrally.
  - **Background**: Gradient transitioning from blue at the top to purple at the bottom, with subtle geometric shapes (pyramids and spheres) integrated into the design.
  - **Text**: White text asking, "Did you enjoy this world?" followed by a smaller message, "Add it to your 'Saved' worlds, and visit again later."
  - **Button**: A large purple button labeled "Save" with a bookmark icon next to it.
    - **Icon**: Bookmark icon, green in color.
    - **Text**: "Save" written in white.
- **Pointer**: A white arrow pointing towards the "Save" button, indicating interaction.

### Visual Flow / Relationships
The most prominent visual element is the dialog box itself. The pointer directs attention to the "Save" button, suggesting user interaction. The text within the dialog box provides context for the purpose of the button.

</details>

<p></p>



## Experiment Status

This feature is experimental:

* Only 50% of users in the world will be able to see the gizmo.
* This experiment will last for 4 weeks. After the experiment concludes, the product team will rollback this feature and assess the effectiveness of the World Promotion Gizmo. This feature is subject to change and it is not guaranteed that this feature will be released beyond this experiment.

## Guidelines for Implementation

* The World Promotion Gizmo should be incorporated into 2-4 worlds; one of those worlds should statistically be your most popular and retentive world.
* Put the gizmo in an obvious place near the spawning point so that visitors will see it upon traveling to your world. This will help us gather the most accurate experiment data and make a shipping decision.
* Do not put any extra objects around the gizmo, for example explanatory texts or visual effects around the panel as they will confuse users who cannot see the gizmo.

## Creating a World Promotion Gizmo

- Access the Build panel in your Creator User Interface (CUI). Within the Gizmos tab, you should see a “World Promotion Gizmo”. <details>
                                                                                                                                <summary>Screenshot shows an example Gizmos tab with the 'World Promotion Gizmo' highlighted.</summary>
                                                                                                                                
                                                                                                                                <p></p>
                                                                                                                                
                                                                                                                                [Screenshot shows an example Gizmos tab with the 'World Promotion Gizmo' highlighted.](../image_data/ae89f592d985647223a69ff392f6f08924f517af1466cc27eeb788519aeeda22.md)
                                                                                                                                
                                                                                                                                ### Overview
                                                                                                                                This image depicts a user interface from a software application, likely related to game development or asset creation. The interface includes a sidebar menu, a central content area displaying various tools or assets, and a bottom navigation bar with icons.
                                                                                                                                
                                                                                                                                ### Key Elements
                                                                                                                                - **Sidebar Menu**: Located on the left side, it has a dark background with white text and icons. The menu items include "Build," "Shapes," "Gizmos," "Sounds," and "Assets." The "Gizmos" option is highlighted, indicating it is currently selected.
                                                                                                                                - **Central Content Area**: This area is divided into two sections. The upper section displays a grid of colorful tiles labeled with tool names such as "ParticleFx," "Sound Recorder," "Achievements," "World Leaderboards," "Snap Destination," "Raycast," and "Scheduled Video." These tiles have icons next to them and appear to be interactive elements.
                                                                                                                                - **Highlighted Element**: A specific tile within the grid is circled in red. It is labeled "World Promotions" and features a brown background with a white icon resembling a folder.
                                                                                                                                - **Bottom Navigation Bar**: At the bottom of the screen, there is a navigation bar with several icons, suggesting different functionalities such as undo, redo, save, and settings. There is also a timestamp that reads "11:42 AM [Internal] Edit 2.0."
                                                                                                                                
                                                                                                                                ### Visual Flow / Relationships
                                                                                                                                The most prominent visual element is the "World Promotions" tile, which is highlighted by a red circle. The layout suggests a grid-based organization of tools, with the bottom navigation bar providing additional functionality options. The sidebar menu indicates the current focus on "Gizmos."
                                                                                                                                
                                                                                                                                </details>
                                                                                                                                
                                                                                                                                <p></p>
                                                                                                                                
                                                                                                                                
- Drag and drop the gizmo into your world. Scale and place it where desired. <details>
                                                                             <summary>Image shows a user dragging the World Promotion Gizmo into their world.</summary>
                                                                             
                                                                             <p></p>
                                                                             
                                                                             [Image shows a user dragging the World Promotion Gizmo into their world.](../image_data/01b30ee7f82cf3d82b8949b44797a6724c9beb78229a2828ab4c8e41917c45b7.md)
                                                                             
                                                                             ### Overview
                                                                             The image depicts a virtual environment with a floating cube containing a dialogue box. The cube has a transparent blue outline and is situated above a grid-like floor. There are two controllers on either side of the cube, and a small blue droplet icon is near the right controller.
                                                                             
                                                                             ### Key Elements
                                                                             - **Dialogue Box**: Located within the cube, it has a gradient blue background with white text that reads, "Did you enjoy this world? Add it to your 'Saved' worlds, and visit again later." Below the text is a blue button labeled "Save."
                                                                             - **Cube**: A transparent blue cube with a glowing effect around its edges, positioned centrally above the grid floor.
                                                                             - **Controllers**: Two black controllers with blue highlights are placed on the left and right sides of the cube.
                                                                             - **Droplet Icon**: A small blue droplet icon is located near the right controller.
                                                                             
                                                                             ### Visual Flow / Relationships
                                                                             The most prominent visual element is the dialogue box within the cube. The controllers are positioned symmetrically on either side of the cube, suggesting interaction points. The droplet icon near the right controller could indicate a secondary action or feature related to the dialogue box.
                                                                             
                                                                             </details>
                                                                             
                                                                             <p></p>
                                                                             
                                                                             

Open the **properties** panel. You can customize the header image or change the panel to the dark theme to better suit the style of your world. <details>
                                                                                                                                                <summary>Screenshow shows a user navigating the Properties Panel.</summary>
                                                                                                                                                
                                                                                                                                                <p></p>
                                                                                                                                                
                                                                                                                                                [Screenshow shows a user navigating the Properties Panel.](../image_data/f2ce377991d11648f7529014f29575e115d49b728400e6bdd4ca748f07899b68.md)
                                                                                                                                                
                                                                                                                                                ### Overview
                                                                                                                                                The image displays a user interface (UI) element within a 3D environment. The UI consists of a floating window with various settings and options, alongside some interactive elements on the ground plane.
                                                                                                                                                
                                                                                                                                                ### Key Elements
                                                                                                                                                - **Floating Window**: Located centrally, it has a dark background with light text. It contains tabs labeled "Behavior" and "Attributes," with "Behavior" currently active. Below the tabs, there are settings such as "Visible," "Promotion Type," "Panel UI Mode," and "Panel Background." There is also a toggle switch labeled "On" and a dropdown menu for "Save Panel."
                                                                                                                                                - **Attached Script**: Below the floating window, there is another rectangular UI element labeled "Attached Script" with a blue button labeled "ConnectionCTA."
                                                                                                                                                - **Ground Plane**: The scene is set on a grid-like ground plane, suggesting a 3D modeling or game development environment.
                                                                                                                                                - **Interactive Elements**: On the ground plane, there are several circular objects resembling controllers or joysticks, each with different colored pads and directional buttons. There is also a transparent rectangular object with a green border and a teal card inside it that reads "Did you enjoy this world?" with a "Save" button below.
                                                                                                                                                
                                                                                                                                                ### Visual Flow / Relationships
                                                                                                                                                - **Most Prominent Element**: The floating window is the most prominent due to its central placement and larger size compared to the other elements.
                                                                                                                                                - **Arrows/Connectors**: There are no explicit arrows or connectors visible in the image.
                                                                                                                                                - **Spatial Relationships**: The floating window is above the ground plane, while the interactive elements are scattered around it. The attached script is positioned below the floating window.
                                                                                                                                                
                                                                                                                                                </details>
                                                                                                                                                
                                                                                                                                                <p></p>
                                                                                                                                                
                                                                                                                                                