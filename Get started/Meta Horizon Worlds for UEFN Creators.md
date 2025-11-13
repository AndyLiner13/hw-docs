Source: https://developers.meta.com/horizon-worlds/learn/documentation/get-started/meta-horizon-worlds-for-uefn-creators

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

The Horizon Desktop Editor is the starting point for managing existing worlds, viewing documentation, exploring tutorials and templates and more. It is the equivalent of both the Epic Games Launcher and the UEFN editor bundled into one. [The Horizon Desktop Editor can be installed](/hw-docs/Get%20started/Install%20the%20desktop%20editor.md) either standalone or through the Meta Quest Link app (if developing for VR).

![Horizon Creation Home](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/546218067_811522964718990_2334895237106097278_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=rE-auNb7v14Q7kNvwG9Jl7l&_nc_oc=AdkFMo5a1GdoLKBqf63lOuYeo9kd2ZpeCxtlEEBGTSWl99nbYy-vokEQpzGpwWvjNvg&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=_2bNCcbp-TV61ku3amjFeA&oh=00_AfhIuoqzDAH2GUEXeMkMSNrTun0TnsAdy9w-JQunyDKiyg&oe=692FBFAC)

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

![Horizon Editor comparison](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/545251985_811522958052324_6764831470634074968_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=OwS0n92bbrUQ7kNvwHnmEYF&_nc_oc=AdmhMO_D7hcMfQHMg6UqGgMjcyvHc7nZtOIRMfDpNpJkJP5m6gui37Hhx1XWR2iIjQk&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=_2bNCcbp-TV61ku3amjFeA&oh=00_AfgEP7xQxuiPe6cL4L2dh5OmkFVBl3UZu3W-0TEy0ZA9oA&oe=692FA861)

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

Due to the Horizon networking model, it is up to the creator to manage the state of components when they change ownership between server and client. See the following [documentation](/hw-docs/Scripting/Local%20scripting/Maintaining%20Local%20State%20on%20Ownership%20Change.md) on managing local state for more information.

## Gameplay structure

Within UEFN, the standard gameplay structure is to connect devices together with existing Fortnite items and functionality. Additionally, UEFN also supports component-based design, where in custom coded components are attached to entities to give them behavior. Horizon is similar except that:

* Only one script can be attached to an entity.
* Scripts can either by default or local, but not both.
* Out of the box, Horizon does not have the same quantity of gameplay systems as UEFN does, specifically for things such as weapons and inventory.
* While UEFN contains predefined player and game settings that can be configured in separate menus, the ones that Horizon has are more limited. Creators will need to implement their own features for teams, friendly fire, game loop, and so on.
* Horizon uses the propsDefinition type within a component to expose variables that can be modified in the editor.
* There is no concept of a customizable player object that scripts can be attached to. Creators will need to make their own systems to track players and associate data/logic with them, for example using a singleton approach with the PlayerEnter/ExitWorld events.

### Object communication

With UEFN, the preferred approach for communication between objects/actors is to either fetch a component on the object, or the event binding system. In Horizon, the preferred approach is through [local or network events](/hw-docs/Scripting/Events/Events%20Best%20Practices.md). Horizon also has an API to fetch a component on an entity by a class type, however note that this will return nothing if the component is on the server and the API was called on a client (and vice versa). Some important event distinctions to remember are:

* Events only exist in code, and must be defined and hooked up there.
* Events are not specific to an object. They are defined externally from it. Any entity can send and register for any event.
* NetworkEvents are the only way for entities on different instances to communicate with each other.
* Horizon comes with a variety of events out of the box.
  + [The update event](/hw-docs/Scripting/Events/World%20Update%20Events.md) must be explicitly registered for if the entity wants to receive update ticks.

## TypeScript

In Horizon, Typescript is the language used for coding. The language provides standard object oriented, statically typed functionality and should be an easy transition for anyone who has worked with JavaScript. The main limitation in Typescript to be aware of is that there is no safe run time casting of objects.

# Developer workflow

Horizon is a collaborative platform that allows developers to work together on the same world, similar to UEFN. However, there are a few important differences to keep in mind.

* Horizon only offers version control for asset templates, and the world itself (through snapshots). There is no version control specifically for scripts or being able to compare differences between snapshots or asset versions.
* Horizon allows for collaborators with edit permissions, and playtesters with view permissions to be added to the world. Note that there are limits to how many other people can be added to the project. See the [collaborator documentation](/hw-docs/Desktop%20editor/Get%20started%20with%20Desktop%20Editor/Collaborator%20Management.md) for more information.
* Horizon does not have any concept of branches or workspaces for individual developers. Instead, the recommended approach for a developer working on a new feature is to clone the world, do their development work there, and then manually merge the changes back in.

## Custom content

Horizon allows a [variety of different asset types to be imported](/hw-docs/Desktop%20editor/Assets/Creating,%20importing,%20viewing,%20and%20spawning%20assets.md) into the engine for use within the world. However, there is no current guarantee that assets used with UEFN will work within Horizon. Verse scripts cannot be imported directly into Horizon. Any gameplay logic written within UEFN will need to be re-written for Horizon.

## Playtesting

Horizon offers multiple ways to playtest your world on desktop, mobile, and VR. The first step to playtesting is to publish your world. Make sure to mark it as invisible to the public.

![Horizon Publish World](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/545673526_811522954718991_5394657970832061088_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=bdqbg3X8mtAQ7kNvwE8POiw&_nc_oc=AdnPcTjM47ZnF0FHoMq6MY7ICvPpn9avhFU6ka2yv52u1-JNVp-28YdsMZPNQuc_XnE&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=_2bNCcbp-TV61ku3amjFeA&oh=00_AfjmGHvtxdSGsMkEZM-Ad8UCB3hpXqpb7xdEBGGz-C2dng&oe=692FB419)

Once a world is published, that specific published version is what will be available to playtest. More information on the publishing flow can be found [here](/hw-docs/Save,%20optimize,%20and%20publish/Publish%20your%20world.md). Some important steps to keep in mind:

* A player must be added to your world as either a collaborator or playtester to be able to playtest your game.
* You can continue making changes in the world without affecting the playtest. The changes will only propagate once you publish again.

For easy access to playtest builds, use the preview actions found under the preview configuration drop down at the top of the editor.

![Horizon Preview Actions](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/547194483_811522961385657_2537791522362502658_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=huIjWm6dFZEQ7kNvwEUCpqI&_nc_oc=Adn-PTQvaGXk9nbPOcGRBokNofLw4FbKPrJDKbimo65wEoByaF_LP-X_Y--uFSLluHo&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=_2bNCcbp-TV61ku3amjFeA&oh=00_Afipq072gb-by0eHhAKVzZV7Rd1RQvVEX0tIPp_lqUjqOQ&oe=692FA53F)