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

[Horizon navmesh](../../../../../images/output/img_20251211_070953_20251211_070953.md)

### Overview
This image depicts a settings interface titled "Script Settings." It is a window with a sidebar menu on the left and a main content area on the right. The main content area is divided into sections labeled "API," "Console," and "Script editing." The focus is on the "API" section, which lists various API endpoints with toggle switches next to them.

### Key Elements
- **Sidebar Menu**: Located on the left side, with options "API," "Console," and "Script editing." The "API" option is highlighted, indicating it is currently active.
- **API Section**: On the right, under the "API" heading, it lists several API endpoints such as "horizon/in_world_analytics," "horizon/internal," "horizon/mobile_gestures," "horizon/navmesh," "horizon/npc," "horizon/performance," "horizon/social," "horizon/test_bridge," and "horizon/testing." Each endpoint has a toggle switch next to it.
- **Toggle Switches**: These are located to the right of each API endpoint. They are white squares with blue borders, indicating whether the API is enabled or disabled.
- **Highlighted API Endpoint**: The "horizon/navmesh" API endpoint is highlighted with a red rectangle, suggesting it is the current selection or focus.
- **Buttons**: At the bottom of the interface, there are two buttons labeled "Cancel" and "Apply."

### Visual Flow / Relationships
The most prominent visual element is the "horizon/navmesh" API endpoint, as indicated by the red highlight. The toggle switch next to it is in the "on" position, showing that this API is enabled. The "Cancel" and "Apply" buttons at the bottom suggest that changes can be canceled or applied after making selections.

</details>

<p></p>



Use the following process to setup and generate nav meshes that can be accessed with the NavMesh API:

- In the **Systems** menu, click **Navigation** to open the **Navigation Profiles** menu. This menu lists any navigation profiles defined for your world and allows you to create new ones.
- Click the **+** button to begin creating a new profile.
  <details>
<summary>Create profile</summary>

<p></p>

[Create profile](../../../../../images/output/img_20251211_071050_20251211_071050.md)

### Overview
The image depicts a user interface section within a software application, specifically related to navigation profiles. The interface includes tabs at the top, a search bar, and a central area for creating new profiles.

### Key Elements
- **Navigation Profiles Header**: Located at the top-left, the text "Navigation Profiles" is displayed prominently.
- **Search Bar**: Positioned below the header, it has a magnifying glass icon on the left side.
- **Create Profile Button**: A red-highlighted button with a plus sign (+) and the text "Create Profile" is situated to the right of the search bar.
- **Tabs**: At the very top, there are several tabs labeled "Build," "Systems," "Preview," "Scripts," and "General."
- **Variable Groups Dropdown**: To the right of the "Navigation" tab, there is a dropdown menu labeled "Variable Groups."
- **Quests Dropdown**: Adjacent to the Variable Groups dropdown, another dropdown labeled "Quests" is present.
- **Icon and Text Below**: A simple walking figure icon is centered below the search bar, accompanied by the text: "Create navigation profiles here, then use scripts to add pathfinding to your world."

### Visual Flow / Relationships
The most prominent visual element is the "Create Profile" button, as it is highlighted and centrally located. The layout suggests a linear reading order moving from left to right across the top, then downward to the central content area.

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

[Navigation profiles window](../../../../../images/output/img_20251211_071201_20251211_071201.md)

### Overview
This image depicts a user interface section of a software application focused on navigation profiles. The layout includes a search bar, a plus sign for adding new items, a wrench icon for settings, and a shuffle icon for rearranging items. There is also a list of navigation profiles with a specific entry highlighted.

### Key Elements
- **Search Bar**: Located at the top-left, it has a magnifying glass icon and spans horizontally across the width of the search area.
- **Plus Sign**: Positioned to the right of the search bar, it is a simple '+' symbol.
- **Wrench Icon**: Situated next to the plus sign, it resembles a gear and is likely for settings.
- **Shuffle Icon**: To the far right, it features two arrows pointing up and down, suggesting the ability to reorder items.
- **Navigation Profiles List**: Below the search bar, it displays 'Navigation Profiles (1/100)' indicating the total number of profiles available. A single profile named 'Test nav mesh' is shown, along with a description 'Nav mesh test input'. An orange icon with a walking figure is displayed to the left of the profile name.
- **Tabs**: At the very top, there are three tabs labeled 'Navigation', 'Quests', and 'Variable Groups'.

### Visual Flow / Relationships
The most prominent visual elements are the search bar, the plus sign, and the wrench icon, as they are the primary interactive components. The navigation profiles list is secondary but important for content display. The tabs at the top provide context for the current view within the application.

</details>

<p></p>



After creating a profile, you can add the **Navigation volume** gizmo to your world to define which areas are navigable.

To do so use the following process:

- After adding an NPC to your world and choosing its embodiment, select the dropdown arrow in the **Navigation** portion of the tool bar. In the menu, select **Navigation volume**. The Navigation volume will be used in order to determine what areas are navigable by the NPC. So you want to stretch this box out to cover the entire floor of what you want to be navigable.
  <details>
<summary>Navigation volume gizmo</summary>

<p></p>

[Navigation volume gizmo](../../../../../images/output/img_20251211_071301_20251211_071301.md)

### Overview
This image depicts a user interface section labeled "Navigation." It contains various icons representing different navigation-related functionalities, arranged in a grid layout. The interface includes a search bar at the top and tabs for different settings categories ("Navigation," "Display," "Interactions").

