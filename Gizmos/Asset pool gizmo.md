Source: https://developers.meta.com/horizon-worlds/learn/documentation/code-blocks-and-gizmos/asset-pool-gizmo

# Asset pool gizmo

The asset pool gizmo is a powerful tool for managing objects that should be granted to each player in your World. It automates spawning and assignment of asset template objects to players as they join your World. This is necessary for objects that should have different states per player.

This gizmo is perfect for creating the following in game objects or features on a per player basis:

* HUD and UI
* Starting items
* Particle Effects
* Stats

When using something like a HUD asset, the asset pool gizmo to assign a HUD to each player in your world without needing to create a new HUD per player. Implementing the asset pool gizmo allows you to focus on designing gameplay experiences without writing custom code to manage player-specific objects.

## Asset pool gizmo overview

<details>
<summary>Asset pool gizmo overview</summary>

<p></p>

[Asset pool gizmo overview](../image_data/08e2caaf2243e52ba17712d3f38116a2158dff3cd05e535ef2da4c557bb207d6.md)

### Overview
The image is a flowchart-style diagram illustrating a process involving an "Asset Template" and an "Asset Pool Gizmo." The diagram is divided into three panels, each depicting a step in the process. The panels are arranged horizontally, with accompanying text descriptions above them.

### Key Elements
1. **Left Panel**
   - **Visual description**: A green rounded rectangle labeled "Asset Template."
   - **Location**: Left side of the first panel.
   - **Contents**: The label "Asset Template."
   - **Visual styling**: Green fill, rounded corners, no border.

2. **Middle Panel**
   - **Visual description**: A blue cylinder labeled "Asset Pool Gizmo."
   - **Location**: Center of the second panel.
   - **Contents**: Inside the cylinder, there is another green rounded rectangle labeled "Asset Template."
   - **Visual styling**: Blue fill, circular shape, black border.

3. **Right Panel**
   - **Visual description**: Another blue cylinder labeled "Asset Pool Gizmo."
   - **Location**: Center of the third panel.
   - **Contents**: Inside the cylinder, there is a green rounded rectangle labeled "Asset Template," and above it, a light blue rectangle labeled "Spawned Prefab Asset Pool."
   - **Visual styling**: Blue fill, circular shape, black border.

### Visual Flow / Relationships
- **Most prominent visually**: The blue cylinders labeled "Asset Pool Gizmo."
- **Arrows/lines/connectors**: None.
- **Spatial relationships**: The panels are arranged horizontally, with the left panel showing the initial state, the middle panel showing the addition of the template to the Gizmo, and the right panel showing the result after spawning prefab assets.

</details>

<p></p>



* Each asset pool gizmo manages a single asset template and pools it to be copied as child objects for players.
* You can add additional asset pool gizmos to use additional asset templates for as necessary.
* The asset pool gizmo is able to be used within asset templates.
* When an asset template is assigned to the gizmo, it will automatically create the pool of prefabs based on the maximum player count setting.

<details>
<summary>Asset pool gizmo overview 2</summary>

<p></p>

[Asset pool gizmo overview 2](../image_data/2febac724c6276f309f2b47a2babe9252f3d3ac5825597093102e927d740d5fd.md)

### Overview
The image depicts a flowchart illustrating the process of assigning and returning prefabs when players join and leave a game world. It is divided into two sections, each explaining a different scenario related to player interactions with prefabs.

### Key Elements
#### Left Panel
- **Player Circles**: 
  - **Visual description**: Light blue circles labeled "Player 1," "Player 2," and "Player 3."
  - **Location**: Top-left corners of both panels.
  - **Contents**: Text labels indicating player numbers.
  - **Visual styling**: Solid light blue, no borders.
- **Spawned Prefab Boxes**: 
  - **Visual description**: Blue rectangles labeled "Spawned Prefab 1," "Spawned Prefab 2," and "Spawned Prefab 3."
  - **Location**: Below the player circles.
  - **Contents**: Text labels indicating prefab names.
  - **Visual styling**: Solid blue, no borders.
- **Spawned Prefab Asset Pool**: 
  - **Visual description**: A rectangular box with a patterned background.
  - **Location**: Below the prefab boxes.
  - **Contents**: Text label "Spawned Prefab Asset Pool."
  - **Visual styling**: Patterned background, no borders.

