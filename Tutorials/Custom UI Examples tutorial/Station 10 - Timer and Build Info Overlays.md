Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/custom-ui-examples-tutorial/station-10-timer-and-build-info-overlays

Learn

# Station 10 - Timer and Build Info Overlays

This station introduces the **non-interactive screen overlay**. Custom UIs that are set in Screen Overlay mode function as a Head Up Display (HUD) on the screen in front of the player. In this manner, you can deploy a HUD for players in your world.

This station features two example overlays:

* **Build Info**: This simple overlay allows a designer to specify build information to be displayed on-screen.
  **Tip**: This custom UI is simple to implement.
* **Timer**: This overlay displays the player’s name and a timer in the lower-left corner.

  + The timer starts counting down when the player enters the world.
  + If the player finds and runs over the button before the timer runs out, the player wins. Sounds and visual effects are played back.
  + If the timer is allowed to run out, the player loses. Sounds and visual effects are played back.

Both overlays are visible in the following image:

![Image of Timer and Build Info overlays](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/475484540_646003167937638_9115120662051359098_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=uH9Hlz2nL20Q7kNvwG2-5Nv&_nc_oc=AdkQeqakqPccIf3koseXCl26dKqnkhgZjZHBULlmDmoILiSZDhIJMuH8-EeH7oZQ2E8&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=bqFhnuwoNO-Xl9XEa-ZcJQ&oh=00_AfgGU_DJvexirbSYNde_xDZ_7595qopJdAnVUfwQcdIsGg&oe=692EC4A8)

## Configuration Differences for Screen Overlay Custom UIs

To build a non-interactive screen overlay, you must add a custom UI gizmo and configure its `initializeUI()` method. As opposed to default custom UIs that are physical objects in the world, the following changes must be applied for non-interactive screen overlays:

- When you add a Custom UI gizmo to your world, set the Display Mode property to Screen Overlay, which causes the gizmo to be displayed as an overlay for the player.
- In the TypeScript definition for the top-level `View()` object in the `initializeUI()` method, the position property must be set to absolute. See examples.
  - Screen position of the UI is determined based on the values set for the style properties left, right, top, and bottom. These values determine the absolute distance from these screen margins in pixels.
- `panelHeight` and `panelWidth` properties do not apply to screen overlay custom UIs. These properties can be removed or commented out from your script.

## Safe Screen Locations

When you are adding a screen overlay, you should consider where to locate it based on the supported platforms. For example, on mobile devices, action buttons may be present in some parts of the screen, which collides with the placement of a screen overlay at that location.

**Tip**: The lower-left corner is generally a safe location. These example overlays are added there.

For more information, see [Safe Placement of UI Controls](/hw-docs/create-for-web-and-mobile/designing-worlds-for-mobile-and-web/safe-placement-of-ui-controls/).

## Assets

### Build Info overlay

* Custom UI gizmo
* Script to define the custom UI should be attached to the gizmo

### Timer overlay

The timer overlay is composed of the following sets of assets.

#### Screen overlay

* Custom UI gizmo
* Script to define the custom UI should be attached to the gizmo. See below.
* Sounds to use in the timer. In this case, sounds are added from **Build menu > Sounds**:
  + Button Tap - tick
  + Sports Buzzer - end of timer

#### Stop button

* Trigger Zone gizmo
* Button object - For example, you can add a Cylinder shape and then flatten it to turn it into a visible cue on the surface beneath the trigger zone.
* Script to send the StopTimer event
* Sounds to use. In this case, sounds are added from **Build menu > Sounds**:
  + Arcade Win - tick

## Scripts

### Station10-BuildInfo.ts

This script defines a very simple overlay that you can enable and populate with values through script properties. This script must be attached to the custom UI gizmo whose Display Mode property is set to Screen Overlay.

