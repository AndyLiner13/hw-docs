Source: https://developers.meta.com/horizon-worlds/learn/documentation/create-for-web-and-mobile/tools-for-creating-worlds-for-mobile/push-button-interactions

# Push Button Interactions

To create pushable buttons in Meta Horizon Worlds, it’s a common practice to use a Trigger Zone just above the button. When the player puts their hand in the Trigger Zone, it causes the world to behave as if they pressed the button.

This scenario looks like this:

![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452874518_512527161285240_7815018326525079371_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=k0Xi_6NM-d0Q7kNvwGG9JHR&_nc_oc=AdkYlEvvLKbhGYJ0LNn3bQpfn28WSzRtbdzdvIFhVh5mWKoR_Rm6hRrCGkUfTsx0Ffc&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=mem8Uqj6Sytg6pM3ovEsLw&oh=00_AfmIW_NINxEzdNb2v5EWYgba9c4ELMPrlNw1xyP44s4uNw&oe=694BC8CE)

Since web and mobile players don’t directly control their hands, it’s difficult for them to put their avatar within the Trigger Zone (unless they jump on it). To overcome this limitation, you can enable the setting **Selectable in screen mode** on the Trigger Zone:

- Open your creator menu and select **Gizmos**.
- Select **Trigger Zone**.
- Grab your Trigger Zone gizmo and move up on your right thumbstick to select **...Properties**.
- Turn on the toggle next to **Selectable in Screen Mode**.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452576381_512527201285236_2682068290829855911_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=AyeBc6oFivMQ7kNvwHkVGmD&_nc_oc=AdkCz43loMFtlAyww4N0POABGMEh7Z_t2J3AgvFKvrZ_hJfP7O4S30zDpV6xmIxXtso&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=mem8Uqj6Sytg6pM3ovEsLw&oh=00_AfmrIZ1f2pDuD2v5pJo30sVJT7sy5QPlqbjiMsExLaVO1Q&oe=694BD55D) This image is taken from the Desktop Editor, but the same functionality is available in the Properties panel for entities in VR build mode. The Desktop Editor is only available to creators with access to advanced tooling.

The result enables web and mobile players to look towards the Trigger Zone and press **E** on web, or tap the button on mobile, to fire the **OnPlayerEnteredTrigger** event for that Trigger Zone.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452635178_512527147951908_8921893521680369107_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=swYumnjhh4AQ7kNvwEoqFm_&_nc_oc=AdkvrP0aP0pwpsh8CpFehAe_bVdcbApPR1bDO1EVkWgz4popR5TlclMJK5GJ22oze1k&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=mem8Uqj6Sytg6pM3ovEsLw&oh=00_Afkfhsbt8FBOj8_gJACmnJCO51EeJ07v_K3rFQaMmh4eSw&oe=694BD685) This image is taken from the Desktop Editor, but the same functionality is available in the Properties panel for entities in VR build mode. The Desktop Editor is only available to creators with access to advanced tooling.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/474747253_637349498803005_7294516228122331774_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=PkXalQ3Xo1YQ7kNvwFjDZH9&_nc_oc=AdlQSE9tVyzX9b629I4pm5woZ-YCRjPGq1FTbeEIcLSi5gCR_XqWRJx9-IblVkggOzQ&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=mem8Uqj6Sytg6pM3ovEsLw&oh=00_AfnSiLu6LZWanZVzRGRFUGj_VvzG2-MuNv5wQ8jggMrmIQ&oe=694BBD20)**Note:** If you place your **Trigger Zone** inside or behind a collidable object, the collider will prevent web and mobile users from interacting with it. When you set a trigger to **Selectable in Screen Mode**, make sure the trigger zone is bigger than the object, or turn the object’s collidability off.

## Configurable Interaction Range

The interaction range for Trigger Zones can be configured to control how close a player must be to interact with the button. Adjusting this range allows you to fine-tune the user experience for different types of interactions and device inputs.

By increasing the interaction range, you make it easier for players—especially on web and mobile platforms—to trigger the button without needing precise positioning. Conversely, reducing the range can require more deliberate player movement, which may be desirable for certain gameplay mechanics.

The interaction range setting is available in the Properties panel of the Trigger Zone entity, allowing creators to customize the effective distance at which the OnPlayerEnteredTrigger event fires.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/524507471_776044174933536_5008364829056703427_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=EjQejv20QGUQ7kNvwFTKga2&_nc_oc=AdlzdYZM_ZF-njVEtG08Bbmt64as6QrSp8Kiy7gEDGSPlf3jdbCYIufFxBN_jPIlG9c&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=mem8Uqj6Sytg6pM3ovEsLw&oh=00_Afms_JoZzKnNBcIjX3VAHxgzvjq3_msVF8MtF33F_FvN8A&oe=694BC284)