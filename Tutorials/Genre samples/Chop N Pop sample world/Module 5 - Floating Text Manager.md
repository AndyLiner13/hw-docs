Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/genre-samples/chop-n-pop-sample-world/module-5-floating-text-manager

# Module 5 - Floating Text Manager

The Floating Text Manager system can be used to display floating text elements in the game for a short period of time. In Chop ‘N Pop: Graveyard Bash, these text elements appear over an enemy to indicate the effect of a hit on it.

**Note**: The ammo counter displayed over the guns is a simple Text gizmo.

<details>
<summary>Image of floating text above pistol</summary>

<p></p>

[Image of floating text above pistol](../../../image_data/fcedcb24a31bf5f443f2dc0bd40e42d8d97c2e03bca7c2b097a353a656b43dd3.md)

### Overview
This image depicts a scene from a video game set in a graveyard environment. The player character is facing a zombie-like enemy. The scene includes a health indicator, performance metrics, and system information at the bottom of the screen.

### Key Elements
- **Player Character**: A bald character wearing a green shirt and dark pants, holding a gun pointed towards the zombie.
- **Zombie Enemy**: A green-skinned figure with red eyes, wearing a light-colored shirt and dark pants, positioned slightly behind the player.
- **Health Indicator**: A red number "7" appears above the zombie, likely indicating its health status.
- **Background**: A graveyard setting with tombstones, a tree, and a purple-tinted sky.
- **User Interface Elements**: At the bottom, there are tabs labeled "Tests," "Performance," "System," "User," and numerical indicators such as "13" and "119."

### Visual Flow / Relationships
The player character is the focal point, with the zombie enemy directly in front of them. The health indicator above the zombie draws attention to the enemy's condition. The user interface elements at the bottom provide contextual information about the game's performance and system status.

</details>

<p></p>



Floating Text Manager is composed of two scripts and a predefined Text Gizmo asset, which is spawned in whenever a piece of floating text is required.

In this world, the `createFloatingText()` method in Floating Text Manager is invoked in the `NPCAgent.ts` script when an npcHit is triggered from an axeHit or bulletHit. As a result of a hit, `createFloatingText()` generates a piece of floating text bubbling up from the point of impact, displaying the amount of damage done by the hit. This amount of damage is applied to a spawned text gizmo using the `setText()` method in `FloatingText.ts`. This piece of floating text exists for a predefined period of time, before the Text gizmo is deleted, causing the text to disappear.

## System Components

**FloatingTextManager.ts**:

This script is attached to the WorldInstances > FloatingTextManager reference object.

Script properties are the defaults for any new floating text entity. Properties:

```
static propsDefinition = {
  floatingTextAsset : {type: PropTypes.Asset, default: undefined},
  yPos : {type: PropTypes.Number, default: 2},
  floatSpeed : {type: PropTypes.Number, default: 0.5},
  rotationSpeed : {type: PropTypes.Number, default: 360},
  duration : {type: PropTypes.Number, default: 2.0},
  color : {type: PropTypes.Color, default: new Color(1, 1, 1)}
}
```

| Property | Description |
| --- | --- |
| floatingTextAsset | Asset in your Asset Library that corresponds to a predefined Text Gizmo asset, in which its properties have been set to create the proper appearance in the world. |
| yPos | Y-coordinate offset from the entity from which the new floating text element is spawned. |
| floatSpeed | When a floating text element is spawned, it drifts upward. This value defines the speed of the drift in meters per second. |
| rotationSpeed | You can define a rotational speed if needed |
| duration | Time in seconds that the floating text element should live, before it is destroyed. |
| color | Color of the displayed text. |

The `createFloatingText()` function is invoked from `NpcAgent.ts` whenever an axe or bullet strikes an NPC.

Script dependencies:

* `Behaviour.ts`
* `FloatingText.ts`

**FloatingText.ts**:

This script is attached to the spawned Text gizmo asset and manages two functions:

* `setText()` specifies the text that appears in the gizmo to which it is attached.
* `update()` is a world event that occurs every frame. This event updates the position and rotation of the floating text based on the specified parameters for it.
  + When the duration in seconds for the text gizmo has been exceeded, the text gizmo is deleted.

Script dependencies:

* `Behaviour.ts`

**Text Gizmo**:

In Chop ‘N Pop: Graveyard Bash, the FloatingTextManager script property for floatingTextAsset links to an asset called FloatingDamage, which is an asset that is composed of:

- Text Gizmo that has been configured to display red numbers.
- `FloatingText.ts` script that has been attached to the Text Gizmo.

**Tip**: You can make your own in your own world.

## How to Deploy

- Copy the text of the scripts and their dependent scripts into scripts that you create in your world.
- Create a FloatingTextManager reference object. Attach `FloatingTextManager.ts` to it.
- Add in a Text Gizmo. Configure it to display the text in a format that you prefer. Attach `FloatingText.ts` to it.
- Create an asset out of your configured Text gizmo.
- In `FloatingTextManager.ts` properties, select this asset for the floatingTextAsset property.

For more information, see “Deploying Systems” in [Module 1 - Setup](https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/chop-n-pop-sample-world/module-1-setup).

## How to Use

In your code, wherever you need to display floating text, call createFloatingText function in `FloatingTextManager.ts` like the following:

```
FloatingTextManager.instance?.createFloatingText(myString, hitPosition, textColor);
```

## Modifications

### Multiple FloatingText instances

To create a second type of floating text, copy the `FloatingText.ts` script, rename it, and attach it to a second Text gizmo. You can then change behaviors of individual floating text by modifying parameters in the `FloatingText.ts` script.

```
private floatSpeed: number = 1;
private rotateSpeed: number = 360;
private currentTime = 0;
private maxTime: number = 2;
private rotationEuler = new Vec3(0, 0, 0);
private deleted = false;
```

These values can be used to override the defaults specified in the `FloatingTextManager.ts` script.

## Summary

This module covers the system for triggering floating text elements to appear in the game for a few seconds before disappearing. In Chop ‘N Pop: Graveyard Bash, this system is used for displaying damage to an enemy after a weapon strike.

You can modify this system to make floating text appear wherever needed in your game.