Source: https://developers.meta.com/horizon-worlds/learn/documentation/create-for-web-and-mobile/tools-for-creating-worlds-for-mobile/push-button-interactions

# Push Button Interactions

To create pushable buttons in Meta Horizon Worlds, it’s a common practice to use a Trigger Zone just above the button. When the player puts their hand in the Trigger Zone, it causes the world to behave as if they pressed the button.

This scenario looks like this:

![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452874518_512527161285240_7815018326525079371_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=kk3ZUgbYqyIQ7kNvwHmavRe&_nc_oc=AdlPiKE8j1aWo_aSuLvDqFahTgfn29sEQnmq0qwcamM4sGi6PDk9fNdcY51luJWLFuc&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=ynYUW4DcXV7J4vsy9gcxAg&oh=00_Afju7-G5KxzoJTqUP4vHKji-dm3wbUN9hoF1REsqb7fFdw&oe=692BEC8E)

Since web and mobile players don’t directly control their hands, it’s difficult for them to put their avatar within the Trigger Zone (unless they jump on it). To overcome this limitation, you can enable the setting **Selectable in screen mode** on the Trigger Zone:

- Open your creator menu and select **Gizmos**.
- Select **Trigger Zone**.
- Grab your Trigger Zone gizmo and move up on your right thumbstick to select **...Properties**.
- Turn on the toggle next to **Selectable in Screen Mode**.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452576381_512527201285236_2682068290829855911_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=O8jzLqVg1q4Q7kNvwF2HBmh&_nc_oc=AdmYpsrHagLEoaqBBcyIV0vJG7nGxLJi0DexlEytf3LFz5_XS_x7vSH1NVAx893TtXU&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=ynYUW4DcXV7J4vsy9gcxAg&oh=00_AfjZvMDUG7o4WIvZePexijS64agqhAqUW3n20ej77vHEbA&oe=692BF91D) This image is taken from the Desktop Editor, but the same functionality is available in the Properties panel for entities in VR build mode. The Desktop Editor is only available to creators with access to advanced tooling.

The result enables web and mobile players to look towards the Trigger Zone and press **E** on web, or tap the button on mobile, to fire the **OnPlayerEnteredTrigger** event for that Trigger Zone.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452635178_512527147951908_8921893521680369107_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=O1UEan6TURoQ7kNvwEXvZRe&_nc_oc=AdkRrO-Yd8mc3DTUtnr-RF2Es4L6VV2CXuDgiOyt-9zx35xhkKaXSZDtt2-U-OGzlcM&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=ynYUW4DcXV7J4vsy9gcxAg&oh=00_AfgbM-xJtqQRzdP3TPoipr2_27xCVPhB6uSaNZ8GFcRqgw&oe=692BFA45) This image is taken from the Desktop Editor, but the same functionality is available in the Properties panel for entities in VR build mode. The Desktop Editor is only available to creators with access to advanced tooling.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/474747253_637349498803005_7294516228122331774_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=G9nKWzyScJYQ7kNvwEkh2wg&_nc_oc=AdlJ1me3X2uaEGhWgmkSYpOoIWlyFM-VGiC2COGNVm-XiHUaFKSDIVjTVcWoq1VJrfk&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=ynYUW4DcXV7J4vsy9gcxAg&oh=00_AfjcNQCDpm9zwLQx2DqUGlUpQ42ozxPNnUxrInpFxR9YBA&oe=692BE0E0)**Note:** If you place your **Trigger Zone** inside or behind a collidable object, the collider will prevent web and mobile users from interacting with it. When you set a trigger to **Selectable in Screen Mode**, make sure the trigger zone is bigger than the object, or turn the object’s collidability off.

## Configurable Interaction Range

The interaction range for Trigger Zones can be configured to control how close a player must be to interact with the button. Adjusting this range allows you to fine-tune the user experience for different types of interactions and device inputs.

By increasing the interaction range, you make it easier for players—especially on web and mobile platforms—to trigger the button without needing precise positioning. Conversely, reducing the range can require more deliberate player movement, which may be desirable for certain gameplay mechanics.

The interaction range setting is available in the Properties panel of the Trigger Zone entity, allowing creators to customize the effective distance at which the OnPlayerEnteredTrigger event fires.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/524507471_776044174933536_5008364829056703427_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=_jtlR-PdIuEQ7kNvwEUeBtV&_nc_oc=AdmIJX0PAIraQY306MyH9aVVOqoRdWIcCpGAkDV3VcH9k8V7LeF5cUV7iQV0oTlJGlI&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=ynYUW4DcXV7J4vsy9gcxAg&oh=00_AfgGB5MF_ncuODUR616GO2C489_6A4G87j3U0i8IdnP9NQ&oe=692BE644)