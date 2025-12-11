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
- Select **Storyboard Completed Trigger** to handle end of animation state. ![Noesis animation tutorial panel](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/594016181_880045787866707_1116802637052352730_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=VUhzld_YnogQ7kNvwHR51cR&_nc_oc=AdlmGf3NskBrFsvM1dpXlmnJ3zWQGOuxTKjnorGFdDdf2aHwvPSOk3nGLfwIxJace8RRLNhrwf0kv9wWxnnVBnSS&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=VdI_Wwcm0t2MpynFORHI-g&oh=00_AfnmkbbTgBhFR1cvQYrD5pmt3iBrfIRs8UgfWNPrHurIHQ&oe=69556DF2)
- In the properties panel on the right add **InvokeCommandAction** in the **Actions** section and select a desired command. ![Noesis animation tutorial panel](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/594976077_880045784533374_5601497425012940037_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=0ABMJcuhSZ4Q7kNvwHW1H9I&_nc_oc=Adn5daqxQiGN526NPddusZU7-IXBWTqGxYXdgkjvVT2xr9KwFk7_nZKAax9M7DTVE1wq0gz5KJGsnqRPEyCzh1GD&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=VdI_Wwcm0t2MpynFORHI-g&oh=00_Afksqb5eTLpzilPdgd13PkG6Qa3306fuCwPrO8e_hVVUSQ&oe=695575FF)

## Additional resources

For more information about Noesis UI animations, see the [Noesis UI documentation](https://www.noesisengine.com/studio/) and check the [NoesisUI Animation Tutorial](https://www.noesisengine.com/docs/Gui.Core.AnimationTutorial.html).