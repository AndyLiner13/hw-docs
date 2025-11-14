Source: https://developers.meta.com/horizon-worlds/learn/documentation/create-for-web-and-mobile/typescript-apis-for-mobile/throwing

# Throwing

A grabbable object that is being held by a player can be thrown with the standard controls for throwing grabbable objects on web and mobile (enabled by default). It is possible to override these standard controls in order to trigger throwing of a held object and to customize the throwing arc.

To disable the standard throwing controls you can set Enable Throwing Controls (Web & Mobile) to off:

![alt text](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452653336_512535234617766_1315218671583337035_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=qF8vooaqKf8Q7kNvwHWWxAN&_nc_oc=AdkXzHnKcQYR_CEPOVJ0QOj_TJSZUHRUlNuL6c8gFTV01uT2h7cw6EBZzIpIJN43GOQ&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=-SKebHDn5K4-nZFRDDg3IQ&oh=00_AfgZNuYOhCPwd43aFVOYUqfvJxsv4akibLsyihKFqL5cCg&oe=693126D8)

The [Player.throwHeldItem method](/hw-docs/Reference/core/Classes/Player.md#throwhelditem) is used to throw an object. When calling this method, the [ThrowOptions type](/hw-docs/Reference/core/Type%20Aliases/ThrowOptions.md) defines the properties for customizing how an object is thrown. The default values are defined by the [DefaultThrowOptions variable](/hw-docs/Reference/core/Variables/DefaultThrowOptions.md).

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