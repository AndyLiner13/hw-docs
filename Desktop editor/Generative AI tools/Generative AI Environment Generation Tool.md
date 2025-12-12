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
  
  [Environment Generation GenAI Panel](../../image_data/e1daa03d229bf2fe58af54b055a883028dace82705c3e4cb2e3097e82d5ca348.md)
  
  ### Overview
  The image displays a user interface for a tool called "Gen AI for Horizon Worlds." It features a welcome message and several interactive options for generating various elements within a game environment. The layout is structured with a dark background and light-colored buttons for user interaction.
  
  ### Key Elements
  - **Welcome Message**: Located centrally at the top, the message reads: > "Welcome to Gen AI for Horizon Worlds. Get started by trying a sample prompt or writing your own."
  - **Buttons**: There are six rectangular buttons, each with a small icon and text describing a different function:
    - **Generate an environment**: Icon is a tree, button text is "> Generate an environment."
    - **Generate using a style reference**: Icon is a paintbrush, button text is "> Generate using a style reference."
    - **Generate 3D models**: Icon is a cube, button text is "> Generate 3D models."
    - **Generate a sky**: Icon is a cloud, button text is "> Generate a sky."
    - **Generate a texture**: Icon is a paint palette, button text is "> Generate a texture."
    - **Generate sound effects**: Icon is a speaker, button text is "> Generate sound effects."
    - **Generate ambient audio**: Icon is a speaker with a circle, button text is "> Generate ambient audio."
    - **Generate code and set up gameplay**: Icon is a robot head, button text is "> Generate code and set up gameplay."
  
  ### Visual Flow / Relationships
  The buttons are arranged vertically, with each button slightly indented from the previous one. The welcome message is above the buttons, and there are no arrows or lines connecting the elements. The visual hierarchy is clear, with the welcome message as the primary focus followed by the interactive buttons.
  
  </details>
  
  <p></p>
  
  
- In the **GenAI** menu, select **Generate an Environment**.
- Select one of the example prompts listed in the **GenAI** menu. The Environment Generation properties window will appear with the selected prompt input in the **Prompt Input** field.
  <details>
  <summary>Environment Generation recommended prompts</summary>
  
  <p></p>
  
  [Environment Generation recommended prompts](../../image_data/272014de5eebd79b6eda8041b49fdc52bc52a36f255796be38045351d9fdba12.md)
  
  ### Overview
  The image displays a user interface section of a software application, specifically a feature related to generating environments. The layout includes a header, a central message area, and a list of environment examples.
  
  ### Key Elements
  - **Header**: Located at the top-left corner, contains the text "Gen AI BETA" with a green "BETA" badge next to it.
  - **Menu Icons**: Positioned above the header, showing three icons: a menu icon (three horizontal lines), a download icon, and a help icon (a question mark within a circle).
  - **Central Message Area**: Occupies the upper half of the screen, featuring a small icon of trees and a circular sun. Below the icon, there is a message that reads: "Generate environments that are fully controllable, with replaceable models of objects to up-level your world." 
  - **Instructional Text**: Below the central message, there is another line of text instructing users to click on some of the examples provided or find the Environment Generator Gizmo from Creator tools menu Build > Gizmos.
  - **Environment Examples**: A list of six environment options is displayed below the instructional text. Each option has a small icon of a tree with a colored dot indicating the season or condition. The text for each example is as follows:
      - A forest in fall
      - A forest in winter with barren trees
      - A lush forest in summer
      - A desolate wasteland
      - A flat grass field during a drought
      - A sandy beach
  
  ### Visual Flow / Relationships
  The most prominent visual element is the central message area, which draws attention due to its larger font size and central placement. The environment examples are arranged in a vertical list beneath the instructional text. There are no arrows or lines connecting elements, but the layout suggests a sequential reading order moving from the header down through the message and then to the list of environment examples.
  
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

[An island overgrown with golden grass](../../image_data/a902bbed7e912ce6285d696363a65367513f0f944a1fbacf24bf7427b92b89c8.md)

### Overview
The image depicts a small island scene with a house situated on stilts over water. The island is covered with grass and has a few trees scattered across its surface. The sky is clear blue, and the water surrounding the island is calm.

### Key Elements
- **Island**: Located centrally, covered with bright yellow-green grass. There are rocks and a large gray rock formation on the left side.
- **Trees**: Several small trees with yellow-green leaves are distributed across the island.
- **House**: Positioned on the right side of the island, elevated on stilts above the water. The house has a dark blue shingled roof and walls with white-framed windows.
- **Water**: Surrounds the island, depicted as a light blue with gentle ripples.
- **Sky**: Clear and blue, occupying the upper portion of the image.

