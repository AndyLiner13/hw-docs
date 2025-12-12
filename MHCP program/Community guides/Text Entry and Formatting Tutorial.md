Source: https://developers.meta.com/horizon-worlds/learn/documentation/mhcp-program/community-tutorials/text-entry-tutorial

# Text Entry and Formatting Tutorial

In this tutorial, you’ll explore efficient methods for importing and manipulating text in Meta Horizon Worlds using TypeScript. You’ll learn the simplest ways to integrate large blocks of text, to format text using TypeScript code, and you’ll even learn how to create text dynamically.

You can use the example code in this tutorial can be used by creators of all skill levels. Don’t worry if you’re new to TypeScript. By the end of this tutorial, you’ll be able to import text, format text, and create exciting, randomized game mechanics that surprise and engage your visitors.

* Creator skill Level: All levels
* Required background knowledge: No prior skills required.
* Recommended background knowledge: Horizon Desktop Editor, TypeScript, VS Code, Codeblocks.

**Note:** This tutorial contains TypeScript code that you can download. This code was provided by MHCP mentor Laex05 and Vidyuu team. If you encounter any issues with the TypeScript code, you can contact info@vidyuu.com, or Laex05 on Discord for assistance.

## Learning Objectives

To complete this tutorial, you’ll complete the following tasks:

* Learn about formatting options available in the Text Gizmo using TextMeshPro
* Write and edit text using the Horizon Desktop Editor directly on TextGizmos
* Easily place TextGizmos using the Horizon Desktop Editor
* Send text & text arrays from TypeScript to Codeblock scripts
* Request from and send random questions and answers to Codeblocks from TypeScript
* Receive text in TypeScript from Codeblock scripts
* Create a “MegaText” script in TypeScript, which can be used on desktop and in headset
* Write text with formatting in TypeScript
* Write text with the Vidyuu formatting library in TypeScript
* Basic ad-lib story generation in TypeScript using string array imports
* Advanced ad-lib story generation in TypeScript by picking a random story template and random player name

## Text Gizmo Formatting Cheat Sheet

