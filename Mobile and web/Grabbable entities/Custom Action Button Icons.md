Source: https://developers.meta.com/horizon-worlds/learn/documentation/create-for-web-and-mobile/grabbable-entities/custom-action-button-icons

# Custom Action Button Icons

It is possible to use a custom texture for the action button icons available to players on web and mobile. The example shown below sets custom asset icons for action buttons (primary, secondary, tertiary), but this is the same process for other button icons such as the multi-holster icon.

## Custom icon image requirements

* Images must be in .png format.
* Images must be within the maximum asset upload size (5MB) though it is good practice to use the smallest asset size possible as large assets increase the travel time to the world.
* Using a square (1:1) image is recommended, however the icon will be automatically cropped around the centre based on the smallest dimension of the texture.
* Custom icons work with or without a transparent background.

## Uploading a custom texture

- Open the **Assets** drawer ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452692762_512500277954595_6483673881981407041_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=eosr2KWaGXoQ7kNvwGtrsRR&_nc_oc=AdkPmKdCz93Ec4vf8Cn6Jo-Bjy6V93w4tyByflwP4UKunLuIsrapr3FEDnCRTb8yiKo&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=bV7Nmc4BHzuJSZCt3cdiEg&oh=00_AfiVyBjysb4m8ibnDVxilG_30YLvgWf-aMNdb5WS_jOWzQ&oe=692FA0D6)![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452934219_512500324621257_732347907935737803_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=iRPdPZjCSY8Q7kNvwGJUfvc&_nc_oc=AdmEh1ESzCvWDQyBxO96NzTnQaJWI5S8aJPIshu2sgldOmI9nwITZN1SYD_DIF6uKEI&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=bV7Nmc4BHzuJSZCt3cdiEg&oh=00_Afj2zaneaOfMrayOqgLfpjWyUJL7ycd5AUoUGM3HXEAVkA&oe=692FB777)
- Upload your custom icon by selecting **Add New** and choosing **Texture**. ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452555349_512500227954600_853972897219839268_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=E16lgHQR7EUQ7kNvwH5vmm9&_nc_oc=AdkfwzC9lSppgMHTpot3X1envMIRQmZTH-TYie3lPCukVDrbfxtWxwuCAyn5-fuJBdA&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=bV7Nmc4BHzuJSZCt3cdiEg&oh=00_AfgNZBm2vhRVNakkrI-mnURD_XockU7np4y_WVbJozGWoQ&oe=692FA60B)![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452943795_512500224621267_2680608886346952551_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=RiMsbus--JkQ7kNvwEUGkyJ&_nc_oc=Admv_yD3VFO5RKdvaORk2d4jaay9gw0xXagJ9ONZ0RzyK4diJQdZfF2fRoH49kGgLNg&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=bV7Nmc4BHzuJSZCt3cdiEg&oh=00_AfgUOaGtp7Tt7ra84Z6wj-2DBCY9q5kJ99yIfvIZd5NT4w&oe=692FA5B4)

## Finding the Asset ID of a texture

- Select the texture asset in the Assets drawer. ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452414863_512500214621268_7633200016895351382_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=-OGP8DUP9V0Q7kNvwEi6z4R&_nc_oc=AdmwUIwsgpXeAdg-m5UxD8uvt-jBSDFLmtb-yX6iiQOFEAxoEMxFdJZGzgKCtNxvz2I&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=bV7Nmc4BHzuJSZCt3cdiEg&oh=00_AfhUfCVbahIQboIyk5BGaqizQ_s-2JBwvKkQEwrNT_Lqqg&oe=692FBE4C)
- The Asset ID is located in the properties panel ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452587726_512500321287924_1565343576284208572_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=-jnGjoN8jVMQ7kNvwFFP9GE&_nc_oc=AdlrA43lJz8Jm88LRl6Pg1L4AC-11hi4QNFTenyrAey7FqV6D_1d9MakXkMGBXnC_l0&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=bV7Nmc4BHzuJSZCt3cdiEg&oh=00_AfjYHRsf8ZeQ0u2KkYi-umUIiP1r0J5eMycKsYbap9QdUg&oe=692F9C77)

## Applying custom icons

- Select the grabbable object.
- Find the **Primary Action Icon** in the property panel (you may need to scroll down in the property panel).
- Set the primary action icon to **anything except ‘None’**.
  - ‘None’ means that you do not want any icon for this type of action to show.
  - The standard icon will be used as a fallback if the custom ID is empty or invalid.
- You can paste the previously copied ‘Asset ID’ in the custom field under this dropdown field. ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452665936_512500217954601_9034371618003101927_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=nE15IwSBfGQQ7kNvwGyRg9Y&_nc_oc=Adk-FSA4h5zsZQihVTpwJLtdK8NsGrpxQcsN8Krg8HIs76FFhrTVppWBkSUokKT6M8o&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=bV7Nmc4BHzuJSZCt3cdiEg&oh=00_Afh6YrZavLqwSwIHoEltzHZEM8bdZ5a2xzZest82yiEuoA&oe=692FBDFA)

## Restart server

After applying changes to your custom action icons through the desktop editor, you must shut down your server and restart your world. Your icons should be visible when you next preview your world.

## Examples

### Full screen editor

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452917902_512500274621262_4879520699610761453_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=N-dqMAGxXrAQ7kNvwEFWVuP&_nc_oc=AdnB-qSTuaX3YvTpf5B3sf5gmckWGkX2obfU1_rdfzGBM2ku2MG3EBOfvBf392Lb3Rk&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=bV7Nmc4BHzuJSZCt3cdiEg&oh=00_Afh5YQw4_Isg3wjyJKUKn6M7mRQE6FvAzOR2LUOEzi4-5A&oe=692FB1EE)

### Holster Icons

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452671953_512500197954603_7754713435935754737_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=eIsMMd4WGWoQ7kNvwGhBUoe&_nc_oc=Adno7c17fSGD_BQNMAZuPm8nXeVjxf41MLg5UhPkHmNpyFktiKT3QRAkqghPxGDF8iU&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=bV7Nmc4BHzuJSZCt3cdiEg&oh=00_AfhXtDhQYOm_Um5BE3SnUaGFqA4JLXGyAcbBMFX3-RSR8A&oe=692F9E3D)

### Action icons

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452554593_512500221287934_829122906814892421_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=GI9PRW4OKVwQ7kNvwFLUzUN&_nc_oc=AdkV6TjRJgdR6hFTYJjD-CMTr9X8USMUle8LusgL3fbarNCDvqPX6426WkNN87zcQaQ&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=bV7Nmc4BHzuJSZCt3cdiEg&oh=00_AfgkxnLyE7aY3XUnTIZLXPXItMeZveKyVwCGSv-lOX__HA&oe=692FB299)