Source: https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/generative-ai-creation-tools/generative-ai-skybox-tool

Learn

# Generative AI Skybox Generation Tool

The Generative AI Skybox Generation Tool allows you to dynamically generate skyboxes for your created worlds. This tool helps streamline the process of world and environment building while also allowing you to iterate on the generated assets. This doc will cover how to:

* Generate a skybox in Horizon and its associated styles
* Export the asset(s) to your asset library
* Download the asset(s) to your local machine

## Prerequisites

* [Horizon Desktop Editor](/hw-docs/Desktop%20editor/Get%20started%20with%20Desktop%20Editor/Introduction%20to%20the%20desktop%20editor.md) installed on your PC.
* One or more 3D models imported into your [personal asset library](/hw-docs/Desktop%20editor/Assets/Creating,%20importing,%20viewing,%20and%20spawning%20assets.md#importing-assets) in Desktop Editor.

Gen AI Tool Availability & Rates

 Access to GenAI features is automated and determined based on your location when using the Desktop Editor. If you move from an unsupported location to a supported location or vice versa, there will be a delay in updating your access for GenAI features. Horizon desktop editor’s GenAI tools are currently available to users aged 13+ and the Creator Assistant tool is available to users aged 18+. Access to GenAI features is automated and determined based on your location when using the desktop editor. If you move from an unsupported location to a supported location or vice versa, there will be a delay in updating your access for GenAI Features. The GenAI features are available in the following regions: United States, the United Kingdom (UK), Canada, India, Australia, France, Germany, Spain, Brazil, the Netherlands, Italy, Poland, Argentina, Vietnam, Mexico, New Zealand, Sweden, Belgium, Ireland, Switzerland, Denmark, Finland, Norway, Singapore, Iceland, and Austria. Additionally there are daily rate limits per user on content created using Meta AI. These limits are:

* Typescript - 1000 requests
* Audio SFX/Ambient - 200 requests
* Skybox Generation - 50 requests
* Mesh Generation - 100 requests

## Skybox styles (models)

The skybox feature offers different models that can be used to establish a style for your generated skybox. Below are the currently available skybox models generated with the following phrase: “A view of a nighttime sky with an aurora. rolling snow-capped rocky hills barely visible far out in the distance.”

* Skydome - A traditional skybox featuring wide open reflected horizons and realistic rendering
  ![generated skybox in the skydome style](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/484843258_675614044976550_7641456277170156748_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=HacedbnXeV0Q7kNvwEIV8JZ&_nc_oc=AdlxB0jhI4Na84VXkBT1-W1i5Q8h9TzK5QXdOCZvizMu_FPRnm__awj_p7Z8VHXxp2A&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=HPlvjBvOCEmFfdK2bbo3sQ&oh=00_Afj_kK5b9L0FTpUpY82AKhsXc0A4pd8h2HwXKGHcwTydBQ&oe=692FCC26)
* Photorealistic - Photographic realism with good visual fidelity
  ![generated skybox in the photorealistic style](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/485160468_675614048309883_7846075386437929284_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=KWxM7jE9Kc0Q7kNvwEQXOed&_nc_oc=AdkDE1zmeVmtzKfgfkYjsQbWTrKZNtGHYgo6JUydRUfgGcWawXRuuK95YSNonxCoHHY&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=HPlvjBvOCEmFfdK2bbo3sQ&oh=00_Afi0bN9AlKxzSNjHYOfWDf2lEYFyI1Zibx25M6d52CLutw&oe=692FC76F)
* Digital Painting - Digitally illustrated concept art
* Open World - Pastel paintings of beautiful worlds
  ![generated skybox in the open world style](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/484265621_675614038309884_6466651506436893979_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=6j6QJUeo0MkQ7kNvwEY8N_E&_nc_oc=Adk_WOk3mfaxsHOt-Lnh4V3pkKGipZfpYXY3S10xlr28PW-y_7VriDEIZY8zEeYFKk8&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=HPlvjBvOCEmFfdK2bbo3sQ&oh=00_AfjxctBMVGbQ-IpWGnyoRdct72_AQeaKXbrX1FCHzmsz_g&oe=692FC352)
* Anime - Bright and cheery Japanese styled animation
  ![generated skybox in the anime style](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/484725101_675614031643218_6452299790829256071_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=STwZEktx7RAQ7kNvwHKQAei&_nc_oc=Adk8TZhEwajESYhZCql-bxdmdGgEXShuzGD4ifCWJLI6Ww8_zRCU9OGtMMqFILssi7w&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=HPlvjBvOCEmFfdK2bbo3sQ&oh=00_Afhsr1MXm7VlYLW7glHRJMBNOOl8lHstJXQL38L2sHby9Q&oe=692FBBCF)
* Comic - Cel-shaded illustration style with clean lines and bright colors
  ![generated skybox in the comic style](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/484918867_675614041643217_5716770861462679951_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=mMqhAyCIntEQ7kNvwHa1Wb4&_nc_oc=Adkf5XeMOu_zAeIOz4e8JxJzSMSRJSMOAq8KhU0RgrOcb1kvfRNSgzfSvaRDHJzVkY4&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=HPlvjBvOCEmFfdK2bbo3sQ&oh=00_Afh6ADDSzoCVumv_-ETclNmt8pOa5ul1pXvBWNiLEqPAdQ&oe=692FAB6D)

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