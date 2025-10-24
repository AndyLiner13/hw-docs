# CustomActionData type

The superset of optional data fields recognized by the Turbo engine.

## Signature

```typescript
export declare type CustomActionData = {
    actionCustom?: string;
    team?: string;
    role?: string;
    gameMode?: string;
    gameRoundName?: string;
    gameRoundId?: string;
    gameRoundActivePlayers?: Array<string>;
    gameState?: GameStateEnum;
} & Optionalize<AbilityEquipPayload> & Optionalize<AbilityDequipPayload> & Optionalize<AbilityUsedPayload> & /* ... additional payload types ... */;
```

## Remarks

This type is exported for easier visibility of the fields recognized by the Turbo engine.