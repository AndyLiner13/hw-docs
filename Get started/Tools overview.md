Source: https://developers.meta.com/horizon-worlds/learn/documentation/get-started/tools-overview

# Tools overview

Meta Horizon provides a variety of tools so you can create engaging worlds quickly and efficiently.

You can use [VR creation tools](../VR%20tools/Publish%20your%20world%20using%20VR%20tools.md) or PC creation tools.

PC creation tools support cross-platform publishing across VR and mobile, offering richer creation capabilities. The PC environment provides efficient world-building with established workflows and powerful tools like the desktop editor, custom model import, and TypeScript scripting, enabling immersive, interactive, and fun experiences.

**Note**: VR creation tools for Worlds are legacy tools. We strongly recommend using the desktop editor and other PC creation tools.
This topic introduces some of our creation tools:

* [Desktop editor](Tools%20overview.md#desktopeditor)
* [TypeScript](Tools%20overview.md#typescript)
* [Custom Model Import](Tools%20overview.md#custommodelimport)
* [NPCs](Tools%20overview.md#npcs)
* [Performance tools](Tools%20overview.md#performancetools)
* [Generative AI Creation tools](Tools%20overview.md#genaitools)

## Desktop Editor

The desktop editor is the integrated game development environment for Worlds. It allows you to build worlds and scenes, and to add and modify objects in your worlds. The desktop editor runs on Windows, and you control it with the keyboard and mouse, rather than your VR headset.

**Note**: Building a world with the desktop editor is similar to building a game in Unity and is easier than using the editor on your VR headset.
<details>
<summary>Desktop editor screenshot</summary>

<p></p>

[Desktop editor screenshot](../image_data/b833c7385c33bae4dae3559258affb66d68e7362aa04943442d824b005b35269.md)

### Overview
This image depicts a user interface from a game development environment, specifically a scene editor or asset management tool. The central area shows a 3D workspace with a grid floor and a blue sky background. On the right side, there is a properties panel displaying various options related to generating assets and setting behaviors for objects within the scene. The left side includes a hierarchy panel and an asset library with thumbnails of various assets.

### Key Elements
- **Central Workspace**: A large rectangular area showing a 3D scene with a blue sky and a gray grid floor. The grid is a standard 3D modeling grid.
- **Properties Panel**: Located on the right side, it contains several sections:
  - **Welcome Message**: A welcome message for "Gen AI for Horizon Worlds," offering prompts for generating assets.
  - **Generate Options**: Buttons for generating 3D models, skies, textures, sound effects, ambient audio, and scripts.
  - **Behavior Settings**: Fields for setting spawn behavior, position, gravity, speed, and camera force.
  - **Gameplay Tags**: A search bar for attaching tags to the object.
- **Hierarchy Panel**: On the left, it shows a tree structure labeled "Hierarchy" with a node named "SpawnPoint" highlighted.
- **Asset Library**: Below the hierarchy panel, it displays a section titled "Asset Library" with categories "Public Assets" and "My Assets." It shows thumbnails of various assets like NPC Chicken, Bagel Dough, Rifle, Rotating Robo, dog, Cube 2x2x2 M, and Wood Ball.

### Visual Flow / Relationships
The layout is structured with the workspace in the center, the properties panel on the right, and the hierarchy and asset library panels on the left. The workspace is the most prominent visual element due to its size and central placement. The properties panel is secondary but contains interactive elements that suggest user interaction. The hierarchy and asset library panels provide context and navigation for the user.

</details>

<p></p>


The desktop editor allows you to:

* Create a world
* Add shapes, gizmos, sounds, and colliders to the world
* Create quests, leaderboards, and variable groups
* Create and edit scripts using TypeScript
* Publish the world
* and more

Using the desktop editor to build your world makes it easier to:

* Make changes while the world is running
* Update entity property values
* Write and debug TypeScript code

To install the desktop editor, see [Install the desktop editor](Install%20the%20desktop%20editor.md).
To get started using the editor, see the [Introduction to the desktop editor](../Desktop%20editor/Get%20started%20with%20Desktop%20Editor/Introduction%20to%20the%20desktop%20editor.md).

## TypeScript

TypeScript support in Worlds allows you to write scripts efficiently using traditional programming processes and tools. You can create a new TypeScript asset from the desktop editor, type your TypeScript code in VS Code, and then attach it as a component to an object. Using TypeScript expands your development options and adds safety and security to your code.
<details>
<summary>Typescript screenshot</summary>

<p></p>

[Typescript screenshot](../image_data/02461fccbcb168dd3bbe4f5b1b17e10b0ac9c718d235610c7ab91e17f678f49c.md)

### Overview
The image depicts a code editor interface displaying TypeScript code related to game weapon constants. The editor is split into two main sections: a file explorer on the left and the code editor on the right. A floating panel in the foreground highlights a specific line of code.

### Key Elements
- **File Explorer**: Located on the left side, showing a directory structure with files listed vertically. Files include `BattlePassButton.ts`, `GameWeaponConsts.ts`, among others.
- **Code Editor**: On the right, the editor displays TypeScript code. The cursor is positioned at line 574, which contains a `displayName` property set to `'Rocket Launcher'`.
- **Floating Panel**: Positioned in the foreground, highlighting line 574 with the text `displayName: 'Rocket Launcher',`. The panel has a dark background with light text.
- **Code Content**: The editor shows code related to weapon data, specifically for a `WEAPON_DATA_ROCKET_LAUNCHER` object. It includes properties such as `desktopAimAssistSettings`, `killsStatID`, `respawnTime`, `fireRate`, and `unlimitedAmmoFireRate`.

### Visual Flow / Relationships
- **Most Prominent Element**: The floating panel highlighting line 574.
- **Arrows/Connectors**: None.
- **Reading Order**: The code is read from top to bottom, left to right within the editor. The floating panel disrupts the typical reading flow but focuses attention on the highlighted line.

</details>

<p></p>


TypeScript is a strongly-typed version of JavaScript. Strong typing provides tight integration with your IDE, letting you:

* Leverage IntelliSense (code completion).
* Catch errors during development, rather than at runtime.

To get started, see [Using TypeScript in Worlds](../Scripting/Get%20started%20with%20TypeScript/Using%20TypeScript%20in%20Meta%20Horizon%20Worlds.md).

## Custom Model Import

The custom model import option in the desktop editor enables you to fill your world with objects spawned from imported 3D models, created using your favorite 3D creation tool. In Worlds, you refer to the resulting world as a custom model world. You can find your imported assets in your personal asset library. The following image shows an example of what a complex 3D object spawned from an imported asset looks like. In this case, it’s a park bench.
<details>
<summary>Custom model import screenshot</summary>

<p></p>

[Custom model import screenshot](../image_data/85a3c77094ef79c031dd55310d84b2e31da31934b4f2e38424410512ef2f7f75.md)

### Overview
This image depicts a virtual environment, likely from a video game or simulation, featuring a park-like setting with various elements such as benches, lampposts, and greenery. The scene includes a user interface element in the bottom center, possibly indicating an interactive feature or selection point within the game.

### Key Elements
- **Bench**: Located centrally in the foreground, with a transparent circular highlight around it. The bench has a decorative design with a mix of dark and light colors.
- **Lamppost**: Positioned to the right of the bench, with a standard lamppost design and a dark gray base.
- **Greenery**: Includes bushes and trees scattered throughout the scene, providing a natural backdrop.
- **Pathway**: A paved path runs through the scene, bordered by grassy areas.
- **Background**: Features buildings, a billboard, and a colorful geometric patterned wall, suggesting an urban environment.
- **User Interface Element**: A white arrow cursor is pointing at the bench, indicating interaction or selection.

### Visual Flow / Relationships
The most prominent visual element is the bench, highlighted by the transparent circle. The lamppost is positioned to the right, creating a sense of depth. The greenery and pathway provide a structured layout, guiding the viewer's eye through the scene. The background elements add context to the environment but are less immediately noticeable due to their distance.

</details>

<p></p>


A custom 3D model is composed of multiple files, and you need to specify all of them when you import a 3D model into the desktop editor. These files include:

* An FBX file. This is the 3D model file format. It contains the 3D mesh along with scene data such as cameras, lighting, geometry, materials, and animations.
* One or more PNG files. These are image files, and they contain textures that map onto the 3D model’s surface to make the spawned object look more realistic.
  You can also create your own static lighting and collision models for your imported 3D models.

To get started, see [Getting started with custom model import](../Custom%20models%20(FBX)/Getting%20started%20with%203D%20model%20import.md).

## NPCs

A Non-Player Character (NPC) is a computer-controlled character within a world (as opposed to a user-controlled avatar). One example of such an NPC might be the monster that patrols the hallways of a haunted house. Creators add NPCs to their worlds for a variety of purposes, including:

* To provide information or quests to the player.
* To sell goods and services.
* To engage the player in conversation.
* To serve as enemies or obstacles for the player to overcome.
* To add to the game’s atmosphere and immersion.

<details>
<summary>NPC screenshot</summary>

<p></p>

[NPC screenshot](../image_data/93cdd0a8da0d1a81a5c42fea517f0b7453e03a3119c414e98e97602981733950.md)

### Overview
The image displays a split-screen view. On the left side, there is a sidebar with various NPC (Non-Player Character) options, while the right side shows a 3D environment with a chicken inside a blue cube.

### Key Elements
- **Left Panel (Sidebar)**:
  - **Visual description**: A dark-themed sidebar with rounded corners.
  - **Location**: Left side of the image.
  - **Contents**: Contains NPC options such as NPC Skeleton, NPC Android, NPC Zombie, NPC Robot, NPC Chicken, skeletoncrayta, Speaking order board, Writable chalkboard.
  - **Visual styling**: Dark background with light-colored icons and text. Icons are square-shaped with rounded edges.
  
- **Right Panel (3D Environment)**:
  - **Visual description**: A 3D-rendered scene with a chicken inside a transparent blue cube.
  - **Location**: Right side of the image.
  - **Contents**: The chicken is positioned within a cube that has a blue outline. There are small red, green, and blue arrows indicating movement axes around the chicken.
  - **Visual styling**: The environment has a pastel color scheme with green and pink tones. The ground is a light pink, and the background includes stairs and railings.

### Visual Flow / Relationships
- **Most prominent visually**: The chicken inside the blue cube.
- **Arrows**: Indicate movement axes around the chicken.
- **Spatial relationships**: The left panel is separate from the right panel, with no direct interaction shown between them.

</details>

<p></p>



NPCs can range from simple scripted characters to complex AI-driven characters that learn and adapt to the player’s actions.
There are four types of archetype NPC characters that you can spawn into your scene, according to your needs. Utility, Storyteller, Antagonist, and Ally types of NPCs all exhibit behaviors that are controlled with an AI script.
These NPC archetypes act in the following ways:

* **Utility**: Utility NPCs perform basic functions to move a narrative or game experience forward. For example, furthering quest lines, buying, selling, or trading items, and directing the player to do something. Utility NPCs support scripting.
* **Storyteller**: Storyteller NPCs are conversationally driven. They operate within specific guidelines you set to move a narrative forward, but with a comprehensive world understanding and context, including the game state.
* **Antagonist**: These are enemy NPC characters. Antagonist NPCs can move, fight, and obstruct the player from accomplishing an objective. You can add AI to control this character archetype to add more personality and a higher level of decision-making ability.
* **Ally**: Friendly NPC characters. Ally NPC characters are aligned with the player’s objective. Ally NPC characters can operate on something in the scene. They can follow the player, and they can hide from the player.

For more information, see [Getting started with NPC assets](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/npcs/getting-started-with-npc-assets).

## Performance tools

Real-time performance metrics and server-side tracing can help you as a creator, find and address performance issues in your worlds. You can access the performance tools via browser while visiting your world, alleviating the need to put on a VR headset to get performance data.
<details>
<summary>Performance tooling screenshot</summary>

<p></p>

[Performance tooling screenshot](../image_data/17871542303c2d154106bef9fe433bfc2a7c80ecc5ee27bc78a51c427bddcd2d.md)

### Overview
The image depicts a performance monitoring interface overlaid on a video game environment. The foreground shows a "Display Settings" pop-up window with metrics related to CPU, GPU, Physics, and Scripting. Below the pop-up, there are graphs displaying real-time performance metrics such as App Frame Time, Physics, and Audio. The background features a futuristic, sci-fi themed room with a character model partially visible.

### Key Elements
- **Pop-up Window ("Display Settings")**:
  - **Visual description**: A rectangular window with rounded corners.
  - **Location**: Centered over the game environment.
  - **Contents**: Contains checkboxes labeled CPU, GPU, Physics, and Scripting, with corresponding target values displayed next to them.
  - **Visual styling**: Dark gray background with white text and blue checkboxes.

- **Graphs**:
  - **Visual description**: Line graphs with multiple colored lines representing different metrics.
  - **Location**: Bottom half of the image.
  - **Contents**: Graphs show real-time data for App Frame Time, Physics, and Audio.
  - **Visual styling**: Dark background with light-colored lines and axes.

- **Background**:
  - **Visual description**: A sci-fi themed room with metallic surfaces, blue lighting, and a character model.
  - **Location**: Behind the pop-up window.
  - **Contents**: A character wearing a hooded outfit is partially visible.
  - **Visual styling**: Dark tones with blue highlights.

- **Interface Elements**:
  - **Performance Metrics**:
    - **Visual description**: Text labels and numerical values for App Frame Time, Physics, and Audio.
    - **Location**: Bottom left corner.
    - **Contents**: Values like "16.6 avg (0.5s)" for App Frame Time, "0.9 avg (0.5s)" for Physics, and "1.9 avg (0.5s)" for Audio.
    - **Visual styling**: White text on a dark background.

- **Settings Button**:
  - **Visual description**: A gear icon within a red rectangle.
  - **Location**: Bottom right corner.
  - **Contents**: Represents a settings option.
  - **Visual styling**: Red background with a white gear icon.

### Visual Flow / Relationships
- **Most prominent visually**: The "Display Settings" pop-up window.
- **Arrows/lines/connectors**: None.
- **Spatial relationships**: The pop-up window is layered over the game environment, with the graphs and performance metrics displayed below it.

</details>

<p></p>


The **Performance** tab displays a real-time view of all currently selected metrics. You can select which metrics to display on the tab and you can also set a target number for each metric. When a metric exceeds the defined target, a red dot appears next to that metric as an alert.
This tab also supports scrubbing and tracing. With scrubbing, you can review data that has recently appeared on the **Performance** tab (approximately 30 seconds worth) in detail. With tracing, you can capture performance data from your world to view in Perfetto. Perfetto is a third-party tool for performance instrumentation and trace analysis.

For more information, see [Using performance tools from web and mobile](../Performance/Performance%20tools/Using%20performance%20tools%20from%20web%20and%20mobile.md).

## Gen AI Creation tools

The desktop editor features a suite of Gen AI Creation tools that assist you in generating script code, audio samples, mesh metadata, and textures.
<details>
<summary>GenAI audio screenshot</summary>

<p></p>

[GenAI audio screenshot](../image_data/d6c74acab2604bf49175fefbbfe28d3dfc66bf8cf76352ae45dbbe5f16ab89a2.md)

### Overview
The image displays a user interface with a pop-up window titled "Gen AI" that appears to be part of a larger application or service. The pop-up contains a welcome message and a suggestion for a sound effect related to cicadas. The background shows another section of the interface with options for generating sounds and setting durations.

### Key Elements
- **Pop-up Window ("Gen AI")**:
  - **Visual description**: A rectangular window with rounded corners.
  - **Location**: Top right area of the image.
  - **Contents**: Contains a title "Gen AI," a small icon resembling a document, and a welcome message.
  - **Visual styling**: Dark background with white text, light gray accents.

- **Welcome Message**:
  - **Visual description**: Text within the pop-up window.
  - **Location**: Center of the pop-up.
  - **Contents**: "Welcome to Gen AI for Horizon Worlds. Get started by trying a sample prompt or writing your own."
  - **Visual styling**: White text on a dark background.

- **Cicada Sound Effect**:
  - **Visual description**: A smaller rectangle below the welcome message containing a sound effect description.
  - **Location**: Below the welcome message.
  - **Contents**: "Cicadas chirping in a field at night."
  - **Visual styling**: Light gray background with white text.

- **Background Section**:
  - **Visual description**: A darker section with a blue button labeled "Generate" and a slider for duration settings.
  - **Location**: Bottom left area of the image.
  - **Contents**: Options for generating sounds and setting durations.
  - **Visual styling**: Dark background with blue and white text.

### Visual Flow / Relationships
- **Most prominent visually**: The pop-up window ("Gen AI").
- **Arrows/lines/connectors**: None visible.
- **Spatial relationships**: The pop-up is overlaid on the background section, suggesting it is a modal window or a floating panel.

</details>

<p></p>



### Gen AI code tool

Converting Worlds concepts into Typescript code can sometimes be a struggle. However, the Gen AI code tool can help you with this. Built into the desktop editor, the Gen AI tool is an authoritative, AI-powered chat assistant. It works like a chat app and using it is as simple as having a back-and-forth, real-time conversation with someone. In this case, that someone just happens to be a [large language model](https://en.wikipedia.org/wiki/Large_language_model).
The GenAI code tool has two types of models available: Llama, and Specialist. The Llama model works well for quick questions or general information about Worlds. The Specialist model is trained on TypeScript and the Worlds API. It can generate scripts and answer more detailed questions about scripting and TypeScript. The Specialist model works well as a personal tutor to learn TypeScript and familiarize yourself with TypeScript APIs.

For more information, see the [Gen AI Creation code tool](../Desktop%20editor/Generative%20AI%20tools/Generative%20AI%20Assistant%20Tool.md).

### Gen AI Creation Audio tool

The Gen AI Creation Audio tool assists you in the audio creation process, making adding sound a simple matter of clicking a few buttons.
The Gen AI Audio tool provides two audio generation modes: sound effect generation and ambient audio generation. Sound effect generation is useful when attempting to create short audio clips, while ambient audio generation is better for generating longer background tracks.
You can either select sounds based on example prompts, or you can create your own custom prompts and see what sounds you can come up with.
Once you have that perfect sound, you can use it to create audio assets for your world or download it to your local hard drive for future use.

For more information, see the [Gen AI Creation Audio tool](../Desktop%20editor/Generative%20AI%20tools/Generative%20AI%20Creation%20Audio%20Tool.md).

### Gen AI Asset Metadata tool

The Gen AI Asset Metadata tool can create metadata for the mesh assets in your worlds. This will help you better manage and access your 3D models’ assets. This tool can generate a title, description, and tags for your mesh assets. It can also accept and apply generated titles and descriptions for you, as well as edit generated tags.

For more information, see [Gen AI Asset Metadata tool](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/generative-ai-creation-tools/generative-ai-asset-metadata-tool).

### Gen AI Texture Generation tool

The Gen AI Texture Generation tool helps you generate textures for your objects and can improve your flexibility and speed. It can:

* Generate textures for 3D objects.
* Assign the generated texture to a mesh.
* Save the texture both onto your local drive and into your asset library.
* Create textures and work with objects in the wild.

For more information, see the [Gen AI Texture Generation tool](../Desktop%20editor/Generative%20AI%20tools/Generative%20AI%20Texture%20Generation%20Tool.md).

## What’s Next?

To learn more about Worlds, try the following:

- [Create your first world](https://developers.meta.com/horizon-worlds/learn/documentation/get-started/create-your-first-world) using our step-by-step tutorial.
- Learn about the desktop editor with the [Introduction to the desktop editor](../Desktop%20editor/Get%20started%20with%20Desktop%20Editor/Introduction%20to%20the%20desktop%20editor.md).
- Join the [Meta Horizon Creator Program](https://developers.meta.com/horizon-worlds/programs) to learn about our program benefits.