```
/*
  Station 10b: Build Info in Non-Interactive Overlay

  This station demonstrates use of the non-interactive Screen Overlay for inserting user-defined build
  information on the screen.

  IMPORTANT: When you add the custom UI gizmo,
  make sure to set the value of Display mode to "Screen Overlay"
  for non-interactive screen overlays (HUDs).
*/

import * as hz from 'horizon/core';
import {
  UIComponent,
  View,
  Text,
  Binding,
} from "horizon/ui";

class Station10_BuildInfo extends UIComponent<typeof Station10_BuildInfo> {
  static propsDefinition = {
    enabled: {type: hz.PropTypes.Boolean, default: true},
    buildMessage: {type: hz.PropTypes.String},
    buildNumber: {type: hz.PropTypes.String},
  };

  // Define bindings for the custom UI.
  strBuildMessage = new Binding<string>('Build:');
  strBuildNumber = new Binding<string>('1234.567');
  strDisplay = new Binding<string>('flex')

  /*
  Defines the custom UI
*/
initializeUI() {
  /*
    Define values for bindings.
  */
  if (this.props.enabled == false) {
    this.strDisplay.set('none')
  } else {
    this.strDisplay.set('flex')
  }
  let bM: string | undefined = this.props.buildMessage
  if (bM) {
    this.strBuildMessage.set(bM)
  }
  let bN: string | undefined = this.props.buildNumber
  if (bN) {
    this.strBuildNumber.set(bN)
  }
  /*
    initializeUI() must return a View object.
  */
  return View({
    children: [
      Text({ text: this.strBuildMessage, style: {
        fontFamily: "Roboto",
        color: "black",
        fontWeight: "600",
        fontSize: 18,
        alignItems: "flex-end",
      } }),
      Text({ text: this.strBuildNumber, style: {
        fontFamily: "Roboto",
        color: "black",
        fontWeight: "600",
        fontSize: 18,
        alignItems: "flex-end",
      } }),

      ],
    // These style elements apply to the entire custom UI panel.
    style: {
      position: "absolute", // IMPORTANT: This attribute must be set to "absolute" for non-interactive overlays.
      display: this.strDisplay,
      flexDirection: "row",
      alignItems: "flex-end",
      padding: 2,
      left: 4, // IMPORTANT: This value determines the absolute location in pixels of the UI relative to left margin.
      bottom: 4, // IMPORTANT: This value determines the absolute location in pixels of the UI relative to bottom margin.
  },
  });
}
  start() {}
}
hz.Component.register(Station10_BuildInfo);
```

#### Notes

* There are three key variables which are captured from the Properties panel and then applied in the custom UI. See Variables below.
* Key style properties on the `View()` object:
  + `Position`: `"absolute"` is required for a screen overlay.
  + `display`: `this.strDisplay` is a binding to handle whether the custom UI is displayed or not based on the enabled flag in the Properties panel. See Variables below.
  + The left and bottom properties are used to position the absolute location of the overlay relative to these edges of the screen. In this example, it is placed `4px` from the left margin and `4px` from the bottom margin.

#### Variables

This script maps three script properties to bindings on the custom UI.

**Tip**: These script properties could be replaced by JSON data, allowing for the updating of build information from outside of the editing interface.

| **Properties** | **Temp Variables** | **Bindings** | **Description** |
| --- | --- | --- | --- |
| `enabled` | n/a | `strDisplay` | When enabled is `true`, `strDisplay` is set to `flex`, which causes the custom UI to be displayed. When enabled is `false`, `strDisplay` is set to `none`, which hides the custom UI. |
| `buildMessage` | `bM` | `strBuildMessage` | The script property value is passed through a temporary variable (`bM`) and then `set()` to the `strBuildMessage` binding. |
| `buildNumber` | `bN` | `strBuildNumber` | Similar to `strBuildMessage`, this variable can be used for assigning a specific build number. |

That’s about it!

### Station10-NonInteractiveOverlay.ts

This script must be attached to the customUI gizmo that defines the timer overlay.

