# Interactive Custom UI Screen Overlay

  
## Overview

 An interactive screen overlay is a type of screen overlay that renders in
screen-space on top of the world, just like a non-interactive screen overlay does,
while allowing players to interact with UI elements within the overlay such as
buttons, menu options, and more. Interactive, blocking screen overlays are designed to be used for situations
that require the player's immediate focus and attention. This means they are great
for things like in-game shops, tutorials, and other UI that require the player
to stop what they are doing and interact with the overlay before they can
progress or continue playing. By design, interactive, blocking screen overlays prevent gameplay-related inputs
in order to allow the player to focus fully on the UI, which means this feature
...
...
# Interactive Custom UI Screen Overlay

  
## Overview
...
is not suitable for creating customized on-screen controls. ![interactive overlay.gif](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452910563_512510387953584_8404522134663938617_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=oDXkG2dMNVgQ7kNvwGHkoyA&_nc_oc=AdmFrYdg3axKmA3ZcNK3rimCxIQGLyQwzSPDo3RlJqsxlvMiV3ndPnJ5mqFbTTpn0W0&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=4YIDez8a_S4uSdeokPAarA&oh=00_AfcKkRr7ObgGNtU0AvpApcvs...
...
# Interactive Custom UI Screen Overlay

  
## Overview
...
 Interactive, non-blocking screen overlays are designed to be used as onscreen
inputs that can be fully customized in size and appearance. Interactive,
non-blocking screen overlays do not prevent gameplay-related inputs, and can be used in
combination with the Custom Input API to create custom on-screen controls.  
...
...
# Interactive Custom UI Screen Overlay
...
## Getting Started
...
#### Pressable pseudo code:

  
```
Pressable({
  children: Text({
    text: 'Close',
    style: {
      color: 'white',
    },
  }),
  onClick: () => {
    console.log('Clicked Close');
    this.entity.visible.set(false);
  },
  style: {
    alignItems: 'center',
    backgroundColor: 'red',
    height: 36,
    justifyContent: 'center',
    width: 240,
  },
});
```
  
...
...
# Interactive Custom UI Screen Overlay
...
## Getting Started

 When you set the Display mode property of a Custom UI panel to Screen Overlay, a property named Input mode appears. You can use this property to switch the
mode of the panel from No Interaction to Interactive, Blocking or Interactive, Non-Blocking, which allows the overlay to receive input from the current input pointer (such
...
...
# Interactive Custom UI Screen Overlay
...
## Getting Started
...
as a mouse, touchscreen, or VR controller). ![Image](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/469896061_606730451864910_612662587024664924_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=xCs__--5F7YQ7kNvwFX21Pa&_nc_oc=Adk4SWek-hQSElb1TAOkLrPKJXbggUb5EgXggVWLwkwyEhJof6DKL3p-Z8Mg6hkZUy8&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=4YIDez8a_S4uSdeokPAarA&oh=00_AfcBOx4-lk2G2-bWumT23exQVlR...
...
# Interactive Custom UI Screen Overlay
...
## Getting Started
...
 You can test the interaction by adding a Pressable component to your UI script.  
#### Pressable pseudo code:
...
...
# Interactive Custom UI Screen Overlay
...
## Input behavior when using Interactive, Blocking Screen Overlay
...
### Desktop


• Player controls are locked
• On-screen desktop prompts disappear
• Mouse cursor is released and can be used to interact with any panel marked as Interactive, Blocking

  
### Mobile


• On-screen player controls are hidden and the player cannot move or look around
• System controls such as PUI and Pause remain visible
• Player can interact with any panel marked as Interactive, Blocking using touch input

  
...
...
# Interactive Custom UI Screen Overlay
...
## Input behavior when using Interactive, Blocking Screen Overlay
...
### VR


• The interactive overlay is displayed on a HUD-like panel at a comfortable
distance in front of the player and is locked to the camera
• Player can interact with any panel marked as Interactive, Blocking using the VR controller pointer
• Player controls such as movement are not locked
• The overlay UI on VR will still be occluded by other objects. We cannot always
render it on top, and this is because avatar (and raycasting) need to be on top
of the UI, thus if the UI is on top of everything, so does avatar, which is wrong
because avatar will occlude with the rest of world

  
...
...
# Interactive Custom UI Screen Overlay
...
## Input behavior when using Interactive, Blocking Screen Overlay

 When an interactive, blocking screen overlay is visible on the screen, the
following input behavior occurs:  
### Desktop
...
### Mobile
...
### VR
...
...
# Interactive Custom UI Screen Overlay
...
## Input behaviour when using Interactive, Non-Blocking Screen Overlay
...
### Desktop


• Interactive, non-blocking screen overlay is not currently supported for desktop
players

  
...
...
# Interactive Custom UI Screen Overlay
...
## Input behaviour when using Interactive, Non-Blocking Screen Overlay
...
### Mobile
...
#### VR


• The interactive, non-blocking overlay is not displayed for VR players and the
player controls such as movement are not locked

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
# Interactive Custom UI Screen Overlay
...
## Input behaviour when using Interactive, Non-Blocking Screen Overlay
...
### Mobile
...
#### VR
...
[Meta Horizon Creator Program](https://developers.meta.com/horizon-worlds/programs/)

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
# Interactive Custom UI Screen Overlay
...
## Input behaviour when using Interactive, Non-Blocking Screen Overlay
...
### Mobile


• On-screen player controls are still visible (you can disable the default
onscreen buttons for mobile players with the [Custom Input API](https://developers.meta.com/horizon-worlds/learn/documentation/create-for-web-and-mobile/typescript-apis-for-mobile/custom-input-api))
• Player can interact with any panel marked as Interactive, Non-Blocking using touch input

  
#### VR
...
...
# Interactive Custom UI Screen Overlay
...
## Input behaviour when using Interactive, Non-Blocking Screen Overlay

 When an interactive, non-blocking screen overlay is visible on the screen, the
following behaviour occurs:  
### Desktop
...
### Mobile
...
...
# Interactive Custom UI Screen Overlay
...
## Additional Links
- [Meta home](https://developers.meta.com/horizon-worlds/)
- [Login](https://developers.meta.com/login/?redirect_uri=https%3A%2F%2Fdevelopers.meta.com%2Fhorizon-worlds%2Flearn%2Fdocumentation%2Fdesktop-editor%2Fcustom-ui%2Finteractive-custom-ui-screen-overlay%2F)
...
# Interactive Custom UI Screen Overlay

  
## Overview
...
## Getting Started
...
## Input behavior when using Interactive, Blocking Screen Overlay
...
## Input behaviour when using Interactive, Non-Blocking Screen Overlay
...
## Additional Links
...
      Learn
# Interactive Custom UI Screen Overlay
...
