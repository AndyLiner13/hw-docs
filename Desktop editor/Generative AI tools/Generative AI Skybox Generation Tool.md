---
source: https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/generative-ai-creation-tools/generative-ai-skybox-tool
---

# Generative AI Skybox Generation Tool

The Generative AI Skybox Generation Tool allows you to dynamically generate skyboxes for your created worlds. This tool helps streamline the process of world and environment building while also allowing you to iterate on the generated assets. This doc will cover how to:

* Generate a skybox in Horizon and its associated styles
* Export the asset(s) to your asset library
* Download the asset(s) to your local machine

## Prerequisites

* [Horizon Desktop Editor](../Get%20started%20with%20Desktop%20Editor/Introduction%20to%20the%20desktop%20editor.md) installed on your PC.
* One or more 3D models imported into your [personal asset library](../Assets/Creating,%20importing,%20viewing,%20and%20spawning%20assets.md#importing-assets) in Desktop Editor.

Gen AI Tool Availability & Rates

 Access to GenAI features is automated and determined based on your location when using the Desktop Editor. If you move from an unsupported location to a supported location or vice versa, there will be a delay in updating your access for GenAI features. Horizon desktop editor’s GenAI tools are currently available to users aged 13+ and the Creator Assistant tool is available to users aged 18+. Access to GenAI features is automated and determined based on your location when using the desktop editor. If you move from an unsupported location to a supported location or vice versa, there will be a delay in updating your access for GenAI Features. The GenAI features are available in the following regions: United States, the United Kingdom (UK), Canada, India, Australia, France, Germany, Spain, Brazil, the Netherlands, Italy, Poland, Argentina, Vietnam, Mexico, New Zealand, Sweden, Belgium, Ireland, Switzerland, Denmark, Finland, Norway, Singapore, Iceland, and Austria. Additionally there are daily rate limits per user on content created using Meta AI. These limits are:

* Typescript - 1000 requests
* Audio SFX/Ambient - 200 requests
* Skybox Generation - 50 requests
* Mesh Generation - 100 requests

## Skybox styles (models)

The skybox feature offers different models that can be used to establish a style for your generated skybox. Below are the currently available skybox models generated with the following phrase: “A view of a nighttime sky with an aurora. rolling snow-capped rocky hills barely visible far out in the distance.”

* Skydome - A traditional skybox featuring wide open reflected horizons and realistic rendering
  ![generated skybox in the skydome style](../../_assets/images/d3dbcc0442e8f2df2619a0d9a26aa719c61f875857554d84a0056f0995852574.png)
* Photorealistic - Photographic realism with good visual fidelity
  ![BROKEN_REF: generated skybox in the photorealistic style](https://scontent-dfw6-1.xx.fbcdn.net/v/t39.2365-6/485160468_675614048309883_7846075386437929284_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=edks22fb668Q7kNvwFH6z3-&_nc_oc=AdnMyXoiS44UuYMWr-XCOirFI8e2I_Tm6WUJz9wJmqBiThe5nn98kGaTJ28cPq4AP6cAtTWJfMaSRzpT8ndOXZYe&_nc_zt=14&_nc_ht=scontent-dfw6-1.xx&_nc_gid=Lxt2_lbj5Bw9abdT0ktHew&oh=00_AfpmmNxTQ2EM9orAShv9ssTbSMorqQIGYPyV5cypcdcE5Q&oe=6984276F)
* Digital Painting - Digitally illustrated concept art
* Open World - Pastel paintings of beautiful worlds
  ![BROKEN_REF: generated skybox in the open world style](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/484265621_675614038309884_6466651506436893979_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=G5P5XSe5R-MQ7kNvwELmOHM&_nc_oc=Adm4pXY3sUx6BXHr6jG3oPaNANxyBXFOZq2Ecu5K2JcySF_Byo02UEUFPjq72KoHxoJRhsyyiMvuQpMQ3k9wk2bu&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=Lxt2_lbj5Bw9abdT0ktHew&oh=00_Afod3ekR8-mL3BUB3zNhQftL4-qPtgCp6T7_WudLpDcvsA&oe=69842352)
* Anime - Bright and cheery Japanese styled animation
  ![BROKEN_REF: generated skybox in the anime style](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/484725101_675614031643218_6452299790829256071_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=mHRJbxFts0wQ7kNvwGy7EFo&_nc_oc=AdlDwPJGiVop19j5EF3oK0BlQfFkwOtgkynXBj8jQeEY2UoLlxSUUkPAnH-EclahLq6B5no6CEOodCSIqh17r9pq&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=Lxt2_lbj5Bw9abdT0ktHew&oh=00_AfqgtIpuSLLG1BbjCf4JNHqyuG1KVn3NNGlFo4Ss-K2wbw&oe=69841BCF)
* Comic - Cel-shaded illustration style with clean lines and bright colors
  ![BROKEN_REF: generated skybox in the comic style](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/484918867_675614041643217_5716770861462679951_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=AShxx0-JlR4Q7kNvwGrhSAa&_nc_oc=Adn9ohKLV5TxNqT0JCTED8MYmbAXfH1qio5KfGOhQUvI6ZVWw258Tz0t3wyttWSBZSX9Q6MMWfz1Cf66hpC3I-cc&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=Lxt2_lbj5Bw9abdT0ktHew&oh=00_AfpZ3YLzAl9wijZVKdhLIang03v3a8OmUSxjVABUb1smfw&oe=698443AD)

## Generate Skyboxes for your world

To generate a skybox for your world, use the following process:

- Select the GenAI icon from the toolbar, then select Skybox.
- Enter a prompt into the prompt field and select a style to base the generated skybox on. The Horizon GenAI tool will then generate several skybox options based on your input prompt and selected style.
- Once the options are generated, select one of the generated options to create a preview of the skybox. You can use the **Style** drop-down menu to select one of the six available styles for your generated skybox.
- Once your skybox options are generated, select the option that most fits your created world.

## Save your generated skybox

Once a skybox has been generated for your world, you can save it to your asset library.

To save to your asset library, hover over your generated asset and select the **Export to asset library** option.

**Note**: You can also download and save your generated skybox to your local disk using the download icon.