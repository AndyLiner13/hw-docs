---
source: https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/getting-started/preview-mode
---

# Preview mode

You can click the play button to enter preview mode.

![The Play button](../../_assets/images/b190a36f018b7e930a0076997c3c9b3e15adba4a1c23e5bc61b988eb59c91713.png)

When you enter preview mode, you will start at your world’s spawn point. If an avatar is present, you can move it around a bit using the arrow keys to get a feel for how your users will experience your world. You can also change the direction the avatar faces using your mouse.

**Note**: The avatar displayed in the playtest will probably be your own personal avatar. In the actual game, the avatar of the user will be used.

![Moving your avatar around the scene.](../../_assets/images/1e8bfb8fb1a8d35b4a8e2e1cd68e54c0b72238a05edc4d84eacf2412f80cc61e.png)

## Configuring your preview

You can also configure aspects of the preview mode using the preview mode **Settings** button.

![The Preview Settings options](../../_assets/images/8aa6451b18dff59c2add695716e066d0725dfedeef4cd45034139b38df96cbd1.png)

### Auto-stop and Auto-start

You can configure when world simulation automatically starts and ends. This allows you to begin editing your world right away after switching out of preview mode.

![The auto-start and auto-stop options](../../_assets/images/1de0aefa9641004a6bfd6fa35eda0c5fdfb57f73fab71fc5ab4ac3f9bd0564a0.png)

You can:

* Enable or disable simulation auto-start upon entry into preview mode.
* Enable or disable simulation auto-stop upon exit out of preview mode.

By configuring these options, it enables you to:

* Enter and exit preview mode with your world auto-simulating. This saves you from having to start simulation before entering preview mode, and having to stop simulation after leaving preview mode.
* Enter preview mode without simulation. This enables you to survey your world without requiring it to run for yourself, or for your in-world collaborators.
* Exit preview mode with simulation still running. This lets you:
  + Debug in the desktop editor.
  + Move entities.
  + Change world values.
  + Jump back into preview mode for immediate testing.

These auto-start and auto-stop settings persist across different worlds and sessions.

### Setting the preview device

By default, when you preview your world, you’ll see it in the desktop editor. However, you can choose a different device for the preview if you choose. For example, you can choose to preview for Mobile, which adjusts the viewport and other characteristics of the previewing. Options are available the **Preview Configuration** panel:

![Preview device configuration menu](../../_assets/images/9e18e61ef5f85ce043a2ecf78194e54a97748219d4da3b3a1f90e40569070823.png)

You have the following preview device configuration options:

* **Preview device**: Select the type of device for which you are previewing. Select the desired device from the drop-down list.

  ![Preview device selection](../../_assets/images/23c13e8c797d2450ef08c429575b20484c7cf952efb8f2e9e0193489f3b9a06f.png)

  **Note**: You must publish your world at least once before you can preview on web or mobile.
* **Device model**: This is only visible with the **Preview device** option set to **mobile**. This allows you to simulate the look of an Android or iOS phone during preview mode which features common screen blocking elements such as rounded corners and a camera hole-punch or island.

  ![Preview device model selection](../../_assets/images/614215ccc791739a87caa284cfc7ab1b90866e67933886b9741201778f6bdc46.png)
* **Preview orientation**: Select the device orientation you wish to use when previewing your world. You can choose between landscape or portrait.

  ![Preview orientation selection](../../_assets/images/a2d93126f34c7b8158d80ac8ca1f65dcb51468a9eca8dd7056f54ac44b634078.png)
* **UI safe zone overlay**: When enabled, an overlay is displayed in the preview to indicate safe zones on the screen, which appear across all publishing platforms.
* **Preview actions**: There are three options for previewing your world for web or mobile.

  ![Preview actions](../../_assets/images/53e647f90db48072de8e3cbc3bd429b891331ee5555be721f69093990c3c55f0.png)

  These options are:

  | Icon | Option | Description |
  | --- | --- | --- |
  | Send Link to Mobile icon | **Send Link to Mobile** | Sends a link to the Meta Horizon app on your mobile devices, allowing you to preview your world on your mobile device. |
  | Open in Browser icon | **Open in Browser** | Opens a preview build of the Horizon World in your default browser, providing an instant preview experience. |
  | Copy Web Link icon | **Copy Web Link** | Copies a web link to the preview build to your clipboard, making it easy to share with others or access later. |

### Device Previews

| Device | Preview (landscape) | Preview (portrait) |
| --- | --- | --- |
| Web Preview | Web preview in landscape orientation | Currently not yet supported |
| Mobile Preview (iPhone 15) | iPhone preview in landscape orientation | iPhone preview in portrait orientation |
| Mobile Preview (Samsung) | Samsung preview in landscape orientation | Samsung preview in portrait orientation |

## Other Preview options

In addition using the standard preview mode option, the desktop editor also provides a **Preview from here** options. This provides you a specific location from where you can preview your world rather than from your world’s spawn point. It is an extension of the preview mode button on the top bar.

**To use Preview from here**

- In your **Scene** panel, right-click and select **Preview from here**.

  ![Preview from here](../../_assets/images/2e1423ee2f2dc3fd661ad0c6732ade73f9d8772232ba674274794d0eeda98448.png)
- You will enter into preview mode based on your current location. If your location is a non-traversable, non-collidable location such as the sky, then you’ll enter preview mode from your world’s spawn point.

  ![Previewing your world from a specific location](../../_assets/images/bc93670ec10d75dfb2957c379910d18142f1202022708524cbe30842eef6cd1a.png)