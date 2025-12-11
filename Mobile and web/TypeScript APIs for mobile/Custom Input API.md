Source: https://developers.meta.com/horizon-worlds/learn/documentation/create-for-web-and-mobile/typescript-apis-for-mobile/custom-input-api

# Custom Input API

**Note**: This feature requires [local scripting](../../Scripting/Local%20scripting/Getting%20Started%20with%20Local%20Scripting.md).

## Overview

Meta Horizon Worlds custom input APIs are a set of interfaces that provide support for Meta Horizon World web and mobile. This is a version of Meta Horizon Worlds that can be accessed on non-VR devices such as desktop computers and smartphones. These custom input APIs allow you to bind player input actions to keyboard controls on PCs, and to on-screen controls on mobile devices.

This document shows you how you can use the Custom Input APIs to add a custom game-play input action, and demonstrates how to enable the player to jump when the user presses the spacebar on a PC keyboard, or when the user presses a button that is not associated with a grabbable entity. A detailed code example is provided at the end of this doc.

## Custom input APIs

The custom input APIs (class, methods, and an enumeration) used in this example are introduced below. More specific details on each one are available in the [Meta Horizon Worlds API reference](https://horizon.meta.com/resources/scripting-api/core.playercontrols.md/?api_version=2.0.0) documentation.

### Class

The [`PlayerControls` class](https://horizon.meta.com/resources/scripting-api/core.playercontrols.md/?api_version=2.0.0) provides static methods to bind and query data about custom player input bindings.

### Methods

**Note**: The PlayerControls methods fail if you call them on the server. Make sure to set your scripts Execution Mode to *Local* , and in your script, set the Player as the owner of the entity that the script component is attached to.

#### connectLocalInput()

The [PlayerControls.connectLocalInput()](https://horizon.meta.com/resources/scripting-api/core.playercontrols.connectlocalinput.md/?api_version=2.0.0) method connects to input events for the local player. On mobile platforms, which display on-screen buttons for actions, this causes a button to be displayed with the [specified icon](https://horizon.meta.com/resources/scripting-api/core.buttonicon.md/?api_version=2.0.0). This method also takes an optional [options](https://horizon.meta.com/resources/scripting-api/core.playercontrolsconnectoptions.md/?api_version=2.0.0) parameter object. You can use it to:

* Set the default [placement](https://horizon.meta.com/resources/scripting-api/core.buttonplacement.md/?api_version=2.0.0) of on-screen buttons.
* Specify the use of a [disposable object](https://horizon.meta.com/resources/scripting-api/core.disposableobject.md/?api_version=2.0.0) that sets any additional dispose-time operations.

Additionally, you can use this method to receive the values of the left joystick; by subscribing to `PlayerInputAction.LeftXAxis` and `PlayerInputAction.LeftYAxis` a value will be returned based on the thumbstick position in the range of [-1,1].

**Note**: On-screen buttons also appear on the PC desktop, but they’re not clickable; they just display the action keybind.

#### getPlatformKeyNames()

The [PlayerControls.getPlatformKeyNames()](https://horizon.meta.com/resources/scripting-api/core.playercontrols.getplatformkeynames.md/?api_version=2.0.0) method returns a list of names that represent the physical buttons or keys bound to specified actions.

#### isInputActionSupported()

The [PlayerControls.isInputActionSupported()](https://horizon.meta.com/resources/scripting-api/core.playercontrols.isinputactionsupported.md/?api_version=2.0.0) method returns a Boolen value that indicates whether the action is supported on the current platform.

**Note**: Connecting to an unsupported input is allowed, but the input never becomes active, and its axis value remains 0.

#### disableSystemControls() / enableSystemControls()

The [PlayerControls.disableSystemControls()](https://horizon.meta.com/resources/scripting-api/core.playercontrols.disablesystemcontrols.md/) and [PlayerControls.enableSystemControls()](https://horizon.meta.com/resources/scripting-api/core.playercontrols.enablesystemcontrols.md/) methods can be used to disable and enable the onscreen buttons for mobile players. These methods must be called on a script attached to an object which is owned by the player, where the script Execution Mode is set to Local. For example:

```
// This script Execution Mode must be set to Local.
import * as hz from 'horizon/core';

class DisableControls extends hz.Component {
  static propsDefinition = {};

  // Automatically called when the world starts.
  start() {
    // Disables the onscreen buttons for the mobile player who is set to the owner of the object this script is attached to.
    PlayerControls.disableSystemControls();
  }
}
```

### Enumeration

#### PlayerInputAction

[PlayerInputAction](https://horizon.meta.com/resources/scripting-api/core.playerinputaction.md/?api_version=2.0.0) is defined as an enumeration. The enumeration lists the 15 available actions for input. They specify the Input Action Name, Index, associated Oculus Touch button, associated Desktop key, and Mobile button values for each of the indexed items.

**Note**: Bindings on the Oculus touch controller can be changed in the settings for the Jump input game options.There are three options to choose from.

## Custom Input Code Example

The TypeScript code example below demonstrates the PlayerControls methods and enumeration for creating a gameplay action. It shows how to configure the player input code to listen for a Jump action that occurs when the user presses the spacebar on a PC keyboard.

The following procedure explains how to access this example so you can see working code.

### Setting Up the Script

- You must set the script’s running mode to run locally, not on the server (the default).
- In your script, when the Player enters the world, set the Player as the owner of the entity that the script component is attached to.

### Custom Input Script

This script code demonstrates:

- How to set the entity owner to the Player, giving the client ownership of the entity that the script is attached to.
- Setting the on-screen button placement.
- Testing to see if the Jump input action is supported on this platform.
- Connecting the local input to the Jump action, and setting the on-screen icon.
- Registering to receive the Jump action when the Player presses the spacebar on a PC keyboard.

Comments are included in the following code example to help explain what code blocks accomplish. Logging statements appear at various places in the code to help in debugging.

**Tip**: If you run this script in VS Code, you can peruse the API definitions in the Meta Horizon Worlds library. Position your cursor on `horizon/core` in the import statement, and then press F12.

```
import * as hz from 'horizon/core';

class SimpleInputAPITest extends hz.Component {
  static propsDefinition = {};

  // Defines a variable for holding a player input action.
  input?: hz.PlayerInput;

  // Automatically called when the world starts.
  start() {
    // Check the Horizon Editor's Console pane for progress
    // messages like this one.
    console.log('Registering the player entering the world.');

    // Register to receive the OnPlayerEnterWorld event.
    this.connectCodeBlockEvent(
      this.entity,
      hz.CodeBlockEvents.OnPlayerEnterWorld,
      player => {
        console.log('Setting entity Owner ' + player.id);
        this.entity.owner.set(player);
      },
    );

    // This script must run on the client.
    if (this.entity.owner.get().id != this.world.getServerPlayer().id) {
      const options = {preferredButtonPlacement: hz.ButtonPlacement.Center};

      // Test that the jump action is supported.
      if (hz.PlayerControls.isInputActionSupported(hz.PlayerInputAction.Jump)) {
        // Set player input to the jump action, set the on-screen button
        // icon to the jump icon, and set the button placement to center.
        // third parameter is the disposableObject, which is set to "this".
        this.input = hz.PlayerControls.connectLocalInput(
          hz.PlayerInputAction.Jump,
          hz.ButtonIcon.Jump,
          this,
          options,
        );

        // Register to receive the jump action when the player presses the spacebar.
        this.input.registerCallback((action, pressed) => {
          // Set spacebar to the jump action.
          const keyName = hz.PlayerControls.getPlatformKeyNames(action)[0];
          console.log('Action pressed callback', action, keyName, pressed);
        });
      }
    }
  }
}

hz.Component.register(SimpleInputAPITest);
```

## How to modify this script for other input actions

For simplicity, this code example demonstrates only one input action. You can modify the code to listen for other input actions. Change the PlayerInputActions enum value passed to isInputActionSupported(), connectLocalInput(), and getPlatformKeyNames().

## Adding Custom Icons to Buttons

You can now add your own images to input actions which are configured using [PlayerControls.connectLocalInput()](https://horizon.meta.com/resources/scripting-api/core.playercontrols.connectlocalinput.md). These greatly contribute to making your world more unique and immersive.

### Obtaining a Texture Asset

To add a custom icon, you need a texture asset. Upload any image to your asset folder and reference it in your code. From this asset, you can obtain the asset ID, which is required for the icon.

* **(Recommended)** Define a [texture asset in your script properties](../../Tutorials/Custom%20UI%20Examples%20tutorial/Station%202%20-%20Image%20from%20Asset.md#station02-imagefromasset). This allows you to use the asset picker GUI in the script inspector for easier selection.
* Alternatively, you can directly reference the texture asset’s ID in your code. This approach is less flexible but also valid.

![Properties panel showing the textureAsset property](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/487726045_686408240563797_5149593947553231907_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=6fIZDdnllTMQ7kNvwE5CLee&_nc_oc=AdlexlQUv7aXC7CWpg4yU1L6jZSnxMFNvAh-9_MwYIEPdPQodNsJaqcuWKU1PmmjCZ0&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=pTu7jQfuKH8OOdCDEBcYZA&oh=00_AflhHUoGReKcwBjOZiJzvjJ9fDCf6fBFxbUA3NbtgKcqCg&oe=694BD3F0)

### Using the Texture Asset

The [connectLocalInput()](https://horizon.meta.com/resources/scripting-api/core.playercontrols.connectlocalinput.md/) function accepts an optional parameter of type [PlayerControlsConnectOptions](https://horizon.meta.com/resources/scripting-api/core.playercontrolsconnectoptions.md/). This parameter includes the optional field `customAssetIconId`. By setting `customAssetIconId` to the asset ID of your texture, the button will display the custom icon for the local player.

#### Example script

Here is an updated example of the previous script sample for Typescript. All previous comments have been removed and new comments have been added where the code changed to highlight the differences.

Make sure you attach the script to an entity and assign the **iconAsset** field to a texture asset.

```
import * as hz from 'horizon/core';

// We updated the class extension to "extends hz.Component<typeof SimpleInputAPITest>"
class SimpleInputAPITest extends hz.Component<typeof SimpleInputAPITest> {
  static propsDefinition = {
      // Define custom properties to be added to the entity's properties
      // This will let us use the asset picker on the "Properties" panel in the editor.
      iconAsset : {type: hz.PropTypes.Asset},
    };

  input?: hz.PlayerInput;

  start() {
    console.log('Registering the player entering the world.');

    this.connectCodeBlockEvent(
      this.entity,
      hz.CodeBlockEvents.OnPlayerEnterWorld,
      player => {
        console.log('Setting entity Owner ' + player.id);
        this.entity.owner.set(player);
      },
    );

    if (this.entity.owner.get().id != this.world.getServerPlayer().id) {
      const options = {
        preferredButtonPlacement: hz.ButtonPlacement.Center,
        // Set the icon to your custom jump icon using the "iconAsset" prop we defined at the top of this script.
        // We also handle the case where the icon is not set, in which case it'll fall back to the default jump icon.
        customAssetIconId: this.props.iconAsset?.id.toString() ?? undefined,
        // Alternatively, you can replace this with the copied Asset ID which would look like this:
        // customAssetIconId: "123456789012345",
      };

      if (hz.PlayerControls.isInputActionSupported(hz.PlayerInputAction.Jump)) {
        this.input = hz.PlayerControls.connectLocalInput(
          hz.PlayerInputAction.Jump,
          hz.ButtonIcon.Jump,
          this,
          options,
        );

        this.input.registerCallback((action, pressed) => {
          const keyName = hz.PlayerControls.getPlatformKeyNames(action)[0];
          console.log('Action pressed callback', action, keyName, pressed);
        });
      }
    }
  }
}

hz.Component.register(SimpleInputAPITest);
```