Source: https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/generative-ai-creation-tools/generative-ai-mesh-generation-tool

# Generative AI Mesh Generation Tool

The Generative AI Mesh tool allows you to dynamically generate textured meshes that can then be added to your worlds asset library. This tool helps streamline the process of world and environment building by adding generated meshes of varying sizes & complexities. This document will cover how to:

* Generated small, medium, or large meshes using the GenAI mesh tool
* Save the generated asset to your library
* Add the generated asset to your created world

Prerequisites

* [Horizon Desktop editor](../Get%20started%20with%20Desktop%20Editor/Introduction%20to%20the%20desktop%20editor.md) installed on your PC

Gen AI Tool Availability & Rates

 Access to GenAI features is automated and determined based on your location when using the Desktop Editor. If you move from an unsupported location to a supported location or vice versa, there will be a delay in updating your access for GenAI features. Horizon desktop editor’s GenAI tools are currently available to users aged 13+ and the Creator Assistant tool is available to users aged 18+. Access to GenAI features is automated and determined based on your location when using the desktop editor. If you move from an unsupported location to a supported location or vice versa, there will be a delay in updating your access for GenAI Features. The GenAI features are available in the following regions: United States, the United Kingdom (UK), Canada, India, Australia, France, Germany, Spain, Brazil, the Netherlands, Italy, Poland, Argentina, Vietnam, Mexico, New Zealand, Sweden, Belgium, Ireland, Switzerland, Denmark, Finland, Norway, Singapore, Iceland, and Austria. Additionally there are daily rate limits per user on content created using Meta AI. These limits are:

* Typescript - 1000 requests
* Audio SFX/Ambient - 200 requests
* Skybox Generation - 50 requests
* Mesh Generation - 100 requests

## Generate a mesh with GenAI Mesh Generation tool

To access the Mesh Generation tool, open the **GenAI** panel from the top of your Horizon desktop editor.

<details>
<summary>Gen AI 3d model selection</summary>

<p></p>

[Gen AI 3d model selection](../../../../images/output/img_20251211_033501_20251211_033501.md)

### Overview
The image displays a user interface for a feature called "Gen AI for Horizon Worlds." It includes a welcome message, several interactive options, and a prompt area for generating a 3D model.

### Key Elements
- **Welcome Message**: Located at the top-center, it reads: "Welcome to Gen AI for Horizon Worlds. Get started by writing a prompt or exploring what Gen AI can do."
- **Interactive Options**: Below the welcome message, there are five buttons labeled:
  - Generate 3D models
  - Generate a sky
  - Generate sound effects
  - Generate ambient audio
  - Generate scripts
- **Prompt Area**: At the bottom, there is a text input field labeled "3d model" with placeholder text "prompt to generate a mesh." A blue "Generate" button is positioned below the input field.
- **Model Size Selector**: Above the prompt area, there is a dropdown menu labeled "Model Size" set to "Medium."

### Visual Flow / Relationships
- The most prominent visual element is the welcome message.
- The interactive options are arranged vertically below the welcome message.
- The prompt area is located at the bottom, with the "Generate" button directly beneath it.
- There are no arrows or lines connecting elements, but the layout suggests a linear reading order from top to bottom.

</details>

<p></p>

{width:”400px”}

Then select the **Generate 3D models** option from the available generate options. Next, use the following process to generate a new mesh for your world:

- Use the **Model Size** dropdown to select either **Small**, **Medium**, or **Large**. The selected model size corresponds to the tricount of the generated mesh. The tricount is the number of triangles that make up the mesh. The larger the model size, the more triangles the mesh will have and, generally, the higher quality the mesh will be.
- After selecting your model size, enter a prompt into the prompt field and click **Generate**.
- You will see some images generated for you based on your input prompt. You can select one or more of these images to generate a 3D model from.
  <details>
<summary>Mesh Gen generated images</summary>

<p></p>

[Mesh Gen generated images](../../../../images/output/img_20251211_033603_20251211_033603.md)

### Overview
This image depicts a chat interface where a user has requested a "golden apple." The AI system, labeled as "Horizon AI," responds by presenting two options for generating an image of the golden apple.

### Key Elements
- **User Input**: Located at the top-left, the user's request is displayed as "> You A golden apple".
- **AI Response**: Positioned below the user input, the AI's message reads "> Horizon AI Here are some options".
- **Golden Apple Image**: A large, shiny golden apple is shown prominently in the center of the interface. It is highly reflective and has a smooth texture.
- **Second Option**: Below the main image, there is a smaller thumbnail showing another perspective of the golden apple, featuring a single leaf attached to its stem.
- **Model Size Dropdown**: At the bottom, there is a dropdown menu labeled "Model Size" set to "Small".
- **Generation Model Dropdown**: Below the model size dropdown, there is another dropdown labeled "Generation Model" set to "Mesh Gen 1.1".
- **Tool Buttons**: At the very bottom, there are several tool buttons, likely for interacting with the AI interface, such as upload, download, settings, and more.

### Visual Flow / Relationships
The visual hierarchy is clear, with the user's request at the top, followed by the AI's response, then the two image options. The larger image of the golden apple is the most prominent visual element, drawing the viewer's attention first. The second option is less prominent but still noticeable due to its smaller size and distinct placement below the main image.

</details>

<p></p>

{width:”400px”}
- To generate a 3D model of a generated image, hover your mouse over the image and select **Generate a model of this** on the image.
  <details>
<summary>Mesh Gen generate model</summary>

<p></p>

[Mesh Gen generate model](../../../../images/output/img_20251211_033702_20251211_033702.md)

### Overview
The image displays a user interface element featuring a golden apple as the central focus. Above the apple, there are two buttons for liking and disliking the image. Below the apple, there is a call-to-action button inviting users to generate a model of the apple. The interface also includes a prompt asking the user to select images for generating a 3D model.

### Key Elements
- **Golden Apple**: A shiny, metallic apple with a reflective surface, located centrally in the image. It has a small leaf on top.
- **Like Button**: Positioned at the top right, a thumbs-up icon indicating the option to like the image.
- **Dislike Button**: Positioned next to the Like button, a thumbs-down icon indicating the option to dislike the image.
- **Generate Model Button**: Located below the apple, a rectangular button with white text that reads "Generate a model of this."
- **Prompt Text**: Below the Generate Model button, a prompt text stating "Select the image(s) you'd like to use to generate a 3D model."

### Visual Flow / Relationships
The most prominent visual element is the golden apple. The Like and Dislike buttons are positioned above the apple, suggesting they are secondary actions related to the main content. The Generate Model button is below the apple, drawing attention to the action of creating a 3D model. The prompt text is placed beneath the Generate Model button, providing instructions for the user.

</details>

<p></p>

{width:”400px”}
- Once your model has finished generating, you can click **Save model** to save the generated 3D model to your asset library. The generated 3D will be added to your **My Assets** folder in your asset library in the **GenAI Assets** subfolder.
- Once saved and available you can drag your generated asset from the library into your world to spawn it.