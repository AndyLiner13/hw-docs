Source: https://developers.meta.com/horizon-worlds/learn/documentation/typescript/getting-started/using-typescript-in-horizon-worlds

# Using TypeScript in Meta Horizon Worlds

The following topics explain some of the basics about using TypeScript in Meta Horizon Worlds. The following operations may also be performed by opening the **Properties** panel and clicking the **Attach script** button.

## Create a new script

- Open the desktop editor and click **Scripts**.

  <details>
  <summary>The Scripts Panel dropdown</summary>
  
  <p></p>
  
  [The Scripts Panel dropdown](../../image_data/cd19f52f2177a2235b7c6833f260ba8effb693d559ffb3f9b3979bed3294c06f.md)
  
  ### Overview
  The image depicts a user interface from a game development environment, specifically showing a scene editor or asset management tool. The interface includes a sidebar with a hierarchy of assets, a central viewport displaying a 3D scene, and a bottom panel labeled "Asset Library."
  
  ### Key Elements
  - **Sidebar (Left Panel)**:
    - **Hierarchy Section**: Contains a tree-like structure with folders and assets labeled such as "_P," "ConstsWorld," "[ARENA-CORE]," and others.
    - **Search Bar**: Located at the top of the sidebar, with the placeholder text "> Search hierarchy."
    - **Asset Library Section**: Displays a grid of assets under "My Assets," including items like "bronze_age_axe," "ancient_coin," and others.
  
  - **Central Viewport**:
    - **Scene Display**: Shows a 3D environment with a corridor and a ceiling light fixture. A floating cube with a blue and white texture is visible in the foreground.
  
  - **Bottom Panel**:
    - **Tabs**: Includes tabs labeled "Asset Library," "Console," "Tests," "NPC Debugger," and "Performance."
    - **Asset Library Tab**: Contains a search bar with the placeholder text "> Search Asset Library" and a dropdown menu for sorting options ("Newest," "Oldest," "Creator").
    - **Asset Grid**: Displays a grid of assets under "My Assets," with icons representing various items.
  
  ### Visual Flow / Relationships
  - **Most Prominent Element**: The central viewport displaying the 3D scene.
  - **Arrows/Connectors**: None visible.
  - **Reading Order**: The interface follows a typical left-to-right, top-to-bottom flow, starting with the sidebar, moving to the viewport, and then to the asset library grid.
  
  </details>
  
  <p></p>
  
  
- Click **Create new script**.

  **Note**: This button is only visible if you have no scripts created for this world.

  <details>
  <summary>Scripts panel showing no scripts</summary>
  
  <p></p>
  
  [Scripts panel showing no scripts](../../image_data/30a6a84da2d39d2cb665b45a0ed3608062a93d96705e2695a3e6d144f1390291.md)
  
  ### Overview
  The image depicts a user interface element within a software application, specifically a section for managing scripts. The main focus is on creating a new script, indicated by a prominent button labeled "Create new script."
  
  ### Key Elements
  - **Header**: Located at the top-left corner, the word "Scripts" is displayed in white text against a dark background.
  - **Search Bar**: Positioned just below the header, it contains a magnifying glass icon and a placeholder text "Search" in light gray.
  - **Add Button**: A small plus sign icon is situated next to the search bar.
  - **Settings Icon**: A gear icon is located to the right of the add button.
  - **More Options Icon**: Three vertical dots are positioned to the far right of the settings icon.
  - **Central Icon**: A large white code snippet icon with angled brackets is centered below the header.
  - **Message Text**: Below the central icon, the message "This world doesn't have any scripts." is displayed in smaller white text.
  - **Create New Script Button**: A red-highlighted rectangular button labeled "Create new script" is prominently placed below the message text.
  
  ### Visual Flow / Relationships
  The most prominent visual element is the "Create new script" button, which draws attention due to its red highlighting. The layout follows a top-down, left-to-right progression, with the header providing context, the search bar and add button offering functionality, and the central icon and message text explaining the current state. The red button acts as a clear call-to-action, guiding the user's interaction.
  
  </details>
  
  <p></p>
  
  

  If you already have scripts created, you can click the **Create new script** icon to create a new script.

  <details>
  <summary>The Create New Script icon in the Scripts panel</summary>
  
  <p></p>
  
  [The Create New Script icon in the Scripts panel](../../image_data/325b2777efb1aab8629b2e6056e3af71efd0995f69f8df5715f487d77eb56492.md)
  
  ### Overview
  This image depicts a user interface element within a software application, specifically a script creation panel. The panel includes a search bar, a button for creating new scripts, and a settings gear icon.
  
  ### Key Elements
  - **Search Bar**: Located at the top-left, it has a magnifying glass icon and a placeholder text "> Create new script".
  - **Create New Script Button**: Positioned centrally at the top, it is a plus sign (+) enclosed in a red rectangle.
  - **Settings Gear Icon**: Situated to the right of the create button, it is a standard gear symbol.
  - **Input Field**: Below the search bar, there is a text input field with a blue border, indicating where users can type to search for scripts.
  - **Warning Triangle**: A small red triangle with a white exclamation mark is located next to the input field, suggesting an error or warning related to the script creation process.
  
  ### Visual Flow / Relationships
  The most prominent visual element is the create new script button due to its central placement and distinct red highlight. The search bar and settings gear are secondary elements, providing additional functionality. The input field and warning triangle are positioned below the main action buttons, indicating that they are part of the form submission process.
  
  </details>
  
  <p></p>
  
  
