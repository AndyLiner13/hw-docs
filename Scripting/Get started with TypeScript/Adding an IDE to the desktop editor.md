Source: https://developers.meta.com/horizon-worlds/learn/documentation/typescript/getting-started/adding-an-ide-to-desktop-editor

# Adding an IDE to the desktop editor

You will need an IDE to write your own scripts for Meta Horizon Worlds. By default, the desktop editor uses [Visual Studio Code](https://code.visualstudio.com/download), but if you want to use a different editor, you can configure it to use another IDE instead.

To configure the desktop editor, you need to make sure that you use version 4.7.4 of TypeScript. While you can use other versions of TypeScript, you may encounter issues when you use them with Meta Horizon Worlds APIs. If you don’t have TypeScript installed yet or you’re uncertain what version you’ve got, see [Managing Typescript](Managing%20Typescript.md).

Whichever IDE you choose to use, you will need to configure the desktop editor to use it. Steps to do so can be found below:

* [Using VS Code with the desktop editor](Adding%20an%20IDE%20to%20the%20desktop%20editor.md#configure-the-desktop-editor-to-use-vs-code)
* [Using another third-party IDE with the desktop editor](Adding%20an%20IDE%20to%20the%20desktop%20editor.md#using-another-third-party-ide-with-the-desktop-editor)

## Using VS Code with the desktop editor

This section shows you how to set up Visual Studio Code (VS Code) for editing TypeScript scripts with the desktop editor.

**Configure the desktop editor to use VS Code**

- If it’s not already installed on your computer, install the latest version of VS Code from the [VS Code website](https://code.visualstudio.com/).
- Ensure that you have version 4.7.4 of TypeScript installed. For more information on doing this, see [Managing Typescript](Managing%20Typescript.md).
- Note the file path to where VS Code is installed on your computer. You’ll need this in the following steps.
- Open the Meta Horizon Worlds desktop editor and then open the **Scripts** panel.

  <details>
  <summary>The Scripts Panel</summary>
  
  <p></p>
  
  [The Scripts Panel](../../image_data/1b9935d13495ca4048ea47130763ec1076fe7f64a6f8e36a5510a972c7d2637c.md)
  
  ### Overview
  This image depicts a small user interface element, specifically a dropdown menu indicator for a "Scripts" option. The overall composition is simple and minimalistic.
  
  ### Key Elements
  - **Visual description**: A rectangular button with rounded corners.
  - **Location**: Positioned at the top-left corner of the image.
  - **Contents**: Contains the word "Scripts" in a sans-serif font.
  - **Visual styling**: The button has a light gray background with a darker gray border. The text is black.
  
  ### Visual Flow / Relationships
  - Most prominent visually: The button itself.
  - There are no arrows, lines, or connectors present.
  - Spatial relationship: The button is adjacent to the top-left corner without any overlapping elements.
  
  </details>
  
  <p></p>
  
  
- Click the gear-shaped icon to open **Settings**.

  <details>
  <summary>The Scripts panel with mouse over Settings icon</summary>
  
  <p></p>
  
  [The Scripts panel with mouse over Settings icon](../../image_data/dbd81164b9fea92227d1eaad614b4c45db55cb0db686f5d5b47e6e9c9cc7f541.md)
  
  ### Overview
  This image depicts a user interface element within a software application, specifically a settings icon and its associated menu. The interface includes a search bar, a plus sign, and a settings icon, which is highlighted with a red bounding box.
  
  ### Key Elements
  - **Search Bar**: Located at the top-left, it is a rectangular input field with a magnifying glass icon on the left side.
  - **Plus Sign**: Positioned next to the search bar, it is a simple '+' symbol.
  - **Settings Icon**: A gear-shaped icon located to the right of the plus sign. It is highlighted with a red bounding box.
  - **Menu**: A dropdown menu appears when the settings icon is clicked, showing the word 'Settings' beneath it.
  
  ### Visual Flow / Relationships
  The most prominent visual element is the settings icon, as it is highlighted and draws attention due to the red bounding box. The menu is directly related to the settings icon, indicating that clicking the settings icon will open the menu. The search bar and plus sign are secondary elements, providing additional functionality within the interface.
  
  </details>
  
  <p></p>
  
  
- Next to **External Editor**, click **Select**.

  <details>
  <summary>Script Settings dialog box</summary>
  
  <p></p>
  
  [Script Settings dialog box](../../image_data/47f0d140f87c0d942fe8d06f697fb54162a7130e3010610f9b8160761ad64d47.md)
  
  ### Overview
  This image depicts a settings dialog box titled "Script Settings." It contains options related to script editing within a software interface. The layout includes a sidebar with navigation options ("Script editing," "API," "Console") and a main content area displaying settings for external editors and file-backed scripts.
  
  ### Key Elements
  - **Sidebar (Left Panel)**:
    - **Visual description**: A vertical menu with options.
    - **Location**: Left side of the dialog box.
    - **Contents**: "Script editing," "API," "Console."
    - **Visual styling**: Dark gray background, white text, blue highlight under "Script editing."
  
  - **Main Content Area (Right Panel)**:
    - **Visual description**: A section displaying script editing settings.
    - **Location**: Right side of the dialog box.
    - **Contents**:
      - "External Editor"
        - Sub-element: "Default (VS Code)"
      - "External Editor Directory"
        - Sub-element: "C:/Users/AppData/LocalLow/Meta/Horizon Worlds"
      - "File-Backed Scripts"
        - Sub-element: "Updated"
    - **Visual styling**: Dark gray background, white text, light gray placeholders for "Select" and "Reset" buttons next to each setting.
  
  - **Buttons at the Bottom**:
    - **Visual description**: Two buttons labeled "Cancel" and "Apply."
    - **Location**: Bottom of the dialog box.
    - **Contents**:
      - "Cancel": Gray button with white text.
      - "Apply": Blue button with white text.
    - **Visual styling**: Standard button design with rounded corners.
  
  ### Visual Flow / Relationships
  - **Most prominent visually**: The "Script editing" option in the sidebar is highlighted, drawing attention to the main content area.
  - **Arrows, lines, connectors**: None.
  - **Implied reading order**: The user would typically read from left to right and then down the content area before interacting with the buttons at the bottom.
  
  </details>
  
  <p></p>
  
  
- Paste the file path from Step 3 into the **File name** field and then click **Open**. You can also navigate to the EXE file for your IDE and then click **Open**.
- Click **Apply** to set VS Code as the external editor.

## Using another third-party IDE with the desktop editor

These section shows you how to set up the desktop editor to use an IDE other than VS Code as the default IDE.

- Ensure that you have version 4.7.4 of TypeScript installed. For more information on doing this, see [Managing Typescript](Managing%20Typescript.md).
- If it’s not already installed on your computer, install the latest version of your third-party IDE.
- Note the file path to where the EXE file for your IDE is installed on your computer. You’ll need this in the following steps.
- Open the Meta Horizon Worlds desktop editor and then open the **Scripts** panel.

  <details>
  <summary>The Scripts Panel dropdown</summary>
  
  <p></p>
  
  [The Scripts Panel dropdown](../../image_data/1b9935d13495ca4048ea47130763ec1076fe7f64a6f8e36a5510a972c7d2637c.md)
  
  ### Overview
  This image depicts a small user interface element, specifically a dropdown menu indicator for a "Scripts" option. The overall composition is simple and minimalistic.
  
  ### Key Elements
  - **Visual description**: A rectangular button with rounded corners.
  - **Location**: Positioned at the top-left corner of the image.
  - **Contents**: Contains the word "Scripts" in a sans-serif font.
  - **Visual styling**: The button has a light gray background with a darker gray border. The text is black.
  
  ### Visual Flow / Relationships
  - Most prominent visually: The button itself.
  - There are no arrows, lines, or connectors present.
  - Spatial relationship: The button is adjacent to the top-left corner without any overlapping elements.
  
  </details>
  
  <p></p>
  
  
- Click the gear-shaped icon to open **Settings**.
- Next to **External Editor**, click **Select**.

  <details>
  <summary>Script Settings dialog box</summary>
  
  <p></p>
  
  [Script Settings dialog box](../../image_data/47f0d140f87c0d942fe8d06f697fb54162a7130e3010610f9b8160761ad64d47.md)
  
  ### Overview
  This image depicts a settings dialog box titled "Script Settings." It contains options related to script editing within a software interface. The layout includes a sidebar with navigation options ("Script editing," "API," "Console") and a main content area displaying settings for external editors and file-backed scripts.
  
  ### Key Elements
  - **Sidebar (Left Panel)**:
    - **Visual description**: A vertical menu with options.
    - **Location**: Left side of the dialog box.
    - **Contents**: "Script editing," "API," "Console."
    - **Visual styling**: Dark gray background, white text, blue highlight under "Script editing."
  
  - **Main Content Area (Right Panel)**:
    - **Visual description**: A section displaying script editing settings.
    - **Location**: Right side of the dialog box.
    - **Contents**:
      - "External Editor"
        - Sub-element: "Default (VS Code)"
      - "External Editor Directory"
        - Sub-element: "C:/Users/AppData/LocalLow/Meta/Horizon Worlds"
      - "File-Backed Scripts"
        - Sub-element: "Updated"
    - **Visual styling**: Dark gray background, white text, light gray placeholders for "Select" and "Reset" buttons next to each setting.
  
  - **Buttons at the Bottom**:
    - **Visual description**: Two buttons labeled "Cancel" and "Apply."
    - **Location**: Bottom of the dialog box.
    - **Contents**:
      - "Cancel": Gray button with white text.
      - "Apply": Blue button with white text.
    - **Visual styling**: Standard button design with rounded corners.
  
  ### Visual Flow / Relationships
  - **Most prominent visually**: The "Script editing" option in the sidebar is highlighted, drawing attention to the main content area.
  - **Arrows, lines, connectors**: None.
  - **Implied reading order**: The user would typically read from left to right and then down the content area before interacting with the buttons at the bottom.
  
  </details>
  
  <p></p>
  
  
- Paste the file path from Step 3 into the **File name** field and then click **Open**. You can also navigate to the EXE file for your IDE and then click **Open**.
- Click **Apply** to set VS Code as the external editor.