When writing text on the Horizon Text Gizmo, the formatting options listed below are great for creating rich text and style. In the “text” property of the properties panel or using “text.set” in a TextGizmo Entity in Typescript, you can insert these codes to create the associated formats. These work because the Text Gizmo uses TextMeshPro (notably the Custom UI Gizmo does not support TextMeshPro formatting options). TextMeshPro is built into the backend of Unity and thus Horizon. It is what enables these formatting options. It is not specifically endorsed by, or made available by Horizon, but it has been used by creators for years to create stylistic text. Consider downloading [this image](https://drive.google.com/file/d/1YhXm8MMNFZ_b8mO0Ec4fSs75S4uKEN4r/view?usp=sharing) and keeping a copy of it in a convenient location for all your Text Gizmo formatting needs (reminder these are not supported on the Custom UI Gizmo).

The Text Gizmo in Horizon can hold up to 1000 characters. This includes formatting characters. This limit is easy to hit when you want to create rich text blocks. In many cases, it might be useful to use multiple Text Gizmos. The new Custom UI Gizmo is also a great option, but it has a steep learning curve, and creating rich text is a lot more difficult as it uses CSS-like styling (but more on that in a different tutorial).

## Text Formatting Options

* **Sprites (Emoji)**
  + `<sprite=0> 😜<sprite=15>` 😍 (values range from 0 through 15)
  + `<sprite=”dropcap numbers” index=0>` (values range from 0 through 9)
* **Subscript & Superscript**
  + `<sub>subscript</sub>`
  + `<sup>superscript</sup>`
* **Character Spacing**
  + `<cspace=1>S p a c e </cspace>`
* **Line Height**
  + `<line-height=0.1></line-height>`
* **Alignment**
  + `<align=left></align>` (options for left, right, and center)
* **Color, Highlighting & Transparency**
  + The easiest way to color text is to paint the gizmo using the paint tool
  + `<color=#ff0000>Red<color=#00ff00>Green<color=#0000ff>Blue</color>`
    - RGB colors using hex values (where 00 is 0%, ff is 100%)
  + `<color=#ff000080>Color With Transparency</color>`
  + `<alpha=#80>Transparent</color>`
  + `<mark=#00ffff7f>Highlight</mark>`
  + Solid Transparency For Windows `<mark=#00ffff7f>[TAB] </mark>`
    - Press [TAB] on keyboard in Horizon
* **Italic, Underline, Bold, Strikethrough**
  + `<i>Italic</i>`
  + `<u>Underline</u>`
  + `<b>Bold</b>`
  + `<s>Strikethrough</s>`
* **Linebreak**
  + `<br>`
* **No Parse**
  + `<noparse></noparse>` (show codes like these)
* **Font Size**
  + `<size=1></size>` (relative to size set on Text Gizmo)
* **Equal Spacing**
  + `<mspace=0.1></mspace>`
* **Uppercase, Lowercase, Small Caps**
  + `<uppercase>UPPERCASE</uppercase>`
  + `<lowercase>lowercase</lowercase>`
  + `<smallcaps>SMALL CAPS</smallcaps>`
* **Position & Offsets**
  + `<pos=40em></pos><pos=60%></pos>` (horizontal position)
  + `<voffset=2em></voffset>` (vertical offset)
* **Rotated Text**
  + `<rotate=-20>Rotate</rotate>`
* **Font Options**
  + `<font=bangers sdf>BANGERS SDF</font>`
    - Other Font Options:
      * Anton SDF
      * Roboto-Bold SDF
      * Oswald Bold SDF
      * Electronic Highway Sign SDF
* **Font Materials**
  + `<font=anton sdf><material=anton sdf - drop shadow></material></font>`
    - Try painting some of these different colors
    - Other Material Options:
      * Anton SDF Outline
      * Bangers SDF - Drop Shadow
      * Bangers SDF - Outline
      * Bangers SDF Logo
      * Roboto-Bold SDF - Drop Shadow
      * LiberationSans SDF - Metallic Green
      * LiberationSans SDF - Drop Shadow
      * LiberationSans SDF - Overlay
* **Gradient Options**
  + `<gradient=”Yellow To Orange - Vertical"></gradient>`
    - Other Gradient Options:
      * Dark To Light Green - Vertical
      * Light To Dark Green - Vertical
      * Blue To Purple - Vertical
    - The color is sret to white, otherwise the colors blend together:
      * Text painted pale green
      * Text painted purple
      * Text painted green
      * Text painted yellow
      * Text painted white

## Edit Text Using the Desktop Editor

In this section, you’ll familiarize yourself with the Meta Horizon Worlds Desktop Editor. You’ll use it to create a new world, and then you’ll add a Text Gizmo to it.

To complete the following procedure, you’ll need:

* A Windows computer.
* The Meta Quest Link (Oculus) app.
* VS Code.

**Mentor’s Note:** I recommend creating a new world to serve as a playground for experimentation before starting. As an example, the image below shows this world is named “Text Tests” with the current date in parentheses.

- Launch the Meta Quest app.
- In the Meta Quest app, navigate to and start the Meta Horizon Worlds app in Desktop Mode.
- Create a new world. Give your world a name, and then select **Custom Model Import**.

  <details>
  <summary>Select Custom Model Import</summary>
  
  <p></p>
  
  [Select Custom Model Import](../../image_data/939fee1e8e6fef92d1ced52cb502935bdb4fdaebdc5c1ad48b5457a90424cd7a.md)
  
  ### Overview
  This image depicts a dialog box titled "Create a custom model world." It contains fields and options for creating a custom model world within a software interface, likely related to game development or 3D modeling.
  
  ### Key Elements
  - **Title**: "Create a custom model world" located at the top of the dialog box.
  - **Name Input Field**: A text input field labeled "Name" with the placeholder text "Text Tests (June 2024)" entered. The field has a counter indicating "22/60" characters remaining.
  - **Primitive Assets Option**: A radio button option labeled "Primitive Assets" with a description underneath explaining that users can use shapes, templates, and a library of assets in Horizon Worlds.
  - **Custom Model Import Option**: Another radio button option labeled "Custom Model Import" with a description underneath stating that users can import all worlds' assets from a favorite 3D creation tool but won't be able to use assets previously created in Horizon Worlds.
  - **Buttons**: Two buttons at the bottom of the dialog box, one labeled "Cancel" and the other labeled "Create."
  
  ### Visual Flow / Relationships
  The most prominent visual element is the "Create" button, as it is the primary action button in the dialog box. The radio buttons for "Primitive Assets" and "Custom Model Import" are grouped together under the heading "Choose how you'll create." The name input field is positioned above these options, allowing users to enter a name before selecting a method to create the custom model world.
  
  </details>
  
  <p></p>
  
  

Adding the Text Gizmo, to a scene using the Desktop Editor is difficult. Meta recommends that you add the Text Gizmos in VR. But writing text in VR is also difficult, especially if you want to add any of the formatting options. If you want to use the Desktop Editor, see Adding text gizmos using the desktop editor.

- Add a text gizmo to your scene.
- Select the text gizmo from the Hierarchy.
- Edit the text field in the Property Panel. You can also adjust properties, like font size and color, just like you can in VR.

  <details>
  <summary>Add the Text Gizmo to a scene use the Desktop Editor</summary>
  
  <p></p>
  
  [Add the Text Gizmo to a scene use the Desktop Editor](../../image_data/a02dcdc256dc9747bef06d2d8038e745dee89570e75bc5b71f6f5d803e5ba118.md)
  
  ### Overview
  This image depicts a user interface from a software application, likely related to game development or 3D modeling, given the presence of a cube and text editing features. The interface includes a sidebar with a hierarchy of entities, a central workspace displaying a 3D cube, and a properties panel on the right side.
  
  ### Key Elements
  - **Sidebar (Left Panel)**: Contains a list of entities with names like "SpawnPoint," "messageReceiver," and "Cube." The "Text" entity is highlighted in blue.
  - **Central Workspace**: Displays a 3D cube with a blue outline and a green dot at its center, indicating a point of interest or selection. Text is placed within the cube, reading "You can write text here! Formatting is also supported!" with a red arrow pointing towards the text.
  - **Properties Panel (Right Panel)**: Includes sections labeled "Behavior," "Attributes," and "GameplayTags." The "Behavior" section has a text input field showing the same text as in the cube. Below it, there are checkboxes for "Auto Fit" and "Visible," both checked. The "Attributes" section displays position, rotation, scale, and color settings for the selected object. The "GameplayTags" section contains a search bar for attaching tags.
  
  ### Visual Flow / Relationships
  The layout follows a typical workflow where the left sidebar provides navigation, the central workspace shows the current selection, and the right properties panel offers editing options. The text within the cube is the focal point, drawing attention to the text formatting feature.
  
  </details>
  
  <p></p>
  
  

You can use the text field to write text and to copy and paste text into the text gizmo.

## Adding Text Gizmos Using the Desktop Editor

Here are some tips to help you if you want to add a text gizmo using the Desktop Editor.

- Add a text gizmo to your scene, here are a couple of tips to make your life easier.

  <details>
  <summary>Add a text gizmo to your scene</summary>
  
  <p></p>
  
  [Add a text gizmo to your scene](../../image_data/a14ab55cf79b0b0b2cce521d00b81c7d732b16444c5a49b45f1c9daf07e49b5f.md)
  
  ### Overview
  This image depicts a user interface element, specifically a menu or dropdown list titled "Gizmos." The menu contains various icons representing different functionalities or objects within a software environment, likely related to game development or level design.
  
  ### Key Elements
  - **Title Bar**: Located at the top, labeled "Gizmos," with a search bar below it.
  - **Icons and Labels**: Each icon has a corresponding label underneath it.
      - **Media Board**: Green icon with a camera symbol, labeled "Media Board."
      - **Trigger Zone**: Green icon with a hexagon and arrow, labeled "Trigger Zone."
      - **Script**: Purple icon with code tags, labeled "Script."
      - **Text**: Purple icon with a letter 'A' and 'a', labeled "Text."
      - **Spawn Point**: Blue icon with a stick figure, labeled "Spawn Point."
      - **Door**: Pink icon with an arrow, labeled "Door."
      - **Environment**: Light blue icon with a sun and cloud, labeled "Environment."
      - **Dynamic Light**: Yellow icon with a light bulb, labeled "Dynamic Light."
      - **Static Light**: Light blue icon with a cube, labeled "Static Light."
      - **TrailFx**: Orange icon with a line, labeled "TrailFx."
      - **ParticleFx**: Orange icon with sparkles, labeled "ParticleFx."
      - **Sound Recorder**: Teal icon with a microphone, labeled "Sound Recorder."
      - **Quests**: Orange icon with a star, labeled "Quests."
      - **World**: Orange icon with a trophy, labeled "World."
      - **Projectile**: Blue icon with a wrench, labeled "Projectile."
      - **Snap**: Blue icon with a gear, labeled "Snap."
  
  ### Visual Flow / Relationships
  The icons are arranged in a grid layout with four rows and three columns. The icons are evenly spaced, and each row has a distinct theme or category. The layout is clean and organized, facilitating easy navigation through the different options.
  
  </details>
  
  <p></p>
  
  
- Add some filler text on the properties panel, in this case, in the image below, we have added “Hello World.”

  <details>
  <summary>Image Content</summary>
  
  <p></p>
  
  [All image details and metadata](../../image_data/9f040ac28f9c5173762022ec85b74c25b269412f9380acfb6284b224c79ae1c4.md)
  
  ### Overview
  The image displays a user interface element that appears to be part of a game development tool or a 3D modeling software. The central focus is a 3D text object labeled "Hello World," which is surrounded by a bounding box with handles for manipulation. To the right, there is a sidebar with various attributes and settings related to the text object.
  
  ### Key Elements
  - **Central Text Object**: 
    - **Visual description**: A 3D text object with the text "Hello World."
    - **Location**: Centered in the image.
    - **Contents**: The text "Hello World."
    - **Visual styling**: Black text with a blue outline, positioned within a transparent blue bounding box with handles for rotation and scaling.
    
  - **Bounding Box Handles**: 
    - **Visual description**: Blue handles at the corners and edges of the bounding box.
    - **Location**: Surrounding the text object.
    - **Contents**: None, just visual indicators for manipulation.
    - **Visual styling**: Blue circles and lines indicating rotation and scaling axes.
  
  - **Sidebar Attributes**:
    - **Behavior Section**:
      - **Text**: "Hello World"
      - **Auto Fit**: Toggle switch (enabled).
      - **Visible**: Toggle switch (enabled).
    - **Attributes Section**:
      - **Position**: X: 0, Y: 6.65, Z: 3.50.
      - **Rotation**: X: 0, Y: 180, Z: 0.
      - **Scale**: X: 1, Y: 1, Z: 1.
      - **Color**: RGB(0, 0, 0).
  
  - **GameplayTags Section**:
    - **Search Attached Tags**: Input field for tagging.
  
  ### Visual Flow / Relationships
  - **Most Prominent Element**: The 3D text object "Hello World."
  - **Arrows/Connectors**: None.
  - **Reading Order**: The layout suggests a linear reading path from the text object to the attributes and tags on the right side.
  
  </details>
  
  <p></p>
  
  
- Then, presuming you have an object you want to place the text up against, click on that reference object and right-click to copy the position of the reference object.

  <details>
  <summary>Image Content</summary>
  
  <p></p>
  
  [All image details and metadata](../../image_data/67b7e79fe37429108a21c414307ca7a40f6eb7ba325f5e76cf623e6a1c69f7e3.md)
  
  ### Overview
  The image depicts a user interface from a 3D modeling or game development software. The central area shows a 3D view with a cube model, while the right side displays various properties and settings related to the cube. The interface includes a large "Hello World" text in the middle, suggesting a tutorial or example scene.
  
  ### Key Elements
  - **Central Scene**: A 3D view showing a cube model with a grid floor. The cube has a small blue dot at its center, likely indicating the pivot point, and red and green arrows pointing up and to the right, representing the axes.
  - **Text**: "Hello World" prominently displayed in the middle of the screen.
  - **Properties Panel**: Located on the right side, containing several sections such as "Behavior," "Attributes," and "GameplayTags." It shows properties like visibility, collision settings, and position, rotation, scale values.
  - **Cube Model**: A simple white cube in the 3D view, positioned slightly above the grid plane.
  
  ### Visual Flow / Relationships
  - **Most Prominent Element**: The "Hello World" text.
  - **Arrows**: Red and green arrows in the 3D view indicate the axes of the cube.
  - **Panel Layout**: The properties panel is divided into sections with headings like "Behavior," "Attributes," and "GameplayTags."
  
  </details>
  
  <p></p>
  
  
- You can then click on the Text Gizmo and right-click to paste the position. You may have to repeat these steps to paste the rotation from the reference object as well.

  <details>
  <summary>Image Content</summary>
  
  <p></p>
  
  [All image details and metadata](../../image_data/1acac989e2f3151bbdea4ea5abc114c98b3a1bff0d9377b33a3115dc4d5b3d1a.md)
  
  ### Overview
  The image depicts a user interface from a 3D modeling or game development software. The central focus is a 3D text object labeled "Hello World," which is highlighted with a bounding box and handles indicating it can be manipulated. To the right, there is a properties panel displaying various attributes related to the text object, such as behavior, attributes, and gameplay tags. The interface includes a grid background suggesting a 3D workspace.
  
  ### Key Elements
  - **Central Text Object**: 
    - **Visual description**: A 3D text object with the text "Hello World."
    - **Location**: Center of the image.
    - **Contents**: The text "Hello World."
    - **Visual styling**: Black text with a blue outline, surrounded by a transparent blue bounding box with red and green handles.
    
  - **Properties Panel**: 
    - **Visual description**: A vertical panel on the right side of the screen.
    - **Location**: Right side of the image.
    - **Contents**: 
      - **Behavior Section**: Contains options like "Auto Fit" and "Visible."
      - **Attributes Section**: Includes fields for "Copy Position," "Rotate," "Scale," and "Color."
      - **GameplayTags Section**: Displays a search bar and a note stating "This object has no tags."
      - **Script Section**: Partially visible at the bottom.
    - **Visual styling**: Dark background with white and light gray text, some elements highlighted in blue.
  
  - **Grid Background**: 
    - **Visual description**: A light gray grid covering the lower part of the image.
    - **Location**: Bottom half of the image.
    - **Contents**: A 3D grid plane.
    - **Visual styling**: Light gray squares forming a grid pattern.
  
  - **Menu Bar**: 
    - **Visual description**: Located at the very top of the image.
    - **Location**: Topmost part of the image.
    - **Contents**: Various icons and dropdown menus, including a camera icon, zoom settings, and other tools.
    - **Visual styling**: Dark background with white and light gray text/icons.
  
  ### Visual Flow / Relationships
  - **Most Prominent Element**: The 3D text object "Hello World."
  - **Arrows/Connections**: No explicit arrows or connections are visible.
  - **Spatial Relationships**: The text object is the focal point, with the properties panel providing additional information. The grid serves as a backdrop for the 3D workspace.
  
  </details>
  
  <p></p>
  
  
- Then, with the slide tool selected, and snapping turned off, grab one of the slide arrows to pull the text out of the reference object.

  <details>
  <summary>Image Content</summary>
  
  <p></p>
  
  [All image details and metadata](../../image_data/94b012c751ae6d58bb65b607c379a5ca59d0b377d98269d0cc1fbfed2dc71772.md)
  
  ### Overview
  The image depicts a digital interface, likely from a 3D modeling or design software. The central focus is a white rectangular area containing the text "Hello World," which is surrounded by a blue dashed outline indicating selection or editing mode. The interface includes various toolbars at the top with icons and options related to transformations and viewing modes.
  
  ### Key Elements
  - **Text Area**: Located centrally, filled with the text "Hello World." The text is bold and black.
  - **Selection Outline**: A blue dashed rectangle surrounds the text area, suggesting that the text is currently selected for editing.
  - **Toolbars**: At the top, there are multiple icons and dropdown menus, including options for local transformations ("Local"), viewing modes ("Relative"), and camera settings ("1.0").
  - **Background**: The background is a light gray grid, typical of a 3D modeling environment, with a darker blue area on the left side, possibly representing a different workspace or panel.
  
  ### Visual Flow / Relationships
  The most prominent visual element is the "Hello World" text, as it is the focal point of the interface. The selection outline draws attention to this text, making it clear that it is the active element. The toolbars above provide contextual information about the current editing mode and available actions, but they are not directly interacting with the main content.
  
  </details>
  
  <p></p>
  
  
- Now that you have positioned the text, it may need to be rotated. If you copy and paste the rotation of the reference object, and it is still off, you may consider manually adjusting the values from the properties panel. Or you can use snap rotation, I like to set it to 90 degrees.

  <details>
  <summary>Image Content</summary>
  
  <p></p>
  
  [All image details and metadata](../../image_data/b8511e33dabc261b66e0271f676490539035e1cf24bd6a9d4de3fe4947f9b775.md)
  
  ### Overview
  This image depicts a toolbar interface with various icons and text elements arranged horizontally. The layout suggests a user interface, possibly for a software application that involves local settings or configurations.
  
  ### Key Elements
  - **Visual description**: Icons and text elements.
  - **Location**: Horizontally aligned across the top bar.
  - **Contents**:
    - **Icon 1**: A white cursor pointer icon on the far left.
    - **Icon 2**: A gray icon with a crosshair and four arrows pointing in different directions.
    - **Icon 3**: A blue icon with a cube and a white arrow pointing upwards.
    - **Icon 4**: A gray icon with two arrows pointing diagonally towards the right.
    - **Text Element**: A button labeled "Local" with a downward arrow indicating a dropdown menu.
    - **Text Element**: A hashtag symbol followed by the number "1".
    - **Text Element**: An icon resembling a pen or pencil with a checkmark next to the number "90°".
  
  ### Visual Flow / Relationships
  The elements are arranged in a horizontal sequence, with the icons on the left and the text elements on the right. There are no arrows or lines connecting the elements, suggesting a linear reading order from left to right.
  
  </details>
  
  <p></p>
  
  <details>
  <summary>Image Content</summary>
  
  <p></p>
  
  [All image details and metadata](../../image_data/36527713ce8d3dd3f40a0677a01161d0a739a00cb0fe11cac2436bd2171d60cd.md)
  
  ### Overview
  The image displays a user interface element that appears to be part of a 3D modeling or game development software. The central focus is a text label "Hello World" within a blue rectangular frame. To the right, there is a sidebar with attributes and gameplay tags. The background features a gradient sky and a grid floor, suggesting a 3D environment.
  
  ### Key Elements
  - **Text Label**: "Hello World" is prominently displayed in the center. It is black text with a blue outline and a subtle shadow effect.
  - **Blue Frame**: Surrounding the text label is a blue rectangular frame with rounded corners. The frame has a slight glow effect.
  - **Sidebar**: Located on the right side, it contains attributes such as Position, Rotation, Scale, and Color. Below that, there is a section labeled "GameplayTags" with a search bar and a tag icon.
  - **Background**: The background consists of a gradient sky transitioning from light blue at the top to white near the horizon, with a grid floor pattern.
  
  ### Visual Flow / Relationships
  The most prominent visual element is the "Hello World" text label, which is centrally located. The blue frame draws attention around the text. The sidebar on the right provides additional information but does not interact directly with the central content. The layout suggests a focus on the text label, likely indicating a placeholder or a test object in a 3D environment.
  
  </details>
  
  <p></p>
  
  

You should now have your text positioned and can fill out the text and properties to your liking.

## Script 1 & 2: Send String(s) from TypeScript To Codeblock scripts

In this first script, the goal isn’t to cover advanced TypeScript concepts but to simply allow you to use TypeScript code to augment your Codeblock scripts that need more rich text. You’ll do this by sending a string variable as a parameter. This can also be a list of strings. The script calls lists in TypeScript Arrays. It alternates between those terms in this section, referring to them as Lists when talking about Codeblocks, and Arrays when talking about TypeScript.

It’s important to start by noting the limitations of Codeblocks strings and lists. Both are limited to 1000 characters. There’s a maximum of 1000 items in Codeblock list, and a maximum of 1000 characters in a Codeblocks string. These limits don’t exist in TypeScript strings and Arrays. This is why you should consider learning TypeScript. TypeScript doesn’t get around the 1000-character limit of the Text Gizmo, so you might need to divide your text into multiple Text Gizmos.

This tutorial uses the Meta Horizon Worlds TypeScript 2.0 API. which as of July 2024 is the default, however, if you are not in 2.0, you may need to adjust your version from the Scripts tab, select the gear icon, and then Settings.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/4702742f7ec5166f2773f77e16bd67271ca1c5c342acf2210cd326473d6ff149.md)

### Overview
This image depicts a user interface element within a software application, specifically a settings menu or options panel. The interface includes a search bar, a list of compiled scripts, and various interactive elements such as buttons and icons.

### Key Elements
- **Top Bar**: Located at the very top, this area contains a small icon resembling a code snippet and a downward-pointing arrow, likely indicating a dropdown menu.
- **Search Bar**: Positioned below the top bar, this is a rectangular input field with a magnifying glass icon on the left side, suggesting a search functionality.
- **Add Button**: Situated next to the search bar, this is a simple plus sign (+) icon, indicating the ability to add new items.
- **Script List**: Below the search bar, there is a list of compiled scripts. Each script entry has a small icon on the left, followed by the script name and the word "Compiled" underneath.
    - **messageReceiver**: Icon resembles a document, labeled as "Compiled".
    - **SendStringsToCodeblocks_Entity**: Icon resembles a text document, labeled as "Compiled".
    - **SendStringToCodeblocks_Entity**: Icon resembles a text document, labeled as "Compiled".
- **Settings Button**: A gear icon located to the right of the search bar, indicating access to settings.
- **More Options Button**: Three vertical dots on the far right, typically representing additional options or a menu.
- **Dropdown Menu**: A black dropdown menu appears to the right of the settings button, labeled "Settings".

### Visual Flow / Relationships
The most prominent visual element is the dropdown menu, which suggests that clicking the settings button would reveal more options. The search bar and add button are secondary elements, facilitating interaction with the list of scripts. The scripts themselves are arranged in a vertical list, with consistent formatting for each item.

</details>

