Source: https://developers.meta.com/horizon-worlds/learn/documentation/typescript/upgrade-world-to-typescript-api-v200

# Upgrade World to TypeScript API v2.0.0

If you have created a world using a previous version of the TypeScript API, we strongly recommend that you upgrade it to API v2.0.0 for the following reasons:

* All new API features are landing in v2.0.0 first. They are backported selectively and typically only upon request.
* All future development efforts are focused on API v2.0.0. Bug fixes are first applied to that API version.
* Previous versions of the API are no longer being updated.

This doc outlines some basic changes to address the majority of issues during upgrade.

For the official Meta documentation, please see [Meta Horizon TypeScript V2 changes](API%20references%20and%20examples/Horizon%20TypeScript%20V2%20Changes.md).

## Upgrading your world

You can use the following steps to upgrade your world to API v2.0.0 and to address most of your validation issues. The remaining steps are likely to be dependent on the nature of your implementation.

**To upgrade your scripts**

- Create a clone of your world. Append v2.0.0 to the name. For example: `My World v2.0.0`.
- Open `My World v2.0.0` in the desktop editor.
- Click the scripts icon.

  <details>
  <summary>The scripts icon.png</summary>
  
  <p></p>
  
  [The scripts icon.png](../image_data/f9e78b54bca2be6c6cf0373e78800f6f3ce8e131e5453fec8278bdaa57c9a190.md)
  
  ### Overview
  This image depicts a simple interface element consisting of two icons placed side-by-side against a dark background. The overall composition is minimalistic, with a focus on the two distinct icons.
  
  ### Key Elements
  - **Visual description**: The first icon resembles a pair of angled brackets (`<>`) and the second icon is a downward-pointing arrow (`▼`).
  - **Location**: The first icon is positioned on the left, while the second icon is on the right.
  - **Contents**: The first icon contains no text or additional elements, only the bracket shapes. The second icon has a small triangle pointing downwards.
  - **Visual styling**: Both icons are white, with a thin black outline. They are evenly spaced apart.
  
  ### Visual Flow / Relationships
  The two icons are arranged horizontally, with no connecting lines or arrows. There is no implied reading order as both elements are equally prominent within the frame.
  
  </details>
  
  <p></p>
  
  
- In the Scripts panel, click the **Settings** icon.

  <details>
  <summary>The settings icon.png</summary>
  
  <p></p>
  
  [The settings icon.png](../image_data/e7e492cc56ddb891a8569abca83ea4fb44241f500912aec979d1d418c0fb6e52.md)
  
  ### Overview
  This image depicts a user interface element within a software application, specifically a toolbar or menu area. It includes a search bar, a plus sign, a refresh icon, a settings gear icon, and a vertical ellipsis (three dots).
  
  ### Key Elements
  - **Search Bar**: Located at the top-left, it has a black background and contains a white magnifying glass icon.
  - **Plus Sign**: Positioned next to the search bar, it is a simple white plus symbol.
  - **Refresh Icon**: Situated to the right of the plus sign, it features a circular arrow design.
  - **Settings Gear Icon**: A red circle highlights this element, indicating its importance. It is a white gear icon.
  - **Vertical Ellipsis**: Found at the far right, it consists of three vertically stacked dots.
  
  ### Visual Flow / Relationships
  The elements are arranged horizontally from left to right. The search bar and plus sign are grouped together, followed by the refresh icon, then the settings gear icon, and finally the vertical ellipsis. The refresh icon and settings gear icon are closely positioned, suggesting they might be related functions.
  
  </details>
  
  <p></p>
  
  
- In the **Script Settings** panel, note all API modules from prior versions that are currently enabled.

  **Note:** Any modules from prior versions that are currently enabled will remain enabled after switching to v2.0.0. This can cause problems with script execution. You should map them to their v2.0.0 equivalents, and then disable them before upgrading.
- Select **2.0.0** from the **API** version list.

  <details>
  <summary>The API version list.png</summary>
  
  <p></p>
  
  [The API version list.png](../image_data/2f767d574ce46c0c9bcb5a96bde2c21e19092a264e75bf0be026ad6d8b9d1ff7.md)
  
  ### Overview
  This image depicts a settings panel for configuring script settings, specifically focusing on the API version selection. The interface is minimalistic with a dark theme and includes a dropdown menu for selecting the API version.
  
  ### Key Elements
  - **Visual description**: A dropdown menu with a red bounding box highlighting the version number.
  - **Location**: Positioned centrally within the settings panel.
  - **Contents**: The text "2.0.0" is displayed within the dropdown menu.
  - **Visual styling**: The dropdown menu has a white background with black text, and the version number is enclosed in a red bounding box.
  
  ### Visual Flow / Relationships
  The most prominent visual element is the highlighted dropdown menu showing the API version "2.0.0". There are no arrows or lines connecting elements, and the layout is straightforward with a clear focus on the API version selection.
  
  </details>
  
  <p></p>
  
  
