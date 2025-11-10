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
  ![Environment Generation GenAI Panel](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/534835566_792307643307189_6799076494733705301_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=mANlALn6xIoQ7kNvwF3oHOw&_nc_oc=Adn6XlWGBk07Ps9Gn9vibFhofuJQJ3n9Iub03SLHJvUY7JEpZRD1veA1OLeYI11GjZo&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=C1a7YiQ_ihz2Tb8NA8PS6A&oh=00_AfgKdngJ5dA7Y1_FnJ_Pk2WXF16ZucnAdYaM4wCjjcqkxg&oe=692BF0D2)
- In the **GenAI** menu, select **Generate an Environment**.
- Select one of the example prompts listed in the **GenAI** menu. The Environment Generation properties window will appear with the selected prompt input in the **Prompt Input** field.
  ![Environment Generation recommended prompts](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/536271964_792307653307188_2592383082078627708_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=iFsZDq6F9WQQ7kNvwEMGB0g&_nc_oc=AdnOhFc9DLnF5AUwBXkzfj0oSp0uUFJCINaxcHgjqVLITTkfTol6-NqsHVk0NY1mvwA&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=C1a7YiQ_ihz2Tb8NA8PS6A&oh=00_AfiBR3mUeVdjHHmGKD_28Jcv9XzcyN2QgDYXTVa7jVhJ1g&oe=692BF622)
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

By combining with tools like the [Skybox Generator tool](/horizon-worlds/learn/documentation/desktop-editor/generative-ai-creation-tools/generative-ai-skybox-tool) you can rapidly build a world that you can begin adding gameplay and content to.

Below are some examples of environments generated using the Environment Generation tool.

The example prompts used will be listed and included in the image:

**Prompt**: “An island overgrown with golden grass”

![An island overgrown with golden grass](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/534838094_792999236571363_1959860136706917505_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=bblAJ-4Kw14Q7kNvwFFvER8&_nc_oc=AdnhP1EMQ-ri6FMC8lWjD6UtUr9Y5lL8pJ82mBNA7z8uHG59f48Dv7fsYMCaYrZUW3c&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=C1a7YiQ_ihz2Tb8NA8PS6A&oh=00_AfgCNB4N2er_iETK60PhCnlLCmuou-VNDq4MSa4pAdXtdA&oe=692C107E)

**Prompt**: “A forest in fall”

![A forest in fall](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/535095054_792999226571364_7607179586158445600_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=GVvvdcerTBcQ7kNvwH4es6X&_nc_oc=AdkcwbywIQw97mKR8G8o5Q0KFYRsnn51kRKhEYkxWUtJZg89hlP-Zot-zNtC7V5wDcU&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=C1a7YiQ_ihz2Tb8NA8PS6A&oh=00_Afju2xze_5pkVyQGk3yllsVXXBqWRpBnax-UcQGCI5WM_Q&oe=692BE99A)

**Prompt**: “A spooky forest with barren trees and purple grass”

![A spooky forest with barren trees and purple grass](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/535014226_792999229904697_8660631210125169089_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=i8yR4CArpVoQ7kNvwHOjZEx&_nc_oc=AdlRahru2wlQLHtqU9ZDbgJz2YL1H1W_nESl0bovKWIAMwoaScSc074GfX3iq2evnhc&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=C1a7YiQ_ihz2Tb8NA8PS6A&oh=00_Afgfh6D0Wl1MgRTskwKSt5kZzsumHay-o23liHcyDVhZPQ&oe=692BD9FD)

**Prompt**: “A desolate wasteland”

![A desolate wasteland](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/534385565_792999233238030_1806758247150412729_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=DFXymtNG_AgQ7kNvwE91rRf&_nc_oc=AdkIW2boccSuh4FiargG01LfduOiZC5SA5JDHjRGkm2-xnTYEPf1_FiVmrQiwW_1hQc&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=C1a7YiQ_ihz2Tb8NA8PS6A&oh=00_AfiuUAozkVxG9YQlXH2t2WW0Vtj2FpIShNRUJ-eUYo2Sww&oe=692C103E)