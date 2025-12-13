Source: https://developers.meta.com/horizon-worlds/learn/documentation/typescript/legacy-script-storage

# Legacy Script Storage

Legacy script storage availability

 As of 2/20/2025 all new created worlds will use the file backed script storage solution. The contents of this document applies only to worlds created before 2/20/2025 that have not opted-in to the file-backed scripts solution.

There are some important differences between the legacy script storage solution and file-backed scripts for worlds that leverage the legacy solution.

* There is a size limit per script of 32 kb.
* [Scripts in legacy worlds don’t have an ID and rely solely on script names.](https://developers.meta.com/horizon-worlds/learn/documentation/typescript/script-storage/filebacked-scripts#How-script-identification-works)
* There are some differences in [asset behavior](https://developers.meta.com/horizon-worlds/learn/documentation/typescript/script-storage/filebacked-scripts##benefits) between the legacy and FBS as script storage options.

## Opt-in to file-backed scripts solution

If your created world is on the legacy system, you can always opt-in to the file-backed scripts system at anytime.

**Note**: Clones of worlds that don’t use file-backed scripts will not use file-backed scripts unless opted-in.

To opt-in to file-backed scripts as your script storage solution use the following process:

- Open the **Scripts** dropdown and click the **Settings** gear.
  <details>
  <summary>Horizon scripts drop-down menu</summary>
  
  <p></p>
  
  [Horizon scripts drop-down menu](../image_data/8b4c5925febfb712b5dcf3ced6a446ed6fc0fe3c0cf2b8baa3b21422a83f4dfd.md)
  
  ### Overview
  The image depicts a user interface element within a software application, specifically a section labeled "Scripts." It appears to be part of a development environment or a tool for managing scripts. The interface includes a search bar, a settings icon, and a button to create a new script.
  
  ### Key Elements
  - **Header**: Located at the top-left corner, the word "Scripts" is displayed in white text against a dark background.
  - **Search Bar**: Positioned below the header, it has a magnifying glass icon on the left side and a black background.
  - **Settings Icon**: A gear icon is located to the right of the search bar.
  - **Create New Script Button**: A gray button with the text "Create new script" is situated at the bottom of the "Scripts" section.
  - **Empty State Message**: Below the "Create new script" button, the message "This world doesn't have any scripts." is displayed in white text.
  - **Close Button**: An "X" icon is located at the top-right corner of the "Scripts" section, indicating the ability to close the panel.
  
  ### Visual Flow / Relationships
  The most prominent visual element is the "Create new script" button, as it is centrally located and designed to draw attention. The search bar and settings icon are secondary elements that provide functionality but are less visually dominant. The empty state message serves as a placeholder when no scripts exist, guiding the user to take action.
  
  </details>
  
  <p></p>
  
  
- Under **File-Backed Scripts**, click **Review**.
  <details>
  <summary>File-backed scripts review option select</summary>
  
  <p></p>
  
  [File-backed scripts review option select](../image_data/e3bd2469f95f370c808d65f6efa2afa43b4d10a7bf346bb6230b2182d59f973a.md)
  
  ### Overview
  This image depicts a settings dialog box titled "Script Settings." It contains various configuration options related to script management, with interactive elements such as buttons and dropdown menus. The layout is structured with labels on the left and corresponding controls or information on the right.
  
  ### Key Elements
  - **Title**: "Script Settings" located at the top-left corner.
  - **External Editor**: A section with a label "External Editor" on the left. To the right, there are two buttons labeled "Select" and "Reset."
  - **Default**: Below "External Editor," the word "Default" is displayed without any additional elements.
  - **External Editor Directory**: Another section with a label "External Editor Directory" on the left. Similar to the previous section, there are "Select" and "Reset" buttons to the right.
  - **File-Backed Scripts**: A label indicating "File-Backed Scripts" is present, with a "Review" button to the right.
  - **Update available**: A green notification stating "Update available" is shown below the "File-Backed Scripts" section.
  - **API Version**: A label "API Version" is displayed on the left, with a dropdown menu showing "1.0.0" on the right.
  - **Buttons**: Two buttons are present at the bottom—one labeled "Cancel" and the other "Apply," both with blue backgrounds.
  
  ### Visual Flow / Relationships
  The most prominent visual elements are the labels and the buttons. The "Apply" button is highlighted in blue, suggesting it is the primary action to take after making changes. The "Cancel" button is gray, indicating it is secondary. The "Select" and "Reset" buttons are consistently placed next to their respective sections, implying they are associated with those settings. The "Review" button is positioned to the right of the "File-Backed Scripts" label, indicating it is related to reviewing scripts.
  
  </details>
  
  <p></p>
  
  
- After reading the information, click **Update**.
  <details>
  <summary>File-backed scripts update window</summary>
  
  <p></p>
  
  [File-backed scripts update window](../image_data/30d05c2655d2be5dc27da886158ae990a9aa81548a9b49ad46461c8925385417.md)
  
  ### Overview
  This image depicts a dialog box with two buttons, providing information about updating to file-backed scripts in Meta Horizon. The dialog box has a dark background with white text and blue buttons.
  
  ### Key Elements
  - **Title**: "Update to file-backed scripts" located at the top-left corner.
  - **Close Button**: An 'X' icon located at the top-right corner.
  - **Main Text**: Describes the update to file-backed scripts and its benefits, located centrally within the dialog box.
  - **Bullet Points**: Three points listed under "What you should know about the update," detailing considerations before updating.
  - **Buttons**: Two buttons labeled "Not now" and "Update," located at the bottom of the dialog box.
  
  ### Visual Flow / Relationships
  The most prominent visual element is the title at the top. The main text flows downward, followed by the bullet points. The buttons are positioned at the bottom, with "Not now" on the left and "Update" on the right. There are no arrows or lines connecting elements, but the layout suggests a linear reading order from top to bottom and then from left to right for the buttons.
  
  </details>
  
  <p></p>
  
  
- Once you click **Apply**, your changes will be saved and your world and all the scripts in it will be migrated to FBS.
  <details>
  <summary>Script settings window after opting in to FBS</summary>
  
  <p></p>
  
  [Script settings window after opting in to FBS](../image_data/a63f9e93fd5995ed44f29f5438c8cb9d57cc707bb7b62ab19fdc6db408172485.md)
  
  ### Overview
  This image depicts a settings interface titled "Script Settings." It is a modal window with a dark theme, featuring a sidebar menu on the left and a content area on the right. The content area includes options related to script editing, such as selecting an external editor and setting a directory path.
  
  ### Key Elements
  - **Sidebar Menu**: Located on the left side, with a vertical list of options: "Script editing," "API," and "Console." The "Script editing" option is highlighted with a blue vertical line, indicating selection.
  - **Title**: At the top of the content area, the title "Script editing" is displayed prominently.
  - **Options Section**: Below the title, there are two options:
    - "External Editor" with a "Select" and "Reset" button next to it.
    - "Default (VS Code @ Meta)" which appears to be the current selection.
    - "External Editor Directory" with a "Select" and "Reset" button next to it.
    - A path to a directory is shown under "External Editor Directory."
    - "File-Backed Scripts" with a "Review" button next to it.
  - **Status Message**: Below the options, there is a message stating "Update pending" in yellow text.
  - **Buttons**: At the bottom of the content area, there are two buttons labeled "Cancel" and "Apply."
  
  ### Visual Flow / Relationships
  The most prominent visual element is the "Script editing" title, as it is the active section. The "External Editor" and "External Editor Directory" options are closely related and grouped together. The "Update pending" message is a key indicator of the current status. The "Cancel" and "Apply" buttons at the bottom suggest interactive actions that can be taken based on the user's decisions within this interface.
  
  </details>
  
  <p></p>
  
  
- A notification will appear when the migration is complete.

## What to look out for after opting in a world

After opting in a world, there are some scenarios where you may need to manually update your scripts and assets to make sure they behave as intended.

### Existing assets won’t be automatically migrated to the new script storage method

If your world uses a mix of world scripts and asset scripts, you must manually recreate your assets to republish them with references to the newly stored scripts. If you skip this step, existing assets aren’t guaranteed to work as intended and won’t get the benefits of the new script storage method.

New assets created in opted-in worlds will use the new script storage method.

### The new script storage method doesn’t allow for multiple versions of the same script in a world (conflicting script versions)

If your world contains assets that reference a different version of a script than the one in the world, those assets will instead reference the world’s script version when spawned. If your world contains spawned assets that reference different versions of the same script, each of the spawned assets will now use the same version of the script. They will use the script version in the world if it exists, or the script version attached to whichever asset is spawned first.

When either of these situations occur, you should see a message in the scripting console to let you know that your world had conflicting script versions and the references have been automatically changed to resolve any conflicts.

To prevent any unintended behavior, update your assets to reference the intended script version. You can do this by recreating the asset with the intended script version, pulling it into the world, and resaving the asset.