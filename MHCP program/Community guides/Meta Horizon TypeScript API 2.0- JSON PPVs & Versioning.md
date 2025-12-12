Source: https://developers.meta.com/horizon-worlds/learn/documentation/mhcp-program/community-tutorials/meta-horizon-typescript-api-20-json-ppvs--versioning-

# Meta Horizon TypeScript API 2.0: JSON PPVs & Versioning

Author: Laex05

## Introduction

#### Creator Skill Level

Intermediate

#### Recommended Prerequisite Background Knowledge

Some TypeScript experience is recommended as well as access to the desktop editor, and VS Code.

#### Description

Learn how to create, store, and manage JSON Objects as Player Persistent Variables (PPVs) in Meta Horizon, including versioning for updates and expansions. Given Meta Horizon’s 10kb data limit for PPVs, we’ll show you how to evaluate and optimize your JSON Object’s size.

This knowledge enables the storage of hundreds of variables in a single JSON PPV, facilitating the creation of experiences that remember visitor progress and allow seamless continuation. Additionally, it supports the growth of player data in future updates without the need for new JSON PPVs.

#### Learning Objectives

By reading and reviewing this written guide you will be able to:

* Create and store JSON Objects as Player Persistent Variables
* Add versioning to JSON PPVs: allows for updating and adding new variables
* Check the variable’s max size

## Step 1: Create a JSON PPV

Once the world is loaded, click the systems drop-down and select “Persistent Variables.”

<details>
<summary>Screenshot 2024-03-12 165250.png</summary>

<p></p>

[Screenshot 2024-03-12 165250.png](../../image_data/bee72a717c3657011a0e76c835f7a04f5dd63f0aab750467892456b110c19ccf.md)

### Overview
This image depicts a user interface element showing a dropdown menu within a game development environment. The menu is part of a larger interface that includes a sidebar labeled "Hierarchy" and a main workspace area displaying a grid-like terrain.

### Key Elements
- **Dropdown Menu**: Located centrally in the image, with a dark background and white text. It contains three options: "Quests," "Leaderboards," and "Persistent Variables." The "Persistent Variables" option is highlighted with a blue border.
- **Sidebar**: On the left side, labeled "Hierarchy," with a search bar and a list of items such as "SpawnPoint," "PlayerVar_Defs," and "PlayerVar_Manager."
- **Main Workspace**: On the right side, showing a grid-like terrain with a gradient sky background.
- **Top Bar**: At the very top, there is a title bar indicating the project name "Horizon Worlds - JSON PPV Workshop World."

### Visual Flow / Relationships
The most prominent visual element is the dropdown menu, which is the focal point of the image. The menu items are arranged vertically, and the highlighted item suggests interaction. The sidebar and main workspace provide context but are secondary to the dropdown menu.

</details>

<p></p>



Click the plus icon to create a variable.

In this example, we will name it “TestVar” making sure to select “{ } Object” from the drop-down.

<details>
<summary>Screenshot 2024-03-12 165344.png</summary>

<p></p>

[Screenshot 2024-03-12 165344.png](../../image_data/53b5abc688a14f3effb3bb0d9dd92e6b277e629efd31fb5298b2137c63f19aa7.md)

### Overview
This image depicts a user interface element titled "Persistent Variables." It appears to be a modal window or a dropdown menu within a software application. The interface includes a search bar, a plus sign for adding new variables, and a settings gear icon. There is also a sorting arrow indicating the ability to reorder items.

### Key Elements
- **Title Bar**: Located at the top, labeled "Persistent Variables."
- **Search Bar**: Positioned below the title, with a magnifying glass icon on the left side.
- **Add Button**: A plus sign icon located next to the search bar.
- **Settings Gear Icon**: A gear icon situated near the add button.
- **Sort Arrow**: An upward-pointing arrow with a downward arrow, suggesting the ability to sort items.
- **Variable List**: Below the title, displaying "World Persistent Variables (1/100)" followed by a single variable entry labeled "TestVar Object."
- **Variable Icon**: A blue square with curly brackets on the left side of the variable name.

### Visual Flow / Relationships
The most prominent visual element is the "Persistent Variables" title bar. The search bar, add button, settings gear, and sort arrow are arranged horizontally beneath the title. The variable list is displayed below the title bar, with the variable icon and name clearly separated. The layout suggests a linear reading order from top to bottom.

</details>

<p></p>



Now that JSON Object PPV has been created, it can be used in TypeScript scripts by referencing it using the string name it was given: “TestVar.”

## Step 2: Create Scripts

To begin, we will create two scripts with the specified names seen below. It’s important to verify that Meta Horizon’s 2.0 API is selected by accessing the settings via the gear icon. <details>
                                                                                                                                                                                        <summary>Screenshot 2024-03-12 165632.png</summary>
                                                                                                                                                                                        
                                                                                                                                                                                        <p></p>
                                                                                                                                                                                        
                                                                                                                                                                                        [Screenshot 2024-03-12 165632.png](../../image_data/5bdf510b828bb81b1265affdb47fbbbc01e0d4e8bf68329945bcbf2a267d426d.md)
                                                                                                                                                                                        
                                                                                                                                                                                        ### Overview
                                                                                                                                                                                        This image depicts a user interface element labeled "Scripts." It appears to be a section within a software application, likely related to managing scripts or code snippets. The interface includes a search bar, a button to create new scripts, and a list of existing scripts.
                                                                                                                                                                                        
                                                                                                                                                                                        ### Key Elements
                                                                                                                                                                                        - **Search Bar**: Located at the top-left, it has a magnifying glass icon and is empty.
                                                                                                                                                                                        - **Create New Script Button**: Positioned next to the search bar, it is a gray button with a plus sign.
                                                                                                                                                                                        - **List of Scripts**: Below the search bar, there are two entries:
                                                                                                                                                                                          - **PlayerVar_Defs**: Saved at 4:49:59 PM · Compiled
                                                                                                                                                                                          - **PlayerVar_Manager**: Saved at 4:44:44 PM · Compiled
                                                                                                                                                                                        - **Menu Icons**: At the top-right, there are four icons: a magnifying glass, a refresh symbol, a gear, and three vertical dots.
                                                                                                                                                                                        - **Dropdown Menu**: A dropdown menu is partially open, showing the option "Create new script."
                                                                                                                                                                                        
                                                                                                                                                                                        ### Visual Flow / Relationships
                                                                                                                                                                                        The most prominent visual element is the dropdown menu, as it is actively engaged. The list of scripts is secondary but clearly organized under the "Last updated" label. The menu icons at the top-right provide additional functionality options.
                                                                                                                                                                                        
                                                                                                                                                                                        </details>
                                                                                                                                                                                        
                                                                                                                                                                                        <p></p>
                                                                                                                                                                                        
                                                                                                                                                                                        

