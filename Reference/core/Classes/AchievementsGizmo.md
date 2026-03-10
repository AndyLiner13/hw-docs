---
source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_achievementsgizmo
---

# [AchievementsGizmo Class](#achievementsgizmo-class)

Extends *[Entity](Entity.md)*

Represents an Achievements gizmo, which is used to display player achievements.

## [Signature](#signature)

```
export
 declare 
class
 
AchievementsGizmo
 
extends
 
Entity
 
```

## [Remarks](#remarks)

For information about working with Player Achievements, see the [Player Ahievements](../../../VR%20tools/Scripting/Create%20player%20achievements.md) guide.

## [Methods](#methods)

|                                               |                                                                  |
| --------------------------------------------- | ---------------------------------------------------------------- |
| **displayAchievements(achievementScriptIDs)** | Displays a list of the given player achievements.Signature\`\`\` |
| displayAchievements                           |                                                                  |
| (                                             |                                                                  |
| achievementScriptIDs                          |                                                                  |
| :                                             |                                                                  |

Array <string></string>
):

void
;

````ParametersachievementScriptIDs: Array<string>A list that contains the script IDs of the achievements to display.Returnsvoid |
| **toString()**                                | Creates a human-readable representation of the entity.Signature```
toString
():
 
string
;
```ReturnsstringA string representation of the `AchievementsGizmo`.                                                                                                          |
````

