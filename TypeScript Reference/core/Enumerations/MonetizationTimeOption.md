# MonetizationTimeOption Enum

Indicates how to display time in a world using the monetary gizmo.

## Signature

```typescript
export declare enum MonetizationTimeOption
```

## Enumeration Members

| Member | Value | Description |
|---------|--------|-------------|
| Days | "DAYS" | The time is displayed in days. |
| Hours | "HOURS" | The time is displayed in hours. |
| Seconds | "SECONDS" | The time is displayed in seconds. |

## Examples

### Using Monetization Time Options

```typescript
// Display time in different formats
monetizationGizmo.setTimeDisplayFormat(MonetizationTimeOption.Seconds);
monetizationGizmo.setTimeDisplayFormat(MonetizationTimeOption.Hours);
monetizationGizmo.setTimeDisplayFormat(MonetizationTimeOption.Days);

// Choose time format based on duration
function setAppropriateTimeFormat(durationInSeconds: number) {
    if (durationInSeconds < 3600) { // Less than 1 hour
        monetizationGizmo.setTimeDisplayFormat(MonetizationTimeOption.Seconds);
    } else if (durationInSeconds < 86400) { // Less than 1 day
        monetizationGizmo.setTimeDisplayFormat(MonetizationTimeOption.Hours);
    } else {
        monetizationGizmo.setTimeDisplayFormat(MonetizationTimeOption.Days);
    }
}
```