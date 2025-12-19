Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/feature-samples/custom-ui-examples-tutorial/station-9-animation-effects

# Station 9 - Animation Effects

In this station, you can review basic examples of applying animated effects to static content in your custom user interfaces. In this case, a single static image is “animated” by dynamically changing its width and height properties.

In TypeScript 2.0.0 and later, animation is managed through new classes:

* The AnimatedBinding class allows you to apply variables to individual properties on a customUI object. In its basic form, when you create a new binding of the AnimationBinding class, you assign it a numeric value and can optionally apply a duration value. When the `set()` method is used, the value is applied to the object’s property over the time set by the optional duration value, creating the appearance of movement.
  + The AnimatedBinding class has multiple supported methods. In this example, we only use the `set()` method to change it to a new value.
* The Animation class defines the behaviors of how the bound property is animated. Using the Animation class, you can create delays, sequences, and repetition of your defined animations.

## Assets

This two-part station is composed of two CustomUI entities, each of which has a different script attached to it. See below.

## Scripts

### Station09a-ScrollAsset.ts

#### Initialize

This script has the basic structures of a simple image display in the custom UI with the following modules added from the v2.0.0 or later UI API (horizon/ui):

```
AnimatedBinding,
Animation,
Easing
```

The AnimatedBinding class is used to define the horizontal scaling property of the image:

```
let varScaleX: AnimatedBinding = new AnimatedBinding(0);
```

This scaling value is a multiple of original size. For example, a value of `2` sets the width of the image to be 2x the original width.

When a new value is applied using the `set()` method, the image’s scale is gradually changed to meet the new value, effectively creating an animation.

> **Tip**: You can configure other aspects of the animation through the Animation class, which is discussed later.

#### initializeUI()

In the `initializeUI()` method, this binding is passed in as an attribute value for the transform styling. The height and width properties are the original values:

```
// Following captures the Property textureAsset to a local variable for use,
// which is required for TS v2.0.0 or later.
let ta: any | undefined = this.props.textureAsset
  return View({
  children: [
    Text({ text: "Animating Width" }),
    View({
      children: [loadImage2(ta, {height: 200, width: 200})],
      style: {
        transform: [{ scaleX: varScaleX }, ],
        transformOrigin: [0,0],
      },
    }),
  ],
  style: {
    backgroundColor: "black",
    alignItems: "flex-start",
  },
});
```

#### `preStart()` method

After the `initializeUI()` method is executed, the `preStart()` method is fired, where the animation sequence for the horizontal scaling of the image is defined.

> **Note**: In the following code, the animation is wrapped in a Promise that delays 0.5 seconds before the animation plays. This delay is inserted to allow the image to be fully loaded before the animation is begun. If the image is not loaded before the animation starts, it may not work.

```
preStart() {
  /*
      Here, the animated sequence is defined in two animations, timed at 750ms each. One scales the width of the image
      to 1x the original size, while the other contracts it back to 0. Each is delayed by 250ms, which makes the
      entire sequence of two animations 2 seconds in duration. The sequence is set to repeat indefinitely.

      We insert the call in the preStart() method to ensure that the animation gets set before other code is executed.

      The setting of the varScaleX binding is wrapped in a Promise that kicks in after a 0.5 second timeout. This is done to allow time
      for the image to be loaded through LoadImage2. If the animation is begun before the image is loaded, it may fail to start.
  */
  const timerPromise = new Promise<string>((resolve, reject) => {
    this.async.setTimeout(() => {
      resolve("timeout 0.5 seconds")
      varScaleX.set(Animation.repeat(
        Animation.sequence(
          Animation.delay(250,Animation.timing(1,{
            duration: 750,
            easing: Easing.inOut(Easing.ease),
          })),
          Animation.delay(250,Animation.timing(0,{
            duration: 750,
            easing: Easing.inOut(Easing.ease),
          }))
        )
      ))
        }, 500)
    reject("timeout 0.5 seconds failed")
  })
}
```

The following Promise structure is used to set up a delay of 500 ms, after which the resolve code is executed. In the above, you can see that this code includes the animation.

```
const timerPromise = new Promise<string>(resolve, reject) => {
  this.async.setTimeout(() => {
    resolve("timeout 0.5 seconds")
    ...
  }, 500)
  reject("timeout 0.5 seconds failed")
})
```

Promises are a useful programming structure for ensuring that code is executed in a specific order, which is very helpful in a non-deterministic execution environment. For more information on how to use Promises in Meta Horizon Worlds, see [TypeScript Script Lifecycle](../../../Scripting/TypeScript%20Script%20Lifecycle.md).

The core of the animation is two animation timing calls, the first of which is listed below:

```
Animation.delay(250,Animation.timing(1,{
  duration: 750,
  easing: Easing.inOut(Easing.ease),
})),
```

* The above sets an animation (`Animation.timing(1)`) to redefine the horizontal scaling property to be `1`.
* In the options parameter for the timing call:
  + The animation lasts `750` milliseconds
  + There should be dampening (`Easing`) in and out of the animation.
