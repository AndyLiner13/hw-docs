Source: https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/assets/asset-templates

# Asset Templates

An asset template is an asset that has the type “Template”. You can create one from a complex object in your Hierarchy. Asset templates work just like legacy assets (like a 3D Model), except that they include powerful change propagation and versioning features.

Like legacy assets, asset templates can include:

* Multiple objects in a hierarchy, with a root object and child objects.
* Properties that define behaviors. For example, grabbables, and objects with physics.
* An attached script component.

But in addition to these features, asset templates also support the following:

| Feature | Description |
| --- | --- |
| Change Propagation | When you need to update all of the entities spawned from an asset template, you don’t have to update each instance by hand. Instead, you can update the asset template itself, then publish your changes, and they’ll propagate to all of the instances.   This synchronizes your changes across all of the worlds where you used that asset template. |
| Property Overrides | Allows you to customize asset template instances by overriding inherited property values.    If you want to apply those changes to all of the other instances of the asset template, you can push them back to the asset template, and then republish. |
| Versioning | Each time you publish a change to an asset template, it creates a new version of that asset template. This version information is added to the version history of changes.    Keeping track of the version history lets you revert to any previous version of the asset template. |

> **Note**: Meta Horizon Worlds Asset Templates are similar to [Prefabs in Unity](https://docs.unity3d.com/Manual/Prefabs.html).

## When to use an asset template

Asset templates are useful when you want to reuse an asset multiple times in your worlds, and you want the ability to update all of the instances in one-fell-swoop.

You can create entities from your asset template, and when you make changes to the asset template, you publish them, and the instance entities are updated. This makes it easy for you to update all of the instances in all of your worlds, using just one operation.

## Example

Consider a scenario where you want to create a forest in your world, and you want to create it using many instances of the same tree.

Now imagine that you need to update all of the tree objects. If you’d created the trees from a legacy asset, then you’d have to manually replace every tree in your forest with an updated one. This could be a lot of work!

But if you created the trees from an asset template, then you could update all of them at the same time just by updating the asset template, and then publishing the changes. The changes are then pushed to all of the instances of the asset template in your world.

## Compatibility & Recommendations

* Asset templates are compatible with anything that can be spawned into the world.
* VR support for asset templates is limited. Overrides to instances of assets done in VR can only be applied to the definition via the Desktop Editor.
* We recommend using only [File-Backed Scripts](/hw-docs/Scripting/File-Backed%20Scripts.md) (FBS) worlds for the best experience and full functionality. **Non-FBS scripts are not fully supported.** Without file-backed scripts:

  + If you add non-FBS script to the template definition, when editing the template definition you can’t edit the script (it will not show in the script dropdown in properties).
  + If you edit a non-FBS script and/or attach it to an instance of the asset template changes to the script on an instance will not appear as overrides and thus cannot be applied to the template definition and propagated across worlds.
  + If you add a non-FBS to your definition it will duplicate anywhere it’s used in a world.

## Feature walkthrough

This section will go through the general workflow for templates once you are part of the GK. If you prefer this in video form, please see the tutorial video below.

[](https://video-dfw5-2.xx.fbcdn.net/v/t42.1790-2/453701050_838341574642066_6976185690380477457_n.mp4?_nc_cat=104&ccb=1-7&_nc_sid=6500a6&_nc_ohc=EVQUetK1pbgQ7kNvwHc-5fW&_nc_oc=Adml5xSeysyNKaYaKBrG3AfgptSzScZUkQVZtD_a59VPGdsJhSSqKKOhF5RIoq1Xj3o&_nc_zt=28&_nc_ht=video-dfw5-2.xx&_nc_gid=LGHbHgGQN0vQl2LnWa0pNg&oh=00_AfgAjE7yO67i5Xe4iFBgD1b9TO5BxkuVnOWwnKVPwyZ-gg&oe=691B5A46)

## Creating a basic asset template

There are two ways to create a template:

* By converting a legacy asset to an asset template. See [Asset Migration](/hw-docs/Desktop%20editor/Assets/Asset%20Templates.md#asset-migration) section for more information.
  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452458941_512500697954553_8078786083910498359_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=CBpdQ4a-I5AQ7kNvwFyL4cc&_nc_oc=AdnWapXF5VUA43YIo_Mn0L5MaVs5Az4gGJILg1pAW6lnUqWiAisRRBfim8jaGsU6_JQ&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=LGHbHgGQN0vQl2LnWa0pNg&oh=00_AfgG_vJXEHQw_tspW2US22_JU-6Q-dqDWFuLrH7jCOvK9A&oe=692FCB0C)
* By selecting objects in the scene and creating a new asset template from them.

To begin, first create a basic asset template.

- Add a basic cube to your scene. You can get it from the **Shapes** drop-down menu.
  ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452893303_512500567954566_2630102149456461559_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=hsHjdSxWPYwQ7kNvwGTu6Cq&_nc_oc=Adm4fLamJ5ve1EpP2PDoR-Um8tPu4NzKBt2_wuoyQuSorkvMQD4x-iSFzKbr_UjACcg&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=LGHbHgGQN0vQl2LnWa0pNg&oh=00_Afgf0KRGG3hDdO1aLAmbpMbjVQtWDLOKmZ8ordyS87Kltw&oe=692FBFED)
- Add a basic sphere to your scene. You can get it from the **Shapes** drop-down menu.
- In the Hierarchy, create an asset out of the two shapes by selecting both of them, and then right clicking on them. In the menu that appears, click **Create Asset**, and then enter the asset details.
  ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452863899_512500587954564_4581130950048103563_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=8GArSRBr-6wQ7kNvwFrmWE_&_nc_oc=Adk_xUk1j2B6DBPjNrUJn9dLjR5GzKohYcnYV0MV4OuAExYANfiBCSMMGvPUKdny4JA&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=LGHbHgGQN0vQl2LnWa0pNg&oh=00_AfhW0UmqPsOMvwat4RVIdRB_ux98Pkl9iZ_4TkKUkWx3IQ&oe=692FAB8F)

  You can create the asset as a template or as a legacy asset by selecting the asset type. If you choose **Legacy Asset Group**, your asset will not have instancing, property overrides, or change propagation.

