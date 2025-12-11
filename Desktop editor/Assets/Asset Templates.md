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
* We recommend using only [File-Backed Scripts](../../Scripting/File-Backed%20Scripts.md) (FBS) worlds for the best experience and full functionality. **Non-FBS scripts are not fully supported.** Without file-backed scripts:

  + If you add non-FBS script to the template definition, when editing the template definition you can’t edit the script (it will not show in the script dropdown in properties).
  + If you edit a non-FBS script and/or attach it to an instance of the asset template changes to the script on an instance will not appear as overrides and thus cannot be applied to the template definition and propagated across worlds.
  + If you add a non-FBS to your definition it will duplicate anywhere it’s used in a world.

## Feature walkthrough

This section will go through the general workflow for templates once you are part of the GK. If you prefer this in video form, please see the tutorial video below.

[](https://video-dfw5-2.xx.fbcdn.net/v/t42.1790-2/453701050_838341574642066_6976185690380477457_n.mp4?_nc_cat=104&ccb=1-7&_nc_sid=6500a6&_nc_ohc=P4puASVXfXYQ7kNvwHjDsgp&_nc_oc=AdnoJqkS-V3KSYeYxadj6AqE_pHa3-O3dCGc8aTVobZvpTzA0IfdoH9uzi3Ceyrcf7i_ZszmJrWEeQkKTFFVgQBR&_nc_zt=28&_nc_ht=video-dfw5-2.xx&_nc_gid=GIvhmXZkUX_ZP6-4SBWB8A&oh=00_Afkf1XBSxEtei4bVST7IZViUDHKmWIXeVDPOjmob7eSX4A&oe=69412546)

## Creating a basic asset template

There are two ways to create a template:

* By converting a legacy asset to an asset template. See [Asset Migration](Asset%20Templates.md#asset-migration) section for more information.
  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452458941_512500697954553_8078786083910498359_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=dDdV2Uic8BYQ7kNvwHIAukf&_nc_oc=Adlt5FjiUZLA5lKFwKKGKEqwdxHvYXSMC_KuQboAp62UDI-v58cC8uxUS_A2S7j9NDjLWCMoA4o46vAicir2o2Ol&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=GIvhmXZkUX_ZP6-4SBWB8A&oh=00_Aflp6Ryhyp0y60M6CyxzHEAnRBC1Si6393pJwJ7AO95nrg&oe=6955960C)
* By selecting objects in the scene and creating a new asset template from them.

To begin, first create a basic asset template.

- Add a basic cube to your scene. You can get it from the **Shapes** drop-down menu.
  ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452893303_512500567954566_2630102149456461559_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=wN71ZOT-rgYQ7kNvwHvl99j&_nc_oc=Adla1BMI9atl3R7r_BdWGh35a7xBF_9G26ew-7DNilkuSTFhqbPsvVJBHmx09BkTnkI8KsM9AWhS-15sAo2Hrqf4&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=GIvhmXZkUX_ZP6-4SBWB8A&oh=00_Afmj-yLyJ6vTPU051qzCtV4AZPXlMTVHmLzUkA5bJwwCog&oe=69558AED)
- Add a basic sphere to your scene. You can get it from the **Shapes** drop-down menu.
- In the Hierarchy, create an asset out of the two shapes by selecting both of them, and then right clicking on them. In the menu that appears, click **Create Asset**, and then enter the asset details.
  ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452863899_512500587954564_4581130950048103563_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=JgMmZEdiwzgQ7kNvwE1Om1S&_nc_oc=Adn_K40wWriJtvVe0BCiz8ZK7K0x6BXudfRuIb354CdHUOaRntQJygagCyiBQVoyFUlkRZejwGQDDVlpQ2IlSaX9&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=GIvhmXZkUX_ZP6-4SBWB8A&oh=00_AfkZuA5A_9vqSnltg-xv5rqpgL6LRVUMEaX-re6hkGllSQ&oe=6955768F)

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

  ![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/505490657_741347521736535_8523116864699304202_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=Y7qQyObFZtAQ7kNvwFOBB4W&_nc_oc=Adm1MIKMzzZObYIoYF03ooXTxw76CcnS_GWfWjYC4A9y6VjusJeCLsfuIz68Z4FbUCaGLl0lVghXhaWOcZYnz2tW&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=GIvhmXZkUX_ZP6-4SBWB8A&oh=00_AflnI1iaeseaoXyNNQB_Mv8n0mgXKLQ6H_JjS8kU04Gmqg&oe=69558005)
