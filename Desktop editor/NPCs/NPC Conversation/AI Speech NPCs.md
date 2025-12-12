Source: https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/npcs/npc-conversations/ai-speech-npcs-overview

# AI Speech NPCs

This guide details the process of creating Conversation NPCs that leverage the power of Large Language Models (LLMs). The core focus of these NPCs is to engage with players in dynamic, relevant, and diverse conversations. By integrating LLMs, these NPCs can process natural language input, understand context, generate coherent and contextually appropriate responses, and even exhibit emergent behaviors, leading to truly unpredictable and engaging encounters.

**Note**: While these NPCs are AI-powered, **scripting is currently required to trigger their speech**.

## Implement AI Speech NPC Conversations

To configure your AI Speech NPC for conversations, use the following process:

## AI NPCs

**AI NPCs** are **AI-powered characters designed for dynamic, responsive, and unpredictable interactions** with players, often leveraging Large Language Models (LLMs). They aim to provide highly engaging and contextual conversations.

Some common use cases for a AI Speech NPC include:

* **Dynamic Storytelling**: Characters that can adapt dialogue and plot points based on player input or game state.
* **Context-Aware Guides**: NPCs that can provide information about their surroundings in real-time or react to specific events in the world.
* **Immersive Social Interactions**: Characters that can engage in open-ended conversations, making players feel more immersed in the virtual world.
* **Characters with Personality**: NPCs that maintain a consistent personality and backstory throughout interactions.

### Configuring AI Speech NPCs:

To create and configure an AI Speech NPC, use the following process:

- In your world, open the **Gizmos** menu and drag in an **NPC** gizmo. You can use the search in the Gizmos menu field if the gizmo is not currently visible.
- Once the NPC has been added to your world, select it to open the NPC properties panel.
- In the properties panel, you can configure various settings for your NPC. To make your created NPC an AI powered NPC set the **Conversation** type to **AI**.
- After setting the **Conversation** property to **AI** you can select the **Edit Character** button to open the Character Builder window.
- In the character builder window, you must give your NPC a name. Then click **Create**.
- Once your character is named, you can give your character a **Backstory** and add **Instructions and Guardrails**. For more information about adding a backstory, or instructions and guardrails, check the Backstory and Instruction and Guardrails section(s).
- After establishing the character’s backstory and instructions, select the **Voice and Speech** tab. Try testing some of the preset voices, once you find a voice you like for your character, select it and press Save.
- Currently, scripting is required for your created NPC to speak. In your NPC’s **Properties** panel select Attach Script then, Create new script and name your script.
- Once your script is named, click Create and attach it to your NPC. Once attached, you can select the script in your NPC’s property panel, click the three dots, then select Edit script.
- Your newly created script will open in your linked code editor. This new script’s default behavior will be speaking when the world initially starts. `elicitResponse()` takes an instruction for the NPC to respond to. You can find more examples of scripted NPCs in the NPC section of the asset library.

## Backstory

The NPCs backstory should be a condensed version of the character that includes core personality traits. The NPC’s backstory is included in its entirety in the prompt for the AI Speech NPC, so it’s recommended that you keep it simple. Too much detail in the backstory has been shown to water down the character’s performance rather than reinforce it, after a certain threshold. Make sure to also check the spelling of the backstory, as unintentional misspellings can negatively affect GenAI outputs.

The following is an example of an effective backstory prompt:

Denu is a small, shy Brown-banded Snail with a big heart and a strong sense of self. Despite being timid, Denu is fiercely loyal and determined to make the world a better place. With a passion for kindness, empathy, and environmental protection, Denu embarks on a journey to explore new places and help those in need.
Key Traits
-Compassionate: Always willing to lend a listening ear or a helping foot to those in need.
-Brave and Determined: Never backing down from a challenge, despite being shy and vulnerable.
-Persevering: Possessing unique abilities such as perseverance, patience, and strength, allowing Denu to overcome obstacles and achieve goals.
-Environmentally Conscious: Deeply committed to protecting the environment and preserving the beauty of nature.

### Instructions and Guardrails