### Specified Script Names:

* PlayerVar\_Defs
* PlayerVar\_Manager

### Mentor’s Note

Defs and \_Manager are two of several naming conventions I use in my scripts to help organize and plan my code. There are no right or wrong approaches, so feel free to adopt one that works well for you.

\_Defs store type declarations, classes, and enums.

\_Manager handles logic and typically has a Component that attaches to a single object in the world.

Other naming conventions I use include, \_Data, \_Entity, and \_Func.

### Script Setup

As of the current Meta Horizon desktop build (March 2024), creating a new world requires the initial creation of a 1.0 script prior to switching the script mode to 2.0. Once the switch is made, the 1.0 script can be deleted.

Access to this feature is found under the script tab: select the gear icon, followed by Script Settings to view the API Version drop-down:

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/fab504cbac9dac68862db6db08bda68e108f275638559380bc9e6c95b49a9e41.md)

### Overview
This image depicts a settings dialog box titled "Script Settings." It contains various configuration options related to external editors and API versions. The dialog box has a dark theme with light text and interactive elements such as buttons and checkboxes.

### Key Elements
- **Title**: "Script Settings" located at the top of the dialog box.
- **External Editor**: A section labeled "Default (VS Code)" indicating the default external editor.
- **Select Button**: A button labeled "Select" next to the "External Editor Directory" field.
- **Reset Button**: A button labeled "Reset" next to the "External Editor Directory" field.
- **Directory Path**: The path "C:/Users/alex/.../Horizon Worlds" displayed under the "External Editor Directory" field.
- **API Version**: A dropdown menu set to "2.0.0."
- **horizon/camera**: A checkbox labeled "horizon/camera" with a toggle switch next to it.
- **Buttons**: Two buttons at the bottom labeled "Cancel" and "Apply."

### Visual Flow / Relationships
The most prominent visual element is the "Script Settings" title at the top. The "External Editor" section is below it, followed by the "API Version" dropdown. The "horizon/camera" checkbox is at the bottom. The "Cancel" and "Apply" buttons are positioned at the very bottom, with the "Apply" button highlighted in blue, suggesting it is the primary action button.

</details>

<p></p>



## Step 3: Prepare Scripts

To get started delete all the prefilled code from the \_Defs file, and adjust the \_Manager to explicitly import Component, rather than \* as “hz” importing all.

Note: This is a personal preference, please choose the approach that works best for you.

### Mentor’s Note

I personally like the explicit approach as you will know all items that have been imported from specific APIs, and you can do less typing, which is always nice!

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/667c2ade4372d10f7a41852c9604ba5d0a7595c0160a8ba026722e07e7ecf0b1.md)

### Overview
This image depicts a code editor interface, specifically showing a dark-themed environment with multiple tabs open. The interface includes various toolbars, panels, and a search bar at the top. The main area is a large, empty code editor space ready for coding.

### Key Elements
- **Tabs**: There are two tabs open labeled "PlayerVar_Defs.ts" and "PlayerVar_Manager.ts". Both have a "TS" icon indicating TypeScript files.
- **Code Editor Area**: Located centrally, it is a large, empty space with a line number "1" displayed, suggesting the start of a new file.
- **Search Bar**: Positioned at the top right, it contains the text "scripts".
- **Menu Bar**: At the very top, it includes standard menu options like File, Edit, Selection, View, Go, among others.
- **Toolbars**: On the left side, there are several icons representing different functionalities such as search, share, settings, and more.
- **Status Bar**: At the bottom, it displays information like line number (Ln 1, Col 1), character count (Spaces: 2), encoding (UTF-8), and language (TypeScript).

### Visual Flow / Relationships
The most prominent visual element is the large, empty code editor area. The tabs are arranged horizontally above the editor, and the toolbars are positioned vertically on the left side. The search bar is located at the top right, and the status bar is at the bottom. There are no arrows or lines connecting elements, but the layout suggests a typical workflow where users navigate through tabs, use the search bar, and interact with the editor.

</details>

<p></p>



<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/2d86d34858c38420c6b9c8ead9e0ade1531dfdc2b6ab0b2f4290faf9fbc98ec0.md)

### Overview
This image depicts a code editor window open in a development environment, specifically showing a TypeScript file named `PlayerVar_Manager.ts`. The editor displays a class definition within the file, with syntax highlighting indicating code blocks and comments. The interface includes various toolbars and panels typical of a code editor.

### Key Elements
- **Visual description**: A code editor window with syntax-highlighted TypeScript code.
- **Location**: Center of the image.
- **Contents**: 
    - `import { Component } from "horizon/core";`
    - `class PlayerVar_Manager extends Component<typeof PlayerVar_Manager> {`
    - `static propsDefinition = {};`
    - `start() {`
    - `}`
    - `Component.register(PlayerVar_Manager);`
- **Visual styling**: Dark theme with syntax highlighting in bright colors like green, blue, and yellow.

### Visual Flow / Relationships
- Most prominent visually: The code editor window itself.
- No arrows or lines connecting elements.
- Reading order follows the standard left-to-right, top-to-bottom flow of text.

</details>

<p></p>



## What Are JSON Objects?

JSON objects are powerful variables that can store various types of data. JSON objects can even nest inside of each other. These may be referred to simply as objects, variable folders, or more informally “bags of stuff.”

This is a simple example storing just two variables for tracking a player’s name and number of visits:

```
const playerInfo = { name: ‘playerName’, visits: 0 };
```

In TypeScript it is often necessary to define a type to describe the object, for instance, in this case we would have:

```
type PlayerInfo = {name: string; visits: number};
```

We then need to declare the Type when creating the playerInfo variable:

