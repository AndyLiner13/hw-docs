Source: https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/game-loops

# Gameplay Loops for VR

# Gameplay Loops for VR

In game design, gameplay loops are one of the primary components for designing and iterating worlds successfully for new and veteran players. These loops operate at multiple levels—from core player actions to the broader progression systems that drive long-term play. Understanding how to structure core, mid-term, and progression loops is essential for creating compelling VR worlds that are intuitive, rewarding, and immersive.

A gameplay loop is a design pattern that defines a repeating cycle of actions a player performs during gameplay. It is typically structured around tasks, objectives, progress, and rewards, but the characteristics vary based on the level of the loop. Some gameplay loops are short action-based patterns, while others are more strategic and focused on progression.

In Meta Horizon Worlds, gameplay loops share many of the same principles as other gaming platforms. However, there are some additional considerations to make when designing loops for VR worlds, such as spatial awareness, physical fatigue, and the option to replace menu items with in-world objects.

## Core gameplay loop

The core gameplay loop is an action-based loop that defines the smallest repeatable unit of gameplay during intervals lasting from several seconds to about a minute. This loop is the most important loop for the new user experience and skill development.

Because it defines the core actions players repeat throughout the main activity in the game, it is heavily focused on player input and game feedback. Effective core loops are usually introduced early in the first game session, and include fun and engaging mechanics that give new players a reason to return.

**Characteristics:**

* Very repeatable and tactical actions
* Physically engaging
* Immediate feedback, such as haptic, visual, or audio
* Strong sense of agency

**Examples:**

* Shooter: move, jump, aim, shoot, reload
* Builder: explore, gather, open inventory, craft/build
* Platformer: move, jump, aim, attack, explore, grab item
* Sports: pass, run, aim, shoot, switch player, block, steal

As players progress through the game they often start performing more advanced actions during the core loop, such as casting powerful spells and animation cancelling.

### VR design recommendations

**Note**: VR gameplay typically averages about 30 minute sessions in comparison to mobile, which average 5-10 minutes. For information about gameplay loops on mobile and web, see [Short loop mobile world design guidance](/hw-docs/create-for-web-and-mobile/short-loop-mobile-world-design-guidance).

**Engagement:**

* Introduce the primary gameplay quickly and give players a reason to return.
  + Avoid long sessions of story telling before introducing gameplay.
  + Start simple and build a fun and engaging experience.
  + Provide fun mechanics and social dynamics quickly.
* Provide players with a sense of mastery early.
* Leverage the [physics system](/hw-docs/desktop-editor/physics) to respond to movement and collisions.
* Use [local scripting](/hw-docs/typescript/local-scripting/getting-started-with-local-scripting) to optimize latency for the local player.

**Player input:**

* Consider physical fatigue on hand controls and headsets for VR devices. A hardcore sports or fitness world can have a higher threshold, while others have a lower threshold.
* Use natural movements and avoid actions that are awkward on VR devices.
* Maintain smooth and predictable movement to avoid motion sickness.
* Don’t overcomplicate core mechanics.

**Gameplay guidance:**

* Teach players about progression using smaller sets of instructions.
* Provide an archive of instructions for players to return to.
* Don’t overwhelm players with choices. Two or three choices at once is optimal.
* Avoid severe punishment early on.
* Address different learning styles using audio, text, visual, and environmental prompts.

## Mid-level gameplay loop

