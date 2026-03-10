---
source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/genre-samples/sim-tycoon-tutorial/module-15-audio-system
---

# [Module 15 - Audio System](#module-15---audio-system)

The audio system provides sound effects and feedback throughout the game to enhance player experience and provide clear audio cues for various actions and events.

## [System components](#system-components)

### [AudioSystem.ts](#audiosystemts)

This script manages all audio playback in the game, coordinating sound effects for different game actions and maintaining audio settings for optimal mobile performance.

#### [Key features](#key-features)

- **Mining Audio**: Sound effects for different tool and resource combinations
- **Tool Audio**: Unique sounds for each tool tier and action
- **UI Audio**: Button clicks, purchase confirmations, and menu interactions
- **Ambient Audio**: Background sounds and environmental audio
- **Achievement Audio**: Special sounds for milestones and accomplishments

#### [Property description](#property-description)

- **miningAudio**: Audio clips for different mining actions and resource types
- **toolSounds**: Sound effects for tool usage, durability warnings, and upgrades
- **uiSounds**: Interface audio for buttons, confirmations, and notifications
- **conversionAudio**: Sound effects for resource conversion and currency transactions
- **achievementAudio**: Celebration sounds for achievements and progression

## [Audio categories](#audio-categories)

### [Action feedback sounds](#action-feedback-sounds)

Mining and tool interaction audio:

- **Wood Mining**: Chopping and wood-cutting sounds
- **Stone Mining**: Pickaxe on rock impacts and stone cracking
- **Crystal Mining**: Magical chiming and crystal resonance sounds
- **Tool Durability**: Warning sounds when tools are nearly broken
- **Tool Breaks**: Sound when tool durability reaches zero

### [Interface sounds](#interface-sounds)

User interface audio feedback:

- **Button Press**: Touch confirmation sounds
- **Purchase Success**: Positive confirmation for successful transactions
- **Purchase Fail**: Error sound for insufficient funds
- **Menu Navigation**: Subtle sounds for UI transitions
- **Notification**: Alert sounds for important messages

### [Achievement sounds](#achievement-sounds)

Progression and milestone audio:

- **First Purchase**: Special sound for first tool purchase
- **Tier Upgrade**: Escalating sounds for different tier achievements
- **FTUE Completion**: Graduation sound when completing tutorial
- **Global Node**: Collaborative completion celebration

## [Mobile audio optimization](#mobile-audio-optimization)

### [Performance considerations](#performance-considerations)

Audio system optimized for mobile devices:

- **Compressed Audio**: Efficient audio formats for mobile bandwidth
- **Memory Management**: Smart loading and unloading of audio assets
- **Battery Optimization**: Reduced audio processing to preserve battery life
- **Quality Scaling**: Adaptive audio quality based on device capabilities

### [Platform-specific optimization](#platform-specific-optimization)

- **iOS Optimization**: AVAudioSession management for proper audio behavior
- **Android Optimization**: AudioManager integration for system audio
- **Cross-Platform**: Consistent audio experience across different devices
- **Accessibility**: Support for hearing-impaired players with visual alternatives

## [Integration with game systems](#integration-with-game-systems)

### [Mining system integration](#mining-system-integration)

Audio triggers from mining actions:

- ResourceNode scripts call audio effects when mined
- Different sounds for different tool/resource combinations
- Progressive audio intensity based on mining progress
- Audio feedback for resource collection

### [Tool system integration](#tool-system-integration)

Tool actions automatically trigger appropriate audio:

- Pickaxe swings produce tool-specific sounds
- Tool upgrades play enhancement audio
- Durability warnings include audio alerts
- Tool breaking plays dramatic audio effect

### [Store system integration](#store-system-integration)

Purchase interactions include audio feedback:

- Button interactions play confirmation sounds
- Successful purchases trigger positive audio
- Insufficient funds play error audio
- Currency conversion includes transaction sounds

## [Customization guide](#customization-guide)

### [Adding new audio effects](#adding-new-audio-effects)

1. Prepare audio files in supported formats (WAV, OGG, MP3).
2. Import audio assets into the project.
3. Create audio entity and attach AudioGizmo component.
4. Configure audio properties (volume, pitch, 3D settings).
5. Add audio trigger calls to appropriate game system scripts.
6. Test audio timing and volume levels.

### [Modifying existing sounds](#modifying-existing-sounds)

1. Locate the audio entity in the world hierarchy.
2. Update the AudioGizmo component properties:
   - Volume levels for different contexts
   - Pitch variations for variety
   - 3D audio settings for spatial effects
   - Loop settings for ambient audio
3. Adjust trigger conditions in game scripts if needed.
4. Test audio balance and player experience.

### [Audio balancing](#audio-balancing)

1. **Volume Hierarchy**: Establish clear volume priorities for different audio types.
2. **Dynamic Range**: Ensure important sounds are clearly audible.
3. **Audio Ducking**: Implement systems to reduce background audio during important sounds.
4. **Player Controls**: Consider volume controls for different audio categories.

## [Performance optimization](#performance-optimization)

### [Efficient audio management](#efficient-audio-management)

- **Audio Pooling**: Reuse audio sources for frequent sounds
- **Distance Culling**: Disable distant audio sources to save processing
- **Quality LOD**: Reduce audio quality based on distance and importance
- **Compression**: Use appropriate compression for different audio types

### [Memory and bandwidth optimization](#memory-and-bandwidth-optimization)

- **Streaming**: Stream longer audio files instead of loading entirely
- **Compression**: Use efficient audio codecs for mobile platforms
- **Preloading**: Smart preloading of essential audio effects
- **Cleanup**: Proper disposal of unused audio resources

## [Best practices](#best-practices)

### [Audio design principles](#audio-design-principles)

- **Clarity**: Each sound should have a clear purpose and meaning
- **Consistency**: Similar actions should have similar audio signatures
- **Feedback**: Audio should provide immediate feedback for player actions
- **Atmosphere**: Background audio should enhance immersion without distraction

### [Technical implementation](#technical-implementation)

- **Performance First**: Prioritize smooth gameplay over audio complexity
- **Fallback Systems**: Graceful degradation when audio systems fail
- **Platform Testing**: Test audio behavior across different mobile devices
- **Accessibility**: Consider players with hearing impairments

### [Player experience](#player-experience)

- **Volume Balance**: Ensure no single sound overwhelms the audio mix
- **Audio Preferences**: Allow players to adjust audio settings
- **Context Awareness**: Audio should adapt to different gameplay situations
- **Quality Scaling**: Provide options for different device capabilities