- Enter a name for your new script.

  <details>
  <summary>Input field for script names</summary>
  
  <p></p>
  
  [Input field for script names](../../image_data/bcab2b1a91c175cea3a19a8a1ca97ac682e2ea41fa7961bde6c15be8148ab3bb.md)
  
  ### Overview
  This image depicts a simple text input field interface element, likely part of a chat or messaging application. The field is bordered by a blue outline, suggesting interactivity or selection status. The input field is accompanied by a character counter indicating the remaining characters allowed.
  
  ### Key Elements
  - **Input Field**: A rectangular text box with a blue border. It contains a blinking cursor (`|`) indicating readiness for text entry.
  - **Counter**: Displays "0/128" in white text, indicating the current number of characters entered compared to the maximum limit of 128 characters.
  - **Warning Icon**: A red triangle with a white exclamation mark inside, positioned to the right of the counter, indicating an error or warning related to the input.
  
  ### Visual Flow / Relationships
  The most prominent visual element is the input field, as it is the primary interactive area. The counter and warning icon are secondary elements providing feedback on the input status. There are no arrows or lines connecting these elements, but the layout suggests a linear reading order moving from left to right.
  
  </details>
  
  <p></p>
  
  

  The new script will appear in the scripts list, first with the action **compiling** next to it, and then **compiled**.
- Hover over your script item, and click the menu button.

  <details>
  <summary>A vertical ellipsis menu next to the script</summary>
  
  <p></p>
  
  [A vertical ellipsis menu next to the script](../../image_data/87387261df910edb893a6ae0809a5fa0abff38d86b0a7440286a0e089eaa86ec.md)
  
  ### Overview
  This image depicts a notification or status bar at the top of a user interface, likely within a software application. It contains a message and a set of interactive elements.
  
  ### Key Elements
  - **Visual description**: The notification bar has a dark background with light-colored text and icons.
  - **Location**: Positioned at the top of the screen.
  - **Contents**: 
      - A circular icon with a 'T' inside, possibly representing a user profile or a specific feature.
      - Text that reads "new behavior" followed by "Saved at 2:21:58 - Compiled".
      - A vertical ellipsis ('...') icon located on the far right.
  - **Visual styling**: The text is white, and the background is a dark grayish-blue. The ellipsis icon has a red border.
  
  ### Visual Flow / Relationships
  The most prominent visual element is the text message, which conveys the primary information. The ellipsis icon suggests additional options or settings related to the notification.
  
  </details>
  
  <p></p>
  
  
- Select **Open in External Editor**.

  <details>
  <summary>Opening the External Editor</summary>
  
  <p></p>
  
  [Opening the External Editor](../../image_data/796d8c653e92f786251b178261af4d86a0bd28221acd048714a191914b950225.md)
  
  ### Overview
  This image depicts a user interface element, specifically a menu item within a software application. The menu item is highlighted with a red rectangular border, indicating selection or focus.
  
  ### Key Elements
  - **Visual description**: A rectangular button with rounded corners.
  - **Location**: Top-left corner of the image.
  - **Contents**: The text "Open in External Editor" is displayed in white font on a dark gray background.
  - **Visual styling**: The button has a solid red border and a darker gray background compared to the surrounding area.
  
  ### Visual Flow / Relationships
  The most prominent visual element is the highlighted button. There are no arrows, lines, or connectors present. The spatial relationship is straightforward, with the button being the focal point due to its highlighted state.
  
  </details>
  
  <p></p>
  
  
