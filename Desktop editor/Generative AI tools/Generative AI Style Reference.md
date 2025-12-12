Source: https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/generative-ai-creation-tools/generative-ai-style-reference

# Generative AI Style Reference

The Horizon Gen AI Style Reference feature allows the creation of a style that informs other content you create using Horizon Gen AI tools. With Style Reference, you can establish a style that helps build a cohesive world look and feel in your created world. Consistency for your generated content can help accelerate the world creation process, and ensure your users have a cohesive experience in your world.

Once a style reference is created you can:

* Apply to additional generated content for your world.
* Save it and reuse the generated style for future content.
* Swap between generated styles to dynamically alter the context window for generated content when world building.

**Note**: When using a style reference for your generated content, you will be rate limited according to your selected generation output. Check the **Gen AI Tool Availability & Rates** for rate limit information.

Gen AI Tool Availability & Rates

 Access to GenAI features is automated and determined based on your location when using the Desktop Editor. If you move from an unsupported location to a supported location or vice versa, there will be a delay in updating your access for GenAI features. Horizon desktop editor’s GenAI tools are currently available to users aged 13+ and the Creator Assistant tool is available to users aged 18+. Access to GenAI features is automated and determined based on your location when using the desktop editor. If you move from an unsupported location to a supported location or vice versa, there will be a delay in updating your access for GenAI Features. The GenAI features are available in the following regions: United States, the United Kingdom (UK), Canada, India, Australia, France, Germany, Spain, Brazil, the Netherlands, Italy, Poland, Argentina, Vietnam, Mexico, New Zealand, Sweden, Belgium, Ireland, Switzerland, Denmark, Finland, Norway, Singapore, Iceland, and Austria. Additionally there are daily rate limits per user on content created using Meta AI. These limits are:

* Typescript - 1000 requests
* Audio SFX/Ambient - 200 requests
* Skybox Generation - 50 requests
* Mesh Generation - 100 requests

## Create a style reference

By creating a style reference you establish a context window for future generated model and texture outputs in your created world.

To create a new style reference, use the following process:

- Select the **Gen AI** option from the top menu bar to open the **Gen AI** panel in the Horizon Editor.
- Select the **Generate using a style reference** or input /style to begin the style reference generation process.
  <details>
  <summary>Gen AI Style reference window</summary>
  
  <p></p>
  
  [Gen AI Style reference window](../../image_data/5205c193969ce9d618ca302457493a308aae04aaf72e2ee62e9cb551ee9c6cef.md)
  
  ### Overview
  The image displays a user interface for a feature called "Gen AI for Horizon Worlds." It presents a list of options for generating various elements within a virtual environment. The interface includes a prompt input field at the bottom and a "Generate" button.
  
  ### Key Elements
  - **Header**: "Welcome to Gen AI for Horizon Worlds. Get started by trying a sample prompt or writing your own."
  - **Buttons**: Each button has a label indicating a specific action related to generating content. These include:
    - Generate an environment
    - Generate 3D models
    - Generate a sky
    - Generate a texture
    - Generate sound effects
    - Generate ambient audio
    - Generate code and set up gameplay
    - Generate using a style reference
  - **Prompt Input Field**: Located at the bottom, labeled "/style Generate a style reference image," with a placeholder text "/style" entered.
  - **Generate Button**: A blue button labeled "Generate" located at the bottom of the screen.
  - **Menu Icons**: Located in the top-left corner, showing a menu icon and a question mark icon for help.
  
  ### Visual Flow / Relationships
  The most prominent visual element is the list of buttons, which are arranged vertically. The buttons are aligned horizontally and are evenly spaced. The prompt input field is positioned below the list of buttons, and the "Generate" button is placed at the very bottom. There are no arrows or lines connecting the elements, but the layout suggests a linear reading order moving from the top of the list down to the bottom where the "Generate" button is located.
  
  </details>
  
  <p></p>
  
  
- If selecting **Generate using a style reference** you can select a recommended prompt or manually input a prompt into the prompt window.
- After inputting or selecting a prompt from the recommended list, a style will be generated.
- Once you have a style reference it will apply as context for your future generated content. You can swap between your created style references to dynamically swap the context for your generated models and textures.
  <details>
  <summary>Gen AI Style reference window save generated reference</summary>
  
  <p></p>
  
  [Gen AI Style reference window save generated reference](../../image_data/707bed629de6b021f480e555946d418ef59cdef645159bef7560b85f2c622bd8.md)
  
  ### Overview
  This image is a screenshot of a user interface showing a request for a gloomy rainy forest environment with a dark blue color theme, cartoon style. The interface includes a user input area, a generated image preview, and interactive elements such as buttons and icons.
  
  ### Key Elements
  - **User Input Area**: Located at the top-left, contains a profile picture and the text "> You a gloomy rainy forest environment with dark blue color theme, cartoon".
  - **Generated Image Preview**: Positioned centrally, displays a cartoon-style image of a gloomy rainy forest environment with dark blue tones.
  - **Interactive Elements**: 
    - A large black button labeled "+ Apply and Save" is centered below the image preview.
    - Below the image preview, there are three interactive icons: a thumbs-up, a thumbs-down, and a magnifying glass.
  - **Style Reference Label**: At the very top, there is a label "STYLE REFERENCE".
  
  ### Visual Flow / Relationships
  The most prominent visual element is the generated image preview. The user input area is secondary but important for context. The interactive elements are arranged below the image preview, suggesting a sequence where users can apply changes after viewing the generated image.
  
  </details>
  
  <p></p>
  
  
