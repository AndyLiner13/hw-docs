---
source: https://developers.meta.com/horizon-worlds/learn/documentation/create-for-web-and-mobile/grabbable-entities/holster-icon-menu
---

# [Holster Icon Menu](#holster-icon-menu)

![](../../.assets/images/f5631ad22e0fa630e620622d866123e9a984055c040d532f92bebc5cee5b8b6d.png)

The holster icon menu is a menu of UI icons representing items attached to a player’s avatar. Players can use these icons to switch between and equip items. These icons show items that are grabbable entities attached to the player.

**Note**: The holster button to open the holster icon menu will appear if a player has more than one grabbable entity attached.

## [Attaching a grabbable entity to a player](#attaching-a-grabbable-entity-to-a-player)

For an item to appear in the holster icon menu when it is not equipped you must attach that grabbable entity to the player:

```typescript
this.entity
  .as(hz.AttachableEntity)
  .attachToPlayer(player, AttachablePlayerAnchor.Torso);
```

You can combine attaching the entity with a primary input action API so the player can control the attachment process:

```typescript
this.connectCodeBlockEvent(
  this.entity,
  CodeBlockEvents.OnIndexTriggerUp,
  (player: Player) => {
    this.entity
      .as(hz.AttachableEntity)
      .attachToPlayer(player, AttachablePlayerAnchor.Torso);
  },
);
```

## [Configure how an entity appears in the holster icon menu](#configure-how-an-entity-appears-in-the-holster-icon-menu)

You can configure how a grabbable entity will show up in the holster icon menu by setting the **Holster Icon** property in the entity properties panel:

![](../../.assets/images/e75566c5f39ceb260211b322df0fa832b55a42a5b96fa99ecd9a3552e3d331a1.png)

- **Default value:** If you don’t specify a value, the holster icon will show the default slot number. ![](../../.assets/images/81adb23bd7dd2ead5f40df56103d32d5c283fc5ac4a6dbd793368450d159dec1.png)
- [Action icon value:](Action%20Buttons.md) The holster icon will show the selected action icon.
- **None:** The entity will not be included in the holster icon menu.

To ensure an entity won’t appear in the holster icon menu, you can either:

- Select **None** in the **Holster Icon** property on the grabbable entity.
- Set the **Who Can Grab?** property of the grabbable entity to an empty array of Script assignees to make it impossible to grab.

#### [Available Action Icons](#available-action-icons)

The pool of available icons grows continually. The following table lists examples of the icons that you can select for controls on web and mobile.

| ![](../../.assets/images/4b98ba40905504acf1d8b7f06af6f1922b2e0af7c0ef852ab3ad1d9a0532a217.png) Shoot    | ![](../../.assets/images/20aed174d9e8e0bcc0a2af8df0f5afea6ea206cfceddc1938e3f4fe67e648b66.png) Reload    | ![](../../.assets/images/e2c08171fd907d6a7876e3d947a6f92c4996fdcd84c0c2eb9301c71182d9753a.png) Jump    | ![](../../.assets/images/cf022765afa3808a559d64716317fd4492a844fe7371b014dcdfc9088089e189.png) Unholster | ![](../../.assets/images/9bd2a0b73d70b1beeb4fa534405a61b43bdf3cc8b48274003cc7ccafa6d0589f.png) Drop       | ![](../../.assets/images/3c6acddbc5baf3f049d8a117d25aaab4da1c3ed37d30f49393a417026f55d259.png) Special | ![](../../.assets/images/634279d2e36069f8614cf6bae351d13f2857114d8972f40b48081f5233f22840.png) Grab   |
| ------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------- |
| ![](../../.assets/images/dadd6c1000194d2e6f6092e30e2110a425afc5281853d8516781faef18122f22.png) Interact | ![](../../.assets/images/86de6b19d3ec42ed4360a9b53ffd235540ec483421756e2d1242cf18c7e106df.png) Throw     | ![](../../.assets/images/6ec1d07a5bcc273df2dfd6c72376d1384c36546199d8f538bd673358217b59bf.png) Ability | ![](../../.assets/images/5222a7ee0fe4af42d7971f9c9b9143374d145ea8116b706a6dbc06a0357fa3db.png) Rocket    | ![](../../.assets/images/ee6aec24f9ddbce7de823c41b770077d32f796eacead6c9be24cfb39eba6d2b8.png) Airstrike  | ![](../../.assets/images/bdaa127a651f7e441cf60ff01e5de93e79b27ba409cdb1e8c6b8c7b08b28f2c6.png) Swing   | ![](../../.assets/images/0ea2bc373a8fdb36ed464cf6e4d984881e7c6b539fd8717d12b625d7ce7ae3b3.png) Swap   |
| ![](../../.assets/images/126c54c4d0cf0dee286a0fb6b5d169c732fa8cab60cd5ff707b46a19f41a0bb3.png) Inspect  | ![](../../.assets/images/feaa1259072287ffab650255be1e70c7c278800a257016afc9a459da4cac60ca.png) Open Door | ![](../../.assets/images/d276cdfa667a23ae6516f22e7e86cd56e9194065942fc1818872a84f7afd8dd2.png) Shield  | ![](../../.assets/images/a4240370c2ad914877640db9e331d30dc0b28048ac8986d7082422182358d54d.png) Aim       | ![](../../.assets/images/bb61493c04cab4aeafd9fa060b795283911b89f1d1a59adfedb403fbf87b419d.png) Dual Wield | ![](../../.assets/images/d6bcad6540de71382fff663836faab60e10291167efda2a6fdc4fb7fc3cc9a92.png) Sprint  | ![](../../.assets/images/02506dcdd33d3064f84a56f406382b02c306ae5e87691f3bebbceb848f67ef7c.png) Crouch |
| ![](../../.assets/images/defdcd436fab5119a5cffbce4b13b60dd94358a5ce19a80ed53c152f72812102.png) Eat      | ![](../../.assets/images/fe00f7ed5deab6ee0804623f1c7e76b959354990f3be428bb199b6fac77707f3.png) Drink     | ![](../../.assets/images/e0dca96ea6f61fe18105afec2c74571f1d0d611d97b626307ef762782617ee54.png) Speak   | ![](../../.assets/images/a1a6d92b02df7ad7b6f077a0873308f4a73e105853fb10d04208a7a693f34b7c.png) Purchase  | ![](../../.assets/images/4d9ab245551d652b2718a57cf88d6b2f1653d84db42d288d650aa1df60fff1de.png) Place      | ![](../../.assets/images/bd9c9e3d4f2d7e62a3c289ddda8e68672d63c0ee315ecf6c329442f091692abe.png) Heal    |                                                                                                       |

