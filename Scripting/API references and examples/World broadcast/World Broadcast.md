Source: https://developers.meta.com/horizon-worlds/learn/documentation/typescript/api-references-and-examples/world-broadcast/overview

# World Broadcast

World Broadcast streams from live cameras inside Horizon to surfaces like the Meta Horizon app feed and Meta’s wider family of apps. Potential players can see inside the world, which entices them to hit the Go button.

Note

World Broadcast does not work for worlds running in Portrait orientation at this time.

![Kaiju TV Preview 1](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/574378543_856098620261424_7235849068988167141_n.gif?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=iFo6QllQE98Q7kNvwEmx963&_nc_oc=Adnf9LkujrMy1sJ9YJojSWBu9XhxCW6_qTOc42DJ9BMHp4KYAXRi1P57Ez3nnGjRzoSI3Gt0eyhPoUadwYyeLlTx&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=Yl2d9s8sCxkTfuQwFF6dPg&oh=00_AfnZP7RHccpfG6mV6w_7ue-afUZ6d06NS31JnguZS-htdw&oe=69557726)![Kaiju TV Preview 2](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/576919602_856786250192661_3609857197214141625_n.gif?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=Svj9Agg5zakQ7kNvwEIUkMH&_nc_oc=AdlAGsG-IaGlvPw3lzmiMG3JEgiAQEEVmWpZk4yty41hxeezVKp_cVYWItVpO5M5x39Rb-9MVsqa7r_ayNJjlJq8&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=Yl2d9s8sCxkTfuQwFF6dPg&oh=00_AfkSgJG4HiKL-QNaEyuI8YTThBvWvCXMg6b9sc4VSEj67Q&oe=69554B4A)

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

![High Level Overview](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/576812439_856098626928090_4647607474605769259_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=mkBCbcQCTCEQ7kNvwHpjvJO&_nc_oc=AdltjMNbUN-Ikr52ZbtjsLLv-hytAKWtJC_Y6eCVXLqXdc-Tv0y-w1KwT2WHvqob5erD-WcRBg4RNXa3QePo8cFS&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=Yl2d9s8sCxkTfuQwFF6dPg&oh=00_Afnl2XHfF3wGg8gJlXx4Rc0CPKnoQLtnz17Hz9WWVT0Yyg&oe=69556473)

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

![Kaiju City Showdown Broadcast](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/596797597_883625014175451_6761727229233062246_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=z1umYpevRqMQ7kNvwGuXPxX&_nc_oc=Adk1yKapfiSCO40G0A9ddz5GuHRSScIpmfXzNYq99EIIZyhrs_7VuSl2l25X6gsuvIBKAhB0BsrfU6fqwKiGpCOn&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=Yl2d9s8sCxkTfuQwFF6dPg&oh=00_AfkeuFeSTqn52pQRbSrVIkxgkUp0IV8f1U0WjwevJ0g5lA&oe=69554A08)

## Pets Park

[Pets Park - Meta Horizon](https://horizon.meta.com/world/9116337161745306/) (open on mobile to see the stream in the Meta Horizon app). Uses the example framework to place trigger zones in the world. These zones activate cameras when players are present.

![Pets Park Broadcast](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/595160997_883625010842118_1936089552443882208_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=8vanmyzBWd8Q7kNvwF4FJWu&_nc_oc=Adko5vAQBhsk-8d1CfSOl3x18feaRfV-2_MU6U4meSQHfA25OrrMF9f9M31JfXFIIm4eyK7RNbf7QoMcI_wtuqy0&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=Yl2d9s8sCxkTfuQwFF6dPg&oh=00_AfmVppALiq-6xRQY54KTNMDjVTFku3bEI2KAIkpZd2_wGA&oe=695565BB)

# Additional Recommendations

## Keep the camera moving

A single static camera is not engaging to watch. An engaging stream switches viewpoints periodically or uses cameras that move with the action, framing or following players.

## Skip idle players

While the Stream Controller avoids instances with idle players, they will sometimes be present. If you detect an idle player (e.g., they haven’t moved or performed an action for a few seconds), refocus on active players. It also helps to move focus between players periodically.

## Portrait

We’re experimenting with portrait streams in various forms, e.g., for Reels-type UX, initially by cropping the landscape stream. For the best results, keep action in the center of the camera.