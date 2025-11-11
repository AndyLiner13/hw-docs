Source: https://developers.meta.com/horizon-worlds/learn/documentation/get-started/tools-overview

# Tools overview

Meta Horizon provides a variety of tools so you can create engaging worlds quickly and efficiently.

You can use [VR creation tools](/hw-docs/vr-creation) or PC creation tools.

PC creation tools support cross-platform publishing across MR and mobile, offering richer creation capabilities. The PC environment provides efficient world-building with established workflows and powerful tools like the desktop editor, custom model import, and TypeScript scripting, enabling immersive, interactive, and fun experiences.

**Note**: VR creation tools for Worlds are legacy tools. We strongly recommend using the desktop editor and other PC creation tools.
This topic introduces some of our creation tools:

* [Desktop editor](#desktopeditor)
* [TypeScript](#typescript)
* [Custom Model Import](#custommodelimport)
* [NPCs](#npcs)
* [Performance tools](#performancetools)
* [Generative AI Creation tools](#genaitools)

## Desktop Editor

The desktop editor is the integrated game development environment for Worlds. It allows you to build worlds and scenes, and to add and modify objects in your worlds. The desktop editor runs on Windows, and you control it with the keyboard and mouse, rather than your VR headset.

**Note**: Building a world with the desktop editor is similar to building a game in Unity and is easier than using the editor on your VR headset.
![Desktop editor screenshot](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/502465844_729377782933509_8861147602288551686_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=KJQUND4x0J8Q7kNvwHJCXha&_nc_oc=Adm94b7Ytl9olGq-S4PkEyrgdUsSh1obPS0nrpZFgQXnZXLLk2rqY4pPLbBjEgzTQ-8&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=aA-JNcnZmxm339h8SwrlAQ&oh=00_Afg9sXlGAfrOA1fo1ilIKENQ5RrT2Y6vtVl4exitBV8C6w&oe=692C0032)
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

To install the desktop editor, see [Install the desktop editor](/hw-docs/get-started/install-desktop-editor).
To get started using the editor, see the [Introduction to the desktop editor](/hw-docs/desktop-editor/getting-started/introduction-to-desktop-editor/).

## TypeScript

TypeScript support in Worlds allows you to write scripts efficiently using traditional programming processes and tools. You can create a new TypeScript asset from the desktop editor, type your TypeScript code in VS Code, and then attach it as a component to an object. Using TypeScript expands your development options and adds safety and security to your code.
![Typescript screenshot](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/502450217_729377786266842_3747679647519941494_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=qSlMRN-_H-oQ7kNvwGiYxMk&_nc_oc=Adm_b_DLj2oFX1LleC7Bzup9gCO-uSsz7qbftiudFBTCejuJI44DiyieNrpvW1QR2x0&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=aA-JNcnZmxm339h8SwrlAQ&oh=00_Afj0oECcBrF0jAWSFAXZblHXBqCgZcPU2HRQjlmt1INudA&oe=692C0660)
TypeScript is a strongly-typed version of JavaScript. Strong typing provides tight integration with your IDE, letting you:

* Leverage IntelliSense (code completion).
* Catch errors during development, rather than at runtime.

To get started, see [Using TypeScript in Worlds](/hw-docs/typescript/getting-started/using-typescript-in-horizon-worlds/).

## Custom Model Import

The custom model import option in the desktop editor enables you to fill your world with objects spawned from imported 3D models, created using your favorite 3D creation tool. In Worlds, you refer to the resulting world as a custom model world. You can find your imported assets in your personal asset library. The following image shows an example of what a complex 3D object spawned from an imported asset looks like. In this case, it’s a park bench.
![Custom model import screenshot](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/476631803_650754080795880_4339261981796990598_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=3mGDP-odVwEQ7kNvwE7jgpe&_nc_oc=AdmTHwFLj8dnXn8QrV31qykrqY23UIFXBeW2qiUwq7LBz6LY5nLoCmLQVbx1rWXL8Go&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=aA-JNcnZmxm339h8SwrlAQ&oh=00_AfjBf_d41Gi5zkN8emOI1VUE6-V67UKlKAfqsxtp6vnx5g&oe=692C0606)
A custom 3D model is composed of multiple files, and you need to specify all of them when you import a 3D model into the desktop editor. These files include:

* An FBX file. This is the 3D model file format. It contains the 3D mesh along with scene data such as cameras, lighting, geometry, materials, and animations.
* One or more PNG files. These are image files, and they contain textures that map onto the 3D model’s surface to make the spawned object look more realistic.
  You can also create your own static lighting and collision models for your imported 3D models.

To get started, see [Getting started with custom model import](/hw-docs/custom-model-import/getting-started-with-custom-model-import).

## NPCs

A Non-Player Character (NPC) is a computer-controlled character within a world (as opposed to a user-controlled avatar). One example of such an NPC might be the monster that patrols the hallways of a haunted house. Creators add NPCs to their worlds for a variety of purposes, including:

* To provide information or quests to the player.
* To sell goods and services.
* To engage the player in conversation.
* To serve as enemies or obstacles for the player to overcome.
* To add to the game’s atmosphere and immersion.

![NPC screenshot](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/476644421_650754077462547_870136976936096742_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=Mx1RSYosED0Q7kNvwGBLvNS&_nc_oc=AdnFpQkgO9uu6Ezvq9DwhaJX7-9hNO1fFiYkyKjGlFvaUe4YIS8Td1vfTR1N74nq30A&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=aA-JNcnZmxm339h8SwrlAQ&oh=00_Afi00ug5EMIpBCLpFe4KMSVfdNn9EMoNtq5eI2xkhTHZMg&oe=692BF87D)

NPCs can range from simple scripted characters to complex AI-driven characters that learn and adapt to the player’s actions.
There are four types of archetype NPC characters that you can spawn into your scene, according to your needs. Utility, Storyteller, Antagonist, and Ally types of NPCs all exhibit behaviors that are controlled with an AI script.
These NPC archetypes act in the following ways:

* **Utility**: Utility NPCs perform basic functions to move a narrative or game experience forward. For example, furthering quest lines, buying, selling, or trading items, and directing the player to do something. Utility NPCs support scripting.
* **Storyteller**: Storyteller NPCs are conversationally driven. They operate within specific guidelines you set to move a narrative forward, but with a comprehensive world understanding and context, including the game state.
* **Antagonist**: These are enemy NPC characters. Antagonist NPCs can move, fight, and obstruct the player from accomplishing an objective. You can add AI to control this character archetype to add more personality and a higher level of decision-making ability.
* **Ally**: Friendly NPC characters. Ally NPC characters are aligned with the player’s objective. Ally NPC characters can operate on something in the scene. They can follow the player, and they can hide from the player.

For more information, see [Getting started with NPC assets](/hw-docs/desktop-editor/npcs/getting-started-with-npc-assets).

## Performance tools

Real-time performance metrics and server-side tracing can help you as a creator, find and address performance issues in your worlds. You can access the performance tools via browser while visiting your world, alleviating the need to put on a VR headset to get performance data.
![Performance tooling screenshot](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/502493465_729377792933508_2779429731967884486_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=DkWEOvhiKLYQ7kNvwG1wWUj&_nc_oc=AdkAWEn2DbxpYwt5-K9oZlIhpTaagJFO3YJiBfczJO4b00HO-rAwhJAT2IARplVNzFo&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=aA-JNcnZmxm339h8SwrlAQ&oh=00_AfjhtI8sx3CZJRGdG-hCZpR5a4cKBfl0Had77nMnQUNIxA&oe=692BEB71)
The **Performance** tab displays a real-time view of all currently selected metrics. You can select which metrics to display on the tab and you can also set a target number for each metric. When a metric exceeds the defined target, a red dot appears next to that metric as an alert.
This tab also supports scrubbing and tracing. With scrubbing, you can review data that has recently appeared on the **Performance** tab (approximately 30 seconds worth) in detail. With tracing, you can capture performance data from your world to view in Perfetto. Perfetto is a third-party tool for performance instrumentation and trace analysis.

For more information, see [Using performance tools from web and mobile](/hw-docs/performance-best-practices-and-tooling/performance-tools/using-performance-tools-from-web-and-mobile).

## Gen AI Creation tools

The desktop editor features a suite of Gen AI Creation tools that assist you in generating script code, audio samples, mesh metadata, and textures.
![GenAI audio screenshot](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/502455934_729377789600175_7065718010731758312_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=5UAHT__cQXQQ7kNvwHtHtbY&_nc_oc=AdlxcuwoB2ATaUvsm3uwYja54UFujY8Bc4JU_O3MrLB58liw1szVZNJ7sALrhbRdvEU&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=aA-JNcnZmxm339h8SwrlAQ&oh=00_AfgvUKQ8gW2xZVl9pcrBOqSMg4ZAl0CTqZyTdLPDuDoRYg&oe=692BE969)

### Gen AI code tool

Converting Worlds concepts into Typescript code can sometimes be a struggle. However, the Gen AI code tool can help you with this. Built into the desktop editor, the Gen AI tool is an authoritative, AI-powered chat assistant. It works like a chat app and using it is as simple as having a back-and-forth, real-time conversation with someone. In this case, that someone just happens to be a [large language model](https://en.wikipedia.org/wiki/Large_language_model).
The GenAI code tool has two types of models available: Llama, and Specialist. The Llama model works well for quick questions or general information about Worlds. The Specialist model is trained on TypeScript and the Worlds API. It can generate scripts and answer more detailed questions about scripting and TypeScript. The Specialist model works well as a personal tutor to learn TypeScript and familiarize yourself with TypeScript APIs.

For more information, see the [Gen AI Creation code tool](/hw-docs/desktop-editor/generative-ai-creation-tools/generative-ai-creation-code-tool).

### Gen AI Creation Audio tool

The Gen AI Creation Audio tool assists you in the audio creation process, making adding sound a simple matter of clicking a few buttons.
The Gen AI Audio tool provides two audio generation modes: sound effect generation and ambient audio generation. Sound effect generation is useful when attempting to create short audio clips, while ambient audio generation is better for generating longer background tracks.
You can either select sounds based on example prompts, or you can create your own custom prompts and see what sounds you can come up with.
Once you have that perfect sound, you can use it to create audio assets for your world or download it to your local hard drive for future use.

For more information, see the [Gen AI Creation Audio tool](/hw-docs/desktop-editor/generative-ai-creation-tools/generative-ai-creation-audio-tool).

### Gen AI Asset Metadata tool

The Gen AI Asset Metadata tool can create metadata for the mesh assets in your worlds. This will help you better manage and access your 3D models’ assets. This tool can generate a title, description, and tags for your mesh assets. It can also accept and apply generated titles and descriptions for you, as well as edit generated tags.

For more information, see [Gen AI Asset Metadata tool](/hw-docs/desktop-editor/generative-ai-creation-tools/generative-ai-asset-metadata-tool).

### Gen AI Texture Generation tool

The Gen AI Texture Generation tool helps you generate textures for your objects and can improve your flexibility and speed. It can:

* Generate textures for 3D objects.
* Assign the generated texture to a mesh.
* Save the texture both onto your local drive and into your asset library.
* Create textures and work with objects in the wild.

For more information, see the [Gen AI Texture Generation tool](/hw-docs/desktop-editor/generative-ai-creation-tools/generative-ai-creation-texture-tool).

## What’s Next?

To learn more about Worlds, try the following:

- [Create your first world](/hw-docs/get-started/create-your-first-world) using our step-by-step tutorial.
- Learn about the desktop editor with the [Introduction to the desktop editor](/hw-docs/desktop-editor/getting-started/introduction-to-desktop-editor).
- Join the [Meta Horizon Creator Program](https://developers.meta.com/horizon-worlds/programs) to learn about our program benefits.