<p></p>

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/3506929001c64f2264a446b61a33b4455da9c647a031239e5b68f41000d05196.md)

### Overview
This image depicts a settings interface titled "Script Settings." It includes a sidebar menu with options such as "Script editing," "API," and "Console." The main content area focuses on API settings, showing a dropdown menu for selecting an API version and a list of API categories with toggle switches next to them.

### Key Elements
- **Sidebar Menu**: Located on the left side, it has a dark background with white text. Contains three options: "Script editing," "API," and "Console."
- **API Section**: Positioned centrally, it displays the title "API" in bold white text. Below this, there is a dropdown menu for selecting an API version, currently set to "2.0.0." The dropdown menu also shows "1.0.0" as another option.
- **API Categories**: Listed under the API section are several categories: "horizon/performance," "horizon/ui," "horizon/camera," "horizon/world_streaming," and "horizon/capturing." Each category has a toggle switch to the right, which is currently off for all except "horizon/camera," which is on.
- **Buttons**: At the bottom, there are two buttons labeled "Cancel" and "Apply." The "Apply" button is highlighted in blue, indicating it is the active button.

### Visual Flow / Relationships
The most prominent visual element is the API dropdown menu, as it is the focal point of the API section. The toggle switches are arranged vertically beneath the API categories. The buttons at the bottom are aligned horizontally, with the "Apply" button being the primary action button.

</details>

<p></p>



- If you would like experience writing TypeScript you can create a new script from the Scripts drop-down, in this case, we will name it **SendStringToCodeblocks\_Entity.**

  <details>
  <summary>Image Content</summary>
  
  <p></p>
  
  [All image details and metadata](../../image_data/39acbaa23cb9db96943830fe2045fe9ab078a6c61ce348cbdb7b829cad863a3c.md)
  
  ### Overview
  This image depicts a user interface element within a software application, specifically a section for managing scripts. The interface includes a search bar, a button to create new scripts, and a placeholder for script content.
  
  ### Key Elements
  - **Top Bar**: Located at the very top, this bar contains a dropdown menu with a code snippet icon and a play button.
  - **Search Bar**: Positioned below the top bar, it has a magnifying glass icon indicating a search functionality.
  - **Create New Script Button**: Situated next to the search bar, this button is labeled "Create new script."
  - **Placeholder for Script Content**: Below the search bar, there is a blue-highlighted area with a text editor placeholder, suggesting where users can input script content.
  - **Close Button**: A small 'X' icon is located near the top right corner of the interface.
  - **Settings Gear Icon**: Positioned to the right of the search bar, this icon likely opens settings or preferences related to the scripts.
  - **Three Dots Menu**: At the far right, there is a vertical menu with three dots, typically indicating more options or a menu for additional actions.
  
  ### Visual Flow / Relationships
  The most prominent visual element is the "Create new script" button, as it is centrally located and highlighted. The search bar and settings gear icon are secondary elements that provide functionality. The layout suggests a linear reading order moving from left to right and then downward.
  
  </details>
  
  <p></p>
  
  
- You can then write the following script out.

  <details>
  <summary>Image Content</summary>
  
  <p></p>
  
  [All image details and metadata](../../image_data/60bed89dd1e284ee0e24b660ba4b953b4b757994bd06c07d1500601b3684ad6e.md)
  
  ### Overview
  The image displays a TypeScript code snippet within a code editor environment. The code is part of a class named `SendMessage`, which extends `Component`. It involves defining a component property `propsDefinition` and a method `start()` that sends a message event to a receiver entity.
  
  ### Key Elements
  - **Visual description**: Code editor interface with syntax highlighting.
  - **Location**: Top-left corner.
  - **Contents**: 
      ```typescript
      import { CodeBlockEvent, Component, PropTypes } from "horizon/core";
      
      const stringMessage = new CodeBlockEvent<string>('stringMessage', [PropTypes.String]);
      
      class SendMessage extends Component<typeof SendMessage> {
          static propsDefinition = {
              message: { type: PropTypes.String, default: 'Fill Out Here Or On Properties Panel' },
              receiver: { type: PropTypes.Entity },
          };
      
          start() {
              if (this.props.receiver) {
                  this.sendCodeBlockEvent(this.props.receiver, stringMessage, this.props.message);
              }
          }
      }
      ```
  - **Visual styling**: Syntax highlighting with green for strings, red for comments, and blue for keywords.
  
  ### Visual Flow / Relationships
  - Most prominent visually: The code itself.
  - No arrows or lines connecting elements.
  - Reading order follows the standard left-to-right, top-to-bottom flow typical of code editors.
  
  </details>
  
  <p></p>
  
  
- If you have never used TypeScript before, you should download this script by [clicking here](https://drive.google.com/file/d/1aYxgHRxceWXIJ8epHN01XXvWdzKKZ9s_/view?usp=sharing).
- Open the Scripts folder. Click on the **Scripts** drop-down, then select the three-dot icon, and “**Open the Scripts Folder in Explorer**.

  <details>
  <summary>Image Content</summary>
  
  <p></p>
  
  [All image details and metadata](../../image_data/a932b3ca14d58c9f075cb5720798e9747841f6b805a57beb73e2ddabbf135c5d.md)
  
  ### Overview
  This image depicts a user interface element within a software application, specifically a dropdown menu that appears when interacting with a "Scripts" section. The dropdown contains two options: "Open Scripts Folder in Explorer" and "Launch Scripting Documentation."
  
  ### Key Elements
  - **Dropdown Menu**: Located at the bottom right of the "Scripts" section. It has a dark background with white text.
    - **Contents**: Contains two menu items:
      > "Open Scripts Folder in Explorer"
      > "Launch Scripting Documentation"
    - **Visual styling**: The menu has a blue border around its top-left corner, indicating it is interactive.
  
  - **"Scripts" Section**: Positioned above the dropdown. It includes a search bar, a plus sign for adding new scripts, and a settings gear icon.
    - **Contents**: Displays a script named "messageReceiver" with a status indicator "Compiled."
    - **Visual styling**: The section has a dark background with light text.
  
  - **Top Bar**: Located at the very top of the interface.
    - **Contents**: Includes a language selection dropdown ("<>" with a downward arrow), a play button, a square button, a refresh button, and a settings icon.
    - **Visual styling**: The top bar has a dark theme with blue accents.
  
  ### Visual Flow / Relationships
  - **Most prominent visually**: The dropdown menu is the focal point as it is open and contains actionable items.
  - **Arrows, lines, connectors**: None visible.
  - **Spatial relationships**: The dropdown menu is nested under the "Scripts" section, which is part of the larger interface layout.
  
  </details>
  
  <p></p>
  
  
- Drag the script into the scripts folder.

  <details>
  <summary>Image Content</summary>
  
  <p></p>
  
  [All image details and metadata](../../image_data/25b3a2c6de023f9e2bb2a3565bbc6e8d735e123e1d4813aa6c6582486ad1989d.md)
  
  ### Overview
  The image displays a split-screen view showing two file explorers side-by-side. The left side is a standard Windows File Explorer window displaying a directory path under "AppData\LocalLow\Meta\Horizon Worlds\Text Tests (June 2024)_487654326983829\scripts". The right side shows a preview window with a blue background labeled "Properties" at the top. Below the preview area, there are two video thumbnails labeled "02 Open Scripts Folder" and "01 Create World," along with two document icons labeled "SendStringsToCoblocks_Entity" and "SendStringToCoblocks_Entity."
  
  ### Key Elements
  - **Left Side (File Explorer)**:
    - **Visual description**: A standard Windows File Explorer window.
    - **Location**: Left side of the screen.
    - **Contents**: Directory path displayed as "AppData\LocalLow\Meta\Horizon Worlds\Text Tests (June 2024)_487654326983829\scripts".
    - **Visual styling**: Dark theme with white text and icons.
    
  - **Right Side (Preview Window)**:
    - **Visual description**: A preview window with a blue background.
    - **Location**: Right side of the screen.
    - **Contents**: Text "Properties" at the top, followed by a blank blue area.
    - **Visual styling**: Dark theme with white text and icons.
  
  - **Bottom Section (Video Thumbnails and Documents)**:
    - **Visual description**: Two video thumbnails and two document icons.
    - **Location**: Below the preview window.
    - **Contents**: Thumbnails labeled "02 Open Scripts Folder" and "01 Create World," and documents labeled "SendStringsToCoblocks_Entity" and "SendStringToCoblocks_Entity."
    - **Visual styling**: Light blue background with white text and icons.
  
  ### Visual Flow / Relationships
  - **Most prominent visually**: The preview window on the right side.
  - **Arrows/lines/connectors**: None.
  - **Spatial relationships**: The left side is a file explorer, and the right side is a preview window. The bottom section contains video thumbnails and documents.
  
  </details>
  
  <p></p>
  
  

As you are writing or downloading these scripts, here is the second script you will want to [click here](https://drive.google.com/file/d/1aRek4QMU_r3GB-YstadaXiTX2IVtH8aY/view?usp=sharing) to download.

Create a new script. Name it `SendStringsToCodeblocks_Entity`.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/b0d40e610aa89937dd6fbed169c7c600732fd3f39a58946fb380523f3a5057c5.md)

### Overview
The image displays a TypeScript code snippet within a code editor environment. The code is part of a file named `SendStringsToCodeblocks_Entity.ts`, as indicated at the top left corner. The content focuses on defining a component that sends string messages to a receiver entity through a `CodeBlockEvent`.

### Key Elements
- **Visual description**: The code is written in a monospaced font typical of code editors.
- **Location**: The code spans across multiple lines, starting from line number 1 up to line number 32.
- **Contents**:
  - Line 1: `import { CodeBlockEvent, Component, PropTypes } from "horizon/core";`
  - Line 4: `const stringMessages = new CodeBlockEvent<{message: string[]}>('stringMessages', [PropTypes.StringArray]);`
  - Line 7: `class SendMessages extends Component<typeof SendMessages> {`
  - Line 15: `this.sendCodeBlockEvent(this.props.receiver, stringMessages, messages);`
  - Line 23: `const messages: string[] = ['item1', 'item2', 'item3', ...];`
- **Visual styling**: The code uses syntax highlighting with green for strings, blue for keywords, and red for comments.

### Visual Flow / Relationships
- **Most prominent visually**: The class definition (`SendMessages`) and its methods (`start()`) are the most prominent due to their larger font size compared to the rest of the code.
- **Arrows, lines, connectors**: There are no arrows, lines, or connectors present in the image.
- **Spatial relationships**: The code flows vertically from top to bottom, with each line representing a single statement or part of a statement.

</details>

<p></p>



These two scripts serve slightly different purposes, the first one is for sending a single string, and the second an Array/List of strings. Unlike Codeblocks, not all TypeScript scripts have to be attached to an Entity (referred to as an object in Codeblocks), these two scripts, however, do need to run on an Entity so that you get access to the properties panel, allowing us to reference and send an event to another Entity, one that is running the Codeblock script you want to receive the string(s) on.

With the single string, you can reuse the script over and over, only needing to attach the script to another entity and adjust the “message” being sent from the properties panel. Don’t forget to reference the receiver on the properties panel too (notice in this photo no receiver is selected).

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/9cb86f0ae2c2eaddadc994287e9778edbbf4bc6d98e46efab9365006f263928c.md)

### Overview
This image depicts a user interface element within a software application, specifically a script editor or configuration panel. The interface includes a dropdown menu, input fields, and a button labeled "Some Message."

### Key Elements
- **Dropdown Menu**: Located at the top, it has a dark gray background with white text. The text reads "SendStringToCodeblocks_Entity:" followed by a partially obscured label "SandMessage." The dropdown arrow is visible next to the text.
- **Input Field**: Below the dropdown, there is a field labeled "message" with a dark gray background and white text. The field contains the placeholder text "Some Message."
- **Button**: Positioned to the right of the message field, it has a dark gray background with white text that reads "Some Message."
- **Receiver Input**: At the bottom, there is another field labeled "receiver" with a dark gray background and white text. The field displays "None (Object)" with a small circular icon next to it.

### Visual Flow / Relationships
The most prominent visual element is the dropdown menu due to its larger size and central placement. The message field and button are closely aligned horizontally beneath the dropdown. The receiver input field is positioned below the message field, creating a vertical sequence. There are no arrows or lines connecting these elements, suggesting a linear reading order from top to bottom.

</details>

<p></p>



For multiple strings, you’d need to be more creative with your scripting to reuse the script. So instead, for simplicity, it is recommended to duplicate the script and give it a slightly different name. Note that you will need to have installed VS Code to modify the script (remember to restart your computer after installing). You can then modify the script by pressing the three dot icon next to the script name in the scripts drop down, and clicking “open in external editor.”

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/eecbc111d010a4a5a55782cdda93380bb81dfd1e19902d37c8aba8ba0a8aa95e.md)

### Overview
This image displays a user interface element showing two entries in a list, likely within a software application or IDE. The entries appear to be related to code blocks or entities, as indicated by the text and icons.

### Key Elements
- **Visual description**: The elements are rectangular cards with rounded corners.
- **Location**: Both elements are positioned side-by-side horizontally.
- **Contents**:
  - **First card**: Contains a black square with a white "T" icon on the left, followed by the text "> SendStringsToCodeblocks_Entity..." and "Compiled" below it.
  - **Second card**: Similar layout but with a smaller icon and text "> SendStringToCodeblocks_Entity" and "Compiled" below it.
