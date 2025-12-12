Source: https://developers.meta.com/horizon-worlds/learn/documentation/create-for-web-and-mobile/designing-a-mobile-game-new-user-expectations

# Designing a mobile game - New user experience 101 ten best practices

Welcome back to the Growth Insights Series!

This article continues our two-part series, *Designing a Mobile Game New User Experience 101*. In the first installment, we explored the basics of designing a New User Experience (NUX) and focused on general expectations. In this article, we’ll walk through ten best practices for designing your NUX to help you create an experience that’s tailored to your game, design, and player base. The ten best practices are:

- Audit the first session of your game.
- Funnel your players to the proper places.
- Time and test your NUX length.
- Tutorialize your controls for Worlds on mobile.
- Encourage and build player mastery.
- Frame the core loop and gameplay session for new players.
- Contextualize gameplay with narrative onboarding.
- Walk players through progression basics.
- Highlight player goals in the NUX.
- Introduce store and economy in the NUX.

# Ten best practices for designing your NUX

## 1. Audit the first session of your game

The first session is one of the most important parts of your player’s new user experience. Mobile players need to be convinced early that the game is fun, offers lasting appeal, and rewards their effort. If players find your game confusing or uninteresting, they’ll likely move on to something else.

Please feel free to [view the tutorial World](https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/new-user-experience-tutorial/module-1-setup) for a strong example of a Worlds NUX experience that is guided by quests.

The first session should set the stage for your entire experience by highlighting both **how** and **why** to play. We’ll use a walkthrough of *Clash Royale’s* first session as an example. Though *Clash Royale* has a guided tutorial, the principles can be easily adapted to a hands off minimalistic approach.

| Your Game Should | Clash Royale Example | Minimalistic Adaptation |
| --- | --- | --- |
| Clearly explain the rules and central mechanics. | The player is guided through the basics of playing cards and deploying units, without diving too deep into detailed mechanics. | Show the player a clear goal upon loading in, e.g. complete a quest, reach the treasure, approach the table with other players. |
| Explain the controls and expected gameplay style. | After defending against an enemy attack, players are prompted to play an exciting high-value card (a Giant). | Use intuitive interactions, like grab, throw, move or jump. |
| Let players see gameplay in action. | Players follow these guided steps, leading to a decisive and satisfying early victory. | Lean on co-presence and allow players to observe others in action, or record a short video of moment-to-moment gameplay that players can watch. |
| Show how long active gameplay takes. | Clash Royale quickly gets players into the action. There’s minimal world-building or setup — players are learning by doing within seconds of loading into the game’s new user experience. | Drop players into a simplified version of the action, and make sure that the core loop is extremely quick to complete the first time e.g. dig up a treasure, sell it to the vendor, buy a new shovel. |
| Demonstrate the progression systems. | The game walks players through the easy process of upgrading a card (a Knight) and immediately shows them the impact in the next battle. | After 1-2 repetitions of the core loop have the player upgrade or level up, then reinforce that the power was needed on the next loop. |
| Deliver excitement, reward, and fun. | Players experience the central mechanics, understand the controls, and get a hint at progression by receiving a reward chest after winning the match. | End every repetition of the core loop with an exciting reward - XP, gold, an exciting cosmetic, or access to more of the game will hook the player and pay off the early time spent. |

This example clearly illustrates how to build a compelling opening session that onboards the player while also getting them hooked. Players can experience the **central mechanics** by being walked through them, understand the controls, and get a hint at **progression** by receiving a **reward** chest with cards and resources after winning the match.

## 2. Funnel your players to the proper places

Once players are settled after the first few minutes of gameplay, ask yourself: “*Where should players go next?*” Guide them toward the experiences you want them to explore next. Many games drop players in and let them decide. Instead, use guiding UI prompts to funnel players to the proper places in the game that give them a distinct goal for playing.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../image_data/adf698d7f06f79aa101efc771f216d97d89b1ce3e79ffcf50e06a9e246fe0d4b.md)

