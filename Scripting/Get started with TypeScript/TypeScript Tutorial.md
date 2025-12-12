Source: https://developers.meta.com/horizon-worlds/learn/documentation/typescript/getting-started/typescript-tutorial

# TypeScript Tutorial

## Build your first Hello World with TypeScript and the Desktop Editor

Follow these steps to access the Desktop Editor

- Navigate to *Scripts -> CreateNewScript*.
- We will use a starter script named Shoot.
- Choose the *:* menu next to the new script. You can select “Open in External Editor” if using a preferred editor.
  <details>
  <summary>Image Content</summary>
  
  <p></p>
  
  [All image details and metadata](../../image_data/7da05bbc430ae190ca0742ed9fa65fb51aa8772e0abf347770d3365e55519298.md)
  
  ### Overview
  This image depicts a contextual menu with three options displayed as part of a user interface. The menu is triggered by a button or icon located at the top right of the screen, indicated by a vertical ellipsis (...).
  
  ### Key Elements
  - **Visual description**: The menu has a rectangular shape with rounded corners.
  - **Location**: Positioned to the right of the screen, slightly below the top bar.
  - **Contents**: 
      - **Recompile**: A menu item labeled "Recompile" in white text on a dark background.
      - **Open in External Editor**: A menu item labeled "Open in External Editor" in white text on a dark background.
      - **Execution Mode**: A menu item labeled "Execution Mode" in white text on a dark background, with a right-pointing arrow indicating a dropdown or additional options.
  - **Visual styling**: The menu has a dark background with white text. There are no borders around the menu items themselves, but the menu itself has a subtle shadow effect, giving it a slight elevation.
  
  ### Visual Flow / Relationships
  The most prominent visual element is the menu itself, which is the focal point due to its central placement and the presence of the ellipsis icon that triggers it. The menu items are arranged vertically, with each option clearly separated by a thin line. There are no arrows or lines connecting the elements, suggesting a simple, linear reading order.
  
  </details>
  
  <p></p>
  
  
- The `start()` function is called whenever the object it is attached to is created. To print to the debug console for an object created, add a *console* print:

  ```
  start() {
    console.log("Hello, World!");
  }
  ```
- Save the file.
- In the Desktop world editor, connect your new script to an object you have in the hierarchy. Scroll down to the bottom of the property panel on the right. Select “Attached Script” and choose the script file named “Shoot:Shoot”. This will associate the script with the object.
  <details>
  <summary>Image Content</summary>
  
  <p></p>
  
  [All image details and metadata](../../image_data/02123404d801c5af3efca6cb7ab948b4baece831bdf609df6690eb9e2e535861.md)
  
  ### Overview
  This image depicts a user interface element showing a dropdown menu within a software application. The dropdown is part of a settings or configuration panel, specifically under a section labeled "Script."
  
  ### Key Elements
  - **Dropdown Menu**: Located centrally, with a blue background and white text indicating options.
    - **"None"**: A standard option listed above the selected item.
    - **"Shoot:Shoot"**: Highlighted in blue, indicating it is currently selected. It has a checkmark next to it.
  - **Attached Script Label**: Positioned above the dropdown, with the text "Attached Script" in a lighter gray font.
  - **Dropdown Button**: Located to the right of the "Attached Script" label, with a downward-pointing arrow indicating the dropdown functionality.
  - **Background**: The surrounding area is dark gray, typical of a sidebar or menu area.
  
  ### Visual Flow / Relationships
  The most prominent visual element is the blue-highlighted "Shoot:Shoot" option, which draws attention due to its color contrast and checkmark. The dropdown menu itself is the focal point, with the "Attached Script" label providing context for the dropdown's purpose.
  
  </details>
  
  <p></p>
  
  
- Preview the world by clicking on the person icon next to the wrench.
  <details>
  <summary>Image Content</summary>
  
  <p></p>
  
  [All image details and metadata](../../image_data/7738547e078b37ee872e6299caf7fb808e8a9b70ea68192c8fd21314827727a1.md)
  
  ### Overview
  This image displays a row of five icons arranged horizontally against a dark background. The icons appear to be part of a user interface, possibly for a software application or website.
  
  ### Key Elements
  1. **Visual description**: A blue play button icon.
     - **Location**: Leftmost position.
     - **Contents**: A white play symbol within a blue square.
     - **Visual styling**: Blue background, white play symbol, rounded corners.
  
  2. **Visual description**: A white square icon.
     - **Location**: Second from the left.
     - **Contents**: A white square.
     - **Visual styling**: White background, black border, rounded corners.
  
  3. **Visual description**: A backward arrow icon.
     - **Location**: Third from the left.
     - **Contents**: A white backward arrow.
     - **Visual styling**: White background, black border, rounded corners.
  
  4. **Visual description**: A wrench icon.
     - **Location**: Fourth from the left.
     - **Contents**: A white wrench symbol.
     - **Visual styling**: White background, black border, rounded corners.
  
  5. **Visual description**: A blue square with a white human figure icon.
     - **Location**: Rightmost position.
     - **Contents**: A white human figure within a blue square.
     - **Visual styling**: Blue background, white human figure, rounded corners.
  
  ### Visual Flow / Relationships
  The icons are arranged in a horizontal line, suggesting a navigation bar or a set of actions available to the user. There are no arrows or lines connecting the elements, indicating that they are independent actions or options.
  
  </details>
  
  <p></p>
  
  