#### Right Panel
- **Player Circles**: 
  - **Visual description**: Similar to the left panel, but Player 2 has a red circle with a diagonal line through it.
  - **Location**: Top-left corners of both panels.
  - **Contents**: Text labels indicating player numbers.
  - **Visual styling**: Solid light blue, no borders.
- **Spawned Prefab Boxes**: 
  - **Visual description**: Same as the left panel, but Prefab 2 is highlighted in orange.
  - **Location**: Below the player circles.
  - **Contents**: Text labels indicating prefab names.
  - **Visual styling**: Solid blue, no borders.
- **Spawned Prefab Asset Pool**: 
  - **Visual description**: Same as the left panel.
  - **Location**: Below the prefab boxes.
  - **Contents**: Text label "Spawned Prefab Asset Pool."
  - **Visual styling**: Patterned background, no borders.

#### Arrows and Connections
- **Arrows**: Directed lines connecting the player circles to the prefab boxes.
- **Connections**: Lines show the flow of prefabs being assigned to players.

### Visual Flow / Relationships
- **Most Prominent**: The player circles and the prefab boxes they connect to.
- **Arrows**: Indicate the direction of prefab assignment and return.
- **Spatial Relationships**: Players connect to specific prefabs, which then connect back to the prefab asset pool.

</details>

<p></p>



**Note**: When deploying the asset pool gizmo in a [non-FBS world](../VR%20tools/Scripting/Use%20file-backed%20scripts.md), avoid connecting asset templates that contain scripts. When the asset pool gizmo spawns the asset template, the scripts will be spawned as separate instances that must be maintained.

## Use the asset pool gizmo

To get started using the asset pool gizmo you will first need to have an asset template available that you plan to use on a player-specific basis. This can be an asset template you created or one that was shared with you by another creator.

Access the asset pool gizmo via **Build Menu** > **Gizmos** > **Asset Pool**.

<details>
<summary>Asset pool gizmo build menu selection</summary>

<p></p>

[Asset pool gizmo build menu selection](../image_data/16a6666eb7b0df4a62ca27e3ca70a33e4dd0d06185be2f476e08e98be251d7a7.md)

### Overview
This image depicts a user interface element within a software application, likely related to asset management or system configuration. The interface includes a search bar, a menu item labeled "Gizmos," and a result showing an "Asset Pool."

### Key Elements
- **Menu Item ("Build")**: Located at the top-left corner, it is a blue rectangular button with white text that reads "Build." There is a downward arrow indicating a dropdown menu.
- **Menu Item ("Systems")**: Positioned next to the "Build" menu, it is also a blue rectangular button with white text that reads "Systems." Similar to the "Build" menu, it has a downward arrow suggesting a dropdown.
- **Menu Item ("Script")**: Located further to the right, partially cut off in the image, it is a blue rectangular button with white text that reads "Script."
- **Search Bar**: Below the "Build" menu, it is a rectangular input field with a magnifying glass icon on the left side. The placeholder text inside the field reads "Asset Pool."
- **Close Button**: To the right of the search bar, there is a small "X" icon, likely used to clear the search input.
- **Result Section**: Below the search bar, there is a blue square icon with a white illustration resembling a network or server setup. Below this icon, the text "Asset Pool" is displayed.

### Visual Flow / Relationships
The most prominent visual element is the search bar, as it is the focal point of interaction. The "Build" and "Systems" menus are secondary elements, providing navigation options. The "Asset Pool" result is the direct outcome of the search query entered into the search bar. The layout follows a standard UI pattern where the search bar is central, with related results displayed below it.

</details>

<p></p>



Once the asset pool gizmo is added, you can set whether to **Auto Assign to Players** and set the **Asset Reference** for the gizmo.

<details>
<summary>Asset pool gizmo properties window</summary>

<p></p>

[Asset pool gizmo properties window](../image_data/726d4009d954d40d460783be576e884bc48cbc795c49fb733066f0c5d530ca83.md)

