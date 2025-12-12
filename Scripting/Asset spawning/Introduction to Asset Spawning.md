Source: https://developers.meta.com/horizon-worlds/learn/documentation/typescript/asset-spawning/introduction-to-asset-spawning

# Introduction to Asset Spawning

Asset spawning and despawning allows creators to instantiate and destroy objects at runtime. It does this through scripts powered by CodeBlocks and TypeScript. When objects are tied to Assets pulled from the creator’s Asset Library, it enables objects to be spawned so users can interact with them to perform in-world actions.

## Considerations

Before deciding to add object spawning to a world, there are a few questions you’ll want to answer to determine if object spawning and despawning benefits or detracts from your world’s experience. Spawning and despawning has a performance cost at runtime, especially when objects are spawned in quick succession. Consider the following:

* How often will objects need to be created or removed for the experience?
* How many object variations does the world require?
* Do certain objects need to persist for the entire world experience?

**Note:** See the Optimization Tips near the end of this document for information on improving performance.

## Implementing SpawnController

The SpawnController object is a container for managing the spawning and despawning of assets. You create a SpawnController object to contain a specified asset, including position, rotation, and scale:

```
// Controls the asset spawn
spawnController!: SpawnController;

this.spawnController = new SpawnController(
  myAsset,
  myPosition,
  myRotation,
  Vec3.one
  );
```

The SpawnController contains:

* The asset you’d like to spawn (myAsset)
* The position for the spawned object as a Vec3 (myPosition)
* The rotation for the spawned object as a Quaternion (myRotation)
* The scale of the spawned object as a Vec3 (Vec3.one)

A full example is listed below.

After the SpawnController has been defined for the asset, the following methods can be applied on the object:

| **Method** | **Description** |
| --- | --- |
| load() | Loads the asset specified in the SpawnController object into runtime memory. |
| spawn() | Spawns the asset from runtime memory into the location specified when you created the SpawnController object. If the load() method has not been called yet, it is automatically called before spawn(). The combined call to load() and spawn() is much longer than just calling spawn() by itself. |
| unload() | Unloads the SpawnController entity from the world. A reference to the spawn entity remains. The spawn entity can be reused by calling again the load() method. |
| dispose() | Destroys the SpawnController object. |

### Performance notes

The load() method performs 0.5 ms/frame of spawning work, while spawn() performs 5 ms/frame of spawning work.

If load() finished before calling spawn(), then the spawn() call has almost nothing left to do. To finish the spawning, the spawn() method enables and makes visible the entity at the specified location in a single frame and waits for lighting of the entity to begin.

## Asset Spawning and Despawning Example

The following TypeScript example demonstrates how to spawn and despawn a wall when the player steps on a trigger. The code:

- Creates the asset variable `wallAsset` in the script.
- Declares two CodeBlockEvents: one to trigger spawning, and the other to trigger despawning.
- Creates a `SpawnController` to control the spawning of the asset.
- Uses the `SpawnController.spawn` function to spawn the asset once the trigger is activated.
- Uses the `SpawnController.unload` function to delete the asset when the despawn trigger is received.

```
// Official documentation on TypeScript can be found here:
// https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html

import { Component, PropTypes, CodeBlockEvent, SpawnController, Vec3 } from 'horizon/core';

const spawnTriggerEvent = new CodeBlockEvent<[]>('spawnEvent', []); // Will spawn asset.
const despawnTriggerEvent = new CodeBlockEvent<[]>('despawnEvent', []); // Will despawn asset.

class SimpleSpawn extends Component<typeof SimpleSpawn> {
 // Define the inputs available in the property panel
 // in the UI as well as default values.

  static propsDefinition = {
    wallAsset: { type: PropTypes.Asset },
  };

  // Controls the asset spawn
  spawnController!: SpawnController;

  // Called on world start.
  start() {
    this.spawnController = new SpawnController(this.props.wallAsset!, this.entity.position.get(), this.entity.rotation.get(), Vec3.one);

    // Handle when the user steps on trigger.
    this.connectCodeBlockEvent(this.entity, spawnTriggerEvent, () => {
      this.spawnController.spawn();
    });

    // Handle when the user steps off  trigger.
    this.connectCodeBlockEvent(this.entity, despawnTriggerEvent, () => {
      this.spawnController.unload();
    });
  }
}

// Tells the UI that your component can be attached to an entity.
Component.register(SimpleSpawn);
```

## Asset Spawning in VR

You can also use CodeBlocks with a Trigger gizmo to trigger the asset spawning script:

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/68c392c5c267d13f60682f3bb47105be3cf55b3da4a2c5ba0ab53bdc40ed1f6c.md)

### Overview
The image displays a user interface (UI) for a game development tool, specifically a visual scripting environment. The UI is divided into two main sections: a larger central area showing a script flowchart and a smaller right-side panel with control structures and event handling options.