```
const playerInfo: PlayerInfo = { name: ‘playerName’, visits: 0 };
```

Notice that the variable is in camelCase and the type is in PascalCase. This differentiation shows that the playerInfo is the object variable storing the data. And, PlayerInfo is the type we are declaring it to be.

Next let’s look at a complex example, with nested objects and multiple variable types. In this example, notice that when the type is larger the variable is broken onto its own line:

```
type PlayerInfo = {
name: string,
visits: PlayerVisits,
scores: PlayerScores,
};

type PlayerVisits = {
totalVisits: number,
uniqueDays: number,
totalTimeMins: number,
lastVisitTimeSinceEpochMs: number,
};

type PlayerScores = {
fastestTime: number,
highScore: number,
};

const playerInfo: PlayerInfo = {
name: ‘playerName’,
visits: {
totalVisits: 0,
uniqueDays: 0,
totalTimeMins: 0,
lastVisitTimeSinceEpochMs: 0,
},

scores: {
fastestTime: 0,
highScore: 0,
},
};
```

## Step 4: Connect Events

Next, we will connect the CodeBlockEvents for player enter and exit world to local methods. We have also added a console log to the methods to confirm the script is working.

<details>
<summary>Screenshot 2024-03-12 171631.png</summary>

<p></p>

[Screenshot 2024-03-12 171631.png](../../image_data/393b15a935f1331f3b5c9b46e42da60566d889c4f9a8c3f035d4e2792396715a.md)

### Overview
This image depicts a code editor window open in a development environment, specifically showing a TypeScript file named `PlayerVar_Manager.ts`. The editor displays a class definition within a larger project structure, with syntax highlighting and a dark theme.

### Key Elements
- **Visual Description**: The editor has a dark theme with syntax highlighting.
- **Location**: Top-left corner.
- **Contents**: The text `PlayerVar_Manager.ts` is visible as the active file name.
- **Visual Styling**: The text is white, and the background is black. There are no borders around the editor area.

### Visual Flow / Relationships
- Most prominent visually: The code content itself.
- No arrows or lines connecting elements.
- Spatial relationships: The code is organized into methods (`preStart`, `start`, `playerEnterWorld`, `playerExitWorld`) and a class definition (`PlayerVar_Manager`).

</details>

<p></p>



Ensure that the PlayerVar\_Manager script is attached to an object in your world. In this example, I used a text object:

<details>
<summary>Screenshot 2024-03-12 171735.png</summary>

<p></p>

[Screenshot 2024-03-12 171735.png](../../image_data/7d95b4b74eb9680d09d9c6a5bd566ba13a70735130874afd693ccdded65446b8.md)

### Overview
This image depicts a user interface element, specifically a menu or panel titled "Gizmos." It contains a grid layout of icons representing various functionalities or assets within a software environment, likely related to game development or asset management.

### Key Elements
- **Search Bar**: Located at the top, with a magnifying glass icon indicating a search function.
- **Title**: "Gizmos" displayed prominently above the search bar.
- **Icons and Labels**: A grid of icons with corresponding labels beneath them.
  - **Trigger Zone**: Green hexagon icon labeled "Trigger Zone."
  - **Script**: Purple code icon labeled "Script."
  - **Text**: Purple font icon labeled "Text."
  - **Spawn Point**: Blue human figure icon labeled "Spawn Point."
  - **Door**: Pink door icon labeled "Door."
  - **Environment**: Light blue cloud icon labeled "Environment."
  - **Dynamic Light**: Yellow light bulb icon labeled "Dynamic Light."
  - **Static Light**: Light blue cube icon labeled "Static Light."
  - **TrailFx**: Red trail icon labeled "TrailFx."
  - **ParticleFx**: Orange particle icon labeled "ParticleFx."
  - **Sound Recorder**: Teal microphone icon labeled "Sound Recorder."
  - **Quests**: Orange star icon labeled "Quests."
  - **World**: Gold trophy icon labeled "World."
  - **Projectile**: Blue wrench icon labeled "Projectile."
  - **Snap**: Blue gear icon labeled "Snap."
  - **Raycast**: Blue target icon labeled "Raycast."

### Visual Flow / Relationships
The icons are arranged in a grid layout, with each icon accompanied by its label. The layout is organized in rows and columns, making it easy to navigate through the different options. The search bar at the top suggests that users can search for specific items within this menu.

</details>

<p></p>

<details>
<summary>Screenshot 2024-03-12 171909.png</summary>

<p></p>

[Screenshot 2024-03-12 171909.png](../../image_data/de335ecf08a3a5f3a4e93e7c93ac064394aba59f7470e0e9410d7cb162d25a18.md)

### Overview
This image depicts a 3D modeling environment interface, likely from a game development tool. The central focus is a humanoid figure standing on a purple cube labeled "PlayerVarManager." Above the figure, there is a blue rectangular frame with the text "PlayerVar_Manager." To the right, there is a sidebar with various attributes and settings related to the object.

### Key Elements
- **Humanoid Figure**: A blue humanoid figure with a simplistic design, standing on a purple cube. The figure has a small circular icon above its head.
- **Cube**: A purple cube with white text that reads "PlayerVarManager..." positioned beneath the humanoid figure.
- **Text Frame**: A blue rectangular frame with the text "PlayerVar_Manager" displayed prominently within it.
- **Sidebar**: Located on the right side of the image, containing several sections such as "Behavior," "Attributes," "GameplayTags," and "Script." Each section includes various attributes and settings related to the object.

### Visual Flow / Relationships
The most prominent visual element is the humanoid figure and the cube it stands on. The text frame above the figure draws attention due to its larger size and bold text. The sidebar on the right provides additional information and settings related to the object, creating a hierarchical layout where the figure and cube are the primary focus, followed by the text frame, and then the detailed settings in the sidebar.

</details>

<p></p>

<details>
<summary>Screenshot 2024-03-12 171909.png</summary>

<p></p>

[Screenshot 2024-03-12 171909.png](../../image_data/de335ecf08a3a5f3a4e93e7c93ac064394aba59f7470e0e9410d7cb162d25a18.md)

