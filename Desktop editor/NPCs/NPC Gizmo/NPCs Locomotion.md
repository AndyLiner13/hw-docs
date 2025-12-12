Source: https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/npcs/npc-gizmo/npc-locomotion

# NPCs Locomotion

# **Implementing Locomotion for NPCs**

Effective locomotion allows your NPCs to move realistically and interact dynamically with your world, whether they are performing pre-defined actions or responding to complex AI logic.

Locomotion helps make your NPCs perform actions like walking, turning, and jumping from scripting via Typescript. This style of direct locomotion can be controlled with methods like `moveToPosition()`, `rotateTo()`, and `jump()`.

## Set up direct NPC movement

Setting up Direct NPC movement provides immediate, controllable locomotion without requiring a NavMesh setup. These APIs are ideal when you require direct control over your NPC’s movement.

### Sample

```
import * as hz from 'horizon/core';
import { Npc, NpcPlayer, NpcLocomotionResult } from 'horizon/npc';

// Example component - you can name this whatever fits your use case
class NPCMovementExample extends hz.Component<typeof NPCMovementExample> {
 static propsDefinition = {
   npcEntity: { type: hz.PropTypes.Entity },
   targetEntity: { type: hz.PropTypes.Entity },
 };

 private npc: Npc | null = null;
 private npcPlayer: NpcPlayer | null = null;

 async start() {
   this.npc = this.props.npcEntity?.as(Npc);

   if (this.npc) {
     this.npcPlayer = await this.npc.tryGetPlayer();
     this.performBasicMovement();
   }
 }

 private async performBasicMovement() {
   if (!this.npcPlayer || !this.props.targetEntity) return;

   const targetPosition = this.props.targetEntity.position.get();

   // Basic movement with default options using the actual NpcPlayer API
   try {
     const result = await this.npcPlayer.moveToPosition(targetPosition);

     if (result === NpcLocomotionResult.Complete) {
       console.log('NPC reached destination successfully');
       // Perfect for triggering follow-up actions like:
       // - Starting dialogue
       // - Playing animations
       // - Activating game objects
       // - Updating quest states
     } else {
       console.warn(`Movement failed with result: ${result}`);
     }
   } catch (error) {
     console.error('Movement error:', error);
   }
 }
}

hz.Component.register(NPCMovementExample);
```

If using a Nav Mesh for your NPC, here are some additional core concepts to know before setting up your NPC for navigation:

**Navigation volume gizmo**

The navigation gizmo is the primary building block for designing navigation meshes. The box-shaped gizmo allows you to define which areas of your world should be used when generating a navigation mesh. By placing a navigation gizmo in your world, the navigation mesh generation process recognizes the gizmo’s boundaries and identifies any walkable areas within that space.

Conversely, you can set a gizmo to inclusion or exclusion mode. Exclusion mode cuts out an area from the navigation mesh. You can also make gizmos profile-specific, meaning you can design profile-specific walkable areas, exclude agents from a certain area, and so on.

**Navigation mesh (Nav mesh)**

A navigation mesh is a 3D polygonal mesh that defines sections of an environment that an agent can traverse. A world can have multiple navigation meshes for different types of AI agents, dictated by the navigation profiles you define. Each profile has an associated navigation mesh, which can be queried at runtime through the TypeScript API.

**Agent**

An agent is an entity that queries and traverses a navmesh. Agents are typically NPCs, but they can also be player characters depending on the game’s implementation. There is no specific Agent class or code structure; it is a general term that refers to entities that query and use the navigation mesh to function.

**Navigation profile**

A navigation profile defines properties that describe the agent traversing the world. These properties tell the navigation mesh how tall or wide the agent is, as well as details such as the maximum slope angle that can be climbed. These details not only impact the mesh generation, but also the paths calculated at runtime. You can configure the following properties in a navigation profile:

* Radius: The closest the center point of an agent can get to a wall or ledge.
* Height: The minimum height needed for an agent to move through an area.
* Max slope angle: The maximum incline an agent can move up in degrees (between 0 and 60).
* Step height: The maximum height an agent can step up.