- **Visual styling**: The cards have a dark background with light blue borders. The text is white, and the icons are white within the black squares.

### Visual Flow / Relationships
- **Most prominent visually**: The cards themselves are the most prominent elements due to their size and distinct placement.
- **Arrows, lines, connectors**: There are no arrows, lines, or connectors between the elements.
- **Spatial relationships**: The cards are arranged in a single row, with the second card slightly below the first one.

</details>

<p></p>

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/8e5cf70c24de80bd9673c7d7bc8e58d5c8efbeae0362cb65876091d598affb3a.md)

### Overview
The image displays a user interface element showing a list of entities named "SendStringsToCodeblocks_Entity" with a "Compiled" status next to them. There is a contextual menu open on the right side of the screen, offering options related to these entities.

### Key Elements
- **Left Panel**: Contains two entries labeled "SendStringsToCodeblocks_Entity Compiled". Each entry has a small icon resembling a 'T' within a square.
- **Contextual Menu**: Located on the right side of the screen, offering options such as "Recompile," "Open in External Editor," "Execution Mode," "Rename," and "Delete." The menu items are presented in a vertical list with a dark background and light text.
- **Highlighted Option**: "Open in External Editor" is highlighted, indicating it is currently selected or hovered over.

### Visual Flow / Relationships
- **Most Prominent Element**: The contextual menu is the most prominent feature due to its central placement and the fact that it is open.
- **Arrows/Connections**: There are no arrows or lines connecting elements.
- **Spatial Relationships**: The menu is positioned to the right of the left panel, and the entries in the left panel are aligned vertically.

</details>

<p></p>



Here inside VS Code, you can modify the array of messages to suit our needs, adding as many lines as you want.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/6c63b8b01c5e38f9d273de0bc1795cf14806eb8b7cac7f91a7b16d4ff9692877.md)

### Overview
The image displays a code snippet written in TypeScript. It includes a comment explaining why the properties panel is not being used for string lists and instead, the strings are typed directly in TypeScript. The code defines an array of strings.

### Key Elements
- **Line 21**: A comment explaining the reason for not using the properties panel.
- **Line 23**: A constant declaration `messages` which is an array of strings.
- **Lines 24-26**: Three string literals `'item1'`, `'item2'`, and `'item3'`.
- **Line 27**: A comment indicating that the array can be duplicated as many times as needed.
- **Lines 28-30**: Another comment explaining the use of single ticks for string literals, mentioning alternatives like double ticks and backticks, and providing an example of how backticks can be used within messages.
- **Line 31**: A closing brace `}` indicating the end of the array definition.
- **Line 32**: An empty line.

### Visual Flow / Relationships
The visual flow is linear, moving from left to right across the lines of code. The comments are interspersed with the code blocks, and the code blocks themselves are aligned vertically.

</details>

<p></p>



With these scripts ready to go, you’ll need a Codeblock script to receive the message(s), a very simple script is shown below to demonstrate that it works by printing the message to the console:

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/79e8253d55ecd2349f905ed816a1d46698d1ffe39de0e958bc388a3f8f52e22f.md)

### Overview
This image depicts a user interface for scripting or programming, specifically for handling messages within a script editor. The interface includes a central area for writing or viewing scripts, control structures, event triggers, and event actions.

### Key Elements
- **Central Script Area**: Located in the middle-left part of the screen, this area contains two blocks of code. Each block starts with "when stringMessage is received with message" and "when stringMessages is received with messages," followed by a "Debug Print" action.
  - **Block 1**: `when stringMessage is received with message`
    - **Visual description**: A rectangular block with rounded corners.
    - **Location**: Top-left of the central area.
    - **Contents**: `when stringMessage is received with message`
    - **Visual styling**: Purple background, white text, blue border.
  - **Block 2**: `when stringMessages is received with messages`
    - **Visual description**: Similar to Block 1 but slightly larger.
    - **Location**: Below Block 1.
    - **Contents**: `when stringMessages is received with messages`
    - **Visual styling**: Same as Block 1.

- **Control Structures**: Located on the right side of the screen.
  - **Control Section**: Contains blocks labeled "if," "else if," "else," and "while."
    - **Visual description**: Rectangular blocks with rounded corners.
    - **Location**: Top-right of the screen.
    - **Contents**: Text labels.
    - **Visual styling**: Teal background, white text, blue border.

- **Events Section**: Below the Control structures.
  - **Events**: Contains blocks labeled "when world is started," "when event is received," and "on update."
    - **Visual description**: Rectangular blocks with rounded corners.
    - **Location**: Below the Control structures.
    - **Contents**: Text labels.
    - **Visual styling**: Purple background, white text, blue border.

- **Event Actions Section**: Below the Events section.
  - **Event Actions**: Contains a single block labeled "send event to object."
    - **Visual description**: Rectangular block with rounded corners.
    - **Location**: Bottom-right of the screen.
    - **Contents**: `send event to object`
    - **Visual styling**: Purple background, white text, blue border.

- **Status Bar**: At the bottom-left corner.
  - **No Errors**: Indicates no errors detected.
    - **Visual description**: Green circle with a white checkmark.
    - **Location**: Bottom-left corner.
    - **Contents**: "No Errors"
    - **Visual styling**: Green background, white text.

- **Script Mode**: Located next to the No Errors indicator.
    - **Visual description**: Text label.
    - **Location**: Bottom-left corner.
    - **Contents**: "Script Mode: Default"
    - **Visual styling**: White text on a dark background.

- **Script Capacity**: Located at the bottom-right corner.
    - **Visual description**: Text label with a progress bar.
    - **Location**: Bottom-right corner.
    - **Contents**: "Script Capacity 3%"
    - **Visual styling**: Green progress bar indicating 3%.

### Visual Flow / Relationships
- **Most Prominent**: The central script area containing the two blocks of code.
- **Arrows/Connections**: There are no explicit arrows or connections between elements.
- **Spatial Relationships**: Elements are arranged in a grid-like structure with clear separation between the script area, control structures, events, and event actions sections.

</details>

<p></p>



Be sure to attach the scripts to entities. Attaching scripts is done at the bottom of the properties panel. In this case, text gizmos are used to run each of the scripts. If you give them good names, it’s easier to find them in the hierarchy.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/c543d16bab2bf9ab07b828cf23e9e991c881a1f6af1df9c9da95889de1b21d09.md)

### Overview
This image depicts a user interface from a software development environment, likely a game engine or a visual scripting tool. The central area shows a 3D scene with a character model and some nodes representing code blocks. The left panel displays a hierarchical list of entities, while the right panel contains properties and attributes related to the selected entity.

### Key Elements
- **Left Panel (Hierarchy)**: Located on the left side, it shows a tree-like structure with various entities listed. The currently selected entity is highlighted in blue. Text includes "Send String Entity," "Message Receiver," and others.
- **Central Scene**: The middle area displays a 3D environment with a grid floor and a character model standing in the center. There are three purple nodes labeled "SendStringToCodeblocks_Entity," "SendStringToCodeblocks_Entity," and "Send Strings." A small red arrow points towards one of the nodes.
- **Right Panel (Properties)**: On the right side, there is a panel displaying properties of the selected entity. It includes fields such as "Behavior," "Attributes," "GameplayTags," and "Script." The "Behavior" section has a text field containing "Send<br>String." Other fields show numerical values for position, rotation, scale, and color.
- **Character Model**: Positioned centrally in the scene, it is a simple humanoid figure with a blue outline.

### Visual Flow / Relationships
The most prominent visual elements are the nodes in the central scene, which are interconnected through the red arrow. The hierarchy on the left and the properties on the right provide contextual information about the selected node. The red arrow suggests a connection or interaction between the nodes.

</details>

<p></p>



You can then drag the codeblocks receiver from the Hierarchy to the empty pill slot (the pill-shaped field in the bottom right corner with a circle-like icon.).

**Note**: You can also click on the pill slot to see a list of all the items in our world, and from there, at the top, you can search from the drop-down.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/bd1047ebdf5c827d9e0de96b1f09e1818186b3ac2d337e8c97868f3727b23ac6.md)

### Overview
This image depicts a dropdown menu within a user interface, likely part of a software application. The menu is open, displaying a list of selectable options related to entities. The interface includes a search bar at the top and a selection indicator at the bottom right.

### Key Elements
- **Search Bar**: Located at the top, it has a blue outline and contains a magnifying glass icon. The placeholder text reads "> |".
- **Dropdown Menu**: Below the search bar, the menu displays a list of items. Each item is a selectable option labeled with a specific entity name.
  - **None**: A checkbox option with a checkmark next to it.
  - **SpawnPoint**: An icon resembling a human figure with a rocket, followed by the text "SpawnPoint".
  - **Message Receiver Entity**: Highlighted in gray, indicating it is currently selected. It has a small icon resembling a speech bubble with a letter "Aa".
  - **Send String Entity**: Another selectable option with the same "Aa" icon.
  - **Send Strings Entity**: Similar to the previous option but with a slightly different icon and text formatting.
- **Selection Indicator**: At the bottom right, there is a circular indicator showing "None (Object)" with a dot inside, suggesting the current selection status.

### Visual Flow / Relationships
The dropdown menu is the most prominent visual element, with the search bar above it and the selection indicator below. The items in the dropdown are arranged vertically, with the selected item highlighted. There are no arrows or lines connecting elements, implying a linear reading order from top to bottom.

</details>

<p></p>



**Bonus Tip:** You can find entities running a specific script by using the hierarchy filter, and selecting entities running a specific script.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/a6d2231bc930fe45d2063c11fec6243d3f4a589a46dcd0d5df1ad231d49b32bd.md)

### Overview
The image displays a user interface element that appears to be part of a software application, likely related to game development or asset management. It includes a search bar, a list of entities, and a filtering panel.

### Key Elements
- **Search Bar**: Located at the top-left, it has a magnifying glass icon and the placeholder text "Search hierarchy."
- **Entities List**: Below the search bar, there is a list of entities with names such as `messageReceiver`, `Message Receiver Entity`, `SendStringToCodeblocks_Entity`, and `SendStringsToCodeblocks_Entity`.
- **Filter Panel**: Positioned on the right side, it contains a title "Filter by" followed by several filter categories: Properties, Attached scripts, Gizmo types, and Gameplay tags. The "Attached scripts" category is expanded, showing a specific script name `SendStringToCodeblocks_Entity`.
- **Icons**: Various icons are present throughout the interface, such as a search icon next to the search bar, a filter icon next to the entities list, and icons next to the filter categories.
- **Buttons**: There are buttons at the top-right for actions like "Local" and "#".

### Visual Flow / Relationships
- **Most Prominent Element**: The entities list is the most prominent due to its size and placement.
- **Arrows and Lines**: Arrows are used to indicate expandable/collapsible sections within the filter panel.
- **Spatial Relationships**: The search bar is on the left, the entities list is below it, and the filter panel is on the right. The filter panel is divided into sections with clear boundaries.

</details>

<p></p>



Run the world and see a console message displaying our messages.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/d42e079c909bace38b077f364a51ade9017e8836c38562f868aa58dbd2ea29e6.md)

### Overview
This image depicts a user interface from a software development environment, likely a game engine or a similar tool, showing a scene with blocks representing code snippets and a console view at the bottom. The interface includes a sidebar with a hierarchy of entities, a central viewport displaying a 3D scene, and a properties panel on the right side.

### Key Elements
- **Sidebar (Left Panel)**: Contains a list of entities with names like "messageReceiver," "Message Receiver Entity," and others. The highlighted entity is "Send Strings Entity."
- **Central Viewport**: Displays a 3D scene with a blue humanoid figure standing on a grid floor. There are blocks labeled "Message Receiver," "SendStringToCodeblocks_Entity," and "SendStringsToCodeblocks_Entity." These blocks appear to represent code snippets or functions.
- **Properties Panel (Right Panel)**: Shows details about the currently selected entity ("Send Strings Entity"). It includes fields for "Behavior" such as "Text" and "Attributes" like "Position," "Rotation," "Scale," and "Color." There's also a "GameplayTags" section indicating no tags are attached to the object.
- **Console (Bottom)**: Displays messages related to the "Message Receiver Entity," showing logs and system notifications.

### Visual Flow / Relationships
The most prominent visual elements are the blocks in the central viewport, which are arranged horizontally. The console at the bottom provides contextual information about the entities displayed above. The properties panel on the right is interactive, allowing users to modify attributes of the selected entity.

</details>

<p></p>



## Script 3: Send Q&As From TypeScript To Codeblock Scripts

In this example, you’ll expand on what you learned in the first two sections. Instead of just sending data, now you will allow the Codeblock script to request two pieces of data: a question, and a list of possible answers.

You’ll need to create a new type of data called QuestionData that stores this string question and string array of answers. You might imagine this is a game show, and only the first answer in the array is the right answer, you could then randomly select wrong answers to mix in, scrambling them when displayed to the contestants.

