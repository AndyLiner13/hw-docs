---
source: https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/getting-started/adding-and-editing-scripts
---

# [Adding and editing scripts](#adding-and-editing-scripts)

## [Set up desktop editor to use your IDE](#set-up-desktop-editor-to-use-your-ide)

Meta Horizon Worlds Creator docs reference using Visual Studio Code (VS Code), but you can use any IDE you’ve installed on your Windows PC. See [Adding an IDE to Desktop Editor](../../Scripting/Get%20started%20with%20TypeScript/Adding%20an%20IDE%20to%20the%20desktop%20editor.md) for detailed instructions on how to set up desktop editor with your preferred IDE.

For troubleshooting VS Code refer to the documentation on [Troubleshooting VS code for Meta Horizon Worlds library module](../../Scripting/Get%20started%20with%20TypeScript/If%20VS%20Code%20can%E2%80%99t%20find%20a%20V2%20module.md),

## [Getting started with TypeScript scripting](#getting-started-with-typescript-scripting)

Refer to [TypeScript Getting Started](../../Scripting/Get%20started%20with%20TypeScript/Using%20TypeScript%20in%20Meta%20Horizon%20Worlds.md) docs for more information on how to start using TypeScript with Meta Horizon Worlds.

## [Adding an existing script to an entity](#adding-an-existing-script-to-an-entity)

These instructions walk you through assigning a script reference after you have created the script.

1. Select an object in the Hierarchy menu or in the scene pane.
2. In the **Properties** panel, scroll to the **Script** section.
3. Select a script from the **Attached Script** dropdown menu.
4. The script is applied to the object, and the properties defined in the script now appear in the **Script** section of the **Properties** panel. ![The script properties appear in the Properties panel.](../../_assets/images/ce1f47a5dd2155675a6d2d09ce9afcb299ad7103a76ad85e667b879c04c49bd7.png)

## [Copying scripts](#copying-scripts)

Script copying is an available feature to save you time. You can copy a script from an object, and paste it directly onto another. You can reference an object from a script by dragging it onto a script that is already attached to an object.

#### [To copy a script](#to-copy-a-script)

1. Open the **Properties panel** for an object that already has a script attached.
2. Scroll down to the **Script** section, and click the menu dropdown.
3. From the menu that appears, select **Copy Script**. The script is copied into memory.

![Image shows the script menu dropdown, with the "Copy Script" option highlighted.](../../_assets/images/0dfb9a8f3d9848e6d1a2a368918383b39594ee50b4f11d8d49f925c59e8f03ec.png)

#### [To paste a copied script](#to-paste-a-copied-script)

1. Open the **Properties Panel** for another object.
2. Navigate to the **Script** section, then click the menu dropdown.
3. From the menu that appears, select **Paste all script properties**. A copy of the script is attached to the object.

![Image shows the script menu drop-down, with the "Paste as new attached script" option selected.](../../_assets/images/5b917bfe9116d726b63b0f1579059081f77aa77fefd83c9a676e46eaf9aee004.png)