### Overview
This image depicts a 3D modeling environment interface, likely from a game development tool. The central focus is a humanoid figure standing on a purple cube labeled "PlayerVarManager." Above the figure, there is a blue rectangular frame with the text "PlayerVar_Manager." To the right, there is a sidebar with various attributes and settings related to the object.

### Key Elements
- **Humanoid Figure**: A blue humanoid figure with a simplistic design, standing on a purple cube. The figure has a small circular icon above its head.
- **Cube**: A purple cube with white text that reads "PlayerVarManager..." positioned beneath the humanoid figure.
- **Text Frame**: A blue rectangular frame with the text "PlayerVar_Manager" displayed prominently within it.
- **Sidebar**: Located on the right side of the image, containing several sections such as "Behavior," "Attributes," "GameplayTags," and "Script." Each section includes various attributes and settings related to the object.

### Visual Flow / Relationships
The most prominent visual element is the humanoid figure and the cube it stands on. The text frame above the figure draws attention due to its larger size and bold text. The sidebar on the right provides additional information and settings related to the object, creating a hierarchical layout where the figure and cube are the primary focus, followed by the text frame, and then the detailed settings in the sidebar.

</details>

<p></p>



## Step 5: Define Type

Before we can get and set a JSON Object PPV, we need to define it. Because this type is stored in a \_Defs script, we need to be able to access it from our other script files. To do this we add the word export to the front.

<details>
<summary>Screenshot 2024-03-12 181652.png</summary>

<p></p>

[Screenshot 2024-03-12 181652.png](../../image_data/4a3926554ac87410b20dd6cf64ffcf90920b621c3e41bf4154a3671b035cc44c.md)

### Overview
This image depicts a code snippet within a text editor, specifically showing a TypeScript interface definition for a variable named `PlayerVar`. The interface includes properties such as `version`, `name`, and `visits`.

### Key Elements
- **Visual description**: A code editor window with syntax highlighting.
- **Location**: Top-left corner.
- **Contents**: 
    - `export type PlayerVar = {`
    - `version: number,`
    - `name: string,`
    - `visits: number,`
    - `}`
- **Visual styling**: 
    - Syntax highlighting colors: `version` and `visits` are highlighted in yellow, `name` is in cyan, and the rest of the text is in white.
    - Background color of the editor window is light gray.
    - The file name `PlayerVar_Defs.ts` is displayed at the top-left corner.

### Visual Flow / Relationships
- Most prominent visually: The code snippet itself.
- There are no arrows, lines, or connectors indicating a specific reading order.
- Elements are aligned vertically, with each line of code starting at the left margin.

</details>

<p></p>



Now that we have exported the type, we can import it into any of our other scripts by typing “PlayerVar” and clicking “enter” or “return” on our keyboard to import the type.

## Step 6: Map PlayerVar

Now that our \_Defs file is setup, we need a place to store all of our player variable data. We will do this in a \_Data script.

Create a new script in Meta Horizon named “PlayerVar\_Data,” and then we will delete all of the prefilled code as we did with the \_Defs script.

<details>
<summary>Screenshot 2024-03-12 181658.png</summary>

<p></p>

[Screenshot 2024-03-12 181658.png](../../image_data/596fe39d30e57eedc2ad82c8e28134fc7efd5819c50f4ed5245436e65b1f6cfd.md)

### Overview
This image displays a code snippet written in TypeScript, specifically showing imports and an export statement within a file named `PlayerVar_Data.ts`. The code is part of a larger project, likely related to game development given the context of player variables.

### Key Elements
- **Visual description**: Code editor interface with syntax highlighting.
- **Location**: Top-left corner.
- **Contents**: 
    - Line 1: `import { PlayerVar } from "PlayerVar_Defs";`
    - Line 2: `import { Player } from "horizon/core";`
    - Line 3: Empty line.
    - Line 4: `export const allPlayerVarData = new Map<Player, PlayerVar>();`
- **Visual styling**: Syntax highlighting colors include pink for keywords (`import`, `const`, `new`, `Map`), blue for variable names (`PlayerVar`, `Player`, `allPlayerVarData`), and green for types (`Player`, `PlayerVar`). The background is white, and the editor has a dark theme.

### Visual Flow / Relationships
- Most prominent visually: The code lines themselves.
- There are no arrows or lines connecting elements, as this is a static image of code.
- Elements are aligned vertically, with each line of code starting at the left margin.

</details>

<p></p>



We will only need to write one line of code, and as we do, VS Code will write the import lines seen in the screenshot on lines 1 and 2.

```
export const allPlayerVarData = new Map<Player, PlayerVar>();
```

**Note:** You will need to press enter after typing “Player” and “PlayerVar” for these two types to be imported. If your IDE, in this case VS Code, doesn’t support automatic importing you may need to write lines 1 and 2.

## What is a Map?

A map is a data type that is similar to a list, but does not use indexes. Instead you can have one of the first type (the key), with the second type “mapped” to that key.

In this example (seen in the image above) we have a player as our key. Because a player cannot be in the world twice, only unique players can exist in our world, it makes for a perfect key. Then the data we are mapping to that player is the PlayerVar type we defined in the \_Defs file.

Exporting this map as a constant prevents overwriting it with a new map. Instead, modifications must be made using the map’s set and delete methods, which will be discussed later in this document.

We also export this data, because it is very likely you will need to use it across multiple scripts. Since we will not be setting the PPV until the player leaves the world, this means that the map will store the player’s JSON Object PPV for the duration of their stay. In other words it is the source of truth for the most up-to-date variable values.

## Step 7: PlayerVar\_Manager

In this step, we will start to write some code.  On the next few pages, we will provide in-depth explanations for each line:

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/fc291d51e08241ad99747b6db1aceba22e2830eb4ccb64e434ad8864cda49cb9.md)

### Overview
The image displays a code editor window open to a TypeScript file named `PlayerVar_Manager.ts`. The content is structured as a class definition within a component framework, likely for managing player variables in a game or application. The code includes imports, constants, a class definition, event handlers, and a function for initializing player variables.

