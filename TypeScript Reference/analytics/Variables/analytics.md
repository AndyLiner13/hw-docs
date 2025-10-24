# analytics Variable

Logs analytics events to the Creator Analytics dashboard and Creator Analytics table.

## Signature

```typescript
analytics: {
    logEvent(player: hz.Player, eventName: string, data: EventData): void;
    markPlaySection(sectionName: string, gameMode: AnalyticsSectionGameMode): void;
}
```