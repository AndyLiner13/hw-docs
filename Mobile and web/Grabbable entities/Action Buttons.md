---
source: https://developers.meta.com/horizon-worlds/learn/documentation/create-for-web-and-mobile/grabbable-entities/action-buttons
---

# [Action Buttons](#action-buttons)

You can use the action icons system to determine which control icons are visible on mobile devices. You can select which icons are visible for grabbable entities by selecting the entity and then choosing the action icons for **Primary Action Icon**, **Secondary Action Icon**, and **Tertiary Action Icon**. Setting action icons for any of these is optional.

To select an action icon, click the **Primary Action Icon**, **Secondary Action Icon**, or **Tertiary Action Icon** dropdown, and then choose the most appropriate icon for the intended action. Selecting **None** removes the control from the screen. You should select **None** if you don’t intend to use Primary, Secondary, or Tertiary actions on the grabbable entity.

| VR Editor                                                                                      | Desktop Editor                                                                                 |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| ![](../../.assets/image/cfb12b3ce8ed5ab7551b76b51091641adcadd552fa1b7a2fc29ed2f5e0cd72e2.png) | ![](../../.assets/image/950abd340626bc8d2750f54296187101313913b9209402adfc7dcb5f38bd3461.png) |

## [Hide Action Buttons by default](#hide-action-buttons-by-default)

This setting is available in the Player Settings in the desktop editor, or within the Player Settings of the Publishing menu when creating in VR.

Hide Action Buttons by Default will change the default visibility of action buttons for mobile players when a grabbable object is held.

- **Toggled on:** Hide the action buttons unless the action icons have been explicitly set in the object properties.
- **Toggle off:** All action buttons will be visible when holding a grabbable object, regardles of whether the action icons have been set.

![action-buttons-default.png](../../.assets/image/c8015538d17d5b02f30559b5bfce5fd1979f3af2116b1d24c19274dd26e47bc4.png)

## [How to handle button presses](#how-to-handle-button-presses)

Each action button is hooked up to a scripting event and a CodeBlock event that fires when the player holds the grabbable entity with the script attached, and then presses the appropriate input action button. You can use script or CodeBlocks to catch these events, and then trigger functionality in the world.

| Action Button | Scripting Event             | Codeblocks               |
| ------------- | --------------------------- | ------------------------ |
| Primary       | ScriptingIndexTriggerAction | When Trigger is pressed  |
| Secondary     | ScriptingButton1Action      | When Button 1 is pressed |
| Tertiary      | ScriptingButton2Action      | When Button 2 is pressed |

#### [How to handle custom inputs](#how-to-handle-custom-inputs)

> [!Note]
>
> Local Script required

As well as the grabbable based action icons (defined above), you can dynamically spawn icons that appear along a bar at the bottom of the screen, which can fire-off any given scripting event.

```typescript
import {
  ButtonIcon,
  ButtonPlacement,
  PlayerControls,
  PlayerInput,
  PlayerInputAction,
} from 'horizon/core';
import * as hz from 'horizon/core';

class SimpleInputAPITest extends hz.Component {
  static propsDefinition = {};

  specialAbilityInput?: PlayerInput;

  start() {
    if (
      PlayerControls.isInputActionSupported(PlayerInputAction.RightSecondary)
    ) {
      // Maps to the F button on desktop
      this.specialAbilityInput = PlayerControls.connectLocalInput(
        PlayerInputAction.RightSecondary,
        ButtonIcon.Special,
        this,
        {preferredButtonPlacement: hz.ButtonPlacement.Center},
      );
      this.specialAbilityInput.registerCallback((action, pressed) => {
        // Fire Special Ability
      });
    }
  }
}

hz.Component.register(SimpleInputAPITest);
```

![](../../.assets/image/2559563fc30dbaa83b857bc5daa22c8c89b18817c9e9c5fa5d80f332e7621e50.png)

In the above screen shot, the icon is hidden when no special ability is available.

