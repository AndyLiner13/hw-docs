Source: https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/npcs/npc-conversations/npc-fallback

# NPC Fallback

This guide will walk you through handling situations where AI speech services are unavailable. By default, users who cannot access AI Speech services will be denied access to your world, should it feature AI Speech. You have the option to implement AI Speech Fallbacks so these users can access your world with modifications. Implementing fallback logic ensures that when AI is not available, the world experience remains immersive and uninterrupted. This guide covers AI speech fallback configuration, APIs to detect and script fallback instances, and testing procedures.

## What are AI Speech Fallbacks and why are they needed?

AI Speech Fallbacks are mechanisms to handle scenarios where the generative AI (LLM) service is unavailable or limited. In these cases, users are routed to a separate instance of your world where the LLM service is disabled. Creators can implement predefined scripts to ensure AI-speech disabled NPCs still provide meaningful responses.

Creators using AI NPCs should plan for and implement fallbacks to:

* Guarantee consistent player experience, in case of platform or AI outages
* Comply with policy requirements that disable AI features for certain players

**Example scenarios:**

* If the AI Speech service is temporarily unreachable, instead of breaking immersion with an error, the NPC can switch to scripted responses.
* If the user is in a region where AI speech is not available (outside the US), instead of denying the player entry to the world, the user can enter an AI disabled fallback instance of the world where AI NPCs return scripted responses.
* AI Speech NPCs are only available for users who are 18 years or older and in the US.

## APIs for creating Fallback Instances with Scripted Dialog

The **horizon/npc** API has a few ways you can detect if the player is eligible for AI features and to adjust logic accordingly:

- Use the `isAiAvailable` API to detect if the player is eligible for AI speech.
  ```typescript
  import { NpcConversation } from ‘horizon/npc’;

const npc = this.entity.as(Npc);
const isAiAvailable = NpcConversationnpc.isAiAvailable();
if (!isAiAvailable) {
// Add AI speech fallback logic, like scripted responses
npc.conversation.speak(“Welcome! I’m Bob the NPC. Please step forward so I can show you what to do next.”);
}

```
1. Catch `AiNotAvailableError` from the `elicitResponse` LLM API to return scripted responses.
  ```typescript
  import { Npc, NpcError, NpcErrorCategory } from 'horizon/npc';

  const npc = this.entity.as(Npc);
  npc.conversation.elicitResponse('Warn players that time is running out and suggest going through the door with the flashing arrow.').catch((error: NpcError) => {
    if (error.category === NpcErrorCategory.AiNotAvailableError) {
    // Fallback to scripted dialog when AI speech is disabled
      npc.conversation.speak("Why are you still here? Try the door with the flashing arrow. Get moving!");
        }
  });
```

**Tip**: Scripted dialog should match the NPC’s personality and context.

## Testing AI Speech Fallbacks

### Testing in Editor

To test how NPCs behave when the AI system is disabled or unreachable, you can disable AI Speech in the NPC Debugger tab. This will simulate an AI NPC Speech disabled fallback instance when previewing your world in the editor by forcing your scripts that use the `isAiAvailable` API to return false and the `elicitResponse` LLM API to throw a `AiNotAvailableError`.

<details>
<summary>NPC Debugger</summary>

<p></p>

[NPC Debugger](../../../../../images/output/img_20251211_070200_20251211_070200.md)

### Overview
This image depicts a user interface element within a software application, specifically a tooltip or contextual menu that appears when hovering over a button labeled "AI Speech." The interface includes tabs at the top for navigating different sections of the application.

### Key Elements
- **Top Navigation Tabs**: Located at the very top, these tabs include "Asset Library," "Console," "Tests," and "NPC Debugger." Each tab has a dark background with white text.
- **Button**: A button labeled "Select a gizmo" with a dropdown arrow next to it, located just below the navigation tabs. It has a light blue background with white text.
- **Clear Button**: A small button labeled "Clear" with a white background and black text, positioned to the right of the "Select a gizmo" button.
- **AI Speech Toggle**: A toggle switch labeled "AI Speech" with a white background and a dark gray toggle handle.
- **Search Bar**: A search bar with a magnifying glass icon, located to the right of the toggle switch. The search bar has a dark background with white text.
- **Tooltip**: A black rectangular box with rounded corners appears below the "AI Speech" toggle. It contains text explaining the functionality of enabling/disabling NPC AI speech while testing in the Editor. The text is white and readable against the black background.
- **Additional Text**: Below the tooltip, there is a smaller line of text that says "Hold ctrl to learn more."

