# ButtonPlacement Enum

Defines the placement options for buttons in the user interface.

## Signature

```typescript
export declare enum ButtonPlacement
```

## Enumeration Members

| Member | Value | Description |
|---------|--------|-------------|
| Top | 0 | Places the button at the top of the interface. |
| Bottom | 1 | Places the button at the bottom of the interface. |
| Left | 2 | Places the button on the left side of the interface. |
| Right | 3 | Places the button on the right side of the interface. |
| Center | 4 | Places the button in the center of the interface. |

## Examples

### Using Button Placement

```typescript
// Place buttons in different positions
uiButton.setPlacement(ButtonPlacement.Top);
uiButton.setPlacement(ButtonPlacement.Bottom);
uiButton.setPlacement(ButtonPlacement.Center);

// Responsive button placement
function setButtonPlacementForPlatform(button: UIButton, platform: string) {
    switch (platform) {
        case "mobile":
            button.setPlacement(ButtonPlacement.Bottom);
            break;
        case "desktop":
            button.setPlacement(ButtonPlacement.Top);
            break;
        case "vr":
            button.setPlacement(ButtonPlacement.Center);
            break;
        default:
            button.setPlacement(ButtonPlacement.Bottom);
    }
}

// Layout multiple buttons
function layoutButtonsHorizontally(buttons: UIButton[]) {
    buttons.forEach((button, index) => {
        switch (index % 3) {
            case 0:
                button.setPlacement(ButtonPlacement.Left);
                break;
            case 1:
                button.setPlacement(ButtonPlacement.Center);
                break;
            case 2:
                button.setPlacement(ButtonPlacement.Right);
                break;
        }
    });
}
```

## Remarks

*Note: This documentation is based on common UI patterns in the Meta Horizon Worlds API. Please refer to the official documentation for the most up-to-date information.*