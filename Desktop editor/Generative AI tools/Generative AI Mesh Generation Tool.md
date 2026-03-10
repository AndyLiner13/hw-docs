---
source: https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/generative-ai-creation-tools/generative-ai-mesh-generation-tool
---

# [Generative AI Mesh Generation Tool](#generative-ai-mesh-generation-tool)

The Generative AI Mesh tool allows you to dynamically generate textured meshes that can then be added to your worlds asset library. This tool helps streamline the process of world and environment building by adding generated meshes of varying sizes & complexities. This document will cover how to:

- Generated small, medium, or large meshes using the GenAI mesh tool
- Save the generated asset to your library
- Add the generated asset to your created world

Prerequisites

- [Horizon Desktop editor](../Get%20started%20with%20Desktop%20Editor/Introduction%20to%20the%20desktop%20editor.md) installed on your PC

Gen AI Tool Availability & Rates

Access to GenAI features is automated and determined based on your location when using the Desktop Editor. If you move from an unsupported location to a supported location or vice versa, there will be a delay in updating your access for GenAI features. Horizon desktop editor’s GenAI tools are currently available to users aged 13+ and the Creator Assistant tool is available to users aged 18+. Access to GenAI features is automated and determined based on your location when using the desktop editor. If you move from an unsupported location to a supported location or vice versa, there will be a delay in updating your access for GenAI Features. The GenAI features are available in the following regions: United States, the United Kingdom (UK), Canada, India, Australia, France, Germany, Spain, Brazil, the Netherlands, Italy, Poland, Argentina, Vietnam, Mexico, New Zealand, Sweden, Belgium, Ireland, Switzerland, Denmark, Finland, Norway, Singapore, Iceland, and Austria. Additionally there are daily rate limits per user on content created using Meta AI. These limits are:

- Typescript - 1000 requests
- Audio SFX/Ambient - 200 requests
- Skybox Generation - 50 requests
- Mesh Generation - 100 requests

## [Generate a mesh with GenAI Mesh Generation tool](#generate-a-mesh-with-genai-mesh-generation-tool)

To access the Mesh Generation tool, open the **GenAI** panel from the top of your Horizon desktop editor.

![Gen AI 3d model selection](../../_assets/images/8611176f0e1994f767720a8b092560930e6cd6d2f2255c57facde23e53c51948.png){width:”400px”}

Then select the **Generate 3D models** option from the available generate options. Next, use the following process to generate a new mesh for your world:

1. Use the **Model Size** dropdown to select either **Small**, **Medium**, or **Large**. The selected model size corresponds to the tricount of the generated mesh. The tricount is the number of triangles that make up the mesh. The larger the model size, the more triangles the mesh will have and, generally, the higher quality the mesh will be.
2. After selecting your model size, enter a prompt into the prompt field and click **Generate**.
3. You will see some images generated for you based on your input prompt. You can select one or more of these images to generate a 3D model from. ![Mesh Gen generated images](../../_assets/images/1b390b87f2131aa016d7ff968e78603b2fee3f93f006331cb6238bb1d790cf46.png){width:”400px”}
4. To generate a 3D model of a generated image, hover your mouse over the image and select **Generate a model of this** on the image. ![Mesh Gen generate model](../../_assets/images/f4f310014dd5fa1a61c9323620d84d641363b826bb70a51dad11529583519bff.png){width:”400px”}
5. Once your model has finished generating, you can click **Save model** to save the generated 3D model to your asset library. The generated 3D will be added to your **My Assets** folder in your asset library in the **GenAI Assets** subfolder.
6. Once saved and available you can drag your generated asset from the library into your world to spawn it.

