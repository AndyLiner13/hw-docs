Source: https://developers.meta.com/horizon-worlds/learn/documentation/typescript/legacy-script-storage

# Legacy Script Storage

Legacy script storage availability

 As of 2/20/2025 all new created worlds will use the file backed script storage solution. The contents of this document applies only to worlds created before 2/20/2025 that have not opted-in to the file-backed scripts solution.

There are some important differences between the legacy script storage solution and file-backed scripts for worlds that leverage the legacy solution.

* There is a size limit per script of 32 kb.
* [Scripts in legacy worlds don’t have an ID and rely solely on script names.](https://developers.meta.com/horizon-worlds/learn/documentation/typescript/script-storage/filebacked-scripts#How-script-identification-works)
* There are some differences in [asset behavior](https://developers.meta.com/horizon-worlds/learn/documentation/typescript/script-storage/filebacked-scripts#%23benefits) between the legacy and FBS as script storage options.

## Opt-in to file-backed scripts solution

If your created world is on the legacy system, you can always opt-in to the file-backed scripts system at anytime.

**Note**: Clones of worlds that don’t use file-backed scripts will not use file-backed scripts unless opted-in.

To opt-in to file-backed scripts as your script storage solution use the following process:

- Open the **Scripts** dropdown and click the **Settings** gear.
  ![Horizon scripts drop-down menu](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452597170_512510831286873_3548532530261191130_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=L21F8secM1oQ7kNvwEVu4NF&_nc_oc=AdkPBIxMKLPa4RzU5iVf9zMv_YdYB2DAgu4zlQ9RaH_2-6PPa8JF1v_l5KW8GJWSC-k&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=bGrAqK5B5oe2raZlNXbbIA&oh=00_AfjXuZDIBSEMX7-f8SSGlXU8PxMHW6165Jp-ej5PCdcSNg&oe=6930ADA0)
- Under **File-Backed Scripts**, click **Review**.
  ![File-backed scripts review option select](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452615549_512510827953540_9044292763116055780_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=YNh8gNq6vt4Q7kNvwGxV9HA&_nc_oc=Adm2R9pv2gNDuE9iFroAPx_yGL6VwxCoYSgpeuR72OnFeyCwTOJrRakKsOUaom97zQY&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=bGrAqK5B5oe2raZlNXbbIA&oh=00_Afh4DbetqJBMItnpjdTx9PlQ1oKaK_n-Amdq-MJ-XchNCQ&oe=69309D56)
- After reading the information, click **Update**.
  ![File-backed scripts update window](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452815592_512510834620206_8372864601099325167_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=L7yAehRhpVkQ7kNvwGlEy9d&_nc_oc=AdktWK4P78pSMBq1y1L8o-AihbUA7LJPEoONJqgTvFpA8rig8hWWvqITbu8Jm70K1AE&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=bGrAqK5B5oe2raZlNXbbIA&oh=00_Afjuyn59yLP1nMhR_FrJcTWCTngv1mo4WIwwj_lb-1bjIQ&oe=6930A755)
- Once you click **Apply**, your changes will be saved and your world and all the scripts in it will be migrated to FBS.
  ![Script settings window after opting in to FBS](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452632855_512510837953539_4593726217778374945_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=V-oUotkFOMQQ7kNvwGXIPAw&_nc_oc=AdnE1QUtCa5tfgsyWI8mafW7YyxUzVPVZX0WoGYMc-0p2cAyuCnYaUZ-VVmt0-jeaEo&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=bGrAqK5B5oe2raZlNXbbIA&oh=00_AfhVwfGqU0UFTTSxJrVHd9Bsx-kqdU5uDm7vi1i9MugS4A&oe=69309C0C)
- A notification will appear when the migration is complete.

## What to look out for after opting in a world

After opting in a world, there are some scenarios where you may need to manually update your scripts and assets to make sure they behave as intended.

### Existing assets won’t be automatically migrated to the new script storage method

If your world uses a mix of world scripts and asset scripts, you must manually recreate your assets to republish them with references to the newly stored scripts. If you skip this step, existing assets aren’t guaranteed to work as intended and won’t get the benefits of the new script storage method.

New assets created in opted-in worlds will use the new script storage method.

### The new script storage method doesn’t allow for multiple versions of the same script in a world (conflicting script versions)

If your world contains assets that reference a different version of a script than the one in the world, those assets will instead reference the world’s script version when spawned. If your world contains spawned assets that reference different versions of the same script, each of the spawned assets will now use the same version of the script. They will use the script version in the world if it exists, or the script version attached to whichever asset is spawned first.

When either of these situations occur, you should see a message in the scripting console to let you know that your world had conflicting script versions and the references have been automatically changed to resolve any conflicts.

To prevent any unintended behavior, update your assets to reference the intended script version. You can do this by recreating the asset with the intended script version, pulling it into the world, and resaving the asset.