Source: https://developers.meta.com/horizon-worlds/learn/documentation/create-for-web-and-mobile/designing-worlds-for-mobile-and-web/designing-worlds-for-mobile

# Designing Worlds For Mobile

It is worth considering how the essential experience and the architectural design of a World can impact players on mobile devices. Use the following tips to improve the experience for mobile players in your world.

## Game loops

### Get (new) players into the action quickly

Mobile users are lower intent compared with those in-headset, so they are much more easy to “lose” if they either don’t understand what they are supposed to be doing or aren’t able to get the fun from the world immediately. **New mobile players typically decide whether to continue engaging in a world within the first 20s.**

**Examples**:

* Prefer “drop in drop out” gameplay instead of session-based (e.g. with lobbies) to prevent players waiting around.
  + If a lobby is unavoidable then ensure there’s sufficient instruction and some amount of activity to perform while waiting for other players or round start (whether that’s toys or more game-related actions such as performing equipment upgrades).
* Clear and representative artwork will ensure players joining your world are not turned off by the experience not matching their expectations
* Tutorial videos, interactive tutorials, and pop-up screen UI are all ways your world may ensure instructions are visible and engaging

**Anti-patterns**:

* Clickbait assets which turn off players who land in an unexpected experience
* Confusion over how to play a particular world
* Dropping new players directly into the action with experienced players, with no information
* Not placing and orienting the player towards instructions
* Requiring long bespoke tutorials without getting players into the core experience

### Enable players to make progress in short sessions

Mobile players tend to have much shorter session lengths compared with VR players (~2-5min rather than ~30-60min) so the ability to make progress within that short time period is crucial to enable and improve mobile engagement.

**Examples**:

* Provide ways for players to make progress within the world with just a minute or two of gameplay, e.g.:
  + Gaining XP or currency towards a reward
  + Checking in on offline progress (e.g. upgrading, building, growing)
  + Inventory or loadout admin
  + Quick score-attack type modes

### Support deep power progression

Players will keep coming back for as long as you can reward them, and often mobile players are better incentivised through accruing “power” to get stronger at a game than through improving in skill (since it can be difficult to compete on mobile against players on other platforms).

**Examples**:

* Unlock new loadouts and weapons through grindable rewards
* Give players the ability to showcase their achievements and express themselves through visual signifiers, unlockable items, etc.
* Provide a spread of objectives that can empower players to make decisions about how they engage
* Use daily check-ins and streaks as a metagame, rewarding players for coming back at a regular cadence

**Anti-patterns**:

* Only rewarding competitive results from players

### Use live ops and content updates to bring players back into your world

Give players a reason to maintain engagement with your title by providing them with new content or cyclical world changes. Think about how you’ll make these available, easy to communicate (e.g. through updating your art or title) and most importantly provide roles and engagement opportunities for mobile players.

**Examples**:

* Kaiju’s Defender community challenge to find toxic barrels
* Soapstone’s events bringing players across devices together

### Monetization can give players more investment in your world

Players value and continue to engage with worlds where they have paid for items. Consider using monetisation as an opportunity to boost your engagement with mobile players by offering them twists on the experience they can purchase.

**Examples**:

* In Samurai Tycoon, players can earn gold by playing the game or by purchasing currency packs. This means that there’s an equivalency between time and money, e.g. a sword which takes 20min of gameplay to unlock costs $2.
* High-value and luxury items can give players in-game status, and encourage them to set their own goals for fulfilling their self-expression and identity wishes.

## Avatar and interactions

### Simplify interactions and use the touchscreen to engage players

MR controls feel best when embodied and there’s a tight connection between player’s physical actions and effect in the world. Mobile can produce a similar feeling of immersion using [**Focused interaction**](/hw-docs/Mobile%20and%20web/TypeScript%20APIs%20for%20mobile/Focused%20Interaction.md) , enabling players to directly interact with the world through taps and swipes.

**Examples**:

* Drag/release gestures to launch projectiles
* Tap gestures to create simple 1D controls
* Combine tap and swipe gestures in time to music for performance
* Match different touch control inputs to different ingredients or kitchen tools