```typescript
this.specialAbilityInput?.disconnect();
```

You can summon multiple buttons on this bar to provide a broad range of available inputs for mobile.

## [Available Action Icons](#available-action-icons)

The pool of available icons grows continually. The following table lists examples of the icons that you can select for controls on web and mobile.

| ![](../../.assets/image/6ec1d07a5bcc273df2dfd6c72376d1384c36546199d8f538bd673358217b59bf.png) Ability       | ![](../../.assets/image/a4240370c2ad914877640db9e331d30dc0b28048ac8986d7082422182358d54d.png) Aim          | ![](../../.assets/image/df968a79e2af891e9f06ca2856881d1a9df1375e1cef7463fe9455700d463266.png) Call Overlay | ![](../../.assets/image/488b30b0d1ec12ff24f8471f32de4aa40408ac5635aa4ce352b53946cbc22639.png) Close            | ![](../../.assets/image/9c18eaeea065cd82d160c54bf3d309b9c24d987f30e8945f39c58cd83bc291c4.png) Contract                 | ![](../../.assets/image/feaa1259072287ffab650255be1e70c7c278800a257016afc9a459da4cac60ca.png) Door        | ![](../../.assets/image/fe00f7ed5deab6ee0804623f1c7e76b959354990f3be428bb199b6fac77707f3.png) Drink        |
| ------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| ![](../../.assets/image/9bd2a0b73d70b1beeb4fa534405a61b43bdf3cc8b48274003cc7ccafa6d0589f.png) Drop          | ![](../../.assets/image/defdcd436fab5119a5cffbce4b13b60dd94358a5ce19a80ed53c152f72812102.png) Eat          | ![](../../.assets/image/c54d78684cc21e73dcfd3b4ad614d15202eb2a3564a8b395ef1ae52de960be9f.png) Emotes       | ![](../../.assets/image/36d02877de00952e2764214274f77d7bc3cb3501cde7c1a0bf68ab2797d758bc.png) Exit Full screen | ![](../../.assets/image/e74b2823a1d41113fcf332e46badb553ab4eb6d47f8a2a92b5ad4d41893d730a.png) Exit Meta Horizon Worlds | ![](../../.assets/image/4c30f3b3b9bb133ab2461e406fdaa03a9cda55a6dadaec85938abc30ae8026bd.png) Expand      | ![](../../.assets/image/4b98ba40905504acf1d8b7f06af6f1922b2e0af7c0ef852ab3ad1d9a0532a217.png) Fire         |
| ![](../../.assets/image/09ee9f7c673f0ea6e2a28fd61ce9cc457ba785275223b52a84ad23550d370427.png) Fire Special  | ![](../../.assets/image/634279d2e36069f8614cf6bae351d13f2857114d8972f40b48081f5233f22840.png) Grab         | ![](../../.assets/image/a0b92d1a0f9db402a77681a5ac64771545932758f78c4dc4a2bbfd1b45c14d1e.png) Home         | ![](../../.assets/image/543f9405f4419d078270fb5219d1214b1e91966bd2de8d937ab31e02dc99ccd8.png) Information      | ![](../../.assets/image/126c54c4d0cf0dee286a0fb6b5d169c732fa8cab60cd5ff707b46a19f41a0bb3.png) Inspect                  | ![](../../.assets/image/dadd6c1000194d2e6f6092e30e2110a425afc5281853d8516781faef18122f22.png) Interact    | ![](../../.assets/image/e2c08171fd907d6a7876e3d947a6f92c4996fdcd84c0c2eb9301c71182d9753a.png) Jump         |
| ![](../../.assets/image/8555b6991ddbf534aec1e05e9187c5c60216f97ff20d9b8e43f322dfa2ed4c7c.png) Left Chevron  | ![](../../.assets/image/35165e26d9347e117524a15775872e4ecb2aac51c6486f984ded892d821f2c82.png) Map          | ![](../../.assets/image/92649bfc6af67439d2efce14baf5600635a36f66a2cdeb8367937a699f849191.png) Menu         | ![](../../.assets/image/8ff91804ac33fd350fbf4449815ea4447d16e4fe9f06ee50058b6ce6540e640c.png) Mouse Left       | ![](../../.assets/image/006a1decb99fc8937ad5a6359b7a3b9d46958e31607fa27be90fa744d32413e0.png) Mouse Middle             | ![](../../.assets/image/3e6f7746f15dfd3a9fca9112a0532f0b337c8a801b15869bedd10ffa9a4ac3f3.png) Mouse Right | ![](../../.assets/image/602f461d0b0b4658eb0a4418730a7ec9bd31933f60d0cb0c5b5a2272dbcac9f5.png) Mouse Scroll |
| ![](../../.assets/image/3f23f75355152bedac717fb6284c3c16e31a4cb126317258ce744ddd565b80bc.png) Pause         | ![](../../.assets/image/1948d38f7c1f37e962c7ddf86e2bb97eeb21b18ddb406fd4ee761e60e8e07ce3.png) Ping         | ![](../../.assets/image/b37c75d8d9ed67241bce0afd5077c41301e9cc428190789aac34a26872689610.png) PUI          | ![](../../.assets/image/d462befe37ef3901f5127e59a75337d26face521cfa881e514f871af1ce3d44e.png) Punch            | ![](../../.assets/image/a1a6d92b02df7ad7b6f077a0873308f4a73e105853fb10d04208a7a693f34b7c.png) Purchase                 | ![](../../.assets/image/20aed174d9e8e0bcc0a2af8df0f5afea6ea206cfceddc1938e3f4fe67e648b66.png) Reload      | ![](../../.assets/image/b53d3e4551ff76ca1a7d429c836db5c9756880ed61a4843c5c49df008b426d4e.png) Report Bug   |
| ![](../../.assets/image/119eb1d12fd49645ae91535ac90000de0836191d5248df8a61f3990644a121e6.png) Right Chevron | ![](../../.assets/image/5222a7ee0fe4af42d7971f9c9b9143374d145ea8116b706a6dbc06a0357fa3db.png) Rocket       | ![](../../.assets/image/248d24a29960fd31649c885d15e0351845d76ed6a64e4f39ea6ac530ac8d3013.png) Rocket Jump  | ![](../../.assets/image/d276cdfa667a23ae6516f22e7e86cd56e9194065942fc1818872a84f7afd8dd2.png) Shield           | ![](../../.assets/image/e0dca96ea6f61fe18105afec2c74571f1d0d611d97b626307ef762782617ee54.png) Speak                    | ![](../../.assets/image/3c6acddbc5baf3f049d8a117d25aaab4da1c3ed37d30f49393a417026f55d259.png) Special     | ![](../../.assets/image/d6bcad6540de71382fff663836faab60e10291167efda2a6fdc4fb7fc3cc9a92.png) Sprint       |
| ![](../../.assets/image/0ea2bc373a8fdb36ed464cf6e4d984881e7c6b539fd8717d12b625d7ce7ae3b3.png) Swap          | ![](../../.assets/image/bdaa127a651f7e441cf60ff01e5de93e79b27ba409cdb1e8c6b8c7b08b28f2c6.png) Swing Weapon | ![](../../.assets/image/86de6b19d3ec42ed4360a9b53ffd235540ec483421756e2d1242cf18c7e106df.png) Throw        | ![](../../.assets/image/cf022765afa3808a559d64716317fd4492a844fe7371b014dcdfc9088089e189.png) Unholster        | ![](../../.assets/image/7f0562c98131ddb48672018f35b564f5fcf06aa0bba80c300372818225ba0d87.png) Use                      | ![](../../.assets/image/48d68235f60b0452e8774409e37c24b02399d284724024322c1b21ee4ad35c2e.png) World Chat  |                                                                                                             |

