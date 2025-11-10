Source: https://developers.meta.com/horizon-worlds/learn/documentation/typescript/legacy-script-storage

# Legacy Script Storage

Legacy script storage availability

 As of 2/20/2025 all new created worlds will use the file backed script storage solution. The contents of this document applies only to worlds created before 2/20/2025 that have not opted-in to the file-backed scripts solution.

There are some important differences between the legacy script storage solution and file-backed scripts for worlds that leverage the legacy solution.

* There is a size limit per script of 32 kb.
* [Scripts in legacy worlds don’t have an ID and rely solely on script names.](/horizon-worlds/learn/documentation/typescript/script-storage/filebacked-scripts#How-script-identification-works)
* There are some differences in [asset behavior](/horizon-worlds/learn/documentation/typescript/script-storage/filebacked-scripts##benefits) between the legacy and FBS as script storage options.

## Opt-in to file-backed scripts solution

If your created world is on the legacy system, you can always opt-in to the file-backed scripts system at anytime.

**Note**: Clones of worlds that don’t use file-backed scripts will not use file-backed scripts unless opted-in.

To opt-in to file-backed scripts as your script storage solution use the following process:

- Open the **Scripts** dropdown and click the **Settings** gear.
  ![Horizon scripts drop-down menu](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452597170_512510831286873_3548532530261191130_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=ZmYM1FqMgHwQ7kNvwE7bc5X&_nc_oc=AdlAMIwEslv-2y-n2jOUWColappAOZEc7Z_wqDJQHpyv4KqVYRtTc6Uum_rrKIrn2ks&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=A_kimS8QryGoMSWMtgcfgA&oh=00_AfhoviAOv0X0iEfAg8247ZhWb_Ys-7604D8jDR98xSsFPg&oe=692BD820)
- Under **File-Backed Scripts**, click **Review**.
  ![File-backed scripts review option select](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452615549_512510827953540_9044292763116055780_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=MEYlcvZ2It4Q7kNvwEzT_Sy&_nc_oc=AdlTesJ6YB2UOFbmbrQd3SzaaEzxGv-ZM6XBMeRIsSgwiHQ-3r_h2nz7dBOtIgnY4GY&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=A_kimS8QryGoMSWMtgcfgA&oh=00_AfguwbCiaMI0NXjrSFzepc3CFbwYSuaHg1dTQMF9jSn4ww&oe=692C0016)
- After reading the information, click **Update**.
  ![File-backed scripts update window](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452815592_512510834620206_8372864601099325167_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=H75Gn0LUHEUQ7kNvwHClleF&_nc_oc=AdnAYWZAvWxqnh40hfyDa5o-4e3gVtQADCthp1pAxfwUf7x-2_EAFgn7_3fji4_Ehr4&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=A_kimS8QryGoMSWMtgcfgA&oh=00_AfhIfnBzqfTnUkT8DbTtxm4KREhw6IFeX_ye5qxSGkvxag&oe=692C0A15)
- Once you click **Apply**, your changes will be saved and your world and all the scripts in it will be migrated to FBS.
  ![Script settings window after opting in to FBS](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452632855_512510837953539_4593726217778374945_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=2mL6a_oSxP4Q7kNvwHV1yDH&_nc_oc=AdmtvHdbSRHAM07IBRpJ0WrGqq5Ls3lDZrvbyenfd3cLZEKOBVl5Ciyu1gjCgSGzwOk&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=A_kimS8QryGoMSWMtgcfgA&oh=00_AfgbLf7eKULie0OMEtFvmOlcjyDER697W5JwwcnEBcN3QA&oe=692BFECC)
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