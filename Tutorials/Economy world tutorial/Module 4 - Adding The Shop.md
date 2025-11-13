Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/economy-world-tutorial/module-4-adding-the-shop

# Module 4 - Adding The Shop

Note

You will need to be a member of MHCP and have accepted the terms in the Developer Dashboard in order to create in-world items and currency. Find out more about monetization [here](/hw-docs/MHCP%20program/Monetization/Monetization%20opportunities.md).

## Adding the shop to the world

Let’s add a shop to the world using the world shop gizmo.

- From the desktop editor, open the **Build Menu** and select **Gizmos**

![Select Gizmos](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/495183350_715823327622288_3352871706016382378_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=jtqJfio5ECcQ7kNvwEv8jVM&_nc_oc=Adk1RgiyFYeIzkkHv0xo4uyxt9JamUBE7rgwvJYowUbIrVZebXj1n83QbzJzwpDujaQ&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=LuegKhuVPpuCo1uiJcJCZg&oh=00_Afj3eUpSh42RsNPeKXEbcPm0n0q719MaPCwBX0p1U0IgNQ&oe=692FA4E0)

- Search or scroll to find the world shop gizmo

![Find the World Shop gizmo](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/580816254_862928509578435_9120888470749867529_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=n1GEHYACN3UQ7kNvwH_ha-_&_nc_oc=AdmwoyQ0cj7CpWpRg0zm5LnCzmwbj1G3o8dgO01Rd652yP9TjTF5OfWBVjMHwPMFQ2w&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=LuegKhuVPpuCo1uiJcJCZg&oh=00_AfisRClzH4qDuiXq2QXXZnF6uWJgpmjIwFLolMS2dmBjHA&oe=692FAEE8)

- Drag the world shop gizmo into the world, and place it under the “Cook Shop” heading.

![Drag the shop into the world](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/496254076_715823314288956_7329224520900223692_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=Sj6YWbpGViwQ7kNvwF6Rdfe&_nc_oc=AdlkMHGOfdbSfJ4T0w3mjK4bNytqGFeSpNNVj485TYMOEkb_PRe9FPA0gU5N2CLGkRQ&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=LuegKhuVPpuCo1uiJcJCZg&oh=00_Aficr3bN1jjtrqCnx-JhYG1lFzYcQfcuT5Hssw4_PH6RPQ&oe=692FBEC3)

- You may find that the gizmo arrives in the world facing the wrong way. Switch to the rotate tool (“E” on the keyboard) and rotate it 180° on the Y-axis (the green arc).

![Rotate and position the shop accordingly](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/495735900_715823380955616_1699530966186756405_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=RGgB9hNQu1MQ7kNvwEZgOmu&_nc_oc=Adm7mAAdxkgl4kRTSV2jZwyHfvIDY9FxIWG8j9na1i9Sw-fCjktgUJ6y2t0bapmrFWs&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=LuegKhuVPpuCo1uiJcJCZg&oh=00_AfijGonDcMy_f6Covr2ig_hA63MDpr_m-kdkTavW35mh9Q&oe=692FC378)

## Selling pies for gems

Configure the world shop Gizmo to allow the player to swap 1x pie for 10x gems:

- Select the world shop gizmo you added to the world

![Select the World Shop gizmo in the world](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/495573410_715823337622287_1793712620126123967_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=esGICfvIok4Q7kNvwGdaUZO&_nc_oc=AdnCqd73lHBZ4vxjlhURQeA3BB7QgoIzIq1fiNOGrweYXQxBWDrsQOvQtzAkBKoEDvA&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=LuegKhuVPpuCo1uiJcJCZg&oh=00_AfixA_kpakTr7NM2nFwvaw0BKGSFEJqhwvdwLGO9GGCSCw&oe=692FCCB4)

- In the **Properties** panel, click the**Select item** drop-down menu

![Configure the first shop item 1](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/496193596_715823304288957_6056480697938770207_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=ErEhc9IhtigQ7kNvwHjOGOq&_nc_oc=Adkhd50qVku0nscgeNazo37RbYeOl37XY0vSd41Yjm4AMtt1Cyb4HO5IQKUqXEnyJtA&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=LuegKhuVPpuCo1uiJcJCZg&oh=00_Afi4hOT9MPdUYLbcoogQkU81_zfbgp1l5s7JHZ6FlymG8A&oe=692FC20D)