Before beginning to build and configure navigation for your NPCs, first you should ensure that the correct APIs are enabled in your world environment.

Select **Scripts \*\*from the top menu bar, then click the options icon. Select \*\*API** from the menu and ensure that **horizon/navmesh** is enabled.

After verifying that the **horizon/navmesh** API is enabled, you can begin building navigation for your NPCs.

<details>
<summary>Horizon navmesh</summary>

<p></p>

[Horizon navmesh](../../../image_data/fda5ef80c7caed0dc67831395b62bdfc1d155b1b3b9f6be14d7ba4f4a4499bf5.md)

### Overview
This image depicts a settings interface titled "Script Settings." It is a modal window with a dark theme, likely part of a software application. The interface includes a sidebar with navigation options ("API," "Console," "Script editing") and a main content area displaying API settings. The main content area has a list of API endpoints with toggle switches next to them.

### Key Elements
- **Sidebar Navigation**: Located on the left side, with options "API," "Console," and "Script editing." Each option is a clickable link.
- **Main Content Area**: Positioned centrally, showing API settings. Contains a header "API" and a list of API endpoints.
  - **API Version**: Displayed as "2.0.0" at the top right.
  - **API Endpoints List**: A vertical list of API endpoints such as "horizon/in_world_analytics," "horizon/internal," "horizon/mobile_gestures," etc. Each endpoint has a toggle switch next to it.
    - **Toggles**: Toggle switches are located on the far right of each line item. Some toggles are checked (indicated by a blue background), while others are unchecked (white background).
    - **Highlighted Toggle**: The toggle switch for "horizon/navmesh" is highlighted with a red bounding box, indicating it is currently selected or focused.
- **Buttons**: At the bottom of the interface, there are two buttons labeled "Cancel" and "Apply."

### Visual Flow / Relationships
The interface follows a linear flow from left to right and top to bottom. The sidebar navigation is the primary menu, directing the user to different sections. The main content area displays the API settings, with the API version at the top and the list of endpoints below. The toggle switches allow users to enable or disable specific APIs. The "Apply" button suggests that changes can be saved, while the "Cancel" button likely resets the interface to its previous state.

</details>

<p></p>



Use the following process to setup and generate nav meshes that can be accessed with the NavMesh API:

- In the **Systems** menu, click **Navigation** to open the **Navigation Profiles** menu. This menu lists any navigation profiles defined for your world and allows you to create new ones.
- Click the **+** button to begin creating a new profile.
  <details>
  <summary>Create profile</summary>
  
  <p></p>
  
  [Create profile](../../../image_data/cf42fa3e4d4086b430087ab571c1f6d3588135bf3c0d038794e5fd17b91c9899.md)
  
  ### Overview
  The image depicts a user interface section within a software application, specifically related to navigation profiles. The interface includes a search bar, a button for creating new profiles, and a placeholder message indicating the purpose of the section.
  
  ### Key Elements
  - **Search Bar**: Located at the top-left, it has a magnifying glass icon and spans horizontally across the width of the section. It is black with white text.
  - **Create Profile Button**: Positioned to the right of the search bar, it is a black button with a white plus sign inside a red square. The button has a tooltip labeled "Create Profile."
  - **Placeholder Message**: Below the search bar, there is a light gray icon of a walking figure and a message that reads: "Create navigation profiles here, then use scripts to add pathfinding to your world." The text is centered and written in white.
  - **Navigation Tabs**: At the very top, there are several tabs labeled "Build," "Systems," "Preview," "Scripts," and others partially cut off. The "Navigation" tab is highlighted in blue, indicating it is currently active.
  
  ### Visual Flow / Relationships
  The most prominent visual element is the "Create Profile" button, as it is centrally located and highlighted. The search bar is secondary but still important for functionality. The placeholder message provides context for the user. The navigation tabs at the top provide additional context about the application's functionality.
  
  </details>
  
  <p></p>
  
  
