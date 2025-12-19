Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/feature-samples/noesis-ui-tutorial-world/module-4-interactive-stations

# Module 4 – Interactive Stations

This module covers stations that combine XAML UI with TypeScript scripting to create interactive, dynamic interfaces. These stations require both XAML files and corresponding TypeScript components.

These components often rely heavily on data triggers to update UI elements dynamically based on changes in data or user interaction, such as changing colors, visibility, or animations in response to data changes.

## Station 04 – Yes/No Dialogue

<details>
<summary>Station 04 - Yes/No Dialogue</summary>

<p></p>

[Station 04 - Yes/No Dialogue](../../../image_data/9a844f0b82a8ca2a1f450cf7bb8292898e87b0d8a0bbd662eb46282ae0b2176e.md)

### Overview
The image displays a Yes/No dialogue interface, likely from a video game or application tutorial. It features a pop-up window with a message and two buttons labeled "CANCEL" and "ACCEPT."

### Key Elements
- **Pop-up Window**: A light blue rectangular box with rounded corners, positioned centrally.
  - **Title Bar**: "GENERIC POPUPS" at the top.
  - **Message Area**: Contains an illustration of an envelope with a feather quill and a red wax seal, along with the text "> ACCEPT INVITE? john doe invited you to a co-op party".
  - **Buttons**: Two rectangular buttons, one red labeled "CANCEL" and one blue labeled "ACCEPT".

### Visual Flow / Relationships
- The most prominent visual element is the pop-up window itself.
- There are no arrows or lines connecting elements, but the layout suggests a typical Yes/No decision flow where users must choose between accepting or declining an invitation.

</details>

<p></p>



### Description

This station demonstrates a simple interactive dialogue with two buttons: Yes and No. When a user clicks either button, the result is displayed in a text box. This example teaches command binding, event handling, and updating UI elements from TypeScript.

**Files Required:**

* XAML: `Station04_YesNo_Dialogue.xaml`
* TypeScript: `YesNoDialogue.ts`

### XAML Example

```
<StackPanel>
  <TextBlock x:Name="ResultText" Text="{Binding Path=resultText}" FontSize="24"/>
  <StackPanel Orientation="Horizontal">
    <Button Content="Accept" Command="{Binding Path=events.acceptEvent}" Margin="5"/>
    <Button Content="Cancel" Command="{Binding Path=events.cancelEvent}" Margin="5"/>
  </StackPanel>
</StackPanel>
```

### TypeScript Integration

```
// In YesNoDialogue.ts

private dataContext = {
    events: {
        acceptEvent: () => this.updateOutputText("You accepted the co-op party!"),
        cancelEvent: () => this.updateOutputText("You canceled the co-op party.")
    }
};

start() {
    this.entity.as(NoesisGizmo).dataContext = this.dataContext;
}

private updateOutputText(text: string): void {
    const outputEntity = this.props.outputTextGizmo;
    if (outputEntity) {
        const textGizmo = outputEntity.as(hz.TextGizmo);
        if (textGizmo) {
            textGizmo.text.set(text);
        }
    }
}
```

## Station 05 – Light the Sphere Dialog

<details>
<summary>Station 05 - Light the Sphere</summary>

<p></p>

[Station 05 - Light the Sphere](../../../image_data/ea7add7688ef49bea88aec9572e0e76191158c3b713df29d6c317be2253971f0.md)

### Overview
This image depicts a dialog box interface titled "LIGHT THE SPHERE DIALOG." It presents a selection prompt asking the user to choose a preferred color for a sphere. The dialog box contains a central sphere model and three color options displayed as buttons.

### Key Elements
- **Dialog Box Title**: Located at the top, the title reads "LIGHT THE SPHERE DIALOG."
- **Central Sphere Model**: A purple sphere is centered within the dialog box.
- **Color Selection Buttons**: Three rectangular buttons are arranged horizontally beneath the title:
  - **Blue Button**: Labeled "BLUE," colored blue.
  - **Purple Button**: Labeled "PURPLE," colored purple.
  - **Green Button**: Labeled "GREEN," colored green.
- **Background**: The dialog box has a light blue background with a white border.

### Visual Flow / Relationships
The most prominent visual element is the central purple sphere. The color selection buttons are arranged in a row below the title, with the blue button on the left, the purple button in the middle, and the green button on the right. There are no arrows or lines connecting the elements, but the arrangement suggests a linear reading order from left to right.

</details>

<p></p>



### Description

This station demonstrates interactive button controls with custom visual states and event binding. Users can click colored buttons (Blue, Purple, Green) to change the color of a 3D sphere in the world. It introduces command binding, event triggers, and the integration between UI and 3D world objects.

**Files Required:**

* XAML: `Station05_Light_the_Sphere_Dialog.xaml`
* TypeScript: `LightTheSphere.ts`

### XAML Example

```
<Button x:Name="btn_Blue"
        Command="{Binding Path=events.displayOne}" />
<Button x:Name="btn_Purple"
        Command="{Binding Path=events.displayTwo}" />
<Button x:Name="btn_Green"
        Command="{Binding Path=events.displayThree}" />
```

### TypeScript Integration

```
private dataContext = {
    events: {
        displayOne: () => this.setSphereColor(0, 0, 1),   // Blue
        displayTwo: () => this.setSphereColor(1, 0, 1),   // Purple
        displayThree: () => this.setSphereColor(0, 1, 0)  // Green
    }
};

private setSphereColor(r: number, g: number, b: number): void {
    // ...change sphere color logic...
}
```

## Station 06 – Toggles, Radios & CheckBoxes

<details>
<summary>Station 06 – Toggles, Radios & CheckBoxes</summary>

