Source: https://developers.meta.com/horizon-worlds/learn/documentation/create-for-web-and-mobile/typescript-apis-for-mobile/throwing

# Throwing

A grabbable object that is being held by a player can be thrown with the standard controls for throwing grabbable objects on web and mobile (enabled by default). It is possible to override these standard controls in order to trigger throwing of a held object and to customize the throwing arc.

To disable the standard throwing controls you can set Enable Throwing Controls (Web & Mobile) to off:

![alt text](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452653336_512535234617766_1315218671583337035_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=N2NNVjQDw60Q7kNvwEvt5Is&_nc_oc=AdmO3Mt70Ejv7SPmTIXKXtPLi3xAt1ZzHX-EJglB23V4U6DxrOMTdU04426oRw3PxphG4U5cGWIYz1Ei45PNoQzL&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=qGekp8qaXhQ8e39xSF73YA&oh=00_AfnifxF6h05D8krGdUIzUpQTATONkmW-IMdAHtcMgFpOuA&oe=6955A058)

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