Source: https://developers.meta.com/horizon-worlds/learn/documentation/create-for-web-and-mobile/grabbable-entities/action-buttons

# Action Buttons

You can use the action icons system to determine which control icons are visible on mobile devices. You can select which icons are visible for grabbable entities by selecting the entity and then choosing the action icons for **Primary Action Icon**, **Secondary Action Icon**, and **Tertiary Action Icon**. Setting action icons for any of these is optional.

To select an action icon, click the **Primary Action Icon**, **Secondary Action Icon**, or **Tertiary Action Icon** dropdown, and then choose the most appropriate icon for the intended action. Selecting **None** removes the control from the screen. You should select **None** if you don’t intend to use Primary, Secondary, or Tertiary actions on the grabbable entity.

| VR Editor | Desktop Editor |
| --- | --- |
|  |  |

## Hide Action Buttons by default

This setting is available in the Player Settings in the desktop editor, or within the Player Settings of the Publishing menu when creating in VR.

Hide Action Buttons by Default will change the default visibility of action buttons for mobile players when a grabbable object is held.

* **Toggled on:** Hide the action buttons unless the action icons have been explicitly set in the object properties.
* **Toggle off:** All action buttons will be visible when holding a grabbable object, regardles of whether the action icons have been set.

<details>
<summary>action-buttons-default.png</summary>

<p></p>

[action-buttons-default.png](../../image_data/60166ad0c662a70e3fb28e87e306303494eef4bda2f71bc2929f6050f275a35a.md)

### Overview
This image depicts a settings dialog box titled "Player Settings." It contains various adjustable options related to game audio settings and player behavior. The interface has a dark theme with a blue accent color for interactive elements.

### Key Elements
- **Title**: "Player Settings" at the top-left corner.
- **Frame Budget Boost**: A toggle switch labeled "Default" with a description explaining its function.
- **Spawn Nearby**: A toggle switch with a description allowing players to spawn near others when joining a session.
- **Footsteps Volume**: A slider control set to 0 with a description adjusting the decibel boost of footstep audio.
- **Footsteps Min Distance**: A slider control set to 1 with a description adjusting the minimum attenuation distance of footstep audio in meters.
- **Footsteps Max Distance**: A slider control set to 100 with a description adjusting the maximum attenuation distance of footstep audio in meters.
- **Hide Action Buttons by Default**: A toggle switch with a description explaining that action buttons for grabbables can be hidden by default on mobile devices.

### Visual Flow / Relationships
The most prominent visual element is the "Hide Action Buttons by Default" option, highlighted with a red bounding box. The layout follows a vertical arrangement with options stacked one after another. There are no arrows or lines connecting elements, but the layout implies a sequential reading order from top to bottom.

</details>

<p></p>



## How to handle button presses

Each action button is hooked up to a scripting event and a CodeBlock event that fires when the player holds the grabbable entity with the script attached, and then presses the appropriate input action button. You can use script or CodeBlocks to catch these events, and then trigger functionality in the world.

| Action Button | Scripting Event | Codeblocks |
| --- | --- | --- |
| Primary | ScriptingIndexTriggerAction | When Trigger is pressed |
| Secondary | ScriptingButton1Action | When Button 1 is pressed |
| Tertiary | ScriptingButton2Action | When Button 2 is pressed |

#### How to handle custom inputs

> **Note:** Local Script required

As well as the grabbable based action icons (defined above), you can dynamically spawn icons that appear along a bar at the bottom of the screen, which can fire-off any given scripting event.

```
import {
  ButtonIcon,
  ButtonPlacement,
  PlayerControls,
  PlayerInput,
  PlayerInputAction,
} from 'horizon/core';
import * as hz from 'horizon/core';

class SimpleInputAPITest extends hz.Component {
  static propsDefinition = {};

  specialAbilityInput?: PlayerInput;

  start() {
    if (
      PlayerControls.isInputActionSupported(PlayerInputAction.RightSecondary)
    ) {
      // Maps to the F button on desktop
      this.specialAbilityInput = PlayerControls.connectLocalInput(
        PlayerInputAction.RightSecondary,
        ButtonIcon.Special,
        this,
        {preferredButtonPlacement: hz.ButtonPlacement.Center},
      );
      this.specialAbilityInput.registerCallback((action, pressed) => {
        // Fire Special Ability
      });
    }
  }
}

hz.Component.register(SimpleInputAPITest);
```

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/9ec7594908b65da2d38856506ccea8753e557939154b9689c5aeeabd04c0538f.md)

### Overview
This image depicts a first-person view within a virtual environment, likely from a video game or interactive simulation. The scene includes a character holding a weapon, with a user interface overlaying the game world. The environment features rocky terrain, palm trees, and a colorful sky with clouds.

### Key Elements
- **Character**: A figure with long hair, wearing a green jacket and black pants, is seen from behind, holding a gun-like object.
- **Weapon**: The character is holding a gun with a green and black design, positioned in the right hand.
- **User Interface Elements**:
  - **Top Left**: Two circular icons, one with a microphone symbol and another with three dots.
  - **Top Center**: A curved progress bar with a timer showing "0:00," indicating no time has elapsed yet.
  - **Top Right**: A menu icon represented by three horizontal lines.
  - **Bottom Center**: A red rectangular highlight around a circular icon with a lightning bolt symbol.
  - **Right Side**: Several circular icons with various symbols, including a pencil, a speaker, and a download arrow.
- **Background**: The environment consists of rocks, palm trees, and a vibrant sky with purple and pink hues.

### Visual Flow / Relationships
The most prominent visual element is the character holding the weapon, as the player's perspective is centered on them. The user interface elements are arranged around the edges of the screen, providing quick access to various functions. The red highlight draws attention to the lightning bolt icon, suggesting it might be the current focus or action being performed.

</details>

<p></p>



In the above screen shot, the icon is hidden when no special ability is available.

```
this.specialAbilityInput?.disconnect();
```

You can summon multiple buttons on this bar to provide a broad range of available inputs for mobile.

## Available Action Icons

The pool of available icons grows continually. The following table lists examples of the icons that you can select for controls on web and mobile.

| Ability | Aim | Call Overlay | Close | Contract | Door | Drink |
| --- | --- | --- | --- | --- | --- | --- |
| Drop | Eat | Emotes | Exit Full screen | Exit Meta Horizon Worlds | Expand | Fire |
| Fire Special | Grab | Home | Information | Inspect | Interact | Jump |
| Left Chevron | Map | Menu | Mouse Left | Mouse Middle | Mouse Right | Mouse Scroll |
| Pause | Ping | PUI | Punch | Purchase | Reload | Report Bug |
| Right Chevron | Rocket | Rocket Jump | Shield | Speak | Special | Sprint |
| Swap | Swing Weapon | Throw | Unholster | Use | World Chat |  |