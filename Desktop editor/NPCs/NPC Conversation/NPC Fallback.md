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

![NPC Debugger](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/544801771_810235168181103_5986713930012268315_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=g3Ffo14Xvr8Q7kNvwHQRf1D&_nc_oc=AdmUTf74aKpwz1nlg14-dtO_s7tR4BfoWCfaym3Ao5Y6il__F-fawr_vG6eTTJpk6LI&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=v-T3oI_IJI75BbfoYitguA&oh=00_AfkHcR5vqErfAqvFouizsGFvaaKQonFWAc4f2Gv4L5QB4g&oe=694BE771)

### Production testing

Outside of the editor, you can test AI disabled fallback instances by using an account that is under the age of 18 or outside of the US.

## Configuring Fallback Settings in the Horizon Desktop Editor

Once you have completed testing AI Speech Fallbacks and are satisfied, it’s time to publish your world with the new Fallback features. By default, AI ineligible users are denied entry to worlds that contain AI Speech NPCs. Once you have completed this step, ineligible users will be routed to a separate instance of the world where AI is disabled:

- Open **Player Settings**![Player Settings](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/546927353_810235221514431_2938994321209409501_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=HmRe78Lfa08Q7kNvwFG32or&_nc_oc=AdksJ-y_FA2GRRW75Db6XnZkRsa1tTh0sKIIrsZKZOiWxn4QRleFp9usAXJ8MgPiSFU&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=v-T3oI_IJI75BbfoYitguA&oh=00_AfmjlaiatiT2vJMPp738DjEA022Mu_5OPPW3DqMYvYh4ww&oe=694BD633)
- Set the **“NPC fallback option** to **Scripted Dialog Only**![NPC Fallback Option](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/544952915_810235198181100_6064166759231089005_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=ewplPicl4DsQ7kNvwFk3z5A&_nc_oc=AdnfeM2_qIZEpDyUinlAHcS4o6pwBMXldUWivmJyJnJzKsUtlWz5yU3tN-LeJ35EwFY&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=v-T3oI_IJI75BbfoYitguA&oh=00_AfkpZQ9gltiVbOtJG5ffViDzrLYX_vlVulkM9EPR11mHrw&oe=694BC85E)
- Publish update to your world

## Group Party Travel

If any player in the group party is ineligible for AI features, all members of the group will be routed to the AI disabled fallback instance of your world.

If an AI ineligible player tries to join an AI eligible player who is already in an LLM instance, travel will fail.