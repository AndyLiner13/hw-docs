Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/feature-samples/custom-ui-examples-tutorial/station-2-image-from-asset

# Station 2 - Image from Asset

At Station 2, you can explore how a basic image can be displayed in a custom UI. This image is uploaded to the platform as a .PNG asset of type Texture.

<details>
<summary>Image of Station 2</summary>

<p></p>

[Image of Station 2](../../../image_data/cb0baed3b375ec45604f23c219a44a8bd5c4c957422a561a20a29aee63ec46d1.md)

### Overview
The image is a digital illustration featuring a central globe surrounded by various mechanical and robotic components. The globe is depicted with a blue ocean and yellow continents, resembling a stylized Earth. Above the globe, there is a black banner with white text that reads "Image from Asset." The background outside the globe is a solid dark gray, and the surrounding area has a yellow wall with a geometric pattern.

### Key Elements
- **Globe**: A central blue and yellow globe with a stylized Earth design.
- **Mechanical Components**: Various robotic parts and tools are scattered around the globe, including a camera, a drill, a wrench, and other mechanical devices.
- **Banner**: A black rectangular banner at the top with white text that says "Image from Asset."
- **Background Wall**: A solid yellow wall with a geometric pattern.
- **Frame**: A thin black frame surrounds the entire image.

### Visual Flow / Relationships
The most prominent visual element is the globe, which serves as the focal point. The mechanical components are arranged around the globe, creating a sense of activity and exploration. The banner at the top provides context, indicating the image's origin. The geometric pattern on the wall adds texture to the background without distracting from the main elements.

</details>

<p></p>



The script defines a property on the CustomUI gizmo to allow for selecting the Texture asset through the Properties panel.

Then, in the desktop editor, you as the designer can select the image asset.

In this manner, you can develop static, non-interactive assets outside of the platform that simply must be displayed on a user interface.

## Assets

* **Station02-CustomUI: CustomUI gizmo**
  + Visible: true
  + Script: the script that defines the custom UI elements must be attached.
    - In this case, the script name is Station02-ImageFromAsset
* **Station02-ImageFromAsset: script**
  + This script defines the customUI object and loads the image referenced in the CustomUI gizmo properties panel.
* **StationAll-CustomUI-Library: script**
  + This library file contains some objects and functions that are used in multiple places in the world. Instead of making updates (and therefore mistakes) across multiple files, you should get in the habit of centralizing your reused code objects in distinct files.
  + This library file is imported into the Station’s script.

## Script

### StationAll-CustomUI-Library

To simplify maintenance of your scripts, you should store script objects that are used in multiple locations in a single consistent location. This type of script file can be labeled Library, Shared, Common, or similar.

In this case, the `loadImage2()` function and the `UITextureProps` type declaration are reused in other examples in this world. To make it easier to manage the code (and to avoid having to apply fixes across multiple files and instances of basically the same objects), you can store these items in a separate script. The key thing to do is to export them so that they are available in scripts other than the current one.

**Note**: The default scope of your script is the script file itself. However, you can pull in through the import keyword API components and objects stored in other files. To make objects available to other scripts, use the export keyword.

Below, you can see how the `loadImage2()` function and `UITextureProps` are defined in the Library file. Note the use of the export keyword in front of the declarations.

```
// The loadImage2 function performs the simple act of returning the results of calling the Image function,
// which has been loaded from the Image API component. This function pulls in its ImageSource (another component)
// from the source asset, which is specified in the TextureAsset property in the Properties panel.
// A designer selects the asset from the drop-down in the Properties panel, and the code loads it,
// applying the baseImageStyle definitions for it.

export function loadImage2(asset: Asset, style: ImageStyle) {
  return Image({
    source: ImageSource.fromTextureAsset(asset),
    style: style,
  });
}

// This type declaration for UITextureProps identifies the object textureAsset to be of Asset type.
// Asset type identifies objects that have been uploaded into the Asset Library.

export type UITextureProps = {
  textureAsset: Asset;
};
```

In the primary script for this example (below), these objects are imported.

### Station02-ImageFromAsset

With the more general declarations moved to the Library file, this script now contains declarations and objects that are specific to the CustomUI gizmo and its display.

* Import:
  + At the top of the file, you can see the standard import declarations.
  + There is two items of interest in these declarations:
    - Import only what is needed.
    - Import from other files, like the Library.
    - See “TypeScript coding” below.
* The constructor `baseSimpleImage2Style` object is defined as an instance of an `ImageStyle` object with two properties specified.

```
const baseSimpleImage2Style: ImageStyle = {height: 200, width: 200};
```

