Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/getting-started/getting-started-with-tutorials/test-your-world

# Test Your World

During development, you are likely to be regularly testing your world. This page outlines some approaches for testing.

## Desktop Editor Testing

When you are building in the desktop editor, you can immediately preview the results in the application.

### Previewing toolbar

At the top of the application, you should see the following toolbar:

<details>
<summary>Previewing Toolbar</summary>

<p></p>

[Previewing Toolbar](../../../image_data/9fff9a6f0ca769b8d418cef4cfafee2875a060b2f4afde68eb2382e007542546.md)

### Overview
This image displays a user interface segment with various interactive elements arranged horizontally against a dark background. The layout includes a series of buttons and a toggle switch.

### Key Elements
- **Play Button**: Located on the far left, it is a rounded rectangle with a white play icon inside a white triangle pointing right.
- **Square Button**: Positioned next to the play button, it is a small square with a white fill.
- **Menu Button**: Situated to the right of the square button, it is a rounded rectangle with vertical dots indicating a menu.
- **Toggle Switch**: On the far right, it has a green checkmark on the left side, followed by a globe icon, the text "World Sim Off," and a circular arrow icon on the right side.
- **Background**: The entire area is a dark grayish-blue.

### Visual Flow / Relationships
The elements are arranged horizontally from left to right. The play button, square button, and menu button are grouped together on the left side. The toggle switch is positioned on the right side, creating a clear visual separation between the two groups. There are no connecting lines or arrows, suggesting a linear reading order moving from left to right.

</details>

<p></p>



#### Playback tools

The three tools on the left control playback of the simulation.

| **Tool** | **Description** |
| --- | --- |
| Play button | When you press play, you enter Preview mode and optionally start the world simulation.   In Preview mode, your avatar is dropped into the world at a spawn point, allowing you to explore the world to test various aspects of it.   When Preview mode is launched, the `onPlayerEnterWorld` Code Block Event is triggered, which allows you to test it. Similarly, when you exit Preview mode, the `onPlayerExitWorld` event is triggered.   You can also test other player-driven events in the world, such as Custom UIs, collision, navigation, and trigger-based activities.  **Tip**: In the Main panel of the desktop editor, you can preview from any location. Right-click an entity or a location in the world and select **Preview from here**. |
| If you have configured preview to do so, the Play button may also launch the world simulation. See below. |  |
| Stop button | The Stop button ends execution of the simulation, including script execution. |
| Context menu | Open the context menu to configure previewing. See below. |

If you are collaborating with other people, enabling these options can be disruptive to others’ work in the same world.

| **Option** | **Description** |
| --- | --- |
| Auto-start simulation on preview entry | When enabled, entering Preview mode also presses the Play button. |
| Auto-stop simulation on preview exit | When enabled, exiting Preview mode also presses the Stop button.   When the simulation is stopped, you may lose contextual information from the playback. |

For more information, see [Preview Mode](../../../Desktop%20editor/Get%20started%20with%20Desktop%20Editor/Preview%20mode.md).

#### Simulation tools

| **Tool** | **Description** |
| --- | --- |
| World simulation | When world simulation is turned on, the following occurs:  - Initializes the entities in the world.  - Runs all active scripts in the world.   When a world is first loaded in the desktop editor, the simulation is launched. The scripts continue to execute as long the simulation is playing.  - Starts physics simulation. |
| When world simulation is turned off, no world scripts are executed, which allows you to explore the world with your avatar without any code-related actions. |  |
| Reset button | The Reset button restarts the simulation from the beginning, including resetting of any runtime variables. |

### Console logging

In TypeScript, you can push messages through code to the Console log in the desktop editor.

<details>
<summary>Console logging</summary>

<p></p>

[Console logging](../../../image_data/5fa425da8a79d6011bffa041c924d6a7e6bfee1f6d97cc0272c83c3851ca9935.md)

### Overview
This image depicts a console interface within a software application, likely related to game development or asset management. The interface includes a message log and some status indicators at the top.

### Key Elements
- **Top Bar**: Located at the very top, spans the width of the interface. Contains tabs labeled "Assets" and "Console," with the "Console" tab currently active.
- **Status Indicators**: Positioned just below the top bar, showing three icons with numbers next to them:
  - **Info Icon**: Displays "i 4" indicating four informational messages.
  - **Warning Icon**: Displays "⚠️ 0" indicating zero warnings.
  - **Error Icon**: Displays "❌ 0" indicating zero errors.