You have now successfully created an asset template. The icon for the asset template changed in the Hierarchy. This is one way you can tell that an asset is a template asset.

## Editing Asset Definitions

Asset template definitions are edited in an isolated editing view, similar to how editing prefabs in Unity works. To enter asset definition editing mode, follow these steps:

- Enter asset definition editing mode. Right-click on your newly created asset, and then select **Edit Template Definition**. You can do this from either the Hierarchy, or by right-clicking the asset card in the Asset Library.
- Change the color of the entity via the property panel, or add new entities to the objects, then save the asset definition. This saves a draft of the definition. The he change appear locally in your world. To update the definition, you must publish the draft. After publishing, your changes appear as available updates in other worlds. To propagate changes in these other worlds, open the world and accept these updates. You can see more details under **Drafts**.
- Next, you’ll be prompted with the option to publish your template. Choose to **Save & publish** later.

> **Note**: Ingested assets must be spawned into a world before their definition can be edited. This is because ingested assets are created external to Meta Horizon Worlds and asset properties are applied to spawned instances of assets in a world before being saved to its definition.

## Draft Assets

A draft asset is an asset that has been updated in the current world, but whose changes haven’t yet been published to a new canonical asset version that can be used in other worlds.

- To view draft assets in the current world, click on the asset updates icon at the top left of the editor header.
- A modal will appear. Click on the **Unpublished changes** tab to see a list of all the draft assets in your world.

  **Note**: Anytime you edit an asset it’s stored as a draft.

  ![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/505490657_741347521736535_8523116864699304202_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=7GgOgJkiRsIQ7kNvwEguwIs&_nc_oc=AdmLDGa4sdUDaWRy6tMXLd3dwxVhY5iwFI0tNcmx8MmmithrdyLFehfqCn9GkNMiC7o&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=LGHbHgGQN0vQl2LnWa0pNg&oh=00_AfhGih6ZSnuHGvVecSSLu2glAw1mkdb885WVzcr3Wqsm2w&oe=692FB505)
