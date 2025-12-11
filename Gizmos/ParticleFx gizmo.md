Source: https://developers.meta.com/horizon-worlds/learn/documentation/code-blocks-and-gizmos/particlefx-gizmo

# ParticleFx gizmo

The ParticleFX [gizmo](About%20gizmos.md) is a helper tool that allows you to easily add visual effects such as smoke, sparks, and confetti, making worlds more dynamic and visually engaging. Some use cases of particle effects include adding game event feedback with explosions and hit sparks, or enhance immersion with confetti bursts and water splashes.

The following image is taken from the [sample world](../Tutorials/Getting%20started/Getting%20started%20with%20tutorials/Tutorial%20Prerequisites.md) called [Chop-n-pop](https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/chop-n-pop-sample-world/module-1-setup) where the ParticleFX gizmos provide the sparkles around the loot.

![the ParticleFx gizmo is at work in the sample world](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/507682304_743560894848531_5873676846396048984_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=Zd3Z3AtyfwwQ7kNvwEYllzR&_nc_oc=Adk4-BSgW6OL3C62I43ml6aYc7o8sIt3xuzWrsP6M-vpQ-8jT0_kOYxI4gCcz8LcrfZyBtiQ_aIf2FC82M4d7_D2&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=WS4sWycrUNKeX2RHgky9vg&oh=00_Afl2QtVRL1Zrd-NNsUlvljgrvaCg1pdxarg8eXxjqHb4Cw&oe=6955900A)

## Limitations

[Performance](../Performance/Performance%20best%20practices/CPU%20and%20TypeScript%20optimization%20and%20best%20practices.md) can be impacted if too many complex effects are used at once.

## Access the ParticleFx gizmo

While you can access and configure the gizmos in the [VR tool](../VR%20tools/Getting%20started/Create%20a%20new%20world%20in%20Meta%20Horizon%20Worlds.md), the following steps show you how to access the ParticleFx gizmo from the desktop editor and add it to the [scene pane](../Desktop%20editor/Get%20started%20with%20Desktop%20Editor/User%20interface/Panels%20and%20Tabs%20in%20the%20desktop%20editor.md#scene-pane).

- In the desktop editor while in the Build mode, select **Build** > **Gizmos** from the menu bar, search for “particle” in the search field.
- Select the ParticleFx gizmo and drag it into the scene.
- You can now edit the new gizmo properties in the [**Properties panel**](../Desktop%20editor/Get%20started%20with%20Desktop%20Editor/User%20interface/Panels%20and%20Tabs%20in%20the%20desktop%20editor.md#properties-pane).

## Properties

The ParticleFx gizmo is an entity. All objects in a world are represented by entities. [Entities](../Reference/core/Classes/Entity.md) have their respective properties such as position, rotation, and scale. In the **Properties** panel, you can edit the gizmo’s transformation fields to configure its **Position**, **Rotation**, and **Scale**.

In the **Emission** section, additional properties are available to customize the ParticleFx gizmo.

**Play on Start** controls whether the ParticleFx gizmo auto-starts the effect when the world starts.

**Looping** sets the effect to loop or play once.

**Preset** allows you to select from an array of particle effects in its dropdown menu.

**Preview** allows creators to see how the effect will look while still in the [Build Mode](../Desktop%20editor/Get%20started%20with%20Desktop%20Editor/User%20interface/Build%20and%20Preview%20Modes.md). This feature is particularly useful for fine-tuning the particle effect during the building phase. Click **Play** to start the preview. Click **Stop** to stop the preview.

For more information on the ParticleFx gizmo properties, see the [MHCP creator’s manual](https://github.com/MHCPCreators/horizonCreatorManual/blob/main/HorizonTechnicalDoc.md#particlefx-gizmo).

The following image shows the ParticleFx gizmo is at work in the [Build mode](../Desktop%20editor/Get%20started%20with%20Desktop%20Editor/User%20interface/Build%20and%20Preview%20Modes.md).

**Note**: Once the configuration is complete in the **Properties** panel, you can immediately see the effect in either the [Build Mode](../Desktop%20editor/Get%20started%20with%20Desktop%20Editor/User%20interface/Build%20and%20Preview%20Modes.md) by clicking **Play** next to **Preview** or enter the [Preview mode](../Desktop%20editor/Get%20started%20with%20Desktop%20Editor/Preview%20mode.md).

![the ParticleFx gizmo is at work in the Build mode](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/508169171_743560911515196_8638356247995966737_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=w84CHsGMyAkQ7kNvwF5_oba&_nc_oc=AdnWvoVMp5-URyKHRI2h-Xzw7pnHiqwa5a7pqiX5MMevKKveq7tvJSJd-eSPKg3aI7xg12Vymxs6D7GEO5WWz4mm&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=WS4sWycrUNKeX2RHgky9vg&oh=00_AfmL3fRJRvtXXZBiemWo5_ihqf8y1eYMzuIY5uRhU3_Atw&oe=69558283)

The following image shows the ParticleFx gizmo is at work in the [Preview mode](../Desktop%20editor/Get%20started%20with%20Desktop%20Editor/Preview%20mode.md).

![the ParticleFx gizmo is at work in the Preview mode](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/506729784_743560914848529_4035407153014293926_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=PaywB0Eld0YQ7kNvwGKNZmX&_nc_oc=AdnpcxcNR-MtX8m8jYwxWUiT1VX-cL8xr-GGX04ROqJuoM10cMGib8Uat81iqzEDo7xkrY9FTM5rj9x3hVURIEEw&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=WS4sWycrUNKeX2RHgky9vg&oh=00_Afn0lcX6k2itrM-MEzgZQuNTbOxVp3CbFEjQVlHryE5Gcg&oe=69556FE3)

## Scripting

The ParticleFX Gizmo can also be controlled using [ParticleGizmo](../Reference/core/Classes/ParticleGizmo.md) API, allowing you to play, stop, and configure effects programmatically. For additional resources, see the [sample world](../Tutorials/Getting%20started/Getting%20started%20with%20tutorials/Tutorial%20Prerequisites.md) called [Chop-n-pop module 11 loot system](https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/chop-n-pop-sample-world/module-11-loot-system). You can find this world in [**Creation Home**](../Desktop%20editor/Get%20started%20with%20Desktop%20Editor/Create%20a%20New%20World.md).

## What’s next?

Now that you’ve been introduced to the ParticleFx gizmo, further your learning with hands-on tutorials and related developer guides:

* [Chop-n-pop module 11 loot system](https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/chop-n-pop-sample-world/module-11-loot-system)
* [Meta Horizon Creator Program’s creator manual on the ParticleFx gizmo](https://github.com/MHCPCreators/horizonCreatorManual/blob/main/HorizonTechnicalDoc.md#particlefx-gizmo)
* [Example scripts library](../Scripting/API%20references%20and%20examples/Example%20scripts%20library.md#particlefx-gizmo-example-script)
* [Scripting using TypeScript](../Scripting/Scripting%20using%20TypeScript.md)