Source: https://developers.meta.com/horizon-worlds/learn/documentation/create-for-web-and-mobile/grabbable-entities/custom-action-button-icons

# Custom Action Button Icons

It is possible to use a custom texture for the action button icons available to players on web and mobile. The example shown below sets custom asset icons for action buttons (primary, secondary, tertiary), but this is the same process for other button icons such as the multi-holster icon.

## Custom icon image requirements

* Images must be in .png format.
* Images must be within the maximum asset upload size (5MB) though it is good practice to use the smallest asset size possible as large assets increase the travel time to the world.
* Using a square (1:1) image is recommended, however the icon will be automatically cropped around the centre based on the smallest dimension of the texture.
* Custom icons work with or without a transparent background.

## Uploading a custom texture

- Open the **Assets** drawer ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452692762_512500277954595_6483673881981407041_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=__LJJTkGO6kQ7kNvwGmdzge&_nc_oc=AdkmvasTeb9fyO3k3qiC9w_e2YxxLM6U6Y7OILGOFqSOnw1YabMuRc2bRuF2rS3JB9ZEuJ877Mf8URCDu7JK7LJe&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=nQ8Us6pVRFZ7bhyfK6legw&oh=00_AfnK-Hi9Unl6sWXgpXulpl27dY2lsWO_wg6yzNRTEUVPwQ&oe=69556BD6)![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452934219_512500324621257_732347907935737803_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=sD6Rljx62TAQ7kNvwEJYG_i&_nc_oc=AdlcMwm4hR52uubLe14Ej8vutafJj22EN8ugqIYVvEUtfbZLlF0rVLQTkHowV8Tdn23lall4P1wmdlpWb6RmQ5Kj&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=nQ8Us6pVRFZ7bhyfK6legw&oh=00_AfluI5Qeo_qr5Tc9RwurFquL9bjQJheZc8hyaH4dZb7vYA&oe=69558277)
- Upload your custom icon by selecting **Add New** and choosing **Texture**. ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452555349_512500227954600_853972897219839268_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=pdKra2OB7AUQ7kNvwEpzdNq&_nc_oc=Admiq6IozcE3M3QzOy5W41QLYBUQvgVa6ZZdd6rtARI8WilhNCZbrxeawo_gtmLAQ8kvUdv86xWPP2jWQSxe_Hcw&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=nQ8Us6pVRFZ7bhyfK6legw&oh=00_AflVruzQEOoN83I9DWY3UZXsc5j9ZdKSiLcWS5nMIKNKpw&oe=6955710B)![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452943795_512500224621267_2680608886346952551_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=xCRcJgjSv1cQ7kNvwGf-IUD&_nc_oc=AdlKO7JuhqL0w_oR49MCwPXAp35Ow2LyKc_Nx36o3Oysv4OIkXYCOm09ekKmd1__la5UJequQdPu9UlFHHnzJuMV&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=nQ8Us6pVRFZ7bhyfK6legw&oh=00_AflHE-xyyRLCmzBZXVC9hZ9tYeZW_MDTDfm_IMOjlpa54g&oe=695570B4)

## Finding the Asset ID of a texture

- Select the texture asset in the Assets drawer. ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452414863_512500214621268_7633200016895351382_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=zDvGg9ut22kQ7kNvwFonEyS&_nc_oc=AdkEaV3_NWybm1t20EYsG6N48g_lk_MK5-MJxzLV59dI09ffY3F9n7FOEIEFbxYj-eMgX7nmoF6oloH7HdHOMLVO&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=nQ8Us6pVRFZ7bhyfK6legw&oh=00_AfkGj4fp77d0M2UJAtt6XGlSXAnInqapUI4WNLINytkxwg&oe=6955894C)
- The Asset ID is located in the properties panel ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452587726_512500321287924_1565343576284208572_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=6Ztc25h2psIQ7kNvwEyCwWb&_nc_oc=AdlSX0-o2j-enH4aJjrPpq5ZXn2INBPIQvYwk87-oAtylCwF7IbRIfmn3EYjrzV_jr1BjJ6S95gFfCYbDb50IDGO&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=nQ8Us6pVRFZ7bhyfK6legw&oh=00_AfkX9H8HlAZpVG5ox20x-_4ITmY2pcuD6xdGIT3oE6v5CA&oe=69559FB7)

## Applying custom icons

- Select the grabbable object.
- Find the **Primary Action Icon** in the property panel (you may need to scroll down in the property panel).
- Set the primary action icon to **anything except ‘None’**.
  - ‘None’ means that you do not want any icon for this type of action to show.
  - The standard icon will be used as a fallback if the custom ID is empty or invalid.
- You can paste the previously copied ‘Asset ID’ in the custom field under this dropdown field. ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452665936_512500217954601_9034371618003101927_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=eO2V6uf4NFoQ7kNvwH6IQSz&_nc_oc=AdlB2O4ErxM0YWDMjTyVOr0qsLFneUO_WoMz9xA17dUpGefSXPbbpMs_BUl32Gc0VXTe5zYoSSzXb-e-7YsSehrl&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=nQ8Us6pVRFZ7bhyfK6legw&oh=00_AflNLp5tp1GH6Z3arcTAeDc5CnFZ6tML4HstBt7fI0c23w&oe=695588FA)

## Restart server

After applying changes to your custom action icons through the desktop editor, you must shut down your server and restart your world. Your icons should be visible when you next preview your world.

## Examples

### Full screen editor

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452917902_512500274621262_4879520699610761453_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=tK2IDJi0bSEQ7kNvwEk47Na&_nc_oc=Adn1QY-xLrGQhEPHx6ZBwBW9JTTyOqTPBBdTmfV58QSZAt4jxq2OP-ciBomdWuqtfp8iwU5zDlEEM3Wpl1BqTiHF&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=nQ8Us6pVRFZ7bhyfK6legw&oh=00_Aflj9wGQ7EHOTY0uApUa2EpwURpKiZ8G8th8NtiSi3ADOQ&oe=69557CEE)

### Holster Icons

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452671953_512500197954603_7754713435935754737_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=tHe02eppLXEQ7kNvwHrQwxH&_nc_oc=AdlYrOqMpu6BrqEnfFmWjIoAkxZbMG6VhZ3X9ZjdZHO1Gpbe-RTj_nG5F3DKemG27ubIJQmS-GiWTHy9PTQW3cZe&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=nQ8Us6pVRFZ7bhyfK6legw&oh=00_AfkPDp5k1iwIUZI9k1MwpyzuGDN6Z-FrOO0SkBBD73AraQ&oe=6955A17D)

### Action icons

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452554593_512500221287934_829122906814892421_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=uLp_62borFwQ7kNvwHgTTT6&_nc_oc=Adk8UTO5M5K6_brCMh4cDV9CanqChaj3H8jhG6gc1N4kDNuO3sbW4cXUt9ElTHhIvfujQk4hE-Lfak0pZj7UrhN5&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=nQ8Us6pVRFZ7bhyfK6legw&oh=00_Afki8XjZjv8UMU_gQHtJfqUKbI1kv1MSIPSet4kSCV4GBg&oe=69557D99)