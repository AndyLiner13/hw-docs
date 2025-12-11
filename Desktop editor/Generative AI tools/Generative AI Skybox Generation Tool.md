Source: https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/generative-ai-creation-tools/generative-ai-skybox-tool

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
  ![generated skybox in the skydome style](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/484843258_675614044976550_7641456277170156748_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=DgtwiQclh1YQ7kNvwFSWcAX&_nc_oc=AdkBtZhN9JtjGZfC-DdEIiFGEJ0aRaOsdB2fiuk_tM8UOcHdnq8_23vvkcIQHb8fnEIg3U8OF65MnotII8mrQ4-C&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=OBaYafVZYEtDSrwCgFppxg&oh=00_AfnzNf9809N8_0r3vMtuF5fOZl8uU7XfSDDUrg0e4g4rxQ&oe=69559726)
* Photorealistic - Photographic realism with good visual fidelity
  ![generated skybox in the photorealistic style](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/485160468_675614048309883_7846075386437929284_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=Bijqv8HGi_sQ7kNvwEnWDI7&_nc_oc=Adm1H_3YC8XhgYByIrkcMC6gLctkxz8flXK36H_szawtAjEtjuT-nmp3tAMPbs_IpOn_wOAlpB_E0R6lbaWxCAKk&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=OBaYafVZYEtDSrwCgFppxg&oh=00_Afn1Y09y08CSoQHZc8sIsNF0dGg9gVDm9LvJCgM6468Omw&oe=6955926F)
* Digital Painting - Digitally illustrated concept art
* Open World - Pastel paintings of beautiful worlds
  ![generated skybox in the open world style](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/484265621_675614038309884_6466651506436893979_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=mslo-Ml_U2oQ7kNvwHun49U&_nc_oc=AdkqWD6edHLFF_y3fd31SfkBNuG9QnOlkUQ5oaU3Fhrqob_UvVGCqcRNlEKvh0Ql1S-4U2xSjJDj3N4tBGGj0Unv&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=OBaYafVZYEtDSrwCgFppxg&oh=00_AfkV3QHUk53UO50QZQLIkdeG61MclZrKvhcnyg-QjcVevQ&oe=69558E52)
* Anime - Bright and cheery Japanese styled animation
  ![generated skybox in the anime style](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/484725101_675614031643218_6452299790829256071_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=bTRDuLaKCuMQ7kNvwFxhha1&_nc_oc=AdlWgou4F3huHfrwILGbr_4JHGW7CvtXM3KYewP_U_3LOevnOGw-eaaMbI6b8qMgw6XLBBzikiHyONbTt3rWdsNU&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=OBaYafVZYEtDSrwCgFppxg&oh=00_AfmFmKrIOYoquFydM-gNCo9oVrmSBjZ27W5fmnb3x1pBqg&oe=695586CF)
* Comic - Cel-shaded illustration style with clean lines and bright colors
  ![generated skybox in the comic style](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/484918867_675614041643217_5716770861462679951_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=AK9lKr2_1WkQ7kNvwGUXrrz&_nc_oc=AdnXcxRx6dCIxT_TjJbaqLMQxRG_KBsZ0AEVCwKivH-BE3cG3eyH3gXY-2UbBNFRQl5EwYtvNm4j2RIjOJWeXiP_&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=OBaYafVZYEtDSrwCgFppxg&oh=00_Afn0OkebsJIL5vq2q62ucVMRVfT0vbLia-HlUf9xj9jtaA&oe=6955766D)

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