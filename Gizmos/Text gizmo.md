Source: https://developers.meta.com/horizon-worlds/learn/documentation/code-blocks-and-gizmos/use-the-text-gizmo

# Text gizmo

In Meta Horizon Worlds, the text gizmo is part of a suite of helper tools called [gizmos](About%20gizmos.md), which are designed to enhance the creation and interactivity of worlds. The text gizmo allows users to show static text or display dynamic text when combined with [scripts](https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/build-your-first-game/module-1-build-your-first-game) based on different triggers in the environment.

The text gizmo supports [markup](https://github.com/MHCPCreators/horizonCreatorManual/blob/main/HorizonTechnicalDoc.md#text-gizmo-markup) commands that allow you to change color, size, font, bold, italics, underline, vertical and horizontal offsets, line height, alignment, and more. The initial text can be set in the [Properties panel](../Desktop%20editor/Get%20started%20with%20Desktop%20Editor/User%20interface/Panels%20and%20Tabs%20in%20the%20desktop%20editor.md#properties-pane) using these markups, and dynamic changes can be done through [scripting](../Reference/core/Classes/TextGizmo.md).

**Note**: While you can access and use gizmos in the Meta Horizon Worlds [VR tool](../VR%20tools/Getting%20started/Create%20a%20new%20world%20in%20Meta%20Horizon%20Worlds.md), this topic focuses on the creator experience in the [desktop editor](../Get%20started/Install%20the%20desktop%20editor.md).

## Limitations

The total length of the text, including all markup, [is limited](https://github.com/MHCPCreators/horizonCreatorManual/blob/main/HorizonTechnicalDoc.md#text-gizmo-limitations). Additionally, when using text gizmo for internationalization and localization, consult
[Getting started with internationalization](https://developers.meta.com/horizon-worlds/learn/documentation/save-optimize-and-publish/internationalization/getting-started-with-internationalization), [Writing for localization](https://developers.meta.com/horizon-worlds/learn/documentation/save-optimize-and-publish/internationalization/writing-for-localization), and [Typescript for internationalization](https://developers.meta.com/horizon-worlds/learn/documentation/save-optimize-and-publish/internationalization/typescript-for-internationalization).

## Optimization

In order for worlds to be published, certain areas of your world need to [stay below 100% capacity](../Save,%20optimize,%20and%20publish/Creator%20capacity%20limits.md). Text gizmo is one such area of simulation and animation that needs your attention. Learn more about optimization in [Memory limits and performance metrics](../Save,%20optimize,%20and%20publish/Memory%20limits%20and%20performance%20metrics.md).

## Access the text gizmo

In the Meta Horizon Worlds desktop editor, do the following to access the text gizmo:

- In the desktop editor while in Build mode, select **Build** > **Gizmos** from the menu bar, search for “Text” in the search field.
- Select the text gizmo and drag it into the scene.
- You can now edit the new gizmo properties in the **Properties** panel.

## Text gizmo properties

The text gizmo properties can be configured in the **Properties** panel of the desktop editor or through scripting.

## Scripting

To create a dynamic text display, use Meta Horizon Worlds [text gizmo API](../Reference/core/Classes/TextGizmo.md). Text gizmos are Meta Horizon Worlds entities, see more examples in [Entity](../Reference/core/Classes/Entity.md#examples)

## What’s next?

Now you’ve been introduced to the text gizmo, further your learning with hands-on tutorials, [tutorial worlds](../Tutorials/Getting%20started/Getting%20started%20with%20tutorials/Access%20Tutorial%20Worlds.md) with completed samples, and developer guides:

* [Create your first world tutorial part 2 display the score](../Tutorials/Getting%20started/Create%20your%20first%20world%20tutorial,%20part%202.md#section-9-display-the-score)
* [Chop ‘n’ Pop sample world floating text manager](../Tutorials/Genre%20samples/Chop%20N%20Pop%20sample%20world/Module%205%20-%20Floating%20Text%20Manager.md)
* [Chop ‘n’ Pop sample world weapon systems pistol](../Tutorials/Genre%20samples/Chop%20N%20Pop%20sample%20world/Module%208%20-%20Weapon%20Systems%20-%20Handgun.md)
* [Simple gun](../Tutorials/Feature%20samples/Simple%20shooting%20mechanics%20tutorial/Module%203%20-%20Simple%20Gun.md)
* [Develop for web and mobile the HUD system](../Tutorials/Feature%20samples/Developing%20for%20web%20and%20mobile%20players%20tutorial/Module%202%20-%20The%20HUD%20System.md)
* [Meta Horizon Creator Program creators manual](https://github.com/MHCPCreators/horizonCreatorManual/blob/main/HorizonTechnicalDoc.md#text-gizmo)