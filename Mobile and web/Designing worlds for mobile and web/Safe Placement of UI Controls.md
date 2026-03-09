---
source: https://developers.meta.com/horizon-worlds/learn/documentation/create-for-web-and-mobile/designing-worlds-for-mobile-and-web/safe-placement-of-ui-controls
---

# Safe Placement of UI Controls

When designing your game’s user interface, consider both the gameplay controls and transient platform UI (such as notifications, NUX prompts, and world chat). These elements can partially or permanently obscure your interface.

The following illustration provides general guidance for where you can place UI, combining both desktop and mobile surfaces:

![](../../_assets/images/554ec16483b568ad5b73785706caf6b62e2f0071872ee37be7d1d7b98ad17030.png)*Mobile (@852x393 screen - iPhone 16)*

## Portrait orientation considerations

When designing for portrait orientation on mobile devices, the available screen space and UI placement considerations differ significantly from landscape mode. Portrait orientation typically provides different safe zones due to status bars, notches, and navigation areas.

When testing your world’s UI for portrait orientation:

- Use the [**Preview Configuration**](../../Desktop%20editor/Get%20started%20with%20Desktop%20Editor/Preview%20mode.md#setting-the-preview-device) options to ensure safe zones are kept clear to avoid overlapping UI.
- Consider how UI elements stack vertically rather than horizontally in portrait mode.
- Test with different device models to account for various screen aspect ratios and safe areas.

**Note:** You can configure different camera parameters for portrait and landscape orientations using the [spawn point gizmo](../../Gizmos/Spawn%20point%20gizmo.md#mobile-camera-options) to optimize the visual experience for each orientation.

* ![](../../_assets/images/c778e4848809d1b5c3fe5abc66bd66c6ad4308fe52f0e37a176f9da3c2901ca5.png) Unobstructed.
* ![](../../_assets/images/18f30b8b0daa30e032ead0e2d84cc33daf27d61279e18e0a59b33f7a5c596e03.png) Potentially obstructed.
* ![](../../_assets/images/476dc824dc4328db8a06dfb6a42e961c475cbba609a9c0179364f476c18c2aa4.png) Permanently obstructed.

> **Note:** The amount of space will vary depending on the features your world has enabled, how you set up grabbables, and the user’s screen size.

Always test your world on both mobile and desktop, to check for any overlapping or obscured UI.

For a deeper look at why these regions, let’s take a look at each surface with all possible UI states enabled:

![](../../_assets/images/04446270a23159f9a2570eb606858471b051f30d19bde45ecf6fc518b1331eda.png)*Mobile (@852x393)*

Taking into account the typical usage percentage of each gameplay control and the frequency of each transient UI element, the per-surface safe zones look like this:

![](../../_assets/images/82be2871819d687c08b843f9379d1e803d447e9e69dd545f0ce232f5d6c756ee.png)*Mobile (@852x393)*

## Mobile

The most important thing to note for mobile controls is that they are contextual. The number of on-screen buttons is determined by how you set up your grabbables.

For example, if you have a simple world with grabbables that have either one or no actions, then you’ll have more available UI space than a world using complex grabbables, custom input etc.

No held item:

Item with Primary & Secondary actions:

![](../../_assets/images/ace5b4b6be719866f19734614c5c5b5a45af499a3516f6c9ee47e65b1e9ede56.png)

Item with Primary, Secondary and Tertiary actions Holstering enabled on world:

![](../../_assets/images/5241acde4c373a84cd872ca2bd32f85e8f6ad4f72b0789fec2ae35485a64b597.png)

Item with Primary, Secondary and Tertiary actions Holstering enabled on world Using Custom input:

![](../../_assets/images/7fd4bdfeaa6881013e97504f43fc3e0ea404601825486c4c44de08629842a35b.png)

## Desktop

Desktop controls are also contextual, but they’re limited to a list anchored in the bottom right portion of the screen.

You generally have more space available on desktop, because the on-screen elements are confined to the top left, top right, and bottom right corners.

![](../../_assets/images/38b95996a8b1f3b99db3f88520510ae59b15e5b5c29d651cc949b708f4522904.png)*Desktop (@1920x1080)*

![](../../_assets/images/76318208e0bc4c44529fe5c101569067a910fff9022dd1ef8c13ecfab1432e8f.png)*Desktop (@1920x1080)*

![](../../_assets/images/5bfb468aea2cc49fa35ae66b429221a46d7a4368feba9b1d727fdbb0a0a262d1.png)*Desktop (@1920x1080)*