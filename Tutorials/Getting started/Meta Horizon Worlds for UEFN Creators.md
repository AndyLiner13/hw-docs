Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/getting-started/meta-horizon-worlds-for-uefn-creators

# Meta Horizon Worlds for UEFN Creators

This article serves as the starting point for creators that are making the switch from UEFN to Horizon. While some aspects may seem unfamiliar, there are core concepts that translate from one platform to the other. This guide will provide comparisons and recommendations for the following:

* Project structure, iteration and collaboration
* Navigating the editor
* Managing content and assets
* Translating UEFN actor and device framework to Horizon entity and component structure

## Primary Horizon features

Horizon specifically has some features that stand out compared to UEFN that any creator should take into consideration when choosing which platform to develop on.

* The Horizon Desktop Editor is light weight, coming in under 2GB to install. Updates occur on a weekly cadence.
* Horizon Worlds on mobile and desktop are streamed in. Players do not need to wait for the world to download before playing, and visual fidelity is the same across all mobile and desktop devices.
* VR with the Quest family of devices is a supported platform for Horizon.
* Experimental GenAI features for generating game content such as 3D models, skyboxes, textures, sound effects and ambient audio.

# Epic Games Launcher -> Horizon Desktop Editor

The Horizon Desktop Editor is the starting point for managing existing worlds, viewing documentation, exploring tutorials and templates and more. It is the equivalent of both the Epic Games Launcher and the UEFN editor bundled into one. [The Horizon Desktop Editor can be installed](../../Get%20started/Install%20the%20desktop%20editor.md) either standalone or through the Meta Quest Link app (if developing for VR).

<details>
<summary>Horizon Creation Home</summary>

<p></p>

[Horizon Creation Home](../../image_data/8dca33bff582ce22a1a64c7017761e8719c1936c739678fe881f4e8a278aa177.md)

### Overview
The image depicts a user interface of a desktop application named "Worlds Desktop Editor." It appears to be a creation tool for building worlds within Meta Horizon Worlds. The layout includes a sidebar menu, a main content area with sections for tutorials, templates, and world creations, and a promotional banner at the top.

### Key Elements
- **Sidebar Menu**: Located on the left side, with options such as "Home," "My worlds," "Tutorials," "Templates," and "Documentation." The "Home" option is highlighted in blue, indicating the current selection.
- **Main Content Area**: Occupies the right side of the screen, divided into sections.
  - **Promotional Banner**: At the top, a banner promotes the Meta Horizon Creator Program with a call-to-action button labeled "Join now."
  - **Getting Started Section**: Contains four tiles, each representing a different starting point for creators. The tiles include:
    - "Start Here" with an image of a character and the text "How to create your first world."
    - "Explore resources and forums" with an image of characters and the text "Unleash your imagination, build your business, and watch your creations grow."
    - "Apply to MHCP" with an image of characters and the text "Gain access to earning opportunities for your creations, helpful resources, a vibrant community, dedicated support, and more."
    - "Get started with documentation" with an image of a cityscape and the text "Learn what it means to be a creator and why you should create for Meta Horizon Worlds."
  - **My Worlds Section**: Displays a grid of world thumbnails with titles and edit timestamps. Examples include "Escape Room Vertical Slice," "Rooftop Racers," "WeaponsTutorial," and "Custom UI Examples."
  - **Tutorials Section**: Below the "My Worlds" section, there are tiles for various tutorials such as "Build Your First Game," "Custom UI Examples," "Simple Shooting Mechanics," and "Spawning and Pooling in TypeScript."

### Visual Flow / Relationships
- **Most Prominent Element**: The "Start Here" tile in the "Getting started" section is the most prominent due to its placement and the "Start Here" button overlay.
- **Arrows/Connectors**: There are no explicit arrows or connectors in the layout.
- **Spatial Relationships**: Elements are arranged in a grid-like structure, with the sidebar menu on the left and the main content area on the right. The promotional banner spans the width of the main content area above the "Getting started" section.