- Press escape and click on Console window at the bottom of the editor.
  <details>
  <summary>Image Content</summary>
  
  <p></p>
  
  [All image details and metadata](../../image_data/0d4f8584dbaff08fa8c803491f66eedc906329b2b0a235509d8b2cd8736858f0.md)
  
  ### Overview
  This image depicts a user interface section of a software application, likely a development environment or a project management tool. The focus is on a navigation bar with tabs labeled "Assets," "Console," and "Tests."
  
  ### Key Elements
  - **Tab "Assets"**: Located at the top-left, it is a dark blue tab with white text that reads "Assets."
  - **Tab "Console"**: Positioned centrally, it is also a dark blue tab with white text that reads "Console."
  - **Tab "Tests"**: Situated to the right of the "Console" tab, it is another dark blue tab with white text that reads "Tests."
  - **Navigation Bar**: The tabs are part of a larger navigation bar that spans across the top of the interface. It has a dark blue background with lighter blue accents around the tabs.
  - **Tabs' Hover Effect**: There is a subtle hover effect on the "Console" tab, indicated by a slight change in its color and a small triangle pointing upwards, suggesting interactivity.
  
  ### Visual Flow / Relationships
  The most prominent visual element is the navigation bar itself. The tabs are arranged horizontally, and the hover effect on the "Console" tab suggests a user interaction sequence. The tabs are evenly spaced, and there are no connecting lines or arrows indicating a specific reading order.
  
  </details>
  
  <p></p>
  
  
- When the object you associated the script with is created, the console will print the  debug message you specified.
  <details>
  <summary>Image Content</summary>
  
  <p></p>
  
  [All image details and metadata](../../image_data/ab5e02b6b2ba5d3d5fa0b24fe33cfa0eacc383f157954cdffa43095925df56d9.md)
  
  ### Overview
  This image depicts a user interface section of a software application, likely related to asset management or console logs. The layout includes tabs, informational icons, a message area, and a timestamp.
  
  ### Key Elements
  - **Tabs**: Located at the top, showing "Assets" and "Console". The "Assets" tab is active.
  - **Clear Button**: A rectangular button labeled "Clear" with a white background and blue border, located next to the tabs.
  - **Information Icons**: Three circular icons with information symbols (i, exclamation mark, and cross) indicating counts of notifications: "i 1", "0", and "0".
  - **Message Area**: Below the tabs, a section labeled "MESSAGE" contains a message: "Hello, World! ...". There is also a smaller icon next to the message, resembling a speech bubble with a number "1" inside, and a timestamp "08:19:22".
  
  ### Visual Flow / Relationships
  The most prominent visual element is the "Assets" tab, as it is highlighted. The information icons are arranged horizontally beneath the tabs. The message area is below the icons, drawing attention downward. The message itself is the focal point within the message area.
  
  </details>
  
  <p></p>
  
  

### Sharing Code Between Scripts

Scripts can share code with other scripts in your world. This can be done with the **`export`** keyword in TypeScript. You can export types, functions, classes, and even values from one script and import them to another. The module name is the name of the script. So if you have a script name `Script1`, you can import any exports from it by using this code: **`import``\*` as `S1` from `'Script1'`**`;` .

#### Module1

TypeScript example

```
//Module1

export function add(a: number, b: number) {
  return a + b;
}

export type MyScalar = number \| string;

export const ModValue = 42;

export class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  sayHello() {
    console.log(`Hello my name is ${this.name}`);
  }
}
```

#### Script1

TypeScript example

```
// Script1
import type {MyScalar} from 'Module1';
import {Person, ModValue, add} from 'Module1';

const p = new Person('Jon');
p.sayHello(); // logs 'Hello my name is Jon'

let v: MyScalar = ModValue;
console.log(v); // logs 42
v = 'string';
console.log(v); // logs 'string'

console.log(add(5, 8)); // logs 13
```