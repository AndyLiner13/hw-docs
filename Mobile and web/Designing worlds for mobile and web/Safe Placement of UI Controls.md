---
source: https://developers.meta.com/horizon-worlds/learn/documentation/create-for-web-and-mobile/designing-worlds-for-mobile-and-web/safe-placement-of-ui-controls
---

# [Safe Placement of UI Controls](#safe-placement-of-ui-controls)

When designing your game’s user interface, consider both the gameplay controls and transient platform UI (such as notifications, NUX prompts, and world chat). These elements can partially or permanently obscure your interface.

The following illustration provides general guidance for where you can place UI, combining both desktop and mobile surfaces:

![](../../.assets/images/f0e3c4be912a425cd8cc3a3c43e32cd10847d5115a4a9a2789cc892481f28c3a.png)*Mobile (@852x393 screen - iPhone 16)*

## [Portrait orientation considerations](#portrait-orientation-considerations)

When designing for portrait orientation on mobile devices, the available screen space and UI placement considerations differ significantly from landscape mode. Portrait orientation typically provides different safe zones due to status bars, notches, and navigation areas.

When testing your world’s UI for portrait orientation:

1. Use the [**Preview Configuration**](../../Desktop%20editor/Get%20started%20with%20Desktop%20Editor/Preview%20mode.md#setting-the-preview-device) options to ensure safe zones are kept clear to avoid overlapping UI.
2. Consider how UI elements stack vertically rather than horizontally in portrait mode.
3. Test with different device models to account for various screen aspect ratios and safe areas.

**Note:** You can configure different camera parameters for portrait and landscape orientations using the [spawn point gizmo](../../Gizmos/Spawn%20point%20gizmo.md#mobile-camera-options) to optimize the visual experience for each orientation.

- ![](../../.assets/images/c778e4848809d1b5c3fe5abc66bd66c6ad4308fe52f0e37a176f9da3c2901ca5.png) Unobstructed.
- ![](../../.assets/images/18f30b8b0daa30e032ead0e2d84cc33daf27d61279e18e0a59b33f7a5c596e03.png) Potentially obstructed.
- ![](../../.assets/images/476dc824dc4328db8a06dfb6a42e961c475cbba609a9c0179364f476c18c2aa4.png) Permanently obstructed.

> [!Note]
>
> The amount of space will vary depending on the features your world has enabled, how you set up grabbables, and the user’s screen size.

Always test your world on both mobile and desktop, to check for any overlapping or obscured UI.

For a deeper look at why these regions, let’s take a look at each surface with all possible UI states enabled:

![](../../.assets/images/da4006e95e3f13b1103481142f3f7a7374eb225efc1bed72b96900674fc1cb90.png)*Mobile (@852x393)*

Taking into account the typical usage percentage of each gameplay control and the frequency of each transient UI element, the per-surface safe zones look like this:

![](../../.assets/images/5e8200dc19356b61bc151182f42b9ef981ce8df174981fe44046c0ea8893b41d.png)*Mobile (@852x393)*

## [Mobile](#mobile)

The most important thing to note for mobile controls is that they are contextual. The number of on-screen buttons is determined by how you set up your grabbables.

For example, if you have a simple world with grabbables that have either one or no actions, then you’ll have more available UI space than a world using complex grabbables, custom input etc.

No held item:

Item with Primary & Secondary actions:

![](../../.assets/images/c8a42e3fe65f36894126a055cbde85bb2b7944f1d820f1bf01e630ccc0270eac.png)

Item with Primary, Secondary and Tertiary actions Holstering enabled on world:

![](../../.assets/images/752b195e2053e790c4652031cd562dd6c6c930695a1a57b068a864222d4809c2.png)

Item with Primary, Secondary and Tertiary actions Holstering enabled on world Using Custom input:

![](../../.assets/images/194812b504c9d53036506f5de80fb4aa58623a7ba2af73b830a742463891dd31.png)

## [Desktop](#desktop)

Desktop controls are also contextual, but they’re limited to a list anchored in the bottom right portion of the screen.

You generally have more space available on desktop, because the on-screen elements are confined to the top left, top right, and bottom right corners.

![](../../.assets/images/38b95996a8b1f3b99db3f88520510ae59b15e5b5c29d651cc949b708f4522904.png)*Desktop (@1920x1080)*

![](../../.assets/images/76318208e0bc4c44529fe5c101569067a910fff9022dd1ef8c13ecfab1432e8f.png)*Desktop (@1920x1080)*

![](../../.assets/images/5bfb468aea2cc49fa35ae66b429221a46d7a4368feba9b1d727fdbb0a0a262d1.png)*Desktop (@1920x1080)*

