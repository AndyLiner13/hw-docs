Source: https://developers.meta.com/horizon-worlds/learn/documentation/code-blocks-and-gizmos/use-the-text-gizmo

# Text gizmo

In Meta Horizon Worlds, the text gizmo is part of a suite of helper tools called [gizmos](/hw-docs/code-blocks-and-gizmos/about-gizmos), which are designed to enhance the creation and interactivity of worlds. The text gizmo allows users to show static text or display dynamic text when combined with [scripts](/hw-docs/tutorial-worlds/build-your-first-game/module-1-build-your-first-game) based on different triggers in the environment.

The text gizmo supports [markup](https://github.com/MHCPCreators/horizonCreatorManual/blob/main/HorizonTechnicalDoc.md#text-gizmo-markup) commands that allow you to change color, size, font, bold, italics, underline, vertical and horizontal offsets, line height, alignment, and more. The initial text can be set in the [Properties panel](/hw-docs/desktop-editor/getting-started/user-interface/UI-panels-and-tabs#properties-pane) using these markups, and dynamic changes can be done through [scripting](/horizon-worlds/reference/2.0.0/core_textgizmo).

**Note**: While you can access and use gizmos in the Meta Horizon Worlds [VR tool](/hw-docs/vr-creation/getting-started/create-a-new-world-in-horizon), this topic focuses on the creator experience in the [desktop editor](/hw-docs/get-started/install-desktop-editor).

## Limitations

The total length of the text, including all markup, [is limited](https://github.com/MHCPCreators/horizonCreatorManual/blob/main/HorizonTechnicalDoc.md#text-gizmo-limitations). Additionally, when using text gizmo for internationalization and localization, consult
[Getting started with internationalization](/hw-docs/save-optimize-and-publish/internationalization/getting-started-with-internationalization), [Writing for localization](/hw-docs/save-optimize-and-publish/internationalization/writing-for-localization), and [Typescript for internationalization](/hw-docs/save-optimize-and-publish/internationalization/typescript-for-internationalization).

## Optimization

In order for worlds to be published, certain areas of your world need to [stay below 100% capacity](/hw-docs/save-optimize-and-publish/capacity-limits-in-horizon). Text gizmo is one such area of simulation and animation that needs your attention. Learn more about optimization in [Memory limits and performance metrics](/hw-docs/save-optimize-and-publish/memory-limits-horizon-worlds).

## Access the text gizmo

In the Meta Horizon Worlds desktop editor, do the following to access the text gizmo:

- In the desktop editor while in Build mode, select **Build** > **Gizmos** from the menu bar, search for “Text” in the search field.
- Select the text gizmo and drag it into the scene.
- You can now edit the new gizmo properties in the **Properties** panel.

## Text gizmo properties

The text gizmo properties can be configured in the **Properties** panel of the desktop editor or through scripting.

## Scripting

To create a dynamic text display, use Meta Horizon Worlds [text gizmo API](/horizon-worlds/reference/2.0.0/core_textgizmo). Text gizmos are Meta Horizon Worlds entities, see more examples in [Entity](/horizon-worlds/reference/2.0.0/core_entity#examples)

## What’s next?

Now you’ve been introduced to the text gizmo, further your learning with hands-on tutorials, [tutorial worlds](/hw-docs/tutorial-worlds/getting-started-with-tutorials/access-tutorial-worlds) with completed samples, and developer guides:

* [Create your first world tutorial part 2 display the score](/hw-docs/get-started/create-your-first-world-continued#section-9-display-the-score)
* [Chop ‘n’ Pop sample world floating text manager](/hw-docs/tutorial-worlds/chop-n-pop-sample-world/module-5-floating-text-manager)
* [Chop ‘n’ Pop sample world weapon systems pistol](/hw-docs/tutorial-worlds/chop-n-pop-sample-world/module-8-weapon-systems-pistol)
* [Simple gun](/hw-docs/tutorial-worlds/simple-shooting-mechanics-tutorial/module-3-simple-gun)
* [Develop for web and mobile the HUD system](/hw-docs/tutorial-worlds/developing-for-web-and-mobile-players-tutorial/module-2-the-hud-system)
* [Meta Horizon Creator Program creators manual](https://github.com/MHCPCreators/horizonCreatorManual/blob/main/HorizonTechnicalDoc.md#text-gizmo)