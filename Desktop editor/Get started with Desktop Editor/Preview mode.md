---
source: https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/getting-started/preview-mode
---

# [Preview mode](#preview-mode)

You can click the play button to enter preview mode.

![The Play button](../../.assets/images/b190a36f018b7e930a0076997c3c9b3e15adba4a1c23e5bc61b988eb59c91713.png)

When you enter preview mode, you will start at your world’s spawn point. If an avatar is present, you can move it around a bit using the arrow keys to get a feel for how your users will experience your world. You can also change the direction the avatar faces using your mouse.

**Note**: The avatar displayed in the playtest will probably be your own personal avatar. In the actual game, the avatar of the user will be used.

![Moving your avatar around the scene.](../../.assets/images/1e8bfb8fb1a8d35b4a8e2e1cd68e54c0b72238a05edc4d84eacf2412f80cc61e.png)

## [Configuring your preview](#configuring-your-preview)

You can also configure aspects of the preview mode using the preview mode **Settings** button.

![The Preview Settings options](../../.assets/images/8aa6451b18dff59c2add695716e066d0725dfedeef4cd45034139b38df96cbd1.png)

### [Auto-stop and Auto-start](#auto-stop-and-auto-start)

You can configure when world simulation automatically starts and ends. This allows you to begin editing your world right away after switching out of preview mode.

![The auto-start and auto-stop options](../../.assets/images/1de0aefa9641004a6bfd6fa35eda0c5fdfb57f73fab71fc5ab4ac3f9bd0564a0.png)

You can:

- Enable or disable simulation auto-start upon entry into preview mode.
- Enable or disable simulation auto-stop upon exit out of preview mode.

By configuring these options, it enables you to:

- Enter and exit preview mode with your world auto-simulating. This saves you from having to start simulation before entering preview mode, and having to stop simulation after leaving preview mode.
- Enter preview mode without simulation. This enables you to survey your world without requiring it to run for yourself, or for your in-world collaborators.
- Exit preview mode with simulation still running. This lets you:
  - Debug in the desktop editor.
  - Move entities.
  - Change world values.
  - Jump back into preview mode for immediate testing.

These auto-start and auto-stop settings persist across different worlds and sessions.

### [Setting the preview device](#setting-the-preview-device)

By default, when you preview your world, you’ll see it in the desktop editor. However, you can choose a different device for the preview if you choose. For example, you can choose to preview for Mobile, which adjusts the viewport and other characteristics of the previewing. Options are available the **Preview Configuration** panel:

![Preview device configuration menu](../../.assets/images/9e18e61ef5f85ce043a2ecf78194e54a97748219d4da3b3a1f90e40569070823.png)

You have the following preview device configuration options:

- **Preview device**: Select the type of device for which you are previewing. Select the desired device from the drop-down list.

  ![Preview device selection](../../.assets/images/23c13e8c797d2450ef08c429575b20484c7cf952efb8f2e9e0193489f3b9a06f.png)

  **Note**: You must publish your world at least once before you can preview on web or mobile.

- **Device model**: This is only visible with the **Preview device** option set to **mobile**. This allows you to simulate the look of an Android or iOS phone during preview mode which features common screen blocking elements such as rounded corners and a camera hole-punch or island.

  ![Preview device model selection](../../.assets/images/614215ccc791739a87caa284cfc7ab1b90866e67933886b9741201778f6bdc46.png)

- **Preview orientation**: Select the device orientation you wish to use when previewing your world. You can choose between landscape or portrait.

  ![Preview orientation selection](../../.assets/images/a2d93126f34c7b8158d80ac8ca1f65dcb51468a9eca8dd7056f54ac44b634078.png)

- **UI safe zone overlay**: When enabled, an overlay is displayed in the preview to indicate safe zones on the screen, which appear across all publishing platforms.

- **Preview actions**: There are three options for previewing your world for web or mobile.

  ![Preview actions](../../.assets/images/53e647f90db48072de8e3cbc3bd429b891331ee5555be721f69093990c3c55f0.png)

  These options are:

  | Icon                                                                                                                   | Option                  | Description                                                                                                            |
  | ---------------------------------------------------------------------------------------------------------------------- | ----------------------- | ---------------------------------------------------------------------------------------------------------------------- |
  | ![Send Link to Mobile icon](../../.assets/images/06faea0bdec36d4cfd765a87b2f3d6006d281a8a4a48780ddd8a1f6c1ddf8614.png) | **Send Link to Mobile** | Sends a link to the Meta Horizon app on your mobile devices, allowing you to preview your world on your mobile device. |
  | ![Open in Browser icon](../../.assets/images/d963635ded3cdbd0acfdfe87ba5c8678476f818e5208fd86969c0477fa28794c.png)     | **Open in Browser**     | Opens a preview build of the Horizon World in your default browser, providing an instant preview experience.           |
  | ![Copy Web Link icon](../../.assets/images/2d8030b468b170536c649583731a51c9d0b91a86512fd6434c8b5b0ff432a09e.png)       | **Copy Web Link**       | Copies a web link to the preview build to your clipboard, making it easy to share with others or access later.         |

### [Device Previews](#device-previews)

| Device                     | Preview (landscape)                                                                                                                    | Preview (portrait)                                                                                                                    |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| Web Preview                | ![Web preview in landscape orientation](../../.assets/images/6d246b18c6fc58a96a1092761ffa3d1c70d5c310f114a0c1ee3c601cf79008b8.jpg)     | Currently not yet supported                                                                                                           |
| Mobile Preview (iPhone 15) | ![iPhone preview in landscape orientation](../../.assets/images/4edf983d55ceae39d1f4adb371d0015db8d8ca045f1a4eda7cb56b3be17795fc.png)  | ![iPhone preview in portrait orientation](../../.assets/images/04c1ff9bbfa480b25d42807debadafe796814de4dea02869b639e0b2f1e060a7.png)  |
| Mobile Preview (Samsung)   | ![Samsung preview in landscape orientation](../../.assets/images/70240e30dc62fda48b64aa20567ba8cd6cdcf4acc11b0c1cae40f90839ae1976.png) | ![Samsung preview in portrait orientation](../../.assets/images/9bf27d00fdd343c0c479fa5440e40805e7a348325d4cb2c3b868010974060964.png) |

## [Other Preview options](#other-preview-options)

In addition using the standard preview mode option, the desktop editor also provides a **Preview from here** options. This provides you a specific location from where you can preview your world rather than from your world’s spawn point. It is an extension of the preview mode button on the top bar.

**To use Preview from here**

1. In your **Scene** panel, right-click and select **Preview from here**.

   ![Preview from here](../../.assets/images/2e1423ee2f2dc3fd661ad0c6732ade73f9d8772232ba674274794d0eeda98448.png)

2. You will enter into preview mode based on your current location. If your location is a non-traversable, non-collidable location such as the sky, then you’ll enter preview mode from your world’s spawn point.

   ![Previewing your world from a specific location](../../.assets/images/e7b97d633eab2af15a85706185d62a3fbd5cd05c7d72fe0ae6041f4a9b532270.png)