</details>

<p></p>



## Editor comparisons

The Horizon Desktop Editor is the application used for creating games and experiences. Once in Creation Home, you can create a new world or select an existing world to load into. The editor is similar to that in UEFN, though with some notable differences:

* The Horizon project hub and the editor are all bundled into one application, and do not require separate installs.
* Testing a Horizon game can be done fully in editor for non-VR applications. There is no separate client that is created.
* Creating scripts goes through the specific scripts menu in the top toolbar, not through the asset library.
* The Horizon Asset Library shows not only the creator’s own assets, but those that are publicly available for use and created by external creators.

Otherwise, Horizon shares much of the same functionality such as:

* A top toolbar that has menus for placing objects into the scene, managing project settings, and playing the game.
* A hierarchy view that shows all the objects that are physically placed into the world.
* A properties panel that shows the details of an object when it is selected.
* A scene view that shows the 3D view of the world.
* An asset library that shows both the creator’s library of assets, as well as assets created by external creators.

<details>
<summary>Horizon Editor comparison</summary>

<p></p>

[Horizon Editor comparison](../../image_data/777f90f06514f674563f30adee5205e650c9998fb0c42987e089f4fc76f57591.md)

### Overview
This image depicts a user interface of a 3D modeling or game development software, specifically showing a scene within a game environment. The interface is divided into several panels, each serving a specific function related to asset management, scene viewing, and property editing.

### Key Elements
1. **Hierarchy Panel (Left)**: A vertical panel displaying a tree-like structure labeled "Hierarchy." It lists various nodes such as "Environment," "LobbySpawnPoint," and others, indicating the structure of the game world. The highlighted node is "VictoryTrigger."

2. **Scene View (Center)**: The central area displays a 3D scene rendered in a game engine. The scene includes a building, a small blue cube, and some other structures. The scene is viewed from a slightly elevated angle, suggesting a rooftop perspective.

3. **Properties Panel (Right)**: This panel shows detailed properties of the currently selected object in the hierarchy, which is "VictoryTrigger." It includes attributes like position, rotation, scale, and behavior settings.

4. **Asset Library (Bottom Left)**: A panel labeled "Asset Library" contains a grid of assets, such as "Mobile Start," "chaise de jardin," "bar starwars," among others. These are likely game assets that can be dragged into the scene view.

5. **Navigation Bar (Top Center)**: Located at the top center, this bar includes icons for navigation and scene manipulation, such as play, pause, and zoom controls.

6. **Toolbars (Top Left and Top Right)**: These toolbars contain various icons and options for managing the scene, assets, and publishing the project.

7. **World Sim Off Toggle (Top Right)**: A toggle switch labeled "World Sim Off" is located near the top right corner, likely controlling the simulation mode of the scene.

### Visual Flow / Relationships
The interface is structured hierarchically, with the left panel providing a tree view of the scene structure, the center showing the actual scene, and the right panel offering detailed properties of selected objects. The bottom left panel provides access to assets, while the top center and top right offer tools for navigation and scene management.

</details>

<p></p>



| Index | UEFN | Horizon | Description |
| --- | --- | --- | --- |
| 1 | Outlier | Hierarchy View | Displays the entities that are present in the world |
| 2 | Viewport | Scene Window | Displays the world |
| 3 | Details | Properties | Displays the specific properties of the selected entity in the scene window |
| 4 | Content Browser | Asset Library | Displays reusable assets that can be used within the project |
| 5 | Main Menu | Menu + Creator Tools | Drop down menus for configuring project settings, placing gizmos, creating scripts and more |
| 6 | Play Controls | Play Controls | Controls for running and previewing the game within the editor |
| 7 | Viewport Controls | Scene Controls | Settings and controls for the scene, including snapping and camera speed |

# Engine concepts

## Terminology

While both UEFN and Horizon follow similar underlying concepts, the terminology is different. Below is an overview of the differences between these main concepts.

