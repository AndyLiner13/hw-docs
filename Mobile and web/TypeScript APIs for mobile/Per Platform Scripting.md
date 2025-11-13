Source: https://developers.meta.com/horizon-worlds/learn/documentation/create-for-web-and-mobile/typescript-apis-for-mobile/per-platform-scripting

# Per Platform Scripting

You can use TypeScript to identify the type of device that the user is playing on. Use the [**Player.deviceType** property](/hw-docs/Reference/core/Classes/Player.md) and the [PlayerDeviceType enum](/hw-docs/Reference/core/Classes/Player.md) in a switch block.

```
switch (player.deviceType.get()) {
  case PlayerDeviceType.VR:
    // ...
    break;
  case PlayerDeviceType.Desktop:
    // ...
    break;
  case PlayerDeviceType.Mobile:
    // ...
    break;
  default:
    // ...
    break;
}
```