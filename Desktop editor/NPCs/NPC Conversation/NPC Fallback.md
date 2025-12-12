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

[NPC Debugger](../../../image_data/713934863ebf1f01938a846e4612ae1aa7d51667c772048a33eb0c20eae31f5b.md)

### Overview
This image depicts a user interface section within a software application, specifically related to NPC (Non-Player Character) debugging. The interface includes tabs at the top labeled "Asset Library," "Console," "Tests," and "NPC Debugger." Below these tabs, there is a dropdown menu, a clear button, and a toggle switch labeled "AI Speech." A search bar is also present. A tooltip is displayed over the "AI Speech" toggle switch, providing additional information about enabling/disabling NPC AI speech during testing in the Editor.

### Key Elements
- **Tabs**: Located at the top, these include "Asset Library," "Console," "Tests," and "NPC Debugger."
- **Dropdown Menu**: Positioned below the tabs, labeled "Select a gizmo."
- **Clear Button**: Situated next to the dropdown menu, labeled "Clear."
- **Toggle Switch**: Next to the clear button, labeled "AI Speech."
- **Search Bar**: To the right of the toggle switch, with a magnifying glass icon.
- **Tooltip**: A pop-up message stating, "Enable/Disable NPC AI Speech while testing in the Editor. Hold ctrl to learn more."

### Visual Flow / Relationships
The most prominent visual element is the tooltip, as it draws immediate attention due to its placement above the toggle switch and its distinct white background with black text. The tabs are arranged horizontally at the top, indicating a navigation structure. The dropdown menu, clear button, toggle switch, and search bar are aligned vertically below the tabs, suggesting a secondary level of interaction within the interface.

</details>

<p></p>



### Production testing

Outside of the editor, you can test AI disabled fallback instances by using an account that is under the age of 18 or outside of the US.

## Configuring Fallback Settings in the Horizon Desktop Editor

Once you have completed testing AI Speech Fallbacks and are satisfied, it’s time to publish your world with the new Fallback features. By default, AI ineligible users are denied entry to worlds that contain AI Speech NPCs. Once you have completed this step, ineligible users will be routed to a separate instance of the world where AI is disabled:

- Open **Player Settings**<details>
                          <summary>Player Settings</summary>
                          
                          <p></p>
                          
                          [Player Settings](../../../image_data/426c1871da677cfa84480f1209542fcda39e92cba99fdcb60da187df7696e352.md)
                          
                          ### Overview
                          This image depicts a dropdown menu with a dark theme, likely part of a software interface. The menu contains several options listed vertically, each with a distinct label and some with additional sub-elements.
                          
                          ### Key Elements
                          - **Visual description**: The menu has a dark background with white text and light gray separators.
                          - **Location**: The menu is located on the left side of the screen, occupying the vertical space.
                          - **Contents**: The menu items include:
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
                          The menu items are arranged in a linear fashion, with each item stacked vertically. There are no arrows or connectors, and the reading order is straightforward from top to bottom.
                          
                          </details>
                          
                          <p></p>
                          
                          
- Set the **“NPC fallback option** to **Scripted Dialog Only**<details>
                                                              <summary>NPC Fallback Option</summary>
                                                              
                                                              <p></p>
                                                              
                                                              [NPC Fallback Option](../../../image_data/aa8e2e31e93c5a589c51f5eac1be46c1404f27a2b8de65286d2ac374b58950d3.md)
                                                              
                                                              ### Overview
                                                              This image depicts a settings dialog box titled "Player Settings." It contains various configuration options related to player interactions and world settings within a game environment. The interface is dark-themed with blue accents for interactive elements.
                                                              
                                                              ### Key Elements
                                                              - **Title**: "Player Settings" at the top.
                                                              - **Global Dropdown**: Located at the top right, showing "Global" as the selected option.
                                                              - **Maximum Player Count Slider**: A slider set to 5, indicating the maximum number of players allowed in the world simultaneously.
                                                              - **Suggested Minimum Player Count Slider**: Set to 1, suggesting the minimum number of players needed for optimal gameplay.
                                                              - **Emotes Toggle**: A toggle switch labeled "Allow emotes to be triggered by gestures," currently off.
                                                              - **NPC Fallback Option Dropdown**: Displays "Scripted Dialog Only" as the selected option, with other choices like "Deny world entry."
                                                              - **Emote Audio Toggle**: A toggle switch labeled "Allow emotes to have sound effects," currently off.
                                                              - **Can Hands Collide With Physical Objects Toggle**: A toggle switch labeled "Can Hands Collide With Physical Objects," currently on.
                                                              - **Can Hands Collide With Static Objects Toggle**: A toggle switch labeled "Can Hands Collide With Static Objects," currently off.
                                                              - **Custom Player Movement Toggle**: A toggle switch labeled "Custom Player Movement," currently off.
                                                              - **Custom Name Tag Visibility Toggle**: A toggle switch labeled "Custom Name Tag Visibility," currently off.
                                                              - **Buttons**: Two buttons at the bottom, "Cancel" and "Save."
                                                              
                                                              ### Visual Flow / Relationships
                                                              The interface is structured in a linear fashion, with options listed vertically. Each option has a label followed by its corresponding control (slider, toggle, dropdown). The "Save" button is positioned at the bottom right, while the "Cancel" button is to its left. The dropdown menu for NPC fallback options is expanded, showing the current selection and other available options.
                                                              
                                                              </details>
                                                              
                                                              <p></p>
                                                              
                                                              
- Publish update to your world

## Group Party Travel

If any player in the group party is ineligible for AI features, all members of the group will be routed to the AI disabled fallback instance of your world.

If an AI ineligible player tries to join an AI eligible player who is already in an LLM instance, travel will fail.