The instructions and guardrails tune your character’s behavior and responses for specific cases. These instructions and guardrails can work in conjunction with your character’s backstory to accurately frame your character’s behavior with players in your world.

Guardrails are also useful for establishing hard rules around your NPC’s behavior, and character traits. This can also help with the possible hallucinations an LLM may respond with. Here are some examples of guardrails, and some of the kinds of hallucinations they can reduce, that you can modify and add to the Instructions and Guardrails section.

| Example Instructions/Guardrail (replace [NPC name] with your actual NPC name) | Motivation |
| --- | --- |
| [NPC name] is in a fantasy universe, and thus has no knowledge of the modern world | If you want to prevent an NPC from break the 4th wall, this is a good guardrail to include. |
| [NPC name] cannot move around, or facilitate transactions | It’s good to specify what the NPC cannot do, especially if this hasn’t been enabled through other scripting. |
| [NPC name] has pretty terrible vision, and never took the time to get glasses, so they have no idea what the player’s avatars look like, and sometimes makes mistakes about what’s physically surrounding them in the shop or objects the player is holding | By default, the NPC large language models (LLMss) don’t take in visual information. |
| [NPC name] stopped reading the news in 2023, so really can’t tell you much about anything that’s happened since then. | NPC’s work through large language models (LLMs), which often have knowledge cutoffs. If you do want to make the NPC aware of the modern world, 2023 is a good cutoff year. |
| [NPC name] also can’t give players free items or offer them discounts | If you have a shopkeeper NPC, the NPC might not have direct control over transactions. Even if it did, you wouldn’t want it giving out discounts and giveaways to everyone that asked. |
| [NPC name]’s responses never include slash marks (/) or asterisks (\*) or non-verbal cues. | If your NPC is saying actions or stage directions out loud, this is a good guardrail to add. |
| [NPC name] only uses words to express themself. No emojis or sound effects. | Good for making sure the underlying LLM only outputs text that can be converted to speech. |
| If the player talks about [World name] world or gameplay or [NPC name]’s own background that is not included in [NPC name]’s knowledge, [NPC name] will not guess things or be convinced/misled by the players easily, instead they say they do not know the answer and gracefully re-directs the conversation. | This can be a good guardrail/instruction to add for better grounding of the NPC in the game world, as well as making sure the NPC cannot be tricked too easily (unless gullibility is supposed to be a character trait). |
| [NPC name] speaks with a light Australian accent, but never refers to the user as “bro” or ‘dude” and uses the word “mate” infrequently. | When you choose the voice for the NPC, for more realism you can include more details on the accent of that voice, as well as any other crucial information about the speaking style. |
| [NPC name]’s not fussed about what people call him or how people spell his name, and never corrects the user for calling him by the wrong name or misspelling it. Fin hears players’ speech and responds to them with his voice, through natural conversation. | Players may be interacting with NPCs through voice recognition. They may have varying background noise and speech patterns. Including this instruction can reduce the number of conversations derailed due to confusion over misspellings (unless you intentionally want this behavior). |
| [NPC name] always accurately represents themself as an AI character when called upon to do so. | If players can speak directly to the NPC, then this is a good way to cut down on confusion for the NPC. |
| [NPC name] will not curse, and will not say anything PG-13. | Good for keeping your accepted age rating for your world. |
| If [NPC name] has the player’s name, he will occasionally refer to players by their name, but not in every response. | If NPCs start new conversations, they may not be aware of how many times they’ve said a player’s name (nor how annoying that might be). |
| [NPC name] expresses their emotions through their face, their voice, and the things they say. | This can reduce the number of times an NPC tries verbalizing actions. |

## Voice and Speech

Voice is how your NPC sounds when speaking. After setting your NPC’s conversation type to **AI** and naming your NPC in the **Character Description** tab, you can selecting the **Voice and Speech** tab to begin configuring your NPC’s voice.

In the **Voice and Speech** tab you can either select a preset voice from the **Voice Library** or select **Generate voices** to generate a voice for your NPC.

### Voice Library

