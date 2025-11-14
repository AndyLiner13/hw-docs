Source: https://developers.meta.com/horizon-worlds/learn/documentation/create-for-web-and-mobile/grabbable-entities/custom-action-button-icons

# Custom Action Button Icons

It is possible to use a custom texture for the action button icons available to players on web and mobile. The example shown below sets custom asset icons for action buttons (primary, secondary, tertiary), but this is the same process for other button icons such as the multi-holster icon.

## Custom icon image requirements

* Images must be in .png format.
* Images must be within the maximum asset upload size (5MB) though it is good practice to use the smallest asset size possible as large assets increase the travel time to the world.
* Using a square (1:1) image is recommended, however the icon will be automatically cropped around the centre based on the smallest dimension of the texture.
* Custom icons work with or without a transparent background.

## Uploading a custom texture

- Open the **Assets** drawer ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452692762_512500277954595_6483673881981407041_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=flZUXIzq7fsQ7kNvwFBhaJT&_nc_oc=AdnNpRRW92ueMF8pt7SN1IHQUeHUxuBqvdorwxjbAcrnYrw7Z9cXRpLbcHfwUpivVSM&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=vQ_JiUfiVNfCS-ehSOmSLA&oh=00_AfgsgnN88QuLRsxP1K_OrK_iUZjK1nOD3Mj3sKwLA66AnQ&oe=69312A96)![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452934219_512500324621257_732347907935737803_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=bUl3fmcYEMgQ7kNvwF-mQh2&_nc_oc=AdkrW0PJpY1dd1XcP-d8hBc0nnrHX-CmRTs0DSEF0tNlegnvlDArtmbZ1ZqhU2XDnt8&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=vQ_JiUfiVNfCS-ehSOmSLA&oh=00_AfihQuENDjjsZeSjpjIQQJP92UxWjw0HdhmveSAfJAXJeA&oe=69314137)
- Upload your custom icon by selecting **Add New** and choosing **Texture**. ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452555349_512500227954600_853972897219839268_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=L7M_qnI5K1wQ7kNvwGaAbV2&_nc_oc=AdnfFIBvz547QqcN0T2E0YcJ1er9jbFuI4iwnamdY6Uwz_sXwJ1Pw-Mnpa15WilVH4I&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=vQ_JiUfiVNfCS-ehSOmSLA&oh=00_AfghzvuHYRMAY8WWgQE1hWskSaMAZqQVDzEzkeq79DjelA&oe=69312FCB)![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452943795_512500224621267_2680608886346952551_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=RiMsbus--JkQ7kNvwEUGkyJ&_nc_oc=Admv_yD3VFO5RKdvaORk2d4jaay9gw0xXagJ9ONZ0RzyK4diJQdZfF2fRoH49kGgLNg&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=vQ_JiUfiVNfCS-ehSOmSLA&oh=00_AfiD0CUNoLgbYpnflzgivhujXRQ_MnzuoyEtz9zXKBW8OQ&oe=69312F74)

## Finding the Asset ID of a texture

- Select the texture asset in the Assets drawer. ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452414863_512500214621268_7633200016895351382_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=-OGP8DUP9V0Q7kNvwEi6z4R&_nc_oc=AdmwUIwsgpXeAdg-m5UxD8uvt-jBSDFLmtb-yX6iiQOFEAxoEMxFdJZGzgKCtNxvz2I&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=vQ_JiUfiVNfCS-ehSOmSLA&oh=00_AfhLGDqLpgA9ds7FHaiOeHePTIrZoGBJ2pkhtQJsGkpagg&oe=6931480C)
- The Asset ID is located in the properties panel ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452587726_512500321287924_1565343576284208572_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=lnNccGXVI3QQ7kNvwGvHveG&_nc_oc=Adk9Ynw9_OL-Z-aVmyTcXyIlo43GB-oYOFTiuPQm0O6DfUTAGxQtykQWYeG_bvhnM5E&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=vQ_JiUfiVNfCS-ehSOmSLA&oh=00_AfjtwMSfaKbjY5zACAw98UXS98Dq-LwP-vSr3Z_tcdrCDg&oe=69312637)

## Applying custom icons

- Select the grabbable object.
- Find the **Primary Action Icon** in the property panel (you may need to scroll down in the property panel).
- Set the primary action icon to **anything except ‘None’**.
  - ‘None’ means that you do not want any icon for this type of action to show.
  - The standard icon will be used as a fallback if the custom ID is empty or invalid.
- You can paste the previously copied ‘Asset ID’ in the custom field under this dropdown field. ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452665936_512500217954601_9034371618003101927_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=9o3qz5y4YDUQ7kNvwHpah24&_nc_oc=Adm9eD222VZ6hgRYQxjphVesJec02RVFon1DQ2vL3t8khaYqHUUQYiBPLaDik4B1Q6s&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=vQ_JiUfiVNfCS-ehSOmSLA&oh=00_AfiJMhPlVLxnzfHg50M-NYnXY-_2jKEUyPe8GrHN9-Chew&oe=693147BA)

## Restart server

After applying changes to your custom action icons through the desktop editor, you must shut down your server and restart your world. Your icons should be visible when you next preview your world.

## Examples

### Full screen editor

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452917902_512500274621262_4879520699610761453_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=N-dqMAGxXrAQ7kNvwEFWVuP&_nc_oc=AdnB-qSTuaX3YvTpf5B3sf5gmckWGkX2obfU1_rdfzGBM2ku2MG3EBOfvBf392Lb3Rk&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=vQ_JiUfiVNfCS-ehSOmSLA&oh=00_Afhfj_gHpJK5j9HJgx3RB5bjMFd9UZ8MQ_CzFU_4PiIDPQ&oe=69313BAE)

### Holster Icons

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452671953_512500197954603_7754713435935754737_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=A8XiRo8Gn_sQ7kNvwG1MGdW&_nc_oc=AdkM18o-pyG4EU8EwqnZjehBu9yWPj0Fak-x16MUSeavhyv8QBViATrYl0BYcnsQt60&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=vQ_JiUfiVNfCS-ehSOmSLA&oh=00_Afg5Hxgod2wbLaWNDlr9k1yko6EKlJD7VhmV7W7ZzhvJLA&oe=693127FD)

### Action icons

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452554593_512500221287934_829122906814892421_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=GI9PRW4OKVwQ7kNvwFLUzUN&_nc_oc=AdkV6TjRJgdR6hFTYJjD-CMTr9X8USMUle8LusgL3fbarNCDvqPX6426WkNN87zcQaQ&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=vQ_JiUfiVNfCS-ehSOmSLA&oh=00_Afg3E_5-N3hm2P0gEF_VXKkUI_tDuK2u53Mps4i5O9pS-A&oe=69313C59)