- In the **Navigation Profiles** window, click the **Create Profile** button to begin creating a new agent profile. The agent profile options are as follows:

| Property | Description |
| --- | --- |
| Agent Height | How high an area needs to be in order for the NPC to navigate underneath it. |
| Agent Radius | How wide an area needs to be in order for the NPC to be able to walk through it. |
| Agent Slope | How steep a slope an NPC can walk up. |
| Step Height | How high an obstacle needs to be before it will block the NPC. For example, a small stone would be easy for the Android to step over and a bigger rock might be more difficult or might actually obstruct their path.  These properties could be different for the Android as opposed to the Chicken. It would be able to step over a smaller stone. |

- Once finished click **Create** to create and save your profile. Your created profile will be added to the **Navigation profiles** window.
  <details>
  <summary>Navigation profiles window</summary>
  
  <p></p>
  
  [Navigation profiles window](../../../image_data/b151e1a58dd8e9d900e4bfffed1b17fa76399b656b4c7cddf9f6b0c6e5d7f021.md)
  
  ### Overview
  This image depicts a user interface section of a software application, specifically a navigation profiles management screen. The layout includes a search bar, a list of navigation profiles, and various interactive elements.
  
  ### Key Elements
  - **Navigation Bar**: Located at the top-left corner, it contains a blue button labeled "Navigation" with a downward arrow indicating a dropdown menu.
  - **Search Bar**: Positioned below the navigation bar, it has a magnifying glass icon on the left side and spans across the width of the screen.
  - **Add Button**: A plus sign icon is located to the right of the search bar.
  - **Edit/Cogwheel Icon**: A wrench icon is situated next to the add button.
  - **Sort/Order Icon**: An up-and-down arrow icon is positioned to the far right of the search bar.
  - **Profile List**: Below the search bar, a list titled "Navigation Profiles (1/100)" is displayed. It shows one entry labeled "Test nav mesh" with a description "Nav mesh test input." To the left of this entry is an orange square containing a white silhouette of a person running.
  - **Close Button**: An 'X' icon is located at the top-right corner of the screen.
  
  ### Visual Flow / Relationships
  The most prominent visual element is the search bar, as it occupies a significant portion of the screen and is centrally located. The interactive icons (add, edit, sort) are arranged horizontally to the right of the search bar. The profile list is below the search bar, providing a clear separation between the search functionality and the content display area. The close button is the least prominent but easily accessible for closing the interface.
  
  </details>
  
  <p></p>
  
  

After creating a profile, you can add the **Navigation volume** gizmo to your world to define which areas are navigable.

To do so use the following process:

- After adding an NPC to your world and choosing its embodiment, select the dropdown arrow in the **Navigation** portion of the tool bar. In the menu, select **Navigation volume**. The Navigation volume will be used in order to determine what areas are navigable by the NPC. So you want to stretch this box out to cover the entire floor of what you want to be navigable.
  <details>
  <summary>Navigation volume gizmo</summary>
  
  <p></p>
  
  [Navigation volume gizmo](../../../image_data/0390bfec396b693a2c30c37d8ac6e1c6deb595e7da2cfc11b6da48280484683a.md)
  
  ### Overview
  This image depicts a user interface section labeled "Navigation" within a larger application or software tool. The interface includes various icons and labels representing different navigation-related functionalities. The layout is organized into rows and columns, with icons and labels clearly defined.
  
  ### Key Elements
  - **Navigation Label**: Located at the top-left corner, the word "Navigation" is displayed prominently.
  - **Search Bar**: Positioned below the "Navigation" label, it contains a magnifying glass icon and a black search bar.
  - **Icons and Labels**:
    - **Spawn Point**: A blue square with a white figure walking downwards, labeled "Spawn Point."
    - **Door**: A pink square with a white door icon, labeled "Door."
    - **Snap Destination**: A blue square with a white compass icon, labeled "Snap Destination."
    - **SafeSpawnZ one**: A white cube icon, labeled "SafeSpawnZ one."
    - **Navigation Volume**: A green square with a white figure walking, highlighted with a red bounding box, labeled "Navigation Volume."
  
  ### Visual Flow / Relationships
  The visual hierarchy is clear, with the "Navigation" label as the primary heading. Below it, the search bar serves as a secondary element. The icons are arranged in a grid-like structure, with each icon accompanied by its respective label. The highlighted "Navigation Volume" icon draws attention due to the red bounding box.
  
  </details>
  
  <p></p>
  
  