### Visual Flow / Relationships
The most prominent visual element is the tooltip, which draws attention due to its placement directly beneath the "AI Speech" toggle. The flow of interaction likely follows the user's mouse movement, starting from the "AI Speech" toggle and moving downward to the tooltip for additional information. The navigation tabs at the top provide context for the user's current location within the application.

</details>

<p></p>



### Production testing

Outside of the editor, you can test AI disabled fallback instances by using an account that is under the age of 18 or outside of the US.

## Configuring Fallback Settings in the Horizon Desktop Editor

Once you have completed testing AI Speech Fallbacks and are satisfied, it’s time to publish your world with the new Fallback features. By default, AI ineligible users are denied entry to worlds that contain AI Speech NPCs. Once you have completed this step, ineligible users will be routed to a separate instance of the world where AI is disabled:

- Open **Player Settings**<details>
<summary>Player Settings</summary>

<p></p>

[Player Settings](../../../../../images/output/img_20251211_070243_20251211_070243.md)

### Overview
This image depicts a dropdown menu with a dark theme, likely from a software interface. The menu contains several options listed vertically, each with a distinct label and some with additional text underneath them.

### Key Elements
- **Visual description**: The menu has a dark background with white text and light gray separators between items.
- **Location**: The menu is located on the left side of the screen, occupying the vertical space.
- **Contents**: 
    - "Return to Creation Home"
    - "View Application Logs"
    - "Launch Typescript Editor"
    - "Publish World"
    - "Rename World"
    - "Save Backup"
    - "Backups"
    - "Export Geometry"
    - "World capacity"
    - "Keyboard Shortcuts"
    - "Player Settings"
- **Visual styling**: The text is in a sans-serif font, and the separators are thin horizontal lines.

### Visual Flow / Relationships
The menu items are arranged vertically, with each item having a similar layout. There are no arrows or connectors, and the reading order is straightforward from top to bottom.

</details>

<p></p>


- Set the **“NPC fallback option** to **Scripted Dialog Only**<details>
<summary>NPC Fallback Option</summary>

<p></p>

[NPC Fallback Option](../../../../../images/output/img_20251211_070342_20251211_070342.md)

### Overview
This image depicts a settings dialog box titled "Player Settings." It contains various configuration options related to player interactions and world settings within a game environment. The layout is structured with labels on the left and corresponding toggle switches, checkboxes, and dropdown menus on the right.

### Key Elements
- **Title**: "Player Settings"
- **Maximum Player Count**: A slider set to 5, located near the top-left.
- **Suggested Minimum Player Count**: A slider set to 1, located below the Maximum Player Count.
- **Emotes**: A toggle switch labeled "Allow emotes to be triggered by gestures," currently off.
- **NPC fallback option**: A dropdown menu with options "Scripted Dialog Only" and "Deny world entry," with "Scripted Dialog Only" selected.
- **Emote Audio**: A toggle switch labeled "Allow emotes to have sound effects," currently off.
- **Can Hands Collide With Physical Objects**: A toggle switch labeled "Allow hands to physically interact with physical objects," currently on.
- **Can Hands Collide With Static Objects**: A toggle switch labeled "Allow hands to physically interact with static objects," currently off.
- **Custom Player Movement**: A toggle switch labeled "Enable code blocks that affect player capabilities such as 'move player'," currently off.
- **Custom Name Tag Visibility**: A toggle switch labeled "Enable scripts that can hide player name tags," currently off.
- **Buttons**: Two buttons at the bottom, "Cancel" and "Save."

### Visual Flow / Relationships
The interface is organized in a linear fashion, with labels on the left and corresponding interactive elements on the right. The dropdown menu is nested under the NPC fallback option. The toggle switches are aligned horizontally beneath their respective labels. The "Save" button is positioned at the bottom-right, while the "Cancel" button is at the bottom-left.

</details>

<p></p>


- Publish update to your world

## Group Party Travel

If any player in the group party is ineligible for AI features, all members of the group will be routed to the AI disabled fallback instance of your world.

If an AI ineligible player tries to join an AI eligible player who is already in an LLM instance, travel will fail.