### Key Elements
- **Central Script Flowchart**:
  - **Visual description**: A dark rectangular area with a grid-like background, resembling a workspace for visual scripting.
  - **Location**: Center-left of the image.
  - **Contents**: Contains a series of nodes connected by lines, representing a sequence of events and actions.
    > "when world is started"
    > "when trigger is entered by player"
    > "send SpawnEvent to SpawnCTRL with New Param"
    > "when trigger is exited by player"
    > "send DespawnEvent to SpawnCTRL with New Param"
  - **Visual styling**: Dark background with light blue highlights around nodes, white text, and purple connecting lines.

- **Right-Side Control Panel**:
  - **Visual description**: A vertical rectangular panel with a dark background and light blue accents.
  - **Location**: Right side of the image.
  - **Contents**: Contains control structures and event handling options.
    > **Control**:
      - "if"
      - "else if"
      - "else"
      - "while"
    > **Events**:
      - "when world is started"
      - "when event is received"
    > **Update Events**:
      - "on update"
    > **Event Actions**:
      - Placeholder text indicating event actions.

- **Background**:
  - **Visual description**: A simple grid pattern with a light blue sky at the top.
  - **Location**: Surrounding the UI elements.
  - **Contents**: A neutral grid and sky background.

### Visual Flow / Relationships
- **Most prominent visually**: The central script flowchart.
- **Arrows/lines/connectors**: Purple lines connect nodes within the flowchart, indicating the sequence of events.
- **Spatial relationships**: Nodes are arranged in a linear fashion within the flowchart, and the control panel is positioned to the right, providing additional options for scripting.

</details>

<p></p>



- Create a trigger CodeBlock script to send the spawn and despawn events to an object. These scripts can be different for the spawn and despawn, but in this case we keep them together since they will be tied to the same trigger.
  <details>
  <summary>Image Content</summary>
  
  <p></p>
  
  [All image details and metadata](../../image_data/95df91e49445c3c7b1fa3f8fe516c7a9852fa6fd8e2d6a6a4f5d27fdad4724ee.md)
  
  ### Overview
  The image depicts a user interface element within a 3D environment, likely a game development tool or editor. It shows a window with settings for a trigger object, connected to another interface element via a wire.
  
  ### Key Elements
  - **Trigger Window**: Located centrally, this window has a dark background with light text. It contains several settings:
    - **Enabled**: A toggle switch set to 'On'.
    - **Trigger On**: Options for 'Players' and 'Objects Tagged'.
    - **Object Tag**: A field for entering tags.
    - **Attached Script**: Displays 'WallTriggerCB' as the attached script name.
    - **SpawnCTRL**: A field showing '<empty>'.
  - **Wire Connection**: A black wire connects the 'Trigger' window to another interface element labeled 'WallTriggerCB' at the top-left corner.
  - **Background**: The environment is a simple grid floor with a blue sky above, suggesting a virtual space for game development.
  
  ### Visual Flow / Relationships
  - **Most Prominent Element**: The 'Trigger' window.
  - **Arrows/Connections**: The wire acts as a connection line, indicating interaction between the trigger and the script.
  - **Spatial Relationships**: The 'Trigger' window is central, with the connected element 'WallTriggerCB' positioned to its left and slightly above.
  
  </details>
  
  <p></p>
  
  
- Create a Trigger gizmo and attach the CodeBlock script to the trigger.
  <details>
  <summary>Image Content</summary>
  
  <p></p>
  
  [All image details and metadata](../../image_data/2822dd7fb3018674126d1ad79351028587d3302884f4318c92d683329ca6c916.md)
  
  ### Overview
  The image depicts a user interface element within a 3D modeling or game development environment. It shows a floating window with various settings and options related to an object named "WallSpawnObj." The window is semi-transparent with a dark background, and the interface includes tabs, checkboxes, and interactive elements.
  
  ### Key Elements
  - **Floating Window**: Located centrally in the image, with a dark background and light text. Contains multiple tabs labeled "Behavior," "Attributes," "Physics," and "More."
  - **Tabs**: 
    - **Behavior Tab**: Active tab, showing options such as "Visible," "Collidable," "Motion," "Animation," and "Loop."
    - **Attributes Tab**: Partially visible, likely containing additional settings.
    - **Physics Tab**: Partially visible, likely containing physics-related settings.
    - **More Tab**: Partially visible, likely containing more advanced settings.
  - **Options**: 
    - **Visible**: Toggle switch set to "Off."
    - **Collidable**: Toggle switch set to "Off."
    - **Motion**: Options include "No," "Animated," and "Infinite."
    - **Animation**: Options include "Play" and "Record."
    - **Loop**: Set to "Never."
  - **Object Name**: Below the window, a label reads "WallSpawnObj" in a semi-transparent gray box.
  - **Pointer**: A white arrow points towards the "WallSpawnObj" label, indicating interaction or selection.
  
  ### Visual Flow / Relationships
  - **Most Prominent Element**: The floating window with the "Behavior" tab active.
  - **Arrows/Connections**: A white arrow connects the floating window to the "WallSpawnObj" label, suggesting interaction or selection.
  - **Spatial Relationships**: The window is positioned above the grid background, which serves as the workspace. The "WallSpawnObj" label is below the window, indicating the object being interacted with.
  
  </details>
  
  <p></p>
  
  