### Key Elements
- **Visual description**: A code editor interface with syntax highlighting.
- **Location**: Top-left corner.
- **Contents**: 
    - `import` statements at the top.
    - Constants `playerVariableVersion` and `playerVarName`.
    - Class `PlayerVar_Manager` extending `Component`.
    - `static propsDefinition` property.
    - `preStart()` method with event bindings.
    - `start()` method.
    - `playerEnterWorld(player: Player)` method.
    - `playerExitWorld(player: Player)` method.
    - `initializePlayerVar(player: Player, prevPlayerVar: PlayerVar | null): PlayerVar` function.
- **Visual styling**: Dark theme with syntax highlighting in various colors (e.g., blue for keywords, green for strings, pink for comments).

### Visual Flow / Relationships
- Most prominent visually: The class definition and its methods.
- Arrows, lines, or connectors: None.
- Spatial relationships: Methods and functions are arranged vertically, with the class definition at the top and methods/functions below.

</details>

<p></p>



At the beginning of the script, you’ll encounter the variables. These variables are globally scoped variables, which means they are accessible from anywhere inside this script. These variables are constants; for instance, the playerVariableVersion should only be updated manually when introducing new variables—a process detailed later in the document (Step 9). Similarly, the playerVarName remains unchanged as it serves as a reference to the PPV variable.

<details>
<summary>Screenshot 2024-03-12 181721.png</summary>

<p></p>

[Screenshot 2024-03-12 181721.png](../../image_data/fc291d51e08241ad99747b6db1aceba22e2830eb4ccb64e434ad8864cda49cb9.md)

### Overview
The image displays a code editor window open to a TypeScript file named `PlayerVar_Manager.ts`. The content is structured as a class definition within a component framework, likely for managing player variables in a game or application. The code includes imports, constants, a class definition, event handlers, and a function for initializing player variables.

### Key Elements
- **Visual description**: A code editor interface with syntax highlighting.
- **Location**: Top-left corner.
- **Contents**: 
    - `import` statements at the top.
    - Constants `playerVariableVersion` and `playerVarName`.
    - Class `PlayerVar_Manager` extending `Component`.
    - `static propsDefinition` property.
    - `preStart()` method with event bindings.
    - `start()` method.
    - `playerEnterWorld(player: Player)` method.
    - `playerExitWorld(player: Player)` method.
    - `initializePlayerVar(player: Player, prevPlayerVar: PlayerVar | null): PlayerVar` function.
- **Visual styling**: Dark theme with syntax highlighting in various colors (e.g., blue for keywords, green for strings, pink for comments).

### Visual Flow / Relationships
- Most prominent visually: The class definition and its methods.
- Arrows, lines, or connectors: None.
- Spatial relationships: Methods and functions are arranged vertically, with the class definition at the top and methods/functions below.

</details>

<p></p>



In playerEnterWorld we first get the PPV. Notice that it could be null, we handle this in the initializePlayerVar method (seen at the end of this step). Which we use to create a newPlayerVar. We have to create a newPlayerVar because the player may have last played in an older version with less variables stored in the PlayerVar type.

<details>
<summary>Screenshot 2024-03-12 181721.png</summary>

<p></p>

[Screenshot 2024-03-12 181721.png](../../image_data/fc291d51e08241ad99747b6db1aceba22e2830eb4ccb64e434ad8864cda49cb9.md)

### Overview
The image displays a code editor window open to a TypeScript file named `PlayerVar_Manager.ts`. The content is structured as a class definition within a component framework, likely for managing player variables in a game or application. The code includes imports, constants, a class definition, event handlers, and a function for initializing player variables.

### Key Elements
- **Visual description**: A code editor interface with syntax highlighting.
- **Location**: Top-left corner.
- **Contents**: 
    - `import` statements at the top.
    - Constants `playerVariableVersion` and `playerVarName`.
    - Class `PlayerVar_Manager` extending `Component`.
    - `static propsDefinition` property.
    - `preStart()` method with event bindings.
    - `start()` method.
    - `playerEnterWorld(player: Player)` method.
    - `playerExitWorld(player: Player)` method.
    - `initializePlayerVar(player: Player, prevPlayerVar: PlayerVar | null): PlayerVar` function.
- **Visual styling**: Dark theme with syntax highlighting in various colors (e.g., blue for keywords, green for strings, pink for comments).

### Visual Flow / Relationships
- Most prominent visually: The class definition and its methods.
- Arrows, lines, or connectors: None.
- Spatial relationships: Methods and functions are arranged vertically, with the class definition at the top and methods/functions below.

</details>

<p></p>



Then we update the visits to be visits + 1, using the shorthand visits++. To make sure this is working we add a console log.

The last step is to add the player to the map we created in the previous step. We do this by using the .set method, which will replace the previous value if it has already been set. You can use the .has method, if you want to see if the player has already been mapped.

In playerExitWorld we get the playerVar from the map, which if you hover over the const playerVar will show that it is of type PlayerVar or Undefined. This is because it is possible that a player has not yet been mapped. We can check for this with if (playerVar) which checks if it is “true,” meaning not *undefined* , *null* , *false* or sort of false (i.e., 0, empty string). We can use an else statement that calls on console log if it is undefined; this can help locate bugs now and in the future. It is recommended to use checks like this in your code.

<details>
<summary>Screenshot 2024-03-12 181721.png</summary>

<p></p>

[Screenshot 2024-03-12 181721.png](../../image_data/fc291d51e08241ad99747b6db1aceba22e2830eb4ccb64e434ad8864cda49cb9.md)

### Overview
The image displays a code editor window open to a TypeScript file named `PlayerVar_Manager.ts`. The content is structured as a class definition within a component framework, likely for managing player variables in a game or application. The code includes imports, constants, a class definition, event handlers, and a function for initializing player variables.

### Key Elements
- **Visual description**: A code editor interface with syntax highlighting.
- **Location**: Top-left corner.
- **Contents**: 
    - `import` statements at the top.
    - Constants `playerVariableVersion` and `playerVarName`.
    - Class `PlayerVar_Manager` extending `Component`.
    - `static propsDefinition` property.
    - `preStart()` method with event bindings.
    - `start()` method.
    - `playerEnterWorld(player: Player)` method.
    - `playerExitWorld(player: Player)` method.
    - `initializePlayerVar(player: Player, prevPlayerVar: PlayerVar | null): PlayerVar` function.
- **Visual styling**: Dark theme with syntax highlighting in various colors (e.g., blue for keywords, green for strings, pink for comments).