- You created style reference will appear above the prompt window and you can select either the **3D Model** or **Texture** options to generate content.
  <details>
  <summary>Gen AI Style reference 3D model or texture</summary>
  
  <p></p>
  
  [Gen AI Style reference 3D model or texture](../../image_data/b4a28bffee083af022eba6f2430bda2119fe4849328be9444ddf4b9b1a93dd00.md)
  
  ### Overview
  The image depicts a user interface for generating a 3D model of a gloomy rainy forest environment. The interface includes a preview image, model detail settings, generation model selection, and a prompt area for mesh generation.
  
  ### Key Elements
  - **User Prompt**: Located at the top, the user has requested a gloomy rainy forest environment with a dark blue color theme and a cartoon style.
  - **Preview Image**: Below the user prompt, there is a preview image of the generated forest scene. It features a gloomy, rainy atmosphere with dark blue tones, green foliage, and water droplets falling from the trees.
  - **Model Detail Settings**: A section labeled "3D Model Detail" with a dropdown menu set to "Medium."
  - **Generation Model Selection**: Below the model detail settings, there is another dropdown labeled "Generation Model" set to "Mesh Gen 1.0."
  - **Interactive Elements**: Several icons are present below the model detail settings, likely representing different options for the 3D model generation process.
  - **Prompt Area**: At the bottom, there is a text area labeled "Write a prompt to generate a mesh." This area is currently empty, indicating that no prompt has been entered yet.
  - **Generate Button**: A blue button labeled "Generate" is located at the very bottom of the interface.
  
  ### Visual Flow / Relationships
  - The most prominent visual element is the preview image of the forest scene.
  - There is a clear reading order from the user prompt upwards to the preview image, then down to the model detail settings, and finally to the interactive elements and prompt area.
  - The interactive elements are arranged horizontally below the model detail settings, and the prompt area is positioned below them.
  
  </details>
  
  <p></p>
  
  

## Using a style reference

Once you have a style reference it will apply as the context for your future generated content. You can swap between your created style references to dynamically swap the context for your generated models and textures.

To generate content using a style reference, using the following process:

- Select a style reference to apply as a context for your generated content. If no style reference in set, you can select the **Open saved style references** button to view your generated style references.
  <details>
  <summary>Saved style references</summary>
  
  <p></p>
  
  [Saved style references](../../image_data/a89160fe6d828741e81f45fc447c933f88202bc0802b6b0103bb3c541cffdddf.md)
  
  ### Overview
  The image displays a user interface element, specifically a dropdown menu titled "STYLE REFERENCE" that lists style references with associated icons and delete buttons next to them. The interface is part of a larger form or tool related to generating a 3D mesh model.
  
  ### Key Elements
  - **Dropdown Menu Title**: "STYLE REFERENCE"
  - **Dropdown Menu Items**:
    - **s/2192**
    - **s/1281**
    - **s/1304**
  - **Icons**: Small trash can icons appear next to each style reference number.
  - **Background**: Dark gray background.
  - **Text Color**: White for the dropdown items and title.
  - **Button**: A blue "Generate" button at the bottom left.
  - **Form Fields**: "3D Model Detail" and "Generation Model" fields with dropdown menus.
  - **Tool Icons**: Row of icons above the prompt field, including a robot head, a cube, a cloud, and sound wave icons.
  
  ### Visual Flow / Relationships
  - **Most Prominent Element**: The "STYLE REFERENCE" dropdown menu.
  - **Arrows/Connections**: None visible.
  - **Spatial Relationships**: The dropdown menu is positioned to the right of the form fields and below the "Generate" button.
  
  </details>
  
  <p></p>
  
  
- With a style reference applied, select either the **3D Model** option or **Texture** option. Note that other **Gen AI** features will be inaccessible with a style reference enabled.
- If using the **3D Model** option, select the **3D Model Detail** and **Generation Model** for the generation, then input a prompt in the prompt window. If using the **Texture** feature, select a mesh in your world then input a prompt in the prompt window.
- Click **Generate** to generated your texture or model.