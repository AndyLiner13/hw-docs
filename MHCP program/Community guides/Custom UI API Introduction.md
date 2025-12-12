Source: https://developers.meta.com/horizon-worlds/learn/documentation/mhcp-program/community-tutorials/cui-api-introduction

# Custom UI API Introduction

## Introduction

### Creator Skill level

All levels

### Required Background Knowledge

No prior skills are required

### Recommended Background Knowledge

Windows Computers

## Description

In this guide, you’ll learn the fundamentals of the Custom UI (CUI) Gizmo, a powerful tool for creating custom interfaces. While traditionally requiring TypeScript knowledge and API expertise, this beginner-friendly tutorial breaks down complex concepts into accessible steps. You’ll gain hands-on experience with formatting basics and essential features, building the confidence needed to understand official documentation and start building your own custom interfaces right away.

## Learning Objectives

By reading and reviewing this written guide you will be able to:

* Setup The Desktop Editor
  + Add the CUI API to your worlds
* Create Base UIComponent Scripts
* Display Text On CUI
* Visualize The Boxes Inside of Boxes
* Organize Styles
* Understand Bindings
* Background Image Example
* Instructions Board Example
* ScrollView Example
* Learn more in docs
  + Tutorials
    -Custom UI

## What Is A Custom UI (CUI) Gizmo?

The Custom UI gizmo makes it possible to create interactive user interfaces that work great for both VR and XS users. You can create clickable buttons, display images, update text being displayed to specific users, and much more.

Creating with the Custom UI (CUI) Gizmo is sophisticated enough to warrant dedicated specialists on professional teams, similar to how teams might have dedicated animators or other specialized roles. The depth and complexity of CUI development makes it comparable to other specialized disciplines within production.

After completing this tutorial, I encourage you to continue deeper down the rabbit hole if you enjoy making these UIs. Alternatively, use the basics learned in this guide to augment your current workflow. There are dozens of niches in the creative process in Horizon, with new features like this one added regularly. It won’t be for everyone, but for those who have CSS background, or who pick it up quickly, have a blast!

### How important is knowing Horizon’s Typescript API, to get started?

Knowing Typescript may help, but the UI API is very different compared to the Horizon Core API, so you really can be a beginner and dive deep into UI with little background knowledge.

## Limitations And Use Cases

At first, your creativity might seem like the only limiting factor, and in some ways that is true. However, there are some limitations and use cases to be aware of.

### Text Styling Constraints

Unlike the Text Gizmo, a block of text displayed on the Custom UI cannot have multiple styles applied to it without a lot of extra work. You will often find yourself creating multiple header and body styles. You also have to apply color in these styles, so if you want a rainbow title, then you will have to color each letter with its own style (which is more work than it might at first seem).

### Static Layout Architecture

The Custom UI layout is determined prior to world start and cannot be modified with the current UI API. This means that if you want to have multiple pages, you will need to hide and show them as needed. Note that while it may seem intuitive to design multiple UINodes with active display bindings, this functionality is not supported in the current version (as of September 2024).

### Performance Constraints

The recommended update frequency is limited to **two updates per second** per world instance. This is very little, imagine you have a player walk up and it displays their name and score, that is two updates. This constraint applies globally across all Custom UI gizmos, not individually.
For example, one thing I tried to develop at first and learned just wasn’t possible was a cookie clicker-like game. But the number of clicks, color changes, and everything going on, was too much for the UI and it caused Horizon’s menus to stop working.

### System Impact

Custom UI implementations can have unexpected effects on world performance. Key considerations:

* Monitor binding update frequency carefully
* Performance issues may manifest in seemingly unrelated systems (e.g., delayed trigger responses, physics interactions)
* Use trace debugging to identify UI-related performance impacts early in development

**Mentor’s Note:** Overall, if you ask me what I think about the CUI gizmo- I love it! I love that it makes menus compatible on all devices, and I love how it looks. That being said I use it cautiously, and recommend sticking to simple Pop Ups or Text Gizmos when you need a lot of updates or are just developing something simple. Most CUIs take multiple hours to build, which can really slow down your production if there isn’t someone assigned to this task specifically.

## Desktop Editor Setup

When working with the Custom UI gizmo it is highly recommended to use the Horizon desktop editor. This is because when you update the UI, you will want to be able to see the changes quickly and iterate rapidly.

You’ll start by creating a new world, this is not required but is a low-risk way to get started and have a playground to learn in. You can then pull out the CUI gizmo via the **Shapes Drop Down>Gizmos>Custom UI**.

You can then adjust the position and rotation to your liking, and after selecting the gizmo, press **“F”** on your keyboard, to focus the gizmo. You can then use **Alt+Left Click** to rotate around, and your scroll wheel to zoom in and out.

*Note: Rotating around will be useful as the UI is only rendered on one side, so if you don’t see it later in the tutorial you can rotate to the other side.*

<details>
<summary>Image shows a user beginning to work in the desktop editor</summary>

<p></p>

[Image shows a user beginning to work in the desktop editor](../../image_data/b187579ec2851026e1b46459c7c6616d09337df0ed956d833fba014c8f8ec204.md)

### Overview
The image depicts a 3D modeling software interface with a focus on a custom UI element being previewed in a virtual environment. The central part of the image shows a 3D cube with a stylized icon resembling a document or file, placed within a grid-based workspace. On the right side, there is a properties panel displaying various settings related to the UI element.

### Key Elements
- **Central 3D Cube**: A large orange cube with a white icon in the center. The icon consists of two stacked rectangles with a smaller rectangle above them, resembling a document or file.
- **Virtual Environment**: The cube is situated in a virtual space with a light blue sky and a gray ground plane, suggesting a 3D modeling environment.
- **Properties Panel**: Located on the right side, it contains multiple sections such as "Visual & Interaction," "Web and Mobile," "Behavior," and "Attributes." Each section has various toggles, sliders, and input fields for adjusting properties of the UI element.
- **Navigation Bar**: At the top, there are several icons and dropdown menus indicating different functionalities within the software.
- **Console and Asset Panel**: At the bottom left, there are panels labeled "Assets" and "Console," showing simulation view indicators and system/user messages.

### Visual Flow / Relationships
- **Most Prominent Element**: The central 3D cube with the icon.
- **Arrows/Connectors**: None visible.
- **Spatial Relationships**: The cube is centered in the virtual environment, with the properties panel on the right providing contextual information about the UI element.

</details>

<p></p>



Next, create your first script. In the example below, we will name it **CUI\_Test\_Entity**. The prefix “CUI” will help you easily find all scripts that are related to the CUI gizmo, you will see that later in this tutorial. “Test” lets you know what this script is supposed to do. “Entity” is one of several postfixes you can use to describe what the script is, in this case, it is attached to an entity, a Custom UI gizmo.

<details>
<summary>Screenshot shows the script menu with CUI_Test_Entity entered in the field</summary>

<p></p>

[Screenshot shows the script menu with CUI_Test_Entity entered in the field](../../image_data/8e672d03206b123e5293920f7b5bf84dce2086980cc18dcad6dbb359b7bfd99c.md)

### Overview
This image depicts a user interface element within a software application, specifically a section labeled "Scripts." It includes a search bar, a text input field, and various interactive elements such as buttons and icons.

### Key Elements
- **Search Bar**: Located at the top-left, it has a magnifying glass icon and a placeholder text area.
- **Text Input Field**: Positioned below the search bar, containing the text "CUI_Test_Entity" and a counter indicating "15/128."
- **Plus Button**: A small plus sign icon located next to the search bar.
- **Settings Gear Icon**: A gear icon situated to the right of the search bar.
- **More Options Menu**: Three vertical dots indicating additional options.
- **Close Button**: An 'X' icon at the top-right corner of the "Scripts" section.
- **Language Selector**: A small icon resembling a flag with a 'T' inside, located above the text input field.

### Visual Flow / Relationships
The most prominent visual element is the text input field, as it is the active area where the user is currently interacting. The search bar and settings gear are secondary elements that provide functionality. The language selector is positioned above the text input field, suggesting it might be related to the content being entered. The layout follows a standard form input pattern with a search function and additional settings options.

</details>

<p></p>



Now that you have created our first script, you can go back to the Scripts drop-down, and click the gear settings icon.

<details>
<summary>Screenshot highlights the placement of the settings icon</summary>

<p></p>

[Screenshot highlights the placement of the settings icon](../../image_data/1df59a4f3036a8ca39f5b5a9fd76a3dbd2c199520dbcae24979f47056e58fe58.md)

### Overview
This image depicts a user interface element, specifically a toolbar or menu section within a software application. The focus is on a "Scripts" section that includes various interactive elements such as a search bar, buttons, and a settings gear icon.

### Key Elements
- **Search Bar**: Located at the bottom left, it has a magnifying glass icon and a placeholder text area.
- **Plus Button**: Positioned next to the search bar, it is a simple plus sign.
- **Arrow Button**: To the right of the plus button, it features a double-headed arrow pointing left and right.
- **Settings Gear Icon**: Situated further to the right, it is a standard gear symbol.
- **Ellipsis Menu**: On the far right, represented by three vertical dots.
- **Close Button**: A small 'X' located above the ellipsis menu.
- **Header**: At the top, the word "Scripts" is displayed prominently.
- **Dropdown Menu**: A blue dropdown arrow is visible on the left side, indicating additional options or a menu.