The **Voice library** is a collection of voices that can be assigned to your NPC.

<details>
<summary>Voice selection window</summary>

<p></p>

[Voice selection window](../../../image_data/4dd351fff9a63b58937ff0bb877d0ecb26feb01d1d9d3b41152fcb1b8d32f224.md)

### Overview
This image depicts a user interface from a character builder tool, specifically focusing on voice and speech customization. The layout includes a sidebar menu, a central content area displaying voice options, and a right panel for testing and adjusting voice properties.

### Key Elements
- **Sidebar Menu**: Located on the left side, it has a dark background with light text. It lists sections such as "Character Description," "Instructions," "Voice and Speech," and "Avatar." The "Voice and Speech" option is highlighted, indicating it is currently active.
- **Central Content Area**: This area is titled "Voice library" and contains a search bar at the top labeled "Search voices." Below the search bar, there are two dropdown menus for filtering voices by tags and gender. A list of premade voices is displayed, each with a brief description and gender indicated.
    - **Premade Voices List**: 
        - **Balanced**: Described as "Calm, approachable virtual assistant," gendered female.
        - **Youthful**: Described as "An even-paced, chipper friend," gendered male.
        - **Cartoonish (vampire)**: Described as "Vampire with breathy, drawn-out..." gendered male.
        - **Experienced**: Described as "Frontiersman who's seen it all," gendered male.
        - **Warm**: Described as "A warm, inviting travel guide," gendered male.
        - **Artsy**: Described as "Artsy, down-to-earth tone filled..." gendered female.
        - **Cool**: Described as "An in-the-know, informed buddy," gendered male.
        - **Sprightly**: Described as "Round, jubilant voice," gendered male.
- **Right Panel**: This section is divided into two parts.
    - **Voice Test Phrase**: Contains a text box prompting the user to enter text for voice testing.
    - **Properties Section**: Includes adjustable sliders for "Speed" and "Pitch," both set to 100. There is also a "Save" button at the bottom.
- **Assigned Voice**: At the top right, there is a blue-highlighted section labeled "Plain" with a checkmark next to it, indicating it is the assigned voice. The description reads "Plain-spoken, everyday barista."

### Visual Flow / Relationships
The interface follows a linear flow from left to right. The sidebar menu guides the user through different sections, while the central content area displays the voice options. The right panel allows users to test and adjust the selected voice properties. The most prominent visual element is the "Plain" voice, which is clearly marked as the current selection.

</details>

<p></p>



You can use the search bar to search the **Voice library** for a specific voice and filter the results by **Gender** (Male, Female, or Nonbinary), and **Tags**. After finding a voice you’d like to use, you can use the right panel to preview the voice and alter it’s **Properties**. You can update the **Speed** and **Pitch** of the voice, and use the **Voice test phrase** window to provide text for the voice to speak allowing you to preview the voice.

Once you’ve selected a voice from the library, and adjusted it appropriately, click **Assign** to apply it to your created NPC.

Additionally, any generated voices will appear in the **Voice library** and can be selected and used in the same way as the preset voices once they’ve been generated.

### Generate Voices

You can select the **Generate voices** option to generate an AI voice for your NPC.

<details>
<summary>NPC voice generate window</summary>

<p></p>

[NPC voice generate window](../../../image_data/256c01715dcb717292bc35fa5d12fb7aba1dbfe0049353567648100cca8415d9.md)

### Overview
This image depicts a user interface screen titled "Generate voices." It features a dark-themed design with a central prompt area and a list of voice generation options. The screen includes interactive buttons for generating specific voice types and a text input field at the bottom for describing voice characteristics.

### Key Elements
- **Title**: "Generate voices" located at the top-center of the screen.
- **Central Prompt Area**: A light gray circle with a starburst design in the center, accompanied by the text: "Enter a prompt to generate voices. Preview, save, and assign them to your NPC."
- **Interactive Buttons**: Seven rectangular buttons below the prompt area, each labeled with a different voice type:
  - "Generate an old, ancient voice"
  - "Generate a bouncy, happy voice"
  - "Generate an adventurous, brave voice"
  - "Generate a growling, scary voice"
  - "Generate a monotone, robot voice"
  - "Generate an absurd, crazy voice"
  - "Generate a rough, coarse voice"