- Write your script in your external editor.

  <details>
  <summary>A new script</summary>
  
  <p></p>
  
  [A new script](../../image_data/58d437f09dfd18abb4d0dfdf049ca6c9080182073a8a6364e4794b02b7016c3a.md)
  
  ### Overview
  This image depicts a code editor window displaying TypeScript code. The editor has a dark theme with syntax highlighting. The file being edited is named `test.ts`.
  
  ### Key Elements
  - **File Name**: Located at the top-left corner of the editor window. It reads `TS test.ts`.
  - **Code Editor Area**: Occupies the majority of the window, showing TypeScript code.
      - **Line Numbers**: Visible on the left side, numbered from 1 to 10.
      - **Code Content**: Contains TypeScript code with syntax highlighting.
          - **Line 1**: `import * as hz from 'horizon/core';`
          - **Line 2**: Empty line.
          - **Line 3**: `class test extends hz.Component<typeof test> {`
          - **Line 4**: `static propsDefinition = {};`
          - **Line 5**: Empty line.
          - **Line 6**: `start() {`
          - **Line 7**: Empty line.
          - **Line 8**: Empty line.
          - **Line 9**: Empty line.
          - **Line 10**: `hz.Component.register(test);`
  - **Editor Controls**: Located at the top-right corner of the editor window. There is a small icon resembling an "X" which likely serves as a close button.
  
  ### Visual Flow / Relationships
  The most prominent visual element is the code content itself, as it occupies the largest area of the editor window. The file name and editor controls are secondary elements, providing context and functionality. The code lines follow a typical reading order from top to bottom.
  
  </details>
  
  <p></p>
  
  

  When VS Code opens, your new script is ready for writing. It will automatically include a default class definition and multiple statements.

**Note**: The first statement in your script imports the required Meta Horizon worlds module. For example: `import { PropTypes } from 'horizon/core';`

## Edit an existing script

- Select the TypeScript file in your script library.
- Hover over the script file, and click the menu button.

  <details>
  <summary>A vertical ellipsis menu next to the script</summary>
  
  <p></p>
  
  [A vertical ellipsis menu next to the script](../../image_data/87387261df910edb893a6ae0809a5fa0abff38d86b0a7440286a0e089eaa86ec.md)
  
  ### Overview
  This image depicts a notification or status bar at the top of a user interface, likely within a software application. It contains a message and a set of interactive elements.
  
  ### Key Elements
  - **Visual description**: The notification bar has a dark background with light-colored text and icons.
  - **Location**: Positioned at the top of the screen.
  - **Contents**: 
      - A circular icon with a 'T' inside, possibly representing a user profile or a specific feature.
      - Text that reads "new behavior" followed by "Saved at 2:21:58 - Compiled".
      - A vertical ellipsis ('...') icon located on the far right.
  - **Visual styling**: The text is white, and the background is a dark grayish-blue. The ellipsis icon has a red border.
  
  ### Visual Flow / Relationships
  The most prominent visual element is the text message, which conveys the primary information. The ellipsis icon suggests additional options or settings related to the notification.
  
  </details>
  
  <p></p>
  
  
- Select **Open in External Editor**.

  <details>
  <summary>Opening the External Editor</summary>
  
  <p></p>
  
  [Opening the External Editor](../../image_data/796d8c653e92f786251b178261af4d86a0bd28221acd048714a191914b950225.md)
  
  ### Overview
  This image depicts a user interface element, specifically a menu item within a software application. The menu item is highlighted with a red rectangular border, indicating selection or focus.
  
  ### Key Elements
  - **Visual description**: A rectangular button with rounded corners.
  - **Location**: Top-left corner of the image.
  - **Contents**: The text "Open in External Editor" is displayed in white font on a dark gray background.
  - **Visual styling**: The button has a solid red border and a darker gray background compared to the surrounding area.
  
  ### Visual Flow / Relationships
  The most prominent visual element is the highlighted button. There are no arrows, lines, or connectors present. The spatial relationship is straightforward, with the button being the focal point due to its highlighted state.
  
  </details>
  
  <p></p>
  
  
- Make your changes and save the file in your external editor.

Once your changes have been made and saved in your external editor, the desktop editor will attempt to compile them. If there are errors in your script, the compiling will not be successful and the script will display a red warning symbol:

<details>
<summary>An error symbol next to a flawed script</summary>

<p></p>

[An error symbol next to a flawed script](../../image_data/a79c3dd68be206b32e8f9ac95d23d287504ea51009df41085b07d0a4bc3adfa1.md)

### Overview
This image depicts a user interface element, likely a notification or status indicator, within a software application. The overall composition includes a dark background with text and a small icon.

