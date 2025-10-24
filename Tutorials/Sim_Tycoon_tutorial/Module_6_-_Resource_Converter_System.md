# Module 6 - Resource Converter System

## System components

  
### ResourceConverter.ts

 This script contains two parts:
1. convertOre() – A function that handles the conversion process.
2. OreToCurrencyTrigger – A trigger component that detects when a player enters and calls the
conversion.

  
#### Property description


• targetVfxEntity – Entity where the conversion visual effect will play when resources are turned
into currency.

  
#### Core functions


• convertOre(player, rcData) – Converts all ore (green, blue, purple, red) into corresponding currencies
using the player’s stat multipliers.
• OreToCurrencyTrigger.start() – Calls `convertOre()` for the entering player.

  
## How to deploy


1. Add `ResourceConverter.ts` to your project.
2. Create a trigger entity in the world (e.g., a conversion station).
3. Attach `OreToCurrencyTrigger` to the trigger.
4. Assign a `targetVfxEntity` for the conversion effect.

  
...
...
# Module 6 - Resource Converter System
...
## How to use


• Players mine resources (gems or ore) with tools like the pickaxe.
• When a player steps into the trigger, `OreToCurrencyTrigger` runs.
• All resources in player inventory are converted into currency.
• The HUD and leaderboard score update automatically.
• Visual and sound effects play to signal the conversion.

  
...
...
# Module 6 - Resource Converter System
...
## Modifications


• Add new resource types (extend `convertOre()` with additional conversions).
• Change conversion multipliers (adjust `playerStats`).
• Customize effects by swapping `SFX_ConvertItem`, `SFX_UI_Reject`, or `VFX`.
• Add cooldowns or limits so conversion can only happen under certain conditions.

    ![Nav Logo](https://static.xx.fbcdn.net/rsrc.php/yE/r/3SoBlk8EqOQ.svg)


[Facebook](https://www.facebook.com/MetaHorizon/)
[Threads](https://www.threads.com/@metahorizon)
[X](https://x.com/MetaHorizon)
[Instagram](https://www.instagram.com/metahorizon/)
[YouTube](https://www.youtube.com/@MetaQuestVR)

 Learn
[Documentation](https://developers.meta.com/horizon-worlds/learn/documentation/)
[Blog](https://developers.meta.com/horizon/blog/)
...
...
# Module 6 - Resource Converter System
...
## Modifications
...
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
...
...
# Module 6 - Resource Converter System
...
## Additional Links
- [Meta home](https://developers.meta.com/horizon-worlds/)
- [Login](https://developers.meta.com/login/?redirect_uri=https%3A%2F%2Fdevelopers.meta.com%2Fhorizon-worlds%2Flearn%2Fdocumentation%2Ftutorial-worlds%2Fsim-tycoon-tutorial%2Fmodule-6-resource-converter%2F)
...
# Module 6 - Resource Converter System

 The resource converter turns resources (gems or ore) collected by players into
currency. The conversion happens when a player enters a trigger zone, converting
all their resources in their inventory into the corresponding currencies. The
system also updates HUD elements, adds to the player’s score, and plays visual and
sound effects.  
## System components
...
## How to deploy
...
## How to use
...
## Modifications
...
## Additional Links
...
      Learn
# Module 6 - Resource Converter System
...
