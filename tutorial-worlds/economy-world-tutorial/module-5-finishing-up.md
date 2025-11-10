Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/economy-world-tutorial/module-5-finishing-up

# Module 5 - Finishing Up

Your Highlight Heading

 You will need to be a member of MHCP and have accepted the monetization Terms Of Service in the Developer Dashboard in order to create in-world items and currency. Find out more about monetization [here](/learn/documentation/mhcp-program/monetization/creator-monetization-partner-program).

Now that you have set up items, you can configure the debug tool to facilitate testing in your world.

This world includes a tool that you can use to debug and test your in-world items. The DebugEconomyUI enables you to grant yourself in-world items during gameplay in order to test the functionality of the world. You can configure the currency and number of items that the tool can grant you.

In the tutorial world there are three tools in the hierarchy for the three main currencies in the world (gems, apples, and pies), though you can duplicate and configure more as needed.

In this section you will configure the DebugEconomyUI to grant you the items you need to test the shop and gameplay.

Your Failure Heading

 If enabled, the DebugEconomyUI will grant you the items you need to test the shop and gameplay, even if the world is published. This is to facilitate your testing of your world. It is strongly recommended that you disable the DebugEconomyUI before publishing your world as discoverable in order to avoid giving players the ability to grant as much currency as they want.

## Configuring the debug tools

- In the **Systems > Commerce** menu, copy the SKU for the apple.
- In the **Hierarchy** panel, expand the DebugEconomy empty object.

![Debug tools in the Economy World Tutorial](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/495723697_715823374288950_8900602290974476239_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=HTE8Z4QCol0Q7kNvwFS6rPD&_nc_oc=Adn5elMT0duX_ZLU6bHv1RBji6fcqfMZuGW76V2rOR9wmX1r6i-9V1jLyClPoj2qkRg&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=OClfD5iEQDA1V2HFBmXoTg&oh=00_Afg_opEvwfNXEwjdgNcoWL_6YVckEy3BjXn2XEPAuUT9wg&oe=692BDF35)

- Select `DebugApples`
- In the Properties panel, ensure that the DebugEconomyUI script has the following:
  - Set `Active` to `true`
  - Paste the SKU into the `itemSKU` property

![Debug tools in the Economy World Tutorial](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/496195623_715823377622283_5033600425838063016_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=2a_6jTe-q1YQ7kNvwFuMlvI&_nc_oc=AdlQjTYne5Txp69gxV5GdFFjWv4HU7Sr0jalRmzMUbotFXxebpmsXw-wfNghbGywzTQ&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=OClfD5iEQDA1V2HFBmXoTg&oh=00_AfjLAiL1NrrVh325PmMILe92pdBJc4oMjVYC9zOkRMjOGw&oe=692BDD4C)

- The other Debug Tools (DebugOvens and DebugGems) can be configured in a similar way.
- (Optional) Set `Active` to `true` for the debug tool with the currency you want to debug, and set `Active` to `false` for the others.

## Testing your game

To test the gameplay and shop:

- Set DebugApples `Active` to `true`, and set DebugGems and DebugOvens `Active` to `false`.
- Preview the world in the desktop editor.
- Observe you already have 1 oven available.
- Collect 5x apples.
- Navigate to the oven you already own.
- Interact with the oven to bake an apple pie.
- Press ‘H’ on the keyboard to open the DebugApples panel.
- Click “+5 Apples” and wait a few seconds. You should see that your HUD updates to show you now have 5 more apples.
- Bake 10 pies by granting yourself apples and using the oven.
- Interact with the shop and trade 10 pies for a Gem.

## Tutorial Complete

Congratulations on reaching the end of this tutorial. In these steps you explored how to implement a shop in your world, and you also explored the benefits and limitations of adding an in-world economy to your world.

To continue your learning, you might also want to extend the world. Here’s some ideas to get you started:

* Add another crop to the world (like a pumpkin) and extend the oven to be able to produce different types of pie.
* Add another crop to the world, like wheat, and create a different process to turn that crop into a sellable good (like a mill to grind the wheat into flour).
* Add the ability to permanently upgrade the ovens to produce faster pies.
* Add an auto-harvest feature which automatically collects the apples from specific spawners.