### Overview
The image is a colorful illustration featuring two individuals standing on a pink surface, facing a third person who is running towards them. The background includes a gradient blue sky with clouds and abstract shapes. The scene conveys a sense of movement and interaction.

### Key Elements
- **Individuals**: Two people are standing on the left side of the image, facing the running individual. One is wearing a gray shirt and dark pants, while the other is dressed in a red top and black skirt.
- **Running Individual**: A person in a green shirt and blue pants is running towards the two standing figures.
- **Background**: The background features a gradient blue sky with white clouds. There are abstract shapes resembling buildings or blocks scattered across the landscape.
- **Running Icon**: A circular icon with a white figure running is located on the right side of the image.
- **Speech Bubble**: A speech bubble containing a blue knot-like symbol is positioned above the running individual.

### Visual Flow / Relationships
The most prominent visual elements are the two standing individuals and the running individual. The running figure is the focal point as they move towards the others. The abstract shapes and clouds provide a dynamic backdrop. The speech bubble adds a layer of interaction, suggesting communication or thought.

</details>

<p></p>



*To prevent player churn, avoid overwhelming players with excessive choices and a lack of clear direction. A completely open-ended sandbox experience can leave players feeling unsure of their objectives and next steps.*

## 3. Time and test your NUX length

An overly long NUX can lead to player churn, so it’s important to understand how much time you’re asking from your players. While there are no absolute rules, here are some common timing ranges based on complexity:

| Game Type | Example |
| --- | --- |
| **Hypercausal-to-casual** ⏰ 3-5 minutes | A game like *Pokémon Friends* begins with some narrative onboarding, but moves players into puzzle-solving and the central crafting mechanic (rewards) within four minutes. |
| **Casual-to-midCore** ⏰ 5-10 minutes | *Clash Royale’s* NUX is incredibly brisk, moving players through tutorialization and into the main game within four-and-a-half minutes. *Fire Emblem: Heroes*, meanwhile, opens all its gameplay modes in about seven minutes after explaining the basics. |
| **Midcore-to-core (and cross platform)** ⏰ 15-60 minutes | *Genshin Impact* and *Infinity Nikki* feature 10-15 minutes of NUX before players can start dictating the flow, whereas more linear experiences like *Zenless Zone Zero* can keep players on-rails for close to an hour. |

Your NUX might go beyond these times, especially if you onboard players into additional game modes. Don’t be afraid to save some tutorials for later. A well-crafted NUX is built from an engaging first-time user experience (FTUE) that gently onboards players into gameplay modes and encourages vital engagement habits.

## 4. Tutorialize your controls for Worlds on mobile

Simplicity is key for most Worlds experiences on mobile. Unless your World is highly complex, such as *Citadel*, aim for clear and minimal instruction.

**Some best practices for control tutorialization include:**

- **Display** the gameplay rules in plain text.
- \*\*Make \*\*the rules straightforward and easy to understand (For example, “Reach the other side without falling off.”)
- **Rely** on players’ ability to read and intuit gameplay from other popular experiences on the platform they may be familiar with.

Worlds and other platform games offer developers the opportunity to create a variety of experiences. If you’re developing a less traditional World, follow mobile game best practices to ensure players quickly understand controls. Too much friction early on can cause players to quit before discovering what makes your World fun.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../image_data/f31d040e9ab9828e5eced878bfa3ca09b830189b2d5b25a25ba391c0a348fe8e.md)

### Overview
The image depicts a scene from a game or interactive interface. It features a character standing on one side of a gap, with a glowing arch connecting to a treasure chest on the other side. The instruction at the bottom suggests tapping a button to cross the gap. The background is a simple sky with clouds.