- Once your navigation volume is added and you can configure the **Volume Type** which controls whether it is an **Inclusion** or **Exclusion** navigation volume. Setting the volume to **Exclusion** cuts the covered area out from any generated navigation mesh.
  <details>
  <summary>Navigation volume settings</summary>
  
  <p></p>
  
  [Navigation volume settings](../../../image_data/91c2833c17f5712ce78c5f9fbecfb118981668174f43fdc64b85ae7d6e1e99ef.md)
  
  ### Overview
  This image depicts a user interface element within a settings or configuration menu. It shows a dropdown selection menu for choosing between "Inclusion" and "Exclusion" options under the "Navigation Volume" section. The layout suggests a preference setting for how navigation volume is managed within a game or application.
  
  ### Key Elements
  - **Dropdown Menu**: Located on the right side of the image, it has a dark gray background with white text. The dropdown is open, showing two options: "Inclusion" and "Exclusion". The "Inclusion" option is selected, indicated by a checkmark next to it.
  - **Section Header**: "Navigation Volume" is displayed at the top left, with a small triangle icon indicating expandable/collapsible content.
  - **Subsections**: Below the main header, there are two subsections labeled "Volume Type" and "Navigation Profile". These appear to be additional settings related to navigation volume but are not expanded in the image.
  - **Gameplay Tags Section**: Below the "Navigation Volume" section, there is another section labeled "Gameplay Tags", which is also collapsed.
  
  ### Visual Flow / Relationships
  The most prominent visual element is the dropdown menu, as it is the focal point of interaction. The dropdown is positioned to the right of the section header, and the selected option is clearly highlighted. The subsections below the main header are secondary elements that provide additional context but are not interacted with in the current view.
  
  </details>
  
  <p></p>
  
  
  Exclusion is useful for in-world assets that shouldn’t affect NPC navigation like doors.
- Next, set what the created navigation volume applies to. Use **Navigation Profile** and select a created navigation profile or set to **All** to apply to all entities.
  <details>
  <summary>Navigation profile</summary>
  
  <p></p>
  
  [Navigation profile](../../../image_data/0a23dc78c94cd7f8e70ae8b2ca22966a3441ee5e5d4038269805a651b4612068.md)
  
  ### Overview
  This image depicts a user interface element showing a dropdown menu within a navigation profile section. The dropdown is open, revealing two options: "Island man" and "All". There is also a collapsed section labeled "Gameplay Tags" with a search bar below it.
  
  ### Key Elements
  - **Navigation Profile Header**: Located at the top-left, the header reads "Navigation Profile" in a lighter gray font against a darker gray background.
  - **Dropdown Menu**: Positioned to the right of the header, the dropdown menu is open, displaying two options: "Island man" and "All". The option "Island man" has a checkmark next to it, indicating selection.
  - **Gameplay Tags Section**: Below the header, there is a section titled "Gameplay Tags" with a downward-facing arrow indicating that it can be expanded/collapsed. The section is partially obscured by the dropdown menu.
  - **Search Bar**: At the bottom of the image, there is a search bar with the placeholder text "Search attached tags".
  
  ### Visual Flow / Relationships
  The most prominent visual element is the open dropdown menu. The dropdown menu is positioned to the right of the header, and its contents are clearly visible. The "Gameplay Tags" section is below the header but partially covered by the dropdown menu. The search bar is at the very bottom of the image.
  
  </details>
  
  <p></p>
  
  

Once you have created and defined profiles and navigation volume gizmos for your world, the next step is to build the meshes for each profile. Alternatively, this is called “baking” the navigation mesh.