```
/*
  Station 10a: Non-Interactive Overlay

  This station demonstrates use of the non-interactive Screen Overlay mode for custom UIs. When a custom UI is set to this mode,
  it is displayed as a screen overlay in front of the player, which makes it a useful mechanism for displaying HUD information
  during gameplay.

  In this station, a non-interactive timer is placed in front of the player. The player has a predefined number of seconds to find the
  button in the world and step on it, stopping the timer. Else, the timer runs out, and the player "loses."

  This script sets up the overlay and launches the timer.

  IMPORTANT: When you add the custom UI gizmo, make sure to set the value of Display mode to "Screen Overlay" for non-interactive
  screen overlays (HUDs).
*/

import * as hz from 'horizon/core';
import {
  UIComponent,
  View,
  Text,
  ViewStyle,
  Callback,
  Pressable,
  Binding,
  UINode,
  Image,
  ImageSource,
  ImageStyle,
} from "horizon/ui";

// borrowed from Advanced Tutorial: Rooftop Racers
export const GameStart = new hz.NetworkEvent<{ timeMS: number }>("GameStart")
export const GameOver = new hz.NetworkEvent<{ timeMS: number }>("GameOver")
export const TimerStart  = new hz.NetworkEvent<{ timeMS: number }>("TimerStart")
export const TimerEnd  = new hz.NetworkEvent<{ timeMS: number }>("TimerEnd")

// borrowed from Advanced Tutorial: Rooftop Racers
export function fctnTimedIntervalAction(
  timerMS: number,
  component: hz.Component,
  onTickAction: (timerMS: number) => void,
  onEndAction: () => void
): number {
    let timerID = component.async.setInterval(() => {
      if (timerMS > 0) {
        onTickAction(timerMS); // Call the onTick function
        timerMS -= 1000;
      } else {
        if (timerID !== undefined) {
          onEndAction();
          component.async.clearInterval(timerID);
        }
      }
    }, 1000);
    return timerID;
}

class Station10_NonInteractiveOverlay extends UIComponent<typeof Station10_NonInteractiveOverlay> {

  static propsDefinition = {
    StartTimerSecs: {type: hz.PropTypes.String, default: 20}, // Time in seconds for the timer to elapse
    soundTick: {type: hz.PropTypes.Entity}, // sound entity in the world to play with each tick (1 sec)
    soundGameOver: {type: hz.PropTypes.Entity}, // sound entity in the world to play when timer ends
    soundGameWin: {type: hz.PropTypes.Entity}, // sound entity in the world to play when you stop the timer before it runs out.
  };

//  panelHeight = 300; IMPORTANT: properties do not apply to UI of Screen Overlay type
//  panelWidth = 300; IMPORTANT: properties do not apply to UI of Screen Overlay type

  countdownTimerID: number = 0;
  strPlayerName = new Binding<string>(''); // Init and set default for string variable bound to custom UI for player name;
  intTimeRemainingSecs = new Binding<string>('0'); // Init and set default for int variable bound to custom UI for the message associated with the total;
  strDisplay = new Binding<string>('flex'); // property to manage visibility of HUD

  // Following config object is applied to the popup that is shown when the timer ends. These properties are available for
  // configuration, although only some of them are modified for this example.
  myPopupOptions: hz.PopupOptions = {
    position: new hz.Vec3(0, -0.5, 0), // default
    fontSize: 18, // default
    fontColor: new hz.Color (0,0,0),
    backgroundColor: new hz.Color (0.26,0.53,0.96), // lightblue = RGB(66,135,245)
    playSound: false,
    showTimer: false,
  };

  //  Defines the custom UI
  initializeUI() {

    //  initializeUI() must return a View object.
    return View({
      children: [
        Text({ text: this.strPlayerName, style: {
          fontFamily: "Roboto",
          fontWeight: "600",
          color: "black",
          alignItems: "center",
        } }),
        Text({ text: this.intTimeRemainingSecs, style: {
          fontFamily: "Roboto",
          color: "red",
          fontWeight: "600",
          fontSize: 36,
          alignItems: "center",
          padding: 12,
        } }),
        ],

        // These style elements apply to the entire custom UI panel.
      style: {
        position: "absolute", // IMPORTANT: This property must be set to "absolute" for custom UI Screen Overlay type.
        display: this.strDisplay,
        alignItems: "center",
        padding: 12,
        left: 36, // IMPORTANT: This value determines the absolute location in pixels of the UI relative to left margin.
        bottom: 36, // IMPORTANT: This value determines the absolute location in pixels of the UI relative to bottom margin.
        backgroundColor: new hz.Color (0.26,0.53,0.96), // light blue.
        borderColor: "black",
        borderWidth: 2,
      },
    });
  }

  // preStart() {}

  start() {

    let tickSound: any | undefined = this.props.soundTick?.as(hz.AudioGizmo);
    let STsecs: number | undefined = Number(this.props.StartTimerSecs)
    let booGameOver: boolean = false

    // listener to receive TimerEnd event (win or lose)
    this.connectNetworkBroadcastEvent(TimerEnd, (data:{timeMS: number}) => {
      console.log("Received TimerEnd event.")
      this.async.clearInterval(this.countdownTimerID);
      if ((data.timeMS == -1) && (booGameOver == false)) { // Trigger Zone has been tripped and the game has not ended.
        booGameOver = true;
        this.fctnGameWin()
      } else { // Ran out of time. Code that is executed to handle this scenario is referenced call to set the timed interval. See below.
        booGameOver = true;
      }
    });

    // Capture player name on entrance and apply it and Start timer to the screen overlay
    this.connectCodeBlockEvent(this.entity, hz.CodeBlockEvents.OnPlayerEnterWorld, (player: hz.Player) => {
      let strPlayerName: string | undefined = player.name.get()
      if (strPlayerName) {
        if (strPlayerName.length > 12) {
          strPlayerName = strPlayerName.substring(0,9) + "..."
        }
        this.strPlayerName.set(strPlayerName)
      }
      let STsecs: number | undefined = Number(this.props.StartTimerSecs)
      if (STsecs > 0) {
        this.intTimeRemainingSecs.set(this.props.StartTimerSecs);
      } else {
        console.error ("StartTimerSecs property value must be greater than 0. Disabling timer.")
        this.strDisplay.set('none');
      }

      // begin timer when player enters.
      if (STsecs > 0 ) {
        this.countdownTimerID = fctnTimedIntervalAction((Number(this.props.StartTimerSecs) * 1000), this,
          (timerMS) => {
            if (timerMS > 0) {
              if (tickSound) {
                tickSound.play()
              } else {
                console.warn("No selected sound for soundTick property.")
              }
              this.intTimeRemainingSecs.set((timerMS/1000).toString());
            } else {
              this.intTimeRemainingSecs.set('0');
            };
          },
          this.fctnGameOver.bind(this)
        );
      };
    });
  }

  // Executed when Trigger Zone is triggered and time remains.
  private fctnGameWin(): void {
    console.log("You win!")
    let gameWinSound: any | undefined = this.props.soundGameWin?.as(hz.AudioGizmo);
    if (gameWinSound) {
      gameWinSound.play()
    } else {
      console.warn("No selected sound for soundGameWin property.")
    }
    this.world.ui.showPopupForEveryone("You win!", 3, this.myPopupOptions);
  }

  // Executed when timer has expired.
  private fctnGameOver(): void {
    console.log("Game over!")
    this.sendNetworkBroadcastEvent(TimerEnd, {timeMS: 0});
    let gameOverSound: any | undefined = this.props.soundGameOver?.as(hz.AudioGizmo);
    if (gameOverSound) {
      gameOverSound.play()
    } else {
      console.warn("No selected sound for soundGameOver property.")
    }
    this.intTimeRemainingSecs.set('0')
    this.strDisplay.set("none")
    this.world.ui.showPopupForEveryone("Game Over!", 3, this.myPopupOptions);

  }
}

UIComponent.register(Station10_NonInteractiveOverlay);
```

