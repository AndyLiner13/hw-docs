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
                                                                            
                                                                            [Noesis animation tutorial panel](../../image_data/7582664255d90187dd97102e1014eee1dadbcdd7a60ad9af9bbe517e31d0e1c4.md)
                                                                            
                                                                            ### Overview
                                                                            This image depicts a user interface element within a software development environment, specifically a window titled "Interactivity." It shows a list of triggers being added to a component named "AnimRect."
                                                                            
                                                                            ### Key Elements
                                                                            - **Header**: "Interactivity" at the top left corner.
                                                                            - **Tabs**: Three tabs labeled "Triggers," "Behaviors," and "Setters" are visible.
                                                                            - **Search Bar**: A search bar labeled "Search triggers" is located below the tabs.
                                                                            - **Component List**: A tree view on the left side lists components such as "AnimRect" and "Button."
                                                                            - **Trigger List**: A dropdown menu on the right displays trigger options like "DataEventTrigger," "DataTrigger," "EventTrigger," etc.
                                                                            - **Highlighted Trigger**: The "StoryboardCompletedTrigger" is highlighted in the dropdown menu.
                                                                            
                                                                            ### Visual Flow / Relationships
                                                                            The most prominent visual element is the dropdown menu displaying trigger options. The dropdown is positioned to the right of the tree view. The tree view is nested under the "Adding to:" label which points to "AnimRect." The search bar is above the tree view, and the tabs are at the very top of the interface.
                                                                            
                                                                            </details>
                                                                            
                                                                            <p></p>
                                                                            
                                                                            
- In the properties panel on the right add **InvokeCommandAction** in the **Actions** section and select a desired command. <details>
                                                                                                                            <summary>Noesis animation tutorial panel</summary>
                                                                                                                            
                                                                                                                            <p></p>
                                                                                                                            
                                                                                                                            [Noesis animation tutorial panel](../../image_data/6580557533a2243a7e0bc63911c280c25910ee767366895195601793a475e9a7.md)
                                                                                                                            
                                                                                                                            ### Overview
                                                                                                                            This image depicts a user interface element, specifically a properties panel within a software application. The panel is divided into sections for different properties such as Storyboard, Conditions, Actions, and Command parameters. The layout includes dropdown menus, text fields, checkboxes, and toggle switches.
                                                                                                                            
                                                                                                                            ### Key Elements
                                                                                                                            - **Storyboard Dropdown**: Located at the top right, contains a dropdown menu with the option "Anim" highlighted.
                                                                                                                            - **Conditions Section**: Positioned below the Storyboard dropdown, with a plus sign indicating expandable content.
                                                                                                                            - **Actions Section**: Below the Conditions section, also with a plus sign for expandable content.
                                                                                                                            - **Command Section**: Contains a dropdown menu labeled "InvokeCommandAction," which is expanded to show a nested "Command" section.
                                                                                                                            - **Binding Table**: Below the Command section, a table with headers "Name," "Relative," and "Context." A row under "Path" contains the text "AnimationIsDone."
                                                                                                                            - **Command Parameter Fields**: Below the binding table, several fields for entering command parameters, including "Use Event Args," "Event Args Parameter Path," "Event Args Converter," and "Event Args Converter Parameters."
                                                                                                                            - **Enabled Toggle Switch**: At the bottom, a toggle switch labeled "Enabled" with a checkmark indicating it is enabled.
                                                                                                                            
                                                                                                                            ### Visual Flow / Relationships
                                                                                                                            The most prominent visual elements are the dropdown menus and text fields. The dropdown menus are nested within sections, and the nested "Command" section is expanded to reveal additional details. The visual flow follows a top-down and left-to-right sequence, with expandable sections allowing users to view more details when needed.
                                                                                                                            
                                                                                                                            </details>
                                                                                                                            
                                                                                                                            <p></p>
                                                                                                                            
                                                                                                                            

## Additional resources

For more information about Noesis UI animations, see the [Noesis UI documentation](https://www.noesisengine.com/studio/) and check the [NoesisUI Animation Tutorial](https://www.noesisengine.com/docs/Gui.Core.AnimationTutorial.html).