### Visual Flow / Relationships
- Most prominent visually: The class definition and its methods.
- Arrows, lines, or connectors: None.
- Spatial relationships: Methods and functions are arranged vertically, with the class definition at the top and methods/functions below.

</details>

<p></p>



Now that we know playerVar is defined, we can set the player’s JSON Object PPV, which saves their JSON Object to the world’s persistent storage.

At the very end, we delete the player from the map.

Outside of our PlayerVar\_Manager class, we can create functions. Note that these are similar to methods, but methods are stored inside classes. In this case, we are creating a function called initializePlayerVar, which will return a PlayerVar.

This function is important because it allows us to take a potentially null/undefined value, or partially defined value, and create a new object variable.

**Please note**: There is an error as of the time of writing in Meta Horizon’s API, which says the variable could be defined or null, but is actually defined or undefined. This distinction caused an error with the code seen at the beginning of this step, **below the code is corrected, checking the truthiness of (prevPlayerVar) rather than (prevPlayerVar !== null).**

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/d388046a3d1dacaeace13c7da33887cb1cf84a8addef5ac9448727991936d532.md)

### Overview
This image displays a code snippet written in TypeScript, specifically a function named `initializePlayerVar`. The function takes a `Player` object and an optional `prevPlayerVar` parameter, which can be either a `PlayerVar` object or `null`. The function returns a `PlayerVar` object.

### Key Elements
- **Visual description**: Code editor interface.
- **Location**: Top-left corner.
- **Contents**: Code content.
- **Visual styling**: Dark theme with syntax highlighting.

### Visual Flow / Relationships
- Most prominent visually: The code itself.
- No arrows or lines connecting elements.
- Reading order follows the standard left-to-right, top-to-bottom flow typical of code editors.

</details>

<p></p>



The first thing we do in this function is create a brand new object variable with values we would assign to a first-time visitor. That way if the prevPlayerVar is not truthy we return those values. Otherwise, we can check that the version contains values we want to recall, and save them to the new object.

Now you can compile your newly saved code and test it. If all goes well, every time you preview the world, your number of visits will go up by one, and log to the console!

## Step 8: Test PlayerVar Size

Now that we have our JSON Object PPV, we need to make sure we don’t run it over the 10,000 character limit. To test this we can create an artificial maxed variable and stringify it to see how long it is.

<details>
<summary>Screenshot 2024-03-12 184022.png</summary>

<p></p>

[Screenshot 2024-03-12 184022.png](../../image_data/f7639785a7a12c3fad928c0b190e1711657bc4012e6b1faa6eeb6b61bf769111.md)

### Overview
This image displays a code snippet written in TypeScript within a code editor environment. The code defines a function named `testPlayerVarSize()` that initializes a variable `testPlayerVar` with a large string containing both letters and numbers. The function then calculates the length of this string using `JSON.stringify()` and logs the result to the console.

### Key Elements
- **Code Editor Interface**: The background is dark, typical of a code editor theme.
- **Function Definition**: Located at line 62.
    - **Visual description**: A function declaration.
    - **Location**: Top-left corner of the image.
    - **Contents**: `function testPlayerVarSize() {`
    - **Visual styling**: White text on a dark background.
- **Variable Declaration**: At line 65.
    - **Visual description**: A constant declaration.
    - **Location**: Below the function definition.
    - **Contents**: `const testPlayerVar: PlayerVar = {`
    - **Visual styling**: White text on a dark background.
- **Object Properties**: Contains three properties (`version`, `name`, `visits`) initialized with specific values.
    - **Visual description**: Property names and values.
    - **Location**: Inside the curly braces `{ }`.
    - **Contents**: `version: 1000000, name: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890', visits: 1000000,`
    - **Visual styling**: White text on a dark background.
- **String Concatenation**: At line 70.
    - **Visual description**: A constant assignment.
    - **Location**: Below the object declaration.
    - **Contents**: `const testLength = JSON.stringify(testPlayerVar).length;`
    - **Visual styling**: White text on a dark background.
- **Console Log Statement**: At line 72.
    - **Visual description**: A console log statement.
    - **Location**: Below the string concatenation.
    - **Contents**: `console.log(testLength.toString());`
    - **Visual styling**: White text on a dark background.

### Visual Flow / Relationships
- **Most Prominent Element**: The function definition at the top.
- **Arrows/Connections**: None.
- **Spatial Relationships**: The elements are arranged vertically, with each line of code appearing sequentially below the previous one.

</details>

<p></p>



In our testPlayerVarSize function, we have created a testPlayerVar variable with larger-than-possible values. We then calculate the length using JSON.stringify, and the .length property of strings. We then simply log that number to the console.

All that is left, is to call this in the start method. When we are done, we can delete this line of code from start, and write it in anytime we need to check the max length.

<details>
<summary>Screenshot 2024-03-12 184035.png</summary>

<p></p>

[Screenshot 2024-03-12 184035.png](../../image_data/b5089de69a6f35c6dde4c493aee94fc5a5e05a744e7f82fc3131ee59a5af8bb3.md)

### Overview
This image depicts a code snippet within a text editor interface. The code is written in a programming language that uses curly braces `{}` for block structures. The text editor highlights syntax, with keywords and functions highlighted in specific colors.

### Key Elements
- **Visual description**: The code is written in a monospaced font typical of code editors.
- **Location**: The code is centered in the image.
- **Contents**: 
    ```plaintext
    start() {
        testPlayerVarSize();
    }
    ```
- **Visual styling**: 
    - Keywords (`start`, `testPlayerVarSize`) are highlighted in blue.
    - Functions (`start`, `testPlayerVarSize`) are highlighted in purple.
    - The curly braces `{}` are standard black characters.
    - The semicolons (`;`) are also standard black characters.

### Visual Flow / Relationships
- The most prominent visual element is the code itself.
- There are no arrows, lines, or connectors present.
- The code is read from top to bottom and left to right as per the standard reading order.

</details>

<p></p>



## Step 9: Add More Variables

Start by updating the type to include additional variables. In this case we added isAFK and afkCount:

<details>
<summary>Screenshot 2024-03-19 at 12.18.46 PM.png</summary>

