# Station 5 - Light the Sphere Dialog
...
## Assets


• Station05-CustomUI: CustomUI gizmo
  • Visible: true
  • Script: the script that defines the custom UI elements must be attached. See
below.
  • ball:
   • This option is defined as part of the properties of the script. In the code,
this Entity is referenced through this.props.ball references.
   • When this option is enabled through the script, a designer is permitted to
select an Entity that is part of the world from the drop-down.
• Station05-OrbOfUINess: script
  • This script defines the customUI object.
  • It also creates the property definition for attaching the Sphere object to the
customUI.
• Sphere
  • A basic shape of Sphere type

  
...
...
# Station 5 - Light the Sphere Dialog
...
## Script

  
### Station05-OrbOfUINess
...
#### Property definition

 In the code for the ClickerDialog class, you can see the following definition:  
```
static propsDefinition = {
  ball: { type: PropTypes.Entity },
};
```
 The above defines the ball property definition on the Properties panel of the
object to which the script is attached. In this case, this ball definition is on
the CustomUI object for this station. The Entity type of the definition means that the designer is presented with a
drop-down labeled ball. From this drop-down, the designer can select an entity
...
...
# Station 5 - Light the Sphere Dialog
...
## Script

  
### Station05-OrbOfUINess
...
#### Property definition
...
that is already in the world. ![Image of selecting Sphere from the ball script property](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/487400771_686408177230470_1425958838774600305_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=uFKAFCK9kdkQ7kNvwGvwNbI&_nc_oc=AdnqH5rPRTZiFPTqyLUaYPwgoM1FV_gziIj5kiH7YVhRiVCwd7XCLELvJ51XPJUlVVQ&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=dvF99Ufdz...
...
# Station 5 - Light the Sphere Dialog
...
## Script

  
### Station05-OrbOfUINess
...
#### Property definition
...
 From this drop-down, the designer can select an object that already is present
in the world to be referenced through the ball property in the code. In the
example world, it has already been pre-selected for you to be the Sphere entity. As an experiment, you can try:
• Add a different Shape to the world.
• Select this Shape from the ball entry in the Properties panel of the Custom UI.
• See if the code works.
...
...
# Station 5 - Light the Sphere Dialog
...
## Script

  
### Station05-OrbOfUINess
...
#### MyButton() code

 For the `MyButton()` function, you have the following code:  
```
type MyButtonProps = {
  label: string;
  onClick: Callback;
  style: ViewStyle;
  baseColor: string;
};

function MyButton(props: MyButtonProps): UINode {
  const DEFAULT_COLOR = props.baseColor;
  const HOVERED_COLOR = "blue";
  const backgroundColor = new Binding<string>(DEFAULT_COLOR);
  const buttonText = new Binding<string>(props.label);

  return Pressable({
    children: Text({
      text: buttonText,
      style: {color: "white"},
    }),
    onClick: props.onClick,
    onEnter: (player: Player) => {
      console.log("onEnter";
      backgroundColor.set(HOVERED_COLOR, [player]);
      buttonText.set("hovered", [player]);
    },
...
...
# Station 5 - Light the Sphere Dialog
...
## Script

  
### Station05-OrbOfUINess
...
#### MyButton() code
...
    onExit: (player: Player) => {
      console.log("onExit");
      backgroundColor.set(DEFAULT_COLOR, [player]);
      buttonText.set(props.label, [player]);
    },
    style: {
      backgroundColor: backgroundColor,
      borderRadius: 8,
      height: 36,
      width: 120,
      alignItems: "center",
      justifyContent: "center",
      // additional styles are spreaded the last
      // to override default styles
      ...props.style,
    },
  });
}
```
 The type definition for `MyButtonProps` contains four fields:  
```
label: string;
onClick: Callback;
style: ViewStyle;
baseColor: string;
```
 These are the four variables that can be applied to a UI object of MyButton
type.
|  |
|  |
...
...
# Station 5 - Light the Sphere Dialog
...
## Script

  
### Station05-OrbOfUINess
...
#### MyButton() code
...
| label | Text label that appears on the button. |
| onClick | The onClick() event is defined as a callback to a function defined in the call to the MyButton function. |
| style | This is a customUI object type called ViewStyle, which enables styling of a UI View definition with JavaScript-like styling attributes. |
| baseColor | Text string identifying the base color for the button |
...
...
# Station 5 - Light the Sphere Dialog
...
## Script

  
### Station05-OrbOfUINess

 This customUI is similar to the one deployed in Station04. Differences:
• A third “Off” button
• Code to affect the color of the ball entity, based on the `onClick()` event for each button.

  
#### Property definition
...
#### MyButton() code
...
...
# Station 5 - Light the Sphere Dialog
...
## Script
...
### Color constants

 Above the class declaration, you can see the following constants, which define
the colors to apply:  
```
const colorOff: Color = new Color(0, 0, 1.0)
const colorRed: Color = new Color(0.8, 0, 0)
const colorGreen: Color = new Color (0, 0.8, 0)
```
  
...
...
# Station 5 - Light the Sphere Dialog
...
## Script
...
### Define sphere as a mesh entity

 To apply color properties to an entity in the world, you must create a reference
to the entity as a MeshEntity type. This allows you to access via TypeScript
the entity’s `style` properties, which include the color properties. Within the `initializeUI()` method, you can see the internal variable that is defined to hold the Sphere
entity from the `hz.props.ball` property value as a MeshEntity object. If this entity is valid, then the
styling properties are applied to set the default color for the sphere:  
```
const myBall = this.props.ball?.as(MeshEntity)!
if (myBall) {
  myBall.style.tintStrength.set(1)
  myBall.style.brightness.set(100)
  myBall.style.tintColor.set(colorOff)
}
```
...
...
# Station 5 - Light the Sphere Dialog
...
## Script
...
### Define sphere as a mesh entity
...
 You can also see the references to the nested `View()` objects. The second, nested `View()` object is defined as follows:  
```
View({
  children: [
    MyButton({
      label: "Off",
      baseColor: "black",
      onClick: () => {
        console.log("Pressed Off button.");
        myBall.color.set(new Color(colorOff)); // resets ball color to default.
      },
      style: {
        //backgroundColor: "#CF1313",
        marginRight: 24,
      },
    }),
    MyButton({
      label: "Red",
      baseColor: "red",


      onClick: () => {
        console.log("Pressed Red button.");
        myBall.color.set(new Color(colorRed));
      },
      style: {
        //backgroundColor: "#CF1313",
        marginRight: 24,
      },
    }),
    MyButton({
      label: "Green",
  ...
...
# Station 5 - Light the Sphere Dialog
...
## Script
...
### Define sphere as a mesh entity
...
      baseColor: "green",
      onClick: () => {
        console.log("Pressed Green button.");
        myBall.color.set(new Color(colorGreen));
      },
      style: {
        // backgroundColor: "#19AD0E",
      },
    }),
  ],
  style: { flexDirection: "row", marginTop: 12 },
  }),
```
 You can see three different calls to `MyButton()`, which returns a Pressable object inserted into the `View()`. As part of each call, you can see the parameters that are passed into the
function. In particular, you can see in the `onClick()` event for each button the arrow function that is called back from the `MyFunction()` function. This callback functionality is enabled through the type definition
for `MyButtonProps`.
• Since the reference to the ball entity is defined as part of the customUI object
...
...
# Station 5 - Light the Sphere Dialog
...
## Script
...
### Define sphere as a mesh entity
...
to which the script is attached, you can reference the ball entity using the
this keyword.

 So, to enable a customUI object to modify properties of another object in the
world:
• Add a property to the Properties panel of the custom UI. This is done through
the type definition of the Props for the class that you are extending in the
TypeScript.
• Modify the `MyButton()` function:
  • Add the `onClick()` property as a callback to `MyButtonProps`.
  • Add code to reference `props.onClick` in the `MyButtonProps` definition.
  • Since the above is of `Callback` type, you can define the callback function as an arrow function in the
parameters of the call you make to `MyButton()` function from within the `View()` in your `initializeUI()` method.
...
...
# Station 5 - Light the Sphere Dialog
...
## Script

  
### Station05-OrbOfUINess
...
### Color constants
...
### Define sphere as a mesh entity
...
...
# Station 5 - Light the Sphere Dialog
...
## Key Learnings

  
### Meta Horizon Worlds learnings


• None.

  
...
...
# Station 5 - Light the Sphere Dialog
...
## Key Learnings
...
### TypeScript coding


• How to use a customUI to affect other entities in your world.

    ![Nav Logo](https://static.xx.fbcdn.net/rsrc.php/yE/r/3SoBlk8EqOQ.svg)


[Facebook](https://www.facebook.com/MetaHorizon/)
[Threads](https://www.threads.com/@metahorizon)
[X](https://x.com/MetaHorizon)
[Instagram](https://www.instagram.com/metahorizon/)
[YouTube](https://www.youtube.com/@MetaQuestVR)

 Learn
[Documentation](https://developers.meta.com/horizon-worlds/learn/documentation/)
[Blog](https://developers.meta.com/horizon/blog/)
[Forum](https://communityforums.atmeta.com/t5/Creator-Forum/ct-p/Meta_Horizon_Creator_Forums)

 Programs
[Meta Horizon Creator Program](https://developers.meta.com/horizon-worlds/programs/)
...
...
# Station 5 - Light the Sphere Dialog
...
## Key Learnings
...
### TypeScript coding
...
 My Creations
[My Worlds](https://horizon.meta.com/creator/worlds_all/?utm_source=horizon_worlds_creator)
[My Assets](https://horizon.meta.com/creator/assets/?utm_source=horizon_worlds_creator)
[Performance](https://horizon.meta.com/creator/performance/traces/?utm_source=horizon_worlds_creator)

 Privacy & Legal
[Privacy Policy](https://www.meta.com/legal/privacy-policy/)
[Legal](https://www.meta.com/legal/supplemental-terms-of-service/)

 © 2025 Meta
...
...
# Station 5 - Light the Sphere Dialog
...
## Key Learnings

  
### Meta Horizon Worlds learnings
...
### TypeScript coding
...
...
# Station 5 - Light the Sphere Dialog
...
## Additional Links
- [Meta home](https://developers.meta.com/horizon-worlds/)
- [Login](https://developers.meta.com/login/?redirect_uri=https%3A%2F%2Fdevelopers.meta.com%2Fhorizon-worlds%2Flearn%2Fdocumentation%2Ftutorial-worlds%2Fcustom-ui-examples-tutorial%2Fstation-5-light-the-sphere-dialog%2F)
...
# Station 5 - Light the Sphere Dialog

 This station demonstrates how to use a custom UI to alter some aspect of the
external world. In this case, when you click a button on the custom UI, you set the
...
...
# Station 5 - Light the Sphere Dialog
...
color for a sphere (The Orb of UINess) in front of you. ![Image of Station 5](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/476001927_646003201270968_1807146693291383433_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=fswNM9RQUJkQ7kNvwGopnUZ&_nc_oc=AdnGQzMC7g6v6wtxnDUV6DLxskKohZaqY5amfVwls7odLiTCvhfexVvqYDU-y-1twM4&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=dvF99UfdzN86I_jFvNTvYg&oh=00...
...
# Station 5 - Light the Sphere Dialog
...
## Assets
...
## Script
...
## Key Learnings
...
## Additional Links
...
      Learn
# Station 5 - Light the Sphere Dialog
...
