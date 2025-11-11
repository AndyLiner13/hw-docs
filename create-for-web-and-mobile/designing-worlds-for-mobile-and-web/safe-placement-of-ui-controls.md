Source: https://developers.meta.com/horizon-worlds/learn/documentation/create-for-web-and-mobile/designing-worlds-for-mobile-and-web/safe-placement-of-ui-controls

# Safe Placement of UI Controls

When designing your game’s user interface, consider both the gameplay controls and transient platform UI (such as notifications, NUX prompts, and world chat). These elements can partially or permanently obscure your interface.

The following illustration provides general guidance for where you can place UI, combining both desktop and mobile surfaces:

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/557931283_835743075630312_7296711773413738046_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=y69UcmFcz_8Q7kNvwH7PlnW&_nc_oc=AdmLlulCGtaquC4c4t5zt5q0MwpZNtCbgEndPdLh_JZlQL3uCiNfxXYfhY_QA65ekA8&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=Zt3J3sYA4sMcZRXBVMjJoA&oh=00_AfixY_vvT_aqOuwKUqkdMvGx53uNNRklN3zAThpNvt2GwA&oe=692C0682)*Mobile (@852x393 screen - iPhone 16)*

## Portrait orientation considerations

When designing for portrait orientation on mobile devices, the available screen space and UI placement considerations differ significantly from landscape mode. Portrait orientation typically provides different safe zones due to status bars, notches, and navigation areas.

When testing your world’s UI for portrait orientation:

- Use the [**Preview Configuration**](/hw-docs/desktop-editor/getting-started/preview-mode#setting-the-preview-device) options to ensure safe zones are kept clear to avoid overlapping UI.
- Consider how UI elements stack vertically rather than horizontally in portrait mode.
- Test with different device models to account for various screen aspect ratios and safe areas.

**Note:** You can configure different camera parameters for portrait and landscape orientations using the [spawn point gizmo](/hw-docs/code-blocks-and-gizmos/use-the-spawn-point-gizmo#mobile-camera-options) to optimize the visual experience for each orientation.

* ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452615758_512532801284676_8886395584801346512_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=qUUKjO0G1eAQ7kNvwGXR47_&_nc_oc=AdmPpqjtrSmgJLD768dmUIHV6g9SYU1aDwKZ3BQRnMU04-WUzMRTofTwUB8_7UcTT8M&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=Zt3J3sYA4sMcZRXBVMjJoA&oh=00_AfjcIw_WsBjFx6rF08uYZ-ctOGi56kjlEqxT0jxgrKMTDg&oe=692C0484) Unobstructed.
* ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452883040_512532784618011_112216473924849842_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=qM3uOMWp64UQ7kNvwGrZQ_S&_nc_oc=Adl7BQt2MI0qiunNO7pRBCCMWeH6WIAc_N4fO0emVvO8UQeNz6KxvwUwfSJK0l0P5xY&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=Zt3J3sYA4sMcZRXBVMjJoA&oh=00_AficRSXDiKZ7-5k_ESp-sIWq62sRJ3JPW8JX9eAPf2hpCw&oe=692C0C73) Potentially obstructed.
* ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452665546_512532781284678_1258298437483562209_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=Yfi9nfxB8vcQ7kNvwH4j2cn&_nc_oc=AdlX44wbXb1P0YycfmfBjFz1Mgq05NpzmyORm7aM2EG9ze4jzb0ZvXoeHQ8jqD4raII&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=Zt3J3sYA4sMcZRXBVMjJoA&oh=00_AfgLpIq2FC-wjt-EGzvhMPhjWjgri7eEUMfus33mDuTsrQ&oe=692C092F) Permanently obstructed.

> **Note:** The amount of space will vary depending on the features your world has enabled, how you set up grabbables, and the user’s screen size.

Always test your world on both mobile and desktop, to check for any overlapping or obscured UI.

For a deeper look at why these regions, let’s take a look at each surface with all possible UI states enabled:

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/528040520_782028431001777_6820185301692830714_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=Ij61Ky881OYQ7kNvwG1Uav9&_nc_oc=AdmqWm77xwXew2oSpZDyAL7qEMPRwDJwFueojxdaZCz9KAAvhoihJeJd_9iP6hFDFZ8&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=Zt3J3sYA4sMcZRXBVMjJoA&oh=00_Afj7RgWdgFOm5NZOekWFwjjPZ64uPM1BBMwdTHuBNwH1XQ&oe=692BDF77)*Mobile (@852x393)*

