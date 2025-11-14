Source: https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/custom-ui/creating-a-custom-ui-panel

# Create a custom UI panel

This topic shows you how to create a custom UI panel. To create one, you need a Custom UI gizmo and a [`UIComponent` script](/hw-docs/Desktop%20editor/Custom%20UI/Custom%20UI%20Styles.md).

## Before you begin

Before you begin building custom UIs in the desktop editor, enable auto-start and auto-stop of the simulation when previewing.

![Preview Configuration panel](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/481946976_667154419155846_1581585323779466962_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=futN-saJckAQ7kNvwGHAV54&_nc_oc=AdnozCktciUdcAvEVa5-B6Z75KVucg3j_LXMAbTOPSqtZdB9u216thxqZ-bh9YQHgfE&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=wEq3okRf_rGCvmDO95iThQ&oh=00_AfjWJkgu4hzCfF9_zTsj_I8n1lYXQ1I7B_8206TNLsPF_g&oe=69313AA4)

Unlike other physical entities in the world, a custom UI is entirely generated from TypeScript code. If auto-start is disabled when you begin the preview, then no code is executed when you enter the preview. Your custom UIs are not initialized, and are therefore invisible.

## Step 1: Create a Custom UI gizmo

On the menu bar, find the **Custom UI** gizmo in the **Build** dropdown menu > **Gizmos** and drag it into the **Scene** pane. Like other entities, you can control the position, scale, rotation, and visibility of the Custom UI gizmos, both from the **Properties** panel and from scripts.

The **Gizmos** panel is where you’d find the **Custom UI** gizmo.

![Select the Custom UI gizmo](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/480602105_661373913067230_2289491615613106605_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=r95x9YmnmdwQ7kNvwGExxt4&_nc_oc=AdkZJTsnyDzAbnr7DoKhnX_pp7pg7Z1S5AOYpBFoSshDF6eZB6v4OHlU5w-JN6SjGak&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=wEq3okRf_rGCvmDO95iThQ&oh=00_Afh0fiKLCyaJZ2DPe2jJ63nYx2qeA7zz4A6KcUwHIZb_BA&oe=69312EF1)

On the far right of the desktop editor, you’d find the Custom UI’s **Properties** panel.

A custom UI panel is represented by a Custom UI gizmo, which controls where and how the panel is placed in the world. You can place multiple Custom UI gizmos in the world.

In the past, creators often placed duplicate Custom UI gizmos in the world and controlled the visibility for each to create custom UI panels that displayed different content for each player. In most cases, you do not need to duplicate Custom UI gizmos. The Custom UI feature allows you to display different content to different players within the same Custom UI gizmo. See [Player-specific custom UI](/hw-docs/Desktop%20editor/Custom%20UI/Player-Specific%20Custom%20UI.md) for details.

## Step 2: Create a UI script

The Custom UI gizmo does nothing unless you attach a script to it. The script controls the content of the panel. Next, [create a TypeScript script using the desktop editor](/hw-docs/Scripting/Get%20started%20with%20TypeScript/Adding%20an%20IDE%20to%20the%20desktop%20editor.md). To use the Custom UI functionalities, include `horizon/ui` module for TypeScript API v2.0.0 from the **Scripts** dropdown menu > **Settings** (the gear button on the top right of Scripts menu). The examples here are for TypeScript API v2.0.0.

![Create a UI script](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/480522573_661373903067231_3023285926290038565_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=sDDwToLbXlQQ7kNvwHzFh4A&_nc_oc=AdmlmGN2tikSIlmD68e81cv9pu19wO9njmNclZXD3UDvGNN5I6PvkA318i2AHcPH9kA&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=wEq3okRf_rGCvmDO95iThQ&oh=00_AfhaVrL0jVs809rsVEbOth6v0rC2kdlaU2zJDJbQgaSdNA&oe=6931311A)

In your Custom UI script, you can add `preStart()` and `start()` methods in addition to the `initializeUI()` method. These methods are called in the following order:

# `initializeUI()`

# `preStart()`

# `start()`

For more information, see [TypeScript Script Lifecycle](/hw-docs/Scripting/TypeScript%20Script%20Lifecycle.md).

## Step 3: Create a Hello World template

Write the following code in your script. Notice that the component extends the `UIComponent` class, instead of a regular `Component`. [UIComponent Class](/hw-docs/Desktop%20editor/Custom%20UI/UIComponent%20class.md) describes what each line means in more detail, but this template is a good starting point for now.

```
import 'horizon/core';
import {UIComponent, View, Text} from 'horizon/ui';

class HelloWorld extends UIComponent {
  initializeUI() {
    return View({
      children: Text({text: 'Hello World', style: {color: 'black'}}),
      style: {backgroundColor: 'white'},
    });
  }
}

UIComponent.register(HelloWorld);
```

## Step 4: Attach the script to the gizmo

Like all script components, the same `UIComponent` can be attached to more than one Custom UI gizmo. Those Custom UI gizmos will then display the same content.

To achieve [player-specific custom UIs](/hw-docs/Desktop%20editor/Custom%20UI/Player-Specific%20Custom%20UI.md) and heads-up display (HUDs), you do not need to duplicate Custom UI gizmos or scripts in most cases. The framework provides tools for you to build custom UI panels that display different content for different players.

You can find the registered `HelloWorld` component in the **Script** section of the **Properties** panel.

![Attach the HelloWorld script to the Custom UI entity close up](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/480666001_661373906400564_4241762125279907481_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=P_nRDxifLrYQ7kNvwFKQCPT&_nc_oc=AdnCM88BLIlAXs3Xgm1j3__DypB2nIL6ZX8AfknSVV7iu0Z3fZQ8CbqOTrKmp1lRFCg&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=wEq3okRf_rGCvmDO95iThQ&oh=00_AfjxnOt392oCMFCwuStEERfrlgDo5LrHtlSn1rMJYA_hHg&oe=69311525)

After you attach the `HelloWorld` script to the **Custom UI** entity, click Play to enter the preview mode. If you haven’t already, ensure you have turned on **Auto-start simulation on Preview entry** and **Auto-stop simulation on Preview exit** in [**Preview Configuration**](/hw-docs/Desktop%20editor/Get%20started%20with%20Desktop%20Editor/Preview%20mode.md) to successfully complete this tutorial.

While in preview, you will be prompted to press the “E” key when your avatar is within a certain distance from the UI panel. Press “E” to see the “Hello World” panel.

**Note**: You can choose the display mode based on your preference in the **Properties** panel > **Visual & Interaction** > **Display mode**. The following image shows the “Hello World” panel in the **Spatial** display mode. Additionally, you can [resize the panel](/hw-docs/Desktop%20editor/Custom%20UI/UIComponent%20class.md#properties-panelheight-and-panelwidth) and place it wherever you like.

![Hello World custom UI panel](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/481075889_661373909733897_3770997712728765389_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=dNnmIJCrGgIQ7kNvwFuiHnB&_nc_oc=Adk0OmSmIbE2YU3tNvxPDGjnsx25OMN9HCsWXEYmsv07iyI0NoiWBaULaqy3mKsNarA&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=wEq3okRf_rGCvmDO95iThQ&oh=00_AfjOqDtwjGzSE3JqyvQXc8mRvBO0jnBvTt2-51IkbpHoMA&oe=69312B67)