You won’t be diving too deep into this script, which you can download [here](https://drive.google.com/file/d/1sgiIIyd_PrunVMYsv-hAn3cCfHatTf2v/view?usp=sharing), as it does show off some more advanced features, but if you have managed to do script 1 or 2 in the previous step, you should have no problem implementing this code.

**Mentor’s Note:** The “getRandomItemFromArray” function comes from a file that I add to all my worlds, and when it gets updated is shared in Discord. You can download the arrayUtils (created by the Vidyuu team) by clicking [here](https://drive.google.com/file/d/1Wlaru7gyQRTzjov5rACVMsr3lm3pG7PV/view?usp=sharing). Feel free to ask questions in Discord if you’d like to learn more.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/8d29c0657323fde31dad37dca54ab9a98fb38dde9d722212dcdb2f22f2c903a1.md)

### Overview
This image displays a TypeScript code snippet within a code editor environment. The code is part of a class named `GetQuestionData`, which extends `Component`. It involves event handling, property definitions, and method implementations related to question data retrieval and sending back questions along with answers.

### Key Elements
- **Visual description**: The code is written in a monospaced font typical of code editors.
- **Location**: The code spans across multiple lines, starting from line 1 and continuing down to line 43.
- **Contents**:
    - Line 1: Imports necessary modules (`CodeBlockEvent`, `Component`, `PropTypes`) from `"horizon/core"` and `UtilArray_Func`.
    - Line 4: Defines a `CodeBlockEvent` named `getNewQuestion`.
    - Line 5: Defines another `CodeBlockEvent` named `questionMessage`.
    - Line 7: Declares a class `GetQuestionData` extending `Component`.
    - Line 8: Defines static props definition.
    - Line 12: Implements `preStart()` method connecting events.
    - Line 16: Implements `start()` method.
    - Line 20: Implements `sendBackQuestion()` method.
    - Line 34: Defines an array `questionData` containing objects representing questions and answers.
    - Line 39: Defines a type `QuestionData` for the objects in `questionData`.

- **Visual styling**: The code uses syntax highlighting with keywords in blue, strings in red, and comments in green. There are no borders or special visual effects applied to the code itself.

### Visual Flow / Relationships
- **Most prominent visually**: The code blocks are clearly delineated by indentation and syntax highlighting.
- **Arrows, lines, connectors**: None.
- **Spatial relationships**: The code flows vertically from top to bottom, with methods and variables defined in a logical sequence.

</details>

<p></p>



If you would prefer not to use the Vidyuu arrayUtils file, below is what that would look like. Instead you use a copy of the function from the arrayUtils file, pasted at the bottom of the script.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/d138ff4800e067e6a948d47a5aa7fcffe910b4a06d2084429537d817af36c966.md)

### Overview
This image displays a code editor window open to a TypeScript file named `GetQuestionData_Entity.ts`. The content is structured as a class definition within a component framework, likely for a user interface application. The file includes imports, event definitions, a class extending a component, and a function for generating random items from an array.

### Key Elements
- **File Path**: Located at the top-left corner, showing the directory structure leading up to the file name (`Users > alexhandler > Desktop > Horizon Container > Scout House > Workshops > 24-06 Text Workshop > TS Files > GetQuestionData_Entity.ts`).
- **Code Editor Interface**: The main area of the image contains code written in TypeScript. It includes imports, class definitions, method implementations, and a function declaration.
- **Imports**: At the top, `import { CodeBlockEvent, Component, PropTypes } from "horizon/core";`.
- **Class Definition**: A class `GetQuestionData` extends `Component<typeof GetQuestionData>`.
- **Props Definition**: `static propsDefinition = { receiver: { type: PropTypes.Entity }, };`.
- **Methods**: `preStart()`, `start()`, and `sendBackQuestion()` methods are defined.
- **Function Definition**: `function getRandomItemFromArray<t>(array: t[]): t | undefined`.
- **Type Definitions**: `type QuestionData = { question: string; answers: string[]; }`.
- **Array Declaration**: `const questionData: QuestionData[] = [...];` containing two objects with `question` and `answers` properties.
- **Code Block Events**: Two `CodeBlockEvent` instances are defined for `getNewQuestion` and `questionMessage`.

### Visual Flow / Relationships
The code is organized in a linear fashion, with each line of code placed sequentially. There are no arrows or connectors indicating a specific flow, but the structure suggests a typical programming flow where imports lead to class definitions, which then include methods and functions.

</details>

<p></p>



To send this data to a Codeblock script, you created and then used a CodeBlockEvent with two parameters; String, and StringArray. This is received as a string, and string list, as seen in the screenshot below.

Note that this demo Codeblock script, receiver, will also need to be attached to an entity to run, and reference the entity running the QuestionData script. The QuestionData script will also need to reference this “receiver.” For this demo, you get a new question on world start and when received, print it to the console.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/b5407a890ca4fb99c7db37a87372638a9c0bcae3013fd731754e5b4c202cc5df.md)

### Overview
This image depicts a user interface for scripting or programming, specifically a block-based editor for creating logic flows. The interface includes a central area for defining scripts, a sidebar for variables, and a toolbar at the top with various icons for actions like saving, undoing, and more.

### Key Elements
- **Central Script Area**: Located in the middle-left part of the screen, this area contains blocks representing steps in a script. Blocks include:
  - **Block 1**: "when world is started"
  - **Block 2**: "send getNewQuestion to tsQuestionDataEntity with parameters"
  - **Block 3**: "when questionMessage is received with questions answers"
  - **Block 4**: "Debug Print questions"
  - **Block 5**: "Debug Print answers"

- **Sidebar (Variables)**: Positioned on the right side, this area lists variables and includes options to add new ones. It currently shows one variable named "tsQuestionDataEntity."

- **Top Bar**: At the very top, there are several icons for actions such as saving, undoing, and more. There’s also a text field labeled "Receive Question," which seems to be a placeholder or input field for receiving questions.

- **Bottom Left Corner**: Contains a green checkmark indicating "No Errors" and a status bar showing "Script Mode: Default" and "Script Capacity 3%".

### Visual Flow / Relationships
The visual hierarchy is clear, with the central script area being the most prominent. The blocks are arranged in a linear fashion, suggesting a sequential flow of operations. The sidebar is secondary but important for managing variables. The top bar provides access to various actions, while the bottom left corner gives feedback on the script's status.

</details>

<p></p>



**Mentor’s Note:** This is just a taste of what easier text entry with TypeScript can unlock. Really looking forward to seeing how you use this in your worlds.

## Script 4: Receive Text In TypeScript From Codeblock Scripts

Next up we have one last Codeblock integration example.

In this case, you’ll send a message to TypeScript from Codeblocks. You can imagine an event in Codeblocks like this, with a string parameter as the message.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/1797c2f4a18b24cc983595683d25ccbcbfe394b2c9e72b770292ee5d21683bfd.md)

### Overview
This image depicts a user interface for a messaging or programming environment, specifically a block-based coding interface. The left side shows a sequence of blocks representing a workflow or script, while the right side displays variables and an option to add new ones.

### Key Elements
- **Left Panel (Workflow Script)**:
  - **Block 1**: A blue rectangular block labeled "when world is started".
  - **Block 2**: A purple rectangular block labeled "send".
  - **Block 3**: A blue rectangular block labeled "receiveMessage".
  - **Block 4**: A blue rectangular block labeled "to".
  - **Block 5**: A blue rectangular block labeled "receiver".
  - **Block 6**: A purple rectangular block labeled "with".
  - **Block 7**: A purple rectangular block labeled "Message Here".
  - **Block 8**: A blue rectangular block labeled "parameters".

- **Right Panel (Variables)**:
  - **Header**: "Variables".
  - **Add New Button**: A blue rectangular button labeled "Add New".
  - **Variable Block**: A blue rectangular block labeled "receiver".
  - **Trash Bin Icon**: A small circular icon with a trash bin symbol located below the "receiver" variable block.

### Visual Flow / Relationships
The visual flow is linear, moving from left to right across the workflow script blocks. The right panel is static and does not interact with the left panel directly. The blocks are arranged in a horizontal sequence, suggesting a step-by-step process.

</details>

<p></p>



Then to receive the message in TypeScript, you will need to create a new CodeBlockEvent, which includes a parameter (slightly different from the previous example with no parameters). Then just connect the event like before, and in this case, you will log it to the console to show that it was received. You can download this script [here](https://drive.google.com/file/d/1Q7NFlLBJ6MpjLrh3O5gaYDLdWbrt3ejc/view?usp=sharing).

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/0034fbbe28a43935b462886f56943365acf8cc11a93b3432f34e113f2186dae9.md)

### Overview
This image displays a code editor window open to a TypeScript file named `TypeScriptReceiver_Entity.ts`. The content of the file includes imports, class definitions, and method implementations related to event handling and message processing.

### Key Elements
- **Visual description**: Code editor interface with syntax highlighting.
- **Location**: Top-left corner.
- **Contents**: File path displayed as a breadcrumb trail.
- **Visual styling**: Dark theme with syntax highlighting for keywords, strings, and comments.

- **Visual description**: TypeScript code.
- **Location**: Center of the editor.
- **Contents**: Code snippet including imports, class definition, methods, and a registration statement.
- **Visual styling**: Syntax highlighting for keywords (`import`, `class`, `extends`, `static`, `propsDefinition`, `preStart`, `start`, `receiveMessages`, `Component.register`), string literals (`'receiveMessage'`, `'message: string'`, `'PropsTypes.String'`), and comments (`//`).

- **Visual description**: File tab.
- **Location**: Top-left corner.
- **Contents**: File name `TypeScriptReceiver_Entity.ts`.
- **Visual styling**: Light background with dark text.

### Visual Flow / Relationships
- **Most prominent visually**: The code editor area containing the TypeScript code.
- **Arrows/lines/connectors**: None.
- **Implied reading order**: From top to bottom, left to right within the code editor.

</details>

<p></p>



**Note:** If you are planning to stick with Codeblocks, this is the end of the Codeblock integration examples.

## Script 5: MegaText

If you haven’t used MegaText in Horizon, it a script written by the Vidyuu team in the Asset Library under interactive. It allows you to write text on a Text Gizmo with multiple lines. This makes formatting so much easier. The example below is the same script, rewritten in TypeScript, you can download it [here](https://drive.google.com/file/d/1hKw0YV-o_zjuGbXMPMI1fT1Yo0bfArKs/view?usp=sharing).

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/7fe862526e2001deff84917379f36223132876cdb99d57c994d1234bee7dbc16.md)

### Overview
This image displays a code snippet written in TypeScript, specifically defining a class named `MegaText`. The code is part of a larger file named `MegaText_Entity.ts`, as indicated by the file tab at the top. The content primarily consists of importing necessary components, defining a class with static properties, and implementing a method to concatenate strings based on those properties.

### Key Elements
- **Visual description**: Code editor interface with syntax highlighting.
- **Location**: Top-left corner.
- **Contents**: File name (`MegaText_Entity.ts`) and import statement.
- **Visual styling**: Dark theme with syntax highlighting for keywords, comments, and strings.

- **Visual description**: Class definition (`class MegaText extends Component<typeof MegaText>`).
- **Location**: Center-left.
- **Contents**: Class name (`MegaText`), extends keyword, and generic parameter `<typeof MegaText>`.
- **Visual styling**: Blue for class names, green for keywords, and purple for generic parameters.

- **Visual description**: Static properties definition (`static propsDefinition = { ... }`).
- **Location**: Below the class definition.
- **Contents**: Property names (`line1` through `line16`) and their respective types (`PropTypes.String`).
- **Visual styling**: Yellow for property names, blue for types, and gray for default values.

- **Visual description**: Method definition (`start()`).
- **Location**: Below the static properties.
- **Contents**: Method name (`start`).
- **Visual styling**: Blue for method names.

- **Visual description**: String concatenation logic (`const displayMe = this.props.line1 + ...`).
- **Location**: Below the method definition.
- **Contents**: Variable declaration (`const displayMe`), string concatenation using `+` operator.
- **Visual styling**: Yellow for variable names, blue for method calls, and purple for the `this` keyword.

- **Visual description**: Method implementation (`this.entity.as(TextGizmo)?.text.set(displayMe)`).
- **Location**: Below the string concatenation.
- **Contents**: Method call (`as`, `TextGizmo`, `text`, `set`), and argument (`displayMe`).
- **Visual styling**: Yellow for method calls, blue for properties, and purple for the `this` keyword.

- **Visual description**: Class registration (`Component.register(MegaText);`).
- **Location**: Bottom-right.
- **Contents**: Class name (`MegaText`), method call (`register`), and argument (`MegaText`).
- **Visual styling**: Blue for class names, green for keywords, and purple for the `this` keyword.

### Visual Flow / Relationships
- **Most prominent visually**: The class definition (`class MegaText extends Component<typeof MegaText>`).
- **Arrows/lines/connectors**: None.
- **Implied reading order**: From top to bottom, left to right.
- **Spatial relationships**: Elements are arranged in a linear fashion, with each line of code stacked vertically.

</details>

<p></p>



The biggest difference is that this example only has 16 lines, and the Codeblocks asset has 32. You can duplicate row 20 and 31 to add more lines. Just make sure they are added in order and named appropriately.

To use MegaText, attach this script to a TextGizmo, and on the properties panel you can fill out multiple lines, making it much easier to write large blocks of text, and even add formatting. I’ve always recommended leaving gaps between lines so that you can come back later if you ever need to insert or add formatting styles. You can use this script both in the Horizon Desktop Editor and in VR.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/ad0107520be13628f1e2539550f9c79e1a359be7e686c02ce0d39cbc9a7d6fef.md)