- From here you can either discard or publish your draft asset.
  * When you discard a draft of an asset, all asset instances in the current world will automatically switch to the latest major version, as dictated by the asset definition in the asset library.
  * When you publish a draft asset, it will create a new major version of the asset in the asset library.
- Click **Publish** publish the draft asset. You will be presented with a publish modal. You can optionally write a comment to be saved as version notes with the new version, and then when the publishing operation finishes, a new major version of the asset will be saved to asset definition in the asset library.

  ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452576260_512500694621220_7586723531942177562_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=2VznAXHTn7AQ7kNvwG13Gv9&_nc_oc=AdkDcevk0cCYRAqlX1ZGgdGDVWyB0NQa3bPZx9fYou7MRTn-6l4_2KNLbUt2x6Pz-vGqYnAm0PaqCB8dSmf2Xzrp&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=GIvhmXZkUX_ZP6-4SBWB8A&oh=00_AfmQlilBo4hRbDF6tQK0-DNolad2QdzCcBC4Ad5plbWR2A&oe=6955959D)
- Once the asset is published, click on the **Version History** button in the Asset Details panel to see its version history.

  ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452935806_512500691287887_214574099878998720_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=bkwXPJfONQYQ7kNvwHdijAp&_nc_oc=Adn6CMvFYGyJC2426m7DldQ9MhidA7M_Gyq2HXqW662MJnu2i5l6vyZA_Od0mNAxjJvGJHbJ7CMIRuJq0XY-ZvJl&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=GIvhmXZkUX_ZP6-4SBWB8A&oh=00_AflFPnKH8KsVsLsH3ZhoVc-SJzIQymVhuUf6Hpin4wq3HA&oe=6955969E)
- The version history modal will display all of the major versions of an asset. These are all of the asset versions that have been previously published. If you go into other worlds or share an asset with other users, these are the versions that will be stored on the root asset definition. The asset can be restored to any of these versions at any time.

  ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452933022_512500687954554_6151449604564408312_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=oVJ5d9rZ5OcQ7kNvwGAtmjE&_nc_oc=AdmlQLVLPHP31FaSitw41raODh75TOyGLmX5GL7A_qua3wbfL4TqpfA24WF7h3AXDxiy3CkRz9xTEwdjS5PwADsK&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=GIvhmXZkUX_ZP6-4SBWB8A&oh=00_AfmqC7QLxwrNDT8eV13IUxPdwlgdRy7Bh0wW90eJyy9F0w&oe=69559E2D)

## Property Overrides

Property overrides enable you to override the property values on an instance of an asset template in a world. It effectively allows you to disconnect individual property values, while retaining a link to the root asset definition.

To override a property:

- Click on the root level asset template in your world. Review the properties. There shouldn’t be any overrides.
  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452684749_512500684621221_5369449154585863544_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=oR8Kd726-agQ7kNvwHtjWis&_nc_oc=AdlODz2DB4lKrsLQ1cgHH5uy3L7M2ZkuBfKKKDuqjPPNjDoBqzQUEy5cst0BTykEP76Jj5iKGlqcylydgpWsvF3x&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=GIvhmXZkUX_ZP6-4SBWB8A&oh=00_AflbJ6g2nTt8tEWbn1brBynRPHDb7FYbGVZh69BxvuJ5Og&oe=69559395)
