Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_imagesource

# ImageSource Class

Represents the source of an image used by an [image](https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_image_2) component.

## Signature

```
export declare class ImageSource
```

## Remarks

In order to apply an image to an image component, the image must be uploaded to your asset library as a PNG.
For information about usage, see the [Image from Asset](https://developers.meta.com/horizon-worlds/learn/documentation/tutorials/tutorial-worlds/custom-ui-examples-tutorial/station-2-image-from-asset) section of the Custom UI Examples tutorial.

## Methods

|  |  |
| --- | --- |
| **fromPlayerAvatarExpression(player, expression)** static | Gets an image based on the player's avatar and expression.      Signature  ``` static fromPlayerAvatarExpression(player: Player, expression: AvatarImageExpressions): ImageSource; ```  Parameters  player: Player  The player to retrieve the avatar for.  expression: [AvatarImageExpressions](https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_avatarimageexpressions)  The expression to retrieve.  Returns  [ImageSource](https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_imagesource)  The image source for the given avatar and expression.  Remarks  Only works on Client. Make sure your Custom UI panel and script is local. |
| **fromTextureAsset(texture)** static | Gets an image based on a texture asset.      Signature  ``` static fromTextureAsset(texture: TextureAsset): ImageSource; ```  Parameters  texture: TextureAsset  The texture asset to use as the source.  Returns  [ImageSource](https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_imagesource)  The image source for the given texture asset. |