A mid-level gameplay loop is a 10-30 minute loop that combines the actions of the [core loop](#core_gameplay_loop) into a goal or task. The focus of this loop is on midterm tasks and completion, such as completing rounds, stages, crafting objectives, and social activities.

The mid-level loop also has more involvement with story and dialog. Furthermore, this is the primary loop where you can start to identify friction points for players, such as closing the game during a long story session or after being killed repeatedly by players in a short period of time.

**Characteristics:**

* Objective-based
* Often focused on gaining immediate XP, gear, and rewards
* Travel and exploration
* Short to mid-term planning
* Stages, rounds, levels, and areas

**Examples:**

* Shooter: collect waypoints, use special abilities, kill/get killed, complete a match
* Builder: explore, gather materials, craft, navigate inventory
* Platformer: obtain powerups, discover secrets, complete levels or dungeons
* Sports: select a team formation, redeploy team players, complete a match
* All: view a cutscene, navigate a dialog, conversate with other players

### VR design recommendations

* Alternate between action and slower-paced tasks to prevent physical fatigue.
* Minimize UI clutter by using in-world items to open menus, such as a wristwatch, backpack, or storage compartment.
* Use voice cues, world interactions, and physical maps to immerse players into their objectives.
* Design memorable environments that activate players’ spatial memory.

## Progression loop

A progression loop is a long-term loop that supports progression over numerous hours or days. This type of loop focuses on players’ long-term goals, such as scoring, strategy, endgame mastery, and big rewards that drive them to repeatedly return to the game. Additionally, progression loops include personal challenges and goals that players commit to on their own outside the world’s built-in objectives. These challenges are often the most compelling reason for players to return.

**Personal challenges:**

* Zero-cycling (defeating an enemy encounter before they perform their first action)
* Character collection
* Item and companion collection
* Completing content with underpowered characters
* In-game economic challenges
* Develop community content
* Completely unexpected activity

**Characteristics:**

* Long-term motivation and goals
* Player commitment and investment
* Visible progress and strength
* Resource accumulation
* Content updates and balance patches

**Example:**

* Shooter: earn ranks, advance on leaderboards, obtain rare skins, complete guild challenges
* Builder: complete creations, share creations, discover secrets
* Platformer: complete level stars, defeat endgame bosses, unlock new worlds
* Sports: play in tournaments, trade team players, obtain medals
* All: horde in-game resources for the next content update

### VR design recommendations

* Provide endgame content or challenges that give players long term goals.
* [Analyze](#measuring_effectiveness) the progression loop to identify and support personal challenges that are popular among players.
* Provide in-game introductions to upcoming content updates.
* Use physical storytelling, environmental queues, and NPCs to build lore.
* Make content relevant to new and veteran players.
  + Provide catch-up mechanics for new players after content updates.
  + Reward veteran players for their commitment and investment.

### Achievements

The achievements system allows you to define a list of player objectives for tracking player progression and display the progress with players. You can define, read, and write player achievements using code blocks and then display them using the [Achievements gizmo](/hw-docs/vr-creation/scripting/create-player-achievements), which you can also access using [TypeScript](/horizon-worlds/reference/2.0.0/core_achievementsgizmo).

## Monetization

Your monetization strategy can have a large impact on your gameplay loops, so you should implement it carefully and then monitor the impact on your gameplay loops. Poorly implemented monetization can be a major source of friction events in games that game communities and content creators will often highlight before a game is released publicly.

Any monetization efforts that appear pay-to-win, unfair, or block progression should be carefully reconsidered. Once your world is live, you should [analyze](#measuring_effectiveness) your gameplay loops for friction events related to monetization. This is often challenging because the results can impact players long after the event that caused the issue.

In the core loop, the event might be a disruptive ad or a poor roll on a paid item that contains random rewards. In a mid-term loop, the friction event might be a poor win rate for players that aren’t heavy spenders. In a progression loop, you might have to identify players with poor long-term progress and then narrow the issues down in the mid-term and core loops.

## Measuring effectiveness

In addition to testing and using [performance tools](/hw-docs/performance-best-practices-and-tooling/performance-tools/using-performance-tools-from-web-and-mobile), you can measure the effectiveness of your gameplay loops by using gameplay metrics provided by the In-World Analytics framework.

The In-World Analytics framework provides scripts and APIs for capturing metrics that provide insight into the effectiveness of your gameplay loops. The framework includes the following [modules](/hw-docs/performance-best-practices-and-tooling/analytics/using-in-world-analytics#in-world-analytics-modules) for capturing progression, rewards, gameplay actions, and friction events directly from your scripts.

* Loops and steps modules: Rounds, Stages, Sections
* Progression modules: Rewards, LevelUp, Tasks
* Friction modules: Friction, Death, KOEnemy, KOPlayer

For more information, see [Using In-World Analytics](/hw-docs/performance-best-practices-and-tooling/analytics/using-in-world-analytics).

## Frame and script integration

A gameplay loop of any size runs over multiple frames that execute in multiple stages where players, physics, world updates, components, and rendering are updated every frame. For details about where your code runs throughout a frame sequence, see the [Frames overview](/hw-docs/desktop-editor/frames).

For information about how scripts execute and how to integrate a sequence of events into a script, see the [TypeScript Lifecycle](/hw-docs/typescript/typescript-script-lifecycle) guide.

## Additional information

* [Q&A Session: Gameplay Loops](/hw-docs/mhcp-program/qa-sessions/qa-session-gameplay-loops-with-victor-riddel)
* [Q&A Session: New User Experience](/hw-docs/mhcp-program/community-tutorials/new-user-experience)