### Key Elements
- **Character**: A female figure with brown hair, wearing a red top and black pants, positioned on the left side of the gap.
- **Gap**: A large, pink cylindrical structure spanning horizontally across the image, representing a gap that needs to be crossed.
- **Treasure Chest**: A pink and yellow treasure chest with a golden lock, located on the right side of the gap.
- **Glowing Arch**: A white, curved line connecting the character to the treasure chest, indicating a path or jump point.
- **Instruction Text**: "Tap the jump button to cross" displayed at the bottom of the image.
- **Jump Button**: A circular button with a white silhouette of a running figure and a small circle around it, located at the bottom right.

### Visual Flow / Relationships
- The most prominent visual element is the glowing arch, which draws attention to the treasure chest as the goal.
- The instruction text at the bottom guides the viewer on how to proceed.
- Spatially, the character is on the left, the gap spans the middle, and the treasure chest is on the right.

</details>

<p></p>



*When developing games that share similarities with existing platform titles, it’s unnecessary to re-explain fundamental concepts. Often, simply making the objective (e.g., reaching a treasure chest) and the obstacles (e.g., a gap to be jumped) visually clear can be sufficient for players to grasp the game’s rules intuitively.*

## 5. Encourage and build player mastery

Once players master the controls and basic gameplay, build further mastery through engineered challenges. The NUX should lead players through a series of challenges from basic to advanced. Whether the gameplay is built around combat, puzzles, platforming, or racing, the NUX should be easy for players to clear as they are gradually onboarded into tougher content.

While building a player’s confidence is valuable, there is also value in allowing the players to lose later in the NUX. Losses are a part of the game. By having players lose a level in the NUX, the game can use this as an opportunity to direct players to:

- **Progression systems** (adding equipment or leveling characters up)
- **Power-ups or consumables** (or even extra moves) to gently direct players towards monetization offerings

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../image_data/b7e28d571b0feab7be80569ab8127d3a06a87e55a0454c30ffba4c07e08309df.md)

### Overview
This image depicts a pop-up notification in a game interface, indicating that the player has run out of moves. The pop-up contains a message encouraging the player to continue playing by adding more moves. The background shows a blurred game environment.

### Key Elements
- **Top Left Corner**: A star icon with the number "999" next to it, likely representing the player's current score or points.
- **Pop-Up Title**: Located at the top of the pop-up, within a purple rectangular box, the text reads "**Out of moves!**".
- **Message Section**: Below the title, the text says "**Don't give up! Add 5 moves to continue!**".
- **Character Image**: A cartoon character with a distressed expression, holding their face with both hands, is positioned centrally below the message.
- **Left Side**: Two circular icons with "+5" and "==" symbols, suggesting the option to add five moves.
- **Right Side**: A green button labeled "**Play On**" with a star icon and the number "500", indicating the cost to continue playing.
- **Top Right Corner**: An "X" icon, presumably for closing the pop-up.

### Visual Flow / Relationships
The most prominent visual element is the pop-up itself, which is centered and draws attention due to its bright colors and central placement. The character image is the secondary focal point, emphasizing the urgency of the situation. The "+" icons and the "Play On" button are arranged symmetrically around the character, guiding the viewer's eye towards the action required to resolve the situation.

</details>

<p></p>



*Many puzzle games are designed with challenging levels at their core. Players might need multiple attempts to complete a level, or they can opt to purchase temporary power-ups to overcome obstacles.*

Losses, if properly incorporated into the NUX, should come *after* mastery and confidence-building challenges to avoid discouraging players. The NUX should give clear feedback about the loss and what they need to overcome it. Walk players through the steps to surpass their loss, then celebrate and reward them for overcoming the challenge. This turns a frustrating moment into an opportunity to build mastery and confidence.

## 6. Frame the core loop and gameplay sessions for new players

In addition to teaching players how to play, your NUX should show them what a full gameplay session looks like. Make it clear how much time a typical session requires and what kind of progress players can expect to make.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../image_data/7bc3f0c6cc4057bddb01f3dfab6f111a903eace76c01a9409f9332233fb6fbbe.md)