* It is wrapped in a delay (Animation.delay) of `250` milliseconds.

The other timing call changes the horizontal scaling back to `0`, which moves the animation in the opposite direction.

The two animations are bound together in an `Animation.sequence`. That sequence is set to repeat (`Animation.repeat`).

In this manner, with a few nested calls to the Animation class, a simple looping animation can be created.

**Full script**:

```
/*
  Station 9a: Animation - Scrolling assets

  This station demonstrates how to animate images in a custom UI by scaling the X-coordinate of the asset.

*/

import {
  PropTypes,
} from "horizon/core";

import {
  UIComponent,
  View,
  Text,
  AnimatedBinding,
  Animation,
  Easing
} from "horizon/ui";

import { loadImage2 } from 'StationAll-CustomUI-Library'
import { type UITextureProps } from 'StationAll-CustomUI-Library'

/*
  Define variable for the AnimatedBinding that will be used to scale the width of the image. This var
  must be available to both initializeUI() and start() methods.

  Var is a multiple of the original value. Var is initially set to 0, which means that image
  container initially appears as empty.
*/
let varScaleX: AnimatedBinding = new AnimatedBinding(0);

class FillImage extends UIComponent<UITextureProps> {
  panelHeight = 400;
  panelWidth = 400;

/*
  This property definition defines the textureAsset property to be the value selected from
  the PropTypes.Asset drop-down property on the Properties panel.
*/
  static propsDefinition = {
    textureAsset: { type: PropTypes.Asset },
  };

/*
  This initializeUI() method defines the customUI panel.

*/

initializeUI() {

    // Following captures the Property textureAsset to a local variable for use, which is required for TS v2.0.0 or later.
    let ta: any | undefined = this.props.textureAsset
      return View({
      children: [
        Text({ text: "Animating Width" }),
        View({
          children: [loadImage2(ta, {height: 200, width: 200})],
          style: {
            transform: [{ scaleX: varScaleX }, ],
            transformOrigin: [0,0],
          },
        }),
      ],
      style: {
        backgroundColor: "black",
        alignItems: "flex-start",
      },
    });
  };

  preStart() {
    /*
        Here, the animated sequence is defined in two animations, timed at 750ms each. One scales the width of the image
        to 1x the original size, while the other contracts it back to 0. Each is delayed by 250ms, which makes the
        entire sequence of two animations 2 seconds in duration. The sequence is set to repeat indefinitely.

        We insert the call in the preStart() method to ensure that the animation gets set before other code is executed.

        The setting of the varScaleX binding is wrapped in a Promise that kicks in after a 0.5 second timeout. This is done to allow time
        for the image to be loaded through LoadImage2. If the animation is begun before the image is loaded, it may fail to start.
    */
   const timerPromise = new Promise<string>((resolve, reject) => {
      this.async.setTimeout(() => {
        resolve("timeout 0.5 seconds")
        varScaleX.set(Animation.repeat(
          Animation.sequence(
            Animation.delay(250,Animation.timing(1,{
              duration: 750,
              easing: Easing.inOut(Easing.ease),
            })),
            Animation.delay(250,Animation.timing(0,{
              duration: 750,
              easing: Easing.inOut(Easing.ease),
            }))
          )
        ))
          }, 500)
      reject("timeout 0.5 seconds failed")
    })
  }

  start() {}
};

UIComponent.register(FillImage);
```

### Station09b-StartStopAnimation.ts

This script is very similar to the previous, with the following differences:

* Instead of scaling horizontally, the image is scaled vertically (`varScaleY`).
* A button is added to the customUI, which allows for toggling the animation.
* On the definition for the button, the `onClick()` event toggles the `animationOn` flag.
* When this flag is toggled on, the animation restarts.

To support both starting and restarting of the animation, the following code is moved outside of the class:

```
// flag to control whether to run the animation or not.
let animationOn = 1;
// for animation, we define the binding variable varScaleY. We initialize it with a value of 0.
const varScaleY = new AnimatedBinding(0);

/*
  Following function starts (or restarts) the animated sequence
*/
function startAnimation(myScaleY: AnimatedBinding) {
  myScaleY.set(Animation.repeat(
      Animation.sequence(
        Animation.delay(250,Animation.timing(1,{
          duration: 750,
          easing: Easing.inOut(Easing.ease),
        })),
        Animation.delay(250,Animation.timing(0,{
          duration: 750,
          easing: Easing.inOut(Easing.ease),
        }))
      )
  ))
}
```

The `startFunction()` is initially called from the `start()` method. This call begins the animation for the first time.

The `onClick()` method for the button on the customUI toggles stopping and restarting the animation, using the current animationOn flag to determine whether it should be stopped or started:

```
onClick: () => {
  if (animationOn == 1) {
    varScaleY.stopAnimation()
    animationOn = 0
    buttonText.set("Start")
  } else {
    startAnimation(varScaleY)
    animationOn = 1
    buttonText.set("Stop")
  }
},
```

