Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/feature-samples/economy-world-tutorial/module-6-finishing-up

# Module 6 - Finishing Up

Requirements

 You will need to be a member of MHCP and have accepted the monetization Terms Of Service in the Developer Dashboard in order to create in-world items and currency. Find out more about monetization [here](../../../MHCP%20program/Monetization/Monetization%20opportunities.md).

Now that you have set up items, you can configure the debug tool to facilitate testing in your world.

This world includes a tool that you can use to debug and test your in-world items. The DebugEconomyUI enables you to grant yourself in-world items during gameplay in order to test the functionality of the world. You can configure the currency and number of items that the tool can grant you.

In the tutorial world there are three tools in the hierarchy for the three main currencies in the world (gems, apples, and pies), though you can duplicate and configure more as needed.

In this section you will configure the DebugEconomyUI to grant you the items you need to test the shop and gameplay.

Warning

 If enabled, the DebugEconomyUI will grant you the items you need to test the shop and gameplay, even if the world is published. This is to facilitate your testing of your world. It is strongly recommended that you disable the DebugEconomyUI before publishing your world as discoverable in order to avoid giving players the ability to grant as much currency as they want.

## Configuring the debug tools

- In the **Systems > Commerce** menu, copy the SKU for the apple.
- In the **Hierarchy** panel, expand the DebugEconomy empty object.

<details>
<summary>Debug tools in the Economy World Tutorial</summary>

<p></p>

[Debug tools in the Economy World Tutorial](../../../image_data/a80a857c84fd814a9844efeb83164433e394b7c3cd53faa041a24ecb11cb4519.md)

### Overview
This image displays a section of a user interface that appears to be part of a debugging tool or a settings menu. It features a list of items with icons next to them, suggesting categorization or grouping of related functions or data.

### Key Elements
- **Visual description**: The elements are icons followed by text labels.
- **Location**: These elements are arranged vertically.
- **Contents**: 
    - Icon: A small icon resembling a cube with a minus sign inside.
    - Text: The labels read "DebugEconomy," "DebugApples," "DebugOvens," and "DebugGems."
- **Visual styling**: The background is dark gray, the text is white, and the icons are light gray.

### Visual Flow / Relationships
- Most prominent visually: The list items are evenly spaced vertically.
- There are no arrows or lines connecting the elements, indicating a simple, linear reading order.
- Spatial relationships: Each item is adjacent to the next, with no overlap or nesting.

</details>

<p></p>



- Select `DebugApples`
- In the Properties panel, ensure that the DebugEconomyUI script has the following:
  - Set `Active` to `true`
  - Paste the SKU into the `itemSKU` property

<details>
<summary>Debug tools in the Economy World Tutorial</summary>

<p></p>

[Debug tools in the Economy World Tutorial](../../../image_data/5a5b3db4193b0a21911217ede95fb864cf1922b09c03b6f0c0ff779505176b5a.md)

### Overview
This image depicts a user interface element, specifically a settings or configuration panel within a development environment, likely for debugging purposes. The panel includes various fields for inputting data and a toggle switch.

### Key Elements
- **Toggle Switch**: Located at the top right, it has a blue background with white text indicating its current state ("active").
- **Input Fields**: There are four labeled fields:
  - **itemSKU**: Contains the text `apple_615786d0`.
  - **itemName**: Contains the text `Apple`.
  - **grantAmount**: Contains the number `5`.
  - **consumeAmount**: Contains the number `5`.
- **Attach Script Button**: A blue button located at the bottom with the text `Attach script`.

### Visual Flow / Relationships
The most prominent visual element is the toggle switch due to its size and distinct color. The input fields are arranged vertically, with each field having a label above it. The `Attach script` button is positioned below the input fields, suggesting that after entering the necessary data, users can attach a script related to the configuration.

</details>

<p></p>



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