| UEFN | Horizon | Description |
| --- | --- | --- |
| GameObjects/Actor | Entity | The in-world representation of an object |
| Prefabs | Asset Templates | Reusable pieces of content |
| Devices | Gizmos | Entities that perform a specific function out of the box (such as colliders, triggers, spawn points). In UEFN, the creator can make custom devices. For Horizon, a custom script attached to an entity is the equivalent. |
| Verse | Typescript | The coding language used for scripting |

## Networking and ownership

Unlike UEFN, Horizon has a clear distinction of where (client vs server) and how scripts/components are run.

* Scripts are marked as Default (runs on server) or Local (runs on client).
* Default scripts will never run on the client. Clients have no visibility into the logic or properties that are stored on those scripts.
* Client scripts will initially run on the server, until their owning entity gets assigned a client owner. At that time the script will only run locally on the owning client, and no other instance will have visibility into its logic or properties.
* To check if a script is currently running on the server or client, compare the world local player to the world server player.

Due to the Horizon networking model, it is up to the creator to manage the state of components when they change ownership between server and client. See the following [documentation](../../Scripting/Local%20scripting/Maintaining%20Local%20State%20on%20Ownership%20Change.md) on managing local state for more information.

## Gameplay structure

Within UEFN, the standard gameplay structure is to connect devices together with existing Fortnite items and functionality. Additionally, UEFN also supports component-based design, where in custom coded components are attached to entities to give them behavior. Horizon is similar except that:

* Only one script can be attached to an entity.
* Scripts can either by default or local, but not both.
* Out of the box, Horizon does not have the same quantity of gameplay systems as UEFN does, specifically for things such as weapons and inventory.
* While UEFN contains predefined player and game settings that can be configured in separate menus, the ones that Horizon has are more limited. Creators will need to implement their own features for teams, friendly fire, game loop, and so on.
* Horizon uses the propsDefinition type within a component to expose variables that can be modified in the editor.
* There is no concept of a customizable player object that scripts can be attached to. Creators will need to make their own systems to track players and associate data/logic with them, for example using a singleton approach with the PlayerEnter/ExitWorld events.

### Object communication

With UEFN, the preferred approach for communication between objects/actors is to either fetch a component on the object, or the event binding system. In Horizon, the preferred approach is through [local or network events](../../Scripting/Events/Events%20Best%20Practices.md). Horizon also has an API to fetch a component on an entity by a class type, however note that this will return nothing if the component is on the server and the API was called on a client (and vice versa). Some important event distinctions to remember are:

* Events only exist in code, and must be defined and hooked up there.
* Events are not specific to an object. They are defined externally from it. Any entity can send and register for any event.
* NetworkEvents are the only way for entities on different instances to communicate with each other.
* Horizon comes with a variety of events out of the box.
  + [The update event](../../Scripting/Events/World%20Update%20Events.md) must be explicitly registered for if the entity wants to receive update ticks.

## TypeScript

In Horizon, Typescript is the language used for coding. The language provides standard object oriented, statically typed functionality and should be an easy transition for anyone who has worked with JavaScript. The main limitation in Typescript to be aware of is that there is no safe run time casting of objects.

# Developer workflow

Horizon is a collaborative platform that allows developers to work together on the same world, similar to UEFN. However, there are a few important differences to keep in mind.

* Horizon only offers version control for asset templates, and the world itself (through snapshots). There is no version control specifically for scripts or being able to compare differences between snapshots or asset versions.
* Horizon allows for collaborators with edit permissions, and playtesters with view permissions to be added to the world. Note that there are limits to how many other people can be added to the project. See the [collaborator documentation](../../Desktop%20editor/Get%20started%20with%20Desktop%20Editor/Collaborator%20Management.md) for more information.
* Horizon does not have any concept of branches or workspaces for individual developers. Instead, the recommended approach for a developer working on a new feature is to clone the world, do their development work there, and then manually merge the changes back in.

## Custom content

