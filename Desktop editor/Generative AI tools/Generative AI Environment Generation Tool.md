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
  ![Environment Generation GenAI Panel](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/534835566_792307643307189_6799076494733705301_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=kw9EF_S3DW8Q7kNvwFiPDLb&_nc_oc=Adl3hMvSNtOC8Z4sMONRmy-jf1eWl9NI6-uPA141DagRFOi_LtvzTCbiWno4jF-leUw&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=rJJlFiFCGwk_lCGg_GO_hA&oh=00_AfhUjP4rpsOpYC4HRim3lkLkdyRmr0nGFpn0UZnkHho3tw&oe=692FAD12)
- In the **GenAI** menu, select **Generate an Environment**.
- Select one of the example prompts listed in the **GenAI** menu. The Environment Generation properties window will appear with the selected prompt input in the **Prompt Input** field.
  ![Environment Generation recommended prompts](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/536271964_792307653307188_2592383082078627708_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=fTV_gDL02QwQ7kNvwE7WAn6&_nc_oc=AdlsIjFvxxK07JyYiW_G79sbIKx3uCV8PTbqwT1nZb0_fwxkHGQaczEevN4mTxkiGd0&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=rJJlFiFCGwk_lCGg_GO_hA&oh=00_AfjwmtRcddJsM-hswe42CbnpsTf10IZSTmqHlOCtcfuBYw&oe=692FB262)
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

By combining with tools like the [Skybox Generator tool](/hw-docs/Desktop%20editor/Generative%20AI%20tools/Generative%20AI%20Skybox%20Generation%20Tool.md) you can rapidly build a world that you can begin adding gameplay and content to.

Below are some examples of environments generated using the Environment Generation tool.

The example prompts used will be listed and included in the image:

**Prompt**: “An island overgrown with golden grass”

![An island overgrown with golden grass](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/534838094_792999236571363_1959860136706917505_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=bblAJ-4Kw14Q7kNvwFFvER8&_nc_oc=AdnhP1EMQ-ri6FMC8lWjD6UtUr9Y5lL8pJ82mBNA7z8uHG59f48Dv7fsYMCaYrZUW3c&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=rJJlFiFCGwk_lCGg_GO_hA&oh=00_AfgdvbB2Fisw5_0lQG7mC-Cll2LH_-QB8YnwrA7xhAO0tA&oe=692FCCBE)

**Prompt**: “A forest in fall”

![A forest in fall](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/535095054_792999226571364_7607179586158445600_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=ehhLUpvFFokQ7kNvwHYR3jN&_nc_oc=AdmRYr8P-LltGOdUPcN3kJpeLGDeNe-ouvgM9NYZ5tlYZHlVBlkBz3oXRyQfhwIg_28&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=rJJlFiFCGwk_lCGg_GO_hA&oh=00_AfgR5lT-b_CHC3E-xvy13Ta4udtSscR9cH8mawrqix6NcQ&oe=692FA5DA)

**Prompt**: “A spooky forest with barren trees and purple grass”

![A spooky forest with barren trees and purple grass](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/535014226_792999229904697_8660631210125169089_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=XMFUJZxMqqQQ7kNvwEqb_lK&_nc_oc=Adl7Whzy_-zpRATQU5yBnObuUDM0ycpwLx7fnD--Ch62tXiZXC79NUGXEe-BssD_NuY&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=rJJlFiFCGwk_lCGg_GO_hA&oh=00_AfiOdsfBbEN8yQeDHsx1l_5Nl0cgcbQbSX7-WF0klz-kyg&oe=692F963D)

**Prompt**: “A desolate wasteland”

![A desolate wasteland](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/534385565_792999233238030_1806758247150412729_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=F51qtOe3enoQ7kNvwHiMErw&_nc_oc=AdlOJqbSvSFvBVrMojGf40woEdCL6NDCDruSwH_6lMpX2itEgwMkQ1ZE2VTTWU9n2bE&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=rJJlFiFCGwk_lCGg_GO_hA&oh=00_Afj0eQbI-bU9NU51Pv_AhITLn3tCFxf8CAdAXDLoBZKypA&oe=692FCC7E)