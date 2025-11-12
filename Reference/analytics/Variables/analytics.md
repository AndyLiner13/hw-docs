Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_analytics

API reference

# analytics Variable

Logs analytics events to the Creator Analytics dashboard and Creator Analytics table.

## Signature

```
analytics: {
    logEvent(player: hz.Player, eventName: string, data: EventData): void;
    markPlaySection(sectionName: string, gameMode: AnalyticsSectionGameMode): void;
}
```