### Key Elements
- **Search Bar**: Located at the top, spanning across the width of the interface. It has a magnifying glass icon on the left side.
- **Tabs**: Three tabs are visible at the top: "Navigation," "Display," and "Interactions." Each tab has a small icon next to its name.
- **Icons and Labels**: Below the tabs, there are four icons arranged horizontally:
  - **Spawn Point**: A blue square with a white figure walking upwards and downwards.
  - **Door**: A pink square with a white door icon.
  - **Snap Destination**: A blue square with a white arrow pointing upwards and a circular pattern around it.
  - **SafeSpawnZ one**: A white cube with a black outline.
- **Navigation Volume**: A green square with a white figure walking, outlined with a red dashed border. Below it, the label "Navigation Volume" is written.

### Visual Flow / Relationships
The most prominent visual element is the "Navigation Volume" icon, as it is highlighted with a red dashed border. The icons are arranged in a grid-like fashion, with the search bar above them and the tabs at the very top. There are no arrows or lines connecting the elements, but the layout suggests a logical reading order from left to right and then down.

</details>

<p></p>


- Once your navigation volume is added and you can configure the **Volume Type** which controls whether it is an **Inclusion** or **Exclusion** navigation volume. Setting the volume to **Exclusion** cuts the covered area out from any generated navigation mesh.
  <details>
<summary>Navigation volume settings</summary>

<p></p>

[Navigation volume settings](../../../../../images/output/img_20251211_071352_20251211_071352.md)

### Overview
This image depicts a user interface element within a settings or configuration menu. It shows a dropdown selection for "Navigation Volume" settings, with options for "Inclusion" and "Exclusion."

### Key Elements
- **Navigation Volume Label**: Located at the top-left, white text on a dark background.
- **Volume Type Label**: Below the main label, smaller white text indicating a secondary setting option.
- **Navigation Profile Label**: Further down, another smaller white text option.
- **Dropdown Menu**: Positioned to the right of the main label, with a dark background and light text showing "Inclusion" as the selected option.
- **Inclusion Option**: Highlighted with a checkmark, indicating it is currently selected.
- **Exclusion Option**: Visible but not selected, shown below the Inclusion option.

### Visual Flow / Relationships
The most prominent visual element is the dropdown menu, which is the focal point of interaction. The labels are arranged vertically, with the dropdown menu extending downward from the main label. The selected option is visually distinct due to the checkmark.

</details>

<p></p>


  Exclusion is useful for in-world assets that shouldn’t affect NPC navigation like doors.
- Next, set what the created navigation volume applies to. Use **Navigation Profile** and select a created navigation profile or set to **All** to apply to all entities.
  <details>
<summary>Navigation profile</summary>

<p></p>

[Navigation profile](../../../../../images/output/img_20251211_071456_20251211_071456.md)

### Overview
This image depicts a user interface element showing a dropdown menu within a navigation profile section. The dropdown is open, revealing two options: "Island man" and "All". There is also a collapsed section labeled "Gameplay Tags" with a search bar below it.

### Key Elements
- **Navigation Profile Header**: Located at the top-left, the header reads "Navigation Profile" in a lighter gray font against a darker gray background.
- **Dropdown Menu**: Positioned to the right of the header, the dropdown menu has a dark gray background with white text. It contains two options: "Island man" and "All", both written in white. The option "Island man" is checked, indicated by a filled checkmark next to it.
- **Gameplay Tags Section**: Below the header, there is a section titled "Gameplay Tags" with a dark gray background and white text. A downward arrow icon is located to the left of the title, suggesting that this section can be expanded or collapsed.
- **Search Bar**: At the bottom of the "Gameplay Tags" section, there is a search bar with a magnifying glass icon on the left side and placeholder text "Search attached tags".

### Visual Flow / Relationships
The most prominent visual element is the dropdown menu, as it is open and clearly displayed. The dropdown menu is positioned to the right of the "Navigation Profile" header. The "Gameplay Tags" section is below the header, and the search bar is part of the "Gameplay Tags" section. The layout suggests a hierarchical structure where the dropdown menu is a secondary element under the "Navigation Profile" header.

</details>

<p></p>



Once you have created and defined profiles and navigation volume gizmos for your world, the next step is to build the meshes for each profile. Alternatively, this is called “baking” the navigation mesh.

Navigate to **Systems > Navigation** and select **Bake All**.

<details>
<summary>Bake All</summary>

<p></p>

[Bake All](../../../../../images/output/img_20251211_071548_20251211_071548.md)

### Overview
This image depicts a user interface element titled "Navigation Profiles." It includes a search bar, a button labeled "Bake All," and a list item showing a navigation profile named "Island man."

### Key Elements
- **Search Bar**: Located at the top-left, it has a magnifying glass icon and is empty.
- **Add Button**: Positioned to the right of the search bar, it is a plus sign within a rounded rectangle.
- **Settings Icon**: Situated next to the add button, it resembles a wrench and spanner.
- **Bake All Button**: A black rectangular button with white text that reads "Bake All."
- **Navigation Profile List**: Below the search bar, it displays "Navigation Profiles (1/100)" followed by a list item labeled "Island man" with a subtitle "Island man nav mesh." An orange icon with a walking figure is placed to the left of the list item.

### Visual Flow / Relationships
The most prominent visual element is the "Bake All" button due to its placement and contrasting color. The search bar and settings icon are secondary elements, while the navigation profile list item is tertiary. There are no arrows or lines connecting elements, but the layout suggests a linear reading order from left to right and then downward.

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