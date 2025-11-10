Source: https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/npcs/npc-gizmo/npc-gizmo

# NPC Gizmo

The **NPC Gizmo** serves as the **foundational entity for creating Non-Player Characters (NPCs)** in Horizon Worlds. NPCs can range from **simple scripted characters** with predefined behaviors to complex AI-driven characters that learn and adapt based on player actions. Regardless of their complexity, all NPCs begin with the NPC Gizmo.

Adding an NPC Gizmo to your world has the **same performance impact as adding another player**. Therefore, it’s recommended to manage the total number of human players and NPCs by adjusting your world’s “Maximum number of players” setting and considering spawning NPCs only when needed to optimize resource usage.

## Create and Configure an NPC

To create and configure an NPC using the NPC Gizmo, use the following process:

- Select **Build** from the top menu and navigate to **Gizmos > NPC**.

![NPC Gizmo Build window](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/546226826_810235191514434_7533196344242328877_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=zAg0XFd-busQ7kNvwEfWNDj&_nc_oc=AdlPSlOWuW7hry2NBHJJf6IpoSKY4MB3_dkGDpBXVs_yAA6qc_qHN2z990nhRK7EcqY&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=4nrhZA29ru5N3vLWCxvMuw&oh=00_Afhjidbvb3CTKMCiFELTeLwXR0p1HcDe72vPaZeak2bFBg&oe=692BE92A)

- Drag the NPC Gizmo from the build panel into your world scene and place it. **Note**: the NPC may initially appear as a single, flat color as a placeholder. It is also important to position the NPC gizmo on a surface in your world and not above or below it.
- Once your NPC has been added to your world, you can configure its properties.

| Property | Description |
| --- | --- |
| Attributes | Standard properties for adjusting the NPC’s location, and scale within your world. |
| Character Name | The display name of your avatar NPC |
| Spawn on Start | Toggle that controls whether or not the NPC spawns on world start or not. If toggled off, the NPC must be spawned into the world using Typescript. |
| Body Type | Sets the embodiment for the NPC. The available options are **None** and **Horizon Avatar**. See Configuring Horizon Avatar NPCs for more information |
| Appearance | Click this button to edit the avatar’s appearance. |
| Refresh | Click this button after you have edited your avatar’s appearance to refresh it in this world. |
| Conversation | Sets the conversation type for the NPC. The available choices are **AI** and **None**. |
| Default Speech Bubble | Toggles whether or not the created NPC will display a speech bubble when speaking. |
| AI Character | Click **Edit Character** to begin the process of creating and customizing the NPC’s name, backstory, voice, and more. |
| Nametag Settings | Updates the nametag for the NPC that displays in world. You can change title for the nametag and the left/right color gradient |
| Audio Settings | Controls the audio produced by the NPC. |
| Attach Script | Allows you to attach a TypeScript script to define the NPC’s behaviors. |

You can also duplicate or delete NPC Gizmos within your world like any asset added to the Horizon editor. Duplicating an NPC with altered properties will also duplicate those properties for the newly generated NPC.

### Configuring Horizon Avatar NPCs

After adding the NPC Gizmo (**Gizmos > NPC)** and positioning it in your world, you can set its’ **Body Type** to Horizon Avatar to use a Horizon based avatar as an NPC. When selecting a Horizon Avatar as an NPC you can also **customize its visual appearance** by clicking “**Edit Avatar**” in the Properties panel. This opens a web-based editor for body, face, clothing, and accessories.

![Edit your avatar window](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/469049488_603532515518037_2698379075646803421_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=tieHuIUH7nEQ7kNvwFt4VIq&_nc_oc=AdnCcn07RfzUwMgtypdYihD07NLjpqeLzp-VNxxcQnQoeOj0L8NhX1wRblirFDjdBuw&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=4nrhZA29ru5N3vLWCxvMuw&oh=00_Afh_AJ5cvg0KCQbH6nXULXen4d6HFzF6CZLwEIXxsk6Vhg&oe=692C0213)

Remember to click **“Refresh”** in the Desktop Editor to see your updates after you click **Done editing**.