- Enable the API modules that you use in your world.

  <details>
  <summary>Scripts settings.png</summary>
  
  <p></p>
  
  [Scripts settings.png](../image_data/77b11caf4d6ddc4e98ea226cd2666f7d0a4ee2957af3be6fbfe657fd405c9f45.md)
  
  ### Overview
  This image depicts a settings dialog box titled "Script Settings." It contains a list of API versions with checkboxes next to them, allowing users to select which APIs to enable. There are two buttons at the bottom for canceling or applying changes.
  
  ### Key Elements
  - **Title**: "Script Settings" located at the top-left corner.
  - **API Version**: A dropdown menu showing "2.0.0" as the selected version.
  - **List of APIs**: A vertical list of API names such as "horizon/experimental," "horizon/2p," etc., each followed by a checkbox.
  - **Checkboxes**: Toggle switches next to each API name, indicating whether the API is enabled or not.
  - **Buttons**: Two buttons labeled "Cancel" and "Apply" at the bottom, with "Apply" highlighted in blue.
  
  ### Visual Flow / Relationships
  The most prominent visual element is the list of APIs, as it occupies the majority of the space. The checkboxes are arranged vertically under each API name. The "Apply" button is visually emphasized due to its blue color, suggesting it is the primary action to take after making selections. The "Cancel" button is less emphasized but still clearly visible.
  
  </details>
  
  <p></p>
  
  
- Click **Apply**.

## Fixing script validation errors

Each of your scripts used for a prior version of the Typescript API is likely to contain errors. You can perform the following to address most upgrade errors.

**Note**: We recommend that you fix these errors file by file rather than all at once. If possible, perform fixes in a file that is simple and testable first. When fixing the scripts, you may also find it helpful to create a copy of each line, comment it out, and then perform the update.

### Fix imports

All import statements must be updated to point to API v2.0.0 and their equivalents.

#### General:

| **Search string** | @early\_access\_api/ |
| --- | --- |
| **Prior version** | import { UIComponent, View, Text } from “@early\_access\_api/ui”; |
| **Replace string** | horizon/ |
| **New version** | import { UIComponent, View, Text } from “horizon/ui”; |

**/v1 to /core:**

In prior versions of the API, the main module was the /v1 module. In API v2.0.0, the main module has been renamed to /core.

Following examples assume you have performed the above changes.

| **Search string** | horizon/v1 |
| --- | --- |
| **Prior version** | import \* as hz from `horizon/v1`; |
| **Replace string** | `horizon/core` |
| **New version** | import \* as hz from `horizon/core`; |

### Fix Props and class declarations

The Props declarations outside of the class declaration are no longer necessary. The static propsDefinition are simplified.

**Prior version**

```
type UIComponentGetCandyProps = {
  triggerZone: hz.Entity
};

class UIComponentGetCandy extends UIComponent {
  static propsDefinition: hz.PropsDefinition = {
    triggerZone: { type: hz.PropTypes.Entity }
};
```

**API v2.0.0 version**

```
class UIComponentGetCandy extends UIComponent<typeof UIComponentGetCandy> {
  static propsDefinition = {
    triggerZone: { type: hz.PropTypes.Entity }
  };
```

#### Changes

* The type declaration outside of the class declaration can be deleted in all cases.
* The `<Props>` declaration that is part of the class is changed to `<typeof MyClassName>`.
* Type information in the static props declaration is no longer needed.

### Fix properties references

Some scripts have references to properties that are exposed in the **Properties** panel in the desktop editor. For example:

```
static propsDefinition = {
    triggerZone: { type: hz.PropTypes.Entity }
};
```

Elsewhere in your scripts, you may have references like:

```
myVar = myFunction(this.props.triggerZone)
```

These are likely to be broken. The general rule in API v2.0.0 is that property references cannot be passed directly into function calls and event listeners. Instead, they must be captured to a variable first and then passed in.

This can be fixed in the following manner:

```
  let mv: hz.Entity | undefined = this.props.triggerZone
  myVar = myFunction(mv)
```

### Upgrade events

In API v2.0.0, event names have changed.

**Note**: The `HorizonEvent` type is no longer available in API v2.0.0. Please use `LocalEvent` or `NetworkEvent`.

| **Previous event name** | **API v2.0.0 event name** |
| --- | --- |
| `sendNetworkEntityEvent` | `sendNetworkEvent` |
| `sendEntityEvent` | `sendLocalEvent` |
| `connectEntityEvent` | `connectLocalEvent` |
| `connectBroadcastEvent` | `connectLocalBroadcastEvent` |
| `sendBroadcastEvent` | `sendLocalBroadcastEvent` |

### Iterate and Test

The above changes should address the majority of your validation errors in upgrading your TypeScript to API v2.0.0.

Additional errors may need to be debugged and tested.

If possible, you should test the results of individual scripts as you address issues. As needed, you should write test code or debugger messages to verify proper execution of your code.