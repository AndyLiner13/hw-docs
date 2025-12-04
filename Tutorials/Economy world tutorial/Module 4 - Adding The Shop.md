Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/economy-world-tutorial/module-4-adding-the-shop

# Module 4 - Adding The Shop

Note

You will need to be a member of MHCP and have accepted the terms in the Developer Dashboard in order to create in-world items and currency. Find out more about monetization [here](/hw-mcp-tools/documentation/hw-docs/MHCP%20program/Monetization/Monetization%20opportunities.md).

## Adding the shop to the world

Let’s add a shop to the world using the world shop gizmo.

- From the desktop editor, open the **Build Menu** and select **Gizmos**

![Select Gizmos](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/495183350_715823327622288_3352871706016382378_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=ABeinO773yYQ7kNvwEp-Pdh&_nc_oc=AdmL7sb2sTsnQUMIRH67V8Y0iY0HpFfG9miXRZl2PWSecYzf2tPib0wGWH-JcIQcN1E&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=FOt9c39wGjUmU8DllD7o5Q&oh=00_Afmzvjxa2IYdzl_QCF08kMfBYRscLBojwF8LRdUAypbQPA&oe=694BC4E0)

- Search or scroll to find the world shop gizmo

![Find the World Shop gizmo](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/580816254_862928509578435_9120888470749867529_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=whYuRf3ZJE0Q7kNvwFX_LkN&_nc_oc=AdkfXc14shZDisBXbXWaG1THD_tvaQJlXMo51-KZcW1YZYN3Yp1G0JW8JpnkctyTTkI&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=FOt9c39wGjUmU8DllD7o5Q&oh=00_AflIwfKOm5dHs3_DyEljgmxeaOw-JErnel8z6oZN2qF8CA&oe=694BCEE8)

- Drag the world shop gizmo into the world, and place it under the “Cook Shop” heading.

![Drag the shop into the world](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/496254076_715823314288956_7329224520900223692_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=GJ0kbC9UjXYQ7kNvwHf-8DO&_nc_oc=Adkk3oviEJRvbHnB-RVv_GeJcICkfPkw-60LTp2CUocBjGqhhoXpxPrhI4YqQJOpBGA&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=FOt9c39wGjUmU8DllD7o5Q&oh=00_AfmnQZmuFHx2yQ4yRFxpkFmz_I92f3hZQgbVVPuQhn7Fog&oe=694BDEC3)

- You may find that the gizmo arrives in the world facing the wrong way. Switch to the rotate tool (“E” on the keyboard) and rotate it 180° on the Y-axis (the green arc).

![Rotate and position the shop accordingly](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/495735900_715823380955616_1699530966186756405_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=ct6p2cckj68Q7kNvwGf7hBe&_nc_oc=Adm2YmcJkW99FEBIkP2GywoXB-RZ7hSp5Mf4zIWVyT1-JJFnMYc_kdxgrhSjUHxnSF8&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=FOt9c39wGjUmU8DllD7o5Q&oh=00_AfkAPsKTIaT2zAI58eIke3f0AHmE7uBlAzcjAQMiqaXuow&oe=694BE378)

## Selling pies for gems

Configure the world shop Gizmo to allow the player to swap 1x pie for 10x gems:

- Select the world shop gizmo you added to the world

![Select the World Shop gizmo in the world](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/495573410_715823337622287_1793712620126123967_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=3fx3enXSdg8Q7kNvwGXzzlS&_nc_oc=Adl6VRKilbMVCQXBF2Csk2uVrlrv_KNbFHMrV3VPN7B-UevWOmZeI0Sm2hEBZNrAyd8&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=FOt9c39wGjUmU8DllD7o5Q&oh=00_AflPt2OIS3wacccVPCHwy0Pa6xS42fsETmHrkbQkC3CZFg&oe=694BECB4)

- In the **Properties** panel, click the**Select item** drop-down menu

![Configure the first shop item 1](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/496193596_715823304288957_6056480697938770207_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=E94gR93oowAQ7kNvwHosRkX&_nc_oc=AdkcS-wu2AU69EW8Um3E7omqCbL5yegH72AMWvTTB25n8IGy8_s0VGMYuflHrnLGpMA&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=FOt9c39wGjUmU8DllD7o5Q&oh=00_AfkZEq1j1l8jkh6P8iP1ei7SmEZ9BSJC4XYuXdPd-SI24w&oe=694BE20D)

