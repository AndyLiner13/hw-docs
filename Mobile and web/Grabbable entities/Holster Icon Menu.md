Source: https://developers.meta.com/horizon-worlds/learn/documentation/create-for-web-and-mobile/grabbable-entities/holster-icon-menu

# Holster Icon Menu

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/558307674_833836069154346_721373876289883470_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=TewkAfSj2OwQ7kNvwGnWzEQ&_nc_oc=AdmstClewjU4gzHpKhsFxm7ouW_2_hqMzlwQ9ohaw5nkE3D7Yhpm2uSSsX3UPCXT7NY&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=L5SXORrbn-YCKFWwtWr1og&oh=00_AfiRh1EILIfogMZhSHc-adbVGBfGrz4MEt6QCN92mMh4Qg&oe=692FB529)

The holster icon menu is a menu of UI icons representing items attached to a player’s avatar. Players can use these icons to switch between and equip items. These icons show items that are grabbable entities attached to the player.

**Note**: The holster button to open the holster icon menu will appear if a player has more than one grabbable entity attached.

## Attaching a grabbable entity to a player

For an item to appear in the holster icon menu when it is not equipped you must attach that grabbable entity to the player:

```
this.entity
  .as(hz.AttachableEntity)
  .attachToPlayer(player, AttachablePlayerAnchor.Torso);
```

You can combine attaching the entity with a primary input action API so the player can control the attachment process:

```
this.connectCodeBlockEvent(
  this.entity,
  CodeBlockEvents.OnIndexTriggerUp,
  (player: Player) => {
    this.entity
      .as(hz.AttachableEntity)
      .attachToPlayer(player, AttachablePlayerAnchor.Torso);
  },
);
```

You can configure how a grabbable entity will show up in the holster icon menu by setting the **Holster Icon** property in the entity properties panel:

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452586781_512510717953551_1463442642763553743_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=teiDiXcOi9wQ7kNvwG8X7LI&_nc_oc=AdnoSlupAfRoGsmyGsU0A3YwjfIwvXCS0GWKZ04gvBe4qoxpPZUUB989HttbQ-nl8ZQ&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=L5SXORrbn-YCKFWwtWr1og&oh=00_AfgSy6uyn6JxRxQFiJakmQA1Oo9al3nZlUofdqvjf5c_kA&oe=692FACD2)

* **Default value:** If you don’t specify a value, the holster icon will show the default slot number. ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452718392_512510654620224_8780972206080984700_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=MXA_f15TsC8Q7kNvwG42tXv&_nc_oc=AdlKBYg2YZkNkgZ82QyoYacatVWU8E29B9hVMsvvde26APmvQTDSyojmsodWTJEPcBo&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=L5SXORrbn-YCKFWwtWr1og&oh=00_AfjezHz8eGWz-hc_8SqQXHyV_6glfT8kMKjwzxOvEGlkqg&oe=692FAEDD)
* [Action icon value:](/hw-docs/Mobile%20and%20web/Grabbable%20entities/Action%20Buttons.md) The holster icon will show the selected action icon.
* **None:** The entity will not be included in the holster icon menu.

To ensure an entity won’t appear in the holster icon menu, you can either:

* Select **None** in the **Holster Icon** property on the grabbable entity.
* Set the **Who Can Grab?** property of the grabbable entity to an empty array of Script assignees to make it impossible to grab.

#### Available Action Icons

The pool of available icons grows continually. The following table lists examples of the icons that you can select for controls on web and mobile.

| Shoot | Reload | Jump | Unholster | Drop | Special | Grab |
| --- | --- | --- | --- | --- | --- | --- |
| Interact | Throw | Ability | Rocket | Airstrike | Swing | Swap |
| Inspect | Open Door | Shield | Aim | Dual Wield | Sprint | Crouch |
| Eat | Drink | Speak | Purchase | Place | Heal |  |