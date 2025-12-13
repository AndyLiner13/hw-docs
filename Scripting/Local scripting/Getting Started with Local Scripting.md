Source: https://developers.meta.com/horizon-worlds/learn/documentation/typescript/local-scripting/getting-started-with-local-scripting

# Getting Started with Local Scripting

Horizon scripts are run on the server by default, enabling your world to maintain a consistent experience for all players. But, because scripts run on the server, script actions can experience latency and cause disruptions. To improve responsiveness within a world, you can convert your TypeScript logic to run in local scripting mode. This runs the script on the user’s device rather than on the server if the device owns the entity the script is bound to, enhancing overall performance.

## Set a script to run locally

To set your script to run in local scripting mode in Desktop Editor, perform the following steps.

- In Desktop Editor, select **Scripts** in the menu bar to open the Scripts panel.
  <details>
  <summary>Image Content</summary>
  
  <p></p>
  
  [All image details and metadata](../../image_data/4567850c82ba3763d945a2c67a470e9b3897a96e7103a58d910e96d79ea42e14.md)
  
  ### Overview
  The image displays a user interface (UI) window divided into two main sections: "Hierarchy" on the left and "Scripts" on the right. The background is dark-themed, suggesting a software application interface, possibly related to game development or asset management.
  
  ### Key Elements
  - **Hierarchy Section**:
    - **Visual description**: A vertical pane with a search bar at the top.
    - **Location**: Left side of the window.
    - **Contents**: Contains items listed as "SpawnPoint," "Wedge," and "TS_LocalPointer."
    - **Visual styling**: Dark background with white text and icons.
  
  - **Scripts Section**:
    - **Visual description**: A vertical pane with a search bar at the top.
    - **Location**: Right side of the window.
    - **Contents**: Displays a script named "TS_LocalPointer" with a timestamp indicating it was last updated 3 minutes ago.
    - **Visual styling**: Dark background with white text and icons.
  
  - **Search Bar**:
    - **Visual description**: A rectangular search bar located at the top of both panes.
    - **Location**: Top of the "Hierarchy" and "Scripts" sections.
    - **Contents**: Placeholder text "Search hierarchy" in the "Hierarchy" pane and "Search scripts" in the "Scripts" pane.
    - **Visual styling**: Dark background with white text.
  
  - **Buttons**:
    - **Visual description**: Small icons and buttons located at the top of the "Hierarchy" pane.
    - **Location**: Top-left corner of the "Hierarchy" pane.
    - **Contents**: Icons for expanding/collapsing the pane, filtering options, and other settings.
    - **Visual styling**: White icons on a dark background.
  
  - **Timestamp**:
    - **Visual description**: Text indicating the last update time.
    - **Location**: Below the "Scripts" search bar.
    - **Contents**: "Last updated 3 minutes ago."
    - **Visual styling**: White text on a dark background.
  
  ### Visual Flow / Relationships
  - **Most prominent visually**: The search bars at the top of both sections.
  - **Arrows/lines/connectors**: None visible.
  - **Spatial relationships**: The "Hierarchy" and "Scripts" sections are adjacent and vertically stacked within the window.
  
  </details>
  
  <p></p>
  
  
- Click the more options menu of your script and change the **Script Execution Mode** from **Default** to **Local**.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/f6efb42a84c29c19e11cea3f584a65e40a76f6f5a0104d587d34503c66216bbe.md)

### Overview
The image displays a user interface element within a software application, specifically a dropdown menu that appears when interacting with a specific area of the interface. The dropdown contains several options related to script execution and management.

### Key Elements
- **Dropdown Menu**: A black rectangular dropdown menu with white text, located centrally in the image.
  - **Recompile**: Option labeled "Recompile" with no additional text or icon.
  - **Open in External Editor**: Option labeled "Open in External Editor" with no additional text or icon.
  - **Execution Mode**: Option labeled "Execution Mode" with a right-pointing arrow indicating a dropdown or expandable menu.
    - Sub-options under "Execution Mode": "Default" and "Local," both with checkmarks next to them.

- **Background**: The background is a gradient transitioning from dark blue at the top to lighter blue at the bottom, suggesting a window or panel within the application.