- Now, create an overridden property value. Edit the object to change its color. You’ll notice that the color label has a bold treatment, as well as a blue dot next to it to indicate that the value has been overridden. In the overrides panel, you will see a property override on the object showing different values for the previous and current color.
  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452757156_512500681287888_1648985213895312295_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=3B_mHGtkRyUQ7kNvwE-YU_r&_nc_oc=AdkTzydNSJvJ4_Nlhh0LDIbwNFt87l6lYyi0KVdA5aEX0Cd7ErGv34DjzHVuY0-pUrxfEYpVr00Iti4KJ6BEO4Uc&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=GIvhmXZkUX_ZP6-4SBWB8A&oh=00_AfktOg7gUwVnchqwUAwKKUZXBY0QPXmj5o1WsUNWUKaGUw&oe=69558061)
- From the property overrides panel, you can either select specific overrides to apply back to the definition, or apply all overrides. When you apply overrides back to the asset template definition, all instances whose matching properties haven’t been overridden will inherit the changes, and a new draft version of the asset will be created.
  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452591119_512500677954555_6513963071618982978_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=2QsncbiWjfIQ7kNvwHLCc-k&_nc_oc=AdllH9UJJo_ic08_jKX3GYicBRl1DwYp1wF4nLmMhSMQhBnhEm0xJL-XHQnLxSClk_jnGAd9HsXKNcFsG1lQTelc&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=GIvhmXZkUX_ZP6-4SBWB8A&oh=00_Afl-Doo5x-GhGCaJlZuzGkR0a24za7mlFiD8jvUqKevDbA&oe=6955A0BE)
- It’s also possible to revert overrides. Reverting override values will revert the asset back to the same state as any draft version that exists, or in the absence of a draft version, the current major version of the asset.
  ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452652316_512500674621222_1012367075903542989_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=0k7qfoopEBEQ7kNvwF9zYjR&_nc_oc=AdkmLLprS52lgZTBAjHtW39qFWYa7up2MsxqoaUln4TvTd0jofMdYwKJ7gFbVjvVogFsFyIzqI3FmYXchZ3160pB&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=GIvhmXZkUX_ZP6-4SBWB8A&oh=00_AfmeJd8cAwis9ZjgCQ5TEnzlCOmXPBeLE2SNXL8UHnU2mg&oe=6955827B)

**Note:** Property overrides persist even when you update the asset. To test this, you can edit the asset definition, add a new shape to it and then exit. You will see that the color of the sphere will remain even after the update!

## Asset Migration

Assets that were in your asset library before asset templates need to be migrated in order to work with the new template format. This is a very easy process, but may take some time for a larger amount of assets.

The following steps will walk through asset migration:

- You will see a blue icon at the top right corner of an asset card if the asset needs to be migrated. Right click on the asset card, and select **Update Asset** from the menu that appears.

  ![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452665936_512500581287898_7545021707173957534_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=q5oIYnWxl24Q7kNvwEuibBx&_nc_oc=AdkuCN9hdpBgHz0MEkuhJCA9_MSURZa1emetWh9fpfjahiaOa5OETPI_Zpup1aOxWTL6Gusc5KC4ONjOVhtiCP5u&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=GIvhmXZkUX_ZP6-4SBWB8A&oh=00_Aflf1W5naNOw4R3ShHOb09nmLfWIdUjC84AxIhSrWijRsg&oe=69558B24)
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

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452934219_512500594621230_5600854580075909703_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=iSynghBUPcMQ7kNvwFGpOT0&_nc_oc=AdleH61TLORItXDEJ_1d1JpDrIjz-DA2gOoZn991nohJLHtLL5gVZOHplCghGHxeuQZjj8V5xOXWCC3OPf7iJOLd&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=GIvhmXZkUX_ZP6-4SBWB8A&oh=00_AfnWNlPpEk1YdU5OXsCVl6dAu15I80UWAINvuRmI1_aBjA&oe=69557CCE)

## Attaching scripts to asset templates and updating the definition

You can attach a script to the asset template by:

* Selecting an asset instance and under properties attaching the script as a reference.
* Or, right clicking on the asset to edit the definition and then going to the definition properties and adding the script as a reference.

### Attaching the script to the asset template instance

