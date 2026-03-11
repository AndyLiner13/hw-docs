---
source: https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_analytics
---

# [analytics Variable](#analytics-variable)

Logs analytics events to the Creator Analytics dashboard and Creator Analytics table.

## [Signature](#signature)

```ts
analytics: {
    logEvent(player: hz.Player, eventName: string, data: EventData): void;
    markPlaySection(sectionName: string, gameMode: AnalyticsSectionGameMode): void;
}
```