<p></p>

[Screenshot 2024-03-19 at 12.18.46 PM.png](../../image_data/888694505d8358b01237dd96938b9e2d98716a1e144a7b382cfb8ce6838e0367.md)

### Overview
This image displays a TypeScript export statement defining a type named `PlayerVar`. The type includes five properties: `version`, `name`, `visits`, `isAFK`, and `afkCount`.

### Key Elements
- **Visual description**: Code snippet.
- **Location**: Centered within the image.
- **Contents**: 
    - `export type PlayerVar = {`
    - `version: number,`
    - `name: string,`
    - `visits: number,`
    - `isAFK: boolean,`
    - `afkCount: number,`
    - `}`
- **Visual styling**: Dark background with syntax highlighting in green, blue, and white for keywords, strings, numbers, and comments respectively.

### Visual Flow / Relationships
- Most prominent visually: The code snippet itself.
- No arrows or lines connecting elements.
- Reading order follows the standard left-to-right, top-to-bottom flow typical of code snippets.

</details>

<p></p>



We then add these to the initialize and test size functions:

<details>
<summary>Screenshot 2024-03-12 185301.png</summary>

<p></p>

[Screenshot 2024-03-12 185301.png](../../image_data/6a0fb30143deaae5b4d6187ec96195a6e154521c0877deb73127b66ba8b94a3c.md)

### Overview
This image displays a code snippet written in TypeScript, specifically a function named `initializePlayerVar`. The function takes a `Player` object and an optional `prevPlayerVar` parameter, which can be either a `PlayerVar` object or `null`. It returns a `PlayerVar` object. The code is part of a larger program, likely related to managing player variables in a game or application.

### Key Elements
- **Function Header**: `function initializePlayerVar(player: Player, prevPlayerVar: PlayerVar | null): PlayerVar {`
  - **Location**: Top-left corner.
  - **Contents**: Function name, parameters, return type.
  - **Visual styling**: Standard TypeScript syntax highlighting, dark background.

- **Variable Declaration**: `const newPlayerVar: PlayerVar = {`
  - **Location**: Below the function header.
  - **Contents**: Variable name (`newPlayerVar`), type (`PlayerVar`), and curly braces `{}` indicating start of object literal.
  - **Visual styling**: Standard TypeScript syntax highlighting, dark background.

- **Object Properties**:
  - `version`: `playerVariableVersion`, located within the object literal.
  - `name`: `player.name.get()`, located within the object literal.
  - `visits`: `0`, located within the object literal.
  - `isAFK`: `false`, located within the object literal.
  - `afkCount`: `0`, located within the object literal.

- **Conditional Logic**:
  - `if (prevPlayerVar) {`
    - **Location**: Below the object literal.
    - **Contents**: Conditional statement checking if `prevPlayerVar` is truthy.
    - **Visual styling**: Standard TypeScript syntax highlighting, dark background.
  - `if (prevPlayerVar.version >= 1) {`
    - **Location**: Within the conditional block.
    - **Contents**: Nested conditional statement setting `newPlayerVar.visits`.
    - **Visual styling**: Standard TypeScript syntax highlighting, dark background.
  - `if (prevPlayerVar.version >= 2) {`
    - **Location**: Within the nested conditional block.
    - **Contents**: Nested conditional statement setting `newPlayerVar.afkCount`.
    - **Visual styling**: Standard TypeScript syntax highlighting, dark background.

- **Return Statement**: `return newPlayerVar;`
  - **Location**: At the end of the function body.
  - **Contents**: Return value of the function.
  - **Visual styling**: Standard TypeScript syntax highlighting, dark background.

### Visual Flow / Relationships
- **Most Prominent Element**: The function header and its parameters.
- **Arrows/Connections**: None.
- **Reading Order**: The code flows from the function header down through the variable declaration and conditional logic, ending with the return statement.

</details>

<p></p>

<details>
<summary>Screenshot 2024-03-12 185200.png</summary>

<p></p>

[Screenshot 2024-03-12 185200.png](../../image_data/44c4da6e6951255a4db83008db89d22b7fe857ca6a81b75e9183318b37d5104e.md)

### Overview
This image displays a code snippet written in JavaScript, specifically within a function named `testPlayerVarSize()`. The code defines a variable `testPlayerVar` which contains several properties, and then calculates the length of its JSON string representation.

### Key Elements
- **Code Block**: The entire content is enclosed within a code block, likely part of a larger script or file.
  - **Version**: `version: 1000000`
    - **Location**: Top-left portion of the code block.
    - **Contents**: `1000000`.
    - **Visual styling**: Black text on a dark background.
  - **Name**: `name: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'`
    - **Location**: Below the version property.
    - **Contents**: `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890`.
    - **Visual styling**: Black text on a dark background.
  - **Visits**: `visits: 1000000`
    - **Location**: Below the name property.
    - **Contents**: `1000000`.
    - **Visual styling**: Black text on a dark background.
  - **isAFK**: `isAFK: false`
    - **Location**: Below the visits property.
    - **Contents**: `false`.
    - **Visual styling**: Black text on a dark background.
  - **afkCount**: `afkCount: 1000000000`
    - **Location**: Below the isAFK property.
    - **Contents**: `1000000000`.
    - **Visual styling**: Black text on a dark background.
  - **Function Call**: `JSON.stringify(testPlayerVar).length`
    - **Location**: Below the afkCount property.
    - **Contents**: `JSON.stringify(testPlayerVar).length`.
    - **Visual styling**: Blue highlighted text indicating code syntax highlighting.
  - **Length Calculation**: `const testLength = JSON.stringify(testPlayerVar).length;`
    - **Location**: Below the function call.
    - **Contents**: `const testLength = JSON.stringify(testPlayerVar).length;`.
    - **Visual styling**: Blue highlighted text indicating code syntax highlighting.
  - **Logging**: `console.log(testLength.toString());`
    - **Location**: Below the length calculation.
    - **Contents**: `console.log(testLength.toString());`.
    - **Visual styling**: Blue highlighted text indicating code syntax highlighting.

### Visual Flow / Relationships
- **Most Prominent**: The code block itself is the most prominent visual element as it contains the primary content.
- **Arrows/Connections**: There are no arrows or connections between elements.
- **Spatial Relationships**: Elements are arranged vertically, one after another, with no overlapping or adjacency issues.