- From here you can either discard or publish your draft asset.
  * When you discard a draft of an asset, all asset instances in the current world will automatically switch to the latest major version, as dictated by the asset definition in the asset library.
  * When you publish a draft asset, it will create a new major version of the asset in the asset library.
- Click **Publish** publish the draft asset. You will be presented with a publish modal. You can optionally write a comment to be saved as version notes with the new version, and then when the publishing operation finishes, a new major version of the asset will be saved to asset definition in the asset library.

  ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452576260_512500694621220_7586723531942177562_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=I87g0UkX2BAQ7kNvwETxJth&_nc_oc=AdnuO6jfJ12gGWXB-CUFwblERr2-y0lb78X7C0LePGanHhsWNzNHB_YuTXYAmFClh2U&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=LGHbHgGQN0vQl2LnWa0pNg&oh=00_Afg9UV-m-ZDUP3j24TBwrmBLgC8CsBBH_xmunGNaNKG73w&oe=692FCA9D)
- Once the asset is published, click on the **Version History** button in the Asset Details panel to see its version history.

  ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452935806_512500691287887_214574099878998720_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=0Cr4OPIiHOwQ7kNvwExghYd&_nc_oc=Adn2WeLlSXQi_z1UaDPhvn1QjLNJVaXRRLuebDGaA1-SeDOXmbdypihY_8GMQ5GjWxc&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=LGHbHgGQN0vQl2LnWa0pNg&oh=00_AfjJhOZfWpcmyWD9_U2L5ybMmBP9Z81TzugPculaDIj-Ag&oe=692FCB9E)
- The version history modal will display all of the major versions of an asset. These are all of the asset versions that have been previously published. If you go into other worlds or share an asset with other users, these are the versions that will be stored on the root asset definition. The asset can be restored to any of these versions at any time.

  ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452933022_512500687954554_6151449604564408312_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=01hdgpSvwQQQ7kNvwF00aQv&_nc_oc=AdmiYH9OGj8ZEXKfYgQZx8hm7iGvy_Tzc_7ox0xmZZmgoosrOGHHzXiWDN3RqgLYWmg&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=LGHbHgGQN0vQl2LnWa0pNg&oh=00_AfhPZymmg8cEkbwIWr9vJogZjEP-kh8C9eynY8auRItzRA&oe=692F9AED)

## Property Overrides

Property overrides enable you to override the property values on an instance of an asset template in a world. It effectively allows you to disconnect individual property values, while retaining a link to the root asset definition.

To override a property:

- Click on the root level asset template in your world. Review the properties. There shouldn’t be any overrides.
  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452684749_512500684621221_5369449154585863544_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=1mREDa9SPVAQ7kNvwErv9O-&_nc_oc=Adnr1fZ2YspI_ig1BrVsP0FuWjEJypXtud6my2HnejgffvWQ-P_t8NCy5A46woa_7Qw&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=LGHbHgGQN0vQl2LnWa0pNg&oh=00_Afg0siyWPq6a3DCLeTbkmIOecEn8k8B2fGmmMxQP4F33Eg&oe=692FC895)
- Now, create an overridden property value. Edit the object to change its color. You’ll notice that the color label has a bold treatment, as well as a blue dot next to it to indicate that the value has been overridden. In the overrides panel, you will see a property override on the object showing different values for the previous and current color.
  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452757156_512500681287888_1648985213895312295_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=ZosN3Vr7UAAQ7kNvwHuu63L&_nc_oc=Adnobs96bAnSEeZKkZLvX-VgGfoIRSOMCO-6pgkaAV376LCoSDOmi4iv0860KfDekak&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=LGHbHgGQN0vQl2LnWa0pNg&oh=00_AfjYGylF_ZPXRjqyspYW3xmH-eYG0JfjjdlM-vKJDT2QqA&oe=692FB561)