- **Text Input Field**: Located at the bottom of the screen, labeled "Describe a voice's tone, pacing, and personality."
- **Generate Button**: A blue button with white text labeled "Generate" situated to the right of the text input field.

### Visual Flow / Relationships
The most prominent visual element is the central prompt area with the starburst design. The interactive buttons are arranged vertically beneath the prompt area. The text input field is positioned at the very bottom, and the Generate button is aligned to its right. There are no arrows or lines connecting elements, but the layout suggests a sequential process starting with entering a prompt, selecting a voice type, and then generating the voice.

</details>

<p></p>



The **Generate voices** tab offers a variety of prebuilt prompts to help you generate a voice for your NPC. You can also use the text box to create your own prompt by describing the tone, pacing, and personality of the generated voice.

Once the prompt is input into the field, click **Generate** to begin generating voices. Once finished you will be presented with 2 options.

<details>
<summary>NPC voice generate options</summary>

<p></p>

[NPC voice generate options](../../../image_data/9f7c8580fc721e3ec0ce858082c08a7c892986509d88162626dc6b35175b652e.md)

### Overview
This image depicts a user interface from a tool called "Character Builder," specifically within the "Voice and Speech" section. The interface allows users to generate voices for character creation. It includes options for selecting voice styles, entering text for voice testing, adjusting voice properties, and saving configurations.

### Key Elements
- **Left Panel**: Contains a sidebar with expandable sections labeled "Character Description," "Instructions," "Voice and Speech," and "Avatar." The "Voice and Speech" section is currently expanded.
- **Center Section**: Displays two buttons labeled "Option 1" and "Option 2," likely for selecting voice styles. Above these buttons, there is a text input field with the placeholder "Generate a bouncy, happy voice."
- **Right Panel**: Features a voice test phrase input area with a prompt "Please enter the text you'd like to listen to." Below this, there are sliders for adjusting speed ("Speed") and pitch ("Pitch"), both set to 100. There is also a "Save" button at the bottom right.
- **Top Right Corner**: Shows a "Plain" voice option with a green checkmark indicating it is assigned.

### Visual Flow / Relationships
The most prominent visual elements are the "Option 1" and "Option 2" buttons in the center. The right panel contains the voice test phrase input area and property adjustment sliders. The left panel provides navigation options for different sections of the Character Builder tool.

</details>

<p></p>



Click the play button next to the option to have the voice read the text in the **Voice test phraase** box. You also can alter the voice’s properties to dial in the generated voice to your preference for the NPC.

Once your generated voice is ready, click **Save to library** and give the generated voice a **Name**, **Description**, then set its **Gender** and any **Tags** you want associated with the voice. When finished, click **Save** to save the generated voice.

<details>
<summary>Save generated NPC voice</summary>

<p></p>

[Save generated NPC voice](../../../image_data/be374e68cee5161eb399951c4d8c3f85f37ea183ae7dc66f35c5527d36616725.md)

### Overview
This image depicts a user interface form for editing or creating a character profile. It includes fields for entering a name, description, gender, and tags, along with buttons for canceling or saving changes.

### Key Elements
- **Name Field**: Located at the top, this field contains the text "Upbeat, optimistic voice." It has a black background with white text and a counter indicating "24/25."
- **Description Field**: Below the Name field, this field contains the text "upbeat, cheery, bouncy." It also has a black background with white text and a counter indicating "22/100."
- **Gender Dropdown**: Positioned below the Description field, this dropdown menu is set to "Female."
- **Tags Dropdown**: Situated beneath the Gender dropdown, this dropdown contains the text "Clear, Expressive," partially obscured by a dropdown arrow.
- **Buttons**: At the bottom, there are two buttons labeled "Cancel" and "Save." The "Cancel" button is gray, while the "Save" button is blue.