### Overview
This image depicts a user interface segment from a game, specifically a quest log screen. It shows a list of quests categorized under Daily, Weekly, and Monthly tabs. The layout is clean and organized, with clear indicators of progress and completion status.

### Key Elements
- **Quest Title**: "Find 100 mushrooms"
  - **Visual description**: A teal-colored box with rounded corners.
  - **Location**: Top section of the quest card.
  - **Contents**: Text indicating the quest goal ("Find 100 mushrooms").
  - **Visual styling**: Teal background, white text, small mushroom icon on the left side.
- **Progress Indicator**: "Ready to claim!"
  - **Visual description**: A yellow button with rounded corners.
  - **Location**: Below the quest title.
  - **Contents**: Text stating "Ready to claim!".
  - **Visual styling**: Yellow background, white text.
- **Completion Status**: "99"
  - **Visual description**: A gold star icon with a number next to it.
  - **Location**: To the right of the progress indicator.
  - **Contents**: Number "99" indicating the current progress towards the goal.
  - **Visual styling**: Gold star, white number.
- **Quest Timer**: "12h 30m 38s"
  - **Visual description**: A small circular icon with a clock symbol.
  - **Location**: Above the quest title.
  - **Contents**: Time remaining until the quest resets.
  - **Visual styling**: Light yellow background, black text.
- **Other Quests**:
  - **Quest Title**: "Harvest 50 beets"
    - **Visual description**: A light gray box with rounded corners.
    - **Location**: Below the first quest card.
    - **Contents**: Text indicating the quest goal ("Harvest 50 beets").
    - **Visual styling**: Light gray background, white text, small beet icon on the left side.
  - **Progress Indicator**: "10/50"
    - **Visual description**: A progress bar with a green filled portion.
    - **Location**: Below the quest title.
    - **Contents**: Number "10" indicating the current progress out of "50".
    - **Visual styling**: Green filled portion, dark gray background.
  - **Completion Status**: "99"
    - **Visual description**: A gold star icon with a number next to it.
    - **Location**: To the right of the progress indicator.
    - **Contents**: Number "99" indicating the current progress towards the goal.
    - **Visual styling**: Gold star, white number.
  - **Quest Title**: "Collect 20 leaves"
    - **Visual description**: A light gray box with rounded corners.
    - **Location**: Below the second quest card.
    - **Contents**: Text indicating the quest goal ("Collect 20 leaves").
    - **Visual styling**: Light gray background, white text, small leaf icon on the left side.
  - **Completion Status**: "Completed"
    - **Visual description**: A dark gray box with rounded corners.
    - **Location**: Below the quest title.
    - **Contents**: Text indicating the quest has been completed ("Completed").
    - **Visual styling**: Dark gray background, white text, green checkmark icon on the left side.

### Visual Flow / Relationships
- **Most Prominent Element**: The quest titled "Find 100 mushrooms" due to its highlighted "Ready to claim!" button.
- **Arrows/Lines/Connectors**: None.
- **Implied Reading Order**: From top to bottom, left to right within each quest card.
- **Spatial Relationships**: Quest cards are arranged vertically, with each card containing its own title, progress indicator, and completion status.

</details>

<p></p>



*Task lists serve a dual purpose: they reward player engagement and act as a tutorial. They inform players about the expected daily or weekly system interactions and the anticipated time commitment required to keep pace.*

Neglecting this can cause confusion about the time commitment the game asks of them. Showing how the game fits into a player’s daily routine allows them to figure out how best to engage with it. By demonstrating this in the NUX, a player can make a more informed decision about whether the game is a good fit.

## 7. Contextualize gameplay with narrative onboarding

From simple to complex, most games on mobile have a narrative component to give players context for their actions. The narrative complexity in your NUX will vary by game type. Player time is finite, and your NUX has other important aspects to cover.

**During the NUX, it’s best to establish the following:**