### Overview
The image displays a user interface element, specifically a settings panel within a software application. The panel is divided into sections labeled "Properties," "Debug Data," and "Behavior." There are toggle switches and text fields that provide information and options related to asset management. Two green callout boxes with arrows point to specific parts of the interface, explaining the functionality of certain features.

### Key Elements
- **Properties Section**:
  - **Visual description**: A dark gray rectangular area with rounded corners.
  - **Location**: Top-left portion of the interface.
  - **Contents**: Contains a title "Properties" followed by a field labeled "[AssetPool]" with a placeholder text.
  - **Visual styling**: Dark gray background, light gray border, and white text.

- **Debug Data Section**:
  - **Visual description**: A lighter gray rectangular area with rounded corners.
  - **Location**: Below the Properties section.
  - **Contents**: Contains a title "Debug Data" followed by a nested section titled "Generic Entity Data" with an ID number.
  - **Visual styling**: Lighter gray background, white text.

- **Behavior Section**:
  - **Visual description**: A darker gray rectangular area with rounded corners.
  - **Location**: Below the Debug Data section.
  - **Contents**: Contains a title "Behavior" followed by a toggle switch labeled "Auto Assign to Players" and a text field labeled "Asset Reference" with a placeholder text.
  - **Visual styling**: Darker gray background, white text, and a blue toggle switch with a white circle indicating its current state.

- **Callout Boxes**:
  - **Top Callout Box**:
    - **Visual description**: A green rounded rectangle with white text.
    - **Location**: To the right of the interface, above the "Behavior" section.
    - **Contents**: Explains the functionality of enabling the "Auto Assign to Players" feature.
    - **Visual styling**: Green background, white text, and a dotted arrow pointing to the toggle switch.

  - **Bottom Callout Box**:
    - **Visual description**: Another green rounded rectangle with white text.
    - **Location**: Below the "Behavior" section, to the right of the "Asset Reference" field.
    - **Contents**: Explains the functionality of the "Asset Reference" field.
    - **Visual styling**: Green background, white text, and a solid arrow pointing to the "Asset Reference" field.

### Visual Flow / Relationships
- **Most prominent visually**: The toggle switch in the "Behavior" section.
- **Arrows and lines**: Green dotted arrows connect the callout boxes to the corresponding elements in the interface.
- **Spatial relationships**: The callout boxes are positioned to the right of the interface, with the top box above the toggle switch and the bottom box below the "Asset Reference" field.

</details>

<p></p>



Once the asset pool gizmo is added to your world, use the following process to manage it:

- Navigate to **Player Settings** in the top left menu and adjust the **Maximum Player Count** slider for your world’s expected max player count.

  <details>
  <summary>Player settings maximum player count slider</summary>
  
  <p></p>
  
  [Player settings maximum player count slider](../image_data/cb8ef68fc1ce84727950a3843df62ed09288bf0aa55df0a46f0dbec622f84e9c.md)
  
  ### Overview
  This image depicts a settings interface titled "Player Settings." It includes options related to VOIP settings and maximum player count. The layout is clean and organized, with clear labels and interactive elements.
  
  ### Key Elements
  - **Title**: "Player Settings" located at the top-left corner.
  - **Close Button**: An "X" icon at the top-right corner for closing the settings.
  - **VOIP Settings Section**: 
    - **Label**: "VOIP Settings" in bold.
    - **Description**: "Select how people hear each other in this world."
    - **Dropdown Menu**: A dropdown labeled "Global" with a downward arrow indicating more options.
  - **Maximum Player Count Section**: 
    - **Label**: "Maximum Player Count" in bold.
    - **Description**: "Select the maximum number of people that can be in your world at the same time."
    - **Slider**: A horizontal slider with a blue thumb indicator set to 8.
  
  ### Visual Flow / Relationships
  The interface follows a linear flow from top to bottom. The title is the most prominent element, followed by the VOIP settings section, then the maximum player count section. The slider is positioned to the right of its label, indicating user interaction.
  
  </details>
  
  <p></p>
  
  
