Source: https://developers.meta.com/horizon-worlds/learn/documentation/create-for-web-and-mobile/typescript-apis-for-mobile/throwing

# Throwing

A grabbable object that is being held by a player can be thrown with the standard controls for throwing grabbable objects on web and mobile (enabled by default). It is possible to override these standard controls in order to trigger throwing of a held object and to customize the throwing arc.

To disable the standard throwing controls you can set Enable Throwing Controls (Web & Mobile) to off:

<details>
<summary>alt text</summary>

<p></p>

[alt text](../../image_data/a4e486c4c6c34563618ed4b3e39fc8bce0c2f52b95aca8082c5709bf22efc80a.md)

### Overview
This image displays a settings interface with various toggle switches and dropdown menus. The focus is on a specific toggle switch labeled "Enable Throwing Controls (Web & Mobi...". The interface has a dark theme with light text and a red highlight around the toggle switch.

### Key Elements
- **Toggle Switch**: Located centrally within a red highlighted area. It is a rectangular button with rounded corners, featuring a white background and a black border. The toggle switch is currently in the 'Off' position, indicated by the white square on the left side.
- **Label**: Positioned above the toggle switch, reads "Enable Throwing Controls (Web & Mobi...". The text is in a lighter shade of gray compared to the rest of the interface.
- **Dropdown Menu**: To the right of the toggle switch, there is a dropdown menu with the word "Dot" selected. The dropdown arrow is pointing downwards.
- **Other Settings**: Below the toggle switch, there are two additional settings labeled "Avatar Attachable" and "Keep Ownership On Collision". Each has its own toggle switch, both currently set to "Off".

### Visual Flow / Relationships
The most prominent visual element is the toggle switch under "Enable Throwing Controls". The red highlight draws attention to this specific setting. The layout follows a vertical arrangement with each setting grouped together horizontally. There are no arrows or lines connecting the elements, suggesting a linear reading order from top to bottom.

</details>

<p></p>



The [Player.throwHeldItem method](../../Reference/core/Classes/Player.md#throwhelditem) is used to throw an object. When calling this method, the [ThrowOptions type](../../Reference/core/Type%20Aliases/ThrowOptions.md) defines the properties for customizing how an object is thrown. The default values are defined by the [DefaultThrowOptions variable](../../Reference/core/Variables/DefaultThrowOptions.md).

Here’s an example that makes the player throw an object when they press the primary button on web and mobile.

```
this.connectCodeBlockEvent(this.entity, hz.CodeBlockEvents.OnIndexTriggerDown, (player: hz.Player)=> {
  // Ignore on VR devices
  if (player.deviceType.get() == hz.PlayerDeviceType.VR) {
    return;
  }

  // Setup the throw options
  let opt = {
    speed: 25,
    pitch: 30
  }

  // Calling Throw Held Item
  player.throwHeldItem(opt);

}
```