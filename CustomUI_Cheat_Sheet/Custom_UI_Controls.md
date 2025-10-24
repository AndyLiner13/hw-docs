# Custom UI Controls

  
## Overview

 Custom UI controls is an extension of custom UI with the Input Mode set to Interactive, Non Blocking. This input mode renders an interactive UI to the screen while still allowing
players to move around, interact with the world and turn the camera. This input mode is primarily designed for creating a set of custom on-screen
...
...
# Custom UI Controls

  
## Overview
...
controls to work alongside or replace the built-in system controls on mobile. ![custom_ui_controls_in_kaiju](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/465167356_579437347927554_7916055051400203269_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=yocpaHg9VGQQ7kNvwGBPl-z&_nc_oc=AdncMR3hZ4is5-wltz-pztsVm9hqyYxHPAotlcRmUOWbNDHHMXNdE-bje1y3Pvxi0hI&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=h9vxZwMEZdf75hk4kV-SpQ&oh=00_AfdNFvO_-y227qc-SFy_wQZvZviFK...
...
# Custom UI Controls
...
## Getting started

 Before you begin, it is recommended you review the following how-to guides:
• [Creating a Custom UI Panel](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/custom-ui/creating-a-custom-ui-panel/)
• [Local Mode Custom UI Scripts](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/custom-ui/local-mode-custom-ui-scripts/)
• [Non-Interactive Custom UI Screen Overlay](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/custom-ui/noninteractive-custom-ui-screen-overlay/)

  
...
...
# Custom UI Controls
...
## Step by step guide

  
### Create the Custom UI Controls entity and script


• Add a custom UI gizmo to your world.
• Change the Display Mode property from Spatial to Screen Overlay.
• Change the Input Mode property from No Interaction to Interactive, Non Blocking.
• Create a new script asset for the custom UI.
• Change the execution mode of the script from Default to Local. Custom controls should use local mode to ensure a rapid response to input
events.

  
### Set up the custom controls UI layout


• Open the TypeScript editor and open the new script asset.
• Write a UI layout with at least one Pressable component.

  
...
...
# Custom UI Controls
...
## Step by step guide
...
### Set ownership of the custom controls entity

 Please refer to [Local Mode Custom UI Scripts](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/custom-ui/local-mode-custom-ui-scripts/) for more detailed instructions on using local mode.
• Create a new script asset and leave it in Default execution mode.
• Create an empty gizmo and assign the script to it.
• Add a prop of type entity to the script and name it something like
“myCustomControls”.
• In the `start()` method (or somewhere you consider suitable for setting ownership of entities,
such as a trigger entity), add the following code: `this.props.myCustomControls.owner.set(this.player)`
• In the Desktop Editor, select the empty gizmo and assign the custom controls
entity as the value for the “myCustomControls” prop.
• Set Preview Device to Mobile.
• Enter preview mode.
• Confirm the custom UI controls appear and the Pressable elements are
interactable.

  
...
...
# Custom UI Controls
...
## Step by step guide
...
### Hiding the system controls

 If you want to completely replace the system controls with your own custom
controls, you'll need to hide the system controls. To do this, call a TypeScript
function at the point when you would like the system controls to be hidden. This
example hides the system controls when the custom UI panel is initialized.  
```
import { PlayerControls } from '@horizon/core';

initializeUI() {
  // Disable the system controls when the custom controls UI is initialized
  PlayerControls.disableSystemControls()
}
```
  
...
...
# Custom UI Controls
...
## Step by step guide
...
### Triggering Player Input Actions

 We have provided two TypeScript functions to trigger the down / up input actions
on the player controls. These functions support the same PlayerInputAction enum
as the [Custom Input API](https://developers.meta.com/horizon-worlds/learn/documentation/create-for-web-and-mobile/typescript-apis-for-mobile/custom-input-api/).  
```
return Pressable({
  children: Text({
    text: "Jump!",
    style: {
      color: 'white',
    },
  }),
  onPress: (player: hz.Player) => PlayerControls.triggerInputActionDown(PlayerInputAction.Jump),
  onRelease: (player: hz.Player) => PlayerControls.triggerInputActionUp(PlayerInputAction.Jump),
  style: {
    position: 'absolute',
    alignItems: 'center',
    backgroundColor: backgroundColor,
    borderRadius: 100,
    height: 200,
    justifyContent: 'center',
    width: 200
  },
})
```
    ...
...
# Custom UI Controls
...
## Step by step guide
...
### Triggering Player Input Actions
...
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
...
...
# Custom UI Controls
...
## Step by step guide
...
### Triggering Player Input Actions
...
[Meta Horizon Creator Program](https://developers.meta.com/horizon-worlds/programs/)

 My Creations
[My Worlds](https://horizon.meta.com/creator/worlds_all/?utm_source=horizon_worlds_creator)
[My Assets](https://horizon.meta.com/creator/assets/?utm_source=horizon_worlds_creator)
[Performance](https://horizon.meta.com/creator/performance/traces/?utm_source=horizon_worlds_creator)

 Privacy & Legal
[Privacy Policy](https://www.meta.com/legal/privacy/policy/)
[Legal](https://www.meta.com/legal/supplemental-terms-of-service/)

 © 2025 Meta
...
...
# Custom UI Controls
...
## Step by step guide

  
### Create the Custom UI Controls entity and script
...
### Set up the custom controls UI layout
...
### Set ownership of the custom controls entity
...
### Hiding the system controls
...
### Triggering Player Input Actions
...
...
# Custom UI Controls
...
## Additional Links
- [Meta home](https://developers.meta.com/horizon-worlds/)
- [Login](https://developers.meta.com/login/?redirect_uri=https%3A%2F%2Fdevelopers.meta.com%2Fhorizon-worlds%2Flearn%2Fdocumentation%2Fdesktop-editor%2Fcustom-ui%2Fcustom-ui-controls%2F)
...
# Custom UI Controls

  
## Overview
...
## Getting started
...
## Step by step guide
...
## Additional Links
...
      Learn
# Custom UI Controls
...
