Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/feature-samples/avatar-override-tutorial-world/module-7-voting-system

# Module 7 - Voting System

Note

You will need to be a member of MHCP and have accepted the terms in the Developer Dashboard in order to create in-world items and currency. Find out more about monetization [here](../../../MHCP%20program/Monetization/Monetization%20opportunities.md).

The Voting Manager centralizes player voting during Showcase rounds. It assigns UI vote buttons to players, enforces voting rules, tracks votes, manages button visibility, switches cameras for showcase mode, and produces final results with tie handling.

<details>
<summary>Winners Podium</summary>

<p></p>

[Winners Podium](../../../image_data/d234e362fa85a22233736395f2c5745ee010022d775ad88b765f9736ccb7a9d7.md)

### Overview
This image depicts a virtual podium with three winners standing on it, representing first, second, and third place. The podium has a bright yellow-orange base with a white top. Each winner is represented by a blue humanoid figure. The podium is set against a gradient blue sky background.

### Key Elements
- **Podium**: A rectangular structure with a white top and yellow-orange sides. It has a sign labeled "1st" in the center.
- **First Place Figure**: A blue humanoid figure standing on the central part of the podium. The figure is positioned slightly above the "1st" sign.
- **Second Place Figure**: A blue humanoid figure standing on the right side of the podium. The figure is positioned near the "2nd" sign.
- **Third Place Figure**: A blue humanoid figure standing on the left side of the podium. The figure is positioned near the "3rd" sign.
- **Signs**: Three signs indicating the ranking positions ("1st," "2nd," "3rd") are placed on the podium.
- **Background**: A gradient blue sky serves as the backdrop.

### Visual Flow / Relationships
The most prominent visual is the podium, which is centrally located. The figures are arranged symmetrically around the podium, with the first-place figure being the tallest and most central. The signs clearly indicate the ranking positions, and the figures are positioned directly beneath them.

</details>

<p></p>



## Dependencies

* **GameUtils (utils)**
  + Events and game state definitions
  + `utils.Events`: used for voting, showcase, and result processing broadcasts
* **PlayerCamera (`PlayerCameraEvents`)**
  + Camera attach/revert events
* **VotingConstants / VotingUtils**
  + Theming and defaults
  + Utilities for debug logging and CPU player checks

## System Components

* VotingManager reference object hosts `VotingManager.ts`.
* VoteButton entities (12 max) hosting `VoteButton` UI component (one per player).
* Optional Showcase Camera Target entity (used to attach cameras during Showcase).

## Script Properties

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| maxVotesPerPlayer | Number | 3 | Maximum votes each player can cast per round. |
| enableDebugLogs | Boolean | false | Enables console logging for diagnostics. |
| showcaseCameraTarget | Entity (optional) | - | Camera target to attach player camera to a fixed position during the Showcase. |
| button1 … button12 | Entity | - | References up to 12 vote button entities. |

## Events

**Broadcast Events**

| Event Name | Purpose |
| --- | --- |
| voteCountUpdate | Update a player’s vote count display |
| registerButtonResponse | Tell button how many votes are allowed |
| setOwner | Assigns a button to a specific player |
| onHideAndDisableButton | Hides/disables the button when voting ends |
| onShowAndEnableButton | Shows/enables the button when voting begins |
| onVoteButtonStateReset | Resets button state when a new player spawns on stage |
| onVotingResultsReady | Announces winners to GameManager |

**Received Events**

| Event Name | Purpose |
| --- | --- |
| voteRequest | When a player presses their vote button |
| onShowcaseInitalized | Indicates showcase players and stage player |
| onShowcasePlayerChanges | Indicates current stage player and floor players |
| onGameStateChanges | Drives state transitions including entering/exiting Showcase |
| onProcessVotes | Triggers computation and placement of winners |

## Modifications

- **Change max votes per round:**

  Update maxVotesPerPlayer property in VotingManager.
- **Add more than 12 players:**

  Add more button entity references and extend propsDefinition plus initialization/assignment arrays accordingly.
- **Adjust camera timing:**

  Update VotingManager.CAMERA\_DELAY and the small delays around stage transitions for your UX.
- **Customize button behavior or theme:**

  Edit VoteButton to use constants from VotingConstants to keep styling consistent.