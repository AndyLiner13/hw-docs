Source: https://developers.meta.com/horizon-worlds/learn/documentation/typescript/api-references-and-examples/world-broadcast/overview

# World Broadcast

World Broadcast streams from live cameras inside Horizon to surfaces like the Meta Horizon app feed and Meta’s wider family of apps. Potential players can see inside the world, which entices them to hit the Go button.

Note

World Broadcast does not work for worlds running in Portrait orientation at this time.

<details>
<summary>Kaiju TV Preview 1</summary>

<p></p>

[Kaiju TV Preview 1](../../../image_data/20884ada8aea37c87bcf2b58cc1b19251e7186199786e778faaf9832c9602f50.md)

### Overview
This image appears to be a screenshot of a mobile application interface, likely related to a game or streaming service. The layout includes a mix of content tiles, a live stream announcement, and promotional content.

### Key Elements
- **Top Section**: Contains three content tiles with blurred images and text. Each tile has a "Go" button next to it.
    - **Visual description**: Square-shaped tiles with rounded corners.
    - **Location**: Top-left area.
    - **Contents**: Blurred images and text that are not legible due to blurring.
    - **Visual styling**: Dark background with light-colored text and icons.
- **Middle Section**: Features a live stream announcement.
    - **Visual description**: A rectangular banner with a cityscape image.
    - **Location**: Center of the screen.
    - **Contents**: Text stating "Streaming live from worlds" followed by a cityscape image and a "BREAKING NEWS" banner.
    - **Visual styling**: Dark background with light-colored text and a red banner.
- **Bottom Section**: Displays a promotional announcement.
    - **Visual description**: A rectangular banner with text and an image of a character.
    - **Location**: Bottom-left area.
    - **Contents**: Text stating "Kaiju City Showdown" and "Fall Frights Sale" with additional information about availability.
    - **Visual styling**: Dark background with light-colored text and a red banner.

### Visual Flow / Relationships
- **Most prominent visually**: The live stream announcement banner in the middle.
- **Arrows/lines/connectors**: None visible.
- **Spatial relationships**: Tiles are arranged vertically, with the live stream announcement banner spanning across the width of the screen below the tiles.

</details>

<p></p>

<details>
<summary>Kaiju TV Preview 2</summary>

<p></p>

[Kaiju TV Preview 2](../../../image_data/0a750825996e1c01b215dce7e62e164f005d0508832e8683ab86ddfcf8f5527c.md)

### Overview
This image depicts a mobile game interface, specifically for a game called "Kaiju City Showdown." The layout includes a banner at the top, a game description in the middle, and a call-to-action section at the bottom.

### Key Elements
- **Top Banner**: Located at the very top, it features a cityscape with buildings and greenery. It has a red "BREAKING NEWS" banner stating "The Kaiju has moved onto the Town Hall district."
- **Game Title**: Below the banner, the title "Kaiju City Showdown" is prominently displayed in white text against a dark background.
- **Game Details**: Includes "Unit 2 Games," a follow button, and tags such as "World," "Shooter," "Action," and "Party game."
- **Statistics**: Displays visitor numbers ("1.6M visitors"), player count ("20.7K players"), and age rating ("ages 10+").
- **Call-to-Action Buttons**: Two buttons labeled "Go" and "Invite" are present beneath the statistics.
- **Description Section**: Contains a brief description of the game, encouraging players to defend or destroy the city as a Kaiju.
- **Similar Worlds**: At the bottom, there's a section titled "Similar worlds" with thumbnail previews of other games.

### Visual Flow / Relationships
The visual hierarchy is clear, with the game title and statistics being the most prominent elements. The call-to-action buttons are secondary but easily noticeable. The description section provides additional information without overwhelming the user. The layout flows from top to bottom, with the banner introducing the game, followed by the core game information, and concluding with a call-to-action and similar games suggestions.

</details>

<p></p>



A high-quality integration shows the world’s action: what players are doing, how they’re playing together, and cool moments. It chooses where to point the camera to capture the best shots where the action happens.

It can add visuals to convey more information about what’s happening. For example, Kaiju City Showdown uses a news-style custom UI to showcase the game’s progression.

## Integrate your world

The World Broadcast API is lightweight: wait for an event, then move the camera around.

The core technical flow is:

- Subscribe to the `OnWorldBroadcastCameraJoined(cameraPlayer: Player)` event. This notifies you when a World Broadcast camera joins the world, allowing you to start camera scripting.
- Transfer control of an entity to the `cameraPlayer` provided by the event: `myCameraDirectorEntity.owner.set(cameraPlayer)`
- In a script on that entity, use the LocalCamera API to focus on points of interest in your scene.
- Add custom UI to the entity to include extra on-screen elements that only the stream can see.

