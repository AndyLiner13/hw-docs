Source: https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/generative-ai-creation-tools/generative-ai-environment-generation-tool

# Generative AI Environment Generation Tool

The GenAI Environment Generation tool offers a rapid solution for creating immersive environments in your world. Currently this tool supports generating island themed environments, with more themes planned to come in the future.

This document will cover how to:

* Generate an environment using the environment generation tool
* Influence the theme and mood of your generations using LLM prompt

## Generate an environment using the environment generation tool

You can enable the environment generation tool through the **GenAI** menu or with the Environment Generation gizmo.

To generate an environment using the environment generation tool, use the following process:

- Open the desktop editor and select the **GenAI** menu from the top menu bar. Note that the **GenAI** panel may be open and visible by default in the right hand panel of the desktop editor.
  <details>
<summary>Environment Generation GenAI Panel</summary>

<p></p>

[Environment Generation GenAI Panel](../../../../images/output/img_20251211_032959_20251211_032959.md)

### Overview
The image displays a user interface for a Gen AI tool within Horizon Worlds, offering various options for generating content. The layout is structured with a welcome message at the top followed by a series of actionable buttons.

### Key Elements
- **Welcome Message**: Located centrally above the buttons, it reads: 
    > Welcome to Gen AI for Horizon Worlds. Get started by trying a sample prompt or writing your own.
- **Buttons**: There are seven buttons listed vertically, each with a distinct icon and label:
    - **Generate an environment**
    - **Generate using a style reference**
    - **Generate 3D models**
    - **Generate a sky**
    - **Generate a texture**
    - **Generate sound effects**
    - **Generate ambient audio**
    - **Generate code and set up gameplay**

### Visual Flow / Relationships
The visual hierarchy is clear, with the welcome message as the focal point. Below it, the buttons are arranged in a vertical list, each separated by a thin line. The buttons are aligned horizontally and evenly spaced, creating a clean and organized layout.

</details>

<p></p>


- In the **GenAI** menu, select **Generate an Environment**.
- Select one of the example prompts listed in the **GenAI** menu. The Environment Generation properties window will appear with the selected prompt input in the **Prompt Input** field.
  <details>
<summary>Environment Generation recommended prompts</summary>

<p></p>

[Environment Generation recommended prompts](../../../../images/output/img_20251211_033053_20251211_033053.md)

### Overview
The image displays a user interface section of a software application, specifically a feature called "Environment Generator Gizmo." It showcases various environment options that can be generated within the application. The layout includes a header, a brief description, and a list of environment examples.

### Key Elements
- **Header**: Located at the top-left corner, contains the text "Gen AI BETA" with a green "BETA" tag next to it. There are also icons for menu and settings, as well as a help icon on the right.
- **Description**: Positioned centrally, above the environment options. It reads: "Generate environments that are fully controllable, with replaceable models of objects to up-level your world." Below this, there’s another instruction: "Click on some of the examples below to test out, or find the Environment Generator Gizmo from Creator tools menu Build > Gizmos."
- **Environment Options**: A list of six environment examples, each enclosed in a rounded rectangular box with a small icon of a tree and a sun. The options are:
    - "A forest in fall"
    - "A forest in winter with barren trees"
    - "A lush forest in summer"
    - "A desolate wasteland"
    - "A flat grass field during a drought"
    - "A sandy beach"

### Visual Flow / Relationships
The most prominent visual elements are the environment options, which are arranged vertically. The description and header provide context and instructions. Arrows or lines are not present, but the layout suggests a linear reading order moving from the description down through the environment options.

</details>

<p></p>


- Click **Generate** to generate the environment. The time needed to generate the environment is based on the complexity of the generated environment, but usually takes between 1 and 2 minutes.

Once finished, your environment will be generated and you can click the **Play** button to walk around your generated environment and explore the environment with your avatar. Once you’re satisfied with your generated environment, click **Save to Asset Library**

## Environment Generation Parameters

When generating an environment, there are a variety of parameters in the **Environment Generation** tool. The following parameters are available in the Environment Generation tool:

**Generator**: Selects which environment generator to use. Today, only **Island World Builder** is available, and it features the parameters that follow.

**Seed**: Controls the randomness of the generation for both terrain and buildings. Setting the value from 0 - 999 will fix the seed at the input value.

**Environment size**: The two dimensions for the size of the island terrain measured in meters.

**Terrain shape**: Controls the shape of the generated island. The available choices are **Round**, **Crescent**, and **Ring**.

**Quality:** Defines the mesh density for the generated terrain. Low and medium quality settings will generate more quickly, but will lack finer details and might not show paths correctly.

**Building theme**: Sets the theme or style for the generated houses on the island. The available choices are **Tropical Hut**, **Surf Shack**, **Coastal Cottage**, and **LogCabin**.

**Number of buildings**: Sets the number of buildings generated on the island. The value can range from 0 - 10.

**Create water plane**: Toggles whether a water plane is included in the generation to surround the island in water.

**Environment theme prompt**: Used to inform the overall theme / vibe of the generation influencing vegetation density, and color palette.

## World building with the environment generation tool

The environment generation tool can be used in conjunction with the other suite of Horizon GenAI tools to quickly build a world’s environment and tone for your users and players to explore.