### Think about how the avatar interacts with the world

Mobile users aren’t directly puppeting their avatar so you need to make use of the available poses and animations or consider alternative approaches to achieve your goal if there are no appropriate animations.

**Examples**:

* Explore possible ways to repurpose existing animations to communicate the activity (e.g. using the sword swinging animation to cast a spell).
* Bypass animations if no suitable animations are available - rather than requiring an animation for “putting a cactus on a shelf”, teleport the cactus directly from the player’s hand to the shelf.

### Consider camera requirements

Worlds on mobile default to a third person camera perspective (with the camera above and behind the avatar). This means that players will experience your world in a different way to VR, and it’s important to bear this in mind when it comes to small spaces or text-heavy world UIs.

**Examples**:

* If the world features lots of small spaces or world UIs, consider using first-person cameras throughout. This can be set easily via the player spawn point Gizmo without TypeScript, or the camera API can be used for more complex use-cases that do not involve player spawns.

### Support portrait orientation

Portrait orientation on mobile devices provides a different aspect ratio and viewing experience compared to landscape mode. When designing for portrait orientation, consider how this affects player interaction and visual presentation.

**Examples**:

* Use the [spawn point gizmo’s mobile camera options](/hw-docs/Gizmos/Spawn%20point%20gizmo.md#mobile-camera-options) to configure different camera parameters for portrait and landscape orientations.
* Test your world in both orientations using the [Preview Configuration](/hw-docs/Desktop%20editor/Get%20started%20with%20Desktop%20Editor/Preview%20mode.md#setting-the-preview-device) options to ensure UI elements and game mechanics work well in portrait mode.
* Consider how the taller, narrower viewport of portrait mode affects player visibility and navigation in your world.
* When [publishing your world](/hw-docs/Desktop%20editor/Settings/World%20Settings%20Modification.md#advanced), set the **World Orientation** option to specify whether your world is optimized for portrait or landscape viewing.

**Scripting considerations**:

* Use the experimental [Portrait Camera API](/hw-docs/Gizmos/Spawn%20point%20gizmo.md#portrait-camera-api) to detect the current orientation and adjust gameplay elements accordingly.
* Implement orientation-specific logic to optimize the player experience for different viewing modes.

### Provide feedback on actions

Mobile players are not physically grabbing and interacting with the world, which can result in less obvious feedback. Enriching interactive elements by adding SFX and VFX can complement the action and help ensure that players understand what they are doing within the world.

**Examples**:

* Galactic Arcade features layers of VFX and SFX feedback on the arcade machines to reinforce positive and negative outcomes of second-to-second gameplay.
* Hitting the Kaiju with a Plasma Bolt in Kaiju City Showdown causes a large VFX explosion that feels satisfying and heightens immersion.

### Don’t require voice communications

Mobile players are significantly less likely to use voice communications so gameplay design that requires quick synchronous communication can be tricky. However, all players benefit from social interaction, so building systems into your game that enable communication without voice can help bridge that gap.

## Accessibility and balance

### Make key information concise and clear

Mobile players will have a lot less space for information as their screen is perceived as smaller than VR and their hands occlude part of the screen.

**Examples**:

* Communicate crucial world state information through [non interactive screen-space Custom UI](/hw-docs/Desktop%20editor/Custom%20UI/Non-interactive%20custom%20UI%20screen%20overlay.md) .
* Consider screen real-estate vs. text size - text needs to be clear and legible even on smaller mobile screens.

### Consider gameplay balance

Mobile players are limited in the ways they can interact with the world. This can make some gameplay experiences more challenging, particularly when a world requires a player to move, look and press buttons simultaneously

**Examples**:

* Balance for mobile players by simplifying the controls, automating some interactive elements (e.g. auto-fire when pointing at an enemy) and reducing the need for precise accuracy (e.g. [aim assist](/hw-docs/Mobile%20and%20web/TypeScript%20APIs%20for%20mobile/Aim%20Assist.md)).