**Full script**:

```
/*
  Station 9b: Animation - Start and Stop Animation

  This station demonstrates how to animate images in a custom UI by scaling the Y-coordinate of the asset. You can
  also press the button in the custom UI to toggle start/stop of animation playback.

*/

import {
  PropTypes,
  World,
  Player
} from "horizon/core";

import {
  UIComponent,
  Binding,
  View,
  Text,
  Pressable,
  Callback,
  ViewStyle,
  UINode,
  AnimatedBinding,
  Animation,
  Easing
} from "horizon/ui";

import { loadImage2 } from 'StationAll-CustomUI-Library'
import { type UITextureProps } from 'StationAll-CustomUI-Library'

/*
    Similar to Station09a. Key differences:
    * Instead of setting the animation binding to scale width, we set it to scale height.
    * The animationOn flag gates execution of subsequent animation.
    * animation is started and restarted through the startAnimation() function.
    * animation is stopped using the stopAnimation() method on varScaleY.
*/

// flag to control whether to run the animation or not.
let animationOn = 1;
// for animation, we define the binding variable varScaleY. We initialize it with a value of 0.
const varScaleY = new AnimatedBinding(0);

/*
  Following function starts (or restarts) the animated sequence
*/
function startAnimation(myScaleY: AnimatedBinding) {
  myScaleY.set(Animation.repeat(
      Animation.sequence(
        Animation.delay(250,Animation.timing(1,{
          duration: 750,
          easing: Easing.inOut(Easing.ease),
        })),
        Animation.delay(250,Animation.timing(0,{
          duration: 750,
          easing: Easing.inOut(Easing.ease),
        }))
      )
  ))
}

type MyButtonProps = {
  label: string;
  onClick: Callback;
  style: ViewStyle;
  baseColor: string;
};

function MyButton(props: MyButtonProps): UINode {
  const DEFAULT_COLOR = "green";
  const HOVERED_COLOR = "blue";
  const backgroundColor = new Binding<string>(DEFAULT_COLOR);
  const buttonText = new Binding<string>("Stop");

  return Pressable({
    children: Text({
      text: buttonText,
      style: { color: "white" },
    }),
    onClick: () => {
      if (animationOn == 1) {
        varScaleY.stopAnimation()
        animationOn = 0
        buttonText.set("Start")
      } else {
        startAnimation(varScaleY)
        animationOn = 1
        buttonText.set("Stop")
      }
    },
    onEnter: (player: Player) => {
      backgroundColor.set(HOVERED_COLOR, [player]);
    },
    onExit: (player: Player) => {
      backgroundColor.set(DEFAULT_COLOR, [player]);
    },
    style: {
      backgroundColor: backgroundColor,
      borderRadius: 8,
      height: 36,
      width: 120,
      alignItems: "center",
      justifyContent: "center",
      // additional styles are spread the last
      // to override default styles
      ...props.style,
    },
  });
}

class StartStopAnimation extends UIComponent<UITextureProps> {
  panelHeight = 400;
  panelWidth = 300;

/*
  This property definition defines the textureAsset property to be the value selected from
  the PropTypes.Asset drop-down property on the Properties panel.
*/
  static propsDefinition = {
    textureAsset: { type: PropTypes.Asset },
  };

/*
  This initializeUI() method defines the customUI panel.
*/
initializeUI() {

/*
    Same basic functionality as Station09a.
*/

    // Following captures the Property textureAsset to a local variable for use, which is required for TS v2.0.0 or later.
    let ta: any | undefined = this.props.textureAsset
      return View({
      children: [
        Text({ text: "Start and Stop Anim" }),
        View({
          children: [loadImage2(ta, {height: 250, width: 250})],
          style: {
            height: 200, width: 250,
            transform: [{ scaleY: varScaleY }, ],
            transformOrigin: [0,0],
          },
        }),
        Text({ text: " " }),
        View({
          children: [
            MyButton({
              label: "Stop",
              baseColor: "white",
              onClick: () => {
              },
              style: {
                alignContent: "center",
              },
        }),
      ],
    }),
    ],
      style: {
        backgroundColor: "black",
        alignItems: "center",
      },
    });
  }

  start() {
    /*
        Here, the animated sequence is defined in a separate function.

        We insert the call in the start() method to ensure that the animation gets set before other code is executed.

        The setting of the varScaleY binding is wrapped in a Promise that kicks in after a 0.5 second timeout. This is done to allow time
        for the image to be loaded through LoadImage2. If the animation is begun before the image is loaded, it may fail to start.
    */

    const timerPromise = new Promise<string>((resolve, reject) => {
      this.async.setTimeout(() => {
        resolve("timeout 0.5 seconds")
        startAnimation(varScaleY)
      }, 500)
      reject("timeout 0.5 seconds failed")
    })
  }
}

UIComponent.register(StartStopAnimation);
```

## Key learnings

### Meta Horizon Worlds learnings

Basics of how to use the AnimatedBinding and Animation classes.

### TypeScript learnings

None.