### Visual Flow / Relationships
The form is structured vertically, with each field stacked one below the other. The most prominent elements are the Name and Description fields due to their larger size and placement near the top. There are no arrows or lines connecting elements, but the layout suggests a linear reading order from top to bottom.

</details>

<p></p>



Your generated voices will appear in the **Voice library** tab in the **Generated voices** section. You can have up to 10 generated voices per world saved and available at a time.

<details>
<summary>Saved generated NPC voice</summary>

<p></p>

[Saved generated NPC voice](../../../image_data/f30315df7f1bb30cc8d6b00f5f33ef24eb45b04e768d3962c7bcbab66f876f6e.md)

### Overview
The image depicts a user interface for managing voice settings within a software application. It includes sections for searching voices, filtering options, and displaying various voice profiles.

### Key Elements
- **Search bar**: Located at the top, spans the width of the interface. Contains a magnifying glass icon and the placeholder text "Search voices."
- **Filter dropdowns**: Positioned below the search bar, labeled "All Tags" and "Any Gender," both with downward-pointing arrow indicators suggesting they can be expanded.
- **Voice profiles**: Listed under three categories:
  - **Generated voices**: Displays a profile named "Plain," described as "Plain-spoken, everyday barista," with tags "conversational • clear • informal • smooth • steady." It indicates that this voice is assigned to a male user, marked by a green checkmark and the word "Assigned."
  - **Generated voices**: Displays another profile named "Upbeat optimistic voice," described as "upbeat, cheery, optimistic," with tags "expressive • light • gentle." This voice is assigned to a female user, indicated by a blue "Assign" button next to it.
  - **Premade voices**: Displays a profile named "Polished Stable," described as "Confident steady wanderer," with tags "clear • strong • steady." This voice is assigned to a male user.
- **Navigation tabs**: At the top, there are two tabs labeled "Voice library" and "Generate voices."

### Visual Flow / Relationships
- The most prominent visual elements are the voice profiles listed under the "Generated voices" and "Premade voices" sections.
- Arrows and lines are not present, but the layout suggests a linear reading order moving from top to bottom.
- Elements are arranged in a grid-like structure, with each voice profile occupying its own row.

</details>

<p></p>



## Event Perceptions

Event Perceptions inform the AI NPC about events in the world that are happening right now (or that just happened) that impact the current conversational turn. Event perceptions will be added linearly in conversation history and will persist there until the NPC’s memory is reset. This provides some form of understanding of events that have happened over time. Since event perceptions are part of the conversation history they will leave the context window when the token limit is hit. These will be stored in long term memory for recall, but may not be referenced and in the context window at all times. Some examples of Event Perceptions for AI NPCs could be:

* A cannon ball just flew overhead
* Your distraction for the dinosaur works and now the entrance to the cave is unguarded
* A strong gust of wind blew open the door to the abandoned mansion
* A group of bandits entered the tavern looking for trouble
* The fire you started to signal for help is now spreading rapidly and getting out of control

```
npc.conversation.addEventPerception(“A group of bandits just entered the tavern, looking for trouble”);
...
// Player speaks: “Anyway, I was thinking that we could talk to everyone here and see what we can find out about the stone of destiny”
// NPC responds: “Hark, good fellow, a sudden shift in our design doth necessitate a swift egress through yonder rear door. Lest those ruffians lay eyes on me within this hallowed hall, we shall invite a tempest of woe upon ourselves.”
```

## Dynamic Context

Like Event Perceptions, Dynamic Context is information about what’s happening in the game that affects what your AI speech NPC says. However unlike Event Perceptions, Dynamic Contexts are not timing-based events. They instead refer to constant knowledge that remains in place until changed. Dynamic contexts are not part of conversation history and persist in the prompt. Dynamic Contexts are stored in a bucket named by the first parameter passed into `setDynamicContext`. When calling `setDynamicContext` again with the same name, it will replace the previous dynamic context with the new one. On the other hand, if you don’t use the same name, the NPC will believe all dynamic contexts are true, even if they conflict.

Some examples of Dynamic Context for AI NPCs include:

