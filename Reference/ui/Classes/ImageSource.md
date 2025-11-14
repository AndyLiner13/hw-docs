Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_imagesource

# ImageSource Class

Represents the source of an image used by an [image](/hw-docs/Reference/ui/Functions/Image_2.md) component.

## Signature

```
export declare class ImageSource
```

## Remarks

In order to apply an image to an image component, the image must be uploaded to your asset library as a PNG.
For information about usage, see the [Image from Asset](/hw-docs/Tutorials/Custom%20UI%20Examples%20tutorial/Station%202%20-%20Image%20from%20Asset.md) section of the Custom UI Examples tutorial.

## Methods

|  |  |
| --- | --- |
| **fromPlayerAvatarExpression(player, expression)** static | Gets an image based on the player's avatar and expression.      Signature  ``` static fromPlayerAvatarExpression(player: Player, expression: AvatarImageExpressions): ImageSource; ```  Parameters  player: Player  The player to retrieve the avatar for.  expression: [AvatarImageExpressions](/hw-docs/Reference/ui/Enumerations/AvatarImageExpressions.md)  The expression to retrieve.  Returns  [ImageSource](/hw-docs/Reference/ui/Classes/ImageSource.md)  The image source for the given avatar and expression.  Remarks  Only works on Client. Make sure your Custom UI panel and script is local. |
| **fromTextureAsset(texture)** static | Gets an image based on a texture asset.      Signature  ``` static fromTextureAsset(texture: TextureAsset): ImageSource; ```  Parameters  texture: TextureAsset  The texture asset to use as the source.  Returns  [ImageSource](/hw-docs/Reference/ui/Classes/ImageSource.md)  The image source for the given texture asset. |