- Drag the **Asset Pool** gizmo into your scene.
- Locate the **Asset Template** you plan to use in your **Asset Library**.
- Drag and drop the **Asset Template** into the **Asset Reference** field of the **Asset Pool** gizmo.

  <details>
  <summary>Add asset template to Asset pool gizmo</summary>
  
  <p></p>
  
  [Add asset template to Asset pool gizmo](../image_data/aa9d71e749c6af6dda24bd29252e29ce2615120e0b183c72e418d9a9eeeae337.md)
  
  ### Overview
  This image depicts a user interface element from a software application, likely related to game development or asset management. It shows a properties panel with various data fields and interactive elements.
  
  ### Key Elements
  - **Properties Section**: Located at the top, contains a header labeled "Properties." Below this, there is a field labeled "[AssetPool]" with a small icon next to it.
  - **Debug Data**: A collapsed section under "Properties," showing "Entity Id: 100002."
  - **Generic Entity Data**: A collapsed section under Debug Data, showing "Script Instance Data."
  - **Behavior Section**: A collapsed section under "Generic Entity Data," containing options like "Auto Assign to Players" with a toggle switch next to it.
  - **Asset Reference**: A field with a label "Asset Reference" and a placeholder text "None (Object)" with a circular icon next to it.
  - **Attributes Section**: Contains fields for "Position," "Rotation," and "Scale," each with numerical values and input fields.
  - **GameplayTags Section**: A collapsed section with a search bar labeled "Search attached tags" and a plus sign indicating the ability to add tags.
  - **Attach script Button**: A button labeled "Attach script" located at the bottom of the panel.
  
  ### Visual Flow / Relationships
  The layout is structured hierarchically, with sections expanding when interacted with. The most prominent visual elements are the expandable sections ("Properties," "Debug Data," "Behavior," "Attributes," "GameplayTags"), which suggest a focus on detailed configuration. The "Attach script" button is the only interactive element that stands out due to its placement at the bottom.
  
  </details>
  
  <p></p>
  
  
- Use the drop down menu in the **Asset Reference** field of the **Asset Pool** gizmo’s properties window to search for your asset.
- The **Asset Pool** gizmo will automatically create child prefabs equal to the **Maximum Player Count** setting.
- If auto-assign is enabled in the properties window, players entering the world will receive a prefab from the asset pool.

## Example scripts and assets

Example #1: `UpdateOwnerName.ts`
This script can be attached to a mesh object with a child Text gizmo. When an owner is assigned to the object, the text gizmo will update with that player’s name.

<details>
<summary>Asset pool gizmo assigns an object to a player and displays the player name</summary>

<p></p>

[Asset pool gizmo assigns an object to a player and displays the player name](../image_data/d3e1c62fb23be9c0887a283fc4d77ef5ab844085b00df46bb0424b0c4830599d.md)

### Overview
This image depicts a virtual environment within a game or simulation interface. It features a character standing in a grid-based area with soccer balls floating around them. The interface includes various controls and information at the top and bottom.

### Key Elements
- **Character**: A 3D model of a person wearing a hat, jacket, jeans, and sneakers, positioned centrally in the scene.
- **Soccer Balls**: Three soccer balls are floating above the character, with varying sizes and positions.
- **Grid Floor**: A light gray grid pattern covers the floor, suggesting a virtual space for movement or interaction.
- **Top Bar**: Contains text explaining functionality ("UpdateOwnerName.ts assigns the player an object from the Asset Pool and displays their name.") and several icons, likely representing settings or actions.
- **Bottom Controls**: Includes a circular control pad on the left side and a small icon on the right that resembles a running figure.
- **Background**: A gradient sky transitioning from light blue to white, with the text "TrustworthyPelican" prominently displayed.

### Visual Flow / Relationships
The most prominent visual elements are the character and the floating soccer balls. The character is the focal point, with the soccer balls arranged around them. The top bar provides contextual information, while the bottom controls suggest interactive elements. The grid floor serves as a backdrop for the character and objects.

</details>

<p></p>