Navigate to **Systems > Navigation** and select **Bake All**.

<details>
<summary>Bake All</summary>

<p></p>

[Bake All](../../../image_data/3e53a9c9854e41e3bc67123e0d532f2697b5c926f408ada242224a3345c5e2b3.md)

### Overview
This image depicts a user interface element titled "Navigation Profiles." It includes a search bar, a plus sign for adding new profiles, a wrench icon likely representing settings, and a "Bake All" button. Below the title, there's a list item showing a navigation profile named "Island man."

### Key Elements
- **Search Bar**: Located at the top-left, rectangular shape, black background, white magnifying glass icon.
- **Plus Sign**: Positioned next to the search bar, white plus symbol on a light gray background.
- **Wrench Icon**: To the right of the plus sign, a wrench icon on a gray background.
- **Bake All Button**: A black button with white text saying "Bake All," located to the right of the wrench icon.
- **Navigation Profiles Title**: At the top, white text on a dark background.
- **Profile List**: Below the title, a list item showing "Navigation Profiles (1/100)" followed by a profile entry labeled "Island man" with a subtitle "Island man nav mesh."
- **Profile Icon**: An orange square with a white silhouette of a person running.

### Visual Flow / Relationships
The most prominent visual element is the "Bake All" button due to its placement and contrasting color. The search bar and wrench icon are secondary but still important for functionality. The profile list item is less prominent as it is part of the interface rather than a primary action.

</details>

<p></p>



After selecting **Bake All** you should see the navigation meshes built for your world. If it appears that nothing happened when building the navigation mesh, you likely need to enable the in-editor previews. Hover over each profile and ensure the visibility indicator is set to 👁 by clicking the relevant button.