Horizon allows a [variety of different asset types to be imported](../../Desktop%20editor/Assets/Creating,%20importing,%20viewing,%20and%20spawning%20assets.md) into the engine for use within the world. However, there is no current guarantee that assets used with UEFN will work within Horizon. Verse scripts cannot be imported directly into Horizon. Any gameplay logic written within UEFN will need to be re-written for Horizon.

## Playtesting

Horizon offers multiple ways to playtest your world on desktop, mobile, and VR. The first step to playtesting is to publish your world. Make sure to mark it as invisible to the public.

<details>
<summary>Horizon Publish World</summary>

<p></p>

[Horizon Publish World](../../image_data/d6040fd9d7a522c05fd71a78f701272d7e759de7e1fd4127af5e55f48b8648d3.md)

### Overview
This image depicts a user interface for publishing a world, likely within a platform that allows users to create and share content such as games or experiences. The interface includes various fields and options for configuring the world before publication.

### Key Elements
- **Thumbnail**: A preview image of the world titled "Rooftop Racers," described as a "Sample Parkour Racing Game." The thumbnail is located at the top-left corner.
- **Status**: Displays "Unpublished" indicating the current status of the world.
- **Name**: The name field contains "My Rooftop Racers" with a character limit of 17 out of 60 characters.
- **Description**: A text area labeled "What can people do in your world?" is partially filled with placeholder text.
- **World options**: Includes checkboxes for "Beta label," "Members-only world," and "Optimized for Web and Mobile."
- **Publishing options**: Includes fields for rating, tags, availability, comfort rating, mute assist, visibility, and a "Publish" button at the bottom right.
- **Buttons**: "Save for later" and "Publish" buttons are present at the bottom of the interface.

### Visual Flow / Relationships
The interface is structured with a clear hierarchy. The thumbnail is the most prominent visual element, followed by the name and description fields. The publishing options are arranged vertically on the right side, with the "Publish" button being the most prominent interactive element.

</details>

<p></p>



Once a world is published, that specific published version is what will be available to playtest. More information on the publishing flow can be found [here](../../Save,%20optimize,%20and%20publish/Publish%20your%20world.md). Some important steps to keep in mind:

* A player must be added to your world as either a collaborator or playtester to be able to playtest your game.
* You can continue making changes in the world without affecting the playtest. The changes will only propagate once you publish again.

For easy access to playtest builds, use the preview actions found under the preview configuration drop down at the top of the editor.

<details>
<summary>Horizon Preview Actions</summary>

<p></p>

[Horizon Preview Actions](../../image_data/506f4d5fff420641cfb50d74fae8994be76b5364c5d79464225c0edf9c55666a.md)

### Overview
This image depicts a settings panel titled "Preview Configuration." It contains various configuration options related to previewing simulations within a software interface. The layout is structured with toggle switches, dropdown menus, and buttons for preview actions.

### Key Elements
- **Title**: "Preview Configuration" located at the top-center of the panel.
- **Toggle Switches**:
  - "Auto-start simulation on Preview entry" located in the upper-left area.
  - "Auto-stop simulation on Preview exit" located slightly below the first toggle switch.
- **Dropdown Menu**:
  - "Preview device" located near the middle-left side of the panel.
  - The dropdown menu is set to "Web."
- **Checkbox**:
  - "UI safe zone overlay" located below the dropdown menu.
  - The checkbox is unchecked.
- **Buttons**:
  - "Preview actions" located at the bottom-right corner of the panel.
  - Three circular icons are present under the "Preview actions" label.

### Visual Flow / Relationships
The most prominent visual elements are the toggle switches and the dropdown menu. The toggle switches are aligned horizontally above the dropdown menu. The "Preview device" dropdown is positioned to the right of the toggle switches. The "UI safe zone overlay" checkbox is placed below the dropdown menu. The "Preview actions" buttons are aligned horizontally at the bottom-right corner. There are no arrows or lines connecting the elements, suggesting a linear reading order from top to bottom and left to right.

</details>

<p></p>

