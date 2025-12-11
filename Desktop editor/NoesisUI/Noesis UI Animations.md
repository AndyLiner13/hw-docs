Source: https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/noesis-ui/noesis-ui-animations

# Noesis UI Animations

Animation functionality in NoesisUI allows you to build dynamic effects into your UI panels. Leveraging the animation functionality of Noesis allows for the creation of richer 2D UIs with generally improved rendering performance compared to legacy CustomUI.

Since the Noesis UI workflow requires you to build your UI in Noesis Studio, then import it into the desktop editor it’s important to understand how XAML (Extensible Application Markup Language) can be used. XAML is a declarative markup language that instantiates objects and defines your UI elements and their properties.

## Defining animations in Noesis

The **`Storyboard`** object is used in XAML to define a timeline that details a sequence of property changes to apply to specific UI elements over a predetermined duration.

To successfully apply an animation to your created UI you must specify the following aspects for the **`Storyboard`**:

- **Name the target element**: You must specify a name for the UI element you intend to animation by using the **x:Name** attribute. i.e.`Circle x:Name=”Circle”>`.
- **Specify the target property:** Use the attached properties **TargetName** and **TargetProperty** to point the animation at the desired UI element.

## Trigger animations

Once you’ve defined your animations you must use XAML to trigger them. You can use the `BeginStoryBoard` action and an `EventTrigger` which begins the action when the specified event occurs.

You can also automatically launch an animation as soon as your created UI launches by using the `FrameworkElement.Loaded` event instead of waiting for an input event like `Button.Click`

## Advanced animations

For any animations that require more precise control over movement or non-linear effects, you can use additional tools beyond basic interpolation.

### Keyframe animations

While standard animations only support linear interpolation, keyframe animations allow more complex behavior and are required to define specific values at specific times.

Keyframes use specific classes that replace From/To properties with a Keyframe collection. The main types of keyframes are:

* **Linear keyframes** - Interpolation is performed linearly between the defined keyframe values
* **Spline keyframes** - Defines motion as a cubic Bezier curve using a KeySpline property, allowing of custom, non-linear timing control
* **Discrete keyframes** - No interpolation occurs; the value changes instantly at the specified time

## Process Storyboard Animation End Event

Sometimes creators may want to add specific action at the end of an animation. To do so please follow steps in the Noesis Studio:

- Open **Interactivity** tab in the left toolbar
- Select desired component and press plus icon to **Add trigger**
- Select **Storyboard Completed Trigger** to handle end of animation state. <details>
<summary>Noesis animation tutorial panel</summary>

<p></p>

[Noesis animation tutorial panel](../../../../images/output/img_20251211_063634_20251211_063634.md)

### Overview
This image depicts a user interface element within a software application, specifically a trigger selection dropdown menu. The interface is part of a larger window titled "Interactivity," which includes tabs labeled "Triggers," "Behaviors," and "Setters." The dropdown menu is open, showing a list of trigger types that can be added to a specified object named "AnimRect."

### Key Elements
- **Search bar**: Located at the top of the dropdown menu, it has a magnifying glass icon and the placeholder text "> Search triggers."
- **Trigger list**: A vertical list of trigger types displayed in a dropdown menu. The items include: DataEventTrigger, DataTrigger, EventTrigger, GamepadTrigger, KeyTrigger, PropertyChangedTrigger, StoryboardCompletedTrigger, TimerTrigger.
- **Highlighted trigger**: The "StoryboardCompletedTrigger" is highlighted, indicating it is currently selected or hovered over.
- **Add button**: A small plus sign (+) icon located to the right of the search bar, suggesting the ability to add new triggers.
- **Object name**: "AnimRect" is displayed above the search bar, indicating the object to which triggers are being added.
- **Tree view**: On the left side, there is a tree view showing nested objects "AnimRect" and "Button," with specific trigger types associated with them.

### Visual Flow / Relationships
The most prominent visual element is the dropdown menu containing the list of triggers. The search bar is designed to allow users to find specific triggers quickly. The tree view on the left provides context about the objects involved. The layout suggests a hierarchical structure where triggers can be applied to specific parts of a project.

</details>

<p></p>


- In the properties panel on the right add **InvokeCommandAction** in the **Actions** section and select a desired command. <details>
<summary>Noesis animation tutorial panel</summary>

<p></p>

[Noesis animation tutorial panel](../../../../images/output/img_20251211_063755_20251211_063755.md)

### Overview
This image depicts a user interface element that appears to be part of a software application, specifically a settings or configuration panel. The interface includes various fields, dropdown menus, and toggle switches for configuring certain parameters related to animations and commands.

### Key Elements
- **Storyboard Dropdown**: Located at the top right, this dropdown menu is labeled "Anim" and has a green border indicating it might be active or selected.
- **Conditions Section**: Positioned below the storyboard dropdown, this section contains a plus sign (+) suggesting the ability to add more conditions.
- **Actions Section**: Below the Conditions section, another plus sign (+) indicates the possibility to add actions.
- **InvokeCommandAction Dropdown**: This dropdown is nested under the Actions section and is labeled "InvokeCommandAction."
- **Command Text Box**: Below the InvokeCommandAction dropdown, there is a text box with a yellow border, likely meant for entering command names or paths.
- **Binding Section**: This section is expanded and contains three tabs: Name, Relative, and Context. The Path field within this section is filled with "AnimationIsDone."
- **Command Parameter Field**: Below the Binding section, there is a field labeled "Command Parameter," which is currently empty.
- **Use Event Args Toggle**: A toggle switch labeled "Use Event Args" is located below the Command Parameter field.
- **Event Args Parameter Path Field**: An empty field labeled "Event Args Parameter Path" is situated below the toggle switch.
- **Event Args Converter Field**: Another empty field labeled "Event Args Converter" is positioned below the previous field.
- **Event Args Converter Parameter Field**: This final field labeled "Event Args Converter Parameter" is also empty.
- **Enabled Toggle Switch**: At the bottom, a toggle switch labeled "Enabled" is checked, indicated by a blue checkmark.

### Visual Flow / Relationships
The interface is structured hierarchically, with sections expanding to reveal additional options. The storyboard dropdown is the most prominent element due to its placement at the top and distinct green border. The nested sections under Actions and InvokeCommandAction follow a logical flow, guiding the user through the configuration process step-by-step.

</details>

<p></p>



## Additional resources

For more information about Noesis UI animations, see the [Noesis UI documentation](https://www.noesisengine.com/studio/) and check the [NoesisUI Animation Tutorial](https://www.noesisengine.com/docs/Gui.Core.AnimationTutorial.html).