- Edit a script in the world from the property panel.

  ![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452953164_512500601287896_1058603146175003068_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=4f_Pn-02kY8Q7kNvwGwYra4&_nc_oc=Adm_kbYMzaNnjSy1cCM9tXrKo45ADQCc0ujXxGGRgtvIMKiWWAqL8I9Vk249GFP1jO0WFd3QfOGJgdoD3RGEBNLX&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=GIvhmXZkUX_ZP6-4SBWB8A&oh=00_AflGP3T4RSkGcafYV8_if6WAQBZbtRoLSVyXQM_zlkmi1g&oe=69557D4E)
- When a script is attached to an asset template, you should see it appear as an override. You will see a blue dot next to **Attached Script** (above image) and two overrides applied: one for the script and one for motion (shown below).

  ![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452652931_512500564621233_8795829224957538121_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=wyrsesuufpYQ7kNvwFjykc2&_nc_oc=AdnNS0ngeRBADn2v24peiEIVZdD3awg8P3Jm35I3z1G5_ejcmhp7gWQ5qoGAyzJ6M7b1tfjYFD67Xf6l6iLQp4m1&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=GIvhmXZkUX_ZP6-4SBWB8A&oh=00_AfnmNpM-Kbr3gy0CGD8udpYHMnhTGT2j4RQQRFD06rsZew&oe=6955863A)
- Edit the script’s source code by selecting **Open in external editor.** When the script’s source code is updated, this will also appear as an override.
- Publish the script change through overrides. This will update the asset template definition with the script.
- Publish the script change through the overrides panel. This will update the asset template definition with the script changes included in the latest version of the template definition. See the note at the end of this section for more information.

  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452652238_512500577954565_6836600478890992788_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=VI6vp15mMf0Q7kNvwFx8OoB&_nc_oc=AdkBTDbgxA2YcLF9Qh2VOvsP1ewBC279DJigGfWRUd3WYmVp9Cfb-jmicoeAc21mTu6yaRWvD8-iixEXAaEcnYyF&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=GIvhmXZkUX_ZP6-4SBWB8A&oh=00_AflcdWwLLp9T7ltwr11aOsXurJ3wO77JqdF8gbtyy28JjQ&oe=69559AB3)

### Attaching the script to the asset template definition

- Right click on the asset instance (or asset in **Assets**) to edit the definition.

  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452951204_512500597954563_4508069784119552394_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=jXfTUkKYNbsQ7kNvwGx1U6I&_nc_oc=AdlJyMbShYTDerB7lzwtPBtQjm9NxAcQhKiFlheIssXnHa7uwc7UAfrueY2QA0rXOZH8-jm2B19URWPY2FnIukqL&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=GIvhmXZkUX_ZP6-4SBWB8A&oh=00_AflIKn2UTXfdETLcI_NK9BGOqSzchLadh-0d9k9SCrlH8w&oe=6955A167)
- Edit a script in the world from the property panel.

  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452054064_512500541287902_5048148391692387350_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=7aVr431WrCgQ7kNvwFzMr4Y&_nc_oc=AdmGrfjPsNo_UjOIvk2HecdPYiZk71T_zL6jlVradY08-9_AKpbnLoytxw9-BLYcftzMaxGlZRSaK5dMvIOboTXP&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=GIvhmXZkUX_ZP6-4SBWB8A&oh=00_AfllW7MDT7mScSQVBcGaVlbMupF77ZOef7MxQkiYADMcQQ&oe=69556DBC)
- Save and publish the template definition. This will create a new version of the asset that includes the script changes. See the note below for more information.

  ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452757259_512500557954567_7387970478247480678_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=1KoEizJlcAwQ7kNvwHyW1B7&_nc_oc=AdmrERiIE4EgBv-8UmQ0IS-8NLPdKcdArKTUGvxgp1Yqo74HjtA8bG77jBHueouUuBqPACPYdAsTJ08zYnwLMc7a&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=GIvhmXZkUX_ZP6-4SBWB8A&oh=00_AfnqpKkwkjJc5JJ5z89mHovwn7G_-RHNhKJr_7CJOrl7eA&oe=695588BF)

**❗️Important** : When you open a new world that uses this asset template, the script change will be included in the asset templates update. If the script in your world is on a different version than what is in the template update, accepting the template update will also update the script to be on the same version.