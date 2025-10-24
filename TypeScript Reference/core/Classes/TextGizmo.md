# TextGizmo Class

Extends [Entity](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_entity)

Represents a text label in the world.

## Signature

```typescript
export declare class TextGizmo extends Entity
```

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `text` | `HorizonProperty<string>` | The content to display in the text label. |

### text

The content to display in the text label.

```typescript
text: HorizonProperty<string>
```

**Remarks:**
If the content was previously set with localizableText, the getter of this property will return the localized string in the language of the local player. Do not use the returned text in attributes shared with other players. Other players might use different languages, and only the LocalizableText object is localized.

## Methods

| Method | Description |
|--------|-------------|
| `toString(): string` | Creates a human-readable representation of the entity. |

### toString

Creates a human-readable representation of the entity.

```typescript
toString(): string
```

**Returns:** `string` - A string representation of the TextGizmo.

## Examples

### Working with Text Gizmos

```typescript
// Get a text gizmo from the world
const textGizmo = world.getEntitiesByName("WelcomeText")[0] as TextGizmo;

// Set text content
textGizmo.text.set("Welcome to our world!");

// Update text dynamically
function updatePlayerCount(count: number) {
    textGizmo.text.set(`Players online: ${count}`);
}

// Listen for text changes
textGizmo.text.onChanged.add((newText: string) => {
    console.log("Text changed to:", newText);
});

// Create dynamic text displays
function createScoreDisplay(player: Player, score: number) {
    const scoreText = world.getEntitiesByName("ScoreDisplay")[0] as TextGizmo;
    scoreText.text.set(`${player.name}: ${score} points`);
}

// Localized text example
function setLocalizedText(textGizmo: TextGizmo, localizableText: LocalizableText) {
    // Set localized content - will display appropriate language for each player
    textGizmo.text.set(localizableText.toString());
}
```

## References

- [Entity](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_entity) - Base class for all world entities
- [HorizonProperty](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_horizonproperty) - Property system for reactive updates