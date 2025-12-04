Source: https://developers.meta.com/horizon-worlds/learn/documentation/create-for-web-and-mobile/typescript-apis-for-mobile/custom-nux

# Custom tutorial scripting

## Overview

The Custom Tutorial Scripting API allows developers to create custom tutorials for their worlds, providing a seamless and engaging onboarding experience for new visitors to your world. It offers a set of APIs that can be used to create and manage tutorials, including the ability to show info slides, trigger contol button prompts or tooltips and show a generic “toast” notification.

## Tutorial APIs

* [showInfoSlides](/hw-docs/Mobile%20and%20web/TypeScript%20APIs%20for%20mobile/Custom%20tutorial%20scripting.md#showinfoslides-api)
* [showInputActionMessage](/hw-docs/Mobile%20and%20web/TypeScript%20APIs%20for%20mobile/Custom%20tutorial%20scripting.md#showinputactionmessage-api)
* [showToastMessage](/hw-docs/Mobile%20and%20web/TypeScript%20APIs%20for%20mobile/Custom%20tutorial%20scripting.md#showtoastmessage-api)

## showInfoSlides API

The ‘ShowInfo’ API allows developers to convey information to users via a series of connected modal windows, greatly enhancing the onboarding experience in your world. It can be used to display welcome messages, provide critical updates, or deliver important instructions, ensuring users are well-informed about key aspects or new features in your world.

Each info slide can have a localizable title, message, and image. The image is a texture asset with either (width: 808 height: 412) size or (width: 920 height: 280) size in case it’s a header image. To add an image and get the image URI please follow [instructions](/hw-docs/Mobile%20and%20web/Grabbable%20entities/Custom%20Action%20Button%20Icons.md#uploading-a-custom-texture). The image will be scaled to fit the panel size. The title and message are localizable strings that can be translated into different languages.

### Example

The following example shows how to use the showInfoSlides API.

For more details on the showInfoSlides API, check out our API documentation [here](https://horizon.meta.com/resources/scripting-api/core.player.showinfoslides.md/?api_version=2.0.0).

![Header banner image example (920x280px)](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/558872447_833836062487680_3331638341245000339_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=S82MXiB2zDcQ7kNvwGpGmRO&_nc_oc=AdlsMmc6IzAfIWYnzmXtmtMg8Z8TUfqoroKqSNxQrWT3nJSzpLzctxeFaUw2xjWVShQ&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=f-sliAtRUI5fdDqUhhhQ6g&oh=00_Afkvb6aJwYVmTfMw9hiwBtwVkb8tKBA90NiYiHBQfE43_w&oe=694BBCDE)![Body image example (808x412px)](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/558900220_833836052487681_5410462258312771932_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=osV82w6jV7cQ7kNvwEfmoAg&_nc_oc=Adn5Hao2WUjR-fxzxpnxnDX9M-ARtfOwfjmnjay_ZJ6a2h_jnMstOgD1493QAPfhOGk&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=f-sliAtRUI5fdDqUhhhQ6g&oh=00_Afkb_iQDqwnZv0gy0SxJ_CFXxDanhrMcKTp7t_XlY46cTQ&oe=694BEC1A)

```
player.showInfoSlides([
  {
    title: 'Title Slide #1!',
    message: 'Image width: 920 height: 280',
    imageUri: 'YOUR_TEXTURE_ASSET_ID',
    style: {
      attachImageToHeader: true,
    },
  },
  {
    title: '',
    message: 'Image width: 808 height: 412',
    imageUri: 'YOUR_TEXTURE_ASSET_ID',
  },
]);
```

## showInputActionMessage API

The `showInputActionMessage` API enables developers to trigger an attention-grabbing animation and display a message above an on-screen button for a specified [player input action](https://horizon.meta.com/resources/scripting-api/core.playerinputaction.md/?api_version=2.0.0). This is particularly useful for button tooltips in timed action prompts and tutorials.

More details about the API can be found [here](https://horizon.meta.com/resources/scripting-api/core.player.showinputactionmessage.md/?api_version=2.0.0)

### Example

![showInputActionMessage visual example](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/561226697_833836059154347_4527799755674034331_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=3ddmfO7JOgAQ7kNvwG8neae&_nc_oc=AdmC1X_UC2LFCTbgR0txwK2p9q2nYd9TyQtMMaH8BZEW87eO2vWHmJbF_WsGMYZKouQ&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=f-sliAtRUI5fdDqUhhhQ6g&oh=00_Afnsm-KcgUn3xYcC78M8t__619YO6lKzGnass2ivwt0CQg&oe=694BE150)

```
player.showInputActionMessage(
  PlayerInputAction.Jump,
  'Tap to do something cool!',
  5000, // duration in ms
);
```

## showToastMessage API

The `showToastMessage` API allows you to show a generic toast message notification at the top of the screen. The toast message can be used to display a message to the player, such as an alert, notification, or helpful onboarding message. The toast message is displayed for a set duration and then it disappears.

More details about the API can be found [here](https://horizon.meta.com/resources/scripting-api/core.player.showtoastmessage.md/?api_version=2.0.0)

### Example

![showToastMessage visual example](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/558140314_833836065821013_5361870452485499782_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=Ym7wkLZCuzsQ7kNvwF22QEx&_nc_oc=Adm9S9w7cVn96GizQ5DHIY8ZExk5OA7m7mXl9SpIKy7WA7JUV3Mz6gk25M1oSVA_m7A&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=f-sliAtRUI5fdDqUhhhQ6g&oh=00_AfmNlMQO8EIxGE5gs-0YH_OutySpSrhVbg9QJojMd3bpRg&oe=694BCDEE)

```
player.showToastMessage(
  'This is a custom announcement!',
  5000, // duration in ms
);
```