### Key Elements
- **Visual description**: A rectangular box with rounded corners.
- **Location**: Top-left corner of the image.
- **Contents**: Contains a white circle with a red 'X' inside, a large white 'T', and the word "test" next to it.
- **Visual styling**: Dark gray background, white text and icon, red accent for the 'X'.

- **Visual description**: A small white circle with a red 'X'.
- **Location**: Next to the 'T'.
- **Contents**: A red 'X'.
- **Visual styling**: White circle, red 'X', no additional styling.

- **Visual description**: A large white 'T'.
- **Location**: To the right of the 'X'.
- **Contents**: The letter 'T'.
- **Visual styling**: Large white 'T', no additional styling.

- **Visual description**: The phrase "Not Compiled".
- **Location**: Below the 'T'.
- **Contents**: The words "Not Compiled".
- **Visual styling**: White text on a dark background.

- **Visual description**: Three vertical dots.
- **Location**: Top-right corner.
- **Contents**: Three vertical dots.
- **Visual styling**: White dots on a dark background.

### Visual Flow / Relationships
The most prominent visual element is the 'T' as it is the largest and most central. The 'X' and the phrase "Not Compiled" are secondary elements providing additional information. The three dots suggest a menu or more options are available.

</details>

<p></p>



You can hover over the symbol to get a description of the error. To fix the error, open the script in the external editor again and make your changes.

## Recompile an existing script

**Note**: The desktop editor will automatically recompile a script once you’ve saved it in the external editor.

- Select the TypeScript file in your script library.
- Hover over the script file, and click the menu button.

  <details>
  <summary>A vertical ellipsis menu next to the script</summary>
  
  <p></p>
  
  [A vertical ellipsis menu next to the script](../../image_data/87387261df910edb893a6ae0809a5fa0abff38d86b0a7440286a0e089eaa86ec.md)
  
  ### Overview
  This image depicts a notification or status bar at the top of a user interface, likely within a software application. It contains a message and a set of interactive elements.
  
  ### Key Elements
  - **Visual description**: The notification bar has a dark background with light-colored text and icons.
  - **Location**: Positioned at the top of the screen.
  - **Contents**: 
      - A circular icon with a 'T' inside, possibly representing a user profile or a specific feature.
      - Text that reads "new behavior" followed by "Saved at 2:21:58 - Compiled".
      - A vertical ellipsis ('...') icon located on the far right.
  - **Visual styling**: The text is white, and the background is a dark grayish-blue. The ellipsis icon has a red border.
  
  ### Visual Flow / Relationships
  The most prominent visual element is the text message, which conveys the primary information. The ellipsis icon suggests additional options or settings related to the notification.
  
  </details>
  
  <p></p>
  
  