</details>

<p></p>



We also need to update the version number from 1 to 2:
<details>
<summary>Screenshot 2024-03-12 185053.png</summary>

<p></p>

[Screenshot 2024-03-12 185053.png](../../image_data/0c45814ccb96e3e44804542021e6da849d2e5e547a2e2dbb7eda152c0c132e9a.md)

### Overview
This image shows a code snippet within a text editor interface. The focus is on a variable declaration line that includes a variable name and its value assignment.

### Key Elements
- **Visual description**: A text editor window displaying code.
- **Location**: Centered in the image.
- **Contents**: 
    - `const playerVariableVersion = 2;`
- **Visual styling**: The text is in a monospaced font, typical of code editors. The background is dark, likely representing a theme setting in the editor.

### Visual Flow / Relationships
The code line is the most prominent element, as it is the focal point of the image. There are no arrows or lines connecting elements, and the reading order is straightforward, moving from left to right across the line.

</details>

<p></p>



Then we can use this new version number to get the afkCount for players who have visited our world since the variable was added:

<details>
<summary>Screenshot 2024-03-12 185249.png</summary>

<p></p>

[Screenshot 2024-03-12 185249.png](../../image_data/4f1eee536bb1a05c9c77c6575e16d05f583bc55b3401681f6c5501ef74de4148.md)

### Overview
This image displays a code snippet written in TypeScript, specifically a function named `initializePlayerVar`. The function takes a `player` object and an optional `prevPlayerVar` parameter, and returns a new `PlayerVar` object. The code is part of a larger program, likely related to managing player variables in a game or application.

### Key Elements
- **Visual description**: Code editor interface with syntax highlighting.
- **Location**: Top-left corner.
- **Contents**: Code block with TypeScript syntax.
- **Visual styling**: Dark theme with syntax highlighting in various colors.

### Visual Flow / Relationships
- Most prominent visually: The code block itself.
- There are no arrows or lines connecting elements, as this is a static image of code.
- Elements are aligned vertically within the code editor.

</details>

<p></p>



## Step 10: Use the Variables

To get started using our new afkCount variable, we will connect the CodeBlockEvents for entering AFK to our local method:

<details>
<summary>Screenshot 2024-03-12 185526.png</summary>

<p></p>

[Screenshot 2024-03-12 185526.png](../../image_data/d6e38726057bb5d32b29d82951c685513a5a617a880f4817b9514a203bd66c3f.md)

### Overview
This image depicts a code snippet within a text editor interface. The code is part of a method definition, specifically handling event parameters and a callback function. The syntax highlighting indicates that the code is being written in a programming language, likely JavaScript or TypeScript.

### Key Elements
- **Visual description**: The code is displayed in a monospaced font typical of code editors.
- **Location**: The code is located in the bottom half of the image, occupying the right side of the screen.
- **Contents**: 
  - `@param event` — The CodeBlockEvent.
  - `@param callback` — Called when the event is received with any data as arguments.
  - `this.connectCodeBlockEvent(this.entity, CodeBlockEvents.OnPlayerEnterAFK, this.playerEnterAFK.bind(this));`
- **Visual styling**: The code uses syntax highlighting with different colors for keywords (`this`, `connectCodeBlockEvent`, `CodeBlockEvents`, `OnPlayerEnterAFK`, `playerEnterAFK`) and strings (`event`, `callback`). The background is dark, suggesting a theme suitable for coding environments.

### Visual Flow / Relationships
- **Most prominent visually**: The code snippet itself.
- **Arrows, lines, connectors**: None.
- **Spatial relationships**: The code is aligned horizontally, with parameters and the function call clearly separated.

</details>

<p></p>



<details>
<summary>Screenshot 2024-03-12 185514.png</summary>

<p></p>

[Screenshot 2024-03-12 185514.png](../../image_data/f9d2ce2e60fc48c96f9da3e3c9f398ce0af8e847345baed90bd463bd7effbd36.md)

### Overview
This image displays a snippet of code written in TypeScript, specifically within a function named `playerEnterAFK`. The code is part of a larger program, likely related to managing player data in a game or application.

### Key Elements
- **Visual description**: The code is presented in a monospaced font typical of programming editors.
- **Location**: The code is centered in the image.
- **Contents**: 
    ```typescript
    playerEnterAFK(player: Player) {
        const playerVar = allPlayerVarData.get(player);

        if (playerVar) {
            playerVar.afkCount++;
        }
    }
    ```
- **Visual styling**: The code uses syntax highlighting with keywords in blue (`player`, `const`, `if`, `get`, `var`, `++`) and strings in green (`allPlayerVarData`). The background is white, and the text is black.

### Visual Flow / Relationships
- **Most prominent visually**: The function definition and its contents.
- **Arrows, lines, connectors**: None.
- **Spatial relationships**: The code is structured linearly, with indentation indicating the nested `if` statement.

</details>

<p></p>



Then we can get the playerVar and check the truthiness, updating the count to be +1. For extra credit try adding the playerExitAFK method and updating the boolean we added to the playerVar. Setting it to true when AFK, and false when they return from AFK.

### Mentor’s Note

When a player arrives to your world, I have experienced in build mode this causing the AFK events to fire before the player enter world event does, so you will need to make sure the map has the player before setting the value, or check the truthiness as we did above.

## Further Assistance

Thank you for following along! This guide aims to unlock your TypeScript super powers, and add awesome new features to your worlds!

If you need additional support feel free to book me (Vidyuu / Laex05) for a 1:1 lesson.

Consider trying the extra credit tasks below to solidify your learning and take it to the next level!

## Next Steps

Below we have provided some challenges for you to try implementing on your own. These do require some outside knowledge, and we encourage you to ask questions in Discord if you get stuck or are unsure how to complete these. And as always I’d be happy to help you get unstuck, I’m just a Mentor Session away.

### Novice

Track player visits and time spent in your world.

### Intermediate

Track unique daily visits a player has had to your world.

### Advanced

Build a streak system to track how many days in a row each player has visited your world.

### Bonus

Give the player a reward for visiting your world once per day, and or when they reach time spent thresholds.