- What the game world is
- Who the key characters are
- The player’s role in the world
- The foundation for the gameplay ahead

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../image_data/35d41cddf3475228d500574dd7017612dd43b9f05b897f16875854fe9a6f8c60.md)

### Overview
This image depicts a pop-up notification with a cartoon illustration and text. The overall composition is centered, with a light beige background and a blue header. The pop-up contains a timer and an "OK" button at the bottom.

### Key Elements
- **Header**: Located at the top-center, the header is a blue rectangle with white text that reads **"Stay tuned!"**.
- **Illustration**: Positioned centrally within the pop-up, showing a cartoon girl watering a small tree. The girl has orange hair tied in a ponytail, wearing a yellow shirt and orange pants. She is holding a blue watering can.
- **Timer**: Below the illustration, a circular timer icon with a gold border displays **"12h 30m 38s"**.
- **"OK" Button**: At the bottom of the pop-up, a green rectangular button with white text that says **"OK"**.
- **Close Button**: In the top-right corner, there is a small pink circle with a white "X".

### Visual Flow / Relationships
The most prominent visual element is the central illustration of the girl watering the tree. The timer and "OK" button are secondary but equally important. The layout follows a standard pop-up design with a clear call-to-action ("OK") and a way to dismiss the pop-up ("X").

</details>

<p></p>



*Implement waiting periods between story installments to manage player progression and encourage recurring engagement. Ensure alternative, lower-reward activities remain accessible during these wait times.*

## 8. Walk players through progression basics

The new user experience should walk the player through the basics of progression: what benefits it offers, and most importantly, how to make progress. For example, in a combat-focused RPG (whether player vs. player or player vs. enemy), you might walk players through leveling up a character or upgrading a piece of gear early in the game.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../image_data/ae167c9bc2b91ff4e66f1714a50e0dc2f613d476f568d1c7d97319ed9de8dbdd.md)

### Overview
This image is a character profile screen from a mobile game featuring a cat character named "Master Cat." The layout includes various statistics, abilities, and upgrade options for the character.

### Key Elements
- **Character Image**: A cartoon cat wearing a black ninja outfit, holding a scroll. Located centrally.
- **Name and Stats**: 
  - **Name**: Master Cat
  - **Power**: 890
  - **Health**: 1489
  - **Attack**: 297
  - **Rarity**: Common
  - **Level**: Level 12
  - **Rank**: Rank 4
- **Abilities**: A section listing various skills with corresponding icons and points.
  - Defense: 500
  - Fencing: 1000
  - Protection: 800
  - Shooting: 200
  - Fire: 150
  - Magic: 500
- **Upgrade Button**: A green button labeled "Upgrade" with a star icon and the cost of 999 coins.

### Visual Flow / Relationships
The screen is divided into sections:
- **Left Side**: Character name, stats, and rarity.
- **Center**: Character image.
- **Right Side**: Level, rank, abilities, and upgrade button.

</details>

<p></p>



*When integrating upgrade-based progression into your game, introduce it during the New User Experience (NUX). Even if players anticipate such systems, they require clear instruction on its mechanics and the specific advantages it offers within your game.*

For single-player, non-combat experiences (like puzzle or exploration games), players should see what happens when they move into a new part of the game world. Avoid the temptation to over-explain the value of progression; you don’t want to overload the player. The best thing you can do for the player is to show progression, not tell them about progression. The NUX should simply hint at progression, leaving deeper details for players to discover later.

## 9. Highlight player goals in the NUX

Another aspect to highlight is the goals and stretch goals the player can aim for. These goals must provide strong and compelling reasons to keep playing. Even in straightforward social games like *Spin the Bottle* or *Among Us*, players have an ever-growing collection of cosmetics to chase. These goals should be introduced but never completed during the NUX.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../image_data/9a27428682db9599b716c5c39340c1a6dcb90bd72ac0ca7fa69b624146f40fd0.md)