```
import * as hz from 'horizon/core';
import { Npc, NpcPlayer, NpcLocomotionOptions, NpcLocomotionResult } from 'horizon/npc';
import NavMeshManager, {NavMesh, NavMeshPath} from 'horizon/navmesh';
// This is an example of how to control an Avatar embodied NPC with a NavMesh.
class NavMeshExample extends hz.Component<typeof NavMeshExample> {
 static propsDefinition = {
   npc: {type: hz.PropTypes.Entity},
   banana: {type: hz.PropTypes.Entity},
   bananaTrigger: {type: hz.PropTypes.Entity},
   customer: {type: hz.PropTypes.Entity}
 };
 private npcGizmo: Npc | undefined;
 // NPC Player is how we control the Avatar embodied NPCs. NpcPlayer derives from Player, so the full Player API is available.
 private npcPlayer: NpcPlayer | undefined;
 private player: hz.Player | undefined;
 private hasBanana: boolean = false;
 // The name of the NavMesh profile we want to use for NPCs.
 private readonly NAV_PROFILE_NAME: string = "NPC";
 // The NavMesh object used to create a path for our NPC to move along.
 private navMesh: NavMesh | null = null;
 // Create locomotion options - we can use this to customize NPC locomotion.
 private moveOptions: NpcLocomotionOptions = {
   movementSpeed: 3, // Control how fast the NPC moves.
   faceMovementDirection: true // Force the NPC to face the direction of movement.
 };
 async start() {
   this.npcGizmo = this.props.npc?.as(Npc);
   if(this.npcGizmo == undefined) {
     console.error("NPC Gizmo is undefined!");
     return;
   }
   // We await to be sure the NPC is fully initialized and the NpcPlayer is available.
   this.npcPlayer = await this.npcGizmo.tryGetPlayer();
   if(this.npcPlayer == undefined) {
     console.error("NPC Player is undefined!");
     return;
   }
   // Retrieve the NavMesh that corresponds to the profile used by NPCs.
   this.navMesh = await NavMeshManager.getInstance(this.world).getByName(this.NAV_PROFILE_NAME);
   if(this.navMesh == null) {
     console.error("NavMesh is null!");
     return;
   }
   // When a player interacts with the trigger, we move the NPC to the Banana.
   this.connectCodeBlockEvent(
     this.props.bananaTrigger!,
     hz.CodeBlockEvents.OnPlayerEnterTrigger,
     (player: hz.Player) => {
       this.player = player;
       this.moveToBanana();
     }
   );
 }
 // We find a path along the NavMesh that takes us to a wanted destination.
 getPathFromNavMesh(targetPosition: hz.Vec3): hz.Vec3[] | null {
   // Find the nearest point on the NavMesh, within 1 meter, to where we want the NPC to go.
   const navMeshTarget: hz.Vec3 | null = this.navMesh!.getNearestPoint(targetPosition, 1);
   if(navMeshTarget == null) {
     console.error("The NPC couldn't find a valid NavMesh position close enough to the wanted destination!");
     return null;
   }
   // Find a starting position on the NavMesh based on the NPC's current position.
   const npcPostion: hz.Vec3 = this.npcPlayer!.position.get();
   const navMeshStart: hz.Vec3 | null = this.navMesh!.getNearestPoint(npcPostion, Number.MAX_SAFE_INTEGER);
   if(navMeshStart == null) {
     console.error("The NPC couldn't find a valid starting NavMesh position!");
     return null;
   }
   const navMeshPath: NavMeshPath | null = this.navMesh!.getPath(navMeshStart, navMeshTarget);
   if(navMeshPath == null) {
     console.error("The NPC couldn't find a NavMesh path to the wanted destination!");
     return null;
   }
   // Return the array of Vec3 to use with NPC's moveToPositions method.
   return navMeshPath.waypoints;
 }
 // We move the NPC to a position close to the Banana and then grab it.
 async moveToBanana(): Promise<void> {
   // Calculate a position that is 1 meter away from the banana.
   const bananaPosition: hz.Vec3 = this.props.banana!.position.get();
   const npcPosition = this.npcPlayer!.position.get();
   const delta = npcPosition.sub(bananaPosition).normalize();
   const targetPosition = bananaPosition.add(delta);
   // Move to our target position with our locomotion options and await completion.
   const result: NpcLocomotionResult = await this.npcPlayer!.moveToPosition(targetPosition, this.moveOptions);
   // Check that moveToPostion was successful.
   if(result != NpcLocomotionResult.Complete) {
     console.error("Something went wrong trying to go to the Banana!");
     return;
   }
   this.grabBanana();
   this.deliverBanana();
 }
 // As long as the NPC has the banana, it will follow the Player but once the NPC is within 2 meters of the Player, it will drop the Banana.
 async deliverBanana(): Promise<void> {
   if(!this.hasBanana || this.player === undefined) {
     return;
   }
   // Find our path
   const destination: hz.Vec3 = this.props.customer!.position.get();
   const path: hz.Vec3[] | null = this.getPathFromNavMesh(destination);
   if(path == null) {
     return;
   }
   console.log("Delivering the Banana!");
   const result: NpcLocomotionResult = await this.npcPlayer!.moveToPositions(path, this.moveOptions);
   if(result != NpcLocomotionResult.Complete) {
     console.error("The NPC failed to deliver the Banana!");
     return;
   }
   this.dropBanana();
 }
 // Check if the NPC isn't currently holding anything and if not, grab the Banana.
 grabBanana(): void {
   // getGrabbedEntity returns undefined if the NPC isn't holding anything.
   if(this.npcPlayer!.getGrabbedEntity(hz.Handedness.Right) == undefined) {
     // Pick up the banana.
     this.npcPlayer!.grab(hz.Handedness.Right ,this.props.banana!);
     this.hasBanana = true;
     console.log("Banana Acquired!");
   }
 }
 dropBanana(): void {
   if(this.npcPlayer!.getGrabbedEntity(hz.Handedness.Right) == undefined) {
     console.error("NPC isn't holding the Banana!");
     return;
   }
   // Drop the banana.
   this.npcPlayer!.drop(hz.Handedness.Right);
   this.hasBanana = false;
 }
}
hz.Component.register(NavMeshExample);
```