Taking into account the typical usage percentage of each gameplay control and the frequency of each transient UI element, the per-surface safe zones look like this:

![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/527979922_782028447668442_7244985344024777297_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=Eh_0emwj5_cQ7kNvwGxAv6_&_nc_oc=AdnzCX2z7LeSGV42DAReXZQEqquRab4yhsrw46AGrdjrl4MFAkl9dEh9nc3aKeQN-KE&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=Zt3J3sYA4sMcZRXBVMjJoA&oh=00_AfgoC9brIcZpZSndH5h3tdrtbMFD7cUu-Pg3Tb9N9JRlWg&oe=692C01D9)*Mobile (@852x393)*

## Mobile

The most important thing to note for mobile controls is that they are contextual. The number of on-screen buttons is determined by how you set up your grabbables.

For example, if you have a simple world with grabbables that have either one or no actions, then you’ll have more available UI space than a world using complex grabbables, custom input etc.

No held item:

Item with Primary & Secondary actions:

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/526964709_782028444335109_6196025312724401057_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=VIt2CY9Z4iYQ7kNvwGxps7X&_nc_oc=AdmnveHdIMNQGl-_Ix6gSRwJ0d7gkw-86bP5hXOnbbzwePArIuirFgbh9e_iBJkQK0I&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=Zt3J3sYA4sMcZRXBVMjJoA&oh=00_Afjm02OnjRU4Wxhz7FfLUAnYZkGvfV8YLGYdBgVpjU_Ytw&oe=692C0BCB)

Item with Primary, Secondary and Tertiary actions Holstering enabled on world:

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/528034865_782028441001776_5691077705260993484_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=VJpTaD41Hl4Q7kNvwF7xcMF&_nc_oc=Adl-6TcTqNtAsZPnM6rQf-l_K1gbVwm8VvcEhc6MNrd9daUaxEwUU238F0IRRY29_GY&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=Zt3J3sYA4sMcZRXBVMjJoA&oh=00_Afi7eCaBzM254YiTGrTwvHoeC0hwT58osLTZ7KoMVNb7Mg&oe=692C0536)

Item with Primary, Secondary and Tertiary actions Holstering enabled on world Using Custom input:

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/527981935_782028451001775_205883410573939696_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=3GwhtNjspWYQ7kNvwGCLegG&_nc_oc=AdmEfjunaMNjwjg0geP6iiu7R4lyzvg7fOx_CbDlI2QDQbA41Tf1KLUs1aoeUK9Q7hA&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=Zt3J3sYA4sMcZRXBVMjJoA&oh=00_AfgdRqQ2UCdMQ0zFQbhhYyj7zXKCGIvsIS6ODHwyCxP_Zw&oe=692C0453)

## Desktop

Desktop controls are also contextual, but they’re limited to a list anchored in the bottom right portion of the screen.

You generally have more space available on desktop, because the on-screen elements are confined to the top left, top right, and bottom right corners.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/526991907_782028427668444_6750170821704673280_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=M9JhgEx_WT4Q7kNvwFr9RkE&_nc_oc=Adl19wvrXRd9ESukPbtVO-tZ0bgOb74TWBSPsNxl4ObB5CTNh1O7Sk8CytUs38GVCTs&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=Zt3J3sYA4sMcZRXBVMjJoA&oh=00_AfgryXXNIKGA0x09KMQ8BTy0NRiqFmL58A0lXCqan96HYw&oe=692C1049)*Desktop (@1920x1080)*

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/528230183_782028424335111_3068904171470470838_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=jlrCzaU2znYQ7kNvwGi5AmT&_nc_oc=Adl4VArNjAjS1yo9Z8Yu534YqGUTZH6QrHoRlyA-kUBH1kwis94Ncgb0mnVJgxy42dg&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=Zt3J3sYA4sMcZRXBVMjJoA&oh=00_Afi9iL-C9MYPQg1Zibyax4SYZyAH97otMaRQ4MWI_-I8uA&oe=692C0A68)*Desktop (@1920x1080)*

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/527267521_782028434335110_3806974184132376722_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=_zNkSNBeAGwQ7kNvwEo4xFO&_nc_oc=AdkVTtDaJRCbvAtfkqp_oiXobK62d03Jv22XItbABxUJhzMPu-LN7dsumVI0_TTQNfI&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=Zt3J3sYA4sMcZRXBVMjJoA&oh=00_AfjOeNBxxEgPgQI7x3zabdnFnIytHHJyqMSku_X2SYJkkQ&oe=692C04AC)*Desktop (@1920x1080)*