### Visual Flow / Relationships
The most prominent visual element is the island itself, which draws attention due to its central placement and the house on stilts. The trees provide a natural frame around the island. The water and sky create a serene backdrop, emphasizing the island's isolation.

</details>

<p></p>



**Prompt**: “A forest in fall”

<details>
<summary>A forest in fall</summary>

<p></p>

[A forest in fall](../../image_data/13bf864854a70dde78d16f6910a3106ad7c37d641d119d17e5910bf1a9b70a30.md)

### Overview
The image depicts a small island with a house surrounded by trees and grass, situated in a body of water under a clear sky. The scene has a stylized, possibly digital or game-like aesthetic.

### Key Elements
- **Island**: A small landmass with a flat top covered in green grass and brown soil. Trees with orange leaves are scattered across the island.
- **House**: Located on the left side of the island, it has a blue exterior with a gray roof. The house has a porch with white railings and a door leading into the house.
- **Trees**: Numerous trees with orange leaves are distributed across the island, some closer to the house and others further away.
- **Water**: Surrounding the island is a large expanse of blue water, which appears calm with subtle ripples.
- **Sky**: The background features a gradient of light blue to white, suggesting a clear day with no clouds.

### Visual Flow / Relationships
The most prominent visual element is the island itself, as it occupies the central area of the image. The house is the secondary focal point, positioned slightly to the left. The trees are dispersed around the island, creating a natural frame around the house. The water surrounds the island completely, providing a sense of isolation. There are no arrows or lines connecting elements, and the reading order is implied by the arrangement of the objects.

</details>

<p></p>



**Prompt**: “A spooky forest with barren trees and purple grass”

<details>
<summary>A spooky forest with barren trees and purple grass</summary>

<p></p>

[A spooky forest with barren trees and purple grass](../../image_data/c863893421551a177da93fc544944f8f61539d64e1e3e135215cb72405f88546.md)

### Overview
The image depicts a surreal landscape featuring a small house situated on stilts over water, surrounded by a mix of natural and artificial elements. The scene includes a rocky outcrop, sparse trees, and vibrant purple vegetation. The sky is clear blue, suggesting a calm day.

### Key Elements
- **Rocky Outcrop**: Located on the left side, it has a rough texture with grayish-white tones and some scattered white rocks. It is partially covered with purple vegetation.
- **Purple Vegetation**: Distributed across the middle and right sides of the image, forming a dense patch that contrasts sharply with the surrounding environment.
- **Trees**: Bare trees are scattered throughout the scene, positioned behind the purple vegetation and the house. They appear lifeless, with brown branches against the blue sky.
- **House**: Situated on the right side, the house is a simple structure with a sloped roof and blue shingles. It is elevated on stilts above the water.
- **Water**: The lower part of the image shows a body of water, reflecting the sky and surrounding elements.

### Visual Flow / Relationships
The most prominent visual element is the house, which draws attention due to its distinct color and placement. The rocky outcrop and purple vegetation create a foreground that frames the house. The trees provide a backdrop, adding depth to the scene. The water at the bottom anchors the composition.

</details>

<p></p>



**Prompt**: “A desolate wasteland”

<details>
<summary>A desolate wasteland</summary>

<p></p>

[A desolate wasteland](../../image_data/3ab673b15aa8cfa1b94165cf9a1ee956d4428eb89bbec701d397fb57926dbe4a.md)

### Overview
The image depicts a small island with a blue house situated on a sandy beach surrounded by water. The island has rugged, rocky terrain with a mix of light brown and gray tones. The sky is clear and blue, suggesting a sunny day.

### Key Elements
- **Island Terrain**: Large, rocky formations dominate the island, with a mix of light brown and gray textures. The rocks are uneven and have a natural, rugged appearance.
- **Beach Area**: A sandy area occupies the lower part of the island, transitioning into the water. The sand is light beige in color.
- **Blue House**: Positioned on the left side of the island, the house has a blue exterior with white trim around the windows and roof edges. The roof appears to be made of shingles.
- **Water**: Surrounding the island is calm water, depicted in shades of blue, with gentle ripples visible on the surface.
- **Sky**: The sky is a gradient of light blue, indicating a clear day without clouds.

### Visual Flow / Relationships
The most prominent visual element is the island itself, with the house as a secondary focal point. The beach area connects the house to the larger rock formations. There are no arrows or lines connecting elements, but the layout suggests a natural, undisturbed environment.

</details>

<p></p>