- **Left Panel**: On the left side, there is a sidebar labeled "Scripts." It includes a search bar, a plus sign for adding new scripts, and a gear icon for settings. Below this, there is a script named "TS_LocalPointer" with a timestamp indicating it was saved and compiled six minutes ago.

- **Top Bar**: At the very top, there is a small icon resembling a browser tab with a forward arrow, likely indicating navigation functionality.

### Visual Flow / Relationships
- **Most Prominent Element**: The dropdown menu is the most prominent feature due to its central placement and larger size compared to surrounding elements.
- **Spatial Relationships**: The dropdown menu is positioned below the "Execution Mode" option and to the right of the "Scripts" panel. There are no arrows or lines connecting elements, but the layout suggests a logical flow from the "Scripts" panel to the dropdown menu.

</details>

<p></p>



## Entity ownership

To better understand how local vs. server-side scripting interacts with entity ownership, see the [Ownership in Meta Horizon Worlds](Ownership%20in%20Meta%20Horizon%20Worlds.md) docs.

With your script set to local scripting mode, your code runs locally when the entity with the attached local script transfers ownership from the server to a player. Entity ownership changes in the following cases:

* A script transfers ownership of the entity to a player using CodeBlock events.
* The entity is grabbed by a player.
* The entity collides with a player or an entity running locally for that player.

**Note** : When a world loads for a user for the first time, and local scripting mode is enabled on a script, the script initially runs on the server before transferring to a user’s device.

When entity ownership is transferred, the following applies to local scripts running on that entity:

### The `start()` method is called

When an entity changes ownership, the local runtime calls the `start()` method for the local script attached to that entity. During this time, any events fired off before or during this transfer are lost, including those sent with a delay. Throughout this event, your script can reset itself upon this ownership change.

### Entity properties aren’t changed

On transfer, any entity properties and script variables revert back to their default values. This can cause issues in cases where an object has a set number of uses or is personalized for the player. To avoid this, you should persist this information separately, updating the appropriate values when ownership is transferred using events.

### Behaviors to note

#### `OnPlayerExitWorld` isn’t received by local scripts

If a local script subscribes to `OnPlayerExitWorld` , it won’t receive that event if the player that owns the script leaves the world. If your local script processes this event, you must set a script to **Default Execution** mode so it can track the event and then notify your local script.

#### `OnPlayerEnterWorld` and `OnPlayerExitWorld` aren’t received by local scripts

If a local script subscribes to the `OnPlayerEnterWorld` and `OnPlayerExitWorld` events, it won’t receive those events if the player toggles between preview and build mode in World Builder. If your local script processes these events, you must set a script to **Default Execution** mode so it can track the events and then notify your local script.

#### `OnGrabEnd` and `OnAttachEnd` aren’t received when owner exits world

If a player exits the world while holding a local entity, the `OnGrabEnd` and `OnAttachEnd` events are no longer sent to that entity. If your entity has logic to perform on these events, you should create a default script to track them and notify the entity with the appropriate `OnGrabEnd` or `OnAttachEnd` events.

**Note:** When the player exits the world, local scripts for that player will run on the server instead of locally.

#### Persistent Variables API is inaccessible in local scripts

The Persistent Variables API is only available for default scripts. If your local script must send or receive data from the Persistent Variables store, you should send an event to an object running a default script to process the request.

#### Local scripts can’t listen for local events received by default scripts (and vice versa)

If your scripts are listening to objects for events, be aware that local scripts can’t listen for local events received by default scripts and vice versa. If you need to handle local  events received by other objects, these objects must communicate directly when they receive local events.

#### Local events can only communicate with local events with the same owner

Local events can only communicate with events owned by the same player. If you have an object owned by different players, they must use CodeBlock events to communicate with each other.

#### Local scripts can’t trigger asset spawning

Due to security and integrity concerns, local scripts can’t trigger asset spawning. All asset spawning must be triggered on the server.

#### Local scripts can’t access texture assets

Similar to the case of asset spawning, local scripts cannot access or use texture assets. If you want to set a new UI-optimized texture for an entity, you must send an event to a default script and let it trigger the API call.