- Create an object and attach the TypeScript script to it. Depending on the application, it might be a good idea to make this object invisible.
- Attach the asset you would like to spawn in the asset field that appears when you attach the script. This is done with the following steps:

  - Navigate to your asset library from the build menu, then to the asset you want to spawn.
  - Select the view info (“i”) icon on that asset.
  - On the property panel, scroll down to see the asset reference pill (a blue oval containing the asset name).
  - Select and drag this reference pill to the Asset Variable field “empty” on the object’s property panel. <details>
                                                                                                            <summary>Image Content</summary>
                                                                                                            
                                                                                                            <p></p>
                                                                                                            
                                                                                                            [All image details and metadata](../../image_data/ab8a950f877598269c85678201469012724cad7743b8fa66a568d687506ed70e.md)
                                                                                                            
                                                                                                            ### Overview
                                                                                                            The image depicts a user interface from a 3D modeling or game development software environment. It shows a scene with a grid floor and a floating object labeled "WallSpawnObj." There are two pop-up windows open, one on the left side and another on the right side of the screen, both containing various settings and options related to the object.
                                                                                                            
                                                                                                            ### Key Elements
                                                                                                            - **Left Pop-up Window ("Trigger")**:
                                                                                                              - **Visual description**: A rectangular window with rounded corners.
                                                                                                              - **Location**: Left side of the screen.
                                                                                                              - **Contents**: Contains tabs labeled "Behavior" and "Attributes," with a toggle switch labeled "Enabled" set to "On."
                                                                                                              - **Visual styling**: Dark background with light text, blue tabs, and white toggles.
                                                                                                            
                                                                                                            - **Right Pop-up Window ("WallSpawnObj")**:
                                                                                                              - **Visual description**: Another rectangular window with rounded corners.
                                                                                                              - **Location**: Right side of the screen.
                                                                                                              - **Contents**: Contains tabs labeled "Behavior," "Attributes," "Physics," and "More." The "Behavior" tab is active, showing options such as "Visible," "Collidable," "Motion," "Animation," and "Loop."
                                                                                                              - **Visual styling**: Dark background with light text, blue tabs, and white toggles.
                                                                                                            
                                                                                                            - **Scene**:
                                                                                                              - **Visual description**: A 3D grid floor with a floating object labeled "WallSpawnObj."
                                                                                                              - **Location**: Below the pop-up windows.
                                                                                                              - **Contents**: The object is a simple cube with a grayish color.
                                                                                                              - **Visual styling**: The object has a subtle shadow effect, indicating depth.
                                                                                                            
                                                                                                            - **Connections**:
                                                                                                              - **Visual description**: White lines connecting the "Trigger" pop-up window to the "WallSpawnObj" object.
                                                                                                              - **Location**: Below the "Trigger" pop-up window.
                                                                                                              - **Contents**: These lines represent connections or interactions between the trigger and the object.
                                                                                                            
                                                                                                            ### Visual Flow / Relationships
                                                                                                            - **Most prominent visually**: The pop-up windows and the "WallSpawnObj" object.
                                                                                                            - **Arrows/lines/connectors**: White lines connecting the "Trigger" pop-up window to the "WallSpawnObj" object.
                                                                                                            - **Spatial relationships**: The pop-up windows are positioned above the scene, while the "WallSpawnObj" object is below them. The connections indicate a relationship between the trigger and the object.
                                                                                                            
                                                                                                            </details>
                                                                                                            
                                                                                                            <p></p>
                                                                                                            
                                                                                                            
- Finally, attach this script object to the Trigger gizmo.

Once you are done, you should have a CodeBlock script attached to a Trigger gizmo which in turn is attached to an object. The object should have the TypeScript script attached to it as well as the asset to be spawned and despawned.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/666ad9627d7e2c35db1e1c374f96f8bbe9ff98411b131addf895f09713e479a7.md)

### Overview
The image depicts a virtual environment with a user interface overlaying a 3D scene. The interface consists of multiple panels displaying code-like content and interconnected with lines, suggesting a programming or scripting context within a game development tool.

### Key Elements
- **Large Panel (Left)**: Located on the left side, this panel contains a series of code blocks with purple and blue highlights. The text includes keywords like "player," "spawn," and "update." The panel has a dark background with light text.
- **Smaller Panels (Right)**: Two smaller panels are positioned to the right of the large panel. These panels appear to be interactive, with some elements highlighted in green and others in white. They seem to represent different functions or settings related to the larger panel.
- **Lines/Connections**: Black lines connect the panels, indicating a flow or sequence of operations.
- **3D Scene**: Below the interface, a simple 3D environment is visible. It includes a transparent blue cube and a green rectangular object, both placed on a grid floor. A small purple cube is also present near the green object.
- **Background**: The background is a gradient sky with a light blue hue, giving the impression of an open-world environment.

### Visual Flow / Relationships
- **Most Prominent Element**: The large panel on the left.
- **Arrows/Connections**: The black lines connecting the panels suggest a flow or sequence of operations.
- **Spatial Relationships**: The panels are arranged horizontally, with the smaller panels to the right of the larger one. The 3D objects are positioned below the interface, indicating a separation between the UI and the game world.

</details>

<p></p>

