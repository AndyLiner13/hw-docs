---
source: https://developers.meta.com/horizon-worlds/learn/documentation/create-for-web-and-mobile/grabbable-entities/custom-action-button-icons
---

# [Custom Action Button Icons](#custom-action-button-icons)

It is possible to use a custom texture for the action button icons available to players on web and mobile. The example shown below sets custom asset icons for action buttons (primary, secondary, tertiary), but this is the same process for other button icons such as the multi-holster icon.

## [Custom icon image requirements](#custom-icon-image-requirements)

- Images must be in .png format.
- Images must be within the maximum asset upload size (5MB) though it is good practice to use the smallest asset size possible as large assets increase the travel time to the world.
- Using a square (1:1) image is recommended, however the icon will be automatically cropped around the centre based on the smallest dimension of the texture.
- Custom icons work with or without a transparent background.

## [Uploading a custom texture](#uploading-a-custom-texture)

1. Open the **Assets** drawer ![](../../_assets/images/4a67555ebbcbe8179aea135aa65cadef470800f192c280ccea7f54d9a945b0bb.png)![](../../_assets/images/86664bf0db9884da92e7875479a231342f695c3f45d8964fc06c16a5408f5e8d.png)
2. Upload your custom icon by selecting **Add New** and choosing **Texture**. ![](../../_assets/images/71588c82cd2f0854e940578dda8ef3ce5111a45d09c4114c4f03b4e249ec33fb.png)![](../../_assets/images/b7c7d39622b61e272cbeea0700c955cc349eff9a83ab2cf7cbdf2d566d89fa10.png)

## [Finding the Asset ID of a texture](#finding-the-asset-id-of-a-texture)

1. Select the texture asset in the Assets drawer. ![](../../_assets/images/5b3b5ab6b85c91c6603dd34d972e1daf7750e81c14d92d4d65f5f4a4da28e8bf.png)
2. The Asset ID is located in the properties panel ![](../../_assets/images/5a90ca7ada3dcf09f601cf4b504260d8b560c446b4161d2850ccd89d21430565.png)

## [Applying custom icons](#applying-custom-icons)

1. Select the grabbable object.
2. Find the **Primary Action Icon** in the property panel (you may need to scroll down in the property panel).
3. Set the primary action icon to **anything except ‘None’**.
   1. ‘None’ means that you do not want any icon for this type of action to show.
   2. The standard icon will be used as a fallback if the custom ID is empty or invalid.
4. You can paste the previously copied ‘Asset ID’ in the custom field under this dropdown field. ![](../../_assets/images/9cf3ca15f6c6f2ab84f12c9c4a75f06d6effd58d5a4339598ed893addc1633ce.png)

## [Restart server](#restart-server)

After applying changes to your custom action icons through the desktop editor, you must shut down your server and restart your world. Your icons should be visible when you next preview your world.

## [Examples](#examples)

### [Full screen editor](#full-screen-editor)

![](../../_assets/images/a7eb2e988368d9c5a2e2681b62c9902bccf1e7f7d891c69af4aac756d28d44a0.png)

### [Holster Icons](#holster-icons)

![](../../_assets/images/c27811e72ccc4523101e6c11869b4e580770f3799e982efb88f928e6e123e64a.png)

### [Action icons](#action-icons)

![](../../_assets/images/2fedff461676aa475f1271c735e00eda16cbea8e30f9cd067c358eefaa713884.png)

