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

[Gen AI 3d model selection](../../image_data/d7fc06667361b41a39d0334afc06be9247f7a8e5ced94b13d692eec00ac86241.md)

### Overview
The image displays a user interface for a tool called "Gen AI for Horizon Worlds," which is in beta version. The interface includes a welcome message, several interactive buttons, and a prompt area at the bottom for generating content.

### Key Elements
- **Welcome Message**: Located centrally above the interactive buttons. It reads: "Welcome to Gen AI for Horizon Worlds. Get started by writing a prompt or exploring what Gen AI can do."
- **Interactive Buttons**: Positioned below the welcome message, these buttons allow users to generate different types of content:
  - **Generate 3D models**
  - **Generate a sky**
  - **Generate sound effects**
  - **Generate ambient audio**
  - **Generate scripts**
- **Prompt Area**: At the bottom of the interface, there is a text input field labeled "3d model" with a placeholder text "prompt to generate a mesh." Below the input field, there is a blue button labeled "Generate."
- **Model Size Dropdown**: Positioned near the bottom left, showing "Medium" as the selected option.
- **Tool Icons**: Located at the very bottom, these icons represent different functionalities:
  - A 3D cube icon for generating 3D models.
  - A cloud icon for generating a sky.
  - A speaker icon for generating sound effects.
  - A circle icon with a line through it for generating ambient audio.
  - A curly brace icon for generating scripts.
- **Header**: At the top left, the text "Gen AI BETA" is displayed, indicating the tool is in a beta version.
- **Menu Icon**: Located at the top left corner, represented by three horizontal lines stacked vertically.
- **Help Icon**: At the top right corner, a question mark within a circle indicates a help or information icon.
- **Close Button**: Also at the top right corner, a white "X" symbolizes a close button.

### Visual Flow / Relationships
The most prominent visual elements are the interactive buttons, which are arranged vertically. The welcome message is centrally located above them. The prompt area and model size dropdown are positioned at the bottom. The tool icons are aligned horizontally at the very bottom. There are no arrows or lines connecting elements, but the layout suggests a linear reading order moving from the welcome message down to the interactive buttons and then to the prompt area and model size dropdown.

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
  
  [Mesh Gen generated images](../../image_data/361c48e3d82258722c820d521c502fb6721b45767e7ec2d022addd6f8d32b938.md)
  
  ### Overview
  This image depicts a user interface segment from a digital art or design tool, specifically showing a selection of options for generating a golden apple model. The interface includes a preview image, model size selection, generation model choice, and various interactive buttons at the bottom.
  
  ### Key Elements
  1. **User Section**
     - **Visual description**: Avatar icon and username.
     - **Location**: Top-left corner.
     - **Contents**: "You" and "A golden apple".
     - **Visual styling**: Dark background with light text.
  
  2. **AI Section**
     - **Visual description**: Text indicating AI interaction.
     - **Location**: Below the user section.
     - **Contents**: "Horizon AI Here are some options".
     - **Visual styling**: Light text on a dark background.
  
  3. **Golden Apple Preview**
     - **Visual description**: A shiny, golden apple with a stem.
     - **Location**: Center of the image.
     - **Contents**: A high-resolution image of the apple.
     - **Visual styling**: Shiny, reflective surface with a gradient background.
  
  4. **Second Apple Preview**
     - **Visual description**: A smaller, less detailed version of the apple with a single leaf.
     - **Location**: Below the first apple preview.
     - **Contents**: A smaller image of the apple with a single leaf.
     - **Visual styling**: Less reflective, more subdued colors.
  
  5. **Model Size Selection**
     - **Visual description**: Dropdown menu labeled "Model Size".
     - **Location**: Bottom section.
     - **Contents**: "Small".
     - **Visual styling**: Dark background with light text.
  
  6. **Generation Model Selection**
     - **Visual description**: Dropdown menu labeled "Generation Model".
     - **Location**: Below the model size selection.
     - **Contents**: "Mesh Gen 1.1".
     - **Visual styling**: Dark background with light text.
  
  7. **Interactive Buttons**
     - **Visual description**: Icons representing different functions.
     - **Location**: Bottom row.
     - **Contents**: Include a blue icon resembling a file, a cloud icon, a wave icon, a sound icon, a speaker icon, and a curly bracket icon.
     - **Visual styling**: White icons on a dark background.
  
  ### Visual Flow / Relationships
  - **Most prominent visually**: The golden apple preview.
  - **Arrows/lines/connectors**: None.
  - **Spatial relationships**: Elements are arranged vertically with clear separation between sections.
  
  </details>
  
  <p></p>
  
  {width:”400px”}
- To generate a 3D model of a generated image, hover your mouse over the image and select **Generate a model of this** on the image.
  <details>
  <summary>Mesh Gen generate model</summary>
  
  <p></p>
  
  [Mesh Gen generate model](../../image_data/d68f77488ffab5933391adf80c1b49a09f8e80afdf0a3b1dc5cff210d7439274.md)
  
  ### Overview
  The image displays a digital interface featuring a golden apple as the central focus. Above the apple are two interactive buttons, one for liking and one for disliking. Below the apple is a call-to-action button inviting users to generate a model of the apple. The interface has a clean, modern design with a dark background and light foreground elements.
  
  ### Key Elements
  - **Golden Apple**: A shiny, metallic apple with a reflective surface, positioned centrally. It has a small leaf at the top.
  - **Like Button**: Located above the apple, a thumbs-up icon with a white background and blue border.
  - **Dislike Button**: Positioned next to the Like button, a thumbs-down icon with a similar design.
  - **Generate Model Button**: Below the apple, a rectangular button with rounded corners, containing the text "> Generate a model of this" in white font on a dark gray background.
  - **Background**: A gradient background transitioning from dark gray at the edges to lighter gray towards the center, highlighting the apple.
  
  ### Visual Flow / Relationships
  The most prominent visual element is the golden apple, which draws the viewer's attention due to its size and reflective texture. The Like and Dislike buttons are secondary elements, providing interaction options. The Generate Model button is the call-to-action, encouraging user engagement. The layout follows a top-down sequence, guiding the viewer's eye from the apple to the interactive elements below.
  
  </details>
  
  <p></p>
  
  {width:”400px”}
- Once your model has finished generating, you can click **Save model** to save the generated 3D model to your asset library. The generated 3D will be added to your **My Assets** folder in your asset library in the **GenAI Assets** subfolder.
- Once saved and available you can drag your generated asset from the library into your world to spawn it.