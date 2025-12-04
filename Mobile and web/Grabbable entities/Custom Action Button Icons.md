Source: https://developers.meta.com/horizon-worlds/learn/documentation/create-for-web-and-mobile/grabbable-entities/custom-action-button-icons

# Custom Action Button Icons

It is possible to use a custom texture for the action button icons available to players on web and mobile. The example shown below sets custom asset icons for action buttons (primary, secondary, tertiary), but this is the same process for other button icons such as the multi-holster icon.

## Custom icon image requirements

* Images must be in .png format.
* Images must be within the maximum asset upload size (5MB) though it is good practice to use the smallest asset size possible as large assets increase the travel time to the world.
* Using a square (1:1) image is recommended, however the icon will be automatically cropped around the centre based on the smallest dimension of the texture.
* Custom icons work with or without a transparent background.

## Uploading a custom texture

- Open the **Assets** drawer ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452692762_512500277954595_6483673881981407041_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=GlqC8IVhmgMQ7kNvwGYuLjW&_nc_oc=Adl5QaaocnXVdABO_Rw9mw930pvN20YcWHIbQTCvIcku8SV5wJqsIR7mIphbSz3gzYc&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=Wf4C1KJXQORo1q2BUyZlnA&oh=00_Afkp14eUpSb8CTehuXSK5ML3GPgeFjMS_c2hi5vT7pTv7Q&oe=694BC0D6)![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452934219_512500324621257_732347907935737803_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=wd0IlGD12AQQ7kNvwEAR8HS&_nc_oc=AdkNw9NCzOYw7E4sPEO5TekiCNlduXD4d4Z7shi5mBakmi-I2HuxkGFP0qpLBiPKBIw&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=Wf4C1KJXQORo1q2BUyZlnA&oh=00_AflDWa8lvpYpMzeWB9Z75IGhlirhiJmQy-sVGMk3VNpxZg&oe=694BD777)
- Upload your custom icon by selecting **Add New** and choosing **Texture**. ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452555349_512500227954600_853972897219839268_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=2wd7VsooIYUQ7kNvwHftsHN&_nc_oc=AdlO2N7L33tNyhG5u4923bvi_T6a6L71ByhndW180QgdvUVgjVJ_bPcPs56mUCLpz1A&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=Wf4C1KJXQORo1q2BUyZlnA&oh=00_AfmyRP7aL7a6ao0qdEtrSvBdLzn0XtiqDtDzfG-cJl4UgA&oe=694BC60B)![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452943795_512500224621267_2680608886346952551_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=ZybS4HP05ggQ7kNvwGDAi30&_nc_oc=Adnt7ShtwK00Mjrl9vg8QW-MzJntrE1uQYk1Cs9lLePePjo_6rcQFfZi6zpzcAF2f4c&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=Wf4C1KJXQORo1q2BUyZlnA&oh=00_AfmKdFZk1UuqMaZkIbk3E-TUqd9ALeVubMBBv8J7Tb1PNg&oe=694BC5B4)

## Finding the Asset ID of a texture

- Select the texture asset in the Assets drawer. ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452414863_512500214621268_7633200016895351382_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=vhjggiEwLHAQ7kNvwEJNx3n&_nc_oc=AdnMdPxefFaIZDH-RDIqovuw1gMrAtaFrsLIKAdvOsgtvCdszuW-acIKplBe0hrJqz8&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=Wf4C1KJXQORo1q2BUyZlnA&oh=00_AfkGdYvIsOa_v7TeqEFLwuh0vTr0-OVQfbxD4ecbWawdNg&oe=694BDE4C)
- The Asset ID is located in the properties panel ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452587726_512500321287924_1565343576284208572_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=kb32qvheUjEQ7kNvwGV2KRf&_nc_oc=AdnaXNPJAx1JhV-an5AI865mGk5tcyyHF2wCDmMPNf9i9L1uLMS8uQNxl4VZYac1tRw&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=Wf4C1KJXQORo1q2BUyZlnA&oh=00_AflCmyrh8ZB-jiomglHWvTsNHwnCNWb77kqflscNhae0Jw&oe=694BBC77)

## Applying custom icons

- Select the grabbable object.
- Find the **Primary Action Icon** in the property panel (you may need to scroll down in the property panel).
- Set the primary action icon to **anything except ‘None’**.
  - ‘None’ means that you do not want any icon for this type of action to show.
  - The standard icon will be used as a fallback if the custom ID is empty or invalid.
- You can paste the previously copied ‘Asset ID’ in the custom field under this dropdown field. ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452665936_512500217954601_9034371618003101927_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=e6jnPXX4ydEQ7kNvwF5aaz3&_nc_oc=AdnHIOi2CnMz3VCycYgXn4AkHYubCcZ_5CPFdvvxL9Mxte3T0V3rHDkgXJP2bQ_SJ0w&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=Wf4C1KJXQORo1q2BUyZlnA&oh=00_Afm1h9LUSD3kXso0dkmnQMqmHEJfmVVFATSMkGHSnMczGg&oe=694BDDFA)

## Restart server

After applying changes to your custom action icons through the desktop editor, you must shut down your server and restart your world. Your icons should be visible when you next preview your world.

## Examples

### Full screen editor

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452917902_512500274621262_4879520699610761453_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=eNu2dwYJ7gAQ7kNvwE5QNyG&_nc_oc=AdkXZWyaxR_g8CZsh1t9S2cd_kK2bK6OZSwMwWB1T_vqv8OoP4n0FZvn8sBjMiv4OIg&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=Wf4C1KJXQORo1q2BUyZlnA&oh=00_AflC8UgsvG2FTD5zltejKb503c9qFLdMJm78kqDaJ40eFg&oe=694BD1EE)

### Holster Icons

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452671953_512500197954603_7754713435935754737_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=P5BI4SwJK18Q7kNvwG0k08r&_nc_oc=AdklcSdpQJT2nP0zSmEx-aWsAzkLZDAWFALMw8ZRJm53fF0e-cl2Fgz0_xifp9It2qw&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=Wf4C1KJXQORo1q2BUyZlnA&oh=00_AfnSxjL6o-uuXbFuuxrCX2Gtbk_ehq_Tn2cikZAC3AH2KA&oe=694BBE3D)

### Action icons

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452554593_512500221287934_829122906814892421_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=kpiukJZV9ycQ7kNvwHgaj4d&_nc_oc=AdmeDkaOa2Au70gba0YvYPYBZogwEFEzmLhscQkCCrKa8kHI3Fmt0UROhwbgfxZZZq8&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=Wf4C1KJXQORo1q2BUyZlnA&oh=00_AfkAxPfPjgkUT6l2aGI730uULEQzm--YWj0JTXH7HNBP9A&oe=694BD299)