### Overview
The image displays a user interface element that appears to be part of a design or scripting tool. It features a large central area with text and a smaller panel on the right side containing a script editor.

### Key Elements
- **Central Area**: A large white rectangle occupies the majority of the screen. Inside this rectangle, there is text that reads "Hello World!" and "More Text Here!".
  - **Text**: The text is bold and black, with "Hello World!" positioned above "More Text Here!".
  - **Highlighting**: There is a blue dot near the bottom of the text area, and a red arrow pointing towards the left side of the text area.
  - **Bounding Box**: A light blue dashed line surrounds the entire text area, indicating selection or editing mode.
  - **Cursor**: A green upward-pointing arrow cursor is located at the top of the text area, suggesting interaction or movement.

- **Right Panel**: This panel is dark gray with a lighter gray header stating "Script". Below the header, there is a dropdown menu labeled "Attached Scr..." followed by a dropdown arrow.
  - **Dropdown Menu**: The dropdown contains multiple lines of text, each representing a different line of code or text content.
    - **Line 1**: "line1" with a corresponding text box showing "Hello World!".
    - **Line 2**: "line2" with a corresponding text box showing "<br><br>".
    - **Line 3**: "line3" with a corresponding text box showing "<b><u>".
    - **Line 4**: "line4" with a corresponding text box showing "More Text Here!".
    - **Line 5**: "line5" with a corresponding text box showing "</b></u>".
    - **Line 6**: "line6" through "line9" are empty text boxes.

- **Background**: The background of the central area is white, while the surrounding area has a gradient effect transitioning from light blue to white.

### Visual Flow / Relationships
- **Most Prominent Element**: The central text area with the "Hello World!" and "More Text Here!" text.
- **Arrows and Lines**: The red arrow points to the left within the text area, possibly indicating a direction of movement or selection.
- **Spatial Relationships**: The right panel is adjacent to the central area, providing additional information or options related to the text displayed in the central area.

</details>

<p></p>



## Script 6: Writing Text With Formatting In TypeScript

In this section, you’re going to write text in TypeScript, and apply it to a TextGizmo that is running the script. You can download this example [here](https://drive.google.com/file/d/1xYVDDff6BSr2_iSX3PDGzo-dfsvUgOq1/view?usp=sharing).

You’ve defined font and lineBreak string variables. This makes our lives a little easier, by making it so that you don’t have to remember or retype the angle brackets and this also makes our script easier to read. In addition, outside our class, you’ll notice the bold function allows us to easily apply bold to a string.

In start, you define a couple lines, add them all together using displayMe, and then apply the displayMe string to a TextGizmo.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/28ed55c854e660ccf5a1cc3f807b55a61e69565ad411021d021687403927822f.md)

### Overview
This image displays a code snippet written in TypeScript, specifically within a file named `EasyText_Entity.ts`. The code defines a class `EasyText` that extends another class `Component`. The snippet includes imports, variable definitions, a class definition, method implementations, and a utility function.

### Key Elements
- **Visual description**: Code editor interface with syntax highlighting.
- **Location**: Top-left corner.
- **Contents**: 
    - `import { Component, TextGizmo } from "horizon/core";`
    - `const font = '<font=Bangers SDF>';`
    - `const lineBreak = '<br>';`
    - `class EasyText extends Component<typeof EasyText> {`
    - `static propsDefinition = {};`
    - `start() {`
    - `const lineOne = 'Some Text Here ' + bold('Something Bolded Here');`
    - `const lineTwo = 'Something Else Here';`
    - `const displayMe = font + lineOne + lineBreak + lineTwo;`
    - `this.entity.as(TextGizmo)?.text.set(displayMe);`
    - `}`
    - `Component.register(EasyText);`
    - `function bold(messageToBold: string): string {`
    - `return '<b>' + messageToBold + '</b>';`
    - `}`
- **Visual styling**: White background with syntax highlighting in various colors (e.g., purple for keywords, blue for strings, red for comments).

### Visual Flow / Relationships
- Most prominent visually: The code blocks and syntax highlighting.
- Arrows, lines, connectors, or implied reading order: None.
- Spatial relationships: Elements are arranged in a grid-like structure typical of code editors, with each line of code in its own row.

</details>

<p></p>



You will need to make copies of this script if you want to have different text on multiple TextGizmos. Note that the name of the script needs to be unique, but the class in the script can have the same name, in this case “EasyText.”

Below you can see creating a new script with a different name, I would advise naming this based on the text they display. Then in VS Code you can copy paste the first script to replace the default script in EasyText2, filling it out with your new text. Notice that when you assign the script, on the left is the script name, and on the right is the class name.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/427d4a5809fc088cb2e939bd1f2b3c73b000111b1ae3b4ea78455396664fe9e8.md)

### Overview
This image depicts a user interface element within a software application, specifically a scripts panel. The panel includes a search bar, a list of entities, and various interactive buttons and icons.

### Key Elements
- **Search Bar**: Located at the top-left, it has a magnifying glass icon and a placeholder text "> Search". It is rectangular, with a dark background and light text.
- **Entities List**: Below the search bar, there are two entries listed:
  - **EasyText2_Entity**: This entry shows a progress indicator "16/128" next to it, indicating some form of loading or processing status.
  - **EasyText_Entity**: This entry includes a timestamp "Saved at 4:41:26 PM · Compiled".
- **Buttons and Icons**: 
  - A blue play button with a white play icon is located at the top-right.
  - A gear icon for settings is positioned to the right of the play button.
  - A vertical ellipsis (three dots) is situated further to the right, likely for additional options.
- **Header**: The word "Scripts" is displayed prominently above the search bar.
- **Last Updated Indicator**: Below the search bar, it states "Last updated just now".

### Visual Flow / Relationships
The most prominent visual elements are the search bar and the entities list. The entities list is nested under the search bar, and the buttons and icons are arranged horizontally at the top-right. There are no arrows or lines connecting elements, but the layout suggests a linear reading order from left to right and then downward.

</details>

<p></p>

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/5d3a4db6b3a04d34e0bf64379b5020329ab1ac98596b9ad01cbf68f31c92eb45.md)

### Overview
The image displays a user interface element that combines text, graphical elements, and a script dropdown menu. The left side features a text area with bolded and regular text, while the right side shows a script dropdown with a tag icon above it.

### Key Elements
- **Text Area (Left Side)**:
  - **Visual description**: A white rectangular area containing text.
  - **Location**: Top-left corner.
  - **Contents**: 
    ```plaintext
    SOME TEXT HERE SOMETHING BOLDED HERE
    SOMETHING ELSE HERE
    ```
    ```plaintext
    SOME DIFFERENT TEXT HERE SOMETHING ELSE BOLDED HERE
    SOMETHING MORE DOWN HERE TOO
    ```
  - **Visual styling**: Black text on a white background, with some words bolded for emphasis.
  
- **Graphical Element (Below Text Area)**:
  - **Visual description**: A blue rectangle with a green arrow pointing upwards and a blue circle at one end.
  - **Location**: Below the text area.
  - **Contents**: None.
  - **Visual styling**: Blue rectangle with a green arrow and a blue circle, likely indicating a directional or interactive element.

- **Script Dropdown (Right Side)**:
  - **Visual description**: A dark gray dropdown menu with a light gray tag icon.
  - **Location**: Right side of the image.
  - **Contents**: 
    ```plaintext
    This object has no tags
    ```
    ```plaintext
    Script
    Attached Scr... EasyText2_Entity:EasyText
    ```
  - **Visual styling**: Dark gray background with light gray text and a white tag icon.

### Visual Flow / Relationships
- **Most prominent visually**: The text area on the left.
- **Arrows and lines**: The green arrow points upwards within the blue rectangle.
- **Spatial relationships**: The text area is adjacent to the script dropdown, with the graphical element positioned below the text area.

</details>

<p></p>



This example script has shown you how you can take the formatting options shown at the beginning, and apply them on your own. While this works wonderfully, as a part of this tutorial, I put together a formatting library, which you’ll see in the next step makes our lives even easier.

## Script 7: Write Text With a Formatting Library

This next script for you to [download](https://drive.google.com/file/d/122S7MyeFNDhkZ6oUG7nokfMQmswrgiPV/view?usp=sharing) is from the Formatting Library (written, a Utility script that you can use to make writing text with formatting a lot easier). If you have never used a library before, it is similar to an API, in that it provides you with additional functionality. To use, simply copy the UtilTextGizmo\_Func.ts file from the above download link into your scripts folder. You can then use the provided “formatting,” “Formats,” “Fonts,” “Materials, and “Gradients.”

Below is a simple demo, which can be downloaded by clicking [here](https://drive.google.com/file/d/15g5RvlCh2opLGxWfy_KJTelAP1tcLxvj/view?usp=sharing).

In this example, you imported “Formats” and “formatting” from the UtilTextGizmo\_Func.ts file. For the “title”, you have a string that gets three formatting options applied. After typing “formatting” when you type “.” a list of formatting options appear. Including a second list of “specialFormats.” You’ll notice that “Formats.bold” allows the applyFormat function to apply the bold format on your title. “Formats,” similar to “formatting,” also has a drop-down list after typing period.

And then similar to Script 6, you add the title and lines together. In this case, you use formatting to get an easier way of typing in line breaks. And then finally you display the string on the TextGizmo that has this script attached.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/42d2158a283c72b7bd8c5bfffaf5e347f4a508620e7b53ce97887f984945509d.md)

### Overview
This image displays a TypeScript code snippet within a code editor environment. The code is part of a class named `EasyText`, which extends `Component`. It demonstrates how to apply formatting to text using functions imported from modules `horizon/core` and `UtilTextGizmo_Func`.

### Key Elements
- **Visual description**: The code is written in a monospaced font typical for programming languages.
- **Location**: The code is displayed in a code editor window.
- **Contents**:
  - Line 1: `import { Component, TextGizmo } from "horizon/core";`
  - Line 2: `import { Formats, formatting } from "UtilTextGizmo_Func";`
  - Line 4: `class EasyText extends Component<typeof EasyText> {`
  - Line 5: `static propsDefinition = {};`
  - Line 7: `start() {`
  - Line 8: `let title = 'Title Here:';`
  - Line 9: `title = formatting.applyFormat(Formats.bold, title);`
  - Line 10: `title = formatting.specialFormats.applyFontSize(2, title);`
  - Line 11: `title = formatting.applyFormat(Formats.underline, title);`
  - Line 12: `const lineOne = 'Some Text Here';`
  - Line 13: `const lineTwo = 'Something Else Here';`
  - Line 15: `const displayMe = title + formatting.doubleBreak + lineOne + formatting.lineBreak + lineTwo;`
  - Line 17: `this.entity.as(TextGizmo)?.text.set(displayMe);`
  - Line 18: `}`
- **Visual styling**: The code uses syntax highlighting common in IDEs, with keywords in blue, strings in red, and variables in purple.

### Visual Flow / Relationships
- The code is structured as a single block with no arrows or lines connecting elements.
- The most prominent visual is the code itself, with the `start()` method being the focal point due to its larger size compared to the surrounding code.

</details>

<p></p>



Using this on multiple TextGizmos will require you to duplicate the script. give it a good name, and then attach the new script to the relevant TextGizmo. This isn’t the only method, as you could have one text manager that has the TextGizmos referenced on its properties panel. So depending on your needs, be creative and feel free to ask for help in Discord.

In addition to “Formats” there are three other enums, which have their own formatting.apply functions you can use:

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/0c33e9108a553032fce9eeb5ff1d0088da90aaba32e2aef6d645fd55659fa7d2.md)

### Overview
The image displays a code snippet containing four TypeScript enums: `Formats`, `Fonts`, `Materials`, and `Gradients`. Each enum exports a set of string literals representing specific formatting options, font styles, material definitions, and gradient configurations.

### Key Elements
- **Formats Enum**:
  - **Visual description**: A list of string literals.
  - **Location**: Top-left corner.
  - **Contents**: `bold`, `italic`, `underline`, `strikethrough`, `noparse`, `subscript`, `superscript`, `uppercase`, `lowercase`, `smallcaps`.
  - **Visual styling**: Blue text, no special styling.

- **Fonts Enum**:
  - **Visual description**: A list of string literals.
  - **Location**: Below the Formats Enum.
  - **Contents**: `bangers`, `anton`, `robotoBold`, `oswaldBold`, `electronicHighwaySign`.
  - **Visual styling**: Red text, no special styling.

- **Materials Enum**:
  - **Visual description**: A list of string literals.
  - **Location**: Below the Fonts Enum.
  - **Contents**: `antonDropShadow`, `antonOutline`, `bangersDropShadow`, `bangersOutline`, `bangersLogo`, `robotoboldDropShadow`, `liberationSansDropShadow`, `liberationSansMetallicGreen`, `liberationSansOverlay`.
  - **Visual styling**: Red text, no special styling.

- **Gradients Enum**:
  - **Visual description**: A list of string literals.
  - **Location**: Below the Materials Enum.
  - **Contents**: `yellowTo0OrangeVertical`, `darkToLightGreenVertical`, `lightToDarkGreenVertical`, `blueToPurpleVertical`.
  - **Visual styling**: Red text, no special styling.

