Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_customactiondata

# CustomActionData type

The superset of optional data fields recognized by the Turbo engine.

## Signature

```
export declare type CustomActionData = {
    actionCustom?: string;
    team?: string;
    role?: string;
    gameMode?: string;
    gameRoundName?: string;
    gameRoundId?: string;
    gameRoundActivePlayers?: Array<string>;
    gameState?: GameStateEnum;
} & Optionalize<AbilityEquipPayload> & Optionalize<AbilityDequipPayload> & Optionalize<AbilityUsedPayload> & Optionalize<AFKEnterPayload> & Optionalize<AFKExitPayload> & Optionalize<AreaEnterPayload> & Optionalize<AreaExitPayload> & Optionalize<ArmorEquipPayload> & Optionalize<ArmorDequipPayload> & Optionalize<DamageEnemyPayload> & Optionalize<DamagePlayerPayload> & Optionalize<DeathPayload> & Optionalize<DeathByPlayerPayload> & Optionalize<DeathByEnemyPayload> & Optionalize<DiscoveryMadePayload> & Optionalize<FrictionCausedPayload> & Optionalize<FrictionHitPayload> & Optionalize<KOPlayerPayload> & Optionalize<KOEnemyPayload> & Optionalize<LevelUpPayload> & Optionalize<PlayerReadyEnterPayload> & Optionalize<PlayerReadyExitPayload> & Optionalize<QuestCompletedPayload> & Optionalize<RewardsEarnedPayload> & Optionalize<RoundStartPayload> & Optionalize<RoundEndPayload> & Optionalize<SectionStartPayload> & Optionalize<SectionEndPayload> & Optionalize<StageStartPayload> & Optionalize<StageEndPayload> & Optionalize<TaskStartPayload> & Optionalize<TaskEndPayload> & Optionalize<TaskStepStartPayload> & Optionalize<TaskStepEndPayload> & Optionalize<WeaponGrabPayload> & Optionalize<WeaponEquipPayload> & Optionalize<WeaponReleasePayload> & Optionalize<WearableEquipPayload> & Optionalize<WearableReleasePayload>;
```

## Remarks

This type is exported for easier visibility of the fields recognized by the Turbo engine.