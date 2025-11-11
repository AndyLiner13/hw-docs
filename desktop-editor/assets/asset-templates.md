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
* We recommend using only [File-Backed Scripts](/hw-docs/typescript/filebacked-scripts/) (FBS) worlds for the best experience and full functionality. **Non-FBS scripts are not fully supported.** Without file-backed scripts:

  + If you add non-FBS script to the template definition, when editing the template definition you can’t edit the script (it will not show in the script dropdown in properties).
  + If you edit a non-FBS script and/or attach it to an instance of the asset template changes to the script on an instance will not appear as overrides and thus cannot be applied to the template definition and propagated across worlds.
  + If you add a non-FBS to your definition it will duplicate anywhere it’s used in a world.

## Feature walkthrough

This section will go through the general workflow for templates once you are part of the GK. If you prefer this in video form, please see the tutorial video below.

[](https://video-dfw5-2.xx.fbcdn.net/v/t42.1790-2/453701050_838341574642066_6976185690380477457_n.mp4?_nc_cat=104&ccb=1-7&_nc_sid=6500a6&_nc_ohc=SkeyaKIUdLEQ7kNvwEQ8wVb&_nc_oc=AdmieqtYEe7m60mcgETND0sBv48B88vVF8UMeOxYIQIEepvXM5oDxjCVNXjls0jr9HQ&_nc_zt=28&_nc_ht=video-dfw5-2.xx&_nc_gid=ROybvPRvfulumhhPURaKRg&oh=00_Afid2VaLStMD6-A_ADCAXYVmJSBSswx_LojhDUPv8qlE5g&oe=69179E06)

## Creating a basic asset template

There are two ways to create a template:

* By converting a legacy asset to an asset template. See [Asset Migration](/hw-docs/desktop-editor/assets/asset-templates#asset-migration) section for more information.
  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452458941_512500697954553_8078786083910498359_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=CKbfXfKR1esQ7kNvwE9F711&_nc_oc=Adn9lp9lmiaZ1Nl-7fC_ouhBV9c-fiBJrZ2c-RPwxHivGhxsncyJpCrhnEPiDsvDMVk&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=ROybvPRvfulumhhPURaKRg&oh=00_AfhSv7nLFo0H1acZilZofFbU1FPs2Z-wJPULmTtpj2pV7w&oe=692C0ECC)
* By selecting objects in the scene and creating a new asset template from them.

To begin, first create a basic asset template.

- Add a basic cube to your scene. You can get it from the **Shapes** drop-down menu.
  ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452893303_512500567954566_2630102149456461559_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=twP3nI2xsukQ7kNvwGPCuqz&_nc_oc=AdnQ5zJ72Hvty4XQqqBfKohG2UgjpYqF7DQeSl2IZD76jGDqrkNXWeuGLOgks0STfd4&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=ROybvPRvfulumhhPURaKRg&oh=00_Afg4h8fDuPKbFLq2WmWsudUqYqidn5hOlmVDQBTPJrEnPw&oe=692C03AD)
- Add a basic sphere to your scene. You can get it from the **Shapes** drop-down menu.
- In the Hierarchy, create an asset out of the two shapes by selecting both of them, and then right clicking on them. In the menu that appears, click **Create Asset**, and then enter the asset details.
  ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452863899_512500587954564_4581130950048103563_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=TjgzUsBRU4sQ7kNvwGBAjUH&_nc_oc=AdnxnO60xb5M8uGf6zWJdn-gLWlqoorp6BrMMgAoEpI1cZGnyY8ReemShGaZV4FP_Bc&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=ROybvPRvfulumhhPURaKRg&oh=00_AfgqdkWeP7f05-2LwZib5CMIp6eNZFaGQ6QrrXdE9Zbymw&oe=692BEF4F)

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

  ![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/505490657_741347521736535_8523116864699304202_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=Vq8iLmJL1IIQ7kNvwHktq3c&_nc_oc=AdlAoF891JWoCm6K8YlhTy0T2GMnfO-E0uZjuybW_iNbNOGR4hyD7DwQYwfGpTx8aWY&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=ROybvPRvfulumhhPURaKRg&oh=00_Afh14Ai2ZMPnk7lbP_VVQ7Uz-TcpS6L5ClB7xveRmxnqOw&oe=692BF8C5)
- From here you can either discard or publish your draft asset.
  * When you discard a draft of an asset, all asset instances in the current world will automatically switch to the latest major version, as dictated by the asset definition in the asset library.
  * When you publish a draft asset, it will create a new major version of the asset in the asset library.
- Click **Publish** publish the draft asset. You will be presented with a publish modal. You can optionally write a comment to be saved as version notes with the new version, and then when the publishing operation finishes, a new major version of the asset will be saved to asset definition in the asset library.

  ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452576260_512500694621220_7586723531942177562_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=2-Jc7fF_I5EQ7kNvwHkELLW&_nc_oc=AdljSET5_8mSALx8l630MKbzban9s1ZzC50Ri6ybGC5MpSVBMDYtGjYiqmi2w5_aEE4&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=ROybvPRvfulumhhPURaKRg&oh=00_AfgsycNaOB3i0vQDRJN1PbNlaRMsLutv0ZFd5pcwEDMzXg&oe=692C0E5D)
