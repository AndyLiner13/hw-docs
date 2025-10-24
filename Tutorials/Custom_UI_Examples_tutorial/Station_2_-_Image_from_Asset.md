# Station 2 - Image from Asset
...
## Assets


• Station02-CustomUI: CustomUI gizmo
  • Visible: true
  • Script: the script that defines the custom UI elements must be attached.
   • In this case, the script name is Station02-ImageFromAsset
• Station02-ImageFromAsset: script
  • This script defines the customUI object and loads the image referenced in the
CustomUI gizmo properties panel.
• StationAll-CustomUI-Library: script
  • This library file contains some objects and functions that are used in multiple
places in the world. Instead of making updates (and therefore mistakes) across
multiple files, you should get in the habit of centralizing your reused code
objects in distinct files.
  • This library file is imported into the Station’s script.

  
...
...
# Station 2 - Image from Asset
...
## Script

  
### StationAll-CustomUI-Library

 To simplify maintenance of your scripts, you should store script objects that
are used in multiple locations in a single consistent location. This type of
script file can be labeled Library, Shared, Common, or similar. In this case, the `loadImage2()` function and the `UITextureProps` type declaration are reused in other examples in this world. To make it easier
to manage the code (and to avoid having to apply fixes across multiple files and
instances of basically the same objects), you can store these items in a
separate script. The key thing to do is to export them so that they are available in
scripts other than the current one. Note: The default scope of your script is the script file itself. However, you can
pull in through the import keyword API components and objects stored in other
...
...
# Station 2 - Image from Asset
...
## Script

  
### StationAll-CustomUI-Library
...
files. To make objects available to other scripts, use the export keyword. Below, you can see how the `loadImage2()` function and `UITextureProps` are defined in the Library file. Note the use of the export keyword in front of
the declarations.  
```
// The loadImage2 function performs the simple act of returning the results of calling the Image function,
// which has been loaded from the Image API component. This function pulls in its ImageSource (another component)
// from the source asset, which is specified in the TextureAsset property in the Properties panel.
// A designer selects the asset from the drop-down in the Properties panel, and the code loads it,
// applying the baseImageStyle definitions for it.

export function loadImage2(asset: Asset, style: ImageStyle) {
  return Image({
    source: ImageSource.fromTextureAsset(asset),
    style: style,
  });
}
...
...
# Station 2 - Image from Asset
...
## Script

  
### StationAll-CustomUI-Library
...
// This type declaration for UITextureProps identifies the object textureAsset to be of Asset type.
// Asset type identifies objects that have been uploaded into the Asset Library.

export type UITextureProps = {
  textureAsset: Asset;
};
```
 In the primary script for this example (below), these objects are imported.  
...
...
# Station 2 - Image from Asset
...
## Script
...
### Station02-ImageFromAsset

 With the more general declarations moved to the Library file, this script now
contains declarations and objects that are specific to the CustomUI gizmo and its
display.
• Import:
  • At the top of the file, you can see the standard import declarations.
  • There is two items of interest in these declarations:
   • Import only what is needed.
   • Import from other files, like the Library.
   • See “TypeScript coding” below.
• The constructor `baseSimpleImage2Style` object is defined as an instance of an `ImageStyle` object with two properties specified.

  `const` baseSimpleImage2Style`:` `ImageStyle` `=` `{`height`:` `200`,` width`:` `200`};`
•  This object gets passed into the `loadImage2()` function to define the styling of the loaded image.
•  Class `SimpleImage2` declaration:
...
...
# Station 2 - Image from Asset
...
## Script
...
### Station02-ImageFromAsset
...
  • References the `UITextureProps` properties type definition which is imported from the Library.
  • Defines the height and width of the customUI panel. These properties are
different from the `ImageStyle` properties, which apply to the image that is imported. These values should be
greater than the values applied to `ImageStyle`.
•  `propsDefinition`:
  • This declaration defines the `textureAsset` property to be a `PropTypes` property. `PropTypes` is a reference to properties available on the Properties panel of the parent
object, which in this case is the CustomUI gizmo.
  • The Property that is referenced is of Asset property type, which means that a
drop-down is available in the panel from which you can select an asset to which
you have access.
  • In the Properties panel, the `textureAsset` property looks like the following:
