# Scripting Considerations

  
## Naming conflicts

 When spawning content it is possible to attempt to load two different scripts
with the same name causing a naming conflict. This can happen when a world
contains a script and then spawns content containing a script with the same name, or if
two pieces of content are spawned both containing scripts with the same name.
For file-backed scripts worlds see the [documentation page](https://developers.meta.com/horizon-worlds/learn/documentation/typescript/filebacked-scripts) for details on execution specifics. In other worlds all scripts will be
executed. In both cases a warning will be logged to the scripting console. If there is a naming conflict on a script that is imported from another script,
the first loaded version of the imported script will get imported. For example,
say there is a world containing a script called `Utils` and an asset containing a script called `Utils` and a script called `Component` which contains the line `import {Foo} from './Utils'`. If the world spawns that asset, when `Component` runs it will be importing from the `Utils` script in the world, not the asset. In general it is recommended to avoid naming conflicts as they can lead to
unexpected or difficult to understand behavior.    ![Nav Logo](https://static.xx.fbcdn.net/rsrc.php/yE/r/3SoBlk8EqOQ.svg)


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
