---
source: https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_customactiondata
---

# [CustomActionData type](#customactiondata-type)

The superset of optional data fields recognized by the Turbo engine.

## [Signature](#signature)

```
export
 declare type 
CustomActionData
 
=
 
{

    actionCustom
?:
 
string
;

    team
?:
 
string
;

    role
?:
 
string
;

    gameMode
?:
 
string
;

    gameRoundName
?:
 
string
;

    gameRoundId
?:
 
string
;

    gameRoundActivePlayers
?:
 
Array
<string>
;

    gameState
?:
 
GameStateEnum
;


}
 
&
 
Optionalize
<
AbilityEquipPayload
>
 
&
 
Optionalize
<
AbilityDequipPayload
>
 
&
 
Optionalize
<
AbilityUsedPayload
>
 
&
 
Optionalize
<
AFKEnterPayload
>
 
&
 
Optionalize
<
AFKExitPayload
>
 
&
 
Optionalize
<
AreaEnterPayload
>
 
&
 
Optionalize
<
AreaExitPayload
>
 
&
 
Optionalize
<
ArmorEquipPayload
>
 
&
 
Optionalize
<
ArmorDequipPayload
>
 
&
 
Optionalize
<
DamageEnemyPayload
>
 
&
 
Optionalize
<
DamagePlayerPayload
>
 
&
 
Optionalize
<
DeathPayload
>
 
&
 
Optionalize
<
DeathByPlayerPayload
>
 
&
 
Optionalize
<
DeathByEnemyPayload
>
 
&
 
Optionalize
<
DiscoveryMadePayload
>
 
&
 
Optionalize
<
FrictionCausedPayload
>
 
&
 
Optionalize
<
FrictionHitPayload
>
 
&
 
Optionalize
<
KOPlayerPayload
>
 
&
 
Optionalize
<
KOEnemyPayload
>
 
&
 
Optionalize
<
LevelUpPayload
>
 
&
 
Optionalize
<
PlayerReadyEnterPayload
>
 
&
 
Optionalize
<
PlayerReadyExitPayload
>
 
&
 
Optionalize
<
QuestCompletedPayload
>
 
&
 
Optionalize
<
RewardsEarnedPayload
>
 
&
 
Optionalize
<
RoundStartPayload
>
 
&
 
Optionalize
<
RoundEndPayload
>
 
&
 
Optionalize
<
SectionStartPayload
>
 
&
 
Optionalize
<
SectionEndPayload
>
 
&
 
Optionalize
<
StageStartPayload
>
 
&
 
Optionalize
<
StageEndPayload
>
 
&
 
Optionalize
<
TaskStartPayload
>
 
&
 
Optionalize
<
TaskEndPayload
>
 
&
 
Optionalize
<
TaskStepStartPayload
>
 
&
 
Optionalize
<
TaskStepEndPayload
>
 
&
 
Optionalize
<
WeaponGrabPayload
>
 
&
 
Optionalize
<
WeaponEquipPayload
>
 
&
 
Optionalize
<
WeaponReleasePayload
>
 
&
 
Optionalize
<
WearableEquipPayload
>
 
&
 
Optionalize
<
WearableReleasePayload
>;
```

## [References](#references)

[GameStateEnum](../Enumerations/GameStateEnum.md), [AbilityEquipPayload](AbilityEquipPayload.md), [AbilityDequipPayload](AbilityDequipPayload.md), [AbilityUsedPayload](AbilityUsedPayload.md), [AreaEnterPayload](AreaEnterPayload.md), [AreaExitPayload](AreaExitPayload.md), [ArmorEquipPayload](ArmorEquipPayload.md), [ArmorDequipPayload](ArmorDequipPayload.md), [DamageEnemyPayload](DamageEnemyPayload.md), [DamagePlayerPayload](DamagePlayerPayload.md), [DeathPayload](DeathPayload.md), [DeathByPlayerPayload](DeathByPlayerPayload.md), [DeathByEnemyPayload](DeathByEnemyPayload.md), [DiscoveryMadePayload](DiscoveryMadePayload.md), [FrictionCausedPayload](FrictionCausedPayload.md), [FrictionHitPayload](FrictionHitPayload.md), [KOPlayerPayload](KOPlayerPayload.md), [KOEnemyPayload](KOEnemyPayload.md), [LevelUpPayload](LevelUpPayload.md), [PlayerReadyEnterPayload](PlayerReadyEnterPayload.md), [PlayerReadyExitPayload](PlayerReadyExitPayload.md), [QuestCompletedPayload](QuestCompletedPayload.md), [RewardsEarnedPayload](RewardsEarnedPayload.md), [RoundStartPayload](RoundStartPayload.md), [RoundEndPayload](RoundEndPayload.md), [SectionStartPayload](SectionStartPayload.md), [SectionEndPayload](SectionEndPayload.md), [StageStartPayload](StageStartPayload.md), [StageEndPayload](StageEndPayload.md), [TaskStartPayload](TaskStartPayload.md), [TaskEndPayload](TaskEndPayload.md), [TaskStepStartPayload](TaskStepStartPayload.md), [TaskStepEndPayload](TaskStepEndPayload.md), [WeaponGrabPayload](WeaponGrabPayload.md), [WeaponEquipPayload](WeaponEquipPayload.md), [WeaponReleasePayload](WeaponReleasePayload.md), [WearableEquipPayload](WearableEquipPayload.md), [WearableReleasePayload](WearableReleasePayload.md)

## [Remarks](#remarks)

This type is exported for easier visibility of the fields recognized by the Turbo engine.

