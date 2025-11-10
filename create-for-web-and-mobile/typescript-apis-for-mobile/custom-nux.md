Source: https://developers.meta.com/horizon-worlds/learn/documentation/create-for-web-and-mobile/typescript-apis-for-mobile/custom-nux

# Custom tutorial scripting

## Overview

The Custom Tutorial Scripting API allows developers to create custom tutorials for their worlds, providing a seamless and engaging onboarding experience for new visitors to your world. It offers a set of APIs that can be used to create and manage tutorials, including the ability to show info slides, trigger contol button prompts or tooltips and show a generic “toast” notification.

## Tutorial APIs

* [showInfoSlides](#showinfoslides-api)
* [showInputActionMessage](#showinputactionmessage-api)
* [showToastMessage](#showtoastmessage-api)

## showInfoSlides API

The ‘ShowInfo’ API allows developers to convey information to users via a series of connected modal windows, greatly enhancing the onboarding experience in your world. It can be used to display welcome messages, provide critical updates, or deliver important instructions, ensuring users are well-informed about key aspects or new features in your world.

Each info slide can have a localizable title, message, and image. The image is a texture asset with either (width: 808 height: 412) size or (width: 920 height: 280) size in case it’s a header image. To add an image and get the image URI please follow [instructions](https://developers.meta.com/horizon-worlds/learn/documentation/create-for-web-and-mobile/grabbable-entities/custom-action-button-icons#uploading-a-custom-texture). The image will be scaled to fit the panel size. The title and message are localizable strings that can be translated into different languages.

### Example

The following example shows how to use the showInfoSlides API.

For more details on the showInfoSlides API, check out our API documentation [here](https://horizon.meta.com/resources/scripting-api/core.player.showinfoslides.md/?api_version=2.0.0).

![Header banner image example (920x280px)](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/558872447_833836062487680_3331638341245000339_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=VfRPgP-Fkn8Q7kNvwH8h5-z&_nc_oc=Adk0uH4eCtqZ07myNnnFW3FiWxL7Z6P5n0wYRaV9eMy9nj84mrIK9aixKkTybVqp9ps&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=IMQA7LhwfrPxKZLDRsDU2Q&oh=00_AfiFqrb6C_myYnF8ZzP23Bx9r56qX3SMHbYYHDSXWZIJIw&oe=692BE09E)![Body image example (808x412px)](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/558900220_833836052487681_5410462258312771932_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=zkroDyUFI-wQ7kNvwGhTIxW&_nc_oc=AdnLxiQ2ZrUJwRDIuG4ZTEi_bCi2RFnJW0E5pzJlhOwfK0yjZLkg0y0DVaNlsb_V_CM&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=IMQA7LhwfrPxKZLDRsDU2Q&oh=00_AfipLmiqTVdF5rQ7KdjYeh3PYaIQd7AFGK-2PHfyDhY8Ow&oe=692C0FDA)

```vs
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

![showInputActionMessage visual example](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/561226697_833836059154347_4527799755674034331_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=iSMqw2w-7mYQ7kNvwGGV24z&_nc_oc=AdkgIhX40tRjFMPwd-ZmGH37YtDUkSWfW7o69IqEwund-DZV21MZ-CpIOIm11_3RLu4&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=IMQA7LhwfrPxKZLDRsDU2Q&oh=00_AfhBl0BKnYMweE1Ba_pl69B6yMs6rOOkOiZIqftfF4WWWQ&oe=692C0510)

```vs
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

![showToastMessage visual example](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/558140314_833836065821013_5361870452485499782_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=Pm1q653zgfYQ7kNvwHgreZY&_nc_oc=AdnSENTv-GI6bdGQ748RUATkWBoEB3ZUFd1cBYKdsQhaz7V0xTnO7r8A3sq9kr0KdNI&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=IMQA7LhwfrPxKZLDRsDU2Q&oh=00_AfiZdUEGqrDyMQAtMFYmTjhMMNZcCu5cahliQxpnt1S-gQ&oe=692BF1AE)

```vs
player.showToastMessage(
  'This is a custom announcement!',
  5000, // duration in ms
);
```