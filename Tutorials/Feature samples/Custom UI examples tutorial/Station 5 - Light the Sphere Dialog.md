Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/feature-samples/custom-ui-examples-tutorial/station-5-light-the-sphere-dialog

# Station 5 - Light the Sphere Dialog

This station demonstrates how to use a custom UI to alter some aspect of the external world. In this case, when you click a button on the custom UI, you set the color for a sphere (The Orb of UINess) in front of you.

<details>
<summary>Image of Station 5</summary>

<p></p>

[Image of Station 5](../../../image_data/c29eeb8052e2bc90acae82ddff6e1bea44c6f81dba65ee504e6a0d7196e42a6d.md)

### Overview
This image depicts a dialog box interface titled "Station 05 - Light the Sphere Dialog." The dialog box contains a message asking the user to choose a preferred color for the Orb of Ulness. Below the message, there are three buttons labeled "Off," "Red," and "Green."

### Key Elements
- **Dialog Box**: A rectangular box with rounded corners, light gray background, and a white border.
  - **Message**: "Choose your preferred color for the Orb of Ulness."
    - **Location**: Centered within the dialog box.
    - **Contents**: Text in black font.
    - **Visual styling**: Plain text, no additional formatting.
  - **Buttons**:
    - **Off**: Black button with white text.
      - **Location**: Left side of the dialog box.
      - **Contents**: "Off" in white text.
      - **Visual styling**: Solid black background, white text, no border.
    - **Red**: Red button with white text.
      - **Location**: Center of the dialog box.
      - **Contents**: "Red" in white text.
      - **Visual styling**: Solid red background, white text, no border.
    - **Green**: Green button with white text.
      - **Location**: Right side of the dialog box.
      - **Contents**: "Green" in white text.
      - **Visual styling**: Solid green background, white text, no border.

### Visual Flow / Relationships
- **Most prominent visually**: The dialog box itself, as it contains the main interaction area.
- **Arrows, lines, connectors, or implied reading order**: None.
- **Spatial relationships**: The buttons are arranged horizontally, with the "Off" button on the left, the "Red" button in the middle, and the "Green" button on the right.

</details>

<p></p>



## Assets

* **Station05-CustomUI: CustomUI gizmo**
  + Visible: true
  + Script: the script that defines the custom UI elements must be attached. See below.
  + ball:
    - This option is defined as part of the properties of the script. In the code, this Entity is referenced through this.props.ball references.
    - When this option is enabled through the script, a designer is permitted to select an Entity that is part of the world from the drop-down.
* **Station05-OrbOfUINess: script**
  + This script defines the customUI object.
  + It also creates the property definition for attaching the Sphere object to the customUI.
* **Sphere**
  + A basic shape of Sphere type

## Script

### Station05-OrbOfUINess

This customUI is similar to the one deployed in Station04. Differences:

* A third “Off” button
* Code to affect the color of the ball entity, based on the `onClick()` event for each button.

#### Property definition

In the code for the ClickerDialog class, you can see the following definition:

```
static propsDefinition = {
  ball: { type: PropTypes.Entity },
};
```

The above defines the ball property definition on the Properties panel of the object to which the script is attached. In this case, this ball definition is on the CustomUI object for this station.

The Entity type of the definition means that the designer is presented with a drop-down labeled ball. From this drop-down, the designer can select an entity that is already in the world.

<details>
<summary>Image of selecting Sphere from the ball script property</summary>

<p></p>

[Image of selecting Sphere from the ball script property](../../../image_data/e3849c8ff863b9b39599d09245aa7c34a868f8b1374880b606c8bff31583e093.md)

### Overview
This image depicts a search interface within a software application, likely a game development tool or asset manager. The interface includes a search bar at the top, a list of search results below, and a partially visible input field at the bottom.

### Key Elements
- **Search Bar**: Located at the top, it has a blue outline and contains the text "Sp". There is a magnifying glass icon on the left and an 'X' icon on the right.
- **Search Results**: Below the search bar, there are three items listed:
  - **SpawnPoint**: Accompanied by a character icon.
  - **Station05-Sphere1**: Accompanied by a checkmark and a sphere icon.
  - **Sports Buzzer**: Accompanied by a speaker icon.
- **Input Field**: Partially visible at the bottom, showing the text "ball" and a partially obscured item labeled "Station05-Spher..." with a sphere icon next to it.

### Visual Flow / Relationships
The most prominent visual element is the search bar at the top. The search results are arranged vertically beneath it. The input field at the bottom is partially visible, suggesting ongoing interaction with the search functionality.

</details>

<p></p>



From this drop-down, the designer can select an object that already is present in the world to be referenced through the ball property in the code. In the example world, it has already been pre-selected for you to be the Sphere entity.

As an experiment, you can try:

* Add a different Shape to the world.
* Select this Shape from the ball entry in the Properties panel of the Custom UI.
* See if the code works.

#### MyButton() code