```
// In a default script on world start:
this.connectCodeBlockEvent(
  this.entity,
  hz.CodeBlockEvents.OnWorldBroadcastCameraJoined,
  cameraPlayer => {
    this.myCameraDirectorEntity.owner.set(cameraPlayer);
  },
);
```

### Alternate implementation methods

* To accelerate development, we provide a simple asset group implementation with a largely plug-and-play experience: [World Broadcast Simple Asset Group Guide](World%20Broadcast%20Simple%20Asset%20Group%20Guide.md)
* We’ve also created a more advanced drop-in framework to help you get started. This provides static cameras and trigger zones that activate when players are present: [World Broadcast Camera Framework Guide](World%20Broadcast%20Camera%20Framework%20Guide.md)

# High-level Overview

<details>
<summary>High Level Overview</summary>

<p></p>

[High Level Overview](../../../image_data/5d98bae48c88f87203bf6a574e6dd40f687e75d2367ef7b51dfcccaf06406241.md)

### Overview
This image depicts a flowchart-style diagram illustrating a process involving multiple components and connections. The diagram includes labeled boxes representing different entities and arrows indicating the flow or relationship between them.

### Key Elements
- **Kaiju City Showdown**: Four identical boxes located at the left side of the diagram. Each contains the text "Kaiju City Showdown." These boxes are connected to the central "Stream Controller" box via dashed lines labeled "On Standby."
- **Stream Controller**: A central rectangular box labeled "Stream Controller." It has two incoming arrows from the "Kaiju City Showdown" boxes and one outgoing arrow pointing to the "Stream" box.
- **Active**: A label within the "Stream Controller" box that reads "Active," indicating a state or condition.
- **Stream**: A rectangular box labeled "Stream," which receives an arrow from the "Stream Controller."
- **Facebook**, **Instagram**, **Meta Horizon**: Three boxes on the right side of the diagram, each containing the respective platform name. These boxes are connected to the "Stream" box via solid arrows, suggesting a connection or output from the stream.

### Visual Flow / Relationships
- The most prominent visual element is the "Stream Controller" as it acts as the central hub connecting various components.
- Arrows indicate the direction of flow or connection between elements.
- The "Kaiju City Showdown" boxes are grouped together and connected to the "Stream Controller" via dashed lines labeled "On Standby," while the platforms on the right are connected to the "Stream" box via solid arrows.

</details>

<p></p>



The World Broadcast Stream Controller periodically scans all public instances of a given world, and discards those with players below a minimum count. It ranks the remaining instances (e.g., by population, player idleness) and selects some to prepare for streaming. One instance is then selected and presented to the public via a live-stream on the Meta Horizon app and potentially within the wider Family of Apps (exact locations vary). Periodically, a different instance is selected for presentation, e.g. if the current instance’s population drops or a more active instance becomes available.

When the Stream Controller prepares an instance for streaming, an additional cloud-based client joins the world. This triggers an `OnWorldBroadcastCameraJoined` code event on the server, which signals the world to start camera scripting. The streaming client doesn’t affect the player count and has no visible presence.

When the Stream Controller selects a prepared instance for the public live-stream, players in that instance receive a notification that they have an audience. They receive another notification after their instance is deselected. Players who join while the instance is already being shown receive the same notifications.

`OnWorldBroadcastCameraJoined` indicates that the instance is being *prepared*, not that it *is* being shown. No script event fires when the instance is selected to be shown. The instance should assume it is always being shown and start running camera scripting, but should not present this assumption to players.

World audio is captured automatically, including all effects and music. Player voices (VoIP) are not included.

# Testing

You can test your changes in two ways:

- **In-editor** - This is the easiest workflow for checking changes as you work. Set up a trigger (e.g., a trigger zone) that activates your camera scripting when a player enters it. This allows you to see your cameras in the editor. Remember to disable this trigger before publishing! The frameworks we’ve provided have Debug Mode toggles to help with this.
- **Developer Dashboard** - To test with real instances, navigate to **Distribute > World Broadcast** in the [Meta Horizon Developer Dashboard](https://horizon.meta.com/creator/). This provides a private “Draft” stream of instances you are in, allowing you to verify angles and UI. Note that you must publish your changes first, and instance preparation can take up to 5 minutes.

# Examples

Two Unit 2 Games worlds are currently integrated: Kaiju City Showdown and Pets Park. To view these streams, visit their details pages in the Meta Horizon app. The broadcasts appear in the gallery at the top.

## Kaiju City Showdown

[Kaiju City Showdown - Meta Horizon](https://horizon.meta.com/world/1279402616789539/) (open on mobile to see the stream in the Meta Horizon app).

Uses a custom-scripted setup with a prop news helicopter that circles the Kaiju with a camera attached underneath. Custom UI creates the appearance of a live news broadcast, with headlines that react to in-world events.

<details>
<summary>Kaiju City Showdown Broadcast</summary>

<p></p>

[Kaiju City Showdown Broadcast](../../../image_data/3f068ba8858c52827a2d9ed9a57eaa03f0c40aa446b682333aee992ab59df016.md)

### Overview
This image depicts a live stream interface from a mobile game called "Kaiju City Showdown." The screen shows a top-down view of a cityscape, with a notification banner at the bottom providing information about the game's current status and a live chat section above it.

### Key Elements
- **Top Section**: A 3D cityscape viewed from above, showing streets, buildings, and a small blue marker indicating the player's location.
- **Notification Banner**: Located at the top of the screen, displaying "BREAKING NEWS" in bold white letters against a red background. Below it, a message states, "The Kaiju has moved onto the Bank district."
- **Live Stream Overlay**: A small "LIVE" indicator in the top-left corner, with a microphone icon next to it.
- **Game Information**: Below the notification banner, the game title "Kaiju City Showdown" is displayed, along with its genre ("Action • Arcade") and the number of players currently in the game ("25 here now").
- **Game Description**: A brief description of the game's premise, stating, "Defend the city or destroy the city as a monstrous Kaiju. Find out how you roll in our newest world, Kaiju City Showdown. You can play as the 60-foot Kaiju in VR and experience scale."

### Visual Flow / Relationships
- **Most Prominent Element**: The 3D cityscape in the top section.
- **Arrows/Connectors**: None.
- **Reading Order**: The information flows from the top-down cityscape to the notification banner, then to the game information, and finally to the description.

</details>

<p></p>



## Pets Park

[Pets Park - Meta Horizon](https://horizon.meta.com/world/9116337161745306/) (open on mobile to see the stream in the Meta Horizon app). Uses the example framework to place trigger zones in the world. These zones activate cameras when players are present.

<details>
<summary>Pets Park Broadcast</summary>

<p></p>

[Pets Park Broadcast](../../../image_data/5b3be281d25cea747fd46fd3c20891ad5b1e44a0fbf73c174d6c0c536344550f.md)

### Overview
This image depicts a screenshot from a virtual environment, specifically a live stream interface for a game or app called "Pets Park." The scene shows a virtual park setting with a character standing on a large paw print design in the center. The layout includes interactive elements such as a chat bubble, player count, and various buttons for sharing, inviting friends, and saving the stream.

### Key Elements
- **Top Left Corner**: A chat bubble icon with "LIVE" text indicating a live stream status.
- **Top Right Corner**: An "X" button likely for closing the stream interface.
- **Center**: A circular area with a character standing on a large pink paw print design on green grass. The ground around this area is paved stone.
- **Left Panel**: A circular icon with a cat silhouette and "1/8" indicating a series or episode number.
- **Bottom Left**: A thumbnail image of a paw print with a cat face, labeled "Pets Park Adventure," showing "15 here now" and compatibility with mobile and VR devices.
- **Bottom Center**: Interactive buttons for "Share," "Invite," and "Save."
- **Bottom Text**: Describes the activity as "Available to spectators" and provides a brief description of the game mechanics.

### Visual Flow / Relationships
The most prominent visual is the central paw print design where the character stands. The chat bubble and "LIVE" indicator are secondary but still noticeable. The interactive buttons at the bottom are arranged horizontally, suggesting a linear reading order from left to right. The thumbnail image and player count are positioned to the left, drawing attention to the game title and current player count.

</details>

<p></p>



# Additional Recommendations

## Keep the camera moving

A single static camera is not engaging to watch. An engaging stream switches viewpoints periodically or uses cameras that move with the action, framing or following players.

## Skip idle players

While the Stream Controller avoids instances with idle players, they will sometimes be present. If you detect an idle player (e.g., they haven’t moved or performed an action for a few seconds), refocus on active players. It also helps to move focus between players periodically.

## Portrait

We’re experimenting with portrait streams in various forms, e.g., for Reels-type UX, initially by cropping the landscape stream. For the best results, keep action in the center of the camera.