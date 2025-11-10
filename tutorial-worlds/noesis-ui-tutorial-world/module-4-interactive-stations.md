Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/noesis-ui-tutorial-world/module-4-interactive-stations

# Module 4 – Interactive Stations

This module covers stations that combine XAML UI with TypeScript scripting to create interactive, dynamic interfaces. These stations require both XAML files and corresponding TypeScript components.

These components often rely heavily on data triggers to update UI elements dynamically based on changes in data or user interaction, such as changing colors, visibility, or animations in response to data changes.

## Station 04 – Yes/No Dialogue

![Station 04 - Yes/No Dialogue](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/573995121_855959403608679_3124937154987456899_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=azRKXsNE31gQ7kNvwE5TWv-&_nc_oc=AdngsbwNwc-Mo_TvsFJSLkhgueXtJuAX2HKo9MGJkfdS5P0T7O_zwWXA6iMl1wTxF-I&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=2a7GeHwRZ-pys8fIEDwLug&oh=00_AfiWeFi-54oTuYwgdVVisSOluwgDJJrGYD7spH-7lF43Cw&oe=692BF745)

### Description

This station demonstrates a simple interactive dialogue with two buttons: Yes and No. When a user clicks either button, the result is displayed in a text box. This example teaches command binding, event handling, and updating UI elements from TypeScript.

**Files Required:**

* XAML: `Station04_YesNo_Dialogue.xaml`
* TypeScript: `YesNoDialogue.ts`

### XAML Example

```vs
<StackPanel>
  <TextBlock x:Name="ResultText" Text="{Binding Path=resultText}" FontSize="24"/>
  <StackPanel Orientation="Horizontal">
    <Button Content="Accept" Command="{Binding Path=events.acceptEvent}" Margin="5"/>
    <Button Content="Cancel" Command="{Binding Path=events.cancelEvent}" Margin="5"/>
  </StackPanel>
</StackPanel>
```

### TypeScript Integration

```_ar4n
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

![Station 05 - Light the Sphere](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/573626705_855959383608681_2381265185832811492_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=-hqsmUoTsIcQ7kNvwEVLV8Y&_nc_oc=AdkddGkQA41N6Q68J-yGXNk0HYh-ubd8b9tH4BF4L6VsDv804rzIu99J5ENNEhm7Esw&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=2a7GeHwRZ-pys8fIEDwLug&oh=00_AfhWDgtEwTy0FV___c495xid2EIWQupLaCi7d3nFa0WyOQ&oe=692BE70E)

### Description

This station demonstrates interactive button controls with custom visual states and event binding. Users can click colored buttons (Blue, Purple, Green) to change the color of a 3D sphere in the world. It introduces command binding, event triggers, and the integration between UI and 3D world objects.

**Files Required:**

* XAML: `Station05_Light_the_Sphere_Dialog.xaml`
* TypeScript: `LightTheSphere.ts`

### XAML Example

```vs
<Button x:Name="btn_Blue"
        Command="{Binding Path=events.displayOne}" />
<Button x:Name="btn_Purple"
        Command="{Binding Path=events.displayTwo}" />
<Button x:Name="btn_Green"
        Command="{Binding Path=events.displayThree}" />
```

### TypeScript Integration

```_ar4n
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

![Station 06 – Toggles, Radios & CheckBoxes](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/576098214_855959386942014_5248336067160607733_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=uFo6iF82gpEQ7kNvwHWOI2t&_nc_oc=AdmjHM5MHH3-fi5qF-cRFSbrG7CngkhPpXnUxa7zeiKsvknbGxEnAnYy0Ain2ceCLy8&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=2a7GeHwRZ-pys8fIEDwLug&oh=00_Afi2GS8VCj1fLuMoBu9cUojDaH-8xCmXKx_xa0RM8bf5xg&oe=692BF768)

### Description

This station teaches input controls including animated toggle switches, radio button groups, and checkboxes. Users can control a 3D cube’s rotation, scale, and color through various UI controls. It demonstrates visual state animations using Storyboards and real-time 3D object manipulation.

**Files Required:**

* XAML: `Station06_Toggles_Radios_CheckBoxes.xaml`
* TypeScript: `ToggleCheckboxes.ts`

### XAML Example

```vs
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

```_ar4n
private eventHandlers = {
    smallRadioChecked: () => this.updateMeshScale(0.25),
    mediumRadioChecked: () => this.updateMeshScale(0.5),
    largeRadioChecked: () => this.updateMeshScale(1),
    toggleRotateCommand: () => this.startRotation(),
    colorCubeChecked: () => this.updateMeshColor(true)
};
```

## Station 07 – Progress Bar

![Station 07 - Progress Bar](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/576501083_855959416942011_91098637177701187_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=u8HxW19t-Y8Q7kNvwE-s3zX&_nc_oc=AdlL8qmFLWLxtNOD1Z6eSgiiYx02cQ0VGytu2QAA8Dw3rwadGwqlic_AjRYHdq2xiCE&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=2a7GeHwRZ-pys8fIEDwLug&oh=00_AfirZ8xmTdMqx1eWzQPyQNQijyTowQ20A_nXOkwGdMI59g&oe=692BE4BE)

### Description

This station demonstrates animated progress bars that update in real-time. Three different progress bars (Repair, Destroy, Disabled) animate automatically when toggled, each with unique colors and animation directions. It teaches progress bar customization, animation timing, and state management.

**Files Required:**

* XAML: `Station07_Progress_Bar.xaml`
* TypeScript: `ProgressBars.ts`

### XAML Example

```vs
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

```_ar4n
private eventHandlers = {
    toggleRepair: () => this.toggleBar(0),
    toggleDestroy: () => this.toggleBar(1),
    toggleDisabled: () => this.toggleBar(2)
};

private animateProgressBars(deltaTime: number) {
    // ...animation logic for each bar...
}
```