- Once the asset is published, click on the **Version History** button in the Asset Details panel to see its version history.

  ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452935806_512500691287887_214574099878998720_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=eb58YA-29xIQ7kNvwFHZhMf&_nc_oc=AdleRt5Ulawn_RsTz60TL7gr2fgLtJ9wkc2t3OtMTXpmDSwc--LbOausPjO-RBwguZI&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=ROybvPRvfulumhhPURaKRg&oh=00_AfjROVYbGC_ekb8t3by5zIlofc4439TRVFS7kcb4OOsWfw&oe=692C0F5E)
- The version history modal will display all of the major versions of an asset. These are all of the asset versions that have been previously published. If you go into other worlds or share an asset with other users, these are the versions that will be stored on the root asset definition. The asset can be restored to any of these versions at any time.

  ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452933022_512500687954554_6151449604564408312_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=HtjQ6wkFExoQ7kNvwEGSRlz&_nc_oc=AdmlYOyy3A4p6oseKRvBft15PelztVMqcZH3vEhjZNMyUm33oCdJ6A2jsqw78RBaecQ&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=ROybvPRvfulumhhPURaKRg&oh=00_AfgOVsqOY8r1_znFSX7nhCgcFqpr9OMkS7YV-f1efW7t-g&oe=692BDEAD)

## Property Overrides

Property overrides enable you to override the property values on an instance of an asset template in a world. It effectively allows you to disconnect individual property values, while retaining a link to the root asset definition.

To override a property:

- Click on the root level asset template in your world. Review the properties. There shouldn’t be any overrides.
  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452684749_512500684621221_5369449154585863544_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=Icq0ryo9AdEQ7kNvwHR_yjb&_nc_oc=AdmBlCoWl3CWOUF-uqXyRotBu2YrdqaWVk7pgTwI-um99nj6ax85LHWCH-LvXqksp1w&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=ROybvPRvfulumhhPURaKRg&oh=00_Afh81bj3JdB1g8F2IBmubaxQF1mrybzOkxBFBmzH7HUHog&oe=692C0C55)
- Now, create an overridden property value. Edit the object to change its color. You’ll notice that the color label has a bold treatment, as well as a blue dot next to it to indicate that the value has been overridden. In the overrides panel, you will see a property override on the object showing different values for the previous and current color.
  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452757156_512500681287888_1648985213895312295_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=QNbv787e74UQ7kNvwHag9qw&_nc_oc=AdmF67ULNRjrXorSofvr9TIx7D5LPNlNilvMKG6whvOU7mg6lfIPr_TdQGvZo4Yhccw&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=ROybvPRvfulumhhPURaKRg&oh=00_Afg4n3wgLMV2Rk50rLIQqDC2yHfguj38SsmFg4442DsGTw&oe=692BF921)
- From the property overrides panel, you can either select specific overrides to apply back to the definition, or apply all overrides. When you apply overrides back to the asset template definition, all instances whose matching properties haven’t been overridden will inherit the changes, and a new draft version of the asset will be created.
  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452591119_512500677954555_6513963071618982978_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=0M2BS2HVLwEQ7kNvwG5y_FH&_nc_oc=AdnTMvCKiO4Mhu1vv2VnD3fMjt8mpjG-C6rowT6PRoEgnZNWj4ZU-NDY1tdKoaGupT0&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=ROybvPRvfulumhhPURaKRg&oh=00_Afj36l20EF8Knhg9cQw0ruAsx_94esZGxjRSisuCwItp7A&oe=692BE13E)
- It’s also possible to revert overrides. Reverting override values will revert the asset back to the same state as any draft version that exists, or in the absence of a draft version, the current major version of the asset.
  ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452652316_512500674621222_1012367075903542989_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=-GzKtRbeY6MQ7kNvwEIC7Os&_nc_oc=Adkb6zWnO2UfetsXV-Gkse_O6Bv7FsBeFBywwF9Oqgz1nj3lRpSiYw2ka3ckVBKGreQ&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=ROybvPRvfulumhhPURaKRg&oh=00_Afh3BgCYl3bwTQdUu44oi70miig089NSDDNVJXAAYArZRQ&oe=692BFB3B)

**Note:** Property overrides persist even when you update the asset. To test this, you can edit the asset definition, add a new shape to it and then exit. You will see that the color of the sphere will remain even after the update!

## Asset Migration

Assets that were in your asset library before asset templates need to be migrated in order to work with the new template format. This is a very easy process, but may take some time for a larger amount of assets.

The following steps will walk through asset migration:

- You will see a blue icon at the top right corner of an asset card if the asset needs to be migrated. Right click on the asset card, and select **Update Asset** from the menu that appears.

  ![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452665936_512500581287898_7545021707173957534_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=8SdmjNp3isoQ7kNvwFx_kI0&_nc_oc=Adm2omT3J-EdGNrjmenAawluUZ6EvTKZixIWueSdIITao-eRxwh16WvyJ7mlzwG48p0&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=ROybvPRvfulumhhPURaKRg&oh=00_AfiXFnFn8SUGk1nx3Tzh3o4dd-g3KJgha6A3tEyCB78y3Q&oe=692C03E4)
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

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452934219_512500594621230_5600854580075909703_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=jECRkCElJMAQ7kNvwEOgPEB&_nc_oc=AdlGOL3IOq_XwQt-jujgnJ4AdBeUEBpnx0kvEDGh8197rvDQ361fOAMM1VcMt2tP3s0&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=ROybvPRvfulumhhPURaKRg&oh=00_AfgrovZGzm0Gkxp68ftdfntqa3bD-joVnwMUgK6XgvncOQ&oe=692BF58E)

## Attaching scripts to asset templates and updating the definition

You can attach a script to the asset template by:

* Selecting an asset instance and under properties attaching the script as a reference.
* Or, right clicking on the asset to edit the definition and then going to the definition properties and adding the script as a reference.

### Attaching the script to the asset template instance

- Edit a script in the world from the property panel.

  ![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452953164_512500601287896_1058603146175003068_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=lDLgDVwKegkQ7kNvwFxkS1l&_nc_oc=AdmeXrlNyNMJ8mEamDz2NguBNQ2VtPYbag7pe7g7hA_1JWF6mQ7ZNZ-wY8W35isiU-M&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=ROybvPRvfulumhhPURaKRg&oh=00_AfiNiFslUMHMlcLVozdatmjg70G0juWdSMlAh1_O9Wpn8A&oe=692BF60E)
- When a script is attached to an asset template, you should see it appear as an override. You will see a blue dot next to **Attached Script** (above image) and two overrides applied: one for the script and one for motion (shown below).

  ![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452652931_512500564621233_8795829224957538121_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=7kry4Di807EQ7kNvwEMiPFX&_nc_oc=Adn4gX47IoE-75gKLproQtdvq3Mo-eDR6fOAwLvHdnE9VQQ5FOtSnoDaDrbWlWa5q6Q&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=ROybvPRvfulumhhPURaKRg&oh=00_AfjbixNZl5waNsBKQjFidiX0-7wIxMQDctsQ50Iq_NfvRg&oe=692BFEFA)
- Edit the script’s source code by selecting **Open in external editor.** When the script’s source code is updated, this will also appear as an override.
- Publish the script change through overrides. This will update the asset template definition with the script.
- Publish the script change through the overrides panel. This will update the asset template definition with the script changes included in the latest version of the template definition. See the note at the end of this section for more information.

  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452652238_512500577954565_6836600478890992788_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=NA80pYoWNL0Q7kNvwEBa70i&_nc_oc=AdkwNVYQtkQIKLlvxK_eHzhhFl1WeH4a2p13IALtp53of1vUgPKBvfTUzAwdBtfgCic&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=ROybvPRvfulumhhPURaKRg&oh=00_Afg8cLV3vXrf1gVb402SUxm_uRXF3x2qABmlSkWqZTjBcg&oe=692BDB33)

### Attaching the script to the asset template definition

- Right click on the asset instance (or asset in **Assets**) to edit the definition.

  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452951204_512500597954563_4508069784119552394_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=P1ha6yoB7icQ7kNvwFd_rY_&_nc_oc=Adltd54U54qn12LSiuYoQA_eoHhVN5w_o9Sqtxm0IzaHDVlqMGX5cQZLcQuXjkGBN3E&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=ROybvPRvfulumhhPURaKRg&oh=00_AfgSn6mf-_LHSdqNZeBnnm0JNubJXwqKuD39UdOkwdKrHA&oe=692BE1E7)
- Edit a script in the world from the property panel.

  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452054064_512500541287902_5048148391692387350_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=s6YwspWcqeQQ7kNvwFrsd8F&_nc_oc=Admm3Kns99FqdHvpbhVVCfG1BSCkg3vfm4PyqSb4PrbtTm4tF8oBFJUrKYg8POCSftA&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=ROybvPRvfulumhhPURaKRg&oh=00_AfjWOlnhUbzD1LxDd1vgeB45BKJ-AOjnyBRe02ziThpWaA&oe=692BE67C)
- Save and publish the template definition. This will create a new version of the asset that includes the script changes. See the note below for more information.

  ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452757259_512500557954567_7387970478247480678_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=S1bNnvZSt5wQ7kNvwEypmAv&_nc_oc=Adl46rIni9c6opmONPrcpsuAeoOEJtcaW7Otz-XuOlvlueM7t3r4sQG3vs-ekfHmxBg&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=ROybvPRvfulumhhPURaKRg&oh=00_AfhDpkkzWo24lF1Y3V9aiMixAACBDAw9V8kXObb21seF8g&oe=692C017F)

**❗️Important** : When you open a new world that uses this asset template, the script change will be included in the asset templates update. If the script in your world is on a different version than what is in the template update, accepting the template update will also update the script to be on the same version.