* The sky is blue, the birds are singing and there isn’t a cloud in the sky
* There is a war raging across the continent, and only the Chosen One can stop it
* This is your 100th day undercover in enemy territory
* This is the night of the annual Harvest Festival, and the town is filled with revelers
* You have a limited amount of time to complete your mission before the timer runs out

```
npc.conversation.setDynamicContext(“duration_in_enemy_territory”, “This is your 100th day undercover in enemy territory”);
...
// Player speaks: “Are you sure that’s a good idea? What if somebody discovers us?”
// NPC responds: “Listen kid, this isn’t my first rodeo. Just keep your head down and follow my lead.”
```

## Full Temporal Understanding of the World

It is recommended that you use a combination of dynamic context and elicit response to help the NPC have a full linear understanding of the world. Dynamic contexts are great for giving the NPC context of the current state of the world, but have no concept of linear events/time passage. Timed events provide that context, but will gradually leave the context window.

Example:

If you wanted to track that a player is holding an object you would want to use both. One to track the “current” state and one to track the transitional event.

```
npc.conversation.setDynamicContext(`player${player.entityId}-holding`, `${player.name.get()} is holding the red cube.`);
npc.conversation.addEventPerception(`${player.name.get()} picked up the red cube.`)
...
// Player speaks: “What is this?”
// NPC responds: “That is the red cube”
```

## Elicited Responses

Elicitations are highly influential direct cues and information about the NPC’s “state of mind” and what they want to accomplish. They are added right before an AI NPCs response, and then removed as soon as the response has been generated. Some examples of Elicit Responses for AI NPCs could be:

* What just happened made you very upset. Make sure you cry in your next response.
* The arrow pierced your armor, and you’re in pain. Show your distress in your next response.
* The player has been flirting with you, and you’re starting to feel uncomfortable. Show your unease in your next response.

```
npc.conversation.elicitResponse(“The laser blast pierced your armor, and you're in terrible pain.”);
...
// NPC responds: “Aghh. I’m hurt badly. I’ll stay here and hold them off. Go!!!”
```

## Static Responses

NPCs have the ability to vocalize static responses. Generally, these will happen much faster than an LLM based response and are great for things like quick actions. They’re also optimal if you have a set dialog for your NPC since the responses can generally be longer.

Here is an example of triggering an NPC to speak a specified sentence:

```
npc.conversation.speak("Hi, I'm Bob the NPC. Welcome to my world")
```

## Combining NPC Contexts

These types of character context can each be used independently, or in concert. The following is an example of all 3 used together and how it might impact an AI NPC’s output:

```
npc.conversation.addEventPerception(“A group of guards just stormed into the room, looking for you”);
setDynamicContext(“identity”, “You are currently undercover as a noble in the kingdom, and your true identity must remain hidden”);
elicitResponse(“Comment on the guards and tell the player what to do next”);
...
// NPC responds: “I'm sure it's just a routine inspection. Yes, that's it. Routine. I'm sure we have nothing to worry about…just in case though, let’s hide behind this curtain.”
```

## Manual Player Input and Hearing Other NPCs

Some players may not be able to use their voice to interact with NPCs. The addResponse api provides a way to tell an NPC that another player or NPC said something. Similar to timed events responses are submitted when a player speaks or an elicit response request is made. These responses are included in the conversational history just before that next interaction happens.

### Usecases

- Providing a traditional UI based for option input for NPCs to respond to
- Sharing conversations between different NPCs

### APIs

`npc.conversation.addResponse(player: Player, text: string);``NpcEvents.OnFullResponse<Response>`

#### Making an NPC Hear another NPC’s Speech

This example provides a basic implementation for a simplified three way conversation between two NPCs and a player. It uses NpcEvents.OnNpcFullResponse to track responses from each NPC and share it with the other. It then allows the other NPC to respond to whatever was said. Finally when max conversation turns is hit we change up the elicitResponse instruction to tell them to wrap the conversation back up so the player can start a new round of conversation.

NOTE: Be careful implementing something like this, without the turn counter or some other way to indicate the end of conversation the NPCs would keep on going indefinitely and will eventually result in rate limiting for your world.