### Visual Flow / Relationships
The most prominent visual element is the "Scripts" header, which draws attention due to its larger font size and central placement. The search bar and related interactive elements are arranged horizontally beneath the header. The settings gear icon and ellipsis menu are positioned to the right, suggesting they are secondary actions related to the primary "Scripts" functionality. The red arrow points towards the settings gear icon, indicating a possible interaction or focus point.

</details>

<p></p>



From the settings menu, select the API tab on the left, enable the UI API, and click Apply.

<details>
<summary>Screenshot shows the settings menu with the UI API enabled</summary>

<p></p>

[Screenshot shows the settings menu with the UI API enabled](../../image_data/80d3ed732a8808cbf3df6e3c5adda584ec1f7ce526f0fe5c20aa72c68a10127c.md)

### Overview
This image depicts a settings dialog box titled "Script Settings." It is part of a user interface, likely within a development environment or game engine configuration tool. The dialog box contains options related to API settings, with a focus on toggling specific API components.

### Key Elements
- **Title Bar**: "Script Settings" at the top left, with a close button ("X") at the top right.
- **Left Panel**: Contains navigation options labeled "Script editing," "API," and "Console."
- **Main Content Area**: Displays API settings with a list of API components and toggle switches next to them.
  - **API Version**: Set to "2.0.0" with a dropdown menu.
  - **API Components**: Listed as "horizon/performance," "horizon/navmesh," "horizon/ui," "horizon/unity_asset_bundles," "horizon/camera," and "horizon/world_streaming."
    - Toggle switches next to each component, with some toggled on (e.g., "horizon/ui").
- **Buttons**: Two buttons at the bottom, "Cancel" and "Apply."

### Visual Flow / Relationships
The most prominent visual element is the API settings area, which is centrally located and takes up the majority of the screen space. The toggle switches are arranged vertically under each API component name. The "Apply" button is positioned at the bottom right, while the "Cancel" button is at the bottom left. The navigation panel on the left acts as a sidebar, providing access to different settings categories.

</details>

<p></p>



You are now finished setting up. In the next step, you will begin working on the base UIComponent script.

## Create Base UIComponent Script

- Open your script in VS Code. From the Scripts drop-down to the right of your newly created script, click the three-dot icon. Then select “**Open in External Editor**.”

*Note: If this doesn’t do anything, you will need to install VS Code, and after installing restart your computer for Horizon to be able to “Open in External Editor,” ie. VS Code.*<details>
                                                                                                                                                                                   <summary>Screenshot shows the settings menu a mouse cursor on the 'three-dot icon'</summary>
                                                                                                                                                                                   
                                                                                                                                                                                   <p></p>
                                                                                                                                                                                   
                                                                                                                                                                                   [Screenshot shows the settings menu a mouse cursor on the 'three-dot icon'](../../image_data/c4477e05a4bdebda8345cf62e1d826261ceccf48cc175999d4a4149a3266d146.md)
                                                                                                                                                                                   
                                                                                                                                                                                   ### Overview
                                                                                                                                                                                   This image depicts a user interface element within a software application, specifically a section labeled "Scripts." It includes various interactive and informational components arranged in a grid-like layout.
                                                                                                                                                                                   
                                                                                                                                                                                   ### Key Elements
                                                                                                                                                                                   - **Top Bar**: Located at the very top, this bar contains a blue button with a white downward arrow and a small icon resembling a gear or settings symbol.
                                                                                                                                                                                   - **Title Area**: Below the top bar, the word "Scripts" is prominently displayed in white text against a dark background.
                                                                                                                                                                                   - **Search Box**: Positioned beneath the title area, there is a search box with a magnifying glass icon on the left side, indicating a search functionality.
                                                                                                                                                                                   - **Action Buttons**: To the right of the search box, there are two interactive buttons: one with a plus sign (+) and another with a double-headed arrow (possibly for copying or sharing).
                                                                                                                                                                                   - **Settings Icon**: A gear icon is situated next to the action buttons, suggesting access to settings or preferences.
                                                                                                                                                                                   - **More Options Button**: On the far right of the top bar, there is a vertical ellipsis (...), typically indicating more options or a menu.
                                                                                                                                                                                   - **Last Updated Information**: Below the search box, the text "Last updated just now" is displayed, providing information about the last update time.
                                                                                                                                                                                   - **Script Entry**: The bottom section features a script entry labeled "CUL_Test_Entity," which was saved at a specific timestamp ("Saved at 9:43:16 AM · Compiled").
                                                                                                                                                                                   - **Right Arrow**: A right-pointing arrow is located on the far right, possibly indicating a next action or navigation option.
                                                                                                                                                                                   
                                                                                                                                                                                   ### Visual Flow / Relationships
                                                                                                                                                                                   The most prominent visual elements are the search box and the script entry, as they are central to the functionality described. The top bar acts as a header, providing context and navigation options. The right arrow suggests a progression or continuation of actions related to the script entry.
                                                                                                                                                                                   
                                                                                                                                                                                   </details>
                                                                                                                                                                                   
                                                                                                                                                                                   <p></p>
                                                                                                                                                                                   
                                                                                                                                                                                   

- Adjust the default script to match the base UIComponent script seen below. To do this start by deleting the import line and the two “**hz**.” You can then explicitly import Component by backspacing the “**t**” in Component, and when we retype the **T**, click “**Enter**” on your keyboard to allow VS Code to automatically write the import line seen on line 1 in the screenshot below.

*Note: Using explicit importing is optional, but for this tutorial, it is recommended you follow this method instead of using “hz.” to reduce the chance of discrepancy-related errors.*

- Rewrite the first “**Component**” as UIComponent, matching line 4 in the script below. Be sure to click “**Enter**” again to allow VS Code to auto-import from the UI API.

You also need the “**initializeUI**” method, which must return a UINode, which you can do with “View.” You will see this written out on line 7 in the script below.

*Note: You can click “Enter” as you type to autocomplete. In some cases may need to so that the import line gets correctly filled out. For instance “View” is also an import from the UI API. You may also find that “UINode” doesn’t auto import, in which case, backspace the “e” and retype E, clicking Enter like before to import.*

- Add the preStart method.

*Note: If you don’t click enter to autocomplete, this method and the previous “initializeUI” method, they are both case sensitive, and if misspelled will not work correctly or report an error.*

<details>
<summary>Screenshot shows an example script</summary>

<p></p>

[Screenshot shows an example script](../../image_data/75f6a831c4d6a53fd9f3ad3172c7035d6b3c2c56ae21e766f365c7c28f2f47db.md)

### Overview
This image displays a code editor window open to a TypeScript file named `CUI_Test_Entity.ts`. The content is structured as a class definition within a larger codebase, likely part of a user interface component library.

### Key Elements
- **File Header**: Located at the top-left corner, showing the file name `CUI_Test_Entity.ts`.
- **Code Editor Interface**: The main area of the image contains the code itself.
    - **Imports**: At the beginning of the file, imports from `"horizon/core"` and `"horizon/ui"` are listed.
    - **Class Definition**: A class `CUI_Test_Entity` extends `UIComponent`.
    - **Static Props Definition**: An empty static property definition `{}`.
    - **Initialize Method**: `initializeUI()` method returns a `View({})`.
    - **PreStart Method**: `preStart()` method is partially typed but not fully implemented.
    - **Start Method**: `start()` method is also partially typed but not fully implemented.
    - **Component Registration**: The last line registers the class with `Component.register(CUI_Test_Entity);`.

### Visual Flow / Relationships
The visual flow follows a typical code editor layout with a clear separation between the file header and the code content. The methods are logically grouped under the class definition. There are no arrows or lines connecting elements, indicating a linear reading order from top to bottom and left to right.

</details>

<p></p>


Let’s take a minute to understand how each of these lines works, and what they do.

**Lines 1 and 2:** The first two lines are imports, this declares what you are using in your script. If you come from a background in CodeBlocks, think of this as not having access to any CodeBlocks unless you explicitly requested them. Fortunately, these two lines are automatically written for you by VS Code.

**Line 4:** This is where you create and name your script. These are called Components, and they are the equivalent to a CodeBlock script in that they can be attached to an Entity (formerly known as objects in CodeBlocks). Components come with Horizon-specific features including the world start method, onUpdate, PPVs, etc. The Component ends on line 18 with the closing curly brace ( }).

When you go to attach the script to an entity, “**CUI\_Test\_Entity**” is the name of the script. You can rename this here if you want.

The start of line 4, “**class**” says that the “CUI\_Test\_Entity” is a reusable thing, like a template, and can therefore be attached to more than one entity if desired (just like a CodeBlock script can). Saying it “**extends**” UIComponent means that it gets all the features of Horizon mentioned above, plus some UI-specific features, including the ability to initializeUI.

*Note: This means it has to be attached to a CUI gizmo. The last bit “`<typeof CUI_Test_Entity>`” is a bit of Horizon magic that we won’t be looking at today, but makes our lives easier.*