#### Properties

The Properties in this script defined the number of seconds to set for the countdown. This value must be greater than `0` to enable the timer.

The other Properties allow you to select a sound entity in your world to play for each second tick, game win, and game loss.

#### Bindings

The three Bindings are applied to the custom UI:

* **`strPlayerName`**: This Binding is assigned to the name of the player who enters the world.
* **`intTimeRemainingSecs`**: This Binding is initially assigned to the property value for the number of seconds to count down. With each second, it is updated to a new value that is one less than the previous value.
* **`strDisplay`**: This String value is used to toggle visibility of the custom UI. See the style properties for how it is applied.

#### `fctnTimedIntervalAction()` function

This function is called to launch the timer. It requires four parameters:

* The number of milliseconds on the timer. This value is initially set to the Property value.
* A reference to the Component abstract class
* The `onTickAction()` is a callback to the arrow function that is executed with each tick (second).
* The `onEndAction` is a callback to the parameter, which is a call to a local private function `fctnGameOver()`, handling the end of game actions.

The function defines a timer (`timerID`) to be tied to an interval of 1000ms. Every 1000ms, if the number of milliseconds is greater than zero:

- Execute the `onTickAction`, which plays a sound.
- Decrement `timerMS` by 1000ms.

Otherwise, the `onEndAction()` callback is executed.

#### start() method

After the `initializeUI()` method has set up the custom UI, the following actions are executed in `start()`:

