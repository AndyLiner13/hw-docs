Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/genre-samples/sim-tycoon-tutorial/module-14-particle-vfx-system

# Module 14 - Particle VFX System

The particle VFX system provides visual feedback for mining actions, tool usage, resource collection, and other game events to enhance the player experience.

## System components

### VFXSystem.ts

This script manages visual effects throughout the game, providing feedback for various player actions and game events.

#### Key features

* **Mining Effects**: Particle effects when tools hit resource nodes
* **Collection Effects**: Visual feedback when resources are gathered
* **Tool Effects**: Special effects for different tool tiers and actions
* **Currency Effects**: Visual feedback during resource conversion
* **Achievement Effects**: Celebration effects for milestones and accomplishments

#### Property description

* **miningParticles**: Particle effects for different resource types being mined
* **collectionEffect**: Visual effect when resources are collected
* **toolTrails**: Trail effects for different tool tiers
* **conversionBurst**: Effect played during resource conversion
* **achievementEffect**: Celebration effect for achievements

## Visual effect types

### Mining effects

Different particle effects for different resource types:

* **Wood Mining**: Wood chips and dust particles
* **Stone Mining**: Stone fragments and sparks
* **Crystal Mining**: Glowing crystal shards and magical effects

### Tool effects

Visual feedback based on tool tier and type:

* **Basic Tools**: Simple spark effects
* **Advanced Tools**: More elaborate particle trails
* **Master Tools**: Premium effects with special animations

### Collection feedback

Resource collection visual confirmation:

* **Resource Pickup**: Glowing effect when items enter inventory
* **Capacity Warning**: Visual indicator when approaching inventory limits
* **Overflow Alert**: Effect when inventory is full

## Integration with game systems

### Resource node integration

VFX triggers are called from ResourceNode scripts:

* Mining action triggers appropriate particle effect
* Node depletion shows completion effect
* Respawn includes restoration visual

### Tool system integration

Tool actions automatically trigger corresponding effects:

* Pickaxe swings show impact particles
* Tool durability warnings include visual indicators
* Tool upgrades show enhancement effects

### Achievement system integration

Major milestones trigger celebration effects:

* First tool purchase shows success effect
* Tier upgrades include progression visuals
* FTUE completion shows achievement effect

## Performance optimization

### Efficient particle management

* **Object Pooling**: Reuse particle effect instances
* **Culling**: Disable effects when not visible to players
* **Level of Detail**: Reduce complexity based on distance
* **Mobile Optimization**: Simplified effects for mobile devices

### Battery and performance considerations

* **Effect Duration**: Keep effects brief to reduce processing load
* **Particle Count**: Limit simultaneous particle systems
* **Update Frequency**: Optimize particle update rates
* **Quality Scaling**: Adaptive quality based on device performance

## Customization guide

### Adding new effects

- Create particle effect entity with desired visual properties.
- Configure particle system parameters (lifetime, velocity, color, etc.).
- Add effect trigger to appropriate game system script.
- Test effect timing and visual impact.
- Optimize for mobile performance.

### Modifying existing effects

- Locate the effect entity in the world.
- Adjust particle system properties:
  * Emission rate and particle count
  * Color gradients and transparency
  * Scale and velocity parameters
  * Lifetime and spawn patterns
- Update trigger conditions if needed.
- Test across different scenarios and device types.

## Best practices

### Visual design principles

* **Clarity**: Effects should clearly communicate their purpose
* **Consistency**: Similar actions should have similar visual styles
* **Timing**: Effects should feel responsive and well-timed
* **Subtlety**: Avoid overwhelming players with excessive effects

### Technical implementation

* **Performance First**: Always prioritize smooth gameplay over visual flair
* **Graceful Degradation**: Provide fallbacks for lower-performance devices
* **Efficient Triggers**: Only play effects when they add meaningful value
* **Memory Management**: Properly clean up effect instances