**Line 5:** This is where you declare any variables you want to have available on the properties panel of our entity that runs this script. You’ll be doing this later to reference a texture asset. In CodeBlocks all variables had to be on the properties panel, in Typescript you can put other variables that don’t need to be on the properties panel below this, for instance on Line 6 you could say “orgPos = Vec3.zero;”

**Line 7:** This is where you initialize what is displayed on the UI gizmo. You return a UINode, “: UINode,” which is what will be displayed.

**Line 8:** This is where you return an empty View. This means nothing is currently being displayed, but you will change that very soon.

**Line 11:** This is the preStart method, for reference, methods are akin to functions, and may feel similar to events in CodeBlocks, but unlike events, when calling methods and functions, they occur instantly, before the next line of code is run (whereas CodeBlock events happen in the next frame).

*Note: The preStart method is called after initializeUI, which is why I organized the Component methods this way, though you could technically put them in reverse order: start => preStart => initializeUI. But don’t do that, lol!*

Use preStart to connect events and do anything that needs to happen before the start method of all Components are called.

**Line 15:** This is akin to the CodeBlock event “When World is Started.” Components require a start method but can be left empty like this one if you don’t need it. Whereas preStart is not required, but I like to include it in my base script as it is very useful.

**Line 19:** This is where you register your Component script so that it can be attached to entities in Horizon.

Now that you understand the base script, in the next section, you are going to attach the script and display a simple “Hello World” message.

## Displaying Hello World

To start, go back into Horizon and from the bottom of the CUI gizmo’s properties panel attach your script.

<details>
<summary>Screenshot shows an example script being attached to the gizmo properties panel</summary>

<p></p>

[Screenshot shows an example script being attached to the gizmo properties panel](../../image_data/39687af15d69ded94340f3f9c9c717b3e22bd98caccdd659bc189f4d96fb8354.md)

### Overview
This image depicts a portion of a user interface (UI) settings panel, likely from a game development tool or similar software. The panel includes expandable sections labeled "More" and "Script," with various configuration options and dropdown menus.

### Key Elements
- **More Section**:
  - **Collision Events From**: A dropdown menu labeled "Nothing."
  - **Avatar Attachable**: A dropdown menu set to "Off."
- **Script Section**:
  - **Attached Script**: A dropdown menu showing "CUI_Test_Entity:CUI_Test_Enti..." truncated at the end.
- **Expandable Sections**:
  - Both sections have a downward-pointing arrow indicating they can be expanded further.
- **Menu Button**: A vertical ellipsis ("...") located to the right of the "Script" section, suggesting additional options or settings.

### Visual Flow / Relationships
The most prominent visual elements are the dropdown menus and the expandable sections. The dropdown menus are aligned horizontally under their respective labels. The expandable sections are stacked vertically, with the "Script" section partially obscured by the "More" section due to the dropdown menu content. The menu button is positioned to the far right of the "Script" section.

</details>

<p></p>



In addition to creating a UINode with View, you can also do it with “Text.” Below you will see a change from “**View**” to use “**Text**,” don’t forget to click enter while typing Text, to both autocomplete and auto-import Text from the UI API.

Next, add the property “ **text: ‘Hello World!’** ” inside the curly braces. You will make this look pretty in the next section, but the gist is that the Text function takes a JSON Object parameter, the curly braces, commonly thought of as a bag of stuff, and requires one property to be filled out: “text.” There are a bunch of other properties in this “bag of stuff” that can be filled out and will be explored in the next step. You can then define the text as a string using single ticks: ‘Hello World!’.

<details>
<summary>Image shows an example script with the text: 'Hello World!' property</summary>

<p></p>

[Image shows an example script with the text: 'Hello World!' property](../../image_data/c5a7bc5f56a5e3f8ee80e805915aee3f03c31c778923541ac4fa87b7660e9619.md)

### Overview
This image displays a snippet of code written in Swift, specifically within a function named `initializeUI`. The code is part of a larger program that initializes a user interface component (`UINode`) and returns a `Text` element with the text 'Hello World!'.

### Key Elements
- **Visual description**: The image contains a code editor interface with syntax highlighting.
- **Location**: The code is located in the center of the image.
- **Contents**: 
    - Line 7: `initializeUI(): UINode {`
    - Line 8: `return Text({ text: 'Hello World! '});`
    - Line 9: `}`
- **Visual styling**: The code uses a monospaced font, with keywords highlighted in purple (`initializeUI`, `return`, `Text`, `text`), and string literals in red (`'Hello World!'`). The background is white, and the editor has a dark theme.

### Visual Flow / Relationships
- The most prominent visual element is the code itself.
- There are no arrows, lines, or connectors present.
- The code is read from top to bottom, left to right.

</details>

<p></p>



With that filled out, make sure to press Ctrl+S to save, and then you can return to Horizon, and press play on our world after compilation has finished (you’ll see compilation steps detailed on the console log, which only takes a few seconds).

*Note: If you don’t see anything on the UI gizmo, you may need to rotate and look at the other side. Press F to focus the UI gizmo, then Alt+Left Click to rotate around it.*

<details>
<summary>Screenshot shows a world in desktop editor displaying the 'Hello World!' message</summary>

<p></p>

[Screenshot shows a world in desktop editor displaying the 'Hello World!' message](../../image_data/ec1d616b587f0cd3f8d4496b4c887b2e6b9bae8e3d9d2aa16fcb0dd04b562fa3.md)

### Overview
The image depicts a user interface with a central canvas area displaying a 3D model of a rectangular frame with a transparent glass-like texture. Above the canvas, there are various toolbars and options. The interface appears to be part of a 3D modeling software.

### Key Elements
- **Canvas Area**: A large rectangular area in the center containing a 3D model of a frame with a transparent glass-like texture. The frame has a light blue outline and is positioned against a gradient background transitioning from light blue at the top to white at the bottom.
- **Text**: The text "Hello World!" is displayed within the frame on the left side.
- **Toolbars**: Located at the top of the image, there are several icons and options:
  - **Play Button**: A blue play button with a white play icon.
  - **Selection Tool**: A white cursor icon pointing towards the selection tool icon.
  - **Rotate Tool**: A blue icon with a wrench symbol.
  - **Zoom Tool**: A blue icon with a person symbol.
  - **Menu Dropdown**: A downward arrow indicating a dropdown menu.
  - **Angle Measurement Tool**: A blue icon with a protractor symbol labeled "10°".
  - **Scale Tool**: A blue icon with a percentage symbol labeled "10%".
  - **Relative Scale Option**: A dropdown menu labeled "Relative" with a downward arrow.
  - **Zoom Level Indicator**: A dropdown menu showing "10%".
  - **Zoom Mode Selector**: A dropdown menu labeled "Relative".

### Visual Flow / Relationships
- **Most Prominent Element**: The central canvas area with the 3D model.
- **Arrows and Lines**: There are no arrows or lines connecting elements.
- **Spatial Relationships**: The elements are arranged horizontally across the top of the image, with the canvas area occupying the lower portion of the interface.

</details>

<p></p>



And just like that you have displayed your first message on a Custom UI gizmo, great work!

In the next section, you will start to understand the inner workings of UINodes and their children, which will enable you to position, scale, stylize, and much more!

## Boxes Inside of Boxes

The best analogy I have come across to help learn how to use the CSS-like styling used on the Custom UI gizmo is to start thinking of the whole thing as just one giant cardboard box.

Thinking top down, you can place additional boxes inside of this box, and further down, boxes in those boxes. For my fellow math nerds, the cardboard walls are infinitely thin unless you specify a border width.

Next, you can adjust “Text” to look pretty by putting “text: ‘Hello World!’” on its own line and adding a comma at the end of the line as seen below on line 9. The comma will allow you to add more properties to our “bag of stuff.”