- Select **Gem**, and ensure the first **Quantity** text entry is set to “1”

![Configure the first shop item 2](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/496302319_715823310955623_7819782704967656312_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=Y0NG3c4_fFAQ7kNvwGLOGkk&_nc_oc=AdnQGYcP22ewKsiivsdge4ZjmHa8ab2JfY8-iqBhSn04HhNCgUGILoMZU6QgHSVgghY&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=FOt9c39wGjUmU8DllD7o5Q&oh=00_AfmXWlaM2HIO25VtkcAj67ymfM4ZfNqJKqMOTh89chk3ZA&oe=694BDAB1)

- Click the **Select item** drop-down and choose **Apple Pie**

![Configure the first shop item 3](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/495487875_715823324288955_5467991573300658202_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=s2dnyPCR_4wQ7kNvwE83gon&_nc_oc=AdlKjaKsrAICZ5ey_smEqTrilsOeiPn1DQ2smM5RaLvBfYS5iZp_w80znW3h-HMSmZw&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=FOt9c39wGjUmU8DllD7o5Q&oh=00_AfmZT2HPqXGXm4WezXD-pTpqQGKro7L17Zg2CqE1JfKtJA&oe=694BD489)

- Change the second **Quantity** text entry to “10” (10x Apple Pies = 1x Gem)

![Configure the first shop item 4](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/495487293_715823347622286_2440753294669269601_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=Jm1IhtZFMXUQ7kNvwHBMzkO&_nc_oc=Adm-x6bnXAzWA_aTkaOqvjlJjJ5zY-vfPOHZ_JjdD7WbYkZHACRKNGU-NaILJEWuIP4&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=FOt9c39wGjUmU8DllD7o5Q&oh=00_AfltH47bOrFQdTE66vqsxFGyJiMXCqhFaHcFIhnyVguiig&oe=694BE825)

The gem should now be visible in the shop UI, which also lists the purchase price and currency of the item.

![Configure the first shop item 5](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/495936746_715823320955622_6994907453746811368_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=rtod3PFkho0Q7kNvwEEEb_W&_nc_oc=AdkxxE9Lz2mm4RtvetQcbH6mQSeTeolJt6Nxp4tL4q-AqGeWtdIb5TDWJE4VPvLjDjs&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=FOt9c39wGjUmU8DllD7o5Q&oh=00_AfmzuITK4lGmJLCfOy2ipVLN-IWJXOm23J6zE6GNvdBMDA&oe=694BC846)

## Adding utility power-ups: Faster pies and faster apples

Purchaseable utility items are great options to sell in the shop. They increase the player’s earning potential, but still require them to perform the core game loop of collecting apples and baking pies in order to maximize their benefit.

The benefit of utility items like faster pies is that it keeps the perceived value of pies high (as it still requires time investment from the player to bake the pie) while ensuring the player feels rewarded for purchasing the power-up (because they can increase their pie output).

Conversely, if we made pies purchaseable they would become devalued, as players with enough money could just pay to get them, rather than dedicating time in-game.

Let’s add “Faster Pies” and “Faster Apples” to the game. Repeat the steps for adding Gems to the shop, but now add the following items:

- Item 2: 1x Faster Pies should be redeemed with 20x Gems
- Item 3: 1x Faster Apples should be redeemed with 30x Gems

Your world shop properties should now be as follows:

![Example world shop proerties](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/495865155_715823334288954_7908726328077301221_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=Z1ej4IqZvAkQ7kNvwGd7FAc&_nc_oc=Adlra3kHqVRl27oieCkat5rKAGeJsNmacoZy6n3xQHYF0fldFRO40okMFbWgWc_UMdg&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=FOt9c39wGjUmU8DllD7o5Q&oh=00_Afk9REE5147VfT4ygdgg1ccBSRqKTfiOn2DBU-CRxs9-vQ&oe=694BD6DE)

## Configuring the appearance of the shop

As there are only three items for sale in the shop, you can configure the shop to only show the first three items in the shop UI. This will reduce clutter and make it easier for the player to understand what they can purchase.

With the shop selected, change the following properties in the **Properties** panel:

- **Displayed title**: Cook Shop
- **# Shop Items**: 3
- **Display item balance**: Apple Pie