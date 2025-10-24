# Tutorial Assumptions

 In these tutorials, the following assumptions are applied.  

## Desktop editor

 The Meta Horizon Worlds desktop editor is the primary tool for creating worlds.
Most examples in these tutorials reference actions that you perform in the
desktop editor. Additionally, in-headset (VR) editing may be referenced in the tutorials, as it
can be useful for refinement and playtesting. Once your world is completed, you
should test it in-headset to ensure it playtests properly before publishing it.  

### VR first

 Unless otherwise stated, these tutorials are intended to be explored through the
desktop editor and visited through the VR headset. While they are likely to
work on other devices, some differences may occur. In some cases, functionality on
non-VR devices is untested.  

## API v2.0.0

 These tutorials are based on v2.0.0 of the TypeScript APIs. Note: If you have been working in an earlier version of the TypeScript API, you will
need to upgrade your world to use the elements of these tutorials. See [Upgrade World to API v2.0.0](https://developers.meta.com/horizon-worlds/learn/documentation/typescript/upgrade-world-to-typescript-api-v200).  

## Non-file backed scripts worlds

 A File Backed Script world does not store its scripts as individual entities in the world. Instead,
world scripts are stored in a separate database, which allows for platform-based
version management and shared usage. Note: Unless otherwise noted, these tutorials are not FBS (File Based Scripts)
worlds. This has the following implications:
• Assets from these worlds cannot be used in File Backed Scripts worlds. They are
not compatible.
• Features of the desktop editor that apply to File Backed Scripts worlds are not
available when you open these worlds. For example, in the context menu for a
script in the Scripts panel, the option Spawn New Gizmo for the script is not
available.
• Asset templates created from entities in these worlds that contain scripts
result in individual instances of the script in your world for each instance of the
asset template added to it.

 For more information, see [Use Assets from Tutorials](https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/getting-started-with-tutorials/use-assets-from-tutorials)  

## Slide movement style

 In VR, users can define movement to be either Slide or Teleport style.
• Slide movement style allows the user to move by pointing the controls and moving in the pointed
direction.
• Teleport movement style allows the user to point to a location in the world with the controllers, which
establishes a target location. The player’s avatar then jumps to that location.

 Note: These tutorials assume use of Slide movement style. Teleport movement style
does not support jumping and is not supported on Quest mobile applications.    

## Additional Links
- [Meta home](https://developers.meta.com/horizon-worlds/)
- [Login](https://developers.meta.com/login/?redirect_uri=https%3A%2F%2Fdevelopers.meta.com%2Fhorizon-worlds%2Flearn%2Fdocumentation%2Ftutorial-worlds%2Fgetting-started-with-tutorials%2Ftutorial-assumptions%2F)