- Select **Recompile**.

  <details>
  <summary>Selecting the Recompile option</summary>
  
  <p></p>
  
  [Selecting the Recompile option](../../image_data/e3018f68c6dde5eb4f8a64b8bcdefd08540c3e1ba2ce8ff12efc73d742c015b0.md)
  
  ### Overview
  This image depicts a user interface element, specifically a menu item within a software application. The menu item is highlighted with a red bounding box, indicating its importance or selection status.
  
  ### Key Elements
  - **Visual description**: The menu item is rectangular with rounded corners.
  - **Location**: Positioned at the top of the menu.
  - **Contents**: Contains the text "Recompile" in white font against a dark background.
  - **Visual styling**: The background is dark gray (#333333), and the text is white (#FFFFFF).
  
  ### Visual Flow / Relationships
  The most prominent visual element is the "Recompile" menu item, which is clearly marked by the red bounding box. There are no arrows or lines connecting elements, but the menu items are arranged vertically, suggesting a typical dropdown menu layout.
  
  </details>
  
  <p></p>
  
  

## Rename an existing script

- Select the TypeScript file in your script library.
- Hover over the script file, and click the menu button.

  <details>
  <summary>A vertical ellipsis menu next to the script</summary>
  
  <p></p>
  
  [A vertical ellipsis menu next to the script](../../image_data/87387261df910edb893a6ae0809a5fa0abff38d86b0a7440286a0e089eaa86ec.md)
  
  ### Overview
  This image depicts a notification or status bar at the top of a user interface, likely within a software application. It contains a message and a set of interactive elements.
  
  ### Key Elements
  - **Visual description**: The notification bar has a dark background with light-colored text and icons.
  - **Location**: Positioned at the top of the screen.
  - **Contents**: 
      - A circular icon with a 'T' inside, possibly representing a user profile or a specific feature.
      - Text that reads "new behavior" followed by "Saved at 2:21:58 - Compiled".
      - A vertical ellipsis ('...') icon located on the far right.
  - **Visual styling**: The text is white, and the background is a dark grayish-blue. The ellipsis icon has a red border.
  
  ### Visual Flow / Relationships
  The most prominent visual element is the text message, which conveys the primary information. The ellipsis icon suggests additional options or settings related to the notification.
  
  </details>
  
  <p></p>
  
  
- Select **Rename**.

  <details>
  <summary>Selecting the rename option</summary>
  
  <p></p>
  
  [Selecting the rename option](../../image_data/e2fc3ff46b69a7066dd09dc264ecfff590b67d6cc7a00b6e21876a3e507843f1.md)
  
  ### Overview
  This image depicts a user interface element showing a menu or options panel with two actionable buttons labeled "Rename" and "Delete". The layout suggests a settings or configuration screen.
  
  ### Key Elements
  - **Visual description**: The image shows a rectangular panel with two buttons.
  - **Location**: The buttons are located within a larger panel that seems to be part of a settings or configuration interface.
  - **Contents**: 
    - The first button has the text "Rename" in white font on a red background.
    - The second button has the text "Delete" in white font on a red background.
  - **Visual styling**: Both buttons have a solid red background with white text. There are no borders around the buttons themselves, but the entire panel has a subtle shadow effect, giving it a slight elevation.
  
  ### Visual Flow / Relationships
  - **Most prominent visually**: The "Rename" button is the most prominent due to its placement and color contrast.
  - **Spatial relationships**: The buttons are arranged horizontally, with "Rename" above "Delete". There are no connecting lines or arrows indicating a specific reading order.
  
  </details>
  
  <p></p>
  
  
- Make any name changes in the text box.
  **Note**: Changing the name of a script will only change the reference to it. It will not recompile the script.

## Delete an existing script

- Select the TypeScript file in your script library.
- Hover over the script file, and click the menu button.

  <details>
  <summary>A vertical ellipsis menu next to the script</summary>
  
  <p></p>
  
  [A vertical ellipsis menu next to the script](../../image_data/87387261df910edb893a6ae0809a5fa0abff38d86b0a7440286a0e089eaa86ec.md)
  
  ### Overview
  This image depicts a notification or status bar at the bottom of a user interface, likely within a software application. It contains a message and a set of interactive elements.
  
  ### Key Elements
  - **Visual description**: A rectangular area with rounded corners.
  - **Location**: Bottom of the screen.
  - **Contents**: 
      - Text: "new behavior"
      - Sub-text: "Saved at 2:21:58 - Compiled"
  - **Visual styling**: The background is dark gray (#333333), and the text is white (#FFFFFF).
  
  ### Visual Flow / Relationships
  The most prominent visual element is the text message indicating a new behavior has been saved and compiled. There is a vertical ellipsis ("...") icon on the right side, which likely indicates more options or settings related to the notification.
  
  </details>
  
  <p></p>
  
  
- Select **Delete**.

  <details>
  <summary>Selecting the Delete option</summary>
  
  <p></p>
  
  [Selecting the Delete option](../../image_data/6d38cc3ff15368670958d1359bdc15468b68edb29a34832f24b2ca48bb198a9f.md)
  
  ### Overview
  This image depicts a user interface element showing a menu item with a "Delete" option highlighted in red. The menu is part of a larger interface, likely a file management or application settings screen.
  
  ### Key Elements
  - **Visual description**: The menu item is rectangular with rounded corners.
  - **Location**: Positioned centrally within the menu.
  - **Contents**: The word "Delete" is written in white text on a red background.
  - **Visual styling**: The text is bold and the background is solid red.
  
  ### Visual Flow / Relationships
  The "Delete" option is the most prominent element due to its red highlighting. There are no arrows or lines connecting elements, suggesting a simple linear menu structure where users can select options sequentially.
  
  </details>
  
  <p></p>
  
  
- Click **Confirm** to delete the script.

## An example of a simple script

The following example script sets an entity’s color to red when you attach the script to it.

```
import { PropTypes } from 'horizon/core';
import { Component, Entity, PropsDefinition } from 'horizon/core';

class MoveAttachedEntity extends Component<typeof MoveAttachedEntity> {
  static propsDefinition = {
    target: {type: PropTypes.Entity},
    position: {type: PropTypes.Vec3},
};

  start() {
    this.world onUpdate(({ deltaTime }) => {
        this.entity.position.set(this.props.position!);
    });
  }
}

Component.register(MoveAttachedEntity);
```