By combining with tools like the [Skybox Generator tool](Generative%20AI%20Skybox%20Generation%20Tool.md) you can rapidly build a world that you can begin adding gameplay and content to.

Below are some examples of environments generated using the Environment Generation tool.

The example prompts used will be listed and included in the image:

**Prompt**: “An island overgrown with golden grass”

<details>
<summary>An island overgrown with golden grass</summary>

<p></p>

[An island overgrown with golden grass](../../../../images/output/img_20251211_033137_20251211_033137.md)

### Overview
The image depicts a small island scene with a house situated on a sandy beach surrounded by water. The island features greenery, trees, rocks, and a clear blue sky.

### Key Elements
- **Tree**: A large tree with yellow-green leaves located on the left side of the island.
- **Rock**: A gray rock formation is situated near the left side of the island.
- **Grass**: Dense green grass covers much of the island's surface.
- **House**: A small blue house with a gray roof is positioned on the right side of the island, elevated on stilts.
- **Water**: Calm blue water surrounds the island, extending to the horizon.

### Visual Flow / Relationships
The most prominent visual element is the house, which is centrally located on the right side of the island. The trees and grass are distributed across the island, creating a natural landscape. There are no arrows or lines connecting elements, but the arrangement suggests a natural, undisturbed environment.

</details>

<p></p>



**Prompt**: “A forest in fall”

<details>
<summary>A forest in fall</summary>

<p></p>

[A forest in fall](../../../../images/output/img_20251211_033226_20251211_033226.md)

### Overview
The image depicts a small island surrounded by water, featuring a cluster of trees with autumn-colored leaves, a small blue house with a metal roof, and a clear sky above.

### Key Elements
- **Trees**: A group of trees with yellow-orange leaves, located centrally and extending across the island. They are densely packed and occupy the majority of the island's land area.
- **House**: A small, blue house with a gray metal roof, situated on stilts near the left side of the island. The house has white-framed windows.
- **Island**: The island itself is covered with green grass and some scattered rocks. It is surrounded by calm water.
- **Water**: The water surrounds the island completely, appearing as a light blue with subtle ripples.
- **Sky**: The sky is a gradient of light blue, transitioning to a slightly darker shade at the horizon.

### Visual Flow / Relationships
The most prominent visual element is the group of trees. The house is secondary but still noticeable due to its distinct color and shape. The water and sky form the backdrop, providing a serene environment. There are no arrows or lines connecting elements, suggesting a natural arrangement rather than a structured layout.

</details>

<p></p>



**Prompt**: “A spooky forest with barren trees and purple grass”

<details>
<summary>A spooky forest with barren trees and purple grass</summary>

<p></p>

[A spooky forest with barren trees and purple grass](../../../../images/output/img_20251211_033306_20251211_033306.md)

### Overview
The image depicts a 3D-rendered scene featuring a small house situated on stilts over water, surrounded by a rocky island with sparse vegetation. The sky is clear blue, and the water appears calm.

### Key Elements
- **Rocky Island**: Located on the left side of the image, it has a rough texture and is covered partially with purple vegetation.
- **Purple Vegetation**: Distributed across the island and extending towards the right, resembling bushes or grass.
- **Trees**: Bare trees without leaves are scattered across the island, positioned behind the vegetation.
- **House**: A small, single-story house with a shingled roof and a porch supported by stilts. It is situated on the right side of the image.
- **Water**: Calm water surrounds the island, extending to the horizon.

### Visual Flow / Relationships
The most prominent visual element is the house, which is centrally located but slightly offset to the right. The rocky island and purple vegetation form a natural barrier around the house. The trees are distributed unevenly across the island, creating a sense of depth. The calm water envelops the entire scene, providing a serene backdrop.

</details>

<p></p>



**Prompt**: “A desolate wasteland”

<details>
<summary>A desolate wasteland</summary>

<p></p>

[A desolate wasteland](../../../../images/output/img_20251211_033400_20251211_033400.md)

### Overview
The image depicts a small island with rugged, rocky terrain surrounded by water. A small blue house with a wooden deck is situated on the sandy part of the island near the waterline. The sky is clear and blue, suggesting a calm day.

### Key Elements
- **Rocky Terrain**: Large, jagged rocks form the majority of the island. They are light gray with some darker patches, giving them a textured appearance.
- **Sand**: A strip of light brown sand runs along the base of the rocks and extends towards the water.
- **Water**: The surrounding area is filled with calm blue water that reflects the sky.
- **Blue House**: A small, rectangular building with a dark blue exterior and a lighter blue roof sits on a wooden deck supported by white stilts. The house has a window on one side and an open door on the other.
- **Mouse Cursor**: A white arrow cursor is visible near the bottom right of the image, indicating interaction with the image.

### Visual Flow / Relationships
The most prominent visual element is the rocky terrain, which forms the backdrop of the scene. The blue house is secondary but clearly defined against the natural landscape. The sand strip acts as a transition between the rocks and the water. The calm water surrounds the entire island, creating a serene environment. There are no arrows or lines connecting elements, and the reading order is implied by the natural layout of the island.

</details>

<p></p>

