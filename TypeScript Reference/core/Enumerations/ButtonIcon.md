# ButtonIcon Enum

The icons to use when binding to custom player inputs. These are used on platforms that display buttons for inputs.

## Signature

```typescript
export declare enum ButtonIcon
```

## Enumeration Members

| Member | Value | Description |
|---------|--------|-------------|
| Ability | 0 | The icon for Ability. |
| Aim | 1 | The icon for Aim. |
| Airstrike | 2 | The icon for Airstrike. |
| Contract | 42 | The icon for Contract. |
| Crouch | 3 | The icon for Crouch. |
| Door | 4 | The icon for Door. |
| Drink | 5 | The icon for Drink. |
| Drop | 6 | The icon for Drop. |
| DualWield | 7 | The icon for Dual Wield. |
| EagleEye | 8 | The icon for Eagle Eye. |
| Eat | 9 | The icon for Eat. |
| Expand | 41 | The icon for Expand. |
| Fire | 11 | The icon for Fire. |
| FireSpecial | 10 | The icon for Fire Special. |
| Grab | 12 | The icon for Grab. |
| Heal | 13 | The icon for Heal. |
| InfiniteAmmo | 14 | The icon for Infinite Ammo. |
| Inspect | 15 | The icon for Inspect. |
| Interact | 16 | The icon for Interact. |
| Invisible | 17 | The icon for invisible. |
| Jump | 18 | The icon for Jump. |
| LeftChevron | 44 | The icon for ChevronLeft. |
| Map | 43 | The icon for Map. |
| Menu | 46 | The icon for Menu. |
| MouseLeft | 19 | The icon for House Left. |
| MouseMiddle | 20 | The icon for Mouse Middle. |
| MouseRight | 21 | The icon for Mouse Right. |
| MouseScroll | 22 | The icon for Mouse Scroll. |
| Net | 23 | The icon for Net. |
| None | 24 | The icon for None. |
| Place | 25 | The icon for Place. |
| Punch | 40 | The icon for Punch. |
| Purchase | 26 | The icon for Purchase. |
| Reload | 27 | The icon for Reload. |
| RightChevron | 45 | The icon for ChevronRight. |
| Rocket | 30 | The icon for Rocket. |
| RocketJump | 28 | The icon for Rocket Jump. |
| RocketVolley | 29 | The icon for Rocket Volley. |
| Shield | 31 | The icon for Shield. |
| Speak | 32 | The icon for Speak. |
| Special | 33 | The icon for Special. |
| SpeedBoost | 34 | The icon for Speed Boost. |
| Sprint | 35 | The icon for Sprint. |
| Swap | 36 | The icon for Swap. |
| SwingWeapon | 37 | The icon for Swing Weapon. |
| Throw | 38 | The icon for Throw. |
| Use | 39 | The icon for Use. |

## Examples

### Using Button Icons for Custom Inputs

```typescript
// Example usage with custom player inputs
customInputGizmo.setButtonIcon(ButtonIcon.Fire);
customInputGizmo.setButtonIcon(ButtonIcon.Jump);
customInputGizmo.setButtonIcon(ButtonIcon.Interact);

// For special actions
customInputGizmo.setButtonIcon(ButtonIcon.Special);
customInputGizmo.setButtonIcon(ButtonIcon.Ability);

// For menu interactions
customInputGizmo.setButtonIcon(ButtonIcon.Menu);
customInputGizmo.setButtonIcon(ButtonIcon.Map);
```