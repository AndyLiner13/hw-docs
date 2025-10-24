# Shovel Up Texture Animation System - Complete Guide

## Table of Contents
1. [Overview](#overview)
2. [Core Concepts](#core-concepts)
3. [Texture Swapping System](#texture-swapping-system)
4. [AnimatedBinding API](#animatedbinding-api)
5. [HUD Animations](#hud-animations)
6. [Dig Spot UI Animations](#dig-spot-ui-animations)
7. [Entity-Based Animations](#entity-based-animations)
8. [Complete Implementation Examples](#complete-implementation-examples)
9. [Best Practices](#best-practices)

---

## Overview

Shovel Up **does NOT use GIF files**. Instead, it uses two primary animation techniques:

1. **Texture Swapping** - Cycling through PNG texture assets on UIO (User Interface Optimized) meshes
2. **AnimatedBinding** - Animating UI properties (position, scale, opacity) using Horizon's Animation API

These techniques work together to create smooth, performant animations throughout the game.

---

## Core Concepts

### What is UIO?

**User Interface Optimized (UIO)** materials are special CMI (Custom Model Import) textures that:
- Can have their texture swapped at runtime via `setTexture()`
- Render in higher detail than standard materials
- Support transparency via alpha channel (_BA suffix)
- Are optimized for UI elements and high-touch areas

### Texture Assets vs GIF Animation

```typescript
// ❌ NOT USED: Actual GIF files
// GIFs cannot be imported into Horizon Worlds

// ✅ USED: PNG frames imported as TextureAssets
const frame1 = ImageSource.fromTextureAsset(this.props.texture0!);
const frame2 = ImageSource.fromTextureAsset(this.props.texture1!);
// ... cycle through frames to create animation
```

---

## Texture Swapping System

### Basic Texture Swap Pattern

```typescript
import { MeshEntity, TextureAsset, PropTypes } from 'horizon/core';

class AnimatedTexture extends Component<typeof AnimatedTexture> {
  static propsDefinition = {
    speedSeconds: { type: PropTypes.Number, default: 1 },
    texture0: { type: PropTypes.Asset },
    texture1: { type: PropTypes.Asset },
    texture2: { type: PropTypes.Asset },
    // ... up to 16 textures
  };

  textures: TextureAsset[] = [];
  index = 0;

  start() {
    // Build array of textures (skip undefined)
    this.addTextureIfExists(this.props.texture0);
    this.addTextureIfExists(this.props.texture1);
    this.addTextureIfExists(this.props.texture2);

    const meshEntity = this.entity.as(MeshEntity);
    if (meshEntity) {
      const delayMs = Math.max(this.props.speedSeconds * 1000, 10);
      this.async.setInterval(() => {
        meshEntity.setTexture(this.textures[this.index]);
        this.index = (this.index + 1) % this.textures.length;
      }, delayMs);
    }
  }

  addTextureIfExists(prop: Asset | undefined) {
    if (prop) {
      this.textures.push(prop.as(TextureAsset));
    }
  }
}
```

### How Shovel Up Uses This

**For Item Icons & Rewards:**
- Export GIF → PNG frames (e.g., coin_01.png, coin_02.png, etc.)
- Import PNGs as Texture Assets in Horizon Desktop Editor
- Assign to UIO mesh properties
- Script cycles through textures using `setInterval()`

**Performance Notes:**
- First playthrough may stutter (textures loading)
- After initial load, animations are smooth
- Maximum recommended: 16 frames per animation
- Speed minimum: 10ms per frame (100 FPS max)

---

## AnimatedBinding API

### What is AnimatedBinding?

`AnimatedBinding` is Horizon's built-in system for animating UI properties with easing curves.

```typescript
import { AnimatedBinding, Animation, Easing } from 'horizon/ui';

// Create animated property
const opacity = new AnimatedBinding(0); // starts at 0

// Animate it
opacity.set(
  Animation.timing(1, { 
    duration: 300,      // milliseconds
    easing: Easing.linear 
  })
);
```

### Animation Types

#### 1. **Timing** - Animate to a value over time
```typescript
binding.set(Animation.timing(targetValue, { 
  duration: 300, 
  easing: Easing.inOut(Easing.cubic) 
}));
```

#### 2. **Sequence** - Chain animations
```typescript
binding.set(Animation.sequence(
  Animation.timing(1.3, { duration: 300 }), // Scale up
  Animation.timing(1.0, { duration: 300 })  // Scale down
));
```

#### 3. **Delay** - Wait before animating
```typescript
binding.set(Animation.delay(
  500, // wait 500ms
  Animation.timing(1, { duration: 300 })
));
```

#### 4. **Repeat** - Loop animations
```typescript
binding.set(Animation.repeat(
  Animation.timing(1, { duration: 1000 }),
  3 // repeat 3 times
));
```

### Easing Functions

```typescript
// Available easing curves
Easing.linear
Easing.ease
Easing.in(Easing.cubic)      // Ease in
Easing.out(Easing.cubic)     // Ease out
Easing.inOut(Easing.cubic)   // Ease in and out
```

---

## HUD Animations

### Shovel Up's HUDAnimations.ts

This file exports reusable animation functions for consistent UI feel:

```typescript
import { AnimatedBinding, Animation, Easing } from 'horizon/ui';

export namespace HUDAnimations {
  // Reusable animation creators
  const standardHUDAnimation = linearHUDAnimation(300);
  
  function linearHUDAnimation(duration: number) {
    return (isShown: boolean) => 
      Animation.timing(isShown ? 1 : 0, { 
        duration, 
        easing: Easing.linear 
      });
  }

  // Export named animations
  export const inventoryHideAnimation = standardHUDAnimation;
  export const locationAnimation = standardHUDAnimation;
  export const digSpotAnimation = standardHUDAnimation;
}
```

### Gem Fly Animation Example

**Use Case:** When you dig up a gem, it flies to the top-right corner

```typescript
export function flyGem(
  component: Component,
  gemX: AnimatedBinding,
  gemY: AnimatedBinding,
  gemScale: AnimatedBinding,
  // ... more bindings
) {
  const midwayX = 30;
  const midwayY = -100;
  const targetX = -450;
  const targetY = -20;
  
  const durationToMidway = 300;
  const durationToFinish = 300;
  
  const targetPlayer = [component.world.getLocalPlayer()];
  
  // Animate X position: current → midway → target
  gemX.set(Animation.sequence(
    Animation.timing(midwayX, { duration: durationToMidway }),
    Animation.delay(200, 
      Animation.timing(targetX, { duration: durationToFinish })
    )
  ), undefined, targetPlayer);
  
  // Animate Y position in sync
  gemY.set(Animation.sequence(
    Animation.timing(midwayY, { duration: durationToMidway }),
    Animation.delay(200, 
      Animation.timing(targetY, { duration: durationToFinish })
    )
  ), undefined, targetPlayer);
  
  // Animate scale with callback
  gemScale.set(Animation.sequence(
    Animation.timing(1.8, { duration: durationToMidway }),
    Animation.delay(200, 
      Animation.timing(0.8, { duration: durationToFinish })
    ),
    Animation.timing(0, { duration: 0 }) // Hide
  ), () => {
    // Callback when animation completes
    component.sendLocalBroadcastEvent(Events.updateGemUI, {});
  }, targetPlayer);
}
```

**Key Features:**
- Multi-property synchronization (X, Y, scale)
- Easing for smooth motion
- Callback on completion
- Player-specific targeting

---

## Dig Spot UI Animations

### World-Space UI Bubbles

The `DigSpotUI.ts` shows item chance above dig spots in 3D space:

```typescript
class DigSpotUI extends UIComponent {
  private bubbleSmlOpacity!: AnimatedBinding;
  private bubbleLrgOpacity!: AnimatedBinding;
  private bubbleFinalOpacity!: AnimatedBinding;
  
  // Cascade bubble animation
  animateBubbleIn() {
    this.showBubble.set(true, [this.localPlayer]);
    
    // Small bubble fades in first
    this.bubbleSmlOpacity.set(
      Animation.timing(1, { duration: 300, easing: Easing.linear }), 
      undefined, 
      [this.localPlayer]
    );
    
    // Large bubble fades in 300ms later
    this.async.setTimeout(() => {
      this.bubbleLrgOpacity.set(
        Animation.timing(1, { duration: 300, easing: Easing.linear }), 
        undefined, 
        [this.localPlayer]
      );
    }, 300);
    
    // Final bubble fades in 600ms later
    this.async.setTimeout(() => {
      this.bubbleFinalOpacity.set(
        Animation.timing(1, { duration: 300, easing: Easing.linear }), 
        undefined, 
        [this.localPlayer]
      );
    }, 600);
  }
}
```

**Visual Effect:**
1. Small bubble appears (0 → 300ms)
2. Large bubble appears (300 → 600ms)
3. Final text bubble appears (600 → 900ms)
4. Creates cascading reveal effect

### Scale Pulse Animation

```typescript
private chanceTextScale!: AnimatedBinding;

// Pulse the percentage text when it updates
this.chanceTextScale.set(Animation.sequence(
  Animation.timing(2.2, { duration: 300, easing: Easing.linear }), // Grow
  Animation.timing(1, { duration: 300, easing: Easing.linear })    // Shrink
), () => {
  this.percentageTintColor.set("#31A24C", [this.localPlayer]);
  this.showDigAttemptedBubble();
}, [this.localPlayer]);
```

---

## Entity-Based Animations

### EntityScalePulse.ts - 3D Object Pulsing

For non-UI elements (collectibles, rewards):

```typescript
import { Component, PropTypes, Vec3, World } from 'horizon/core';

class EntityScalePulse extends Component<typeof EntityScalePulse> {
  static propsDefinition = {
    maxScale: { type: PropTypes.Number, default: 1.5 },
    scaleTime: { type: PropTypes.Number, default: 1 }
  };

  private originalScale!: Vec3;
  private currentTime: number = 0;
  private isScalingUp: boolean = true;

  start() {
    this.originalScale = this.entity.scale.get();
    this.connectLocalBroadcastEvent(
      World.onUpdate, 
      (data) => this.update(data.deltaTime)
    );
  }

  update(deltaTime: number) {
    this.currentTime += deltaTime;
    
    const progress = this.currentTime / this.props.scaleTime!;
    const scaleAmount = this.isScalingUp ? progress : (1 - progress);
    
    const scale = this.originalScale.add(
      Vec3.one.mul(this.props.maxScale! - 1).mul(scaleAmount)
    );
    
    this.entity.scale.set(scale);

    if (this.currentTime >= this.props.scaleTime!) {
      this.isScalingUp = !this.isScalingUp;
      this.currentTime = 0;
    }
  }
}
```

**Use Cases:**
- Collectible items hovering in air
- Reward items after digging
- Quest markers

---

## Complete Implementation Examples

### Example 1: Animated Item Icon (Shovel Up Style)

```typescript
import { Component, MeshEntity, PropTypes, TextureAsset } from 'horizon/core';
import { AnimatedBinding, Animation, Easing, UIComponent, Image, ImageSource } from 'horizon/ui';

// Part 1: Texture cycling on 3D mesh
class AnimatedItemIcon extends Component<typeof AnimatedItemIcon> {
  static propsDefinition = {
    animSpeed: { type: PropTypes.Number, default: 0.1 },
    frame0: { type: PropTypes.Asset },
    frame1: { type: PropTypes.Asset },
    frame2: { type: PropTypes.Asset },
    frame3: { type: PropTypes.Asset }
  };
  
  private textures: TextureAsset[] = [];
  private frameIndex = 0;
  
  start() {
    // Build texture array
    [this.props.frame0, this.props.frame1, this.props.frame2, this.props.frame3]
      .forEach(asset => {
        if (asset) this.textures.push(asset.as(TextureAsset));
      });
    
    const mesh = this.entity.as(MeshEntity);
    if (!mesh || this.textures.length === 0) return;
    
    // Cycle textures
    this.async.setInterval(() => {
      mesh.setTexture(this.textures[this.frameIndex]);
      this.frameIndex = (this.frameIndex + 1) % this.textures.length;
    }, this.props.animSpeed * 1000);
  }
}

// Part 2: Scale pulse on the same entity
class ItemIconWithPulse extends Component<typeof ItemIconWithPulse> {
  static propsDefinition = {
    pulseScale: { type: PropTypes.Number, default: 1.2 },
    pulseSpeed: { type: PropTypes.Number, default: 1 }
  };
  
  private originalScale!: Vec3;
  private time = 0;
  
  start() {
    this.originalScale = this.entity.scale.get();
    this.connectLocalBroadcastEvent(World.onUpdate, (d) => this.update(d.deltaTime));
  }
  
  update(dt: number) {
    this.time += dt;
    const progress = (Math.sin(this.time * Math.PI * 2 / this.pulseSpeed) + 1) / 2;
    const scale = this.originalScale.mul(1 + (this.pulseScale - 1) * progress);
    this.entity.scale.set(scale);
  }
}
```

**Attach both scripts to the same UIO mesh entity for:**
- Texture animation (spinning coin frames)
- Scale pulsing (attracting player attention)

---

### Example 2: UI Reward Popup (Shovel Up Style)

```typescript
class RewardPopup extends UIComponent {
  private itemImage!: Binding<ImageSource>;
  private itemScale!: AnimatedBinding;
  private itemOpacity!: AnimatedBinding;
  private itemY!: AnimatedBinding;
  
  initializeUI() {
    this.itemImage = new Binding(ImageSource.fromTextureAsset(this.props.defaultIcon!));
    this.itemScale = new AnimatedBinding(0);
    this.itemOpacity = new AnimatedBinding(0);
    this.itemY = new AnimatedBinding(100);
    
    return View({
      children: [
        Image({
          source: this.itemImage,
          style: {
            width: 200,
            height: 200,
            transform: [{ scale: this.itemScale }],
            opacity: this.itemOpacity,
            translateY: this.itemY
          }
        })
      ]
    });
  }
  
  showReward(iconAsset: TextureAsset) {
    const player = [this.world.getLocalPlayer()];
    
    // Update icon
    this.itemImage.set(ImageSource.fromTextureAsset(iconAsset), player);
    
    // Animate in: Pop up + fade in
    this.itemScale.set(Animation.sequence(
      Animation.timing(1.2, { duration: 200, easing: Easing.out(Easing.cubic) }),
      Animation.timing(1.0, { duration: 100, easing: Easing.in(Easing.cubic) })
    ), undefined, player);
    
    this.itemOpacity.set(
      Animation.timing(1, { duration: 200 }), 
      undefined, 
      player
    );
    
    this.itemY.set(
      Animation.timing(0, { duration: 300, easing: Easing.out(Easing.ease) }), 
      undefined, 
      player
    );
    
    // Auto-hide after 2 seconds
    this.async.setTimeout(() => this.hideReward(), 2000);
  }
  
  hideReward() {
    const player = [this.world.getLocalPlayer()];
    
    this.itemOpacity.set(
      Animation.timing(0, { duration: 200 }), 
      undefined, 
      player
    );
    
    this.itemScale.set(
      Animation.timing(0.5, { duration: 200 }), 
      undefined, 
      player
    );
  }
}
```

---

### Example 3: Minigame Alert "!" (From DigMinigame.ts)

```typescript
public async alert() {
  const root: Entity = this.props.alertRoot!;
  root.visible.set(true);
  
  // Zoom camera for intensity
  LocalCamera.overrideCameraFOV(this.intenseZoomFOV, { duration: 0.4 });
  
  const startScale = Vec3.one.mul(0.1);
  const endScale = Vec3.one.mul(1);
  const desiredPosition = PlayerService.getPlayerFootPosition(this.owner)
    .add(new Vec3(0, 2.2, 0));
  
  root.transform.localScale.set(startScale);
  root.transform.position.set(desiredPosition);
  
  // Make it face the camera
  const lookDirection = LocalCamera.position.get().sub(desiredPosition);
  root.transform.rotation.set(Quaternion.lookRotation(lookDirection));
  
  // Set color based on rarity
  root.as(MeshEntity).color.set(
    Color.fromHex(ItemUtils.RARITY_HEX_COLORS_BEGIN[this.itemRarity])
  );
  
  AudioBank.play('minigame_exclamation');
  
  // Zoom in animation (200ms)
  const zoomDuration = 0.2;
  let elapsed = 0;
  const startTime = Date.now() * 0.001;
  
  while (elapsed < zoomDuration) {
    const currentTime = Date.now() * 0.001;
    elapsed = currentTime - startTime;
    const t = clamp01(elapsed / zoomDuration);
    
    const newScale = lerpVec3(startScale, endScale, easeInOutQuad(t));
    root.transform.localScale.set(newScale);
    
    // Rotate while scaling
    const up = Quaternion.mulVec3(
      Quaternion.fromAxisAngle(lookDirection, Math.PI * 0.5 * (1 - t)), 
      Vec3.up
    );
    root.transform.rotation.set(Quaternion.lookRotation(lookDirection, up));
    
    await this.wait(16); // ~60 FPS
  }
  
  // Bounce animation (800ms)
  const bounceStart = desiredPosition;
  const bounceEnd = desiredPosition.add(Vec3.up.mul(0.2));
  const bounceDuration = 0.8;
  const bounceCount = 2;
  
  elapsed = 0;
  startTime = Date.now() * 0.001;
  
  while (elapsed < bounceDuration) {
    const currentTime = Date.now() * 0.001;
    elapsed = currentTime - startTime;
    
    const t = (Math.sin(elapsed * Math.PI * 2 * (bounceCount / bounceDuration)) + 1) * 0.5;
    const newPosition = lerpVec3(bounceStart, bounceEnd, t);
    root.transform.position.set(newPosition);
    
    await this.wait(16);
  }
  
  // Zoom out (200ms)
  // ... similar to zoom in but reversed
  
  root.visible.set(false);
}
```

**Key Techniques:**
- Manual animation loop using `async`/`await`
- Custom easing with `easeInOutQuad()`
- Synchronized transform + rotation
- Camera effects for emphasis

---

## Best Practices

### 1. Texture Asset Management

```typescript
// ✅ GOOD: Skip undefined textures
textures.forEach(asset => {
  if (asset) this.textureArray.push(asset.as(TextureAsset));
});

// ❌ BAD: Assumes all textures are defined
this.textureArray = [
  this.props.tex0.as(TextureAsset),
  this.props.tex1.as(TextureAsset) // May throw if undefined
];
```

### 2. Animation Timing

```typescript
// ✅ GOOD: Minimum 10ms delay to prevent performance issues
const delayMs = Math.max(this.props.speedSeconds * 1000, 10);

// ❌ BAD: Could be 0ms or negative
const delayMs = this.props.speedSeconds * 1000;
```

### 3. Player Targeting

```typescript
// ✅ GOOD: Target specific player for client-side animations
const targetPlayer = [this.world.getLocalPlayer()];
binding.set(animation, callback, targetPlayer);

// ❌ BAD: Animation plays for all players (unnecessary network traffic)
binding.set(animation, callback);
```

### 4. Animation Cleanup

```typescript
// ✅ GOOD: Cancel animations before starting new ones
if (this.currentAnimation) {
  this.async.clearTimeout(this.currentAnimation);
}
this.currentAnimation = this.async.setTimeout(...);

// ❌ BAD: Overlapping animations cause jittery behavior
this.async.setTimeout(...);
this.async.setTimeout(...); // Both running!
```

### 5. Performance Optimization

```typescript
// ✅ GOOD: Reuse AnimatedBinding instances
class MyUI extends UIComponent {
  private scale = new AnimatedBinding(1);
  
  pulseScale() {
    this.scale.set(Animation.sequence(...));
  }
}

// ❌ BAD: Create new binding every time
class MyUI extends UIComponent {
  pulseScale() {
    const scale = new AnimatedBinding(1); // Memory leak!
    scale.set(Animation.sequence(...));
  }
}
```

### 6. Easing Selection

```typescript
// Smooth pop-in effect
Easing.out(Easing.cubic)

// Smooth exit effect
Easing.in(Easing.cubic)

// Smooth both ways
Easing.inOut(Easing.cubic)

// Constant speed
Easing.linear

// Natural motion
Easing.ease
```

---

## Comparison: Texture Animation vs AnimatedBinding

| Feature | Texture Swapping | AnimatedBinding |
|---------|-----------------|-----------------|
| **Use Case** | Frame-by-frame animation | Property transitions |
| **Target** | MeshEntity (3D objects) | UI Components |
| **Data Type** | TextureAsset[] | number, Vec3, Color |
| **Performance** | Lower (texture loading) | Higher (native) |
| **Easing** | Manual (via timing) | Built-in curves |
| **Frame Control** | Full (can pause, reverse) | Limited |
| **Examples** | Spinning coins, fire effects | Fade in/out, scale, slide |

**When to Use Each:**

- **Texture Swapping:** Visual content changes (animated icons, VFX)
- **AnimatedBinding:** UI motion (popups, transitions, scaling)

**Shovel Up Uses Both:**
- Item icons: Texture swapping (coin spinning)
- UI popups: AnimatedBinding (gem flying to corner)
- Dig alerts: Both (textured "!" with scale animation)

---

## Summary

**Shovel Up's "GIF" system is actually:**

1. **PNG frame sequences** imported as Texture Assets
2. **UIO meshes** that support runtime texture swapping via `setTexture()`
3. **AnimatedBinding** for smooth UI property transitions
4. **Hybrid approach** combining both for rich effects

**No actual GIF files are used.** The system mimics GIF-like animation through frame cycling while leveraging Horizon's native animation APIs for smooth motion.

**Key Takeaway:** The "animated GIF" effect is an illusion created by rapidly swapping static PNG textures on specially-marked UIO meshes, combined with smooth property animations via AnimatedBinding.