- Select **Gem**, and ensure the first **Quantity** text entry is set to “1”

![Configure the first shop item 2](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/496302319_715823310955623_7819782704967656312_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=TWiDv0q10u0Q7kNvwGV0Oh5&_nc_oc=AdlxK22zIbh9iVap8MX5QTNVafyZ9E5_o_jx3AJGsFDNv-HH4wwJPSO4iAXejFyT3xc&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=LuegKhuVPpuCo1uiJcJCZg&oh=00_AfiQ4-4LyHVbwiBoFrYdUM1tcSvHh0KSASU182ezYCVSdg&oe=692FBAB1)

- Click the **Select item** drop-down and choose **Apple Pie**

![Configure the first shop item 3](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/495487875_715823324288955_5467991573300658202_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=6kiPDVo4OuwQ7kNvwEA0RHH&_nc_oc=AdnsY7AwXdoJ8yZ09xHvMIi6L92JKrhcu_RngHjf7qGk0mae6XMB_WQ9D4ildJiQN-g&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=LuegKhuVPpuCo1uiJcJCZg&oh=00_Afj63iN1BWdEolaSOqZV5kqfOnX9yTbzWMnxrT9_3CFauA&oe=692FB489)

- Change the second **Quantity** text entry to “10” (10x Apple Pies = 1x Gem)

![Configure the first shop item 4](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/495487293_715823347622286_2440753294669269601_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=JjgrFqSgyEUQ7kNvwH1nU-c&_nc_oc=AdlumzG49v8Cj8bSCk2nflTnhgbLBkogak1hq0lPzdhfKT0UT7igsVgd7mgzbTN08mA&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=LuegKhuVPpuCo1uiJcJCZg&oh=00_AfhoFRhQWue6YnACgVLuQEIMN5TJdr_edrMMEJzkG1lf9A&oe=692FC825)

The gem should now be visible in the shop UI, which also lists the purchase price and currency of the item.

![Configure the first shop item 5](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/495936746_715823320955622_6994907453746811368_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=vIiJ9aXNTQ0Q7kNvwHZ10Fb&_nc_oc=Adl37P-1usvlAU4KgbKoV_odcL6AQ2x5Eiev8wej_0BMh6Z4cZvKWi1q2oAl6pvBWnA&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=LuegKhuVPpuCo1uiJcJCZg&oh=00_AfjKDmfBg7OuoDV6PHyEDm_dfDkRaSwI1gcYEdbXuWFujw&oe=692FA846)

## Adding utility power-ups: Faster pies and faster apples

Purchaseable utility items are great options to sell in the shop. They increase the player’s earning potential, but still require them to perform the core game loop of collecting apples and baking pies in order to maximize their benefit.

The benefit of utility items like faster pies is that it keeps the perceived value of pies high (as it still requires time investment from the player to bake the pie) while ensuring the player feels rewarded for purchasing the power-up (because they can increase their pie output).

Conversely, if we made pies purchaseable they would become devalued, as players with enough money could just pay to get them, rather than dedicating time in-game.

Let’s add “Faster Pies” and “Faster Apples” to the game. Repeat the steps for adding Gems to the shop, but now add the following items:

- Item 2: 1x Faster Pies should be redeemed with 20x Gems
- Item 3: 1x Faster Apples should be redeemed with 30x Gems

Your world shop properties should now be as follows:

![Example world shop proerties](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/495865155_715823334288954_7908726328077301221_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=HVZBL6Mq7skQ7kNvwFZ8MRX&_nc_oc=AdnsLAJ8siAfoEJUWfg9G9ZylUNi6y-x_7DZcZkmffDBnSYnF2ZRwb0zHGlhXamgt1I&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=LuegKhuVPpuCo1uiJcJCZg&oh=00_AfhrHLCMzwF6VND-npxWF8LaUKUvDjtQBT04k16EsDUebQ&oe=692FB6DE)

## Configuring the appearance of the shop

As there are only three items for sale in the shop, you can configure the shop to only show the first three items in the shop UI. This will reduce clutter and make it easier for the player to understand what they can purchase.

With the shop selected, change the following properties in the **Properties** panel:

- **Displayed title**: Cook Shop
- **# Shop Items**: 3
- **Display item balance**: Apple Pie