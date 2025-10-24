# Asset Spawning Reference

  
## Overview

 Every world in Horizon is saved as a world snapshot. The snapshot contains a
list of shapes, scripts, gizmos, and how they are all organized. When you edit a
world in build mode a new snapshot is generated. Note: If you ever make a mistake, you can use the [My Creations Page](https://horizon.meta.com/creator/worlds_all/?locale=en_US) to revert a world back to a previous snapshot. An asset is a collection of objects and scripts that you can save outside of all of your
world snapshots. For example, you can make a hat, save it in your Asset
Library, and then delete the hat from the world you made it in. In the future you can
then add that hat to any world by pulling it out of your Asset Library in build
mode. A copy of that asset is then saved in that world’s current snapshot. Note: If you edit the asset in the library, the copy you just created is not updated. Scripts can load and unload assets into a running instance without the asset
needing to be stored in the world’s snapshot. You can have a world that has 1000
outfits (which would likely be over capacity) by choosing which of them to
dynamically load while the world is running in an instance. To load objects into a running world instance you spawn an asset. This loads in a copy of that asset as a collection of new objects and scripts.
To unload that copy, you delete the spawned object(s), therefore despawning that copy of the asset. This feature makes it possible to spawn in items such as scenery, wearables,
interactive objects, and more, but only when you actually need them. For example, a
world could unload portions of a map to free up capacity to then load in
others. As another example, you don’t need to make 10 copies of a hat, instead you can
make the asset once and put it in your asset library. Then, without having any
copies in the world snapshot, you can spawn in as many as you need as long as the
spawned objects stay under 100% on all capacity meters. Spawning is similar to placing objects, gizmos and assets from your build menu in build
mode except that it does not modify the save-state of the world. Deleting spawned objects is similar to deleting objects/gizmos/assets in build mode.  

## Spawning Considerations


•  Keep track of all spawned objects. If you want to delete spawned objects then you need to keep track of them. At
minimum, when you spawn in an object you should store it in a script variable or
list so that you can reference it in the delete spawned object code block.
Capacity limits are still in effect even though the spawning occurs in play mode. Each asset has a record of how much capacity it needs on each meter such as
objects, complexity, vfx. When the asset spawns, it takes up the capacity on each of
those meters. If spawning the asset would take any of the meters over 100% then
the spawn will fail. Note: Currently there is no way to detect a failure and no way to see how much
capacity an asset needs other than to remove the asset in build mode and look at the
relative change in the meters.
•  Asset spawning follows all the same capacity rules as build mode. If you publish a world with 90% object capacity and then have that world spawn
assets in publish mode, the 90% object capacity will keep increasing until it
hits 100% after which no new assets will spawn. At that point you would need to
despawn previously spawned objects to free the object capacity again.
•  Make assets self-contained. Assets must be entirely contained to work properly, whether imported in build
mode or spawning in scripts. This means that all referenced objects and script
gizmos attached to objects must be contained within the asset. Assets currently cannot include persistent gizmos such as leaderboards and
achievements since they would not be self-contained. When an asset is spawned, the
scripts are renamed to prevent name clashes similar to when you pull out the asset
from the library.
•  Be mindful of asset size. Larger assets will take longer to spawn and once they do spawn, the lighting
calculation will take longer to settle.

## Current Limitations (as of June 2022)


•  Only spawn single-group assets. There are currently issues with spawning assets that are not a single group.
The event callback doesn’t reference all spawned objects. There is no way to
delete all the spawned objects, and the spawned objects will not be correctly
positioned or rotated. You should only spawn assets where all objects are grouped
together into a single group.
•  No failure detection. If an asset fails to spawn there is no way to detect such failure.
•  Not all gizmos can be included. Since assets must be self contained you cannot use any gizmos that reference
specific world data. This means that you cannot use the leaderboard gizmo in an
asset and cannot use leaderboard code blocks in a script used inside an asset. The
same rule applies to the gizmo and code blocks for achievements and to the code
blocks for persistent variables.
•  Existing instances won’t get updates to an asset. If you modify an asset, new instances of your world will get the updated asset.
Any already-running world instances will continue to spawn the version that
existed when the instance started. There is currently no way to force an already
running instance to refresh or update assets.
•  Wait a frame before sending messages. Currently you can’t send events to objects in the same frame they were spawned.
There is a bug where these events get ignored. When you get a reference to a
spawned object you need to send any messages to it with a delay or on a later
frame. The bug only occurs right when the object spawns, so after that one frame you
can send events to the object as usual.
•  Assets cannot be scaled when spawned. The spawn asset code block allows you to specify the position and rotation but
not the scale. If you want to scale a spawned asset it will need to be dynamic.

## How To Spawn Assets


1.  Create an asset variable in a script. To spawn an asset you need a script with an asset variable which you will set
to contain an asset in step 5. You can call this variable whatever you like, for
example “hatAsset”, “hat”, “asset”.
2.  Apply the script to an object. The script from step 1 needs to be on an object as like any other script. That
object will run the code blocks that spawn the asset.
3.  Open the scripted object’s property Panel. Open the property panel of the object from step. From here you will see the
Asset Variable field as empty in the variables section of the property panel.
4.  Find the asset in the Asset Library. From your build menu navigate to your asset library, then navigate to the asset
you want to spawn. Select the view info icon on that asset.
5.  Connect the reference pill. On the property panel you opened in step 4, scroll down to see the asset
reference pill (blue in color with the asset name){picture}. Select and drag this
reference pill to the Asset Variable field “empty” on the objects property panel
where the script was applied in step 3. The field will have the variable name that
you chose in step 1. Note: Unlike object references, there is no wire drawn back to the asset in the asset
library, just the name of the asset is shown in the variable value field.
6.  Spawn the Asset. The script from step 1 can now use the spawn asset code block. You can use the
variable that you created in step 1 to specify what to spawn. Note: You can have one script spawn many different types of assets. You need to wire
them all to different variables in the script.

## Code blocks

  
### Spawn Asset
#### Appearance in Library

 ![Image](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452752336_512500807954542_5254547471001885716_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=7M_az1WD4t4Q7kNvwFXBbgr&_nc_oc=AdmUEW5FWx9Z2_lAUkvY_giGyKqTrxf89GltMHpdiwTzkP8SLMYAsIvd-NzlIqIrDMY&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=lDe2ITnNuoC6-_K2wrCnSA&oh=00_AfeHoWjLZebe41F3jcWLwlJ6eV5SNTklSBgh_p5...
#### Appearance in Composition Pane

 ![Image](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452714644_512500714621218_4261059319210864500_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=lgXQB1L0-MgQ7kNvwFwxkFN&_nc_oc=Adl9WsUDkDQbR0ix1lUBlPTqSExWwkfi4CB99y8v-Ghs9wYZntCy4grRziQ3mZLjHno&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=lDe2ITnNuoC6-_K2wrCnSA&oh=00_AfcNhOqjmTUY0UxRfis_TS4DxRUmKyyh...
#### Parameters


|  |
|  |
|   | The asset to spawn. |
|   | The location the object should be at when it spawns. If the spawned object is static then it cannot be moved again from this location. |
|   | The orientation the object should have when it spawns. If the spawned object is static then it cannot be rotated again from this orientation. |
|   | The callback event. When the object finishes spawning, this event will be sent to the variable. The event is sent with the parameter. |
|   | The receiver object. When the object finishes spawning the event will be sent to this object along with an object parameter containing the newly spawned object. |

  
### Spawn Asset

 Actions ➤ Object ➤ spawn asset Spawn a new instance of an asset into a running world. The spawn may fail if
there isn’t enough capacity available.  
#### Appearance in Library
 ...
#### Appearance in Composition Pane
 ...
#### Parameters
...
### Delete Spawned Object
#### Appearance in Library

 ![Image](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452969695_512500704621219_1394257617887084763_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=ClJxmOi3CtkQ7kNvwHIeqJB&_nc_oc=AdmkPuR7qSKFhufhV4Ra_VVG9SFXssPfGaAiayR1mMBCa4YwAGQ5sjs-EAyL9bKh0JQ&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=lDe2ITnNuoC6-_K2wrCnSA&oh=00_Afewkd7v87joIROv3AhMyiojWFzHkh2k8...
#### Appearance in Composition Pane

 ![Image](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452703858_512500701287886_8762871484516485588_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=nsWfiryZ7LsQ7kNvwFFJ_yz&_nc_oc=Adl7Ot8T1z_eUFvo0cxwPhuT6aIyYHKSP4leAzYUwA3i3FdNAe10ljGS-9jB2qhv9-0&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=lDe2ITnNuoC6-_K2wrCnSA&oh=00_AfejQA-GEgbnVwQasQRGBui07Q2...
#### Parameters

 ![Image](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452713200_512500797954543_7599535066046834550_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=y6Jm6s2LEtgQ7kNvwFKpnBw&_nc_oc=AdkI4K5-QNc30r-zpuNefOHrQELe30HdrXtxyo-flAa3uFr2PY0uZwKN8mvt-fdhJLI&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=lDe2ITnNuoC6-_K2wrCnSA&oh=00_AffZ6258FkIMZg2EYGu0XQFzJVxtTA5YR7_T...
#### Parameters
...
|  |
|  |
|   | The object to delete. This Object must have been spawned using the spawn asset code block. |
### Delete Spawned Object

 Actions ➤ Object ➤ delete spawned object Delete an object that was previously spawned, removing the objects and freeing
up their capacity.  
#### Appearance in Library
 ...
#### Appearance in Composition Pane
 ...
#### Parameters
...
### Examples

  
#### Spawn an object when grabbed

 What it does: This example spawns a hidden temple whenever a player grabs an object. The
temple despawns if the player lets go of the object. How it works: When a person grabs the object the script is run, the hiddenTemple asset spawns
and specifies that the event spawned be sent to self when the spawn completes.
When the spawned event is received the spawned object is saved in a variable, so
that it can despawn when the object is released. ![Image](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452978382_512500801287876_8649813773209549898_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=nIZ-TvbMMYMQ7kNvwGd8SVX&_nc_oc=AdkwveaUM7y9ehyrT_YRUCbw1NcxwqD2zh_0pnMSzmkcSIBCv2dqgyyciGq0dy6Wu-c&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=lDe2ITnNuoC6-_K2wrCnSA&oh=00_AfeYp7UHW1lMeG97tTK...
#### Updated Assets Only Appear In New Instances

 One benefit of spawning is that you can modify an asset and have it update in
all the worlds that reference it. However, once a world instance starts, asset
versions are frozen for that instance. Only instances of worlds created after updating the asset will see the updates.
Instances that were running when the modification was made will continue to
spawn in the version of the asset that existed when those instances started.
Updating an asset does not require worlds that use it to be republished. Any new
instances will get the updated asset. Note: This impacts build mode (as of June 2022). Updating the asset in build mode
does not update the spawning asset in that instance of build mode. Either that
instance of build mode needs to be closed by leaving build mode instance or you can
create a new asset hence getting around the asset being frozen for that instance
of build mode.  
#### Example Uses of Spawning

 Spawning environment gizmos: In published mode, spawning in environment blocks with different properties
will take effect in your world the moment they are spawned. If your world has no
environment gizmos in it, you can spawn them in and out by changing the sky from
day to night or by turning the fog on or off. This makes it possible to create dynamic environments. Spawning static assets: If objects are marked as static (their motion type is “none”) then when they
are put into an asset they will still be static when they spawn. If you spawn in a
static asset that contains emissive objects, then once it spawns, the objects
will cast light into the world. This allows you to load and unload lights without
using dynamic lighting. Note: Spawning takes time to happen whereas dynamic lights are instantaneous. You can spawn in and out of sections of the world as people move around it. This
allows you to simulate a much larger world but only if the visitors stay close
enough together. This makes it possible to create procedural environments and loading levels. Spawning animated/dynamic assets: When dynamic assets are spawned, the resulting objects will receive the when world is started event and start up as usual. For example, the asset will fall due to gravity or
auto-play an animation if play on start is enabled. You can spawn and despawn dynamic objects as a way to create
achievements for instance, you can despawn a hat and spawn in a cooler one. To create variety you can choose which car you want to drive or create variance
in NPCs. This makes it possible to create wearable costumes, rewards, weapon
skins, unlockable items, and more.  

## FAQs

 Q) Can I send events to spawned assets? A) Yes, but currently you will want to use a delay for any initial events right
after the spawn. After that you can use any events or delayed events as usual. Q) Can I receive events from spawned assets? A) Yes, once assets spawn in they act like any other object and can send and
receive events. When the asset spawns, you can send events to the spawned object to
connect it to other objects in the world. Likewise, the spawned object can
interact with triggers, collisions, be grabbed, and so on. Q) Can I spawn assets from a non-owner or non-editor’s asset library in my
world? A) Yes, once the reference to the asset is made in the asset variables you can
spawn in assets from anyone even if they are no longer an editor on your world. Q) Can I spawn doors as an asset? A) Yes, but the doors will only work if the owner of that world is an editor or
tester in your world.    ![Nav Logo](https://static.xx.fbcdn.net/rsrc.php/yE/r/3SoBlk8EqOQ.svg)


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

### Spawn an object when grabbed
...
### Updated Assets Only Appear In New Instances
...
### Example Uses of Spawning
...

## Additional Links
- [Meta home](https://developers.meta.com/horizon-worlds/)
- [Login](https://developers.meta.com/login/?redirect_uri=https%3A%2F%2Fdevelopers.meta.com%2Fhorizon-worlds%2Flearn%2Fdocumentation%2Fdesktop-editor%2Fassets%2Fasset-spawning-reference%2F)

# Asset Spawning Reference

  
## Overview
...
## Spawning Considerations
...
## Current Limitations (as of June 2022)
...
## How To Spawn Assets
...
## Code blocks
...
## FAQs
...
## Additional Links
