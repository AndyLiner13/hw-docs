Source: https://developers.meta.com/horizon-worlds/learn/documentation/typescript/getting-started/if-vs-code-cant-find-a-v2-module

# If VS Code can’t find a V2 module

VS Code ships with a recent stable version of the TypeScript transpiler. By default, VS Code uses this version to provide IntelliSense in your workspace. The workspace version of TypeScript is independent of the version of TypeScript that you use to compile your TypeScript files.

In Meta Horizon Worlds development, you need to change the version of TypeScript if VS Code can’t locate a V2 Meta Horizon Worlds library module when you include it. For example:

<details>
<summary>Changing the version of Typescript</summary>

<p></p>

[Changing the version of Typescript](../../image_data/618bba9b27e5f711e7189ba4ea730707fa40875d1954e4c1ca8c8f879178c371.md)

### Overview
This image depicts a code snippet within a text editor or IDE environment. The content appears to be part of a programming language, specifically Python, given the syntax and the use of the `import` statement.

### Key Elements
- **Visual description**: A line of code.
- **Location**: Top-left corner of the image.
- **Contents**: `import * as hz from '@horizon/core'`.
- **Visual styling**: The text is black on a white background, with a light gray margin on the left side indicating the start of the code line.

### Visual Flow / Relationships
- Most prominent visually: The code line itself.
- There are no arrows, lines, or connectors present.
- The code line is the only element in the image, so there is no implied reading order beyond the natural progression of the code line.

</details>

<p></p>



## How to use the workspace version of TypeScript

If VS Code can’t locate a V2 Meta Horizon Worlds library module, you need to configure VS Code to use the workspace version of TypeScript. You should use TypeScript v4.7.4 for all versions of the Meta Horizon Worlds TypeScript API.

- Open one of the script files from your project in VS Code. Notice the word “TypeScript” in the bottom right part of the screen. Beside it is the version number.

<details>
<summary>The Typescript version number</summary>

<p></p>

[The Typescript version number](../../image_data/5c87de12ba6a332e4a8a9f0d2d1a2a37dbc141731a12b19a0c5e1315888546a3.md)

### Overview
This image displays a software version number interface, specifically showing the name of a programming language and its version.

### Key Elements
- **Visual description**: The image contains text.
- **Location**: Centered horizontally and vertically within the image.
- **Contents**: The text reads "TypeScript 5.3.2".
- **Visual styling**: The text is black against a white background.

### Visual Flow / Relationships
The text is the only element in the image, making it the most prominent feature. There are no arrows, lines, or implied reading orders.

</details>

<p></p>



- Click on the version number. A fly-out menu appears at the top of the screen.

<details>
<summary>Version number menu</summary>

<p></p>

[Version number menu](../../image_data/39de6259e429f96f63ecf2b5b9bfeba79244f9b989541ca686072213c06717f7.md)

### Overview
This image depicts a user interface element within a software application, specifically a dropdown menu or selection list related to TypeScript version selection. The interface is part of a settings or configuration screen.

### Key Elements
- **Dropdown Title**: Located at the top, it reads: *"Select the TypeScript version used for JavaScript and TypeScript language features"*.
- **Option 1**: Positioned above the currently highlighted option, it says: *"Use VS Code's Version 5.3.2"*.
- **Highlighted Option**: This is the selected item, which states: *"Use Workspace Version 4.7.4"* followed by a path: `./node_modules/typescript/lib`.
- **Footer Text**: At the bottom, it reads: *"Learn more about managing TypeScript versions"*.

### Visual Flow / Relationships
The most prominent visual element is the highlighted option, indicating the current selection. The dropdown title sets the context, and the footer provides additional information. There are no arrows or lines connecting elements, but the layout suggests a linear reading order from top to bottom.

</details>

<p></p>



- Select the option **Use Workspace Version**. This configures VS Code to use version 4.7.4.

You should now stop getting the “Can’t find module” error.

**Note**: For more information about TypeScript versions, see VS Code’s documentation on [Using newer TypeScript versions](https://code.visualstudio.com/docs/typescript/typescript-compiling#_using-newer-typescript-versions).