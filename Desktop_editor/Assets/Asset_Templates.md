# Asset Templates

## When to use an asset template

 Asset templates are useful when you want to reuse an asset multiple times in
your worlds, and you want the ability to update all of the instances in
one-fell-swoop. You can create entities from your asset template, and when you make changes to
the asset template, you publish them, and the instance entities are updated. This
makes it easy for you to update all of the instances in all of your worlds,
using just one operation.  

## Example

 Consider a scenario where you want to create a forest in your world, and you
want to create it using many instances of the same tree. Now imagine that you need to update all of the tree objects. If you’d created
the trees from a legacy asset, then you’d have to manually replace every tree in
your forest with an updated one. This could be a lot of work! But if you created the trees from an asset template, then you could update all
of them at the same time just by updating the asset template, and then publishing
the changes. The changes are then pushed to all of the instances of the asset
template in your world.  

## Compatibility & Recommendations


• Asset templates are compatible with anything that can be spawned into the world.
• VR support for asset templates is limited. Overrides to instances of assets done
in VR can only be applied to the definition via the Desktop Editor.
•  We recommend using only [File-Backed Scripts](https://developers.meta.com/horizon-worlds/learn/documentation/typescript/filebacked-scripts/) (FBS) worlds for the best experience and full functionality. Non-FBS scripts are not fully supported. Without file-backed scripts:
  • If you add non-FBS script to the template definition, when editing the template
definition you can’t edit the script (it will not show in the script dropdown in
properties).
  • If you edit a non-FBS script and/or attach it to an instance of the asset
template changes to the script on an instance will not appear as overrides and thus
cannot be applied to the template definition and propagated across worlds.
  • If you add a non-FBS to your definition it will duplicate anywhere it’s used in
a world.

## Feature walkthrough

 This section will go through the general workflow for templates once you are
part of the GK. If you prefer this in video form, please see the tutorial video
below.         

## Creating a basic asset template

 There are two ways to create a template:
•  By converting a legacy asset to an asset template. See Asset Migration section for more information. ![Image](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452458941_512500697954553_8078786083910498359_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=IfelOq1Ct-gQ7kNvwFBOjr1&_nc_oc=AdleC521T3ZUZNDOjpXeWBYkYtt_Tzj0sHNqC-V9x7aEABV08CxSzsaLYEoi2rZwdzw&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=FhDBHKuWiQrhDDkf_AKVEA&oh=00_Affk9IP0bUZFnSnHw1h8LG...
•  By selecting objects in the scene and creating a new asset template from them.

 To begin, first create a basic asset template.
1.  Add a basic cube to your scene. You can get it from the Shapes drop-down menu. ![Image](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452893303_512500567954566_2630102149456461559_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=DQhNbdLJVxsQ7kNvwGd2A2V&_nc_oc=AdlgzUmDaVuJuOTpmr4SraRtzCochYiwBlaSTjQZCpgfDc6tRk51btxu97Mdjfb0YK4&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=FhDBHKuWiQrhDDkf_AKVEA&oh=00_AfcXWUO3StWwsA8_sk3...
2.  Add a basic sphere to your scene. You can get it from the Shapes drop-down menu.
3.  In the Hierarchy, create an asset out of the two shapes by selecting both of
them, and then right clicking on them. In the menu that appears, click Create Asset, and then enter the asset details. ![Image](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452863899_512500587954564_4581130950048103563_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=qC3AaWcCaikQ7kNvwFtF0vn&_nc_oc=Adkyovj5L-TK10cqC7FFq_n-BB6ZNICd0nvaV8xs-6N-9FQ32te4SGXqhJ3qE6o5lSc&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=FhDBHKuWiQrhDDkf_AKVEA&oh=00_AfdBKAcY5_K...
 You can create the asset as a template or as a legacy asset by selecting the
asset type. If you choose Legacy Asset Group, your asset will not have instancing, property overrides, or change
propagation. [](https://developers.meta.com/horizon-worlds/images/Asset_Templates_28605826407187_4.png)

 You have now successfully created an asset template. The icon for the asset
template changed in the Hierarchy. This is one way you can tell that an asset is a
template asset.  

## Editing Asset Definitions

 Asset template definitions are edited in an isolated editing view, similar to
how editing prefabs in Unity works. To enter asset definition editing mode, follow
these steps:
1.  Enter asset definition editing mode. Right-click on your newly created asset,
and then select Edit Template Definition. You can do this from either the Hierarchy, or by right-clicking the asset card
in the Asset Library. [](https://developers.meta.com/horizon-worlds/images/Asset_Templates_28605826407187_5.png)
2.  Change the color of the entity via the property panel, or add new entities to
the objects, then save the asset definition. This saves a draft of the definition.
The he change appear locally in your world. To update the definition, you must
publish the draft. After publishing, your changes appear as available updates in
other worlds. To propagate changes in these other worlds, open the world and
accept these updates. You can see more details under Drafts. [](https://developers.meta.com/horizon-worlds/images/Asset_Templates_28605826407187_6.png)
3.  Next, you’ll be prompted with the option to publish your template. Choose to Save & publish later. [](https://developers.meta.com/horizon-worlds/images/Asset_Templates_28605826407187_7.png)

> 

 Note: Ingested assets must be spawned into a world before their definition can be
edited. This is because ingested assets are created external to Meta Horizon
Worlds and asset properties are applied to spawned instances of assets in a world
before being saved to its definition.  

## Draft Assets

 A draft asset is an asset that has been updated in the current world, but whose
changes haven’t yet been published to a new canonical asset version that can be
used in other worlds.
1.  To view draft assets in the current world, click on the asset updates icon at
the top left of the editor header. [](https://developers.meta.com/horizon-worlds/images/Asset_Templates_28605826407187_8.png)
2.  A modal will appear. Click on the Unpublished changes tab to see a list of all the draft assets in your world. Note: Anytime you edit an asset it’s stored as a draft. ![Image](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/505490657_741347521736535_8523116864699304202_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=K5p_TLVfmM0Q7kNvwHSgchD&_nc_oc=Adnj4eT4zrc5HqfFv8vSGJwYPHE5RZvQ-HCx3y0-tiNVRGxDlfin1Hbhp4cuYfYCQyA&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=FhDBHKuWiQrhDDkf...
3. From here you can either discard or publish your draft asset.
  • When you discard a draft of an asset, all asset instances in the current world
will automatically switch to the latest major version, as dictated by the asset
definition in the asset library.
  • When you publish a draft asset, it will create a new major version of the asset
in the asset library.
4.  Click Publish publish the draft asset. You will be presented with a publish modal. You can
optionally write a comment to be saved as version notes with the new version, and
then when the publishing operation finishes, a new major version of the asset
...
5.  Once the asset is published, click on the Version History button in the Asset Details panel to see its version history. ![Image](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452576260_512500694621220_7586723531942177562_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=tV9Ui1xfHasQ7kNvwF_s-o5&_nc_oc=AdlSddLTt2PlbPxkjDuji3s53nl-R0Ix7SyfT9UK_ivK1MUtqPDc35aupb2_j8v7ar8&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=FhDBHKuWiQrhDDkf_AKVEA&oh=00_AfdaR1x62mUcQhiS74ZUquzAiAPWK_c4Xe3TzlJXG...
6.  The version history modal will display all of the major versions of an asset.
These are all of the asset versions that have been previously published. If you go
into other worlds or share an asset with other users, these are the versions
that will be stored on the root asset definition. The asset can be restored to any
...
of these versions at any time. ![Image](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452933022_512500691287887_6151449604564408312_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=-0lCai59WocQ7kNvwGfys3b&_nc_oc=AdmqGy46cGSRcsSv1y9qEA7GUlPf7FNp3QBZj4ym_cOylyD2TRdvfRmP-LuM9rur3bE&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=FhDBHKuWiQrhDDkf_AKVEA&oh=00_AffRy21BjiUvx5lTu6A38g89QzZldasq-Zvix3...

## Property Overrides

 Property overrides enable you to override the property values on an instance of
an asset template in a world. It effectively allows you to disconnect individual
property values, while retaining a link to the root asset definition. To override a property:
1. Click on the root level asset template in your world. Review the properties.
There shouldn’t be any overrides. ![Image](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452684749_512500684621221_5369449154585863544_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=UiJyKg1tf_sQ7kNvwE9aXYJ&_nc_oc=Adk4LoMXmeF2nkueOaDbs7JHvmevZMNhzS_crVln0lf8IvHWrBvb8X0-ahfrGqFpGLg&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=FhDBHKuWiQrhDDkf_AKVEA&oh=00_AfeEngTxqutq869csyK629hTTytEO38aSpVwXSSMSuaRFQ&oe=...
2. Now, create an overridden property value. Edit the object to change its color.
You’ll notice that the color label has a bold treatment, as well as a blue dot
next to it to indicate that the value has been overridden. In the overrides panel,
you will see a property override on the object showing different values for the
...
previous and current color. ![Image](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452757156_512500681287888_1648985213895312295_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=KGCWK7Cna10Q7kNvwHZoV2r&_nc_oc=AdnYCJiz4IavYycSvEKKQ6D-i0RQZTs4B8kBl0z1ZcikGM7hfHCHNQAxMFNgXwWZ_B4&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=FhDBHKuWiQrhDDkf_AKVEA&oh=00_AfcQCnJ4iJYgpIcAHqarmVelTGfaJeSV6BGmR4ff0rCzgw...
3. From the property overrides panel, you can either select specific overrides to
apply back to the definition, or apply all overrides. When you apply overrides
back to the asset template definition, all instances whose matching properties
haven’t been overridden will inherit the changes, and a new draft version of the
...
asset will be created. ![Image](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452591119_512500677954555_6513963071618982978_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=aCLrzzq7vD0Q7kNvwF8ints&_nc_oc=AdkldNm6C1ssTFaSlcnqncCDBXSsWWTwJZkU81WwFew4cmSg9dknn1Lcnz536zpvz6Q&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=FhDBHKuWiQrhDDkf_AKVEA&oh=00_AfcvLe5oxz6wgo4CM_j--q1vH3bZnBRSMc83SKuq8FfR8g...
4. It’s also possible to revert overrides. Reverting override values will revert
the asset back to the same state as any draft version that exists, or in the
absence of a draft version, the current major version of the asset. ![Image](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452652316_512500674621222_1012367075903542989_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=sLEwZRHLrD4Q7kNvwG9sfLT&_nc_oc=AdlCa5g5KugvV_WGNSkW9UC74f9eWD_GrFRfcZQJpl7PfmsQpwNcNMSfYn7da5F5sm8&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=FhDBHKuWiQrhDDkf_AKVEA&oh=00_AfeeO3GKQgWjUFyEHi6ru4EvhqMV...
 Note: Property overrides persist even when you update the asset. To test this, you
can edit the asset definition, add a new shape to it and then exit. You will see
that the color of the sphere will remain even after the update!  

## Asset Migration

 Assets that were in your asset library before asset templates need to be
migrated in order to work with the new template format. This is a very easy process,
but may take some time for a larger amount of assets. The following steps will walk through asset migration:
1.  You will see a blue icon at the top right corner of an asset card if the asset
needs to be migrated. Right click on the asset card, and select Update Asset from the menu that appears. ![Image](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452665936_512500581287898_7545021707173957534_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=S7b4lYciunUQ7kNvwFIEopw&_nc_oc=Adnya6GxoL4Xcyxu7E23z4ftf3JAF-8LwKpGvTtWBHu2XzrZhgGcP6aotMF55ScvF00&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=FhDBHKuWiQrhDDkf_AKVEA&oh=00_AfcMQYqEpGlHStfbjnQa...
2.  Alternatively, you can also click on the folder and update all assets in a
folder at once by clicking on the link at the bottom right of the asset browser.

 Note: Ingested asset types don’t have to be migrated, only assets created within
Horizon.  

## Ingested Asset Types

 An important note: ingested (imported) asset types automatically inherit asset
versioning. While ingested assets (custom mesh, audio, etc.) are linked, you
won’t see the overrides since ingested asset types don’t allow you to apply
overrides back to the definition. If you’d like to apply an override to an ingested
asset, you can create nested asset templates. These are simply asset templates that
are parented to the same root object.  

## Unlinking assets from an asset template

 Unlinking instances from an asset template removes the connection to the
template. The means it prevents the unliked asset from receiving updates from the asset
template definition. It also removes the ability to push instance overrides
back to the asset template definition. To unlink an instance from a template:
1. Select asset template instance in hierarchy.
2. If the template has nested templates:
  1. Choose Unlink instance root to only unlink the parent template.
  2. Choose Unlink instance root and children to unlike the parent template and any nested child templates.
 ![Image](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452934219_512500594621230_5600854580075909703_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=FrUvJ5cTIUMQ7kNvwGvTXrz&_nc_oc=AdkEejhe2HGSGLSomUlolf7LXkkLlBbsLYgah_pSmnMnrQQqfohZRtos089kl64vAsw&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=FhDBHKuWiQrhDDkf_AKVEA&oh=00_AfdZxcwa17PJhZYIdmMHQJL851_hywZnFblaQ6V7YHxdMA&oe=68F9A44E)

## Attaching scripts to asset templates and updating the definition

 You can attach a script to the asset template by:
• Selecting an asset instance and under properties attaching the script as a
reference.
• Or, right clicking on the asset to edit the definition and then going to the
definition properties and adding the script as a reference.

  
### Attaching the script to the asset template instance

1.  Edit a script in the world from the property panel. ![Image](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452953164_512500601287896_1058603146175003068_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=6UL4fvs0s1kQ7kNvwEFaWdS&_nc_oc=AdnaS7xFyfNRz3D3oUo_xdSCKpejLGanrwGeF6pJxE3E84xh3qFcKH0QB8UXATTrdbU&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=FhDBHKuWiQrhDDkf_AKVEA&oh=00_Aff7s...
2.  When a script is attached to an asset template, you should see it appear as an
override. You will see a blue dot next to Attached Script (above image) and two overrides applied: one for the script and one for motion
...
3. Edit the script’s source code by selecting Open in external editor. When the script’s source code is updated, this will also appear as an override.
4. Publish the script change through overrides. This will update the asset template
definition with the script.
5.  Publish the script change through the overrides panel. This will update the
asset template definition with the script changes included in the latest version of
the template definition. See the note at the end of this section for more
information. ![Image](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452652238_512500577954565_6836600478890992788_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=pf851ioWumwQ7kNvwHJFQ9d&_nc_oc=AdlrosfuheYxJXqMP8eDibL_YCWQyrexXWU87SuRTtFtqbTTzR59Gpi1HJ7Z5Gllroo&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=FhDBHKuWiQrhDDkf_AKVEA&oh=00_AfdZY5mXrpwj1RqDtocpVGD...

### Attaching the script to the asset template definition

1.  Right click on the asset instance (or asset in Assets) to edit the definition. ![Image](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452951204_512500597954563_4508069784119552394_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=eYTnKP88IhsQ7kNvwFARTTj&_nc_oc=AdmI-A8mmquIpVJmyvfS9Y8E3cBJlc15yOgm4Xn5unB7DT2Xp5VwLddLLdzoDq8Ffmo&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=FhDBHKuWiQrhDDkf_AKVEA&oh...
2.  Edit a script in the world from the property panel. ![Image](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452054064_512500541287902_5048148391692387350_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=QttGd9cqe3oQ7kNvwG7BwhD&_nc_oc=AdnEptl9j8h8IyVi6A2YFAk53aMWqqWsRv_CVFZxItTzMh0uuoikWXEHNGFgkG3AXjM&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=FhDBHKuWiQrhDDkf_AKVEA&oh=00_A...
3.  Save and publish the template definition. This will create a new version of the
asset that includes the script changes. See the note below for more information. ![Image](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452757259_512500557954567_7387970478247480678_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=jBPXe35N7NEQ7kNvwHjfpEs&_nc_oc=Adn6-0LdxwdSXGvjUH-Weym17xfkZFDjeiRtj3SyZkXh7_91xDUNfQkUz8tn8902jDU&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=FhDBHKuWiQrhDDkf_AKVEA&oh=00_Aff63D...
 ❗️Important : When you open a new world that uses this asset template, the script change
will be included in the asset templates update. If the script in your world is on
a different version than what is in the template update, accepting the template
update will also update the script to be on the same version.    ![Nav Logo](https://static.xx.fbcdn.net/rsrc.php/yE/r/3SoBlk8EqOQ.svg)


[Facebook](https://www.facebook.com/MetaHorizon/)
[Threads](https://www.threads.com/@metahorizon)
[X](https://x.com/MetaHorizon)
[Instagram](https://www.instagram.com/metahorizon/)
[YouTube](https://www.youtube.com/@MetaQuestVR)

 Learn
[Documentation](https://developers.meta.com/horizon-worlds/learn/documentation/)
[Blog](https://developers.meta.com/horizon/blog/)
[Forum](https://communityforums.atmeta.com/t5/Creator-Forum/ct-p/Meta_Horizon_Creator_Forums)

 Programs
[Meta Horizon Creator Program](https://developers.meta.com/horizon-worlds/programs/)

 My Creations
[My Worlds](https://horizon.meta.com/creator/worlds_all/?utm_source=horizon_worlds_creator)
[My Assets](https://horizon.meta.com/creator/assets/?utm_source=horizon_worlds_creator)
[Performance](https://horizon.meta.com/creator/performance/traces/?utm_source=horizon_worlds_creator)

 Privacy & Legal
[Privacy Policy](https://www.meta.com/legal/privacy-policy/)
[Legal](https://www.meta.com/legal/supplemental-terms-of-service/)

 © 2025 Meta

### Attaching the script to the asset template instance
...
### Attaching the script to the asset template definition
...

## Additional Links
- [Meta home](https://developers.meta.com/horizon-worlds/)
- [Login](https://developers.meta.com/login/?redirect_uri=https%3A%2F%2Fdevelopers.meta.com%2Fhorizon-worlds%2Flearn%2Fdocumentation%2Fdesktop-editor%2Fassets%2Fasset-templates%2F)

# Asset Templates

 An asset template is an asset that has the type “Template”. You can create one
from a complex object in your Hierarchy. Asset templates work just like legacy
assets (like a 3D Model), except that they include powerful change propagation and
versioning features. Like legacy assets, asset templates can include:
• Multiple objects in a hierarchy, with a root object and child objects.
• Properties that define behaviors. For example, grabbables, and objects with
physics.
• An attached script component.

 But in addition to these features, asset templates also support the following:
|  |
|  |
| Change Propagation | When you need to update all of the entities spawned from an asset template, you don’t have to update each instance by hand. Instead, you can update the asset template itself, then publish your changes, and they’ll propagate to all of the instances. This synchronizes your changes across all of the worlds where you used that asset template. |
| Property Overrides | Allows you to customize asset template instances by overriding inherited property values. If you want to apply those changes to all of the other instances of the asset template, you can push them back to the asset template, and then republish. |
| Versioning | Each time you publish a change to an asset template, it creates a new version of that asset template. This version information is added to the version history of changes. Keeping track of the version history lets you revert to any previous version of the asset template. |

> 

 Note: Meta Horizon Worlds Asset Templates are similar to [Prefabs in Unity](https://docs.unity3d.com/Manual/Prefabs.html).  
## When to use an asset template
...
## Example
...
## Compatibility & Recommendations
...
## Feature walkthrough
...
## Creating a basic asset template
...
## Editing Asset Definitions
...
## Draft Assets
...
## Property Overrides
...
## Asset Migration
...
## Ingested Asset Types
...
## Unlinking assets from an asset template
...
## Attaching scripts to asset templates and updating the definition
...
## Additional Links