### Visual Flow / Relationships
- The content is organized into four distinct enums, each on its own line.
- There are no arrows, lines, or connectors indicating relationships between the enums.
- The visual hierarchy is linear, with each enum appearing sequentially one after another.

</details>

<p></p>



You can also use these on their own, if you don’t need to clear them at the end, ie:

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/f9f8532142402d0675fbf6e98e4c3d893b4789bd103558ef3c2c8ba26dc2cec9.md)

### Overview
The image displays a line of code written in JavaScript. The code assigns a string value to a variable named `displayMe`. The font used for the code snippet appears to be a specific font named `Fonts.electronicHighwaySign`.

### Key Elements
- **Visual description**: The image contains a single line of code.
- **Location**: The entire content is centered within the image.
- **Contents**: 
    - `const`: A keyword indicating the declaration of a constant variable.
    - `displayMe`: The name of the variable being declared.
    - `=`: An assignment operator.
    - `Fonts.electronicHighwaySign`: A string literal representing the name of a font.
    - `+`: An addition operator.
    - `'Hello World'`: A string literal containing the text `"Hello World"`.
- **Visual styling**: The text is rendered in a monospaced font typical of code editors, with a light background and dark foreground for readability.

### Visual Flow / Relationships
There is no complex visual hierarchy or relationships depicted in the image. The elements are arranged linearly as part of a single line of code.

</details>

<p></p>



Feel free to dig into the utility file on your own and learn more about how it works and what options are available.

## Script 8 & 9: Ad Lib Story Example

This next section may feel a bit intimidating because you’ll be using multiple scripts. The first script is where all the logic is stored. It is where you’ll spend most of your time. The second script is a data file, storing various strings in JSON objects. The last two scripts are utilities you have already used. They’re the formatting and arrayUtil libraries which allow you to easily apply formatting and work with arrays.

You can download the files here:

* [EasyStoryTrigger\_Entity.ts](https://drive.google.com/file/d/1IwalvBI24Yym2gCxPdjYB40bTGv_i1om/view?usp=sharing)
* [Story\_Data.ts](https://drive.google.com/file/d/12u_sTwv6i0Vla8QmfI_KZDou55sWaV0D/view?usp=sharing)
* [UtilArray\_Func.ts](https://drive.google.com/file/d/1Wlaru7gyQRTzjov5rACVMsr3lm3pG7PV/view?usp=drive_link)
* [UtilTextGizmo\_Func.ts](https://drive.google.com/file/d/122S7MyeFNDhkZ6oUG7nokfMQmswrgiPV/view?usp=drive_link)

Let’s start with `Story_Data.ts`, which is a relatively simple file that creates four string arrays, and then stores them in an exported JSON object called storyData. You can access all of these strings from your main script by importing storyData. You can imagine having as many of these string arrays as you need for your story.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/635d5104fe7caf8fb004a8bfc44a9534c3404686c9538e9f99b056cfe5730cd7.md)

### Overview
This image displays a code snippet written in TypeScript, specifically defining arrays containing strings. The content is structured into three separate arrays: `greetings`, `adjectives`, and `verbs`.

### Key Elements
- **Visual description**: Code editor interface with syntax highlighting.
- **Location**: Top-left corner.
- **Contents**: 
    - `const greetings: string[] = ['hello', 'welcome', 'great to see you'];`
    - `const adjectives: string[] = ["brilliant", "curious", "elegant", "fierce", "graceful", "luminous", "mighty", "radiant", "serene", "vivid"];`
    - `const verbs: string[] = ["admire", "paint", "explore", "gather", "imagine", "observe", "pursue", "reflect", "strive", "transform"];`
- **Visual styling**: White background with syntax highlighting in blue, red, and green for keywords, strings, and comments respectively.

### Visual Flow / Relationships
- Most prominent visually: The code blocks themselves.
- No arrows or lines connecting elements.
- Reading order follows the standard left-to-right, top-to-bottom flow typical of code editors.

</details>

<p></p>

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/c11a5312c2892ee05d288c36448004510c0f4737871d82528cee237ccb0b4e88.md)

### Overview
This image displays a code snippet written in TypeScript, specifically defining a constant array of nouns and exporting a data object containing various parts-of-speech arrays.

### Key Elements
- **Line 32**: A comment indicating line number.
- **Line 33**: A constant declaration `const nouns: string[] = [`. 
- **Lines 34-43**: An array of strings representing nouns.
- **Line 44**: A blank line.
- **Line 45**: A comment indicating line number.
- **Line 46**: An export statement `export const storyData = {`.
- **Lines 47-50**: Properties within the `storyData` object, including `greetings`, `adjectives`, `verbs`, and `nouns`.
- **Line 51**: The closing brace `}` and `as const`.

### Visual Flow / Relationships
The code is structured linearly, with each line progressing downward. There are no arrows or connectors, and the reading order follows the natural progression of the code lines.

</details>

<p></p>



<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/92ff1ea153bec6d221ac60305ed77b625e3c19c0c436910878c09fe48ad902bb.md)

### Overview
This image displays a code editor window open to a TypeScript file named `EasyStoryTrigger_Entity.ts`. The file contains a class definition for `EasyStory`, which extends another class (`Component`). The code includes imports from various utility and data files, as well as a class method that generates a story based on random words from predefined arrays.

### Key Elements
- **Visual description**: Code editor interface with syntax highlighting.
- **Location**: Top panel.
- **Contents**: File name `EasyStoryTrigger_Entity.ts`.
- **Visual styling**: Dark theme with syntax highlighting for keywords, comments, strings, and variables.

- **Visual description**: Imports statements at the beginning of the file.
- **Location**: Top section.
- **Contents**: Imports from `"horizon/core"`, `"Story_Data"`, `"UtilArray_Func"`, and `"UtilTextGizmo_Func"`.
- **Visual styling**: Blue for class names, red for module names, and green for variable names.

- **Visual description**: Class definition `EasyStory`.
- **Location**: Center of the file.
- **Contents**: Static props definition, methods `preStart()`, `start()`, `playerEnterTrigger(player: Player)`, `updateStory(name: string)`, `getStory(name: string)`, and `displayStory(string: string)`.
- **Visual styling**: Method names in blue, parameters in green, and method bodies in white.

- **Visual description**: Method `preStart()`.
- **Location**: Below the class definition.
- **Contents**: Connects a code block event to the `OnPlayerEnterTrigger` event.
- **Visual styling**: Method name in blue, event name in green.

- **Visual description**: Method `start()`.
- **Location**: Below `preStart()`.
- **Contents**: Calls `updateStory('adventurer')`.
- **Visual styling**: Method name in blue, string literal in green.

- **Visual description**: Method `playerEnterTrigger(player: Player)`.
- **Location**: Below `start()`.
- **Contents**: Calls `updateStory(player.name.get())`.
- **Visual styling**: Method name in blue, parameter in green, and string literal in green.

- **Visual description**: Method `updateStory(name: string)`.
- **Location**: Below `playerEnterTrigger`.
- **Contents**: Calls `getStory(name)` and `displayStory(story)`.
- **Visual styling**: Method name in blue, parameter in green, and method calls in white.

- **Visual description**: Method `getStory(name: string)`.
- **Location**: Below `updateStory`.
- **Contents**: Generates a story using random words from predefined arrays.
- **Visual styling**: Method name in blue, parameter in green, and string literals in green.

- **Visual description**: Method `displayStory(string: string)`.
- **Location**: Below `getStory`.
- **Contents**: Sets the text of a `TextGizmo` component if defined.
- **Visual styling**: Method name in blue, parameter in green, and method call in white.

### Visual Flow / Relationships
- **Most prominent visually**: The class definition and its methods.
- **Arrows/lines/connectors**: None.
- **Implied reading order**: Top-down, left-to-right within each method body.
- **Spatial relationships**: Methods are stacked vertically, with no overlapping or nested structures.

</details>

<p></p>



You can now see this all come together in the EasyStoryTrigger\_Entity.ts script above. The first thing you’ve probably already noticed is that you attach this demo script to a Trigger Gizmo. This allows you to test our script by simply touching a trigger. This does mean you need to reference the TextGizmo, which you do on line 8 in the propsDefinition. You must make sure to fill this out on the properties panel of our trigger that is running this script.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/1f03af188b4429c0fcfdcf1d0c98640d43ee473c8081f46067227d7dbb3f3d1d.md)

### Overview
This image depicts a code editor interface displaying a TypeScript file named `EasyStoryTrigger_Entity.ts`. The file contains TypeScript code that defines a class `EasyStory` extending `Component`. The code includes imports from various modules and a class definition with static props.

### Key Elements
- **File Name**: `EasyStoryTrigger_Entity.ts`
- **Code Editor Interface**: Located at the top, showing tabs for other TypeScript files like `Story_Data.ts`, `UtilArray_Func.ts`, and `UtilTextGizmo_Func.ts`.
- **Code Content**: Located in the main area of the editor.
    - **Line 1**: Imports from `"horizon/core"` module.
    - **Line 2**: Imports from `"Story_Data"` module.
    - **Line 3**: Imports from `"UtilArray_Func"` module.
    - **Line 4**: Imports from `"UtilTextGizmo_Func"` module.
    - **Line 5**: Definition of the `EasyStory` class extending `Component`.
    - **Line 7**: Static props definition for the `EasyStory` class.
    - **Line 8**: Property `text` defined as `type PropTypes.Entity`.

### Visual Flow / Relationships
- **Most Prominent Element**: The code content in the editor.
- **Reading Order**: The code is read line-by-line from top to bottom.
- **Spatial Relationships**: The code editor interface is divided into two main areas: the tabbed file navigation at the top and the code content area below.

</details>

<p></p>



In preStart, you connect the OnPlayerEnterTrigger event to our local method. In start(), you load a default story using ‘adventurer’ to fill in as the name for a player. You can see the playerEnterTrigger method also calls updateStory.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/7702d452a24ee87d7a5de17a9bef15666e98ab114e7c3954928c5aa188ff0299.md)

### Overview
This image displays a snippet of code written in TypeScript, likely part of a game development framework or engine. The code includes methods for setting up events and updating a story based on player actions.

### Key Elements
1. **Method `preStart()`**
   - **Visual description**: A method definition.
   - **Location**: Top-left corner.
   - **Contents**: `this.connectCodeBlockEvent(this.entity, CodeBlockEvents.OnPlayerEnterTrigger, this.playerEnterTrigger.bind(this));`
   - **Visual styling**: Blue for keywords (`this`, `connectCodeBlockEvent`, `CodeBlockEvents`, `OnPlayerEnterTrigger`, `playerEnterTrigger`), green for class names (`this.entity`), and orange for the method name (`bind`).

2. **Method `start()`**
   - **Visual description**: Another method definition.
   - **Location**: Below `preStart()`.
   - **Contents**: `//Load a default story\nthis.updateStory('adventurer');`
   - **Visual styling**: Blue for keywords (`this`, `updateStory`), green for string literals (`'adventurer'`), and orange for comments (`//`).

3. **Method `playerEnterTrigger(player: Player)`**
   - **Visual description**: A method definition.
   - **Location**: Below `start()`.
   - **Contents**: `this.updateStory(player.name.get());`
   - **Visual styling**: Blue for keywords (`this`, `updateStory`, `player`, `name`, `get`), green for variable names (`player`), and orange for the method name (`get`).

### Visual Flow / Relationships
- The methods are arranged vertically, one after another.
- There are no arrows or lines connecting the methods, indicating a linear flow of execution.
- The methods are read from top to bottom.

</details>

<p></p>



The updateStory method starts by getting a story and then displays the story. Each of these are separate methods shown below. One returns a string, and the other updates the TextGizmo.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/07cc573ccb074b70f7d0036633d6b5a2d21b38d2c3a209fa3e5a778093126139.md)

### Overview
This image displays a code snippet written in TypeScript, specifically within a method named `updateStory`. The code is part of a larger program, likely related to managing stories or narratives.

### Key Elements
- **Visual description**: Code block with syntax highlighting.
- **Location**: Top-left corner of the image.
- **Contents**: 
    ```typescript
    updateStory(name: string) {
        const story = this.getStory(name);
        this.displayStory(story);
    }
    ```
- **Visual styling**: White background with black text. Syntax highlighting includes blue for keywords (`updateStory`, `const`, `this`, `getStory`, `displayStory`) and green for strings (`name`). There are no borders or additional visual elements.

### Visual Flow / Relationships
- Most prominent visually: The code block itself.
- No arrows, lines, or connectors present.
- Reading order follows the standard left-to-right, top-to-bottom flow typical of code snippets.

</details>

<p></p>



The getStory method is where all the magic occurs. It takes a name, ie. the player name, and returns a string, which is the story. The first thing you do in this method is set several variables by selecting a random string from storyData, and providing a fallback, in case our array of strings is empty.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/8b5b88d0f685ac8dd8701896337db4e231c47ffd47a79dbc493f68d98eb3d24c.md)

### Overview
This image displays a code snippet written in TypeScript, showing a function named `getStory`. The function takes a string parameter `name` and returns a string. The code uses a library called `Vidyuu arrayUtils` to randomly select items from arrays within a `storyData` object.