* This object gets passed into the `loadImage2()` function to define the styling of the loaded image.
* Class `SimpleImage2` declaration:

  + References the `UITextureProps` properties type definition which is imported from the Library.
  + Defines the height and width of the customUI panel. These properties are different from the `ImageStyle` properties, which apply to the image that is imported. These values should be greater than the values applied to `ImageStyle`.
* `propsDefinition`:

  + This declaration defines the `textureAsset` property to be a `PropTypes` property. `PropTypes` is a reference to properties available on the Properties panel of the parent object, which in this case is the CustomUI gizmo.
  + The Property that is referenced is of Asset property type, which means that a drop-down is available in the panel from which you can select an asset to which you have access.
  + In the Properties panel, the `textureAsset` property looks like the following:

  <details>
  <summary>Image of properties panel with textureAsset property</summary>
  
  <p></p>
  
  [Image of properties panel with textureAsset property](../../../image_data/05a83bd3f1e6e57abf6ee9cdb00fae7413488fa9606658f0c3cfa8f0e3f0a83e.md)
  
  ### Overview
  This image depicts a user interface element within a software application, likely related to asset management or scene creation. The interface includes a tree-like structure on the left side, a label indicating an asset path, and a button labeled "Attach script."
  
  ### Key Elements
  - **Tree Structure**: Located on the left side, with a minus sign indicating a collapsed node. Contains the text `Station02-ImageFromAss...`.
  - **Asset Label**: Positioned next to the tree structure, displaying `textureAsset`.
  - **Asset Path**: A clickable element showing `Cat_WorldTools`, which seems to be a folder or asset name.
  - **Button**: Situated below the asset path, labeled `Attach script`.
  
  ### Visual Flow / Relationships
  The most prominent visual element is the tree structure on the left. The asset path and button are secondary elements, positioned to the right of the tree structure. There are no arrows or lines connecting elements, suggesting a linear reading order moving from left to right.
  
  </details>
  
  <p></p>
  
  
* InitializeUI() method:

  + The returned `View()` object contains three simple elements.
  + `Text()` - a simple text label.
  + `loadImage2()` - this is a call to the function that is imported from the Library. Its parameters are the value that a designer has selected in the textureAsset property in the gizmo and the base styling object to apply to the loaded image.
    - What is returned is displayed in the `View()` object.
* `register()` method:

  + Declared class must be registered with the abstract class UIComponent.

## Key Learnings

### Meta Horizon Worlds learnings

* How to load a static image into a customUI panel
  + Image must be uploaded as a PNG to your Asset Library
* How to apply styling to images through the ImageStyle object
  + In the file, select ImageStyle and right-click to select **Go to Definition**. Available options for styling an image are displayed.

### TypeScript coding

#### Export

You can make functions, classes, type definitions, and other objects available to other TypeScript in your world by prefacing their declarations with the word: export

Exporting is useful for ensuring that you maintain consistency in your code across the environment.

#### Import

In the import declarations, you can see that a number of modules have been commented out. In TypeScript, comments are prefaced with the following: `//`

These modules were added in an earlier version in which more examples were contained in the same file. However, when the examples were split into separate files for clarity, these import modules were no longer needed.

```
// Below declarations are from the UI module of the API.
// These imports might need to be added to this list to extend capabilities:
//  ViewStyle,
//  Callback,
//  Pressable,
//  Binding,
//  UINode,

import {UIComponent, Text, ImageStyle, Image, ImageSource} from 'horizon/ui';
```

In the above, you can see that two modules (`Image` and `ImageSource`) appear in a different color in Visual Studio Code. Since the code that requires these two modules was moved to the Library file, the editor is indicating through color that these modules are valid and imported here yet are unused in the script. Therefore, they can be moved into comments outside of the declaration or deleted altogether.

#### Import from the Library

In the following, you can see the syntax for importing objects from another file:

```
// This import is pulling in the loadImage2 function from the TypeScript file: StationAll-CustomUI-Library.
// This type of a Library file allows you to create single definitions of functions and types and then to
// use them consistently throughout your project.
import {loadImage2} from 'StationAll-CustomUI-Library';

// This import pulls in the UI texture properties type declaration from the Library file.
import {type UITextureProps} from 'StationAll-CustomUI-Library';
```

The first reference pulls in the exported `loadImage2` function from the `StationAll-CustomUI-Library.ts` file.

The second reference pulls in the exported `UITextureProps` type declaration from the `StationAll-CustomUI-Library.ts` file. Note the use of the type keyword.