```
// Import the necessary components from the 'horizon/core' module.
import * as hz from 'horizon/core';

// This class will control the behavior of updating the owner's name.
class UpdateOwnerName extends hz.Component<typeof UpdateOwnerName> {

  // Defines the properties, `ownerNameTextEntity` will be set to an Entity.
  static propsDefinition = {
    ownerNameTextEntity: {type: hz.PropTypes.Entity}
  };

  start() {

    // Retrieve the owner of the current entity (the entity this component is attached to).
    let owner = this.entity.owner.get();

    // Get a `TextGizmo` which displays text, associate it with the `ownerNameTextEntity` property.
    let ownerGizmo = this.props.ownerNameTextEntity?.as(hz.TextGizmo);

    // Clear the text in the `TextGizmo`
    ownerGizmo?.text.set("");

    // Check if the current owner is set to a current player or the server.
    if (owner === this.world.getServerPlayer()) {
      // If the owner is the server, clear the text, this occurs if no player owns the object or an owning player drops the object and leaves the session.
      ownerGizmo?.text.set("");
    }
    else {
      // If the owner is not the server, set the text to the owner's name.
      ownerGizmo!.text.set(owner.name.get());
    }

  }
}

// Register the `UpdateOwnerName` component with the Horizon engine.
hz.Component.register(UpdateOwnerName);
```

Example #2: `UI_ShopHud.ts`
This script can be attached to a custom UI gizmo, and when pooled will display a HUD element with a clickable button and the owning player’s name. This also sends some logs to Console when ownership is assigned.

<details>
<summary>Asset pool gizmo asset assigns the player a custom UI HUD element</summary>

<p></p>

[Asset pool gizmo asset assigns the player a custom UI HUD element](../image_data/271c6906fb34b5d35f97299aa539676e4c07da8189a4abf12a04d802aae5cccc.md)

### Overview
This image depicts a user interface (UI) screen from a virtual environment, likely a game or simulation. The central focus is a character standing in a grid-like floor space, viewed from behind. The UI includes various interactive elements and information displays.

### Key Elements
- **Character**: A 3D model of a person wearing a hat, jacket, jeans, and sneakers, positioned centrally in the scene.
- **Background**: A simple grid floor with a light blue gradient sky above.
- **Left Panel**: Contains a circular control element resembling a camera viewfinder, with a smaller circle inside it.
- **Top Left Corner**: Text explaining functionality ("UI_ShopHud.ts assigns the player a Custom UI HUD element from the asset pool that displays their user name and accepts click inputs.")
- **Top Right Corner**: User name display ("TrustworthyPelican") next to a green rectangular button.
- **Top Bar**: Includes icons for settings, microphone, and other functionalities.
- **Right Panel**: A small circular icon with a running figure, possibly indicating movement controls.

### Visual Flow / Relationships
The most prominent visual is the character in the center. The text on the left explains the functionality of the UI element. The user name and button are secondary but important for interaction. The top bar icons suggest additional functionalities available within the UI.

</details>

<p></p>



