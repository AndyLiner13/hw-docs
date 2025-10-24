# TurboEvents Variable

The events sent by the [Turbo](https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_turbo) instance to capture analytics data from a world. This variable defines the events to pass to the `Turbo.send(event, payload)` method and the data fields to use in the payload.

## Signature

```typescript
TurboEvents: {
    OnCustomAction: SinglePlayerTurboEvent<CustomActionData>;
    OnAbilityEquip: SinglePlayerTurboEvent<{
        abilityKey: string;
        abilityId?: number | undefined;
        abilitySeconds?: number | undefined;
        abilityCooldownSeconds?: number | undefined;
    }>;
    OnAbilityDequip: SinglePlayerTurboEvent<{
        abilityKey: string;
    }>;
    OnAbilityUsed: SinglePlayerTurboEvent<{
        abilityKey: string;
    }>;
    OnAreaEnter: SinglePlayerTurboEvent<{
        actionArea: string;
        actionAreaIsLobbySection: boolean;
        actionAreaIsPlayerReadyZone: boolean;
        turboState?: ParticipationEnum | undefined;
        nextArea?: {
            actionArea: string;
            actionAreaIsLobbySection: boolean;
            actionAreaIsPlayerReadyZone: boolean;
        } | undefined;
    }>;
    OnAreaExit: SinglePlayerTurboEvent<{
        actionArea: string;
        actionAreaIsLobbySection: boolean;
        actionAreaIsPlayerReadyZone: boolean;
        turboState?: ParticipationEnum | undefined;
        nextArea?: {
            actionArea: string;
            actionAreaIsLobbySection: boolean;
            actionAreaIsPlayerReadyZone: boolean;
        } | undefined;
    }>;
    OnArmorEquip: SinglePlayerTurboEvent<{
        armorBody?: string | undefined;
        armorHelm?: string | undefined;
    }>;
    OnArmorDequip: SinglePlayerTurboEvent<{
        armorBody?: string | undefined;
        armorHelm?: string | undefined;
    }>;
    OnDamagePlayer: SinglePlayerTurboEvent<{
        otherPlayerDamaged: string;
        damageAmount: number;
        damageIsFriendlyFire?: boolean | undefined;
        weaponKey?: string | undefined;
    }>;
    OnDamageEnemy: SinglePlayerTurboEvent<{
        enemyDamaged: string;
        damageAmount: number;
        damageIsFriendlyFire?: boolean | undefined;
        weaponKey?: string | undefined;
    }>;
    OnDeath: SinglePlayerTurboEvent<{
        killedByPlayer: string;
        killedByWeaponKey?: string | undefined;
        killedByEnemy?: boolean | undefined;
    }>;
    OnDeathByPlayer: SinglePlayerTurboEvent<{
        killedByPlayer: string;
        killedByWeaponKey?: string | undefined;
    }>;
    OnDeathByEnemy: SinglePlayerTurboEvent<{
        killedByEnemy: string;
        killedByWeaponKey?: string | undefined;
    }>;
    OnDiscoveryMade: SinglePlayerTurboEvent<{
        discoveryItemKey: string;
        discoveryAmount?: number | undefined;
        discoveryIsImplied?: boolean | undefined;
        discoveryNumTimes?: number | undefined;
        rewardsType?: string | undefined;
        rewardsEarned?: number | undefined;
        weaponKey?: string | undefined;
    }>;
    OnFrictionCaused: SinglePlayerTurboEvent<{
        frictionItemKey: string;
        frictionAmount?: number | undefined;
        frictionIsImplied?: boolean | undefined;
        frictionNumTimes?: number | undefined;
    }>;
    OnFrictionHit: SinglePlayerTurboEvent<{
        frictionItemKey: string;
        frictionAmount?: number | undefined;
        frictionIsImplied?: boolean | undefined;
        frictionNumTimes?: number | undefined;
        affectedPlayerNames?: string[] | undefined;
        afkRoundSeconds?: number | undefined;
        roundNoKillSeconds?: number | undefined;
    }>;
    OnKOPlayer: SinglePlayerTurboEvent<{
        otherPlayerKilled: string;
        killedByWeaponKey: string;
    }>;
    OnKOEnemy: SinglePlayerTurboEvent<{
        enemyKilled: string;
        killedByWeaponKey: string;
    }>;
    OnLevelUp: SinglePlayerTurboEvent<{
        playerLevel: number;
        playerTitle: string;
    }>;
    OnPlayerReadyEnter: SinglePlayerTurboEvent<{
        actionArea: string;
        actionAreaIsLobbySection: boolean;
        actionAreaIsPlayerReadyZone: boolean;
        turboState?: ParticipationEnum | undefined;
        nextArea?: {
            actionArea: string;
            actionAreaIsLobbySection: boolean;
            actionAreaIsPlayerReadyZone: boolean;
        } | undefined;
    }>;
    OnPlayerReadyExit: SinglePlayerTurboEvent<{
        actionArea: string;
        actionAreaIsLobbySection: boolean;
        actionAreaIsPlayerReadyZone: boolean;
        turboState?: ParticipationEnum | undefined;
        nextArea?: {
            actionArea: string;
            actionAreaIsLobbySection: boolean;
            actionAreaIsPlayerReadyZone: boolean;
        } | undefined;
    }>;
    OnQuestCompleted: SinglePlayerTurboEvent<{
        achievementKey: string;
    }>;
    OnRewardsEarned: SinglePlayerTurboEvent<{
        rewardsType: string;
        rewardsEarned: number;
    }>;
    OnRoundStart: SinglePlayerTurboEvent<{
        gameMode?: string | undefined;
        role?: string | undefined;
        roundId?: number | undefined;
        roundName?: string | undefined;
        team?: string | undefined;
    }>;
    OnRoundEnd: SinglePlayerTurboEvent<{
        turboState: ParticipationEnum;
    }>;
    OnSectionStart: SinglePlayerTurboEvent<{
        gameMode?: string | undefined;
        role?: string | undefined;
        sectionId?: number | undefined;
        sectionName?: string | undefined;
        team?: string | undefined;
    }>;
    OnSectionEnd: SinglePlayerTurboEvent<{
        turboState: ParticipationEnum;
    }>;
    OnStageStart: SinglePlayerTurboEvent<{
        gameMode?: string | undefined;
        role?: string | undefined;
        stageId?: number | undefined;
        stageName?: string | undefined;
        team?: string | undefined;
    }>;
    OnStageEnd: SinglePlayerTurboEvent<{
        turboState: ParticipationEnum;
    }>;
    OnTaskStart: SinglePlayerTurboEvent<{
        taskKey: string;
        taskType?: string | undefined;
    }>;
    OnTaskEnd: SinglePlayerTurboEvent<{
        taskKey: string;
        taskType?: string | undefined;
    }>;
    OnTaskStepStart: SinglePlayerTurboEvent<{
        taskKey: string;
        taskStepKey: string;
    }>;
    OnTaskStepEnd: SinglePlayerTurboEvent<{
        taskKey: string;
        taskStepKey: string;
    }>;
    OnWeaponGrab: SinglePlayerTurboEvent<{
        weaponKey: string;
        weaponType?: string | undefined;
        isRightHand?: boolean | undefined;
    }>;
    OnWeaponEquip: SinglePlayerTurboEvent<{
        weaponKey: string;
        weaponType?: string | undefined;
        isRightHand?: boolean | undefined;
    }>;
    OnWeaponRelease: SinglePlayerTurboEvent<{
        weaponKey: string;
        weaponType?: string | undefined;
        isRightHand?: boolean | undefined;
        weaponUsedNumTimes?: number | undefined;
    }>;
    OnWearableEquip: SinglePlayerTurboEvent<{
        wearableKey: string;
        wearableType?: string | undefined;
    }>;
    OnWearableRelease: SinglePlayerTurboEvent<{
        wearableKey: string;
        wearableType?: string | undefined;
    }>;
    OnGameRoundStartForPlayers: MultiPlayerTurboEvent<{
        sendPlayerRoundStart: boolean;
        gameStartData?: {
            gameMode?: string | undefined;
            roundName?: string | undefined;
            teamByPlayer?: Map<hz.Player, string> | undefined;
            roleByPlayer?: Map<hz.Player, string> | undefined;
        } | undefined;
    }>;
    OnGameRoundEndForPlayers: MultiPlayerTurboEvent<{
        sendPlayerRoundEnd: boolean;
    }>;
}
```

## Remarks

The available payloads are defined in the Type Aliases section of the API documentation. The name of the payload type to use corresponds to the name of the event you send.

For example, the `TurboEvents.OnKOPlayer` event is sent with the `KOPlayerPayload` type.

The `TurboEvents.OnKOPlayer` event defines the `otherPlayerKilled: string` and the `killedByWeaponKey: string` data fields to use in the [KOPlayerPayload](https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_koplayerpayload) object that you pass to the `Turbo.send(event, payload)` method.

However, there is one additional field you must include in each payload: the player. For example `player: this.serverPlayer`.

For details about using the `Turbo.send(event, payload)` method, see the [Turbo](https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_turbo) variable.

## Examples

The following example demonstrates how to send the `TurboEvents.OnLevelUp` event with the `LevelUpPayload` type. This is method is typically called from an event listener in your script.

As is necessary with other Turbo events, the player field was also added to the payload.

```typescript
Turbo.send(TurboEvents.OnLevelUp, {
  player: this.serverPlayer,
  playerLevel: 10,
  playerTitle: `Gladiator`
} as LevelUpPayload);
```