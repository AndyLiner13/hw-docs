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
  ![Environment Generation GenAI Panel](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/534835566_792307643307189_6799076494733705301_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=PQ4AcZUjREUQ7kNvwEy8IbO&_nc_oc=Adn39fDkLq7zRfgq49Es6FhK91hUmesqDgWgNDScGWoMTsOtCF-26FSmAZuHoaaHYIQ&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=ta-G50ZqnvJIow_DaaZ-iw&oh=00_AfkwL-FV7NY7Azrfrc1VgPKxI_63DCU1cUxgA2d-Y4czsw&oe=694BCD12)
- In the **GenAI** menu, select **Generate an Environment**.
- Select one of the example prompts listed in the **GenAI** menu. The Environment Generation properties window will appear with the selected prompt input in the **Prompt Input** field.
  ![Environment Generation recommended prompts](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/536271964_792307653307188_2592383082078627708_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=23VCVTu0JK4Q7kNvwHPD-Bv&_nc_oc=AdkJVy_CS8_pI56YIyLUSjkYx2Q0Y9wrD0bj2etyn4mKrLGHiPJH7fPgjxs5KFNMZag&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=ta-G50ZqnvJIow_DaaZ-iw&oh=00_Afm8C4OhshEdX3po_VOKAqLVUuKieDpIMpNKhLyzXFFiyQ&oe=694BD262)
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

By combining with tools like the [Skybox Generator tool](/hw-mcp-tools/documentation/hw-docs/Desktop%20editor/Generative%20AI%20tools/Generative%20AI%20Skybox%20Generation%20Tool.md) you can rapidly build a world that you can begin adding gameplay and content to.

Below are some examples of environments generated using the Environment Generation tool.

The example prompts used will be listed and included in the image:

**Prompt**: “An island overgrown with golden grass”

![An island overgrown with golden grass](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/534838094_792999236571363_1959860136706917505_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=WN_q9Kb9goQQ7kNvwGTJdN9&_nc_oc=AdnIx5Nn9I3sgszPLjBWqbr40yFU2pP0RObm9fOXBJjZ5vXA8_u55kqBpGE_vgnuXSI&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=ta-G50ZqnvJIow_DaaZ-iw&oh=00_AfkInZiYOwM3622GT0A3mIuvsEGZ3T47XOr4HNfThYzDlQ&oe=694BB47E)

**Prompt**: “A forest in fall”

![A forest in fall](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/535095054_792999226571364_7607179586158445600_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=c29DJpq8PZAQ7kNvwGJHof4&_nc_oc=AdliTcUfk7AZI0m0ZytLa9QuVMSCxLD4riMO4-fCNbd5sch8hAgn4C3-Bcnoiu819gg&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=ta-G50ZqnvJIow_DaaZ-iw&oh=00_AflP5NPyyKwEDA1000aJ31E9rI2D_bx1B7P5PUs6ibd6cA&oe=694BC5DA)

**Prompt**: “A spooky forest with barren trees and purple grass”

![A spooky forest with barren trees and purple grass](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/535014226_792999229904697_8660631210125169089_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=0ViItMhDeEAQ7kNvwEj1quc&_nc_oc=Adnk44BRRI1b7IBN5_TTD72R0cce9laJK9X3lpmLlk7h4BC3kXjQZL9bBFG18FtbZ3Y&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=ta-G50ZqnvJIow_DaaZ-iw&oh=00_AflHDnYTqLwTiNirti2jgd3isArwQNZYIeP1bRksa29jBg&oe=694BB63D)

**Prompt**: “A desolate wasteland”

![A desolate wasteland](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/534385565_792999233238030_1806758247150412729_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=28nXqpt34mkQ7kNvwHQOsXz&_nc_oc=Adl9sMrc-zfEAq2mw6ZBvzOq8wpdjZ9bex14GYG3IhETZLdyO1gsPaDI7CtRBM9l7_A&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=ta-G50ZqnvJIow_DaaZ-iw&oh=00_AfksYoW1RZ4B7DJ49dQ6bRQA2UfJWdaUS4PrPQgAZNNd7A&oe=694BB43E)