* Set up a listener for the onPlayerEnterWorld CodeBlockEvent. When triggered, the Binding for the number of seconds on the timer is set to the value in the Properties panel.
* Set up a listener to receive the TimerEnd event, which is set win or lose. When triggered:
  + `this.async.clearInterval(this.countdownTimerID)` clears the interval set up by the `fctnTimerIntervalAction()` function, which stops the timer.
  + If the timer expired:
    - If the `fctnGameWin()` function has not been called yet, then call it. It is not called a second time.
    - Else:
    - set `booGameOver` to `true`, which initiates ending the game.
* Timer:
  + If the number of seconds in the Properties panel is greater than `0`, then call the `fctnTimerIntervalAction()` function to start the timer.
  + The `onTickAction()` inline function plays the tick sound if it’s been defined.
  + The `onEndAction()` action calls the `fctnGameOver()` function.

#### `fctnGameWin()` and `fctnGameOver()` functions

These two functions are executed when the win state or loss state is reached:

| **State** | **How it occurs** | **Function** |
| --- | --- | --- |
| win | Player enters the Trigger Zone over the button, which emits the TimerEnd event. | `fctnGameWin()`. After timer is stopped, a sound is played and a native UI message is displayed. |
| loss | Timer reaches 0. | `fctnGameOver()`. After timer reaches `0`, a sound is played and a native UI message is displayed. The custom UI is hidden. |

#### Native UI

In the two functions are calls to the native UI. Example:

```
this.world.ui.showPopupForEveryone("Game Over!", 3, this.myPopupOptions);
```

The above displays the Game Over! message for three seconds applying the styling defined in `myPopupOptions`:

```
// configuration, although only some of them are modified for this example.
myPopupOptions: hz.PopupOptions => {
  position: new hz.Vec3(0, -0.5, 0), // default
  fontSize: 18, // default
  fontColor: new hz.Color (0,0,0),
  backgroundColor: new hz.Color (0.26,0.53,0.96), // lightblue = RGB(66,135,245)
  playSound: false,
  showTimer: false,
};
```

The above are all of the available styling options for these kinds of popups.

#### Test

This script can be run without the other one. When this script is run independently:

* The timer starts and count downs.
* When it reaches `0`, the game ends.

### Station10-StopTimer.ts

This script provides a means of stopping the timer. This script must be attached to the Trigger Zone gizmo object.

```
/*
  Station 10a: Non-Interactive Overlay

  This station demonstrates use of the non-interactive Screen Overlay mode for custom UIs. When a custom UI is set to this mode,
  it is displayed as a screen overlay in front of the player, which makes it a useful mechanism for displaying HUD information
  during gameplay.

  In this station, a non-interactive timer is placed in front of the player. The player has a predefined number of seconds to find the
  button in the world and step on it, stopping the timer. Else, the timer runs out, and the player "loses."

  This script attaches to the trigger zone, which when breached, causes the TimerEnd event to emit. The TimerEnd
  event causes the timer to stop running.

*/

import * as hz from 'horizon/core';
import { TimerEnd } from 'Station10-NonInteractiveOverlay'; // imports the event, which is emitted when the player enters the trigger.

class Station10_StopTimer extends hz.Component<typeof Station10_StopTimer> {
  static propsDefinition = {};

  start() {
    this.connectCodeBlockEvent(this.entity, hz.CodeBlockEvents.OnPlayerEnterTrigger, (enteredBy: hz.Player) => {
      this.sendNetworkBroadcastEvent(TimerEnd, {timeMS: -1});
      console.log("Sent TimerEnd event from trigger.")
    })

  }
}
hz.Component.register(Station10_StopTimer);
```

#### Notes

* The `start()` method creates a listener for the onPlayerEnterTrigger CodeBlock event.
* When this CodeBlockEvent fires, the method emits a TimerEnd event, which is subscribed to in the `Station10-NonInteractiveOverlay.ts` script to stop the timer.

## Key Learnings

### Meta Horizon Worlds learnings

#### Build Info overlay

* How to set up a custom UI that is of Screen Overlay type.
* How to display world build information in the custom UI.

#### Timer overlay

How to set up a custom UI in the world and through TypeScript to include:

* How to set up a custom UI that is of Screen Overlay type.
  + Differences between Screen Overlay and default Spatial type custom UIs.

### TypeScript learnings

* How to configure non-interactive screen overlay style properties
* How to create a simple timer and have it surface in the screen overlay.
* How to create a button to stop the timer.
* How to use the native 2D popup control.