Below text you will add a style property, which also takes a JSON Object (the curly braces aka a bag of stuff). When you type the first “{“ it will auto-complete the closing brace, while your cursor is between these curly braces, click enter to automatically format it. At this point, it is recommended to add a comma to the right of the closing curly brace (as seen on line 12 in the screenshot below). This is useful if you decide to add any additional properties in the future.

In the style properties, you are going to add a “borderColor,” and “borderWidth.” These are pretty straightforward and will allow us to visualize the default border of our box, the borderWidth is set to 2 pixels. This is helpful when starting out with the UI gizmo, and can be removed later after you have finished working out your UI’s style.

*Note: borderColor can be any color you like, make sure to autocomplete Color by clicking enter so that it is also imported. you are just using a simple red here, so technically you could just use “Color.red” and get the same result. But this, “new Color(1, 0, 0),” allows you to easily customize the color later if you decide you want to keep the border. The values are in the order RGB, with values ranging from 0 to 1, where 0 is no color, and 1 is 100%.*

<details>
<summary>Image shows a sample script with the border options highlighted</summary>

<p></p>

[Image shows a sample script with the border options highlighted](../../image_data/0120b80a86db6121e8d74eba83fd91b829e02618ba1adc9e11ba2914b9535b45.md)

### Overview
This image displays a snippet of code written in a programming language that uses a syntax highlighting theme. The code is part of a method definition within a class or function named `initializeUI`. The code snippet includes a return statement that creates a `Text` object with specific styling attributes.

### Key Elements
- **Visual description**: The code snippet is presented in a monospaced font typical of code editors.
- **Location**: The code is located in the center of the image.
- **Contents**: 
    - Line 7: `initializeUI(): UINode {`
    - Line 8: `return Text({`
    - Line 9: `text: 'Hello World!',`
    - Line 10: `style: [`
    - Line 11: `borderColor: new Color(1, 0, 0),`
    - Line 12: `borderWidth: 2,`
    - Line 13: `],`
    - Line 14: `});`
    - Line 15: `}`
- **Visual styling**: The code is highlighted with syntax coloring. The text is black, the curly braces `{}` are light gray, and the keywords (`initializeUI`, `return`, `Text`, `text`, `style`, `borderColor`, `borderWidth`) are in blue. The comment `//` is in green.

### Visual Flow / Relationships
- The most prominent visual element is the code snippet itself.
- There are no arrows, lines, or connectors indicating a specific reading order.
- The elements are arranged vertically, following the standard indentation of the code.

</details>

<p></p>



Now pressing “ctrl+s” to save, you can go back into Horizon and wait for compilation to complete, making sure to press the world start button at the top center of our screen.

You might be surprised to see that our default text box stretches across the length but not the height of the gizmo. Later you will learn how to adjust the style properties to fill a percentage of the available space.

<details>
<summary>Image shows a highlighted 'Hello World' image</summary>

<p></p>

[Image shows a highlighted 'Hello World' image](../../image_data/f34684c610526bc92dd511f9693c9b82c9af3eca21bb737b23ffe626a77e8433.md)

### Overview
This image depicts a simple text input field with a placeholder text inside. The field is highlighted with a red border, indicating focus or selection.

### Key Elements
- **Visual description**: A rectangular text input field.
- **Location**: Centered horizontally and vertically within the image.
- **Contents**: Contains the text `Hello World!`.
- **Visual styling**: The text is white, the background of the field is transparent, and the border is a solid red line.

### Visual Flow / Relationships
The most prominent visual element is the text input field itself. There are no arrows, lines, or connectors present. The text inside the field is the focal point, and the red border draws attention to the field as the user's current interaction point.

</details>

<p></p>



Before you do that though, you need to learn about children- UIChildren. UIChildren can either be a single UINode or an array of UINodes. It hasn’t been super clear, but both “Text” and “View” return UINodes. You may remember the initializeUI method must return a UINode, which you first created using View and then changed to Text. Both of these tell the UI gizmo what to render. But it only takes a single UINode. What if you want to render multiple? That is where children come in.

The “View” JSON Object from earlier has a property not available on Text called “children” where you can then use square brackets to create an array. In the example below you will see several text objects nested inside the square brackets, and at the bottom the style being applied to the group of children.

<details>
<summary>Image shows an extended sample script with nested objects that have applied styles</summary>

<p></p>

[Image shows an extended sample script with nested objects that have applied styles](../../image_data/958ecca78e5a70600854fc60d747454e5a29fa9375fbacd6c5b764e9f3c13bf6.md)

### Overview
This image displays a code snippet written in a programming language that appears to be defining a user interface (UI) component. The code is structured within a function named `initializeUI` which returns a `View` object containing two `Text` components. The code uses a custom style object to define the appearance of these components.

### Key Elements
1. **Function Definition**
   - **Visual description**: A function definition.
   - **Location**: Top-left corner.
   - **Contents**: `initializeUI(): UINode {`.
   - **Visual styling**: Standard syntax highlighting, no specific styling applied.

2. **Return Statement**
   - **Visual description**: A return statement.
   - **Location**: Below the function definition.
   - **Contents**: `return View({`.
   - **Visual styling**: Standard syntax highlighting, no specific styling applied.

3. **Children Array**
   - **Visual description**: An array of child elements.
   - **Location**: Below the return statement.
   - **Contents**: Contains two `Text` components.
   - **Visual styling**: Standard syntax highlighting, no specific styling applied.

4. **First Text Component**
   - **Visual description**: A `Text` component.
   - **Location**: First item in the children array.
   - **Contents**: `text: 'Hello World!',`.
   - **Visual styling**: Standard syntax highlighting, no specific styling applied.

5. **Style Object for First Text Component**
   - **Visual description**: A style object.
   - **Location**: Below the `text` property.
   - **Contents**: `borderColor: new Color(0, 1, 0), borderWidth: 2,`.
   - **Visual styling**: Standard syntax highlighting, no specific styling applied.

6. **Second Text Component**
   - **Visual description**: Another `Text` component.
   - **Location**: Second item in the children array.
   - **Contents**: `text: 'Hello World!',`.
   - **Visual styling**: Standard syntax highlighting, no specific styling applied.

7. **Style Object for Second Text Component**
   - **Visual description**: Another style object.
   - **Location**: Below the `text` property.
   - **Contents**: `borderColor: new Color(0, 0, 1), borderWidth: 2,`.
   - **Visual styling**: Standard syntax highlighting, no specific styling applied.

8. **View Object**
   - **Visual description**: A `View` object.
   - **Location**: Enclosing the children array.
   - **Contents**: `{children: [ ... ]}`.
   - **Visual styling**: Standard syntax highlighting, no specific styling applied.

9. **Final Style Object**
   - **Visual description**: A style object.
   - **Location**: Below the `children` array.
   - **Contents**: `borderColor: new Color(1, 0, 0), borderWidth: 2,`.
   - **Visual styling**: Standard syntax highlighting, no specific styling applied.

### Visual Flow / Relationships
- **Most Prominent Element**: The function definition and its contents.
- **Arrows/Connectors**: None.
- **Reading Order**: The code is read from top to bottom, left to right.
- **Spatial Relationships**: Elements are arranged in a nested structure typical of programming code.

</details>

<p></p>



If you would like to continue following along, please adjust your previous initializeUI method to match the one above. This takes a bit of work, copy and paste can help, but a missing comma, or line off just slightly could cause an error. My recommendation is to move “Text” down and create a new View as seen below.

<details>
<summary>Image shows a new view after the "text" field</summary>

<p></p>

[Image shows a new view after the "text" field](../../image_data/4e2210ce976a20e362e01253ba3fe498d29a92bfc87cc3a74d8fad5f42f6da5a.md)

### Overview
This image displays a code snippet written in a syntax that resembles a declarative programming language, possibly for UI development. The code defines a method `initializeUI()` which returns a `View` object with specified styles and a `Text` object containing a message.

### Key Elements
1. **Method Definition**
   - **Visual description**: A method definition.
   - **Location**: Top-left area.
   - **Contents**: `initializeUI(): UINode {`.
   - **Visual styling**: Standard code formatting, no specific styling applied.

2. **Return Statement**
   - **Visual description**: A return statement.
   - **Location**: Below the method definition.
   - **Contents**: `return View({`.
   - **Visual styling**: Standard code formatting, no specific styling applied.

3. **View Object**
   - **Visual description**: A `View` object with properties.
   - **Location**: Below the return statement.
   - **Contents**: `children: [], style: {`.
   - **Visual styling**: Standard code formatting, no specific styling applied.

4. **Style Properties**
   - **Visual description**: Properties within the `style` object.
   - **Location**: Below the `View` object.
   - **Contents**: `borderColor: new Color(1, 0, 0), borderWidth: 2,`.
   - **Visual styling**: Standard code formatting, no specific styling applied.

5. **Text Object**
   - **Visual description**: A `Text` object with properties.
   - **Location**: Below the `View` object.
   - **Contents**: `Text({`.
   - **Visual styling**: Standard code formatting, no specific styling applied.

6. **Text Properties**
   - **Visual description**: Properties within the `Text` object.
   - **Location**: Below the `Text` object.
   - **Contents**: `text: 'Hello World!',`.
   - **Visual styling**: Standard code formatting, no specific styling applied.

7. **Additional Style Properties**
   - **Visual description**: Additional properties within the `Text` object.
   - **Location**: Below the `text` property.
   - **Contents**: `borderColor: new Color(0, 1, 0), borderWidth: 2,`.
   - **Visual styling**: Standard code formatting, no specific styling applied.

8. **Closing Parentheses**
   - **Visual description**: Closing parentheses for the `Text` object.
   - **Location**: Bottom of the `Text` object.
   - **Contents**: `}]`.
   - **Visual styling**: Standard code formatting, no specific styling applied.

9. **Method Closing Bracket**
   - **Visual description**: Closing bracket for the `initializeUI()` method.
   - **Location**: Bottom of the method definition.
   - **Contents**: `}`.
   - **Visual styling**: Standard code formatting, no specific styling applied.

### Visual Flow / Relationships
- **Most Prominent Element**: The `initializeUI()` method definition.
- **Arrows/Connections**: None.
- **Reading Order**: The code flows from top to bottom, left to right.
- **Spatial Relationships**: Elements are arranged in a linear fashion, with nested objects (`View` and `Text`) placed within the larger `initializeUI()` method.

</details>

<p></p>



You can then cut and paste the Text into the children’s square brackets. Make sure to convert the semicolon to a comma as seen on line 16. You can then copy and paste another copy below this to match the screenshot earlier and adjust each style to have a unique color.

<details>
<summary>Image shows text being pasted back into the sample script as per the instructions</summary>

<p></p>

[Image shows text being pasted back into the sample script as per the instructions](../../image_data/db7959081037a202aa851314e8e68e999406f6a142abdaba74169c4b0d8d9206.md)

### Overview
This image displays a code snippet written in a programming language that appears to be related to user interface (UI) development, specifically for a framework that supports building views programmatically. The code defines a method `initializeUI()` which returns a `View` object containing a child element (`Text`) with specific styling attributes.

### Key Elements
1. **Code Editor Interface**
   - **Visual description**: A code editor interface with syntax highlighting.
   - **Location**: Top-left corner.
   - **Contents**: Code blocks with syntax highlighting.
   - **Visual styling**: Dark theme with light-colored text and blue highlights for code blocks.

2. **Code Block**
   - **Visual description**: A highlighted code block within the editor.
   - **Location**: Center-left area.
   - **Contents**: Code defining a method `initializeUI()` that returns a `View` object.
   - **Visual styling**: Blue background for the code block, white text, and green and purple keywords.

3. **Text Element**
   - **Visual description**: A `Text` element within the `View`.
   - **Location**: Inside the `View` definition.
   - **Contents**: `text: 'Hello World!'`.
   - **Visual styling**: Blue background, white text.

4. **Style Attributes**
   - **Visual description**: Style attributes for the `Text` element.
   - **Location**: Below the `text` attribute.
   - **Contents**: `borderColor: new Color(0, 1, 0), borderWidth: 2`.
   - **Visual styling**: Blue background, white text.

5. **Method Definition**
   - **Visual description**: Method definition `initializeUI()`.
   - **Location**: Top-left area.
   - **Contents**: `initializeUI(): UINode {`.
   - **Visual styling**: Blue background, white text.

6. **Return Statement**
   - **Visual description**: Return statement `return View({`.
   - **Location**: Below the method definition.
   - **Contents**: `return View({`.
   - **Visual styling**: Blue background, white text.

7. **Children Array**
   - **Visual description**: Array defining children elements.
   - **Location**: Below the return statement.
   - **Contents**: `children: [`.
   - **Visual styling**: Blue background, white text.

8. **Text Element Definition**
   - **Visual description**: Definition of the `Text` element.
   - **Location**: Below the `children` array.
   - **Contents**: `Text({`.
   - **Visual styling**: Blue background, white text.

9. **Text Content**
   - **Visual description**: Content of the `Text` element.
   - **Location**: Below the `Text` definition.
   - **Contents**: `text: 'Hello World!'.`
   - **Visual styling**: Blue background, white text.

10. **Style Attribute Definition**
    - **Visual description**: Style attribute definition for the `Text` element.
    - **Location**: Below the `text` content.
    - **Contents**: `style: {`.
    - **Visual styling**: Blue background, white text.

11. **Border Color and Width**
    - **Visual description**: Border color and width attributes.
    - **Location**: Below the `style` attribute.
    - **Contents**: `borderColor: new Color(0, 1, 0), borderWidth: 2`.
    - **Visual styling**: Blue background, white text.

12. **Closing Parentheses**
    - **Visual description**: Closing parentheses for the `Text` element definition.
    - **Location**: Below the `borderWidth` attribute.
    - **Contents**: `});`.
    - **Visual styling**: Blue background, white text.

13. **View Style Definition**
    - **Visual description**: Style definition for the `View` object.
    - **Location**: Below the `children` array.
    - **Contents**: `style: {`.
    - **Visual styling**: Blue background, white text.

14. **Border Color and Width**
    - **Visual description**: Border color and width attributes for the `View` object.
    - **Location**: Below the `style` attribute.
    - **Contents**: `borderColor: new Color(1, 0, 0), borderWidth: 2`.
    - **Visual styling**: Blue background, white text.

</details>

<p></p>



As you might imagine this can get crazy very quickly with so much nesting. There are a couple of tricks you will look at later that can help improve the readability and condense the initializeUI method down some. But first let’s see how these boxes in boxes look by saving, compiling, and starting our world.

As you can see, they are stacked by default. Thinking back to our cardboard box analogy you will notice that because our width is set to 2 pixels, the red border shrinks the space available by 2 pixels. When you delete these two style lines in the future the two Text children will reclaim the space.

<details>
<summary>Screenshot shows 2 hello world messages displayed, with color borders</summary>

<p></p>

[Screenshot shows 2 hello world messages displayed, with color borders](../../image_data/14c090dccd4203fe0676cf33c2eccb93ee5d6e6fbec5384c71a401e1a30457e7.md)

### Overview
The image displays a simple user interface element with two text inputs labeled "Hello World!" placed side-by-side against a gradient blue background. The layout includes visual indicators such as colored borders around the inputs.

### Key Elements
1. **Text Input 1**
   - **Visual description**: A rectangular text input field.
   - **Location**: Top-left corner.
   - **Contents**: Contains the text "> Hello World!".
   - **Visual styling**: Light gray background, red border, white text.

2. **Text Input 2**
   - **Visual description**: Another rectangular text input field.
   - **Location**: Directly below Text Input 1.
   - **Contents**: Contains the text "> Hello World!".
   - **Visual styling**: Light gray background, blue border, white text.

### Visual Flow / Relationships
- **Most prominent visually**: Both text inputs are equally prominent due to their placement and similar design.
- **Arrows, lines, connectors**: None present.
- **Spatial relationships**: The inputs are stacked vertically, with no additional connections or arrows indicating a specific reading order.

</details>

<p></p>



In the next section, you are going to explore more of the style options and learn how to better organize our styles.

## Organizing UI Styles

Start by creating a new script to store various styles, **CUI\_Styles\_Data**. Press enter on your keyboard to create the script.

<details>
<summary>Image shows a user creating a CUI_Styles_Data script</summary>

<p></p>

[Image shows a user creating a CUI_Styles_Data script](../../image_data/6e58053d571c47ce3935c51a3c0807bd9f0baf7e1263c940ca2e14647e9099dd.md)

### Overview
This image depicts a user interface element within a software application, specifically a section for creating new scripts. The interface includes a search bar, a button to create a new script, and a list of existing scripts.

### Key Elements
- **Search Bar**: Located at the top-left, it has a magnifying glass icon and a placeholder text that reads ">". It is black with white text.
- **Create New Script Button**: Positioned centrally below the search bar, it is a light gray button with a plus sign inside a circle.
- **List of Scripts**: Below the search bar, there are two entries:
  - **CUI_Styles_Data**: This entry is partially filled with text "CUI_Styles_Data|15/128" indicating a file name and a progress bar.
  - **CUI_Test_Entity**: This entry shows a timestamp "Saved at 9:43:16 AM · Compiled" indicating when the script was saved and compiled.
- **Last Updated Label**: Above the search bar, it displays "Last updated 22" which likely refers to the last update time or version number.
- **Settings Gear Icon**: Located to the right of the search bar, it is a standard gear icon typically used for settings.
- **More Options Menu**: A vertical ellipsis menu is located to the far right of the search bar, suggesting additional options.

### Visual Flow / Relationships
The most prominent visual element is the "Create new script" button, as it is central and highlighted. The search bar is secondary but important for functionality. The list of scripts is tertiary, providing context and history. There are no arrows or lines connecting elements, so the relationship is primarily through proximity and interaction.

</details>

<p></p>



Once you have the new script you can click the three-dot icon, “**open in external editor**.” Alternatively back in VS Code, if you click the top left files icon, it will expand and show you all of your scripts. You can click on the newly created .ts file, and optionally close the file browser.

After loading the script, delete all the defaults. A shortcut to use is, “ctrl+a” to select all, and then backspace.

<details>
<summary>Image shows a script with all of the defaults deleted</summary>

<p></p>

[Image shows a script with all of the defaults deleted](../../image_data/b24f08e11a1cd61fb24ba3c6ea1437033908bc11302a54e8ded4f6e6bec6a4fc.md)

### Overview
This image depicts a code editor interface with a file explorer sidebar on the left and a main editing area on the right. The interface includes tabs at the top, a search icon, and several other icons representing different functionalities.

### Key Elements
- **File Explorer Sidebar**: Located on the left side of the image.
  - **Visual description**: Contains icons and labels.
  - **Location**: Left side of the image.
  - **Contents**: Icons include a folder with a document inside labeled "CUI_Test_Entity.ts," a magnifying glass for search, a share icon, a light bulb with a triangle, and a grid with two squares.
  - **Visual styling**: Icons are simple line drawings with a white background and black outlines. The folder icon has a blue dot indicating a file count (1).

- **Tabs**: Located at the top of the image.
  - **Visual description**: Text labels on tabs.
  - **Location**: Top of the image.
  - **Contents**: Two tabs labeled "TS CUI_Test_Entity.ts" and "TS CUI_Styles_Data.ts."
  - **Visual styling**: White background with black text and a blue dot next to the first tab.

- **Main Editing Area**: Located on the right side of the image.
  - **Visual description**: A blank text area with a cursor.
  - **Location**: Right side of the image.
  - **Contents**: The text area contains the text "CUI_Styles_Data.ts > ...".
  - **Visual styling**: White background with a gray border.

### Visual Flow / Relationships
- **Most prominent visually**: The file explorer sidebar and the tabs at the top.
- **Arrows, lines, connectors, or implied reading order**: None.
- **Spatial relationships**: The file explorer sidebar is on the left, the tabs are at the top, and the main editing area is on the right. The tabs are above the main editing area.

</details>

<p></p>



The idea of this script is to be a place you can store and modify our styles so it doesn’t clutter our initializeUI method. You could have multiple files like this, one for each UI gizmo, but instead you can create a folder structure by nesting JSON Objects, with each nested Object storing the styles for a specific UI gizmo. You’ll see this in practice from lines 14 to 19 in the screenshot below. You start by exporting a const Object named cuiStylesData, which allows us to import this data in any of our scripts. Then inside the curly braces you have another Object on line 15 named “test” matching the name of our UI gizmo’s script.

On line 16 you create an item named “text” which is a reference to “**testTextStyle**.” This format allows us to have cleaner names. As an example when using this you would write, “cuiStylesData.test.text” which is a lot easier to read than the alternative.

Above on lines 3 and 8 you create two new constants. One is a TextStyle, this allows us to adjust text font and size later. These different styles have properties specific to their type. ViewStyle is a good umbrella capturing most of the style options available.

Inside these styles you are introducing two new properties, “width,” and “height.” This allows us to specify what percentage of the available space in the parent UINode you want to occupy. You can use a number to specify pixels, but I highly encourage adopting percentages for everything except ScrollView where you can specify the amount that can be scrolled as a number in pixels.

<details>
<summary>Image shows an example style script</summary>

<p></p>

[Image shows an example style script](../../image_data/e7d1db11393a80b705c761cc297e72c4bbf8f8aace6bc9731038b0997d290286.md)

### Overview
This image displays a code snippet written in TypeScript, specifically defining style data for a user interface component. The code includes imports for `TextStyle` and `ViewStyle`, followed by the definition of two constants (`testTextStyle` and `testViewStyle`) that represent style objects. These styles are then combined into an object named `cuiStylesData`.

### Key Elements
- **Visual description**: Code editor interface with syntax highlighting.
- **Location**: Top-left corner.
- **Contents**: 
    - `import { TextStyle, ViewStyle } from "horizon/ui"`
    - `const testTextStyle: TextStyle = { width: '50%', height: '50%' }`
    - `const testViewStyle: ViewStyle = { width: '100%', height: '100%' }`
    - `export const cuiStylesData = { test: { text: testTextStyle, view: testViewStyle } }`
- **Visual styling**: White background, syntax highlighted keywords and strings in various colors (e.g., blue for keywords, red for strings).

### Visual Flow / Relationships
- Most prominent visually: The code blocks and syntax highlighting.
- No arrows or lines connecting elements.
- Reading order follows the standard left-to-right, top-to-bottom flow typical of code editors.

</details>

<p></p>



Back in our CUI\_Test\_Entity script, let’s apply this to our View’s style. Below borderWidth you start with an ellipses, “...” which is the spread operator, and then import our cuiStylesData Object by clicking enter as you type it out. Then when you type period at the end you get a drop-down list and can select “test.view.” What you have done is spread the contents of the ViewStyle “view” to be included in our style’s properties.

<details>
<summary>Image shows a viewstyle view for the example script</summary>

<p></p>

[Image shows a viewstyle view for the example script](../../image_data/8f3323379b46a8817077cb4da16aa35b3a9134a128eab0ad7d4a41e3a4e8741b.md)

### Overview
This image displays a code snippet within a text editor or IDE environment. The content focuses on a JavaScript object definition that includes a `style` property containing CSS-like properties such as `borderColor` and `borderWidth`.

### Key Elements
- **Visual description**: Code snippet with syntax highlighting.
- **Location**: Top-left corner of the image.
- **Contents**: 
    - `style`: Object containing properties.
    - `borderColor`: Property set to `new Color(1, 0, 0)` which corresponds to red.
    - `borderWidth`: Property set to `2`.
    - `cuiStylesData.test.view`: Property referencing another object.
- **Visual styling**: Syntax highlighting colors are used for keywords (`style`, `borderColor`, `borderWidth`) and values (`new Color(1, 0, 0)`).

### Visual Flow / Relationships
- Most prominent visually: The `style` object.
- No arrows or lines connecting elements.
- Reading order follows the standard left-to-right, top-to-bottom flow typical of code snippets.

</details>

<p></p>



Now you can do the same thing to our “Text” children. I recommend putting the data to be spread at the top of our style, because if you write a property that was spread above, it is overwritten by the later one below.

<details>
<summary>Image shows code as per the previous instructions</summary>

<p></p>

[Image shows code as per the previous instructions](../../image_data/dbb2ef93c7bb0e7111f65ca59b1127f2fce0a6acb2bc0eb4b4cc73d6059da993.md)

### Overview
This image displays a code snippet written in a programming language that appears to be related to user interface (UI) development, specifically for a framework that uses a view-based approach. The code defines a method `initializeUI()` which returns a `UINode`. The method constructs a `View` object containing two `Text` elements with specific styles.

### Key Elements
1. **Method Definition**
   - **Visual description**: A method definition within a code editor.
   - **Location**: Top-left corner of the image.
   - **Contents**: `initializeUI(): UINode {`
   - **Visual styling**: Standard syntax highlighting in a code editor.

2. **Return Statement**
   - **Visual description**: A return statement within the method.
   - **Location**: Below the method definition.
   - **Contents**: `return View({`
   - **Visual styling**: Standard syntax highlighting in a code editor.

3. **First Text Element**
   - **Visual description**: A `Text` element with a red-colored text.
   - **Location**: Inside the `View` object.
   - **Contents**: `text: 'Hello World, How Are You Today!!',`
   - **Visual styling**: Red text color, bordered with a green stroke.

4. **Style for First Text Element**
   - **Visual description**: Style properties for the first `Text` element.
   - **Location**: Below the `text` property.
   - **Contents**: `style: { ...cuiStylesData.test.text, borderColor: new Color(0, 1, 0), borderWidth: 2, }`
   - **Visual styling**: Green border color, 2-pixel border width.

5. **Second Text Element**
   - **Visual description**: Another `Text` element with blue-colored text.
   - **Location**: Below the first `Text` element.
   - **Contents**: `text: 'Hello World, I Am Good!',`
   - **Visual styling**: Blue text color, bordered with a purple stroke.

6. **Style for Second Text Element**
   - **Visual description**: Style properties for the second `Text` element.
   - **Location**: Below the `text` property.
   - **Contents**: `style: { ...cuiStylesData.test.text, borderColor: new Color(0, 0, 1), borderWidth: 2, }`
   - **Visual styling**: Purple border color, 2-pixel border width.

7. **View Element**
   - **Visual description**: The enclosing `View` element.
   - **Location**: Below the `Text` elements.
   - **Contents**: `style: { ...cuiStylesData.test.view, borderColor: new Color(1, 0, 0), borderWidth: 2, }`
   - **Visual styling**: Red border color, 2-pixel border width.

8. **Closing Parentheses**
   - **Visual description**: Closing parentheses of the `View` object.
   - **Location**: Bottom-right corner of the image.
   - **Contents**: `});`

### Visual Flow / Relationships
- **Most Prominent Element**: The `View` object containing the two `Text` elements.
- **Arrows/Connectors**: None.
- **Reading Order**: The code is read from top to bottom, left to right.
- **Spatial Relationships**: The `Text` elements are nested within the `View`, and both `Text` elements are nested within the `View`.

</details>

<p></p>



Saving and compiling back in Horizon, you can now realize our dream of boxes in boxes!

<details>
<summary>Screenshot displays a world with text boxes in boxes</summary>

<p></p>

[Screenshot displays a world with text boxes in boxes](../../image_data/d9f1f833cc53745e638d7349c83fd655c8f681ba62a9c2fafee5cbacae73378d.md)

### Overview
This image depicts a virtual environment with a grid floor and a sky background. There are two text messages displayed within the scene, along with a semi-transparent blue arc and a cursor indicating interaction.

### Key Elements
- **Text Messages**: 
    - Located at the top-left corner: "Hello World, How Are You Today!!"
    - Located at the bottom-left corner: "Hello World, I Am Good!"
- **Blue Arc**: A semi-transparent blue arc is positioned centrally, slightly above the grid floor.
- **Cursor**: A white arrow cursor is located near the center of the image, suggesting user interaction.
- **Grid Floor**: A light gray grid pattern covers the floor, providing a sense of depth and perspective.
- **Sky Background**: The background consists of a gradient sky transitioning from light blue to white, giving the impression of a clear day.

### Visual Flow / Relationships
The most prominent visual elements are the text messages, which are static and serve as the primary content. The blue arc and cursor suggest interactivity, drawing attention towards the center of the image. The grid floor and sky background provide context and depth without distracting from the central elements.

</details>

<p></p>



Next, you are going to look at bindings, which are used to update the UI.

## What Are Bindings?

Bindings allow us to update our UI after the world has started. Bindings are able to be various simple types, ie: string, number, boolean, Color, LocalizableText, ImageSource.

*Note: You cannot make a UINode binding, this will throw an error at the time of writing (September 2024).*

Let’s start by looking at how to create a couple of bindings inside our component. Below you have a string and number binding. you create the **nameBinding** variable, then you set it to be equal to a new Binding of type string, and you set the default value to “Name.”

*Note: You cannot access the values of these bindings elsewhere, they are just for the CUI to read, if you need access to the current value, it is recommended to have a secondary variable to store the current value.*

<details>
<summary>Image shows example bindings</summary>

<p></p>

[Image shows example bindings](../../image_data/c0ffa75f8aa0201734caf0becba81aa30e4b8848bd5b6aed9f9b52645ce40dda.md)

### Overview
The image displays a snippet of code written in a programming language that involves creating instances of a `Binding` class with specific types and parameters.

### Key Elements
- **Visual description**: The code snippet is written in a monospaced font typical of programming languages.
- **Location**: The code is centered within the image.
- **Contents**: 
  - `nameBinding = new Binding<string>('Name');`
  - `levelBinding = new Binding<number>(1);`
- **Visual styling**: The text is black, and the keywords (`new`, `Binding`, `<string>`, `<number>`) are highlighted in red. The string literals `'Name'` and `'1'` are in quotes and appear in white.

### Visual Flow / Relationships
- The code is structured as two separate lines, indicating two distinct bindings being created.
- There are no arrows, lines, or connectors, so the visual flow is linear and straightforward, following the natural reading order of the code.

</details>

<p></p>



When a player enters the world, you can set the **nameBinding** using .set, the second parameter “[player]” is optional. This optional parameter allows us to specify a list of players who will receive the binding update. In this case, you only want the player who entered the world to see their name. The square brackets create an array, and you place the “player” inside. When this list parameter is not specified, it defaults to updating the bindings for all players.

<details>
<summary>Code snippet shows the optional 'player' parameter</summary>

<p></p>

[Code snippet shows the optional 'player' parameter](../../image_data/060c3f71041c530ede83c1dce2bda07e9ade33f821126c73ab7c1226d453bdfa.md)

### Overview
This image displays a snippet of code written in TypeScript. The code is part of a method named `playerEnterWorld`, which takes a `Player` object as its parameter. The method appears to be part of a larger class or function that manages player interactions within a game world.

### Key Elements
- **Visual description**: The image shows a code snippet with syntax highlighting.
- **Location**: The code is centered in the image.
- **Contents**: 
    ```typescript
    playerEnterWorld(player: Player) {
        this.nameBinding.set(player.name.get(), [player]);
    }
    ```
- **Visual styling**: The code uses a monospaced font typical for programming languages. The syntax highlighting includes keywords in blue (`player`, `Player`, `this`, `nameBinding`, `set`, `player.name`, `get`, `[player]`) and strings in green (`"player"`).

### Visual Flow / Relationships
- **Most prominent visually**: The method definition and its contents are the focal point.
- **Arrows, lines, connectors**: There are no arrows, lines, or connectors in the image.
- **Spatial relationships**: The code is structured linearly, with the method name at the top and the method body below it.

</details>

<p></p>



To use this binding you just have to place it after the text property, ie: “**text: this.nameBinding**,” but then you would just have their name, for additional text, you can use derive. Below you can see that when you derive the binding, you get the name and using an arrow function, you can return a string.

*Note: “\n” is a line break and is the same as “`<br>`” on a Text Gizmo.*

<details>
<summary>Code snippet shows an arrow function used to return a string as described previously</summary>

<p></p>

[Code snippet shows an arrow function used to return a string as described previously](../../image_data/dcaea8a7bc6a5295226c078ce2c6b9500d68b6733e1d2ae79354384b869ba330.md)

### Overview
This image displays a code snippet written in JavaScript, specifically targeting a `Text` component. The code defines the `text` property and `style` property for the `Text` component.

### Key Elements
- **Visual description**: Code snippet.
- **Location**: Top-left corner.
- **Contents**: 
  - `text`: A function that returns a string formatted as `\nUpgrade \n + name + '\nPower Washer!\n'`.
  - `style`: An object containing `textAlign`, `fontFamily`, and `fontSize`.
- **Visual styling**: 
  - `textAlign`: 'center'.
  - `fontFamily`: 'Bangers'.
  - `fontSize`: 48.

### Visual Flow / Relationships
- Most prominent visually: The code snippet itself.
- No arrows, lines, or connectors present.
- Reading order follows the standard left-to-right, top-to-bottom flow typical of code snippets.

</details>

<p></p>



There is also .reset(), which “resets the player-specific value of the binding, if any, back to the global value.” You can also provide an array of players if you just want to reset some players.

<details>
<summary>Code snippet shows .reset() being used</summary>

<p></p>

[Code snippet shows .reset() being used](../../image_data/a8108e0e703ddaf0c031f56330ce4290394ea69776bdef6a01d4a18b9c5b0ed7.md)

### Overview
This image displays a code snippet within a software development environment, specifically showing method documentation and usage examples. The content is structured with a method definition, a comment explaining its functionality, and a usage example demonstrating how to call the method.

### Key Elements
- **Method Definition**: `(method) Binding<string>.reset(players?: Array<Player>): void`
  - **Visual description**: A method signature indicating a method named `reset` that takes an optional array of `Player` objects as a parameter and returns `void`.
  - **Location**: Top right section of the image.
  - **Contents**: `(method) Binding<string>.reset(players?: Array<Player>): void`
  - **Visual styling**: Black text on a light gray background.
  
- **Documentation Comment**: 
  - **Visual description**: A block of text explaining the `reset` method.
  - **Location**: Below the method definition.
  - **Contents**: 
    > Resets the player-specific value of the binding, if any, back to the global value. Like the set method, this method also queues a re-render operation for all UI panels that use this Binding.
    > @param players
    > The players to reset the value for. If not provided, all player-specific values are cleared. If provided, only value for players in the list are reset and receive the global value.
  - **Visual styling**: Black text on a white background.
  
- **Usage Example**: 
  - **Visual description**: Code snippet demonstrating how to call the `reset` method.
  - **Location**: Bottom left section of the image.
  - **Contents**: `this.nameBinding.reset()`
  - **Visual styling**: Black text on a white background.

### Visual Flow / Relationships
- **Most Prominent Element**: The method definition and its documentation comment are the most prominent due to their larger font size and central placement.
- **Arrows/Connectors**: There are no arrows or connectors in this image.
- **Spatial Relationships**: The method definition is at the top, followed by the documentation comment, and then the usage example at the bottom. The elements are arranged vertically, with the method definition and documentation comment being closely related and the usage example being further down.

</details>

<p></p>



You can also use a map function to set the value of a binding, here is a screenshot of the example given here: <https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/custom-ui/playerspecific-custom-ui>

<details>
<summary>Image shows bindings for multiple players</summary>

<p></p>

[Image shows bindings for multiple players](../../image_data/9c08eadfdd80050c80829895fdfe92b176183a3c3f3b672fc67f8d809fbfef4b.md)

### Overview
The image displays a code snippet alongside a table that tracks the values of variables `binding`, `derived`, `player1`, `player2`, and `player3`. The code demonstrates the use of a `Binding` object and its methods `set` and `derive`.

### Key Elements
- **Code Snippet**: Located on the left side of the image.
    - **Visual description**: Code written in a monospaced font.
    - **Contents**: 
        ```javascript
        const binding = new Binding(0);
        binding.set(1);
        binding.set(2, [player1, player2]);
        binding.set(v => v + 1);
        const derived = binding.derive(v => v + 1);
        binding.set(4, [player2, player3]);
        binding.set(v => v + 1, [player3]);
        ```
    - **Visual styling**: Black text on a white background.
- **Table**: Located on the right side of the image.
    - **Visual description**: A table with alternating row colors (light pink and white).
    - **Contents**:
        | binding | 0 | 0 | 0 | 0 |
        | binding | 1 | 1 | 1 | 1 |
        | binding | 1 | 2 | 2 | 1 |
        | binding | 2 | 3 | 3 | 2 |
        | binding | 2 | 3 | 3 | 2 |
        | derived | 3 | 4 | 4 | 3 |
        | binding | 2 | 3 | 4 | 4 |
        | derived | 3 | 4 | 5 | 5 |
        | binding | 2 | 3 | 4 | 5 |
        | derived | 3 | 4 | 5 | 6 |
    - **Visual styling**: Light pink and white cells, black text on a light pink background for the first column, and black text on a white background for the rest.

### Visual Flow / Relationships
- **Most prominent visually**: The table on the right side.
- **Arrows/lines/connectors**: None.
- **Spatial relationships**: The code snippet is aligned to the left, while the table occupies the right side. The table has a clear column header and row headers, indicating a structured layout.

</details>

<p></p>



Next, you are going to look at and discuss various examples that you’ll be able to take apart and try on your own.

## Background Image Example

In this example, you display an image png asset, which is uploaded to your asset library as a texture, and then referenced on the properties panel of your CUI gizmo.

**Mentor’s Note:***I don’t like to use the “!” seen on line 13, but it is the easiest way to get this setup and working, otherwise you have to use an image binding and check that the bgImage is not undefined. Be aware that doing it this way will break if your asset is not referenced on the properties panel.*

<details>
<summary>Image shows code snippet for including a background image</summary>

<p></p>

[Image shows code snippet for including a background image](../../image_data/b2439494f795c80027de19b15e3897efb8f7c1a2d6ea803c4acbc9acaf207383.md)

### Overview
This image displays a code snippet written in TypeScript, specifically defining a class named `CUI_Test_Entity`. The code is part of a larger project involving UI components and is structured within a file named `CUI_Test_Entity.ts`.

### Key Elements
- **Code Editor Interface**: The code is displayed in a code editor interface with syntax highlighting.
- **Imports**: At the top, there are imports for `Component`, `PropTypes`, `Image`, `ImageSource`, `UIComponent`, `UINode`, `View`, and `horizon/ui`.
- **Class Definition**: A class `CUI_Test_Entity` extends `UIComponent`.
- **Static Props Definition**: A static property `propsDefinition` is defined, which includes a single prop `bgImage` of type `Asset`.
- **initializeUI Method**: This method returns a `UINode` containing an `Image` component that sets its `source` to `this.props.bgImage!` and applies a style with `width` and `height` set to `'100%'` and `position` set to `'absolute'`.
- **start Method**: An empty method `start()` is defined at the bottom of the class definition.
- **Component Registration**: The last line registers the `CUI_Test_Entity` component with `Component.register(CUI_Test_Entity);`.

### Visual Flow / Relationships
The code is structured linearly from top to bottom, with each line of code clearly delineated. There are no arrows or connectors indicating relationships between elements, as this is a textual representation of code rather than a graphical user interface.

</details>

<p></p>



## Instruction Board Example

This example shows how you can have multiple images, and when a user presses back or next buttons it changes to the next image.

<details>
<summary>Image shows code snippet for an instruction board</summary>

<p></p>

[Image shows code snippet for an instruction board](../../image_data/5a2537e080bcb50d7edff44525efa2ed17a39ba27194a62539f23f8b7744798e.md)

### Overview
This image displays a code snippet written in TypeScript, specifically a class definition named `Instructions`. The class extends `UIComponent` and contains methods and properties related to UI interactions and rendering.

### Key Elements
1. **Class Definition**
   - **Visual description**: A TypeScript class declaration.
   - **Location**: Top of the image.
   - **Contents**: `class Instructions extends UIComponent<typeof Instructions>`
   - **Visual styling**: Standard TypeScript syntax highlighting.

2. **Static Prop Definitions**
   - **Visual description**: A static property definition block.
   - **Location**: Below the class definition.
   - **Contents**: `static propDefinition = { ... }`.
   - **Visual styling**: Standard TypeScript syntax highlighting.

3. **Instance Variables**
   - **Visual description**: Instance variables declared within the class.
   - **Location**: Below the static prop definitions.
   - **Contents**: `readonly backgroundImage = new Binding<ImageSource>(``);`, `index = 0;`, `readonly textures: TextureAsset[] = [];`.
   - **Visual styling**: Standard TypeScript syntax highlighting.

4. **Initialization Method**
   - **Visual description**: An initialization method (`initializeUI`) that sets up the UI components.
   - **Location**: Below the instance variables.
   - **Contents**: `initializeUI() { ... }`.
   - **Visual styling**: Standard TypeScript syntax highlighting.

5. **Return Statement**
   - **Visual description**: The return statement of the `initializeUI` method.
   - **Location**: Below the initialization method.
   - **Contents**: `return View({ children: { ... } });`.
   - **Visual styling**: Standard TypeScript syntax highlighting.

6. **Method `addTextureToArray`**
   - **Visual description**: A method that adds textures to an array.
   - **Location**: Below the return statement.
   - **Contents**: `addTextureToArray(texture: Asset | undefined): void { ... }`.
   - **Visual styling**: Standard TypeScript syntax highlighting.

7. **Array `buttons`**
   - **Visual description**: An array containing buttons.
   - **Location**: Below the method `addTextureToArray`.
   - **Contents**: `buttons: UIChildren[] = [ ... ]`.
   - **Visual styling**: Standard TypeScript syntax highlighting.

8. **Method `createButton`**
   - **Visual description**: A method that creates a button.
   - **Location**: Below the array `buttons`.
   - **Contents**: `createButton(buttonText: string, goUp: boolean): UIChildren { ... }`.
   - **Visual styling**: Standard TypeScript syntax highlighting.

9. **Method `start`**
   - **Visual description**: A method that starts the component.
   - **Location**: Below the method `createButton`.
   - **Contents**: `start() { ... }`.
   - **Visual styling**: Standard TypeScript syntax highlighting.

10. **Method `updateIndex`**
    - **Visual description**: A method that updates the index.
    - **Location**: Below the method `start`.
    - **Contents**: `updateIndex(goUp: boolean) { ... }`.
    - **Visual styling**: Standard TypeScript syntax highlighting.

### Visual Flow / Relationships
- **Most Prominent Element**: The `View` returned at the end of the `initializeUI` method.
- **Arrows/Connections**: None.
- **Spatial Relationships**: The code is structured in a linear fashion, moving from class definition to methods and properties.

</details>

<p></p>



## ScrollView Example

This example shows how to implement a ScrollView. It is relatively simple. Most of the time it is recommended using percentages for height and width. But in a ScrollView, the height is best as a number of pixels (seen on line 43).

*Note: At the time of writing you may need to go into VR to see it work, or preview the build on XS before it will start working in the Desktop editor. So if it doesn’t seem to work at first don’t worry, just try it from another device.*

<details>
<summary>Image shows code snippet for implementing the scrollview</summary>

<p></p>

[Image shows code snippet for implementing the scrollview](../../image_data/cae0ee2363d72b44d3c86b07e5913db7cacae03723fd77cb795d68c88e57855a.md)

### Overview
This image displays a code snippet written in TypeScript, which appears to be part of a user interface component definition. The code includes imports from various modules, class definitions, method implementations, and utility functions. The content is structured around creating a console-like interface with bindings for strings and colors.

### Key Elements
1. **Imports**
   - `cuiStyles` from `"CustomUIStyles_Data"`
   - `Color`, `Component`, `PropTypes` from `"horizon/core"`
   - `Binding`, `Image`, `ImageSource`, `ScrollView`, `Text`, `UIComponent`, `UINode`, `View` from `"horizon/ui"`
   - `inWorldConsoleData` from `"InWorldConsole_Data"`
   - `ConsoleData` from `"InWorldConsole_Defs"`
   - `posTrackerVisibility_Data` from `"PositionTracker_Visibility_Data"`
   - `EntityVisibilityGroups` from `"PositionTracker_Visibility_Types"`
   - `objectUtils` from `"UtilObject_Func"`

2. **Variable Definitions**
   - `stringBindings`: An array of `Binding<string>` initialized with a length equal to `inWorldConsoleData.maxConsoleLength`.
   - `colorBindings`: An array of `Binding<Color>` initialized similarly.

3. **Class Definition**
   ```typescript
   class console extends UIComponent<typeof console> {
       static propsDefinition = {
           empty: { type: PropTypes.Asset },
       };

       preStart() {}

       start() {
           posTrackerVisibility_Data.addEntity(this.entity, EntityVisibilityGroups.front);
       }

       initializeUI() {
           return View({
               children: [
                   Image({
                       source: ImageSource.fromTextureAsset(this.props.empty!),
                       style: cuiStyles.instructionBoard.imageStyle,
                   }),
                   View({
                       children: Text({
                           text: 'Console:',
                           style: cuiStyles.console.titleText,
                       }),
                       style: cuiStyles.console.titleTextContainer,
                   }),
                   ScrollView({
                       children: generateConsoleChildren(),
                       style: cuiStyles.console.textContainer,
                       contentContainerStyle: { height: 8520, alignItems: 'flex-start' },
                   }),
               ],
               style: cuiStyles.console.container,
           });
       }
   }
   ```

4. **Utility Function**
   ```typescript
   function generateConsoleChildren(): UINode[] {
       return stringBindings.map((binding, index) => 
           Text({
               text: binding,
               style: objectUtils.partialFill(cuiStyles.console.text, { color: colorBindings[index] }),
           })
       );
   }
   ```

5. **Exported Function**
   ```typescript
   export function inWorldConsoleUpdateBinding(consoleData: ConsoleData[],) {
       consoleData.forEach((data, index) => {
           stringBindings[index].set(data.text);
           colorBindings[index].set(data.color);
       });
   }
   ```

### Visual Flow / Relationships
The code is structured linearly, moving from imports to variable definitions, then to a class definition, followed by utility functions, and finally an exported function. There are no visual elements as this is a textual representation of code.

</details>

<p></p>



## Thank You!

From here, I hope you’ll continue growing your typescript and UI skillset, expanding on the knowledge gained today to bring great looking UIs to the visitors of your worlds! If you have any questions or need help, don’t hesitate to ask in Discord!

Sincerely,

Laex05

## Extended Learning

Below we have provided challenges for you to implement on your own. The Advanced task may require some outside knowledge, and we encourage you to ask questions in Discord if you get stuck or are unsure how to complete any of these.

### Novice

Create a UI with a background image, and an instruction board with multiple images.

### Intermediate

Create a UI with a ScrollView.

### Advanced

Learn about animated bindings on the docs site and create a simple animation, ie. image swiping in and out of view. <https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/custom-ui/animations-for-custom-ui>

### Further Assistance

For any questions or further assistance, creators are encouraged to join the discussion on the Discord server or to schedule a mentor session for personalized guidance.