For the `MyButton()` function, you have the following code:

```
type MyButtonProps = {
  label: string;
  onClick: Callback;
  style: ViewStyle;
  baseColor: string;
};

function MyButton(props: MyButtonProps): UINode {
  const DEFAULT_COLOR = props.baseColor;
  const HOVERED_COLOR = "blue";
  const backgroundColor = new Binding<string>(DEFAULT_COLOR);
  const buttonText = new Binding<string>(props.label);

  return Pressable({
    children: Text({
      text: buttonText,
      style: {color: "white"},
    }),
    onClick: props.onClick,
    onEnter: (player: Player) => {
      console.log("onEnter");
      backgroundColor.set(HOVERED_COLOR, [player]);
      buttonText.set("hovered", [player]);
    },
    onExit: (player: Player) => {
      console.log("onExit");
      backgroundColor.set(DEFAULT_COLOR, [player]);
      buttonText.set(props.label, [player]);
    },
    style: {
      backgroundColor: backgroundColor,
      borderRadius: 8,
      height: 36,
      width: 120,
      alignItems: "center",
      justifyContent: "center",
      // additional styles are spreaded the last
      // to override default styles
      ...props.style,
    },
  });
}
```

The type definition for `MyButtonProps` contains four fields:

```
label: string;
onClick: Callback;
style: ViewStyle;
baseColor: string;
```

These are the four variables that can be applied to a UI object of MyButton type.

| **Field** | **Description** |
| --- | --- |
| `label` | Text label that appears on the button. |
| `onClick` | The `onClick()` event is defined as a callback to a function defined in the call to the `MyButton` function. |
| `style` | This is a customUI object type called `ViewStyle`, which enables styling of a UI View definition with JavaScript-like styling attributes. |
| `baseColor` | Text string identifying the base color for the button |

### Color constants

Above the class declaration, you can see the following constants, which define the colors to apply:

```
const colorOff: Color = new Color(0, 0, 1.0)
const colorRed: Color = new Color(0.8, 0, 0)
const colorGreen: Color = new Color (0, 0.8, 0)
```

### Define sphere as a mesh entity

To apply color properties to an entity in the world, you must create a reference to the entity as a MeshEntity type. This allows you to access via TypeScript the entity’s `style` properties, which include the color properties.

Within the `initializeUI()` method, you can see the internal variable that is defined to hold the Sphere entity from the `hz.props.ball` property value as a MeshEntity object. If this entity is valid, then the styling properties are applied to set the default color for the sphere:

```
const myBall = this.props.ball?.as(MeshEntity)!
if (myBall) {
  myBall.style.tintStrength.set(1)
  myBall.style.brightness.set(100)
  myBall.style.tintColor.set(colorOff)
}
```

You can also see the references to the nested `View()` objects. The second, nested `View()` object is defined as follows:

```
View({
  children: [
    MyButton({
      label: "Off",
      baseColor: "black",
      onClick: () => {
        console.log("onClick() callback fired for: Off")
        if (myBall) {
          myBall.style.tintColor.set(colorOff)
        }
      },
      style: {
        marginRight: 24,
      },
    }),
    MyButton({
      label: "Red",
      baseColor: "red",

      onClick: () => {
        // console.log("Pressed Red button.");
        console.log("onClick() callback fired for: Red")
        if (myBall) {
          myBall.style.tintColor.set(colorRed)
        }
      },
      style: {
        marginRight: 24,
      },
    }),
    MyButton({
      label: "Green",
      baseColor: "green",
      onClick: () => {
        // console.log("Pressed Green button.");
        if (myBall) {
          console.log("onClick() callback fired for: Green")
          myBall.style.tintColor.set(colorGreen)

        }
      },
      style: {
      },
    }),
  ],
  style: { flexDirection: "row", marginTop: 12 },
}),
```

You can see three different calls to `MyButton()`, which returns a Pressable object inserted into the `View()`. As part of each call, you can see the parameters that are passed into the function.

In particular, you can see in the `onClick()` event for each button the arrow function that is called back from the `MyFunction()` function. This callback functionality is enabled through the type definition for `MyButtonProps`.

* Since the reference to the ball entity is defined as part of the customUI object to which the script is attached, you can reference the ball entity using the this keyword.

So, to enable a customUI object to modify properties of another object in the world:

* Add a property to the Properties panel of the custom UI. This is done through the type definition of the Props for the class that you are extending in the TypeScript.
* Modify the `MyButton()` function:
  + Add the `onClick()` property as a callback to `MyButtonProps`.
  + Add code to reference `props.onClick` in the `MyButtonProps` definition.
  + Since the above is of `Callback` type, you can define the callback function as an arrow function in the parameters of the call you make to `MyButton()` function from within the `View()` in your `initializeUI()` method.

## Key Learnings

### Meta Horizon Worlds learnings

* None.

### TypeScript coding

* How to use a customUI to affect other entities in your world.