- **Clear Button**: A button labeled "Clear" is located to the left of the status indicators.
- **Message Log**: Below the status indicators, there is a log of messages with timestamps and icons:
  - **Info Icon**: Used for informational messages.
  - **Timestamps**: Each message has a timestamp next to it, e.g., "12:52:09."
  - **Message Content**: Messages include actions such as "deleted player: SteveONo..." and "added player: SteveONo..."

### Visual Flow / Relationships
The most prominent visual elements are the messages in the log, which are arranged vertically. The status indicators are positioned horizontally above the message log. The clear button is aligned to the left of the status indicators. The messages are read from top to bottom, with the most recent messages appearing at the bottom.

</details>

<p></p>



#### Example:

The added message above is pushed to the console as part of the function that responds to the player entering the world. The code looks like the following:

```
console.log(`added player ${player.name.get()}`);
```

You can also issue warn and error logging:

```
console.warn('Game resources at 90%!');
console.error('Cannot spawn the Terrible Turtle!');
```

Console logging is an important debugging tool in the desktop editor.

## Testing Loop

* Review the Preview configuration controls before beginning a testing session. See previous.
* When you are building and making changes, **press the Stop button**.
* Avoid making too many changes before retesting.
* When you are ready to test:
  + **Press the Reset button** to re-initialize the simulation.
  + **Press the Play button** to begin simulation.
    - Review console messages as needed.
  + **Press the Preview mode button** to drop in and explore.
    - Review console messages as needed.
  + Be direct in what you explore.
* To stop previewing, **press ESC**. You are returned to Build mode.
* Make changes in your assets or TypeScript.
* Repeat.
* Periodically, you should test your world in VR.
* If you are developing for mobile, you should regularly test on a mobile device.

## Testing in VR

**Tip**: Periodically, you should test in VR.

Testing in VR typically focuses on refinements to your world. You can verify things like:

* Entities are placed in the correct location. No unexpected gaps have been created.
* Collision volumes work as expected.
* Navigation volumes work as expected.
* Gameplay is functioning properly.
* Physics of entities and avatars works as expected.
* Overall experience is satisfying.

In the VR headset, you can enable a set of runtime utilities in your wrist.

* In the headset, click the menu button on the left controller.
* Click the **Settings icon**.
* Click the **Utilities tab**.
* Select **Turn on utilities menu**.

The Utilities menu is now available in your avatar’s wrist when you are in VR.

<details>
<summary>Utilities menu</summary>

<p></p>

[Utilities menu](../../../image_data/88baeb1c4e6ac53375d2a13fabff0bb22a0cfacfdfc23584a7d5351d2d78b9b0.md)

### Overview
The image depicts a first-person view within a virtual environment, likely a game or simulation. The foreground shows a hand holding a device with a menu interface, while the background features a wooden structure resembling a house or shed. The scene is outdoors, with green grass and trees visible in the distance under a clear blue sky.

### Key Elements
- **Hand and Device**: A hand is holding a device with a circular interface. The device has a white background with rounded edges and displays text and icons.
  - **Text**: "Utilities," "Tracing," "HUD Metrics," "Collision."
  - **Icons**: A shield icon, a camera icon, and a microphone icon appear below the text.
  - **Colors**: White background, blue gradient at the bottom, black icons.
- **Background Structure**: A wooden structure with a door and a small balcony is visible.
  - **Details**: The structure has a light brown wood texture, a dark brown door, and a small window.
- **Foreground**: The ground is green, suggesting grass.
- **Sky and Trees**: The sky is a clear blue, and there are green trees in the distance.

### Visual Flow / Relationships
- **Most Prominent**: The hand and device are the focal point, drawing attention to the utility menu.
- **Arrows/Connectors**: None.
- **Spatial Relationships**: The hand and device are in the foreground, the wooden structure is in the mid-ground, and the sky and trees form the background.

</details>

<p></p>



### Open Your World

* In the headset, click the menu button on the right controller.
* From the toolbar, launch your preferred development environment.
* Click the menu button on the left controller.
* In the toolbar, click the **Create button**.
* Select your world to edit.
* Your world is opened for editing. You are placed initially in Preview mode, which simulates a player exploring it.

### Build Mode in VR

In Build mode, you can perform edits to your world while you are in the headset.

**You cannot edit TypeScript in VR.**

* To enter Build mode, pull down and hold on the right thumbstick while in VR.
* To exit Build mode and return to Preview mode, push Up on the left thumbstick.
* To exit your world, switch to Preview mode. Press the menu button on the left controller. Then, from the context menu select **Shutdown Server**. Your changes are saved, and the world is shut down to all users.

## Testing in Mobile

For more information on setting up a testing environment for mobile and web, see [Preview device](../../../Desktop%20editor/Get%20started%20with%20Desktop%20Editor/Preview%20mode.md#preview-device).