```
// Import necessary components from the Horizon core and UI libraries
import { CodeBlockEvents, Component, Player, World } from 'horizon/core';
import { Binding, Pressable, Text, UIComponent, UINode, View, ViewStyle } from 'horizon/ui';

// Define the class `UI_ShopHud`, which extends `UIComponent` for custom UI in Horizon Worlds
class UI_ShopHud extends UIComponent<typeof UI_ShopHud> {

  // Define props definition
  static propsDefinition = {};

  // Define bindings for UI elements (to make them reactive)
  private titleText!: Binding<string>;  // Title text binding (e.g., shop name)
  private shopText!: Binding<string>;   // Text for the shop label
  private shopTextColor!: Binding<string>; // Binding for the shop text color
  private buttonColor!: Binding<string>; // Binding for the button color

  // Configurations for UI layout and styles
  private readonly featuredTextSize = 36; // Fixed size for featured text
  private debounce: boolean = false; // Flag to prevent multiple button clicks in a short period

  // The `start` method is called when the component is initialized
  start() {
    // Retrieve the server player and local player
    let serverPlayer = World.prototype.getServerPlayer();
    let owner = this.world.getLocalPlayer();

    // Check if the current player is neither the server player nor null
    let currentPlayer = owner === null || owner === serverPlayer ? null : owner;

    // If there is a valid current player, make the shop UI visible
    if (currentPlayer !== null) {
      console.log(`UI_ShopHud CONNECTED to ${currentPlayer.name.get()}`);
      this.entity.visible.set(true);  // Set the UI entity to visible
    }
    else {
      // Otherwise, hide the shop UI
      this.entity.visible.set(false);
    }
  }

  // Method to handle when a slot (button) is clicked
  private onSlotClicked() {
    // Prevent multiple clicks within a short time frame using debounce
    if (!this.debounce) {
      this.debounce = true;  // Set debounce flag to true (no further clicks allowed)

      // Change the button color to grey when pressed
      this.buttonColor.set('grey', [this.world.getLocalPlayer()]);

      console.log("Shop Button Pressed");

      // After a short delay, reset the debounce flag and set the button color back to green
      this.async.setTimeout(() => {
        this.debounce = false;  // Reset debounce flag
        this.buttonColor.set('green', [this.world.getLocalPlayer()]);  // Reset button color
      }, 200); // 200 milliseconds delay
    }
  }

  ////////////////////////////////////////////////////////////////////////
  // UI Formatting Section: This part handles the layout and design of the UI
  ////////////////////////////////////////////////////////////////////////

  // Method to initialize and layout the UI components
  initializeUI() {
    // Skip UI creation if the local player is the server player (since they should not see the UI)
    if (this.world.getLocalPlayer() === this.world.getServerPlayer()) {
      return new UINode();  // Return an empty node if server player
    }

    // Set up bindings for dynamic UI content (e.g., player name, shop name)
    this.titleText = new Binding<string>(this.world.getLocalPlayer().name.get());
    this.shopText = new Binding<string>('Shop');  // Static text for "Shop"
    this.shopTextColor = new Binding<string>('white'); // Default text color for shop text
    this.buttonColor = new Binding<string>('green'); // Default color for the button

    // Define the style for the root panel (container) of the UI
    const rootPanelStyle: ViewStyle = {
      width: "60%",  // Width of the root panel (60% of the screen width)
      height: "80%", // Height of the root panel (80% of the screen height)
      left: "35%",   // Position the panel 35% from the left edge of the screen
      position: "absolute", // Use absolute positioning
      justifyContent: "center", // Vertically center the content inside the panel
      alignContent: "center",
      alignSelf: "center",
      alignItems: "flex-end", // Align content to the bottom (flex-end) horizontally
    };

    // Define the style for the button
    const buttonStyle: ViewStyle = {
      backgroundColor: this.buttonColor,  // Dynamic button color
      borderRadius: 8,  // Rounded corners for the button
      height: 48,       // Button height
      padding: '5%',    // Padding inside the button
      margin: '5%',     // Margin around the button
      width: '80%',     // Button takes up 80% of the panel's width
      justifyContent: 'center',  // Center the button text vertically
      alignContent: "center",
      alignItems: 'center',      // Center the button text horizontally
    };

    // Create a pressable button element with custom styling and text
    const buttonOption = Pressable({
      children: [
        View({
          children: [
            Text({
              text: this.shopText, // Text content for the button (shop name)
              style: {
                fontFamily: "Roboto",   // Font for the button text
                color: this.shopTextColor, // Dynamic text color for the shop name
                fontWeight: "700",      // Bold text
                fontSize: this.featuredTextSize, // Featured text size
                alignItems: "center",   // Center the text vertically
                textAlign: "center",    // Center the text horizontally
              }
            }),
          ],
          style: {
            flexDirection: "row",  // Arrange children in a row
            justifyContent: "center",  // Horizontally center the text
          },
        })
      ],
      style: buttonStyle,  // Apply the defined button style
      onClick: () => this.onSlotClicked(),  // Handle button click event
    });

    // Define and return the root view that contains all UI components
    return View({
      children: [
        // The button container (including title and button)
        View({
          children: [
            Text({
              text: this.titleText, // Display the title text (player's name)
              style: {
                fontFamily: "Roboto", // Font style for the title text
                color: this.shopTextColor, // Dynamic color for the title text
                fontWeight: "700",    // Bold text for the title
                fontSize: this.featuredTextSize, // Set the size of the title text
                alignItems: "center", // Center the title text vertically
                textAlign: "center",  // Center the title text horizontally
              }
            }),
            buttonOption, // Add the button as a child of the root view
          ],
        })
      ],
      style: rootPanelStyle, // Apply the root panel's styles
    });
  }
}

// Register the `UI_ShopHud` component so it can be used in Horizon Worlds
Component.register(UI_ShopHud);
```