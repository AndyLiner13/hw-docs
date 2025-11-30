Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/economy-world-tutorial/module-4-adding-the-shop

# Module 4 - Adding The Shop

Note

You will need to be a member of MHCP and have accepted the terms in the Developer Dashboard in order to create in-world items and currency. Find out more about monetization [here](https://developers.meta.com/horizon-worlds/learn/documentation/mhcp-program/monetization/creator-monetization-partner-program).

## Adding the shop to the world

Let’s add a shop to the world using the world shop gizmo.

- From the desktop editor, open the **Build Menu** and select **Gizmos**

![Select Gizmos](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/495183350_715823327622288_3352871706016382378_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=VXyWn71LAkAQ7kNvwHvvyVq&_nc_oc=AdmiwckMi-ht2blu0SA2y0XJEi4QuheRqO5qWPW9K08RucuSFLQZXBpvnob-VA0RsnA&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=2bpKZHp34antE11nnPpGzw&oh=00_AfhiGYd19ZJQUPx27fydXjwD06FYy6OTNhamF8kNoY4iBg&oe=694646A0)

- Search or scroll to find the world shop gizmo

![Find the World Shop gizmo](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/580816254_862928509578435_9120888470749867529_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=CPJ7dbDReVcQ7kNvwFBCkW-&_nc_oc=Adkg0JbO8-WmK0FP0Yjq7p5BVSy6WcB59-wQDj7TG9qsxpaqd9wMYK1lldyGSoV540w&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=2bpKZHp34antE11nnPpGzw&oh=00_AfhIAfRBCQh8HSqXIGu67vA5A1kCW-8Dwp-youVmPMSQKw&oe=694650A8)

- Drag the world shop gizmo into the world, and place it under the “Cook Shop” heading.

![Drag the shop into the world](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/496254076_715823314288956_7329224520900223692_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=yI7vnQPhk1UQ7kNvwFcPbKJ&_nc_oc=AdlXzBk-BmbvroE713fBTIJFztDVClncG0elMYWJGbSjdrOGZPDqoXtPVgM3F4_hJWk&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=2bpKZHp34antE11nnPpGzw&oh=00_AfiY3K86FNkp-lglPoPFVnxIkNzZQxLbV0BwiRyvBv_J3A&oe=69466083)

- You may find that the gizmo arrives in the world facing the wrong way. Switch to the rotate tool (“E” on the keyboard) and rotate it 180° on the Y-axis (the green arc).

![Rotate and position the shop accordingly](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/495735900_715823380955616_1699530966186756405_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=fZNsXokM9qoQ7kNvwFpAPnI&_nc_oc=Adk3Bn-6al9jreB6gCe2oYUEPlHm8DKpZxuLSIkXyqvxYhihJ_2ZZGODZSxJCdFnDck&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=2bpKZHp34antE11nnPpGzw&oh=00_AfgF5Bo37HTWP0NTvFUfqzvC3rgsKAcBGimpIfqLJTNbTg&oe=69462CF8)

## Selling pies for gems

Configure the world shop Gizmo to allow the player to swap 1x pie for 10x gems:

- Select the world shop gizmo you added to the world

![Select the World Shop gizmo in the world](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/495573410_715823337622287_1793712620126123967_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=0eO1pk-rtQsQ7kNvwF-m4tu&_nc_oc=AdkUVd7OtfE3VSSeLYjXEZYvJx8q429tAaUXKinT3ngxfZe8nNy43ynAQkUxaZuUKn8&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=2bpKZHp34antE11nnPpGzw&oh=00_Afiz8yzdu1gwkpuLljE98iIL3FHCKPnYHe25vnmmd_7oOA&oe=69463634)

- In the **Properties** panel, click the**Select item** drop-down menu

![Configure the first shop item 1](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/496193596_715823304288957_6056480697938770207_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=UNfo2GmUPMgQ7kNvwHVXyVP&_nc_oc=AdmIvaMeDiaNPeP0WUj_scaq-HkbCVG7JAoSEFsCF1fc50wKEMYwnrW9NbyZ-IjrAQE&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=2bpKZHp34antE11nnPpGzw&oh=00_AfgYr8uR9bacLb4GK6Wha1YhosBESs9pHNg5CfFA-rOqiw&oe=69462B8D)

- Select **Gem**, and ensure the first **Quantity** text entry is set to “1”

![Configure the first shop item 2](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/496302319_715823310955623_7819782704967656312_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=JnyQ8awObbsQ7kNvwEfYDV4&_nc_oc=Adk2wGxcJWTlhwFLfGlAXu1EIDMUjOI4WrzCEIokZja9EhqbTrrD1DqFU_r3DLGq8wk&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=2bpKZHp34antE11nnPpGzw&oh=00_Afjah-pEpw8naDQlC2N0nT89XxowerUN6_9u2gBLxe5W8g&oe=69465C71)

- Click the **Select item** drop-down and choose **Apple Pie**

![Configure the first shop item 3](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/495487875_715823324288955_5467991573300658202_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=Zx7zCH1TtIYQ7kNvwGjyuD6&_nc_oc=AdkkSm8AMk4fCSMZmvnT-W1iB6BXDarKCYFjpEjNvNueeM67sdLCiSAhbc2I0sQmShs&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=2bpKZHp34antE11nnPpGzw&oh=00_Afg6S67Rrk6v6cANVZ2z-8zxSVw5ekhA0PV0UziqO-ojrQ&oe=69465649)

- Change the second **Quantity** text entry to “10” (10x Apple Pies = 1x Gem)

![Configure the first shop item 4](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/495487293_715823347622286_2440753294669269601_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=inoCkE5k7jkQ7kNvwFfkDbg&_nc_oc=Adk0ClYF1-s5F1oWljAaXmvEpvl2w5Zk1wiyygm3ln4BZktsuexs-pzd-xrk_kaIgoo&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=2bpKZHp34antE11nnPpGzw&oh=00_AfiNK-8keM_vIXdysj5KxOrUIq25QmBWsKnunJCbTRNRNg&oe=694631A5)

The gem should now be visible in the shop UI, which also lists the purchase price and currency of the item.

![Configure the first shop item 5](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/495936746_715823320955622_6994907453746811368_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=ImePJBeVYjsQ7kNvwG9jA9w&_nc_oc=Adkp27fhf7bdWhPBtgoCd0quh2g_cPwxdPR_lyNogBsLJgqunEi4nbTbvbMmism1D4Y&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=2bpKZHp34antE11nnPpGzw&oh=00_Afg2eLOxW7nc9xq9Bf7JjM8nbmzIvoez20faHw5BFwmPFw&oe=69464A06)

## Adding utility power-ups: Faster pies and faster apples

Purchaseable utility items are great options to sell in the shop. They increase the player’s earning potential, but still require them to perform the core game loop of collecting apples and baking pies in order to maximize their benefit.

The benefit of utility items like faster pies is that it keeps the perceived value of pies high (as it still requires time investment from the player to bake the pie) while ensuring the player feels rewarded for purchasing the power-up (because they can increase their pie output).

Conversely, if we made pies purchaseable they would become devalued, as players with enough money could just pay to get them, rather than dedicating time in-game.

Let’s add “Faster Pies” and “Faster Apples” to the game. Repeat the steps for adding Gems to the shop, but now add the following items:

- Item 2: 1x Faster Pies should be redeemed with 20x Gems
- Item 3: 1x Faster Apples should be redeemed with 30x Gems

Your world shop properties should now be as follows:

![Example world shop proerties](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/495865155_715823334288954_7908726328077301221_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=fqtZCMIBAEMQ7kNvwGBvCPJ&_nc_oc=AdmRZ1IUaQUSn1ewybOiBLi9QqZC9xxCwReTSJPRISmeGDpHBHP_62RXwa3t2DnaIS0&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=2bpKZHp34antE11nnPpGzw&oh=00_Afglvx10YigZCxpl9EIe8ymnSprUE2bQQE8FJYTS9c9oDQ&oe=6946589E)

## Configuring the appearance of the shop

As there are only three items for sale in the shop, you can configure the shop to only show the first three items in the shop UI. This will reduce clutter and make it easier for the player to understand what they can purchase.

With the shop selected, change the following properties in the **Properties** panel:

- **Displayed title**: Cook Shop
- **# Shop Items**: 3
- **Display item balance**: Apple Pie