### Overview
This image depicts a user interface element labeled "Order Board." It displays a list of locations with associated rewards and a countdown timer for the next delivery. The layout is organized into two main sections: a list of locations on the left and a delivery countdown on the right.

### Key Elements
- **Top Left Corner**: A circular icon with a star and the number "999," likely indicating a currency or points balance.
- **Title Bar**: A rectangular bar at the top center labeled "Order Board."
- **Left Panel**: Contains four cards, each representing a location with a checkmark and reward value of "99."
    - **Ray's Salon**
    - **Gas Station**
    - **Lucy's Cafe**
    - **School**
    Each card has a pink background with a white border and contains a star icon with the number "99."
- **Right Panel**: Displays a countdown timer stating "Next delivery in: 11m 30s" with a large "L" icon inside a circle, possibly indicating a location or delivery label.
    - **Order Items Section**: Below the timer, it shows two items with progress indicators:
        - Tomato: 2/5
        - Corn: 0/5
        Both items are represented by small icons.
- **Bottom Right Corner**: A gray button labeled "Send."

### Visual Flow / Relationships
The visual hierarchy is clear, with the title bar at the top, followed by the list of locations on the left, and the delivery countdown on the right. The items in the order section are visually grouped together under the "Order Items:" heading. The "Send" button is placed at the bottom right, suggesting it is the final action to complete the order process.

</details>

<p></p>



*To engage players and structure early gameplay, it’s beneficial to introduce goal systems that hint at future content. While these systems should be presented, players should be encouraged to return for subsequent sessions to fully complete all objectives.*

**A well-tuned NUX should provide the following:**

💡 An idea of what the goals are

🚀 How to make progress toward the goals

🔁 An understanding how the game’s core loop feeds into making progress

🏆 Rewards that players can earn along the way

A game’s NUX should also introduce new side goals as players progress.

## 10. Introduce the store and economy in your NUX

No matter how your game monetizes, the NUX should feature a look into your economy. Resources are accrued, characters are leveled up, and cosmetics are earned or purchased. All of this should be hinted at in the NUX. Players should be onboarded into how the economy works and what’s needed to complete basic tasks so they understand in-game transactions and resources.

The game should provide multiple on-ramps to the store via pop-ups or anchored menu elements on the home screen. These let players know what deals are available and the benefits of purchasing. As with progression, it’s important to avoid overwhelming players.

As players get closer to mid-game, new currencies may be required. These do not need to surface in the NUX. The player is still finding their feet and doesn’t need another item to track.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../image_data/90f9b6ac3893341e52762dada44539f392a596af9d3ba496d60a4f7748e03067.md)

### Overview
This image depicts a user interface from a mobile game or app, specifically a shop zone screen. The layout includes various items available for purchase, along with pricing information and a notification about needing more currency to buy shop items.

### Key Elements
- **Top Left Corner**: A circular icon with a star and the number "99," likely representing a currency or points balance.
- **Shop Zone Header**: A blue rectangular area labeled "Shop Zone" at the top.
- **Items Section**: Below the header, there are four potion bottles arranged horizontally. Each bottle has a price tag underneath indicating the cost in currency units.
- **Bottom Left Corner**: A character with a back view, wearing a red top and black skirt, standing near a large circular button with a white circle in the center.
- **Bottom Right Corner**: A speech bubble with the text "> Need to purchase more currency to buy the shop items." A small robot-like character is partially visible behind this speech bubble.
- **Right Side**: A pink shopping cart icon with a glowing effect, suggesting an action to open the shopping cart.

### Visual Flow / Relationships
The most prominent visual elements are the items in the "Shop Zone" section, as they are the focal point of the screen. There is a clear horizontal arrangement of items, with prices listed beneath them. The speech bubble and robot character draw attention to the need for additional currency. The shopping cart icon is positioned to the right, indicating a call-to-action for purchasing.

</details>