- From the property overrides panel, you can either select specific overrides to apply back to the definition, or apply all overrides. When you apply overrides back to the asset template definition, all instances whose matching properties haven’t been overridden will inherit the changes, and a new draft version of the asset will be created.
  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452591119_512500677954555_6513963071618982978_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=HV5NaNP7gz8Q7kNvwGnQOlK&_nc_oc=AdmAkx6NKZYJLhGUjvJSxtdCKE7cZ31oJKI1uCNCTO3HHpJSvdqz5FxUyLtNXxIO6y0&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=LGHbHgGQN0vQl2LnWa0pNg&oh=00_AfjOqXqHZ3rn8sINLLcOegcvjrB1fwUPCbb9DNg7Fc-R-Q&oe=692F9D7E)
- It’s also possible to revert overrides. Reverting override values will revert the asset back to the same state as any draft version that exists, or in the absence of a draft version, the current major version of the asset.
  ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452652316_512500674621222_1012367075903542989_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=7iJ_H-GDPEMQ7kNvwH9RUDN&_nc_oc=AdlRdzHvhpn2vyB2DJ63j-0TkJn2LxDBqNEm7wIhfkZDJ6aiFDmZHylM2BztutAmWrk&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=LGHbHgGQN0vQl2LnWa0pNg&oh=00_AfgQr_UuTLBpNinFg5nRG_-Dq9E37Vi6Kk4epwbSCQqDyQ&oe=692FB77B)

**Note:** Property overrides persist even when you update the asset. To test this, you can edit the asset definition, add a new shape to it and then exit. You will see that the color of the sphere will remain even after the update!

## Asset Migration

Assets that were in your asset library before asset templates need to be migrated in order to work with the new template format. This is a very easy process, but may take some time for a larger amount of assets.

The following steps will walk through asset migration:

- You will see a blue icon at the top right corner of an asset card if the asset needs to be migrated. Right click on the asset card, and select **Update Asset** from the menu that appears.

  ![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452665936_512500581287898_7545021707173957534_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=eliI4sKTZ8sQ7kNvwFpcoo1&_nc_oc=AdniycJTzKRST52pXbVhZoyALTSPZaGKLrSsIE--oIyyZl6QaHDHZ6sUbFjsMzweWYU&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=LGHbHgGQN0vQl2LnWa0pNg&oh=00_AfiaaR3Z3R1cKuavoooWUVn5MgRhOs6FwZTdPXTWcpSQ4Q&oe=692FC024)
- Alternatively, you can also click on the folder and update all assets in a folder at once by clicking on the link at the bottom right of the asset browser.

**Note**: Ingested asset types don’t have to be migrated, only assets created within Horizon.

## Ingested Asset Types

An important note: ingested (imported) asset types automatically inherit asset versioning. While ingested assets (custom mesh, audio, etc.) are linked, you won’t see the overrides since ingested asset types don’t allow you to apply overrides back to the definition. If you’d like to apply an override to an ingested asset, you can create nested asset templates. These are simply asset templates that are parented to the same root object.

## Unlinking assets from an asset template

Unlinking instances from an asset template removes the connection to the template. The means it prevents the unliked asset from receiving updates from the asset template definition. It also removes the ability to push instance overrides back to the asset template definition.

To unlink an instance from a template:

- Select asset template instance in hierarchy.
- If the template has nested templates:
  - Choose **Unlink instance root** to only unlink the parent template.
  - Choose **Unlink instance root and children** to unlike the parent template and any nested child templates.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452934219_512500594621230_5600854580075909703_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=jECRkCElJMAQ7kNvwEOgPEB&_nc_oc=AdlGOL3IOq_XwQt-jujgnJ4AdBeUEBpnx0kvEDGh8197rvDQ361fOAMM1VcMt2tP3s0&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=LGHbHgGQN0vQl2LnWa0pNg&oh=00_AfhenNyefRXWK4Y54jKpQos0tvF4hG1TgLc-euRefJai6A&oe=692FB1CE)

## Attaching scripts to asset templates and updating the definition

You can attach a script to the asset template by:

* Selecting an asset instance and under properties attaching the script as a reference.
* Or, right clicking on the asset to edit the definition and then going to the definition properties and adding the script as a reference.