### Key Elements
- **Visual description**: Code snippet.
- **Location**: Top-left corner of the image.
- **Contents**: Code content.
- **Visual styling**: White background, black text, no additional styling.

### Visual Flow / Relationships
- Most prominent visually: The code itself.
- No arrows, lines, or connectors present.
- Reading order follows the standard left-to-right, top-to-bottom flow typical of code snippets.

</details>

<p></p>



You then use formatting to capitalize the first letter in the greeting. There’s a second example on line 39, which sets the text to be the same as what’s on line 37. This is to show that you can choose the method of writing your story that makes the most sense to you. I personally prefer plusses “+” but the line 39 method takes up less space, and for some is easier to read.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/b85c992dafdc4c24db7e40924314618e7a8802b4fa86cc575480b31a157d5c65.md)

### Overview
This image displays a code snippet written in JavaScript. The code is part of a function that constructs a story string based on user inputs for `greeting`, `name`, `adjective`, `noun`, and `verb`. The code includes comments explaining the logic and an alternative shorter version of the same logic.

### Key Elements
1. **Code Block**
   - **Visual description**: A block of code with syntax highlighting.
   - **Location**: Centered in the image.
   - **Contents**: 
     ```javascript
     let story = formatting.capitalizeFirst(greeting) + ' ' + name + ', you've found a ' + adjective + ' ' + noun + '! Let's go ' + verb + ' the ' + noun + '.';
     ```
     ```javascript
     //This line below writes exactly the same thing as the one above, if you prefer this style, it can take up less space, choose the one you like best.
     story = '${formatting.capitalizeFirst(greeting)} ${name}, you've found a ${adjective} ${noun} ! Let's go ${verb} the ${noun}.';
     ```
     ```javascript
     story += formatting.lineBreak + 'Imagine having multiple sentences, and having large libraries of random words.';
     ```
   - **Visual styling**: The code uses syntax highlighting with keywords in blue, strings in green, variables in purple, and comments in gray.

2. **Function Call**
   - **Visual description**: A function call within the code block.
   - **Location**: Below the code block.
   - **Contents**: `return story;`
   - **Visual styling**: The function call is in purple.

3. **Line Break**
   - **Visual description**: A line break symbol (`+ formatting.lineBreak`) indicating a new line.
   - **Location**: Below the code block.
   - **Contents**: `+ formatting.lineBreak`
   - **Visual styling**: The line break symbol is not visually distinct but is represented by the plus sign followed by the word `lineBreak`.

4. **Comment**
   - **Visual description**: A comment block.
   - **Location**: Above the second code block.
   - **Contents**: `//This line below writes exactly the same thing as the one above, if you prefer this style, it can take up less space, choose the one you like best.`
   - **Visual styling**: The comment starts with a double forward slash (`//`) and is in gray.

5. **Variable Names**
   - **Visual description**: Variable names such as `greeting`, `name`, `adjective`, `noun`, `verb`, `formatting`, `capitalizeFirst`, `lineBreak`.
   - **Location**: Within the code blocks.
   - **Contents**: Quoted variable names.
   - **Visual styling**: Variable names are in purple.

6. **String Interpolation**
   - **Visual description**: String interpolation using `${}`.
   - **Location**: Within the code blocks.
   - **Contents**: `${variableName}`
   - **Visual styling**: The dollar signs (`$`) are visually distinct and indicate string interpolation.

7. **Function Call**
   - **Visual description**: A function call `formatting.lineBreak`.
   - **Location**: Below the code block.
   - **Contents**: `formatting.lineBreak`
   - **Visual styling**: The function call is in purple.

8. **Return Statement**
   - **Visual description**: A return statement.
   - **Location**: Below the code block.
   - **Contents**: `return story;`
   - **Visual styling**: The `return` keyword is in purple, and `story` is in purple.

### Visual Flow / Relationships
- **Most Prominent Element**: The code block containing the story construction logic.
- **Arrows/Connectors**: None.
- **Reading Order**: The code flows from top to bottom, left to right.
- **Spatial Relationships**: The code blocks are stacked vertically, with comments and the return statement at the end.

</details>

<p></p>



Now that you’ve calculated the story, you can now return it.

Display story is similar to what you’ve done earlier in this tutorial, except you added a check and console log if the text property has not been referenced or doesn’t reference a TextGizmo.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/d5366160665783870633fdaf24aed485a7a89252115cd7d54534c3797eb13442.md)

### Overview
This image displays a code snippet written in TypeScript, showing a method named `displayStory`. The code is part of a component that interacts with a `TextGizmo` object to display a story string.

### Key Elements
- **Function Definition**: `displayStory(string)`
  - **Location**: Top-left corner
  - **Contents**: `displayStory(story: string) {`
  - **Visual styling**: Black text on a white background
- **Variable Declaration**: `const textGizmo = this.props.text?.as(TextGizmo);`
  - **Location**: Below the function definition
  - **Contents**: `const textGizmo = this.props.text?.as(TextGizmo);`
  - **Visual styling**: Black text on a white background
- **Conditional Statement**: `if (textGizmo) {`
  - **Location**: Below the variable declaration
  - **Contents**: `if (textGizmo) {`
  - **Visual styling**: Black text on a white background
- **Action within Condition**: `textGizmo.text.set(story);`
  - **Location**: Below the conditional statement
  - **Contents**: `textGizmo.text.set(story);`
  - **Visual styling**: Black text on a white background
- **Else Block**: `else { console.log('textGizmo not defined or referenced correctly on EasyStoryTrigger, for story: ' + story); }`
  - **Location**: Below the action within condition
  - **Contents**: `else { console.log('textGizmo not defined or referenced correctly on EasyStoryTrigger, for story: ' + story); }`
  - **Visual styling**: Black text on a white background
- **Component Registration**: `Component.register(EasyStory);`
  - **Location**: Bottom-left corner
  - **Contents**: `Component.register(EasyStory);`
  - **Visual styling**: Black text on a white background

### Visual Flow / Relationships
- **Most Prominent Element**: The function `displayStory`.
- **Arrows/Connectors**: None
- **Reading Order**: The code flows from top to bottom, left to right.
- **Spatial Relationships**: Elements are arranged linearly, with no overlapping or nested structures.

</details>

<p></p>



From this, you can extrapolate to create your own custom ad lib story. If you have questions or need help, don’t hesitate to ask in Discord.

## Script 10 & 11: Random Ad-Lib Story Example

In this section, you’ll elevate your ad lib story generation by randomly selecting a story and player. To do this, you’ll continue using the Story\_Data and utility scripts. You’ll add to it with an AdvancedStoryTrigger\_Entity script, and an additional import called storyFunc.

You can download the new files here:

* [AdvancedStoryTrigger\_Entity.ts](https://drive.google.com/file/d/1Mosj6KW_46cb35YyNTZDurvWIDH14rFw/view?usp=sharing)
* [Story\_Func.ts](https://drive.google.com/file/d/17696gjxbix-GYvL62mpGsrx7TaTRHFKA/view?usp=sharing)

Let’s start with something familiar, looking at Story\_Func. This is similar to our data file in that you have an exported variable, but instead of storing string data, it stores an array of functions. The creation of storyFunc declares itself to be an Array of functions that take a string parameter and return a string. This is just like our getStory method from script 8. In fact, line 10 is the same method, but as a function called story1. You can then duplicate this for as many stories as you want. Just make sure they are included in the array on line 5.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/b91501d76b6a0496292ab279a12a1cd5b936379328f94f70a17ad4603a2ed602.md)

### Overview
This image displays a code editor window containing TypeScript code related to generating stories. The code includes imports from various utility functions and defines two functions (`story1` and `story2`) that generate story prompts based on randomly selected words from predefined arrays.

### Key Elements
- **Visual description**: Code editor interface with syntax highlighting.
- **Location**: Top panel.
- **Contents**: Code content.
- **Visual styling**: White background with syntax highlighting in green, red, blue, and yellow for keywords, strings, comments, and variables respectively.

### Visual Flow / Relationships
- Most prominent visually: The code content itself.
- Reading order follows the standard left-to-right, top-to-bottom flow typical of code editors.

</details>

<p></p>



Next, you can take a look and see how this is used in the trigger script. The first difference you’ll notice is that you have an array of activePlayers, and in preStart you connect PlayerEnter and PlayerExit world events. Seen below on lines 23 and 27, you add players to the activePlayers array using push, and remove them using the arrayUtils removeItemFromArray function.

The next major difference is that in the playerEnterTrigger, you now select a randomPlayer and update the story using that player’s name.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/382810bed460928bbc0441bfa9332d8621e068def098f7baad35acd30471ddba.md)

### Overview
This image displays a code editor window open to a TypeScript file named `AdvancedStoryTrigger_Entity.ts`. The content is a class definition within a larger project, focusing on handling player interactions within a game environment.

### Key Elements
- **Visual description**: Code editor interface with syntax highlighting.
- **Location**: Top panel.
- **Contents**: File name `AdvancedStoryTrigger_Entity.ts`.
- **Visual styling**: Dark theme with syntax highlighting for keywords, comments, and strings.

- **Visual description**: Code editor interface with tabs showing other related files.
- **Location**: Top right area.
- **Contents**: File names `Story_Data.ts`, `Story_Func.ts`, `UtilArray_Func.ts`, `UtilTextGizmo_Func.ts`.
- **Visual styling**: Light gray background with blue file names.

- **Visual description**: TypeScript code.
- **Location**: Main editor area.
- **Contents**: Class definition `AdvancedStory` extending `Component<typeof AdvancedStory>`.
- **Visual styling**: White background with syntax highlighting for keywords (`import`, `class`, `static`, `function`), comments (`//`), and strings (`'adventurer'`).

### Visual Flow / Relationships
- **Most prominent visually**: The code editor interface and the TypeScript code itself.
- **Arrows/lines/connectors**: None.
- **Implied reading order**: From top to bottom, left to right, following the standard reading direction of the code.

</details>

<p></p>



The next change is inside of getStory. You’ll get a randomStoryFunc from the array of storyFunc. If it is defined, then you’ll use it to generate a story. Otherwise, the list of functions may be empty, and you’ll log an error to the console, returning an empty string.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/3f4c4417f59a45d756d9203bfebd51cc0b17c79895d94109fc8be82bab30b57f.md)

### Overview
This image displays a code snippet written in TypeScript, showcasing a class method (`updateStory`) and its associated functions (`getStory` and `displayStory`). The code is part of a larger class definition, as indicated by the `Component.register(AdvancedStory);` line at the bottom, which suggests that `AdvancedStory` is a component being registered within a React-like framework.

### Key Elements
1. **Method `updateStory(name: string)`**
   - **Visual description**: A method declaration.
   - **Location**: Top of the code snippet.
   - **Contents**: `const story = this.getStory(name);` followed by `this.displayStory(story);`.
   - **Visual styling**: No specific styling noted, as it's plain text.

2. **Method `getStory(name: string): string`**
   - **Visual description**: Another method declaration.
   - **Location**: Below `updateStory`.
   - **Contents**: 
     ```typescript
     const randomStoryFunc = arrayUtils.getRandomItemFromArray(storyFunc);
     if (randomStoryFunc) {
       const story = randomStoryFunc(name);
       return story;
     }
     else {
       console.log('randomStoryFunc not defined. Story_Func file not found, or storyFunc array is empty ');
       return '';
     }
     ```
   - **Visual styling**: No specific styling noted, as it's plain text.

3. **Method `displayStory(story: string)`**
   - **Visual description**: Another method declaration.
   - **Location**: Below `getStory`.
   - **Contents**: 
     ```typescript
     const textGizmo = this.props.text?.as(TextGizmo);
     if (textGizmo) {
       textGizmo.text.set(story);
     }
     else {
       console.log('textGizmo not defined or referenced correctly on AdvancedStoryTrigger, for story: ' + story);
     }
     ```
   - **Visual styling**: No specific styling noted, as it's plain text.

4. **Line `Component.register(AdvancedStory);`**
   - **Visual description**: A statement registering a component.
   - **Location**: Bottom of the code snippet.
   - **Contents**: `Component.register(AdvancedStory);`
   - **Visual styling**: No specific styling noted, as it's plain text.

### Visual Flow / Relationships
- **Most prominent visually**: The methods `updateStory`, `getStory`, and `displayStory`.
- **Arrows, lines, connectors**: None.
- **Implied reading order**: The code flows from top to bottom, left to right.
- **Spatial relationships**: Methods are nested within the class definition, with `getStory` and `displayStory` being called within `updateStory`.

</details>

<p></p>



And like that, you can have as many random ad-lib stories as you want.

## Extended Learning

Below are challenges that you can implement on your own. The Advanced task might require some outside knowledge. We encourage you to ask questions in Discord if you get stuck or are unsure how to complete any of these.

**Novice**
Fix spelling mistakes and add formatting to pre-existing large blocks of text in TextGizmos.

**Intermediate**
Write your next large text paragraph using TypeScript and the provided Vidyuu formatting library.

**Advanced**
Integrate a randomly generated story into one of your worlds.

## Further Assistance

For any questions or further assistance, creators are encouraged to join the discussion on the Discord server or to schedule a mentor session for personalized guidance.