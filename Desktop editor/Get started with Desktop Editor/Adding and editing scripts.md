---
source: https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/getting-started/adding-and-editing-scripts
---

# Adding and editing scripts

## Set up desktop editor to use your IDE

Meta Horizon Worlds Creator docs reference using Visual Studio Code (VS Code), but you can use any IDE you’ve installed on your Windows PC. See [Adding an IDE to Desktop Editor](../../Scripting/Get%20started%20with%20TypeScript/Adding%20an%20IDE%20to%20the%20desktop%20editor.md) for detailed instructions on how to set up desktop editor with your preferred IDE.

For troubleshooting VS Code refer to the documentation on [Troubleshooting VS code for Meta Horizon Worlds library module](../../Scripting/Get%20started%20with%20TypeScript/If%20VS%20Code%20can’t%20find%20a%20V2%20module.md),

## Getting started with TypeScript scripting

Refer to [TypeScript Getting Started](../../Scripting/Get%20started%20with%20TypeScript/Using%20TypeScript%20in%20Meta%20Horizon%20Worlds.md) docs for more information on how to start using TypeScript with Meta Horizon Worlds.

## Adding an existing script to an entity

These instructions walk you through assigning a script reference after you have created the script.

- Select an object in the Hierarchy menu or in the scene pane.
- In the **Properties** panel, scroll to the **Script** section.
- Select a script from the **Attached Script** dropdown menu.
- The script is applied to the object, and the properties defined in the script now appear in the **Script** section of the **Properties** panel.
  ![The script properties appear in the Properties panel.](../../_assets/images/ce1f47a5dd2155675a6d2d09ce9afcb299ad7103a76ad85e667b879c04c49bd7.png)

## Copying scripts

Script copying is an available feature to save you time. You can copy a script from an object, and paste it directly onto another. You can reference an object from a script by dragging it onto a script that is already attached to an object.

#### To copy a script

- Open the **Properties panel** for an object that already has a script attached.
- Scroll down to the **Script** section, and click the menu dropdown.
- From the menu that appears, select **Copy Script**. The script is copied into memory.

![Image shows the script menu dropdown, with the "Copy Script" option highlighted.](../../_assets/images/f8dfd63eec4eac2f7dc22f2dce923d7629b7d2b750b21b4cc46f54b2566226b1.png)

#### To paste a copied script

- Open the **Properties Panel** for another object.
- Navigate to the **Script** section, then click the menu dropdown.
- From the menu that appears, select **Paste all script properties**. A copy of the script is attached to the object.

![Image shows the script menu drop-down, with the "Paste as new attached script" option selected.](../../_assets/images/bf88fba5c443e98d7de85625d79fd99c57e0f7e78287f7a7c7f042f769379257.png)