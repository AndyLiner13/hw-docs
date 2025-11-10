Source: https://developers.meta.com/horizon-worlds/learn/documentation/vr-creation/scripting/use-file-backed-scripts

# Use file-backed scripts

File-backed scripts is a script storage system that increases script size limits and improves script consistency by storing scripts on the server, rather than in the world.

All worlds created between July 24, 2024 and July 31, 2024 use file-backed scripts by default.

## How Meta Horizon Worlds stores scripts

With file-backed scripts, scripts are stored on the server. Worlds only store a reference to each script used in that world. When you save a script, the latest version is saved to the server and your world will reference that latest version.

Any number of entities can reference the same script. When you update that script, all entities referencing that script (both scripted entities and gizmos) will automatically get the most up-to-date version. Assets referencing that script need to be re-saved to get the most up-to-date version.

Script gizmos aren’t required with file-backed scripts and won’t be automatically created in most cases. You can still create new script gizmos from your list of scripts

## Benefits

* No limit on the total number of scripts you can have.
* Reduced travel times.
* Assets with scripts should work more reliably between worlds.
* Spawning multiple copies of an asset no longer creates multiple copies of that asset’s scripts. Instead, all spawned assets reference a single instance of that asset’s scripts.
* Assets no longer require script gizmos. Assets will automatically import the scripts they reference into the world when spawned or dragged in.

## Considerations

* Assets saved in worlds using the new script storage method aren’t compatible with worlds using the old script storage method.

## How to opt in to/out of this feature

**Note**: Worlds created between July 24, 2024 and July 31, 2024, and clones of worlds created between those dates, already use file-backed scripts by default and can’t opt out of file-backed scripts.

Clones of worlds that don’t use file-backed scripts will not use file-backed scripts unless opted-in.

Worlds created before July 24, 2024 that contain scripts will never be migrated to use file-backed scripts unless you manually opt in. Worlds with no scripts will be autmotically migrated, which means scrips added in the future will be file-backed.

**We don’t recommend opting in existing published worlds and we don’t recommend opting in to this feature unless you have hit the limit on the total number of scripts in a world.** It may be worthwhile to opt in a world you’re developing if you are running into the limit on the total number of scripts allowed.

You can opt in to this feature on a world-by-world basis. **Your world will likely require manual changes to existing assets after migrating to the new script storage system.** Opting out of this feature requires rolling back to a previous snapshot.

### Recommendations

* Don’t opt in an existing published world.
* Don’t opt in a world you plan to publish soon.
* Before opting in a new world, first:
  + Clone that world.
  + Opt in the cloned version.
  + Determine if all assets in the world work as expected.
  + If not, make manual changes to update assets to the expected script version.
* After you know what manual changes will be required, you may choose to opt in the original version of your world and make the same changes.

### To opt into file-backed scripts:

- In creation mode, open your wearable by turning your wrist.
- Select the **Three Line** icon to open the Creation UI.
- Select the **Script** icon then select the Settings tab.
- Select **Review**, then after reading the information, select **Update**.

Your world and all the scripts in it will automatically be migrated to the new script storage system.

### What to look out for after opting in a world

After opting in a world, there are some scenarios where you may need to manually update your scripts and assets to make sure they behave as intended.

#### Existing assets won’t be automatically migrated to the new script storage method

If your world uses a mix of world scripts and asset scripts, you must manually recreate your assets to republish them with references to the newly stored scripts. If you skip this step, existing assets aren’t guaranteed to work as intended and won’t get the benefits of the new script storage method.

New assets created in opted-in worlds will use the new script storage method.

#### The new script storage method doesn’t allow for multiple versions of the same script in a world (conflicting script versions)

If your world contains assets that reference a different version of a script than the one in the world, those assets will instead reference the world’s script version when spawned. If your world contains spawned assets that reference different versions of the same script, each of the spawned assets will now use the same version of the script. They will use the script version in the world if it exists, or the script version attached to whichever asset is spawned first.

When either of these situations occur, you should see a message in the scripting console to let you know that your world had conflicting script versions and the references have been automatically changed to resolve any conflicts.

To prevent any unintended behavior, update your assets to reference the intended script version. You can do this by recreating the asset with the intended script version, pulling it into the world, and resaving the asset.

#### Changes in Script Identification

In worlds that support file-backed scripts, every script has a unique ID used by Meta Horizon Worlds to identify the script. Scripts in legacy worlds don’t have an ID and rely solely on script names.

When a new script is created, if there is no existing script with that name in the world, a new ID is assigned to the script. If the world is cloned, scripts within the cloned world will have the same IDs as in the base world. Similarly, if an asset containing scripts is dragged into a world, those scripts maintain their IDs.

If your team uses cloned worlds and assets as branches that get merged into a main world, ordering of steps during the merge is important. Make sure to execute the following steps in order when merging from a branch world to your main world:

- Update scripts and assets in the branch world
- Drag in assets to the main world
- Pull in code changes to the main world

In step 3, any scripts that are included in assets will already be known to the main world and they will be assigned the existing ID. If steps 2 and 3 are switched, any new script will be assigned a new ID when the code is pulled. Then, when the asset is dragged in, there will be two copies of the script: one with the newly created ID, and one with the ID from the script in the asset. Scripts with duplicate names cause undefined behavior when used as dependencies on other scripts and can create confusion.

## To opt out of file-backed scripts:

We recommend remaining on the new script storage system, but if you want to opt out, you’ll need to roll back your world to a previous backup. This means that you will lose all changes made to the world after opting in to the feature.

You can roll a world back to a previous backup using the [Developer Dashboard](https://developers.meta.com/horizon/manage/) or in VR.