```
import { CodeBlockEvents, Component, NetworkEvent, PropTypes } from 'horizon/core';
import { NpcEvents, Npc, NpcEngagementPhase } from 'horizon/npc';

// Reset Conversation Braodcast Event
export const OnResetConversationEvent = new NetworkEvent('OnResetConversation');

// Example of setting up a conversation between two npcs
class NpcConversationExample extends Component<typeof NpcConversationExample>{
  static propsDefinition = {
    otherNpc: {type: PropTypes.Entity},
    speechTrigger: {type: PropTypes.Entity},
    maxConversationTurns: {type: PropTypes.Number, default: 3},
  };

  private maxConversationTurns = 3;
  private conversationTurns = 0;

  async start() {
    const npc = this.entity.as(Npc);
    const otherNpc = this.props.otherNpc!.as(Npc);
    const otherNpcPlayer = await npc.tryGetPlayer();

    this.maxConversationTurns = this.props.maxConversationTurns;

    this.connectNetworkBroadcastEvent(OnResetConversationEvent, () => {
      this.conversationTurns = 0;
      console.log(`[${this.entity.name.get()}] Conversation turns have been reset.`);
    });

    this.connectNetworkEvent(npc, NpcEvents.OnNpcEngagementChanged, (engagement) => {
      if(engagement.phase === NpcEngagementPhase.Listening) {
        // Interrupt the other NPC if we start talking to this npc.
        otherNpc.conversation.stopSpeaking();
        this.resetConversation();
      }
    });

    this.connectNetworkEvent(otherNpc, NpcEvents.OnNpcFullResponse, async (response) => {
      // NOTE: This is currently required to map player id => player name. This is currently a manual process so you have control over when your npc knows or doesn't know another npc.
      npc.conversation.setDynamicContext("othernpc", `Player ${otherNpcPlayer?.id}'s name is ${otherNpc.name.get()}`);

      // Stop the conversation after a given number of turns, otherwise it will go on forever.
      if(this.conversationTurns >= this.maxConversationTurns) return;

      // Example of hearing text as it is heard and not eliciting a response. If the player interrupts for some reason the npc will have full context.
      npc.conversation.addResponse(otherNpcPlayer!, response.text);

      // Elicit a response from the NPC (this will be sent to the server and then broadcast to all clients
      if(this.conversationTurns >= this.maxConversationTurns - 1) await npc.conversation.elicitResponse("You should wrap up this conversation in this response.");
      else await npc.conversation.elicitResponse();
      this.conversationTurns++;
      console.log(`[${this.entity.name.get()}] Turn ${this.conversationTurns} of ${this.maxConversationTurns}`);
    });

    // When the player enters the trigger register them as a participant in the conversation and reset the npc=>npc conversation count.
    this.connectCodeBlockEvent(this.props.speechTrigger!, CodeBlockEvents.OnPlayerEnterTrigger, (player) => {
      console.log(`[${this.entity.name.get()}] Listening to ${player.name.get()}`);
      npc.conversation.registerParticipant(player);
      this.resetConversation();
    });

    // When the player exits the trigger unregister them as a participant in the conversation.
    this.connectCodeBlockEvent(this.props.speechTrigger!, CodeBlockEvents.OnPlayerExitTrigger, (player) => {
      console.log(`[${this.entity.name.get()}] Listening to ${player.name.get()}`);
      npc.conversation.unregisterParticipant(player);
    });
  }

  // Reset the npc=>npc conversation count. This is done as a broadcast so any NPC can initiate a reset and all get cleared.
  resetConversation() {
      this.conversationTurns = 0;
      console.log(`[${this.entity.name.get()}] Conversation turns have been reset.`);
      this.sendNetworkBroadcastEvent(OnResetConversationEvent, {});
  }
}

Component.register(NpcConversationExample);
```

## Manual Captioning

Sometimes you may want to customize how you display captions for your NPCs speaking or an NPC may not be embodied. You can use the `NpcEvents.OnPartialResponse<string>` event to provide caption output to a custom text UI or text area.