<p></p>



*Horizon Worlds games often feature unique 3D, or “embodied,” shops. Despite their visual appeal, it’s crucial to design your shop to facilitate easy price and value comparison between different offerings. Upon a player’s initial visit, ensure they possess sufficient currency to make at least one recommended purchase.*

# NUX missteps to avoid

## Providing too little information

The point of the NUX is to explain the game’s controls, core gameplay, and progression systems. One of the biggest mistakes a game can make is providing the player with too little information. If the NUX doesn’t show players *how* to play and *why* they should play, the game will struggle to onboard and retain them.

If your NUX simply drops players into the game and expects them to figure it out, they’ll likely churn once they hit friction. On mobile, where players can easily switch to another title, this risk is especially high.

## Overburdening players with information

Conversely, a NUX can overburden the player with too much information. This presents two problems. First, player attention is finite: an extremely long new user experience will feel slow or boring, hindering players from organically finding the fun .

Second, players cannot be expected to retain all the information presented in an overly-long NUX. Even genre veterans face a learning curve with a new game’s nuances. Prioritize teaching the fundamentals. Save advanced, mid-to-late game information for later tutorials.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../image_data/15946777faf0defd988680e0086a8725f74c948a263000599bfdc91cc725a767.md)

### Overview
The image depicts a welcoming message displayed as a pop-up notification over a colorful, cartoonish background. The main focus is a speech bubble containing text, accompanied by a character standing in front of it. The background features abstract shapes resembling clouds and a circular object.

### Key Elements
- **Speech Bubble**: Located centrally, containing a message. It has a white background with a light blue shadow effect. The text within reads:
  > Welcome to The Perfect running jumper. Please visit the kiosk to check in to your room. A fancy dig site has uncovered an entrance to an undisturbed underground underworld. It could hold unending glory for the one brave enough to enter the dangerous, dark depths of doom. Like the world and take s selfie and post it to the world page. Thanks for stopping by, and a huge thank you to our community.
- **Character**: Positioned to the left of the speech bubble, facing away from the viewer. The character is wearing a red sleeveless top and black pants with small white dots. There is a thought bubble above the character’s head, indicating they are thinking.
- **OK Button**: Located at the bottom right of the speech bubble, with a teal background and white text that says "OK."

### Visual Flow / Relationships
The most prominent visual element is the speech bubble containing the message. The character is positioned to the left, looking towards the speech bubble. The OK button is placed at the bottom right, suggesting interaction after reading the message.

</details>

<p></p>



*Players may feel overwhelmed and fail to retain information if they are simply given a wall of basic instructions and then left to play the game on their own. This approach is likely to be counterproductive.*

## Focusing on non-essential information

Some new user experiences spend too much time on details that aren’t critical early in the game. Deeper systems are best discovered by the players themselves gradually over time.

Many games also insert too many narrative beats into the NUX. While genre-dependent, it’s best to keep narrative elements brisk. Give players a reason for being in the world, frame the gameplay, and let them start playing. Deeper story elements can come later once they’ve engaged with the core gameplay.

## Not providing players direction

Additionally, another common misstep is concluding the NUX without giving the player direction. Ideally, the tutorial should conclude with a recap of what was learned and a reward for their progress. It is extremely important to show the player what to engage with next.

## Not testing your NUX

Finally, the last misstep is not testing your NUX. Using tracking and telemetry in the backend, track metrics and events throughout your NUX experience. Are players getting stuck in one area? Have the events triggered for the player to collect a vital item for the tutorial sequence? Consider creating two NUX experiences and go through A/B testing variants to see what resonates with players and reduces the amount of churn from your game.

# What’s next?

Now that you understand the best practices for designing an effective new user experience (NUX), you’re ready to build onboarding that feels memorable and engaging for your players.

Stay tuned for the next Growth Insights article, where we’ll continue exploring strategies that help you create more engaging and immersive experiences across platforms.