...
...
# Station 2 - Image from Asset
...
## Script
...
### Station02-ImageFromAsset
...
 ![Image of properties panel with textureAsset property](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/487726045_686408240563797_5149593947553231907_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=hXczaVdso5sQ7kNvwFCqs6M&_nc_oc=Adml1fU7rrD6MdPlQZn87DCjxA-fkGc5tZxEHjZ8tbrkEkK5ij8EwYeT0TqPJG9qvNk&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=eAQwteWkTYZKMVUqcAa8FA&oh=00_A...
...
# Station 2 - Image from Asset
...
## Script
...
### Station02-ImageFromAsset
...
•  InitializeUI() method:
  • The returned `View()` object contains three simple elements.
  • `Text()` - a simple text label.
  • `loadImage2()` - this is a call to the function that is imported from the Library. Its
parameters are the value that a designer has selected in the textureAsset property in
the gizmo and the base styling object to apply to the loaded image.
   • What is returned is displayed in the `View()` object.
•  `register()` method:
  • Declared class must be registered with the abstract class UIComponent.
...
...
# Station 2 - Image from Asset
...
## Script

  
### StationAll-CustomUI-Library
...
### Station02-ImageFromAsset
...
...
# Station 2 - Image from Asset
...
## Key Learnings

  
### Meta Horizon Worlds learnings


• How to load a static image into a customUI panel
  • Image must be uploaded as a PNG to your Asset Library
• How to apply styling to images through the ImageStyle object
  • In the file, select ImageStyle and right-click to select Go to Definition. Available options for styling an image are displayed.

  
...
...
# Station 2 - Image from Asset
...
## Key Learnings
...
### TypeScript coding

  
#### Export

 You can make functions, classes, type definitions, and other objects available
to other TypeScript in your world by prefacing their declarations with the word:
export Exporting is useful for ensuring that you maintain consistency in your code
across the environment.  
...
...
# Station 2 - Image from Asset
...
## Key Learnings
...
### TypeScript coding
...
#### Import

 In the import declarations, you can see that a number of modules have been
commented out. In TypeScript, comments are prefaced with the following: `//` These modules were added in an earlier version in which more examples were
contained in the same file. However, when the examples were split into separate files
for clarity, these import modules were no longer needed.  
```
// Below declarations are from the UI module of the API.
// These imports might need to be added to this list to extend capabilities:
//  ViewStyle,
//  Callback,
//  Pressable,
//  Binding,
//  UINode,

import {UIComponent, Text, ImageStyle, Image, ImageSource} from 'horizon/ui';
```
 In the above, you can see that two modules (`Image` and `ImageSource`) appear in a different color in Visual Studio Code. Since the code that
...
...
# Station 2 - Image from Asset
...
## Key Learnings
...
### TypeScript coding
...
#### Import
...
requires these two modules was moved to the Library file, the editor is indicating
through color that these modules are valid and imported here yet are unused in the
script. Therefore, they can be moved into comments outside of the declaration or
deleted altogether.  
...
...
# Station 2 - Image from Asset
...
## Key Learnings
...
### TypeScript coding
...
#### Import from the Library

 In the following, you can see the syntax for importing objects from another
file:  
```
// This import is pulling in the loadImage2 function from the TypeScript file: StationAll-CustomUI-Library.
// This type of a Library file allows you to create single definitions of functions and types and then to
// use them consistently throughout your project.
import {loadImage2} from 'StationAll-CustomUI-Library';

// This import pulls in the UI texture properties type declaration from the Library file.
import {type UITextureProps} from 'StationAll-CustomUI-Library';
```
...
...
# Station 2 - Image from Asset
...
## Key Learnings
...
### TypeScript coding
...
#### Import from the Library
...
 The first reference pulls in the exported `loadImage2` function from the `StationAll-CustomUI-Library.ts` file. The second reference pulls in the exported `UITextureProps` type declaration from the `StationAll-CustomUI-Library.ts` file. Note the use of the type keyword.    ![Nav Logo](https://static.xx.fbcdn.net/rsrc.php/yE/r/3SoBlk8EqOQ.svg)


[Facebook](https://www.facebook.com/MetaHorizon/)
[Threads](https://www.threads.com/@metahorizon)
[X](https://x.com/MetaHorizon)
[Instagram](https://www.instagram.com/metahorizon/)
[YouTube](https://www.youtube.com/@MetaQuestVR)

 Learn
[Documentation](https://developers.meta.com/horizon-worlds/learn/documentation/)
...
...
# Station 2 - Image from Asset
...
## Key Learnings
...
### TypeScript coding
...
#### Import from the Library
...
[Blog](https://developers.meta.com/horizon/blog/)
[Forum](https://communityforums.atmeta.com/t5/Creator-Forum/ct-p/Meta_Horizon_Creator_Forums)

 Programs
[Meta Horizon Creator Program](https://developers.meta.com/horizon-worlds/programs/)

 My Creations
[My Worlds](https://horizon.meta.com/creator/worlds_all/?utm_source=horizon_worlds_creator)
[My Assets](https://horizon.meta.com/creator/assets/?utm_source=horizon_worlds_creator)
[Performance](https://horizon.meta.com/creator/performance/traces/?utm_source=horizon_worlds_creator)

 Privacy & Legal
[Privacy Policy](https://www.meta.com/legal/privacy-policy/)
[Legal](https://www.meta.com/legal/supplemental-terms-of-service/)

 © 2025 Meta
...
...
# Station 2 - Image from Asset
...
## Key Learnings
...
### TypeScript coding

  
#### Export
...
#### Import
...
#### Import from the Library
...
...
# Station 2 - Image from Asset
...
## Key Learnings

  
### Meta Horizon Worlds learnings
...
### TypeScript coding
...
...
# Station 2 - Image from Asset
...
## Additional Links
- [Meta home](https://developers.meta.com/horizon-worlds/)
- [Login](https://developers.meta.com/login/?redirect_uri=https%3A%2F%2Fdevelopers.meta.com%2Fhorizon-worlds%2Flearn%2Fdocumentation%2Ftutorial-worlds%2Fcustom-ui-examples-tutorial%2Fstation-2-image-from-asset%2F)
...
# Station 2 - Image from Asset

 At Station 2, you can explore how a basic image can be displayed in a custom UI.
...
...
# Station 2 - Image from Asset
...
This image is uploaded to the platform as a .PNG asset of type Texture. ![Image of Station 2](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/475777756_646003187937636_4205733443374841463_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=CPFow-fvtfoQ7kNvwHFdmuf&_nc_oc=AdmSHu1apUGzufatmbMxsT_xpljFvokovYQeC36RMLuPt8k_VbHqFyIO16W-YtUxCZ4&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=eAQwteWkTYZKMVUqcAa8FA&oh=00_AfexiDFWYFNPz7...
...
# Station 2 - Image from Asset
...
 The script defines a property on the CustomUI gizmo to allow for selecting the
Texture asset through the Properties panel. Then, in the desktop editor, you as the designer can select the image asset. In this manner, you can develop static, non-interactive assets outside of the
platform that simply must be displayed on a user interface.  
## Assets
...
## Script
...
## Key Learnings
...
## Additional Links
...
      Learn
# Station 2 - Image from Asset
...