<p></p>

[Station 06 – Toggles, Radios & CheckBoxes](../../../image_data/50742991b259eb4198de594030e465ed19daf5b2607dab4426aeea7355a8d663.md)

### Overview
The image displays a user interface element showcasing options for manipulating a cube within a virtual environment. The interface includes toggles, radio buttons, and checkboxes, as indicated by the title at the top. The main focus is on a menu titled "CUBE OPTIONS," which offers various settings for the cube.

### Key Elements
- **Title Bar**: Located at the top, the bar reads "TOGGLES, RADIOS & CHECKBOXES." It has a dark blue background with white text.
- **Menu Title**: Below the title bar, the menu is labeled "CUBE OPTIONS" in bold black text on a light beige background.
- **Toggle Switch**: Positioned next to "Rotate," this toggle switch is currently in the 'on' position, indicated by its blue color.
- **Radio Buttons**: Three radio buttons are listed under "CUBE OPTIONS":
  - Small: A gray radio button with no selection.
  - Medium: A blue radio button with a selection indicator.
  - Large: A gray radio button with no selection.
- **Checkbox**: At the bottom of the menu, a checkbox labeled "Color Cube" is checked, indicated by a blue checkmark.
- **Cube Display**: To the right of the menu, a red cube is displayed, presumably the object being manipulated via the options provided.

### Visual Flow / Relationships
The visual hierarchy is clear, with the menu options on the left and the cube display on the right. The toggle switch and radio buttons are grouped together under the "CUBE OPTIONS" heading. The checked checkbox is distinct and positioned at the bottom of the menu. The cube is centrally located to the right of the menu, serving as the visual representation of the object being controlled.

</details>

<p></p>



### Description

This station teaches input controls including animated toggle switches, radio button groups, and checkboxes. Users can control a 3D cube’s rotation, scale, and color through various UI controls. It demonstrates visual state animations using Storyboards and real-time 3D object manipulation.

**Files Required:**

* XAML: `Station06_Toggles_Radios_CheckBoxes.xaml`
* TypeScript: `ToggleCheckboxes.ts`

### XAML Example

```
<ToggleButton x:Name="ToggleRotationYaw"
              Command="{Binding Path=events.toggleRotateCommand}" />
<RadioButton x:Name="RadioButtonSmall"
             Command="{Binding Path=events.smallRadioChecked}" />
<RadioButton x:Name="RadioButtonMedium"
             Command="{Binding Path=events.mediumRadioChecked}" />
<RadioButton x:Name="RadioButtonLarge"
             Command="{Binding Path=events.largeRadioChecked}" />
<CheckBox Command="{Binding Path=events.colorCubeChecked}" />
```

### TypeScript Integration

```
private eventHandlers = {
    smallRadioChecked: () => this.updateMeshScale(0.25),
    mediumRadioChecked: () => this.updateMeshScale(0.5),
    largeRadioChecked: () => this.updateMeshScale(1),
    toggleRotateCommand: () => this.startRotation(),
    colorCubeChecked: () => this.updateMeshColor(true)
};
```

## Station 07 – Progress Bar

<details>
<summary>Station 07 - Progress Bar</summary>

<p></p>

[Station 07 - Progress Bar](../../../image_data/bab688c44dab576484a6ee4570fa466193824ce161ab93fde3f1b5e489d25dc8.md)

### Overview
This image depicts a custom user interface (UI) element showcasing textured buttons within a game or application environment. The central focus is a rectangular panel containing three pairs of items and corresponding buttons labeled "REPAIR" and "DESTROY."

### Key Elements
- **Panel Title**: Located at the top of the panel, the title reads "**CUSTOM UI TEXTURED BUTTON**". It is set against a light blue background with a darker blue border.
- **Items and Buttons**: 
  - **First Pair**: Contains an item resembling a sword with a red health bar underneath it. To the right, there is a blue button labeled "REPAIR".
  - **Second Pair**: Features another item that looks like a hammer with a green health bar. Next to it is a red button labeled "DESTROY".
  - **Third Pair**: Displays a third item, possibly a sword, with an orange health bar. Adjacent to this is a gray button labeled "REPAIR".

### Visual Flow / Relationships
The visual hierarchy is clear, with the title at the top, followed by the pairs of items and buttons arranged in a grid-like fashion. Arrows or lines are not present, but the layout suggests a logical reading order moving from left to right and then down to the next row.

</details>

<p></p>



### Description

This station demonstrates animated progress bars that update in real-time. Three different progress bars (Repair, Destroy, Disabled) animate automatically when toggled, each with unique colors and animation directions. It teaches progress bar customization, animation timing, and state management.

**Files Required:**

* XAML: `Station07_Progress_Bar.xaml`
* TypeScript: `ProgressBars.ts`

### XAML Example

```
<ProgressBar x:Name="Repair_Progress_Bar"
             Value="{Binding Path=progression[0]}"
             Command="{Binding Path=events.toggleRepair}" />
<ProgressBar x:Name="Destroy_Progress_Bar"
             Value="{Binding Path=progression[1]}"
             Command="{Binding Path=events.toggleDestroy}" />
<ProgressBar x:Name="Disabled_Progress_Bar"
             Value="{Binding Path=progression[2]}"
             Command="{Binding Path=events.toggleDisabled}" />
```

### TypeScript Integration

```
private eventHandlers = {
    toggleRepair: () => this.toggleBar(0),
    toggleDestroy: () => this.toggleBar(1),
    toggleDisabled: () => this.toggleBar(2)
};

private animateProgressBars(deltaTime: number) {
    // ...animation logic for each bar...
}
```