### Attaching the script to the asset template instance

- Edit a script in the world from the property panel.

  ![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452953164_512500601287896_1058603146175003068_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=mrLlqOu7FcQQ7kNvwH_522Q&_nc_oc=AdnAU1tLRC_JodHO7SkUxEJKtwIm3QiSN3ePH8LTCrEtTe7DSwE3avZ2K7YNn3Ij-8U&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=LGHbHgGQN0vQl2LnWa0pNg&oh=00_Afh1ytXJiM96yDfv0B8-DBzyHEaJIsMOd7MTTjH9w49sog&oe=692FB24E)
- When a script is attached to an asset template, you should see it appear as an override. You will see a blue dot next to **Attached Script** (above image) and two overrides applied: one for the script and one for motion (shown below).

  ![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452652931_512500564621233_8795829224957538121_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=6fvrZol2jtIQ7kNvwHIY2Aq&_nc_oc=AdmoUuGZeAzfSA_3zwCDQnnYqojs18nMXlHyvzYHe4OCwZxdoICzFHcrh1vOjOdpGoQ&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=LGHbHgGQN0vQl2LnWa0pNg&oh=00_AfgiJQYKEAxHtgIKzWEoKzd1xfoOakPjoBgsAits0yNZXw&oe=692FBB3A)
- Edit the script’s source code by selecting **Open in external editor.** When the script’s source code is updated, this will also appear as an override.
- Publish the script change through overrides. This will update the asset template definition with the script.
- Publish the script change through the overrides panel. This will update the asset template definition with the script changes included in the latest version of the template definition. See the note at the end of this section for more information.

  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452652238_512500577954565_6836600478890992788_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=THMTHWeqPnsQ7kNvwE0LsKm&_nc_oc=AdnaRbo6fc7dCJnhpiI7rChkqdKRC1J56GULGULKYZ25AZznnBTTKONSurOKNg9uC8M&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=LGHbHgGQN0vQl2LnWa0pNg&oh=00_Afj7Co5cVlSnhl_bMeikzbFmgTxZI_aHViWkRXuIMgHycw&oe=692F9773)

### Attaching the script to the asset template definition

- Right click on the asset instance (or asset in **Assets**) to edit the definition.

  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452951204_512500597954563_4508069784119552394_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=X0TZ-kEo7YgQ7kNvwFQUOGa&_nc_oc=AdnfldG14ZhFH6CfN4nZzmyVP3lxntME2_vjXm-2ENKlVoCTjJk45KH6gQxUn4n57dk&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=LGHbHgGQN0vQl2LnWa0pNg&oh=00_AfjOioJGzMV0NG6NKQfxz7L5nc812d7LYBH9twwo2RSqjw&oe=692F9E27)
- Edit a script in the world from the property panel.

  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452054064_512500541287902_5048148391692387350_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=zI2sJ3PJnycQ7kNvwFIs_kN&_nc_oc=Adkq5EgYeYrYiK-yCB3BlomPcqvAc5i576ZiqXGlKAJVTr-OThfOXgqF5_EseYOpZBQ&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=LGHbHgGQN0vQl2LnWa0pNg&oh=00_AfgCpv67-GGNiXtEs5opcF5sIpGs8GibDjjUftTKC3xTQw&oe=692FA2BC)
- Save and publish the template definition. This will create a new version of the asset that includes the script changes. See the note below for more information.

  ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452757259_512500557954567_7387970478247480678_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=fsqm3hcwY0gQ7kNvwHyfcnT&_nc_oc=AdlcAZJY3iMWN8pTsAkxdaHG--oaa6xWeGu9SwjvcuPJLDXauAokHBzpPKSt3NlhdqY&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=LGHbHgGQN0vQl2LnWa0pNg&oh=00_Afg2lDUSxHgoB3bAIziRWlE7xQs1hazUPF7wtvgIK6RKdQ&oe=692FBDBF)

**❗️Important** : When you open a new world that uses this asset template, the script change will be included in the asset templates update. If the script in your world is on a different version than what is in the template update, accepting the template update will also update the script to be on the same version.